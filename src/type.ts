interface processFile {
  path: string;
  hotfolderNr: number;
  prevStat: any;
  reCheck: number;
  folder?: string;
}
interface hotfolderSettings {
  notebookId: string;
  extensionsAddAsText: string;
  ignoreFiles: string;
  importTags: string;
  textAsTodo: boolean;
  importNotebook: string;
  intervallFileFinished: number;
  usePolling: boolean;
  pollingIntervall: number;
}

export { processFile, hotfolderSettings };

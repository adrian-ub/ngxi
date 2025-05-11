import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDoorbellIcon],svg[ic-round-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0M12 17.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m3.5-1.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h.5c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class IcRoundDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDoubleArrowIcon],svg[ic-round-double-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.08 11.42l-4.04-5.65c-.34-.48-.89-.77-1.48-.77c-1.49 0-2.35 1.68-1.49 2.89L16 12l-2.93 4.11c-.87 1.21 0 2.89 1.49 2.89c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16"></svg:path><svg:path fill="currentColor" d="M13.08 11.42L9.05 5.77C8.7 5.29 8.15 5 7.56 5C6.07 5 5.2 6.68 6.07 7.89L9 12l-2.93 4.11C5.2 17.32 6.07 19 7.56 19c.59 0 1.15-.29 1.49-.77l4.04-5.65c.24-.35.24-.81-.01-1.16"></svg:path>`,
})
export class IcRoundDoubleArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDownhillSkiingIcon],svg[ic-round-downhill-skiing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-2.72 16.4l.76.27c.62.21 1.27.33 1.96.33a6 6 0 0 0 1.95-.33c.27-.09.57-.02.78.18a.75.75 0 0 1-.3 1.24c-.76.27-1.58.41-2.43.41c-.86 0-1.68-.14-2.45-.41L2.7 17.72a.74.74 0 0 1-.45-.95c.14-.39.57-.6.96-.45l6.19 2.25l1.72-4.44l-3.57-3.73A2 2 0 0 1 8 7.28l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.02 5.02 0 0 0 2.83 3.14l.29-.89a.748.748 0 1 1 1.42.47l-.6 1.85c-.17.52-.72.82-1.24.65A7.03 7.03 0 0 1 13 8.58l-2.53 1.45l2.23 2.55c.49.56.63 1.34.36 2.04l-1.78 4.63l3.09 1.12l2.1-6.44c.46.18.94.31 1.44.41z"></svg:path>`,
})
export class IcRoundDownhillSkiingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDownloadIcon],svg[ic-round-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDownloadDoneIcon],svg[ic-round-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97c.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96z"></svg:path>`,
})
export class IcRoundDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDownloadForOfflineIcon],svg[ic-round-download-for-offline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2m-1 8V7c0-.55.45-1 1-1s1 .45 1 1v3h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.51.2-.71 0l-2.79-2.79a.5.5 0 0 1 .36-.85zm5 7H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundDownloadForOfflineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDownloadingIcon],svg[ic-round-downloading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.33 3.55c-.94-.6-1.99-1.04-3.12-1.3a.998.998 0 0 0-1.21.98c0 .45.3.87.74.97c.91.2 1.77.56 2.53 1.05c.39.25.89.17 1.22-.16c.45-.45.38-1.2-.16-1.54M20.77 11c.64 0 1.13-.59.98-1.21c-.26-1.12-.7-2.17-1.3-3.12c-.34-.54-1.1-.61-1.55-.16c-.32.32-.4.83-.16 1.22c.49.77.85 1.62 1.05 2.53a1 1 0 0 0 .98.74m-1.87 6.49c.45.45 1.21.38 1.55-.15c.6-.94 1.04-1.99 1.3-3.11c.14-.62-.35-1.21-.98-1.21c-.45 0-.87.3-.97.74c-.2.91-.57 1.76-1.05 2.53c-.25.37-.17.88.15 1.2M13 20.77c0 .64.59 1.13 1.21.98c1.12-.26 2.17-.7 3.11-1.3c.54-.34.61-1.1.16-1.55c-.32-.32-.83-.4-1.21-.15c-.76.49-1.61.85-2.53 1.05c-.44.1-.74.51-.74.97M13 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H9.41c-.89 0-1.34 1.08-.71 1.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71zm-2 8.77c0 .64-.59 1.13-1.21.99C5.33 20.75 2 16.77 2 12s3.33-8.75 7.79-9.75a.998.998 0 0 1 1.21.98c0 .46-.31.87-.76.97C6.67 5 4 8.19 4 12s2.67 7 6.24 7.8c.45.1.76.51.76.97"></svg:path>`,
})
export class IcRoundDownloadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDraftsIcon],svg[ic-round-drafts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 8c0-.72-.37-1.35-.94-1.7l-8.04-4.71c-.62-.37-1.4-.37-2.02 0L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-11.05 4.34l-7.2-4.5l7.25-4.25c.62-.37 1.4-.37 2.02 0l7.25 4.25l-7.2 4.5c-.65.4-1.47.4-2.12 0"></svg:path>`,
})
export class IcRoundDraftsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDragHandleIcon],svg[ic-round-drag-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundDragHandleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDragIndicatorIcon],svg[ic-round-drag-indicator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcRoundDragIndicatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDrawIcon],svg[ic-round-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.85 10.39l1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06zm-5.66-2.83l-9.05 9.05a.5.5 0 0 0-.14.35v3.54c0 .28.22.5.5.5h3.54c.13 0 .26-.05.35-.15l9.05-9.05zM19 17.5c0 2.19-2.54 3.5-5 3.5c-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5c0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68M4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1c-1.26 0-1.8.61-1.83.64c-.35.41-.98.46-1.4.12a.99.99 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86z"></svg:path>`,
})
export class IcRoundDrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDriveEtaIcon],svg[ic-round-drive-eta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 19.33 6 18.5V18h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 10l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 10z"></svg:path>`,
})
export class IcRoundDriveEtaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDriveFileMoveIcon],svg[ic-round-drive-file-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 9.79V14H9c-.55 0-1-.45-1-1s.45-1 1-1h3v-1.79c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36"></svg:path>`,
})
export class IcRoundDriveFileMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDriveFileMoveRtlIcon],svg[ic-round-drive-file-move-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8.85 10.15l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79c.31-.32.85-.1.85.35V12h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79a.5.5 0 0 1-.85.36"></svg:path>`,
})
export class IcRoundDriveFileMoveRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDriveFileRenameOutlineIcon],svg[ic-round-drive-file-rename-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class IcRoundDriveFileRenameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDriveFolderUploadIcon],svg[ic-round-drive-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7 7v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.2.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85z"></svg:path>`,
})
export class IcRoundDriveFolderUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDryIcon],svg[ic-round-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.94 11.79c-.6.57-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12c.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61a1.065 1.065 0 0 0-.12-1.23l-.42-.45c-.38-.39-1.01-.41-1.41-.03zm15.05-3.72c0 .52-.42.93-.93.93c-.52 0-.93-.42-.93-.93c.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22a.92.92 0 0 1 .92-.93c.51 0 .93.42.93.93c-.03.67.22 1.33.71 1.86l.07.07c.91.88 1.39 2.02 1.35 3.21m4.01 0c0 .51-.42.93-.94.93s-.93-.42-.93-.93c.03-.67-.22-1.33-.71-1.86l-.07-.06c-.9-.89-1.38-2.03-1.34-3.22c0-.51.42-.93.93-.93s.93.42.93.93c-.03.67.22 1.33.71 1.86l.07.07c.9.88 1.38 2.02 1.35 3.21"></svg:path>`,
})
export class IcRoundDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDryCleaningIcon],svg[ic-round-dry-cleaning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.56 11.36L13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1s.45-1 1-1c.38 0 .72.22.88.53s.51.47.85.47c.74 0 1.26-.79.91-1.44c-.6-1.1-1.86-1.78-3.24-1.51c-1.17.23-2.12 1.2-2.34 2.37c-.29 1.56.61 2.93 1.94 3.4v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21M18.58 14h-1.86c-.35-.6-.98-1-1.72-1H9c-.74 0-1.38.4-1.72 1H5.42c-.46 0-.58-.65-.17-.81l6.75-3l6.75 3c.42.19.28.81-.17.81"></svg:path>`,
})
export class IcRoundDryCleaningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDuoIcon],svg[ic-round-duo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h-8C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2m-3 13l-3-2v2H7V9h7v2l3-2z"></svg:path>`,
})
export class IcRoundDuoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDvrIcon],svg[ic-round-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-2-9H9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1m0 4H9c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1M7 8H5v2h2zm0 4H5v2h2z"></svg:path>`,
})
export class IcRoundDvrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDynamicFeedIcon],svg[ic-round-dynamic-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8c-.55 0-1 .45-1 1v6c0 1.1.9 2 2 2h8c.55 0 1-.45 1-1s-.45-1-1-1H8V9c0-.55-.45-1-1-1"></svg:path><svg:path fill="currentColor" d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8h-8V7h8zM3 12c-.55 0-1 .45-1 1v6c0 1.1.9 2 2 2h8c.55 0 1-.45 1-1s-.45-1-1-1H4v-6c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundDynamicFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundDynamicFormIcon],svg[ic-round-dynamic-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.68 9.71l-3.72 8.19c-.23.49-.96.33-.96-.21V11h-1.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h5.76c.35 0 .6.36.46.69L20 9h1.22c.37 0 .61.38.46.71M15 13v7H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zm-8.75 3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75M13 4v7H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM6.25 7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75"></svg:path>`,
})
export class IcRoundDynamicFormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEMobiledataIcon],svg[ic-round-e-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundEMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEarbudsIcon],svg[ic-round-earbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 3.01C4.44 2.89 3 4.42 3 6.19V16c0 2.76 2.24 5 5 5s5-2.24 5-5V8c0-1.66 1.34-3 3-3s3 1.34 3 3v7h-.83c-1.61 0-3.06 1.18-3.17 2.79A3 3 0 0 0 17.8 21c1.76.12 3.2-1.42 3.2-3.18V8c0-2.76-2.24-5-5-5s-5 2.24-5 5v8c0 1.66-1.34 3-3 3s-3-1.34-3-3V9h.83C7.44 9 8.89 7.82 9 6.21c.11-1.68-1.17-3.1-2.8-3.2"></svg:path>`,
})
export class IcRoundEarbudsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEarbudsBatteryIcon],svg[ic-round-earbuds-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-1v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m-7 2.38C14 7.51 12.49 6 10.62 6S7.25 7.51 7.25 9.38v5.25c0 1.04-.84 1.88-1.88 1.88s-1.87-.85-1.87-1.89v-4.7c.16.05.33.08.5.08c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2v6.62C2 16.49 3.51 18 5.38 18s3.38-1.51 3.38-3.38V9.38c0-1.04.84-1.88 1.88-1.88s1.88.84 1.88 1.88v4.7c-.18-.05-.35-.08-.52-.08c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2z"></svg:path>`,
})
export class IcRoundEarbudsBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEastIcon],svg[ic-round-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.29 5.71a.996.996 0 0 0 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 1 0 1.41 1.41l5.59-5.59a.996.996 0 0 0 0-1.41l-5.6-5.58a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundEastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEcoIcon],svg[ic-round-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 5.97a2.02 2.02 0 0 0-1.92-1.92c-.7-.03-1.37-.05-2.02-.05c-5.03 0-8.52.97-10.46 2.91c-3.68 3.68-3.15 8.9.09 11.9h.01a16 16 0 0 1 7.67-8.8c-.21.18-4.7 3.58-5.51 10.25c1.05.48 2.2.75 3.36.75c2.05 0 4.16-.8 5.92-2.55c2.19-2.2 3.14-6.36 2.86-12.49"></svg:path>`,
})
export class IcRoundEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEdgesensorHighIcon],svg[ic-round-edgesensor-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m22-3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-3 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z"></svg:path>`,
})
export class IcRoundEdgesensorHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEdgesensorLowIcon],svg[ic-round-edgesensor-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m18 3c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1m-5-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z"></svg:path>`,
})
export class IcRoundEdgesensorLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditIcon],svg[ic-round-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></svg:path>`,
})
export class IcRoundEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditAttributesIcon],svg[ic-round-edit-attributes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5m-6.52 3.6L7.6 14.11a.485.485 0 0 1-.7 0l-1.86-1.86c-.2-.2-.2-.51 0-.71s.51-.2.71 0l1.51 1.51l3.16-3.16c.2-.2.51-.2.71 0s.17.51-.02.71"></svg:path>`,
})
export class IcRoundEditAttributesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditCalendarIcon],svg[ic-round-edit-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V3c0-.55.45-1 1-1s1 .45 1 1v1h8V3c0-.55.45-1 1-1s1 .45 1 1v1h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7zm10.13-5.01l.71-.71a.996.996 0 0 0 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71zm-.71.71l-5.01 5.01c-.18.18-.44.29-.7.29H14.5c-.28 0-.5-.22-.5-.5v-1.21c0-.27.11-.52.29-.71l5.01-5.01z"></svg:path>`,
})
export class IcRoundEditCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditLocationIcon],svg[ic-round-edit-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2M9.73 13.5H8.5v-1.44l3.93-3.92l1.43 1.43l-3.77 3.78q-.15.15-.36.15m5.55-5.34l-.7.7l-1.44-1.44l.7-.7a.38.38 0 0 1 .54 0l.9.9c.15.15.15.39 0 .54"></svg:path>`,
})
export class IcRoundEditLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditLocationAltIcon],svg[ic-round-edit-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.54 13H10c-.55 0-1-.45-1-1V8.46c0-.26.11-.52.29-.7l5.32-5.32A8.2 8.2 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.44 6.92 7.33 11.22c.38.33.96.33 1.34 0C17.56 17.12 20 13.37 20 10.2c0-1.01-.16-1.94-.45-2.8l-5.31 5.31c-.18.18-.44.29-.7.29"></svg:path><svg:path fill="currentColor" d="M11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zm9.71-9L20 1.29a.996.996 0 0 0-1.41 0l-.72.72l2.12 2.12l.72-.72a.996.996 0 0 0 0-1.41"></svg:path>`,
})
export class IcRoundEditLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditNoteIcon],svg[ic-round-edit-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1M3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1m8.01-2.13l.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71l-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16z"></svg:path>`,
})
export class IcRoundEditNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditNotificationsIcon],svg[ic-round-edit-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.58 6.25l1.77 1.77l-4.84 4.84a.5.5 0 0 1-.35.14H13.1c-.28 0-.5-.22-.5-.5v-1.06c0-.13.05-.26.15-.35zm3.27-.44l-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71M20 18c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09l-4.52 4.52c-.38.38-.59.88-.59 1.41V13c0 1.1.9 2 2 2h1.77c.53 0 1.04-.21 1.41-.59L18 12.2V17h1c.55 0 1 .45 1 1m-10 2h4c0 1.1-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class IcRoundEditNotificationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditOffIcon],svg[ic-round-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 3.51a.996.996 0 0 0 0 1.41l6.61 6.61l-5.56 5.57q-.15.15-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15l5.56-5.56l6.61 6.61a.996.996 0 1 0 1.41-1.41L3.52 3.51c-.4-.39-1.03-.39-1.42 0m18.61 3.53a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75zm-9.175 1.67l2.517-2.518L17.8 9.94l-2.517 2.517z"></svg:path>`,
})
export class IcRoundEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEditRoadIcon],svg[ic-round-edit-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4c-.55 0-1 .45-1 1v6.9l2-2V5c0-.55-.45-1-1-1M5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1m6-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m11.56-7.41l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73v2.77c0 .28.22.5.5.5h2.77l5.29-5.29c.59-.59.59-1.54 0-2.12m-5.98 5.86h-1.03v-1.03L19 13.97L20.03 15z"></svg:path>`,
})
export class IcRoundEditRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEggIcon],svg[ic-round-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11m1 15c-3 0-5-1.99-5-5c0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEggAltIcon],svg[ic-round-egg-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52S6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02C22 12 21.01 11 19 9m-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"></svg:path>`,
})
export class IcRoundEggAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEjectIcon],svg[ic-round-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m5.17-10.75l-4.8 7.2c-.45.66.03 1.55.83 1.55h9.6c.8 0 1.28-.89.83-1.55l-4.8-7.2a.99.99 0 0 0-1.66 0"></svg:path>`,
})
export class IcRoundEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElderlyIcon],svg[ic-round-elderly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3.5c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m7.03 7.5c-1.57.01-2.94-.9-3.6-2.21l-.79-1.67c-.17-.35-.44-.65-.8-.85a2 2 0 0 0-1.94-.03v-.01l-4.39 2.5C6.39 9.08 6 9.74 6 10.46V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85C9.18 10.71 9 11.85 9 13v5.33L7 21c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L13 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4a6.02 6.02 0 0 0 3.51 2.52v.2c0 .28.22.5.5.5s.49-.22.49-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.82-.66-1.51-1.47-1.5"></svg:path>`,
})
export class IcRoundElderlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElderlyWomanIcon],svg[ic-round-elderly-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.52 11c-1.57 0-2.94-.9-3.6-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6C8.72 6 6 16.69 6 19h2.5L7 21c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2L11 19h2v3c0 .55.45 1 1 1s1-.45 1-1v-2.71c0-.22-.04-.43-.1-.64L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81V13c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.79-.62-1.5-1.48-1.5M11.6 2.91c-.06.19-.1.38-.1.59c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2c-.21 0-.4.04-.59.1c-.15-.35-.5-.6-.91-.6c-.55 0-1 .45-1 1c0 .41.25.76.6.91"></svg:path>`,
})
export class IcRoundElderlyWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricBikeIcon],svg[ic-round-electric-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-.82l-1.7-4.68A2.01 2.01 0 0 0 14.6 1H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 6.87 0 9.2 0 12s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99c2.8.13 5.25-2.19 5.25-5C24 9.2 21.8 7 19 7M6 13h1.82c-.42 1.23-1.6 2.08-3.02 1.99c-1.49-.09-2.73-1.35-2.8-2.85C1.93 10.39 3.27 9 5 9c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1m8.1-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.78 4c-1.54-.06-2.84-1.37-2.88-2.92c-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6s.79-.76.6-1.28l-.63-1.73l.01-.01A2.97 2.97 0 0 1 22 12c0 1.72-1.38 3.06-3.12 3M11 20H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class IcRoundElectricBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricBoltIcon],svg[ic-round-electric-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.69 2.21L4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01c.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02"></svg:path>`,
})
export class IcRoundElectricBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricCarIcon],svg[ic-round-electric-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3.11 7.68c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 16.33 6 15.5V15h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5V8.34c0-.22-.04-.45-.11-.66zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12m11 0c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 7l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 7zm2 13h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcRoundElectricCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricMeterIcon],svg[ic-round-electric-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.73 2C7.05 2.14 3.15 6.03 3 10.71c-.13 4.04 2.42 7.5 6 8.77V21c0 .55.45 1 1 1s1-.45 1-1v-1.06a8.3 8.3 0 0 0 2 0V21c0 .55.45 1 1 1s1-.45 1-1v-1.53c3.49-1.24 6-4.57 6-8.47c0-5.05-4.18-9.15-9.27-9m1.81 12.71L12 16.25c-.41.41-1.09.41-1.5 0s-.41-1.09 0-1.5l.5-.5l-.54-.54a.996.996 0 0 1 0-1.41L12 10.75c.41-.41 1.09-.41 1.5 0s.41 1.09 0 1.5l-.5.5l.54.54c.39.39.39 1.03 0 1.42M15 9H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundElectricMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricMopedIcon],svg[ic-round-electric-moped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L13.52 12H10V8c0-.55-.45-1-1-1H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 8.35zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M9 4H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1m10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcRoundElectricMopedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricRickshawIcon],svg[ic-round-electric-rickshaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37a2.996 2.996 0 0 0 5.82-1c-.01-1.3-.85-2.4-2.01-2.82M18.4 9H16V6.12zM4 5h3v4H3V6c0-.55.45-1 1-1m2 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H9V5h4c.55 0 1 .45 1 1v7zm11 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z"></svg:path>`,
})
export class IcRoundElectricRickshawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricScooterIcon],svg[ic-round-electric-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 1H13c-.55 0-1 .45-1 1s.45 1 1 1h2.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"></svg:path>`,
})
export class IcRoundElectricScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElectricalServicesIcon],svg[ic-round-electrical-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1m-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1m-4-5h-2c-1.1 0-2 .9-2 2h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2"></svg:path>`,
})
export class IcRoundElectricalServicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundElevatorIcon],svg[ic-round-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m2.5 7c0 .55-.45 1-1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c-.55 0-1-.45-1-1v-1.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2zm6.52.76l-1.6 2.56c-.2.31-.65.31-.85 0l-1.6-2.56c-.2-.33.04-.76.43-.76h3.2c.39 0 .63.43.42.76M17.1 11h-3.2c-.39 0-.63-.43-.42-.77l1.6-2.56c.2-.31.65-.31.85 0l1.6 2.56c.2.34-.04.77-.43.77"></svg:path>`,
})
export class IcRoundElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmailIcon],svg[ic-round-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"></svg:path>`,
})
export class IcRoundEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmergencyIcon],svg[ic-round-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.29 8.37l-1-1.73a1.01 1.01 0 0 0-1.37-.37L14 8.54V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.54L6.07 6.27a.993.993 0 0 0-1.36.36l-1 1.73c-.28.48-.12 1.1.36 1.37L8 12l-3.93 2.27c-.48.28-.64.89-.37 1.37l1 1.73c.28.48.89.64 1.37.37L10 15.46V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4.54l3.93 2.27c.48.28 1.09.11 1.37-.37l1-1.73c.28-.48.11-1.09-.37-1.37L16 12l3.93-2.27c.48-.27.64-.89.36-1.36"></svg:path>`,
})
export class IcRoundEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmergencyRecordingIcon],svg[ic-round-emergency-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l3.15 3.13c.31.32.85.09.85-.35V7.7c0-.44-.54-.67-.85-.35zm-3.5 4.12c-.28.48-.89.64-1.37.37L11 13.73V16c0 .55-.45 1-1 1s-1-.45-1-1v-2.27l-2.13 1.23c-.48.28-1.09.11-1.37-.37s-.11-1.09.37-1.37L8 12l-2.13-1.23c-.48-.28-.65-.89-.37-1.37s.89-.64 1.37-.37L9 10.27V8c0-.55.45-1 1-1s1 .45 1 1v2.27l2.13-1.23c.48-.28 1.09-.11 1.37.37s.11 1.09-.37 1.37L12 12l2.13 1.23c.48.28.65.89.37 1.37"></svg:path>`,
})
export class IcRoundEmergencyRecordingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmergencyShareIcon],svg[ic-round-emergency-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-3.15 0-6 2.41-6 6.15c0 2.35 1.78 5.11 5.34 8.27c.37.33.95.33 1.33 0C16.22 20.25 18 17.5 18 15.15C18 11.41 15.15 9 12 9m0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.18-9.68c-.35.35-.89.38-1.3.09C14.07 6.34 13.07 6 12 6s-2.07.34-2.88.91c-.41.28-.95.26-1.3-.09c-.43-.43-.39-1.15.09-1.5C9.06 4.49 10.48 4 12 4s2.94.49 4.09 1.32c.49.35.52 1.07.09 1.5M4.97 3.97c-.42-.43-.38-1.12.08-1.5C6.95.93 9.37 0 12.01 0s5.06.93 6.95 2.48c.46.38.5 1.07.08 1.49c-.36.36-.93.39-1.32.07a9.03 9.03 0 0 0-11.43 0c-.39.32-.96.28-1.32-.07"></svg:path>`,
})
export class IcRoundEmergencyShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiEmotionsIcon],svg[ic-round-emoji-emotions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8m8.21 6.72C15.8 16.67 14.04 18 12 18s-3.8-1.33-4.71-3.28c-.16-.33.08-.72.45-.72h8.52c.37 0 .61.39.45.72M15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundEmojiEmotionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiEventsIcon],svg[ic-round-emoji-events-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-2V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"></svg:path>`,
})
export class IcRoundEmojiEventsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiFlagsIcon],svg[ic-round-emoji-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-5l-.72-1.45c-.17-.34-.52-.55-.9-.55H7V5.72c.6-.34 1-.98 1-1.72c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V20c0 .55.45 1 1 1s1-.45 1-1v-3h5l.72 1.45a1 1 0 0 0 .89.55H19c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1m-1 8h-4l-1-2H7V9h5l1 2h5z"></svg:path>`,
})
export class IcRoundEmojiFlagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiFoodBeverageIcon],svg[ic-round-emoji-food-beverage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1m1-16H9v2.4l1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V7.24c0-.15.07-.3.19-.39L8 5.4V3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2z"></svg:path>`,
})
export class IcRoundEmojiFoodBeverageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiNatureIcon],svg[ic-round-emoji-nature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.94 4.88A1.32 1.32 0 0 0 20.68 4H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88c-.19.56.04 1.17.56 1.48l.87.52l-.4 1.24c-.23.58-.04 1.25.45 1.62c.23.17.51.26.78.26c.31 0 .61-.11.86-.32l.81-.7l.81.7c.25.21.55.32.86.32c.27 0 .55-.09.78-.26c.5-.37.68-1.04.45-1.62l-.39-1.24l.87-.52c.51-.31.74-.92.56-1.48M18 7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-2.5 5h-1.09A3.87 3.87 0 0 0 12 9.59V8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.88c-.11-.01-.23-.03-.34-.03c-1.02 0-2.05.39-2.83 1.17c-.16.16-.3.34-.43.53L6 10.52a3.01 3.01 0 0 0-3.83 1.82c-.27.75-.23 1.57.12 2.29c.23.48.58.87 1 1.16c-.38 1.35-.06 2.85 1 3.91a3.98 3.98 0 0 0 3.91 1c.29.42.68.77 1.16 1q.63.3 1.29.3c.34 0 .68-.06 1.01-.17a3.007 3.007 0 0 0 1.82-3.85l-.52-1.37c.18-.13.36-.27.53-.43c.87-.87 1.24-2.04 1.14-3.17h.88c.28 0 .5-.22.5-.5a.51.51 0 0 0-.51-.51M4.67 14.29c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69m6.32 5.65c-.25.09-.52.08-.76-.04a1 1 0 0 1-.51-.57c-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28m1.21-5.34l-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12a1 1 0 0 0-.07-.11l-.09-.09l-.09-.09c-.03-.03-.07-.05-.11-.07s-.07-.05-.12-.06c-.01 0-.02-.01-.03-.02l-1.6-.6a1.966 1.966 0 0 1 2.67.13c.73.73.77 1.88.13 2.67"></svg:path>`,
})
export class IcRoundEmojiNatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiObjectsIcon],svg[ic-round-emoji-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-.46 0-.93.04-1.4.14c-2.76.53-4.96 2.76-5.48 5.52c-.48 2.61.48 5.01 2.22 6.56c.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.96 6.96 0 0 0 19 10c0-3.87-3.13-7-7-7m.5 11h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62l.71.71l-1.83 1.83zm1 5c-.01 0-.02-.01-.03-.01V19h-2.94v-.01c-.01 0-.02.01-.03.01c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.01 0 .02.01.03.01V18h2.94v.01c.01 0 .02-.01.03-.01c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class IcRoundEmojiObjectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiPeopleIcon],svg[ic-round-emoji-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.02 5.02 0 0 1-4.92-4.15A1 1 0 0 0 5.09 2c-.61 0-1.09.54-1 1.14A7.04 7.04 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41z"></svg:path>`,
})
export class IcRoundEmojiPeopleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiSymbolsIcon],svg[ic-round-emoji-symbols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1m0-3H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m10.89 11.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41"></svg:path><svg:circle cx="14.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.5 11A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5m-5.05 7.09a.996.996 0 1 0-1.41-1.41l-.71.71l-.71-.71l.35-.35c.98-.98.98-2.56 0-3.54a2.5 2.5 0 0 0-1.77-.73a2.499 2.499 0 0 0-1.77 4.27l.35.35l-1.06 1.06c-.98.98-.98 2.56 0 3.54c.5.48 1.14.72 1.78.72s1.28-.24 1.77-.73l1.06-1.06l.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71zm-4.6-3.89c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35l-.35-.36c-.12-.12-.15-.26-.15-.35s.03-.23.15-.35m0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15S5 19.59 5 19.5s.03-.23.15-.35l1.06-1.06l.71.71z"></svg:path>`,
})
export class IcRoundEmojiSymbolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEmojiTransportationIcon],svg[ic-round-emoji-transportation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.99 14.77l-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01zm-10.38-1.43l.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66m.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path><svg:path fill="currentColor" d="M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5"></svg:path><svg:path fill="currentColor" d="M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z"></svg:path>`,
})
export class IcRoundEmojiTransportationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEnergySavingsLeafIcon],svg[ic-round-energy-savings-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61l-1.68 1.68A.996.996 0 1 0 4.7 20.7l1.68-1.68A8.96 8.96 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V5c0-1.1-.9-2-2-2zm3.83 9.26l-5.16 4.63c-.16.15-.41.14-.56-.01a.4.4 0 0 1-.04-.52l2.44-3.33l-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01c.14.14.16.36.04.52l-2.44 3.33l4.05.4c.45.04.63.59.3.89"></svg:path>`,
})
export class IcRoundEnergySavingsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEngineeringIcon],svg[ic-round-engineering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4M4.74 9h8.53c.27 0 .49-.22.49-.49v-.02a.49.49 0 0 0-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26a.49.49 0 0 0-.49.49v.03c0 .26.22.48.49.48M9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3m12.98-6.77l.93-.83l-.75-1.3l-1.19.39c-.14-.11-.3-.2-.47-.27L20.25 3h-1.5l-.25 1.22q-.255.105-.48.27l-1.18-.39l-.75 1.3l.93.83c-.02.17-.02.35 0 .52l-.93.85l.75 1.3l1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38l.75-1.3l-.93-.85c.03-.19.02-.36.01-.53M19.5 7.75a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m-.1 3.04l-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28l-.54.93l.66.59c-.01.13-.01.25 0 .37l-.66.61l.54.93l.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27l.54-.93l-.66-.61c.01-.13.01-.25 0-.37l.66-.59zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89s.89.4.89.89s-.4.89-.89.89"></svg:path>`,
})
export class IcRoundEngineeringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEnhancedEncryptionIcon],svg[ic-round-enhanced-encryption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9zM15 16h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundEnhancedEncryptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEqualizerIcon],svg[ic-round-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2m-6 0c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2m10-9v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2"></svg:path>`,
})
export class IcRoundEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEqualsIcon],svg[ic-round-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.998H6a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2m0 6H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcRoundEqualsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundErrorIcon],svg[ic-round-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"></svg:path>`,
})
export class IcRoundErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundErrorOutlineIcon],svg[ic-round-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1m-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m1-3h-2v-2h2z"></svg:path>`,
})
export class IcRoundErrorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEscalatorIcon],svg[ic-round-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 6h-1.7l-4.71 8.49c-.18.31-.52.51-.88.51H7c-.83 0-1.5-.67-1.5-1.5S6.17 15 7 15h1.7l4.71-8.49c.18-.31.52-.51.88-.51H17c.83 0 1.5.67 1.5 1.5S17.83 9 17 9"></svg:path>`,
})
export class IcRoundEscalatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEscalatorWarningIcon],svg[ic-round-escalator-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5m3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h.5v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-9.39l2.24 3.89c.18.31.51.5.87.5h1.1c.33 0 .63-.16.82-.43l.47-.67V21c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4c.55 0 1-.45 1-1v-2.5c0-.82-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundEscalatorWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEuroIcon],svg[ic-round-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.5A6.48 6.48 0 0 1 9.24 15h5.14c.38 0 .73-.21.89-.55c.33-.66-.15-1.45-.89-1.45h-5.8c-.05-.33-.08-.66-.08-1s.03-.67.08-1h5.8c.38 0 .73-.21.89-.55A.994.994 0 0 0 14.38 9H9.24A6.49 6.49 0 0 1 15 5.5c1.25 0 2.42.36 3.42.97c.5.31 1.15.26 1.57-.16c.58-.58.45-1.53-.25-1.96A9.03 9.03 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6h-2.9c-.38 0-.73.21-.9.55c-.33.67.15 1.45.9 1.45h2.44a8.3 8.3 0 0 0 0 2H3.62c-.38 0-.73.21-.89.55c-.34.67.14 1.45.89 1.45h2.9c1.24 3.49 4.56 6 8.48 6c1.74 0 3.36-.49 4.74-1.35c.69-.43.82-1.39.24-1.97c-.42-.42-1.07-.47-1.57-.15c-.99.62-2.15.97-3.41.97"></svg:path>`,
})
export class IcRoundEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEuroSymbolIcon],svg[ic-round-euro-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18.5A6.48 6.48 0 0 1 9.24 15H14c.55 0 1-.45 1-1s-.45-1-1-1H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H14c.55 0 1-.45 1-1s-.45-1-1-1H9.24A6.49 6.49 0 0 1 15 5.5c1.25 0 2.42.36 3.42.97c.5.31 1.15.26 1.57-.16c.58-.58.45-1.53-.25-1.96A9.03 9.03 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H4c-.55 0-1 .45-1 1s.45 1 1 1h2.06a8.3 8.3 0 0 0 0 2H4c-.55 0-1 .45-1 1s.45 1 1 1h2.52c1.24 3.49 4.56 6 8.48 6c1.74 0 3.36-.49 4.74-1.35c.69-.43.82-1.39.24-1.97c-.42-.42-1.07-.47-1.57-.15c-.99.62-2.15.97-3.41.97"></svg:path>`,
})
export class IcRoundEuroSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEvStationIcon],svg[ic-round-ev-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 7.23l.01-.01l-3.19-3.19a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71c.16 1.1 1.1 1.99 2.2 2.11c.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-.69-.28-1.32-.73-1.77M18 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M8 16.12V13.5H6.83a.5.5 0 0 1-.44-.74l2.67-5c.24-.45.94-.28.94.24v3h1.14a.5.5 0 0 1 .43.75l-2.64 4.62c-.25.44-.93.26-.93-.25"></svg:path>`,
})
export class IcRoundEvStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventIcon],svg[ic-round-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1m2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventAvailableIcon],svg[ic-round-event-available-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.53a.754.754 0 0 0-1.06 0l-4.35 4.35L9 13.29a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.94 1.94c.39.39 1.02.39 1.41 0l4.7-4.7c.3-.29.3-.77.01-1.06M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundEventAvailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventBusyIcon],svg[ic-round-event-busy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.84 16.47l1.91-1.91l1.91 1.91c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.91-1.91l1.91-1.91c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.91 1.91l-1.91-1.91a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.91 1.91l-1.91 1.91c-.29.29-.29.77 0 1.06s.77.29 1.06 0M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundEventBusyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventNoteIcon],svg[ic-round-event-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m3-7h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1m-5-5H8c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundEventNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventRepeatIcon],svg[ic-round-event-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V10h14v2zm-5.87 8c-.55 0-.91.56-.68 1.06A4.99 4.99 0 0 0 19 24c2.76 0 5-2.24 5-5s-2.24-5-5-5c-1.36 0-2.6.55-3.5 1.43v-.68c0-.41-.34-.75-.75-.75s-.75.34-.75.75V17c0 .55.45 1 1 1h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.7c.63-.62 1.5-1 2.45-1c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.42 0-2.64-.85-3.19-2.06a.75.75 0 0 0-.68-.44"></svg:path>`,
})
export class IcRoundEventRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundEventSeatIcon],svg[ic-round-event-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21c.83 0 1.5-.67 1.5-1.5V18h10v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2.5c0 .83.67 1.5 1.5 1.5M20 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1M3 10h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1m14 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcRoundEventSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExitToAppIcon],svg[ic-round-exit-to-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59a.996.996 0 0 0 0-1.41L12.2 7.7a.996.996 0 1 0-1.41 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41M19 3H5a2 2 0 0 0-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundExitToAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExpandIcon],svg[ic-round-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1M5 2h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 7h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 8.15a.5.5 0 0 0 .36.85H11v6H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.35-.85H13z"></svg:path>`,
})
export class IcRoundExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExpandCircleDownIcon],svg[ic-round-expand-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3.79 9.71l-3.08 3.08c-.39.39-1.02.39-1.42 0l-3.08-3.08c-.39-.39-.39-1.03 0-1.42a.996.996 0 0 1 1.41 0L12 12.67l2.38-2.38a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42"></svg:path>`,
})
export class IcRoundExpandCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExpandLessIcon],svg[ic-round-expand-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 8.71L6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundExpandLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExpandMoreIcon],svg[ic-round-expand-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0"></svg:path>`,
})
export class IcRoundExpandMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExplicitIcon],svg[ic-round-explicit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 6h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v2h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundExplicitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExploreIcon],svg[ic-round-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1s1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m2.19 12.19L6 18l3.81-8.19L18 6z"></svg:path>`,
})
export class IcRoundExploreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExploreOffIcon],svg[ic-round-explore-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 6l-2.91 6.26l5.25 5.25A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10c-2.04 0-3.93.61-5.51 1.66l5.25 5.25zM2.81 5.64l.85.85c-1.37 2.07-2 4.68-1.48 7.45c.75 3.95 3.92 7.13 7.88 7.88c2.77.52 5.38-.1 7.45-1.48l.85.85a.996.996 0 1 0 1.41-1.41L4.22 4.22a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42m6.1 6.1l3.35 3.35L6 18z"></svg:path>`,
})
export class IcRoundExploreOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposureIcon],svg[ic-round-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M6.75 7h3.5c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75S6.34 7 6.75 7M18 19H5L19 5v13c0 .55-.45 1-1 1m-3.5-3v1.25c0 .41.34.75.75.75s.75-.34.75-.75V16h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75z"></svg:path>`,
})
export class IcRoundExposureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposureNeg1Icon],svg[ic-round-exposure-neg-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1m15 6h-2V7.38L14 8.4V6.7L18.7 5h.3z"></svg:path>`,
})
export class IcRoundExposureNeg1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposureNeg2Icon],svg[ic-round-exposure-neg-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18s.59-.78.82-1.17s.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.7 5.7 0 0 0 16.47 5c-.69 0-1.31.11-1.85.32s-1 .51-1.36.88c-.37.37-.65.8-.84 1.3c-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87c.09-.29.23-.54.4-.75c.18-.21.41-.37.68-.49s.6-.18.96-.18q.465 0 .81.15c.345.15.43.25.59.43s.28.4.37.65c.08.25.13.52.13.81c0 .22-.03.43-.08.65c-.06.22-.15.45-.29.7s-.32.53-.56.83c-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71zM2 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundExposureNeg2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposurePlus1Icon],svg[ic-round-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m11 11h-2V7.38L15 8.4V6.7L19.7 5h.3z"></svg:path>`,
})
export class IcRoundExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposurePlus2Icon],svg[ic-round-exposure-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18s.59-.78.82-1.17s.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46s-.44-.81-.78-1.11c-.34-.31-.77-.54-1.26-.71A5.7 5.7 0 0 0 17.47 5c-.69 0-1.31.11-1.85.32s-1 .51-1.36.88c-.37.37-.65.8-.84 1.3c-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87c.09-.29.23-.54.4-.75c.18-.21.41-.37.68-.49s.6-.18.96-.18q.465 0 .81.15c.345.15.43.25.59.43s.28.4.37.65c.08.25.13.52.13.81c0 .22-.03.43-.08.65c-.06.22-.15.45-.29.7s-.32.53-.56.83c-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71zM7 7c-.55 0-1 .45-1 1v3H3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1H8V8c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundExposurePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExposureZeroIcon],svg[ic-round-exposure-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.14 12.5q0 1.5-.3 2.55c-.3 1.05-.48 1.27-.83 1.7c-.36.44-.79.75-1.3.95s-1.07.3-1.7.3c-.62 0-1.18-.1-1.69-.3s-.95-.51-1.31-.95s-.65-1.01-.85-1.7q-.3-1.05-.3-2.55v-2.04q0-1.5.3-2.55c.2-.7.48-1.26.84-1.69s.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29s.95.5 1.31.93s.64.99.84 1.69s.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62c-.09-.44-.22-.79-.4-1.06c-.17-.27-.39-.46-.64-.58c-.25-.13-.54-.19-.86-.19s-.61.06-.86.18s-.47.31-.64.58s-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62c.09.45.23.81.4 1.09s.39.48.64.61s.54.19.87.19s.62-.06.87-.19s.46-.33.63-.61s.3-.64.39-1.09s.13-.99.13-1.62v-2.66z"></svg:path>`,
})
export class IcRoundExposureZeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExtensionIcon],svg[ic-round-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class IcRoundExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundExtensionOffIcon],svg[ic-round-extension-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.49 21.9a.996.996 0 0 1-1.41 0l-.92-.92c-.06 0-.11.02-.16.02h-3.8c0-2.71-2.16-3-2.7-3s-2.7.29-2.7 3H5c-1.1 0-2-.9-2-2v-3.8c2.71 0 3-2.16 3-2.7s-.3-2.7-2.99-2.7V6c0-.05.02-.09.02-.14l-.93-.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41M20 17.17V15a2.5 2.5 0 0 0 0-5V6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H6.83z"></svg:path>`,
})
export class IcRoundExtensionOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFaceIcon],svg[ic-round-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 13a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M15 11.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2s10 4.48 10 10m-2 0c0-.78-.12-1.53-.33-2.24c-.7.15-1.42.24-2.17.24a10 10 0 0 1-7.76-3.69A10.02 10.02 0 0 1 4 11.86c.01.04 0 .09 0 .14c0 4.41 3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class IcRoundFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFace2Icon],svg[ic-round-face-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6q-.39 0-.78.06a5.98 5.98 0 0 0-10.44 0Q6.39 3 6 3C2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04A6 6 0 0 0 0 18c0 3.31 2.69 6 6 6c1.39 0 2.67-.48 3.69-1.28c.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28c3.31 0 6-2.69 6-6c0-1.78-.79-3.38-2.03-4.48M12 21c-4.41 0-8-3.59-8-8c0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06c1.26 0 2.45-.39 3.45-1.09c.31.86.49 1.77.49 2.72c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="14" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="14" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcRoundFace2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFace3Icon],svg[ic-round-face-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.91 11.96C22.39 6.32 17.66 2 12 2S1.61 6.32 1.09 11.96l-.9 9.86c-.1 1.17.82 2.18 2 2.18h19.62c1.18 0 2.1-1.01 1.99-2.18zM4.54 9.13c.87.55 1.89.87 2.96.87c1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87c.34.89.54 1.86.54 2.87c0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87"></svg:path>`,
})
export class IcRoundFace3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFace4Icon],svg[ic-round-face-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.96 0-1.88.14-2.75.39A4.99 4.99 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8c0-.05.01-.1.01-.15c2.6-.98 4.68-2.99 5.74-5.55a9.94 9.94 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcRoundFace4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFace5Icon],svg[ic-round-face-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8c0-1.12.23-2.18.65-3.15a.495.495 0 0 0 .85-.35c0-.25-.19-.45-.43-.49c.15-.26.32-.51.49-.75c-.03.08-.06.15-.06.24c0 .28.22.5.5.5s.5-.22.5-.5S6.28 7 6 7c-.13 0-.25.05-.34.13c.52-.68 1.15-1.28 1.86-1.76A.495.495 0 0 0 8 6a.495.495 0 0 0 .1-.98c.16-.09.32-.17.49-.25c.09.14.24.23.41.23c.28 0 .5-.22.5-.5c0-.03-.01-.06-.02-.09c.39-.13.79-.23 1.21-.3c-.11.1-.19.23-.19.39c0 .28.22.5.5.5s.5-.22.5-.5a.51.51 0 0 0-.3-.46c.26-.03.53-.04.8-.04s.54.01.8.04c-.18.08-.3.25-.3.46c0 .28.22.5.5.5s.5-.22.5-.5c0-.16-.08-.29-.19-.38c.41.07.82.17 1.21.3c-.01.02-.02.05-.02.08c0 .28.22.5.5.5c.17 0 .32-.09.41-.23c.17.08.33.16.49.25A.495.495 0 0 0 16 6c.28 0 .5-.22.5-.5c0-.05-.01-.09-.03-.13c.71.48 1.34 1.08 1.86 1.76a.495.495 0 0 0-.83.37c0 .28.22.5.5.5s.5-.22.5-.5c0-.09-.03-.16-.07-.23c.18.24.34.49.49.75c-.23.03-.42.23-.42.48a.495.495 0 0 0 .85.35c.42.97.65 2.03.65 3.15c0 4.41-3.59 8-8 8"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="12" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="5.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="11" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="6.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="14" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="10" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="9" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="7" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="11" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="13" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="17" cy="8.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcRoundFace5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFace6Icon],svg[ic-round-face-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8v-.03c2.31-.22 3.43-1.59 4.34-3.41c.17-.35.51-.56.9-.56h5.53c.38 0 .72.21.89.55c.9 1.8 1.99 3.19 4.34 3.41v.03c0 4.42-3.59 8.01-8 8.01"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle>`,
})
export class IcRoundFace6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFaceRetouchingNaturalIcon],svg[ic-round-face-retouching-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.01 4.05L20.6 3.4l-.65-1.41a.5.5 0 0 0-.91 0L18.4 3.4l-1.41.65a.5.5 0 0 0 0 .91l1.41.64l.65 1.41a.5.5 0 0 0 .91 0l.64-1.41l1.41-.65c.39-.17.39-.73 0-.9"></svg:path><svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.5 8.8c-.78 0-1.49-.46-1.82-1.17l-.41-.9l-.9-.41A2.01 2.01 0 0 1 15.2 4.5c0-.66.34-1.26.87-1.63C14.83 2.32 13.45 2 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.45-.32-2.83-.87-4.07c-.37.53-.97.87-1.63.87M12 20c-4.41 0-8-3.59-8-8c0-.05.01-.1 0-.14c2.6-.98 4.69-2.99 5.74-5.55A10 10 0 0 0 17.5 10c.75 0 1.47-.09 2.17-.24c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8"></svg:path>`,
})
export class IcRoundFaceRetouchingNaturalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFaceRetouchingOffIcon],svg[ic-round-face-retouching-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="13" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.5 10c.75 0 1.47-.09 2.17-.24c.21.71.33 1.46.33 2.24c0 1.22-.28 2.37-.77 3.4l1.49 1.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10c-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39M2.6 4.43l1.48 1.48a10 10 0 0 0-1.98 7.55c.62 4.33 4.11 7.82 8.44 8.44c2.85.41 5.51-.41 7.55-1.98l1.48 1.48a.996.996 0 1 0 1.41-1.41L4.01 3.01a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42m14.06 14.06A7.9 7.9 0 0 1 12 20c-4.41 0-8-3.59-8-8c0-.05.01-.1 0-.14a9.95 9.95 0 0 0 3.64-2.39z"></svg:path>`,
})
export class IcRoundFaceRetouchingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFacebookIcon],svg[ic-round-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></svg:path>`,
})
export class IcRoundFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFactCheckIcon],svg[ic-round-fact-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m9.7 2.12l-3.17 3.17c-.39.39-1.03.39-1.42 0l-1.41-1.42a.996.996 0 1 1 1.41-1.41l.71.71l2.47-2.47a.996.996 0 0 1 1.41 0l.01.01c.38.39.38 1.03-.01 1.41"></svg:path>`,
})
export class IcRoundFactCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFactoryIcon],svg[ic-round-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10V8.48c0-.71-.71-1.19-1.37-.93L9 9v-.48c0-.72-.73-1.21-1.39-.92l-4.4 1.88C2.48 9.8 2 10.52 2 11.32V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10zm-5 7c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1zm3.12-15h-1.23c-.51 0-.93.38-.99.88l-.7 5.62h4.6l-.69-5.62c-.06-.5-.49-.88-.99-.88"></svg:path>`,
})
export class IcRoundFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFamilyRestroomIcon],svg[ic-round-family-restroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 17v-5h1.11c.68 0 1.16-.67.95-1.32l-2.1-6.31A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h2c.55 0 1-.45 1-1m-7.5-9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 15v-6H8c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h.5v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1m2.5-7v3c0 .55.45 1 1 1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3c.55 0 1-.45 1-1v-3c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5"></svg:path>`,
})
export class IcRoundFamilyRestroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFastForwardIcon],svg[ic-round-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82M13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81"></svg:path>`,
})
export class IcRoundFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFastRewindIcon],svg[ic-round-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81m1.66-3.25l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64"></svg:path>`,
})
export class IcRoundFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFastfoodIcon],svg[ic-round-fastfood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1M15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1M2.1 15h12.8c.62 0 1.11-.56.99-1.16c-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16M15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundFastfoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFavoriteIcon],svg[ic-round-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29c2.64-1.8 5.9-.96 7.66 1.1c1.76-2.06 5.02-2.91 7.66-1.1c1.41.96 2.28 2.59 2.34 4.29c.14 3.88-3.3 6.99-8.55 11.76z"></svg:path>`,
})
export class IcRoundFavoriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFavoriteBorderIcon],svg[ic-round-favorite-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1c-1.76-2.06-5.02-2.91-7.66-1.1c-1.4.96-2.28 2.58-2.34 4.29c-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75c-.06-1.7-.94-3.32-2.34-4.28M12.1 18.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05"></svg:path>`,
})
export class IcRoundFavoriteBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFaxIcon],svg[ic-round-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-1V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v14h12c1.1 0 2-.9 2-2v-6c0-1.66-1.34-3-3-3m-9-3h6v3h-6zm4 11h-4v-5h4zm2 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M4.5 8A2.5 2.5 0 0 0 2 10.5v8a2.5 2.5 0 0 0 5 0v-8A2.5 2.5 0 0 0 4.5 8"></svg:path>`,
})
export class IcRoundFaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFeaturedPlayListIcon],svg[ic-round-featured-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-10 8H4c-.55 0-1-.45-1-1s.45-1 1-1h7c.55 0 1 .45 1 1s-.45 1-1 1m0-4H4c-.55 0-1-.45-1-1s.45-1 1-1h7c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundFeaturedPlayListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFeaturedVideoIcon],svg[ic-round-featured-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-10 9H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFeaturedVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFeedIcon],svg[ic-round-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zM8 7h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1m8 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-1-5V5l4 4h-3c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFeedbackIcon],svg[ic-round-feedback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1z"></svg:path>`,
})
export class IcRoundFeedbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFemaleIcon],svg[ic-round-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m1 8.91a5.5 5.5 0 0 0 4.5-5.41C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5a5.5 5.5 0 0 0 4.5 5.41V17h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1z"></svg:path>`,
})
export class IcRoundFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFenceIcon],svg[ic-round-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11c0-.55-.45-1-1-1h-1V7l-2.29-2.29a.996.996 0 0 0-1.41 0L14 6l-1.29-1.29a.996.996 0 0 0-1.41 0L10 6L8.71 4.71a.996.996 0 0 0-1.41 0L5 7v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2H4c-.55 0-1 .45-1 1s.45 1 1 1h1v3c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1m-5-4.17l1 1V10h-2V7.83l.41-.41zm-4 0l.59.59l.41.41V10h-2V7.83l.41-.41zM11 14v-2h2v2zm2 2v2h-2v-2zM7 7.83l1-1l.59.59l.41.41V10H7zM7 12h2v2H7zm0 4h2v2H7zm10 2h-2v-2h2zm0-4h-2v-2h2z"></svg:path>`,
})
export class IcRoundFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFestivalIcon],svg[ic-round-festival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11v-.61c0-.8-.48-1.54-1.23-1.84c-3.65-1.48-6.81-3.93-8.48-5.37c-.74-.64-1.84-.64-2.58 0c-1.68 1.44-4.83 3.88-8.48 5.37A1.97 1.97 0 0 0 1 10.39V11c0 1.49.93 2.75 2.24 3.26c-.03 1.68-.16 3.55-.52 5.29c-.26 1.26.66 2.45 1.95 2.45h14.67c1.29 0 2.21-1.19 1.95-2.45c-.36-1.75-.5-3.62-.52-5.29C22.07 13.75 23 12.49 23 11M12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71M13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11m-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5M6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11zm-1.34 9c.39-1.86.54-3.82.57-5.58c.68-.15 1.29-.49 1.76-.98c.25.25.54.45.85.62c-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53c.84-.08 1.61-.45 2.17-1.02c.56.57 1.32.94 2.17 1.02c.1 1.75.24 3.7.48 5.53zm7.32 0c-.27-1.94-.43-4.07-.52-5.93c.31-.17.61-.37.85-.62c.47.48 1.08.83 1.76.98c.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundFestivalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberDvrIcon],svg[ic-round-fiber-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10.5h2v3h-2zm13 0h2v1h-2zM21 3H3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2M8 13.5c0 .83-.67 1.5-1.5 1.5h-3c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h3c.83 0 1.5.67 1.5 1.5zm6.1-3.58l-1.27 4.36c-.12.43-.52.72-.96.72s-.84-.29-.96-.72L9.64 9.92c-.14-.46.21-.92.69-.92c.32 0 .6.21.69.52l.85 2.91l.85-2.91c.09-.31.37-.52.69-.52c.48 0 .83.46.69.92M21 11.5c0 .6-.4 1.15-.9 1.4l.63 1.48c.19.45-.14.96-.63.96c-.28 0-.53-.16-.63-.42L18.65 13H17.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V9.64c0-.35.29-.64.64-.64h2.86c.83 0 1.5.67 1.5 1.5z"></svg:path>`,
})
export class IcRoundFiberDvrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberManualRecordIcon],svg[ic-round-fiber-manual-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="8" fill="currentColor"></svg:circle>`,
})
export class IcRoundFiberManualRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberNewIcon],svg[ic-round-fiber-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M8.5 14.21c0 .43-.36.79-.79.79c-.25 0-.49-.12-.64-.33L4.75 11.5v2.88c0 .35-.28.62-.62.62s-.63-.28-.63-.62V9.79c0-.43.36-.79.79-.79h.05c.26 0 .5.12.65.33l2.26 3.17V9.62c0-.34.28-.62.63-.62s.62.28.62.62zm5-4.57c0 .35-.28.62-.62.62H11v1.12h1.88c.35 0 .62.28.62.62v.01c0 .35-.28.62-.62.62H11v1.11h1.88c.35 0 .62.28.62.62c0 .35-.28.62-.62.62h-2.53a.85.85 0 0 1-.85-.85v-4.3c0-.45.38-.83.85-.83h2.53c.35 0 .62.28.62.62zm7 4.36c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9.62c0-.34.28-.62.62-.62s.62.28.62.62v3.89h1.13v-2.9c0-.35.28-.62.62-.62s.62.28.62.62v2.89h1.12V9.62c0-.35.28-.62.62-.62s.62.28.62.62V14z"></svg:path>`,
})
export class IcRoundFiberNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberPinIcon],svg[ic-round-fiber-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M9 11.5c0 .83-.67 1.5-1.5 1.5h-2v1.25c0 .41-.34.75-.75.75S4 14.66 4 14.25V10c0-.55.45-1 1-1h2.5c.83 0 1.5.67 1.5 1.5zm3.5 2.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75s.75.34.75.75zm7.5-.04a.787.787 0 0 1-1.43.46l-2.31-3.17v2.88c0 .34-.28.62-.62.62h-.01c-.35 0-.63-.28-.63-.62V9.83c0-.46.37-.83.83-.83c.27 0 .52.13.67.35l2.25 3.15V9.62c0-.34.28-.62.62-.62h.01c.34 0 .62.28.62.62zM5.5 10.5h2v1h-2z"></svg:path>`,
})
export class IcRoundFiberPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFiberSmartRecordIcon],svg[ic-round-fiber-smart-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="12" r="8" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82"></svg:path>`,
})
export class IcRoundFiberSmartRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileCopyIcon],svg[ic-round-file-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1m.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59M15 12h4.5L14 6.5V11c0 .55.45 1 1 1"></svg:path>`,
})
export class IcRoundFileCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileDownloadIcon],svg[ic-round-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileDownloadDoneIcon],svg[ic-round-file-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.42 4.71a.996.996 0 0 0-1.41 0L9.53 13.2L5.99 9.66a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.19-9.19c.4-.39.4-1.02 0-1.41M6 20h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFileDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileDownloadOffIcon],svg[ic-round-file-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.17V4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v5h1.59c.89 0 1.33 1.08.7 1.71l-1.88 1.88zm11.49 14.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.5 4.5c-.26.37-.28.91.1 1.28l4.59 4.59c.35.35.88.37 1.27.09L15.17 18H6c-.55 0-1 .45-1 1s.45 1 1 1h11.17l1.9 1.9c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41"></svg:path>`,
})
export class IcRoundFileDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileOpenIcon],svg[ic-round-file-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h9v-6c0-1.1.9-2 2-2h3V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M13 8V3.5L18.5 9H14c-.55 0-1-.45-1-1m9.66 9c0 .55-.45 1-1 1h-1.24l2.24 2.24a.996.996 0 1 1-1.41 1.41L19 19.41v1.24c0 .55-.45 1-1 1s-1-.45-1-1V17c0-.55.45-1 1-1h3.66c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundFileOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilePresentIcon],svg[ic-round-file-present-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M16 15c0 2.34-2.01 4.21-4.39 3.98C9.53 18.78 8 16.92 8 14.83V9.64c0-1.31.94-2.5 2.24-2.63A2.5 2.5 0 0 1 13 9.5V14c0 .55-.45 1-1 1s-1-.45-1-1V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5.39c0 1 .68 1.92 1.66 2.08A2 2 0 0 0 14 15v-3c0-.55.45-1 1-1s1 .45 1 1zm-2-8V4l4 4h-3c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundFilePresentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFileUploadIcon],svg[ic-round-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 10h1.59v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.7 3.7a.996.996 0 0 0-1.41 0L6.7 8.29c-.63.63-.19 1.71.7 1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterIcon],svg[ic-round-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.56 10.81l-2.35 3.02l-1.56-1.88a.5.5 0 0 0-.78.01l-1.74 2.23a.5.5 0 0 0 .39.81h8.98a.5.5 0 0 0 .4-.8l-2.55-3.39a.498.498 0 0 0-.79 0M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter1Icon],svg[ic-round-filter-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m13 10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v7c0 .55.45 1 1 1m6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFilter1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter2Icon],svg[ic-round-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-4-4h-3v-2h2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v2h-2c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundFilter2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter3Icon],svg[ic-round-filter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m15 8v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V7c0-1.1-.9-2-2-2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v2h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2"></svg:path>`,
})
export class IcRoundFilter3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter4Icon],svg[ic-round-filter-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m14 10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v3h-2V6c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h3v3c0 .55.45 1 1 1m5-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFilter4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter5Icon],svg[ic-round-filter-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m15 8v-2c0-1.1-.9-2-2-2h-2V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3v2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2"></svg:path>`,
})
export class IcRoundFilter5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter6Icon],svg[ic-round-filter-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-7-2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-4h2v2h-2z"></svg:path>`,
})
export class IcRoundFilter6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter7Icon],svg[ic-round-filter-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-6.75-2.49l3.58-7.17c.11-.22.17-.47.17-.72c0-.9-.72-1.62-1.62-1.62H12c-.55 0-1 .45-1 1s.45 1 1 1h3l-3.36 6.71a.89.89 0 0 0 .8 1.29h.01c.34 0 .65-.19.8-.49"></svg:path>`,
})
export class IcRoundFilter7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter8Icon],svg[ic-round-filter-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-7-2h2a2 2 0 0 0 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5c0 .83.67 1.5 1.5 1.5c-.83 0-1.5.67-1.5 1.5V13a2 2 0 0 0 2 2m0-8h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class IcRoundFilter8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter9Icon],svg[ic-round-filter-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1M15 5h-2c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 4h-2V7h2z"></svg:path>`,
})
export class IcRoundFilter9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter9PlusIcon],svg[ic-round-filter-9-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m12 7V8c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h1v1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2m-3-3V8h1v1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-7c0-.55-.45-1-1-1h-1V8c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundFilter9PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterAltIcon],svg[ic-round-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"></svg:path>`,
})
export class IcRoundFilterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterAltOffIcon],svg[ic-round-filter-alt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97zm.7 14.88L3.51 3.51A.996.996 0 1 0 2.1 4.92L10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-1.17l5.07 5.07c.39.39 1.02.39 1.41 0s.4-1.02.01-1.41"></svg:path>`,
})
export class IcRoundFilterAltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterBAndWIcon],svg[ic-round-filter-b-and-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16l-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundFilterBAndWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterCenterFocusIcon],svg[ic-round-filter-center-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1zm-7-9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"></svg:path>`,
})
export class IcRoundFilterCenterFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterDramaIcon],svg[ic-round-filter-drama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4a7.48 7.48 0 0 0-6.64 4.04A5.996 5.996 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6.17c-2.09 0-3.95-1.53-4.15-3.61a3.998 3.998 0 0 1 7.89-1.22c.1.48.5.83.98.83c.61 0 1.11-.55.99-1.15a5.99 5.99 0 0 0-4.29-4.63c1.1-1.46 2.89-2.37 4.89-2.2c2.88.25 5.01 2.82 5.01 5.71V12h1.37c1.45 0 2.79.97 3.07 2.4c.39 1.91-1.08 3.6-2.93 3.6"></svg:path>`,
})
export class IcRoundFilterDramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterFramesIcon],svg[ic-round-filter-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h-4L12.71.71a.996.996 0 0 0-1.41 0L8 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 16H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.52l3.52-3.5L15.52 6H19c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1M17 8H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundFilterFramesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterHdrIcon],svg[ic-round-filter-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4a.994.994 0 0 1-1.4-.2c-1.05-1.4-2.31-3.07-3.1-4.14c-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33a.993.993 0 0 0-1.6 0"></svg:path>`,
})
export class IcRoundFilterHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterListIcon],svg[ic-round-filter-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFilterListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterListOffIcon],svg[ic-round-filter-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7c0-.55-.45-1-1-1H8.83l2 2H20c.55 0 1-.45 1-1m-3 5c0-.55-.45-1-1-1h-3.17l2 2H17c.55 0 1-.45 1-1m-4.02 4.81c.01.06.02.13.02.19c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.06 0 .13.01.19.02L10.17 13H7c-.55 0-1-.45-1-1s.45-1 1-1h1.17l-3-3H4a1.003 1.003 0 0 1-.62-1.79L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41z"></svg:path>`,
})
export class IcRoundFilterListOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterNoneIcon],svg[ic-round-filter-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFilterNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterTiltShiftIcon],svg[ic-round-filter-tilt-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.23c0-.64-.59-1.13-1.21-.99c-1.12.26-2.18.7-3.12 1.3c-.53.34-.61 1.1-.16 1.55c.32.32.83.4 1.21.16c.77-.49 1.62-.85 2.54-1.05c.44-.1.74-.51.74-.97m6.33.32c-.94-.6-2-1.04-3.12-1.3a.998.998 0 0 0-1.21.98c0 .45.3.87.74.96c.91.2 1.77.57 2.53 1.05c.39.24.89.17 1.21-.16a.972.972 0 0 0-.15-1.53M20.77 11c.64 0 1.13-.59.99-1.21c-.26-1.12-.7-2.18-1.3-3.12c-.34-.53-1.1-.61-1.55-.16c-.32.32-.4.83-.16 1.21c.49.77.85 1.62 1.05 2.53c.1.45.51.75.97.75M5.1 6.51c-.46-.45-1.21-.38-1.55.16c-.6.94-1.04 2-1.3 3.12c-.14.62.34 1.21.98 1.21c.45 0 .87-.3.96-.74c.2-.91.57-1.77 1.05-2.53c.26-.39.18-.9-.14-1.22M3.23 13c-.64 0-1.13.59-.99 1.21c.26 1.12.7 2.17 1.3 3.12c.34.54 1.1.61 1.55.16c.32-.32.4-.83.15-1.21c-.49-.76-.85-1.61-1.05-2.53c-.09-.45-.5-.75-.96-.75M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3m3.9 5.49c.45.45 1.21.38 1.55-.15c.6-.94 1.04-2 1.3-3.11c.14-.62-.35-1.21-.98-1.21c-.45 0-.87.3-.96.74c-.2.91-.57 1.76-1.05 2.53c-.26.37-.18.88.14 1.2M13 20.77c0 .64.59 1.13 1.21.99c1.12-.26 2.17-.7 3.12-1.3c.54-.34.61-1.1.16-1.55c-.32-.32-.83-.4-1.21-.15c-.76.49-1.61.85-2.53 1.05c-.45.09-.75.5-.75.96m-6.33-.32c.95.6 2 1.04 3.12 1.3c.62.14 1.21-.35 1.21-.98c0-.45-.3-.87-.74-.96a8 8 0 0 1-2.53-1.05a.97.97 0 0 0-1.21.16a.972.972 0 0 0 .15 1.53"></svg:path>`,
})
export class IcRoundFilterTiltShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFilterVintageIcon],svg[ic-round-filter-vintage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.7 12.4a6 6 0 0 0-.86-.4c.29-.11.58-.24.86-.4a6.01 6.01 0 0 0 3-5.19a6.01 6.01 0 0 0-6 0c-.28.16-.54.35-.78.54c.05-.31.08-.63.08-.95c0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95c-.24-.2-.5-.39-.78-.55a6.01 6.01 0 0 0-6 0a5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4c-.29.11-.58.24-.86.4a6.01 6.01 0 0 0-3 5.19a6.01 6.01 0 0 0 6 0c.28-.16.54-.35.78-.54c-.05.32-.08.64-.08.96c0 2.22 1.21 4.15 3 5.19c1.79-1.04 3-2.97 3-5.19c0-.32-.03-.64-.08-.95q.36.3.78.54a6.01 6.01 0 0 0 6 0a6.01 6.01 0 0 0-3-5.19M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class IcRoundFilterVintageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFindInPageIcon],svg[ic-round-find-in-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.59V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.86.56-1.89.88-3 .82c-2.37-.11-4.4-1.96-4.72-4.31a5.013 5.013 0 0 1 5.83-5.61c1.95.33 3.57 1.85 4 3.78c.33 1.46.01 2.82-.7 3.9zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path>`,
})
export class IcRoundFindInPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFindReplaceIcon],svg[ic-round-find-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c1.38 0 2.63.56 3.54 1.46l-1.69 1.69a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5V5.21c0-.45-.54-.67-.85-.35l-1.2 1.2A6.94 6.94 0 0 0 11 4C7.96 4 5.38 5.94 4.42 8.64c-.24.66.23 1.36.93 1.36c.42 0 .79-.26.93-.66A5.01 5.01 0 0 1 11 6m5.64 9.14c.4-.54.72-1.15.95-1.8S17.34 12 16.65 12a.98.98 0 0 0-.93.66A5.01 5.01 0 0 1 11 16c-1.38 0-2.63-.56-3.54-1.46l1.69-1.69a.5.5 0 0 0-.36-.85H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.2-1.2a6.984 6.984 0 0 0 9.09.7l4.11 4.11c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49z"></svg:path>`,
})
export class IcRoundFindReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFingerprintIcon],svg[ic-round-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41c-.24.13-.54.04-.68-.2a.506.506 0 0 1 .2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52c.25.13.34.43.21.67a.49.49 0 0 1-.44.28M3.5 9.72a.499.499 0 0 1-.41-.79c.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25a.5.5 0 0 1-.12.7c-.23.16-.54.11-.7-.12a9.4 9.4 0 0 0-3.39-2.94c-2.87-1.47-6.54-1.47-9.4.01c-1.36.7-2.5 1.7-3.4 2.96c-.08.14-.23.21-.39.21m6.25 12.07a.47.47 0 0 1-.35-.15c-.87-.87-1.34-1.43-2.01-2.64c-.69-1.23-1.05-2.73-1.05-4.34c0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85c.64 1.15 1.08 1.64 1.85 2.42c.19.2.19.51 0 .71c-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89c-1.49-1.01-2.38-2.65-2.38-4.39c0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56c.71.48 1.54.71 2.54.71c.24 0 .64-.03 1.04-.1c.27-.05.53.13.58.41c.05.27-.13.53-.41.58c-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02c-1.59-.44-2.63-1.03-3.72-2.1a7.3 7.3 0 0 1-2.17-5.22c0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83c-2.84 0-5.44 1.58-6.61 4.03c-.39.81-.59 1.76-.59 2.8c0 .78.07 2.01.67 3.61c.1.26-.03.55-.29.64c-.26.1-.55-.04-.64-.29a11.1 11.1 0 0 1-.73-3.96c0-1.2.23-2.29.68-3.24c1.33-2.79 4.28-4.6 7.51-4.6c4.55 0 8.25 3.51 8.25 7.83c0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51c.95.94 1.86 1.46 3.27 1.85c.27.07.42.35.35.61c-.05.23-.26.38-.47.38"></svg:path>`,
})
export class IcRoundFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFireExtinguisherIcon],svg[ic-round-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2zm0-1h10v-5H7zM17 4.23v3.54c0 .63-.58 1.11-1.21.98l-1.94-.41c0 .02 0 .01-.01.03A5.07 5.07 0 0 1 16.9 12H7.1c.34-1.66 1.52-3.02 3.07-3.64c-.33-.26-.6-.58-.8-.95L5.49 6.6A.61.61 0 0 1 5 6c0-.29.2-.54.49-.6l3.88-.81C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66l1.94-.41c.63-.13 1.21.35 1.21.98M13 6c-.03-.59-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class IcRoundFireExtinguisherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFireHydrantAltIcon],svg[ic-round-fire-hydrant-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-1V8h1c.55 0 1-.45 1-1s-.45-1-1-1h-1.35a5.99 5.99 0 0 0-11.3 0H5c-.55 0-1 .45-1 1s.45 1 1 1h1v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-1v-3h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2m-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"></svg:path><svg:circle cx="12" cy="14" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcRoundFireHydrantAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFireTruckIcon],svg[ic-round-fire-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.9 10.69l-1.44-4.32A2.01 2.01 0 0 0 19.56 5H19V4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1h-2c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h1c1.1 0 2-.9 2-2v-4.68c0-.21-.03-.42-.1-.63M7 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-3-8V7h5.56l1.33 4z"></svg:path><svg:path fill="currentColor" d="M10.25 8.5H10v-2h.25c.41 0 .75-.34.75-.75S10.66 5 10.25 5h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75H2v2h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m-5 0H3.5v-2h1.75zm3.25 0H6.75v-2H8.5z"></svg:path>`,
})
export class IcRoundFireTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFireplaceIcon],svg[ic-round-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 17c0 .55-.45 1-1 1h-1v-1c0-.55-.45-1-1-1h-1.15c.71-.85 1.15-1.89 1.15-3c0-1.89-1.09-2.84-1.85-3.36c-1.86-1.27-2.23-2.78-2.25-3.72a.507.507 0 0 0-.77-.43c-5.8 3.43-5.15 7-5.13 7.51c.03.96.49 2.07 1.24 3H7c-.55 0-1 .45-1 1v1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-6.8-5.26c-.08-.46-.07-.85.08-1.28c.54 1.21 2.15 1.64 1.98 3.18c-.19 1.69-2.11 2.37-3.39 1.32c.76-.24 1.4-1.04 1.53-1.63c.12-.55-.11-1.04-.2-1.59"></svg:path>`,
})
export class IcRoundFireplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFirstPageIcon],svg[ic-round-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1 0 16.3 6.7l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 0 0-.01-1.4M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFitScreenIcon],svg[ic-round-fit-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h2c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V6h-2c-.55 0-1-.45-1-1s.45-1 1-1M4 8V6h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1m16 8v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1M6 18H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1s-.45-1-1-1M16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundFitScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFitbitIcon],svg[ic-round-fitbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89m-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68s.75 1.68 1.68 1.68m0-4.26c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68s.75 1.68 1.68 1.68m0 8.51c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68s-1.68.75-1.68 1.68c0 .92.75 1.68 1.68 1.68m-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m0 8.52c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47c-.01.81.65 1.47 1.47 1.47m0 4.27c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47s-1.47.66-1.47 1.47c-.01.81.65 1.47 1.47 1.47m0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2s-1.47.66-1.47 1.47s.65 1.47 1.47 1.47m-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52m0 4.25a1.261 1.261 0 0 0 0-2.52a1.261 1.261 0 0 0 0 2.52m0-8.49a1.261 1.261 0 0 0 0-2.52a1.261 1.261 0 0 0 0 2.52m-3.87 4.03a1.05 1.05 0 1 0 0-2.1a1.05 1.05 0 0 0 0 2.1"></svg:path>`,
})
export class IcRoundFitbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFitnessCenterIcon],svg[ic-round-fitness-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.57 14.86l.72-.72a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0L17 15.57L8.43 7l2.86-2.86a.996.996 0 0 0 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0l-.72.72l-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72a1.02 1.02 0 0 0-1.43 0a1.02 1.02 0 0 0 0 1.43l.72.72L2.71 7a.996.996 0 0 0 0 1.41l.72.72l-.72.73a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43L15.57 17l-2.86 2.86a.996.996 0 0 0 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72l.72.72c.39.39 1.02.39 1.41 0l1.43-1.43l.72.72c.39.39 1.04.39 1.43 0s.39-1.04 0-1.43l-.72-.72L21.29 17a.996.996 0 0 0 0-1.41z"></svg:path>`,
})
export class IcRoundFitnessCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlagIcon],svg[ic-round-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.4 6l-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"></svg:path>`,
})
export class IcRoundFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlagCircleIcon],svg[ic-round-flag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 13h-3.38c-.38 0-.73-.21-.89-.55L12 13H9.5v4.25c0 .41-.34.75-.75.75S8 17.66 8 17.25V8c0-.55.45-1 1-1h4.38c.38 0 .73.21.89.55L15 9h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFlagCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlakyIcon],svg[ic-round-flaky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.16 15.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.82.82L16 13.52c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.65 2.65c-.19.19-.51.2-.7 0zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.87 6.81l.88.88l.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88l.88.88c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.88-.88l-.88.88c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l.88-.88l-.88-.88a.754.754 0 0 1 0-1.06c.29-.3.76-.3 1.06 0M12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8"></svg:path>`,
})
export class IcRoundFlakyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlareIcon],svg[ic-round-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11H2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1m2.47-3.94l-.72-.72a.996.996 0 1 0-1.41 1.41l.71.71c.39.39 1.02.39 1.41 0c.39-.38.39-1.02.01-1.4M12 1c-.56 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1m5.66 5.35a.996.996 0 0 0-1.41 0l-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71c.38-.39.38-1.03 0-1.41M17 12c0 .56.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1m-5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m3.53 7.94l.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41m-9.19.71c.39.39 1.02.39 1.41 0l.71-.71a.996.996 0 1 0-1.41-1.41l-.71.71c-.38.39-.38 1.03 0 1.41M12 23c.56 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1"></svg:path>`,
})
export class IcRoundFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlashAutoIcon],svg[ic-round-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v10c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H9l3.38-7.59c.29-.67-.2-1.41-.92-1.41H4c-.55 0-1 .45-1 1m15-1c-.6 0-1.13.38-1.34.94L14.22 9.8c-.2.59.23 1.2.85 1.2c.38 0 .72-.24.84-.6L16.4 9h3.2l.49 1.4c.13.36.46.6.84.6c.62 0 1.05-.61.84-1.19l-2.44-6.86C19.13 2.38 18.6 2 18 2m-1.15 5.65L18 4l1.15 3.65z"></svg:path>`,
})
export class IcRoundFlashAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlashOffIcon],svg[ic-round-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.12 11.5a.995.995 0 0 0-.86-1.5h-1.87l2.28 2.28zm.16-8.05c.33-.67-.15-1.45-.9-1.45H8c-.55 0-1 .45-1 1v.61l6.13 6.13zm2.16 14.43L4.12 3.56a.996.996 0 1 0-1.41 1.41L7 9.27V12c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l2.65-4.55l3.44 3.44c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41"></svg:path>`,
})
export class IcRoundFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlashOnIcon],svg[ic-round-flash-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFlashOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlashlightOffIcon],svg[ic-round-flashlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V4c0-1.1-.9-2-2-2H8c-.86 0-1.58.54-1.87 1.3L7.83 5zm-2 6l2-3V7H9.83L16 13.17zM2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1.17l3.07 3.07a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0"></svg:path>`,
})
export class IcRoundFlashlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlashlightOnIcon],svg[ic-round-flashlight-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v1h12V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m0 3v1l2 3v9c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-9l2-3V7zm6 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundFlashlightOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlatwareIcon],svg[ic-round-flatware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.08c0 1.77-.84 3.25-2 3.82V20c0 .55-.45 1-1 1s-1-.45-1-1v-9.1c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08m2.27-3.9c-.63-.19-1.27.31-1.27.97V20c0 .55.45 1 1 1s1-.45 1-1v-7h1c.55 0 1-.45 1-1V7c0-1.46-.86-3.26-2.73-3.82M8.28 3c-.4 0-.72.32-.72.72V7h-.84V3.72C6.72 3.32 6.4 3 6 3s-.72.32-.72.72V7h-.84V3.72c0-.4-.32-.72-.72-.72S3 3.32 3 3.72V9c0 1.1.9 2 2 2v9c0 .55.45 1 1 1s1-.45 1-1v-9c1.1 0 2-.9 2-2V3.72c0-.4-.32-.72-.72-.72"></svg:path>`,
})
export class IcRoundFlatwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlightIcon],svg[ic-round-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69a1.05 1.05 0 0 0 .87 1.89L10 13.5V19l-1.8 1.35a.48.48 0 0 0-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59a.48.48 0 0 0-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1"></svg:path>`,
})
export class IcRoundFlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlightClassIcon],svg[ic-round-flight-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6 4c.55 0 1 .45 1 1v3l2.5 8H17c.55 0 1 .45 1 1s-.45 1-1 1H9.49c-.88 0-1.66-.58-1.92-1.43L5.08 8.28A2.2 2.2 0 0 1 5 7.71V5c0-.55.45-1 1-1m12 16c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundFlightClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlightLandIcon],svg[ic-round-flight-land-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1M3.51 11.61l15.83 4.24c.8.21 1.62-.26 1.84-1.06c.21-.8-.26-1.62-1.06-1.84l-5.31-1.42l-2.58-8.45a1.08 1.08 0 0 0-.75-.73c-.68-.18-1.35.33-1.35 1.04v6.88L5.15 8.95L4.4 7.09a.99.99 0 0 0-.67-.59l-.33-.09a.495.495 0 0 0-.63.48v3.75c0 .46.3.85.74.97"></svg:path>`,
})
export class IcRoundFlightLandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlightTakeoffIcon],svg[ic-round-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 19h-17c-.55 0-1 .45-1 1s.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1m1.57-9.36c-.22-.8-1.04-1.27-1.84-1.06L14.92 10L8.46 3.98a1.06 1.06 0 0 0-1.02-.25c-.68.19-1 .97-.65 1.58l3.44 5.96l-4.97 1.33l-1.57-1.24c-.25-.19-.57-.26-.88-.18l-.33.09c-.32.08-.47.45-.3.73l1.88 3.25c.23.39.69.58 1.12.47L21 11.48c.8-.22 1.28-1.04 1.07-1.84"></svg:path>`,
})
export class IcRoundFlightTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlipIcon],svg[ic-round-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21h2v-2h-2zm4-12h2V7h-2zM3 5v14c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2m16-2v2h2c0-1.1-.9-2-2-2m-7 20c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v20c0 .55.45 1 1 1m7-6h2v-2h-2zM15 5h2V3h-2zm4 8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2z"></svg:path>`,
})
export class IcRoundFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlipCameraAndroidIcon],svg[ic-round-flip-camera-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3"></svg:path><svg:path fill="currentColor" d="M8 9c0-.55-.45-1-1-1H5.09C6.47 5.61 9.05 4 12 4c3.49 0 6.45 2.24 7.54 5.36c.14.39.53.64.94.64c.68 0 1.18-.67.96-1.31C20.07 4.79 16.36 2 12 2C8.73 2 5.82 3.58 4 6.01V5c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1m8 6c0 .55.45 1 1 1h1.91c-1.38 2.39-3.96 4-6.91 4c-3.49 0-6.45-2.24-7.54-5.36a1 1 0 0 0-.94-.64c-.68 0-1.18.67-.96 1.31C3.93 19.21 7.64 22 12 22c3.27 0 6.18-1.58 8-4.01V19c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFlipCameraAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlipCameraIosIcon],svg[ic-round-flip-camera-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-3.17l-1.24-1.35A2 2 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-6.33 12.7c-.52.19-1.08.3-1.67.3c-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4c.46 0 .91-.08 1.32-.23a.498.498 0 1 1 .35.93m2.83-2.2L14 13h2c0-2.21-1.79-4-4-4c-.46 0-.91.08-1.32.23a.498.498 0 1 1-.35-.93c.52-.19 1.08-.3 1.67-.3c2.76 0 5 2.24 5 5h2z"></svg:path>`,
})
export class IcRoundFlipCameraIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlipToBackIcon],svg[ic-round-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H7v2h2zm0 4H7v2h2zm0-8a2 2 0 0 0-2 2h2zm4 12h-2v2h2zm6-12v2h2c0-1.1-.9-2-2-2m-6 0h-2v2h2zM9 17v-2H7a2 2 0 0 0 2 2m10-4h2v-2h-2zm0-4h2V7h-2zm0 8c1.1 0 2-.9 2-2h-2zM4 7c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h11c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1V8c0-.55-.45-1-1-1m11-2h2V3h-2zm0 12h2v-2h-2z"></svg:path>`,
})
export class IcRoundFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlipToFrontIcon],svg[ic-round-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h2v-2H3zm0 4h2v-2H3zm2 4v-2H3a2 2 0 0 0 2 2M3 9h2V7H3zm12 12h2v-2h-2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 12h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-7 6h2v-2h-2zm-4 0h2v-2H7z"></svg:path>`,
})
export class IcRoundFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFloodIcon],svg[ic-round-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 19c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.33-1c-1.95 0-2.1 1-3.34 1s-1.38-1-3.33-1c-1.54 0-1.96.62-2.67.88c-.4.15-.67.52-.67.95c0 .71.72 1.19 1.38.94c.77-.29 1.11-.77 1.96-.77c1.24 0 1.38 1 3.33 1s2.1-1 3.34-1c1.22 0 1.4 1 3.33 1s2.1-1 3.33-1c.84 0 1.18.47 1.95.77c.66.26 1.38-.23 1.38-.94v-.01c0-.42-.27-.8-.67-.94c-.71-.26-1.12-.88-2.66-.88m-9.99-1.5c1.95 0 2.09-1 3.33-1c1.19 0 1.42 1 3.33 1c1.95 0 2.09-1 3.33-1c.82 0 1.17.46 1.93.76c.66.26 1.38-.23 1.38-.94c0-.42-.26-.79-.65-.94c-.29-.11-.54-.27-.83-.43l-2.02-7.53l1.17.47a.983.983 0 0 0 1.29-.55a.98.98 0 0 0-.57-1.29l-9.24-3.54c-.81-.31-1.72-.06-2.27.61l-6.23 7.7a.98.98 0 0 0 .16 1.4c.43.34 1.06.26 1.39-.17l.78-1l.93 3.48c-.18-.02-.35-.05-.56-.05c-1.54 0-1.95.62-2.66.88c-.4.17-.67.55-.67.97c0 .7.69 1.19 1.35.95c.8-.29 1.18-.78 2-.78c1.19 0 1.42 1 3.33 1m5.36-7.32l1.42 5.31c-1.34.09-1.47-.99-3.47-.99c-.36 0-.65.04-.91.1l-.91-3.39z"></svg:path>`,
})
export class IcRoundFloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlourescentIcon],svg[ic-round-flourescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2m5-13c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m7.79 3.3a.996.996 0 0 0-1.41 0l-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 0 0 0-1.41M12 22c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1m5.99-3.59l.38.39c.39.39 1.02.39 1.41 0l.01-.01a.996.996 0 0 0 0-1.41L19.4 17a.996.996 0 1 0-1.41 1.41M6 5.69l-.39-.38A.996.996 0 1 0 4.2 6.72l.39.38c.39.39 1.02.39 1.41 0c.38-.39.38-1.03 0-1.41m-1.8 13.1c.39.4 1.03.4 1.42 0L6 18.4a.996.996 0 1 0-1.41-1.41l-.39.39a.996.996 0 0 0 0 1.41"></svg:path>`,
})
export class IcRoundFlourescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFluorescentIcon],svg[ic-round-fluorescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2m5-13c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m7.79 3.3a.996.996 0 0 0-1.41 0l-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 0 0 0-1.41M12 22c.56 0 1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1m5.99-3.59l.38.39c.39.39 1.02.39 1.41 0l.01-.01a.996.996 0 0 0 0-1.41L19.4 17a.996.996 0 1 0-1.41 1.41M6 5.69l-.39-.38A.996.996 0 1 0 4.2 6.72l.39.38c.39.39 1.02.39 1.41 0c.38-.39.38-1.03 0-1.41m-1.8 13.1c.39.4 1.03.4 1.42 0L6 18.4a.996.996 0 1 0-1.41-1.41l-.39.39a.996.996 0 0 0 0 1.41"></svg:path>`,
})
export class IcRoundFluorescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFlutterDashIcon],svg[ic-round-flutter-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.07 11.7c.29-.39.81-.56 1.27-.37c.17.07.32.18.43.33c.22.28.25.59.22.85c-.05.33-.25.63-.54.79c0 0-4.87 2.95-5.07 2.69s3.69-4.29 3.69-4.29M22 10c0 2.5-1 3-1.5 3c-.23 0-.44-.1-.62-.26c-.48 3.32-2.36 5.31-5.33 5.99c.11.44.48.77.95.77h.58c.22 0 .41.15.48.36c.17.52.66 1.02 1.02 1.32c.25.21.24.59-.03.78c-.34.24-.9.49-1.79.53a.5.5 0 0 1-.45-.22c-.13-.2-.31-.56-.31-1.01c0-.3.04-.57.09-.8c-.78-.16-1.39-.78-1.55-1.56c-.49.06-1 .1-1.54.1c-.88 0-1.7-.09-2.45-.25c-.02.08-.05.16-.05.25c0 .55.45 1 1 1h.58c.22 0 .41.15.48.36c.17.52.66 1.02 1.02 1.32c.25.21.24.59-.03.78c-.34.24-.9.49-1.79.53a.5.5 0 0 1-.45-.22c-.13-.2-.31-.56-.31-1.01c0-.3.04-.57.09-.8c-.9-.19-1.59-1-1.59-1.96c0-.18.03-.36.08-.53c-2.46-.86-4.03-2.78-4.46-5.74c-.18.17-.38.27-.62.27C3 13 2 12.5 2 10c0-2.27 1.7-4.5 3-4.5c.43 0 .49.49.5.85a8 8 0 0 1 5.55-3.29c.2-.96 1.08-1.56 1.95-1.56v1s.33-.5 1-.5s1 .5 1 .5c-.49 0-.85.35-.96.77c1.82.48 3.39 1.59 4.46 3.08c.01-.36.07-.85.5-.85c1.3 0 3 2.23 3 4.5M5 11c0 .81.1 1.53.25 2.21c.18-.69.46-1.33.83-1.92a3.8 3.8 0 0 1-.34-1.54A3.766 3.766 0 0 1 9.5 6c.96 0 1.84.37 2.5.97c.66-.6 1.54-.97 2.5-.97c2.07 0 3.75 1.68 3.75 3.75c0 .55-.12 1.07-.34 1.54c.37.59.66 1.24.84 1.94c.15-.68.25-1.41.25-2.23c0-3.86-3.14-7-7-7s-7 3.14-7 7m12.98 4.29c0-.1.02-.19.02-.29c0-1.01-.26-1.95-.7-2.78c-.69.78-1.68 1.28-2.8 1.28c-.27 0-.54-.03-.79-.09c.14-.23.23-.49.27-.77c.01-.07.01-.13.02-.19c.17.03.33.05.5.05c1.52 0 2.75-1.23 2.75-2.75S16.02 7 14.5 7c-.67 0-1.32.25-1.83.72l-.67.6l-.67-.6C10.82 7.25 10.17 7 9.5 7C7.98 7 6.75 8.23 6.75 9.75c0 1.34.96 2.46 2.23 2.7l-.76.83c-.6-.22-1.12-.59-1.53-1.05A6 6 0 0 0 6 15c0 .08.01.15.01.24C7.13 17.06 9.14 18 12 18c2.88 0 4.88-.91 5.98-2.71M16 9.75c0 .97-.67 1.75-1.5 1.75S13 10.72 13 9.75S13.67 8 14.5 8s1.5.78 1.5 1.75m-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38s.17.38.38.38s.37-.18.37-.38M11 9.75c0 .97-.67 1.75-1.5 1.75S8 10.72 8 9.75S8.67 8 9.5 8s1.5.78 1.5 1.75m-.75-.87c0-.21-.17-.38-.38-.38s-.37.17-.37.38s.17.38.38.38s.37-.18.37-.38"></svg:path>`,
})
export class IcRoundFlutterDashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFmdBadIcon],svg[ic-round-fmd-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2m0 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFmdBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFmdGoodIcon],svg[ic-round-fmd-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundFmdGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderIcon],svg[ic-round-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.59 4.59C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"></svg:path>`,
})
export class IcRoundFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderCopyIcon],svg[ic-round-folder-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c-.55 0-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1H3V7c0-.55-.45-1-1-1"></svg:path><svg:path fill="currentColor" d="M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundFolderCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderDeleteIcon],svg[ic-round-folder-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 15.5h-2v-4h2zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1.75 5.5H18v4c0 .83-.67 1.5-1.5 1.5h-2c-.83 0-1.5-.67-1.5-1.5v-4h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-.25c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75V10h1.75c.41 0 .75.34.75.75s-.34.75-.75.75"></svg:path>`,
})
export class IcRoundFolderDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderOffIcon],svg[ic-round-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.85.85c-.14.28-.23.59-.23.93L2 18c0 1.1.9 2 2 2h13.17l2.61 2.61a.996.996 0 1 0 1.41-1.41zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderOpenIcon],svg[ic-round-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1 12H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderSharedIcon],svg[ic-round-folder-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-5 3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z"></svg:path>`,
})
export class IcRoundFolderSharedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderSpecialIcon],svg[ic-round-folder-special-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-3.06 10.41L15 15.28l-1.94 1.13a.502.502 0 0 1-.74-.55l.51-2.2l-1.69-1.46c-.33-.29-.16-.84.28-.88l2.23-.19l.88-2.06c.17-.4.75-.4.92 0l.88 2.06l2.23.19a.5.5 0 0 1 .28.88l-1.69 1.46l.51 2.2a.49.49 0 0 1-.72.55"></svg:path>`,
})
export class IcRoundFolderSpecialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFolderZipIcon],svg[ic-round-folder-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-2 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2z"></svg:path>`,
})
export class IcRoundFolderZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFollowTheSignsIcon],svg[ic-round-follow-the-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M5.75 8.9L3.23 21.81c-.12.62.35 1.19.98 1.19h.09c.47 0 .88-.33.98-.79L6.85 15L9 17v5c0 .55.45 1 1 1s1-.45 1-1v-6.14c0-.27-.11-.52-.29-.71L8.95 13.4l.6-3a6.97 6.97 0 0 0 4.31 2.51c.6.1 1.14-.39 1.14-1c0-.49-.36-.9-.84-.98a5.14 5.14 0 0 1-3.51-2.38l-.95-1.6C9.35 6.35 8.7 6 8 6q-.375 0-.75.15l-4.63 1.9c-.37.15-.62.52-.62.92V12c0 .55.45 1 1 1s1-.45 1-1V9.65zM21 2h-7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2.75v13.25c0 .41.34.75.75.75s.75-.34.75-.75V9H21c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-.85 3.85l-1.28 1.29c-.31.32-.85.09-.85-.35v-.54h-2.76c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.76v-.54c0-.45.54-.67.85-.35l1.28 1.29c.19.19.19.51 0 .7"></svg:path>`,
})
export class IcRoundFollowTheSignsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFontDownloadIcon],svg[ic-round-font-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4.29 15.88l-.9-2.38H9.17l-.89 2.37a.968.968 0 1 1-1.81-.69l4.25-10.81c.22-.53.72-.87 1.28-.87s1.06.34 1.27.87l4.25 10.81a.968.968 0 0 1-.9 1.32c-.4 0-.76-.25-.91-.62"></svg:path>`,
})
export class IcRoundFontDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFontDownloadOffIcon],svg[ic-round-font-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.58 9.75l-.87-.87l.23-.66h.1zm-2.23-2.23l.2-.52a1.55 1.55 0 0 1 2.9 0l2.17 5.79L22 19.17V4c0-1.1-.9-2-2-2H4.83zm10.84 15.09a.996.996 0 0 1-1.41 0l-.61-.61H4c-1.1 0-2-.9-2-2V4.83l-.61-.61A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42m-9.09-7.68l-3.3-3.3l-1.9 5.07c-.23.63.23 1.3.9 1.3h.01c.41 0 .77-.26.9-.64l.86-2.43z"></svg:path>`,
})
export class IcRoundFontDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFoodBankIcon],svg[ic-round-food-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0m1.7 8.6c0 .83-.67 1.5-1.5 1.5v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V14c-.83 0-1.5-.67-1.5-1.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5v2.5h.5V10c0-.28.22-.5.5-.5s.5.22.5.5zm2 5.5c-.28 0-.5-.22-.5-.5v-3h-.5c-.28 0-.5-.22-.5-.5v-2.5c0-.88.57-1.63 1.36-1.89c.31-.11.64.14.64.48v7.41c0 .28-.22.5-.5.5"></svg:path>`,
})
export class IcRoundFoodBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForestIcon],svg[ic-round-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.14 12h-.06c.81 0 1.28-.91.82-1.57L9.82 3.17a1 1 0 0 0-1.64 0L3.1 10.43c-.46.66.01 1.57.82 1.57h-.06L.99 16.46c-.43.66.05 1.54.84 1.54H7v2c0 1.1.9 2 2 2s2-.9 2-2v-2h5.17c.79 0 1.27-.88.84-1.54z"></svg:path><svg:path fill="currentColor" d="M23.01 16.46L20.14 12h-.06c.81 0 1.28-.91.82-1.57l-5.08-7.26a1 1 0 0 0-1.64 0l-1.57 2.24l3.11 4.44a2.004 2.004 0 0 1-.16 2.5l2.29 3.57c.4.62.42 1.4.07 2.04c-.01.02-.02.03-.03.04h4.28c.79 0 1.27-.88.84-1.54M13 20c0 1.1.9 2 2 2s2-.9 2-2v-1h-4z"></svg:path>`,
})
export class IcRoundForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForkLeftIcon],svg[ic-round-fork-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20c0 .55-.45 1-1 1s-1-.45-1-1v-3c-.73-2.58-3.07-3.47-5.17-3l.88.88a.996.996 0 1 1-1.41 1.41L4.71 13.7a.996.996 0 0 1 0-1.41L7.3 9.7a.996.996 0 1 1 1.41 1.41l-.88.89c1.51-.33 3.73.08 5.17 1.36V6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L17.3 6.3a.996.996 0 1 1-1.41 1.41L15 6.83z"></svg:path>`,
})
export class IcRoundForkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForkRightIcon],svg[ic-round-fork-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20c0 .55.45 1 1 1s1-.45 1-1v-3c.73-2.58 3.07-3.47 5.17-3l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L16.7 9.7a.996.996 0 1 0-1.41 1.41l.88.89c-1.51-.33-3.73.08-5.17 1.36V6.83l.88.88a.996.996 0 1 0 1.41-1.41L10.7 3.71a.996.996 0 0 0-1.41 0L6.71 6.29A.996.996 0 1 0 8.12 7.7L9 6.83z"></svg:path>`,
})
export class IcRoundForkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatAlignCenterIcon],svg[ic-round-format-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1m-3 5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m3-5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatAlignJustifyIcon],svg[ic-round-format-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatAlignLeftIcon],svg[ic-round-format-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0-8H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1M4 13h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0 8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatAlignRightIcon],svg[ic-round-format-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m6-4h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1m-6-4h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m6-4h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatBoldIcon],svg[ic-round-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77c.01-1.53-.85-2.84-2.15-3.44M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundFormatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatClearIcon],svg[ic-round-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 8c.83 0 1.5-.67 1.5-1.5S19.33 5 18.5 5H6.39l3 3h1.83l-.55 1.28l2.09 2.09L14.21 8zm-1.06 10.88L4.12 5.56a.996.996 0 1 0-1.41 1.41l6.26 6.26l-1.65 3.84c-.39.92.28 1.93 1.27 1.93c.55 0 1.05-.33 1.27-.84l1.21-2.83l4.95 4.95c.39.39 1.02.39 1.41 0c.4-.38.4-1.01.01-1.4"></svg:path>`,
})
export class IcRoundFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatColorFillIcon],svg[ic-round-format-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.94 16.56c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12L8.32.7a.996.996 0 1 0-1.41 1.41l1.68 1.68l-5.15 5.15a1.49 1.49 0 0 0 0 2.12zM10 5.21L14.79 10H5.21zM19 17c1.1 0 2-.9 2-2c0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2m1 3H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcRoundFormatColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatColorResetIcon],svg[ic-round-format-color-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14c0-3.09-3.6-7.88-5.23-9.87a1 1 0 0 0-1.55 0c-.46.57-1.08 1.36-1.73 2.27l8.44 8.44c.04-.28.07-.56.07-.84m1.29 5.01L6.12 5.84a.996.996 0 1 0-1.41 1.41l2.61 2.61C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6c1.52 0 2.9-.57 3.95-1.5l1.92 1.92c.39.39 1.02.39 1.41 0c.4-.38.4-1.02.01-1.41"></svg:path>`,
})
export class IcRoundFormatColorResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatColorTextIcon],svg[ic-round-format-color-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2M7.11 17c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76c.79 0 1.33-.79 1.05-1.52L13.69 4.17C13.43 3.47 12.75 3 12 3s-1.43.47-1.69 1.17L6.06 15.48c-.28.73.27 1.52 1.05 1.52m4.83-11.4h.12l2.03 5.79H9.91z"></svg:path>`,
})
export class IcRoundFormatColorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatIndentDecreaseIcon],svg[ic-round-format-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1m-8.65-4.65l2.79 2.79c.32.32.86.1.86-.35V9.21c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.19-.2.51-.01.7M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m9 5h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFormatIndentDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatIndentIncreaseIcon],svg[ic-round-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 9.21v5.59c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.8a.5.5 0 0 0-.85.36M12 17h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1M3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m9 5h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatItalicIcon],svg[ic-round-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5"></svg:path>`,
})
export class IcRoundFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatLineSpacingIcon],svg[ic-round-format-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.29 7c.45 0 .67-.54.35-.85l-2.29-2.3c-.2-.2-.51-.2-.71 0l-2.29 2.3a.5.5 0 0 0 .36.85H4v10H2.71c-.45 0-.67.54-.35.85l2.29 2.29c.2.2.51.2.71 0l2.29-2.29a.5.5 0 0 0-.36-.85H6V7zM11 7h10c.55 0 1-.45 1-1s-.45-1-1-1H11c-.55 0-1 .45-1 1s.45 1 1 1m10 10H11c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0-6H11c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundFormatLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatListBulletedIcon],svg[ic-round-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M8 19h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0-6h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatListNumberedIcon],svg[ic-round-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m12 10H8c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1m0-6H8c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1M4.5 16h-2c-.28 0-.5.22-.5.5s.22.5.5.5H4v.5h-.5c-.28 0-.5.22-.5.5s.22.5.5.5H4v.5H2.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5m-2-11H3v2.5c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5m2 5h-2c-.28 0-.5.22-.5.5s.22.5.5.5h1.3l-1.68 1.96a.5.5 0 0 0-.12.32v.22c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H3.2l1.68-1.96a.5.5 0 0 0 .12-.32v-.22c0-.28-.22-.5-.5-.5"></svg:path>`,
})
export class IcRoundFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatListNumberedRtlIcon],svg[ic-round-format-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 16h-2c-.28 0-.5.22-.5.5s.22.5.5.5H20v.5h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v.5h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5m-2-11h.5v2.5c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5m2.5 5.72v-.22c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5h1.3l-1.68 1.96a.5.5 0 0 0-.12.32v.22c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.3l1.68-1.96a.5.5 0 0 0 .12-.32M15 5H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1m0 12H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1m0-6H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundFormatListNumberedRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatOverlineIcon],svg[ic-round-format-overline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1m7 3c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5"></svg:path>`,
})
export class IcRoundFormatOverlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatPaintIcon],svg[ic-round-format-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4h-9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"></svg:path>`,
})
export class IcRoundFormatPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatQuoteIcon],svg[ic-round-format-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.17 17c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94m10 0c.51 0 .98-.29 1.2-.74l1.42-2.84c.14-.28.21-.58.21-.89V8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2l-1.03 2.06c-.45.89.2 1.94 1.2 1.94"></svg:path>`,
})
export class IcRoundFormatQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatShapesIcon],svg[ic-round-format-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1v10H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1V7h1c.55 0 1-.45 1-1M3 3h2v2H3zm2 18H3v-2h2zm12-2H7v-1c0-.55-.45-1-1-1H5V7h1c.55 0 1-.45 1-1V5h10v1c0 .55.45 1 1 1h1v10h-1c-.55 0-1 .45-1 1zm4 2h-2v-2h2zM19 5V3h2v2zm-6.06 2.65a1.02 1.02 0 0 0-.95-.65c-.42 0-.8.26-.94.65l-2.77 7.33c-.19.49.17 1.02.7 1.02c.32 0 .6-.2.71-.5l.55-1.5h3.49l.56 1.51c.11.29.39.49.71.49h.01c.53 0 .89-.53.71-1.02zm-2.25 5.09L12 8.91l1.3 3.83z"></svg:path>`,
})
export class IcRoundFormatShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatSizeIcon],svg[ic-round-format-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.5c0 .83.67 1.5 1.5 1.5H14v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h3.5c.83 0 1.5-.67 1.5-1.5S21.33 4 20.5 4h-10C9.67 4 9 4.67 9 5.5M4.5 12H6v5.5c0 .83.67 1.5 1.5 1.5S9 18.33 9 17.5V12h1.5c.83 0 1.5-.67 1.5-1.5S11.33 9 10.5 9h-6C3.67 9 3 9.67 3 10.5S3.67 12 4.5 12"></svg:path>`,
})
export class IcRoundFormatSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatStrikethroughIcon],svg[ic-round-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c1.1 0 2-.9 2-2v-1h-4v1c0 1.1.9 2 2 2M5 5.5C5 6.33 5.67 7 6.5 7H10v3h4V7h3.5c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5M4 14h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFormatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatTextdirectionLToRIcon],svg[ic-round-format-textdirection-l-to-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1H9.17C7.08 2 5.22 3.53 5.02 5.61A4 4 0 0 0 9 10m11.65 7.65l-2.79-2.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h11v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"></svg:path>`,
})
export class IcRoundFormatTextdirectionLToRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatTextdirectionRToLIcon],svg[ic-round-format-textdirection-r-to-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10v4c0 .55.45 1 1 1s1-.45 1-1V4h2v10c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-6.83C8.08 2 6.22 3.53 6.02 5.61A4 4 0 0 0 10 10m-2 7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class IcRoundFormatTextdirectionRToLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFormatUnderlinedIcon],svg[ic-round-format-underlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 16.95c3.03-.39 5.21-3.11 5.21-6.16V4.25a1.25 1.25 0 0 0-2.5 0v6.65c0 1.67-1.13 3.19-2.77 3.52A3.494 3.494 0 0 1 8.5 11V4.25a1.25 1.25 0 0 0-2.5 0V11c0 3.57 3.13 6.42 6.79 5.95M5 20c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFormatUnderlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFortIcon],svg[ic-round-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.41L15 9v1H9V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v1H3V4c0-.55-.45-1-1-1s-1 .45-1 1v2.17c0 .53.21 1.04.59 1.42L3 9v6l-1.41 1.41c-.38.38-.59.89-.59 1.42V19c0 1.1.9 2 2 2h7v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 18v3h7c1.1 0 2-.9 2-2v-1.17c0-.53-.21-1.04-.59-1.41L21 15V9l1.41-1.41c.38-.38.59-.89.59-1.42V4c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundFortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForumIcon],svg[ic-round-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2m-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2"></svg:path>`,
})
export class IcRoundForumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForwardIcon],svg[ic-round-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z"></svg:path>`,
})
export class IcRoundForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForward10Icon],svg[ic-round-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 12 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71l-3.79-3.79a.5.5 0 0 0-.85.36V5c-4.94 0-8.84 4.48-7.84 9.6c.6 3.11 2.9 5.5 5.99 6.19c4.83 1.08 9.15-2.2 9.77-6.67c.09-.59-.4-1.12-1-1.12m-8.02 3v-4.27h-.09l-1.77.63v.69l1.01-.31V16zm3.42-4.22c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1s-.33.18-.45.33s-.23.34-.29.57s-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57s.28.26.46.33s.37.1.59.1s.41-.03.59-.1s.33-.18.45-.33s.22-.34.29-.57s.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57s-.29-.26-.46-.33m.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32s-.11.14-.19.17s-.16.05-.25.05s-.18-.02-.25-.05s-.14-.09-.19-.17s-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31s.11-.14.19-.17s.16-.05.25-.05s.18.02.25.05s.14.09.19.17s.09.18.12.31s.04.29.04.48v.97z"></svg:path>`,
})
export class IcRoundForward10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForward30Icon],svg[ic-round-forward-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 12 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71l-3.79-3.79a.5.5 0 0 0-.85.36V5c-4.94 0-8.84 4.48-7.84 9.6c.6 3.11 2.9 5.5 5.99 6.19c4.83 1.08 9.15-2.2 9.77-6.67c.09-.59-.4-1.12-1-1.12m-8.38 2.22c-.06.05-.12.09-.2.12s-.17.04-.27.04a.7.7 0 0 1-.45-.15c-.06-.05-.1-.1-.13-.17s-.05-.14-.05-.22h-.85c0 .21.04.39.12.55s.19.28.33.38s.29.18.46.23s.35.07.53.07c.21 0 .41-.03.6-.08s.34-.14.48-.24s.24-.24.32-.39s.12-.33.12-.53c0-.23-.06-.44-.18-.61s-.3-.3-.54-.39c.1-.05.2-.1.28-.17s.15-.14.2-.22s.1-.16.13-.25s.04-.18.04-.27c0-.2-.04-.37-.11-.53s-.17-.28-.3-.38s-.28-.18-.46-.23s-.37-.08-.59-.08c-.19 0-.38.03-.54.08s-.32.13-.44.23s-.23.22-.3.37s-.11.3-.11.48h.85a.46.46 0 0 1 .17-.35c.05-.04.11-.07.18-.1s.14-.03.22-.03c.1 0 .18.01.25.04s.13.06.18.11s.08.11.11.17s.04.14.04.22c0 .18-.05.32-.16.43s-.26.16-.48.16h-.43v.66h.45c.11 0 .2.01.29.04s.16.06.22.11s.11.12.14.2s.05.18.05.29c0 .09-.01.17-.04.24s-.08.11-.13.17m3.9-3.44c-.18-.07-.37-.1-.59-.1s-.41.03-.59.1s-.33.18-.45.33s-.23.34-.29.57s-.1.5-.1.82v.74c0 .32.04.6.11.82s.17.42.3.57s.28.26.46.33s.37.1.59.1s.41-.03.59-.1s.33-.18.45-.33s.22-.34.29-.57s.1-.5.1-.82v-.74c0-.32-.04-.6-.11-.82s-.17-.42-.3-.57s-.28-.26-.46-.33m.01 2.57c0 .19-.01.35-.04.48s-.06.24-.11.32s-.11.14-.19.17s-.16.05-.25.05s-.18-.02-.25-.05s-.14-.09-.19-.17s-.09-.19-.12-.32s-.04-.29-.04-.48v-.97c0-.19.01-.35.04-.48s.06-.23.12-.31s.11-.14.19-.17s.16-.05.25-.05s.18.02.25.05s.14.09.19.17s.09.18.12.31s.04.29.04.48v.97z"></svg:path>`,
})
export class IcRoundForward30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForward5Icon],svg[ic-round-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.87 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 11.95 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L12.8 1.85a.5.5 0 0 0-.85.35V5c-4.94 0-8.84 4.48-7.84 9.6c.6 3.11 2.9 5.5 5.99 6.19c4.83 1.08 9.15-2.2 9.77-6.67c.09-.59-.4-1.12-1-1.12m-6.44 2.15c-.05.07-.11.13-.18.17s-.17.06-.27.06q-.255 0-.42-.15c-.165-.15-.17-.24-.19-.41h-.84c.01.2.05.37.13.53s.19.28.32.39s.29.19.46.24s.35.08.53.08c.24 0 .46-.04.64-.12s.33-.18.45-.31s.21-.28.27-.45s.09-.35.09-.54c0-.22-.03-.43-.09-.6s-.14-.33-.25-.45s-.25-.22-.41-.28s-.34-.1-.55-.1c-.07 0-.14.01-.2.02s-.13.02-.18.04s-.1.03-.15.05s-.08.04-.11.05l.11-.92h1.7v-.71H10.9l-.25 2.17l.67.17c.03-.03.06-.06.1-.09s.07-.05.12-.07s.1-.04.15-.05s.13-.02.2-.02c.12 0 .22.02.3.05s.16.09.21.15s.1.14.13.24s.04.19.04.31s-.01.22-.03.31s-.06.17-.11.24"></svg:path>`,
})
export class IcRoundForward5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundForwardToInboxIcon],svg[ic-round-forward-to-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V20h-3c-.55 0-1-.45-1-1s.45-1 1-1h3z"></svg:path>`,
})
export class IcRoundForwardToInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFoundationIcon],svg[ic-round-foundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v3H4c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z"></svg:path>`,
})
export class IcRoundFoundationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFreeBreakfastIcon],svg[ic-round-free-breakfast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class IcRoundFreeBreakfastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFreeCancellationIcon],svg[ic-round-free-cancellation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 20H5V10h14v2.96c0 .89 1.08 1.34 1.71.71a1 1 0 0 0 .29-.71V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h5.79c.89 0 1.34-1.08.71-1.71c-.19-.18-.44-.29-.71-.29m2.92-1.74a.996.996 0 0 1 1.41 0l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24a.996.996 0 0 1-1.41 0l-2.12-2.12a.984.984 0 0 1 0-1.4m-2.42-1.97a.996.996 0 0 1-1.41 0L9 15.41l-.88.88a.996.996 0 1 1-1.41-1.41l.88-.88l-.88-.88a.996.996 0 1 1 1.41-1.41l.88.88l.88-.88a.996.996 0 1 1 1.41 1.41l-.88.88l.88.88c.39.39.39 1.02 0 1.41"></svg:path>`,
})
export class IcRoundFreeCancellationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFrontHandIcon],svg[ic-round-front-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 14.5c0 .28-.22.5-.5.5c-1.51 0-2.77 1.12-2.97 2.58c-.03.24-.25.42-.49.42c-.3 0-.54-.27-.5-.57a4.03 4.03 0 0 1 3.46-3.4V3.25a1.25 1.25 0 0 0-2.5 0v7.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V1.25a1.25 1.25 0 0 0-2.5 0v9.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V2.75a1.25 1.25 0 0 0-2.5 0v8.75c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5a1.25 1.25 0 0 0-2.5 0z"></svg:path>`,
})
export class IcRoundFrontHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFullscreenIcon],svg[ic-round-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1m0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFullscreenExitIcon],svg[ic-round-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class IcRoundFullscreenExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundFunctionsIcon],svg[ic-round-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4H7.56C6.7 4 6 4.7 6 5.56c0 .28.12.55.32.74L12.5 12l-6.18 5.7c-.2.19-.32.46-.32.74C6 19.3 6.7 20 7.56 20h8.94c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11l3.59-3.59c.78-.78.78-2.05 0-2.83L11 7h5.5c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4"></svg:path>`,
})
export class IcRoundFunctionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGMobiledataIcon],svg[ic-round-g-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c0 .55.45 1 1 1h1v2H9V9h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundGMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGTranslateIcon],svg[ic-round-g-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06l-1.23 1.18l-.06-.05c-.29-.27-.78-.59-1.52-.59c-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61c0 2.35-1.61 4-3.92 4m6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7M21 20c0 .55-.45 1-1 1h-7l2-2l-.81-2.77l.92-.92L17.79 18l.73-.73l-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundGTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGamepadIcon],svg[ic-round-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.29V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4.29c0 .13.05.26.15.35l2.5 2.5c.2.2.51.2.71 0l2.5-2.5c.09-.09.14-.21.14-.35M7.29 9H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4.29c.13 0 .26-.05.35-.15l2.5-2.5c.2-.2.2-.51 0-.71l-2.5-2.5A.48.48 0 0 0 7.29 9M9 16.71V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.29a.47.47 0 0 0-.15-.35l-2.5-2.5c-.2-.2-.51-.2-.71 0l-2.5 2.5c-.09.09-.14.21-.14.35m7.35-7.56l-2.5 2.5c-.2.2-.2.51 0 .71l2.5 2.5c.09.09.22.15.35.15H21c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.29a.45.45 0 0 0-.36.14"></svg:path>`,
})
export class IcRoundGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGamesIcon],svg[ic-round-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.29V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4.29c0 .13.05.26.15.35l2.5 2.5c.2.2.51.2.71 0l2.5-2.5c.09-.09.14-.21.14-.35M7.29 9H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4.29c.13 0 .26-.05.35-.15l2.5-2.5c.2-.2.2-.51 0-.71l-2.5-2.5A.48.48 0 0 0 7.29 9M9 16.71V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.29a.47.47 0 0 0-.15-.35l-2.5-2.5c-.2-.2-.51-.2-.71 0l-2.5 2.5c-.09.09-.14.21-.14.35m7.35-7.56l-2.5 2.5c-.2.2-.2.51 0 .71l2.5 2.5c.09.09.22.15.35.15H21c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.29a.45.45 0 0 0-.36.14"></svg:path>`,
})
export class IcRoundGamesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGarageIcon],svg[ic-round-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m8.33 7.5l-.66 2h8.66l-.66-2z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 15.69c0 .45-.35.81-.78.81h-.44c-.44 0-.78-.36-.78-.81V16.5H7v1.19c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81v-6.5c.82-2.47 1.34-4.03 1.56-4.69c.05-.16.12-.29.19-.4c.02-.02.03-.04.05-.06c.38-.53.92-.54.92-.54h8.56s.54.01.92.53c.02.03.03.05.05.07c.07.11.14.24.19.4c.22.66.74 2.23 1.56 4.69z"></svg:path>`,
})
export class IcRoundGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGasMeterIcon],svg[ic-round-gas-meter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4m-4 14c-1.38 0-2.5-1.1-2.5-2.46c0-1.02.38-1.35 2.12-3.35c.2-.23.56-.23.75 0c1.73 1.99 2.12 2.34 2.12 3.35C14.5 16.9 13.38 18 12 18m3-8H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundGasMeterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGavelIcon],svg[ic-round-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1M5.24 8.07l2.83-2.83L20.8 17.97c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0zm8.49-5.66l2.83 2.83c.78.78.78 2.05 0 2.83l-1.42 1.42l-5.65-5.66l1.41-1.41c.78-.79 2.05-.79 2.83-.01m-9.9 7.07l5.66 5.66l-1.41 1.41c-.78.78-2.05.78-2.83 0l-2.83-2.83c-.78-.78-.78-2.05 0-2.83z"></svg:path>`,
})
export class IcRoundGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGeneratingTokensIcon],svg[ic-round-generating-tokens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 11.5c-.55 0-1-.45-1-1v-4H6.75c-.41 0-.75-.34-.75-.75S6.34 9 6.75 9h4.5c.41 0 .75.34.75.75s-.34.75-.75.75H10v4c0 .55-.45 1-1 1M20.25 3.75l1.75.79a.5.5 0 0 1 0 .91l-1.75.79L19.46 8a.5.5 0 0 1-.91 0l-.79-1.75L16 5.46a.5.5 0 0 1 0-.91l1.75-.79l.79-1.76a.5.5 0 0 1 .91 0zm0 14l1.75.79a.5.5 0 0 1 0 .91l-1.75.79l-.79 1.76a.5.5 0 0 1-.91 0l-.79-1.75l-1.76-.79a.5.5 0 0 1 0-.91l1.75-.79l.79-1.76a.5.5 0 0 1 .91 0z"></svg:path>`,
})
export class IcRoundGeneratingTokensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGestureIcon],svg[ic-round-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.72 6.04c.47.46 1.21.48 1.71.06c.37-.32.69-.51.87-.43c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.34 2.98c.75.56 1.74.73 2.64.46c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.83-3.44 4.08-3.44c1.63 0 1.65 1.01 1.76 1.79c-3.78.64-5.38 3.67-5.38 5.37s1.44 3.09 3.21 3.09c1.63 0 4.29-1.33 4.69-6.1h1.21a1.25 1.25 0 0 0 0-2.5h-1.22c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.84c-.58.73-2.06 2.48-2.29 2.72c-.25.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3c-1.09 0-2.04.63-2.7 1.22c-.53.48-.53 1.32-.02 1.82m10.16 12.51c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.87-2.76c-.3 2.69-1.43 3.48-2.13 3.48"></svg:path>`,
})
export class IcRoundGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGetAppIcon],svg[ic-round-get-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundGetAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGifIcon],svg[ic-round-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 9c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75M10 9.75c0-.41-.34-.75-.75-.75H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.75h-2v-3h2.75c.41 0 .75-.34.75-.75m9 0c0-.41-.34-.75-.75-.75H15.5c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1h2.25c.41 0 .75-.34.75-.75"></svg:path>`,
})
export class IcRoundGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGifBoxIcon],svg[ic-round-gif-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.5 7.5c0 .28-.22.5-.5.5H8.5v2h1v-.5c0-.29.25-.53.55-.5c.26.02.45.26.45.52V13c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1H10c.28 0 .5.22.5.5M12 10c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5m2 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5v.5h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1v1c0 .28-.22.5-.5.5"></svg:path>`,
})
export class IcRoundGifBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGirlIcon],svg[ic-round-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5m2 8.5v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3h-.56c-.7 0-1.18-.7-.94-1.35l1.88-5.03a1.733 1.733 0 0 1 3.24 0l1.88 5.03c.24.65-.24 1.35-.94 1.35z"></svg:path>`,
})
export class IcRoundGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGiteIcon],svg[ic-round-gite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 9.41l-2.83-2.83c-.37-.37-.88-.58-1.41-.58H9V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-.17c-.53 0-1.04.21-1.42.59L2.59 9.41c-.38.38-.59.89-.59 1.42V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.17c0-.53-.21-1.04-.59-1.42M14 17H4v-5h10zm6 0h-4v-6.17l2-2l2 2z"></svg:path>`,
})
export class IcRoundGiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGolfCourseIcon],svg[ic-round-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11 18.03V8.98l4.22-2.15c.73-.37.73-1.43-.01-1.79l-4.76-2.33C9.78 2.38 9 2.86 9 3.6V19c0 .55-.45 1-1 1s-1-.45-1-1v-.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97"></svg:path>`,
})
export class IcRoundGolfCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGppBadIcon],svg[ic-round-gpp-bad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.7 4.51l-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.94 3.27 9.57 7.71 10.83c.19.05.39.05.57 0C16.73 20.66 20 16.03 20 11.09v-4.7c0-.84-.52-1.58-1.3-1.88m-3.9 10.28c-.39.39-1.02.39-1.41.01L12 13.42l-1.39 1.38a.996.996 0 1 1-1.41-1.41L10.59 12L9.2 10.61a.996.996 0 1 1 1.41-1.41L12 10.59l1.39-1.39a.996.996 0 1 1 1.41 1.41L13.42 12l1.38 1.38c.39.39.39 1.02 0 1.41"></svg:path>`,
})
export class IcRoundGppBadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGppGoodIcon],svg[ic-round-gpp-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.71c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V6.39a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01m-1.07 12.57l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01"></svg:path>`,
})
export class IcRoundGppGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGppMaybeIcon],svg[ic-round-gpp-maybe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01M12 16c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m0-4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundGppMaybeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGpsFixedIcon],svg[ic-round-gps-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m8.94 3A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcRoundGpsFixedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGpsNotFixedIcon],svg[ic-round-gps-not-fixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 11A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7"></svg:path>`,
})
export class IcRoundGpsNotFixedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGpsOffIcon],svg[ic-round-gps-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13c.55 0 1-.45 1-1s-.45-1-1-1h-1.06A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06c-.98.11-1.91.38-2.77.78l1.53 1.53a6.995 6.995 0 0 1 8.87 8.87l1.53 1.53c.4-.86.67-1.79.78-2.77zm-1.56 5.88L5.12 3.56a.996.996 0 1 0-1.41 1.41L5.04 6.3A9.06 9.06 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06c1.77-.2 3.38-.91 4.69-1.98l1.33 1.33c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M12 19A6.995 6.995 0 0 1 6.46 7.73l9.81 9.81A6.97 6.97 0 0 1 12 19"></svg:path>`,
})
export class IcRoundGpsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGradeIcon],svg[ic-round-grade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88l4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51l-2.35-5.54a.498.498 0 0 0-.92 0L9.19 8.63l-6.01.51a.5.5 0 0 0-.28.88l4.56 3.95l-1.37 5.88c-.1.43.37.77.75.54z"></svg:path>`,
})
export class IcRoundGradeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGradientIcon],svg[ic-round-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 18H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundGradientIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGradingIcon],svg[ic-round-grading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m0 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m0 4h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m0 4h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m10.41-2.83l-.71-.71a.996.996 0 1 0-1.41 1.41l1.42 1.42c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 1 0-1.41-1.41zM4 4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundGradingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGrainIcon],svg[ic-round-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m12-8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-4 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcRoundGrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGraphicEqIcon],svg[ic-round-graphic-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1m4 4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v18c0 .55.45 1 1 1m-8-8c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m12 4c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1m3-7v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundGraphicEqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGrassIcon],svg[ic-round-grass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.64 11.02a10 10 0 0 1 2.56-3.83c.38-.36.04-1-.46-.85c-3.32.98-5.75 4.05-5.74 7.69c.95-1.28 2.2-2.31 3.64-3.01m-4.22-2.17a8.56 8.56 0 0 0-2.96-3.87c-.42-.3-.96.19-.72.65C8.54 7.15 9 8.88 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.9 9.9 0 0 1 1.24-3.29M12 20H3c-.55 0-1-.45-1-1s.45-1 1-1h4.75a8.03 8.03 0 0 0-4-5.06a.49.49 0 0 1-.26-.44c0-.27.22-.49.49-.5H4c4.42 0 8 3.58 8 8m8.26-7.06a8 8 0 0 0-4 5.06H21c.55 0 1 .45 1 1s-.45 1-1 1h-7c0-.68-.07-1.35-.2-2c-.15-.72-.38-1.42-.67-2.07A7.97 7.97 0 0 1 20 12h.02a.5.5 0 0 1 .49.5c.01.19-.1.35-.25.44"></svg:path>`,
})
export class IcRoundGrassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGreaterThanIcon],svg[ic-round-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.25 17l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 18.5a.901.901 0 1 1-1-1.5"></svg:path>`,
})
export class IcRoundGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGreaterThanEqualIcon],svg[ic-round-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.25 15l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 16.5a.901.901 0 1 1-1-1.5"></svg:path><svg:path fill="currentColor" d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcRoundGreaterThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGrid3x3Icon],svg[ic-round-grid-3x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9c0-.55-.45-1-1-1h-3V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v4H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-4h3c.55 0 1-.45 1-1m-6 5h-4v-4h4z"></svg:path>`,
})
export class IcRoundGrid3x3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGrid4x4Icon],svg[ic-round-grid-4x4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6c0-.55-.45-1-1-1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H7V3c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v4H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V7h2c.55 0 1-.45 1-1M7 7h4v4H7zm0 10v-4h4v4zm10 0h-4v-4h4zm0-6h-4V7h4z"></svg:path>`,
})
export class IcRoundGrid4x4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGridGoldenratioIcon],svg[ic-round-grid-goldenratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h-6v-2h6c.55 0 1-.45 1-1s-.45-1-1-1h-6V3c0-.55-.45-1-1-1s-1 .45-1 1v6h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v6H3c-.55 0-1 .45-1 1s.45 1 1 1h6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1m-8 0h-2v-2h2z"></svg:path>`,
})
export class IcRoundGridGoldenratioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGridOffIcon],svg[ic-round-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v.89l2 2V4h4v4h-2.89l2 2H14v.89l2 2V10h4v4h-2.89l2 2H20v.89l2 2V4c0-1.1-.9-2-2-2H5.11l2 2zm8 0h3c.55 0 1 .45 1 1v3h-4zm6.16 17.88L2.12 1.84A.996.996 0 1 0 .71 3.25L2 4.55V20c0 1.1.9 2 2 2h15.45l1.3 1.3c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42M10 12.55L11.45 14H10zm-6-6L5.45 8H4zM8 20H5c-.55 0-1-.45-1-1v-3h4zm0-6H4v-4h3.45l.55.55zm6 6h-4v-4h3.45l.55.55zm2 0v-1.45L17.45 20z"></svg:path>`,
})
export class IcRoundGridOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGridOnIcon],svg[ic-round-grid-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H5c-.55 0-1-.45-1-1v-3h4zm0-6H4v-4h4zm0-6H4V5c0-.55.45-1 1-1h3zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1m1-6h-4v-4h4zm0-6h-4V4h3c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundGridOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGridViewIcon],svg[ic-round-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2m0 10h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2m8-16v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2m2 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2"></svg:path>`,
})
export class IcRoundGridViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupIcon],svg[ic-round-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c.02.01.03.03.04.04c1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5"></svg:path>`,
})
export class IcRoundGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupAddIcon],svg[ic-round-group-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V8c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"></svg:path>`,
})
export class IcRoundGroupAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupOffIcon],svg[ic-round-group-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c0-1.42-.5-2.73-1.33-3.76c.42-.14.86-.24 1.33-.24c2.21 0 4 1.79 4 4s-1.79 4-4 4h-.18l-.77-.77c.6-.94.95-2.05.95-3.23M7.24 4.41a3.996 3.996 0 0 1 5.35 5.35zm13.95 16.78a.996.996 0 1 1-1.41 1.41l-2.99-2.99A1 1 0 0 1 16 20H2c-.55 0-1-.45-1-1v-2c0-2.66 5.33-4 8-4c.37 0 .8.03 1.25.08L9.17 12H9c-2.21 0-4-1.79-4-4v-.17L1.39 4.22A.996.996 0 1 1 2.8 2.81zm-2.3-5.12c-.29-1.22-1.13-2.19-2.23-2.94c2.76.4 6.34 1.69 6.34 3.87v2c0 .32-.15.6-.38.79z"></svg:path>`,
})
export class IcRoundGroupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupRemoveIcon],svg[ic-round-group-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"></svg:path>`,
})
export class IcRoundGroupRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupWorkIcon],svg[ic-round-group-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcRoundGroupWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroupsIcon],svg[ic-round-groups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V17c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H23c.55 0 1-.45 1-1zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class IcRoundGroupsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroups2Icon],svg[ic-round-groups-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 12h3.46a1.5 1.5 0 0 0 1.48-1.75l-.3-1.79a2.951 2.951 0 0 0-5.82.01l-.3 1.79c-.15.91.55 1.74 1.48 1.74m-8.61-.89c-.13.26-.18.57-.1.88c.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29c0-.14-.03-.27-.07-.4c-.01-.03-.01-.05.01-.08c.09-.16.14-.34.14-.53c0-.31-.14-.6-.36-.82c-.03-.03-.03-.06-.02-.1c.07-.2.07-.43.01-.65a1.12 1.12 0 0 0-.99-.74a.1.1 0 0 1-.07-.03C5.03 8.14 4.72 8 4.37 8c-.3 0-.57.1-.75.26c-.03.03-.06.03-.09.02a1.24 1.24 0 0 0-1.7 1.03q0 .03-.03.06c-.29.26-.46.65-.41 1.05c.03.22.12.43.25.6c.03.02.03.06.02.09m14.58 2.54c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 16.39V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93A2.01 2.01 0 0 0 0 16.43V17c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58m21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H23c.55 0 1-.45 1-1v-.57c0-.81-.48-1.53-1.22-1.85M22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06c0 1.1.9 2 2 2s2-.9 2-2"></svg:path>`,
})
export class IcRoundGroups2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundGroups3Icon],svg[ic-round-groups-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 16.39V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93A2.01 2.01 0 0 0 0 16.43V17c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58m21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H23c.55 0 1-.45 1-1v-.57c0-.81-.48-1.53-1.22-1.85M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3M1.497 11L4 8.497L6.503 11L4 13.503zM20 9l-2.5 4h5z"></svg:path>`,
})
export class IcRoundGroups3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHMobiledataIcon],svg[ic-round-h-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11H9V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1z"></svg:path>`,
})
export class IcRoundHMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHPlusMobiledataIcon],svg[ic-round-h-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11H6V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1zm9 0h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundHPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHailIcon],svg[ic-round-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.95-4a1 1 0 0 1 1 1.09c-.02.15-.21 4.06-3.95 5.31V21c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V10.1q-.45.15-.6.3c-.46.36-1.17.87-1.36 2.67c-.05.52-.47.93-1 .93a.995.995 0 0 1-1-1.07c.13-1.6.62-2.98 2.07-4.22C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06c.43-.34 1.28-.99 1.48-3.02a1 1 0 0 1 .99-.92M5 16h1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHandshakeIcon],svg[ic-round-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46l-7.05 7.04l-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L16.48 9c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83c-1.27 1.27-2.61.22-2.83 0l-3.76-3.76l-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3 3 0 0 0-4.18-.06z"></svg:path>`,
})
export class IcRoundHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHandymanIcon],svg[ic-round-handyman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.67 18.17l-4.72-4.72c-.48-.48-.99-.59-1.58-.59l-2.54 2.54c0 .59.11 1.11.59 1.58l4.72 4.72c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41"></svg:path><svg:path fill="currentColor" d="M16.63 9.49c.39.39 1.02.39 1.41 0l.71-.71l2.12 2.12a3 3 0 0 0 0-4.24l-2.83-2.83a.996.996 0 0 0-1.41 0l-.71.71V2c0-.62-.76-.95-1.21-.5l-2.54 2.54c-.45.45-.12 1.21.5 1.21h2.54l-.71.71a.996.996 0 0 0 0 1.41l.35.35l-2.89 2.89l-4.11-4.13v-1c0-.27-.11-.52-.29-.71L5.54 2.74a.996.996 0 0 0-1.41 0L2.71 4.16a.996.996 0 0 0 0 1.41L4.73 7.6c.19.19.44.29.71.29h1l4.13 4.13l-.85.85h-1.3c-.53 0-1.04.21-1.41.59l-4.72 4.72a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l4.72-4.72c.38-.38.59-.88.59-1.41v-1.29l5.15-5.15z"></svg:path>`,
})
export class IcRoundHandymanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHardwareIcon],svg[ic-round-hardware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.59 3.41L15 6V5c0-1.1-.9-2-2-2H9C6.24 3 4 5.24 4 8h5v3h6V8l2.59 2.59c.26.26.62.41 1 .41h.01c.77 0 1.4-.63 1.4-1.41V4.41C20 3.63 19.37 3 18.59 3h-.01c-.37 0-.73.15-.99.41M9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7z"></svg:path>`,
})
export class IcRoundHardwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdIcon],svg[ic-round-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.75 12c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75m3.25-6H17c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5m1 4.5h2v-3h-2z"></svg:path>`,
})
export class IcRoundHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrAutoIcon],svg[ic-round-hdr-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 8.04h-.09l-1.6 4.55h3.29z"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59"></svg:path>`,
})
export class IcRoundHdrAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrAutoSelectIcon],svg[ic-round-hdr-auto-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16H7.25c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75H10c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5m0 4.5H8v-3h2zM4.25 16c-.41 0-.75.34-.75.75V18h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75m19 2.5H22v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75V20h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M16.5 16h-2.75c-.41 0-.75.34-.75.75v4.56c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41c.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5m0 2.5h-2v-1h2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z"></svg:path><svg:path fill="currentColor" d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2.44 9c-.24 0-.45-.15-.53-.38l-.49-1.41h-2.83l-.5 1.41a.564.564 0 1 1-1.06-.38l2.12-5.65a.906.906 0 0 1 1.7 0l2.12 5.65a.56.56 0 0 1-.53.76"></svg:path>`,
})
export class IcRoundHdrAutoSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrEnhancedSelectIcon],svg[ic-round-hdr-enhanced-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m2 7h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V6c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1m-4 7H7c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5h3c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5m0 4.5H8v-3h2zm6.5-4.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41c.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5m0 2.5h-2v-1h2zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm18.5.5v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v1.25c0 .41.34.75.75.75s.75-.34.75-.75V20h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"></svg:path>`,
})
export class IcRoundHdrEnhancedSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrOffIcon],svg[ic-round-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 14.25V13h1.1l.72 1.59a.693.693 0 0 0 1.27-.55l-.49-1.14c.5-.3.9-.8.9-1.4v-1c0-.83-.67-1.5-1.5-1.5H17c-.55 0-1 .45-1 1v3.9l1.04 1.04c.27-.11.46-.38.46-.69m0-3.75h2v1h-2zm-4.5 0v.4l1.5 1.5v-1.9c0-.82-.68-1.5-1.5-1.5h-1.9l1.5 1.5zm8.03 10.53l-18-18a.742.742 0 1 0-1.05 1.05l4.98 4.98c-.27.11-.46.38-.46.69V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75V10.1l1.5 1.5v2.9c0 .28.22.5.5.5h2.5c.12 0 .24-.01.36-.04l7.11 7.11c.29.29.76.29 1.05 0a.74.74 0 0 0 .01-1.04"></svg:path>`,
})
export class IcRoundHdrOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrOffSelectIcon],svg[ic-round-hdr-off-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5v-1c0-.83-.67-1.5-1.5-1.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41c.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4m-1.5 0h-2v-1h2zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm6.5-2H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5m0 4.5H8v-3h2zm13.25-.5H22v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20h-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75M10.98 4.15L9.42 2.59c5.1-2.42 10.41 2.89 7.99 7.99l-1.56-1.56c.81-2.96-1.91-5.68-4.87-4.87m-5.35-1.1a.996.996 0 0 0 0 1.41l.96.96c-2.42 5.1 2.88 10.41 7.99 7.99l.95.95a.996.996 0 1 0 1.41-1.41l-9.9-9.91c-.38-.38-1.02-.38-1.41.01m2.52 3.93l4.87 4.87c-2.96.81-5.68-1.91-4.87-4.87"></svg:path>`,
})
export class IcRoundHdrOffSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrOnIcon],svg[ic-round-hdr-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 9c-.41 0-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C8 9.34 7.66 9 7.25 9M21 11.5v-1c0-.83-.67-1.5-1.5-1.5H17c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h1.1l.72 1.59a.693.693 0 0 0 1.27-.55l-.49-1.14c.5-.3.9-.8.9-1.4m-3.5 0v-1h2v1zM13 9h-3c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5h3c.82 0 1.5-.68 1.5-1.5v-3c0-.82-.68-1.5-1.5-1.5m0 4.5h-2v-3h2z"></svg:path>`,
})
export class IcRoundHdrOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrOnSelectIcon],svg[ic-round-hdr-on-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18.5v-1c0-.83-.67-1.5-1.5-1.5H14c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V20h1.1l.72 1.59c.11.25.36.41.63.41c.5 0 .83-.51.64-.97l-.48-1.13c.5-.3.9-.8.9-1.4m-1.5 0h-2v-1h2zm-13-.5h-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V19.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm6.5-2H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H10c.82 0 1.5-.67 1.5-1.5v-3c0-.83-.68-1.5-1.5-1.5m0 4.5H8v-3h2zm13.25-.5H22v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20h-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"></svg:path>`,
})
export class IcRoundHdrOnSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrPlusIcon],svg[ic-round-hdr-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 13.5c0 .6-.4 1.1-.9 1.4l.49 1.13c.2.46-.14.97-.64.97a.69.69 0 0 1-.63-.41L9.6 17H8.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V14c0-.55.45-1 1-1h2.5c.82 0 1.5.68 1.5 1.5zm-.75-3.5c-.41 0-.75-.34-.75-.75V9.5h-2v1.75c0 .41-.34.75-.75.75S7 11.66 7 11.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75V8h2V6.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75m5.5 4H16v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V16h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.74h.75c.41 0 .75.34.75.75v.01c0 .41-.34.75-.75.75m.75-5.5c0 .82-.67 1.5-1.5 1.5h-2.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5H16c.83 0 1.5.68 1.5 1.5z"></svg:path>`,
})
export class IcRoundHdrPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrStrongIcon],svg[ic-round-hdr-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundHdrStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHdrWeakIcon],svg[ic-round-hdr-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m12-2c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></svg:path>`,
})
export class IcRoundHdrWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeadphonesIcon],svg[ic-round-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7a9 9 0 0 0-18 0"></svg:path>`,
})
export class IcRoundHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeadphonesBatteryIcon],svg[ic-round-headphones-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-1v-.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7h-1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1M8 6c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2s2-.9 2-2v-1c0-1.1-.9-2-2-2h-.5v-1c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v1H12c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2s2-.9 2-2v-4c0-3.31-2.69-6-6-6"></svg:path>`,
})
export class IcRoundHeadphonesBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeadsetIcon],svg[ic-round-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.66 0 3-1.34 3-3v-7c0-5.17-4.36-9.32-9.6-8.98"></svg:path>`,
})
export class IcRoundHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeadsetMicIcon],svg[ic-round-headset-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v1h-6c-.55 0-1 .45-1 1s.45 1 1 1h5c1.66 0 3-1.34 3-3V10c0-5.17-4.36-9.32-9.6-8.98"></svg:path>`,
})
export class IcRoundHeadsetMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeadsetOffIcon],svg[ic-round-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c3.87 0 7 3.13 7 7v1h-2c-.6 0-1.13.27-1.49.68L21 18.17V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.9 6.9 0 0 1 12 4m9.19 17.19L2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l2.63 2.63A8.9 8.9 0 0 0 3 11v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1c0-.94.19-1.83.52-2.65L15 17.83V18c0 1.1.9 2 2 2h.17l1 1H13c-.55 0-1 .45-1 1s.45 1 1 1h6c.36 0 .68-.1.97-.26c.38.23.89.2 1.22-.13c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class IcRoundHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHealingIcon],svg[ic-round-healing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.73 12.02l3.98-3.98a.996.996 0 0 0 0-1.41l-4.34-4.34a.996.996 0 0 0-1.41 0l-3.98 3.98L8 2.29a1 1 0 0 0-1.41 0L2.25 6.63a.996.996 0 0 0 0 1.41l3.98 3.98L2.25 16a.996.996 0 0 0 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98l3.98 3.98c.2.2.45.29.71.29s.51-.1.71-.29l4.34-4.34a.996.996 0 0 0 0-1.41zM12 9c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-4.71 1.96L3.66 7.34l3.63-3.63l3.62 3.62zM10 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m2-4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2.66 9.34l-3.63-3.62l3.63-3.63l3.62 3.62z"></svg:path>`,
})
export class IcRoundHealingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHealthAndSafetyIcon],svg[ic-round-health-and-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 13h-1c-.83 0-1.5-.67-1.5-1.5S8.67 10 9.5 10h1V9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1v1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zm.8-10.74l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01"></svg:path>`,
})
export class IcRoundHealthAndSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHearingIcon],svg[ic-round-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20c-.29 0-.56-.06-.76-.15c-.71-.37-1.21-.88-1.71-2.38c-.51-1.56-1.47-2.29-2.39-3c-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5c2.56 0 4.63 1.85 4.95 4.31c.06.4.41.69.82.69h.34c.5 0 .89-.44.83-.94C20.49 4.59 17.61 2 14 2c-3.93 0-7 3.07-7 7c0 1.26.38 2.65 1.07 3.9c.91 1.65 1.98 2.48 2.85 3.15c.81.62 1.39 1.07 1.71 2.05c.6 1.82 1.37 2.84 2.73 3.55a4.007 4.007 0 0 0 5.5-2.58a.845.845 0 0 0-.81-1.07h-.35c-.38 0-.68.27-.81.63c-.26.79-1.01 1.37-1.89 1.37M6.97 1.97a1.01 1.01 0 0 0-1.5.07C3.93 3.94 3 6.36 3 9s.93 5.06 2.47 6.95c.38.46 1.07.5 1.49.08c.36-.36.39-.93.07-1.32C5.77 13.16 5 11.17 5 9s.77-4.16 2.04-5.7c.33-.4.29-.97-.07-1.33M11.5 9a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path>`,
})
export class IcRoundHearingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHearingDisabledIcon],svg[ic-round-hearing-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.96 3.3a.983.983 0 0 1 .07-1.32l.01-.01c.42-.42 1.12-.38 1.49.08C20.07 3.94 21 6.36 21 9a11 11 0 0 1-2.36 6.81l-1.43-1.43A8.96 8.96 0 0 0 19 9c0-2.17-.77-4.16-2.04-5.7M7.49 4.66A5.05 5.05 0 0 1 10 4c2.8 0 5 2.2 5 5c0 .8-.23 1.69-.63 2.54l1.48 1.48c.02-.04.05-.08.08-.13C16.62 11.65 17 10.26 17 9c0-3.93-3.07-7-7-7c-1.49 0-2.85.44-3.97 1.2zM10 6.5c-.21 0-.4.03-.59.08l3.01 3.01c.05-.19.08-.38.08-.59A2.5 2.5 0 0 0 10 6.5m10.49 13.99L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.42 1.42c-.2.49-.35 1-.43 1.54c-.1.59.38 1.12.97 1.12h.04c.48 0 .89-.35.96-.82c.02-.08.04-.16.06-.23l6.62 6.62c-.88.68-1.78 1.41-2.27 2.9c-.5 1.5-1 2.01-1.71 2.38c-.2.09-.47.15-.76.15c-.88 0-1.63-.58-1.9-1.37c-.13-.39-.53-.63-.95-.63c-.66 0-1.15.64-.95 1.26a4.01 4.01 0 0 0 5.44 2.39c1.36-.71 2.13-1.73 2.73-3.55c.32-.98.9-1.43 1.71-2.05c.03-.02.05-.04.08-.06l5.91 5.91c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41"></svg:path>`,
})
export class IcRoundHearingDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeartBrokenIcon],svg[ic-round-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.57 3.95c-1.92-1.29-4.08-1.17-5.8-.26L12 9h1.66c.67 0 1.15.65.96 1.29l-1.82 6.07c-.09.29-.52.2-.49-.1L13 10h-1.67c-.66 0-1.14-.64-.96-1.27l1.18-4.11c-1.85-1.73-4.84-2.3-7.28-.58C2.82 5.07 2 6.7 2 8.49c-.01 3.81 3.53 6.71 8.66 11.3c.76.68 1.92.69 2.69.01c4.98-4.42 8.87-7.58 8.64-11.62c-.09-1.73-.99-3.26-2.42-4.23"></svg:path>`,
})
export class IcRoundHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeatPumpIcon],svg[ic-round-heat-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91M7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2m-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2m4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2zM12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91m3.26-1.97l-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2m-2.2-3.7l2.2-2.2c.47.64.79 1.39.91 2.2z"></svg:path>`,
})
export class IcRoundHeatPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHeightIcon],svg[ic-round-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.99h1.79c.45 0 .67-.54.35-.85l-2.79-2.78a.513.513 0 0 0-.71 0L8.86 6.14c-.32.31-.1.85.35.85H11v10.02H9.21c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H13z"></svg:path>`,
})
export class IcRoundHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHelpIcon],svg[ic-round-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69c-.08.32-.13.68-.13 1.14h-2v-.5a4 4 0 0 1 1.17-2.83l1.24-1.26c.46-.44.68-1.1.55-1.8a1.99 1.99 0 0 0-1.39-1.53c-1.11-.31-2.14.32-2.47 1.27c-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88a4.01 4.01 0 0 1 3.23-2.83c1.52-.24 2.97.55 3.87 1.8c1.18 1.63.83 3.38-.19 4.4"></svg:path>`,
})
export class IcRoundHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHelpCenterIcon],svg[ic-round-help-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.99 15c-.7 0-1.26-.56-1.26-1.26c0-.71.56-1.25 1.26-1.25c.71 0 1.25.54 1.25 1.25c-.01.69-.54 1.26-1.25 1.26m3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17c-.1.18-.16.32-.19.63c-.05.45-.45.78-.9.78H12c-.52 0-.93-.44-.88-.96c.03-.34.11-.69.3-1.03c.49-.87 1.42-1.39 1.96-2.16c.57-.81.25-2.33-1.37-2.33c-.71 0-1.18.36-1.47.79c-.25.36-.69.53-1.1.36a.872.872 0 0 1-.4-1.31C9.65 6.65 10.67 6 11.99 6c1.48 0 2.49.67 3.01 1.52c.44.72.7 2.07.02 3.08"></svg:path>`,
})
export class IcRoundHelpCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHelpOutlineIcon],svg[ic-round-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79c-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67c.32-.89 1.27-1.5 2.3-1.28c.95.2 1.65 1.13 1.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88c0 .01-.01.01-.01.02c-.01.02-.02.03-.03.05c-.09.15-.18.32-.25.5c-.01.03-.03.05-.04.08c-.01.02-.01.04-.02.07c-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07c.02-.03.03-.06.05-.09c.08-.14.18-.27.28-.39c.01-.01.02-.03.03-.04c.1-.12.21-.23.33-.34c.96-.91 2.26-1.65 1.99-3.56c-.24-1.74-1.61-3.21-3.35-3.47"></svg:path>`,
})
export class IcRoundHelpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHevcIcon],svg[ic-round-hevc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 9c-.41 0-.75.34-.75.75V11h-1V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h1v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C7 9.34 6.66 9 6.25 9m4.5 1.5c.41 0 .75-.34.75-.75S11.16 9 10.75 9H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.5v-1h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.5v-.5zM15.63 9a.74.74 0 0 0-.73.62l-.65 3.88l-.65-3.88a.74.74 0 0 0-1.46.24l.65 3.91c.12.71.73 1.23 1.46 1.23s1.34-.52 1.46-1.23l.65-3.91a.746.746 0 0 0-.73-.86m3.87 1.5c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28-.22-.5-.5-.5H20c-.28 0-.5.22-.5.5h-1v-3z"></svg:path>`,
})
export class IcRoundHevcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHexagonIcon],svg[ic-round-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1"></svg:path>`,
})
export class IcRoundHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHideImageIcon],svg[ic-round-hide-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5.83L21 18.17V5c0-1.1-.9-2-2-2m-15.49.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9a.996.996 0 1 0 1.41-1.41zM7 17a.5.5 0 0 1-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l.82-1.1l2.1 2.1z"></svg:path>`,
})
export class IcRoundHideImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHideSourceIcon],svg[ic-round-hide-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 3.51c-.39.39-.39 1.03 0 1.42l1.56 1.56a9.92 9.92 0 0 0-1.59 6.69c.52 4.54 4.21 8.23 8.75 8.75c2.49.29 4.81-.34 6.69-1.59l1.56 1.56a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0M12 20c-4.41 0-8-3.59-8-8c0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20M7.94 5.12L6.49 3.66A9.9 9.9 0 0 1 12 2c5.52 0 10 4.48 10 10c0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.87 7.87 0 0 0 20 12c0-4.41-3.59-8-8-8c-1.48 0-2.86.41-4.06 1.12"></svg:path>`,
})
export class IcRoundHideSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHighQualityIcon],svg[ic-round-high-quality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.75 11c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75M18 14c0 .55-.45 1-1 1h-.75v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-3.5-.5h2v-3h-2z"></svg:path>`,
})
export class IcRoundHighQualityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHighlightIcon],svg[ic-round-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.29 14.29L9 17v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4l2.71-2.71a1 1 0 0 0 .29-.71V10c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3.59c0 .26.11.52.29.7M12 2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1M4.21 5.17c.39-.39 1.02-.39 1.42 0l.71.71a.996.996 0 1 1-1.41 1.41l-.72-.71a.996.996 0 0 1 0-1.41m13.46.71l.71-.71a.996.996 0 1 1 1.41 1.41l-.71.71a.996.996 0 1 1-1.41-1.41"></svg:path>`,
})
export class IcRoundHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHighlightAltIcon],svg[ic-round-highlight-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5h-2V3h2zm2 4h2V7h-2zm0 4h2v-2h-2zm-8 8h2v-2h-2zM7 5h2V3H7zM3 17h2v-2H3zm2 4v-2H3c0 1.1.9 2 2 2M19 3v2h2c0-1.1-.9-2-2-2m-8 2h2V3h-2zM3 9h2V7H3zm4 12h2v-2H7zm-4-8h2v-2H3zm0-8h2V3c-1.1 0-2 .9-2 2m15.71 12.29l1.44-1.44c.32-.32.09-.85-.35-.85H16c-.55 0-1 .45-1 1v3.79c0 .45.54.67.85.35l1.44-1.44l2 2a.996.996 0 1 0 1.41-1.41z"></svg:path>`,
})
export class IcRoundHighlightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHighlightOffIcon],svg[ic-round-highlight-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.89 8.7L12 10.59L10.11 8.7a.996.996 0 1 0-1.41 1.41L10.59 12L8.7 13.89a.996.996 0 1 0 1.41 1.41L12 13.41l1.89 1.89a.996.996 0 1 0 1.41-1.41L13.41 12l1.89-1.89a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.38-1.41 0M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"></svg:path>`,
})
export class IcRoundHighlightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHikingIcon],svg[ic-round-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M18.25 9c-.41 0-.75.34-.75.75v1.03c-1.23-.37-2.22-1.17-2.8-2.18l-1-1.6c-.41-.65-1.11-1-1.84-1c-.78 0-1.59.5-1.78 1.44L7.25 21.76c-.13.64.36 1.24 1.02 1.24c.49 0 .91-.34 1.02-.81L10.9 15l2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45L12.9 13.5l.6-3c1 1.15 2.41 2.01 4 2.34v9.41c0 .41.34.75.75.75s.75-.34.75-.75V9.75c0-.41-.34-.75-.75-.75M7.43 13.13l-2.12-.41a1 1 0 0 1-.79-1.17l.76-3.93a2 2 0 0 1 2.34-1.58l1.16.23z"></svg:path>`,
})
export class IcRoundHikingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHistoryIcon],svg[ic-round-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.26 3C8.17 2.86 4 6.95 4 12H2.21c-.45 0-.67.54-.35.85l2.79 2.8c.2.2.51.2.71 0l2.79-2.8a.5.5 0 0 0-.36-.85H6c0-3.9 3.18-7.05 7.1-7c3.72.05 6.85 3.18 6.9 6.9c.05 3.91-3.1 7.1-7 7.1c-1.61 0-3.1-.55-4.28-1.48a.994.994 0 0 0-1.32.08c-.42.42-.39 1.13.08 1.49A8.86 8.86 0 0 0 13 21c5.05 0 9.14-4.17 9-9.26c-.13-4.69-4.05-8.61-8.74-8.74m-.51 5c-.41 0-.75.34-.75.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.09-.82-.26-1.03l-2.88-1.71v-3.4c0-.4-.34-.74-.75-.74"></svg:path>`,
})
export class IcRoundHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHistoryEduIcon],svg[ic-round-history-edu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v.38c-.83-.33-1.72-.5-2.61-.5c-1.42 0-2.84.43-4.05 1.29c-.51.36-.57 1.09-.13 1.53l2.57 2.57h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H7c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V5c0-.55-.45-1-1-1H10c-.55 0-1 .45-1 1m-1.11 5.41V8.26H5.61L4.57 7.22a5.1 5.1 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41l-.2.2a2.7 2.7 0 0 1-1.92.8c-.47 0-.93-.12-1.33-.34M19 17c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55-.45-1-1-1h-5v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8z"></svg:path>`,
})
export class IcRoundHistoryEduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHistoryToggleOffIcon],svg[ic-round-history-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56M4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1M15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56M19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1M8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56M11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56m7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54M4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1m15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54M7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54M5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53M12 7c-.55 0-1 .45-1 1v3.59c0 .53.21 1.04.59 1.41l3 3A.996.996 0 1 0 16 14.59l-3-3V8c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundHistoryToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHiveIcon],svg[ic-round-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.09 7.51l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.48-.86-.48h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.17.3.5.48.85.48h2.45c.36 0 .69-.18.87-.49M9.91 9.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2a.99.99 0 0 0-.86-.49h-2.46a.99.99 0 0 0-.86.49m7.1 2.02h2.45c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.45a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.19.31.51.49.86.49m2.46 1h-2.46a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49M7.84 11.03l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.5-.49-.85-.49H4.53c-.35 0-.68.19-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.45c.36-.01.68-.19.86-.49m-.85 1.48H4.53a.99.99 0 0 0-.86.49l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.19-.3-.51-.49-.86-.49m2.92 3.98l-1.2 2c-.19.32-.19.71 0 1.03l1.2 2c.18.3.51.49.86.49h2.46c.35 0 .68-.18.86-.49l1.2-2c.19-.32.19-.71 0-1.03l-1.2-2c-.18-.3-.51-.49-.86-.49h-2.46a.99.99 0 0 0-.86.49"></svg:path>`,
})
export class IcRoundHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHlsIcon],svg[ic-round-hls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 9c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h2.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H11.5V9.75c0-.41-.34-.75-.75-.75m8.29 1.5c.1.29.38.5.71.5c.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1zM8 9.75C8 9.34 7.66 9 7.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75z"></svg:path>`,
})
export class IcRoundHlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHlsOffIcon],svg[ic-round-hls-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.83 15h1.67c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2.04c.1.29.38.5.71.5c.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2.04a.75.75 0 0 0-.71-.5c-.12 0-.24.03-.34.08zm1.24 6.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L6.58 9.4c-.05.11-.08.23-.08.35V11h-2V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-3.42l2 2V14c0 .55.45 1 1 1h1.17z"></svg:path>`,
})
export class IcRoundHlsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHolidayVillageIcon],svg[ic-round-holiday-village-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20c.55 0 1-.45 1-1V8.76c0-.27-.11-.52-.29-.71l-3.76-3.76c-.19-.18-.44-.29-.71-.29c-.89 0-1.34 1.08-.71 1.71l3.32 3.32c.1.09.15.22.15.35V19c0 .55.45 1 1 1m4 0c.55 0 1-.45 1-1V7.11c0-.26-.11-.52-.29-.71l-2.1-2.11c-.19-.18-.45-.29-.71-.29c-.9 0-1.34 1.08-.71 1.71l1.67 1.67a.5.5 0 0 1 .14.35V19c0 .55.45 1 1 1M8 15c.55 0 1 .45 1 1v4h4c.55 0 1-.45 1-1v-8.59c0-.27-.11-.52-.29-.71l-5-5a.996.996 0 0 0-1.41 0l-5 5c-.19.19-.3.45-.3.71V19c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1m0-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundHolidayVillageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHomeIcon],svg[ic-round-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHomeMaxIcon],svg[ic-round-home-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4m2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcRoundHomeMaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHomeMiniIcon],svg[ic-round-home-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7m0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5m2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3"></svg:path>`,
})
export class IcRoundHomeMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHomeRepairServiceIcon],svg[ic-round-home-repair-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16c-.55 0-1-.45-1-1H8c0 .55-.45 1-1 1s-1-.45-1-1H2v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3h-4c0 .55-.45 1-1 1m3-8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v4h4v-1c0-.55.45-1 1-1s1 .45 1 1v1h8v-1c0-.55.45-1 1-1s1 .45 1 1v1h4v-4c0-1.1-.9-2-2-2m-5 0H9V6h6z"></svg:path>`,
})
export class IcRoundHomeRepairServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHomeWorkIcon],svg[ic-round-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.16 10.4l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63"></svg:path><svg:path fill="currentColor" d="M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3M19 9h-2V7h2z"></svg:path>`,
})
export class IcRoundHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHorizontalDistributeIcon],svg[ic-round-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1M21 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m-9 5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundHorizontalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHorizontalRuleIcon],svg[ic-round-horizontal-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundHorizontalRuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHorizontalSplitIcon],svg[ic-round-horizontal-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundHorizontalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHotTubIcon],svg[ic-round-hot-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 12h-9.85c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5c-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H3c-.55 0-1 .45-1 1v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7c0-.55-.45-1-1-1M7 19c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zm-3.94-9c.5 0 .93-.39.94-.89c.04-1.4-.58-2.48-1.35-3.25c-.65-.72-.8-1.27-.77-1.91c.02-.52-.41-.95-.94-.95c-.5 0-.93.4-.94.9c-.03 1.29.5 2.43 1.35 3.25c.61.59.78 1.27.78 1.89c-.01.52.4.96.93.96m4 0c.5 0 .93-.39.94-.89c.04-1.4-.58-2.48-1.35-3.25c-.65-.72-.8-1.27-.77-1.91c.02-.52-.41-.95-.94-.95c-.5 0-.93.4-.94.9c-.03 1.29.5 2.43 1.35 3.25c.61.59.78 1.27.78 1.89c-.01.52.4.96.93.96"></svg:path>`,
})
export class IcRoundHotTubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHotelIcon],svg[ic-round-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3m12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class IcRoundHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHotelClassIcon],svg[ic-round-hotel-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.58 10H2.56a.5.5 0 0 0-.29.91l4.91 3.51l-1.89 6.1c-.14.46.39.84.78.55L11 17.31l4.93 3.75c.39.29.92-.08.78-.55l-1.89-6.1l4.91-3.51c.4-.28.2-.91-.29-.91h-6.02l-1.95-6.42c-.14-.47-.81-.47-.96 0zM20.9 20.51l-1.4-4.52l2.91-2.08c.4-.28.2-.91-.29-.91h-1.88l-3.08 2.2l1.46 4.72l1.5 1.14c.39.29.92-.09.78-.55M17 8l-1.34-4.42c-.14-.47-.81-.47-.96 0l-.57 1.87l.78 2.55z"></svg:path>`,
})
export class IcRoundHotelClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHourglassBottomIcon],svg[ic-round-hourglass-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22c1.1 0 2-.9 2-2l-.01-3.18c0-.53-.21-1.03-.58-1.41L14 12l3.41-3.43c.37-.37.58-.88.58-1.41L18 4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3.16c0 .53.21 1.04.58 1.42L10 12l-3.41 3.4c-.38.38-.59.89-.59 1.42V20c0 1.1.9 2 2 2zM8 7.09V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.09c0 .27-.11.52-.29.71L12 11.5L8.29 7.79c-.18-.18-.29-.44-.29-.7"></svg:path>`,
})
export class IcRoundHourglassBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHourglassDisabledIcon],svg[ic-round-hourglass-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l8.19 8.19l-3 3.01c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c.86 0 1.58-.54 1.87-1.3l1.91 1.91a.996.996 0 1 0 1.41-1.41zM16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l2.84-2.84L16 18.83zM8 5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-2.84 2.84l1.25 1.25l3-2.99c.38-.38.59-.89.59-1.42V4a2 2 0 0 0-2-2H8c-.86 0-1.58.54-1.87 1.3L8 5.17z"></svg:path>`,
})
export class IcRoundHourglassDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHourglassEmptyIcon],svg[ic-round-hourglass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4zm-4-5l-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5z"></svg:path>`,
})
export class IcRoundHourglassEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHourglassFullIcon],svg[ic-round-hourglass-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2"></svg:path>`,
})
export class IcRoundHourglassFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHourglassTopIcon],svg[ic-round-hourglass-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2c-1.1 0-2 .9-2 2l.01 3.18c0 .53.21 1.03.58 1.41L10 12l-3.41 3.43c-.37.37-.58.88-.58 1.41L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.91V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.09c0-.27.11-.52.29-.71L12 12.5l3.71 3.71c.18.18.29.44.29.7"></svg:path>`,
})
export class IcRoundHourglassTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHouseIcon],svg[ic-round-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9.3V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1.6l-3.33-3c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z"></svg:path>`,
})
export class IcRoundHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHouseSidingIcon],svg[ic-round-house-siding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z"></svg:path>`,
})
export class IcRoundHouseSidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHouseboatIcon],svg[ic-round-houseboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17.83c0-.42-.27-.8-.67-.94c-.71-.27-1.12-.89-2.66-.89c-1.91 0-2.14 1-3.33 1c-1.24 0-1.39-1-3.34-1s-2.1 1-3.34 1c-1.19 0-1.42-1-3.33-1c-1.54 0-1.95.62-2.66.88c-.4.15-.67.52-.67.95c0 .7.69 1.19 1.35.95c.8-.29 1.18-.78 2-.78c1.19 0 1.42 1 3.33 1c1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1c.83 0 1.21.49 2 .78c.66.24 1.35-.26 1.35-.95m-3.09-8.02a.996.996 0 0 0-.22-1.4l-6.1-4.47a.99.99 0 0 0-1.18 0l-6.1 4.47c-.45.33-.54.95-.22 1.4c.33.45.95.54 1.4.22L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-.66-.66a.996.996 0 1 0-1.41 1.41l.66.66c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l.66-.66a.996.996 0 1 0-1.41-1.41l-.66.66c-.18.18-.44.29-.7.29H17V9.65l.51.37c.45.33 1.07.23 1.4-.21M13 13h-2v-2h2z"></svg:path>`,
})
export class IcRoundHouseboatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHowToRegIcon],svg[ic-round-how-to-reg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-.86-.86a2.997 2.997 0 0 1 .02-4.26l.84-.82a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2zm-1-8c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m5.18 7.78c-.39.39-1.03.39-1.42 0l-2.07-2.09a.99.99 0 0 1 0-1.39l.01-.01a.984.984 0 0 1 1.4 0l1.37 1.37l4.43-4.46a.996.996 0 0 1 1.41 0l.01.01a.99.99 0 0 1 0 1.39z"></svg:path>`,
})
export class IcRoundHowToRegIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHowToVoteIcon],svg[ic-round-how-to-vote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 12.18l-1.5 1.64l2 2.18h-13l2-2.18L6 12.18l-3 3.27V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.54z"></svg:path><svg:path fill="currentColor" d="M10.59 14.42c.78.79 2.05.8 2.84.01l4.98-4.98c.78-.78.78-2.05 0-2.83l-3.54-3.53c-.78-.78-2.05-.78-2.83 0L7.09 8.04a2 2 0 0 0-.01 2.82zm2.87-9.92l3.53 3.53l-4.94 4.94l-3.53-3.53z"></svg:path>`,
})
export class IcRoundHowToVoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHtmlIcon],svg[ic-round-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15c-.55 0-1-.45-1-1V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75zm-5-4.51h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75zM5 9.75C5 9.34 4.66 9 4.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S0 9.34 0 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75zm5.25.75c.41 0 .75-.34.75-.75S10.66 9 10.25 9h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h1v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5z"></svg:path>`,
})
export class IcRoundHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHttpIcon],svg[ic-round-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 11h-2V9.75c0-.41-.34-.75-.75-.75S1 9.34 1 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C6 9.34 5.66 9 5.25 9s-.75.34-.75.75zm3.25-.5h.75v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S11.16 9 10.75 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75m5.5 0H14v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h.75c.41 0 .75-.34.75-.75S16.66 9 16.25 9h-3c-.41 0-.75.34-.75.75s.34.75.75.75M21.5 9H19c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V13h2c.83 0 1.5-.68 1.5-1.5v-1c0-.82-.67-1.5-1.5-1.5m0 2.5h-2v-1h2z"></svg:path>`,
})
export class IcRoundHttpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHttpsIcon],svg[ic-round-https-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"></svg:path>`,
})
export class IcRoundHttpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHubIcon],svg[ic-round-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.4 18.2c.38.5.6 1.12.6 1.8c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3c.44 0 .85.09 1.23.26l1.41-1.77a4.5 4.5 0 0 1-1.09-3.69l-2.03-.68A2.997 2.997 0 0 1 0 9.5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .07 0 .14-.01.21l2.03.68a4.47 4.47 0 0 1 3.22-2.32V5.91A3.02 3.02 0 0 1 9 3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.4-.96 2.57-2.25 2.91v2.16c1.4.23 2.58 1.11 3.22 2.32L18 9.71V9.5c0-1.66 1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3c-1.06 0-1.98-.55-2.52-1.37l-2.03.68a4.49 4.49 0 0 1-1.09 3.69l1.41 1.77Q17.34 17 18 17c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3c0-.68.22-1.3.6-1.8l-1.41-1.77c-1.35.75-3.01.76-4.37 0z"></svg:path>`,
})
export class IcRoundHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundHvacIcon],svg[ic-round-hvac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c1.01 0 1.91-.39 2.62-1H9.38c.71.61 1.61 1 2.62 1m-3.44-2h6.89c.26-.45.44-.96.51-1.5h-7.9c.06.54.23 1.05.5 1.5M12 8c-1.01 0-1.91.39-2.62 1h5.24c-.71-.61-1.61-1-2.62-1m-3.44 2c-.26.45-.44.96-.51 1.5h7.9c-.07-.54-.24-1.05-.51-1.5z"></svg:path><svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6"></svg:path>`,
})
export class IcRoundHvacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIceSkatingIcon],svg[ic-round-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.87 17c-.47 0-.85.34-.98.8A3 3 0 0 1 18 20h-2v-2h1c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h15c2.33 0 4.29-1.6 4.84-3.75c.17-.63-.32-1.25-.97-1.25M14 20H8v-2h6z"></svg:path>`,
})
export class IcRoundIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIcecreamIcon],svg[ic-round-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.01 4.01 0 0 0 3 10c0 2.21 1.79 4 4 4c.12 0 .23-.02.34-.02l3.83 7.31c.38.72 1.41.71 1.78-.01l3.73-7.31c.11.01.21.03.32.03c2.21 0 4-1.79 4-4c0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39l-2.73-5.21a6.47 6.47 0 0 0 5.4-.02z"></svg:path>`,
})
export class IcRoundIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImageIcon],svg[ic-round-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53l3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02"></svg:path>`,
})
export class IcRoundImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImageAspectRatioIcon],svg[ic-round-image-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h-2v2h2zm0 4h-2v2h2zm-8-4H6v2h2zm4 0h-2v2h2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundImageAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImageNotSupportedIcon],svg[ic-round-image-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.19 21.19l-.78-.78L18 18l-4.59-4.59l-9.82-9.82l-.78-.78a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42M6.02 18c-.42 0-.65-.48-.39-.81l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53L12.17 15l3 3zm14.98.17L5.83 3H19c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcRoundImageNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImageSearchIcon],svg[ic-round-image-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1m-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23a.5.5 0 0 1 .78-.01l1.56 1.88l2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79m3.8-9.11c.48-.77.75-1.67.69-2.66c-.13-2.15-1.84-3.97-3.97-4.2A4.5 4.5 0 0 0 11 6.5c0 2.49 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42zM15.5 9a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcRoundImageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImagesearchRollerIcon],svg[ic-round-imagesearch-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V6H4v4h8c1.1 0 2 .9 2 2v3h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h1v-3H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundImagesearchRollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImportContactsIcon],svg[ic-round-import-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94c.98-.25 2.02-.36 3.02-.36c1.56 0 3.22.26 4.56.92c.6.3 1.28.3 1.87 0c1.34-.67 3-.92 4.56-.92c1 0 2.04.11 3.02.36c1.26.33 2.48-.63 2.48-1.94V7.14c0-.81-.49-1.52-1.22-1.85c-1.28-.57-2.82-.79-4.27-.79M21 17.23c0 .63-.58 1.09-1.2.98c-.75-.14-1.53-.2-2.3-.2c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c.92 0 1.83.09 2.7.28c.46.1.8.51.8.98z"></svg:path>`,
})
export class IcRoundImportContactsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImportExportIcon],svg[ic-round-import-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.5.5 0 0 0-.7 0M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85z"></svg:path>`,
})
export class IcRoundImportExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundImportantDevicesIcon],svg[ic-round-important-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99M23 20h-5v-7h5zM20 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h7v2H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V4c0-1.1-.9-2-2-2m-8.03 7L11 6l-.97 3H7l2.47 1.76l-.94 2.91l2.47-1.8l2.47 1.8l-.94-2.91L15 9z"></svg:path>`,
})
export class IcRoundImportantDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInboxIcon],svg[ic-round-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v9h-3.56c-.36 0-.68.19-.86.5c-.52.9-1.47 1.5-2.58 1.5s-2.06-.6-2.58-1.5a1 1 0 0 0-.86-.5H5V5z"></svg:path>`,
})
export class IcRoundInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIncompleteCircleIcon],svg[ic-round-incomplete-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07L12 12V2c5.52 0 10 4.48 10 10"></svg:path>`,
})
export class IcRoundIncompleteCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIndeterminateCheckBoxIcon],svg[ic-round-indeterminate-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundIndeterminateCheckBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInfoIcon],svg[ic-round-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z"></svg:path>`,
})
export class IcRoundInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInputIcon],svg[ic-round-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3.01H3c-1.1 0-2 .9-2 2V8c0 .55.45 1 1 1s1-.45 1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V16c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H21c1.1 0 2-.9 2-2V5.01c0-1.1-.9-2-2-2m-9.15 12.14l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.495.495 0 0 0-.85.35V11H2c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36"></svg:path>`,
})
export class IcRoundInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertChartIcon],svg[ic-round-insert-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundInsertChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertChartOutlinedIcon],svg[ic-round-insert-chart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m2 2H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class IcRoundInsertChartOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertCommentIcon],svg[ic-round-insert-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundInsertCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertDriveFileIcon],svg[ic-round-insert-drive-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zm7 6V3.5L18.5 9H14c-.55 0-1-.45-1-1"></svg:path>`,
})
export class IcRoundInsertDriveFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertEmoticonIcon],svg[ic-round-insert-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11S7 10.33 7 9.5S7.67 8 8.5 8m8.25 6.75c-.95 1.64-2.72 2.75-4.75 2.75s-3.8-1.11-4.75-2.75c-.19-.33.06-.75.44-.75h8.62c.39 0 .63.42.44.75M15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundInsertEmoticonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertInvitationIcon],svg[ic-round-insert-invitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m0-10v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1s-1 .45-1 1m2 17H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundInsertInvitationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertLinkIcon],svg[ic-round-insert-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.96 11.38C4.24 9.91 5.62 8.9 7.12 8.9h2.93c.52 0 .95-.43.95-.95S10.57 7 10.05 7H7.22c-2.61 0-4.94 1.91-5.19 4.51A4.995 4.995 0 0 0 7 17h3.05c.52 0 .95-.43.95-.95s-.43-.95-.95-.95H7a3.11 3.11 0 0 1-3.04-3.72M9 13h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m7.78-6h-2.83c-.52 0-.95.43-.95.95s.43.95.95.95h2.93c1.5 0 2.88 1.01 3.16 2.48A3.11 3.11 0 0 1 17 15.1h-3.05c-.52 0-.95.43-.95.95s.43.95.95.95H17c2.92 0 5.26-2.51 4.98-5.49c-.25-2.6-2.59-4.51-5.2-4.51"></svg:path>`,
})
export class IcRoundInsertLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertPageBreakIcon],svg[ic-round-insert-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4zM19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.89-1.99 1.99V11H20V8.83c0-.53-.21-1.04-.59-1.42M13 8V3.5L18.5 9H14c-.55 0-1-.45-1-1m2 6c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1m2 0c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1M6 13H2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundInsertPageBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsertPhotoIcon],svg[ic-round-insert-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53l3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68a.5.5 0 0 1-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02"></svg:path>`,
})
export class IcRoundInsertPhotoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInsightsIcon],svg[ic-round-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2c1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93c0-1.1-.9-2-2-2"></svg:path><svg:path fill="currentColor" d="m15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></svg:path>`,
})
export class IcRoundInsightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInstallDesktopIcon],svg[ic-round-install-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17H4V5h8V3H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 2-.9 2-2v-3h-2z"></svg:path><svg:path fill="currentColor" d="M17.71 13.29L21.3 9.7a.996.996 0 1 0-1.41-1.41L18 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88A.996.996 0 1 0 12.7 9.7l3.59 3.59c.4.39 1.03.39 1.42 0"></svg:path>`,
})
export class IcRoundInstallDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInstallMobileIcon],svg[ic-round-install-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.71 13.29L22.3 9.7a.996.996 0 1 0-1.41-1.41L19 10.17V4c0-.55-.45-1-1-1s-1 .45-1 1v6.17l-1.89-1.88A.996.996 0 1 0 13.7 9.7l3.59 3.59c.4.39 1.03.39 1.42 0"></svg:path><svg:path fill="currentColor" d="M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2z"></svg:path>`,
})
export class IcRoundInstallMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIntegrationInstructionsIcon],svg[ic-round-integration-instructions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.7 11.88c-.39.39-1.03.39-1.42 0l-2.17-2.17a.996.996 0 0 1 0-1.41l2.17-2.17c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41L8.83 12l1.46 1.46c.39.39.4 1.03.01 1.42M12 4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75m1.7 10.63a.996.996 0 0 1 0-1.41L15.17 12l-1.47-1.47a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.17 2.17c.39.39.39 1.02 0 1.41l-2.17 2.17c-.39.4-1.03.4-1.42.01"></svg:path>`,
})
export class IcRoundIntegrationInstructionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInterestsIcon],svg[ic-round-interests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.02 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1M6.13 3.57l-3.3 5.94c-.37.67.11 1.49.87 1.49h6.6c.76 0 1.24-.82.87-1.49l-3.3-5.94a.997.997 0 0 0-1.74 0M19.25 2.5c-1.06 0-1.81.56-2.25 1.17c-.44-.61-1.19-1.17-2.25-1.17C13.19 2.5 12 3.78 12 5.25c0 1.83 2.03 3.17 4.35 5.18a1 1 0 0 0 1.3 0C19.97 8.42 22 7.08 22 5.25c0-1.47-1.19-2.75-2.75-2.75"></svg:path>`,
})
export class IcRoundInterestsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInterpreterModeIcon],svg[ic-round-interpreter-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5m0 3.5c.28 0 .5-.22.5-.5v-1.04c1.51-.22 2.71-1.4 2.95-2.89c.05-.3-.19-.57-.49-.57c-.24 0-.45.17-.49.41c-.2 1.18-1.23 2.09-2.47 2.09s-2.27-.9-2.47-2.09a.494.494 0 0 0-.49-.41c-.3 0-.54.27-.5.57c.25 1.5 1.45 2.68 2.95 2.89v1.04c.01.28.23.5.51.5M9 12c-2.21 0-4-1.79-4-4a4 4 0 0 1 5.34-3.77A5.94 5.94 0 0 0 9 8c0 1.43.5 2.74 1.34 3.77c-.42.15-.87.23-1.34.23m-1.89 1.13A4.97 4.97 0 0 0 5 17.22V20H1v-2.78c0-1.12.61-2.15 1.61-2.66c1.24-.64 2.76-1.19 4.5-1.43M11 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m7.32 12a5 5 0 0 1-2.82-4.5c0-.89.23-1.73.64-2.45c-.37-.03-.75-.05-1.14-.05c-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 7 17.22V20z"></svg:path>`,
})
export class IcRoundInterpreterModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInventoryIcon],svg[ic-round-inventory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path><svg:path fill="currentColor" d="M21.75 12.25c-.41-.41-1.09-.41-1.5 0L15.51 17l-2.26-2.25c-.41-.41-1.08-.41-1.5 0c-.41.41-.41 1.09 0 1.5l3.05 3.04c.39.39 1.02.39 1.41 0l5.53-5.54c.42-.41.42-1.09.01-1.5"></svg:path>`,
})
export class IcRoundInventoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInventory2Icon],svg[ic-round-inventory-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-6 12h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m6-7H4V4h16z"></svg:path>`,
})
export class IcRoundInventory2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInvertColorsIcon],svg[ic-round-invert-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.81V19c-3.31 0-6-2.63-6-5.87c0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13C4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12.7 2.69c-.39-.38-1.01-.38-1.4 0z"></svg:path>`,
})
export class IcRoundInvertColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundInvertColorsOffIcon],svg[ic-round-invert-colors-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.49 20.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l3.5 3.5a7.73 7.73 0 0 0-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l2.4 2.4c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M12 19c-3.31 0-6-2.63-6-5.87c0-1.19.36-2.32 1.02-3.28L12 14.83zM8.38 5.56l2.91-2.87c.39-.38 1.01-.38 1.4 0l4.95 4.87C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97z"></svg:path>`,
})
export class IcRoundInvertColorsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIosShareIcon],svg[ic-round-ios-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v11H6V10h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2"></svg:path><svg:path fill="currentColor" d="M12 16c.55 0 1-.45 1-1V5h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 4.15a.5.5 0 0 0 .36.85H11v10c0 .55.45 1 1 1"></svg:path>`,
})
export class IcRoundIosShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIronIcon],svg[ic-round-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.27 10c.34 0 .68-.16.84-.47c.17-.31.51-.53.89-.53h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1s1-.45 1-1s-.45-1-1-1c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.13 0-2.11.62-2.63 1.55c-.36.65.16 1.45.9 1.45"></svg:path>`,
})
export class IcRoundIronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundIsoIcon],svg[ic-round-iso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M6.25 7.5H7.5V6.25c0-.41.34-.75.75-.75s.75.34.75.75V7.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75M18 19H5L19 5v13c0 .55-.45 1-1 1m-1-2.75c0-.41-.34-.75-.75-.75h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h3.5c.41 0 .75-.34.75-.75"></svg:path>`,
})
export class IcRoundIsoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundJavascriptIcon],svg[ic-round-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.54 10.5c.1.29.38.5.71.5c.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1zm-8.04 3H9V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75c0 .83-.67 1.5-1.5 1.5H7.5c-.83 0-1.5-.67-1.5-1.5v-.25c0-.41.34-.75.75-.75s.75.34.75.75z"></svg:path>`,
})
export class IcRoundJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundJoinFullIcon],svg[ic-round-join-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 6.8c-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2"></svg:path><svg:path fill="currentColor" d="M7.5 12c0-.97.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5c-2.8-2.34-3.03-5.53-3.03-6.5M16 5c-.9 0-1.75.19-2.53.5c2.8 2.34 3.03 5.53 3.03 6.5s-.23 4.16-3.03 6.5c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7"></svg:path>`,
})
export class IcRoundJoinFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundJoinInnerIcon],svg[ic-round-join-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 6.8c-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2"></svg:path><svg:path fill="currentColor" d="M9.04 16.87c-.33.08-.68.13-1.04.13c-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13c.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5c-.61-.51-1.1-1.07-1.49-1.63M16 5c-.9 0-1.75.19-2.53.5c.61.51 1.1 1.07 1.49 1.63c.33-.08.68-.13 1.04-.13c2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13c-.39.56-.88 1.12-1.49 1.63c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7"></svg:path>`,
})
export class IcRoundJoinInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundJoinLeftIcon],svg[ic-round-join-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 6.8c-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2"></svg:path><svg:path fill="currentColor" d="M7.5 12c0-.97.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5c-2.8-2.34-3.03-5.53-3.03-6.5M16 5c-.9 0-1.75.19-2.53.5c.61.51 1.1 1.07 1.49 1.63c.33-.08.68-.13 1.04-.13c2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13c-.39.56-.88 1.12-1.49 1.63c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7"></svg:path>`,
})
export class IcRoundJoinLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundJoinRightIcon],svg[ic-round-join-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.32 17.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2c-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2"></svg:path><svg:path fill="currentColor" d="M16.5 12c0 .97-.23 4.16-3.03 6.5c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5c2.8 2.34 3.03 5.53 3.03 6.5M8 19c.9 0 1.75-.19 2.53-.5c-.61-.51-1.1-1.07-1.49-1.63c-.33.08-.68.13-1.04.13c-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13c.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7"></svg:path>`,
})
export class IcRoundJoinRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKayakingIcon],svg[ic-round-kayaking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22c0-.55.45-1 1-1c.87 0 1.73-.24 2.53-.7c.29-.16.65-.17.94 0c1.59.9 3.48.9 5.06 0a.98.98 0 0 1 .94 0c1.59.9 3.48.9 5.06 0a.98.98 0 0 1 .94 0c.8.46 1.66.7 2.53.7c.55 0 1 .45 1 1s-.45 1-1 1c-1.03 0-2.06-.25-3-.75a6.36 6.36 0 0 1-6.09-.05c-1.79.87-3.92.98-5.58-.14C5.3 22.69 4.15 23 3 23c-.55 0-1-.45-1-1M12 5.5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m9.47 12.95c-.42.14-.9.28-1.41.42c-.53-.15-1.03-.43-1.45-.77a.98.98 0 0 0-1.23 0c-.66.53-1.48.9-2.38.9s-1.72-.37-2.39-.91a.99.99 0 0 0-1.22 0c-.67.54-1.49.91-2.39.91s-1.72-.37-2.39-.91c-.35-.29-.87-.28-1.23 0c-.43.35-.92.62-1.45.77c-.51-.14-.98-.28-1.4-.42c-.92-.3-.92-1.6 0-1.9c1.21-.39 2.79-.82 4.6-1.13l1.35-4.17c.31-.95 1.32-1.47 2.27-1.16c.09.03.19.07.27.11l2.47 1.3l2.84-1.5l1.65-3.71l-.36-.93c-.1-.25-.09-.52.02-.76l.74-1.68a1 1 0 0 1 1.32-.51l1.37.61a1 1 0 0 1 .5 1.32l-.75 1.68c-.11.24-.31.43-.56.53l-.9.36l-3.72 8.34c2.33.3 4.35.84 5.82 1.31c.93.3.94 1.6.01 1.9m-6.45-5.49l-.59.31c-.58.31-1.28.31-1.86 0l-.81-.43l-.71 2.17c.31 0 .63-.01.95-.01c.71 0 1.4.03 2.07.08z"></svg:path>`,
})
export class IcRoundKayakingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKebabDiningIcon],svg[ic-round-kebab-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 13v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19H5.5a2.5 2.5 0 0 1 0-5h.75v-1H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7H5.5a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zm10 0v1h.75a2.5 2.5 0 0 1 0 5h-.75v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V19h-.75a2.5 2.5 0 0 1 0-5h.75v-1H14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h2.25V7h-.75a2.5 2.5 0 0 1 0-5h.75v-.25c0-.41.34-.75.75-.75s.75.34.75.75V2h.75a2.5 2.5 0 0 1 0 5h-.75v1H20c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"></svg:path>`,
})
export class IcRoundKebabDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyIcon],svg[ic-round-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.59 10h-7.94a6.004 6.004 0 0 0-6.88-3.88c-2.29.46-4.15 2.3-4.63 4.58A6.002 6.002 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H13l1.29 1.29c.39.39 1.02.39 1.41 0L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a1 1 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29M7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3"></svg:path>`,
})
export class IcRoundKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyOffIcon],svg[ic-round-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.83 10l4.09 4.09L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a1 1 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29zm6.24 11.9a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92L3.98 6.8A6.04 6.04 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99zm-9.16-9.16A3.015 3.015 0 0 1 7 15c-1.65 0-3-1.35-3-3c0-1.4.97-2.58 2.26-2.91z"></svg:path>`,
})
export class IcRoundKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardIcon],svg[ic-round-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-9 3h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-1 2H5v-2h2zm0-3H5V8h2zm8 7H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m1-4h-2v-2h2zm0-3h-2V8h2zm3 3h-2v-2h2zm0-3h-2V8h2z"></svg:path>`,
})
export class IcRoundKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardAltIcon],svg[ic-round-keyboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5M15 12v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z"></svg:path>`,
})
export class IcRoundKeyboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardArrowDownIcon],svg[ic-round-keyboard-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"></svg:path>`,
})
export class IcRoundKeyboardArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardArrowLeftIcon],svg[ic-round-keyboard-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42"></svg:path>`,
})
export class IcRoundKeyboardArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardArrowRightIcon],svg[ic-round-keyboard-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"></svg:path>`,
})
export class IcRoundKeyboardArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardArrowUpIcon],svg[ic-round-keyboard-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"></svg:path>`,
})
export class IcRoundKeyboardArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardBackspaceIcon],svg[ic-round-keyboard-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H6.83l2.88-2.88A.996.996 0 1 0 8.3 6.71L3.71 11.3a.996.996 0 0 0 0 1.41L8.3 17.3a.996.996 0 1 0 1.41-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundKeyboardBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardCapslockIcon],svg[ic-round-keyboard-capslock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.41l3.89 3.89a.996.996 0 1 0 1.41-1.41L12.71 6.3a.996.996 0 0 0-1.41 0l-4.6 4.59a.996.996 0 1 0 1.41 1.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundKeyboardCapslockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardCommandKeyIcon],svg[ic-round-keyboard-command-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3C15.57 3 14 4.57 14 6.5V8h-4V6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5S4.57 10 6.5 10H8v4H6.5C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5V16h4v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H16v-4h1.5c1.93 0 3.5-1.57 3.5-3.5S19.43 3 17.5 3M16 8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S18.33 8 17.5 8zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5V8zm3.5 6v-4h4v4zm7.5 5c-.83 0-1.5-.67-1.5-1.5V16h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16H8v1.5c0 .83-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcRoundKeyboardCommandKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardControlKeyIcon],svg[ic-round-keyboard-control-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41"></svg:path>`,
})
export class IcRoundKeyboardControlKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardDoubleArrowDownIcon],svg[ic-round-keyboard-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58L8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4"></svg:path><svg:path fill="currentColor" d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4"></svg:path>`,
})
export class IcRoundKeyboardDoubleArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardDoubleArrowLeftIcon],svg[ic-round-keyboard-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.29 17.29a.996.996 0 0 0 0-1.41L14.42 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L12.3 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01"></svg:path><svg:path fill="currentColor" d="M11.7 17.29a.996.996 0 0 0 0-1.41L7.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L5.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01"></svg:path>`,
})
export class IcRoundKeyboardDoubleArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardDoubleArrowRightIcon],svg[ic-round-keyboard-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0"></svg:path><svg:path fill="currentColor" d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01"></svg:path>`,
})
export class IcRoundKeyboardDoubleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardDoubleArrowUpIcon],svg[ic-round-keyboard-double-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88a.996.996 0 0 0 0 1.41"></svg:path><svg:path fill="currentColor" d="M6.7 11.7c.39.39 1.02.39 1.41 0L12 7.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L6.7 10.29a.996.996 0 0 0 0 1.41"></svg:path>`,
})
export class IcRoundKeyboardDoubleArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardHideIcon],svg[ic-round-keyboard-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm8 7H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m1-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-6.65 14.65l2.79-2.79a.5.5 0 0 0-.35-.85H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.19.51.19.7 0"></svg:path>`,
})
export class IcRoundKeyboardHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardOptionKeyIcon],svg[ic-round-keyboard-option-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1M9.58 6c-.36-.62-1.02-1-1.73-1H4c-.55 0-1 .45-1 1s.45 1 1 1h3.85l6.35 11c.36.62 1.02 1 1.73 1H20c.55 0 1-.45 1-1s-.45-1-1-1h-4.07z"></svg:path>`,
})
export class IcRoundKeyboardOptionKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardReturnIcon],svg[ic-round-keyboard-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8v3H5.83l2.88-2.88A.996.996 0 1 0 7.3 6.71L2.71 11.3a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L5.83 13H20c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundKeyboardReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardTabIcon],svg[ic-round-keyboard-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.29 8.12L15.17 11H2c-.55 0-1 .45-1 1s.45 1 1 1h13.17l-2.88 2.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42M20 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class IcRoundKeyboardTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKeyboardVoiceIcon],svg[ic-round-keyboard-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3m6.08-3c-.42 0-.77.3-.83.71c-.37 2.61-2.72 4.39-5.25 4.39s-4.88-1.77-5.25-4.39a.84.84 0 0 0-.83-.71c-.52 0-.92.46-.85.97c.46 2.97 2.96 5.3 5.93 5.75V21c0 .55.45 1 1 1s1-.45 1-1v-2.28c2.96-.43 5.47-2.78 5.93-5.75a.857.857 0 0 0-.85-.97"></svg:path>`,
})
export class IcRoundKeyboardVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKingBedIcon],svg[ic-round-king-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47a.7.7 0 0 0 .66-.47L5.67 17h12.67l.51 1.53c.09.28.35.47.65.47a.7.7 0 0 0 .66-.47l.51-1.53H22v-5c0-1.1-.9-2-2-2m-9 0H6V8c0-.55.45-1 1-1h4zm7 0h-5V7h4c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundKingBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKitchenIcon],svg[ic-round-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2.01L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99M17 20H7c-.55 0-1-.45-1-1v-7.02c0-.55.45-1 1-1h10c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1m0-11H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1M9 5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1m0 7c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundKitesurfingIcon],svg[ic-round-kitesurfing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m10.03.97c.29.29.77.29 1.06 0L20.06 1h-2.12l-1.91 1.91c-.29.29-.29.77 0 1.06M19.15 12c-1.29 0-3.11.53-5.06 1.38L13 12.16c-.38-.42-.92-.66-1.49-.66H9.6V8H11c1.52 0 2.94-.49 4.09-1.32c.49-.35.52-1.07.09-1.5c-.35-.35-.9-.38-1.3-.09c-.82.57-1.81.91-2.88.91H8c-1.1 0-2 .9-2 2v4.04c0 .64.15 1.27.45 1.83L8 16.84c-.53.38-1.03.78-1.49 1.17c.68.58 1.55.99 2.49.99c1.2 0 2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5c.33 0 .65-.05.96-.14C18.81 16.9 21 14.72 21 13.28c0-1.03-1.01-1.28-1.85-1.28m-9.32 3.61L9 13.6l2.5-.1l.7.77c-.56.28-1.78.96-2.37 1.34M22 22c0-.55-.45-1-1-1c-.87 0-1.73-.24-2.53-.7a.95.95 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-.8.46-1.66.7-2.53.7c-.55 0-1 .45-1 1s.45 1 1 1c1.15 0 2.3-.31 3.33-.94c1.66 1.11 3.78 1.01 5.58.14a6.36 6.36 0 0 0 6.09.05c.95.5 1.97.75 3 .75c.55 0 1-.45 1-1"></svg:path>`,
})
export class IcRoundKitesurfingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLabelIcon],svg[ic-round-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84l3.96-5.58a.99.99 0 0 0 0-1.16z"></svg:path>`,
})
export class IcRoundLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLabelImportantIcon],svg[ic-round-label-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.94 18.99H15c.65 0 1.26-.31 1.63-.84l3.95-5.57a.99.99 0 0 0 0-1.16l-3.96-5.58A1.95 1.95 0 0 0 15 5H5.94c-.81 0-1.28.93-.81 1.59L9 12l-3.87 5.41c-.47.66 0 1.58.81 1.58"></svg:path>`,
})
export class IcRoundLabelImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLabelOffIcon],svg[ic-round-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.59 12.58a.99.99 0 0 0 0-1.16l-3.96-5.58C17.27 5.33 16.67 5 16 5H8.66l10.7 10.73zM2.72 4.72l.87.87C3.23 5.95 3 6.45 3 7v10c0 1.1.9 2 2 2h12l1.29 1.29a.996.996 0 1 0 1.41-1.41L4.14 3.31c-.38-.38-1.01-.39-1.4-.01a.99.99 0 0 0-.02 1.42"></svg:path>`,
})
export class IcRoundLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLanIcon],svg[ic-round-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-1v-2c0-1.1-.9-2-2-2h-3V9h1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H8c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H8v-2h8v2h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2"></svg:path>`,
})
export class IcRoundLanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLandscapeIcon],svg[ic-round-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4a.994.994 0 0 1-1.4-.2c-1.05-1.4-2.31-3.07-3.1-4.14c-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33a.993.993 0 0 0-1.6 0"></svg:path>`,
})
export class IcRoundLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLandslideIcon],svg[ic-round-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.47 13.79l-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8.6 8.8C8.22 8.3 7.63 8 7 8H4c-1.1 0-2 .9-2 2v1.61l4 1.33zM6 19.05l-4-1.33V20c0 1.1.9 2 2 2h14c1.65 0 2.59-1.88 1.6-3.2l-2.57-3.42zm11-14.4V2.64A2 2 0 0 0 15.39.68L12.81.16c-.52-.1-1.06 0-1.5.3l-1.42.95C9.33 1.78 9 2.4 9 3.07v1.86c0 .67.33 1.29.89 1.66l1.23.82c.55.37 1.24.44 1.85.19l2.77-1.11C16.5 6.2 17 5.46 17 4.65m.75 2.95l-1 .8c-.47.38-.75.95-.75 1.56v1.08c0 .61.28 1.18.75 1.56l.8.64c.58.47 1.38.57 2.06.27l2.2-.98c.72-.32 1.19-1.04 1.19-1.83V9.6c0-.94-.65-1.75-1.57-1.95l-2-.44a1.99 1.99 0 0 0-1.68.39"></svg:path>`,
})
export class IcRoundLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLanguageIcon],svg[ic-round-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.08 16m2.95-8H5.08a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"></svg:path>`,
})
export class IcRoundLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLaptopIcon],svg[ic-round-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLaptopChromebookIcon],svg[ic-round-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1m-9.5 0h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5m6.5-3H4V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z"></svg:path>`,
})
export class IcRoundLaptopChromebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLaptopMacIcon],svg[ic-round-laptop-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1m7 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundLaptopMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLaptopWindowsIcon],svg[ic-round-laptop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zM5 5h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundLaptopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLastPageIcon],svg[ic-round-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41M17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1"></svg:path>`,
})
export class IcRoundLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLaunchIcon],svg[ic-round-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundLaunchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLayersIcon],svg[ic-round-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78a.99.99 0 0 0-1.22 0a.997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01a.99.99 0 0 0-1.22 0zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01"></svg:path>`,
})
export class IcRoundLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLayersClearIcon],svg[ic-round-layers-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 9.79c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L9.41 4.02l7.88 7.88zm0 3.49l-.01-.01a.99.99 0 0 0-1.22 0l-.05.04l1.4 1.4a.98.98 0 0 0-.12-1.43m1.45 5.6L4.12 1.56a.996.996 0 1 0-1.41 1.41l3.52 3.52l-2.22 1.72c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.73.56 2.46 0l.87-.68l1.42 1.42l-2.92 2.27c-.36.28-.87.28-1.23 0l-6.15-4.78a.99.99 0 0 0-1.22 0a.997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l3.72-2.89l3.07 3.07c.39.39 1.02.39 1.41 0c.41-.39.41-1.02.02-1.41"></svg:path>`,
})
export class IcRoundLayersClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLeaderboardIcon],svg[ic-round-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 21H3c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m7.25-18h-3.5c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3.5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M21 11h-3.5c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLeakAddIcon],svg[ic-round-leak-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.05 21c.5 0 .94-.37.99-.87a9 9 0 0 1 8.08-8.08c.5-.05.88-.48.88-.99c0-.59-.51-1.06-1.1-1c-5.19.52-9.32 4.65-9.84 9.83c-.06.59.4 1.11.99 1.11M18 21h3v-3c-1.66 0-3 1.34-3 3m-2.91 0c.49 0 .9-.36.98-.85c.36-2.08 2-3.72 4.08-4.08c.49-.08.85-.49.85-.98c0-.61-.54-1.09-1.14-1a6.99 6.99 0 0 0-5.77 5.77c-.1.6.39 1.14 1 1.14M12.97 3.02c-.5 0-.94.37-.99.87a9 9 0 0 1-8.08 8.08c-.5.05-.88.48-.88.99c0 .59.51 1.06 1.1 1c5.19-.52 9.32-4.65 9.84-9.83a1 1 0 0 0-.99-1.11m-6.94 0h-3v3c1.66 0 3-1.34 3-3m2.91 0c-.49 0-.9.36-.98.85c-.36 2.08-2 3.72-4.08 4.08c-.49.09-.85.49-.85.99c0 .61.54 1.09 1.14 1a6.99 6.99 0 0 0 5.77-5.77c.09-.61-.4-1.15-1-1.15"></svg:path>`,
})
export class IcRoundLeakAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLeakRemoveIcon],svg[ic-round-leak-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.12 12.04c.5-.05.88-.48.88-.99c0-.59-.51-1.06-1.1-1c-1.5.15-2.9.61-4.16 1.3l1.48 1.48c.9-.41 1.87-.69 2.9-.79m.88 3.05c0-.61-.54-1.09-1.14-1c-.38.06-.75.16-1.11.28l1.62 1.62c.37-.15.63-.49.63-.9M13.97 4.14c.06-.59-.4-1.11-1-1.11c-.5 0-.94.37-.99.87c-.1 1.03-.38 2.01-.79 2.91l1.48 1.48c.69-1.26 1.15-2.66 1.3-4.15m-4.04.02c.1-.6-.39-1.14-1-1.14a.98.98 0 0 0-.9.62l1.62 1.62c.13-.35.22-.72.28-1.1m10.51 14.72L5.12 3.56a.996.996 0 1 0-1.41 1.41l2.15 2.15c-.59.41-1.26.7-1.99.82c-.48.1-.84.5-.84 1c0 .61.54 1.09 1.14 1c1.17-.19 2.23-.68 3.13-1.37L8.73 10c-1.34 1.1-3 1.82-4.81 1.99c-.5.05-.88.48-.88.99c0 .59.51 1.06 1.1 1c2.28-.23 4.36-1.15 6.01-2.56l2.48 2.48c-1.4 1.65-2.33 3.72-2.56 6c-.06.59.4 1.11 1 1.11c.5 0 .94-.37.99-.87c.18-1.82.9-3.48 1.99-4.82l1.43 1.43c-.69.9-1.18 1.96-1.37 3.13c-.1.6.39 1.14 1 1.14c.49 0 .9-.36.98-.85c.12-.73.42-1.4.82-1.99l2.13 2.13c.39.39 1.02.39 1.41 0c.38-.41.38-1.04-.01-1.43"></svg:path>`,
})
export class IcRoundLeakRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLeaveBagsAtHomeIcon],svg[ic-round-leave-bags-at-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.86 9.03c.05-.01.09-.03.14-.03c.41 0 .75.34.75.75v.17l1.75 1.75V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.42l3 3V8c0-1.1-.9-2-2-2h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-.17zM11 4h2v2h-2zm9.49 16.49L3.51 3.51A.996.996 0 1 0 2.1 4.92l2.92 2.92c0 .06-.02.11-.02.16v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c.34 0 .65-.09.93-.24l1.14 1.14c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41M8.75 18c-.41 0-.75-.34-.75-.75v-6.42l1.5 1.5v4.92c0 .41-.34.75-.75.75M12 18c-.41 0-.75-.34-.75-.75v-3.17l1.5 1.5v1.67c0 .41-.34.75-.75.75m2.52-.65l.63.63a.74.74 0 0 1-.63-.63"></svg:path>`,
})
export class IcRoundLeaveBagsAtHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLegendToggleIcon],svg[ic-round-legend-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1m0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-4-6l4.58-3.25c.26-.19.42-.49.42-.81c0-.81-.92-1.29-1.58-.82L15 8.55L10 5L4.48 8.36c-.3.19-.48.51-.48.86c0 .78.85 1.26 1.52.85l4.4-2.68z"></svg:path>`,
})
export class IcRoundLegendToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLensIcon],svg[ic-round-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"></svg:path>`,
})
export class IcRoundLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLensBlurIcon],svg[ic-round-lens-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M6 5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M14 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-11 10c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m7 7c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5M10 7c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m8 .5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5M14 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5s-.22-.5-.5-.5m-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0 8.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5"></svg:path>`,
})
export class IcRoundLensBlurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLessThanIcon],svg[ic-round-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.75 17l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5l-8.502 5.668a1 1 0 0 0 0 1.664L15.75 18.5a.901.901 0 1 0 1-1.5"></svg:path>`,
})
export class IcRoundLessThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLessThanEqualIcon],svg[ic-round-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.75 15l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5L7.248 9.168a1 1 0 0 0 0 1.664L15.75 16.5a.901.901 0 1 0 1-1.5"></svg:path><svg:path fill="currentColor" d="M17 20.998H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class IcRoundLessThanEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLibraryAddIcon],svg[ic-round-library-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundLibraryAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLibraryAddCheckIcon],svg[ic-round-library-add-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4a.996.996 0 0 1 1.41 0l1.36 1.37l4.42-4.46a.996.996 0 0 1 1.41 0c.38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundLibraryAddCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLibraryBooksIcon],svg[ic-round-library-books-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundLibraryBooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLibraryMusicIcon],svg[ic-round-library-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 5h-2v5.37c0 1.27-.9 2.44-2.16 2.6a2.505 2.505 0 0 1-2.8-2.95c.2-1.1 1.18-1.95 2.3-2.02c.63-.04 1.2.16 1.66.51V6c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1"></svg:path>`,
})
export class IcRoundLibraryMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLightIcon],svg[ic-round-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.06V4c0-.55-.45-1-1-1s-1 .45-1 1v2.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01c0-4.62-3.5-8.43-8-8.93M12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7z"></svg:path>`,
})
export class IcRoundLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLightModeIcon],svg[ic-round-light-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"></svg:path>`,
})
export class IcRoundLightModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLightbulbIcon],svg[ic-round-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m-3-3h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m3-17C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2"></svg:path>`,
})
export class IcRoundLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLightbulbCircleIcon],svg[ic-round-lightbulb-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 17c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m2.25-2.5h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m.72-2.5H9.03A4.97 4.97 0 0 1 7 10c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.64-.8 3.09-2.03 4"></svg:path>`,
})
export class IcRoundLightbulbCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLineAxisIcon],svg[ic-round-line-axis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.34 6.77a1 1 0 0 0-1.45.04l-3.33 3.74l-5.65-5.24c-.79-.73-2.01-.71-2.77.05L2.7 10.81a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.02.39 1.41 0l5.44-5.45l5.59 5.19L13.5 14l-2.58-2.58c-.78-.78-2.05-.78-2.83 0L2.7 16.8a.996.996 0 0 0 0 1.41l.1.09c.39.39 1.02.39 1.41 0l5.3-5.3l2.5 2.5c.81.81 2.14.77 2.91-.09l1.78-2.01l3.19 2.96c.39.36 1 .35 1.38-.03l.01-.01c.4-.4.39-1.05-.03-1.43l-3.22-2.99l3.35-3.77c.35-.39.33-.99-.04-1.36"></svg:path>`,
})
export class IcRoundLineAxisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLineStyleIcon],svg[ic-round-line-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1m6.5 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1M4 20c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1M4 12h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m10 0h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1M3 5v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundLineStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLineWeightIcon],svg[ic-round-line-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1m0-5H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1m0-6H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m.5 15h-17c-.28 0-.5.22-.5.5s.22.5.5.5h17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5"></svg:path>`,
})
export class IcRoundLineWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLinearScaleIcon],svg[ic-round-linear-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7c-2.41 0-4.43 1.72-4.9 4H6.79c-.39-.88-1.27-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.02 0 1.9-.62 2.29-1.5h5.31A5 5 0 1 0 17 7m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3"></svg:path>`,
})
export class IcRoundLinearScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLinkIcon],svg[ic-round-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRoundLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLinkOffIcon],svg[ic-round-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9h2.87c1.46 0 2.8.98 3.08 2.42c.31 1.64-.74 3.11-2.22 3.48l1.53 1.53c1.77-.91 2.95-2.82 2.7-5.01C21.68 8.86 19.37 7 16.79 7H14c-.55 0-1 .45-1 1s.45 1 1 1M3.51 3.51A.996.996 0 1 0 2.1 4.92l2.64 2.64c-1.77.91-2.95 2.82-2.7 5.01C2.32 15.14 4.63 17 7.21 17H10c.55 0 1-.45 1-1s-.45-1-1-1H7.13c-1.46 0-2.8-.98-3.08-2.42c-.31-1.64.75-3.11 2.22-3.48l2.12 2.12c-.23.19-.39.46-.39.78c0 .55.45 1 1 1h1.17l8.9 8.9a.996.996 0 1 0 1.41-1.41zM14 11l1.71 1.71A1.003 1.003 0 0 0 15 11z"></svg:path>`,
})
export class IcRoundLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLinkedCameraIcon],svg[ic-round-linked-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="13" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.6 2.37c2.1.27 3.77 1.93 4.03 4.03c.04.34.32.6.66.6c.39 0 .71-.34.66-.73a6.01 6.01 0 0 0-5.22-5.22c-.39-.05-.73.27-.73.66c0 .34.26.62.6.66m2.63 3.82a3.34 3.34 0 0 0-2.42-2.42c-.41-.1-.81.22-.81.65c0 .29.19.57.48.64c.72.18 1.29.74 1.46 1.46c.07.29.34.48.64.48c.43 0 .75-.4.65-.81"></svg:path><svg:path fill="currentColor" d="M17 8c0-1.1-.9-2-2-2V4c0-.55-.45-1-1-1H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-5 9.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 8.5 12 8.5s4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5"></svg:path>`,
})
export class IcRoundLinkedCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLiquorIcon],svg[ic-round-liquor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14c0 1.3.84 2.4 2 2.82V20H4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1H7v-3.18C8.16 16.4 9 15.3 9 14V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm2-6h2v3H5zm15.64.54l-.96-.32a1 1 0 0 1-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28a1 1 0 0 1-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9M16 4h1v1h-1zm-3 6.44l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28a3 3 0 0 0 2.05 2.85l.95.31V12h-7zM20 20h-7v-2h7z"></svg:path>`,
})
export class IcRoundLiquorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundListIcon],svg[ic-round-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1m-3 5c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m0-8c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundListAltIcon],svg[ic-round-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1m0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1m0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1M7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 16H5V5h14z"></svg:path>`,
})
export class IcRoundListAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLiveHelpIcon],svg[ic-round-live-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 16h-2v-2h2zm2.07-7.75l-.9.92c-.58.59-.99 1.1-1.12 2.06c-.06.43-.41.76-.85.76h-.31a.86.86 0 0 1-.85-.98c.11-.91.53-1.72 1.14-2.34l1.24-1.26c.36-.36.58-.86.58-1.41c0-1.1-.9-2-2-2c-.87 0-1.62.57-1.89 1.35c-.13.37-.44.64-.83.64h-.3c-.58 0-.98-.56-.82-1.12A4.002 4.002 0 0 1 16 8c0 .88-.36 1.68-.93 2.25"></svg:path>`,
})
export class IcRoundLiveHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLiveTvIcon],svg[ic-round-live-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88M21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99L8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundLiveTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLivingIcon],svg[ic-round-living-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11.5c-.55 0-1 .45-1 1v2h-7v-2c0-.55-.45-1-1-1s-1 .45-1 1V16c0 .28.22.5.5.5h10c.28 0 .5-.22.5-.5v-3.5c0-.55-.45-1-1-1"></svg:path><svg:path fill="currentColor" d="M10 12.5v.5h4v-.5c0-1.3.99-2.35 2.25-2.47V9c0-.83-.67-1.5-1.5-1.5h-5.5c-.83 0-1.5.67-1.5 1.5v1.03A2.48 2.48 0 0 1 10 12.5"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-3.5c0-.92.51-1.72 1.25-2.15V9c0-1.66 1.34-3 3-3h5.5c1.66 0 3 1.34 3 3v1.35c.74.43 1.25 1.23 1.25 2.15z"></svg:path>`,
})
export class IcRoundLivingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalActivityIcon],svg[ic-round-local-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c0-.76.43-1.42 1.06-1.76c.6-.33.94-1.01.94-1.7V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 1.99v2.55c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7c-.63-.34-1.06-1-1.06-1.76m-5.5 4.1L12 14.5l-2.5 1.61c-.38.24-.87-.11-.75-.55l.75-2.88l-2.3-1.88a.503.503 0 0 1 .29-.89l2.96-.17l1.08-2.75c.17-.42.77-.42.93 0l1.08 2.76l2.96.17c.45.03.64.6.29.89l-2.3 1.88l.76 2.86c.12.45-.37.8-.75.55"></svg:path>`,
})
export class IcRoundLocalActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalAirportIcon],svg[ic-round-local-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.48 13.7L13.5 9V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9l-7.98 4.7c-.32.18-.52.53-.52.9c0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09l.42.11l1.9.48l.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-5.5l7.16 2.1c.67.2 1.34-.3 1.34-1c0-.37-.2-.72-.52-.9"></svg:path>`,
})
export class IcRoundLocalAirportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalAtmIcon],svg[ic-round-local-atm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-6-7c.55 0 1-.45 1-1s-.45-1-1-1h-1v-.01c0-.55-.45-1-1-1s-1 .45-1 1V8h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h1c0 .55.45 1 1 1s1-.45 1-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1z"></svg:path>`,
})
export class IcRoundLocalAtmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalBarIcon],svg[ic-round-local-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.45c0-.8-.65-1.45-1.45-1.45H4.45C3.65 3 3 3.65 3 4.45c0 .35.13.7.37.96L11 14v5H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-5l7.63-8.59c.24-.26.37-.61.37-.96M7.43 7L5.66 5h12.69l-1.78 2z"></svg:path>`,
})
export class IcRoundLocalBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalCafeIcon],svg[ic-round-local-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM3 21h16c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundLocalCafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalCarWashIcon],svg[ic-round-local-car-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22c0 .83.67 1.5 1.5 1.5m-5 0c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22c0 .83.67 1.5 1.5 1.5M7 5c.83 0 1.5-.67 1.5-1.5c0-.66-.66-1.64-1.11-2.22a.498.498 0 0 0-.79 0c-.44.58-1.1 1.56-1.1 2.22C5.5 4.33 6.17 5 7 5m11.92 3.01C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 22.33 6 21.5V21h12v.5c0 .82.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66zM6.5 18c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 13l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L19 13z"></svg:path>`,
})
export class IcRoundLocalCarWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalConvenienceStoreIcon],svg[ic-round-local-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 7.89l-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17M13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48c-.67 0-1.22-.59-1.22-1.31zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14c-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97zM10.5 16H9v1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5H10v-1H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5m.5-7.31c0 .72-.55 1.31-1.29 1.31c-.75 0-1.3-.7-1.22-1.48L9.04 5H11zM15.5 18c-.28 0-.5-.22-.5-.5V16h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5V15h1v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5m3.27-8c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01l1.05 3.37c.16.67-.25 1.64-1.19 1.64"></svg:path>`,
})
export class IcRoundLocalConvenienceStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalDiningIcon],svg[ic-round-local-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.1 13.34l2.83-2.83l-6.19-6.18c-.48-.48-1.31-.35-1.61.27c-.71 1.49-.45 3.32.78 4.56zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27l-9.05 9.05a.996.996 0 1 0 1.41 1.41L12 14.41l6.18 6.18a.996.996 0 1 0 1.41-1.41L13.41 13z"></svg:path>`,
})
export class IcRoundLocalDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalDrinkIcon],svg[ic-round-local-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.23 2C4.04 2 3.11 3.04 3.24 4.22l1.77 16.01C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77l1.77-16.01c.13-1.18-.8-2.22-1.99-2.22zM12 19c-1.66 0-3-1.34-3-3c0-1.55 1.81-3.95 2.62-4.94c.2-.25.57-.25.77 0c.81 1 2.62 3.39 2.62 4.94A3.01 3.01 0 0 1 12 19m6.33-11H5.67l-.32-2.89c-.06-.59.4-1.11 1-1.11h11.3c.59 0 1.06.52.99 1.11z"></svg:path>`,
})
export class IcRoundLocalDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalFireDepartmentIcon],svg[ic-round-local-fire-department-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12.9l-2.03 2c-.46.46-.82 1.03-.93 1.67C8.74 18.41 10.18 20 12 20s3.26-1.59 2.96-3.42c-.11-.64-.46-1.22-.93-1.67z"></svg:path><svg:path fill="currentColor" d="M15.56 6.55C14.38 8.02 12 7.19 12 5.3V3.77c0-.8-.89-1.28-1.55-.84C8.12 4.49 4 7.97 4 13c0 2.92 1.56 5.47 3.89 6.86a4.86 4.86 0 0 1-.81-3.68c.19-1.04.75-1.98 1.51-2.72l2.71-2.67c.39-.38 1.01-.38 1.4 0l2.73 2.69c.74.73 1.3 1.65 1.48 2.68c.25 1.36-.07 2.64-.77 3.66c1.89-1.15 3.29-3.06 3.71-5.3c.61-3.27-.81-6.37-3.22-8.1c-.33-.25-.8-.2-1.07.13"></svg:path>`,
})
export class IcRoundLocalFireDepartmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalFloristIcon],svg[ic-round-local-florist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.56 0 8.33-3.4 8.92-7.8c.09-.64-.48-1.21-1.12-1.12c-4.4.59-7.8 4.36-7.8 8.92M5.6 10.25a2.5 2.5 0 0 0 3.92 2.06l-.02.19a2.5 2.5 0 0 0 5 0l-.02-.19c.4.28.89.44 1.42.44a2.5 2.5 0 0 0 2.5-2.5c0-1-.59-1.85-1.43-2.25c.84-.4 1.43-1.25 1.43-2.25a2.5 2.5 0 0 0-3.92-2.06l.02-.19a2.5 2.5 0 0 0-5 0l.02.19c-.4-.28-.89-.44-1.42-.44a2.5 2.5 0 0 0-2.5 2.5c0 1 .59 1.85 1.43 2.25c-.84.4-1.43 1.25-1.43 2.25M12 5.5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m-8.92 8.7C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92c-.64-.09-1.21.48-1.12 1.12"></svg:path>`,
})
export class IcRoundLocalFloristIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalGasStationIcon],svg[ic-round-local-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 7.23l.01-.01l-3.19-3.19a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.58 1.58c-1.05.4-1.76 1.47-1.58 2.71c.16 1.1 1.1 1.99 2.2 2.11c.47.05.88-.03 1.27-.2v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v15c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.5h1.5v4.86c0 1.31.94 2.5 2.24 2.63a2.5 2.5 0 0 0 2.76-2.49V9c0-.69-.28-1.32-.73-1.77M12 10H6V6c0-.55.45-1 1-1h4c.55 0 1 .45 1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundLocalGasStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalGroceryStoreIcon],svg[ic-round-local-grocery-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M2 4h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1m15 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class IcRoundLocalGroceryStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalHospitalIcon],svg[ic-round-local-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 11h-3v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3H7c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h3V7c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path>`,
})
export class IcRoundLocalHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalHotelIcon],svg[ic-round-local-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3s1.34 3 3 3m12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class IcRoundLocalHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalLaundryServiceIcon],svg[ic-round-local-laundry-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.64 16.36c1.3 1.3 3.42 1.3 4.72 0s1.3-3.42 0-4.72zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99M11 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M8 5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m4 14c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcRoundLocalLaundryServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalLibraryIcon],svg[ic-round-local-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.55c-1.82-1.7-4.12-2.89-6.68-3.35C4.11 7.99 3 8.95 3 10.18v6.24c0 1.68.72 2.56 1.71 2.69c2.5.32 4.77 1.35 6.63 2.87c.35.29.92.32 1.27.04c1.87-1.53 4.16-2.58 6.68-2.9c.94-.13 1.71-1.06 1.71-2.02v-6.92c0-1.23-1.11-2.19-2.32-1.98c-2.56.46-4.86 1.65-6.68 3.35M12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"></svg:path>`,
})
export class IcRoundLocalLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalMallIcon],svg[ic-round-local-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3m0 10a4.99 4.99 0 0 1-4.84-3.75C6.99 8.62 7.48 8 8.13 8c.47 0 .85.34.98.8a2.997 2.997 0 0 0 5.78 0c.13-.46.51-.8.98-.8c.65 0 1.13.62.97 1.25A4.99 4.99 0 0 1 12 13"></svg:path>`,
})
export class IcRoundLocalMallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalMoviesIcon],svg[ic-round-local-movies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1M8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm10 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z"></svg:path>`,
})
export class IcRoundLocalMoviesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalOfferIcon],svg[ic-round-local-offer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7"></svg:path>`,
})
export class IcRoundLocalOfferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[icRoundLocalParkingIcon],svg[ic-round-local-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3m.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class IcRoundLocalParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

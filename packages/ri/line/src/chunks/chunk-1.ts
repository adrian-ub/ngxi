import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileCloudLineIcon],svg[ri-file-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.997 2L21 8l.001 4.26a5.5 5.5 0 0 0-2-1.053L19 9h-5V4H5v16h5.06a4.7 4.7 0 0 0 .817 2H3.993a.993.993 0 0 1-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2zM17.5 13a3.5 3.5 0 0 1 3.5 3.5l-.002.103a2.75 2.75 0 0 1-.58 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.393L14 16.5a3.5 3.5 0 0 1 3.5-3.5m0 2a1.5 1.5 0 0 0-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 0 0 .08 1.465l.109.01h5.51a.75.75 0 0 0 .19-1.475l-1.013-.283L19 18.12V16.5l-.007-.145A1.5 1.5 0 0 0 17.5 15"></svg:path>`,
})
export class RiFileCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileCodeLineIcon],svg[ri-file-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536l-1.414-1.415L14.828 12l-2.12-2.121l1.413-1.415zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121l-1.413 1.415z"></svg:path>`,
})
export class RiFileCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileCopy2LineIcon],svg[ri-file-copy-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9zm-2 5h6v2H7zm0 4h6v2H7z"></svg:path>`,
})
export class RiFileCopy2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileCopyLineIcon],svg[ri-file-copy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"></svg:path>`,
})
export class RiFileCopyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileDamageLineIcon],svg[ri-file-damage-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9h-5V4H5v7.857l1.5 1.393L10 9.5l3 5l2-2.5l3 3l-3-.5l-2 2.5l-3-4l-3 3.5l-2-1.25V20h14zm2-1v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995z"></svg:path>`,
})
export class RiFileDamageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileDownloadLineIcon],svg[ri-file-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h3l-4 4l-4-4h3V8h2zm2-8H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileEditLineIcon],svg[ri-file-edit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002l.002-1.412z"></svg:path>`,
})
export class RiFileEditLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileExcel2LineIcon],svg[ri-file-excel-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M4 4.735v14.53l10 1.429V3.306zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zm-6.8-7l2.8 4h-2.4L9 13.714L7.4 16H5l2.8-4L5 8h2.4L9 10.286L10.6 8H13z"></svg:path>`,
})
export class RiFileExcel2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileExcelLineIcon],svg[ri-file-excel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.2 12l2.8 4h-2.4L12 13.714L10.4 16H8l2.8-4L8 8h2.4l1.6 2.286L13.6 8H15V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileExcelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileForbidLineIcon],svg[ri-file-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 20a7 7 0 0 0 .965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a7 7 0 0 0-2-.603V8h-4V4H5v16zM18 23a5 5 0 1 1 0-10a5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001"></svg:path>`,
})
export class RiFileForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileGifLineIcon],svg[ri-file-gif-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 6v5h-1v-5zm-2 0v1H9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v-1H9v-1h2v2a1 1 0 0 1-1 1H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm6 0v1h-2v1h2v1h-2v2h-1v-5z"></svg:path>`,
})
export class RiFileGifLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileHistoryLineIcon],svg[ri-file-history-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 5v4h3v2h-5V9z"></svg:path>`,
})
export class RiFileHistoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileHwpLineIcon],svg[ri-file-hwp-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001zm-6.667 6v1.999H16V18H8v-3.333zM12 14.333a1 1 0 1 1 0 2a1 1 0 0 1 0-2M12 9a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m0 1.333a1.167 1.167 0 1 0 0 2.334a1.167 1.167 0 0 0 0-2.334"></svg:path>`,
})
export class RiFileHwpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileImageLineIcon],svg[ri-file-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 7.5l-4-7L8 17z"></svg:path>`,
})
export class RiFileImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileInfoLineIcon],svg[ri-file-info-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 11h2v6h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class RiFileInfoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileLineIcon],svg[ri-file-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zM5.83 8H9V4.83zM11 4v5a1 1 0 0 1-1 1H5v10h14V4z"></svg:path>`,
})
export class RiFileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileList2LineIcon],svg[ri-file-list-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"></svg:path>`,
})
export class RiFileList2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileList3LineIcon],svg[ri-file-list-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 1 0 2 0v-2zm-2 3V4H4v15a1 1 0 0 0 1 1zM6 7h8v2H6zm0 4h8v2H6zm0 4h5v2H6z"></svg:path>`,
})
export class RiFileList3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileListLineIcon],svg[ri-file-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM8 7h8v2H8zm0 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class RiFileListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileLockLineIcon],svg[ri-file-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM15 11h1v5H8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"></svg:path>`,
})
export class RiFileLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileMarkedLineIcon],svg[ri-file-marked-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 4H5v16h14V4h-5v9l-3.5-2L7 13z"></svg:path>`,
})
export class RiFileMarkedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileMusicLineIcon],svg[ri-file-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePaper2LineIcon],svg[ri-file-paper-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19V4H6a1 1 0 0 0-.993.883L5 5v10H3V5a3 3 0 0 1 3-3z"></svg:path>`,
})
export class RiFilePaper2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePaperLineIcon],svg[ri-file-paper-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17v2a1 1 0 1 0 2 0V4H5v11H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2z"></svg:path>`,
})
export class RiFilePaperLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePdf2LineIcon],svg[ri-file-pdf-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h10v4h4v12H5zM3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zm6.5 5.5c0 1.577-.455 3.437-1.224 5.153c-.772 1.723-1.814 3.197-2.9 4.066l1.18 1.613c2.927-1.952 6.168-3.29 9.304-2.842l.457-1.939C14.644 12.661 12.5 9.99 12.5 7.5zm.6 5.972c.268-.597.505-1.216.705-1.843a9.7 9.7 0 0 0 1.706 1.966c-.982.176-1.944.465-2.875.833q.248-.471.465-.956"></svg:path>`,
})
export class RiFilePdf2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePdfLineIcon],svg[ri-file-pdf-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16H8V8h4a4 4 0 0 1 0 8m-2-6v4h2a2 2 0 1 0 0-4zm5-6H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFilePdfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePpt2LineIcon],svg[ri-file-ppt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M4 4.735v14.53l10 1.429V3.306zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM5 8h8v6H7v2H5zm2 2v2h4v-2z"></svg:path>`,
})
export class RiFilePpt2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilePptLineIcon],svg[ri-file-ppt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM5 4v16h14V8h-3v6h-6v2H8V8h7V4zm5 6v2h4v-2z"></svg:path>`,
})
export class RiFilePptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileReduceLineIcon],svg[ri-file-reduce-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM16 11v2H8v-2z"></svg:path>`,
})
export class RiFileReduceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileSearchLineIcon],svg[ri-file-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm10.529 11.454a4.001 4.001 0 0 1-4.86-6.274a4 4 0 0 1 6.274 4.86l2.21 2.21l-1.413 1.415zm-.618-2.032a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"></svg:path>`,
})
export class RiFileSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileSettingsLineIcon],svg[ri-file-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.595 12.812a3.5 3.5 0 0 1 0-1.623l-.992-.573l1-1.732l.992.573A3.5 3.5 0 0 1 11 8.645V7.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.992.572a3.5 3.5 0 0 1 0 1.623l.992.573l-1 1.732l-.992-.573a3.5 3.5 0 0 1-1.405.812V16.5h-2v-1.145a3.5 3.5 0 0 1-1.405-.812l-.992.573l-1-1.732zM12 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileShield2LineIcon],svg[ri-file-shield-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9V4H5v16h6.056a5 5 0 0 0 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 12 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36l2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z"></svg:path>`,
})
export class RiFileShield2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileShieldLineIcon],svg[ri-file-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8V4H5v16h14V9h-3v4.62c0 .844-.446 1.633-1.187 2.102L12 17.498L9.187 15.72C8.446 15.254 8 14.465 8 13.62V8zm7 0v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-11 5.62c0 .15.087.304.255.41L12 15.133l1.745-1.101c.168-.107.255-.261.255-.412V10h-4z"></svg:path>`,
})
export class RiFileShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileShredLineIcon],svg[ri-file-shred-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h12V8h-4V4H6zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2zm-1 4h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z"></svg:path>`,
})
export class RiFileShredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileTextLineIcon],svg[ri-file-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-2 1h-5V4H5v16h14zM8 7h3v2H8zm0 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class RiFileTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileTransferLineIcon],svg[ri-file-transfer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM12 11V8l4 4l-4 4v-3H8v-2z"></svg:path>`,
})
export class RiFileTransferLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileUnknowLineIcon],svg[ri-file-unknow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h2v2h-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileUnknowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileUploadLineIcon],svg[ri-file-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM13 12v4h-2v-4H8l4-4l4 4z"></svg:path>`,
})
export class RiFileUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileUserLineIcon],svg[ri-file-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm9 8.508a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M7.527 17a4.5 4.5 0 0 1 8.946 0z"></svg:path>`,
})
export class RiFileUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileVideoLineIcon],svg[ri-file-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v4h4v12H5V4zM3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zM15 11.667l-4.88-3.253a.4.4 0 0 0-.621.333v6.505a.4.4 0 0 0 .622.333L15 12.333a.4.4 0 0 0 0-.666"></svg:path>`,
})
export class RiFileVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileWarningLineIcon],svg[ri-file-warning-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class RiFileWarningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileWord2LineIcon],svg[ri-file-word-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M4 4.735v14.53l10 1.429V3.306zM11 8h2v8h-2l-2-2l-2 2H5V8h2l.01 5L9 11l2 1.989z"></svg:path>`,
})
export class RiFileWord2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileWordLineIcon],svg[ri-file-word-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8v8h-2l-2-2l-2 2H8V8h2v5l2-2l2 2V8h1V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileWordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFileZipLineIcon],svg[ri-file-zip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zm-5-8v5h-4v-3h2v-2zm-2-8h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2z"></svg:path>`,
})
export class RiFileZipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilmAiLineIcon],svg[ri-film-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M2.992 3H14v2H8v14h8V9h2v2h4v9.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3M4 5v2h2V5zm0 4v2h2V9zm0 4v2h2v-2zm14 0v2h2v-2zM4 17v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class RiFilmAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilmLineIcon],svg[ri-film-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM8 5v14h8V5zM4 5v2h2V5zm14 0v2h2V5zM4 9v2h2V9zm14 0v2h2V9zM4 13v2h2v-2zm14 0v2h2v-2zM4 17v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class RiFilmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilter2LineIcon],svg[ri-filter-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14v6l-4 2v-8L4 5V3h16v2zM6.404 5L12 13.394L17.596 5z"></svg:path>`,
})
export class RiFilter2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilter3LineIcon],svg[ri-filter-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"></svg:path>`,
})
export class RiFilter3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilterLineIcon],svg[ri-filter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6L11 12.894V20h2v-7.106L17.596 6z"></svg:path>`,
})
export class RiFilterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFilterOffLineIcon],svg[ri-filter-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.929.515L21.07 14.657l-1.414 1.414l-3.823-3.822l-.834 1.25V22H9v-8.5L4 6H3V4h4.585l-2.07-2.07zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087zM21 4v2h-1l-1.915 2.872l-1.442-1.443l.953-1.43h-2.383l-2-2z"></svg:path>`,
})
export class RiFilterOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFindReplaceLineIcon],svg[ri-find-replace-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.033 16.618l4.28 4.282l-1.413 1.414l-4.282-4.281A8.96 8.96 0 0 1 11 20a9 9 0 0 1-8.065-5H9l-1.304 2.173A7 7 0 0 0 11 18a6.98 6.98 0 0 0 4.875-1.975l.15-.15A6.98 6.98 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.96 8.96 0 0 1-1.967 5.618M19.065 7H13l1.304-2.173A7 7 0 0 0 11 4a7 7 0 0 0-6.71 9H2.223A9 9 0 0 1 2 11c0-4.972 4.028-9 9-9a9 9 0 0 1 8.065 5"></svg:path>`,
})
export class RiFindReplaceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFinderLineIcon],svg[ri-finder-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-10.52 1.999L4.002 5v14h8.746a25 25 0 0 1-.163-1.02q-.445.02-.583.02c-2.208 0-4.398-.73-6.555-2.168l1.11-1.664C8.399 15.397 10.209 16 12 16q.199 0 .398-.01a24 24 0 0 1 .007-1.99H9.501v-1c0-3.275.32-5.94.98-8.001m2.12 0c-.665 1.583-1.044 4.412-1.09 7.001h3.123l-.14 1.124q-.152 1.207-.108 2.52q1.518-.449 3.06-1.476l1.11 1.664q-1.98 1.321-3.993 1.84q.086.65.219 1.327L20 19V5zM7.001 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiFinderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFingerprint2LineIcon],svg[ri-fingerprint-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a9 9 0 0 1 9 9v4a9 9 0 0 1-12.092 8.455q.192-.265.369-.542l.17-.28a10.9 10.9 0 0 0 1.55-5.345L11 16V9h2v7a13 13 0 0 1-.997 5.002a7 7 0 0 0 2.27-.38c.442-1.36.693-2.807.724-4.308L15 16v-3.001h2V16a17 17 0 0 1-.298 3.185a6.98 6.98 0 0 0 2.294-4.944L19 14v-4A7 7 0 0 0 7.808 4.394L6.383 2.968A8.96 8.96 0 0 1 12 1m-5 9a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-5.995-.176L9 10v6c0 1.567-.4 3.04-1.104 4.323l-.024.04q-.345.622-.782 1.179a9 9 0 0 1-1.237-.97l-.308-.3A8.97 8.97 0 0 1 3 14v-4c0-2.125.736-4.078 1.968-5.617l1.426 1.425a6.97 6.97 0 0 0-1.39 3.951L5 10v4a6.97 6.97 0 0 0 1.57 4.417a6.9 6.9 0 0 0 .426-2.176L7 16z"></svg:path>`,
})
export class RiFingerprint2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFingerprintLineIcon],svg[ri-fingerprint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42l-1.746-.974a14.9 14.9 0 0 0 1.881-6.836L15 14v-1zm-6-3h2v4l-.005.379a12.94 12.94 0 0 1-2.691 7.549l-.231.29l-1.549-1.264a10.94 10.94 0 0 0 2.47-6.588L11 14zm1-4a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0v3c0 2.235-.82 4.344-2.27 5.977l-.212.23l-1.448-1.38a6.97 6.97 0 0 0 1.924-4.524L7 14v-3a5 5 0 0 1 5-5m0-4a9 9 0 0 1 9 9v3c0 1.698-.201 3.37-.596 4.99l-.14.539l-1.93-.526c.392-1.437.614-2.922.658-4.435L19 14v-3A7 7 0 0 0 7.808 5.394L6.383 3.968A8.96 8.96 0 0 1 12 2M4.968 5.383l1.426 1.425a6.97 6.97 0 0 0-1.39 3.951L5 11l.004 2c0 1.12-.264 2.203-.761 3.177l-.157.29l-1.736-.992c.379-.665.6-1.407.645-2.183L3.004 13v-2a8.94 8.94 0 0 1 1.964-5.617"></svg:path>`,
})
export class RiFingerprintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFireLineIcon],svg[ri-fire-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47q-2.5 2.47-3.8 2.47c3.995-7 1.8-10-4.2-14c.5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23m.71-17.765c3.241 2.75 3.257 4.887.753 9.274c-.761 1.333.202 2.991 1.737 2.991c.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71c.424-.38.773-.717 1.118-1.086c1.23-1.318 2.114-2.78 2.566-4.462"></svg:path>`,
})
export class RiFireLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFirebaseLineIcon],svg[ri-firebase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.223 8.707l-2.312 4.334l1.09-6.715zm1.145-2.148L7.695 1.353a.5.5 0 0 0-.938.148L4 18.5l1.748 1.093l5.192 3.244a2 2 0 0 0 2.12 0L20 18.5L18.142 5.961a.5.5 0 0 0-.841-.287l-2.735 2.637l-2.125-3.984a.5.5 0 0 0-.882 0zm2.701 3.196L8.667 14L12 7.75zm-5.837 8.407l9.36-9.025l1.238 8.36L12 21.143z"></svg:path>`,
})
export class RiFirebaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFirefoxBrowserLineIcon],svg[ri-firefox-browser-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-3.156 1.249-5.695 3.5-7.312c.409-.294.842-.508 1.315-.741c.22-.108.447-.22.685-.347v1.9s2.598-1.28 2.95-1.35a12 12 0 0 1-.135.482C10.119 5.3 9.8 6.394 9.8 7q0 .317.045.564c.287.226.532.514.775.8l.165.193c.443.51 1.256 1.04 1.764 1.37c.264.173.445.29.446.323c0 .277-.645 1.268-1.495 1.268c-2.17 0-3.066 0-2.5 1.63c.475 1.37 1.75 2.102 3 2.102c1.5 0 2.9-1.245 2.9-2.75c0-1.776-.875-2.573-1.738-3.36C12.326 8.379 11.5 7.627 11.5 6c0-2.4 2-4.1 3.8-5.15c.48 1.663 1.652 2.66 2.883 3.707C20.025 6.124 22 7.805 22 12M5.5 7.4C4.456 8.668 4 10.343 4 11.986C4 16.413 7.578 20 12.003 20a8.03 8.03 0 0 0 7.909-6.639c.186-1.425.122-2.83-.362-4.111l-1.05.226c0-1.947-1.169-2.981-2.318-3.998c-.608-.538-1.21-1.071-1.632-1.732c-.91.876-1.287 1.504-1.287 2.254c0 .895.63 1.272 1.749 1.94c.479.287 1.047.627 1.694 1.083l-.995.274c.745.962 1.187 2.037 1.187 3.203c0 2.5-2.237 4.717-4.895 4.75c-2.653.033-5.163-2.176-5.163-4.812C6.84 11.8 7 10.2 9.1 9.68c-.221-.33-.787-.83-1.1-1.03c-.083-.29-.2-1.05-.2-1.05L5.5 8.7z"></svg:path>`,
})
export class RiFirefoxBrowserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFirefoxLineIcon],svg[ri-firefox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10c0-1.463.314-2.854.88-4.106c.466-.939 1.233-1.874 1.85-2.194c-.653 1.283-.973 2.54-1.04 3.383c.454-1.5 1.315-2.757 2.52-3.644c2.066-1.519 4.848-1.587 5.956-.62c-2.056.707-4.296 3.548-3.803 6.876c.08.55.245 1.083.489 1.582c-.384-1.01-.418-2.433.202-3.358c.692-1.03 1.678-1.248 2.206-1.136c-.208-.044-.668.836-.736.991a3 3 0 0 0-.251 1.25a3.4 3.4 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.411-1.002c.954-1.471 1.07-3.968-.154-5.952a7 7 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205q-1.659.266-2.824.956C7.756 2.798 9.912 2 12 2M6.876 7.705c-2.253.781-3.501 3.17-2.579 6.46a8 8 0 0 0 7.455 5.831L12 20a8 8 0 0 0 7.985-7.504l.009-.212q-.194.522-.463.98l-.14.227c-2.104 3.239-6.681 4.075-9.48 1.348a5.4 5.4 0 0 1-.962-1.257l-.106-.201q-2.604-.58-2.543-2.817c.027-.991.23-1.96.575-2.86"></svg:path>`,
})
export class RiFirefoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFirstAidKitLineIcon],svg[ri-first-aid-kit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V2a1 1 0 0 1 1-1zm4 6H4v12h16zm-7 2v3h3v2h-3.001L13 17h-2l-.001-3H8v-2h3V9zm2-6H9v2h6z"></svg:path>`,
})
export class RiFirstAidKitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlag2LineIcon],svg[ri-flag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.138 3a.5.5 0 0 1 .434.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2V3zm-2.584 2H4v10h14.554l-2.857-5z"></svg:path>`,
})
export class RiFlag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlagLineIcon],svg[ri-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z"></svg:path>`,
})
export class RiFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlagOffLineIcon],svg[ri-flag-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.586 18l4.607 4.607l1.414-1.415l-19.8-19.799l-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 0 0 .894.553zm-2-2h-.35l-.35-.7zm-2-2H5V6.414zM21 6v10.758l-2-2V7h-6.236l-1-2H9.242l-2-2h5.14a1 1 0 0 1 .895.553L14 5h6a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiFlagOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlashlightLineIcon],svg[ri-flashlight-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h8L11 24v-9H4l9-15zm-2 2V7.22L7.532 13H13v4.394L17.263 11z"></svg:path>`,
})
export class RiFlashlightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlaskLineIcon],svg[ri-flask-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2zm-2.613 8.001h-2.776q-.156.545-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A10 10 0 0 1 13.387 10M11 7.243q0 .38-.028.758h2.057a10 10 0 0 1-.02-.364L13 7.243V4h-2z"></svg:path>`,
})
export class RiFlaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlickrLineIcon],svg[ri-flickr-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m9 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class RiFlickrLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlightLandLineIcon],svg[ri-flight-land-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.949 14.888a1.5 1.5 0 0 1-1.837 1.06L3.445 11.752a1 1 0 0 1-.74-.983l.09-5.403l1.449.388l.915 3.351l5.095 1.366l-.37-8.382l1.933.518l2.81 9.035l5.261 1.41a1.5 1.5 0 0 1 1.061 1.837M4 19h16v2H4z"></svg:path>`,
})
export class RiFlightLandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlightTakeoffLineIcon],svg[ri-flight-takeoff-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.949 10.112a1.5 1.5 0 0 1-1.06 1.837L5.221 16.147a1 1 0 0 1-1.133-.48l-2.623-4.725l1.449-.389l2.468 2.445l5.095-1.365l-4.51-7.074l1.931-.518l6.952 6.42l5.26-1.41a1.5 1.5 0 0 1 1.838 1.06M4 19h16v2H4z"></svg:path>`,
})
export class RiFlightTakeoffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlipHorizontal2LineIcon],svg[ri-flip-horizontal-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm7 4v3h4V8l4 4l-4 4v-3h-4v3l-4-4z"></svg:path>`,
})
export class RiFlipHorizontal2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlipHorizontalLineIcon],svg[ri-flip-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v20h2V2zM2 6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm18 0v12h-3V6zm-3-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></svg:path>`,
})
export class RiFlipHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlipVertical2LineIcon],svg[ri-flip-vertical-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 6l4-4l4 4h-3v4h3l-4 4l-4-4h3v-4z"></svg:path>`,
})
export class RiFlipVertical2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlipVerticalLineIcon],svg[ri-flip-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11H2v2h20zm-4-9a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 18H6v-3h12zm2-3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></svg:path>`,
})
export class RiFlipVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFloodLineIcon],svg[ri-flood-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.472A5.98 5.98 0 0 0 20 19h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 21a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 21H2v-2h2c1.537 0 2.94-.578 4-1.528A5.98 5.98 0 0 0 12 19c1.537 0 2.94-.578 4-1.528m-3.427-15.94l.1.08L23 11h-3v6c-.701 0-1.374-.12-2-.341V9.157l-6-5.455l-6 5.454l.001 7.502a6 6 0 0 1-1.702.335L4 17v-6H1l10.327-9.388a1 1 0 0 1 1.246-.08"></svg:path>`,
})
export class RiFloodLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlowerLineIcon],svg[ri-flower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.076l.455.233a12.05 12.05 0 0 1 4.402 3.846a12 12 0 0 1 2.962-.957L21 4.98V13a9 9 0 0 1-18 0V4.98l1.18.218c1.041.19 2.035.516 2.963.957a12.05 12.05 0 0 1 4.402-3.846zm-3.122 5.09A12.1 12.1 0 0 1 12 10.363a12.1 12.1 0 0 1 3.122-3.199A10.1 10.1 0 0 0 12 4.337a10.1 10.1 0 0 0-3.122 2.828m2.021 5.268a10.05 10.05 0 0 0-3.908-4.102A10 10 0 0 0 5 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12 12 0 0 1 10 17c0-1.617.32-3.159.9-4.566m1.554 7.552A7 7 0 0 0 19 13V7.457A10 10 0 0 0 12 17c0 1.042.159 2.045.453 2.987"></svg:path>`,
})
export class RiFlowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFlutterLineIcon],svg[ri-flutter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.598 10.684h2.828l-5.657 5.658l5.657 5.656h-2.828L8.94 16.341zm-.194-8.68h2.829L5.919 13.318l-1.414-1.414z"></svg:path>`,
})
export class RiFlutterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFocus2LineIcon],svg[ri-focus-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiFocus2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFocus3LineIcon],svg[ri-focus-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 1l.001 3.062A8.004 8.004 0 0 1 19.938 11H23v2l-3.062.001a8.004 8.004 0 0 1-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 0 1-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0 1 11 4.062V1zm-1 5a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 4a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiFocus3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFocusLineIcon],svg[ri-focus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiFocusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFoggyLineIcon],svg[ri-foggy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.584 13.007a8 8 0 1 1 14.873-5.908a5.5 5.5 0 0 1 6.52 5.908h-2.013Q21 12.758 21 12.5a3.5 3.5 0 0 0-6-2.45V10a6 6 0 1 0-11.193 3.007zM4 19h17v2H4zm-2-4h21v2H2z"></svg:path>`,
})
export class RiFoggyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolder2LineIcon],svg[ri-folder-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM20 11H4v8h16zm0-2V7h-8.414l-2-2H4v4z"></svg:path>`,
})
export class RiFolder2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolder3LineIcon],svg[ri-folder-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 7v12h16V7z"></svg:path>`,
})
export class RiFolder3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolder4LineIcon],svg[ri-folder-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 19h12v-8H8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14z"></svg:path>`,
})
export class RiFolder4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolder5LineIcon],svg[ri-folder-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.087 9h17.826a1 1 0 0 1 .997 1.083l-.833 10a1 1 0 0 1-.997.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9M4.84 19h14.32l.667-8H4.174zm8.574-14H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414z"></svg:path>`,
})
export class RiFolder5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolder6LineIcon],svg[ri-folder-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3c-.55 0-1-.45-1-1zm8.586 2l-1-1H4v2h5.586zM4 9v10h16V7h-7.586l-2 2z"></svg:path>`,
})
export class RiFolder6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderAddLineIcon],svg[ri-folder-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 7V9h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path>`,
})
export class RiFolderAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderChart2LineIcon],svg[ri-folder-chart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm8 4v4h4a4 4 0 1 1-4-4"></svg:path>`,
})
export class RiFolderChart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderChartLineIcon],svg[ri-folder-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 4h2v8h-2zm4 3h2v5h-2zm-8 2h2v3H7z"></svg:path>`,
})
export class RiFolderChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderCheckLineIcon],svg[ri-folder-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10v-2H4V5h5.586l2 2H20v6h2V6a1 1 0 0 0-1-1h-8.586l-2-2zm12.465 15.465L19 22l4.95-4.95l-1.415-1.414L19 19.172l-2.121-2.122z"></svg:path>`,
})
export class RiFolderCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderCloseLineIcon],svg[ri-folder-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10v-2H4V5h5.586l2 2H20v5h2V6a1 1 0 0 0-1-1h-8.586l-2-2zm17.414 15l2.122 2.121l-1.415 1.414l-2.12-2.12l-2.122 2.12l-1.414-1.414L17.585 18l-2.12-2.121l1.414-1.415L19 16.586l2.121-2.122l1.415 1.415z"></svg:path>`,
})
export class RiFolderCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderCloudLineIcon],svg[ri-folder-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7v-2H4V5h5.586l2 2H20v4h2V6a1 1 0 0 0-1-1h-8.586l-2-2zm9 15.25c0-1.26.847-2.32 2.002-2.647C13.945 13.658 15.552 12 17.5 12s3.555 1.658 3.499 3.603A2.751 2.751 0 0 1 20.25 21h-5.5A2.75 2.75 0 0 1 12 18.25M17.5 14a1.5 1.5 0 0 0-1.5 1.5c0 .464.024.975.057 1.46c-.964.205-2.057.592-2.057 1.29c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75c0-.698-1.093-1.085-2.057-1.29c.033-.485.057-.996.057-1.46a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class RiFolderCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderDownloadLineIcon],svg[ri-folder-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm9 8h3l-4 4l-4-4h3V9h2z"></svg:path>`,
})
export class RiFolderDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderForbidLineIcon],svg[ri-folder-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.255a7 7 0 0 0-2-.965V7h-8.414l-2-2H4v14h7.29a7 7 0 0 0 .965 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 22a5 5 0 1 1 0-10a5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001"></svg:path>`,
})
export class RiFolderForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderHistoryLineIcon],svg[ri-folder-history-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM13 9v4h3v2h-5V9z"></svg:path>`,
})
export class RiFolderHistoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderImageLineIcon],svg[ri-folder-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM10 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m8 6.5l-4-6l-7 6z"></svg:path>`,
})
export class RiFolderImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderInfoLineIcon],svg[ri-folder-info-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 7h2v5h-2zm0-3h2v2h-2z"></svg:path>`,
})
export class RiFolderInfoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderKeyholeLineIcon],svg[ri-folder-keyhole-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM12 9a2 2 0 0 1 1.001 3.732L13 17h-2v-4.268A2 2 0 0 1 12 9"></svg:path>`,
})
export class RiFolderKeyholeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderLineIcon],svg[ri-folder-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414z"></svg:path>`,
})
export class RiFolderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderLockLineIcon],svg[ri-folder-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm11 8h1v4H8v-4h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"></svg:path>`,
})
export class RiFolderLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderMusicLineIcon],svg[ri-folder-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45"></svg:path>`,
})
export class RiFolderMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderOpenLineIcon],svg[ri-folder-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757zm16.938-8H7.062l-1.5 6h12.876z"></svg:path>`,
})
export class RiFolderOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderReceivedLineIcon],svg[ri-folder-received-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-2 4h3v2h-3v3.5L15 18l5-4.5z"></svg:path>`,
})
export class RiFolderReceivedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderReduceLineIcon],svg[ri-folder-reduce-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 7h8v2H8z"></svg:path>`,
})
export class RiFolderReduceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderSettingsLineIcon],svg[ri-folder-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4.591 8.809a3.5 3.5 0 0 1 0-1.622l-.991-.572l1-1.732l.991.573a3.5 3.5 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573l1 1.732l-.991.572a3.5 3.5 0 0 1 0 1.622l.991.572l-1 1.731l-.991-.572a3.5 3.5 0 0 1-1.404.811v1.145h-2V16.35a3.5 3.5 0 0 1-1.404-.811l-.991.572l-1-1.73zm3.404.688a1.5 1.5 0 1 0 0-2.999a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiFolderSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderSharedLineIcon],svg[ri-folder-shared-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-4 4v-3.5l5 4.5l-5 4.5V19h-3v-2z"></svg:path>`,
})
export class RiFolderSharedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderShield2LineIcon],svg[ri-folder-shield-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9h-2V7h-8.414l-2-2H4v14h7.447a4.97 4.97 0 0 0 1.664 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-9 2h9v5.949c0 .99-.501 1.916-1.336 2.465L17.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 13 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36l2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z"></svg:path>`,
})
export class RiFolderShield2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderShieldLineIcon],svg[ri-folder-shield-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 4h8v4.904c0 .892-.446 1.724-1.187 2.219L12 17.998l-2.813-1.875A2.67 2.67 0 0 1 8 13.904zm2 4.904c0 .223.111.431.297.555L12 15.594l1.703-1.135a.67.67 0 0 0 .297-.555V11h-4z"></svg:path>`,
})
export class RiFolderShieldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderTransferLineIcon],svg[ri-folder-transfer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm8 7V9l4 4l-4 4v-3H8v-2z"></svg:path>`,
})
export class RiFolderTransferLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderUnknowLineIcon],svg[ri-folder-unknow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 11h2v2h-2zm-2.433-5.187A3.501 3.501 0 1 1 12 15h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794z"></svg:path>`,
})
export class RiFolderUnknowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderUploadLineIcon],svg[ri-folder-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm9 8v4h-2v-4H8l4-4l4 4z"></svg:path>`,
})
export class RiFolderUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderUserLineIcon],svg[ri-folder-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 13a4 4 0 0 1 8 0zm4-5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiFolderUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderVideoLineIcon],svg[ri-folder-video-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V5h5.586l2 2H20v12zM21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667l-4.878-3.253a.4.4 0 0 0-.622.333v6.505a.4.4 0 0 0 .622.333L15 13.333a.4.4 0 0 0 0-.666"></svg:path>`,
})
export class RiFolderVideoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderWarningLineIcon],svg[ri-folder-warning-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 10h2v2h-2zm0-6h2v5h-2z"></svg:path>`,
})
export class RiFolderWarningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFolderZipLineIcon],svg[ri-folder-zip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM18 18h-4v-3h2v-2h-2v-2h2V9h-2V7h-2.414l-2-2H4v14h16V7h-4v2h2v2h-2v2h2z"></svg:path>`,
})
export class RiFolderZipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFoldersLineIcon],svg[ri-folders-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 2H4v10h12v-2H6zm2-4v10h12V7h-5.414l-2-2z"></svg:path>`,
})
export class RiFoldersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFootballLineIcon],svg[ri-football-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1.67 14h-3.34l-1.38 1.897l.554 1.706A8 8 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706zm-8.376-5.128l-1.292.938L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82l-1.028-3.17zm13.412 0l-2.393.778l-1.028 3.17l1.322 1.82h1.91A7.96 7.96 0 0 0 20 12l-.003-.19zM12 9.536l-2.344 1.702l.896 2.762h2.895l.896-2.762zm2.291-5.203L13 5.273V7.79l2.694 1.957l2.24-.727l.554-1.703a8 8 0 0 0-4.196-2.984m-4.583 0a8 8 0 0 0-4.195 2.985l.554 1.702l2.239.727L11 7.79V5.273z"></svg:path>`,
})
export class RiFootballLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFootprintLineIcon],svg[ri-footprint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h5.5v1.25a2.75 2.75 0 0 1-5.5 0zm4.058-4l.045-.132C8.87 11.762 9 11.37 9 11c0-.75-.203-1.643-.528-2.273C8.23 8.257 8.06 8.12 8 8.12c-1.28 0-2.5 1.364-2.5 2.88c0 .958.075 1.772.227 2.757l.038.242zM8 6.12c2 0 3 2.88 3 4.88c0 1-.5 2-1 3.5L9.5 16H4c0-1-.5-2.5-.5-5S5.498 6.12 8 6.12m12.054 7.978l-.217 1.231a2.75 2.75 0 0 1-5.416-.955l.216-1.23zm-1.05-4.246c.165-.5.301-.894.303-.9c.202-.658.361-1.303.485-2.008c.263-1.492-.702-3.047-1.962-3.27c-.059-.01-.25.095-.57.515c-.43.565-.784 1.41-.915 2.147c-.058.33-.049.405.27 2.263c.045.256.082.486.116.717l.02.138zm-.826-8.147c2.464.434 4.018 3.125 3.584 5.587s-1.187 3.852-1.36 4.837l-5.417-.955l-.232-1.564c-.232-1.564-.55-2.636-.377-3.62c.347-1.97 1.832-4.632 3.802-4.285"></svg:path>`,
})
export class RiFootprintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForbid2LineIcon],svg[ri-forbid-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m4.891-11.477l-8.368 8.368a6 6 0 0 1-1.414-1.414l8.368-8.368a6 6 0 0 1 1.414 1.414"></svg:path>`,
})
export class RiForbid2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForbidLineIcon],svg[ri-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.523 7.109l8.368 8.368a6 6 0 0 1-1.414 1.414L7.109 8.523A6 6 0 0 1 8.523 7.11"></svg:path>`,
})
export class RiForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForward10LineIcon],svg[ri-forward-10-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v1.25a2.5 2.5 0 0 0-4 2v2.5a2.5 2.5 0 0 0 5 0v-2.5c0-.455-.122-.882-.334-1.25H22v-6h-2V6a9.99 9.99 0 0 0-8-4m3.5 8.75v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z"></svg:path>`,
})
export class RiForward10LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForward15LineIcon],svg[ri-forward-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v1h-4v4.25h2.875a.625.625 0 1 1 0 1.25H12v1.5h2.875a2.125 2.125 0 0 0 0-4.25H13.5V10h3.25v-.5H22v-6h-2V6a9.99 9.99 0 0 0-8-4M8.5 8.5H10v7H8.5z"></svg:path>`,
})
export class RiForward15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForward30LineIcon],svg[ri-forward-30-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2a9.99 9.99 0 0 1 8 4V3.5h2v6h-4.834c.212.368.334.795.334 1.25v2.5a2.5 2.5 0 0 1-5 0v-2.5A2.5 2.5 0 0 1 16 8.458V7.5h2.616A8 8 0 1 0 20 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12m13-2.25a1 1 0 0 0-1 1v2.5a1 1 0 1 0 2 0v-2.5a1 1 0 0 0-1-1m-5.625 3a.625.625 0 1 1 0 1.25H6.75v1.5h2.625a2.125 2.125 0 0 0 1.62-3.5a2.125 2.125 0 0 0-1.62-3.5H6.75V10h2.625a.625.625 0 1 1 0 1.25H7.5v1.5z"></svg:path>`,
})
export class RiForward30LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForward5LineIcon],svg[ri-forward-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v2h6v-6h-2V6a9.99 9.99 0 0 0-8-4M9.5 8.5h5V10H11v1.25h1.625a2.125 2.125 0 0 1 0 4.25H9.5V14h3.125a.625.625 0 1 0 0-1.25H9.5z"></svg:path>`,
})
export class RiForward5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForwardEndLineIcon],svg[ri-forward-end-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4a1 1 0 0 0-1 1v5.666l-9.223-6.148a.5.5 0 0 0-.777.416v5.732L1.777 4.518A.5.5 0 0 0 1 4.934v14.132a.5.5 0 0 0 .777.416L11 13.333v5.733a.5.5 0 0 0 .777.416L21 13.333V19a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1M3 7.737L9.394 12L3 16.263zm10 8.526V7.737L19.394 12z"></svg:path>`,
})
export class RiForwardEndLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riForwardEndMiniLineIcon],svg[ri-forward-end-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M4 9.86L7.032 12L4 14.14zm-1.5 7.675a.5.5 0 0 0 .288-.092l7.133-5.035a.5.5 0 0 0 0-.817L2.788 6.556A.5.5 0 0 0 2 6.965v10.07a.5.5 0 0 0 .5.5M16.032 12L13 14.14V9.86zm-4.94-5.323a.5.5 0 0 0-.092.288v10.07a.5.5 0 0 0 .788.408l7.133-5.035a.5.5 0 0 0 0-.817l-7.133-5.035a.5.5 0 0 0-.697.12"></svg:path>`,
})
export class RiForwardEndMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFridgeLineIcon],svg[ri-fridge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.998 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 11h-12v9h12zm-8 2v4h-2v-4zm8-11h-12v7h12zm-8 2v3h-2V5z"></svg:path>`,
})
export class RiFridgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFriendicaLineIcon],svg[ri-friendica-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v5h-6v2h6v6h-6v3h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-2 0H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v-5h6v-2H8V7h6zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path>`,
})
export class RiFriendicaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFullscreenExitLineIcon],svg[ri-fullscreen-exit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7h4v2h-6V3h2zM8 9H2V7h4V3h2zm10 8v4h-2v-6h6v2zM8 15v6H6v-4H2v-2z"></svg:path>`,
})
export class RiFullscreenExitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFullscreenLineIcon],svg[ri-fullscreen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v2H4v4H2V3zM2 21v-6h2v4h4v2zm20 0h-6v-2h4v-4h2zm0-12h-2V5h-4V3h6z"></svg:path>`,
})
export class RiFullscreenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFunctionAddLineIcon],svg[ri-function-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm10 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm1 6v-4h4v4zM5 9V5h4v4zm0 10v-4h4v4zm11-8V8h-3V6h3V3h2v3h3v2h-3v3z"></svg:path>`,
})
export class RiFunctionAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFunctionLineIcon],svg[ri-function-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2-9v4h4V5zm0 10v4h4v-4zM5 5v4h4V5zm0 10v4h4v-4z"></svg:path>`,
})
export class RiFunctionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFundsBoxLineIcon],svg[ri-funds-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m11.793 6.793l-1.793-1.793h5v5l-1.793-1.793l-3.864 3.864l-2.121-2.121l-2.829 2.828l-1.414-1.414l4.243-4.243l2.121 2.121z"></svg:path>`,
})
export class RiFundsBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riFundsLineIcon],svg[ri-funds-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.41 14.526l3.402-3.402l2.829 2.829l3.157-3.157l-1.793-1.793h5v5l-1.793-1.793l-4.571 4.571l-2.829-2.828l-2.474 2.474a8 8 0 1 0-.927-1.9m-1.537 1.558l-.01-.01l.004-.004a10 10 0 0 1-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919"></svg:path>`,
})
export class RiFundsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGalleryLineIcon],svg[ri-gallery-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13c-1.678 0-3.249.46-4.593 1.259A15 15 0 0 1 18.147 19H20zm-3.996 6C14.044 14.302 9.408 11 4 11v8zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.95 10.95 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4zm14-8v4h-8V3h6V1zm-1.5 9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiGalleryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGalleryUploadLineIcon],svg[ri-gallery-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1v4H4v14h16V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1zm4 7l4 4h-3v4h-2v-4H8zm6-7v4h-8V3h6V1z"></svg:path>`,
})
export class RiGalleryUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGameLineIcon],svg[ri-game-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 4.697 14.477l.208-.157l-6.32-6.32l6.32-6.321l-.208-.156a7.97 7.97 0 0 0-4.394-1.517zm0 1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class RiGameLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGamepadLineIcon],svg[ri-gamepad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9zm8 4v2h-2v-2zm-2-4v2h-2V9z"></svg:path>`,
})
export class RiGamepadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGasStationLineIcon],svg[ri-gas-station-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657l1.414-1.414l4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2zm-9 0h7v-6H5zM5 5v6h7V5z"></svg:path>`,
})
export class RiGasStationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGatsbyLineIcon],svg[ri-gatsby-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.752 21.997c-5.221-.128-9.45-4.257-9.736-9.438l-.012-.313zM12 2a9.99 9.99 0 0 1 8.193 4.265l-1.638 1.148A8.003 8.003 0 0 0 4.535 9.12L14.88 19.466A8.02 8.02 0 0 0 19.749 14H15.5v-2H22c0 4.726-3.279 8.686-7.686 9.73L2.27 9.686C3.314 5.28 7.275 2 12 2"></svg:path>`,
})
export class RiGatsbyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGeminiLineIcon],svg[ri-gemini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 0 0 9.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 0 0-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 0 0-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 0 0 9.128-9.128zM12 5.85A11.6 11.6 0 0 1 5.85 12A11.6 11.6 0 0 1 12 18.15A11.6 11.6 0 0 1 18.15 12A11.6 11.6 0 0 1 12 5.85"></svg:path>`,
})
export class RiGeminiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGenderlessLineIcon],svg[ri-genderless-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.066A7.501 7.501 0 0 1 12 22a7.5 7.5 0 0 1-1-14.934V1h2zM12 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiGenderlessLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGhost2LineIcon],svg[ri-ghost-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.5 0 6 3 7 6c3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896Q14.094 22 12 22t-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6c1-3 3.5-6 7-6m0 2C9.89 4 7.935 5.788 6.989 8.371l-.092.261l-.316.95l-.949.315c-1.255.419-2.067 1.341-2.424 2.56l-.023.086l1.14.327a3 3 0 0 1 2.17 2.703l.005.181V17h.346a4 4 0 0 1 3.2 1.6l.136.192C10.758 19.664 11.316 20 12 20c.638 0 1.167-.293 1.703-1.04l.115-.168a4 4 0 0 1 3.1-1.785l.236-.007h.346v-1.246a3 3 0 0 1 2.003-2.83l.173-.054l1.139-.327l-.023-.087c-.337-1.151-1.08-2.037-2.22-2.484l-.204-.075l-.95-.316l-.315-.949C16.195 5.91 14.18 4 12 4m0 8c.828 0 1.5 1.12 1.5 2.5S12.828 17 12 17s-1.5-1.12-1.5-2.5s.672-2.5 1.5-2.5M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class RiGhost2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGhostLineIcon],svg[ri-ghost-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142a.999.999 0 0 0 1.74.003a2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.732-.701L19 18.5V11a7 7 0 0 0-7-7m0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5s-2-1.12-2-2.5s.895-2.5 2-2.5M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class RiGhostLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGhostSmileLineIcon],svg[ri-ghost-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142a.999.999 0 0 0 1.74.003a2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.732-.701L19 18.5V11a7 7 0 0 0-7-7m4 9a4 4 0 0 1-7.995.2L8 13h2a2 2 0 1 0 4 0zm-4-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiGhostSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGift2LineIcon],svg[ri-gift-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.505 2.003a3.5 3.5 0 0 1 3.163 5h3.337a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-8h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3.337a3.5 3.5 0 0 1 5.664-3.95a3.48 3.48 0 0 1 2.499-1.05m3.5 11h-12v7h12zm2-4h-16v2h16zm-10.5-5a1.5 1.5 0 0 0-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 0 0 9.649 4.01zm5 0l-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986z"></svg:path>`,
})
export class RiGift2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGiftLineIcon],svg[ri-gift-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.005 2.003a4 4 0 0 1 3.464 6h4.536v2h-2v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-10h-2v-2H5.54a4 4 0 0 1 6.465-4.646a3.98 3.98 0 0 1 2.999-1.354m-4 8h-6v9h6zm8 0h-6v9h6zm-10-6a2 2 0 0 0-.15 3.994l.15.006h2v-2a2 2 0 0 0-1.697-1.977l-.154-.018zm6 0a2 2 0 0 0-1.995 1.85l-.005.15v2h2a2 2 0 0 0 1.994-1.85l.006-.15a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiGiftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitBranchLineIcon],svg[ri-git-branch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21a3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiGitBranchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitClosePullRequestLineIcon],svg[ri-git-close-pull-request-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 6a3 3 0 1 1 4 2.83v6.34a3.001 3.001 0 1 1-2 0V8.83A3 3 0 0 1 3 6m12.293-2.707a1 1 0 0 1 1.414 0L18 4.586l1.293-1.293a1 1 0 1 1 1.414 1.414L19.414 6l1.293 1.293a1 1 0 0 1-1.414 1.414L18 7.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L16.586 6l-1.293-1.293a1 1 0 0 1 0-1.414M18 10a1 1 0 0 1 1 1v4.17a3.001 3.001 0 1 1-2 0V11a1 1 0 0 1 1-1M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiGitClosePullRequestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitCommitLineIcon],svg[ri-git-commit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiGitCommitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitForkLineIcon],svg[ri-git-fork-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m15-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiGitForkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitMergeLineIcon],svg[ri-git-merge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.105 8.79A3 3 0 0 0 10 11h4a5 5 0 0 1 4.927 4.146A3.001 3.001 0 0 1 18 21a3 3 0 0 1-1.105-5.79A3 3 0 0 0 14 13h-4a4.98 4.98 0 0 1-3-1v3.17a3.001 3.001 0 1 1-2 0V8.83a3.001 3.001 0 1 1 2.105-.04M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGitMergeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitPrDraftLineIcon],svg[ri-git-pr-draft-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 0 0 6 3M5 18a1 1 0 1 1 2 0a1 1 0 0 1-2 0m13-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiGitPrDraftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitPullRequestLineIcon],svg[ri-git-pull-request-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGitPullRequestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryCommitsLineIcon],svg[ri-git-repository-commits-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v-2h1V4H6v10.035Q6.245 14 6.5 14H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2h3v-3zM7 5h2v2H7zm0 3h2v2H7zm7 9v6h-2v-6H9l4-5l4 5z"></svg:path>`,
})
export class RiGitRepositoryCommitsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryLineIcon],svg[ri-git-repository-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2.5l-3-2l-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035Q6.245 14 6.5 14zM7 5h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"></svg:path>`,
})
export class RiGitRepositoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryPrivateLineIcon],svg[ri-git-repository-private-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v10h13V10zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-9 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"></svg:path>`,
})
export class RiGitRepositoryPrivateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGithubLineIcon],svg[ri-github-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.884 18.653c-.3-.2-.558-.455-.86-.816a51 51 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.095c-2.968-.726-4.648-2.64-4.648-6.396c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.124 1.937.17 3.415 1.096a11.7 11.7 0 0 1 2.687-.308c.912 0 1.819.104 2.684.308c1.477-.933 2.614-1.227 3.422-1.096q.128.02.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.878.19 1.38c0 .665-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.958c-1.14.227-1.984-.532-1.984-1.525l.002-.447l.005-.705c.005-.707.008-1.337.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.333 4.336-1.482 4.336-4.66c0-.955-.312-1.744-.913-2.404A1 1 0 0 1 17.2 6.19c.166-.414.236-.957.095-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135a9.6 9.6 0 0 0-2.592-.349c-.89 0-1.772.118-2.592.35a1 1 0 0 1-.829-.134c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.045c-.597.655-.913 1.458-.913 2.404c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.202 1.177.545 1.748c-.193.168-.43.732-.43 1.364v3.15c0 .985-.834 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.661-.088-2.254-.485"></svg:path>`,
})
export class RiGithubLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGitlabLineIcon],svg[ri-gitlab-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.544 2.673a1.55 1.55 0 0 1 1.8.097v.001c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54a1.54 1.54 0 0 1 .515-.769l.004-.004a1.55 1.55 0 0 1 1.795-.095l.002.001c.274.174.486.43.605.732l.004.01l2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.66 1.66 0 0 1-2 0l-6.731-5.065a5.45 5.45 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732m.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362c.217.755.671 1.42 1.295 1.896l6.66 5.01l6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8z"></svg:path>`,
})
export class RiGitlabLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGlasses2LineIcon],svg[ri-glasses-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.015 10.988c.03-1.535.11-2.52.34-3.667c.331-1.658.954-2.659 2.2-3.489l-1.11-1.664c-1.755 1.17-2.633 2.669-3.051 4.76c-.52 2.6-.398 7.936-.395 8.07V15a5 5 0 1 0 9.935-.806a3 3 0 0 1 2.13 0a5 5 0 1 0 9.935.806s.132-5.439-.394-8.071c-.419-2.092-1.296-3.591-3.05-4.761l-1.11 1.664c1.245.83 1.867 1.831 2.199 3.49c.229 1.145.31 2.131.34 3.666A4.98 4.98 0 0 0 17.998 10a5 5 0 0 0-4.224 2.325A5 5 0 0 0 11.999 12a5 5 0 0 0-1.775.325A5 5 0 0 0 5.999 10a4.98 4.98 0 0 0-2.984.988M3 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0m12.168-.994A3.002 3.002 0 0 1 21 15a3 3 0 1 1-5.832-.994"></svg:path>`,
})
export class RiGlasses2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGlassesLineIcon],svg[ri-glasses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 0 1 8.192-3.848A4 4 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12m17-3a2.996 2.996 0 0 0-3 3a3 3 0 1 0 3-3"></svg:path>`,
})
export class RiGlassesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGlobalLineIcon],svg[ri-global-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667"></svg:path>`,
})
export class RiGlobalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGlobeLineIcon],svg[ri-globe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A10 10 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95zm-1-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class RiGlobeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGoblet2LineIcon],svg[ri-goblet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.133 2L5.011 9.859c-.303 2.114.521 3.93 1.88 5.188c1.105 1.022 2.568 1.685 4.11 1.887V20H6v2h12v-2h-5v-3.066c1.54-.202 3.004-.865 4.109-1.888c1.359-1.257 2.182-3.073 1.88-5.187L17.868 2zm.857 8.141L7.868 4h8.265l.878 6.141c.198 1.386-.322 2.57-1.26 3.438c-.954.883-2.333 1.421-3.75 1.421c-1.418 0-2.797-.538-3.752-1.421c-.937-.868-1.457-2.052-1.259-3.438"></svg:path>`,
})
export class RiGoblet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGobletLineIcon],svg[ri-goblet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2zM7.49 7h9.02l1.8-2H5.69zm1.8 2L12 12.01L14.71 9z"></svg:path>`,
})
export class RiGobletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGogglesLineIcon],svg[ri-goggles-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.718 10.147C3.285 10.7 3 11.446 3 12.5c0 1.015.37 2.052.964 2.822C4.56 16.095 5.294 16.5 6 16.5c.762 0 1.514-.434 2.538-1.092C9.588 14.735 10.706 14 12 14s2.413.735 3.462 1.408c1.024.658 1.776 1.092 2.538 1.092c.706 0 1.44-.405 2.036-1.178c.593-.77.964-1.807.964-2.822c0-1.054-.285-1.8-.718-2.353c-.443-.567-1.1-1.008-1.956-1.34C16.582 8.133 14.252 8 12 8s-4.58.132-6.327.808c-.856.331-1.512.772-1.955 1.339m1.234-3.205C7.08 6.118 9.75 6 12 6s4.92.118 7.049.942c1.08.419 2.08 1.04 2.81 1.974C22.596 9.862 23 11.054 23 12.5c0 1.47-.525 2.933-1.38 4.042c-.85 1.105-2.116 1.958-3.62 1.958c-1.425 0-2.656-.79-3.575-1.38C13.72 16.667 12.883 16 12 16s-1.72.667-2.425 1.12c-.919.59-2.15 1.38-3.575 1.38c-1.503 0-2.769-.852-3.62-1.958A6.74 6.74 0 0 1 1 12.5c0-1.446.402-2.638 1.142-3.584c.729-.933 1.728-1.555 2.81-1.974"></svg:path>`,
})
export class RiGogglesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGolfBallLineIcon],svg[ri-golf-ball-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGolfBallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGoogleLineIcon],svg[ri-google-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h8.533q.066.578.067 1.184c0 2.734-.98 5.036-2.678 6.6c-1.485 1.371-3.518 2.175-5.942 2.175A8.976 8.976 0 0 1 3 11.98A8.976 8.976 0 0 1 11.98 3c2.42 0 4.453.89 6.008 2.339L16.526 6.8C15.368 5.681 13.803 5 12 5a7 7 0 0 0 0 14c3.527 0 6.144-2.608 6.577-6H12z"></svg:path>`,
})
export class RiGoogleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGooglePlayLineIcon],svg[ri-google-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1m8.292 11.68l-4.498 4.498l5.699-3.299zM5 6.118v11.76l5.88-5.88zm10.284 4.302L13.707 12l1.578 1.577L18.009 12zm-7.49-4.336l4.5 4.5l1.199-1.2z"></svg:path>`,
})
export class RiGooglePlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGovernmentLineIcon],svg[ri-government-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3zM6 5v1h12V5z"></svg:path>`,
})
export class RiGovernmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGpsLineIcon],svg[ri-gps-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.132 20.737A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0zM12 16l3 6H9z"></svg:path>`,
})
export class RiGpsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGradienterLineIcon],svg[ri-gradienter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9s-9.449-3.947-9.95-9m0-2c.5-5.053 4.764-9 9.95-9s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0zM12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiGradienterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGraduationCapLineIcon],svg[ri-graduation-cap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.333L0 9l12-7l12 7v8.5h-2v-7.333l-2 1.166v6.678l-.223.275A9.98 9.98 0 0 1 12 22a9.98 9.98 0 0 1-7.777-3.714L4 18.011zM6 12.5v4.792A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 6-2.708V12.5L12 16zM3.97 9L12 13.685L20.03 9L12 4.315z"></svg:path>`,
})
export class RiGraduationCapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGridLineIcon],svg[ri-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h-4v4h4zm2 0v4h3v-4zm-2 9v-3h-4v3zm2 0h3v-3h-3zM14 5h-4v3h4zm2 0v3h3V5zm-8 5H5v4h3zm0 9v-3H5v3zM8 5H5v3h3zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiGridLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGroup2LineIcon],svg[ri-group-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.55 11.5a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5m.45 8.248V16.4c0-.488.144-.937.404-1.338a6.47 6.47 0 0 0-5.033 1.417A8 8 0 0 0 10 19.749M4.453 14.66A8.46 8.46 0 0 1 9.5 13a8.5 8.5 0 0 1 2.967.532C13.345 13.19 14.392 13 15.5 13c1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504m14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a8 8 0 0 0 6.88-3.914M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m3.5-9.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiGroup2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGroup3LineIcon],svg[ri-group-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0M9 16.5a2.5 2.5 0 0 0-5 0V19h5zm2 4.5H2v-4.5a4.5 4.5 0 1 1 9 0zm8.5-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0m6.5 9.5a2.5 2.5 0 0 0-5 0V19h5zM13 19v-2.5a4.5 4.5 0 1 1 9 0V21h-9z"></svg:path>`,
})
export class RiGroup3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGroupLineIcon],svg[ri-group-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8.284 3.703A8 8 0 0 1 23 22h-2a6 6 0 0 0-3.537-5.473zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.5 5.5 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609z"></svg:path>`,
})
export class RiGroupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riGuideLineIcon],svg[ri-guide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4l-5 4V7h-3a1 1 0 0 0-1 1M5 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGuideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHailLineIcon],svg[ri-hail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17.419A8.003 8.003 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-9 5.197zM10 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiHailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHammerLineIcon],svg[ri-hammer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2zm4 0h-2v3h2z"></svg:path>`,
})
export class RiHammerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHandCoinLineIcon],svg[ri-hand-coin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.005 9.003a1 1 0 0 1 1 1a6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.53.58 3.354 1.5h3.146a5 5 0 0 1 4.516 2.851c-2.365 3.12-6.194 5.149-10.516 5.149c-2.79 0-5.15-.603-7.061-1.658a1 1 0 0 1-.94.658h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1 3v5.022l.045.032c1.794 1.26 4.133 1.946 6.955 1.946c3.004 0 5.798-1.156 7.835-3.13l.133-.133l-.12-.1a3 3 0 0 0-1.643-.63l-.205-.007h-2.112q.11.483.112 1v1h-9v-2l6.79-.001l-.034-.079a2.5 2.5 0 0 0-2.092-1.415l-.164-.005h-2.93a5 5 0 0 0-3.57-1.5m-2-1h-1v7h1zm14-6a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-7-5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiHandCoinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHandHeartLineIcon],svg[ri-hand-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.005 9.003a1 1 0 0 1 1 1a6.97 6.97 0 0 1 4.33 1.5h2.17c1.332 0 2.529.579 3.353 1.498l3.147.002a5 5 0 0 1 4.516 2.851c-2.365 3.12-6.194 5.149-10.516 5.149c-2.79 0-5.15-.604-7.061-1.658a1 1 0 0 1-.94.658h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1 3v5.02l.045.034c1.794 1.26 4.133 1.946 6.955 1.946c3.004 0 5.798-1.156 7.835-3.13l.133-.133l-.12-.1a3 3 0 0 0-1.643-.63l-.205-.007l-2.112-.001q.11.484.112 1v1h-9v-2h6.79l-.034-.079a2.5 2.5 0 0 0-2.092-1.415l-.164-.005h-2.93a5 5 0 0 0-3.57-1.5m-2-1h-1v7h1zm9.646-7.425l.354.354l.353-.354a2.5 2.5 0 0 1 3.536 3.536l-3.89 3.889l-3.888-3.89a2.5 2.5 0 1 1 3.535-3.535M11.53 4.992a.5.5 0 0 0-.059.637l.058.07l2.475 2.475l2.476-2.475a.5.5 0 0 0 .058-.637l-.058-.07a.5.5 0 0 0-.638-.057l-.07.057l-1.769 1.77l-1.767-1.77l-.068-.058a.5.5 0 0 0-.638.058"></svg:path>`,
})
export class RiHandHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHandSanitizerLineIcon],svg[ri-hand-sanitizer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2l-4-.001V6h3v2a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-1 8H8a2 2 0 0 0-2 2v8h12v-8a2 2 0 0 0-2-2m-3 2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"></svg:path>`,
})
export class RiHandSanitizerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHandbagLineIcon],svg[ri-handbag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077l.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7m7.147 9H4.852l-.693 9H19.84zM14 13v2h-4v-2zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995z"></svg:path>`,
})
export class RiHandbagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHardDrive2LineIcon],svg[ri-hard-drive-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 14h14V4H5zm0 2v4h14v-4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 15h2v2h-2z"></svg:path>`,
})
export class RiHardDrive2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHardDrive3LineIcon],svg[ri-hard-drive-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.508 2.876A1 1 0 0 1 5.5 2h13a1 1 0 0 1 .992.876l1.5 12Q21 14.938 21 15v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 .008-.124zM6.383 4l-1.25 10h13.734l-1.25-10zM19 16H5v4h14zm-4 1h2v2h-2zm-2 0h-2v2h2z"></svg:path>`,
})
export class RiHardDrive3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHardDriveLineIcon],svg[ri-hard-drive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.938A8.004 8.004 0 0 0 11.938 4H5zm0 2.013V20h14V4h-5.05A10 10 0 0 1 5 12.95M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 14h2v2h-2z"></svg:path>`,
})
export class RiHardDriveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHaze2LineIcon],svg[ri-haze-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.121Q9.765 16.999 7 17A5 5 0 0 1 7 7q2.765 0 5 3.121Q14.235 7.001 17 7M7 9a3 3 0 1 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147l-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146l.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 1 0 0-6m-5-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class RiHaze2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHazeLineIcon],svg[ri-haze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.083 13a6 6 0 1 1 11.834 0h-2.043a4 4 0 1 0-7.748 0zM2 15h10v2H2zm12 0h8v2h-8zm2 4h4v2h-4zM4 19h10v2H4zm7-18h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM19.07 3.515l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"></svg:path>`,
})
export class RiHazeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHdLineIcon],svg[ri-hd-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5zm7-.75v3H16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM13 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3z"></svg:path>`,
})
export class RiHdLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeadphoneLineIcon],svg[ri-headphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 0 0-8 8h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 0 0-8-8M4 14v5h3v-5zm13 0v5h3v-5z"></svg:path>`,
})
export class RiHeadphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHealthBookLineIcon],svg[ri-health-book-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3a1 1 0 0 1 1-1zm-1 2H7v16h12zm-5 4v3h3v2h-3.001L14 16h-2l-.001-3H9v-2h3V8z"></svg:path>`,
})
export class RiHealthBookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeart2LineIcon],svg[ri-heart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464a6 6 0 0 1 8.242.228M5.172 6.172a4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-5.646-5.64l-4.202 4.203l-1.415-1.414l2.825-2.827l-.082-.069a4 4 0 0 0-5.328.295"></svg:path>`,
})
export class RiHeart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeart3LineIcon],svg[ri-heart-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2m-3.566 15.604a27 27 0 0 0 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.657 4 9c0 2.944 1.666 5.533 4.645 7.903c.745.593 1.54 1.146 2.421 1.7c.299.189.595.37.934.572c.339-.202.635-.383.934-.571"></svg:path>`,
})
export class RiHeart3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeartAdd2LineIcon],svg[ri-heart-add-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9c0-2.508 1.714-4 3.5-4c1.906 0 3.254 1.582 4.5 2.828C13.246 6.582 14.594 5 16.5 5C18.316 5 20 6.484 20 9c0 1.122-.236 2.15-.65 3.102l1.836.796A9.7 9.7 0 0 0 22 9c0-3.504-2.466-6-5.5-6c-1.91 0-3.354.985-4.5 2.028C10.854 3.985 9.41 3 7.5 3C4.504 3 2 5.496 2 9c0 3.02 1.362 5.47 3.203 7.445c1.83 1.962 4.182 3.51 6.289 4.753l1.016-1.722c-2.067-1.22-4.215-2.65-5.842-4.395C5.051 13.35 4 11.363 4 9m15 8v-3h-2v3h-3v2h2.999L17 22h2l-.001-3H22v-2z"></svg:path>`,
})
export class RiHeartAdd2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeartAddLineIcon],svg[ri-heart-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm1.243-9.243a6 6 0 0 1 .237 8.235l-1.42-1.418c1.33-1.524 1.26-3.914-.233-5.404a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605l8.432 8.446L12 21.485l-8.48-8.492A6 6 0 0 1 12 4.529a6 6 0 0 1 8.242.228"></svg:path>`,
})
export class RiHeartAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeartLineIcon],svg[ri-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 4.529a6 6 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464m6.826 1.641a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454"></svg:path>`,
})
export class RiHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeartPulseLineIcon],svg[ri-heart-pulse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5c-1.977-1.186-7.083-3.937-9.131-8.499L1 13v-2h1.21A9.6 9.6 0 0 1 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2m0 2c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.657 4 9q0 1.028.267 2h2.167L8.5 7.556l3 5L12.434 11H17v2h-3.434L11.5 16.444l-3-5L7.566 13H5.108c.79 1.374 1.985 2.668 3.537 3.903c.745.593 1.54 1.146 2.421 1.7c.299.189.595.37.934.572c.339-.202.635-.383.934-.571a27 27 0 0 0 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4"></svg:path>`,
})
export class RiHeartPulseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeartsLineIcon],svg[ri-hearts-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.243 4.757a6 6 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485l-8.48-8.492A6 6 0 0 1 11 4.529a6 6 0 0 1 8.242.228m-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208a1.614 1.614 0 0 0-2.268.002l-1.772 1.754l-1.407-1.396l-.363-.36a1.613 1.613 0 0 0-2.266 0m-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562l-1.006-1a3.55 3.55 0 0 1 0-5.047a3.614 3.614 0 0 1 5.084 0l.363.36l.363-.36a3.6 3.6 0 0 1 1.465-.882a4 4 0 0 0-1.001-3.993a4 4 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.494.154"></svg:path>`,
})
export class RiHeartsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHeavyShowersLineIcon],svg[ri-heavy-showers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 14h2v6H7zm8 0h2v6h-2zm-4 3h2v6h-2z"></svg:path>`,
})
export class RiHeavyShowersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHexagonLineIcon],svg[ri-hexagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2.5L23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5z"></svg:path>`,
})
export class RiHexagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHistoryLineIcon],svg[ri-history-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m1 5v4.585l3.243 3.243l-1.415 1.415L11 12.413V7z"></svg:path>`,
})
export class RiHistoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome2LineIcon],svg[ri-home-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454z"></svg:path>`,
})
export class RiHome2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome3LineIcon],svg[ri-home-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454zm2-4h8v2H8z"></svg:path>`,
})
export class RiHome3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome4LineIcon],svg[ri-home-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1m-6-2h5V9.157l-6-5.454l-6 5.454V19h5v-6h2z"></svg:path>`,
})
export class RiHome4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome5LineIcon],svg[ri-home-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19h6V9.978l-7-5.444l-7 5.444V19h6v-6h2zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79z"></svg:path>`,
})
export class RiHome5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome6LineIcon],svg[ri-home-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19zM7 15h10v2H7z"></svg:path>`,
})
export class RiHome6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome7LineIcon],svg[ri-home-7-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454zm6-4a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiHome7LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome8LineIcon],svg[ri-home-8-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454zm3-9h6v6H9zm2 2v2h2v-2z"></svg:path>`,
})
export class RiHome8LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHome9LineIcon],svg[ri-home-9-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.581 2.686a1 1 0 0 0-1.162 0l-9.5 6.786l1.162 1.627L12 4.73l8.919 6.37l1.162-1.627zm7 10l-7-5a1 1 0 0 0-1.162 0l-7 5a1 1 0 0 0-.42.814V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-.418-.814M6 19v-4.985l6-4.286l6 4.286V19z"></svg:path>`,
})
export class RiHome9LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeGearLineIcon],svg[ri-home-gear-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454l-6 5.454zm2.591-5.191a3.5 3.5 0 0 1 0-1.622l-.991-.572l1-1.732l.991.573a3.5 3.5 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573l1 1.731l-.991.573a3.5 3.5 0 0 1 0 1.622l.991.572l-1 1.731l-.991-.572a3.5 3.5 0 0 1-1.404.811v1.145h-2V16.35a3.5 3.5 0 0 1-1.404-.811l-.991.572l-1-1.73zm3.404.688a1.5 1.5 0 1 0 0-2.998a1.5 1.5 0 0 0 0 2.998"></svg:path>`,
})
export class RiHomeGearLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeHeartLineIcon],svg[ri-home-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-2-1V9.157l-6-5.454l-6 5.454V19zm-6-2l-3.359-3.359a2.25 2.25 0 0 1 3.182-3.182l.177.177l.177-.177a2.25 2.25 0 0 1 3.182 3.182z"></svg:path>`,
})
export class RiHomeHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeLineIcon],svg[ri-home-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19z"></svg:path>`,
})
export class RiHomeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeOfficeLineIcon],svg[ri-home-office-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.673 1.612L20.8 9h-2.973L12 3.703L6 9.158V19h5v2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0M14 11h9v7h-9zm2 2v3h5v-3zm8 8H13v-2h11z"></svg:path>`,
})
export class RiHomeOfficeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeSmile2LineIcon],svg[ri-home-smile-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V9.799l-7-5.522l-7 5.522V19zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0"></svg:path>`,
})
export class RiHomeSmile2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeSmileLineIcon],svg[ri-home-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12V9.157l-6-5.454l-6 5.454zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M7.5 13h2a2.5 2.5 0 0 0 5 0h2a4.5 4.5 0 1 1-9 0"></svg:path>`,
})
export class RiHomeSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHomeWifiLineIcon],svg[ri-home-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19h12V9.157l-6-5.454l-6 5.454zm13 2H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M8 10a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5zm0 4a3 3 0 0 1 3 3H8z"></svg:path>`,
})
export class RiHomeWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHonorOfKingsLineIcon],svg[ri-honor-of-kings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.33 4.256l-1.424 1.423a8.001 8.001 0 0 0-12.272 9.444l2.417-2.417a5.002 5.002 0 0 1 7.707-4.879l-1.464 1.465a3.001 3.001 0 0 0-4.001 4l-6.45 6.45c-.034-3.5-.591-4.811-.788-6.701A9.98 9.98 0 0 1 4.93 4.929c3.666-3.666 9.471-3.89 13.4-.673m2.83.002c.033 3.5.59 4.81.787 6.701a9.98 9.98 0 0 1-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l1.424-1.423a8.001 8.001 0 0 0 12.272-9.444l-2.417 2.417a5.002 5.002 0 0 1-7.707 4.878l1.464-1.464a3.001 3.001 0 0 0 4.001-4z"></svg:path>`,
})
export class RiHonorOfKingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHonourLineIcon],svg[ri-honour-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03l-8.702-3.85A.5.5 0 0 1 3 18.722V4H1V2h22v2zM5 4v13.745l7 3.1l7-3.1V4zm3 4h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class RiHonourLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHospitalLineIcon],svg[ri-hospital-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-6h8v6h3V4H5v16zm2 0h4v-4h-4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8z"></svg:path>`,
})
export class RiHospitalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHotelBedLineIcon],svg[ri-hotel-bed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4m-2 3v-3a2 2 0 0 0-2-2h-4v5zM8 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiHotelBedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHotelLineIcon],svg[ri-hotel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1zm-5-2h2v-8h-6v8h2v-6h2zm0-10V5H5v14h6V9zM7 11h2v2H7zm0 4h2v2H7zm0-8h2v2H7z"></svg:path>`,
})
export class RiHotelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHotspotLineIcon],svg[ri-hotspot-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z"></svg:path>`,
})
export class RiHotspotLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHourglass2LineIcon],svg[ri-hourglass-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v4.46L13.537 12L20 17.54V22H4v-4.46L10.463 12L4 6.46zm8 8.683l6-5.143V4H6v1.54zm0 2.634L6 18.46V20h12v-1.54z"></svg:path>`,
})
export class RiHourglass2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHourglassLineIcon],svg[ri-hourglass-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H4V2h16v2h-2v2c0 1.615-.816 2.915-1.844 3.977c-.703.726-1.558 1.395-2.425 2.023c.867.628 1.722 1.297 2.425 2.023C17.184 15.085 18 16.385 18 18v2h2v2H4v-2h2v-2c0-1.615.816-2.915 1.844-3.977c.703-.726 1.558-1.395 2.425-2.023c-.867-.628-1.722-1.297-2.425-2.023C6.816 8.915 6 7.615 6 6zm2 0v2c0 .885.434 1.71 1.281 2.586c.727.751 1.674 1.454 2.719 2.192c1.045-.738 1.992-1.441 2.719-2.192C15.566 7.71 16 6.885 16 6V4zm4 9.222c-1.045.738-1.992 1.441-2.719 2.192C8.434 16.29 8 17.115 8 18v2h8v-2c0-.885-.434-1.71-1.281-2.586c-.727-.751-1.674-1.454-2.719-2.192"></svg:path>`,
})
export class RiHourglassLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHqLineIcon],svg[ri-hq-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5zM16.25 15v1.5h-1.5V15H14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-1.75-4.5v3h2v-3z"></svg:path>`,
})
export class RiHqLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riHtml5LineIcon],svg[ri-html5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778zM3 2h18l-1.623 18L12 22l-7.377-2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4z"></svg:path>`,
})
export class RiHtml5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riIdCardLineIcon],svg[ri-id-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v12H3zM2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11 4h6v2h-6zm5 4h-5v2h5zm-7.5-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M8 13.5A3.5 3.5 0 0 0 4.5 17h7A3.5 3.5 0 0 0 8 13.5"></svg:path>`,
})
export class RiIdCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riIeLineIcon],svg[ri-ie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.16 10a6.003 6.003 0 0 0-11.318 0zM6.584 13a6.002 6.002 0 0 0 11.08 2.057h3.304l-.023.063a9.003 9.003 0 0 1-12.332 5c-2.744 1.49-5.113 1.799-6.422.49c-1.344-1.34-.628-4.851 1.313-8.373a23.6 23.6 0 0 1 2.498-3.665q.54-.65 1.126-1.252c-.275.055-1.88.851-3.412 2.714q.087-.389.206-.764a9.004 9.004 0 0 1 9.262-6.244c3.095-1.403 5.974-1.727 7.192-.511c1.125 1.123 1.062 2.995.125 5.242l-.027.064a8.96 8.96 0 0 1 1.027 4.18q0 .505-.055 1zm1.422 6.8a9.03 9.03 0 0 1-3.972-4.743c-1.161 2.282-1.46 4.19-.469 5.18c.813.812 2.438.624 4.438-.436zM20.173 7.29l.015-.034c.75-1.622.813-2.994.125-3.806c-.869-.867-2.54-.75-4.522.168a9.03 9.03 0 0 1 4.382 3.672"></svg:path>`,
})
export class RiIeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImage2LineIcon],svg[ri-image-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 11.1l2-2l5.5 5.5l3.5-3.5l3 3V5H5zm0 2.829V19h3.1l2.986-2.985L7 11.929zM10.929 19H19v-2.071l-3-3zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m11.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiImage2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageAddLineIcon],svg[ri-image-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM8 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiImageAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageAiLineIcon],svg[ri-image-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2.992 3H14v2H4v14L14 9l6 6v-4h2v9.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3M20 17.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiImageAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageCircleAiLineIcon],svg[ri-image-circle-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M12 4a8 8 0 0 0-5.135 14.135l7.428-7.428a1 1 0 0 1 1.414 0l3.87 3.87q0-.006.003-.011a8 8 0 0 0 .364-3.52l1.986-.237Q22 11.396 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2c.861 0 1.699.11 2.498.315L14 4.252A8 8 0 0 0 12 4m-1.187 15.913q.58.086 1.187.087c2.761 0 5.2-1.4 6.638-3.533L15 12.828l-6.41 6.41l.003.003a8 8 0 0 0 2.22.672M11 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiImageCircleAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageCircleLineIcon],svg[ri-image-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.576 14.576l-3.87-3.869a1 1 0 0 0-1.413 0l-7.428 7.428a8 8 0 1 1 12.711-3.558M8.59 19.24L15 12.83l3.639 3.638A8 8 0 0 1 12 20a8 8 0 0 1-3.41-.761M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiImageCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageEditLineIcon],svg[ri-image-edit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v1.757l-2 2V5H5v8.1l4-4l4.328 4.329l-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001l1.329-1.33L18.9 19h.1v-2.758l2-2V20a1 1 0 0 1-1 1H4c-.55 0-1-.45-1-1V4a1 1 0 0 1 1-1zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002l.002-1.412zM15.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class RiImageEditLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImageLineIcon],svg[ri-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riImportLineIcon],svg[ri-import-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1zM4 15h3.416a5.001 5.001 0 0 0 9.168 0H20v4H4zM4 5h16v8h-5a3 3 0 1 1-6 0H4zm12 4h-3V6h-2v3H8l4 4.5z"></svg:path>`,
})
export class RiImportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInbox2LineIcon],svg[ri-inbox-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.024 3.783A1 1 0 0 1 5 3h14a1 1 0 0 1 .976.783l2 9Q22 12.89 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 .024-.217zM5.802 5l-1.555 7H9a3 3 0 1 0 6 0h4.753l-1.555-7zm10.782 9a5.001 5.001 0 0 1-9.168 0H4v5h16v-5z"></svg:path>`,
})
export class RiInbox2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInboxArchiveLineIcon],svg[ri-inbox-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-7 1v4h3l-4 4l-4-4h3v-4zm5.764-5H5.237l-1 2h15.527z"></svg:path>`,
})
export class RiInboxArchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInboxLineIcon],svg[ri-inbox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7.416 14H4v5h16v-5h-3.416a5.001 5.001 0 0 1-9.168 0M20 5H4v7h5a3 3 0 1 0 6 0h5z"></svg:path>`,
})
export class RiInboxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInboxUnarchiveLineIcon],svg[ri-inbox-unarchive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-8 1l4 4h-3v4h-2v-4H8zm6.764-5H5.236l-.999 2h15.527z"></svg:path>`,
})
export class RiInboxUnarchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riIncreaseDecreaseLineIcon],svg[ri-increase-decrease-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm5 6h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm4 0h6v2h-6z"></svg:path>`,
})
export class RiIncreaseDecreaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riIndeterminateCircleLineIcon],svg[ri-indeterminate-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-9h10v2H7z"></svg:path>`,
})
export class RiIndeterminateCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInfinityLineIcon],svg[ri-infinity-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12a3.5 3.5 0 0 1 3.5-3.5c1.204 0 2.02.434 2.7 1.113c.726.727 1.285 1.72 1.926 2.873l.034.06c.6 1.082 1.283 2.311 2.227 3.255c1.008 1.008 2.316 1.699 4.113 1.699a5.5 5.5 0 1 0-4.158-9.1a24 24 0 0 1 1.122 1.857A3.5 3.5 0 1 1 17.5 15.5c-1.203 0-2.02-.434-2.7-1.113c-.726-.727-1.285-1.72-1.926-2.873l-.034-.06c-.6-1.082-1.283-2.311-2.227-3.255C9.605 7.191 8.297 6.5 6.5 6.5a5.5 5.5 0 1 0 4.158 9.1a24 24 0 0 1-1.122-1.857A3.5 3.5 0 0 1 3 12"></svg:path>`,
})
export class RiInfinityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInfoCardLineIcon],svg[ri-info-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v12H3zM2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11 5h6v2h-6zm5 4h-5v2h5zM6 13h1v3h2v-5H6zm3-5H7v2h2z"></svg:path>`,
})
export class RiInfoCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInformation2LineIcon],svg[ri-information-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-9.5V15h1v2h-4v-2h1v-2.5h-1v-2zm.5-2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiInformation2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInformationLineIcon],svg[ri-information-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M11 7h2v2h-2zm0 4h2v6h-2z"></svg:path>`,
})
export class RiInformationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInformationOffLineIcon],svg[ri-information-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m14.906 6.32A8 8 0 0 1 5.68 7.094l4.32 4.32V12.5h1V15h-1v2h4v-1.586zm1.414-1.414L13 11.586V10.5h-1.086l-4.82-4.82A8 8 0 0 1 18.32 16.905M13 14.414V15h.586zM12 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiInformationOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInfraredThermometerLineIcon],svg[ri-infrared-thermometer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2v9h-3.001L18 12a4 4 0 0 1-4 4h-1.379l-.613 3.111l.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9zm-2 2H8.3L5.655 9.95l1.985.837L5.514 20h4.678l-.309-.448L11.96 9H19zm-3.001 7h-2.394l-.591 3H14a2 2 0 0 0 2-2z"></svg:path>`,
})
export class RiInfraredThermometerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInkBottleLineIcon],svg[ri-ink-bottle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.997l4.371 1.748a1 1 0 0 1 .629.929v9.323a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323a1 1 0 0 1 .629-.929L8 8.997zm-.385 2h-7.23L5 12.35v7.646h14v-1H8v-5h11V12.35zm.385-8a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1zm-1 2H9v1h6z"></svg:path>`,
})
export class RiInkBottleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInputMethodLineIcon],svg[ri-input-method-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5.869 12l-.82 2H6.833L11 7h2l4.167 10H14.95l-.82-2zm.82-2h2.623L12 9.8z"></svg:path>`,
})
export class RiInputMethodLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInstagramLineIcon],svg[ri-instagram-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"></svg:path>`,
})
export class RiInstagramLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInstallLineIcon],svg[ri-install-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9.999 14h-14L5 20h14zM17 17v2h-2v-2zM13 2v5h3l-4 4l-4-4h3V2z"></svg:path>`,
})
export class RiInstallLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInstanceLineIcon],svg[ri-instance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653L12 3.311zM12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97L11 12.577v5.049h2v-5.049l4.501-2.605l-1.002-1.731L12 10.845L7.501 8.24z"></svg:path>`,
})
export class RiInstanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riInvisionLineIcon],svg[ri-invision-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm1.988 9.065l.77-3.271H6.565l.362-1.39h2.868l-1.132 4.67a3 3 0 0 0-.106.72c0 .298.141.386.362.437c.135.032 1.207.01 1.791-1.34l.744-3.097h-1.207l.362-1.39h2.58l-.332 1.578c.453-.88 1.359-1.715 2.25-1.715c.95 0 1.735.704 1.735 2.055c0 .345-.046.721-.166 1.145l-.483 1.805a2.2 2.2 0 0 0-.076.487c0 .314.121.47.347.47c.227 0 .514-.172.846-1.13l.664.267c-.393 1.429-1.102 2.025-1.993 2.025c-1.041 0-1.539-.643-1.539-1.523c0-.25.03-.518.106-.785l.498-1.853a2 2 0 0 0 .075-.565c0-.596-.347-.958-.905-.958c-.71 0-1.178.53-1.419 1.55l-.966 4.032h-1.69l.303-1.267c-.497.85-1.187 1.375-2.038 1.375c-1.026 0-1.509-.615-1.509-1.542c0-.235.03-.523.09-.79m1.637-5.44a1.125 1.125 0 1 1 0-2.25a1.125 1.125 0 0 1 0 2.25"></svg:path>`,
})
export class RiInvisionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riJavaLineIcon],svg[ri-java-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.82 8.427c-.76-1.085-1.046-1.872-1.108-2.445c-.059-.54.073-.97.335-1.383c.283-.447.708-.862 1.248-1.353c.505-.458 1.137-1.003 1.633-1.62L11.37.374c-.416.517-.928.947-1.418 1.391c-.534.485-1.149 1.062-1.593 1.764c-.466.735-.75 1.611-.635 2.67c.112 1.026.588 2.132 1.458 3.375zm1.25-3.03c.284-.684.861-1.37 1.78-2.156l1.3 1.518c-.831.713-1.129 1.153-1.235 1.407c-.104.25-.035.499.035.747c.084.296.223.79.214 1.322c-.012.706-.254 1.452-.832 2.32l-1.664-1.11c.422-.632.492-1.01.496-1.243c.005-.295-.072-.46-.197-.96c-.12-.478-.21-1.097.102-1.845M6.141 10c.47-.314 1.05-.474 1.592-.604L7.266 7.45c-.813.196-1.551.46-2.112.807C4.644 8.573 4 9.136 4 10c0 .726.486 1.306 1.065 1.686a2.5 2.5 0 0 0-.065.572c0 .98.418 1.807 1.143 2.42c-.107.3-.155.634-.14.968c-.777.151-1.536.373-2.17.664c-.432.198-.858.451-1.19.777c-.334.329-.643.804-.643 1.413c0 .427.189.772.374 1.01c.189.242.432.449.684.624c.506.351 1.184.669 1.959.936c1.558.538 3.669.93 5.983.93c3.327 0 5.663-.384 7.19-.782a13 13 0 0 0 1.704-.561c.21-.088.42-.181.616-.297c.01-.006-1.028-1.715-1.024-1.718c-.564.294-1.188.48-1.8.64c-1.349.352-3.513.718-6.686.718c-2.104 0-3.993-.358-5.33-.82c-.532-.184-1.088-.398-1.541-.74c.115-.09.29-.199.538-.312c.558-.256 1.323-.466 2.14-.591q.344.365.814.64c.965.562 2.292.823 3.879.823c1.31 0 2.258-.132 2.898-.274c.356-.078.714-.167 1.042-.328c.003-.002-.881-1.795-.881-1.795q-.291.105-.593.17c-.489.109-1.29.227-2.466.227c-1.413 0-2.336-.24-2.871-.551c-.426-.248-.589-.524-.622-.824c.868.253 1.895.375 3.056.375c1.463 0 2.518-.143 3.228-.297c.386-.083.775-.179 1.134-.346c.02-.01-.857-1.807-.857-1.807a4.4 4.4 0 0 1-.7.198c-.56.121-1.473.252-2.806.252c-1.603 0-2.67-.264-3.302-.623c-.471-.268-.678-.568-.74-.89c1.24.326 2.805.513 4.48.513c1.817 0 3.502-.22 4.783-.598l-.566-1.918c-1.054.311-2.54.516-4.217.516c-1.724 0-3.245-.216-4.302-.542c-.5-.153-.846-.316-1.056-.458m11.448.746c1.213-.11 1.66.188 1.804.342c.149.16.201.408.136.67c-.116.464-.443.914-.973 1.328c-.529.413-1.2.74-1.873.965l.632 1.897c.828-.276 1.718-.698 2.471-1.285c.75-.586 1.424-1.385 1.683-2.42c.185-.74.112-1.741-.614-2.52c-.73-.782-1.909-1.109-3.447-.969z"></svg:path>`,
})
export class RiJavaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riJavascriptLineIcon],svg[ri-javascript-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.334 16.055l-.858 1.188q1.221 1.089 3.036 1.089q1.386-.033 2.112-.715q.737-.693.737-1.65q0-.935-.517-1.54t-1.738-.968q-1.01-.307-1.43-.561q-.418-.264-.418-.638q0-.34.341-.55q.342-.21.913-.209q.419 0 .946.165q.528.143.935.462l.77-1.199q-1.011-.814-2.684-.814q-1.198 0-1.969.616q-.792.615-.792 1.529q.011.968.638 1.507q.638.54 1.815.88q.98.307 1.331.616a.97.97 0 0 1 .341.748a.75.75 0 0 1-.34.66q-.353.242-1.013.242q-1.077.01-2.156-.858m-5.53.638a2.2 2.2 0 0 1-.616-.583l-1.034.847q.463.78 1.144 1.089q.638.285 1.463.286q.45 0 .935-.143t.891-.484q.715-.572.748-1.87v-5.588H9.85v5.302q0 .76-.34 1.067q-.342.297-.859.297q-.495 0-.847-.22M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiJavascriptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riJewelryLineIcon],svg[ri-jewelry-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.9c0-.463.319-.865.769-.973c1.396-.33 3.065-.326 4.462 0c.446.106.77.515.77.973v2.138a.75.75 0 0 0 .431.679l5.694 2.668a1.5 1.5 0 0 1 .728 1.982l-4.473 9.785A1.45 1.45 0 0 1 16.06 21H7.94a1.45 1.45 0 0 1-1.32-.848l-4.474-9.785a1.5 1.5 0 0 1 .728-1.982l5.694-2.668A.75.75 0 0 0 9 5.037zm2 .88v1.258a2.75 2.75 0 0 1-1.583 2.49l-.98.46C9.141 9.888 10.57 11 12 11s2.859-1.11 3.565-3.013l-.981-.46A2.75 2.75 0 0 1 13 5.038V3.78a14 14 0 0 0-1-.033c-.403 0-.736.014-1 .033m.32 9.174c-2.153-.296-3.845-1.976-4.697-4.117L4.172 9.985L8.292 19h7.416l4.121-9.015l-2.451-1.148c-.852 2.142-2.544 3.82-4.696 4.117l1.507 2.11a.75.75 0 0 1 0 .872l-1.985 2.78a.25.25 0 0 1-.407 0l-1.985-2.78a.75.75 0 0 1 0-.872z"></svg:path>`,
})
export class RiJewelryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKakaoTalkLineIcon],svg[ri-kakao-talk-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.679 18.123C3.093 16.566 1.5 14.112 1.5 11.405C1.501 6.701 6.249 3 12.001 3s10.5 3.701 10.5 8.405s-4.748 8.405-10.5 8.405q-.663 0-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066c-.62-.424-.596-.892-.382-1.56zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359l-.186.77l-.401 1.648l2.8-1.83l.365.046q.711.092 1.435.092c4.741 0 8.5-2.93 8.5-6.405S16.742 5 12.001 5s-8.5 2.93-8.5 6.405m14.407-.346l1.514 2.155a.472.472 0 1 1-.773.543l-1.428-2.033l-.427.413V13.5a.472.472 0 1 1-.944 0v-1.439a.5.5 0 0 1 0-.222V9.282a.472.472 0 0 1 .944 0v1.542l1.928-1.866a.472.472 0 0 1 .656.678zm-2.958 1.925a.472.472 0 1 1 0 .944h-1.932a.47.47 0 0 1-.471-.472V9.297a.472.472 0 1 1 .943 0v3.687zm-5.857-1.091h1.334l-.638-1.708zm2.523.487l.345.925a.472.472 0 1 1-.884.33l-.298-.799h-2.07l-.332.813a.472.472 0 1 1-.874-.357l1.662-4.075a.7.7 0 0 1 .653-.447a.69.69 0 0 1 .627.474l1.046 2.8a.47.47 0 0 1 .127.32zM8.294 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 0 1-.945 0V9.774h-1.16a.472.472 0 1 1 0-.944h3.245c.26 0 .471.211.471.472"></svg:path>`,
})
export class RiKakaoTalkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKey2LineIcon],svg[ri-key-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.758 11.828l7.849-7.849l1.414 1.414l-1.414 1.415l2.474 2.474l-1.414 1.415l-2.475-2.475l-1.414 1.414l2.121 2.121l-1.414 1.415l-2.121-2.122l-2.192 2.192a5.002 5.002 0 0 1-7.708 6.293a5 5 0 0 1 6.294-7.707m-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242"></svg:path>`,
})
export class RiKey2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKeyLineIcon],svg[ri-key-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.917 13A6.002 6.002 0 0 1 1 12a6 6 0 0 1 11.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4zM7 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiKeyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKeyboardBoxLineIcon],svg[ri-keyboard-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h2v2H6zm0 4h2v2H6zm0 4h12v2H6zm5-4h2v2h-2zm0-4h2v2h-2zm5 0h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class RiKeyboardBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKeyboardLineIcon],svg[ri-keyboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zm0-6h3v3H3zm5 0h3v3H8zM3 5h3v3H3zm10 0h3v3h-3zm5 0h3v3h-3zm-5 6h3v3h-3zm5 0h3v3h-3zM8 5h3v3H8z"></svg:path>`,
})
export class RiKeyboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKeynoteLineIcon],svg[ri-keynote-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.44 10h15.12l-1.2-6H5.64zM13 12v8h4v2H7v-2h4v-8H2.992c-.548 0-.906-.43-.797-.977l1.61-8.046C3.913 2.437 4.445 2 5 2h13.998c.553 0 1.087.43 1.197.977l1.609 8.046c.108.54-.26.977-.797.977z"></svg:path>`,
})
export class RiKeynoteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKickLineIcon],svg[ri-kick-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4z"></svg:path>`,
})
export class RiKickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKnifeBloodLineIcon],svg[ri-knife-blood-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.343 1.408L22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5L8 16.38V19a1 1 0 1 1-2 0v-4a1 1 0 0 0-1.993-.117L4.001 15v1a1 1 0 1 1-2 0V7.214A7.98 7.98 0 0 1 4.17 1.587zm.241 3.07l-.051.11a6 6 0 0 0-.522 2.103l-.01.31v.119a5.98 5.98 0 0 0 1.58 4.003l.176.185l6.364 6.364l2.828-2.829z"></svg:path>`,
})
export class RiKnifeBloodLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riKnifeLineIcon],svg[ri-knife-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.343 1.408L22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587zm.241 3.07l-.051.11a6 6 0 0 0 1.048 6.535l.176.185l6.364 6.364l2.828-2.829z"></svg:path>`,
})
export class RiKnifeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLandscapeAiLineIcon],svg[ri-landscape-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.213 8.628l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M15 6l-3.73 6.216L9 8L2 21h21zm-.013 13l-2.597-4.762l2.508-4.18L19.667 19zm-2.335 0H5.348L9 12.219z"></svg:path>`,
})
export class RiLandscapeAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLandscapeLineIcon],svg[ri-landscape-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.27 12.216L15 6l8 15H2L9 8zm1.12 2.022L14.987 19h4.68l-4.77-8.942zM5.348 19h7.304L9 12.219zM5.5 8a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class RiLandscapeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayout2LineIcon],svg[ri-layout-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 5H5v14h6zm8 8h-6v6h6zm0-8h-6v6h6z"></svg:path>`,
})
export class RiLayout2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayout3LineIcon],svg[ri-layout-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm4-11H5v9h3zm11 0h-9v9h9zm0-5H5v3h14z"></svg:path>`,
})
export class RiLayout3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayout4LineIcon],svg[ri-layout-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 10H5v6h6zm2 6h6V5h-6zM11 5H5v6h6z"></svg:path>`,
})
export class RiLayout4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayout5LineIcon],svg[ri-layout-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm4-11H4v9h3zm13 0H9v9h11zm0-5H4v3h16z"></svg:path>`,
})
export class RiLayout5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayout6LineIcon],svg[ri-layout-6-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm12-11H4v9h11zm5 0h-3v9h3zm0-5H4v3h16z"></svg:path>`,
})
export class RiLayout6LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutBottom2LineIcon],svg[ri-layout-bottom-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 10v2H6v-2z"></svg:path>`,
})
export class RiLayoutBottom2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutBottomLineIcon],svg[ri-layout-bottom-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V5H4z"></svg:path>`,
})
export class RiLayoutBottomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutColumnLineIcon],svg[ri-layout-column-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5H5v14h6zm2 0v14h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiLayoutColumnLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutGrid2LineIcon],svg[ri-layout-grid-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10h4v4H4zm0 9v-3h4v3zm6 0v-3h4v3zm6 0v-3h4v3zm0-5v-4h4v4zm0-6V5h4v3zm-2-3v3h-4V5zm0 5v4h-4v-4zM4 8V5h4v3zM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiLayoutGrid2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutGridLineIcon],svg[ri-layout-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 13H4v6h7zm9 0h-7v6h7zm-9-8H4v6h7zm9 0h-7v6h7z"></svg:path>`,
})
export class RiLayoutGridLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutHorizontalLineIcon],svg[ri-layout-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 5h10V7H7zm10 4H7v-2h10zM7 17h10v-2H7z"></svg:path>`,
})
export class RiLayoutHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutLeft2LineIcon],svg[ri-layout-left-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zM8 7v10H6V7z"></svg:path>`,
})
export class RiLayoutLeft2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutLeftLineIcon],svg[ri-layout-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 5H4v14h3zm13 0H9v14h11z"></svg:path>`,
})
export class RiLayoutLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutLineIcon],svg[ri-layout-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h14V5H5zm9 11v-9H5v9zm2 0h3v-9h-3zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiLayoutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutMasonryLineIcon],svg[ri-layout-masonry-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-11-5H4v4h7zm9-4h-7v8h7zm-9-6H4v8h7zm9 0h-7v4h7z"></svg:path>`,
})
export class RiLayoutMasonryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutRight2LineIcon],svg[ri-layout-right-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 2v10h-2V7z"></svg:path>`,
})
export class RiLayoutRight2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutRightLineIcon],svg[ri-layout-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-6 2H4v14h11zm5 0h-3v14h3z"></svg:path>`,
})
export class RiLayoutRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutRowLineIcon],svg[ri-layout-row-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11V5H5v6zm0 2H5v6h14zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiLayoutRowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutTop2LineIcon],svg[ri-layout-top-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 2v2H6V7z"></svg:path>`,
})
export class RiLayoutTop2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutTopLineIcon],svg[ri-layout-top-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 10v9h16v-9zm0-2h16V5H4z"></svg:path>`,
})
export class RiLayoutTopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLayoutVerticalLineIcon],svg[ri-layout-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm12 3v10h2V7zm-4 0v10h2V7zM7 17V7h2v10z"></svg:path>`,
})
export class RiLayoutVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLeafLineIcon],svg[ri-leaf-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v2c0 9.627-5.373 14-12 14H5.241a17 17 0 0 0-.243 3h-2c0-1.363.116-2.6.346-3.732Q2.999 16.327 2.998 13c0-5.523 4.477-10 10-10c2 0 4 1 8 0m-8 2a8 8 0 0 0-8 8q0 .543.01 1.046c1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.64 12.5 6.746 14.354 5.774 17h3.224c6.015 0 9.871-3.973 9.997-11.612c-1.372.133-2.647.048-4.22-.188c-1.15-.173-1.376-.2-1.777-.2"></svg:path>`,
})
export class RiLeafLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLifebuoyLineIcon],svg[ri-lifebuoy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 15a5 5 0 0 1-1.828-.344l-2.236 2.236A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.064-1.108l-2.236-2.236A5 5 0 0 1 12 17m-8-5a7.96 7.96 0 0 0 1.108 4.064l2.237-2.236A5 5 0 0 1 7 12c0-.645.122-1.261.345-1.828L5.108 7.936A7.96 7.96 0 0 0 4 12m14.892-4.064l-2.236 2.236c.222.567.344 1.183.344 1.828s-.122 1.261-.344 1.828l2.236 2.236A7.96 7.96 0 0 0 20 12a7.96 7.96 0 0 0-1.108-4.064M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-5a7.96 7.96 0 0 0-4.064 1.108l2.236 2.237A5 5 0 0 1 12 7c.645 0 1.261.122 1.828.345l2.236-2.237A7.96 7.96 0 0 0 12 4"></svg:path>`,
})
export class RiLifebuoyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLightbulbFlashLineIcon],svg[ri-lightbulb-flash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.973 18h4.054c.132-1.202.745-2.193 1.74-3.277c.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974c.996 1.084 1.609 2.076 1.741 3.278M14 20h-4v1h4zm-8.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15M13 10.004h2.5l-4.5 6v-4H8.5L13 6z"></svg:path>`,
})
export class RiLightbulbFlashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLightbulbLineIcon],svg[ri-lightbulb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.193 1.74-3.277c.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974c.996 1.084 1.609 2.076 1.741 3.278M10 20v1h4v-1zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15"></svg:path>`,
})
export class RiLightbulbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLineChartLineIcon],svg[ri-line-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v16h16v2H3V3zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999l-4.293 4.292l-1.414-1.414L13 7.586l3 2.999z"></svg:path>`,
})
export class RiLineChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLineLineIcon],svg[ri-line-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.001 10.69c0 1.787-.687 3.4-2.123 4.974c-2.1 2.414-6.788 5.363-7.864 5.812c-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9c-.112-.277-.556-.424-.881-.492C5.559 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118s10 3.643 10 8.118m-3.6 3.626c1.113-1.22 1.6-2.362 1.6-3.626c0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.079.226 1.884.614 2.329 1.708l.037.096c1.805-1.176 4.173-2.979 5.26-4.228m-.262-4.001a.526.526 0 0 1 0 1.05h-1.463v.938h1.463a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.526.526 0 0 1-.002 1.05h-1.463v.938zm-3.213 2.513a.524.524 0 0 1-.526.522a.52.52 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.52.52 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525c.287 0 .525.238.525.525zm-4.784 0a.527.527 0 0 1-.526.524a.526.526 0 0 1-.523-.524V8.852c0-.287.235-.525.525-.525c.289 0 .524.238.524.525zm-2.055.524H6.098a.53.53 0 0 1-.525-.524V8.852c0-.287.238-.525.525-.525c.29 0 .525.238.525.525v3.45h1.464a.525.525 0 0 1 0 1.05"></svg:path>`,
})
export class RiLineLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLinkedinBoxLineIcon],svg[ri-linkedin-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 1h2v7.5h-2zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2z"></svg:path>`,
})
export class RiLinkedinBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLinkedinLineIcon],svg[ri-linkedin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"></svg:path>`,
})
export class RiLinkedinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLinksLineIcon],svg[ri-links-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.06 8.111l1.415 1.414a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415zm6.718 6.01l-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.07l1.415 1.415l-1.415 1.414l-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 1 1 9.9 9.9"></svg:path>`,
})
export class RiLinksLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riListSettingsLineIcon],svg[ri-list-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h7v2H2zm0-7h9v2H2zm0-7h20v2H2zm18.674 9.025l1.156-.391l1 1.732l-.916.805a4 4 0 0 1 0 1.658l.916.805l-1 1.732l-1.156-.391a4 4 0 0 1-1.435.83L19 21h-2l-.24-1.196a4 4 0 0 1-1.434-.83l-1.156.392l-1-1.732l.916-.805a4 4 0 0 1 0-1.658l-.916-.805l1-1.732l1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196a4 4 0 0 1 1.434.83M18 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiListSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLiveLineIcon],svg[ri-live-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM7.4 8.829a.4.4 0 0 1 .215.062l4.355 2.771a.4.4 0 0 1 0 .675L7.615 15.11A.4.4 0 0 1 7 14.77V9.23a.4.4 0 0 1 .4-.4m13.6.01l-4 2.8v.718l4 2.8z"></svg:path>`,
})
export class RiLiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoader2LineIcon],svg[ri-loader-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 15a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m10-5a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1M7 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1m12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415M8.464 8.464a1 1 0 0 1-1.414 0l-2.12-2.12a1 1 0 0 1 1.414-1.415l2.12 2.121a1 1 0 0 1 0 1.414M4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 0 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0M15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 1 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0"></svg:path>`,
})
export class RiLoader2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoader3LineIcon],svg[ri-loader-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0m0-2a9.001 9.001 0 0 1 17.89 0h-2.016A7.002 7.002 0 0 0 5.07 11z"></svg:path>`,
})
export class RiLoader3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoader4LineIcon],svg[ri-loader-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364"></svg:path>`,
})
export class RiLoader4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoader5LineIcon],svg[ri-loader-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z"></svg:path>`,
})
export class RiLoader5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoaderLineIcon],svg[ri-loader-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 15a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7M7.67 14.5a1 1 0 0 1-.367 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366M20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17M7.67 9.5a1 1 0 0 1-1.367.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5"></svg:path>`,
})
export class RiLoaderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLock2LineIcon],svg[ri-lock-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm13 2H5v10h14zm-8 5.732A2 2 0 0 1 12 12a2 2 0 0 1 1 3.732V18h-2zM8 8h8V7a4 4 0 0 0-8 0z"></svg:path>`,
})
export class RiLock2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLockLineIcon],svg[ri-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zM5 12v8h14v-8zm6 2h2v4h-2zm6-4V9A5 5 0 0 0 7 9v1z"></svg:path>`,
})
export class RiLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLockPasswordLineIcon],svg[ri-lock-password-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zM5 10v10h14V10zm6 4h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2zm1-6V7a4 4 0 0 0-8 0v1z"></svg:path>`,
})
export class RiLockPasswordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLockStarLineIcon],svg[ri-lock-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7a6 6 0 1 1 12 0v1h1.5A1.5 1.5 0 0 1 21 9.5V13h-2v-3H5v10h8v2H4.5A1.5 1.5 0 0 1 3 20.5v-11A1.5 1.5 0 0 1 4.5 8H6zm10 0a4 4 0 0 0-8 0v1h8zm4.64 13.195l.505 2.946L18.5 21.75l-2.645 1.39l.505-2.945l-2.14-2.086l2.957-.43L18.5 15l1.323 2.68l2.957.43z"></svg:path>`,
})
export class RiLockStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLockUnlockLineIcon],svg[ri-lock-unlock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9zm-2 2v8h14v-8zm5 3h4v2h-4z"></svg:path>`,
})
export class RiLockUnlockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoginBoxLineIcon],svg[ri-login-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4V8l5 4l-5 4v-3H2v-2z"></svg:path>`,
})
export class RiLoginBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoginCircleLineIcon],svg[ri-login-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11V8l5 4l-5 4v-3H1v-2zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12A8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7"></svg:path>`,
})
export class RiLoginCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLogoutBoxLineIcon],svg[ri-logout-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z"></svg:path>`,
})
export class RiLogoutBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLogoutBoxRLineIcon],svg[ri-logout-box-r-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1zm13-6v-3h-7v-2h7V8l5 4z"></svg:path>`,
})
export class RiLogoutBoxRLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLogoutCircleLineIcon],svg[ri-logout-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.99 9.99 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-4"></svg:path>`,
})
export class RiLogoutCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLogoutCircleRLineIcon],svg[ri-logout-circle-r-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.99 9.99 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.99 9.99 0 0 1 12 22m7-6v-3h-8v-2h8V8l5 4z"></svg:path>`,
})
export class RiLogoutCircleRLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoopLeftLineIcon],svg[ri-loop-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a7.99 7.99 0 0 0-6.616 3.5H8v2H2v-6h2V6a9.98 9.98 0 0 1 8-4c5.523 0 10 4.477 10 10h-2a8 8 0 0 0-8-8m-8 8a8 8 0 0 0 14.616 4.5H16v-2h6v6h-2V18a9.98 9.98 0 0 1-8 4C6.477 22 2 17.523 2 12z"></svg:path>`,
})
export class RiLoopLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLoopRightLineIcon],svg[ri-loop-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a7.99 7.99 0 0 1 6.616 3.5H16v2h6v-6h-2V6a9.98 9.98 0 0 0-8-4C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8m8 8a8 8 0 0 1-14.616 4.5H8v-2H2v6h2V18a9.98 9.98 0 0 0 8 4c5.523 0 10-4.477 10-10z"></svg:path>`,
})
export class RiLoopRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLuggageCartLineIcon],svg[ri-luggage-cart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 20a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m13 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.172 1.757L6 5.585V17h14v2H5a1 1 0 0 1-1-1V6.413L.758 3.172zM16 3a1 1 0 0 1 1 1v2h2.994C20.55 6 21 6.456 21 6.995v8.01a1 1 0 0 1-1.006.995H8.007A1.01 1.01 0 0 1 7 15.005v-8.01A1 1 0 0 1 8.007 6H11V4a1 1 0 0 1 1-1zm-6 5H9v6h1zm6 0h-4v6h4zm3 0h-1v6h1zm-4-3h-2v1h2z"></svg:path>`,
})
export class RiLuggageCartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLuggageDepositLineIcon],svg[ri-luggage-deposit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zM8 8H5v11h3zm6 0h-4v11h4zm5 0h-3v11h3zm-5-3h-4v1h4z"></svg:path>`,
})
export class RiLuggageDepositLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riLungsLineIcon],svg[ri-lungs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.001 17c-.001 4-.001 4-4 4s-5-3-5-6c0-.378-.018-.918-.026-1.55l2.023 1.169L15 15c0 2.776.816 4 3 4c1.14 0 1.61-.007 1.963-.038c.03-.351.037-.822.037-1.962c0-3.205-.703-6.033-1.835-7.9c-.838-1.382-1.613-1.842-2.032-1.703c-.293.098-.605.65-.831 1.623l-1.79-1.033c.369-1.197.982-2.151 1.988-2.487c3-1 6.503 4 6.5 11.5M8.5 5.5c1.007.336 1.62 1.29 1.989 2.487L8.699 9.02c-.226-.973-.539-1.525-.831-1.623c-.42-.14-1.195.32-2.032 1.702C4.703 10.967 4 13.795 4 17c0 1.14.007 1.61.037 1.962C4.39 18.993 4.86 19 6 19c2.184 0 3-1.224 3-4l.004-.382l2.023-1.168c-.01.633-.027 1.172-.027 1.55c0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5M13 2v7.422l4.696 2.712l-1 1.732L12 11.155l-4.696 2.711l-1-1.732L11 9.422V2z"></svg:path>`,
})
export class RiLungsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMacLineIcon],svg[ri-mac-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v2l2 1v1H8l-.004-.996L10 20v-2H2.992A1 1 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008zM4 5v9h16V5z"></svg:path>`,
})
export class RiMacLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMacbookLineIcon],svg[ri-macbook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v11h16V5zm-2-.993C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007V18H2zM1 19h22v2H1z"></svg:path>`,
})
export class RiMacbookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMagicLineIcon],svg[ri-magic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.199 9.944a2.6 2.6 0 0 1-.79-1.55l-.403-3.083l-2.731 1.486a2.6 2.6 0 0 1-1.719.272L6.5 6.5l.57 3.056a2.6 2.6 0 0 1-.273 1.72l-1.486 2.73l3.083.403a2.6 2.6 0 0 1 1.55.79l2.138 2.257l1.336-2.807a2.6 2.6 0 0 1 1.23-1.231l2.808-1.336zm.025 5.564l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.358-.182l-5.106-.668a.6.6 0 0 1-.45-.881l2.462-4.524a.6.6 0 0 0 .063-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.062.943a.6.6 0 0 0 .397-.063l4.523-2.46a.6.6 0 0 1 .882.448l.668 5.107a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284m.797 1.927l1.414-1.414l4.243 4.242l-1.415 1.415z"></svg:path>`,
})
export class RiMagicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailAddLineIcon],svg[ri-mail-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"></svg:path>`,
})
export class RiMailAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailAiLineIcon],svg[ri-mail-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2 4a1 1 0 0 1 1-1h11v2H4.505L12 11.662l4.398-3.91l1.329 1.495L12 14.338L4 7.227V19h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiMailAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailCheckLineIcon],svg[ri-mail-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19 22l-3.536-3.535l1.415-1.415L19 19.172l3.535-3.536l1.415 1.414z"></svg:path>`,
})
export class RiMailCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailCloseLineIcon],svg[ri-mail-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zm16.903 14l2.121 2.121l-1.414 1.415L20 20.414l-2.121 2.121l-1.415-1.414L18.587 19l-2.121-2.121l1.414-1.415L20 17.587l2.121-2.121l1.415 1.414z"></svg:path>`,
})
export class RiMailCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailDownloadLineIcon],svg[ri-mail-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8h-2zM19.501 5H4.511l7.55 6.662zM20 18h3l-4 4l-4-4h3v-4h2z"></svg:path>`,
})
export class RiMailDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailForbidLineIcon],svg[ri-mail-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h7.07c.102.706.308 1.378.604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a7 7 0 0 0-2-.965zM19.501 5H4.511l7.55 6.662zm-2.794 15.708a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001M18 23a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class RiMailForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailLineIcon],svg[ri-mail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"></svg:path>`,
})
export class RiMailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailLockLineIcon],svg[ri-mail-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7h-2zM19.501 5H4.511l7.55 6.662zM22 17h1v5h-8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"></svg:path>`,
})
export class RiMailLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailOpenLineIcon],svg[ri-mail-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429M4 8.133V19h16V8.132l-7.996-4.8zm8.06 5.565l5.296-4.463l1.288 1.53l-6.57 5.537l-6.71-5.53l1.272-1.544z"></svg:path>`,
})
export class RiMailOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailSendLineIcon],svg[ri-mail-send-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9V4a1 1 0 0 1 1-1zM8 15v2H0v-2zm-3-5v2H0v-2zm14.566-5H4.434L12 11.81z"></svg:path>`,
})
export class RiMailSendLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailSettingsLineIcon],svg[ri-mail-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2zM19.501 5H4.511l7.55 6.662zM17.05 19.549a3 3 0 0 1 0-1.098l-1.014-.585l1-1.732l1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586l1 1.732l-1.014.585a3 3 0 0 1 0 1.098l1.014.585l-1 1.732l-1.014-.586a3 3 0 0 1-.95.55V23h-2v-1.17a3 3 0 0 1-.95-.55l-1.014.586l-1-1.732zM20 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiMailSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailStarLineIcon],svg[ri-mail-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19.5 21.75l-2.645 1.39l.505-2.945l-2.14-2.086l2.957-.43L19.5 15l1.323 2.68l2.957.43l-2.14 2.085l.505 2.946z"></svg:path>`,
})
export class RiMailStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailUnreadLineIcon],svg[ri-mail-unread-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.1 3a5 5 0 0 0 0 2H4.511l7.55 6.662l5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5 5 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM21 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class RiMailUnreadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMailVolumeLineIcon],svg[ri-mail-volume-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 14a2 2 0 0 1 .15 3.994L21 21zM19.5 5H4.511l7.55 6.662z"></svg:path>`,
})
export class RiMailVolumeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMap2LineIcon],svg[ri-map-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm14 14.395l4-1.714V5.033l-4 1.714zm-2-.131V6.736l-4-2v12.528zm-6-2.011V4.605L4 6.319v12.648z"></svg:path>`,
})
export class RiMap2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapLineIcon],svg[ri-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm12.935 2.204l-6-3L4 6.319v12.648l5.065-2.17l6 3L20 17.68V5.033z"></svg:path>`,
})
export class RiMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPin2LineIcon],svg[ri-map-pin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9zM12 13a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiMapPin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPin3LineIcon],svg[ri-map-pin-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2zM12 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path>`,
})
export class RiMapPin3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPin4LineIcon],svg[ri-map-pin-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2zM12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m-7 6h14v2H5z"></svg:path>`,
})
export class RiMapPin4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPin5LineIcon],svg[ri-map-pin-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.485l4.243-4.242a6 6 0 1 0-8.486 0zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z"></svg:path>`,
})
export class RiMapPin5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPinAddLineIcon],svg[ri-map-pin-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.9l4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path>`,
})
export class RiMapPinAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPinLineIcon],svg[ri-map-pin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.9l4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiMapPinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPinRangeLineIcon],svg[ri-map-pin-range-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488c0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488zM12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiMapPinRangeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPinTimeLineIcon],svg[ri-map-pin-time-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM13 11h4v2h-6V6h2z"></svg:path>`,
})
export class RiMapPinTimeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMapPinUserLineIcon],svg[ri-map-pin-user-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.084 15.812a7 7 0 1 0-10.168 0A6 6 0 0 1 12 13a6 6 0 0 1 5.084 2.812m-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiMapPinUserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMarkPenLineIcon],svg[ri-mark-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.243 4.511L8.505 11.25l-.707 2.121l-1.04 1.041l2.828 2.828l1.04-1.04l2.122-.708l6.737-6.737zm6.364 3.536a1 1 0 0 1 0 1.414l-7.778 7.778l-2.122.707l-1.414 1.415a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414L6.05 12.29l.707-2.122l7.779-7.778a1 1 0 0 1 1.414 0zm-6.364-.707l1.414 1.414l-4.95 4.95l-1.414-1.414zm-10.96 9.546l2.828 2.828l-1.414 1.415l-4.243-1.415z"></svg:path>`,
})
export class RiMarkPenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMarkdownLineIcon],svg[ri-markdown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2l2-2h2v7h-2v-4l-2 2l-2-2zm11-3h2l-3 3l-3-3h2v-4h2z"></svg:path>`,
})
export class RiMarkdownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMarkupLineIcon],svg[ri-markup-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 10.497l1.039-3.635a1 1 0 0 1 1.922 0L14 10.497v1.5h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447a1 1 0 0 1 .97-.757H10zm2 9.5q.362 0 .719-.032a8 8 0 0 0 2.546-.663l-1.327-5.305h-3.876l-1.327 5.305a7.95 7.95 0 0 0 3.265.695m0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiMarkupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMastercardLineIcon],svg[ri-mastercard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 18.294a7.3 7.3 0 1 1 0-12.588a7.3 7.3 0 1 1 0 12.588m1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.27 7.27 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91m-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.27 7.27 0 0 1 8.401 12c0-1.89.719-3.614 1.898-4.91m1.702 1.115a5.28 5.28 0 0 0-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.28 5.28 0 0 0 1.6-3.795a5.28 5.28 0 0 0-1.6-3.795"></svg:path>`,
})
export class RiMastercardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMastodonLineIcon],svg[ri-mastodon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.019 12.008c-.032-1.26-.012-2.448-.012-3.442c0-4.338 2.843-5.61 2.843-5.61C7.283 2.298 9.742 2.021 12.3 2h.062c2.557.02 5.018.298 6.451.956c0 0 2.843 1.272 2.843 5.61c0 0 .036 3.201-.396 5.424c-.275 1.41-2.457 2.955-4.963 3.254c-1.306.156-2.593.3-3.965.236c-2.244-.102-4.014-.535-4.014-.535q0 .328.04.62c.084.633.299 1.095.605 1.435c.766.85 2.106.93 3.395.974c1.82.063 3.44-.449 3.44-.449l.075 1.646s-1.273.684-3.54.81c-1.251.068-2.804-.032-4.613-.51c-1.532-.406-2.568-1.29-3.27-2.471c-1.093-1.843-1.368-4.406-1.431-6.992m3.3 4.937v-2.548l2.474.605q.073.018.324.07a22 22 0 0 0 3.307.41c1.019.047 1.9-.017 3.636-.224c1.663-.199 3.148-1.196 3.236-1.65c.082-.422.151-.922.206-1.482c.07-.705.114-1.47.137-2.245c.015-.51.02-.945.017-1.256v-.059c0-1.43-.369-2.438-.963-3.158a3 3 0 0 0-.584-.548c-.09-.064-.135-.089-.13-.087c-1.013-.465-3.093-.752-5.617-.773h-.046c-2.54.02-4.62.308-5.65.782c.023-.01-.021.014-.112.078a3 3 0 0 0-.584.548c-.594.72-.963 1.729-.963 3.158c0 .232 0 .397-.003.875a78 78 0 0 0 .014 2.518c.054 2.197.264 3.835.7 5.041q.318.88.78 1.45a5.7 5.7 0 0 1-.18-1.505M8.085 6.37a1.143 1.143 0 1 1 0 2.287a1.143 1.143 0 0 1 0-2.287"></svg:path>`,
})
export class RiMastodonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMedal2LineIcon],svg[ri-medal-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.5l2.116 5.088l5.493.44l-4.185 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44zm0 5.207l-.739 1.776l-1.916.154l1.46 1.251l-.447 1.871L12 17.756l1.641 1.003l-.446-1.87l1.46-1.252l-1.916-.154zM8 2v9H6V2zm10 0v9h-2V2zm-5 0v5h-2V2z"></svg:path>`,
})
export class RiMedal2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMedalLineIcon],svg[ri-medal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.5l1.322 2.68l2.958.43l-2.14 2.085l.505 2.946L12 17.25l-2.645 1.39l.505-2.945l-2.14-2.086l2.958-.43zM18 2v3l-1.363 1.138A9.9 9.9 0 0 0 13 5.049V2zm-7-.001v3.05a9.9 9.9 0 0 0-3.636 1.088L6 5V2z"></svg:path>`,
})
export class RiMedalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMedicineBottleLineIcon],svg[ri-medicine-bottle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v2h-2v3a3 3 0 0 1 3 3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3V4H5V2zm-2 7H7a1 1 0 0 0-1 1v10h12V10a1 1 0 0 0-1-1m-4 2v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v3h6z"></svg:path>`,
})
export class RiMedicineBottleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMediumLineIcon],svg[ri-medium-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.158 4h11.684C19.034 4 20 4.966 20 6.158v3.455a2.9 2.9 0 0 0-1.539 1.003c-.472.586-.758 1.377-.828 2.266q-.022.266-.017.532c.041 1.763.88 3.216 2.384 3.55v.878A2.16 2.16 0 0 1 17.842 20H6.158A2.16 2.16 0 0 1 4 17.842V6.158C4 4.966 4.966 4 6.158 4M21 6.158A3.16 3.16 0 0 0 17.842 3H6.158A3.16 3.16 0 0 0 3 6.158v11.684A3.16 3.16 0 0 0 6.158 21h11.684A3.16 3.16 0 0 0 21 17.842zm-1 4.14v1.983h-.616c.039-.867.253-1.58.616-1.983m0 2.364v2.063c-.441-.513-.699-1.25-.653-2.063zM17.697 7.3l.015-.003v-.11h-2.9l-2.69 6.326L9.43 7.187H6.306v.11l.014.003c.529.12.798.298.798.94v7.52c0 .642-.27.82-.8.94l-.013.002v.11h2.12v-.11L8.41 16.7c-.529-.12-.798-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.046.508-.312.665-.791.773l-.014.003v.109h3.692v-.11l-.015-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.269-.82.797-.94"></svg:path>`,
})
export class RiMediumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMegaphoneLineIcon],svg[ri-megaphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17s7 1 10 4h1a1 1 0 0 0 1-1v-6.063a2 2 0 0 0 0-3.874V4a1 1 0 0 0-1-1h-1C16 6 9 7 9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1l1 5h2zm2-8.339c.683-.146 1.527-.35 2.44-.617c1.678-.494 3.81-1.271 5.56-2.47v12.851c-1.75-1.198-3.883-1.975-5.56-2.469A34 34 0 0 0 11 15.34zM5 9h4v6H5z"></svg:path>`,
})
export class RiMegaphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMemoriesLineIcon],svg[ri-memories-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10a9.99 9.99 0 0 0-8 4V3.5H2v6h6v-2H5.385A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10M10.777 8.518l4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416"></svg:path>`,
})
export class RiMemoriesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenLineIcon],svg[ri-men-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.05 8.537L18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414M10.5 20a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiMenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMentalHealthLineIcon],svg[ri-mental-health-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 2a6 6 0 0 0-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664l-1.543-2.425l-.057-.442A6 6 0 0 0 11 4m-.53 3.763l.53.53l.53-.53a1.75 1.75 0 0 1 2.475 2.474L11 13.243l-3.005-3.006a1.75 1.75 0 1 1 2.475-2.474"></svg:path>`,
})
export class RiMentalHealthLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenu2LineIcon],svg[ri-menu-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"></svg:path>`,
})
export class RiMenu2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenu3LineIcon],svg[ri-menu-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z"></svg:path>`,
})
export class RiMenu3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenu4LineIcon],svg[ri-menu-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"></svg:path>`,
})
export class RiMenu4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenu5LineIcon],svg[ri-menu-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z"></svg:path>`,
})
export class RiMenu5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuAddLineIcon],svg[ri-menu-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15zm-7 3v2H3v-2zm10-7v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiMenuAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuFold2LineIcon],svg[ri-menu-fold-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.403 3.903L2.99 5.318L6.171 8.5L2.99 11.682l1.414 1.414L9 8.5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z"></svg:path>`,
})
export class RiMenuFold2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuFold3LineIcon],svg[ri-menu-fold-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM9.01 8.814L7.596 7.4L3 11.996l4.596 4.596l1.414-1.414l-3.182-3.182z"></svg:path>`,
})
export class RiMenuFold3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuFold4LineIcon],svg[ri-menu-fold-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM1.99 8.814L3.402 7.4L8 11.996l-4.597 4.596l-1.414-1.414l3.182-3.182z"></svg:path>`,
})
export class RiMenuFold4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuFoldLineIcon],svg[ri-menu-fold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM6.596 3.903L8.01 5.318L4.828 8.5l3.182 3.182l-1.414 1.414L2 8.5zM21 11v2h-9v-2zm0-7v2h-9V4z"></svg:path>`,
})
export class RiMenuFoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuLineIcon],svg[ri-menu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"></svg:path>`,
})
export class RiMenuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuSearchLineIcon],svg[ri-menu-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10 8.5a5.5 5.5 0 1 1 10.032 3.117l2.675 2.676l-1.414 1.414l-2.675-2.675A5.5 5.5 0 0 1 10 8.5M3 4h5v2H3zm0 7h5v2H3zm18 7v2H3v-2z"></svg:path>`,
})
export class RiMenuSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold2LineIcon],svg[ri-menu-unfold-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.596 3.903L15.999 8.5l4.597 4.596l1.414-1.415L18.828 8.5l3.182-3.182zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z"></svg:path>`,
})
export class RiMenuUnfold2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold3LineIcon],svg[ri-menu-unfold-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm-1.01-9.186L17.404 7.4L22 11.996l-4.596 4.596l-1.414-1.414l3.182-3.182z"></svg:path>`,
})
export class RiMenuUnfold3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold4LineIcon],svg[ri-menu-unfold-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm5.01-9.186L20.596 7.4L16 11.996l4.596 4.596l1.414-1.414l-3.182-3.182z"></svg:path>`,
})
export class RiMenuUnfold4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfoldLineIcon],svg[ri-menu-unfold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM17.404 3.903L22 8.5l-4.596 4.596l-1.414-1.415L19.172 8.5L15.99 5.318zM12 11v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiMenuUnfoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMessage2LineIcon],svg[ri-message-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM11 10h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class RiMessage2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMessage3LineIcon],svg[ri-message-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19zm-6-8h2v2h-2zm-6 0h2v2H8z"></svg:path>`,
})
export class RiMessage3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMessageLineIcon],svg[ri-message-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM8 10h8v2H8z"></svg:path>`,
})
export class RiMessageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMessengerLineIcon],svg[ri-messenger-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.765 19.225c.59-.26 1.25-.309 1.868-.139c.77.21 1.565.316 2.368.314c4.585 0 8-3.286 8-7.7s-3.415-7.7-8-7.7s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006zM12.001 2c5.634 0 10 4.127 10 9.7s-4.367 9.7-10 9.7a11 11 0 0 1-2.895-.384a.8.8 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.123-.707l-.054-1.78a.8.8 0 0 0-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174c0-5.573 4.366-9.7 10-9.7M5.996 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.395c.421-.32.971.184.689.631l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0L6.685 15.17c-.421.319-.971-.185-.689-.633"></svg:path>`,
})
export class RiMessengerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMetaLineIcon],svg[ri-meta-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.974 16.164q-.427 1.335-1.47 1.336q-1.316 0-2.587-1.58q-.883-1.096-2.477-4.168a58 58 0 0 0-1.269-2.33q.465-.732.829-1.176Q15.436 6.5 17.005 6.5q1.252 0 2.386 1.608q1.164 1.651 1.632 4.08q.46 2.391-.049 3.975m-8.97-4.734q.315.578.66 1.242q1.687 3.25 2.695 4.503q1.872 2.325 4.146 2.325q1.284 0 2.197-.81q.787-.7 1.177-1.916q.665-2.07.108-4.963q-.549-2.852-1.962-4.856Q19.294 4.5 17.005 4.5q-2.514 0-4.55 2.476q-.213.259-.45.594a10 10 0 0 0-.45-.594Q9.519 4.501 7.005 4.5q-2.289 0-4.02 2.455q-1.413 2.004-1.962 4.856q-.556 2.892.108 4.963q.39 1.216 1.177 1.915q.913.81 2.197.811q2.274 0 4.146-2.325q1.008-1.253 2.694-4.502q.345-.666.66-1.243m-1.166-2.008q-.585 1.01-1.268 2.33q-1.595 3.072-2.477 4.169Q5.82 17.5 4.505 17.5q-1.041 0-1.47-1.337q-.507-1.584-.048-3.974q.466-2.43 1.632-4.081Q5.753 6.5 7.005 6.5q1.57 0 3.005 1.746q.365.444.828 1.176"></svg:path>`,
})
export class RiMetaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMeteorLineIcon],svg[ri-meteor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-2 3.122l-7 3.224v-2.43L8.597 6.881a7 7 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13zM12 8a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class RiMeteorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMic2AiLineIcon],svg[ri-mic-2-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 19.276.931L19.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M7 6a5 5 0 0 1 7.697-4.21l-1.08 1.682A3 3 0 0 0 9 6v6a3 3 0 1 0 6 0V7h2v5a5 5 0 0 1-10 0zm-4.808 7.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.393C20.896 18.545 16.852 22 12 22s-8.896-3.455-9.808-8.038"></svg:path>`,
})
export class RiMic2AiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMic2LineIcon],svg[ri-mic-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M2.192 13.962l1.962-.393a8.003 8.003 0 0 0 15.692 0l1.962.392C20.896 18.545 16.852 22 12 22s-8.896-3.455-9.808-8.039"></svg:path>`,
})
export class RiMic2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicAiLineIcon],svg[ri-mic-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 7.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319A4.37 4.37 0 0 1 20.724.931L20.47.32a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11M12 1a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V7h-2v3a3 3 0 1 1-6 0V6a3 3 0 0 1 4.617-2.528l1.08-1.683A5 5 0 0 0 12 1"></svg:path>`,
})
export class RiMicAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicLineIcon],svg[ri-mic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3m0-2a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5M3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11"></svg:path>`,
})
export class RiMicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicOffLineIcon],svg[ri-mic-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.425 17.839l4.767 4.768l1.415-1.415l-19.8-19.799l-1.413 1.415L7 8.414V10a5 5 0 0 0 6.39 4.804l1.55 1.55A7.002 7.002 0 0 1 5.07 11H3.056A9.004 9.004 0 0 0 11 18.945V23h2v-4.055a8.9 8.9 0 0 0 3.425-1.106m-4.872-4.872a3 3 0 0 1-2.52-2.52zm7.822 2.193l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16m-2.91-2.909l-1.548-1.548Q15 10.364 15 10V6a3 3 0 0 0-5.818-1.032L7.686 3.471A5 5 0 0 1 17 6v4c0 .81-.192 1.575-.534 2.251"></svg:path>`,
})
export class RiMicOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMickeyLineIcon],svg[ri-mickey-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.617 10.913A4.501 4.501 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6c.693 0 1.365.088 2.007.254a4.5 4.5 0 1 1 5.376 4.66a8 8 0 1 1-14.766 0M3 6.5a2.5 2.5 0 0 0 2.766 2.486a8 8 0 0 1 2.158-1.871Q7.999 6.819 8 6.5a2.5 2.5 0 0 0-5 0m15.234 2.486q.13.014.266.014a2.5 2.5 0 1 0-2.424-1.885a8 8 0 0 1 2.158 1.871M6 14a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path>`,
})
export class RiMickeyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicroscopeLineIcon],svg[ri-microscope-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.196 2.268l3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75l1.001 1.732l-1.732 1l-1-1.733l-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5 5 0 0 0-3.222 6.56A4.97 4.97 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439l1 1.733l-7.878 4.548a5 5 0 0 1 .01 2.05L21 20v2l-17 .001A4.98 4.98 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7.003 7.003 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732M8 16a3 3 0 0 0-2.83 4h5.66A3 3 0 0 0 8 16m3.464-12.732l-2.598 1.5l2.75 4.763l2.598-1.5z"></svg:path>`,
})
export class RiMicroscopeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicrosoftLineIcon],svg[ri-microsoft-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.001 5h-6v6h6zm2 0v6h6V5zm6 8h-6v6h6zm-8 6v-6h-6v6zm-8-16h18v18h-18z"></svg:path>`,
})
export class RiMicrosoftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMicrosoftLoopLineIcon],svg[ri-microsoft-loop-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 1 0 16H7.69a6.5 6.5 0 0 0 1.734-3.5H12A4.5 4.5 0 1 0 7.5 12v3.5A4.5 4.5 0 0 1 4 19.889V12a8 8 0 0 1 8-8m0 18c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12v10zm-2.5-7.5V12a2.5 2.5 0 1 1 2.5 2.5z"></svg:path>`,
})
export class RiMicrosoftLoopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMiniProgramLineIcon],svg[ri-mini-program-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-6a3.5 3.5 0 1 1-4.977-3.174a1 1 0 1 1 .845 1.813A1.5 1.5 0 1 0 11 14v-4a3.5 3.5 0 1 1 4.977 3.174a1 1 0 0 1-.845-1.813A1.5 1.5 0 1 0 13.001 10z"></svg:path>`,
})
export class RiMiniProgramLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMistLineIcon],svg[ri-mist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v2H4zm12 15h4v2h-4zM2 9h5v2H2zm7 0h3v2H9zm5 0h6v2h-6zM4 14h6v2H4zm8 0h3v2h-3zm5 0h5v2h-5zM10 4h12v2H10zM2 19h12v2H2z"></svg:path>`,
})
export class RiMistLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMixtralLineIcon],svg[ri-mixtral-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h5.2v3.2h3.2v3.2h1.2V6.2h3.2V3H21v18h-5.2v-6.4h-1.2v3.2H9.4v-3.2H8.2V21H3zm2 2v14h1.2v-6.4h5.2v3.2h1.2v-3.2h5.2V19H19V5h-1.2v3.2h-3.2v3.2H9.4V8.2H6.2V5z"></svg:path>`,
})
export class RiMixtralLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMobileDownloadLineIcon],svg[ri-mobile-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v16h10v-8h2v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7v2zm12 2h3l-4 4l-4-4h3V2h2zm-6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class RiMobileDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyCnyBoxLineIcon],svg[ri-money-cny-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm9 8h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 7.88l1.415-1.414l2.12 2.122l2.122-2.122L15.54 7.88l-2.12 2.122h2.585v2h-3z"></svg:path>`,
})
export class RiMoneyCnyBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyCnyCircleLineIcon],svg[ri-money-cny-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-7h3v2h-3v2h-2v-2h-3v-2h3v-1h-3v-2h2.586L8.469 7.88l1.415-1.414l2.12 2.122l2.122-2.122L15.54 7.88l-2.12 2.122h2.585v2h-3z"></svg:path>`,
})
export class RiMoneyCnyCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyDollarBoxLineIcon],svg[ri-money-dollar-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm4.5 9h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5z"></svg:path>`,
})
export class RiMoneyDollarBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyDollarCircleLineIcon],svg[ri-money-dollar-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3.5-6h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5z"></svg:path>`,
})
export class RiMoneyDollarCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyEuroBoxLineIcon],svg[ri-money-euro-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm6.05 6h4.95v2h-4.95a2.5 2.5 0 0 0 4.064 1.409l1.7 1.134a4.5 4.5 0 0 1-7.787-2.543H7.005v-2h1.027A4.5 4.5 0 0 1 15.82 8.46l-1.701 1.134a2.5 2.5 0 0 0-4.064 1.41"></svg:path>`,
})
export class RiMoneyEuroBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyEuroCircleLineIcon],svg[ri-money-euro-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1.95-9h4.95v2h-4.95a2.5 2.5 0 0 0 4.064 1.409l1.7 1.134a4.5 4.5 0 0 1-7.787-2.543H7.005v-2h1.027A4.5 4.5 0 0 1 15.82 8.46l-1.701 1.134a2.5 2.5 0 0 0-4.064 1.41"></svg:path>`,
})
export class RiMoneyEuroCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyPoundBoxLineIcon],svg[ri-money-pound-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm5 8h-1v-2h1v-1A3.5 3.5 0 0 1 15.75 8.69l-1.987.497a1.499 1.499 0 0 0-2.76.815v1h3v2h-3v2h5v2h-8v-2h1z"></svg:path>`,
})
export class RiMoneyPoundBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyPoundCircleLineIcon],svg[ri-money-pound-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-3-7h-1v-2h1v-1A3.5 3.5 0 0 1 15.75 8.69l-1.987.497a1.499 1.499 0 0 0-2.76.815v1h3v2h-3v2h5v2h-8v-2h1z"></svg:path>`,
})
export class RiMoneyPoundCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoneyRupeeCircleLineIcon],svg[ri-money-rupee-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-16 0a8 8 0 0 0 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.5-4c.328.436.563.946.675 1.5H16V11h-1.825a3.75 3.75 0 0 1-3.675 3h-.19l3.72 3.72l-1.06 1.06L8 13.81V12.5h2.5a2.25 2.25 0 0 0 2.122-1.5H8V9.5h4.622A2.25 2.25 0 0 0 10.5 8H8V6.5h8V8z"></svg:path>`,
})
export class RiMoneyRupeeCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoonClearLineIcon],svg[ri-moon-clear-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22C6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.96 7.96 0 0 0 10 6m-6 6a8 8 0 0 0 8 8a8 8 0 0 0 6.957-4.045Q18.482 16 18 16C12.477 16 8 11.523 8 6q0-.481.045-.957A8 8 0 0 0 4 12m14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455m5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455"></svg:path>`,
})
export class RiMoonClearLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoonCloudyLineIcon],svg[ri-moon-cloudy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.67 5.007a7 7 0 0 1 7.55-3.901a4.5 4.5 0 0 0 5.674 5.674a7.04 7.04 0 0 1-.759 4.593A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993m2.177.207a8.02 8.02 0 0 1 5.61 4.885a5.53 5.53 0 0 1 2.96.245a5 5 0 0 0 .488-1.37a6.5 6.5 0 0 1-5.878-5.88a5 5 0 0 0-3.18 2.12M17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6z"></svg:path>`,
})
export class RiMoonCloudyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoonFoggyLineIcon],svg[ri-moon-foggy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20.335v-2.2a7.52 7.52 0 0 0 3.623-4.281a9 9 0 0 1-10.622-8.99A7.52 7.52 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963a7 7 0 0 0 10.316 8.728q.027.364.028.735c0 4.01-2.485 7.44-6 8.834M7 20h7v2H7zm-3-8h6v2H4zm-2 4h10v2H2z"></svg:path>`,
})
export class RiMoonFoggyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoonLineIcon],svg[ri-moon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A8 8 0 0 0 4 12"></svg:path>`,
})
export class RiMoonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMore2LineIcon],svg[ri-more-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"></svg:path>`,
})
export class RiMore2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMoreLineIcon],svg[ri-more-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5m15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5m-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"></svg:path>`,
})
export class RiMoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMotorbikeLineIcon],svg[ri-motorbike-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.256V12H2v-2h6.365L11.2 8h3.492L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87l-.002-.001l.002.005l-2.925 1.065q.035.276.035.561a4.5 4.5 0 1 1-6-4.244m2-.229a4.5 4.5 0 0 1 3.281 2.033l1.957-.713L12.403 10h-.547L9 12H6zM5.5 20a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class RiMotorbikeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMouseLineIcon],svg[ri-mouse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.45 3.45 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128q.504.944 1.448 1.448c.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.45 3.45 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.45 3.45 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4zm0-2h1.718c2.014 0 3.094.278 4.071.801A5.45 5.45 0 0 1 19.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071a5.45 5.45 0 0 1-2.27 2.269c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801A5.45 5.45 0 0 1 4.8 18.931c-.522-.977-.8-2.057-.8-4.071V9.14c0-2.014.278-3.094.801-4.072A5.45 5.45 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2M11 6h2v5h-2z"></svg:path>`,
})
export class RiMouseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMovie2AiLineIcon],svg[ri-movie-2-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10h8v-2h-1.999a10 10 0 0 0 2-2A9.96 9.96 0 0 0 22 12q0-.604-.07-1.19l-1.986.235q.056.47.056.955a7.98 7.98 0 0 1-2.708 6A8 8 0 1 1 14 4.252l.498-1.937C13.698 2.109 12.861 2 12 2m-2 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-4 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path>`,
})
export class RiMovie2AiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMovie2LineIcon],svg[ri-movie-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2 6h-2.708A8 8 0 1 0 12 20m0-10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4m8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiMovie2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMovieAiLineIcon],svg[ri-movie-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2.992 3H14v2H4v14h16v-8h2v9.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3m7.63 5.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiMovieAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMovieLineIcon],svg[ri-movie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm6.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiMovieLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMultiImageLineIcon],svg[ri-multi-image-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 4H8V5h12v10h-2V8a1 1 0 0 0-1-1m-1 2v6.74l-4.509-4.1L4 18.632V9zm-4.491 5.36L16 18.442V19H6.537zM7 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiMultiImageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMusic2LineIcon],svg[ri-music-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v14a4 4 0 1 1-2-3.465V5H9v12a4 4 0 1 1-2-3.465V3zM5 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiMusic2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMusicAiLineIcon],svg[ri-music-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M7 3h5v2H9v12a4 4 0 1 1-2-3.465zm11 10.535V11h2v6a4 4 0 1 1-2-3.465M5 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiMusicAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMusicLineIcon],svg[ri-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465M10 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMvAiLineIcon],svg[ri-mv-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M2 4a1 1 0 0 1 1-1h11v2H4v14h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 8.17V6h4v2h-2v7a3 3 0 1 1-2-2.83"></svg:path>`,
})
export class RiMvAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riMvLineIcon],svg[ri-mv-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm8 7.17V6h5v2h-3v7a3 3 0 1 1-2-2.83"></svg:path>`,
})
export class RiMvLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNavigationLineIcon],svg[ri-navigation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.965 5.096l3.546 12.41l3.04-6.08l5.637-2.255zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.261 2.91a.5.5 0 0 1 .638-.611"></svg:path>`,
})
export class RiNavigationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNeteaseCloudMusicLineIcon],svg[ri-netease-cloud-music-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394m5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.424c-.533 3.433 1.656 6.776 5 7.72c2.723.77 5.658-.166 7.308-2.33c1.586-2.08 1.4-5.099-.427-6.873A4 4 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062"></svg:path>`,
})
export class RiNeteaseCloudMusicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNetflixLineIcon],svg[ri-netflix-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.985 17.208L16.001 2h2v20a7.6 7.6 0 0 0-2.02-.5L8 6.302V21.5a7.3 7.3 0 0 0-2 .5V2h2z"></svg:path>`,
})
export class RiNetflixLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNewsLineIcon],svg[ri-news-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h6v6H6zm2 2v2h2V9zm6 0h4V7h-4zm4 4h-4v-2h4zM6 15v2h12v-2z"></svg:path>`,
})
export class RiNewsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNewspaperLineIcon],svg[ri-newspaper-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20V4H4v15a1 1 0 0 0 1 1zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3m-1-10v7a1 1 0 1 0 2 0v-7zM6 6h6v6H6zm2 2v2h2V8zm-2 5h8v2H6zm0 3h8v2H6z"></svg:path>`,
})
export class RiNewspaperLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNextjsLineIcon],svg[ri-nextjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z"></svg:path>`,
})
export class RiNextjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNftLineIcon],svg[ri-nft-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12.5-5.5L12 1L2.5 6.5v11L12 23l9.5-5.5zM12 3.311l7.5 4.342v6.88l-4.562-2.736l-7.971 5.978L4.5 16.347V7.653zm0 17.378l-3.152-1.825l6.214-4.66l3.998 2.398z"></svg:path>`,
})
export class RiNftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNoCreditCardLineIcon],svg[ri-no-credit-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.586 21l1.607 1.607l1.414-1.415l-19.8-19.799l-1.413 1.415l.726.726A1 1 0 0 0 2.005 4v16a1 1 0 0 0 1 1zm-2-2H4.005v-7h6.58zm-11-11H4.005V5.419zm15.419-4v13.762l-2-2V12h-3.762l-4-4h7.762V5H9.243l-2-2h13.762a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiNoCreditCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNodejsLineIcon],svg[ri-nodejs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.887 1.362a1.75 1.75 0 0 0-1.774 0L3.363 5.92A1.75 1.75 0 0 0 2.5 7.429v9.142c0 .62.328 1.194.863 1.508l2.623 1.543C7.319 20.408 9 19.446 9 17.9V7.747H7v10.152l-2.5-1.471V7.572L12 3.16l7.5 4.412v8.856L12 20.84l-1.768-1.04l-1.014 1.723l1.895 1.115a1.75 1.75 0 0 0 1.774 0l7.75-4.559a1.75 1.75 0 0 0 .863-1.508V7.429a1.75 1.75 0 0 0-.863-1.508zM14 7.5c-1.363 0-2.329.351-2.95.97a2.5 2.5 0 0 0-.737 1.761c0 .555.157 1.058.482 1.474c.313.4.725.649 1.12.81c.72.297 1.62.394 2.344.471l.087.01c.831.09 1.454.167 1.88.345c.193.08.272.154.305.197c.021.028.062.09.062.26c0 .264-.09.434-.373.595c-.347.197-.96.347-1.883.347c-.915 0-1.553-.17-1.918-.422c-.283-.196-.492-.497-.437-1.15l-1.993-.167c-.108 1.289.359 2.316 1.292 2.962c.851.59 1.97.777 3.056.777c1.077 0 2.092-.165 2.873-.61c.846-.48 1.383-1.282 1.383-2.332c0-.557-.155-1.061-.477-1.48c-.31-.404-.722-.656-1.118-.822c-.728-.305-1.64-.403-2.368-.481l-.07-.008c-.833-.09-1.456-.165-1.885-.341c-.194-.08-.273-.152-.303-.192c-.02-.024-.059-.08-.059-.243c0-.077.023-.219.15-.345c.122-.122.499-.386 1.537-.386c.99 0 1.567.105 1.897.3c.215.128.448.363.48 1.133l1.998-.08c-.05-1.246-.506-2.208-1.458-2.772C16.08 7.583 15.01 7.5 14 7.5"></svg:path>`,
})
export class RiNodejsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotification2LineIcon],svg[ri-notification-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031zm4.5 3h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotification2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotification3LineIcon],svg[ri-notification-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0zm-2 0v-7a6 6 0 0 0-12 0v7zm-9 4h6v2H9z"></svg:path>`,
})
export class RiNotification3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotification4LineIcon],svg[ri-notification-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a6 6 0 0 0-12 0v8h12zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0zM9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotification4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotificationBadgeLineIcon],svg[ri-notification-badge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.341 4A6 6 0 0 0 13 6H5v14h14v-8a6 6 0 0 0 2-.341V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM19 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiNotificationBadgeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotificationLineIcon],svg[ri-notification-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2M9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotificationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotificationOffLineIcon],svg[ri-notification-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415l19.799 19.8l-1.415 1.414zM6.408 7.822A6 6 0 0 0 6 10v8h10.586zM20 15.786l-2-2V10a6 6 0 0 0-8.99-5.203L7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotificationOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotificationSnoozeLineIcon],svg[ri-notification-snooze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-4-7v7H6v-7a6 6 0 1 1 12 0m-3 13v-2H9v2zM9 9h3.586L9 12.586V15h6v-2h-3.586L15 9.414V7H9z"></svg:path>`,
})
export class RiNotificationSnoozeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNotionLineIcon],svg[ri-notion-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.285 2.955a1.9 1.9 0 0 0-1.211-.31l-11.06.961a.99.99 0 0 0-.903.986v11.575c0 .408.133.806.378 1.133l2.767 3.69a.99.99 0 0 0 .867.392l12.853-.989a.99.99 0 0 0 .913-.986V6.527a.94.94 0 0 0-.418-.781zm-1.057 1.46a.1.1 0 0 1 .071.02l2.746 1.83l-10.207.816l-1.86-1.86zm3.883 14.262l-10.722.825V8.82l10.722-.858zM4.89 6.646l1.722 1.722V18.5l-1.7-2.267a.1.1 0 0 1-.022-.066zm7.09 3.477l-1.977.13v7.562l1.996-.13v-4.337l3.512 4.169l1.976-.13V9.825l-1.996.13v4.337z"></svg:path>`,
})
export class RiNotionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNpmjsLineIcon],svg[ri-npmjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-14v14h14zm-2 2v10h-2.5V9.5h-2.5V17h-5V7z"></svg:path>`,
})
export class RiNpmjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNumbersLineIcon],svg[ri-numbers-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18H4v-8h5zm-2-2v-4H6v4zm6 0V8h-1v8zm2 2h-5V6h5zm4-2V4h-1v12zm2 2h-5V2h5zm1 4H3v-2h19z"></svg:path>`,
})
export class RiNumbersLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riNurseLineIcon],svg[ri-nurse-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a8 8 0 0 1 7.939 7H4.063A8 8 0 0 1 12 15m-1.812 2.28A6.02 6.02 0 0 0 6.802 20h5.199zm3.626 0L12.001 20h5.198a6.02 6.02 0 0 0-3.385-2.72M18.001 2v6A6 6 0 0 1 6 8V2zM8 8a4 4 0 0 0 8 0zm8-4H8v2h8z"></svg:path>`,
})
export class RiNurseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOctagonLineIcon],svg[ri-octagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.936 2.501l5.565 5.565v7.87l-5.565 5.565h-7.87l-5.565-5.565v-7.87l5.565-5.565zm-.828 2H8.894L4.501 8.894v6.214L8.894 19.5h6.214l4.393-4.393V8.894z"></svg:path>`,
})
export class RiOctagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOilLineIcon],svg[ri-oil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.07 7L6 11.606V20h12V7zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1M8 12h2v6H8z"></svg:path>`,
})
export class RiOilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOpenArmLineIcon],svg[ri-open-arm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v5h-2v-5a11 11 0 0 1 6.448-10.016l.827 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .726 8.805l.827-1.821A11 11 0 0 1 8 17m4-5a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiOpenArmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOpenSourceLineIcon],svg[ri-open-source-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10c0 4.4-2.841 8.136-6.789 9.473l-.226.074l-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549l-.225-.074C4.842 20.136 2 16.4 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0l1.479 3.85A8 8 0 0 0 12 4"></svg:path>`,
})
export class RiOpenSourceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOpenaiLineIcon],svg[ri-openai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4c.649 0 1.25.206 1.741.556c-1.292.673-2.48 1.52-3.741 2.248l1 1.732c1.575-.91 3.052-2.05 4.76-2.706a3 3 0 0 1 4.057 3.09C17.588 8.137 16.26 7.531 15 6.804l-1 1.732c1.575.91 3.302 1.618 4.723 2.77a3 3 0 0 1-.648 5.058C18.14 14.908 18 13.455 18 12h-2c0 1.818.25 3.669-.037 5.476a3 3 0 0 1-4.705 1.967c1.293-.673 2.482-1.52 3.742-2.247l-1-1.732c-1.575.91-3.052 2.05-4.76 2.706a3 3 0 0 1-4.057-3.09c1.23.782 2.557 1.388 3.817 2.116l1-1.732c-1.575-.91-3.302-1.618-4.724-2.77a3 3 0 0 1 .649-5.058C5.86 9.092 6 10.545 6 12h2c0-1.818-.25-3.669.037-5.476A3 3 0 0 1 11 4m3.793-.258a5.001 5.001 0 0 0-8.548 1.71a5.001 5.001 0 0 0-2.793 8.258a5.001 5.001 0 0 0 5.756 6.548a5.001 5.001 0 0 0 8.548-1.71a5.001 5.001 0 0 0 2.793-8.258a5.001 5.001 0 0 0-5.756-6.548"></svg:path>`,
})
export class RiOpenaiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOpenbaseLineIcon],svg[ri-openbase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 5.996l1 9.464l9 7.04l9-7.04l1-9.464zm7.837 4.436L12 19.96L4.163 7.436L12 5.088z"></svg:path>`,
})
export class RiOpenbaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOperaLineIcon],svg[ri-opera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.767 19.51a8.003 8.003 0 0 0 0-15.02C16.712 5.977 18 8.935 18 12s-1.289 6.024-3.235 7.51M9.235 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6.001 15.065 6.001 12S7.29 5.976 9.235 4.49M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5s-4 3.033-4 6.5s2 6.5 4 6.5"></svg:path>`,
})
export class RiOperaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOrderPlayLineIcon],svg[ri-order-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4zM2 18h20v2H2zm0-7h20v2H2z"></svg:path>`,
})
export class RiOrderPlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOutlet2LineIcon],svg[ri-outlet-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M11 7h2v4h-2zm3 5h2v4h-2zm-6 0h2v4H8z"></svg:path>`,
})
export class RiOutlet2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riOutletLineIcon],svg[ri-outlet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m2-10h2v4h-2zm-6 0h2v4H8z"></svg:path>`,
})
export class RiOutletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riP2pLineIcon],svg[ri-p2p-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zm-9-8a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m7-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2M5 21a2 2 0 1 1 4 0h2a4 4 0 0 0-8 0z"></svg:path>`,
})
export class RiP2pLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPagesLineIcon],svg[ri-pages-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z"></svg:path>`,
})
export class RiPagesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintBrushLineIcon],svg[ri-paint-brush-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.997v3h14v-3zm-1-2h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2zm11.732 1.732L19.5 11.96l1.768 1.768a2.5 2.5 0 1 1-3.536 0"></svg:path>`,
})
export class RiPaintBrushLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaintLineIcon],svg[ri-paint-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.228 18.732l1.767-1.767l1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778l-2.122-2.121zM11 6.03L3.929 13.1l7.07 7.072l7.072-7.071z"></svg:path>`,
})
export class RiPaintLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaletteLineIcon],svg[ri-palette-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.522 0 10 3.978 10 8.889a5.56 5.56 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667c0 .422.167.811.422 1.1c.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22C6.478 22 2 17.522 2 12S6.478 2 12 2m-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.56 3.56 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972a3.65 3.65 0 0 1-.513-1.86M7.5 12a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M12 9a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiPaletteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPantoneLineIcon],svg[ri-pantone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.765 8l-.296-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.302.552l5.619 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302zM8 19h2.209L8 13.533zm-2-6.244l-1.673 4.141L6 17.608zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053zm2.979 2.033a1 1 0 1 1-.75-1.855a1 1 0 0 1 .75 1.855"></svg:path>`,
})
export class RiPantoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParentLineIcon],svg[ri-parent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m2.5 6v-.5a2.5 2.5 0 0 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5zm-10 0v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4z"></svg:path>`,
})
export class RiParentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParenthesesLineIcon],svg[ri-parentheses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.923 21C5.113 18.664 4 15.493 4 12s1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9s-1.112 6.664-2.923 9"></svg:path>`,
})
export class RiParenthesesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingBoxLineIcon],svg[ri-parking-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm4 2h3.5a3.5 3.5 0 1 1 0 7H11v3H9zm2 2v3h1.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class RiParkingBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riParkingLineIcon],svg[ri-parking-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h7a6 6 0 0 1 0 12H8v6H6zm2 2v8h5a4 4 0 0 0 0-8z"></svg:path>`,
})
export class RiParkingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassExpiredLineIcon],svg[ri-pass-expired-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16m9.79-7.207L16 10.586l-1.793-1.793l-1.414 1.414L14.586 12l-1.793 1.793l1.414 1.414L16 13.414l1.793 1.793l1.414-1.414L17.414 12l1.793-1.793z"></svg:path>`,
})
export class RiPassExpiredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassPendingLineIcon],svg[ri-pass-pending-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16M13 9v6h2V9zm4 0v6h2V9z"></svg:path>`,
})
export class RiPassPendingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassValidLineIcon],svg[ri-pass-valid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16m8.205-1.293l4-4l-1.414-1.414l-3.293 3.293l-1.793-1.793l-1.414 1.414l2.5 2.5l.707.707z"></svg:path>`,
})
export class RiPassValidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPassportLineIcon],svg[ri-passport-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-1 2H5v16h14zm-3 12v2H8v-2zM12 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPassportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPatreonLineIcon],svg[ri-patreon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.001 17a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m0-2a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-13-13h5v20h-5zm2 2v16h1V4z"></svg:path>`,
})
export class RiPatreonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseCircleLineIcon],svg[ri-pause-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 9h2v6H9zm4 0h2v6h-2z"></svg:path>`,
})
export class RiPauseCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseLargeLineIcon],svg[ri-pause-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h2v18H6zm10 0h2v18h-2z"></svg:path>`,
})
export class RiPauseLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseLineIcon],svg[ri-pause-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h2v14H6zm10 0h2v14h-2z"></svg:path>`,
})
export class RiPauseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPauseMiniLineIcon],svg[ri-pause-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z"></svg:path>`,
})
export class RiPauseMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPaypalLineIcon],svg[ri-paypal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.496 20.667h1.551l.538-3.376a2.805 2.805 0 0 1 2.77-2.366h.5c2.677 0 4.06-.983 4.55-3.503c.208-1.066.117-1.73-.171-2.102c-1.207 3.054-3.79 4.16-6.962 4.16h-.884c-.384 0-.793.209-.852.58zm-4.944-.294a.55.55 0 0 1-.544-.637l2.674-16.96A.92.92 0 0 1 6.59 2h6.424c2.213 0 3.942.467 4.9 1.558c.869.99 1.122 2.084.87 3.692q.542.285.916.706c.819.933.979 2.26.669 3.85c-.741 3.805-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.795.679l-.702 4.383a.804.804 0 0 1-.794.679H6.72a.483.483 0 0 1-.477-.558l.274-1.736zm6.836-8.894h.885c3.189 0 4.894-1.212 5.482-4.229q.03-.15.054-.309c.166-1.06.05-1.553-.399-2.063c-.465-.53-1.603-.878-3.396-.878h-5.5L5.247 18.373h1.561l.73-4.628l.008.001a2.915 2.915 0 0 1 2.842-2.267"></svg:path>`,
})
export class RiPaypalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPenNibLineIcon],svg[ri-pen-nib-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.596 1.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23l-5.656-5.657l.212-1.485a.5.5 0 0 1 .848-.282M4.595 20.147c3.722-3.33 7.995-4.327 12.643-5.52l.446-4.017l-4.297-4.298l-4.018.447c-1.192 4.648-2.189 8.92-5.52 12.643l-1.395-1.395c2.829-3.3 3.89-6.953 5.303-13.081l6.364-.708l5.657 5.657l-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304zm5.284-6.029a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.828"></svg:path>`,
})
export class RiPenNibLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilLineIcon],svg[ri-pencil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.728 9.576l-1.414-1.414L5 17.476v1.414h1.414zm1.414-1.414l1.414-1.414l-1.414-1.414l-1.414 1.414zm-9.9 12.728H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414z"></svg:path>`,
})
export class RiPencilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRuler2LineIcon],svg[ri-pencil-ruler-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.05 14.121l-2.12 2.122l2.828 2.828L19.071 7.757L16.243 4.93L14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415l-1.414 1.415l1.414 1.414l-1.414 1.414l-1.414-1.414l-1.414 1.414l1.414 1.414l-1.414 1.415zm9.9-11.313l4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0m-2.83 15.555l1.415-1.414l2.242 2.243h1.414v-1.414l-2.242-2.243l1.414-1.414L21 16.756V21h-4.242zM5.636 9.878L2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0l2.83 2.828L8.464 7.05l-2.12-2.122l-1.415 1.415l2.121 2.12z"></svg:path>`,
})
export class RiPencilRuler2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPencilRulerLineIcon],svg[ri-pencil-ruler-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8v12h4V8zM3 7l4-5l4 5v15H3zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiPencilRulerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPentagonLineIcon],svg[ri-pentagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.03l8.53 6.198l-3.258 10.028H6.729L3.47 9.228zm10.747 5.478L12 .7L1.253 8.508l4.105 12.634h13.284z"></svg:path>`,
})
export class RiPentagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPercentLineIcon],svg[ri-percent-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.505 21.003a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-11-9a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m12.571-4.486l1.414 1.415L4.934 20.488L3.52 19.074z"></svg:path>`,
})
export class RiPercentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPerplexityLineIcon],svg[ri-perplexity-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.173 3.26L5.5 1.74V7.5H3V17h2.5v5.26l1.673-1.52L11 17.26V22h2v-4.74l3.827 3.48l1.673 1.52V17H21V7.5h-2.5V1.74l-1.673 1.52L13 6.74V2h-2v4.74zM16.5 7.5h-1.363L16.5 6.26zm-7.637 0H7.5V6.26zm1.1 2l-4.136 3.76l-.327.298V15H5V9.5zm4.074 0H19V15h-.5v-1.442l-.327-.298zM7.5 14.442l3.5-3.181v3.297L7.5 17.74zm5.5-3.181l3.5 3.181v3.297L13 14.558z"></svg:path>`,
})
export class RiPerplexityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneCameraLineIcon],svg[ri-phone-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.803 4a6 6 0 0 0-.72 2H3v12h18v-5.083a6 6 0 0 0 2-.72V19a.996.996 0 0 1-1.003 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1zM20 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m-2 2h2v3h-2z"></svg:path>`,
})
export class RiPhoneCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneFindLineIcon],svg[ri-phone-find-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v8h-2V4H7v16h4v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21l-1.413 1.415l-2.212-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiPhoneFindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneLineIcon],svg[ri-phone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.366 10.682a10.56 10.56 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.4 11.4 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995Q19.307 21 18.5 21C9.94 21 3 14.06 3 5.5q0-.807.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.4 11.4 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.4 13.4 0 0 1 7.647 5H5.01Q5 5.25 5 5.5C5 12.956 11.044 19 18.5 19q.25 0 .5-.01v-2.637a13.4 13.4 0 0 1-3.668-1.097l-1.357 1.9a12.5 12.5 0 0 1-1.588-.75l-.058-.033a12.56 12.56 0 0 1-4.702-4.702l-.033-.058a12.4 12.4 0 0 1-.75-1.588"></svg:path>`,
})
export class RiPhoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhoneLockLineIcon],svg[ri-phone-lock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v2h4zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPhoneLockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPhpLineIcon],svg[ri-php-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.15 5.55l-1.717 8.834h2l.858-4.417h1.5c.553 0 .915.44.81.982l-.668 3.435h2l.668-3.435c.316-1.627-.771-2.945-2.428-2.945h-1.5l.477-2.454zM2.173 8.004h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.075 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227c.131-.678-.321-1.227-1.012-1.227h-1.75zm13.859-4.417h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.076 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227c.131-.678-.321-1.227-1.012-1.227h-1.75z"></svg:path>`,
})
export class RiPhpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPicture2LineIcon],svg[ri-picture-in-picture-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043l-2.25-2.25z"></svg:path>`,
})
export class RiPictureInPicture2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureExitLineIcon],svg[ri-picture-in-picture-exit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6zm-8.5-8L9.457 9.043l2.25 2.25l-1.414 1.414l-2.25-2.25L6 12.5V7z"></svg:path>`,
})
export class RiPictureInPictureExitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPictureInPictureLineIcon],svg[ri-picture-in-picture-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6z"></svg:path>`,
})
export class RiPictureInPictureLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChart2LineIcon],svg[ri-pie-chart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .5C18.351.5 23.5 5.649 23.5 12q0 .505-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95V.542Q11.495.5 12 .5m-1 3.562A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7H11zm2-1.51V11h8.448A9.5 9.5 0 0 0 13 2.552"></svg:path>`,
})
export class RiPieChart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartBoxLineIcon],svg[ri-pie-chart-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm12.9 8A5.002 5.002 0 0 1 7 12a5 5 0 0 1 4-4.9V13zm0-2H13V7.1a5.01 5.01 0 0 1 3.9 3.9"></svg:path>`,
})
export class RiPieChartBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPieChartLineIcon],svg[ri-pie-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.458v2.124A8.003 8.003 0 0 0 12 20a8 8 0 0 0 7.419-5h2.123c-1.274 4.057-5.064 7-9.542 7c-5.523 0-10-4.477-10-10c0-4.478 2.943-8.268 7-9.542M12 2c5.523 0 10 4.477 10 10q0 .507-.05 1H11V2.05Q11.493 2 12 2m1 2.062V11h6.938A8.004 8.004 0 0 0 13 4.062"></svg:path>`,
})
export class RiPieChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinDistanceLineIcon],svg[ri-pin-distance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45zM7.5 14.278L3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 12.45l2.475-2.475a3.5 3.5 0 1 0-4.95 0zm3.89-1.06l-3.89 3.888l-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiPinDistanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPingPongLineIcon],svg[ri-ping-pong-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a9.5 9.5 0 0 1 9.5 9.5c0 1.53-.361 2.974-1.003 4.254l2.463 2.464a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.415 0l-2.463-2.463A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19m5.303 13.388l-1.414 1.414l3.536 3.535l1.414-1.414zm1.864-6.105l-9.384 9.384A7.5 7.5 0 0 0 11.5 19a7.5 7.5 0 0 0 2.74-.516l-.972-.974a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0l.974.972A7.5 7.5 0 0 0 19 11.5c0-.772-.117-1.516-.333-2.217M11.5 4a7.5 7.5 0 0 0-4.136 13.757L17.757 7.364A7.5 7.5 0 0 0 11.5 4"></svg:path>`,
})
export class RiPingPongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPinterestLineIcon],svg[ri-pinterest-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.492 19.191q.035-.505.143-1.001c.063-.295.254-1.13.534-2.34l.007-.03l.387-1.668c.079-.34.14-.604.181-.692a3.5 3.5 0 0 1-.284-1.423c0-1.337.756-2.373 1.736-2.373c.36-.006.704.15.942.426s.348.643.302.996c0 .453-.085.798-.453 2.035a28 28 0 0 0-.165.571a11 11 0 0 0-.133.522c-.096.386-.008.797.237 1.105a1.2 1.2 0 0 0 1.006.457c1.492 0 2.6-1.985 2.6-4.548c0-1.97-1.29-3.274-3.432-3.274A3.88 3.88 0 0 0 9.201 9.1a4.13 4.13 0 0 0-1.195 2.961a2.55 2.55 0 0 0 .512 1.644c.181.14.25.383.175.59c-.041.168-.14.552-.177.68a.41.41 0 0 1-.215.297a.39.39 0 0 1-.355.002c-1.16-.479-1.796-1.778-1.796-3.44c0-2.985 2.491-5.584 6.192-5.584c3.135 0 5.481 2.329 5.481 5.14c0 3.532-1.932 6.104-4.69 6.104a2.5 2.5 0 0 1-2.046-.959l-.043.177l-.207.852l-.002.008c-.146.6-.248 1.017-.288 1.173q-.16.534-.4 1.04a8 8 0 1 0-1.655-.593M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiPinterestLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixLineIcon],svg[ri-pix-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.473 1.745l7.778 7.778a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0l-7.778-7.778a3.5 3.5 0 0 1 0-4.95l7.778-7.778a3.5 3.5 0 0 1 4.95 0m-2.475 13.082l-2.475 2.475c-.38.38-.825.653-1.299.822l2.713 2.713a1.5 1.5 0 0 0 2.122 0l2.713-2.713a3.5 3.5 0 0 1-1.3-.822zm-6.01-6.719l-2.829 2.83a1.5 1.5 0 0 0 0 2.12l2.829 2.83a1.5 1.5 0 0 0 2.12 0l2.476-2.476a2 2 0 0 1 2.828 0l2.475 2.475a1.5 1.5 0 0 0 2.121 0l2.829-2.828a1.5 1.5 0 0 0 0-2.121l-2.829-2.829a1.5 1.5 0 0 0-2.121 0l-2.475 2.475a2 2 0 0 1-2.828 0L8.109 8.109a1.5 1.5 0 0 0-2.12 0m4.95-4.949L8.223 5.872c.474.17.92.443 1.299.823l2.475 2.475l2.475-2.475c.38-.38.824-.654 1.299-.823L13.059 3.16a1.5 1.5 0 0 0-2.122 0"></svg:path>`,
})
export class RiPixLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPixelfedLineIcon],svg[ri-pixelfed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m1.031 4.099c1.713 0 3.101 1.345 3.101 3.005s-1.388 3.005-3.1 3.005h-1.819L8.62 16.58V9.832c0-.957.801-1.733 1.79-1.733z"></svg:path>`,
})
export class RiPixelfedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlaneLineIcon],svg[ri-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0z"></svg:path>`,
})
export class RiPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlanetLineIcon],svg[ri-planet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.918 8.037A9 9 0 0 0 15.966 20.08c.873.373 1.719.618 2.49.681c.902.074 1.844-.095 2.526-.777c.752-.752.88-1.816.746-2.812c-.123-.91-.48-1.92-1.002-2.961A9 9 0 0 0 9.791 3.274c-1.044-.524-2.055-.882-2.965-1.006c-.997-.135-2.062-.007-2.815.746c-.682.683-.851 1.626-.777 2.528c.064.773.31 1.62.684 2.495m1.404-2.071a4 4 0 0 1-.095-.587c-.048-.586.09-.842.198-.95c.12-.12.423-.275 1.132-.179q.298.04.643.136a9 9 0 0 0-1.878 1.58m14.29 10.837a5 5 0 0 1 .134.637c.096.709-.06 1.012-.178 1.13c-.109.109-.364.247-.95.199a4 4 0 0 1-.581-.094a9 9 0 0 0 1.575-1.872m-3.73 1.023c-1.677-.878-3.625-2.323-5.507-4.205c-1.88-1.88-3.324-3.825-4.203-5.5A7.02 7.02 0 0 1 9.97 5.298a7 7 0 0 1 5.912 12.528m-2.277.99a7 7 0 0 1-8.42-8.419c.964 1.516 2.25 3.112 3.776 4.638c1.528 1.528 3.126 2.815 4.644 3.78"></svg:path>`,
})
export class RiPlanetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlantLineIcon],svg[ri-plant-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2zm10 13h-8v5h8zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5"></svg:path>`,
})
export class RiPlantLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayCircleLineIcon],svg[ri-play-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"></svg:path>`,
})
export class RiPlayCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayLargeLineIcon],svg[ri-play-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.392V5.608L18.226 12zM6 3.804v16.392a1 1 0 0 0 1.53.848l13.113-8.196a1 1 0 0 0 0-1.696L7.53 2.956A1 1 0 0 0 6 3.804"></svg:path>`,
})
export class RiPlayLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riPlayLineIcon],svg[ri-play-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.394 12L10 7.737v8.526zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832"></svg:path>`,
})
export class RiPlayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

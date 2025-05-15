import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileCodeSolidIcon],svg[la-file-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM16 13l-2 12h2l2-12zm-3.781 2.375l-2.5 3l-.531.625l.53.625l2.5 3l1.563-1.25L11.812 19l1.97-2.375zm7.562 0l-1.562 1.25L20.187 19l-1.968 2.375l1.562 1.25l2.5-3l.532-.625l-.532-.625z"></svg:path>`,
})
export class LaFileCodeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileContractIcon],svg[la-file-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM10 9v2h6V9zm0 4v2h12v-2zm3.5 3c-.9 0-1.6.6-2 1.3s-.5 1.6-.5 2.6c0 .6.2 1.2.3 1.8c-.4.1-.8.4-1.3.4v2c.7 0 1.4-.1 2-.3c.1.2.1.3.3.5c.4.4 1 .7 1.7.7c1.6 0 2.6-1.1 3.3-1.9c.1-.2.2-.3.3-.4c0 .1 0 .2.1.3c.1.2.2.4.4.6s.6.4.9.4c.6 0 1-.4 1.2-.6s.4-.5.6-.7c.4-.4.7-.7 1.1-.7v-2c-1.2 0-2.1.7-2.6 1.3c0-.1 0-.2-.1-.3c-.1-.2-.2-.4-.4-.7s-.5-.3-.8-.3c-.8 0-1.1.5-1.4.8s-.6.7-.8 1.1c-.6.7-1 1.1-1.8 1.1c-.1 0-.1-.1-.2-.1c.1 0 .1-.1.2-.1c1.1-.9 2-2.1 2-3.7q0-1.2-.6-2.1c-.4-.6-1.1-1-1.9-1m-.1 2c.3 0 .3 0 .4.2s.2.5.2 1c0 .6-.3 1.2-.8 1.7c0-.3-.2-.7-.2-.9c0-.8.1-1.4.3-1.7c.1-.2.1-.3.1-.3"></svg:path>`,
})
export class LaFileContractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileCsvIcon],svg[la-file-csv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v7h2V5h16v5h2V3zm3.5 9A2.497 2.497 0 0 0 7 14.5v3C7 18.883 8.117 20 9.5 20s2.5-1.117 2.5-2.5V17h-2v.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5v-3c0-.215.285-.5.5-.5s.5.285.5.5v.5h2v-.5c0-1.383-1.117-2.5-2.5-2.5m6 0a2.497 2.497 0 0 0-2.5 2.5c0 1.383 1.117 2.5 2.5 2.5c.215 0 .5.285.5.5c0 .3-.117.5-.5.5c-.367 0-.426-.078-.438-.094c-.011-.015-.062-.078-.062-.312h-2c0 .566.164 1.203.625 1.687c.46.485 1.145.719 1.875.719c1.418 0 2.5-1.2 2.5-2.5c0-1.383-1.117-2.5-2.5-2.5c-.215 0-.5-.285-.5-.5s.285-.5.5-.5c.266 0 .348.063.406.125a.42.42 0 0 1 .094.281h2c0-.59-.215-1.191-.656-1.656S16.234 12 15.5 12m3.5 0v1.156l.063.156l2 6L22 22.157l.938-2.843l2-6l.062-.157V12h-2v.875l-1 3l-1-3V12zM6 22v7h20v-7h-2v5H8v-5z"></svg:path>`,
})
export class LaFileCsvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileDownloadIcon],svg[la-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 13v5h-3l4 4l4-4h-3v-5zm-3 10v2h8v-2z"></svg:path>`,
})
export class LaFileDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileExcelIcon],svg[la-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 13l3.8 5.5L11 24h2.4l2.6-3.8l2.6 3.8H21l-3.8-5.5L21 13h-2.4L16 16.8L13.4 13z"></svg:path>`,
})
export class LaFileExcelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileExcelSolidIcon],svg[la-file-excel-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 13l3.8 5.5L11 24h2.4l2.6-3.8l2.6 3.8H21l-3.8-5.5L21 13h-2.4L16 16.8L13.4 13z"></svg:path>`,
})
export class LaFileExcelSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileExportIcon],svg[la-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20v-8l-2 2v4H8V6h16v4l2 2V4zm16.406 7L21 12.406L23.563 15h-9.657v2h9.656L21 19.594L22.406 21l4.313-4.281l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaFileExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileImageIcon],svg[la-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM21.094 14c-.551 0-1 .45-1 1s.449 1 1 1s1-.45 1-1s-.45-1-1-1M14 15.594l-.719.687l-4 4l1.438 1.438L14 18.437l2.281 2.282l.719.687l.719-.687L19 19.437l2.281 2.282l1.438-1.438l-3-3l-.719-.687l-.719.687L17 18.563l-2.281-2.282z"></svg:path>`,
})
export class LaFileImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileImageSolidIcon],svg[la-file-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM21.094 14c-.551 0-1 .45-1 1s.449 1 1 1s1-.45 1-1s-.45-1-1-1M14 15.594l-.719.687l-4 4l1.438 1.438L14 18.437l2.281 2.282l.719.687l.719-.687L19 19.437l2.281 2.282l1.438-1.438l-3-3l-.719-.687l-.719.687L17 18.563l-2.281-2.282z"></svg:path>`,
})
export class LaFileImageSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileImportIcon],svg[la-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20v-9h-2v7H8V6h16v7h2V4zm11.5 7l-4.313 4.281L12.5 16l.688.719L17.5 21l1.406-1.406L16.313 17H28v-2H16.312l2.594-2.594z"></svg:path>`,
})
export class LaFileImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileInvoiceIcon],svg[la-file-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM10 13v2h12v-2zm0 5v2h7v-2zm9 0v2h3v-2zm-9 4v2h7v-2zm9 0v2h3v-2z"></svg:path>`,
})
export class LaFileInvoiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileInvoiceDollarIcon],svg[la-file-invoice-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h16v-2H8V5h10v6h6v2h2V9.6l-.3-.3l-6-6l-.3-.3zm14 3.4L22.6 9H20zM10 13v2h12v-2zm17 2v2c-1.7.3-3 1.7-3 3.5c0 2 1.5 3.5 3.5 3.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H25v2h2v2h2v-2c1.7-.3 3-1.7 3-3.5c0-2-1.5-3.5-3.5-3.5h-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H31v-2h-2v-2zm-17 3v2h7v-2zm9 0v2h3v-2zm-9 4v2h7v-2zm9 0v2h3v-2z"></svg:path>`,
})
export class LaFileInvoiceDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileMedicalIcon],svg[la-file-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaFileMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileMedicalAltIcon],svg[la-file-medical-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v11h1.367L8 12.42V5h10v6h6v16H8v-5.754l-.053-.053L6.756 20H6v9h20V9.594l-.281-.313l-6-6L19.406 3zm14 3.438L22.563 9H20zm-9.031 3.949l-2.336 5.832L8.414 16H2v2h5.586l1.777 1.781l1.668-4.168l3 7l2.07-5.175l.282.562h1.887a2 2 0 1 0 0-2h-.653l-1.719-3.438l-1.93 4.825z"></svg:path>`,
})
export class LaFileMedicalAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilePdfIcon],svg[la-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm7.406 5.344a1.44 1.44 0 0 0-.906.312c-.254.215-.367.48-.438.75c-.136.54-.097 1.098.032 1.719c.152.727.586 1.602.937 2.438c-.18.761-.226 1.437-.5 2.218c-.234.672-.535 1.059-.812 1.657c-.63.238-1.38.378-1.875.687c-.535.332-1.004.7-1.281 1.219c-.278.52-.247 1.254.124 1.781a1.6 1.6 0 0 0 .75.625c.325.129.676.133.97.031c.59-.203 1.007-.656 1.405-1.187c.372-.492.633-1.328.97-2c.503-.168.866-.38 1.405-.5c.563-.125.942-.067 1.47-.125c.226.258.417.672.655.875c.477.414 1 .742 1.625.781s1.25-.352 1.594-.938h.032v-.03c.152-.266.257-.555.25-.876a1.4 1.4 0 0 0-.375-.875c-.41-.437-.934-.55-1.5-.625c-.438-.058-1.047.098-1.563.125c-.453-.597-.902-1.047-1.313-1.812c-.222-.414-.28-.766-.468-1.188c.144-.68.43-1.437.468-2.031c.047-.719.02-1.34-.187-1.906a1.8 1.8 0 0 0-.531-.781a1.5 1.5 0 0 0-.907-.344h-.03zm.656 7.406c.18.316.403.516.594.813c-.281.05-.496 0-.781.062c-.047.012-.078.05-.125.063c.059-.157.133-.25.188-.407c.062-.183.066-.347.124-.531m3.688 2.031c.336.043.457.106.5.125c-.008.016.012.012 0 .032c-.125.207-.137.19-.219.187c-.066-.004-.32-.14-.562-.313c.07.004.218-.039.281-.03zm-7 1.563c-.055.082-.102.273-.156.343c-.305.407-.586.594-.656.625c-.012-.015.019 0 0-.03h-.032c-.101-.145-.074-.087 0-.22c.074-.132.309-.402.719-.656c.031-.02.094-.043.125-.062"></svg:path>`,
})
export class LaFilePdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilePdfSolidIcon],svg[la-file-pdf-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm7.406 5.344a1.44 1.44 0 0 0-.906.312c-.254.215-.367.48-.438.75c-.136.54-.097 1.098.032 1.719c.152.727.586 1.602.937 2.438c-.18.761-.226 1.437-.5 2.218c-.234.672-.535 1.059-.812 1.657c-.63.238-1.38.378-1.875.687c-.535.332-1.004.7-1.281 1.219c-.278.52-.247 1.254.124 1.781a1.6 1.6 0 0 0 .75.625c.325.129.676.133.97.031c.59-.203 1.007-.656 1.405-1.187c.372-.492.633-1.328.97-2c.503-.168.866-.38 1.405-.5c.563-.125.942-.067 1.47-.125c.226.258.417.672.655.875c.477.414 1 .742 1.625.781s1.25-.352 1.594-.938h.032v-.03c.152-.266.257-.555.25-.876a1.4 1.4 0 0 0-.375-.875c-.41-.437-.934-.55-1.5-.625c-.438-.058-1.047.098-1.563.125c-.453-.597-.902-1.047-1.313-1.812c-.222-.414-.28-.766-.468-1.188c.144-.68.43-1.437.468-2.031c.047-.719.02-1.34-.187-1.906a1.8 1.8 0 0 0-.531-.781a1.5 1.5 0 0 0-.907-.344h-.03zm.656 7.406c.18.316.403.516.594.813c-.281.05-.496 0-.781.062c-.047.012-.078.05-.125.063c.059-.157.133-.25.188-.407c.062-.183.066-.347.124-.531m3.688 2.031c.336.043.457.106.5.125c-.008.016.012.012 0 .032c-.125.207-.137.19-.219.187c-.066-.004-.32-.14-.562-.313c.07.004.218-.039.281-.03zm-7 1.563c-.055.082-.102.273-.156.343c-.305.407-.586.594-.656.625c-.012-.015.019 0 0-.03h-.032c-.101-.145-.074-.087 0-.22c.074-.132.309-.402.719-.656c.031-.02.094-.043.125-.062"></svg:path>`,
})
export class LaFilePdfSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilePowerpointIcon],svg[la-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM13 13v2h4c1.2 0 2 .8 2 2s-.8 2-2 2s-2-.8-2-2h-2v7h2v-3.6c.6.4 1.3.6 2 .6c2.2 0 4-1.8 4-4s-1.8-4-4-4z"></svg:path>`,
})
export class LaFilePowerpointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilePowerpointSolidIcon],svg[la-file-powerpoint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM13 13v2h4c1.2 0 2 .8 2 2s-.8 2-2 2s-2-.8-2-2h-2v7h2v-3.6c.6.4 1.3.6 2 .6c2.2 0 4-1.8 4-4s-1.8-4-4-4z"></svg:path>`,
})
export class LaFilePowerpointSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilePrescriptionIcon],svg[la-file-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 11v9h2v-3h.6l2.5 4.4L14 25h2l1-1.8l1 1.8h2l-2-3.6l2-3.4h-2l-1 1.7l-1.7-3c1-.5 1.6-1.5 1.6-2.7c0-1.6-1.4-3-3-3zm2 2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1z"></svg:path>`,
})
export class LaFilePrescriptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileSignatureIcon],svg[la-file-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM10 13v2h12v-2zm3.5 3c-.9 0-1.6.6-2 1.3s-.5 1.6-.5 2.6c0 .6.2 1.2.3 1.8c-.4.1-.8.4-1.3.4v2c.7 0 1.4-.1 2-.3c.1.2.1.3.3.5c.4.4 1 .7 1.7.7c1.6 0 2.6-1.1 3.3-1.9c.1-.2.2-.3.3-.4c0 .1 0 .2.1.3c.1.2.2.4.4.6s.6.4.9.4c.6 0 1-.4 1.2-.6s.4-.5.6-.7c.4-.4.7-.7 1.1-.7v-2c-1.2 0-2.1.7-2.6 1.3c0-.1 0-.2-.1-.3c-.1-.2-.2-.4-.4-.7s-.5-.3-.8-.3c-.8 0-1.1.5-1.4.8s-.6.7-.8 1.1c-.6.7-1 1.1-1.8 1.1c-.1 0-.1-.1-.2-.1c.1 0 .1-.1.2-.1c1.1-.9 2-2.1 2-3.7q0-1.2-.6-2.1c-.4-.6-1.1-1-1.9-1m-.1 2c.3 0 .3 0 .4.2s.2.5.2 1c0 .6-.3 1.2-.8 1.7c0-.3-.2-.7-.2-.9c0-.8.1-1.4.3-1.7c.1-.2.1-.3.1-.3"></svg:path>`,
})
export class LaFileSignatureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileSolidIcon],svg[la-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20z"></svg:path>`,
})
export class LaFileSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileUploadIcon],svg[la-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM16 13l-4 4h3v5h2v-5h3zm-4 10v2h8v-2z"></svg:path>`,
})
export class LaFileUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileVideoIcon],svg[la-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zm-7 6.78v9.563l1.5-.937l5-3L20.938 18l-1.438-.844l-5-3zm2 3.532L17.094 18L15 19.25z"></svg:path>`,
})
export class LaFileVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileVideoSolidIcon],svg[la-file-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zm-7 6.78v9.563l1.5-.937l5-3L20.938 18l-1.438-.844l-5-3zm2 3.532L17.094 18L15 19.25z"></svg:path>`,
})
export class LaFileVideoSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileWordIcon],svg[la-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm10 7v6.5c0 .215-.285.5-.5.5c-.043 0 .02.047-.063-.063c-.082-.109-.207-.386-.28-.687C17.006 17.652 17 17 17 17v-2h-2v4.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5V13h-4v2h2v4.5c0 1.383 1.117 2.5 2.5 2.5c.984 0 1.688-.645 2.094-1.469c.3.188.52.469.906.469c1.383 0 2.5-1.117 2.5-2.5V14h2v-2z"></svg:path>`,
})
export class LaFileWordIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileWordSolidIcon],svg[la-file-word-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm10 7v6.5c0 .215-.285.5-.5.5c-.043 0 .02.047-.063-.063c-.082-.109-.207-.386-.28-.687C17.006 17.652 17 17 17 17v-2h-2v4.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5V13h-4v2h2v4.5c0 1.383 1.117 2.5 2.5 2.5c.984 0 1.688-.645 2.094-1.469c.3.188.52.469.906.469c1.383 0 2.5-1.117 2.5-2.5V14h2v-2z"></svg:path>`,
})
export class LaFileWordSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFillIcon],svg[la-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.313 3.281L9.905 4.72l1.782 1.78l-6.906 6.906a3.063 3.063 0 0 0 0 4.313l.063.062l6.343 6.313a3.063 3.063 0 0 0 4.313 0l7.594-7.594l.718-.688l-9.718-9.718l-.781-.813l-.22-.187zm1.812 4.656L21 15.813l-6.906 6.876a1.054 1.054 0 0 1-1.5 0L6.219 16.28a1.017 1.017 0 0 1 0-1.468zM25 19.25l-.813 1.188s-.539.753-1.062 1.656c-.262.453-.508.926-.719 1.406S22 24.422 22 25c0 1.645 1.355 3 3 3s3-1.355 3-3c0-.578-.195-1.02-.406-1.5s-.457-.953-.719-1.406c-.523-.903-1.063-1.657-1.063-1.657zm0 3.625c.066.11.059.102.125.219c.238.41.492.847.656 1.218c.164.372.219.715.219.688c0 .555-.445 1-1 1s-1-.445-1-1c0 .027.055-.316.219-.688c.164-.37.418-.808.656-1.218c.066-.117.059-.11.125-.219"></svg:path>`,
})
export class LaFillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFillDripIcon],svg[la-fill-drip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.3 3.3L9.9 4.7l1.8 1.8l-6.9 6.9a3.017 3.017 0 0 0 0 4.3l.1.1l6.3 6.3c1.2 1.2 3.1 1.2 4.3 0l7.6-7.6l.7-.7l-9.7-9.7l-.8-.8l-.2-.2zm1.8 4.6l7.9 7.9l-2.2 2.2H7.899L6.2 16.3c-.4-.4-.4-1.1 0-1.5zM25 19.3l-.8 1.2s-.5.8-1.1 1.7c-.3.5-.5.9-.7 1.4s-.4.8-.4 1.4c0 1.6 1.4 3 3 3s3-1.4 3-3c0-.6-.2-1-.4-1.5s-.5-1-.7-1.4c-.5-.9-1.1-1.7-1.1-1.7z"></svg:path>`,
})
export class LaFillDripIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilmIcon],svg[la-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24V4zm2 2h2v1h2V6h12v1h2V6h2v20h-2v-1h-2v1H10v-1H8v1H6zm2 3v2h2V9zm14 0v2h2V9zM8 13v2h2v-2zm14 0v2h2v-2zM8 17v2h2v-2zm14 0v2h2v-2zM8 21v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class LaFilmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFilterIcon],svg[la-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2.344l.219.281L13 16.344V28l1.594-1.188l4-3L19 23.5v-7.156l7.781-9.719l.219-.281V4zm2.281 2H24.72l-7.188 9H14.47zM15 17h2v5.5L15 24z"></svg:path>`,
})
export class LaFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFingerprintIcon],svg[la-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-.262 0-.496.016-.75.031a13 13 0 0 0-4.063.875l.75 1.875a10.8 10.8 0 0 1 3.407-.75C15.55 6.02 15.774 6 16 6c1.883 0 3.664.477 5.219 1.313l.937-1.75A13 13 0 0 0 16 4M9.5 5.719a13 13 0 0 0-3.188 2.593c-.414.461-.777.981-1.125 1.5c-.382.57-.714 1.168-1 1.782L6 12.406a11.2 11.2 0 0 1 1.813-2.75A11 11 0 0 1 10.5 7.47zm14.469 1L22.75 8.312a10.93 10.93 0 0 1 4.219 8.094c.004.063.047.61 0 1.532l2 .125c.05-1.004.008-1.665 0-1.782a12.94 12.94 0 0 0-5-9.562M16 7v2c4.25 0 7.77 3.313 8 7.563c.008.113.129 3.066-1 6.625l1.906.593c1.239-3.902 1.11-7.031 1.094-7.312C25.715 11.176 21.293 7 16 7m-1.844.156a9.9 9.9 0 0 0-5.594 3.157c-.32.355-.636.753-.906 1.156h.032v.031C6.52 13.262 5.902 15.3 6 17.406v.563l2 .062v-.656c-.09-1.715.383-3.375 1.344-4.813c.21-.32.433-.624.687-.906a7.96 7.96 0 0 1 4.5-2.531zM15.594 10a6.9 6.9 0 0 0-4.25 1.781l1.312 1.5A5 5 0 0 1 15.72 12c.105-.008.183 0 .281 0c.582 0 1.14.098 1.656.281l.688-1.875A7.1 7.1 0 0 0 16 10c-.145 0-.27-.008-.406 0m4.281 1.156l-1.094 1.688A4.95 4.95 0 0 1 21 16.719l2-.094a7.05 7.05 0 0 0-3.125-5.469M15.781 13a4 4 0 0 0-2.75 1.344A3.98 3.98 0 0 0 12 17.219c0-.004.05 1.125-.406 2.437c-.457 1.313-1.371 2.793-3.344 3.75l-.625.282c-.332.148-.75.32-.844.343l.438 1.938c.445-.102.875-.301 1.25-.469s.656-.313.656-.313c2.5-1.21 3.762-3.207 4.344-4.875c.582-1.667.539-2.996.531-3.187v-.031a1.93 1.93 0 0 1 .5-1.438A1.95 1.95 0 0 1 15.875 15c.05-.004.09 0 .125 0v-2c-.082 0-.148-.004-.219 0m-5.625.125A6.96 6.96 0 0 0 9 17.344v.031c.004.082.09 2.266-2.063 3.313C6.891 20.706 6.146 21 5 21v2c1.566 0 2.75-.469 2.75-.469h.031l.032-.031c3.222-1.563 3.19-5.04 3.187-5.219v-.031c-.059-1.09.25-2.11.844-3zm7.75.344l-.968 1.781c.593.32 1.023.902 1.062 1.625c.008.164.285 6.387-4.625 10.344l1.25 1.562c5.719-4.605 5.402-11.531 5.375-12a4 4 0 0 0-2.094-3.312M16 16c-.55 0-1 .45-1 1v.063s.117 2.058-.906 4.375l1.812.812C17.09 19.574 17.008 17.172 17 17v-.063A1.004 1.004 0 0 0 16 16m4.969 1.938c-.125 2.03-.766 6.195-3.719 9.687l1.5 1.281c3.363-3.972 4.078-8.558 4.219-10.843zM13.562 22.5c-.8 1.348-2.039 2.645-4 3.594l.876 1.812c2.32-1.125 3.87-2.77 4.843-4.406z"></svg:path>`,
})
export class LaFingerprintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFireIcon],svg[la-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.375 3l-.188.781c-.3 1.348-2.234 3.567-4.218 6.281C7.984 12.777 6 16.16 6 20.407c0 2.004.613 4.145 2.125 5.813C9.637 27.887 12.047 29 15.313 29c.144 0 .265-.027.406-.031c.094.004.183.031.281.031c.305 0 .59-.035.875-.063c.086-.007.164-.023.25-.03c3.348-.278 5.57-1.31 6.938-2.845C25.668 24.262 26 21.977 26 20c0-4.465-2.57-8.617-5.063-11.688s-5-5.093-5-5.093L15.658 3zM15.5 5.5c.809.71 2.172 1.996 3.875 4.094C21.727 12.492 24 16.332 24 20c0 1.754-.309 3.453-1.438 4.719a5.2 5.2 0 0 1-.875.781c.54-1.559.422-3.332.063-5.094c-.41-2.011-1.188-4.031-1.938-5.656s-1.39-2.773-1.937-3.406L17.594 11h-1.938l.375 1.281c1.047 3.403.496 5.719-.093 6.406c-.293.344-.422.375-.72.282c-.296-.094-.831-.48-1.343-1.438l-.75-1.406l-.938 1.281c-1.87 2.52-2.59 5.282-1.968 7.594c.054.203.14.402.219.594a6 6 0 0 1-.813-.719C8.508 23.645 8 22 8 20.406c0-3.62 1.703-6.57 3.594-9.156c1.539-2.105 3.039-3.883 3.906-5.75m3.063 11.719c.464 1.176.968 2.363 1.218 3.593c.364 1.79.356 3.426-.156 4.47c-.383.78-.977 1.355-2.188 1.593c-.132.027-.289.043-.437.063c-.313.027-.656.05-1 .062c-.09 0-.164.004-.25 0c-2.164-.07-3.203-1.035-3.594-2.5c-.324-1.207.098-2.89 1-4.594c.446.461.918.797 1.469.969c1.02.32 2.156-.07 2.844-.875c.59-.691.937-1.648 1.093-2.781z"></svg:path>`,
})
export class LaFireIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFireAltIcon],svg[la-fire-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.799 4.39l-2.996 4.997l-1.85-1.848l-.703.799C7.767 12.286 6 15.873 6 19c0 4.962 4.486 9 10 9s10-4.038 10-9c0-4.762-5.197-10.634-8.295-13.71zm.392 3.233C19.767 10.309 24 15.288 24 19c0 2.391-1.38 4.504-3.477 5.768A6 6 0 0 0 21 22.43c0-2.381-1.685-5.206-3.098-7.155l-.843-1.166l-2.215 3.323l-1.406-1.407l-.66 1.09C11.597 19.061 11 20.85 11 22.43c0 .837.178 1.624.477 2.338C9.38 23.504 8 21.39 8 19s1.398-5.323 4.057-8.53l2.14 2.143zm-.087 10.025C18.334 19.565 19 21.234 19 22.43c0 1.969-1.346 3.57-3 3.57s-3-1.601-3-3.57c0-.922.29-1.978.865-3.149l1.291 1.29z"></svg:path>`,
})
export class LaFireAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFireExtinguisherIcon],svg[la-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-1.293 0-2.395.844-2.813 2H12c-2.746 0-5 2.254-5 5h2a3 3 0 0 1 3-3h1v2.469c-.32.238-.734.578-1.219 1.062C10.953 12.36 10 13.5 10 15v13h12V15c0-1.5-.953-2.64-1.781-3.469A11 11 0 0 0 19 10.47v-.281l4.844.812l1.156.188V4.811L23.844 5l-5.094.844C18.293 4.77 17.234 4 16 4m0 2c.555 0 1 .445 1 1v3h-2V7c0-.555.445-1 1-1m7 1.188v1.625l-4-.688v-.25zM14.375 12h3.25c.152.105.578.39 1.156.969C19.453 13.64 20 14.5 20 15v11h-8V15c0-.5.547-1.36 1.219-2.031c.578-.578 1.004-.864 1.156-.969M14 17v2h4v-2z"></svg:path>`,
})
export class LaFireExtinguisherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFirefoxIcon],svg[la-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.816 12.625c-.05.563-.316 1.172-.316 1.172q-.046-1.893-.566-3.375a7.6 7.6 0 0 0-1.11-2.098c.215.844.324 1.5.328 1.977c-.418-1.477-2.43-5.125-9.207-4.352c1.016 0 1.989.168 2.907.465c-.149-.008-.293-.02-.446-.023c1.453.41 2.383 1.074 2.508 1.382q-.803-.146-1.441.106c3.047 1.2 4.496 2.629 4.328 4.281a1.6 1.6 0 0 0-.899-.687q.705 2.717.137 4.492c-.258-.79-.496-1.258-.71-1.426c.296 2.43-.102 4.227-1.196 5.399q.311-1.072.242-1.762c-1.184 1.879-2.895 2.98-4.383 2.98c-2.09 0-3.441-1.058-4.125-1.742q.247.019.488.02c2.567 0 3.332-1.508 4.04-1.508q.14.002.27.062c.257-.035.39-.156.39-.328c0-.387-.828-1.055-1.715-1.055c-1.035 0-1.262.704-2.317.704c-1.32 0-2.496-1.813-2.496-1.813c0-.476.23-.785.637-.848c-.113-.011.98.141 1.57.313c.098-.563-.03-1.164-.386-1.77c0-.004.843-.793 1.464-1.125a.61.61 0 0 0 .333-.449c.05-.027.101-.117.101-.207q-.001-.129-.172-.234c-1.797.148-1.93-.875-2.613-1.27c.2-1.285 1.11-2.043 1.695-2.437c-1.09.136-2.074.62-2.949 1.46c-.469-.398-2.582-.542-3.105-.28q-.5-.633-.707-1.981q-1.189 1.16-1.153 4.168C6.2 10.895 5 12.406 5 13.484c0 .118.012.274.035.352l.645-.524a7 7 0 0 0-.516 2.676c0 4.461 3.914 10.168 10.832 10.168C24.473 26.156 27 19.141 27 14.117c0-.594-.059-1.101-.184-1.492"></svg:path>`,
})
export class LaFirefoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFirstAidIcon],svg[la-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2zm0 2h4v1h-4zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1m9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaFirstAidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFirstOrderIcon],svg[la-first-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2L4 9v14l12 7l12-7V9zm0 1l11 6.488v13L16 29L5 22.488v-13zm0 1L6 10v12l10 6l10-6V10zm0 2.947c4.956 0 9 4.044 9 9.053c0 4.988-4.044 9.043-9 9.043c-4.978 0-9-4.055-9-9.043c0-5.009 4.022-9.053 9-9.053M16.002 8c-.356 0-.733.03-1.078.078l.187 3.383l-1.107-3.215a8 8 0 0 0-2.008.842l1.484 3.086l-2.265-2.563a8.2 8.2 0 0 0-1.543 1.553l2.54 2.285l-3.064-1.494a7.7 7.7 0 0 0-.832 2.008l3.225 1.137l-3.412-.207A8 8 0 0 0 8.06 16c0 .376.03.732.07 1.088l3.4-.197l-3.213 1.136c.178.712.464 1.385.83 2.018l3.067-1.494l-2.553 2.273c.444.584.96 1.118 1.553 1.543l2.256-2.55l-1.485 3.085a8 8 0 0 0 2.008.85l1.117-3.242l-.199 3.412c.356.049.734.078 1.09.078c.375 0 .73-.03 1.086-.08l-.2-3.451l1.137 3.273a8 8 0 0 0 2.008-.85l-1.482-3.076l2.254 2.551a7.6 7.6 0 0 0 1.543-1.543l-2.541-2.273l3.066 1.482a7.8 7.8 0 0 0 .83-2.025L20.49 16.89l3.393.197c.049-.356.068-.712.068-1.088s-.02-.751-.068-1.107l-3.403.207l3.213-1.127c-.188-.712-.454-1.405-.83-2.018L19.8 13.447l2.54-2.283a8.4 8.4 0 0 0-1.532-1.553l-2.264 2.56l1.473-3.073a8 8 0 0 0-2.008-.852L16.89 11.48l.199-3.402A6.6 6.6 0 0 0 16.002 8"></svg:path>`,
})
export class LaFirstOrderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFirstOrderAltIcon],svg[la-first-order-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.817 3 3 8.817 3 16s5.817 13 13 13s13-5.817 13-13S23.183 3 16 3m0 1c6.63 0 12 5.37 12 12s-5.37 12-12 12S4 22.63 4 16S9.37 4 16 4m0 1C9.926 5 5 9.926 5 16s4.926 11 11 11s11-4.926 11-11S22.074 5 16 5m0 1c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6m-.01 1c-.415 0-.821.029-1.228.086l.222 3.805l-1.255-3.602a9 9 0 0 0-2.28.938l1.682 3.466l-2.56-2.879a9.3 9.3 0 0 0-1.749 1.739l2.88 2.568l-3.468-1.68a9.3 9.3 0 0 0-.947 2.27l3.643 1.275l-3.844-.222A9 9 0 0 0 6.998 16c0 .415.03.822.078 1.227l3.844-.223l-3.63 1.266a8.8 8.8 0 0 0 .937 2.279l3.466-1.682l-2.879 2.56a9.3 9.3 0 0 0 1.748 1.749l2.56-2.88l-1.68 3.468a9 9 0 0 0 2.279.947l1.265-3.65l-.222 3.851a8.6 8.6 0 0 0 2.46-.002l-.22-3.87l1.273 3.669a9.3 9.3 0 0 0 2.27-.945l-1.68-3.467l2.559 2.867a8.7 8.7 0 0 0 1.738-1.738l-2.867-2.559l3.467 1.67a8.8 8.8 0 0 0 .935-2.267l-3.63-1.266l3.833.223a8.6 8.6 0 0 0-.002-2.461l-3.841.22l3.64-1.263a9.2 9.2 0 0 0-.945-2.28l-3.469 1.68l2.88-2.559a9 9 0 0 0-1.74-1.738l-2.558 2.867l1.67-3.466a9.3 9.3 0 0 0-2.267-.938l-1.266 3.633l.223-3.834A9 9 0 0 0 15.99 7"></svg:path>`,
})
export class LaFirstOrderAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFirstdraftIcon],svg[la-firstdraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v18h6v-6h6v-6h6V4zm14 8v6h-6v6H7v1h9v-6h6v-6h3v-1zm3 3v6h-6v6h-8v1h9v-6h6v-7zm-3 9v4h1v-3h3v-1z"></svg:path>`,
})
export class LaFirstdraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFishIcon],svg[la-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 6l.563 1.375c.351.855.828 2.992.718 4c-1.363.84-2.199 1.66-2.844 2.344C8.149 13.082 6.59 12 4 12H3v1c0 1.914.691 3.469.938 4c-.25.527-.938 2.027-.938 4v1h1c2.57 0 4.148-1.086 4.938-1.719c1.183 1.219 2.87 2.504 5 3.469c-.094.621-.168 1.488.093 2.5l.188.75H15c1.234 0 2.297-.613 3.156-1.156c.703-.446 1.043-.758 1.219-.907c3.977-.14 6.516-2.285 7.875-4.406C28.656 18.34 29 16.156 29 16.156l.031-.25l-.093-.25s-2.29-6.289-8.5-6.594c-.66-.8-1.583-1.464-2.875-2C16.035 6.43 14.113 6 12 6zm2.906 2.125c1.262.14 2.442.395 3.375.781c1.278.528 2.168 1.285 2.375 1.625l.282.469H20c4.996 0 6.793 4.73 6.938 5.125c-.07.367-.36 1.762-1.375 3.344C24.402 21.277 22.523 23 19 23h-.375l-.281.25s-.528.45-1.25.906c-.38.239-.703.282-1.094.438c.04-.457 0-1.125 0-1.125l.219-.875l-.813-.282c-2.476-.945-4.582-2.726-5.656-3.968l-.688-.813l-.75.75s-1.332.934-3.062 1.375c.258-1.172.656-2.218.656-2.218L6.125 17l-.219-.438s-.433-1.148-.687-2.375c1.843.407 3.093 1.532 3.093 1.532l.75.75l.688-.813c.895-1.011 3.305-3.531 6.844-4l-.282-1.969c-.957.126-1.792.403-2.593.72c-.051-.84-.094-1.563-.313-2.282M22.5 15a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaFishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFistRaisedIcon],svg[la-fist-raised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a3 3 0 0 0-2.531 1.406A2.95 2.95 0 0 0 12 7c-1.645 0-3 1.355-3 3v3.656l-.125.156c-.074.086-.145.165-.219.25a21 21 0 0 0-1.437 1.876l-.313.406a4.34 4.34 0 0 0-.812 1.843c-.016.075-.051.145-.063.22a4.43 4.43 0 0 0 1.063 3.53l2.375 2.688A6.98 6.98 0 0 0 14.719 27H20c3.855 0 7-3.145 7-7v-9c0-1.645-1.355-3-3-3c-.535 0-1.031.156-1.469.406A3 3 0 0 0 20 7c-.535 0-1.031.156-1.469.406A3 3 0 0 0 16 6m0 2c.566 0 1 .434 1 1v2.188A3 3 0 0 0 16 11h-1V9c0-.566.434-1 1-1m-4 1c.566 0 1 .434 1 1v1h-1.406l-.281.281s-.227.23-.313.313V10c0-.566.434-1 1-1m8 0c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1s-1-.434-1-1v-3c0-.566.434-1 1-1m4 1c.566 0 1 .434 1 1v2c0 .566-.434 1-1 1s-1-.434-1-1v-2c0-.566.434-1 1-1m-11.563 3H16c.563 0 1 .438 1 1s-.438 1-1 1h-3.125l-.281.375l-2.344 2.969l1.563 1.25l1.843-2.313c.36.168.77.418 1.219.782C15.941 18.93 17 20.348 17 23h2c0-2.867-1.145-4.844-2.406-6.063a3.03 3.03 0 0 0 1.937-1.343c.438.25.934.406 1.469.406c.766 0 1.469-.3 2-.781c.531.48 1.234.781 2 .781a3 3 0 0 0 1-.188V20c0 2.773-2.227 5-5 5h-5.281a4.97 4.97 0 0 1-3.75-1.688l-2.375-2.718A2.33 2.33 0 0 1 8 18.906c0-.008.027-.074.031-.093c.004-.032-.004-.063 0-.094c.047-.219.2-.64.531-1.188c.043-.07.11-.148.157-.218l1.469-1.938c1.105-1.293 2.027-2.164 2.25-2.375z"></svg:path>`,
})
export class LaFistRaisedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlagIcon],svg[la-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v24h2V19h8v3h12V8H17V5zm2 2h8v10H7zm10 3h8v10h-8z"></svg:path>`,
})
export class LaFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlagCheckeredIcon],svg[la-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v24h2v-8h20V4zm2 2h3v3h3V6h3v3h3V6h3v3h3v3h-3v3h3v3h-3v-3h-3v3h-3v-3h-3v3h-3v-3H7v-3h3V9H7zm3 6v3h3v-3zm3 0h3V9h-3zm3 0v3h3v-3zm3 0h3V9h-3z"></svg:path>`,
})
export class LaFlagCheckeredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlagSolidIcon],svg[la-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v24h2V19h8v3h12V8H17V5zm2 2h8v10H7zm10 3h8v10h-8z"></svg:path>`,
})
export class LaFlagSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlagUsaIcon],svg[la-flag-usa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v10h26v-2H17v-2h12v-2H17V9h12V7zm2 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-6 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 14a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M3 19v2h26v-2zm0 4v2h26v-2z"></svg:path>`,
})
export class LaFlagUsaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlaskIcon],svg[la-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 3c-.55 0-1 .45-1 1h-3v2h1v7.656l-6.156 7.938A3.98 3.98 0 0 0 4 24.03A3.98 3.98 0 0 0 7.969 28H24.03A3.98 3.98 0 0 0 28 24.031c0-.883-.3-1.738-.844-2.437L21 13.656V6h1V4h-7c0-.55-.45-1-1-1m-1 3h6v8.344L21.844 18H10.156L13 14.344zm4 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M8.594 20h14.812l2.188 2.813c.27.347.406.78.406 1.218A1.946 1.946 0 0 1 24.031 26H7.97A1.946 1.946 0 0 1 6 24.031c0-.437.137-.87.406-1.218z"></svg:path>`,
})
export class LaFlaskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlickrIcon],svg[la-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6.355 5 5 6.355 5 8v16c0 1.645 1.355 3 3 3h16c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3zm0 2h16c.566 0 1 .434 1 1v16c0 .566-.434 1-1 1H8c-.566 0-1-.434-1-1V8c0-.566.434-1 1-1m3.5 5.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7m9 0a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7"></svg:path>`,
})
export class LaFlickrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlipboardIcon],svg[la-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 2v14h6v-4h4v-4h4V9zm2 2h10v2h-4v4h-4v4h-2z"></svg:path>`,
})
export class LaFlipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlushedIcon],svg[la-flushed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 3A5.506 5.506 0 0 0 6 13.5c0 3.033 2.467 5.5 5.5 5.5c1.86 0 3.504-.932 4.5-2.35A5.5 5.5 0 0 0 20.5 19c3.033 0 5.5-2.467 5.5-5.5S23.533 8 20.5 8c-1.86 0-3.504.932-4.5 2.35A5.5 5.5 0 0 0 11.5 8m0 2c1.93 0 3.5 1.57 3.5 3.5S13.43 17 11.5 17S8 15.43 8 13.5S9.57 10 11.5 10m9 0c1.93 0 3.5 1.57 3.5 3.5S22.43 17 20.5 17S17 15.43 17 13.5s1.57-3.5 3.5-3.5m-9 2a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M12 21v2h8v-2z"></svg:path>`,
})
export class LaFlushedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlushedSolidIcon],svg[la-flushed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 3A5.506 5.506 0 0 0 6 13.5c0 3.033 2.467 5.5 5.5 5.5c1.86 0 3.504-.932 4.5-2.35A5.5 5.5 0 0 0 20.5 19c3.033 0 5.5-2.467 5.5-5.5S23.533 8 20.5 8c-1.86 0-3.504.932-4.5 2.35A5.5 5.5 0 0 0 11.5 8m0 2c1.93 0 3.5 1.57 3.5 3.5S13.43 17 11.5 17S8 15.43 8 13.5S9.57 10 11.5 10m9 0c1.93 0 3.5 1.57 3.5 3.5S22.43 17 20.5 17S17 15.43 17 13.5s1.57-3.5 3.5-3.5m-9 2a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M12 21v2h8v-2z"></svg:path>`,
})
export class LaFlushedSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFlyIcon],svg[la-fly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-.16 0-.313.023-.469.031C10.832 4.261 7 7.848 7 12.344c0 2.949 1.79 5.539 3.469 7.406a23.5 23.5 0 0 0 3.344 3.063l.28.187h3.813l.282-.188s1.664-1.195 3.343-3.062S25 15.293 25 12.344c0-4.508-3.848-8.098-8.563-8.313A3 3 0 0 0 16 4m0 2c.273 0 1.113.313 1.781 1.156C18.45 8 19 9.328 19 11.22c0 4.316-2.273 9.011-2.656 9.781h-.688C15.273 20.227 13 15.516 13 11.219c0-1.82.574-3.164 1.25-4.031C14.926 6.32 15.758 6 16 6m-4.094 1.219c-.539 1.09-.906 2.422-.906 4c0 2.883.863 5.832 1.688 8c-.247-.25-.481-.516-.75-.813C10.418 16.715 9 14.45 9 12.344c0-2.102 1.145-3.969 2.906-5.125m8.25.031C21.886 8.41 23 10.262 23 12.344c0 2.105-1.418 4.37-2.938 6.062c-.261.293-.507.54-.75.782c.817-2.16 1.688-5.098 1.688-7.97c0-1.57-.332-2.89-.844-3.968M14 25v3h4v-3z"></svg:path>`,
})
export class LaFlyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderIcon],svg[la-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V15.437l1.719-1.718l.281-.313V3zm2 2h14v8.406l.281.313L24 15.438V27H8zm16 0h2v7.563l-1 1l-1-1z"></svg:path>`,
})
export class LaFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderMinusIcon],svg[la-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V15.437l1.719-1.718l.281-.313V3zm2 2h14v8.406l.281.313L24 15.438V27H8zm16 0h2v7.563l-1 1l-1-1zM12 15v2h8v-2z"></svg:path>`,
})
export class LaFolderMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderOpenIcon],svg[la-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v24.813l.781.156l12 2.5l1.219.25V28h6V15.437l1.719-1.718l.281-.313V3zm9.125 2H25v7.563l-1.719 1.718l-.281.313V26h-4v-8.906l-.281-.313L17 15.063V5.719zM7 5.281l8 2v8.625l.281.313L17 17.937v10.344L7 26.188z"></svg:path>`,
})
export class LaFolderOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderOpenSolidIcon],svg[la-folder-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v24.813l.781.156l12 2.5l1.219.25V28h6V15.437l1.719-1.718l.281-.313V3zm9.125 2H25v7.563l-1.719 1.718l-.281.313V26h-4v-8.906l-.281-.313L17 15.063V5.719zM7 5.281l8 2v8.625l.281.313L17 17.937v10.344L7 26.188z"></svg:path>`,
})
export class LaFolderOpenSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderPlusIcon],svg[la-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V15.437l1.719-1.718l.281-.313V3zm2 2h14v8.406l.281.313L24 15.438V27H8zm16 0h2v7.563l-1 1l-1-1zm-9 7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaFolderPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFolderSolidIcon],svg[la-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V15.437l1.719-1.718l.281-.313V3zm2 2h14v8.406l.281.313L24 15.438V27H8zm16 0h2v7.563l-1 1l-1-1z"></svg:path>`,
})
export class LaFolderSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFontIcon],svg[la-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6L8 26h2l2.094-6h7.812L22 26h2L17 6zm1 2.844L19.188 18h-6.375z"></svg:path>`,
})
export class LaFontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFontAwesomeIcon],svg[la-font-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5.5 2a1.5 1.5 0 0 0-1.498 1.5H11V22a1 1 0 0 0 2 0v-4.256c.782-.288 1.645-.51 2.479-.51c1.579 0 2.19.817 3.505.817c.94 0 1.814-.318 2.631-.67c.205-.088.381-.176.381-.381h.006v-5.62c0-.204-.206-.38-.441-.38c-.294 0-1.521.787-2.631.787c-.23 0-.436-.03-.64-.117c-.994-.377-1.87-.67-2.98-.67c-.49 0-.99.077-1.482.195A1.5 1.5 0 0 0 12.5 9"></svg:path>`,
})
export class LaFontAwesomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFontAwesomeAltIcon],svg[la-font-awesome-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5.5 2a1.5 1.5 0 0 0-1.498 1.5H11V22a1 1 0 0 0 2 0v-4.256c.782-.288 1.645-.51 2.479-.51c1.579 0 2.19.817 3.505.817c.94 0 1.814-.318 2.631-.67c.205-.088.381-.176.381-.381h.006v-5.62c0-.204-.206-.38-.441-.38c-.294 0-1.521.787-2.631.787c-.23 0-.436-.03-.64-.117c-.994-.377-1.87-.67-2.98-.67c-.49 0-.99.077-1.482.195A1.5 1.5 0 0 0 12.5 9"></svg:path>`,
})
export class LaFontAwesomeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFontAwesomeFlagIcon],svg[la-font-awesome-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.346 4 6 5.346 6 7c0 1.302.839 2.402 2 2.816v17.207c0 .54.437.977.977.977h.046c.54 0 .977-.437.977-.977V22.23c.335-.39 1.138-1.182 3.445-1.182c1.224 0 2.225.427 3.287.879c1.037.442 2.11.898 3.356.898c2.359 0 3.961-1.24 4.646-1.77l.153-.115c.55-.4 1.113-.944 1.113-1.94v-8.324C26 9.768 25.222 9 24.299 9c-.495 0-.859.287-1.358.684c-.662.524-1.66 1.316-2.853 1.316c-.815 0-1.61-.38-2.533-.822C16.404 9.626 15.098 9 13.443 9c-1.135 0-2.021.188-2.73.457A3 3 0 0 0 12 7c0-1.654-1.346-3-3-3m0 2a1.001 1.001 0 0 1 0 2a1.001 1.001 0 0 1 0-2m4.443 5c1.202 0 2.195.476 3.248.98c1.045.502 2.127 1.02 3.397 1.02c1.755 0 3.07-.946 3.91-1.604v7.67c-.001.004-.045.08-.289.256l-.2.153c-.566.438-1.746 1.35-3.421 1.35c-.838 0-1.641-.342-2.572-.74c-1.143-.487-2.44-1.04-4.073-1.04c-1.552 0-2.657.313-3.443.705v-7.389c.345-.456 1.132-1.361 3.443-1.361"></svg:path>`,
})
export class LaFontAwesomeFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFonticonsIcon],svg[la-fonticons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm12.719 1.906l-.688 1.281h-1.25l-.156.438l1 1.063l-.406 1.5s.289.351.312.343s1.407-.781 1.407-.781l1.375.781l.375-.344l-.438-1.5l1-1.093l-.219-.406h-1.218l-.688-1.282zm-5.344 1.813c-3.504 0-3.406 2.656-3.406 2.656v1.375H9.688v1.688h1.25v5.375l-1.25.156v1.156h5.874c-.015.02 0-1.125 0-1.125l-2.093-.219v-5.343h2.5l.5-1.688h-3V13s.168-.75.812-.75c.645 0 .75.594.75.594v.5l2.25-.313s.422-2.312-2.906-2.312m3.438 4.062l-.375 1.281l1.187.344c.145.04.25.164.25.313V21.5c0 .156-.125.281-.281.313l-.938.187v1.125h4.563v-1.094l-.532-.093a.36.36 0 0 1-.28-.344V14.78z"></svg:path>`,
})
export class LaFonticonsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFonticonsFiIcon],svg[la-fonticons-fi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm12.719 1.906l-.688 1.281h-1.25l-.156.438l1 1.063l-.406 1.5s.289.351.312.343s1.407-.781 1.407-.781l1.375.781l.375-.344l-.438-1.5l1-1.093l-.219-.406h-1.218l-.688-1.282zm-5.344 1.813c-3.504 0-3.406 2.656-3.406 2.656v1.375H9.688v1.688h1.25v5.375l-1.25.156v1.156h5.874c-.015.02 0-1.125 0-1.125l-2.093-.219v-5.343h2.5l.5-1.688h-3V13s.168-.75.812-.75c.645 0 .75.594.75.594v.5l2.25-.313s.422-2.312-2.906-2.312m3.438 4.062l-.375 1.281l1.187.344c.145.04.25.164.25.313V21.5c0 .156-.125.281-.281.313l-.938.187v1.125h4.563v-1.094l-.532-.093a.36.36 0 0 1-.28-.344V14.78z"></svg:path>`,
})
export class LaFonticonsFiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFootballBallIcon],svg[la-football-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.031 4c-.738.016-1.515.086-2.312.219c-3.188.531-6.758 2.062-9.625 4.875c-2.817 2.87-4.344 6.457-4.875 9.656c-.532 3.2-.223 6.059 1.375 7.656c1.59 1.59 4.453 1.926 7.656 1.407c3.203-.52 6.785-2.036 9.656-4.907c2.82-2.82 4.344-6.39 4.875-9.593c.532-3.204.227-6.083-1.343-7.72h-.032v-.03c-.816-.782-1.965-1.227-3.281-1.438c-.66-.105-1.355-.14-2.094-.125m0 2.031c.633 0 1.227.04 1.75.125c1.028.172 1.797.485 2.188.844l.031.031c.723.785 1.277 3.168.813 5.969c-.47 2.824-1.833 6.02-4.313 8.5c-2.531 2.531-5.742 3.887-8.563 4.344C10.117 26.3 7.712 25.71 7 25c-.703-.703-1.281-3.113-.813-5.938c.47-2.824 1.829-6.03 4.313-8.562c2.531-2.484 5.719-3.844 8.531-4.313a12 12 0 0 1 2-.156m.25 3.25L19 11.562l-1.781-1.78l-1.438 1.437L17.562 13L16 14.563l-1.781-1.782l-1.438 1.438L14.562 16L13 17.563l-1.781-1.782L9.78 17.22L11.562 19l-2.28 2.281l1.437 1.438L13 20.437l1.781 1.782l1.438-1.438L14.437 19L16 17.437l1.781 1.782l1.438-1.438L17.437 16L19 14.437l1.781 1.782l1.438-1.438L20.437 13l2.282-2.281z"></svg:path>`,
})
export class LaFootballBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFortAwesomeIcon],svg[la-fort-awesome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 4c-.275 0-.5.225-.5.5V12h-2v-2h-2v2H8.994v-2H7v9H5v-2H3v10h10v-3a3 3 0 1 1 6 0v3h10V17h-2v2h-2v-9h-2.006v2H21v-2h-2v2h-2v-2h-1V7.906c.275-.1.725-.228 1.275-.238c.762-.01 1.137.199 1.95.289a6 6 0 0 0 1.474-.006a.35.35 0 0 0 .301-.344V4.432c0-.1-.113-.17-.238-.15a6.5 6.5 0 0 1-1.537.009c-.813-.09-1.188-.309-1.95-.289c-.55.01-1 .138-1.275.238v.26c0-.275-.225-.5-.5-.5M11 14h2v4h-2zm8 0h2v4h-2z"></svg:path>`,
})
export class LaFortAwesomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFortAwesomeAltIcon],svg[la-fort-awesome-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 3C8.607 3 3 8.607 3 15.5S8.607 28 15.5 28S28 22.393 28 15.5S22.393 3 15.5 3m0 2C21.29 5 26 9.71 26 15.5S21.29 26 15.5 26S5 21.29 5 15.5S9.71 5 15.5 5M15 8v5h-1v-1h-1v1h-1v-1h-1v6H9v-1H8v2.49a8.52 8.52 0 0 0 6 4.37V20.5c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v3.36a8.52 8.52 0 0 0 6-4.37V17h-1v1h-2v-6h-1v1h-1v-1h-1v1h-1v-3s.39-.23.9-.23c.5 0 .78.23 1.19.23c.55 0 .91-.23.91-.23V8s-.36.23-.91.23c-.41 0-.69-.23-1.19-.23c-.51 0-.9.23-.9.23V8zm-2 7h1v2h-1zm4 0h1v2h-1z"></svg:path>`,
})
export class LaFortAwesomeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laForumbeeIcon],svg[la-forumbee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.969C8.812 2.969 2.969 8.813 2.969 16c0 .988.101 1.95.312 2.875C5.977 11.859 11.421 5.973 18.72 3.25A13 13 0 0 0 16 2.969m7.375 2.312C19.879 6.293 9.457 10.336 5.281 23.406a13.2 13.2 0 0 0 2.594 2.782c4.488-13.56 14.754-17.356 18.313-18.282a13.2 13.2 0 0 0-2.813-2.625m4.594 5.594c-11.586 3.727-15.813 13.45-17.032 17.094a13 13 0 0 0 3.313.906c1.227-3.09 5.137-10.82 14.625-14.688a13 13 0 0 0-.906-3.312m.906 6.969c-1.2.597-3.168 1.808-5.844 4.312c-3.039 2.848-4.457 5.305-5.062 6.688a13 13 0 0 0 4.812-1.75L29 29s-1.234-4.598-1.844-6.344a12.9 12.9 0 0 0 1.719-4.812"></svg:path>`,
})
export class LaForumbeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laForwardIcon],svg[la-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7.375L6.594 6.187L5 5.032V26.97l1.594-1.157L15 19.625V27l1.594-1.188l12-9L29.656 16l-1.062-.813l-12-9zM7 8.969l8.406 6.187l1.125.844l-1.125.844L7 23.03zM17 9l9.313 7L17 23z"></svg:path>`,
})
export class LaForwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFoursquareIcon],svg[la-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5c-1.094 0-2 .906-2 2v18.719c0 .508.36.972.781 1.125a1.27 1.27 0 0 0 1.313-.344l6.312-7.5h3.438a2.03 2.03 0 0 0 1.968-1.625l1.938-10C23.984 6.16 23.02 5 21.781 5zm0 2h11.781L21 11h-6.531a.48.48 0 0 0-.469.469v1.062c0 .25.219.469.469.469h6.156l-.781 4h-3.938a1 1 0 0 0-.781.344L10 23.5z"></svg:path>`,
})
export class LaFoursquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFreeCodeCampIcon],svg[la-free-code-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.03 6C4.774 6 1 10.166 1 16.318C1 21.708 4.653 26 6.088 26c.39 0 .912-.427.912-.863c0-.353-.38-.828-1.291-1.825c-.208-.229-.39-.427-.486-.552C3.859 20.977 2.974 18.528 3 15.979c.027-2.621 1.011-5.349 3.064-7.569l.135-.144c.338-.36.801-.852.801-1.342S6.457 6 6.03 6m19.94 0c-.427 0-.97.434-.97.924s.463.983.8 1.342l.136.144c2.053 2.22 3.037 4.948 3.064 7.569c.026 2.549-.859 4.998-2.223 6.78c-.096.126-.278.325-.486.553C25.38 24.31 25 24.785 25 25.137c0 .436.522.863.912.863C27.347 26 31 21.707 31 16.318C31 10.166 27.225 6 25.97 6M13.093 7.025c-.134.033-.215.104-.215.227s.131.205.234.256c.472.287 1.006 1.097 1.006 1.959c0 2.369-2.965 4.522-2.965 6.984c-.01 2.072 1.448 3.724 3.356 4.422c.226.092.625.266.625-.062c0-.134-.112-.143-.215-.184a1.96 1.96 0 0 1-.984-.781c-.421-.616-.514-1.242-.514-1.98c0-1.642 2.268-1.94 2.268-3.59c0-.627-.4-.811-.4-.985c0-.113.04-.113.153-.113c.411 0 .975.676 1.149 1.015c.113.236.123.309.123.565c0 .359-.031.728-.031 1.097c0 1.385 1.63 1.015 1.63.348c0-.307-.183-.593-.183-.89c0-.043 0-.063.04-.063c.175 0 .481.39.563.514c.297.46.442 1.065.442 1.609c0 1.662-1.518 2.512-1.518 2.871c0 .052.153.402.625.104C19.8 19.568 21 17.906 21 15.742c0-1.724-.44-2.964-1.64-4.232c-.206-.216-.843-.873-1.16-.873c-.422 0 .368.953.368 1.6c0 .368-.246.636-.625.636c-.595 0-.75-1.303-.822-1.713c-.297-1.733-.656-2.985-2.379-3.795c-.4-.193-1.25-.437-1.65-.34zM10.002 23c-.557 0-.979.438-.979 1.016c0 .543.44.984.979.984H22.16c.197 0 .84-.074.84-1.016c0-.598-.33-.984-.84-.984z"></svg:path>`,
})
export class LaFreeCodeCampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFreebsdIcon],svg[la-freebsd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v1c0 1.852.621 3.855 1.5 5.469A11 11 0 0 0 5 17c0 6.063 4.938 11 11 11c5.695 0 10.387-4.352 10.938-9.906c.035-.364.062-.723.062-1.094c0-1.574-.336-3.098-.969-4.5c-.05.086-.082.148-.125.219c-.343.765-.742 1.574-1.156 2.25A8.8 8.8 0 0 1 25 17c0 .305-.004.61-.031.906A9 9 0 0 1 16 26c-4.984 0-9-4.016-9-9s4.016-9 9-9c.43 0 .836.035 1.25.094c.242-.324.492-.614.719-.875v-.032L18.156 7c.219-.238.426-.441.625-.625A11 11 0 0 0 16 6c-1.395 0-2.738.273-3.969.75a8 8 0 0 0-1.094-.656C9.817 5.535 8.168 5 6 5zm21 0c-2.168 0-3.816.535-4.938 1.094c-1.12.558-1.78 1.187-1.78 1.187L19 7.594v.437s.023 1.211.656 2.438C20.29 11.695 21.72 13 24 13h.531l.313-.438S27 9.445 27 6V5zM7.219 7.156c1.093.14 2.031.39 2.687.688c-.746.496-1.398 1.09-2 1.75a13.3 13.3 0 0 1-.687-2.438m17.5 0c-.328 1.758-.91 3.137-1.25 3.719c-1.098-.168-1.696-.688-2.032-1.344c-.28-.543-.277-.808-.312-1.094c.172-.144.23-.238.813-.53c.644-.321 1.636-.598 2.78-.75z"></svg:path>`,
})
export class LaFreebsdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFrogIcon],svg[la-frog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a3 3 0 0 0-2.625 1.563c-.34.199-1.023.632-1.781 1.468c-.934.016-2.676.086-4.657.719c-2.117.676-4.386 2.047-5.656 4.563c-.011.027-.05.035-.062.062c-.051.055-.535.555-1.063 1.344C4.606 17.547 4 18.633 4 19.906c0 .918.32 1.84 1 2.5c.223.219.512.371.813.5c-.118.157-.243.309-.344.469c-.23.36-.469.613-.469 1.281c0 .418.305.817.531.969s.387.21.563.25c.347.078.71.086 1.125.094c.832.011 1.914-.035 3.125-.094c2.426-.117 5.39-.223 7.5.125l.312-2c-1-.164-2.11-.23-3.218-.25c.613-.652 1.062-1.469 1.062-2.469c0-1.597-1.031-2.808-2.219-3.437C12.594 17.214 11.215 17 10 17v2c.941 0 2.07.215 2.844.625c.773.41 1.156.848 1.156 1.656c0 .653-.531 1.27-1.406 1.782c-.875.511-2.043.78-2.406.78v.032c-1.083.05-2.004.094-2.688.094c.105-.14.2-.266.313-.407c.492-.605 1-1.125 1-1.125l-1.47-1.375l-.03.063c-.504.148-.723.05-.938-.156S6 20.336 6 19.906c0-.531.395-1.386.844-2.062s.875-1.157.875-1.157l.125-.125l.062-.156c.93-2.062 2.774-3.148 4.657-3.75C14.444 12.055 16.305 12 17 12h.5l.313-.406c.136-.188.285-.32.437-.469C18.703 12.215 19.758 13 21 13c1.59 0 2.883-1.273 2.969-2.844c.457.114.91.266 1.281.469c.32.176.578.371.719.5c-.008.04-.016.02-.032.063c-.066.183-.203.398-.375.656c-.347.511-.921 1.101-1.937 1.5l-.625.25v.687c0 1.403-.125 4.852-2.063 6.219l1.157 1.625c2.808-1.984 2.843-5.563 2.843-7.25c1.043-.54 1.82-1.227 2.282-1.906c.273-.406.472-.785.593-1.125c.122-.34.188-.61.188-.938c0-.773-.383-.969-.688-1.25a5.6 5.6 0 0 0-1.125-.781c-.812-.441-1.835-.793-2.937-.844A3 3 0 0 0 21 7m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-2 7.375a6.3 6.3 0 0 0-1.094 2.688c-.12.777-.09 1.496-.093 1.53v.032c0 .262.046.297.062.344l.031.093c.024.063.063.122.094.188c.059.129.125.281.219.469c.191.375.46.867.75 1.375c.582 1.011 1.164 2.058 1.937 2.718q.177.16.407.22c.46.105.664-.016.875-.063s.417-.086.656-.125c.472-.074 1.054-.106 1.875.125l.562-1.938a6.4 6.4 0 0 0-2.75-.156c-.242.04-.402.09-.562.125c-.278-.328-.809-1.082-1.282-1.906a28 28 0 0 1-.875-1.657c-.003-.007.004-.027 0-.03c.004-.313-.003-.598.063-1.032c.086-.55.29-1.191.75-1.844z"></svg:path>`,
})
export class LaFrogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFrownIcon],svg[la-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 18c-2.668 0-5.02 1.336-6.469 3.344l1.625 1.156C12.246 20.984 13.992 20 16 20s3.754.984 4.844 2.5l1.625-1.156C21.019 19.336 18.668 18 16 18"></svg:path>`,
})
export class LaFrownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFrownOpenIcon],svg[la-frown-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 5c-.828 0-1.5 1.121-1.5 2.5s.672 2.5 1.5 2.5s1.5-1.121 1.5-2.5s-.672-2.5-1.5-2.5m9 0c-.828 0-1.5 1.121-1.5 2.5s.672 2.5 1.5 2.5s1.5-1.121 1.5-2.5s-.672-2.5-1.5-2.5M16 17c-2.293 0-4 1.855-4 4c0 .988.355 1.973 1.156 2.469S14.844 24 16 24s2.043-.035 2.844-.531S20 21.989 20 21c0-2.145-1.707-4-4-4m0 2c1.293 0 2 .828 2 2c0 .668-.04.691-.188.781S17.055 22 16 22s-1.664-.129-1.813-.219c-.148-.09-.187-.113-.187-.781c0-1.172.707-2 2-2"></svg:path>`,
})
export class LaFrownOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFrownOpenSolidIcon],svg[la-frown-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 5c-.828 0-1.5 1.121-1.5 2.5s.672 2.5 1.5 2.5s1.5-1.121 1.5-2.5s-.672-2.5-1.5-2.5m9 0c-.828 0-1.5 1.121-1.5 2.5s.672 2.5 1.5 2.5s1.5-1.121 1.5-2.5s-.672-2.5-1.5-2.5M16 17c-2.293 0-4 1.855-4 4c0 .988.355 1.973 1.156 2.469S14.844 24 16 24s2.043-.035 2.844-.531S20 21.989 20 21c0-2.145-1.707-4-4-4m0 2c1.293 0 2 .828 2 2c0 .668-.04.691-.188.781S17.055 22 16 22s-1.664-.129-1.813-.219c-.148-.09-.187-.113-.187-.781c0-1.172.707-2 2-2"></svg:path>`,
})
export class LaFrownOpenSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFrownSolidIcon],svg[la-frown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 18c-2.668 0-5.02 1.336-6.469 3.344l1.625 1.156C12.246 20.984 13.992 20 16 20s3.754.984 4.844 2.5l1.625-1.156C21.019 19.336 18.668 18 16 18"></svg:path>`,
})
export class LaFrownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFulcrumIcon],svg[la-fulcrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 0l-1.28 12.2L10.1 16l3.62 3.8L15 32V19l-3-3l3-3zm2 0v13l3 3l-3 3v13l1.28-12.2L21.9 16l-3.62-3.8zM9.5 7L7 10l2.5 3l2.5-3zm13 0L20 10l2.5 3l2.5-3z"></svg:path>`,
})
export class LaFulcrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFunnelDollarIcon],svg[la-funnel-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2.344l.219.281L13 16.344V28.03l1.594-1.25l1.562-1.187C16.906 29.234 20.145 32 24 32c4.406 0 8-3.594 8-8s-3.594-8-8-8c-1.887 0-3.629.68-5 1.781v-1.437l7.781-9.721l.219-.28V4zm2.281 2H24.72l-7.188 9H14.47zM15 17h2v3.125a8 8 0 0 0-.969 3.063L15 24zm9 1c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6m-1 1v1.063c-1.125.188-2 1.142-2 2.314a1.98 1.98 0 0 0 1.094 1.78L25 25.624a.356.356 0 0 1-.375.375h-1.25a.356.356 0 0 1-.375-.375V25h-2v.625c0 1.172.875 2.125 2 2.313V29h2v-1.063c1.125-.188 2-1.142 2-2.314c0-.754-.418-1.44-1.094-1.78L23 22.376c0-.223.152-.375.375-.375h1.25c.223 0 .375.152.375.375V23h2v-.625c0-1.172-.875-2.125-2-2.313V19z"></svg:path>`,
})
export class LaFunnelDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFutbolIcon],svg[la-futbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c.602 0 1.176.063 1.75.156L16 6.406l-1.75-1.25A11 11 0 0 1 16 5m-4.188.844l3.594 2.625l.594.437l.594-.437l3.593-2.625a11.1 11.1 0 0 1 4.125 2.968l-1.375 4.282l-.218.687l.593.406l3.625 2.657a11 11 0 0 1-1.53 4.843h-5.282l-.219.688l-1.406 4.344a11.1 11.1 0 0 1-5.094-.031l-1.375-4.282l-.219-.687H6.595c-.875-1.438-1.395-3.098-1.532-4.875l3.594-2.625l.594-.406l-.219-.688l-1.406-4.25a11 11 0 0 1 4.188-3.031zM16 10.094l-.594.437l-4.562 3.313l-.563.437l.219.688l1.75 5.344l.219.687h7.062l.219-.688l1.75-5.343l.219-.688l-.563-.437l-4.562-3.313zm9.75.812a11 11 0 0 1 1.094 3.406l-1.782-1.28zm-19.531.063l.687 2.062l-1.75 1.281A10.9 10.9 0 0 1 6.22 10.97zM16 12.594l3.375 2.437L18.094 19h-4.188l-1.281-3.969zm5.594 11.094h2.25a10.8 10.8 0 0 1-2.938 2.156zm-13.438.03h2.188l.687 2.095a11 11 0 0 1-2.875-2.094z"></svg:path>`,
})
export class LaFutbolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFutbolSolidIcon],svg[la-futbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c.602 0 1.176.063 1.75.156L16 6.406l-1.75-1.25A11 11 0 0 1 16 5m-4.188.844l3.594 2.625l.594.437l.594-.437l3.593-2.625a11.1 11.1 0 0 1 4.125 2.968l-1.375 4.282l-.218.687l.593.406l3.625 2.657a11 11 0 0 1-1.53 4.843h-5.282l-.219.688l-1.406 4.344a11.1 11.1 0 0 1-5.094-.031l-1.375-4.282l-.219-.687H6.595c-.875-1.438-1.395-3.098-1.532-4.875l3.594-2.625l.594-.406l-.219-.688l-1.406-4.25a11 11 0 0 1 4.188-3.031zM16 10.094l-.594.437l-4.562 3.313l-.563.437l.219.688l1.75 5.344l.219.687h7.062l.219-.688l1.75-5.343l.219-.688l-.563-.437l-4.562-3.313zm9.75.812a11 11 0 0 1 1.094 3.406l-1.782-1.28zm-19.531.063l.687 2.062l-1.75 1.281A10.9 10.9 0 0 1 6.22 10.97zM16 12.594l3.375 2.437L18.094 19h-4.188l-1.281-3.969zm5.594 11.094h2.25a10.8 10.8 0 0 1-2.938 2.156zm-13.438.03h2.188l.687 2.095a11 11 0 0 1-2.875-2.094z"></svg:path>`,
})
export class LaFutbolSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGalacticRepublicIcon],svg[la-galactic-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.594 12.895a12 12 0 0 0-3.11-5.38A11.98 11.98 0 0 0 16 4c-1.074 0-2.117.14-3.11.406a12.04 12.04 0 0 0-5.378 3.11a11.996 11.996 0 0 0 0 16.964A11.96 11.96 0 0 0 16 28a11.97 11.97 0 0 0 8.484-3.516a11.96 11.96 0 0 0 3.106-5.375a12 12 0 0 0 .004-6.214M16.406 5.344A10.6 10.6 0 0 1 23.54 8.46a10.5 10.5 0 0 1 1.438 1.777l-.434.25a10.2 10.2 0 0 0-1.355-1.675l-.895.894a8.9 8.9 0 0 0-3.992-2.309l.328-1.222a10.2 10.2 0 0 0-2.223-.336zM19.602 16c0 .324-.047.637-.125.938l3.687.988a7.44 7.44 0 0 1-1.922 3.32l-2.695-2.7a3.6 3.6 0 0 1-1.617.93l.988 3.688a7.4 7.4 0 0 1-3.84 0l.988-3.687a3.56 3.56 0 0 1-1.617-.938l-2.699 2.7a7.4 7.4 0 0 1-1.914-3.325l3.684-.988a3.6 3.6 0 0 1-.122-.926c0-.32.043-.633.125-.93l-3.687-.988a7.4 7.4 0 0 1 1.918-3.324l2.7 2.699a3.55 3.55 0 0 1 1.612-.934l-.988-3.687a7.4 7.4 0 0 1 3.84 0l-.988 3.684a3.6 3.6 0 0 1 1.617.933l2.7-2.7a7.4 7.4 0 0 1 1.917 3.325l-3.687.988q.124.447.125.934M8.457 8.46a10.7 10.7 0 0 1 4.781-2.765a10.4 10.4 0 0 1 2.168-.343v.5a10 10 0 0 0-2.039.328l.328 1.222a8.9 8.9 0 0 0-3.992 2.309l-.894-.899c-.508.508-.961 1.07-1.352 1.676l-.434-.25a10.5 10.5 0 0 1 1.434-1.777zM6.52 20.896a10.7 10.7 0 0 1-.824-7.656c.199-.747.476-1.462.824-2.134l.433.25a10 10 0 0 0-.773 2.012l1.222.328a8.8 8.8 0 0 0-.3 2.305q.002 1.197.296 2.3l-1.222.329c.187.703.449 1.379.777 2.016zm8.886 5.753a10.64 10.64 0 0 1-6.953-3.113a10.8 10.8 0 0 1-1.433-1.773l.433-.25c.395.601.848 1.164 1.352 1.672l.898-.895a8.87 8.87 0 0 0 3.992 2.309l-.328 1.222c.656.176 1.34.29 2.04.328zm8.133-3.105a10.67 10.67 0 0 1-4.781 2.762c-.754.203-1.54.324-2.352.351v-.5a10.2 10.2 0 0 0 2.223-.332l-.328-1.226a8.87 8.87 0 0 0 3.992-2.305l.895.898c.507-.511.964-1.074 1.355-1.68l.434.25a10.5 10.5 0 0 1-1.438 1.782m1.941-2.648l-.433-.25c.324-.633.586-1.305.773-2.008l-1.222-.328a9 9 0 0 0 0-4.614l1.222-.328a10 10 0 0 0-.773-2.012l.433-.25a10.6 10.6 0 0 1 1.185 4.895c0 .957-.126 1.883-.36 2.766c-.2.746-.48 1.457-.825 2.129"></svg:path>`,
})
export class LaGalacticRepublicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGalacticSenateIcon],svg[la-galactic-senate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.64 3v1.53c-.796 1.21-1.4 6.373-1.437 12.638c.69-.917 1.123-1.955 1.123-2.83v-.992a3.3 3.3 0 0 1 .13-.918c.037-.126.081-.24.153-.342a.48.48 0 0 1 .393-.223c.19 0 .319.12.39.223c.073.103.117.216.155.342c.084.3.13.606.129.918v.992c0 .875.434 1.913 1.123 2.83c-.037-6.265-.643-11.429-1.44-12.639V3h-.718zm-1.546 8.674a8.7 8.7 0 0 0-1.612.531c.522.946.573 1.918.1 2.19c-.469.27-1.282-.25-1.84-1.165a9 9 0 0 0-1.793 1.827c.864.565 1.342 1.344 1.074 1.798c-.266.452-1.175.419-2.082-.056a9.1 9.1 0 0 0-.683 2.488a3.7 3.7 0 0 1 1.537.356c1.045-.018 1.924-.116 2.377-.248a5.04 5.04 0 0 1 2.717-3.493a100 100 0 0 1 .205-4.228m3.81 0c.093 1.315.162 2.73.205 4.228a5.03 5.03 0 0 1 2.72 3.493c.452.133 1.331.23 2.374.248a3.7 3.7 0 0 1 1.537-.356a9 9 0 0 0-.683-2.488c-.906.475-1.815.508-2.082.056c-.268-.454.21-1.234 1.074-1.798a9 9 0 0 0-1.793-1.827c-.558.915-1.371 1.436-1.84 1.165c-.472-.273-.422-1.244.1-2.19a8.7 8.7 0 0 0-1.612-.531m-1.902.504c-.189 0-.344.517-.357 1.17h-.004v.99c0 2.43-2.877 5.576-5.487 5.576c-3.04 0-7.171-.082-9.152 1.695v.203c.548.99 1.194 1.92 1.924 2.778c.735-1.238 3.027-2.404 6.338-2.428c2.68.06 4.638 1.194 5.326 2.399v.002c.45.126.931.191 1.412.189c.481.001.96-.064 1.41-.19v-.001c.69-1.205 2.646-2.34 5.326-2.399c3.312.023 5.603 1.19 6.338 2.428a17 17 0 0 0 1.926-2.777v-.204H31c-1.981-1.777-6.111-1.695-9.152-1.695c-2.61 0-5.487-3.146-5.487-5.576v-.99h-.004c-.014-.653-.166-1.17-.355-1.17M16 17.844a2.383 2.383 0 0 1 2.383 2.383A2.386 2.386 0 0 1 16 22.613a2.386 2.386 0 0 1-2.383-2.386A2.383 2.383 0 0 1 16 17.844m0 .449a1.934 1.934 0 1 0 .001 3.868A1.934 1.934 0 0 0 16 18.293m0 .361a1.575 1.575 0 1 1-.001 3.15a1.575 1.575 0 0 1 .001-3.15m-6.736 3.912c-.598.004-1.27.02-1.791.096c.025.26.09 1.094.418 1.748a6 6 0 0 1 1.62-.228c2.424.055 4.195 2.015 4.593 4.369l.005.275a10.4 10.4 0 0 0 3.782 0l.005-.275c.398-2.354 2.171-4.314 4.594-4.37a6 6 0 0 1 1.621.23c.33-.654.391-1.489.416-1.749c-.522-.076-1.19-.092-1.789-.096c-1.1.025-2.064.246-2.851.569c-.736.94-1.711 1.76-2.91 1.94l-.016.003l-.01.002a4.7 4.7 0 0 1-1.9 0l-.008-.002l-.018-.004c-1.198-.178-2.173-.998-2.91-1.94a8 8 0 0 0-2.851-.568"></svg:path>`,
})
export class LaGalacticSenateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGamepadIcon],svg[la-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7C9.617 7 4.031 9.063 4.031 9.063l-.593.218l-.063.594l-1.344 10.25c-.363 2.836 1.664 5.48 4.5 5.844c2.64.34 5.008-1.442 5.625-3.969h7.688c.62 2.527 2.984 4.309 5.625 3.969c2.836-.364 4.863-3.008 4.5-5.844l-1.344-10.25l-.063-.594l-.593-.219S22.383 7 16 7m0 2c5.484 0 10.008 1.523 10.75 1.781l1.219 9.625a3.16 3.16 0 0 1-2.75 3.563c-1.762.226-3.367-.989-3.594-2.75l-.031-.344l-.125-.875H10.53l-.125.875l-.031.344c-.227 1.761-1.832 2.976-3.594 2.75a3.16 3.16 0 0 1-2.75-3.563l1.219-9.625C5.992 10.523 10.516 9 16 9m-7 3v2H7v2h2v2h2v-2h2v-2h-2v-2zm13 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-2 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-2 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaGamepadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGasPumpIcon],svg[la-gas-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6.355 5 5 6.355 5 8v19h14v-7h2v4c0 1.645 1.355 3 3 3s3-1.355 3-3V13.812c0-.796-.313-1.53-.875-2.093L21.406 7L20 8.406l2.844 2.844C21.77 11.707 21 12.766 21 14c0 1.645 1.355 3 3 3a3 3 0 0 0 1-.188V24c0 .566-.434 1-1 1s-1-.434-1-1v-4c0-1.094-.906-2-2-2h-2V8c0-1.645-1.355-3-3-3zm0 2h8c.566 0 1 .434 1 1v4H7V8c0-.566.434-1 1-1m16 6c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M7 14h10v11H7z"></svg:path>`,
})
export class LaGasPumpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGavelIcon],svg[la-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.969 1.594l-.719.687l-7 7.031l-.719.688l4.438 4.438l.687-.72l.344-.343l2.094 2.094L3.28 27.28l1.44 1.44l11.81-11.814l2.063 2.063l-.344.343l-.719.688l4.438 4.438l.687-.72L30.375 16l-.719-.688l-3-3.03l-.687-.688l-.719.687l-.281.281L19.375 7l1-1l-.719-.688l-3-3.03zm0 2.812L17.563 6l-5.594 5.594L10.375 10zM18 8.438L23.563 14L20 17.563L14.437 12zm7.969 5.968L27.562 16l-5.593 5.594L20.375 20z"></svg:path>`,
})
export class LaGavelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGemIcon],svg[la-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.531 6L4.22 12.375l-.5.594l.5.656l11 14l.781 1l.781-1l11-14l.5-.656l-.5-.594L22.47 6zm.938 2h3.656l-2.688 4H7.125zm7.406 0h3.656l3.344 4h-4.313zM16 8.844L18.125 12h-4.25zM7.031 14h4.219l2.375 8.406zm6.282 0h5.343L16 23.313zm7.437 0h4.219l-6.594 8.375z"></svg:path>`,
})
export class LaGemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGemSolidIcon],svg[la-gem-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.531 6L4.22 12.375l-.5.594l.5.656l11 14l.781 1l.781-1l11-14l.5-.656l-.5-.594L22.47 6zm.938 2h3.656l-2.688 4H7.125zm7.406 0h3.656l3.344 4h-4.313zM16 8.844L18.125 12h-4.25zM7.031 14h4.219l2.375 8.406zm6.282 0h5.343L16 23.313zm7.437 0h4.219l-6.594 8.375z"></svg:path>`,
})
export class LaGemSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGenderlessIcon],svg[la-genderless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-4.406 0-8 3.594-8 8c0 4.066 3.066 7.438 7 7.938V28h2v-8.063c3.934-.5 7-3.87 7-7.937c0-4.406-3.594-8-8-8m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaGenderlessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGetPocketIcon],svg[la-get-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5C5.355 5 4 6.355 4 8v7c0 6.617 5.383 12 12 12s12-5.383 12-12V8c0-1.645-1.355-3-3-3zm0 2h18c.566 0 1 .434 1 1v7c0 5.535-4.465 10-10 10S6 20.535 6 15V8c0-.566.434-1 1-1m3.656 4.406c-.383 0-.77.176-1.062.469a1.467 1.467 0 0 0 0 2.094L15 19.375a1.504 1.504 0 0 0 2.125 0l5.281-5.25a1.504 1.504 0 0 0 0-2.125a1.504 1.504 0 0 0-2.125 0l-4.218 4.219l-4.344-4.344c-.293-.293-.68-.469-1.063-.469"></svg:path>`,
})
export class LaGetPocketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGgIcon],svg[la-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.594l-.719.687l-8 8l-.687.719l.687.719l8 8l.719.687l.719-.687l4-4l.687-.719l-.687-.719l-5-5l-1.438 1.438L14.562 20L12 22.563L5.437 16L12 9.437l1.281 1.282L14.72 9.28l-2-2zm8 0l-.719.687l-4 4l-.687.719l.687.719l5 5l1.438-1.438L17.437 12L20 9.437L26.563 16L20 22.563l-1.281-1.282l-1.438 1.438l2 2l.719.687l.719-.687l8-8l.687-.719l-.687-.719l-8-8z"></svg:path>`,
})
export class LaGgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGgCircleIcon],svg[la-gg-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m2.545 4.486L14.69 13.34l3.965 3.967l1.254-1.254l-2.728-2.717l1.361-1.361l3.967 3.966l-3.967 3.965l-.57-.568l-1.239 1.252l1.809 1.808L25 15.945zm-5.088.112L7 16.055l6.457 6.457l3.852-3.862l-3.965-3.966l-1.254 1.254l2.728 2.716l-1.367 1.366l-3.965-3.965l3.965-3.967l.57.57l1.245-1.244z"></svg:path>`,
})
export class LaGgCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGhostIcon],svg[la-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.938 0-3.43.508-4.5 1.344s-1.688 1.96-2.125 3c-.438 1.039-.719 2.035-1 2.75s-.516.992-.719 1.062C4.828 12.16 3 14.863 3 18v1h1c1.348 0 2.004.281 2.313.531c.308.25.43.535.5 1.032c.07.496.035 1.101.125 1.78c.046.34.117.723.343 1.095c.227.37.637.69 1.094.843c1.059.352 1.738.574 2.156.813c.418.238.668.453 1 1.156c.317.668.742 1.398 1.5 1.938c.758.539 1.778.828 3.063.812c2.101-.027 3.355-1.113 4-2.063c.324-.476.55-.886.75-1.156s.32-.375.531-.437c1.355-.407 2.23-1.094 2.719-1.875c.488-.782.582-1.547.718-2.063c.137-.515.235-.718.563-.937S26.453 20 28 20h1v-1c0-1.379.047-2.984-.563-4.5c-.609-1.516-1.996-2.855-4.28-3.375c-.024-.004-.052.008-.157-.125a3.2 3.2 0 0 1-.406-.75c-.282-.7-.551-1.723-1-2.781c-.45-1.059-1.09-2.2-2.157-3.063C19.372 3.543 17.907 3 16 3m0 2c1.54 0 2.48.395 3.188.969c.707.574 1.18 1.379 1.562 2.281s.652 1.879 1 2.75c.172.434.36.84.656 1.219s.73.75 1.282.875c1.8.41 2.468 1.148 2.875 2.156c.308.766.316 1.816.343 2.844c-1.11.093-2.02.293-2.656.718c-.844.567-1.2 1.438-1.375 2.094c-.176.657-.242 1.137-.469 1.5c-.226.364-.597.723-1.625 1.032c-.71.214-1.222.703-1.562 1.156s-.543.867-.782 1.218c-.476.704-.82 1.168-2.375 1.188c-.984.012-1.511-.18-1.875-.438c-.363-.257-.628-.632-.874-1.156c-.446-.945-1.043-1.64-1.782-2.062c-.738-.422-1.508-.63-2.531-.969c-.008-.016-.066-.09-.094-.281c-.05-.383-.02-1.059-.125-1.813s-.414-1.668-1.219-2.312c-.562-.453-1.367-.68-2.312-.813c.293-1.926 1.305-3.5 3.063-4.125c1.062-.375 1.585-1.3 1.937-2.187s.602-1.875.969-2.75s.8-1.614 1.5-2.156C13.418 5.394 14.402 5 16 5m-3 4c-.55 0-1 .672-1 1.5s.45 1.5 1 1.5s1-.672 1-1.5S13.55 9 13 9m4 0c-.55 0-1 .672-1 1.5s.45 1.5 1 1.5s1-.672 1-1.5S17.55 9 17 9"></svg:path>`,
})
export class LaGhostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGiftIcon],svg[la-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-1.645 0-3 1.355-3 3c0 .352.074.684.188 1H4v6h1v13h22V15h1V9h-5.188A3 3 0 0 0 23 8c0-1.645-1.355-3-3-3c-1.75 0-2.938 1.328-3.719 2.438c-.105.148-.187.292-.281.437c-.094-.145-.176-.29-.281-.438C14.938 6.329 13.75 5 12 5m0 2c.625 0 1.438.672 2.063 1.563c.152.218.128.23.25.437H12c-.566 0-1-.434-1-1s.434-1 1-1m8 0c.566 0 1 .434 1 1s-.434 1-1 1h-2.313c.122-.207.098-.219.25-.438C18.563 7.673 19.375 7 20 7M6 11h20v2h-9v-1h-2v1H6zm1 4h18v11h-8V16h-2v10H7z"></svg:path>`,
})
export class LaGiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGiftsIcon],svg[la-gifts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v3.234L5.516 5.143L4.484 6.857L6.39 8H3v19h6v-2H5V10h8.027c.833-.62 1.857-1 2.973-1c.352 0 .682.042 1 .102V8h-3.389l1.905-1.143l-1.032-1.714L11 7.234V4zm7 7c-1.645 0-3 1.355-3 3c0 .352.075.684.188 1H11v12h18V15h-2.188A2.9 2.9 0 0 0 27 14c0-1.645-1.355-3-3-3c-1.75 0-2.938 1.328-3.719 2.438c-.105.147-.188.294-.281.439c-.094-.145-.176-.29-.281-.44C18.937 12.328 17.75 11 16 11m0 2c.625 0 1.438.671 2.063 1.563c.152.218.129.231.25.439H16c-.566 0-1-.434-1-1A.985.985 0 0 1 16 13m8 0c.566 0 1 .434 1 1s-.434 1-1 1h-2.313c.122-.207.098-.22.25-.438C22.563 13.672 23.375 13 24 13m-11 4h6v8h-6zm8 0h6v8h-6z"></svg:path>`,
})
export class LaGiftsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitIcon],svg[la-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 0 0 0 2.75l12.063 12.063a1.955 1.955 0 0 0 2.75 0l12.063-12.063a1.947 1.947 0 0 0 0-2.75L17.374 2.562A1.92 1.92 0 0 0 16 2m0 2.031L27.969 16L16 27.969L4.031 16l8.282-8.281l1.75 1.75A2 2 0 0 0 14 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 1 0 4 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A2 2 0 0 0 22 18a2 2 0 0 0 1.999-2a2 2 0 0 0-2.5-1.938L17.937 10.5A2 2 0 0 0 16 8a2 2 0 0 0-.53.063l-1.75-1.75z"></svg:path>`,
})
export class LaGitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitAltIcon],svg[la-git-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 0 0 0 2.75l12.063 12.063a1.955 1.955 0 0 0 2.75 0l12.063-12.063a1.947 1.947 0 0 0 0-2.75L17.374 2.562A1.92 1.92 0 0 0 16 2m0 2.031L27.969 16L16 27.969L4.031 16l8.282-8.281l1.75 1.75A2 2 0 0 0 14 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 1 0 4 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A2 2 0 0 0 22 18a2 2 0 0 0 1.999-2a2 2 0 0 0-2.5-1.938L17.937 10.5A2 2 0 0 0 16 8a2 2 0 0 0-.53.063l-1.75-1.75z"></svg:path>`,
})
export class LaGitAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitSquareIcon],svg[la-git-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9.871 3.361c-.632 0-1.002.338-1.002.97c0 .642.371 1.001 1.002 1.001c.642 0 1.012-.36 1.012-1.002c0-.632-.37-.969-1.012-.969m3.113 1.055c-.12 1.208-.511 1.698-1.48 1.807v.992c.893 0 .86-.035.86.107v2.918c0 1.252.501 1.76 1.83 1.76A4.3 4.3 0 0 0 23 18.58l-.305-.982c-1.785.675-1.695-.544-1.695-.729v-2.656h1.695v-1.11H21v-1.687zm-8.255 1.799c-1.158.005-2.555.467-2.555 2.166c0 .816.415 1.393.959 1.666c-.686.63-1.014.924-1.014 1.338c0 .305.131.575.49.738c-.38.36-.609.634-.609 1.135c0 .87.772 1.383 2.775 1.383c1.938 0 3.06-.72 3.06-1.993c0-1.61-1.23-1.545-4.148-1.73l.37-.59c.74.207 3.244.274 3.244-1.85c0-.511-.207-.87-.414-1.12l1.023-.077v-.949h-2.166a4 4 0 0 0-1.015-.117m3.826.01l-.121.904c.686.239.74.205.74.434v3.277c0 .24-.011.197-.74.295V19h3.168v-.865l-.567-.076c-.163-.022-.174-.045-.174-.22v-4.614zm-3.735 1.097c1.36 0 1.393 1.94-.033 1.94c-1.437 0-1.372-1.94.033-1.94m-1.22 5.096c2.123.153 2.58.098 2.58.523c0 .882-2.864.882-2.864.065c0-.218.142-.403.284-.588"></svg:path>`,
})
export class LaGitSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGithubIcon],svg[la-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387c.602.11.82-.258.82-.578c0-.286-.011-1.04-.015-2.04c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.726.082-.726c1.203.086 1.836 1.234 1.836 1.234c1.07 1.836 2.808 1.305 3.492 1c.11-.777.422-1.305.762-1.605c-2.664-.301-5.465-1.332-5.465-5.93c0-1.313.469-2.383 1.234-3.223c-.121-.3-.535-1.523.117-3.175c0 0 1.008-.32 3.301 1.23A11.5 11.5 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402c2.293-1.55 3.297-1.23 3.297-1.23c.656 1.652.246 2.875.12 3.175c.77.84 1.231 1.91 1.231 3.223c0 4.61-2.804 5.621-5.476 5.922c.43.367.812 1.101.812 2.219c0 1.605-.011 2.898-.011 3.293c0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12"></svg:path>`,
})
export class LaGithubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGithubAltIcon],svg[la-github-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.688 5S5 6.207 5 8.25c0 1.355.309 2.07.531 2.438C3.97 12.312 3 14.515 3 17.343C3 24.586 7.59 27 16 27s13-2.414 13-9.656c0-2.926-.914-5.125-2.406-6.719A7.83 7.83 0 0 0 26.344 5c-3.102 0-5.688 2.383-5.782 2.469A21.5 21.5 0 0 0 16 7c-1.605 0-3.18.195-4.656.563C9.266 5.502 6.758 5 5.688 5m15 10.438c.843-.008 1.625.062 2.312.28c1.832.583 3 2.266 3 4.157C26 25.109 23.191 26 16 26c-5.344 0-9.688-.941-9.688-5.938c0-1.906 1.036-2.984 1.782-3.656c1.64-1.476 4.23-.75 7.906-.75c1.672 0 3.277-.203 4.688-.219zM10.5 18c-.828 0-1.5.895-1.5 2s.672 2 1.5 2s1.5-.895 1.5-2s-.672-2-1.5-2m11 0c-.828 0-1.5.895-1.5 2s.672 2 1.5 2s1.5-.895 1.5-2s-.672-2-1.5-2m-11.156.844c.234 0 .406.199.406.437c0 .239-.172.438-.406.438a.444.444 0 0 1-.438-.438c0-.238.203-.437.438-.437m11 0c.234 0 .406.199.406.437c0 .239-.172.438-.406.438a.444.444 0 0 1-.438-.438c0-.238.203-.437.438-.437"></svg:path>`,
})
export class LaGithubAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGithubSquareIcon],svg[la-github-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8.908 2C11.99 9 9 11.975 9 15.885c0 3.133 1.967 5.815 4.783 6.758c.365.064.492-.16.492-.342c0-.174-.007-1.142-.007-1.737c0 0-1.985.428-2.397-.841c0 0-.323-.818-.783-1.032c0 0-.643-.443.047-.435c0 0 .699.056 1.088.73c.618 1.095 1.655.776 2.06.594c.063-.452.247-.77.453-.951c-1.579-.174-3.174-.404-3.174-3.117c0-.778.215-1.166.667-1.666c-.072-.183-.317-.944.072-1.92c.595-.183 1.951.761 1.951.761a7 7 0 0 1 1.775-.238a7 7 0 0 1 1.778.239s1.356-.944 1.95-.762c.389.984.142 1.738.071 1.92c.452.5.73.889.73 1.666c0 2.728-1.666 2.943-3.244 3.117c.262.222.485.642.485 1.308c0 .953-.008 2.136-.008 2.366c0 .182.127.403.484.34C21.088 21.699 23 19.018 23 15.885C23 11.975 19.827 9 15.908 9m-4.345 9.486c-.056-.016-.104-.006-.12.026s.007.077.063.11c.048.023.103.016.119-.024c.016-.032-.007-.08-.063-.112zm.253.237q-.04-.011-.072.017c-.04.032-.032.095.016.15c.048.04.11.064.15.024c.04-.032.033-.094-.015-.15a.2.2 0 0 0-.079-.041m.297.367a.1.1 0 0 0-.084.008c-.048.032-.048.105 0 .168s.12.094.16.062c.047-.032.047-.112 0-.174a.15.15 0 0 0-.076-.064m.325.396a.09.09 0 0 0-.083.032c-.039.04-.023.117.04.173c.063.064.141.074.181.026c.04-.032.017-.12-.039-.176a.2.2 0 0 0-.1-.055zm.544.317c-.07-.016-.157.006-.173.062s.04.121.119.137c.07.032.158-.002.174-.057c.024-.055-.033-.118-.12-.142m1.07.025c-.078.016-.134.072-.126.135c.008.055.087.086.166.07c.087-.016.143-.07.127-.127c-.008-.056-.086-.087-.166-.078zm-.523.063c-.088 0-.15.047-.15.103c0 .063.063.112.158.104c.088 0 .15-.048.15-.104c0-.064-.078-.111-.158-.103"></svg:path>`,
})
export class LaGithubSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitkrakenIcon],svg[la-gitkraken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.12 5.002a.52.52 0 0 0-.516.293a.53.53 0 0 0 .212.691a10.11 10.11 0 0 1 5.141 8.84c0 4.27-2.615 7.92-6.31 9.399v-4.22a1.62 1.62 0 0 0 1.124-1.532c0-.6-.307-1.117-.78-1.397c.374-3.638 2.007-2.68 2.007-3.838v-.674c0-1.739-3.967-7.403-5.822-7.535a2 2 0 0 0-.344 0c-1.86.137-5.826 5.797-5.826 7.535v.678c0 1.158 1.64.196 2.01 3.838a1.6 1.6 0 0 0-.782 1.397c0 .723.479 1.327 1.12 1.533v4.219c-3.697-1.473-6.311-5.125-6.311-9.399c0-3.802 2.076-7.115 5.14-8.84a.527.527 0 0 0 .213-.691a.517.517 0 0 0-.718-.229A11.17 11.17 0 0 0 5 14.83c0 5.248 3.575 9.647 8.39 10.836v-4.76c.344.114.684.211 1.04.285v5.66c-5.86-.776-10.393-5.862-10.393-12.02c0-1.502.272-2.941.764-4.268a.525.525 0 0 0-.283-.668a.516.516 0 0 0-.692.3A13.3 13.3 0 0 0 3 14.83C3 21.927 8.535 27.716 15.473 28v-6.676c.307.018.675.023 1.054 0v6.67C23.465 27.715 29 21.927 29 14.83a13.4 13.4 0 0 0-.826-4.639a.52.52 0 1 0-.975.366a12.3 12.3 0 0 1 .764 4.27c0 6.158-4.529 11.243-10.393 12.02v-5.66a7 7 0 0 0 1.04-.285v4.76C23.424 24.477 27 20.075 27 14.826a11.17 11.17 0 0 0-5.678-9.76a.5.5 0 0 0-.203-.064zm-8.274 12.389c.59 0 1.068.485 1.068 1.084c0 .594-.472 1.084-1.068 1.084s-1.07-.49-1.07-1.084s.474-1.084 1.07-1.084m6.308.002c.587 0 1.07.48 1.07 1.084c0 .599-.478 1.084-1.07 1.084c-.587 0-1.068-.48-1.068-1.084c0-.6.477-1.084 1.068-1.084"></svg:path>`,
})
export class LaGitkrakenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitlabIcon],svg[la-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.383 1.973l-4.305 11.48l-.242.652l-2.04 5.438L16 29.875l14.203-10.332l-2.039-5.438l-4.55-12.132l-3.731 11.48h-7.766zM8.25 8.027l1.766 5.426H6.215zm15.5 0l2.035 5.426h-3.8zM5.465 15.453h5.2l3.429 10.563l-9.89-7.196zm7.3 0h6.47L16 25.403zm8.57 0h5.196l1.266 3.367l-9.895 7.196z"></svg:path>`,
})
export class LaGitlabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGitterIcon],svg[la-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v17h2V2zm6 4v24h2V6zm6 0v24h2V6zm6 0v13h2V6z"></svg:path>`,
})
export class LaGitterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlassCheersIcon],svg[la-glass-cheers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.844 4.063l-.969.28l-7.688 2.188l-.937.282l.188.687l-7.22-2.094l-.968-.281l-.281.969l-2.813 9.562c-.34 1.184-.547 2.598-.156 3.969c.316 1.11 1.11 2.176 2.344 2.813l-.907 3.28l-2.875-.843L2 26.813l7.688 2.218l.562-1.937l-2.875-.844l.906-3.25a4.62 4.62 0 0 0 3.469-1.156c1.063-.953 1.66-2.223 2-3.407l2.469-8.25l2.031 7.22v.03c.34 1.184.938 2.454 2 3.407c.867.777 2.078 1.246 3.469 1.125l.906 3.281l-2.875.844l.563 1.937L30 25.813l-.563-1.938l-2.875.844l-.937-3.282c1.234-.636 2.027-1.703 2.344-2.812c.39-1.371.215-2.785-.125-3.969l-2.719-9.625zM23.5 6.53L24.75 11H18.5l-.781-2.813zM8.625 7.625l5.75 1.625l-.813 2.75h-6.25zM19.063 13h6.25l.625 2.219c.269.93.363 2.035.125 2.875c-.239.84-.692 1.43-1.907 1.781c-1.215.352-1.914.082-2.562-.5c-.649-.582-1.168-1.57-1.438-2.5zM6.719 14h6.25l-1.125 3.875h-.031c-.27.93-.758 1.918-1.407 2.5c-.648.582-1.347.852-2.562.5s-1.668-.941-1.907-1.781c-.238-.84-.144-1.946.125-2.875z"></svg:path>`,
})
export class LaGlassCheersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlassMartiniIcon],svg[la-glass-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v1.34l10 13V26h-5v2h12v-2h-5v-6.66l10-13V5zm3.031 2H23.97l-1.54 2H11.92l1.54 2h7.434L16 17.36z"></svg:path>`,
})
export class LaGlassMartiniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlassMartiniAltIcon],svg[la-glass-martini-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4A5.503 5.503 0 0 0 3 9.5C3 12.535 5.465 15 8.5 15c.813 0 1.578-.203 2.281-.531L16 21.344V27h-4v2h10v-2h-4v-5.656l8.813-11.625l.187-.281V8H13.75c-.605-2.32-2.766-4-5.25-4m0 2c1.39 0 2.59.84 3.125 2H7v1.438l.188.28l2.343 3.095A3.1 3.1 0 0 1 8.5 13A3.46 3.46 0 0 1 5 9.5A3.46 3.46 0 0 1 8.5 6m1.438 4h14.124l-1.5 2H13.5l1.5 2h6.031L17 19.344z"></svg:path>`,
})
export class LaGlassMartiniAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlassWhiskeyIcon],svg[la-glass-whiskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.818 7l3.334 20h15.696L27.18 7zm2.364 2H24.82l-1.666 10H10.67l.33 2h11.82l-.666 4H9.848z"></svg:path>`,
})
export class LaGlassWhiskeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlassesIcon],svg[la-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.063 6l-.25.656L1.313 16H0v2h1v2c0 3.297 2.703 6 6 6h2c3.297 0 6-2.703 6-6v-3c0-.566.434-1 1-1s1 .434 1 1v3c0 3.297 2.703 6 6 6h2c3.297 0 6-2.703 6-6v-2h1v-2h-1.313l-3.5-9.344l-.25-.656H25l-.281.375l-2.5 3l1.562 1.25l1.907-2.313L28.563 16h-9.75c-.418-1.156-1.52-2-2.813-2s-2.395.844-2.813 2h-9.75l2.876-7.688l1.906 2.313l1.562-1.25l-2.5-3L7 6zM3 18h10v2c0 2.203-1.797 4-4 4H7c-2.203 0-4-1.797-4-4zm16 0h10v2c0 2.203-1.797 4-4 4h-2c-2.203 0-4-1.797-4-4z"></svg:path>`,
})
export class LaGlassesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlideIcon],svg[la-glide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8.922 2c-3.14 0-4.729 3.098-4.729 5.406c0 2.395 1.4 3.723 3.778 3.723c.328 0 .302-.027.302.1c-.46 3.515-2.472 3.629-2.472 2.578c0-1.068 1.225-1.598 1.238-1.664c-.009-.333-1.283-.752-1.607-.752c-.924 0-1.432 1.444-1.432 2.214C11 22.02 11.892 23 13.332 23c2.11 0 3.652-2.176 4.129-4.014c.412-1.65.305-1.725.537-1.843c.876-.442 1.226-.735 2.215-.735c.486 0 .832.102 1.607.229c.08.003.18-.077.18-.155c0-.223-.91-1.65-1.115-1.728a1.6 1.6 0 0 0-.42-.102c-1.011 0-1.351.46-2.205.942l-.024-.024c.188-1.287.641-2.504.641-3.826C18.877 9.791 17.835 9 15.922 9m.139 1.516c.5 0 .539.363.539.783c0 .385-.072.773-.15 1.154a951 951 0 0 0-.757 3.66c-.06.276-.362.215-.6.215c-1.041 0-1.335-1.136-1.335-1.99c0-1.283.49-2.982 1.685-3.639c.188-.109.404-.183.618-.183"></svg:path>`,
})
export class LaGlideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlideGIcon],svg[la-glide-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.035 3C10.19 3 7 8.773 7 13.074c0 4.464 2.837 6.938 7.27 6.938c.609 0 .558-.05.558.193c-.858 6.546-4.611 6.76-4.611 4.805c0-1.991 2.75-2.486 2.775-2.608C12.976 21.782 10.604 21 10 21c-1.721.005-3 2.108-3 3.535C7 27.171 8.54 29 11.217 29c3.93 0 6.804-3.952 7.687-7.385c.767-3.072.57-3.212 1-3.431c1.635-.823 2.921-.612 4.764-.612c.904 0 1.548.189 2.99.428c.147 0 .34-.147.34-.295c.001-.406-1.617-3.365-1.998-3.512c-.178-.07-.588-.193-.781-.193c-1.884 0-3.237.384-4.826 1.283l-.045-.045C20.704 12.836 22 10.285 22 7.822C22 4.192 19.6 3 16.035 3m.254 2.828c.945 0 1.477.39 1.477 1.172c-.005.726-.138 1.446-.286 2.152c-.472 2.27-1.404 4.838-1.87 7.108c-.118.518-.676.394-1.118.394c-1.945 0-2.492-2.122-2.492-3.71c0-2.388.919-5.55 3.143-6.774c.355-.208.75-.342 1.146-.342"></svg:path>`,
})
export class LaGlideGIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlobeIcon],svg[la-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2a10 10 0 0 1 5.344 1.563l-.813.093l.188 2l-1.063-.469l-.875.75l.157 2.063l2.156-.688l2.687.876l-.687 1.25l-1.625-1l-1.75.25L18 13.967l-.969 3l1.938 1.595s1.988-.344 2.093-.344c.106 0 .844 1.812.844 1.812l-1.593 5c-1.301.621-2.77.969-4.313.969c-.316 0-.629-.035-.938-.063l-1.093-1.906l1.062-4L11 17H7.281l-.968-1.969L9 12.906L13 11l-.594-2.656l1.719-.375l.813 1.125l3-.563l-.532-2.312l-2.218-.157C15.453 6.043 15.726 6 16 6m-1.125.063l-1.563.656l-.75-.125a10 10 0 0 1 2.313-.532zM6.062 16.78l.97 1.125v2.063l1.874 2.062h1.156l2.844 3.5c-3.773-1.222-6.527-4.64-6.844-8.75"></svg:path>`,
})
export class LaGlobeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlobeAfricaIcon],svg[la-globe-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c.338 0 .67.02 1 .05V7h-2l-1 3h-1v1h5l1 1h1v1l-1 1l-4-1l-4 3v3l2 2h3v2.5l1 2.5h1l3-4v-1l1-2v-1h-1l-1-2l1-1l1.5 1l2.5-1v-1h1.809c.12.65.191 1.316.191 2c0 6.065-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5"></svg:path>`,
})
export class LaGlobeAfricaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlobeAmericasIcon],svg[la-globe-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c.338 0 .67.02 1 .05V6h2v-.574a11.03 11.03 0 0 1 6 4.27V13l1 2v1h1q-.001.55-.055 1.086c-.009.096-.029.188-.04.283c-.034.263-.068.524-.12.781c-.019.096-.044.19-.066.286c-.058.254-.12.506-.196.753q-.04.127-.084.252a11 11 0 0 1-.275.752q-.046.107-.094.213q-.166.383-.36.75q-.046.09-.097.174a11 11 0 0 1-1.076 1.592l-.09.111q-.293.349-.611.672l-.092.096a11 11 0 0 1-.678.617c-.033.028-.061.057-.095.084c-.234.192-.48.37-.729.543c-.039.027-.074.058-.113.084c-.24.16-.488.307-.74.45a10.9 10.9 0 0 1-3.871 1.302l4.011-3.024l1.1-1.1L24 20v-1l-2-1h-1l-2-2h-2l-1 1v1l-1 1v2l2 1.6l-1.977 4.351C9.414 26.453 5 21.735 5 16c0-3.408 1.559-6.459 4-8.479V8L8 9v2.2L9 15l5 2h1v-1l-3-1v-2h3l1-2.5L18 9V8l-3-2l-1.438-.719A11 11 0 0 1 16 5m-1 9v1h2v-1z"></svg:path>`,
})
export class LaGlobeAmericasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlobeAsiaIcon],svg[la-globe-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m.406 2.031c.961.04 1.88.18 2.75.469l-.468.656l.375.782l-.5 1l2.125.28l.78 3.626l1.72 2.344l1.53.968l-.593-1.656l.563-.688l1.156.313c.113.605.156 1.238.156 1.875c0 .148-.023.293-.031.438l-.094-.188l-.969.406l-.25.625l-.531.188l.188 1.625l.406.593l-.282.782l-1.5 2.375l-.125.468A9.97 9.97 0 0 1 16 26a9.96 9.96 0 0 1-7.625-3.531L6.969 19l.812-1.375l-1.218-.688l1.375-.656l.062-.75l-.406-1.062l.781.094l.781 1.187l.719.344l-.219-.813l.75-.75l1.219.875l.656-.531L12 13.5l.969-1.375l-.125-1.375l1.187-.719l-.812-2l2.25-.125l1.25-1.593zM15 15.594l-2.656 2l.187 2.5l.688.593l1.531-.812l.781.219l1.344 1.437l.813-.218l.843-2L18 17.938l-1.063-2.063l-.78 1.25zm5 4.219l-.188.062l-.062 1.281l-.438.594l.5.469l.625-.719zm-1.094 2.437l-1.281 1.469l.344.375l1.5-1.438z"></svg:path>`,
})
export class LaGlobeAsiaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGlobeEuropeIcon],svg[la-globe-europe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c2.103 0 4.063.605 5.736 1.633l-.236.566l1.176 1.176l-1.102 1.1L20 8h-2l-2 2.5l1 2.2l1-.7v-1h1l1.1.9L19 13l-4 2h-1v2h1l2-1l1 1h2v-1l.8-1.2L23 14v2h-2v1h2l2 3l1-1v-1h-1v-1h1l.96-.207A10.9 10.9 0 0 1 25 22.305V22h-1.1l-2.4-4l-2.5 1l-3-1l-3 1l-1 3l1 2h2l1-1l1 1v2.95c-.33.03-.662.05-1 .05c-6.065 0-11-4.935-11-11c0-.927.129-1.823.346-2.684L5.9 13H7V9.695c.167-.237.337-.472.521-.695h.899l.437-1.35a11 11 0 0 1 2.053-1.392L10 9h2l2-2V6h-1l-1 1V5.764A10.9 10.9 0 0 1 16 5m-2 6v2h1v-2z"></svg:path>`,
})
export class LaGlobeEuropeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoforeIcon],svg[la-gofore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4C10.373 4 5 9.373 5 16s5.373 12 12 12c3.585 0 6.782-1.592 8.979-4.086c-.116-1.795-1.489-3.837-3.979-3.902v.853C20.729 22.175 18.964 23 17 23c-3.86 0-7-3.14-7-7s3.14-7 7-7a6.97 6.97 0 0 1 4.457 1.607l3.506-3.568A11.94 11.94 0 0 0 17 4m-1 9v5h6c2.21 0 3.418.796 4 2c0-2.631.002-7-4-7z"></svg:path>`,
})
export class LaGoforeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGolfBallIcon],svg[la-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C10.488 3 6 7.488 6 13c0 3.684 2.023 6.89 5 8.625V22l-.031 1H11c.047 0 .988.027 1.969.625c.867.527 1.777 1.41 2 3.375H7v2h18v-2h-7.969c.223-1.965 1.133-2.848 2-3.375c.98-.598 1.922-.625 1.969-.625h.031L21 22v-.375c2.977-1.734 5-4.941 5-8.625c0-5.512-4.488-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8m3 6c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-2 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-5 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-2.719 7h1.438A6 6 0 0 0 16 24a6 6 0 0 0-.719-1"></svg:path>`,
})
export class LaGolfBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoodreadsIcon],svg[la-goodreads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8.5 2c-2.481 0-4.5 2.243-4.5 5s2.019 5 4.5 5c1.421 0 2.675-.75 3.5-1.896V18.5c0 1.93-1.57 3.5-3.5 3.5a3.5 3.5 0 0 1-3.148-2h-1.077c.621 1.742 2.272 3 4.225 3c2.481 0 4.5-2.019 4.5-4.5V10h-1v.896C18.175 9.75 16.921 9 15.5 9m0 1c1.93 0 3.5 1.794 3.5 4s-1.57 4-3.5 4s-3.5-1.794-3.5-4s1.57-4 3.5-4"></svg:path>`,
})
export class LaGoodreadsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoodreadsGIcon],svg[la-goodreads-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-4.411 0-8 4.262-8 9.5s3.589 9.5 8 9.5c2.39 0 4.533-1.257 6-3.236V22c0 2.757-2.691 5-6 5c-2.455 0-4.567-1.236-5.494-3H8.338c.986 2.887 4.045 5 7.662 5c4.411 0 8-3.141 8-7V4h-2v2.236C20.533 4.257 18.39 3 16 3m0 2c3.309 0 6 3.364 6 7.5S19.309 20 16 20s-6-3.364-6-7.5S12.691 5 16 5"></svg:path>`,
})
export class LaGoodreadsGIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoogleIcon],svg[la-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.684 15.406c0-1.976 3.21-2.148 3.21-6.011c0-2.797-1.945-4.137-2.144-4.258h1.938L23.625 4h-6.277c-6.387 0-7.41 4.469-7.41 5.95c0 2.206 1.726 4.948 5.199 4.948q.474 0 1.008-.058c-.06.164-.31.726-.31 1.234c0 1.063.68 1.738.915 2.149c-3.8-.035-8.375 1.613-8.375 5.28c0 1.34 1.152 4.497 6.566 4.497c6.176 0 8.047-3.813 8.047-5.95c-.004-4.081-4.304-4.757-4.304-6.644m-2.098-1.363c-2.16 0-3.984-2.719-3.984-5.625c0-.863.414-3.371 2.804-3.371c3.078 0 3.828 4.562 3.828 5.805c0 .289.203 3.191-2.648 3.191m-.148 12.637c-1.981 0-5.399-.844-5.399-3.844c0-1.04.606-3.754 5.863-3.754q.405.001.703.031c1.094.817 3.36 1.996 3.36 4.168c0 .985-.586 3.399-4.527 3.399"></svg:path>`,
})
export class LaGoogleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoogleDriveIcon],svg[la-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.438 5l-.282.469l-8 13l-.312.5l.281.531l4 7l.281.5h17.188l.281-.5l4-7l.281-.531l-.312-.5l-8-13L20.562 5zm2.343 2h5.656l6.782 11h-5.657zM12 7.906l2.969 4.844L8.03 24.031L5.156 19zm4.156 6.75L18.22 18h-4.125zM12.875 20h13.406l-2.875 5H9.781z"></svg:path>`,
})
export class LaGoogleDriveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGooglePlayIcon],svg[la-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 3c-.074-.008-.14.027-.219.031c-.066.004-.12-.011-.187 0h-.125q-.165.037-.313.125a1 1 0 0 0-.281.219C6.235 3.703 6 4.211 6 4.688v22.78c0 .493.219 1.087.75 1.376c.04.02.086.015.125.031a1.63 1.63 0 0 0 1.438-.125h.03L17.75 23l4.781-2.875s4.055-2.453 4.594-2.781c.457-.278.883-.805.875-1.438s-.445-1.101-.875-1.344c-.137-.078-1.34-.8-2.438-1.468c-1.05-.64-1.972-1.196-2.062-1.25a1 1 0 0 0-.094-.063L17.75 8.875s-8.7-5.277-9.219-5.594A2 2 0 0 0 7.75 3M8 6.094l9.438 9.843L8 25.782zm4.813 2.125a2264 2264 0 0 1 3.906 2.375l3.687 2.25l-1.593 1.656zm9.343 5.687c.383.235.735.442 1.5.906c.836.508 1.418.833 1.907 1.126c-.918.554-2.66 1.628-3.375 2.062l-1.97-2.063zm-3.343 3.5l1.593 1.657l-3.687 2.25s-2.192 1.316-3.938 2.375z"></svg:path>`,
})
export class LaGooglePlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGooglePlusIcon],svg[la-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7c-4.973 0-9 4.027-9 9s4.027 9 9 9s9-4.027 9-9c0-.617-.066-1.219-.188-1.8l-.046-.2H11v3h6c-.477 2.836-3.027 5-6 5c-3.313 0-6-2.688-6-6c0-3.313 2.688-6 6-6c1.5 0 2.867.555 3.922 1.465l2.148-2.106A8.96 8.96 0 0 0 11 7m14 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaGooglePlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGooglePlusGIcon],svg[la-google-plus-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7c-4.973 0-9 4.027-9 9s4.027 9 9 9s9-4.027 9-9c0-.617-.066-1.219-.188-1.8l-.046-.2H11v3h6c-.477 2.836-3.027 5-6 5c-3.313 0-6-2.688-6-6c0-3.313 2.688-6 6-6c1.5 0 2.867.555 3.922 1.465l2.148-2.106A8.96 8.96 0 0 0 11 7m14 4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaGooglePlusGIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGooglePlusSquareIcon],svg[la-google-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm6.594 4A4.59 4.59 0 0 0 9 15.584a4.593 4.593 0 0 0 4.594 4.594c2.644 0 4.406-1.857 4.406-4.479c0-.293-.031-.468-.084-.699h-4.322v1.518h2.601c-.104.67-.786 1.972-2.601 1.972c-1.563 0-2.842-1.29-2.842-2.894s1.279-2.907 2.842-2.907c.89 0 1.49.388 1.826.713l1.248-1.197A4.38 4.38 0 0 0 13.594 11m6.736 3v1.33H19v1.34h1.33V18h1.34v-1.33H23v-1.34h-1.33V14z"></svg:path>`,
})
export class LaGooglePlusSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGoogleWalletIcon],svg[la-google-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3.5c-.578 0-1.145.16-1.656.438a3.483 3.483 0 0 0-1.407 4.718c.004.012.45.946.875 2.469c-2.125-3.063-4.39-4.676-4.5-4.75c-.015-.016-.046-.016-.062-.031a1 1 0 0 0-.094-.063C14.543 5.793 13.796 5.5 13 5.5a3.46 3.46 0 0 0-1.969.625a3.494 3.494 0 0 0-.906 4.844s.254.449.531 1.094a12 12 0 0 0-1.062-.75C8.184 10.44 7.004 10 6 10c-1.645 0-3 1.355-3 3c0 1.008.613 1.79 1.281 2.344s1.453 1.023 2.25 1.562c1.485 1 2.973 2.2 3.813 4.469c-.223.523-.403.93-.406.938c-.938 1.66-.333 3.769 1.343 4.718A3.5 3.5 0 0 0 13 27.5c1.258 0 2.41-.688 3.031-1.781c.164-.29 1.114-2.055 1.782-4.594c.421 1.262.785 2.898.687 4.813a1 1 0 0 0 .063.593c.003.02-.004.043 0 .063A3.49 3.49 0 0 0 22 29.5a3.49 3.49 0 0 0 3.188-2.063c.234-.53 2.312-5.34 2.312-11.343c0-6.145-2.188-10.328-2.438-10.782A3.48 3.48 0 0 0 22 3.5m0 2c.531 0 1.04.285 1.313.781c.09.164 2.187 4.055 2.187 9.813c0 5.695-2.04 10.336-2.125 10.531c-.25.559-.8.875-1.375.875a1.5 1.5 0 0 1-.625-.125c-.758-.34-1.086-1.242-.75-2c.027-.063 1.637-3.754 1.844-8.344a1 1 0 0 0 .031-.531c.004-.137 0-.27 0-.406c0-4.95-1.793-8.34-1.813-8.375a1.496 1.496 0 0 1 .594-2.032c.23-.125.477-.187.719-.187m-9 2c.355 0 .691.137.969.375l.031.031c.078.074.156.157.219.25c.094.133 2.281 3.32 2.281 8.031c0 4.637-2.098 8.407-2.188 8.563c-.277.488-.789.75-1.312.75c-.25 0-.516-.055-.75-.188c-.719-.406-.969-1.34-.563-2.062c.028-.047 1.813-3.25 1.813-7.063c0-3.73-1.703-6.316-1.719-6.343a1.476 1.476 0 0 1 .375-2.063c.258-.18.551-.281.844-.281m4.969 4.469c.949 1.304 1.867 2.898 2.5 4.812a23 23 0 0 1-.594 4.344c-.547-1.906-1.207-3.07-1.438-3.438a17.3 17.3 0 0 0-.469-5.719zM6 12c.102 0 1.36.309 2.531 1.031c1.094.676 2.223 1.668 2.969 3v.157c0 .882-.113 1.722-.281 2.5c-1.051-1.59-2.399-2.653-3.563-3.438c-.86-.578-1.629-1.05-2.093-1.438C5.098 13.427 5 13.242 5 13c0-.566.434-1 1-1"></svg:path>`,
})
export class LaGoogleWalletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGopuramIcon],svg[la-gopuram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v5H8v4H6v6H4v7h5v-7h1v-6h1v-4h2v4h-1v6h-1v7h2v-2a3 3 0 1 1 6 0v2h2v-7h-1v-6h-1v-4h2v4h1v6h1v7h5v-7h-2v-6h-2v-4h-1V5h-2v2h-2V5h-2v2h-2V5h-2v2h-2V5zm7 6a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1m0 5a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class LaGopuramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGraduationCapIcon],svg[la-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.875l-.469.25l-13.5 7L.312 13L2 13.844v8.437c-.598.348-1 .98-1 1.719a1.999 1.999 0 1 0 4 0c0-.738-.402-1.371-1-1.719v-7.406l2 1.031V21c0 .441.203.84.438 1.094s.519.406.812.562c.59.309 1.29.528 2.156.719c1.735.387 4.047.625 6.594.625s4.86-.238 6.594-.625c.867-.191 1.566-.41 2.156-.719c.293-.156.578-.308.813-.562A1.66 1.66 0 0 0 26 21v-5.094l3.969-2.031L31.687 13l-1.718-.875l-13.5-7zm0 2.25L27.313 13l-1.782.906a3 3 0 0 0-.781-.562c-.586-.309-1.29-.528-2.156-.719C20.864 12.238 18.559 12 16 12s-4.863.238-6.594.625c-.867.191-1.57.41-2.156.719a3 3 0 0 0-.781.562L4.687 13zM16 14c2.441 0 4.637.223 6.156.563c.758.167 1.367.363 1.688.53c.101.055.117.095.156.126v3.812a11 11 0 0 0-1.406-.406C20.859 18.238 18.547 18 16 18s-4.86.238-6.594.625c-.531.117-.988.254-1.406.406V15.22c.04-.031.055-.07.156-.125c.32-.168.93-.364 1.688-.531C11.364 14.223 13.559 14 16 14m0 6c2.426 0 4.633.223 6.156.563a7 7 0 0 1 1.375.437a7 7 0 0 1-1.375.438c-1.523.34-3.73.562-6.156.562s-4.633-.223-6.156-.563A7 7 0 0 1 8.469 21a7 7 0 0 1 1.375-.438C11.367 20.223 13.574 20 16 20"></svg:path>`,
})
export class LaGraduationCapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGratipayIcon],svg[la-gratipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-3.5 6a2.497 2.497 0 0 0-2.5 2.5c0 .527.156 1.035.438 1.438c0 .003.03 0 .03 0L16 22.25l5.531-6.313l.032-.03c.28-.403.437-.88.437-1.407c0-1.383-1.117-2.5-2.5-2.5c-1.766 0-2.188 1.688-3.5 1.688c-1.313 0-1.734-1.688-3.5-1.688"></svg:path>`,
})
export class LaGratipayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGravIcon],svg[la-grav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-.11 2.02c-.264.004-.543.15-.71.482l.017-.022c-.21.503.212 2.485.973 3.81c-.106.058-.173.115-.338.28c-.913.41-2.377 2.551-2.377 2.551c-1.192.457-3.263 1.82-2.984 3.037a.6.6 0 0 0 .127.317a2.5 2.5 0 0 0-.352.351c-.503.584-.224 1.487.748 1.031c.668-.304 1.252-.854 1.535-1.285c0 0-.231-.21-.687-.185c1.17-.28 1.465-.108 1.953-.051c.338.165.338-1.451.338-1.451c0-.622-.093-1.31-.469-1.754c.53.516 1.23 1.381 1.184 2.56c-.034.774-.643.973-.643.973c-.385.702-1.827 2.787-1.285 4.482c0 0-.41-.628-.432-.933c-.736.82-1.965 2.211-1.039 2.726c1.125.622 4.601-3.746 5.336-6.017c1.463-.88 2.342-2 2.701-2.748c.928 1.84 4.21 3.74 4.455 2.238c.106-.68-.854-.703-1.066-1.088c-.575-1.019-1.352-1.298-2.486-1.027c.49-.338.994-.258.994-.258c.013-.27 0-.55-.397-1.053c.165-.529.012-.947.012-.947a2.43 2.43 0 0 0 1.23-1.826a2.4 2.4 0 0 0-2.105-2.656c-.935-.106-1.849.325-2.297 1.086c-.98 1.696.06 2.999.947 3.443c-.609-.06-1.449-.504-1.695-1.451c-.24-.94.023-1.827.266-2.367c0 0-.545-.454-.698-.586c0 0-.585 0-1.04.224c.502-.643 1.066-.61 1.066-.61c0-.27-.025-.628-.152-.911a.68.68 0 0 0-.63-.365m3.58 2.273c.418.045.821.317 1.225.697c.503.478 1.239 1.052.727 2.037c-.53.994-1.906 1.405-2.752.809c-.841-.61-1.43-1.828-.504-2.88c.457-.527.888-.708 1.305-.663zm.909 1.535c-.315.041-.595.515-.348.807c.312.38 1.357.101.655-.682a.34.34 0 0 0-.307-.125m-3.2 2.582c.128 0 .257.048.356.14l.445.458a.493.493 0 0 1 0 .687l-.41.41a.49.49 0 0 1-.703 0l-.443-.443a.51.51 0 0 1 0-.701l.41-.41a.5.5 0 0 1 .346-.14z"></svg:path>`,
})
export class LaGravIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGreaterThanIcon],svg[la-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2.156L22.531 16L6 23.844V26l20-9.219V15.22z"></svg:path>`,
})
export class LaGreaterThanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGreaterThanEqualIcon],svg[la-greater-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v2.156L22.531 14L6 20.844V23l20-8.219V13.22zm0 20v2h20v-2z"></svg:path>`,
})
export class LaGreaterThanEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrimaceIcon],svg[la-grimace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M12 17c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 2h1v2h-1a1 1 0 0 1 0-2m3 0h2v2h-2zm4 0h1a1 1 0 0 1 0 2h-1z"></svg:path>`,
})
export class LaGrimaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrimaceSolidIcon],svg[la-grimace-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M12 17c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 2h1v2h-1a1 1 0 0 1 0-2m3 0h2v2h-2zm4 0h1a1 1 0 0 1 0 2h-1z"></svg:path>`,
})
export class LaGrimaceSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinIcon],svg[la-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinAltIcon],svg[la-grin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 6a1.5 3 0 0 0 0 6a1.5 3 0 0 0 0-6m9 0a1.5 3 0 0 0 0 6a1.5 3 0 0 0 0-6M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinAltSolidIcon],svg[la-grin-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 6a1.5 3 0 0 0 0 6a1.5 3 0 0 0 0-6m9 0a1.5 3 0 0 0 0 6a1.5 3 0 0 0 0-6M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinBeamIcon],svg[la-grin-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinBeamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinBeamSolidIcon],svg[la-grin-beam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinBeamSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinBeamSweatIcon],svg[la-grin-beam-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13c0-2.054-.492-3.992-1.344-5.72a4.4 4.4 0 0 1-1.4 1.773C26.73 13.28 27 14.608 27 16c0 6.065-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5c1.351 0 2.64.256 3.838.703c.26-.592.56-1.2.877-1.805A12.9 12.9 0 0 0 16 3m7.5 0S21 7.275 21 8.6s1.12 2.4 2.5 2.4S26 9.925 26 8.6S23.5 3 23.5 3M9 14v2h5v-2zm9 0v2h5v-2z"></svg:path>`,
})
export class LaGrinBeamSweatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinBeamSweatSolidIcon],svg[la-grin-beam-sweat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13c0-2.054-.492-3.992-1.344-5.72a4.4 4.4 0 0 1-1.4 1.773C26.73 13.28 27 14.608 27 16c0 6.065-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5c1.351 0 2.64.256 3.838.703c.26-.592.56-1.2.877-1.805A12.9 12.9 0 0 0 16 3m7.5 0S21 7.275 21 8.6s1.12 2.4 2.5 2.4S26 9.925 26 8.6S23.5 3 23.5 3M9 14v2h5v-2zm9 0v2h5v-2z"></svg:path>`,
})
export class LaGrinBeamSweatSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinHeartsIcon],svg[la-grin-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-5.5 5A1.5 1.5 0 0 0 9 12.5c0 .094.008.184.031.281c.043.239.14.442.281.625C10.063 14.7 12 16 12 16s3-1.906 3-3.5a1.5 1.5 0 0 0-3 0a1.5 1.5 0 0 0-1.5-1.5m8 0a1.5 1.5 0 0 0-1.5 1.5c0 .094.008.184.031.281c.043.239.14.442.282.625C18.063 14.7 20 16 20 16s1.988-1.29 2.719-2.625c.16-.297.281-.586.281-.875a1.5 1.5 0 0 0-3 0a1.5 1.5 0 0 0-1.5-1.5m-7.688 8l-1.718 1c1.383 2.387 3.953 4 6.906 4s5.523-1.613 6.906-4l-1.718-1A5.98 5.98 0 0 1 16 22a5.98 5.98 0 0 1-5.188-3"></svg:path>`,
})
export class LaGrinHeartsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinHeartsSolidIcon],svg[la-grin-hearts-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-5.5 5A1.5 1.5 0 0 0 9 12.5c0 .094.008.184.031.281c.043.239.14.442.281.625C10.063 14.7 12 16 12 16s3-1.906 3-3.5a1.5 1.5 0 0 0-3 0a1.5 1.5 0 0 0-1.5-1.5m8 0a1.5 1.5 0 0 0-1.5 1.5c0 .094.008.184.031.281c.043.239.14.442.282.625C18.063 14.7 20 16 20 16s1.988-1.29 2.719-2.625c.16-.297.281-.586.281-.875a1.5 1.5 0 0 0-3 0a1.5 1.5 0 0 0-1.5-1.5m-7.688 8l-1.718 1c1.383 2.387 3.953 4 6.906 4s5.523-1.613 6.906-4l-1.718-1A5.98 5.98 0 0 1 16 22a5.98 5.98 0 0 1-5.188-3"></svg:path>`,
})
export class LaGrinHeartsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinSolidIcon],svg[la-grin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinSquintIcon],svg[la-grin-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinSquintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinSquintSolidIcon],svg[la-grin-squint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaGrinSquintSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinSquintTearsIcon],svg[la-grin-squint-tears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16c0 3.88 1.718 7.358 4.422 9.742c.192-.49.482-1.118.887-1.89A10.97 10.97 0 0 1 5 16C5 9.935 9.935 5 16 5c3.073 0 5.854 1.27 7.852 3.309c.773-.405 1.4-.696 1.89-.887C23.358 4.718 19.88 3 16 3m11.5 6c-.828 0-3.5 1.5-3.5 1.5s2.672 1.5 3.5 1.5a1.5 1.5 0 0 0 0-3m-8.207.293l-4 4l1.414 1.414l4-4zm4.277 4.137L13.43 23.57c.81.28 1.67.43 2.57.43c4.42 0 8-3.58 8-8c0-.9-.15-1.76-.43-2.57m5.221.316c-.4.16-.834.254-1.291.254a3 3 0 0 1-.703-.086c.13.676.203 1.372.203 2.086c0 6.065-4.935 11-11 11c-.714 0-1.41-.073-2.086-.203c.083.368.086.582.086.703c0 .457-.094.891-.254 1.291C14.48 28.92 15.23 29 16 29c7.168 0 13-5.832 13-13c0-.77-.08-1.52-.209-2.254m-15.498 1.547l-4 4l1.414 1.414l4-4zM10.5 24S9 26.672 9 27.5a1.5 1.5 0 0 0 3 0c0-.828-1.5-3.5-1.5-3.5"></svg:path>`,
})
export class LaGrinSquintTearsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinSquintTearsSolidIcon],svg[la-grin-squint-tears-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16c0 3.88 1.718 7.358 4.422 9.742c.192-.49.482-1.118.887-1.89A10.97 10.97 0 0 1 5 16C5 9.935 9.935 5 16 5c3.073 0 5.854 1.27 7.852 3.309c.773-.405 1.4-.696 1.89-.887C23.358 4.718 19.88 3 16 3m11.5 6c-.828 0-3.5 1.5-3.5 1.5s2.672 1.5 3.5 1.5a1.5 1.5 0 0 0 0-3m-8.207.293l-4 4l1.414 1.414l4-4zm4.277 4.137L13.43 23.57c.81.28 1.67.43 2.57.43c4.42 0 8-3.58 8-8c0-.9-.15-1.76-.43-2.57m5.221.316c-.4.16-.834.254-1.291.254a3 3 0 0 1-.703-.086c.13.676.203 1.372.203 2.086c0 6.065-4.935 11-11 11c-.714 0-1.41-.073-2.086-.203c.083.368.086.582.086.703c0 .457-.094.891-.254 1.291C14.48 28.92 15.23 29 16 29c7.168 0 13-5.832 13-13c0-.77-.08-1.52-.209-2.254m-15.498 1.547l-4 4l1.414 1.414l4-4zM10.5 24S9 26.672 9 27.5a1.5 1.5 0 0 0 3 0c0-.828-1.5-3.5-1.5-3.5"></svg:path>`,
})
export class LaGrinSquintTearsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinStarsIcon],svg[la-grin-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4 5.268l-.875 1.964L9 12.465l1.59 1.428L10.143 16L12 14.93L13.857 16l-.447-2.107L15 12.465l-2.125-.233zm8 0l-.875 1.964l-2.125.233l1.59 1.428L18.143 16L20 14.93L21.857 16l-.447-2.107L23 12.465l-2.125-.233zM10.81 19l-1.72 1a8.1 8.1 0 0 0 2.02 2.316a8 8 0 0 0 2.761 1.395A8 8 0 0 0 16 24c2.212 0 4.21-.906 5.658-2.367A8 8 0 0 0 22.91 20l-1.72-1a5.996 5.996 0 0 1-6.795 2.783a5.9 5.9 0 0 1-2.075-1.047A6.1 6.1 0 0 1 10.81 19"></svg:path>`,
})
export class LaGrinStarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinStarsSolidIcon],svg[la-grin-stars-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4 5.268l-.875 1.964L9 12.465l1.59 1.428L10.143 16L12 14.93L13.857 16l-.447-2.107L15 12.465l-2.125-.233zm8 0l-.875 1.964l-2.125.233l1.59 1.428L18.143 16L20 14.93L21.857 16l-.447-2.107L23 12.465l-2.125-.233zM10.81 19l-1.72 1a8.1 8.1 0 0 0 2.02 2.316a8 8 0 0 0 2.761 1.395A8 8 0 0 0 16 24c2.212 0 4.21-.906 5.658-2.367A8 8 0 0 0 22.91 20l-1.72-1a5.996 5.996 0 0 1-6.795 2.783a5.9 5.9 0 0 1-2.075-1.047A6.1 6.1 0 0 1 10.81 19"></svg:path>`,
})
export class LaGrinStarsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTearsIcon],svg[la-grin-tears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.87 3 3.067 8.772 3.006 15.889a23 23 0 0 1 2.035-.692C5.454 9.507 10.205 5 16 5s10.546 4.506 10.959 10.197q1.173.346 2.035.692C28.934 8.772 23.13 3 16 3M9 14v2h5v-2zm9 0v2h5v-2zM6 17s-2.97.835-3.559 1.424a1.51 1.51 0 0 0 2.135 2.135C5.166 19.969 6 17 6 17m20 0s.835 2.97 1.424 3.559a1.51 1.51 0 0 0 2.135-2.135C28.969 17.834 26 17 26 17M9 19s1.61 5 7 5s7-5 7-5zm-2.572 2.4a3.3 3.3 0 0 1-.438.573a3.5 3.5 0 0 1-1.1.742C7.173 26.475 11.292 29 16 29s8.828-2.525 11.11-6.285a3.5 3.5 0 0 1-1.1-.742a3.3 3.3 0 0 1-.438-.573C23.682 24.738 20.103 27 16 27s-7.681-2.262-9.572-5.6"></svg:path>`,
})
export class LaGrinTearsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTearsSolidIcon],svg[la-grin-tears-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.87 3 3.067 8.772 3.006 15.889a23 23 0 0 1 2.035-.692C5.454 9.507 10.205 5 16 5s10.546 4.506 10.959 10.197q1.173.346 2.035.692C28.934 8.772 23.13 3 16 3M9 14v2h5v-2zm9 0v2h5v-2zM6 17s-2.97.835-3.559 1.424a1.51 1.51 0 0 0 2.135 2.135C5.166 19.969 6 17 6 17m20 0s.835 2.97 1.424 3.559a1.51 1.51 0 0 0 2.135-2.135C28.969 17.834 26 17 26 17M9 19s1.61 5 7 5s7-5 7-5zm-2.572 2.4a3.3 3.3 0 0 1-.438.573a3.5 3.5 0 0 1-1.1.742C7.173 26.475 11.292 29 16 29s8.828-2.525 11.11-6.285a3.5 3.5 0 0 1-1.1-.742a3.3 3.3 0 0 1-.438-.573C23.682 24.738 20.103 27 16 27s-7.681-2.262-9.572-5.6"></svg:path>`,
})
export class LaGrinTearsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueIcon],svg[la-grin-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-8.734 5.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueSolidIcon],svg[la-grin-tongue-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-8.734 5.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueSquintIcon],svg[la-grin-tongue-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12m-9.234 5.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueSquintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueSquintSolidIcon],svg[la-grin-tongue-squint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12m-9.234 5.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueSquintSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueWinkIcon],svg[la-grin-tongue-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm-6.234 4.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueWinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinTongueWinkSolidIcon],svg[la-grin-tongue-wink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm-6.234 4.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19s-3.385-.63-4.234-1.643"></svg:path>`,
})
export class LaGrinTongueWinkSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinWinkIcon],svg[la-grin-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm2.969 4.031c0 1.684-.676 2.852-1.657 3.688C18.332 21.555 17.035 22 16 22c-2.121 0-3.563-.86-4.688-1.969L9.906 21.47C11.301 22.839 13.32 24 16 24c1.555 0 3.262-.586 4.625-1.75s2.344-2.96 2.344-5.219z"></svg:path>`,
})
export class LaGrinWinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGrinWinkSolidIcon],svg[la-grin-wink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm2.969 4.031c0 1.684-.676 2.852-1.657 3.688C18.332 21.555 17.035 22 16 22c-2.121 0-3.563-.86-4.688-1.969L9.906 21.47C11.301 22.839 13.32 24 16 24c1.555 0 3.262-.586 4.625-1.75s2.344-2.96 2.344-5.219z"></svg:path>`,
})
export class LaGrinWinkSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGripHorizontalIcon],svg[la-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v8h8V7zm10 0v8h8V7zm10 0v8h8V7zM4 9h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4zM2 17v8h8v-8zm10 0v8h8v-8zm10 0v8h8v-8zM4 19h4v4H4zm10 0h4v4h-4zm10 0h4v4h-4z"></svg:path>`,
})
export class LaGripHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGripLinesIcon],svg[la-grip-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11v2h26v-2zm0 8v2h26v-2z"></svg:path>`,
})
export class LaGripLinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGripLinesVerticalIcon],svg[la-grip-lines-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v26h2V3zm8 0v26h2V3z"></svg:path>`,
})
export class LaGripLinesVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGripVerticalIcon],svg[la-grip-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v8h8V2zm10 0v8h8V2zM9 4h4v4H9zm10 0h4v4h-4zM7 12v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4zM7 22v8h8v-8zm10 0v8h8v-8zm-8 2h4v4H9zm10 0h4v4h-4z"></svg:path>`,
})
export class LaGripVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGripfireIcon],svg[la-gripfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.686 1q.03.3.03.6C15.717 7.178 7 10.92 7 17.855c0 3.011 2.486 5.026 4.514 6.793c3.862 2.822 4.629 4.086 4.629 5.008c0 .611-.143 1.022-.143 1.344c.768-1.011.857-1.926.867-2.803c0-1.789-1.258-3.409-2.592-5.242c-.949-1.345-2.505-2.577-2.505-4.2c0-4.466 6.23-7.41 6.23-12.288C18 3.622 15.984 1.144 15.686 1m3.689 8l.24.434c.141.31.205.654.205 1.03c0 2.694-3.482 6.706-3.634 7.038c-.131.31-.186.643-.186.953c0 1.22.911 2.549 1.074 2.549c.142 0 3.41-3.348 3.508-5.299c.38.71.543 1.364.543 2.018c0 2.483-2.52 5.851-2.52 5.851c0 .698 1.922 3.203 2.14 3.203c.064 0 .14-.076.194-.142C23.23 24.263 25 21.503 25 18.377a9 9 0 0 0-.13-1.486c-.73-4.023-4.497-7.503-5.496-7.891z"></svg:path>`,
})
export class LaGripfireIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGruntIcon],svg[la-grunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.12 3.004c-1.498.528-1.874 1.333-1.985 2.064c-.386-.274-.34-1.171-.365-1.4c-.381.046-1.481 1.111-1.43 2.451q-.151.04-.3.086c-.33-.447-1.274-1.598-2.507-1.994a4.5 4.5 0 0 0-1.215-.182c-1.472 0-2.34.879-2.35.889l-.41.477l.624.123c.01 0 1.045.217 1.472.892c.071.112.09.334.112.572c.01.142-.02.28-.045.413c-.02.096-.042.197-.047.298q-.586.026-.99.23a1.35 1.35 0 0 0-.715.862c-.254.924.568 1.955.6 1.99c.095.173.136 1.412-.087 1.909c-.03.07-.112.136-.218.222c-.036.025-.07.056-.112.086c-.31.233-.783.593-.783 1.41c0 1.122 1.138 1.732 2.05 2.22q.231.119.423.232c.137.08.619.58.619 1.326c0 .35-.032 2.014-.19 3.166c-.589-.502-1.127-1.314-1.248-2.223c0 0-1.481 1.148-1.044 3.594c.264 1.497 1.176 2.34 2.384 2.775c.447.97 1.492 2.32 3.416 2.518c.731.599 1.747.988 3.229.988h.01c1.477 0 2.492-.39 3.228-.988c1.923-.198 2.97-1.549 3.416-2.518c1.208-.442 2.116-1.278 2.385-2.775c.416-2.455-1.07-3.598-1.07-3.598c-.122.908-.66 1.716-1.248 2.219c-.157-1.152-.19-2.818-.19-3.168c0-.746.482-1.242.62-1.324c.126-.076.274-.154.421-.235c.914-.487 2.05-1.094 2.05-2.216c0-.822-.472-1.179-.782-1.413a2 2 0 0 1-.112-.086c-.107-.086-.188-.151-.218-.222c-.223-.497-.183-1.736-.086-1.908c.03-.03.848-1.06.6-1.989a1.36 1.36 0 0 0-.718-.863c-.269-.137-.604-.213-.99-.228a2 2 0 0 0-.045-.3a1.4 1.4 0 0 1-.047-.41c.02-.238.043-.458.114-.574c.426-.675 1.46-.892 1.47-.892l.625-.121l-.412-.483c-.005-.01-.877-.888-2.35-.888c-.4 0-.811.067-1.222.199c-1.228.396-2.178 1.547-2.508 1.994a7 7 0 0 0-.486-.137c-.213-.802.457-1.955.457-1.955s-.69-.151-1.71.772c-.131-.33-.41-1.04-.09-1.887M9.327 4.793q.465 0 .899.137c.903.294 1.605 1.177 1.914 1.629q-.122.052-.245.11c-.127.062-.25.127-.36.188c-.133-.274-.422-.694-1.052-1.136a2.53 2.53 0 0 0-1.46-.451a4 4 0 0 0-.458.044a3 3 0 0 0-.492-.27a3.3 3.3 0 0 1 1.254-.251m13.338 0c.558 0 1.01.152 1.254.254c-.157.07-.325.16-.492.267a3 3 0 0 0-.467-.04c-.533 0-1.04.158-1.457.453c-.624.442-.914.857-1.05 1.136a4 4 0 0 0-.36-.187a5 5 0 0 0-.24-.114c.31-.462 1.01-1.343 1.914-1.632c.284-.091.589-.137.898-.137m.168 1.059a2 2 0 0 0-.117.162c-.167.264-.198.59-.223.904c-.025.325-.056.632-.223.861a6 6 0 0 0-.584.139a3.5 3.5 0 0 0-.533-.568c.071-.244.28-.818.686-1.143c.284-.218.618-.34.994-.355M9.16 5.857c.376.015.711.133.99.356c.406.32.615.894.686 1.137a3 3 0 0 0-.533.568a8 8 0 0 0-.584-.139c-.167-.223-.191-.53-.217-.855c-.025-.315-.058-.64-.225-.904a2 2 0 0 0-.117-.163m6.836.793c1.416 0 2.686.27 3.772.803c.72.35.994.619 1.095.766c-1.726.766-2.683 2.344-2.693 2.36l-.18.294l.285-.197s.01-.006.02-.016c.442-.345 1.98-1.513 3.254-1.914c.355-.112 1.045-.305 1.67-.305c.32 0 .572.053.765.149a.63.63 0 0 1 .34.394c.127.462-.31 1.149-.476 1.352a.5.5 0 0 0-.067.111a7 7 0 0 1-.015-.73c-.203.447-.33 1.598-.258 2.181c.183 1.487.797 2.248.797 2.248c-.041-.08-.091-.39-.137-.755l.111.09l.026.021c.233.188.45.36.45.924c0 .72-.781 1.14-1.532 1.547c-.147.076-.29.156-.426.232c-.442.254-.914.848-.969 1.736c-.046.741.047 2.534.174 3.854c-.629.244-1.356.324-2.016.344a6 6 0 0 1-.279-.664c-.036-.102-.995-2.595-1.34-3.159c.28 1.98.889 3.74 1.194 4.547a4 4 0 0 0-.594-.035h-5.94q-.334.002-.593.035c.305-.807.919-2.568 1.193-4.547c-.345.568-1.304 3.062-1.34 3.159a6 6 0 0 1-.28.664c-.66-.02-1.38-.101-2.015-.344c.127-1.32.219-3.108.174-3.854c-.046-.884-.524-1.483-.965-1.736c-.137-.08-.284-.156-.426-.232c-.756-.406-1.533-.826-1.533-1.547c0-.563.22-.741.453-.924l.026-.022c.036-.03.07-.06.111-.09c-.046.366-.096.675-.137.756c0 0 .614-.76.797-2.248c.071-.584-.057-1.74-.26-2.181c.01.249.002.496-.013.73a.6.6 0 0 0-.067-.111c-.162-.203-.598-.89-.476-1.352c.046-.178.157-.303.34-.394c.193-.096.446-.149.765-.149c.624 0 1.314.188 1.67.305c1.274.406 2.811 1.57 3.252 1.914l.022.016l.283.197l-.178-.295c-.01-.015-.968-1.593-2.7-2.36c.103-.146.377-.41 1.097-.765c1.086-.533 2.358-.803 3.77-.803zm-1.386 4.99c.002 0 .74.892 1.383.902h.01c.645-.005 1.38-.902 1.38-.902c-.501.305-.954.41-1.386.42a2.7 2.7 0 0 1-1.387-.42m-4.795.064a3.6 3.6 0 0 0-.775.102c.217.05.45.123.682.209c-.214.102-.332.36-.358.607c-.056.508.266.97.266.97c.036-.38.11-.651.201-.843c.02.523.162 1.194.65 1.732c.35.386 1.809 1.182 2.788.31c.05.121.107.269.152.43c.147.524-.139 1.286-.139 1.286s.766-.87.705-1.65c.548-.026 1.088-.427 1.073-.99c0 0-.96.529-1.803-.446c-.43-.497-1.697-1.757-3.442-1.717m12.364.01c-1.747-.04-3.01 1.219-3.44 1.717c-.848.974-1.802.447-1.802.447c-.01.553.528.957 1.076.978c-.061.787.705 1.65.705 1.65s-.284-.761-.137-1.284c.046-.162.102-.306.152-.432c.98.878 2.437.077 2.782-.309c.487-.538.622-1.209.648-1.732c.091.193.173.464.203.844c0 0 .327-.464.266-.97c-.03-.255-.148-.508-.356-.599h-.005c.233-.09.467-.163.685-.209a3.7 3.7 0 0 0-.777-.101M10.8 12.53c.99.558 1.898 1.303 2.28 1.877c-.29.167-1.103.528-1.93-.086c-.524-.386-.498-1.329-.35-1.79zm10.392 0c.152.462.175 1.406-.353 1.797c-.827.614-1.635.253-1.924.08c.38-.579 1.288-1.319 2.277-1.877M7.83 20.551c.553 1.746 2.396 2.247 3.777 2.303a9 9 0 0 1-.355.507l-.07.073c-.365.396-.437.938-.21 1.613c-1.151-.006-2.348-.498-2.952-1.498c-.614-1.015-.444-2.745-.19-2.998m16.34.004c.253.255.426 1.984-.193 2.994c-.61 1-1.808 1.488-2.95 1.508c.228-.675.156-1.225-.209-1.616a1 1 0 0 0-.07-.076a8 8 0 0 1-.355-.508c1.38-.06 3.224-.556 3.777-2.302m-11.188 2.924h6.03c.766 0 1.106.198 1.248.365c.213.244.227.639.045 1.172c-.334.954-1.233 3.28-4.309 3.285c-3.076-.005-3.973-2.325-4.309-3.285q-.282-.8.047-1.172c.147-.167.482-.365 1.248-.365m4.65.771q-.32 0-.452.137c-.112.117-.075.264-.045.34c.05.132.279.573.66.98a.75.75 0 0 0 .557.229a.95.95 0 0 0 .6-.213c.116-.102.517-.468.694-.92c.066-.167.05-.305-.046-.4c-.065-.067-.203-.148-.477-.153zm-4.751.006c-.28 0-.417.08-.483.146q-.143.152-.044.41c.178.462.579.839.695.946c.157.137.38.217.597.217a.75.75 0 0 0 .56-.233c.38-.416.603-.869.66-1.006c.03-.076.064-.226-.048-.343q-.134-.137-.445-.137zm-2.541 1.502q.457.083.943.12c.178.407.375.808.623 1.173a3.53 3.53 0 0 1-1.566-1.293m11.316 0c-.33.482-.837.994-1.568 1.293c.249-.365.448-.766.625-1.172q.487-.037.943-.121"></svg:path>`,
})
export class LaGruntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGuitarIcon],svg[la-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.594 3.063c-.106 0-.207.05-.313.156l-.75.75l-.312-.313l-.438.406l.344.344l-.438.407l-.312-.313l-.438.438l.313.312l-.719.75c-.215.215-.215.41 0 .625l-4.187 4.188c-.934-.747-1.93-1.313-2.875-1.594c-1.758-.52-3.32-.145-4.532 1.062c-.535.535-.863 1.188-1 1.969c-.218 1.266-1.335 2.254-2.656 2.344c-1.441.097-2.707.676-3.656 1.625c-2.504 2.504-2.05 7.047 1.031 10.125C7.406 28.094 9.636 29 11.688 29c1.562 0 3.011-.543 4.093-1.625c.95-.95 1.528-2.215 1.625-3.656c.09-1.32 1.047-2.438 2.313-2.657c.781-.136 1.465-.464 2-1c1.207-1.207 1.582-2.773 1.062-4.53c-.172-.587-.48-1.184-.843-1.782l-1.47 1.469c.157.3.29.59.376.875c.308 1.039.144 1.886-.532 2.562c-.242.239-.53.371-.906.438c-2.164.375-3.851 2.273-4 4.5c-.062.949-.43 1.77-1.031 2.375c-1.727 1.722-4.98 1.27-7.281-1.032c-2.301-2.3-2.785-5.59-1.063-7.312c.606-.602 1.426-.969 2.375-1.031c2.227-.149 4.121-1.836 4.5-4c.067-.375.196-.664.438-.906c.465-.465.996-.688 1.625-.688c.285 0 .613.059.937.156c.63.188 1.332.559 2 1.063l-3.343 3.344A2.502 2.502 0 0 0 11.5 18c0 1.378 1.121 2.499 2.5 2.499s2.5-1.121 2.5-2.5c0-.152-.035-.293-.063-.438l9.094-9.125c.215.215.442.215.657 0l.75-.75l.312.313l.406-.406l-.312-.313l.437-.437l.219.437l.406-.437l-.312-.313l.75-.75c.215-.215.215-.441 0-.656l-1.907-1.906a.5.5 0 0 0-.343-.156zM26.5 4.28l.438.438L25 6.625l-.406-.406zm.844.75l.437.438l-1.937 1.906l-.407-.438zM9.094 19.688l-1.406 1.406l3.218 3.218l1.406-1.406z"></svg:path>`,
})
export class LaGuitarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laGulpIcon],svg[la-gulp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.154 1a.14.14 0 0 0-.093.033l-3.715 4.412l-.758 2.606a48 48 0 0 0-1.592-.024c-3.86 0-6.996.41-6.996.916c0 1.21 13.99 1.21 13.99 0c0-.375-1.675-.691-4.09-.841l.6-2.145l3.475-4.18l.005-.006c.078-.08-.074-.324-.322-.537c-.186-.16-.381-.239-.504-.234m-4.851 8.076l-.014.041q-.008.008-.006.018c0 .075.303.136.672.136s.674-.061.674-.136l.012-.047c.097.035.15.075.15.121c0 .121-.375.22-.842.215c-.454 0-.83-.092-.83-.213c0-.052.075-.1.184-.135m5.61.344c-1.852.987-11.963.994-13.821.014l.822 7.232c.357-1.153 1.26-2.71 2.422-3.182c.38-.156.768-.155 1.13.053c.316.173.582.536.612.68c.073.375-.12.523-.271.523c-.182 0-.321-.264-.412-.42c-.248-.42-.624-.439-1.024-.162c-.418.288-.781.773-1.035 1.194a6.6 6.6 0 0 0-.727 1.625c-.09.323-.174.84-.035 1.146c.061.127.151.207.297.207c.303 0 .743-.38.955-.582c.272-.259.623-.663.756-.922l.316-.892c.157-.392.598-.323.598 0c0 .588-.222.784-.603 2c-.351 1.124-.461 1.488-.461 1.488c-.042.16-.206.432-.381.432q-.11-.001-.156-.07c-.061-.082-.055-.304-.05-.362c.013-.184.381-1.28.442-1.453a7 7 0 0 1-.387.38c-.327.295-.852.68-1.3.68a.76.76 0 0 1-.465-.138l.459 4.588c.12.288 2.373.986 5.338.986c2.97 0 5.22-.703 5.336-.986l.66-5.452c-.345.3-.744.67-1.186.854c-.327.133-1.053.218-1.053-.33c0-.3.552-.852.872-1.238c.085-.098.283-.34.283-.467c0-.167-.362-.129-.707.142a3.4 3.4 0 0 0-.528.56c-.26.347-.398.645-.513.893c-.375.818-.248.496-.551 1.268c-.303.767-.254.68-.315.807a.56.56 0 0 1-.242.26a.38.38 0 0 1-.369-.018c-.054-.035-.08-.11-.08-.213q.001-.078.02-.156c.09-.352.472-1.043.908-1.977c.097-.213.06-.15.047-.133c-.375.346-.66.514-.871.606c-.351.15-.787.15-.877-.237c-.006-.023-.006-.047-.012-.07c-.714.53-1.47.674-1.21-.467c-.277.473-.763.86-1.357.86c-.247 0-.429-.08-.519-.293c-.139-.317.078-.86.277-1.373c.103-.26.244-.57.432-.934c.097-.196.253-.312.459-.26a.5.5 0 0 1 .098.041c.157.104.096.258.017.414c-.23.432-.43.75-.562 1.2c-.054.19-.122.52.09.52a.73.73 0 0 0 .417-.14c.278-.196.502-.489.672-.777a4 4 0 0 0 .34-.709q.046-.147.11-.277c.067-.144.156-.293.314-.293q.119 0 .193.086c.103.127.08.257.026.396c-.121.323-.284.612-.418.963c-.08.202-.164.461-.164.674c0 .196.224.15.412.068c.145-.063.29-.16.412-.257c.073-.282.054-.22 1.598-3.932c.079-.19.224-.272.369-.272a.34.34 0 0 1 .193.065c.103.075.105.234.063.355c-.042.11-.038.076-.274.606c-.315.697-.52 1.2-.799 1.84c-.115.265-.465 1.089-.525 1.285c-.036.127-.08.334.06.334c.328 0 1.169-.756 1.399-.98c.012-.018.03-.024.055-.036c.036-.11.071-.212.101-.316c.085-.22.164-.475.322-.653c.048-.058.103-.091.163-.091c.169 0 .253.068.253.23c0 .063-.04.295-.066.358q.127-.129.272-.258c.908-.801 1.554-.393 1.554.011c0 .426-.538 1.02-.834 1.348c-.097.11-.296.311-.302.37c0 .074.053.105.132.105c.121 0 .388-.203.485-.272c.303-.225.713-.57 1.004-.812zM10.93 24.03l.902 1.465l.352 4.576c0 .513 1.712.928 3.818.928s3.818-.415 3.818-.928l.28-4.623l.851-1.418c-2.397.963-7.527.997-10.021 0"></svg:path>`,
})
export class LaGulpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHSquareIcon],svg[la-h-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3v12h2v-5h6v5h2V10h-2v5h-6v-5z"></svg:path>`,
})
export class LaHSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHackerNewsIcon],svg[la-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4.5 4l3.5 6v5h2v-5l3.5-6h-2L16 15.281L13.5 11z"></svg:path>`,
})
export class LaHackerNewsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHackerNewsSquareIcon],svg[la-hacker-news-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10z"></svg:path>`,
})
export class LaHackerNewsSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHackerrankIcon],svg[la-hackerrank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.998 3C14.225 3 5.535 7.984 4.658 9.504s-.878 11.479 0 12.994C5.54 24.017 14.23 29 15.998 29c1.764 0 10.454-4.98 11.338-6.498c.887-1.522.887-11.488 0-13.004v-.002C26.445 7.98 17.756 3 15.998 3m-.002 2.012c1.697.353 8.422 4.205 9.6 5.498c.54 1.64.539 9.334 0 10.978c-1.17 1.291-7.9 5.148-9.6 5.5c-1.698-.35-8.424-4.205-9.596-5.498c-.535-1.648-.535-9.334 0-10.98c1.17-1.293 7.897-5.148 9.596-5.498M13 9l-2 2h1v10h2v-4h4v4h-1l2 2l2-2h-1v-9h-2v3h-4v-4h1z"></svg:path>`,
})
export class LaHackerrankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHamburgerIcon],svg[la-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5c-3.3 0-6 2.7-6 6v.25l-1.125 1.5A3.6 3.6 0 0 0 5 13.313v2.468c-.61.551-1 1.34-1 2.219s.39 1.668 1 2.219V23c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2v-2.781c.61-.551 1-1.34 1-2.219s-.39-1.668-1-2.219v-2.469c.398-.12.77-.296 1.125-.562L27 11.219V11c0-3.3-2.7-6-6-6zm0 2h1c0 .55.45 1 1 1s1-.45 1-1h7c2.219 0 4 1.781 4 4v.5a2.2 2.2 0 0 1-.719-.375l-.531-.375l-.594.344l-.75.437a2.17 2.17 0 0 1-2.25 0l-.75-.437l-.468-.281l-.5.218l-1.438.75a2.21 2.21 0 0 1-1.969 0l-1.469-.75l-.5-.219l-.468.282l-.75.437c-.7.418-1.551.418-2.25 0l-.75-.437l-.594-.344l-.531.375A2.2 2.2 0 0 1 7 11.5V11c0-2.219 1.781-4 4-4m0 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-6.844 5l.406.25a4.19 4.19 0 0 0 4.313 0l.281-.188l.969.5c1.18.59 2.57.59 3.75 0l.969-.5l.281.188a4.19 4.19 0 0 0 4.313 0l.406-.25c.375.18.758.293 1.156.375V15H7v-1.625A5 5 0 0 0 8.156 13M7 17h18c.566 0 1 .434 1 1s-.434 1-1 1H7c-.566 0-1-.434-1-1s.434-1 1-1m0 4h18v2H7z"></svg:path>`,
})
export class LaHamburgerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHammerIcon],svg[la-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.063 2l2.5 1.813c4.714 3.398 6.144 6.73 6.437 7.468l-.906.906v.032l-.688.687L2.687 25.062l-.687.72l4.25 4.25l.719-.75l12.406-12.845l.313-.375l.093-.062l.969-.344l.188.188l-.375.906l-.282.625l3.313 3.313l6.375-6.375l-2.844-2.844l-.469-.438l-.593.219l-.907.344l-.218-.219l.312-1l.125-.406l-.188-.375S24.134 7.637 21.75 5.75S15.594 2 10.156 2zm6.03 2.25c3.368.5 5.798 1.766 7.438 3.063C22.297 8.71 23 9.842 23.22 10.219l-.375 1.156l-.157.563l.407.437l1.593 1.594l.625-.25l.875-.344l.938.938l-3.531 3.53l-.938-.937l.375-.906l.282-.625l-.5-.469l-1.125-1.125l-.438-.469l-.625.22l-1.781.718l-.188.063l-.718-.688l-.72-.719l1.157-1.156l-.219-.594s-1.343-3.394-5.062-6.906zm2.72 10.063l1.437 1.437L6.219 27.156L4.812 25.75z"></svg:path>`,
})
export class LaHammerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHamsaIcon],svg[la-hamsa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a4 4 0 0 0-3.705 2.51A3.46 3.46 0 0 0 10.5 5C8.57 5 7 6.57 7 8.5V17H5.5A2.5 2.5 0 0 0 3 19.5c0 .684.273 1.323.771 1.8l4.952 4.76A10.44 10.44 0 0 0 16 29c2.724 0 5.307-1.043 7.275-2.94l4.955-4.76c.497-.477.77-1.116.77-1.8c0-1.379-1.121-2.5-2.5-2.5H25V8.5C25 6.57 23.43 5 21.5 5c-.659 0-1.268.192-1.795.51A4 4 0 0 0 16 3m0 2c1.103 0 2 .897 2 2v8h2V8.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V19h3.5c.275 0 .5.225.5.5a.5.5 0 0 1-.154.36l-4.955 4.757A8.46 8.46 0 0 1 16 27a8.47 8.47 0 0 1-5.893-2.383l-4.95-4.758A.498.498 0 0 1 5.5 19H9V8.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V15h2V7c0-1.103.897-2 2-2m0 12c-3.495 0-5.738 3.305-5.832 3.445l-.37.555l.37.555C10.262 21.695 12.505 25 16 25s5.738-3.305 5.832-3.445l.37-.555l-.37-.555C21.738 20.305 19.495 17 16 17m0 2c1.697 0 3.059 1.248 3.725 2c-.667.752-2.03 2-3.725 2c-1.697 0-3.059-1.248-3.725-2c.667-.752 2.03-2 3.725-2m0 1a1 1 0 0 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class LaHamsaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandHoldingIcon],svg[la-hand-holding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.516 18a6.4 6.4 0 0 0-1.817.266l-.02.007l-5.671 2.176l1.984 5.57l4.93-1.89l7.137 3.93l12.324-5.106l-.766-1.844l-11.437 4.735l-7.102-3.91l-3.89 1.488l-.641-1.807l3.797-1.457A4 4 0 0 1 10.516 20c.703 0 1.522.156 2.222.79l.014.007l.004.004c1.03.895 1.808 1.52 2.89 1.86s2.31.378 4.36.37l-.01-2c-2.012.008-3.063-.063-3.75-.281c-.688-.211-1.176-.59-2.168-1.45l-.012-.007c-1.157-1.039-2.531-1.297-3.55-1.293"></svg:path>`,
})
export class LaHandHoldingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandHoldingHeartIcon],svg[la-hand-holding-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A3.5 3.5 0 0 0 11 6.5c0 3.5 6 6.5 6 6.5s6-3 6-6.5A3.5 3.5 0 0 0 19.5 3c-.981 0-1.865.407-2.5 1.057A3.5 3.5 0 0 0 14.5 3m0 2c.404 0 .784.16 1.07.453l.534.547h1.792l.534-.547A1.5 1.5 0 0 1 19.5 5c.827 0 1.5.673 1.5 1.5c0 1.261-2.106 3.076-4 4.215c-1.895-1.14-4-2.954-4-4.215c0-.827.673-1.5 1.5-1.5m4.719 8.979l-1.637 1.148l2.61 3.723l-3.602 2.494l-2.543-1.317l2.7-1.359l.01-.008l.01-.006a2.506 2.506 0 0 0 1.135-2.845v-.002A2.515 2.515 0 0 0 14.81 14.1h-.002l-7.112 1.982l-4.707 3.234l1.895 7.721l5.045-1.822l7.146 3.7l11.87-8.218l-1.137-1.644l-10.881 7.533l-6.854-3.55L6.295 24.4l-1.033-4.216l3.293-2.266l6.802-1.897h.004a.485.485 0 0 1 .62.342a.49.49 0 0 1-.225.565l-4.358 2.193l-1.75.879l7.092 3.674l6.244-4.324z"></svg:path>`,
})
export class LaHandHoldingHeartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandHoldingUsdIcon],svg[la-hand-holding-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v1.19a3.08 3.08 0 0 0-1.674 1.464a2.93 2.93 0 0 0-.264 1.946a3.06 3.06 0 0 0 1.268 1.883c.48.325 1.055.517 1.67.517q.215.001.396.076a.96.96 0 0 1 .528.528q.075.181.076.396a.98.98 0 0 1-.604.924q-.181.075-.396.076q-.215-.001-.396-.076a.96.96 0 0 1-.528-.528A1 1 0 0 1 17 12h-2a2.94 2.94 0 0 0 .857 2.076a3.1 3.1 0 0 0 1.143.735V16h2v-1.19c1.16-.42 2-1.52 2-2.81c0-1.435-1.041-2.655-2.4-2.938A3 3 0 0 0 18 9q-.215-.001-.396-.076a.96.96 0 0 1-.528-.528A1 1 0 0 1 17 8q.001-.215.076-.396a1 1 0 0 1 .211-.317A1 1 0 0 1 18 7c.57 0 1 .43 1 1h2a3 3 0 0 0-.148-.924A3.05 3.05 0 0 0 19 5.19V4zm-6.484 14a6.4 6.4 0 0 0-1.817.266l-.02.007l-5.671 2.176l1.984 5.57l4.93-1.89l7.137 3.93l12.324-5.106l-.766-1.844l-11.437 4.735l-7.102-3.91l-3.89 1.488l-.641-1.805l3.797-1.457c.009-.004.476-.16 1.172-.16c.703 0 1.522.156 2.222.79l.014.007l.004.004c1.03.895 1.808 1.52 2.89 1.86s2.31.378 4.36.37l-.01-2c-2.012.008-3.063-.063-3.75-.281c-.688-.211-1.176-.59-2.168-1.45l-.012-.007c-1.157-1.039-2.531-1.297-3.55-1.293"></svg:path>`,
})
export class LaHandHoldingUsdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandLizardIcon],svg[la-hand-lizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.313 4c-1.778 0-3.45.934-4.344 2.469l-5.281 9.093A5.06 5.06 0 0 0 4 18.095V28h10v-4.313c2.629-.789 3.984-2.171 4.406-2.687h6.313c1.277 0 2.246-1.262 1.937-2.5l-.125-.469A4.01 4.01 0 0 0 22.656 15h-6.875l-.5-2h6.375a4.01 4.01 0 0 0 3.875-3.031l.344-1.313C27.055 8.25 28 7.31 28 6V4zm0 2H26c0 .566-.434 1-1 1h-9l-1 2h8.719l-.125.5a1.976 1.976 0 0 1-1.938 1.5h-6.375c-1.277 0-2.246 1.262-1.937 2.5l.5 2A1.99 1.99 0 0 0 15.78 17h6.875c.922 0 1.715.605 1.938 1.5l.125.5H17.5l-.313.406s-1.44 2.047-4.375 2.625l-.812.157V26H6v-7.906c0-.532.137-1.07.406-1.532L11.72 7.5A3.01 3.01 0 0 1 14.313 6"></svg:path>`,
})
export class LaHandLizardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandLizardSolidIcon],svg[la-hand-lizard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.313 4c-1.778 0-3.45.934-4.344 2.469l-5.281 9.093A5.06 5.06 0 0 0 4 18.095V28h10v-4.313c2.629-.789 3.984-2.171 4.406-2.687h6.313c1.277 0 2.246-1.262 1.937-2.5l-.125-.469A4.01 4.01 0 0 0 22.656 15h-6.875l-.5-2h6.375a4.01 4.01 0 0 0 3.875-3.031l.344-1.313C27.055 8.25 28 7.31 28 6V4zm0 2H26c0 .566-.434 1-1 1h-9l-1 2h8.719l-.125.5a1.976 1.976 0 0 1-1.938 1.5h-6.375c-1.277 0-2.246 1.262-1.937 2.5l.5 2A1.99 1.99 0 0 0 15.78 17h6.875c.922 0 1.715.605 1.938 1.5l.125.5H17.5l-.313.406s-1.44 2.047-4.375 2.625l-.812.157V26H6v-7.906c0-.532.137-1.07.406-1.532L11.72 7.5A3.01 3.01 0 0 1 14.313 6"></svg:path>`,
})
export class LaHandLizardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandMiddleFingerIcon],svg[la-hand-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.645 0-3 1.355-3 3v5.188A3 3 0 0 0 12 10c-1.645 0-3 1.355-3 3v3.656l-2.094 2.688c-1.277 1.652-1.191 4.023.188 5.593l2.375 2.688A6.98 6.98 0 0 0 14.719 30H20c3.855 0 7-3.145 7-7v-9c0-1.645-1.355-3-3-3c-.535 0-1.031.156-1.469.406A3 3 0 0 0 20 10a3 3 0 0 0-1 .188V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v10h2v-2c0-.566.434-1 1-1s1 .434 1 1v2h2v-1c0-.566.434-1 1-1s1 .434 1 1v9c0 2.773-2.227 5-5 5h-5.281a4.97 4.97 0 0 1-3.75-1.688l-2.375-2.718a2.34 2.34 0 0 1-.094-3l.5-.657V21h2v-8c0-.566.434-1 1-1s1 .434 1 1v2h2V5c0-.566.434-1 1-1"></svg:path>`,
})
export class LaHandMiddleFingerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPaperIcon],svg[la-hand-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.383 0-2.531.969-2.875 2.25C12.773 4.105 12.402 4 12 4c-1.645 0-3 1.355-3 3v10.75l-.875-.875a3.023 3.023 0 0 0-4.25 0a3.023 3.023 0 0 0 0 4.25l6.781 6.781C11.832 29.078 13.457 30 15.375 30H20c3.855 0 7-3.145 7-7V11c0-1.645-1.355-3-3-3a3 3 0 0 0-1 .188V7c0-1.645-1.355-3-3-3c-.402 0-.773.105-1.125.25C18.531 2.969 17.383 2 16 2m0 2c.566 0 1 .434 1 1v10h2V7c0-.566.434-1 1-1s1 .434 1 1v8h2v-4c0-.566.434-1 1-1s1 .434 1 1v12c0 2.773-2.227 5-5 5h-4.625c-1.273 0-2.367-.621-3.281-1.531l-6.813-6.75a1.014 1.014 0 0 1 0-1.438a1.014 1.014 0 0 1 1.438 0l2.562 2.594L11 22.594V7c0-.566.434-1 1-1s1 .434 1 1v8h2V5c0-.566.434-1 1-1"></svg:path>`,
})
export class LaHandPaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPaperSolidIcon],svg[la-hand-paper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.383 0-2.531.969-2.875 2.25C12.773 4.105 12.402 4 12 4c-1.645 0-3 1.355-3 3v10.75l-.875-.875a3.023 3.023 0 0 0-4.25 0a3.023 3.023 0 0 0 0 4.25l6.781 6.781C11.832 29.078 13.457 30 15.375 30H20c3.855 0 7-3.145 7-7V11c0-1.645-1.355-3-3-3a3 3 0 0 0-1 .188V7c0-1.645-1.355-3-3-3c-.402 0-.773.105-1.125.25C18.531 2.969 17.383 2 16 2m0 2c.566 0 1 .434 1 1v10h2V7c0-.566.434-1 1-1s1 .434 1 1v8h2v-4c0-.566.434-1 1-1s1 .434 1 1v12c0 2.773-2.227 5-5 5h-4.625c-1.273 0-2.367-.621-3.281-1.531l-6.813-6.75a1.014 1.014 0 0 1 0-1.438a1.014 1.014 0 0 1 1.438 0l2.562 2.594L11 22.594V7c0-.566.434-1 1-1s1 .434 1 1v8h2V5c0-.566.434-1 1-1"></svg:path>`,
})
export class LaHandPaperSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPeaceIcon],svg[la-hand-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2c-1.645 0-3 1.355-3 3v1.531l-.125-.406c-.477-1.574-2.176-2.477-3.75-2s-2.477 2.176-2 3.75l2.594 8.438c-.188.074-.39.16-.594.28c-.836.5-1.781 1.512-2.063 3.126c-.21 1.195.02 2.246.188 2.812v.032l.781 2.5A7 7 0 0 0 13.72 30H19c3.855 0 7-3.145 7-7V12.875q-.013-.047-.031-.094c-.09-1.101-.758-2.129-1.844-2.562c-.754-.301-1.547-.258-2.25.031a3 3 0 0 0-1.531-1.406A3 3 0 0 0 18 8.906V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v6.594l-1.031 2.625a3.2 3.2 0 0 0-.219 1.156l-4.094.531l-2.594-8.625a.983.983 0 0 1 .657-1.25c.539-.164 1.086.149 1.25.688l2.062 6.843l1.125-.343H14V5c0-.566.434-1 1-1m4.188 6.625c.128-.004.277.012.406.063A1 1 0 0 1 20.156 12l-1.062 2.656v.031l-.407 1.032c-.019.054-.066.078-.093.125a3.05 3.05 0 0 0-1.813-.656c.012-.075 0-.145.032-.22l1.5-3.718c.156-.395.488-.617.875-.625M22.968 12c.134 0 .274.012.407.063a.975.975 0 0 1 .625.906V13c0 .121-.016.254-.063.375l-1.125 2.781a1 1 0 0 1-1.312.563c-.523-.211-.742-.79-.531-1.313l1.062-2.656c.016-.04.016-.086.032-.125a1.02 1.02 0 0 1 .53-.563a.9.9 0 0 1 .377-.062zM16.5 17.156a.95.95 0 0 1 1.156.719c.078.324.035.488-.062.656c-.098.168-.305.375-.75.532L12 20.313a1 1 0 0 0-.625 1.437l.906 1.656a.997.997 0 0 0 1.36.39a.997.997 0 0 0 .39-1.358l-.281-.5l3.688-.97q.046-.012.093-.03c.774-.27 1.395-.731 1.782-1.375a2.83 2.83 0 0 0 .375-1.75c.292.316.667.578 1.093.75A2.97 2.97 0 0 0 24 17.905V23c0 2.773-2.227 5-5 5h-5.281c-2.2 0-4.133-1.43-4.781-3.531l-.75-2.5c-.083-.27-.247-1.215-.126-1.907c.188-1.074.657-1.488 1.094-1.75c.438-.261.75-.28.75-.28h.063l6.437-.845q.048-.012.094-.03z"></svg:path>`,
})
export class LaHandPeaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPeaceSolidIcon],svg[la-hand-peace-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2c-1.645 0-3 1.355-3 3v1.531l-.125-.406c-.477-1.574-2.176-2.477-3.75-2s-2.477 2.176-2 3.75l2.594 8.438c-.188.074-.39.16-.594.28c-.836.5-1.781 1.512-2.063 3.126c-.21 1.195.02 2.246.188 2.812v.032l.781 2.5A7 7 0 0 0 13.72 30H19c3.855 0 7-3.145 7-7V12.875q-.013-.047-.031-.094c-.09-1.101-.758-2.129-1.844-2.562c-.754-.301-1.547-.258-2.25.031a3 3 0 0 0-1.531-1.406A3 3 0 0 0 18 8.906V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v6.594l-1.031 2.625a3.2 3.2 0 0 0-.219 1.156l-4.094.531l-2.594-8.625a.983.983 0 0 1 .657-1.25c.539-.164 1.086.149 1.25.688l2.062 6.843l1.125-.343H14V5c0-.566.434-1 1-1m4.188 6.625c.128-.004.277.012.406.063A1 1 0 0 1 20.156 12l-1.062 2.656v.031l-.407 1.032c-.019.054-.066.078-.093.125a3.05 3.05 0 0 0-1.813-.656c.012-.075 0-.145.032-.22l1.5-3.718c.156-.395.488-.617.875-.625M22.968 12c.134 0 .274.012.407.063a.975.975 0 0 1 .625.906V13c0 .121-.016.254-.063.375l-1.125 2.781a1 1 0 0 1-1.312.563c-.523-.211-.742-.79-.531-1.313l1.062-2.656c.016-.04.016-.086.032-.125a1.02 1.02 0 0 1 .53-.563a.9.9 0 0 1 .377-.062zM16.5 17.156a.95.95 0 0 1 1.156.719c.078.324.035.488-.062.656c-.098.168-.305.375-.75.532L12 20.313a1 1 0 0 0-.625 1.437l.906 1.656a.997.997 0 0 0 1.36.39a.997.997 0 0 0 .39-1.358l-.281-.5l3.688-.97q.046-.012.093-.03c.774-.27 1.395-.731 1.782-1.375a2.83 2.83 0 0 0 .375-1.75c.292.316.667.578 1.093.75A2.97 2.97 0 0 0 24 17.905V23c0 2.773-2.227 5-5 5h-5.281c-2.2 0-4.133-1.43-4.781-3.531l-.75-2.5c-.083-.27-.247-1.215-.126-1.907c.188-1.074.657-1.488 1.094-1.75c.438-.261.75-.28.75-.28h.063l6.437-.845q.048-.012.094-.03z"></svg:path>`,
})
export class LaHandPeaceSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointDownIcon],svg[la-hand-point-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v5.594l-6.719 6.781l-.281.313v.406C3 16.71 4.23 18 5.656 18c1.336 0 2.328-.469 2.969-.938c.402-.292.469-.421.625-.625l.75-.187V27c0 1.645 1.355 3 3 3s3-1.355 3-3v-3.563l7.625-1.656A3.016 3.016 0 0 0 26 18.844V2zm2 2h12v3H12zm-.594 5H24v9.844c0 .476-.313.898-.781 1l-8.438 1.781l-.781.188V27c0 .566-.434 1-1 1s-1-.434-1-1V13.656l-1.25.313l-2.25.594l-.406.124l-.188.344s-.086.18-.437.438c-.352.258-.91.531-1.813.531c-.308 0-.48-.172-.562-.594z"></svg:path>`,
})
export class LaHandPointDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointDownSolidIcon],svg[la-hand-point-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v5.594l-6.719 6.781l-.281.313v.406C3 16.71 4.23 18 5.656 18c1.336 0 2.328-.469 2.969-.938c.402-.292.469-.421.625-.625l.75-.187V27c0 1.645 1.355 3 3 3s3-1.355 3-3v-3.563l7.625-1.656A3.016 3.016 0 0 0 26 18.844V2zm2 2h12v3H12zm-.594 5H24v9.844c0 .476-.313.898-.781 1l-8.438 1.781l-.781.188V27c0 .566-.434 1-1 1s-1-.434-1-1V13.656l-1.25.313l-2.25.594l-.406.124l-.188.344s-.086.18-.437.438c-.352.258-.91.531-1.813.531c-.308 0-.48-.172-.562-.594z"></svg:path>`,
})
export class LaHandPointDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointLeftIcon],svg[la-hand-point-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 3C15.29 3 14 4.23 14 5.656c0 1.336.469 2.328.938 2.969c.292.402.421.469.624.625l.188.75H5c-1.645 0-3 1.355-3 3s1.355 3 3 3h3.563l1.656 7.625A3.016 3.016 0 0 0 13.156 26H30V10h-5.594l-6.781-6.719L17.312 3zm-.312 2.094L23 11.406V24h-9.844c-.476 0-.898-.313-1-.781l-1.781-8.438l-.188-.781H5c-.566 0-1-.434-1-1s.434-1 1-1h13.344l-.313-1.25l-.593-2.25l-.125-.406l-.344-.188s-.18-.086-.438-.437c-.258-.352-.531-.91-.531-1.813c0-.308.172-.48.594-.562M25 12h3v12h-3z"></svg:path>`,
})
export class LaHandPointLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointLeftSolidIcon],svg[la-hand-point-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 3C15.29 3 14 4.23 14 5.656c0 1.336.469 2.328.938 2.969c.292.402.421.469.624.625l.188.75H5c-1.645 0-3 1.355-3 3s1.355 3 3 3h3.563l1.656 7.625A3.016 3.016 0 0 0 13.156 26H30V10h-5.594l-6.781-6.719L17.312 3zm-.312 2.094L23 11.406V24h-9.844c-.476 0-.898-.313-1-.781l-1.781-8.438l-.188-.781H5c-.566 0-1-.434-1-1s.434-1 1-1h13.344l-.313-1.25l-.593-2.25l-.125-.406l-.344-.188s-.18-.086-.438-.437c-.258-.352-.531-.91-.531-1.813c0-.308.172-.48.594-.562M25 12h3v12h-3z"></svg:path>`,
})
export class LaHandPointLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointRightIcon],svg[la-hand-point-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.688 3l-.313.281L7.594 10H2v16h16.844c1.41 0 2.64-.996 2.937-2.375L23.438 16H27c1.645 0 3-1.355 3-3s-1.355-3-3-3H16.25l.188-.75c.203-.156.332-.223.625-.625c.468-.64.937-1.633.937-2.969C18 4.23 16.71 3 15.094 3zm.718 2.094c.422.082.594.254.594.562c0 .903-.273 1.461-.531 1.813s-.438.437-.438.437l-.344.188l-.124.406l-.594 2.25l-.313 1.25H27c.566 0 1 .434 1 1s-.434 1-1 1h-5.188l-.187.781l-1.781 8.438a1.01 1.01 0 0 1-1 .781H9V11.406zM4 12h3v12H4z"></svg:path>`,
})
export class LaHandPointRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointRightSolidIcon],svg[la-hand-point-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.688 3l-.313.281L7.594 10H2v16h16.844c1.41 0 2.64-.996 2.937-2.375L23.438 16H27c1.645 0 3-1.355 3-3s-1.355-3-3-3H16.25l.188-.75c.203-.156.332-.223.625-.625c.468-.64.937-1.633.937-2.969C18 4.23 16.71 3 15.094 3zm.718 2.094c.422.082.594.254.594.562c0 .903-.273 1.461-.531 1.813s-.438.437-.438.437l-.344.188l-.124.406l-.594 2.25l-.313 1.25H27c.566 0 1 .434 1 1s-.434 1-1 1h-5.188l-.187.781l-1.781 8.438a1.01 1.01 0 0 1-1 .781H9V11.406zM4 12h3v12H4z"></svg:path>`,
})
export class LaHandPointRightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointUpIcon],svg[la-hand-point-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2c-1.645 0-3 1.355-3 3v10.75l-.75-.188c-.156-.203-.223-.332-.625-.624c-.64-.47-1.633-.938-2.969-.938C4.23 14 3 15.29 3 16.906v.407l.281.312L10 24.406V30h16V13.156c0-1.41-.996-2.64-2.375-2.937L16 8.563V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v5.188l.781.187l8.438 1.781c.468.102.781.524.781 1V23H11.406l-6.312-6.406c.082-.422.254-.594.562-.594c.903 0 1.461.273 1.813.531s.437.438.437.438l.188.343l.406.125l2.25.594l1.25.313V5c0-.566.434-1 1-1m-1 21h12v3H12z"></svg:path>`,
})
export class LaHandPointUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointUpSolidIcon],svg[la-hand-point-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2c-1.645 0-3 1.355-3 3v10.75l-.75-.188c-.156-.203-.223-.332-.625-.624c-.64-.47-1.633-.938-2.969-.938C4.23 14 3 15.29 3 16.906v.407l.281.312L10 24.406V30h16V13.156c0-1.41-.996-2.64-2.375-2.937L16 8.563V5c0-1.645-1.355-3-3-3m0 2c.566 0 1 .434 1 1v5.188l.781.187l8.438 1.781c.468.102.781.524.781 1V23H11.406l-6.312-6.406c.082-.422.254-.594.562-.594c.903 0 1.461.273 1.813.531s.437.438.437.438l.188.343l.406.125l2.25.594l1.25.313V5c0-.566.434-1 1-1m-1 21h12v3H12z"></svg:path>`,
})
export class LaHandPointUpSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointerIcon],svg[la-hand-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2c-1.645 0-3 1.355-3 3v11.813l-.656-.688l-.25-.219a2.97 2.97 0 0 0-4.188 0a2.97 2.97 0 0 0 0 4.188v.031l8.188 8.094l.062.031l.031.063a8.3 8.3 0 0 0 5 1.687h1.72a8.17 8.17 0 0 0 8.187-8.188V14c0-1.645-1.356-3-3-3c-.426 0-.82.117-1.188.281C23.578 9.981 22.395 9 21 9c-.766 0-1.469.3-2 .781A2.98 2.98 0 0 0 17 9a3 3 0 0 0-1 .188V5c0-1.645-1.355-3-3-3m0 2c.555 0 1 .445 1 1v11h2v-4c0-.555.445-1 1-1s1 .445 1 1v4h2v-4c0-.555.445-1 1-1s1 .445 1 1v4h2.094v-2c0-.555.445-1 1-1s1 .445 1 1v7.813c0 3.464-2.723 6.187-6.188 6.187h-1.718c-1.465 0-2.731-.523-3.782-1.313l-8.094-8c-.445-.445-.445-.93 0-1.375c.446-.445.93-.445 1.375 0L12 21.625V5c0-.555.445-1 1-1"></svg:path>`,
})
export class LaHandPointerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandPointerSolidIcon],svg[la-hand-pointer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2c-1.645 0-3 1.355-3 3v11.813l-.656-.688l-.25-.219a2.97 2.97 0 0 0-4.188 0a2.97 2.97 0 0 0 0 4.188v.031l8.188 8.094l.062.031l.031.063a8.3 8.3 0 0 0 5 1.687h1.72a8.17 8.17 0 0 0 8.187-8.188V14c0-1.645-1.356-3-3-3c-.426 0-.82.117-1.188.281C23.578 9.981 22.395 9 21 9c-.766 0-1.469.3-2 .781A2.98 2.98 0 0 0 17 9a3 3 0 0 0-1 .188V5c0-1.645-1.355-3-3-3m0 2c.555 0 1 .445 1 1v11h2v-4c0-.555.445-1 1-1s1 .445 1 1v4h2v-4c0-.555.445-1 1-1s1 .445 1 1v4h2.094v-2c0-.555.445-1 1-1s1 .445 1 1v7.813c0 3.464-2.723 6.187-6.188 6.187h-1.718c-1.465 0-2.731-.523-3.782-1.313l-8.094-8c-.445-.445-.445-.93 0-1.375c.446-.445.93-.445 1.375 0L12 21.625V5c0-.555.445-1 1-1"></svg:path>`,
})
export class LaHandPointerSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandRockIcon],svg[la-hand-rock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6a3 3 0 0 0-2.531 1.406A2.95 2.95 0 0 0 11 7c-1.645 0-3 1.355-3 3v3.656l-2.094 2.688c-1.277 1.652-1.191 4.023.188 5.593l2.375 2.688A6.98 6.98 0 0 0 13.719 27H19c3.855 0 7-3.145 7-7v-9c0-1.645-1.355-3-3-3c-.535 0-1.031.156-1.469.406A3 3 0 0 0 19 7c-.535 0-1.031.156-1.469.406A3 3 0 0 0 15 6m0 2c.566 0 1 .434 1 1v3h2v-2c0-.566.434-1 1-1s1 .434 1 1v2h2v-1c0-.566.434-1 1-1s1 .434 1 1v9c0 2.773-2.227 5-5 5h-5.281a4.97 4.97 0 0 1-3.75-1.688l-2.375-2.718a2.34 2.34 0 0 1-.094-3l.5-.657V18h2v-8c0-.566.434-1 1-1s1 .434 1 1v2h2V9c0-.566.434-1 1-1"></svg:path>`,
})
export class LaHandRockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandRockSolidIcon],svg[la-hand-rock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6a3 3 0 0 0-2.531 1.406A2.95 2.95 0 0 0 11 7c-1.645 0-3 1.355-3 3v3.656l-2.094 2.688c-1.277 1.652-1.191 4.023.188 5.593l2.375 2.688A6.98 6.98 0 0 0 13.719 27H19c3.855 0 7-3.145 7-7v-9c0-1.645-1.355-3-3-3c-.535 0-1.031.156-1.469.406A3 3 0 0 0 19 7c-.535 0-1.031.156-1.469.406A3 3 0 0 0 15 6m0 2c.566 0 1 .434 1 1v3h2v-2c0-.566.434-1 1-1s1 .434 1 1v2h2v-1c0-.566.434-1 1-1s1 .434 1 1v9c0 2.773-2.227 5-5 5h-5.281a4.97 4.97 0 0 1-3.75-1.688l-2.375-2.718a2.34 2.34 0 0 1-.094-3l.5-.657V18h2v-8c0-.566.434-1 1-1s1 .434 1 1v2h2V9c0-.566.434-1 1-1"></svg:path>`,
})
export class LaHandRockSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandScissorsIcon],svg[la-hand-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.406 6.969a6.4 6.4 0 0 0-1.937.281h-.031l-2.5.781A7 7 0 0 0 2 14.72V20c0 3.855 3.145 7 7 7h9.906c1.219.027 2.399-.688 2.875-1.875c.301-.754.258-1.547-.031-2.25a3 3 0 0 0 1.406-1.531A3 3 0 0 0 23.094 19H27c1.645 0 3-1.355 3-3s-1.355-3-3-3h-1.531l.406-.125c1.574-.477 2.477-2.176 2-3.75s-2.176-2.477-3.75-2l-8.438 2.594a4 4 0 0 0-.28-.594c-.5-.836-1.512-1.781-3.126-2.063c-.3-.05-.597-.09-.875-.093M25.125 9c.39.043.723.313.844.719c.164.539-.149 1.086-.688 1.25l-6.843 2.062l.343 1.125V15H27c.566 0 1 .434 1 1s-.434 1-1 1h-6.594l-2.625-1.031a2.9 2.9 0 0 0-1.156-.219l-.531-4.094l8.625-2.625A1 1 0 0 1 25.125 9m-13.75.031c.191 0 .39 0 .563.031c1.074.188 1.488.657 1.75 1.094c.261.438.28.75.28.75v.063l.845 6.437a1 1 0 0 0 .03.094a.95.95 0 0 1-.718 1.156c-.324.078-.488.035-.656-.062c-.168-.098-.375-.305-.531-.75L11.688 13a1 1 0 0 0-1.438-.625l-1.656.906a.997.997 0 0 0-.39 1.36a.997.997 0 0 0 1.358.39l.5-.281l.97 3.688a1 1 0 0 0 .03.093c.27.774.731 1.395 1.376 1.782c.527.316 1.14.437 1.75.375a3.05 3.05 0 0 0-.75 1.093A2.97 2.97 0 0 0 14.094 25H9c-2.773 0-5-2.227-5-5v-5.281c0-2.2 1.43-4.133 3.531-4.781l2.5-.75c.203-.063.774-.157 1.344-.157m5.438 8.75c.074.012.144 0 .218.032l3.719 1.5c.523.21.773.757.563 1.28c-.211.524-.79.774-1.313.563l-3.719-1.468c-.054-.02-.078-.067-.125-.094a3.05 3.05 0 0 0 .657-1.813m-.625 4.125c.132 0 .273.012.406.063l1.343.531l1.313.531l.125.032c.523.21.773.789.563 1.312a.98.98 0 0 1-.875.625h-.032a1.1 1.1 0 0 1-.406-.063l-2.781-1.125a1 1 0 0 1-.563-1.312a.96.96 0 0 1 .531-.531a.9.9 0 0 1 .376-.063"></svg:path>`,
})
export class LaHandScissorsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandScissorsSolidIcon],svg[la-hand-scissors-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.406 6.969a6.4 6.4 0 0 0-1.937.281h-.031l-2.5.781A7 7 0 0 0 2 14.72V20c0 3.855 3.145 7 7 7h9.906c1.219.027 2.399-.688 2.875-1.875c.301-.754.258-1.547-.031-2.25a3 3 0 0 0 1.406-1.531A3 3 0 0 0 23.094 19H27c1.645 0 3-1.355 3-3s-1.355-3-3-3h-1.531l.406-.125c1.574-.477 2.477-2.176 2-3.75s-2.176-2.477-3.75-2l-8.438 2.594a4 4 0 0 0-.28-.594c-.5-.836-1.512-1.781-3.126-2.063c-.3-.05-.597-.09-.875-.093M25.125 9c.39.043.723.313.844.719c.164.539-.149 1.086-.688 1.25l-6.843 2.062l.343 1.125V15H27c.566 0 1 .434 1 1s-.434 1-1 1h-6.594l-2.625-1.031a2.9 2.9 0 0 0-1.156-.219l-.531-4.094l8.625-2.625A1 1 0 0 1 25.125 9m-13.75.031c.191 0 .39 0 .563.031c1.074.188 1.488.657 1.75 1.094c.261.438.28.75.28.75v.063l.845 6.437a1 1 0 0 0 .03.094a.95.95 0 0 1-.718 1.156c-.324.078-.488.035-.656-.062c-.168-.098-.375-.305-.531-.75L11.688 13a1 1 0 0 0-1.438-.625l-1.656.906a.997.997 0 0 0-.39 1.36a.997.997 0 0 0 1.358.39l.5-.281l.97 3.688a1 1 0 0 0 .03.093c.27.774.731 1.395 1.376 1.782c.527.316 1.14.437 1.75.375a3.05 3.05 0 0 0-.75 1.093A2.97 2.97 0 0 0 14.094 25H9c-2.773 0-5-2.227-5-5v-5.281c0-2.2 1.43-4.133 3.531-4.781l2.5-.75c.203-.063.774-.157 1.344-.157m5.438 8.75c.074.012.144 0 .218.032l3.719 1.5c.523.21.773.757.563 1.28c-.211.524-.79.774-1.313.563l-3.719-1.468c-.054-.02-.078-.067-.125-.094a3.05 3.05 0 0 0 .657-1.813m-.625 4.125c.132 0 .273.012.406.063l1.343.531l1.313.531l.125.032c.523.21.773.789.563 1.312a.98.98 0 0 1-.875.625h-.032a1.1 1.1 0 0 1-.406-.063l-2.781-1.125a1 1 0 0 1-.563-1.312a.96.96 0 0 1 .531-.531a.9.9 0 0 1 .376-.063"></svg:path>`,
})
export class LaHandScissorsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandSpockIcon],svg[la-hand-spock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.406 2a3 3 0 0 0-.594.063c-1.34.304-2.28 1.496-2.343 2.812a3 3 0 0 0-1.125.031C6.738 5.27 5.699 6.895 6.063 8.5L8 16.906v.844l-.875-.875a3.023 3.023 0 0 0-4.25 0a3.023 3.023 0 0 0 0 4.25l6.781 6.781C10.832 29.078 12.457 30 14.375 30H19c3.855 0 7-3.145 7-7v-7l.938-4.719c.316-1.613-.762-3.215-2.375-3.531a3 3 0 0 0-1-.031l.218-1.125c.317-1.614-.761-3.215-2.375-3.532c-1.613-.316-3.183.762-3.5 2.376l-1 4.75l-1.531-5.844c-.004-.008.004-.024 0-.032h-.031c-.336-1.378-1.57-2.335-2.938-2.312m-.156 2.031a.973.973 0 0 1 1.188.75v.032l2.5 9.593l.187.75h1.781l.188-.812l1.75-8.5v-.032a.99.99 0 0 1 1.187-.78c.555.109.89.632.782 1.187L20 15.344l1.969.375L23 10.53h.031c.11-.554.602-.922 1.157-.812c.554.11.89.633.78 1.187l-.937 4.906l-.031.094V23c0 2.773-2.227 5-5 5h-4.625c-1.273 0-2.367-.621-3.281-1.531l-6.813-6.75a1.014 1.014 0 0 1 0-1.438a1.014 1.014 0 0 1 1.438 0l2.562 2.594L10 22.594V16.78l-.031-.093L8.03 8.063c-.125-.551.2-1.094.75-1.22c.551-.124 1.063.231 1.188.782l1.781 7.938l1.969-.438l-1.781-7.969c-.004-.011.003-.02 0-.031L11.5 5.219a.973.973 0 0 1 .75-1.188"></svg:path>`,
})
export class LaHandSpockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandSpockSolidIcon],svg[la-hand-spock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.406 2a3 3 0 0 0-.594.063c-1.34.304-2.28 1.496-2.343 2.812a3 3 0 0 0-1.125.031C6.738 5.27 5.699 6.895 6.063 8.5L8 16.906v.844l-.875-.875a3.023 3.023 0 0 0-4.25 0a3.023 3.023 0 0 0 0 4.25l6.781 6.781C10.832 29.078 12.457 30 14.375 30H19c3.855 0 7-3.145 7-7v-7l.938-4.719c.316-1.613-.762-3.215-2.375-3.531a3 3 0 0 0-1-.031l.218-1.125c.317-1.614-.761-3.215-2.375-3.532c-1.613-.316-3.183.762-3.5 2.376l-1 4.75l-1.531-5.844c-.004-.008.004-.024 0-.032h-.031c-.336-1.378-1.57-2.335-2.938-2.312m-.156 2.031a.973.973 0 0 1 1.188.75v.032l2.5 9.593l.187.75h1.781l.188-.812l1.75-8.5v-.032a.99.99 0 0 1 1.187-.78c.555.109.89.632.782 1.187L20 15.344l1.969.375L23 10.53h.031c.11-.554.602-.922 1.157-.812c.554.11.89.633.78 1.187l-.937 4.906l-.031.094V23c0 2.773-2.227 5-5 5h-4.625c-1.273 0-2.367-.621-3.281-1.531l-6.813-6.75a1.014 1.014 0 0 1 0-1.438a1.014 1.014 0 0 1 1.438 0l2.562 2.594L10 22.594V16.78l-.031-.093L8.03 8.063c-.125-.551.2-1.094.75-1.22c.551-.124 1.063.231 1.188.782l1.781 7.938l1.969-.438l-1.781-7.969c-.004-.011.003-.02 0-.031L11.5 5.219a.973.973 0 0 1 .75-1.188"></svg:path>`,
})
export class LaHandSpockSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandsIcon],svg[la-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v11.406l.281.313L9 22.437V28h6v-6c.004-.055.146-3.155-2.438-4.813c-.007-.004.008-.027 0-.03c-.007-.005-.023.003-.03 0c-1.185-.774-2.407-1.406-3.25-2.063C8.43 14.434 8 13.887 8 13H6c0 1.617.945 2.844 2.031 3.688s2.348 1.465 3.406 2.156h.032C13.07 19.848 13 21.969 13 21.969V26h-2v-4.406l-.281-.313L5 15.563V5zm24 0v10.563l-5.719 5.718l-.281.313V26h-2v-4.063s-.07-2.09 1.531-3.093h.032c1.055-.691 2.32-1.314 3.406-2.157C25.055 15.845 26 14.617 26 13h-2c0 .887-.43 1.434-1.281 2.094c-.844.656-2.066 1.288-3.25 2.062c-.008.004-.024-.004-.032 0v.032C16.875 18.828 16.997 21.895 17 22v6h6v-5.563l5.719-5.718l.281-.313V5z"></svg:path>`,
})
export class LaHandsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandsHelpingIcon],svg[la-hands-helping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 3.031l-.656.719c-1.469 1.617-2.68 2.34-3.688 2.813c-1.008.472-1.855.613-2.687 1.25c-.887.68-2.176 1.984-2.719 4.312c-1.164.254-2.016.7-2.688 1.281c-.664.574-1.164 1.227-1.78 1.938c-.005.008.003.023 0 .031c-.884 1.016-1.657 2.11-3.157 2.688l-.625.25V29h19.063c1.093-.059 1.851-.816 2.312-1.563c.46-.746.715-1.554.844-2.218c.332-1.692.937-6.563.937-6.563l.032-.093v-.094c-.032-.676-.31-1.25-.657-1.782l1.125-3.343l1.782-2.688l.5-.719l-.657-.593l-6.562-5.688zm.063 2.75l5.218 4.532l-1.375 2.03l-.093.095l-.032.156l-.906 2.687c-.473-.195-.96-.332-1.5-.312h-.063L16 15h-1v3.875c-.14 1.09-.746 1.512-1.5 1.813c-.25.101-.281.046-.5.093V14.97c-.164-3.707 1.156-4.774 2.188-5.563c.285-.219 1.12-.472 2.312-1.031c.996-.469 2.234-1.309 3.563-2.594zm-10 8.594c-.004.227-.075.387-.063.625v8h1s1.07-.012 2.219-.469s2.535-1.527 2.781-3.406V17l5.375-.031h.031a1.66 1.66 0 0 1 1.75 1.562c-.004.016-.05.387-.062.469H20v2h3.844c-.106.773-.203 1.258-.313 2H20v2h3.219a5 5 0 0 1-.563 1.375c-.273.445-.508.613-.718.625H5v-7.469c1.621-.86 2.629-2.097 3.281-2.843c.676-.774 1.14-1.36 1.594-1.75c.297-.254.762-.399 1.188-.563"></svg:path>`,
})
export class LaHandsHelpingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandshakeIcon],svg[la-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.313 6.969c-.555.004-1.106.031-1.688.187a6 6 0 0 0-1.781.813c-.766-.45-1.508-.82-2.219-.907c-.883-.109-1.703-.05-2.656-.03c-1.13.023-1.867.6-3.063 1.062C6.711 8.554 5.172 9 3 9H2v9.625l.563.281l1.843.907l6.563 7.312l.031.031c.75.742 1.762.926 2.656.875c.895-.05 1.735-.312 2.406-.718c1.477-.891 5.5-3.688 5.5-3.688l.094-.063l.063-.062c.476-.473.715-1.05.875-1.656l3.843-1.938l2.875-.968l.688-.22V9h-1a12.8 12.8 0 0 1-4.906-.938C22.898 7.595 22.172 7.024 21.03 7c-.61-.012-1.164-.035-1.718-.031zm.03 2c.45-.004.97.02 1.626.031c.105.004 1.066.414 2.406.938c1.133.445 2.707.84 4.625.968v6.375l-2.313.782h-.062l-.063.03l-3.03 1.532a3.55 3.55 0 0 0-.75-1.25l-.063-.094l-4.25-5.218l-.625-.782l-.782.625l-2.687 2.188c-.902.625-1.633.445-2.375.094c-.215-.102-.203-.133-.375-.25l4.563-3.782l.062-.062c1.355-1.344 2.188-1.809 2.906-2c.36-.098.739-.121 1.188-.125zM12.376 9a7 7 0 0 1 1 .031c.262.031.559.254.813.344c-.102.094-.176.148-.282.25l-.062.063l-5.469 4.53l-.844.688l.75.781s.723.782 1.844 1.313s2.852.832 4.406-.25l.063-.063l1.937-1.593l3.688 4.531l.031.063l.031.03c.66.653.645 1.68 0 2.345c-.008.007.008.023 0 .03c-.008.005-.14.083-.156.095l-1.313-1.782l-1.625 1.188l1.282 1.718c-.52.352-.754.536-1.313.907l-1.343-1.813l-1.626 1.188l1.282 1.718c-.114.07-.348.227-.438.282c-.316.191-.926.406-1.469.437c-.511.028-.902-.09-1.093-.25l-.031-.031l-6.688-7.406l-.125-.157L4 17.375v-6.469c1.91-.125 3.496-.504 4.625-.937c1.336-.512 2.29-.934 2.406-.938z"></svg:path>`,
})
export class LaHandshakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHandshakeSolidIcon],svg[la-handshake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.313 6.969c-.555.004-1.106.031-1.688.187a6 6 0 0 0-1.781.813c-.766-.45-1.508-.82-2.219-.907c-.883-.109-1.703-.05-2.656-.03c-1.13.023-1.867.6-3.063 1.062C6.711 8.554 5.172 9 3 9H2v9.625l.563.281l1.843.907l6.563 7.312l.031.031c.75.742 1.762.926 2.656.875c.895-.05 1.735-.312 2.406-.718c1.477-.891 5.5-3.688 5.5-3.688l.094-.063l.063-.062c.476-.473.715-1.05.875-1.656l3.843-1.938l2.875-.968l.688-.22V9h-1a12.8 12.8 0 0 1-4.906-.938C22.898 7.595 22.172 7.024 21.03 7c-.61-.012-1.164-.035-1.718-.031zm.03 2c.45-.004.97.02 1.626.031c.105.004 1.066.414 2.406.938c1.133.445 2.707.84 4.625.968v6.375l-2.313.782h-.062l-.063.03l-3.03 1.532a3.55 3.55 0 0 0-.75-1.25l-.063-.094l-4.25-5.218l-.625-.782l-.782.625l-2.687 2.188c-.902.625-1.633.445-2.375.094c-.215-.102-.203-.133-.375-.25l4.563-3.782l.062-.062c1.355-1.344 2.188-1.809 2.906-2c.36-.098.739-.121 1.188-.125zM12.376 9a7 7 0 0 1 1 .031c.262.031.559.254.813.344c-.102.094-.176.148-.282.25l-.062.063l-5.469 4.53l-.844.688l.75.781s.723.782 1.844 1.313s2.852.832 4.406-.25l.063-.063l1.937-1.593l3.688 4.531l.031.063l.031.03c.66.653.645 1.68 0 2.345c-.008.007.008.023 0 .03c-.008.005-.14.083-.156.095l-1.313-1.782l-1.625 1.188l1.282 1.718c-.52.352-.754.536-1.313.907l-1.343-1.813l-1.626 1.188l1.282 1.718c-.114.07-.348.227-.438.282c-.316.191-.926.406-1.469.437c-.511.028-.902-.09-1.093-.25l-.031-.031l-6.688-7.406l-.125-.157L4 17.375v-6.469c1.91-.125 3.496-.504 4.625-.937c1.336-.512 2.29-.934 2.406-.938z"></svg:path>`,
})
export class LaHandshakeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHanukiahIcon],svg[la-hanukiah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m-3 1s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3m6 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m-9 1S9 8.063 9 9c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3m12 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3M7 7s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3m18 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3M4 8s-1 2.063-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.984-1-3-1-3m24 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3M15 9v9h-.031a.945.945 0 0 1-.969-.969V10h-2v7.031q-.001.51.156.969h-.187a.95.95 0 0 1-.969-.969V11H9v6.031c0 .34.082.664.188.969h-.126A1.054 1.054 0 0 1 8 16.937V12H6v4.938c0 .375.094.73.219 1.062H6.03A1.02 1.02 0 0 1 5 16.969V13H3v3.969A3.05 3.05 0 0 0 6.031 20H15v6h-5v2h12v-2h-5v-6h8.969A3.05 3.05 0 0 0 29 16.969V13h-2v3.969A1.02 1.02 0 0 1 25.969 18h-.188c.125-.332.219-.688.219-1.063V12h-2v4.938C24 17.53 23.531 18 22.937 18h-.125c.106-.305.188-.629.188-.969V11h-2v6.031a.95.95 0 0 1-.969.969h-.187a3 3 0 0 0 .156-.969V10h-2v7.031a.945.945 0 0 1-.969.969H17V9z"></svg:path>`,
})
export class LaHanukiahIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHardHatIcon],svg[la-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v1.406c-4.965 1.281-8.59 5.676-8.875 10.969C2.953 19.785 2 20.695 2 22v3h28v-3c0-1.305-.953-2.215-2.125-2.625c-.285-5.293-3.91-9.688-8.875-10.969V7zm2.031 2H17a1 1 0 0 0 0 .344V15h2v-4.5c3.738 1.18 6.566 4.473 6.969 8.5H24v2h3c.566 0 1 .434 1 1v1H4v-1c0-.566.434-1 1-1h3v-2H6.031c.403-4.027 3.23-7.32 6.969-8.5V15h2V9.5c.05-.16.063-.332.031-.5"></svg:path>`,
})
export class LaHardHatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHashtagIcon],svg[la-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v6H5v2h6v6H5v2h6v6h2v-6h6v6h2v-6h6v-2h-6v-6h6v-2h-6V5h-2v6h-6V5zm2 8h6v6h-6z"></svg:path>`,
})
export class LaHashtagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHatCowboyIcon],svg[la-hat-cowboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6c-.898 0-1.563.5-2.156 1.156c-.59.649-1.07 1.532-1.313 2.594c-.004.012.004.02 0 .031c-.261 1-.633 2.727-.937 4.219C8.894 13.395 8 13 7 13c-2.21 0-4 1.79-4 4c0 2.105.543 4.477 2.531 6.219C7.52 24.96 10.766 26 16 26c5.238 0 8.516-1.059 10.5-2.813C28.484 21.434 29 19.06 29 17c0-2.21-1.79-4-4-4a3.98 3.98 0 0 0-2.594.969l-.031-.031c0-.004-.031.003-.031 0c-.356-1.649-.64-3.036-.875-4.157c-.239-1.125-.742-2.035-1.344-2.687C19.523 6.44 18.859 6 18 6c-.816 0-1.352.418-1.719.688c-.129.093-.199.16-.281.218c-.082-.058-.152-.125-.281-.218C15.352 6.418 14.816 6 14 6m0 2c-.016 0 .223.082.531.313c.156.113.317.238.531.374c.215.137.481.313.938.313s.723-.176.938-.313c.214-.136.375-.261.53-.374c.31-.231.548-.313.532-.313c-.059 0 .309.094.656.469s.711.976.875 1.75c.278 1.312.68 3.18 1.032 4.812a2 2 0 0 1-.157.094C19.73 15.52 18.418 16 16 16s-3.73-.48-4.406-.875c-.078-.043-.125-.082-.188-.125c.344-1.66.774-3.656 1.063-4.75v-.031c.16-.723.52-1.324.875-1.719S14.102 8 14 8m-7 7c1.16 0 1.957.77 2 1.906v.032a1 1 0 0 0 .031.562a1 1 0 0 0 .031.094c.196 1.949 1.293 3.254 2.626 3.812C13.152 22.023 14.75 22 16 22c1.277 0 2.895-.016 4.344-.656c1.347-.598 2.472-1.946 2.625-3.907A1 1 0 0 0 23 17v-.031a1 1 0 0 0 0-.125c.066-1.106.863-1.844 2-1.844c1.191 0 2 .809 2 2c0 1.742-.379 3.395-1.844 4.688S20.961 24 16 24c-4.965 0-7.695-1-9.156-2.281S5 18.797 5 17c0-1.191.809-2 2-2m4 2.063c1.059.515 2.617.937 5 .937s3.941-.422 5-.938c-.016 1.543-.559 2.036-1.469 2.438c-.926.41-2.308.5-3.531.5c-1.25 0-2.652-.023-3.563-.406c-.898-.38-1.425-.875-1.437-2.532z"></svg:path>`,
})
export class LaHatCowboyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHatCowboySideIcon],svg[la-hat-cowboy-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.21 7.01a4.5 4.5 0 0 0-.788.047c-.685.102-1.328.357-1.988.568S15.119 8 14.631 8c-.311 0-.874-.008-1.442-.002c-.567.006-1.11.014-1.59.102c-.846.154-1.579.526-2.093 1.091c-.515.566-.788 1.276-.914 2.014l-.002.014l-.602 3.816c-3.144.178-5.421 2.11-6.656 4.703a3.41 3.41 0 0 0 .191 3.32c.6.922 1.591 1.547 2.73 1.794c8.174 1.768 15.176 1.227 22.794.146h.025v-.002l.045-.004l.024-.002l.02-.004a1 1 0 0 0 .282-.091c1.292-.27 2.257-.812 2.815-1.547c.603-.796.742-1.688.742-2.366c0-3.4-2.618-7.5-7.445-8.802l-.586-2.274l-.006-.02c-.461-1.649-1.95-2.823-3.752-2.876zm-.024 1.984c1.027-.014 1.592.515 1.85 1.43l.001.002l.693 2.681l.002.006a1 1 0 0 0 .067.264l.164.633l.02.082c.112.402-.244 1.2-.715 1.476c-.288.168-1.401.591-2.696.895c-1.212.284-2.633.498-3.93.523c-1.244-.895-2.711-1.627-4.638-1.884l.56-3.559c.083-.481.227-.793.42-1.006c.194-.212.458-.376.975-.47c.168-.031.72-.063 1.252-.069s1.073.002 1.42.002c.88 0 1.696-.24 2.412-.469s1.358-.45 1.674-.498q.249-.037.469-.039m4.966 5.496C27.384 15.86 29 18.88 29 20.982c0 .41-.08.821-.336 1.159c-.252.332-.73.679-1.797.859c-3.022.212-4.952-.32-6.48-1.207c1.26-.267 2.387-.67 3.134-1.105l.002-.002c1.149-.672 1.727-2.041 1.37-3.327l-.74-2.869zm-1.422 2.492l.23.895l.005.018c.115.413-.05.83-.451 1.064c-.672.392-2.645 1.04-4.375 1.121a36 36 0 0 1-.543-.506c-.257-.244-.535-.5-.8-.752a24 24 0 0 0 2.233-.412c1.414-.332 2.523-.693 3.246-1.115h.002q.24-.14.453-.313M8.45 17c2.366 0 3.864.672 5.165 1.66a1 1 0 0 0 .305.233c.77.627 1.488 1.36 2.295 2.128q.375.36.789.713a1 1 0 0 0 .322.256l.006.004a15 15 0 0 0 2.48 1.652c-4.91.372-9.776.412-15.136-.748c-.682-.147-1.213-.523-1.477-.93c-.264-.405-.333-.8-.062-1.368c1.066-2.241 2.67-3.6 5.312-3.6z"></svg:path>`,
})
export class LaHatCowboySideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHatWizardIcon],svg[la-hat-wizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28c-6.203 0-8.465-2.055-8.703-2.29l-.473-.464L15.324 4h7.617l-4.726 3.363l6.957 17.887l-.469.46c-.238.235-2.5 2.29-8.703 2.29m-6.777-3.363C10.102 25.137 12.176 26 16 26c3.828 0 5.898-.863 6.781-1.367l-6.68-17.188zM18 24a3 3 0 0 1 0-6c.262 0 .508.043.75.105A3.993 3.993 0 0 0 12 21c0 2.21 1.79 4 4 4a4 4 0 0 0 2.75-1.105A3 3 0 0 1 18 24m-2-11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m3 7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class LaHatWizardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHaykalIcon],svg[la-haykal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a.91.91 0 0 0-.88.65l-1.731 5.444l-4.633-2.696a.9.9 0 0 0-.492-.148c-.605 0-1.127.63-.86 1.297L9.387 12.5l-5.586.783c-.891.125-1.102 1.335-.307 1.762l4.985 2.674l-4.153 4.295c-.554.622-.086 1.57.676 1.57a1 1 0 0 0 .207-.023l6.002-1.252l-.209 5.714a.93.93 0 0 0 .935.975a.89.89 0 0 0 .721-.363L16 24.119l3.344 4.516a.9.9 0 0 0 .72.363a.93.93 0 0 0 .934-.975l-.209-5.714l6.043 1.252q.107.023.207.023c.764 0 1.23-.95.676-1.57l-4.194-4.295l4.987-2.674c.794-.426.582-1.635-.309-1.76l-5.586-.785l1.983-4.953c.267-.666-.255-1.297-.86-1.297a.9.9 0 0 0-.492.148l-4.63 2.696l-1.731-5.444A.91.91 0 0 0 16 3m0 7.867l.861 2.71l2.711-1.579l-1.187 2.97l3.117.436l-2.977 1.598l2.155 2.205l-2.928-.62l.11 3.02L16 19.184l-1.86 2.425l.112-3.027l-2.943.627l2.144-2.219l-2.953-1.584l3.115-.437L12.428 12l2.71 1.576z"></svg:path>`,
})
export class LaHaykalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHddIcon],svg[la-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.219 6L3 18.875V26h26v-7.125L25.781 6zM7.78 8h16.44l2.5 10H5.28zM5 20h22v4H5zm19 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaHddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHddSolidIcon],svg[la-hdd-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.219 6L3 18.875V26h26v-7.125L25.781 6zM7.78 8h16.44l2.5 10H5.28zM5 20h22v4H5zm19 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaHddSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeadingIcon],svg[la-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v2h1v18H6v2h8v-2h-1v-6h6v6h-1v2h8v-2h-1V7h1V5h-8v2h1v6h-6V7h1V5zm3 2h2v8h10V7h2v18h-2v-8H11v8H9z"></svg:path>`,
})
export class LaHeadingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeadphonesIcon],svg[la-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5C9.937 5 5 9.938 5 16v8c0 1.645 1.355 3 3 3h3v-9H7v-2c0-4.984 4.016-9 9-9s9 4.016 9 9v2h-4v9h3c1.645 0 3-1.355 3-3v-8c0-6.063-4.938-11-11-11M7 20h2v5H8c-.566 0-1-.434-1-1zm16 0h2v4c0 .566-.434 1-1 1h-1z"></svg:path>`,
})
export class LaHeadphonesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeadphonesAltIcon],svg[la-headphones-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5C9.937 5 5 9.938 5 16v8c0 1.645 1.355 3 3 3h3v-9H7v-2c0-4.984 4.016-9 9-9s9 4.016 9 9v2h-4v9h3c1.645 0 3-1.355 3-3v-8c0-6.063-4.938-11-11-11M7 20h2v5H8c-.566 0-1-.434-1-1zm16 0h2v4c0 .566-.434 1-1 1h-1z"></svg:path>`,
})
export class LaHeadphonesAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeadsetIcon],svg[la-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C9.953 3 5 7.953 5 14v6c0 1.293.844 2.395 2 2.813V23c0 2.746 2.254 5 5 5h1.281c.348.598.98 1 1.719 1h2c1.102 0 2-.898 2-2s-.898-2-2-2h-2c-.738 0-1.371.402-1.719 1H12a3 3 0 0 1-3-3h2v-9H7c0-4.953 4.047-9 9-9s9 4.047 9 9h-4v9h3c1.645 0 3-1.355 3-3v-6c0-6.047-4.953-11-11-11M7 16h2v5H8c-.555 0-1-.445-1-1zm16 0h2v4c0 .555-.445 1-1 1h-1z"></svg:path>`,
})
export class LaHeadsetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeartIcon],svg[la-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 5C5.363 5 2 8.402 2 12.5c0 1.43.648 2.668 1.25 3.563a9.3 9.3 0 0 0 1.219 1.468L15.28 28.375l.719.719l.719-.719L27.53 17.531S30 15.355 30 12.5C30 8.402 26.637 5 22.5 5c-3.434 0-5.645 2.066-6.5 2.938C15.145 7.066 12.934 5 9.5 5m0 2c2.988 0 5.75 2.906 5.75 2.906l.75.844l.75-.844S19.512 7 22.5 7c3.043 0 5.5 2.496 5.5 5.5c0 1.543-1.875 3.625-1.875 3.625L16 26.25L5.875 16.125s-.484-.465-.969-1.188C4.422 14.216 4 13.274 4 12.5C4 9.496 6.457 7 9.5 7"></svg:path>`,
})
export class LaHeartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeartBrokenIcon],svg[la-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4C5.362 4 2 7.404 2 11.5c0 1.428.652 2.653 1.252 3.549a10.5 10.5 0 0 0 1.213 1.496L16 28.082l11.535-11.537S30 14.357 30 11.5C30 7.404 26.638 4 22.5 4c-1.57 0-2.973.523-4.11 1.148l-.33.182L16.005 11h3.621L16 17.215V13h-3.547l1.545-7.64l-.672-.346C12.25 4.459 10.952 4 9.5 4m0 2c.778 0 1.496.309 2.207.602L10.007 15H14v6h2.11L22 10.895V9h-3.145l.793-2.184C20.522 6.374 21.486 6 22.5 6c3.042 0 5.5 2.496 5.5 5.5c0 1.545-1.87 3.621-1.87 3.621l-.001.002L16 25.252L5.871 15.123l-.002-.002s-.472-.464-.955-1.185S4 12.272 4 11.5C4 8.496 6.458 6 9.5 6"></svg:path>`,
})
export class LaHeartBrokenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeartSolidIcon],svg[la-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 5c-2.892 0-5.327 1.804-6.5 2.854C14.827 6.804 12.392 5 9.5 5C5.364 5 2 8.364 2 12.5c0 2.59 2.365 4.947 2.46 5.041L16 29.081l11.534-11.534C27.635 17.447 30 15.09 30 12.5C30 8.364 26.636 5 22.5 5"></svg:path>`,
})
export class LaHeartSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHeartbeatIcon],svg[la-heartbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.781 5C6.492 5 3 8.3 3 12.36c0 .218.02.425.035.64H5.04a7 7 0 0 1-.039-.64C5 9.405 7.594 7 10.781 7c1.457 0 2.848.504 3.918 1.418L16 9.531l1.3-1.113C18.368 7.504 19.759 7 21.22 7C24.406 7 27 9.406 27 12.36c0 5.12-4.824 8.156-8.703 10.597c-.887.555-1.664 1.047-2.297 1.512c-.633-.465-1.41-.957-2.297-1.512c-1.808-1.137-3.82-2.406-5.457-3.957H5.531c1.98 2.41 4.785 4.188 7.11 5.652c.972.61 1.808 1.137 2.402 1.602c0 0 .95.738.957.746c.004-.008.953-.746.953-.746c.594-.465 1.43-.992 2.406-1.602C23.426 22.09 29 18.586 29 12.36C29 8.301 25.508 5 21.219 5c-1.95 0-3.797.68-5.219 1.898C14.578 5.68 12.727 5 10.781 5m1.188 4.387l-2.336 5.832L9.414 15H3v2h5.586l1.777 1.781l1.668-4.168l3 7l2.07-5.175l.282.562h1.887A1.999 1.999 0 0 0 23 16a1.999 1.999 0 0 0-3.73-1h-.653l-1.719-3.438l-1.93 4.825z"></svg:path>`,
})
export class LaHeartbeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHelicopterIcon],svg[la-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6v4.063c-1.848.16-3.258.722-4.219 1.406a5.5 5.5 0 0 0-1.25 1.25c-.066.09-.07.199-.125.281H5.812C5.396 11.844 4.293 11 3 11c-1.645 0-3 1.355-3 3s1.355 3 3 3c1.293 0 2.395-.844 2.813-2H14v-.844a.8.8 0 0 1 .125-.281a3.6 3.6 0 0 1 .813-.781C15.723 12.535 17.015 12 19 12c.45 0 .91.156 1.375.219c-.523.847-.688 1.926-.688 3.562c0 .73.25 1.465.782 2c.531.535 1.304.844 2.156.844c2.016 0 3.348-.074 4.344-.25c.086-.016.105-.074.187-.094c-.043.074-.039.215-.093.282c-.27.343-.672.62-1.25.843c-1.157.45-2.91.594-4.657.594H16.22A2.21 2.21 0 0 1 14 17.781V16h-2v1.781C12 20.094 13.906 22 16.219 22h4.937c1.828 0 3.75-.09 5.375-.719c.813-.316 1.574-.797 2.125-1.5s.844-1.617.844-2.656c0-2.172-1.566-3.934-3.563-5.156c-.761-.465-1.652-.781-2.53-1.094c-1.106-.395-2.25-.695-3.407-.813V6zM7 7v2h10V7zm14 0v2h10V7zm2.063 5.906c.625.242 1.277.457 1.812.781c1.223.747 1.922 1.618 2.281 2.5c-.156.07-.164.153-.531.22c-.754.132-2.027.218-4 .218c-.414 0-.621-.117-.75-.25s-.188-.32-.188-.594c0-1.703.223-2.472.375-2.656c.075-.094.145-.137.344-.188c.13-.035.41-.019.657-.03zM3 13c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m25 9c0 .566-.434 1-1 1H11v2h16c1.645 0 3-1.355 3-3z"></svg:path>`,
})
export class LaHelicopterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHighlighterIcon],svg[la-highlighter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.625 3.063l-.719.624L7.563 17l-.5.469l.25.656s1.125 3-1.032 5.156v.032l-.031.03l-.156.188l-.125.125L2 27.531L7.375 29l2.063-2.063l.218-.187l.031-.031h.032c2.156-2.157 5.156-1.032 5.156-1.032l.656.25l.469-.5l13.313-15.343l.625-.719zm-.125 2.75L27.188 9.5l-8.75 10.063l-5-5zM11.937 15.874l5.188 5.188l-1.938 2.25l-5.5-5.5zM9.563 20.5l2.937 2.938c-1.242.046-2.746.437-4.156 1.812c-.02.02-.043.012-.063.031l-.25.219l-.531-.531l.219-.25l.031-.063c1.375-1.41 1.766-2.914 1.813-4.156"></svg:path>`,
})
export class LaHighlighterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHikingIcon],svg[la-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4A3.514 3.514 0 0 0 13 7.5c0 1.922 1.578 3.5 3.5 3.5S20 9.422 20 7.5S18.422 4 16.5 4m0 2c.84 0 1.5.66 1.5 1.5S17.34 9 16.5 9S15 8.34 15 7.5S15.66 6 16.5 6m-5.406 4.5a3.7 3.7 0 0 0-.781.031a3.05 3.05 0 0 0-1.47.688c-.874.742-1.382 1.922-1.75 3.656c-.116.559-.081 1.137.188 1.594c.27.457.692.734 1.063.906c.746.344 1.476.41 1.875.5l.469-1.938c-.602-.136-1.22-.246-1.5-.374c-.141-.067-.16-.106-.157-.094a.4.4 0 0 1 0-.188c.32-1.515.785-2.246 1.125-2.531s.621-.332 1.25-.188l.438-1.968a4.3 4.3 0 0 0-.75-.094m1.75.313L11.375 17.5c-.164.75.145 1.563.75 2.031l3.531 2.75l.875 5.719h2.032l-.938-6.031a2 2 0 0 0-.75-1.282l-3.531-2.75l1.031-4.656l1.031.281l1.781 1.72c.579.558 1.45.69 2.188.374L21 14.97V28h2V11h-2v1.813l-2.406 1.03l-1.782-1.718a2 2 0 0 0-.875-.5zm-1.313 9.812l-.844 2.531L8.188 28h2.25l2.032-3.906c.05-.098.094-.211.125-.313l.625-1.843z"></svg:path>`,
})
export class LaHikingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHippoIcon],svg[la-hippo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.16 4.004a3 3 0 0 0-.656.035C14.077 4.271 13 5.591 13 7.107V9H9.137c-3.778 0-6.872 3.13-7.114 7.07L2 16l-1 5l1.307-1.307c.19 1.235.447 2.533.722 3.55L4.22 28H9v-3.447c.739.249 1.627.447 2.5.447a8.4 8.4 0 0 0 2.5-.393V28h4.781l1.162-4.67c.033-.095.757-2.206 1.008-6.33H26c2.206 0 4-1.794 4-4v-2.178c0-2.25-1.582-3.82-3.846-3.82c-1.29 0-2.273.339-2.92.666C22.53 6.93 21.204 6 19 6h-.172a3 3 0 0 0-.887-1.285a3 3 0 0 0-1.78-.711zm-.336 2.01A1.004 1.004 0 0 1 17 7v1h2c2.298 0 3.08 1.4 3.105 1.447l.58 1.131l.971-.824c.036-.031.905-.752 2.498-.752c1.156 0 1.846.68 1.846 1.82V13c0 1.103-.897 2-2 2h-6.96l-.038.96c-.174 4.422-.94 6.69-.973 6.798L17.22 26H16v-5l-1.6 1.2c-1.015.761-2.594.8-2.9.8c-1.312 0-2.672-.64-2.898-.8L7 20.997V26H5.781l-.816-3.26C4.46 20.872 4 17.927 4 16.563C4 13.495 6.305 11 9.137 11H15V7.107c0-.538.361-1.017.824-1.093M20 9a1 1 0 0 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class LaHippoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHipsIcon],svg[la-hips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.479 7c-.79 0-1.44.67-1.44 1.49c0 .8.63 1.49 1.44 1.49s1.45-.68 1.45-1.49c0-.84-.65-1.49-1.45-1.49M.254 7.26c-.09 0-.131.04-.131.14v14.39c0 .1.04.15.13.15h2.052c.1 0 .138-.05.138-.15v-7.01c0-.05-.139-1.4 2.291-1.4s2.29 1.35 2.29 1.4v6.32c0 .46.37.84.82.84h1.37c.09 0 .13-.05.13-.15v-7.01c-.001-1.21-.46-2.16-1.4-2.86c-.8-.6-1.81-.92-3.01-.92c-.91-.01-1.73.19-2.49.58V7.4c0-.1-.05-.14-.14-.14zM18.88 11c-1.562 0-5.117 1.012-5.117 5.234v9.29c0 .048.03.138.129.138h2.011c.088 0 .139-.04.139-.139v-4.488c.805.638 1.756.963 2.826.963c2.976 0 5.344-2.455 5.344-5.5c0-3.053-2.366-5.498-5.332-5.498m9.723 0c-1.305 0-2.227.285-2.875.775c-.02.02-1.395 1.01-1.11 2.717q.25 1.487 1.824 2.21l2.631 1.187c.57.256.747.666.6 1.068c-.187.461-.649.688-1.797.688a4.8 4.8 0 0 1-2.865-.961c-.098-.068-.215.009-.215.117v1.736c0 .53.244.874.715 1.05a7 7 0 0 0 2.365.413c.628 0 1.266-.06 1.787-.217c.03-.02 1.765-.45 2.236-2.314a3.06 3.06 0 0 0-.158-1.983c-.333-.795-.902-1.363-1.707-1.726l-2.824-1.276c-.422-.186-.453-.57-.129-.814c.363-.285 2.168-.706 4.121.344c.078.049.195-.021.195-.12V11.63c0-.07-.028-.109-.097-.129a7.4 7.4 0 0 0-2.697-.5zm-18.145.24c-.08 0-.13.08-.13.15v10.4c0 .08.05.15.13.15h2.05c.09 0 .14-.05.14-.15v-10.4c0-.1-.05-.15-.14-.15zm8.422 2.108c1.689 0 3.053 1.404 3.053 3.152c.002 1.738-1.344 3.152-3.053 3.152c-.845 0-1.57-.314-2.16-.923c-.6-.62-.895-1.355-.895-2.229c0-1.748 1.356-3.152 3.055-3.152"></svg:path>`,
})
export class LaHipsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHireAHelperIcon],svg[la-hire-a-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.91 5l-.096.893a2.196 2.196 0 0 1-1.918 1.914L5 7.898V24.19l.87.116c1.023.134 1.79.862 1.95 1.855l.137.84H24.27l.074-.918a2.02 2.02 0 0 1 1.767-1.814l.889-.1V7.949l-.84-.135c-.989-.16-1.753-.95-1.857-1.92L24.207 5zm1.694 2h12.91A4.22 4.22 0 0 0 25 9.563v12.925A4.1 4.1 0 0 0 22.543 25H9.57A4.22 4.22 0 0 0 7 22.525V9.6A4.19 4.19 0 0 0 9.604 7m.671 3c-.193 0-.378.387-.037.475c.633.166 1.106.411 1.106 1.306v4.078c0 3.361-.009 4.63-.307 5.15c-.317.416-.444.418-.838.555c-.224 0-.305.436 0 .436c1.403 0 .726-.08 2.13-.08c1.382 0 .81.08 2.167.08c.232 0 .19-.33 0-.395c-.88-.306-.883-.414-.95-.515c-.401-.628-.228-3.404-.228-4.613c0-.214.248-.516.534-.516h4.296c.286 0 .534.302.534.516c0 1.209.173 3.984-.229 4.613c-.066.105-.068.21-.95.515c-.188.065-.227.395 0 .395c1.357 0 .785-.08 2.169-.08c1.403 0 .726.08 2.129.08c.302 0 .224-.436 0-.436c-.398-.137-.521-.143-.838-.554c-.301-.52-.307-1.79-.307-5.15v-4.08c0-.89.472-1.141 1.106-1.306c.344-.088.15-.475-.04-.475c-1.41 0-.795.08-2.206.08c-1.263 0-.637-.08-1.9-.08c-.128 0-.33.335-.04.436c.19.065 1.069.149 1.069 1.584c0 1.837.006 2.186-.04 2.71c0 .053-.09.516-.496.516h-4.218c-.406 0-.496-.464-.496-.516c-.047-.523-.04-.873-.04-2.71c0-1.435.88-1.52 1.069-1.584c.29-.101.089-.436-.04-.436c-1.262 0-.638.08-1.902.08c-1.41 0-.796-.08-2.207-.08z"></svg:path>`,
})
export class LaHireAHelperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHistoryIcon],svg[la-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A11.99 11.99 0 0 0 6 9.344V6H4v7h7v-2H7.375C9.102 8.02 12.297 6 16 6c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16H4c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m-1 4v9h7v-2h-5V8z"></svg:path>`,
})
export class LaHistoryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHockeyPuckIcon],svg[la-hockey-puck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7C9.043 7 2 8.718 2 12v8c0 3.282 7.043 5 14 5s14-1.718 14-5v-8c0-3.282-7.043-5-14-5m0 2c7.444 0 12 1.942 12 3c0 .926-3.489 2.528-9.348 2.914A40 40 0 0 1 16 15c-7.444 0-12-1.942-12-3s4.556-3 12-3M4 14.707c.06.035.134.064.195.098a10 10 0 0 0 1.014.486c.346.144.706.282 1.094.408c.813.265 1.725.48 2.681.664c.289.055.587.1.885.147q1.274.207 2.633.324c1.15.098 2.319.166 3.498.166s2.349-.068 3.498-.166a35 35 0 0 0 2.633-.324c.298-.047.596-.092.885-.147c.956-.184 1.868-.4 2.681-.664a15 15 0 0 0 1.395-.539a10 10 0 0 0 .713-.355c.061-.034.136-.063.195-.098V20c0 1.058-4.556 3-12 3S4 21.058 4 20z"></svg:path>`,
})
export class LaHockeyPuckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHollyBerryIcon],svg[la-holly-berry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-2.206 0-4 1.794-4 4c0 .75.22 1.443.58 2.043C10.574 9.256 9 10.938 9 13c0 1.185.527 2.24 1.348 2.973c-.127.007-.253.025-.38.029q-.483.015-.935 0l-.955-.033l-.074.953a5.6 5.6 0 0 1-.848 2.54a5.6 5.6 0 0 1-1.693 1.694l-.736.471l.365.793a9.8 9.8 0 0 1 .91 3.629a9 9 0 0 1 0 .902l-.074 1.516l1.422-.53A14.8 14.8 0 0 1 12.035 27q.482-.016.934 0l.955.031l.074-.95c.05-.633.239-1.587.848-2.544a5.6 5.6 0 0 1 1.693-1.693l.8-.51l-.468-.826a7.1 7.1 0 0 1-.879-2.631a7 7 0 0 1-.027-1.309c.06.05.147.118.265.182c.04.02.07.04.11.06c.16.07.23.1.27.11l.04.02c1.74.64 3.53 1 5.32 1.06h.16c.01.01.01.02.01.03c.19.89.54 1.75 1.02 2.51c.43.68.98 1.29 1.61 1.8a12 12 0 0 0-.75 3.29a16 16 0 0 0-3.99-.63h-.16c-.19-.9-.54-1.77-1.03-2.54c-.046-.071-.11-.135-.158-.206l-1.338.853a4 4 0 0 0-.326.235c.046.066.097.13.14.197c.61.95.79 1.91.84 2.54l.08.95l.951-.029c.3-.01.622-.01.942 0c1.57.05 3.15.37 4.68.94l1.42.53L26 26.95q-.03-.435 0-.9c.06-1.23.36-2.45.91-3.63l.36-.79l-.73-.47a5.6 5.6 0 0 1-1.7-1.7a5.5 5.5 0 0 1-.84-2.54l-.08-.95l-.95.03c-.2.01-.41.01-.62.01c-.11-.01-.21-.01-.32-.01c-.126-.004-.252-.02-.378-.027A3.98 3.98 0 0 0 23 13c0-2.062-1.574-3.744-3.58-3.957c.36-.6.58-1.293.58-2.043c0-2.206-1.794-4-4-4m0 2c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m-3 6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m6 0c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m-5.057 6.395a9.1 9.1 0 0 0 .781 3.297a7.6 7.6 0 0 0-1.57 1.77a7.6 7.6 0 0 0-1.021 2.534l-.166.006a16.5 16.5 0 0 0-3.988.627a11.7 11.7 0 0 0-.749-3.285a7.6 7.6 0 0 0 1.612-1.807a7.6 7.6 0 0 0 1.021-2.533l.168-.006a16.6 16.6 0 0 0 3.912-.603"></svg:path>`,
})
export class LaHollyBerryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHomeIcon],svg[la-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.594l-.719.687l-13 13L3.72 17.72L5 16.437V28h9V18h4v10h9V16.437l1.281 1.282l1.438-1.438l-13-13zm0 2.844l9 9V26h-5V16h-8v10H7V14.437z"></svg:path>`,
})
export class LaHomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHooliIcon],svg[la-hooli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.734 10.857c-.824.025-1.36.303-1.568.76c0 0-1.245 1.64 3.09 5.541v3.686H6.15v-1.432q-.488-.314-.968-.68a31 31 0 0 1-1.92-1.57v-1.549c.655.735 1.525 1.57 2.67 2.516l.224.18v-1.49c0-.346.084-.91.54-.91c.454 0 .53.344.53.75v2.435c.9.61 1.865 1.103 2.885 1.478v-4.695c0-.935-.67-1.87-2.03-1.87a2.21 2.21 0 0 0-1.925 1.095v-2.715c2.095 1.045 4.196 2.326 4.996 2.916c-.51.73-.464 1.403-.464 2.183c0 .935-.07 1.715.84 2.625s2.519.856 2.519.856s1.614.054 2.52-.856c.91-.91.835-1.69.835-2.625c.001-.925.076-1.71-.834-2.615c-.91-.91-2.52-.853-2.52-.853s-1.61-.057-2.52.853a3 3 0 0 0-.264.3c-1.91-1.48-3.627-2.324-5.108-3.054v-1.035l-1.125.53c-1.36-.553-2.472-.78-3.297-.755m26.58.22L25.42 12.44v8.403h2.894v-9.768zM2.457 11.3c.635-.045 1.42.14 2.26.455l-1.461.685v3.166C.82 12.882 1.31 11.805 1.496 11.65c.253-.213.58-.322.961-.35m28.098.845c-.795 0-1.446.43-1.446 1.225a1.446 1.446 0 0 0 2.891 0c0-.8-.645-1.225-1.445-1.225m-9.205 1.872s-1.617-.057-2.522.853c-.91.91-.84 1.696-.84 2.631s-.07 1.715.84 2.625s2.522.855 2.522.855s1.614.055 2.52-.855c.91-.91.839-1.69.839-2.625c-.005-.94.065-1.726-.84-2.63c-.91-.91-2.52-.854-2.52-.854zm7.755 1.298v5.528H32v-5.528zm-15.056.586c.17 0 .533.105.533.545v2.022c0 .18-.088.625-.533.625s-.535-.445-.535-.625v-2.022c0-.435.365-.545.535-.545m7.295 0c.17 0 .535.105.535.545v2.022c0 .18-.09.625-.535.625s-.535-.445-.535-.625v-2.022c0-.435.365-.545.535-.545M7.223 20.043v.8l1.914.04q-.992-.345-1.914-.84m1.914.84c1.825.625 3.495.71 4.736.36a10.7 10.7 0 0 1-3.766-.665v.266z"></svg:path>`,
})
export class LaHooliIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHornbillIcon],svg[la-hornbill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.52 3a2.5 2.5 0 0 0-.44 4.96C8.8 10.08 8.02 12.9 8.02 16h1c0-3.03 1.92-5.61 4.62-6.58C14.1 7.32 14.77 6 15.52 6c.49 0 .94.56 1.32 1.52c1.62.02 3.5.17 5.16.51C20.54 5.56 18.4 4 16.02 4c-1.09 0-2.12.32-3.07.91A2.49 2.49 0 0 0 10.52 3M16 8v1c3.03 0 5.61 1.92 6.58 4.62c2.1.46 3.42 1.13 3.42 1.88c0 .49-.56.94-1.52 1.32c-.02 1.62-.17 3.5-.51 5.16C26.44 20.52 28 18.38 28 16c0-1.09-.32-2.12-.91-3.07a2.5 2.5 0 1 0-3.05-2.87C21.92 8.78 19.1 8 16 8m-7.97 2.02C5.56 11.48 4 13.62 4 16c0 1.09.32 2.12.91 3.07a2.5 2.5 0 1 0 3.05 2.87C10.08 23.22 12.9 24 16 24v-1c-3.03 0-5.61-1.92-6.58-4.62C7.32 17.92 6 17.25 6 16.5c0-.49.56-.94 1.52-1.32c.02-1.62.17-3.5.51-5.16M22.98 16c0 3.03-1.92 5.61-4.62 6.58c-.46 2.1-1.13 3.42-1.88 3.42c-.49 0-.94-.56-1.32-1.52c-1.62-.02-3.5-.17-5.16-.51c1.46 2.47 3.6 4.03 5.98 4.03c1.09 0 2.12-.32 3.07-.91a2.5 2.5 0 1 0 2.87-3.05c1.28-2.12 2.06-4.94 2.06-8.04z"></svg:path>`,
})
export class LaHornbillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHorseIcon],svg[la-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.25 4c-1.262 0-2.344.457-3.125 1.125s-1.297 1.535-1.656 2.344c-.563 1.265-.598 2.023-.657 2.5c-.457.191-1.636.656-2.812.656c-1.531 0-2.61-.625-4.625-.625c-1.246 0-2.367.46-3.156 1.281a5 5 0 0 0-.219.25a4.2 4.2 0 0 0-1.125-.156c-.707 0-1.336.352-1.813.813s-.828 1.035-1.125 1.718C2.345 15.273 2 17.043 2 19h2c0-1.723.305-3.258.75-4.281c.223-.512.477-.887.688-1.094s.351-.25.437-.25c.137 0 .188.02.281.031c-.078.364-.156.735-.156 1.125c0 2.387 1.441 3.832 1.969 4.313c-.004.379-.043 1.558-.782 2.562l-.187.25V28h2v-5.875c1.047-1.781 1-3.719 1-3.719L9.969 18l-.313-.281S8 16.172 8 14.53c0-.855.266-1.469.656-1.875s.926-.656 1.719-.656c1.54 0 2.617.625 4.625.625c2.113 0 4.063-1 4.063-1l.5-.25l.062-.563s.102-1.28.656-2.53c.278-.626.684-1.223 1.157-1.626c.417-.36.898-.61 1.562-.656v1c1.508 0 2.094 1.406 2.094 1.406l.062.156l.125.157L27 10.406l-.188.219c-.44-.117-.94-.242-1.156-.313l-.343-.124l-.344.124c-.02.008-.594.145-1.032.063c-.437-.082-.761-.191-1-.844l-1.875.688c.153.418.368.77.625 1.062c-.09.465-.082.918-.03 1.344c.109.95.343 1.852.343 2.594c0 1.293-1.594 2.625-1.594 2.625l-.406.312V28h2v-8.906c.563-.434 2-1.676 2-3.875c0-1.106-.262-2.086-.344-2.813c-.004-.023.004-.039 0-.062c.63.101 1.059-.016 1.5-.125c.594.183 1.719.5 1.719.5l.594.156l.406-.469l.656-.719c.676-.75.653-1.91-.062-2.624l-1.75-1.782l-.032.032c-.156-.31-.66-1.231-1.687-1.813V4zM12 17v1c0 2.457-1.625 3.719-1.625 3.719L10 22v6h2v-5.156c.418-.395 1.254-1.352 1.719-3.219c.707.316 1.816.535 3.281.625V28h2v-9.656h-1c-2.031 0-3.094-.317-3.594-.563A1.4 1.4 0 0 1 14 17.5l-.219-.5z"></svg:path>`,
})
export class LaHorseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHorseHeadIcon],svg[la-horse-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4c-2.043 0-3.305 1.207-4 2.156V5C3.184 5 3 27.77 3 28h4s-.016-4.875 1.531-9.688c.774-2.406 1.95-4.785 3.625-6.5S15.973 9 19 9h.625l.281-.563S20.793 6.954 22 6.313V9.25l4.094 8.188l.093.156l.125.125c.403.379.555.738.625.968c.055.168.032.165.032.188c-.028.098-.07.309-.25.594c-.219.347-.414.531-.719.531s-.5-.184-.719-.531s-.312-.719-.312-.719l-.219-.844l-.875.094s-.832.098-1.75-.156s-1.785-.703-2.156-2.094l-.344-1.281l-1.125.656c-1.293.758-2.043 1.914-2.188 3.094c-.144 1.18.204 2.316.625 3.437C17.777 23.898 19 26.184 19 28h2c0-2.621-1.465-5.055-2.219-7.063c-.375-1.003-.547-1.851-.468-2.468a1.8 1.8 0 0 1 .468-1c.762 1.191 1.805 2.035 2.813 2.312c.93.258 1.308.176 1.75.157c.09.234.062.292.25.593C24 21.184 24.804 22 26 22c1.195 0 2-.816 2.406-1.469c.407-.652.563-1.281.563-1.281l.031-.094v-.093s.008-.481-.156-1c-.137-.438-.496-.97-.969-1.5h.031L24 8.75V4zm-4.531 3.031c-.004.008-.028.024-.032.032c-.406.019-.8.039-1.187.093c-.313.043-.61.121-.906.188a10 10 0 0 1 .906-.188c.39-.066.8-.105 1.219-.125M22 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaHorseHeadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHospitalIcon],svg[la-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v2h2v2h2V7h2V5h-2V3zM6 5v23h9v-3h2v3h9V5h-5v2h3v19h-5v-3h-6v3H8V7h3V5zm5 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaHospitalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHospitalAltIcon],svg[la-hospital-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281zm0 2.188l11 4.593V25H5V11.687zM15 13v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaHospitalAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHospitalSolidIcon],svg[la-hospital-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v2h2v2h2V7h2V5h-2V3zM6 5v23h9v-3h2v3h9V5h-5v2h3v19h-5v-3h-6v3H8V7h3V5zm5 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaHospitalSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHospitalSymbolIcon],svg[la-hospital-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3v12h2v-5h6v5h2V10h-2v5h-6v-5z"></svg:path>`,
})
export class LaHospitalSymbolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHotTubIcon],svg[la-hot-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.219 4.375C10.39 5.398 10.008 6.273 10 7.125s.371 1.512.625 1.938s.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75s-.41-1.434-.656-1.844s-.348-.629-.344-.875s.11-.703.781-1.531zm5 0C15.39 5.398 15.008 6.273 15 7.125s.371 1.512.625 1.938s.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75s-.41-1.434-.656-1.844s-.348-.629-.344-.875s.11-.703.781-1.531zm5 0C20.39 5.398 20.008 6.273 20 7.125s.371 1.512.625 1.938s.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75s-.41-1.434-.656-1.844s-.348-.629-.344-.875s.11-.703.781-1.531zM3 14v2h1.188l1.53 7.594v.031a3.06 3.06 0 0 0 2 2.219L7 28h2l.656-2h12.688L23 28h2l-.719-2.156c1.047-.32 1.86-1.16 2.094-2.219v-.031L27.813 16H29v-2zm3.219 2h19.593l-1.406 7.219c-.117.433-.484.781-1 .781H8.688c-.536 0-.899-.355-1-.813z"></svg:path>`,
})
export class LaHotTubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHotdogIcon],svg[la-hotdog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.219 4c-1.235 0-1.965.496-2.5 1.313c-.489-.07-.957-.125-1.344-.125c-1.25 0-2.316.628-3.063 1.437c-.722.781-1.19 1.734-1.593 2.688c-.004.003-.028-.004-.031 0c-1.04 1.953-2.145 4.519-5.907 6.28c-2.8 1.321-4.16 3.25-4.5 5.157C4.488 21.246 4 21.98 4 23.313c0 2.078 1.5 3.28 3.375 3.812C8.438 28.265 9.859 29 11.625 29c3.07 0 6.676-2.02 11-6.5h.031C27.434 17.719 29 13.754 29 10.937c0-1.832-.508-3.136-1.469-3.78C27.81 4.878 25.711 4 24.22 4zm-3.844 3.188c.129 0 .3.019.469.03c-.809 2.278-1.63 5.446-4.719 8.532c-2.957 3.023-6.125 3.574-8.5 4.156c.457-.87 1.336-1.715 3-2.5c4.324-2.027 5.832-5.289 6.813-7.125q.033-.046.062-.094c.36-.87.793-1.69 1.281-2.218c.489-.528.965-.782 1.594-.782zM24.969 9c.504-.023 1.074.066 1.75.313c.14.34.281.851.281 1.624c0 2.07-1.2 5.606-5.75 10.157l-.031.031c-2.961 3.07-5.48 4.727-7.469 5.438c-2.332-.149-4.918-1.946 4.125-8.563c3.66-2.676 3.555-8.824 7.094-9"></svg:path>`,
})
export class LaHotdogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHotelIcon],svg[la-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4L8 6l2 2l2-2zm2 2l2 2l2-2l-2-2zm4 0l2 2l2-2l-2-2zm4 0l2 2l2-2l-2-2zm2 2H5v20h22V8zM7 10h18v16h-6v-5h-6v5H7zm2 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 15v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 18v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm12 0v2h2v-2zm-6 2h2v3h-2z"></svg:path>`,
})
export class LaHotelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHotjarIcon],svg[la-hotjar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 4l1.727 1.908c.015.017 1.454 1.681 1.22 3.63c-.149 1.243-.96 2.392-2.402 3.403c-4.24 2.872-5.525 6.736-3.768 10.485C7.1 26.248 9.997 28 13.113 28h1.815l-1.137-1.611c-.908-1.174-.89-2.516-.674-3.516c1.545 1.169 3.35 1.02 4.604.22c1.15-.733 1.965-2.055 1.992-3.632c.258.408.47.883.623 1.41c.442 1.531.388 3.866-1.215 5.408L17.451 28h1.574c.891 0 1.785-.166 2.582-.563c2.49-1.235 4.17-3.49 5.055-6.751c.721-2.655.26-6.162-1.266-8.891C21.857 5.444 12 4.298 11.582 4.252zm4.453 2.615c2.907.654 8.061 2.319 10.2 6.155c1.262 2.257 1.674 5.098 1.074 7.418c-.497 1.94-1.279 3.39-2.397 4.412c.395-1.498.286-3.042-.072-4.284c-.655-2.268-2.208-3.913-4.055-4.295L16 15.561l1.143 1.95c1.06 1.785.485 3.27-.497 3.895c-.783.5-2.062.547-3.095-.968l-.953-1.4l-.766 1.51c-.265.524-1.292 2.783-.6 5.157c-1.46-.474-2.935-1.534-3.7-3.254c-1.622-3.638.81-6.28 3.148-7.863c1.948-1.365 3.045-2.992 3.258-4.834c.137-1.191-.126-2.275-.485-3.139"></svg:path>`,
})
export class LaHotjarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHourglassIcon],svg[la-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm5 11c2.773 0 5 2.227 5 5v4H11v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHourglassEndIcon],svg[la-hourglass-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm5 11c2.773 0 5 2.227 5 5v4h-1v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2h-1v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassEndIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHourglassHalfIcon],svg[la-hourglass-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm1.156 5c.446 1.723 1.98 3 3.844 3s3.398-1.277 3.844-3zM16 17c2.773 0 5 2.227 5 5v4h-1c0-2.21-1.79-4-4-4s-4 1.79-4 4h-1v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHourglassSolidIcon],svg[la-hourglass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm5 11c2.773 0 5 2.227 5 5v4H11v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHourglassStartIcon],svg[la-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm1 2v2c0 2.21 1.79 4 4 4s4-1.79 4-4V8zm4 9c2.773 0 5 2.227 5 5v4H11v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassStartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHouseDamageIcon],svg[la-house-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.59l-.72.69l-13 13l1.44 1.44L5 16.44V28h8.83L16 22h-3.62l3.63-6.21L16 20h3.55l-1.61 8H27V16.44l1.28 1.28l1.44-1.44l-13-13zm0 2.85l9 9V26h-4.62L22 18h-4v-6h-2.1L10 22.11V24h3.15l-.72 2H7V14.44z"></svg:path>`,
})
export class LaHouseDamageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHouzzIcon],svg[la-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.281L8 6.844V16l8-4.563zm0 9.156L24 16V6.844zM24 16l-8 4.563v9.156l8-4.563zm-8 4.563L8 16v9.156z"></svg:path>`,
})
export class LaHouzzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHryvniaIcon],svg[la-hryvnia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.21 5c-.99 0-1.948.29-2.773.84L9.445 7.168l1.11 1.664l1.992-1.328A3 3 0 0 1 14.21 7h4.385a2.407 2.407 0 0 1 1.539 4.254L19.24 12H8v2h8.84l-3.602 3H8v2h2.84l-.254.21A4.4 4.4 0 0 0 9 22.597A4.41 4.41 0 0 0 13.404 27h4.385c.99 0 1.95-.29 2.773-.84l1.993-1.328l-1.11-1.664l-1.992 1.328A3 3 0 0 1 17.79 25h-4.385a2.407 2.407 0 0 1-1.539-4.254L13.961 19H24v-2h-7.639l3.6-3H24v-2h-1.85A4.4 4.4 0 0 0 23 9.404A4.41 4.41 0 0 0 18.596 5z"></svg:path>`,
})
export class LaHryvniaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHtml5Icon],svg[la-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.219 4l.093 1.094l1.75 19.781l.063.688l.656.187l7.938 2.219l.25.062l.281-.062l7.938-2.188l.656-.187l.062-.688l1.782-19.812l.093-1.063h-1.093L6.313 4zm2.187 2l17.188.031l-1.625 18L16 25.97l-7-1.94zm2.407 3l.656 7.469h8.562l-.281 3.218l-2.75.75h-.031l-2.75-.75l-.156-2.062h-2.5l.343 3.969L15.97 23H16l5.063-1.406L21.75 14h-9.031l-.219-2.531h9.469L22.187 9z"></svg:path>`,
})
export class LaHtml5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laHubspotIcon],svg[la-hubspot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 1.332-.389l7.486 5.641A5.97 5.97 0 0 0 15 18c0 1.552.594 2.96 1.56 4.025l-3.044 3.045A2 2 0 0 0 13 25a2 2 0 0 0 0 4a2 2 0 0 0 1.93-2.516l3.209-3.209h.002A6 6 0 0 0 27 18a6 6 0 0 0-5.001-5.91V8.73A2 2 0 0 0 21 5a2 2 0 0 0-1 3.73v3.36a6 6 0 0 0-2.15.812L9.957 6.955A2.5 2.5 0 0 0 7.5 4M21 15c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3"></svg:path>`,
})
export class LaHubspotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laICursorIcon],svg[la-i-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v2h2c1.668 0 3 1.332 3 3v4h-3v2h3v6c0 1.668-1.332 3-3 3h-2v2h2c1.633 0 3.086-.813 4-2.031c.914 1.218 2.367 2.031 4 2.031h2v-2h-2c-1.668 0-3-1.332-3-3v-6h3v-2h-3v-4c0-1.668 1.332-3 3-3h2V5h-2c-1.633 0-3.086.813-4 2.031C15.086 5.813 13.633 5 12 5z"></svg:path>`,
})
export class LaICursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIceCreamIcon],svg[la-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-2.156 0-3.992 1.383-4.688 3.313C9.392 8.008 8 9.84 8 12c0 .063-.004.125 0 .188c-1.156.417-2 1.519-2 2.812c0 1.645 1.355 3 3 3h.375l4.313 8.5c.007.016.023.016.03.031C14.142 27.418 15.017 28 16 28s1.86-.582 2.281-1.469h.032c.003-.008-.004-.023 0-.031l4.312-8.5H23c1.645 0 3-1.355 3-3c0-1.313-.879-2.41-2.063-2.813a5.04 5.04 0 0 0-2.968-3.78C20.668 5.936 18.547 4 16 4m0 2c1.32 0 2.438.828 2.844 2c-2.336.074-4.293 1.777-4.75 4H10c0-1.652 1.348-3 3-3c.277 0 .555.055.813.125c.44-.586.953-1.121 1.562-1.531a5 5 0 0 0-1.656-.532A2.96 2.96 0 0 1 16 6m3 4c1.32 0 2.438.828 2.844 2h-5.688A2.99 2.99 0 0 1 19 10M9 14h14c.566 0 1 .434 1 1s-.434 1-1 1H12.625l1.031 2h6.719l-3.844 7.625l-.031.031v.032A.53.53 0 0 1 16 26a.53.53 0 0 1-.5-.313v-.03l-.031-.032l-4.563-9.063l-.281-.562H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaIceCreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIciclesIcon],svg[la-icicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v2.375l.813.281C7.546 8.27 8 9.156 8 10.125V21c0 1.645 1.355 3 3 3s3-1.355 3-3v-2.125c0-.73.66-1.195 1.344-.938a1 1 0 0 1 .656.938V25c0 1.645 1.355 3 3 3s3-1.355 3-3v-8.969c0-1.273.98-2.234 2.188-2.281h.03l1.782.625V12zm3.813 3.719L21.5 12.813c-.906.78-1.5 1.917-1.5 3.218V25c0 .566-.434 1-1 1s-1-.434-1-1v-6.125c0-1.246-.77-2.375-1.938-2.813c-1.93-.722-4.062.75-4.062 2.813V21c0 .566-.434 1-1 1s-1-.434-1-1V10.125c0-.48-.063-.953-.188-1.406z"></svg:path>`,
})
export class LaIciclesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIconsIcon],svg[la-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v8H7zm10 0h8v8h-8zm-6 2l-3 4h6zm8 0v4h4V9zM7 17h8v8H7zm10 0h8v8h-8zm4 1l-2 3l2 3l2-3zm-10 1a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaIconsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIdBadgeIcon],svg[la-id-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.094 0-2 .906-2 2H7v23h18V5h-6c0-1.094-.906-2-2-2zm0 2h2v2h-2zM9 7h4v2h6V7h4v19H9zm7 4c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 11 22h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C19.523 17.117 20 16.114 20 15c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaIdBadgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIdBadgeSolidIcon],svg[la-id-badge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.094 0-2 .906-2 2H7v23h18V5h-6c0-1.094-.906-2-2-2zm0 2h2v2h-2zM9 7h4v2h6V7h4v19H9zm7 4c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 11 22h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C19.523 17.117 20 16.114 20 15c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaIdBadgeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIdCardIcon],svg[la-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m6 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 6 21h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C14.523 16.117 15 15.114 15 14c0-2.2-1.8-4-4-4m7 1v2h8v-2zm-7 1c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m7 3v2h8v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class LaIdCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIdCardAltIcon],svg[la-id-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5c-1.094 0-2 .906-2 2v1H4v18h24V8h-9V7c0-1.094-.906-2-2-2zm0 2h2v2h-2zm-9 3h7v1h6v-1h7v14H6zm10 2c-2.2 0-4 1.8-4 4a3.98 3.98 0 0 0 1.215 2.855A5 5 0 0 0 11 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5 5 0 0 0-2.215-4.145A3.98 3.98 0 0 0 20 16c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaIdCardAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIdCardSolidIcon],svg[la-id-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m6 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 6 21h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C14.523 16.117 15 15.114 15 14c0-2.2-1.8-4-4-4m7 1v2h8v-2zm-7 1c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m7 3v2h8v-2zm0 4v2h5v-2z"></svg:path>`,
})
export class LaIdCardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIglooIcon],svg[la-igloo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6C8.832 6 3 11.832 3 19v7h26v-7c0-7.168-5.832-13-13-13m0 2c.338 0 .67.02 1 .05V12H7.523c2.02-2.44 5.07-4 8.477-4m3 .428A11 11 0 0 1 24.477 12H19zM6.215 14H8v5H5c0-1.801.444-3.498 1.215-5M10 14h12v5h-1.422A5 5 0 0 0 16 16a5 5 0 0 0-4.578 3H10zm14 0h1.785A10.9 10.9 0 0 1 27 19h-3zm-8 4c1.654 0 3 1.346 3 3v3h-6v-3c0-1.654 1.346-3 3-3M5 21h6v3H5zm16 0h6v3h-6z"></svg:path>`,
})
export class LaIglooIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laImageIcon],svg[la-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v22h28V5zm2 2h24v13.906l-5.281-5.312l-.719-.719l-4.531 4.531l-5.75-5.812l-.719-.719l-7 7zm20 2a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m-13 6.719L20.188 25H4v-2.281zm11 2l6 6V25h-4.969l-4.156-4.188z"></svg:path>`,
})
export class LaImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laImageSolidIcon],svg[la-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v22h28V5zm2 2h24v13.906l-5.281-5.312l-.719-.719l-4.531 4.531l-5.75-5.812l-.719-.719l-7 7zm20 2a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m-13 6.719L20.188 25H4v-2.281zm11 2l6 6V25h-4.969l-4.156-4.188z"></svg:path>`,
})
export class LaImageSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laImagesIcon],svg[la-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v18h4v4h24V9h-4V5zm2 2h20v14H4zm2 2v10h16V9zm2 2h12v6H8zm18 0h2v14H8v-2h18z"></svg:path>`,
})
export class LaImagesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laImagesSolidIcon],svg[la-images-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v18h4v4h24V9h-4V5zm2 2h20v14H4zm2 2v10h16V9zm2 2h12v6H8zm18 0h2v14H8v-2h18z"></svg:path>`,
})
export class LaImagesSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laImdbIcon],svg[la-imdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7v18h32V7zm2 2h28v14H2zm3 2.688v8.624h2v-8.625zm3.094 0v8.624H10V15.5l.906 4.813h1.281L13 15.5v4.813h1.813v-8.625H12l-.5 4.124l-.688-4.124zm7.812 0v8.5h2.406c1.301 0 1.79-.2 2.188-.5c.398-.2.594-.688.594-1.188v-5.188c0-.601-.196-1.113-.594-1.312c-.5-.2-.688-.313-2.188-.313zm6.188.124v8.5h1.812s.086-.601.188-.5c.199 0 1.008.375 1.406.375c.5 0 .7.008 1-.093c.398-.2.5-.48.5-.782v-5c0-.699-.71-1.218-1.313-1.218c-.601 0-1.175.394-1.375.594v-1.876zM18 13c.398 0 .813.008.813.406v5c0 .399-.512.407-.813.407zm6.594 1c.101 0 .218.105.218.406v4.281c0 .2-.019.407-.218.407c-.102 0-.188-.106-.188-.407v-4.28c0-.2-.011-.407.188-.407"></svg:path>`,
})
export class LaImdbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInboxIcon],svg[la-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.156 5L7 5.844l-2 13V27h22v-8.156l-2-13L24.844 5zm1.719 2h14.25l1.688 11H18v1c0 1.117-.883 2-2 2s-2-.883-2-2v-1H7.187zM7 20h5.188c.453 1.71 1.964 3 3.812 3s3.36-1.29 3.813-3H25v5H7z"></svg:path>`,
})
export class LaInboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIndentIcon],svg[la-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm0 4v2h19v-2zm26 0l-5 5l5 5zM3 15v2h19v-2zm0 4v2h19v-2zm0 4v2h26v-2z"></svg:path>`,
})
export class LaIndentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIndustryIcon],svg[la-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5v5.469l-3 1.781V9.219l-1.5.937L12 12.25V9.219l-1.5.937l-5 3l-.5.281V27h22V5zm2 2h3v18H7V14.531l3-1.781v3.031l1.5-.937L15 12.75v3.031l1.5-.937l5-3l.5-.281zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaIndustryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInfinityIcon],svg[la-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9c-3.855 0-7 3.145-7 7c0 3.86 3.14 7 7 7c2.93 0 4.719-1.61 6.094-3.594c-.41-.66-.754-1.312-1.094-1.937C12.773 19.496 11.398 21 9 21c-2.758 0-5-2.242-5-5c0-2.773 2.227-5 5-5c1.617 0 2.645.578 3.594 1.563c.949.984 1.75 2.406 2.562 3.906c.813 1.5 1.637 3.078 2.844 4.343S20.871 23 23 23c3.855 0 7-3.145 7-7c0-3.86-3.14-7-7-7c-2.914 0-4.715 1.559-6.094 3.5q.615.973 1.125 1.906C19.25 12.437 20.61 11 23 11c2.758 0 5 2.242 5 5c0 2.773-2.227 5-5 5c-1.59 0-2.59-.578-3.531-1.563c-.942-.984-1.746-2.406-2.563-3.906c-.816-1.5-1.656-3.078-2.875-4.344C12.812 9.922 11.148 9 9 9"></svg:path>`,
})
export class LaInfinityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInfoIcon],svg[la-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m-5 7v5h2v5h-2v5h10v-5h-2V13zm2 2h4v10h2v1h-6v-1h2v-9h-2z"></svg:path>`,
})
export class LaInfoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInfoCircleIcon],svg[la-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-1 5v2h2v-2zm0 4v8h2v-8z"></svg:path>`,
})
export class LaInfoCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInstagramIcon],svg[la-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5zm0 2h9.062A4.463 4.463 0 0 1 25 11.469v9.062A4.463 4.463 0 0 1 20.531 25H11.47A4.463 4.463 0 0 1 7 20.531V11.47A4.463 4.463 0 0 1 11.469 7m10.437 2.188a.9.9 0 0 0-.906.906c0 .504.402.906.906.906a.9.9 0 0 0 .907-.906a.9.9 0 0 0-.907-.906M16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"></svg:path>`,
})
export class LaInstagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIntercomIcon],svg[la-intercom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9.002 2c-.318 0-.637.211-.637.633v9.217c0 .843 1.274.843 1.274 0V9.633c0-.422-.319-.633-.637-.633m-3.18.318c-.318 0-.636.212-.636.633v8.492c0 .843 1.271.843 1.271 0V9.951c0-.421-.316-.633-.635-.633m6.356 0c-.319 0-.637.212-.637.633v8.492c0 .843 1.273.843 1.273 0V9.951c0-.421-.318-.633-.636-.633M9.64 10.592c-.319 0-.635.211-.635.633v5.716c0 .843 1.271.843 1.271 0v-5.716c0-.422-.318-.633-.636-.633m12.716 0c-.318 0-.636.211-.636.633v5.716c0 .843 1.273.843 1.273 0v-5.716c0-.422-.318-.633-.637-.633m.075 9.207a.6.6 0 0 0-.487.156c-2.69 2.295-9.083 2.354-11.888 0c-.64-.545-1.466.422-.827.967c3.252 2.784 10.442 2.682 13.541 0c.477-.412.131-1.057-.34-1.123z"></svg:path>`,
})
export class LaIntercomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInternetExplorerIcon],svg[la-internet-explorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.7 8.813c2.445-6.243-2.302-5.805-2.302-5.805c-3.046 0-6.855 2.73-6.855 2.73S14 4.531 9.457 7.234c-4.95 3.106-4.785 8.621-4.785 8.621C8.695 10.184 14.3 7.88 14.3 7.88v.375C6.027 13.816 4.07 21.957 3.582 23.617C3.09 25.277 3.418 29 6.898 29c3.485 0 7.02-2.762 7.02-2.762s.762.164 2.828.164c8.707 0 10.774-7.55 10.774-7.55h-7.727s-.543 2.464-3.316 2.464c-3.813 0-3.594-3.91-3.594-3.91h14.746c.707-10.062-8.215-11.508-8.215-11.508s3.152-2.195 5.875-2.195c4.313 0 2.273 4.973 2.273 4.973zM13.483 26.128s-5.312 3.172-7.699.973c-1.273-2.2.8-5.313.8-5.313s1.759 3.207 6.9 4.34zm6.391-12.149h-7.012s-.09-3.363 3.594-3.363c3.559 0 3.418 3.363 3.418 3.363"></svg:path>`,
})
export class LaInternetExplorerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laInvisionIcon],svg[la-invision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5.902 3c-.568.004-1.134.383-1.136 1.133c0 .64.52 1.15 1.156 1.15c.179-.005 1.15-.17 1.133-1.168c-.013-.748-.584-1.119-1.153-1.115m6.702 3.203c-.85.071-1.777.659-2.424 1.865l.379-1.724h-2.932l-.412 1.515h1.375l-.844 3.385c-.703 1.564-2.445 1.88-2.445.988c.013-.48-.032-.19 1.4-5.888h-3.256l-.412 1.517h1.356c-.942 3.84-.977 3.827-.98 4.436c0 2.075 2.688 2.39 4.03.183l-.345 1.385h1.922l1.1-4.402c.626-2.544 3.153-2.006 2.552-.03c-.388 1.39-1.732 4.544 1.064 4.544c1.014 0 1.821-.653 2.268-2.217l-.762-.285c-.609 1.683-1.355 1.38-1.355.718c.013-.345.03-.328.635-2.506c.695-2.285-.5-3.602-1.914-3.484"></svg:path>`,
})
export class LaInvisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laIoxhostIcon],svg[la-ioxhost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16c0 1.04.156 2.035.406 3H2c-.55 0-1 .45-1 1s.45 1 1 1h3.094c1.902 4.121 6.078 7 10.906 7c6.617 0 12-5.383 12-12c0-1.04-.156-2.035-.406-3H30c.55 0 1-.45 1-1s-.45-1-1-1h-3.094C25.004 6.879 20.828 4 16 4m0 2a9.95 9.95 0 0 1 8.656 5H11c-.55 0-1 .45-1 1s.45 1 1 1h14.563c.296.95.437 1.953.437 3c0 5.535-4.465 10-10 10a9.95 9.95 0 0 1-8.656-5H21c.55 0 1-.45 1-1s-.45-1-1-1H6.437A10 10 0 0 1 6 16c0-5.535 4.465-10 10-10m-5 9c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class LaIoxhostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laItalicIcon],svg[la-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.75 5l-.063.938l-.187 3L11.437 10h2l-.874 12h-2l-.063.938l-.188 3L10.22 27h10.03l.063-.938l.187-3L20.563 22h-2l.875-12h2l.062-.938l.188-3L21.78 5zm1.875 2h6l-.063 1h-2l-.062.938l-1 14L16.437 24h2l-.062 1h-6l.063-1h2l.062-.938l1-14L15.563 8h-2z"></svg:path>`,
})
export class LaItalicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laItchIoIcon],svg[la-itch-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-3.252 0-7.688.05-8.588.13c-1.01.607-3.01 2.901-3.03 3.497v1C4.383 10.89 5.567 12 6.638 12C7.92 12 8.99 10.93 8.99 9.668C8.99 10.93 10.03 12 11.312 12c1.293 0 2.293-1.069 2.293-2.332c0 1.262 1.09 2.332 2.383 2.332h.022c1.293 0 2.383-1.069 2.383-2.332c0 1.262 1.01 2.332 2.293 2.332s2.324-1.069 2.324-2.332c0 1.262 1.07 2.332 2.353 2.332c1.071 0 2.252-1.11 2.252-2.373v-1c-.02-.596-2.02-2.89-3.03-3.496C21.445 5.02 19.253 5 16 5m-2.45 6.742c-1.052 1.81-3.698 1.832-4.73.012c-.63 1.092-2.056 1.514-2.666 1.307c-.178 1.899-.3 11.648.992 13.283c3.797.885 14.019.866 17.708 0c1.495-1.524 1.16-11.522.992-13.283c-.61.207-2.037-.215-2.657-1.307c-1.043 1.82-3.688 1.798-4.74-.012c-.325.59-1.082 1.367-2.449 1.367a2.73 2.73 0 0 1-2.45-1.367M11.42 14c.8 0 1.53 0 2.41.98c1.45-.15 2.89-.15 4.34 0c.89-.97 1.61-.97 2.41-.97c2.58 0 3.2 3.81 4.13 7.09c.84 3.05-.28 3.13-1.67 3.13c-2.07-.08-3.22-1.58-3.22-3.09c-1.93.32-5.01.44-7.64 0c0 1.51-1.15 3.01-3.22 3.09c-1.39 0-2.51-.08-1.67-3.13c.93-3.3 1.55-7.09 4.13-7.09zM16 16.877s-1.694 1.562-2 2.107l1.107-.04v.966c0 .058.819.008.893.008c.447.017.893.033.893-.008v-.967l1.107.041c-.306-.546-2-2.107-2-2.107"></svg:path>`,
})
export class LaItchIoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laItunesIcon],svg[la-itunes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.049 5A5.04 5.04 0 0 0 5 10.049V21.95A5.04 5.04 0 0 0 10.049 27H21.95A5.04 5.04 0 0 0 27 21.951V10.05A5.04 5.04 0 0 0 21.951 5H10.05zm5.931 2a9 9 0 1 1-.001 18.001A9 9 0 0 1 15.98 7m0 1.025A7.98 7.98 0 0 0 8 16.01C8 20.417 11.568 24 15.98 24a7.984 7.984 0 0 0 7.985-7.984c0-4.412-3.577-7.99-7.985-7.99zM19.316 11c.262-.018.414.138.414.4c-.004 7.836.019 7.123-.046 7.407c-.147.625-.62.974-1.254 1.093c-.556.101-1.02.129-1.465-.23a1.12 1.12 0 0 1-.065-1.69c.386-.367.933-.44 1.746-.587c.138-.023.257-.055.354-.17c.147-.165.102.199.102-3.42c0-.257-.125-.328-.387-.282c-.184.032-4.22.786-4.22.786c-.23.05-.31.118-.31.38c0 5.333.024 4.8-.054 5.153a1.33 1.33 0 0 1-.684.898c-.38.211-1.074.305-1.441.24c-.983-.183-1.328-1.318-.662-1.97c.386-.367.933-.441 1.746-.588c.138-.023.256-.055.353-.17c.23-.262.042-5.543.12-5.85a.45.45 0 0 1 .16-.293a.7.7 0 0 1 .308-.125c4.64-.873 5.203-.982 5.285-.982"></svg:path>`,
})
export class LaItunesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laItunesNoteIcon],svg[la-itunes-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.068 5.006c-.178 0-1.442.25-11.81 2.191c-.081 0-.469.102-.682.28c-.209.168-.32.392-.361.656c-.173.69.378 13.148-.135 13.732c-.224.25-.619.321-.924.377c-1.824.32-3.038.488-3.902 1.31c-1.49 1.454-.718 3.99 1.478 4.401c.823.152 2.37-.054 3.223-.527c.752-.387 1.322-1.083 1.535-2.008c.183-.793.127-.245.127-12.174c0-.585.164-.737.682-.85c0 0 9.02-1.686 9.437-1.757c.584-.102.864.056.864.625c0 8.087.102 7.929-.223 8.295c-.224.249-.49.319-.795.375c-1.825.32-2.927.376-3.791 1.199c-1.093 1.067-1.078 2.76.137 3.781c.905.69 1.92.86 3.166.631c1.418-.265 2.476-1.048 2.8-2.441c.148-.635.1.304.094-17.202c0-.59-.336-.935-.92-.894"></svg:path>`,
})
export class LaItunesNoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJavaIcon],svg[la-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.625 3c1.402 3.309-5.027 5.336-5.625 8.094c-.547 2.531 3.809 5.5 3.813 5.5c-.665-1.047-1.149-1.93-1.813-3.563C12.875 10.273 20.855 7.785 17.625 3m4.25 4.594s-5.621.355-5.906 4.031c-.13 1.637 1.484 2.496 1.531 3.688c.04.972-.969 1.78-.969 1.78s1.809-.327 2.375-1.812c.625-1.648-1.218-2.773-1.031-4.094c.18-1.261 4-3.593 4-3.593m1.375 8.468c-.59-.027-1.254.192-1.844.625c1.164-.257 2.157.473 2.157 1.313c0 1.883-2.688 3.656-2.688 3.656s4.156-.465 4.156-3.562c0-1.278-.8-1.985-1.781-2.032m-11.031.032c-1.45.05-4.344.289-4.344 1.406c0 1.555 6.742 1.676 11.563.719c0 0 1.312-.914 1.656-1.25c-3.16.656-10.375.758-10.375.187c0-.523 2.312-1.062 2.312-1.062s-.328-.016-.812 0m-.438 2.875c-.793 0-1.969.617-1.969 1.218c0 1.211 5.97 2.141 10.376.375l-1.532-.937c-2.988.977-8.508.652-6.875-.656m.75 2.718c-1.082 0-1.781.684-1.781 1.188c0 1.55 6.465 1.703 9.031.125l-1.625-1.063c-1.914.825-6.73.946-5.625-.25m-3.625 1.407C7.141 23.059 6 23.859 6 24.53c0 3.574 18.094 3.403 18.094-.25c0-.605-.715-.894-.969-1.031c1.477 3.492-14.781 3.219-14.781 1.156c0-.468 1.203-.937 2.312-.718l-.937-.532a6 6 0 0 0-.813-.062zM26 25.5c-2.75 2.66-9.71 3.613-16.719 1.969c7.008 2.93 16.684 1.3 16.719-1.969"></svg:path>`,
})
export class LaJavaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJediIcon],svg[la-jedi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.498 4a.365.365 0 0 0-.367.352l-.53 13.705l-1.398-.95a.365.365 0 0 0-.459.036a.37.37 0 0 0-.062.457l.923 1.55l-1.933.4a.37.37 0 0 0-.293.36a.37.37 0 0 0 .293.361l1.933.4l-.925 1.554a.37.37 0 0 0 .064.457a.38.38 0 0 0 .46.033l1.247-.85l-.113 3c-2.617-.535-4.592-2.844-4.592-5.603c0-1.612.673-3.107 1.893-4.21a.76.76 0 0 0 .252-.597a.76.76 0 0 0-.309-.568c-1.685-1.248-2.65-3.155-2.65-5.229c0-.807.15-1.6.45-2.355a.73.73 0 0 0-.071-.694a.75.75 0 0 0-.622-.332a.73.73 0 0 0-.425.137a12.4 12.4 0 0 0-4.963 7.45l1.902 1.902h-2.17a12 12 0 0 0-.023 1.377c.028.617.116 1.218.234 1.81l2.693 2.693H4.104c1.896 4.147 6.026 7.12 10.804 7.34q.297.014.59.014c5.071 0 9.438-3.026 11.397-7.354h-1.836l2.705-2.705A12.4 12.4 0 0 0 28 15.56c0-.267-.032-.53-.049-.795h-2.156l1.894-1.895a12.46 12.46 0 0 0-4.959-7.457a.73.73 0 0 0-.423-.137a.75.75 0 0 0-.621.332a.74.74 0 0 0-.075.694c.301.756.453 1.55.453 2.357c0 2.074-.965 3.98-2.65 5.229a.752.752 0 0 0-.057 1.168a5.68 5.68 0 0 1 1.774 5.38c-.448 2.223-2.245 4.002-4.473 4.434l-.113-3.002l1.248.85c.137.095.34.078.46-.037a.37.37 0 0 0 .061-.457l-.923-1.55l1.933-.402a.367.367 0 0 0 0-.718l-1.933-.403l.925-1.55a.367.367 0 0 0-.523-.493l-1.397.95l-.53-13.703A.366.366 0 0 0 15.497 4z"></svg:path>`,
})
export class LaJediIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJediOrderIcon],svg[la-jedi-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.486 3l-.441 16.854l-1.752-2.561l1.127 3.096l-3.492.507l3.492.508l-1.35 2.645l1.924-2.02c-.1 3.838-.123 4.782-.123 4.782s-8.613-4-3.826-12.838c0 0-5.97-6.591-.563-10.641c0 0-9.233 5.575-3.375 15.148c0 0-4.843-4.73-2.31-9.511c0 0-4.39 6.192.96 13.004c0 0-1.461-.897-2.755-4.334c0 0 .942 10.226 12.385 10.359h.228C27.051 27.866 28 17.641 28 17.641c-1.317 3.43-2.783 4.334-2.783 4.334c5.35-6.812.959-13.004.959-13.004c2.533 4.787-2.31 9.511-2.31 9.511C29.722 8.914 20.49 3.336 20.49 3.336c5.406 4.056-.562 10.639-.562 10.639c4.787 8.837-3.826 12.838-3.826 12.838s-.022-.944-.123-4.782l1.923 2.02l-1.35-2.645l3.495-.508l-3.494-.507l1.127-3.096l-1.752 2.56C15.804 14.961 15.492 3.1 15.486 3"></svg:path>`,
})
export class LaJediOrderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJenkinsIcon],svg[la-jenkins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.426 1.895c-4.14.09-6.508 1.953-6.64 2.058c-.106.035-2.84.973-3.395 3.418c-.086.035-.11.031-.235.106c-.25.164-.562.433-.816.867c-.485.824-.688 2.238-.16 4.437c-.735.567-1.133 1.453-1.14 2.39c-.009 1.09.362 2.231 1.108 3.028c.668.715 1.317 1.024 1.817 1.13c.195.042.203.003.348 0c.09.468.43 1.823 1.16 3.23c-.422.238-1.63.914-3.051 1.738c-.8.465-1.59.93-2.188 1.297a23 23 0 0 0-.73.476a4 4 0 0 0-.238.18a1 1 0 0 0-.106.098c-.039.047-.117.074-.144.312l-.04.383L4.165 30h23.703l.11-.352s.273-.867.535-1.847a28 28 0 0 0 .36-1.461c.093-.461.163-.832.144-1.172c-.016-.195-.078-.266-.125-.34a2 2 0 0 0-.16-.203a6 6 0 0 0-.434-.426a27 27 0 0 0-1.207-1.015c-.7-.559-1.145-.887-1.39-1.075c.21-.261.663-.734 1.241-2.199c.707-1.781 1.336-4.488 1.075-8.195c-.25-3.508-1.461-5.95-3.246-7.512c-1.446-1.258-3.235-1.922-5.133-2.18v-.007c-.016 0-.028.004-.043 0a16 16 0 0 0-1.317-.118a16 16 0 0 0-.851-.003zm1.09 1.12c.32-.019.652-.015.996 0c1.742.239 3.34.84 4.601 1.946c.692.605 1.29 1.371 1.766 2.316a2.6 2.6 0 0 0-1.07-.183c-.848.047-1.47.449-1.47.449l.536.848s.434-.27.984-.297c.54-.028 1.153.113 1.743 1.125c.199.761.343 1.597.414 2.539c-.032-.055-.055-.102-.094-.164a37 37 0 0 0-.406-.727c-.297-.508-.586-.996-.586-.996l-.86.508a116 116 0 0 0 .977 1.695c.035.059.055.098.078.145c-.043.023-.063.039-.156.058c-.305.067-.813.059-1.301-.086l-.277.965c.64.184 1.27.211 1.785.098c.262-.055.496-.137.703-.313a1 1 0 0 0 .18-.222c.093 3.074-.454 5.324-1.043 6.824c-.653 1.648-1.328 2.367-1.328 2.367l-.375.41v.004c-.547.535-1.79 1.48-3.891 1.633c-2.922.215-4.922-1.613-5.887-2.64c-.922-.977-1.05-1.723-1.05-1.723l-.985.191s.23 1.074 1.309 2.219c.43.457 1.09 1.086 1.945 1.652c-.063.004-.129-.004-.195.008c-.391.066-.778.246-1.047.578c-1.418-.082-2.414-.492-3.047-.902c-.68-.445-.938-.828-.945-.84c-.668-1.086-1.063-2.61-1.223-3.328c.27-.137.605-.383.953-.809l-.777-.633c-.274.332-.5.485-.645.56l-.008.003l-.25.078s-.097.043-.394-.02c-.297-.062-.75-.25-1.297-.835c-.527-.563-.848-1.493-.84-2.332c.008-.844.313-1.524.883-1.813l.016-.012c.675-.375 1.125-.425 1.43-.363c.304.063.515.238.694.492c.364.512.47 1.282.47 1.282l.07.62l2.027-.699l-.05-.402s-.095-.691-.392-1.539c-.183-.512-.101-1.176.094-1.863c.192-.688.477-1.367.594-1.989c.125-.656-.035-1.125-.215-1.445c.36-.726 2.274-4.176 6.856-4.437zm-4.375.395a10.2 10.2 0 0 0-3.192 3.277l-.136.016c-.926.086-1.727.234-2.329.363c.696-1.48 2.672-2.191 2.672-2.191l.09-.031l.07-.059s.985-.812 2.825-1.375m2.312 3.91c-1.047.055-1.762.575-2.144 1.157c-.516.777-.543 1.62-.543 1.62l.996.055s.043-.617.379-1.125c.336-.507.851-.949 2.238-.625l.23-.972a4.1 4.1 0 0 0-1.156-.11m-5.805.422c.204.227.364.344.247.969c-.082.437-.368 1.14-.582 1.91c-.211.766-.364 1.629-.07 2.461c.187.531.202.73.241.95l-.171.058c-.063-.344-.051-.645-.43-1.18c-.285-.398-.719-.773-1.32-.894c-.446-.09-.954-.032-1.524.191c-.394-1.844-.14-2.84.164-3.355c.164-.286.352-.442.488-.528a.7.7 0 0 1 .192-.097h.008s1.367-.32 2.757-.485m8 2.285l-.921.387s.68 1.61 1.128 2.402c-.03.02-.035.032-.14.055c-.336.074-.977.04-1.703-.277l-.403.918c.891.386 1.7.472 2.317.336c.308-.067.59-.18.793-.438c.207-.258.226-.695.05-.984c-.312-.52-1.12-2.399-1.12-2.399zm3.872.598l-1 .012s.027 2.379 1.933 4.105h-.004c.801.727 1.137 1.2 1.192 1.367c.027.086.02.078.004.11a.9.9 0 0 1-.188.218c-.148.133-.734.426-1.367.618c-.633.191-1.344.316-1.793.304c-.168-.007-.192-.039-.219-.066c-.031-.031-.062-.098-.078-.203c-.031-.207.027-.473.027-.473l-.972-.246s-.114.402-.043.867c.035.235.12.504.332.735c.215.23.554.375.926.386c.64.016 1.402-.132 2.109-.347s1.332-.457 1.746-.832c.164-.149.328-.317.434-.555a1.22 1.22 0 0 0 .035-.824c-.18-.547-.633-1.035-1.473-1.801c-1.57-1.422-1.601-3.375-1.601-3.375m-14.832 3.29c-.32.019-.657.163-.961.413l.562.676c-.137.41-.273 1.012-.16 1.633l.984-.18c-.054-.297.028-.7.117-1.035c.125.254.223.504.223.504l.965-.254s-.145-.61-.535-1.125c-.2-.258-.477-.524-.883-.61a1 1 0 0 0-.313-.023zm17.597 3.85c-.762.864-2.156.981-2.156.981l.058 1s1.743-.058 2.848-1.324zm-6.71.356l-.634.774c2.122 1.722 4.684.984 4.684.984l-.277-.957s-2.067.582-3.774-.8zm-.278 1.602l-.965.273c.195.695.68 1.192 1.23 1.5c.547.309 1.168.453 1.754.531c1.172.153 2.235.008 2.235.008l-.13-.992s-.964.125-1.972-.008c-.508-.062-1.015-.195-1.402-.41c-.383-.219-.637-.484-.75-.902m6.816 3.199c.25.191.676.504 1.352 1.043c.426.34.851.691 1.16.973a5 5 0 0 1 .36.355l.019.02c-.004.128-.031.43-.113.82c-.09.43-.22.933-.344 1.41c-.211.77-.348 1.215-.422 1.457h-1.176l-.035-.285c-.043-.383-.25-.617-.46-.777c.038-.075.089-.145.112-.22c.106-.308.137-.632.137-.948c.008-.637-.105-1.278-.148-1.63c-.067-.574-.285-1.066-.653-1.402a1.7 1.7 0 0 0-.43-.27c.266-.198.485-.39.641-.546m-15.23.55c.152.352.418.887 1.101 1.774c.961 1.25 2.547 1.688 3.293 1.828c.043.465.098.91.22 1.313c.062.215.151.422.273.613H4.836l-.828-2.063c.027-.019.035-.027.066-.046c.156-.11.399-.266.692-.442a84 84 0 0 1 2.156-1.285c1.375-.797 2.465-1.41 2.96-1.691zm13.812.876c.239-.047.39.004.535.136c.145.13.286.38.332.774c.047.406.145.996.141 1.508c0 .254-.031.484-.078.629c-.05.148-.102.195-.156.222c-.399.203-1.13.16-1.75.008a7 7 0 0 1-.727-.227c.059-.156.098-.324.098-.5c0-.445-.207-.84-.524-1.113c.336-.265.704-.558 1.086-.828a10 10 0 0 1 .664-.434c.196-.109.364-.171.38-.175zm-11.972.199a7.3 7.3 0 0 0 2.43.676a3 3 0 0 0 .007.52c.012.085.016.167.024.257c-.692-.184-1.797-.566-2.41-1.363c-.044-.055-.012-.035-.051-.09m4.402.094a4.2 4.2 0 0 1 1.453.41l1.856.969c-.188.246-.305.55-.305.878c0 .266.078.512.203.73c-.656.376-1.926 1.028-2.973 1.106c-.343.024-.507-.039-.62-.125c-.11-.086-.208-.238-.286-.507c-.16-.54-.18-1.457-.297-2.477c-.05-.406.024-.617.11-.738c.09-.121.222-.2.453-.235a1.7 1.7 0 0 1 .406-.011m5.012.218c-.157.121-.352.262-.477.36c.047-.035-.129.039-.305.035a1.3 1.3 0 0 1-.261-.02l-.532-.277q.45.031.93-.004c.23-.015.43-.058.645-.094m-.528 1.563c.27 0 .48.207.48.476c0 .27-.21.477-.48.477a.47.47 0 0 1-.48-.477c0-.27.21-.476.48-.476m.832 1.816c.157.07.446.203.989.34V29h-1.727l-.328-.648c.078.011.156.023.234.023c.032 0 .059-.008.09-.008c.16.051.313.086.434.051c.187-.059.199-.102.308-.18m3.23.371v.016s.24.102.25.203l.02.172H23.43v-.25c.41.031.836.004 1.242-.14zm-5.23.118l.141.273h-.672c.192-.094.375-.188.531-.273"></svg:path>`,
})
export class LaJenkinsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJiraIcon],svg[la-jira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.021 2.2L3.581 14.601a1.99 1.99 0 0 0 0 2.802L16.021 29.8l.708-.703c3.639-3.625 5.865-5.845 7.181-7.16l1.356-1.358a5 5 0 0 0 .248-.26l.078-.074l-.006-.008l.062-.078l2.764-2.758c.38-.374.588-.871.588-1.402s-.208-1.026-.586-1.4c-1.663-1.66-3.58-3.583-5.508-5.516c-2.16-2.166-4.333-4.346-6.177-6.182L16.02 2.2zm0 2.823c1.68 1.676 3.58 3.58 5.47 5.473c1.922 1.928 3.834 3.845 5.495 5.502c-1.354 1.35-2.308 2.302-2.96 2.99c-.125.113-.251.238-.381.366c-.224.22-.444.432-.493.478l.018.02a8884 8884 0 0 1-7.147 7.125L4.993 16.016L16.02 5.023zm0 5.903L10.928 16l5.093 5.074L21.117 16zm0 2.822L18.283 16l-2.262 2.252L13.761 16z"></svg:path>`,
})
export class LaJiraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJogetIcon],svg[la-joget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11q-.002.605-.066 1.191c-2.522-.002-9.46.042-11.98-.023c-3.082-.069-4.535-1.155-3.243-2.666c1.28-1.523 2.515-2.273 3.496-2.861c.992-.577 1.477-1.835-1.338-1.616c-5.504.374-7.806 3.415-8.863 5.842C5.078 9.864 9.98 5 16 5m5.582 7c-.993 0-2.665 1.42-4.107 2.354c-1.742 1.142-3.623 1.742-3.623 1.742l9.404-.092l2.732-1.34s.197-.53-1.06-.853c-1.258-.335-3.311.658-4.961 1.546c-1.65.877-1.719.45-1.719.45s2.583-1.937 3.16-2.295c.59-.357 1.777-.774.75-1.362a1.16 1.16 0 0 0-.576-.15m4.51 8.367C24.398 24.265 20.513 27 16 27a11 11 0 0 1-2.05-.2c-.384-.631-.754-1.293-.913-1.66c-.334-.772-1.568-2.573 1.8-3.796c2.695-.975 8.751-.952 11.255-.977"></svg:path>`,
})
export class LaJogetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJointIcon],svg[la-joint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.906 3.992c-.361.361-.624.8-.935 1.483c-.312.682-.593 1.543-.596 2.498s.327 2.034 1.188 2.857c.86.823 2.157 1.366 3.986 1.6c1.525.194 2.522.464 3.08.799c.558.334.79.669.97 1.488l1.954-.432c-.26-1.18-.9-2.175-1.895-2.771c-.994-.597-2.228-.861-3.855-1.069c-1.558-.198-2.413-.635-2.858-1.06c-.444-.426-.572-.862-.57-1.406c.002-.545.186-1.171.416-1.674c.23-.504.584-.954.53-.899zm5.524.32v2c.62 0 1.443.077 2.052.422c.61.346 1.115.874 1.239 2.336l.076.916h.92c.516 0 1.597.167 2.13.633c.267.233.448.502.51 1.026c.063.523-.03 1.328-.502 2.474l1.85.762c.558-1.358.756-2.493.639-3.473a3.6 3.6 0 0 0-1.182-2.295c-.91-.795-1.904-.977-2.709-1.045c-.346-1.445-1.053-2.546-1.984-3.074c-1.122-.635-2.297-.681-3.04-.681zM30 16L2 17v6l28 1zm-2 2.072v3.856l-2-.073v-3.71zm-4 .143v3.57l-2-.072v-3.426zm-4 .142v3.286L4 21.07v-2.14z"></svg:path>`,
})
export class LaJointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJoomlaIcon],svg[la-joomla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.023 8.688a2.677 2.677 0 0 1 5.316-.434a4.43 4.43 0 0 1 4.15 1.18l.152.156l-1.973 1.973l-.152-.157a1.64 1.64 0 0 0-2.32.004a1.637 1.637 0 0 0-.005 2.32l4.45 4.45l-1.973 1.972l-2.09-2.09l-1.976-1.972l-.383-.387a4.42 4.42 0 0 1-1.11-4.406a2.67 2.67 0 0 1-2.086-2.61zm5.79 5.195l1.972 1.976l2.09-2.086l2.36-2.359a1.637 1.637 0 0 1 2.32-.004c.64.64.64 1.68 0 2.32l-.153.153l1.973 1.976l.152-.156a4.42 4.42 0 0 0 1.125-4.36a2.678 2.678 0 0 0-.351-5.331a2.675 2.675 0 0 0-2.649 2.308a4.44 4.44 0 0 0-4.386 1.117l-.387.387l-1.977 1.973zm11.886 6.781a4.42 4.42 0 0 0-1.172-4.184l-.386-.39l-1.973-1.973l-2.082-2.086l-1.977 1.973l2.086 2.09l2.36 2.36a1.637 1.637 0 1 1-2.316 2.316l-.153-.149l-1.973 1.977l.149.148a4.43 4.43 0 0 0 4.441 1.102a2.68 2.68 0 0 0 2.621 2.144a2.677 2.677 0 0 0 .375-5.328m-3.765-2.363l-1.973-1.977l-2.086 2.086l-1.973 1.977l-.386.386a1.643 1.643 0 0 1-2.325-.003a1.64 1.64 0 0 1 0-2.32l.153-.15l-1.973-1.976l-.152.153a4.42 4.42 0 0 0-1.16 4.23a2.678 2.678 0 0 0 .617 5.281a2.684 2.684 0 0 0 2.61-2.078a4.42 4.42 0 0 0 4.202-1.164l.39-.387l1.974-1.976z"></svg:path>`,
})
export class LaJoomlaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJournalWhillsIcon],svg[la-journal-whills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a2.9 2.9 0 0 0-1 .188V7c0-.566.434-1 1-1m7 2.215c-.114 0-.21.09-.215.205l-.248 5.937l-.642-.437a.215.215 0 0 0-.305.287l.459.768l-.961.199a.215.215 0 0 0 0 .42l.96.199l-.458.766a.215.215 0 0 0 .183.324a.2.2 0 0 0 .122-.037l.556-.377l-.072 1.752A3 3 0 0 1 13 15.285c0-.806.323-1.533.84-2.072a3.41 3.41 0 0 1-1.27-2.643c0-.657.195-1.263.516-1.785a6 6 0 0 0-2.484 2.639l1.416 1.416a.428.428 0 1 1-.608.605l-1.139-1.138c-.16.54-.272 1.101-.271 1.693c0 .028.009.052.01.08l1.986 1.74a.43.43 0 0 1 .041.606a.43.43 0 0 1-.322.144a.43.43 0 0 1-.283-.105l-1.264-1.106C10.786 18.016 13.156 20 16 20s5.214-1.985 5.832-4.64l-1.264 1.107a.43.43 0 0 1-.605-.041v-.002a.43.43 0 0 1 .04-.604l1.99-1.74c0-.028.007-.052.007-.08c0-.592-.113-1.152-.271-1.693l-1.14 1.138a.429.429 0 0 1-.605-.605l1.414-1.416a6 6 0 0 0-2.484-2.639a3.4 3.4 0 0 1 .516 1.785a3.41 3.41 0 0 1-1.27 2.643c.517.539.84 1.266.84 2.072a3 3 0 0 1-2.377 2.934l-.076-1.836l.68.46a.215.215 0 0 0 .267-.02a.21.21 0 0 0 .037-.264l-.459-.768l.961-.2c.1-.02.17-.107.17-.208s-.07-.19-.17-.211l-.96-.2l.458-.767a.21.21 0 0 0-.037-.264a.22.22 0 0 0-.267-.021l-.762.516l-.25-6.016A.215.215 0 0 0 16 8.215M9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaJournalWhillsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJsIcon],svg[la-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7v18h32V7zm2 2h28v14H2zm10 3v5.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5V17H9v.5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5V12zm6.5 0a2.497 2.497 0 0 0-2.5 2.5c0 1.383 1.117 2.5 2.5 2.5c.215 0 .5.285.5.5c0 .3-.117.5-.5.5c-.367 0-.426-.078-.438-.094c-.011-.015-.062-.078-.062-.312h-2c0 .566.164 1.203.625 1.687c.46.485 1.145.719 1.875.719c1.418 0 2.5-1.2 2.5-2.5c0-1.383-1.117-2.5-2.5-2.5c-.215 0-.5-.285-.5-.5s.285-.5.5-.5c.266 0 .348.063.406.125a.42.42 0 0 1 .094.281h2c0-.59-.215-1.191-.656-1.656S19.234 12 18.5 12"></svg:path>`,
})
export class LaJsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJsSquareIcon],svg[la-js-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm13.244 8c-1.425 0-2.346.912-2.346 2.12c0 1.31.77 1.937 1.928 2.43l.4.173c.733.323 1.169.511 1.169 1.062c0 .465-.427.799-1.092.799c-.788 0-1.236-.418-1.578-.979l-1.31.75c.464.931 1.433 1.645 2.925 1.645c1.52 0 2.66-.788 2.66-2.232c0-1.35-.77-1.949-2.139-2.528l-.398-.172c-.693-.304-.988-.503-.988-.978c0-.39.294-.694.77-.694c.465 0 .758.2 1.034.694l1.256-.807c-.532-.93-1.265-1.283-2.29-1.283zm-5.85.096v5.463c0 .798-.342 1.005-.865 1.005c-.55 0-.788-.379-1.035-.826l-1.31.79c.38.807 1.129 1.472 2.412 1.472C15.02 23 16 22.24 16 20.576v-5.48z"></svg:path>`,
})
export class LaJsSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laJsfiddleIcon],svg[la-jsfiddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.992 14.348a8.492 8.492 0 0 0-16.266-3.273A4 4 0 0 0 9 11c-2.14 0-3.871 1.684-3.98 3.797A6 6 0 0 0 2 20c0 3.313 2.688 6 6 6h16a5.995 5.995 0 0 0 1.992-11.652M20.891 23c-1.914 0-3.746-1.645-5.516-3.234C13.863 18.406 12.301 17 11.109 17C9.926 17 9 17.879 9 19c0 1.086.969 2 2.11 2c.988 0 1.878-.41 2.73-1.258l1.41 1.414C14.023 22.383 12.633 23 11.11 23C8.843 23 7 21.207 7 19s1.844-4 4.11-4c1.956 0 3.812 1.664 5.6 3.277C18.2 19.613 19.743 21 20.888 21C22.055 21 23 20.102 23 19c0-1.121-.926-2-2.11-2c-1.355 0-2.562.902-2.878 1.219l-1.414-1.41c.07-.075 1.828-1.809 4.293-1.809C23.156 15 25 16.793 25 19s-1.844 4-4.11 4z"></svg:path>`,
})
export class LaJsfiddleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKaabaIcon],svg[la-kaaba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-.214 0-.428.035-.633.104L5.025 8.55A1.5 1.5 0 0 0 4 9.973V22.89a1.5 1.5 0 0 0 1.137 1.455l10.379 2.593a2 2 0 0 0 .968 0l10.38-2.593A1.5 1.5 0 0 0 28 22.89V9.973c0-.646-.412-1.218-1.025-1.422L16.633 5.104A2 2 0 0 0 16 5m0 2l10 3.332v2.545l-9.2-2.758a2.77 2.77 0 0 0-1.6 0L6 12.877v-2.545zm0 4.633q.243 0 .482.068L26 14.56v7.94L16 25L6 22.5v-7.941l9.525-2.858q.232-.069.475-.068m-.78 1.373a.3.3 0 0 0-.128.004l-3.332.908a.28.28 0 0 0-.201.268v.582c0 .184.174.31.35.267l3.333-.908c.117-.033.2-.15.2-.275v-.575a.28.28 0 0 0-.221-.271zm1.561 0a.28.28 0 0 0-.222.271v.577c0 .133.084.242.2.275l3.333.906c.175.05.35-.082.35-.265v-.584a.28.28 0 0 0-.2-.266l-3.334-.908a.3.3 0 0 0-.127-.006m-6.56 1.365a.3.3 0 0 0-.13.006l-2.775.758a.276.276 0 0 0-.207.267v.575c0 .184.175.317.35.267l2.783-.758a.28.28 0 0 0 .2-.267v-.574a.28.28 0 0 0-.221-.274m11.56 0a.28.28 0 0 0-.222.274v.574c0 .125.084.234.2.267l2.784.758c.175.05.35-.084.35-.267v-.575a.28.28 0 0 0-.21-.267l-2.775-.758a.3.3 0 0 0-.127-.006"></svg:path>`,
})
export class LaKaabaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKaggleIcon],svg[la-kaggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.352 4Q10 4 10 4.352v23.293q0 .351.352.351h2.296q.353 0 .354-.351v-4.836l1.809-1.723l5.238 6.664q.212.249.496.25h3.172q.249 0 .283-.143l-.066-.359l-6.91-8.588l6.626-6.412c.123-.128.08-.498-.252-.498h-3.28q-.25.001-.499.252L13 18.975V4.352Q13 4 12.648 4z"></svg:path>`,
})
export class LaKaggleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKeyIcon],svg[la-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3c-4.945 0-9 4.055-9 9c0 .52.086.977.156 1.438L3.281 21.28L3 21.594V29h7v-3h3v-3h3v-2.969c1.18.578 2.555.969 4 .969c4.945 0 9-4.055 9-9s-4.055-9-9-9m0 2c3.855 0 7 3.145 7 7s-3.145 7-7 7a7.36 7.36 0 0 1-3.406-.875l-.25-.125H14v3h-3v3H8v3H5v-4.563l7.906-7.937l.375-.344l-.094-.531C13.086 13.023 13 12.488 13 12c0-3.855 3.145-7 7-7m2 3a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaKeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKeybaseIcon],svg[la-keybase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.717 4c-.54.75-.934 1.29-1.313 1.848a1.7 1.7 0 0 0-1.216-.612c-1.522-.096-1.437-.09-1.506-.09a1.75 1.75 0 0 0-1.735 1.64l-.084 1.403v.006a1.75 1.75 0 0 0 1.633 1.844l1.063.065c-.091.9.053 1.741.416 2.464a11.2 11.2 0 0 0-3.688 2.502c-3.349 3.348-3.281 7.519-3.281 11.532l1.27-1.35A10.6 10.6 0 0 0 7.461 28h1.535a9.3 9.3 0 0 1-1.666-3.873l2.13-2.268l-1.009 3.178c2.247-1.639 5.7-4.704 12.52-2.695c1.803.525 3.723.038 4.582-1.543c.432 2.116.058 5.121-1.196 7.195h1.457c.78-1.559 1.186-3.433 1.186-5.517c0-2.637-1.126-5.306-3.078-7.32c-1.66-1.71-3.383-2.45-4.397-2.776a4.087 4.087 0 0 0-2.46-5.482c-.988-.333-1.521-.305-1.73-.305c-.005-.005-.245-.392.481-1.946L14.716 4zm-4.03 2.428c.023 0-.095-.01 1.426.086c.533.037.421.633.416.74a8.7 8.7 0 0 0-.699 1.574l-1.254-.074a.465.465 0 0 1-.431-.488l.084-1.405a.46.46 0 0 1 .459-.433zm3.46.615c.203.517.71.847 1.263.82c.395-.016 2.163.14 2.899 1.7c.389.835.463 2.254-.647 3.261l-.447-.55c-1.296-1.308-2.819-.2-2.819.937a2.8 2.8 0 0 1-1.189-1.072c-1.046-1.747.208-3.959.94-5.096m-3.192.144l-.053.836l.832.055l.053-.836zm5.053 5.782a.29.29 0 0 1 .219.119l2.95 3.648c.257.316-.219.713-.48.391l-.293-.363l-1.047.855a.24.24 0 0 1-.336-.031l-.474-.584a.24.24 0 0 1 .031-.336l1.053-.863l-.428-.528l-.517.43c-.256.209-.642-.3-.397-.504l.514-.424l-1.057-1.3c-.196-.237.03-.52.262-.51m2.803.515q.624.195 1.22.461c1.643.734 3.014 1.967 3.916 3.237c.816 1.157.956 2.341.366 3.175c-.582.831-1.73 1.115-2.989.745c-3.917-1.157-7.447-.895-10.531.771l1.594-5.014c-6.291 6.698-5.644 6.013-6.082 6.479c.059-1.57.265-3.216 1.06-4.834c.71-1.436 2.43-3.778 5.406-4.887c.853.815 1.894 1.077 2.278 1.147a1.54 1.54 0 0 0 .246 1.607a1.54 1.54 0 0 0 .266 1.438l.474.584c.288.357.723.563 1.18.562c.646 0 1.03-.406 1.185-.53c.848.31 1.478-.204 1.547-.263a1.6 1.6 0 0 0 .225-2.244l-1.703-2.102q.182-.153.342-.332m.595 10.92a.95.95 0 0 0-.949.955a.95.95 0 1 0 1.9 0a.956.956 0 0 0-.95-.955zm-5.9.006a.95.95 0 0 0-.95.953c0 .527.425.955.95.955s.95-.428.95-.955a.953.953 0 0 0-.95-.953"></svg:path>`,
})
export class LaKeybaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKeyboardIcon],svg[la-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2zm0 2h26v14H3zm2 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM5 15v2h4v-2zm6 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h4v-2zM5 19v2h4v-2zm6 0v2h10v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaKeyboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKeyboardSolidIcon],svg[la-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2zm0 2h26v14H3zm2 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM5 15v2h4v-2zm6 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h4v-2zM5 19v2h4v-2zm6 0v2h10v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaKeyboardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKeycdnIcon],svg[la-keycdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.793 4.393c-1.22 0-2.268 1.007-2.268 2.265c0 .231.04.463.108.684L21.7 9.146a8.915 8.915 0 0 0-10.578-.672l.988 1.028a7.44 7.44 0 0 1 4.043-1.047c2.352.058 4.416 1.104 5.942 3.149L25.043 8.8c.096.038.452.096.75.086C27.012 8.887 28 7.869 28 6.65c0-1.21-.988-2.256-2.207-2.257M7.883 6.066a1.38 1.38 0 0 0-.992.381a1.41 1.41 0 0 0-.059 1.989c.317.336.768.488 1.219.421l1.18 1.239c-1.364 1.574-2.18 3.59-2.227 5.683a8.95 8.95 0 0 0 1.307 4.907l1.037-1.01a7.6 7.6 0 0 1-.942-3.87a7.52 7.52 0 0 1 1.91-4.818c.442-.508.846-.816 1.067-.998l-2.15-2.256a1.38 1.38 0 0 0-.356-1.228a1.45 1.45 0 0 0-.994-.44m8.146 3.95c-3.053.009-5.614 2.204-6.002 5.255a6.01 6.01 0 0 0 5.207 6.698a6.01 6.01 0 0 0 6.702-5.213c.406-3.275-1.923-6.285-5.217-6.69a4.6 4.6 0 0 0-.69-.05m7.594 1.357l-1.027.979c.643 1.172 1.019 2.495.99 3.85c-.058 2.092-1.02 4.224-3.025 5.827c0 0 .913.97 2.084 2.207c-.087.451.036.913.353 1.239a1.42 1.42 0 0 0 1.988.048a1.403 1.403 0 0 0 .05-1.988a1.36 1.36 0 0 0-1.212-.422l-1.133-1.199c1.392-1.565 2.228-3.572 2.286-5.674c.038-1.709-.452-3.408-1.354-4.867M15.998 13c1.252.024 2.234.982 2.25 2.25c-.008.895-.475 1.6-1.252 2.02l.502 1.73h-3l.504-1.73c-.784-.404-1.238-1.141-1.262-2.02c.04-1.291 1.014-2.226 2.258-2.25m-6.172 7.436l-2.832 2.763A2.24 2.24 0 0 0 4 25.342c0 1.257.97 2.263 2.227 2.263c1.556 0 2.611-1.526 2.17-2.918a296 296 0 0 1 1.804-1.775a9 9 0 0 0 5.52 2.082a9 9 0 0 0 5.068-1.42c-.115-.115-.738-.777-.978-1.027a7.65 7.65 0 0 1-4.051 1.047c-2.602-.067-4.427-1.152-5.934-3.158"></svg:path>`,
})
export class LaKeycdnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKhandaIcon],svg[la-khanda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.492 3l-2.879 2.578a.695.695 0 0 0-.174.783l.254.56c-1.59.957-2.666 2.683-2.666 4.675c0 2.039 1.129 3.793 2.782 4.734l-.383.844a.69.69 0 0 0 .136.746l2.15 1.762v.97l-3.74-2.603a7.78 7.78 0 0 1-3.466-6.453c0-1.518.582-3.15 1.387-4.428c.189-.302.117-.674-.127-.934s-.668-.301-.977-.13c-3.835 2.092-5.878 6.921-4.137 11.35c.345.877.876 1.679 1.489 2.396l2.63 2.886a.78.78 0 0 0 .96.182l3.974-1.758l1.428.994l-2.719 1.553c-.082-.018-.157-.049-.244-.049A1.172 1.172 0 1 0 11.172 26c.59 0 1.059-.445 1.139-1.014l2.402-1.334v1.461c-.458.273-.713.753-.713 1.325C14 27.3 14.63 28 15.492 28c.863 0 1.508-.7 1.508-1.563c0-.572-.269-1.05-.727-1.322v-1.472l2.416 1.343c.081.568.548 1.014 1.14 1.014a1.172 1.172 0 0 0 0-2.344c-.088 0-.163.031-.245.05l-2.717-1.554l1.426-.994l3.977 1.758a.78.78 0 0 0 .959-.182l2.46-2.687c.921-1.075 1.66-2.32 2.014-3.692c1.058-4.085-.946-8.292-4.545-10.257a.78.78 0 0 0-1.037 1.1c.805 1.276 1.375 2.878 1.375 4.392a7.8 7.8 0 0 1-3.48 6.465l-3.743 2.605v-.98l2.153-1.762a.69.69 0 0 0 .137-.746l-.383-.842c1.652-.94 2.779-2.698 2.779-4.736c0-1.992-1.075-3.716-2.666-4.672l.256-.56a.7.7 0 0 0-.176-.784zm1.957 5.672c.935.656 1.551 1.715 1.551 2.916c0 1.256-.669 2.362-1.678 3.008l-.328-.7a6.12 6.12 0 0 1 0-4.255zm-3.906.017l.451.963a6.1 6.1 0 0 1 0 4.23l-.326.696C12.665 13.936 12 12.837 12 11.588c0-1.194.613-2.247 1.543-2.899"></svg:path>`,
})
export class LaKhandaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKickstarterIcon],svg[la-kickstarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm6.633 4C12.58 11 12 11.808 12 12.816v6.317c0 1.053.56 1.86 1.652 1.86c.877 0 1.6-.571 1.6-1.86v-1.705l2.47 3.088c.503.608 1.592.685 2.278 0c.596-.616.603-1.5.162-2.055l-2.002-2.563l1.572-2.418a1.55 1.55 0 0 0-.226-2.001c-.67-.65-1.821-.707-2.506.285l-1.748 2.662V12.84c0-1.253-.717-1.84-1.62-1.84z"></svg:path>`,
})
export class LaKickstarterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKickstarterKIcon],svg[la-kickstarter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5a3 3 0 0 0-3 3v16a3 3 0 1 0 6 0v-4.586l5.742 6.563A3 3 0 0 0 22.002 27a2.999 2.999 0 0 0 2.256-4.975l-5.399-6.17L23.4 9.801a3.001 3.001 0 0 0-4.8-3.602L14 12.334V8a3 3 0 0 0-3-3"></svg:path>`,
})
export class LaKickstarterKIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissIcon],svg[la-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M15 17.008v1.49c.901 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.533-.274-1.006-.713-1.375c.44-.369.713-.843.713-1.375c0-1.19-1.308-2.121-2.977-2.121"></svg:path>`,
})
export class LaKissIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissBeamIcon],svg[la-kiss-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12m-6 5.008v1.49c.902 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.532-.272-1.006-.711-1.375c.439-.369.71-.843.71-1.375c0-1.19-1.307-2.121-2.976-2.121"></svg:path>`,
})
export class LaKissBeamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissBeamSolidIcon],svg[la-kiss-beam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12m-6 5.008v1.49c.902 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.532-.272-1.006-.711-1.375c.439-.369.71-.843.71-1.375c0-1.19-1.307-2.121-2.976-2.121"></svg:path>`,
})
export class LaKissBeamSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissSolidIcon],svg[la-kiss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M15 17.008v1.49c.901 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.533-.274-1.006-.713-1.375c.44-.369.713-.843.713-1.375c0-1.19-1.308-2.121-2.977-2.121"></svg:path>`,
})
export class LaKissSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissWinkHeartIcon],svg[la-kiss-wink-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13c2.369 0 4.583-.647 6.498-1.758l-1.441-1.482A10.9 10.9 0 0 1 16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11l-.004.076a4.7 4.7 0 0 1 1.96.787c.018-.287.044-.571.044-.863c0-7.168-5.832-13-13-13m-4.5 9a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m8.5 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S18.692 14 20.001 14s2.39.793 2.39.793l1.22-1.586C23.608 13.207 22.093 12 20 12m-5 5.008v1.49c.902 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.532-.272-1.006-.711-1.375c.439-.369.71-.843.71-1.375c0-1.19-1.307-2.121-2.976-2.121m7.75.992C21.22 18 20 19.29 20 20.8c0 .879.505 1.525.87 1.9l3.63 3.73l3.64-3.73c.365-.374.86-.891.86-1.9c0-1.51-1.22-2.8-2.75-2.8c-.73 0-1.33.25-1.75.5c-.42-.25-1.02-.5-1.75-.5m0 2q.36 0 .727.219l1.023.61l1.023-.61A1.4 1.4 0 0 1 26.25 20c.4 0 .75.375.75.8c0 .188-.008.213-.291.503l-2.207 2.261l-2.2-2.26c-.112-.115-.302-.335-.302-.503c0-.426.35-.801.75-.801"></svg:path>`,
})
export class LaKissWinkHeartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKissWinkHeartSolidIcon],svg[la-kiss-wink-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13c2.369 0 4.583-.647 6.498-1.758l-1.441-1.482A10.9 10.9 0 0 1 16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11l-.004.076a4.7 4.7 0 0 1 1.96.787c.018-.287.044-.571.044-.863c0-7.168-5.832-13-13-13m-4.5 9a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m8.5 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S18.692 14 20.001 14s2.39.793 2.39.793l1.22-1.586C23.608 13.207 22.093 12 20 12m-5 5.008v1.49c.902 0 1.477.415 1.477.63s-.572.626-1.467.63H15v1.492h.01c.895.003 1.467.414 1.467.629s-.576.63-1.477.63V24c1.669 0 2.977-.932 2.977-2.121c0-.532-.272-1.006-.711-1.375c.439-.369.71-.843.71-1.375c0-1.19-1.307-2.121-2.976-2.121m7.75.992C21.22 18 20 19.29 20 20.8c0 .879.505 1.525.87 1.9l3.63 3.73l3.64-3.73c.365-.374.86-.891.86-1.9c0-1.51-1.22-2.8-2.75-2.8c-.73 0-1.33.25-1.75.5c-.42-.25-1.02-.5-1.75-.5m0 2q.36 0 .727.219l1.023.61l1.023-.61A1.4 1.4 0 0 1 26.25 20c.4 0 .75.375.75.8c0 .188-.008.213-.291.503l-2.207 2.261l-2.2-2.26c-.112-.115-.302-.335-.302-.503c0-.426.35-.801.75-.801"></svg:path>`,
})
export class LaKissWinkHeartSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKiwiBirdIcon],svg[la-kiwi-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.48 4C6.414 4.113 2.113 8.414 2 13.48a9.19 9.19 0 0 0 4 7.817v6.238l3.445 2.297l1.11-1.664L8 26.465v-4.117a9.5 9.5 0 0 0 2 .527v2.844l3.684 1.23l.632-1.898L12 24.28v-1.3c4.383-.102 5.176-1.415 6.473-1.954c2.515-1.015 3.437-2.34 3.894-3.238c.227-.45.356-.71.528-.887c.171-.175.437-.359 1.136-.527l.004-.004a10 10 0 0 0 1.68-.55c.098.292.207.636.316 1.062C26.508 18.66 27 21.574 27 26h2c0-4.574-.508-7.66-1.031-9.633a15 15 0 0 0-.543-1.648c.207-.2.387-.41.531-.625c.648-.977.64-1.996.64-2.496c0-1.164-.285-2.364-1.085-3.301C26.707 7.363 25.414 6.8 23.8 6.8a4.9 4.9 0 0 0-4.254 2.472C18.187 6.055 15.375 4 11.5 4zm.036 2c3.636.008 5.714 1.707 6.62 4.969l.204.73h2.453l.18-.77c.289-1.222 1.472-2.128 2.828-2.128c1.187 0 1.793.336 2.187.8c.399.465.61 1.165.61 1.997c0 .5-.004.933-.305 1.386c-.3.45-.977 1.032-2.723 1.442h-.008c-.94.23-1.628.597-2.097 1.078c-.473.484-.684.992-.883 1.383c-.395.777-.672 1.402-2.86 2.285l-.003.004C15.672 20.02 16.03 21 11.5 21c-4.285 0-7.59-3.215-7.5-7.48c.086-3.93 3.582-7.426 7.516-7.52"></svg:path>`,
})
export class LaKiwiBirdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laKorvueIcon],svg[la-korvue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3 3v5.88h7.81L21.509 10h-4.584L14 15.506V10zm0 6.5v5.47h4v-5.175l3 5.176h4.814L18.111 16.5z"></svg:path>`,
})
export class LaKorvueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLandmarkIcon],svg[la-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.906L3.625 9.062L3 9.345V12h2v11H3v5h26v-5h-2V12h2V9.344l-.625-.281zm0 2.188L25.375 10H6.625zM7 12h2v11H7zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zM5 25h22v1H5z"></svg:path>`,
})
export class LaLandmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLanguageIcon],svg[la-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v18h6v6h18V10h-6V4zm2 2h14v4.563L10.562 20H6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.5 4.5 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.3 8.3 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156c.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8zm10.438 4H26v14H12v-4.563zM20 13.844l-.938 2.844l-2 6l-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157l-2-6zm0 6.281l.281.875h-.562z"></svg:path>`,
})
export class LaLanguageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaptopIcon],svg[la-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.281 2.312A2.45 2.45 0 0 0 2 23.594A2.417 2.417 0 0 0 4.406 26h23.188A2.417 2.417 0 0 0 30 23.594c0-.64-.266-1.266-.719-1.719L27 19.562V6zm2 2h18v11H7zm-.563 13h19.125l2.313 2.281a.47.47 0 0 1 .125.313a.385.385 0 0 1-.406.406H4.406A.385.385 0 0 1 4 23.594c0-.11.047-.235.125-.313z"></svg:path>`,
})
export class LaLaptopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaptopCodeIcon],svg[la-laptop-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594A2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6zm2 2h18v11H7zm9 1l-1.5 9H16l1.5-9zm-3.914 2l-1.719 2.068L10 13.5l.367.432L12.086 16l1.086-.863L11.81 13.5l1.36-1.637zm7.828 0l-1.086.863L20.19 13.5l-1.36 1.637l1.085.863l1.719-2.068L22 13.5l-.367-.432zM6.437 21h19.125l2.313 2.281a.46.46 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z"></svg:path>`,
})
export class LaLaptopCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaptopMedicalIcon],svg[la-laptop-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6v13.563l-2.281 2.314A2.44 2.44 0 0 0 2 23.594A2.42 2.42 0 0 0 4.406 26h23.188A2.42 2.42 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6zm2 2h18v11H7zm8 2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM6.437 21h19.125l2.313 2.281a.46.46 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313z"></svg:path>`,
})
export class LaLaptopMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaravelIcon],svg[la-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.557 5.006c-.657.028-5.668.453-6.024.486c-.356.03-.748.194-.392 1.057S7.186 19.95 7.346 20.316c.159.364.572.96 1.537.72c.989-.245 4.42-1.162 6.295-1.665c.989 1.836 3.01 5.558 3.384 6.09c.497.714.844.592 1.608.353c.6-.187 9.356-3.407 9.75-3.57c.394-.168.636-.282.37-.69c-.198-.296-2.509-3.461-3.718-5.12c.83-.225 3.778-1.027 4.092-1.118c.37-.097.42-.277.219-.507c-.197-.23-2.943-3.744-3.426-4.338s-.723-.49-1.018-.448c-.3.043-3.772.642-4.175.71c-.403.071-.657.234-.409.59c.22.315 2.504 3.63 3.01 4.359l-9.08 2.222L8.561 5.561c-.286-.436-.348-.59-1.004-.555m-.114.857c.17-.01.15.028.211.133c0 0 6.666 11.765 6.778 11.97c.122.207.053.27-.055.294s-5.195 1.269-5.467 1.332c-.272.062-.272.033-.305-.063S2.561 6.745 2.477 6.586s-.08-.283 0-.283s4.802-.43 4.966-.44m19.328 4.983c.068.015.139.066.223.183c.17.235 2.466 3.211 2.555 3.326c.084.111-.067.179-.264.227c-.197.043-3.45.867-3.45.867l-2.657-3.728c-.075-.11-.136-.217.052-.24c.187-.025 3.206-.587 3.342-.616c.068-.017.132-.035.2-.02zm-1.244 5.771c.063.007.116.052.186.164c.137.231 2.926 4.1 3.006 4.23s.162.216-.096.307c-.253.096-8.609 2.977-8.768 3.05c-.164.071-.292.094-.498-.218s-2.923-5.119-2.923-5.119l8.847-2.353c.11-.036.184-.068.246-.06z"></svg:path>`,
})
export class LaLaravelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLastfmIcon],svg[la-lastfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.348 22.078L13.32 19.29s-1.668 1.86-4.168 1.86c-2.21 0-3.785-1.926-3.785-5.004c0-3.946 1.988-5.356 3.946-5.356c2.824 0 3.718 1.828 4.492 4.168l1.023 3.207c1.027 3.113 2.953 5.613 8.5 5.613c3.977 0 6.672-1.218 6.672-4.425c0-2.598-1.477-3.946-4.234-4.586l-2.055-.45c-1.41-.32-1.828-.898-1.828-1.859c0-1.09.867-1.734 2.277-1.734c1.54 0 2.375.578 2.504 1.957l3.207-.383c-.258-2.887-2.246-4.074-5.52-4.074c-2.882 0-5.706 1.09-5.706 4.586c0 2.18 1.058 3.558 3.718 4.203l2.184.511c1.633.387 2.18 1.059 2.18 1.989c0 1.187-1.157 1.668-3.336 1.668c-3.239 0-4.586-1.7-5.356-4.04l-1.058-3.206c-1.348-4.172-3.497-5.711-7.762-5.711c-4.711 0-7.215 2.98-7.215 8.05c0 4.875 2.504 7.504 6.992 7.504c3.625 0 5.356-1.699 5.356-1.699z"></svg:path>`,
})
export class LaLastfmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLastfmSquareIcon],svg[la-lastfm-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5.611 5.107c-2.36 0-3.611 1.495-3.611 4.03c0 2.438 1.251 3.756 3.498 3.756c1.812 0 2.68-.85 2.68-.85l-.512-1.397s-.832.932-2.084.932c-1.108 0-1.896-.963-1.896-2.504c0-1.974.993-2.678 1.974-2.678c1.817 0 2.044 1.457 2.758 3.69c.512 1.554 1.477 2.807 4.252 2.807c1.987 0 3.334-.61 3.33-2.215c0-1.992-1.712-2.208-3.143-2.518c-.705-.162-.916-.45-.916-.931c0-.547.434-.868 1.14-.868c.77 0 1.185.289 1.251.98l1.607-.193c-.127-1.445-1.12-2.039-2.757-2.039c-1.44 0-2.856.542-2.856 2.293c0 1.09.53 1.782 1.861 2.102c1.23.289 2.184.38 2.184 1.252c0 .595-.578.836-1.668.836c-1.62 0-2.293-.85-2.678-2.024c-.876-2.649-1.196-4.46-4.414-4.46z"></svg:path>`,
})
export class LaLastfmSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughIcon],svg[la-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughBeamIcon],svg[la-laugh-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughBeamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughBeamSolidIcon],svg[la-laugh-beam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughBeamSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughSolidIcon],svg[la-laugh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughSquintIcon],svg[la-laugh-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughSquintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughSquintSolidIcon],svg[la-laugh-squint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5.945 6.168l-1.11 1.664L10.697 14l-1.752 1.168l1.11 1.664L14.303 14zm11.89 0L17.697 14l4.248 2.832l1.11-1.664L21.303 14l1.752-1.168zM9 19s1.605 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughSquintSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughWinkIcon],svg[la-laugh-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm-9 6s1.61 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughWinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLaughWinkSolidIcon],svg[la-laugh-wink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m6.5 1v2h5v-2zm-9 6s1.61 5 7 5s7-5 7-5z"></svg:path>`,
})
export class LaLaughWinkSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLayerGroupIcon],svg[la-layer-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 5.938l-.375.125l-10 4L3.312 11l2.313.938L9.531 13.5l-3.906 1.563L3.312 16l2.313.938L9.531 18.5l-3.906 1.563L3.312 21l2.313.938l10 4l.375.125l.375-.125l10-4L28.688 21l-2.313-.938l-3.906-1.562l3.906-1.563L28.688 16l-2.313-.938l-3.906-1.562l3.906-1.563L28.688 11l-2.313-.938l-10-4zm0 2.156L23.281 11L16 13.906L8.719 11zm-3.75 6.5l3.375 1.344l.375.124l.375-.125l3.375-1.343L23.281 16L16 18.906L8.719 16zm0 5l3.375 1.343l.375.125l.375-.125l3.375-1.343L23.281 21L16 23.906L8.719 21z"></svg:path>`,
})
export class LaLayerGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLeafIcon],svg[la-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.031 4L24 4.469c-3.18 1.402-7.773 1.93-11.688 3.312c-1.957.692-3.769 1.614-5.124 3.094C5.832 12.355 5 14.395 5 17c0 2.695 1.586 4.543 3.063 5.594a10 10 0 0 0 1.75 1c-.618 1.144-1.075 2.176-1.376 3.062c-.546 1.598-.632 2.848-.593 3.75s.156 1.52.156 1.5l2 .188c.063-.723-.125-1.102-.156-1.782s.027-1.613.5-3c.945-2.769 3.566-7.328 10.375-14.625l-1.438-1.374c-4.082 4.374-6.718 7.785-8.437 10.53a7.7 7.7 0 0 1-1.625-.874C8.059 20.145 7 18.937 7 17c0-2.203.629-3.656 1.656-4.781c1.028-1.125 2.524-1.93 4.313-2.563c3.238-1.144 7.246-1.722 10.687-3C23.976 7.871 25 12.031 25 18.531c0 3.688-.863 5.801-1.875 6.969s-2.23 1.5-3.313 1.5c-1.078 0-2.242-.55-3.25-1.25c-1.007-.7-1.703-1.43-2.406-1.875l-1.062 1.688c.18.113 1.176 1.035 2.344 1.843c1.167.809 2.648 1.594 4.374 1.594c1.54 0 3.422-.543 4.844-2.188C26.078 25.169 27 22.527 27 18.532c0-7.821-1.656-13.438-1.656-13.438z"></svg:path>`,
})
export class LaLeafIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLeanpubIcon],svg[la-leanpub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.344 6c-3.39 0-6.938 1.906-6.938 1.906l-.469.25l-.062.531L1 24.875l-.188 1.719l1.594-.688s4.117-1.718 8-1.718c2.301 0 5.063 1.656 5.063 1.656l.531.343l.531-.343s2.762-1.657 5.063-1.657c3.883 0 8 1.72 8 1.72l1.593.687L31 24.875L29.125 8.687l-.063-.53l-.468-.25S25.047 6 21.656 6C18.777 6 16.684 7.258 16 7.688C15.316 7.258 13.223 6 10.344 6m0 2c2.586 0 5.094 1.625 5.094 1.625L16 10l.563-.375S19.07 8 21.655 8c2.278 0 4.864 1.188 5.532 1.5l1.625 14.031c-1.532-.55-4.055-1.343-7.22-1.343c-2.722 0-4.917 1.277-5.593 1.687c-.676-.41-2.871-1.688-5.594-1.688c-3.164 0-5.687.793-7.219 1.344L4.813 9.5C5.48 9.187 8.066 8 10.343 8zm0 1.5c-1.446 0-3.239.633-4.156 1l-1.25 10.938c1.96-.489 3.792-.75 5.468-.75c2.13 0 4.18.777 5.594 1.468c1.508-.734 3.781-1.55 6.031-1.437l-1.25-11.125c-1.812.277-3.386 1.27-3.406 1.281L16 11.813l-1.406-.938c-.02-.012-2.102-1.375-4.25-1.375"></svg:path>`,
})
export class LaLeanpubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLemonIcon],svg[la-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4c-2.582 0-4.879 1.438-6.469 3.625S4 12.765 4 16c0 3.234.941 6.188 2.531 8.375S10.418 28 13 28c8.23 0 12.617-4.707 13.688-9.656C27.44 17.8 28 16.996 28 16s-.559-1.8-1.313-2.344C25.56 8.582 20.313 4 13 4m0 2c1.836 0 3.54 1.016 4.844 2.813C19.148 10.608 20 13.16 20 16s-.852 5.39-2.156 7.188C16.539 24.983 14.836 26 13 26s-3.54-1.016-4.844-2.813C6.852 21.392 6 18.84 6 16s.852-5.39 2.156-7.188C9.461 7.016 11.164 6 13 6m6.375 1.531c3.04 1.61 4.992 4.258 5.469 6.844l.093.5l.47.219c.347.16.593.496.593.906s-.246.746-.594.906l-.468.219l-.094.5c-.532 2.895-2.278 5.734-5.782 7.25c.137-.164.278-.324.407-.5C21.059 22.187 22 19.235 22 16c0-3.234-.941-6.188-2.531-8.375c-.028-.035-.067-.059-.094-.094M13 8c-.715 0-1.387.258-2 .688l2.031 4.78l2.063-4.75C14.46 8.255 13.742 8 13 8m-3.5 2.281c-.785 1.23-1.324 2.88-1.469 4.719H11.5zm7.063.094L14.53 15h3.438c-.14-1.797-.649-3.402-1.407-4.625zM8.03 17c.14 1.797.649 3.402 1.406 4.625L11.47 17zm6.469 0l2 4.719c.785-1.23 1.324-2.88 1.469-4.719zm-1.531 1.531l-2.063 4.75c.633.465 1.352.719 2.094.719c.715 0 1.387-.258 2-.688z"></svg:path>`,
})
export class LaLemonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLemonSolidIcon],svg[la-lemon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4c-2.582 0-4.879 1.438-6.469 3.625S4 12.765 4 16c0 3.234.941 6.188 2.531 8.375S10.418 28 13 28c8.23 0 12.617-4.707 13.688-9.656C27.44 17.8 28 16.996 28 16s-.559-1.8-1.313-2.344C25.56 8.582 20.313 4 13 4m0 2c1.836 0 3.54 1.016 4.844 2.813C19.148 10.608 20 13.16 20 16s-.852 5.39-2.156 7.188C16.539 24.983 14.836 26 13 26s-3.54-1.016-4.844-2.813C6.852 21.392 6 18.84 6 16s.852-5.39 2.156-7.188C9.461 7.016 11.164 6 13 6m6.375 1.531c3.04 1.61 4.992 4.258 5.469 6.844l.093.5l.47.219c.347.16.593.496.593.906s-.246.746-.594.906l-.468.219l-.094.5c-.532 2.895-2.278 5.734-5.782 7.25c.137-.164.278-.324.407-.5C21.059 22.187 22 19.235 22 16c0-3.234-.941-6.188-2.531-8.375c-.028-.035-.067-.059-.094-.094M13 8c-.715 0-1.387.258-2 .688l2.031 4.78l2.063-4.75C14.46 8.255 13.742 8 13 8m-3.5 2.281c-.785 1.23-1.324 2.88-1.469 4.719H11.5zm7.063.094L14.53 15h3.438c-.14-1.797-.649-3.402-1.407-4.625zM8.03 17c.14 1.797.649 3.402 1.406 4.625L11.47 17zm6.469 0l2 4.719c.785-1.23 1.324-2.88 1.469-4.719zm-1.531 1.531l-2.063 4.75c.633.465 1.352.719 2.094.719c.715 0 1.387-.258 2-.688z"></svg:path>`,
})
export class LaLemonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLessIcon],svg[la-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.256 9.15c-1.42 0-2.05.55-2.05 2.26c0 1.13.16 1.76.16 2.73c0 .55-.339 1.13-1.364 1.18v1.366c1.025.025 1.363.606 1.363 1.156c0 .97-.16 1.55-.16 2.68c0 1.71.63 2.26 2.025 2.26h1.026V21.57H3.94c-.655 0-.865-.264-.865-1.129s.08-1.606.08-2.576c0-1.21-.394-1.678-1.18-1.863v-.08c.79-.185 1.18-.655 1.18-1.865c0-.945-.08-1.712-.08-2.577s.185-1.103.865-1.103h.705v7.541c0 1.605.55 2.654 2.155 2.654c.5 0 .894-.08 1.18-.185l-.264-1.71c-.155.042-.23.042-.31.042c-.186 0-.42-.162-.42-.657V9.15zm24.488.006v1.211h.317c.71 0 .865.236.865 1.106c0 .815-.08 1.629-.08 2.574c0 1.21.394 1.68 1.18 1.865v.08c-.79.185-1.18.655-1.18 1.865c0 .945.08 1.71.08 2.575c0 .895-.185 1.13-.865 1.13v.026h-.317v1.26h1.026c1.39 0 2.025-.55 2.025-2.26c0-1.13-.16-1.71-.16-2.73c0-.55.34-1.13 1.365-1.18v-1.366c-1.025-.034-1.365-.616-1.365-1.166c0-1.025.16-1.628.16-2.728c0-1.71-.63-2.262-2.025-2.262zm-16.502 3.15c-1.92 0-3.757 1.607-3.707 4.128c0 2.6 1.711 4.125 3.967 4.125c.945 0 1.995-.34 2.81-.895l-.79-1.39c-.58.34-1.13.5-1.71.5c-1.05 0-1.866-.5-2.076-1.71h4.762c.025-.185.08-.55.08-.97c.03-2.132-1.13-3.787-3.336-3.787zm7.067.026c-1.785 0-2.997 1.026-2.997 2.47c0 1.286 1.132 1.944 2.077 2.31c.815.314 1.603.58 1.603 1.105c0 .395-.313.654-1.023.654c-.655 0-1.316-.264-2.026-.814l-1.025 1.525c.79.655 1.994 1.105 2.994 1.105c2.1 0 3.233-1.105 3.233-2.55c.004-1.444-1.128-2.05-2.153-2.39c-.815-.316-1.549-.5-1.549-1.024c0-.395.315-.631.895-.631s1.105.234 1.68.654l1.05-1.389c-.655-.5-1.55-1.025-2.76-1.025zm6.384 0c-1.785 0-2.994 1.026-2.994 2.47c0 1.286 1.13 1.944 2.074 2.31c.815.314 1.606.58 1.606 1.105c0 .395-.315.654-1.025.654c-.655 0-1.316-.264-2.026-.814l-1.049 1.525c.79.655 1.994 1.105 2.994 1.105c2.1 0 3.233-1.105 3.233-2.55s-1.127-2.05-2.152-2.39c-.79-.316-1.526-.5-1.526-1.024c0-.395.317-.631.897-.631s1.104.234 1.68.654l1.048-1.389c-.655-.5-1.55-1.025-2.76-1.025m-13.425 1.734c.945 0 1.314.656 1.314 1.551h-2.84c.16-1.05.79-1.55 1.526-1.55z"></svg:path>`,
})
export class LaLessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLessThanIcon],svg[la-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6L6 15.219v1.562L26 26v-2.156L9.469 16L26 8.156z"></svg:path>`,
})
export class LaLessThanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLessThanEqualIcon],svg[la-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 5L6 13.219v1.562L26 23v-2.156L9.469 14L26 7.156zM6 25v2h20v-2z"></svg:path>`,
})
export class LaLessThanEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLevelDownAltIcon],svg[la-level-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4.5v3h15v15.355l-3.781-3.78l-2.145 2.144l6.358 6.357L21 28.598l1.068-1.022l6.358-6.357l-2.145-2.145l-3.781 3.781V4.5zm1 1h16v19.77l4.781-4.782l.73.73l-5.642 5.643l-.369.354l-.37-.354l-5.642-5.642l.73-.73l4.782 4.78V6.5h-15z"></svg:path>`,
})
export class LaLevelDownAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLevelUpAltIcon],svg[la-level-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 4l-.719.688l-8.5 8.5l1.438 1.439L16 7.844V26H6v2h12V7.844l6.781 6.781l1.438-1.438l-8.5-8.5z"></svg:path>`,
})
export class LaLevelUpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLifeRingIcon],svg[la-life-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c.336 0 .672.031 1 .063v3.03A7 7 0 0 0 16 9c-.34 0-.672.047-1 .094V6.063A11 11 0 0 1 16 6m-3 .438v3.25A7 7 0 0 0 9.687 13H6.47A9.98 9.98 0 0 1 13 6.437zm6 0A10.07 10.07 0 0 1 25.563 13h-3.25A7 7 0 0 0 19 9.687zM16 11c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m-9.938 4h3A7 7 0 0 0 9 16c0 .34.047.672.094 1H6.063A11 11 0 0 1 6 16c0-.336.031-.672.063-1zm16.844 0h3.032c.03.328.062.664.062 1s-.031.672-.063 1h-3.03c.046-.328.093-.66.093-1s-.047-.672-.094-1M6.438 19h3.25A7 7 0 0 0 13 22.313v3.25A10.07 10.07 0 0 1 6.437 19zm15.875 0h3.25A10.07 10.07 0 0 1 19 25.563v-3.25A7 7 0 0 0 22.313 19M15 22.906c.328.047.66.094 1 .094s.672-.047 1-.094v3.032A11 11 0 0 1 16 26c-.336 0-.672-.031-1-.063z"></svg:path>`,
})
export class LaLifeRingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLifeRingSolidIcon],svg[la-life-ring-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c.336 0 .672.031 1 .063v3.03A7 7 0 0 0 16 9c-.34 0-.672.047-1 .094V6.063A11 11 0 0 1 16 6m-3 .438v3.25A7 7 0 0 0 9.687 13H6.47A9.98 9.98 0 0 1 13 6.437zm6 0A10.07 10.07 0 0 1 25.563 13h-3.25A7 7 0 0 0 19 9.687zM16 11c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m-9.938 4h3A7 7 0 0 0 9 16c0 .34.047.672.094 1H6.063A11 11 0 0 1 6 16c0-.336.031-.672.063-1zm16.844 0h3.032c.03.328.062.664.062 1s-.031.672-.063 1h-3.03c.046-.328.093-.66.093-1s-.047-.672-.094-1M6.438 19h3.25A7 7 0 0 0 13 22.313v3.25A10.07 10.07 0 0 1 6.437 19zm15.875 0h3.25A10.07 10.07 0 0 1 19 25.563v-3.25A7 7 0 0 0 22.313 19M15 22.906c.328.047.66.094 1 .094s.672-.047 1-.094v3.032A11 11 0 0 1 16 26c-.336 0-.672-.031-1-.063z"></svg:path>`,
})
export class LaLifeRingSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLightbulbIcon],svg[la-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-4.957 0-9 4.043-9 9c0 1.918.844 3.906 2 5.688c.86 1.324 1.887 2.542 3 3.468V25c0 1.094.906 2 2 2l1 1h2l1-1c1.094 0 2-.906 2-2v-2.844c1.113-.926 2.14-2.144 3-3.468c1.156-1.782 2-3.77 2-5.688c0-4.957-4.043-9-9-9m0 2c3.879 0 7 3.121 7 7c0 1.309-.645 3.035-1.656 4.594c-.903 1.39-2.09 2.629-3.188 3.406h-4.312c-1.098-.777-2.285-2.016-3.188-3.406C9.645 16.035 9 14.309 9 13c0-3.879 3.121-7 7-7m-1.75 17h3.5q.116.08.25.125V25h-4v-1.875a1 1 0 0 0 .25-.125"></svg:path>`,
})
export class LaLightbulbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLightbulbSolidIcon],svg[la-lightbulb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-4.957 0-9 4.043-9 9c0 1.918.844 3.906 2 5.688c.86 1.324 1.887 2.542 3 3.468V25c0 1.094.906 2 2 2l1 1h2l1-1c1.094 0 2-.906 2-2v-2.844c1.113-.926 2.14-2.144 3-3.468c1.156-1.782 2-3.77 2-5.688c0-4.957-4.043-9-9-9m0 2c3.879 0 7 3.121 7 7c0 1.309-.645 3.035-1.656 4.594c-.903 1.39-2.09 2.629-3.188 3.406h-4.312c-1.098-.777-2.285-2.016-3.188-3.406C9.645 16.035 9 14.309 9 13c0-3.879 3.121-7 7-7m-1.75 17h3.5q.116.08.25.125V25h-4v-1.875a1 1 0 0 0 .25-.125"></svg:path>`,
})
export class LaLightbulbSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLineIcon],svg[la-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.625 5C7.09 5 5 7.09 5 9.625v12.75C5 24.91 7.09 27 9.625 27h12.75C24.91 27 27 24.91 27 22.375V9.625C27 7.09 24.91 5 22.375 5zm0 2h12.75A2.62 2.62 0 0 1 25 9.625v12.75A2.62 2.62 0 0 1 22.375 25H9.625A2.62 2.62 0 0 1 7 22.375V9.625A2.62 2.62 0 0 1 9.625 7M16 9.219c-4.016 0-7.281 2.648-7.281 5.906c0 2.922 2.594 5.352 6.094 5.813c.238.05.542.171.624.375c.075.183.055.468.032.656c0 0-.074.515-.094.625c-.031.183-.152.734.625.406s4.191-2.492 5.719-4.25c1.054-1.156 1.562-2.32 1.562-3.625c0-3.258-3.265-5.906-7.281-5.906m-4.281 4.187a.37.37 0 0 1 .375.375v2.5h1.062c.211 0 .375.196.375.407a.37.37 0 0 1-.375.375H11.72c-.211 0-.406-.165-.406-.375V13.78c0-.21.195-.375.406-.375zm2.562 0a.37.37 0 0 1 .375.375v2.906a.37.37 0 0 1-.375.375c-.21 0-.406-.164-.406-.375v-2.906c0-.21.195-.375.406-.375m1.188 0c.039-.011.086 0 .125 0a.34.34 0 0 1 .281.156l1.5 2v-1.78a.37.37 0 0 1 .375-.376a.37.37 0 0 1 .375.375v2.906a.35.35 0 0 1-.25.344c-.04.012-.086.032-.125.032a.4.4 0 0 1-.313-.157l-1.468-2.031v1.813a.37.37 0 0 1-.375.375c-.211 0-.406-.165-.406-.375V13.78c0-.164.124-.324.28-.375zm3.562 0h1.438a.37.37 0 0 1 .375.375a.37.37 0 0 1-.375.375h-1.063v.688h1.063a.37.37 0 0 1 .375.375c0 .21-.164.406-.375.406h-1.063v.656h1.063c.21 0 .375.196.375.407a.37.37 0 0 1-.375.375H19.03a.37.37 0 0 1-.375-.375V13.78a.37.37 0 0 1 .375-.375z"></svg:path>`,
})
export class LaLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLinkIcon],svg[la-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 4c-1.672 0-3.258.66-4.438 1.844l-1.468 1.468A6.25 6.25 0 0 0 14 11.75c0 .793.152 1.566.438 2.281l1.624-1.625A4.29 4.29 0 0 1 17.25 8.72l1.469-1.469A4.28 4.28 0 0 1 21.75 6c1.137 0 2.195.445 3 1.25a4.274 4.274 0 0 1 0 6.031l-1.469 1.469A4.28 4.28 0 0 1 20.25 16q-.334-.002-.656-.063l-1.625 1.626A6.2 6.2 0 0 0 20.25 18c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.25 6.25 0 0 0 28 10.25c0-1.672-.66-3.223-1.844-4.406A6.17 6.17 0 0 0 21.75 4m-2.469 7.281l-8 8l1.438 1.438l8-8zM11.75 14c-1.672 0-3.258.66-4.438 1.844l-1.468 1.469A6.25 6.25 0 0 0 4 21.75c0 1.672.66 3.223 1.844 4.406A6.17 6.17 0 0 0 10.25 28c1.672 0 3.258-.66 4.438-1.844l1.468-1.468A6.25 6.25 0 0 0 18 20.25c0-.793-.152-1.566-.438-2.281l-1.625 1.625a4.29 4.29 0 0 1-1.187 3.687l-1.469 1.469A4.28 4.28 0 0 1 10.25 26a4.2 4.2 0 0 1-3-1.25a4.274 4.274 0 0 1 0-6.031l1.469-1.469A4.28 4.28 0 0 1 11.75 16q.334.002.656.063l1.625-1.625A6.2 6.2 0 0 0 11.75 14"></svg:path>`,
})
export class LaLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLinkedinIcon],svg[la-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5A2.52 2.52 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.49.49 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5m2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437m9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"></svg:path>`,
})
export class LaLinkedinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLinkedinInIcon],svg[la-linkedin-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.643 4A2.64 2.64 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4m12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768c2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11m-15.172.31V26h4.56V11.31z"></svg:path>`,
})
export class LaLinkedinInIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLinodeIcon],svg[la-linode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3L5.531 4.906l4.344 2.657l6.375-2.407l-4.375-2.093C11.77 3.007 11.605 3 11.5 3M5 5.844l1.313 6.343c0 .106.113.208.218.313l3.813 3l-1.031-7.031zm11.719.25l-6.313 2.375l1.063 6.969l5.25-2.72c.156-.054.25-.257.25-.468zm6.25 6.125a.56.56 0 0 0-.282.094l-2.968 1.874l3.468 2.157l3.188-2.313l-3.156-1.719a.46.46 0 0 0-.25-.093m-16.25 1.75l1.125 5.562c0 .106.05.227.156.282l3.469 3.25l-.844-6zm10.312 0l-5.25 3l.719 6.093l4.531-3.03c.157-.106.274-.29.219-.5zm9.969.906l-.094.094c-.054.054-.043.125-.093.125l-3.22 2.187l-.155 3.375v.188l2.875-2.25c.105-.106.167-.207.218-.313zm-8.406.063a.8.8 0 0 0-.313.093l-.093.063l.156 4.437c0 .106-.008.27-.063.375l3.782-2.781l-3.188-2.094a.55.55 0 0 0-.281-.094zm4.062 3.03l-4.218 2.938l.125 3.625v.282l3.656-2.907c.105-.105.218-.218.218-.375zm-14.343 3.25l.78 4.22c0 .105.052.144.157.25L12.406 29l-.094-.219l-.687-4.343zm9.124.063l-4.718 3.032l.625 4.375l.062.312l3.938-3.156a.47.47 0 0 0 .218-.407z"></svg:path>`,
})
export class LaLinodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLinuxIcon],svg[la-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5C10.488 5 6 9.488 6 15v8c0 1.117-.883 2-2 2v2c2.2 0 4-1.8 4-4v-8c0-4.43 3.57-8 8-8a8 8 0 0 1 2.875.531c-.293.414-.137 1.145.406 1.688c.586.586 1.39.734 1.782.344c.144-.145.187-.368.187-.594A7.98 7.98 0 0 1 24 15v8c0 2.2 1.8 4 4 4v-2c-1.117 0-2-.883-2-2v-8c0-5.512-4.488-10-10-10m-3 6c-1.52 0-2.668.852-3.25 1.875S9 15.047 9 16c0 1.355.414 2.348.875 2.969c.043.058.082.101.125.156c-.613.656-1 1.469-1 2.375c0 1.43.973 2.598 2.25 3.344S14.184 26 16 26s3.473-.41 4.75-1.156S23 22.93 23 21.5c0-.906-.387-1.719-1-2.375c.043-.055.082-.098.125-.156c.46-.621.875-1.614.875-2.969c0-.953-.168-2.102-.75-3.125A3.71 3.71 0 0 0 19 11a3.69 3.69 0 0 0-3 1.5a3.69 3.69 0 0 0-3-1.5m0 2c.867 0 1.21.313 1.531.875S15 15.293 15 16h2c0-.707.148-1.563.469-2.125S18.133 13 19 13s1.21.313 1.531.875S21 15.293 21 16c0 .96-.277 1.48-.5 1.781c-.07.098-.11.14-.156.188c-.227-.114-.446-.25-.688-.344c.211-.273.344-.672.344-1.125c0-.828-.45-1.5-1-1.5s-1 .672-1 1.5c0 .266.078.504.156.719A11 11 0 0 0 16 17c-.758 0-1.469.082-2.156.219c.078-.215.156-.453.156-.719c0-.828-.45-1.5-1-1.5s-1 .672-1 1.5c0 .453.133.852.344 1.125c-.242.094-.461.23-.688.344a1.3 1.3 0 0 1-.156-.188c-.223-.3-.5-.82-.5-1.781c0-.707.148-1.563.469-2.125S12.133 13 13 13m3 6c1.5 0 2.855.352 3.75.875S21 20.996 21 21.5s-.355 1.102-1.25 1.625S17.5 24 16 24s-2.855-.352-3.75-.875S11 22.004 11 21.5s.355-1.102 1.25-1.625S14.5 19 16 19m-2.5 1.438l-1 1.718S13.926 23 16 23s3.5-.844 3.5-.844l-1-1.718S17.547 21 16 21s-2.5-.563-2.5-.563z"></svg:path>`,
})
export class LaLinuxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLiraSignIcon],svg[la-lira-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v5.906L8 11v2l3-1.094v2L8 15v2l3-1.094V28h1c5.762 0 10.828-3.848 12.344-9.406l.625-2.344l-1.938-.5l-.625 2.313c-1.187 4.363-4.976 7.359-9.406 7.78V15.189L19 13v-2l-6 2.188v-2L19 9V7l-6 2.188V4z"></svg:path>`,
})
export class LaLiraSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laListIcon],svg[la-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z"></svg:path>`,
})
export class LaListIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laListAltIcon],svg[la-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.281 5.281L7 8.563L5.719 7.28L4.28 8.72l2 2l.719.687l.719-.687l4-4zM15 7v2h13V7zm-4.719 6.281L7 16.562l-1.281-1.28l-1.438 1.437l2 2l.719.687l.719-.687l4-4zM15 15v2h13v-2zm-4.719 6.281L7 24.563L5.719 23.28L4.28 24.72l2 2l.719.687l.719-.687l4-4zM15 23v2h13v-2z"></svg:path>`,
})
export class LaListAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laListAltSolidIcon],svg[la-list-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.281 5.281L7 8.563L5.719 7.28L4.28 8.72l2 2l.719.687l.719-.687l4-4zM15 7v2h13V7zm-4.719 6.281L7 16.562l-1.281-1.28l-1.438 1.437l2 2l.719.687l.719-.687l4-4zM15 15v2h13v-2zm-4.719 6.281L7 24.563L5.719 23.28L4.28 24.72l2 2l.719.687l.719-.687l4-4zM15 23v2h13v-2z"></svg:path>`,
})
export class LaListAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laListOlIcon],svg[la-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.969 3l-.313.344S4.898 4 4.406 4v2c.68 0 1.149-.277 1.594-.531V10h2V3zM11 6v2h17V6zm-4.5 6A2.497 2.497 0 0 0 4 14.5v.5h2v-.5c0-.215.285-.5.5-.5s.5.285.5.5l-.094.094l-2.593 2.5l-.313.281V19h5v-2H7.281l.875-.875l.125-.094L8.25 16c.5-.41.75-1.02.75-1.5C9 13.117 7.883 12 6.5 12m4.5 3v2h17v-2zm-7 6v2h1.375l-.25.406l-.125.219V25h1.5c.215 0 .5.285.5.5s-.285.5-.5.5H4v2h2.5C7.883 28 9 26.883 9 25.5c0-1.004-.68-1.695-1.531-2.094l.406-.687l.125-.25V21zm7 3v2h17v-2z"></svg:path>`,
})
export class LaListOlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laListUlIcon],svg[la-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z"></svg:path>`,
})
export class LaListUlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLocationArrowIcon],svg[la-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.438l-.906 2.187l-8 19l-.907 2.125l2.157-.813L16 24.063l7.656 2.875l2.157.813l-.907-2.125l-8-19zm0 5.093l6.188 14.719l-5.844-2.188l-.344-.125l-.344.125l-5.844 2.188z"></svg:path>`,
})
export class LaLocationArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLockIcon],svg[la-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7m0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5M8 15h16v12H8z"></svg:path>`,
})
export class LaLockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLockOpenIcon],svg[la-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7M8 15h16v12H8z"></svg:path>`,
})
export class LaLockOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltDownIcon],svg[la-long-arrow-alt-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063l-4.281-4.282l-1.438 1.407L16 27.905l6.719-6.718l-1.438-1.407L17 24.063V4z"></svg:path>`,
})
export class LaLongArrowAltDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltLeftIcon],svg[la-long-arrow-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.813 9.281L4.093 16l6.72 6.719l1.406-1.438L7.938 17H28v-2H7.937l4.282-4.281z"></svg:path>`,
})
export class LaLongArrowAltLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltRightIcon],svg[la-long-arrow-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.188 9.281L19.78 10.72L24.063 15H4v2h20.063l-4.282 4.281l1.407 1.438L27.905 16z"></svg:path>`,
})
export class LaLongArrowAltRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltUpIcon],svg[la-long-arrow-alt-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-6.719 6.718l1.438 1.407L15 7.938V28h2V7.937l4.281 4.282l1.438-1.406z"></svg:path>`,
})
export class LaLongArrowAltUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLowVisionIcon],svg[la-low-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l26 26l1.438-1.438l-6.594-6.593c3.313-2.067 5.512-4.786 5.656-4.97l.219-.28v-.907l-.25-.281C28.496 14.953 22.523 8 16 8c-1.902 0-3.68.531-5.281 1.281zM16 10c4.648 0 9.281 4.48 10.75 6.031c-.813.918-2.652 2.801-5.063 4.219L19.438 18a3.99 3.99 0 0 0-.625-4.844c-1.316-1.316-3.28-1.492-4.812-.594l-1.75-1.75C13.434 10.337 14.684 10 16 10m-8.25 1.031c-2.68 1.926-4.402 4.09-4.531 4.25l-.219.25v.938l.25.281C3.512 17.047 9.719 24 16 24c1.398 0 2.75-.273 4-.719zm.625 2.063l8.813 8.812A8.5 8.5 0 0 1 16 22a7.6 7.6 0 0 1-1.469-.156L6.97 14.25a22 22 0 0 1 1.406-1.156zm-2.156 1.844l6.312 6.28c-3.242-1.35-6.152-4.097-7.281-5.25c.234-.265.57-.636.969-1.03"></svg:path>`,
})
export class LaLowVisionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLuggageCartIcon],svg[la-luggage-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6c-1.645 0-3 1.355-3 3h-6v12h18V9h-6c0-1.645-1.355-3-3-3M4 7v2h1c.555 0 1 .445 1 1v11c0 2.21 1.79 4 4 4h18v-2H10c-1.191 0-2-.809-2-2V10c0-1.645-1.355-3-3-3zm20.5 18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-12 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M19 8c.555 0 1 .445 1 1h-2c0-.555.445-1 1-1m-7 3h14v8H12z"></svg:path>`,
})
export class LaLuggageCartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laLyftIcon],svg[la-lyft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v11a3 3 0 0 0 3 3h2.063A3.5 3.5 0 0 1 6 19.5V8zm20.5 0a5.5 5.5 0 0 0-5.5 5.5V22a4 4 0 0 0 4-4h2v-4h-2v-.5a1.5 1.5 0 0 1 3 0V17a5 5 0 0 0 5 5h1v-4a2 2 0 0 1-2-2h2v-4h-2.213A5.5 5.5 0 0 0 22.5 8M7 12v7c0 1.65 1.35 3 3 3h.5c.709 0 1.367-.214 1.918-.576c-.131.197-.28.382-.447.547A3.47 3.47 0 0 1 9.5 23c-.54 0-1.05-.12-1.5-.35v2.93c.61.27 1.29.42 2 .42h1c2.75 0 5-2.25 5-5v-9h-4v5.5c0 .275-.225.5-.5.5a.5.5 0 0 1-.5-.5V12z"></svg:path>`,
})
export class LaLyftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMagentoIcon],svg[la-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.227L5 10.174V22.44l3 1.713V11.826l8-5.053l8 5.053V24.15l3-1.712V10.174zm-2 8.351l-3 1.887v12.404l5 2.86l5-2.86V13.484L18 11.6v12.53l-2 1.141l-2-1.14z"></svg:path>`,
})
export class LaMagentoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMagicIcon],svg[la-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.875 2.563l-.688.75l-1.687 1.78h-3.594v3.5l-1.719 1.813l-.687.719l2.188 2.188L3.03 25l-.719.719l.72.687l3.28 3.282l.688-.72l11.688-11.655l2.187 2.187l.719-.688l1.812-1.718h3.5V13.5l1.782-1.688l.75-.687l-2.532-2.531v-3.5h-3.5zm.031 2.874l1.375 1.375l.313.282h2.312v2.312l.282.313l1.375 1.375l-1.344 1.281l-.313.281v2.438h-2.312l-.282.281l-1.406 1.344l-.812-.813l4.531-4.531l-3.969-3.969l-.718.688l-3.813 3.844l-.844-.844l1.344-1.406l.281-.282V7.094h2.438l.281-.313zm-.25 4.782l1.125 1.156l-15.468 15.5l-1.157-1.156zM19 21v1h-1v2h1v1h2v-1h1v-2h-1v-1zm6 2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></svg:path>`,
})
export class LaMagicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMagnetIcon],svg[la-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5C9.937 5 5 9.938 5 16v11h8V16c0-1.668 1.332-3 3-3s3 1.332 3 3v11h8V16c0-6.063-4.938-11-11-11m0 2c4.984 0 9 4.016 9 9v5h-4v-5c0-2.75-2.25-5-5-5s-5 2.25-5 5v5H7v-5c0-4.984 4.016-9 9-9M7 23h4v2H7zm14 0h4v2h-4z"></svg:path>`,
})
export class LaMagnetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMailBulkIcon],svg[la-mail-bulk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v10H2v13h17v-4h11V11h-7V5zm2 2h13v4h-9v4H8zm6 6h14v9h-9v-7h-5zm9 2v2h3v-2zM4 17h13v1.113l-6.04 3.754a.88.88 0 0 1-.92 0L4 18.115zm13 3.469V26H4v-5.53l4.982 3.096c.468.291.994.438 1.518.438s1.049-.147 1.516-.44z"></svg:path>`,
})
export class LaMailBulkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMailchimpIcon],svg[la-mailchimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.729 4.008c-4.532.334-12.783 10.277-9.624 12.945l.79.67a3.9 3.9 0 0 0-.22 1.791c.18 1.785 1.924 3.23 3.61 3.229c3.086 7.113 14.32 7.124 17.229.16c.092-.24.486-1.318.486-2.268s-.54-1.35-.885-1.35c-.179-.626-.294-.699-.511-.994c.13-.196.816-1.283-.165-2.312c-.556-.584-1.663-.987-2.048-1.094c-.08-.609.248-3.138-1.15-4.437C23.35 9.197 24.001 7.928 24 6.84c-.003-2.093-2.53-2.727-5.697-1.416l-.672.285c-.003-.003-1.215-1.19-1.233-1.205c-.45-.394-1.022-.544-1.67-.496zm.412.865q.196.01.367.057c.297.084 1.28 1.222 1.28 1.222s-1.826 1.012-3.518 2.424c-2.281 1.757-4.004 4.31-5.036 7.078c-.81.158-1.526.618-1.963 1.254c-.26-.218-.747-.642-.832-.803c-.695-1.328.76-3.902 1.78-5.357c2.36-3.37 5.975-5.97 7.922-5.875m3.185 3.27c.023-.002.041.017.043.039a.04.04 0 0 1-.015.035a2.3 2.3 0 0 0-.413.414a.04.04 0 0 0 .01.055l.024.007c.658.005 1.584.236 2.191.575c.041.023.013.101-.033.091c-3.718-.852-6.58.993-7.192 1.436c-.019.012-.042.005-.054-.014a.04.04 0 0 1 .002-.047h-.004c.895-1.034 1.997-1.932 2.984-2.437a.04.04 0 0 1 .053.014a.04.04 0 0 1 0 .039c-.078.142-.23.445-.277.675a.04.04 0 0 0 .03.05a.04.04 0 0 0 .032-.007c.614-.419 1.683-.867 2.62-.925zm3.182 3.218q.187.03.351.135c.535.355.61 1.215.637 1.844c.016.359.06 1.228.074 1.476c.034.57.185.651.489.748c.17.056.327.099.56.165c.706.198.974.502 1.242.761a.88.88 0 0 1 .254.496c.083.608-.323 1.256-1.793 1.938c-2.497 1.159-5.008.771-5.37.73c-1.078-.145-1.692 1.248-1.046 2.201c1.21 1.786 6.542 1.07 8.09-1.14c.037-.053.006-.087-.039-.055c-2.233 1.528-5.186 2.043-6.865 1.39c-.255-.098-.789-.343-.854-.89c2.331.721 3.795.04 3.795.04s.109-.151-.03-.137c0 0-1.91.282-3.716-.38c.332-1.077 1.442.326 5.152-.738c.817-.234 1.743-.59 2.579-1.252c.247.257.456.75.529 1.196c.196-.035.761-.03.611.966c-.176 1.062-.626 1.925-1.385 2.72a5.7 5.7 0 0 1-1.666 1.245a7 7 0 0 1-1.086.46c-2.86.933-5.79-.094-6.736-2.3a3.5 3.5 0 0 1-.19-.521c-.402-1.454-.06-3.199 1.009-4.297c.066-.07.132-.152.132-.256a.45.45 0 0 0-.103-.242c-.374-.54-1.666-1.465-1.406-3.252c.187-1.283 1.308-2.187 2.355-2.133l.268.016c.453.027.848.085 1.222.1c.625.027 1.187-.064 1.852-.618c.225-.187.405-.349.709-.4a.9.9 0 0 1 .375-.016m-.201 2.168c-.333.054-.346.468-.227 1.04c.067.32.186.593.32.763a2 2 0 0 1 .496 0c.09-.205.106-.556.026-.94c-.12-.57-.282-.917-.615-.863m-3.819 1.555a1.7 1.7 0 0 0-.793.312c-.16.117-.31.28-.289.377c.045.2.536-.144 1.21-.185c.373-.023.683.093.921.197c.24.107.385.175.443.115c.101-.104-.186-.503-.648-.7a1.7 1.7 0 0 0-.844-.116m4.301.795v.002c-.409-.007-.425.844-.014.851s.426-.845.014-.853m-3.732.182c-.485.076-.803.348-.721.539c.048.018.062.043.277-.043a2 2 0 0 1 1.002-.104c.156.018.23.029.264-.025c.078-.12-.304-.428-.822-.367m2.353.39a.27.27 0 0 0-.223.149c-.181.369.58.74.764.375c.136-.276-.258-.557-.54-.524zm-11.514.03c.97.03 1.921.715 2.149 2.187c.243 1.584-.25 3.127-1.824 3.09l.002.002c-1.22-.033-2.537-1.132-2.668-2.434c-.186-1.843 1.094-2.885 2.341-2.846zm-.07.92a1.2 1.2 0 0 0-.898.363c-.466.513-.467 1.258-.268 1.287c.228.03.219-.345.395-.621a.687.687 0 0 1 .949-.203l.006.003c.62.406.072.949.12 1.53c.075.892.986.874 1.155.48a.11.11 0 0 0-.012-.125c.002.048.038-.067-.177-.02l-.002.003c-.071.017-.321.079-.453-.125c-.278-.428.594-1.09.16-1.912c-.243-.467-.615-.65-.975-.66"></svg:path>`,
})
export class LaMailchimpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMaleIcon],svg[la-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-2.2 0-4 1.8-4 4a3.96 3.96 0 0 0 1.125 2.75C11.273 9.773 10 11.746 10 14v5.406l.281.313L12 21.437V30h2v-9.406l-.281-.313L12 18.563V14c0-2.219 1.781-4 4-4s4 1.781 4 4v4.563l-1.719 1.718l-.281.313V30h2v-8.563l1.719-1.718l.281-.313V14c0-2.254-1.273-4.227-3.125-5.25A3.96 3.96 0 0 0 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaMaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMandalorianIcon],svg[la-mandalorian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.646 2l-.251.123c-.244.121-.263.126-.834.148l-.588.022l-.239.13c-.222.123-.247.128-.384.09a1.3 1.3 0 0 1-.274-.118a1 1 0 0 0-.328-.104a1.7 1.7 0 0 1-.318-.074c-.101-.042-.148-.04-.348.021a1.6 1.6 0 0 1-.326.073q-.212.029-.414.091c-.175.051-.355.083-.403.07c-.12-.03-.394.1-.482.227c-.16.274-.457.725-.33 1.049c.186.246.858.06.842.477c-.117.49-.303.96-.473 1.433l-.619-.138c.409-1.38.346-.854-.772-1.586q.044-.195.131-.373c.153-.223.295-.46.295-.493a.4.4 0 0 1 .074-.127c.09-.115.1-.38.016-.464s-.172-.094-.639-.084c-.379.006-.44.017-.62.109c-.116.059-.365.256-.58.46l-.378.358l.012.711l.012.711l.133.274c.132.273.276.425.617.656q.077.047.146.107c.011.013.123.106.252.207c.128.101.285.223.348.278q.326.281.728.43c.487.172.617.343.707.95c.047.314.185.763.27.872c.024.029.086.265.225.875c.022.1.046.24.054.31s.031.202.051.293q.087.486.11.977c0 .134-.015.161-.124.228a.5.5 0 0 1-.181.076c-.08 0-.227-.298-.3-.607c-.108-.484-.263-.688-.546-.732c-.237-.037-.645-.336-1.256-.922a1 1 0 0 0-.258-.157c-.408-.17-.65-.337-.832-.576c-.113-.148-.123-.183-.123-.402q.012-.307.057-.61c.07-.48.067-.751-.006-1.013c-.094-.328-.342-.464-.516-.274c-.157.171-.453.986-.58 1.598c-.057.276-.12.432-.242.588a.23.23 0 0 0-.049.213c.027.142.255.653.328.736q.08.107.143.225l.092.164l-.074.254c-.122.418-.123.393.03.525c.078.065.417.395.753.723c.702.692.82.76 1.304.795c.3.022.422.066.467.168c.013.03.028.328.033.66c.023 1.396.02 1.376.34 1.818l.18.25l.049.477c.06.574.06 2.37 0 3.228l-.041.598l.107.152c.058.084.377.426.705.758c.457.46.63.661.725.84l.123.234l-.023.916c-.013.504-.042.974-.063 1.045s-.063.508-.094.971c-.052.789-.097 1.39-.142 1.902l-.057.696c-.058.784-.144 1.619-.182 1.783c-.064.282-.048.333.157.545c.244.25.648.557.683.517c.061-.07.113-.675.133-1.566a59 59 0 0 1 .033-1.152c.008-.176.038-1.064.11-3.348c.01-.342.028-.768.039-.947c.02-.331-.01-.579-.131-1.102a5 5 0 0 1-.094-.566a2 2 0 0 0-.113-.492c-.05-.12-.08-.226-.07-.235c.008-.009 0-.046-.02-.082c-.057-.107-.105-.701-.11-1.351c-.003-.65-.053-.92-.24-1.29c-.094-.185-.578-.882-.754-1.084l-.109-.123l.02-.668c.022-.705.067-1.039.164-1.203c.08-.138.154-.113.248.084c.088.185.175.281.558.62c.285.25.407.41.407.54a.8.8 0 0 1-.092.252c-.138.266-.125.553.054 1.149c.08.263.154.557.168.652q.019.137.08.26c.05.079.057.084.112.03a.54.54 0 0 0 .086-.233a17 17 0 0 1 .146-.9c.064-.279.05-.57-.039-.84c-.044-.136-.094-.257-.113-.268c-.046-.029-.044-.25.008-.424s.233-.354.691-.687c.193-.14.397-.324.453-.405c.057-.08.117-.146.133-.146c.116 0 .105.5-.02.842a6 6 0 0 0-.242.822c-.039.194-.128.596-.252 1.135c-.115.507-.303 1.013-.47 1.271c-.09.138-.103.19-.114.53c-.01.339.07 1.142.178 1.853q.035.347.02.695c-.012.415-.006.498.054.625c.12.254.144.455.15 1.356c.005.483.02.992.038 1.133c.035.288.047 1.757.014 1.812c-.022.036-.145.83-.18 1.168a32 32 0 0 0-.076 1.574c-.016.477.021 1.16.076 1.34c.05.04.691-.459.836-.668l.1-.144v-1.041c0-.642-.018-1.12-.044-1.244a4 4 0 0 1-.058-.405a3 3 0 0 0-.06-.383c-.049-.213-.059-.97-.034-2.414c.02-1.106.012-1.156-.24-2.03a2.3 2.3 0 0 1-.063-.485l-.004-.285l.22-.192c.63-.555.79-.882.603-1.248c-.12-.239-.152-.598-.11-1.265c.02-.331.054-.728.075-.88c.02-.15.044-.367.054-.476c.055-.627.18-1.133.278-1.133c.058 0 .218-.411.255-.656c.06-.388.033-1.183-.044-1.27a.5.5 0 0 1-.086-.158a2 2 0 0 0-.114-.263a.8.8 0 0 1-.088-.399c0-.265.068-.42.235-.547c.064-.05.293-.25.502-.445l.383-.356l.125-.394c.126-.397.36-.94.478-1.11c.035-.048.143-.246.24-.437c.213-.42.45-.726.916-1.182l.354-.343l-.045-.135c-.024-.075-.048-.343-.05-.596l-.007-.46l-.244-.223l-.242-.225l.033-.404c.02-.221.053-.576.078-.787c.077-.654.007-.823-.25-.594q-.223.196-.304.629a1.1 1.1 0 0 1-.159.4a1 1 0 0 0-.156.424c-.156.934-.314 1.34-.703 1.82a2.2 2.2 0 0 1-.832.639a10 10 0 0 0-.512.268a18 18 0 0 1-.547.298c-.55.282-.635.387-.754.934c-.132.606-.148.65-.257.662c-.077.01-.108-.012-.176-.127s-.08-.19-.08-.457a1.8 1.8 0 0 1 .056-.486c.08-.234.07-.34-.039-.485a.52.52 0 0 1-.074-.523c.072-.148.072-.37 0-.578a2 2 0 0 1-.078-.322c-.019-.137-.01-.176.063-.252a.3.3 0 0 1 .117-.09a.4.4 0 0 0 .13-.092c.055-.055.248-.2.43-.328q.201-.136.383-.295a.4.4 0 0 1 .135-.094a.3.3 0 0 0 .135-.158a.75.75 0 0 1 .24-.262a1 1 0 0 0 .224-.205c.03-.055.078-.068.248-.068c.214 0 .384-.053.887-.283c.41-.188.507-.301.78-.93a1 1 0 0 0 .058-.164c0-.078.266-.432.385-.512c.132-.088.148-.142.13-.379a.8.8 0 0 0-.072-.219a2 2 0 0 1-.115-.322c-.044-.169-.042-.216.006-.35c.055-.152.055-.155-.074-.402c-.093-.179-.17-.273-.266-.328zM16.59 29.992c-.001 0-.011.006-.012.004h.012zm5.193-20.851c-1.153 1.186-1.508 2.098-1.672 2.943a211 211 0 0 1 3.518 3.719c1.957 2.816.552 5.257-2.547 4.88v.003c1.454 1.612 5.995.488 5.76-3.375c-.025-.424-.18-4.697-5.059-8.17m-12.23 1.752v.003c-4.544 3.793-4.686 8.077-3.336 10.262c1.13 1.834 4.62 1.869 5.396.27c-3.76.786-5.127-1.928-3.431-4.772c.42-.71 1.807-1.898 4.195-3.875c-.234-.533-.555-.687-1.266-.922c-.582-.192-.406-.267-1.558-.966m4.213 9.425c-.034.034-.026 1.207.011 1.547c.02.182.04.363.04.403c.003.094.132.89.187 1.152c.023.11.055.343.072.517q.012.181.055.356q.064.293.096.59q.03.297.093.59q.003.006.006.007c.014.013.034.014.047 0c.039-.039.104-.798.147-1.75c.018-.402.04-.814.05-.914s.027-.388.037-.64s.03-.616.043-.81l.026-.354l-.29-.287c-.256-.255-.565-.462-.62-.407m4.455.354c-.042.005-.11.05-.227.135c-.234.17-.289.267-.289.498c0 .199.128 1.107.164 1.166c.067.11.137.79.145 1.441c.005.402.027.825.049.934c.075.378.125 1.115.125 1.884c0 .422.007.781.017.797h.008c.035.058.148-.09.187-.242c.074-.303.119-1.197.11-2.258c-.01-.877 0-1.167.054-1.554c.088-.635.09-.653.094-.97c.004-.298-.006-.362-.22-1.189l-.143-.546c-.017-.067-.033-.101-.074-.096"></svg:path>`,
})
export class LaMandalorianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapIcon],svg[la-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 4.469l-1.406.625l-6.625 2.843l-7.625-2.875l-.375-.125l-.375.157l-7 3l-.594.25V27.53l1.406-.625l6.625-2.843l7.625 2.875l.375.125l.375-.157l7-3l.594-.25zM13 7.437l6 2.25v14.876l-6-2.25zM11 7.5v14.844L6 24.5V9.656zm15 0v14.844L21 24.5V9.656z"></svg:path>`,
})
export class LaMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapMarkedIcon],svg[la-map-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3c-3.301 0-6 2.699-6 6c0 .992.383 2.004.875 3.125a35 35 0 0 0 1.75 3.406a62 62 0 0 0 2.563 4.031L22 20.75l.813-1.188s1.288-1.836 2.562-4.03a35 35 0 0 0 1.75-3.407C27.617 11.004 28 9.992 28 9c0-3.301-2.699-6-6-6M11.969 4.938L4 8.344V27.53l8.031-3.468l8 3L28 23.655v-8.718a49 49 0 0 1-2 3.437v3.969l-5 2.125v-1.625l-1.469-2.125c-.156-.227-.34-.497-.531-.782v4.625l-6-2.25V7.438l1.094.407a8 8 0 0 1 .531-1.938zM22 5c2.219 0 4 1.781 4 4c0 .387-.241 1.3-.688 2.313c-.445 1.011-1.074 2.16-1.687 3.218c-.816 1.406-1.168 1.908-1.625 2.596c-.457-.688-.809-1.19-1.625-2.596c-.613-1.059-1.241-2.207-1.688-3.219C18.242 10.302 18 9.387 18 9c0-2.219 1.781-4 4-4M11 7.5v14.844l-5 2.125V9.656z"></svg:path>`,
})
export class LaMapMarkedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapMarkedAltIcon],svg[la-map-marked-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3c-3.3 0-6 2.7-6 6c0 .992.383 2.004.875 3.125a35 35 0 0 0 1.75 3.406a62 62 0 0 0 2.563 4.031L22 20.75l.813-1.188s1.289-1.835 2.562-4.03a35 35 0 0 0 1.75-3.407C27.617 11.004 28 9.992 28 9c0-3.3-2.7-6-6-6M11.969 4.938L4 8.344V27.53l8.031-3.468l8 3L28 23.655v-8.718a49 49 0 0 1-2 3.437v3.969l-5 2.125v-1.625l-1.469-2.125a71 71 0 0 1-.531-.782v4.625l-6-2.25V7.438l1.094.407a8 8 0 0 1 .531-1.938zM22 5c2.219 0 4 1.781 4 4c0 .387-.242 1.3-.688 2.313c-.445 1.011-1.074 2.16-1.687 3.218c-.816 1.406-1.168 1.906-1.625 2.594c-.457-.688-.809-1.188-1.625-2.594c-.613-1.058-1.242-2.207-1.688-3.219C18.242 10.302 18 9.387 18 9c0-2.219 1.781-4 4-4M11 7.5v14.844l-5 2.125V9.656zm11 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaMapMarkedAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapMarkerIcon],svg[la-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-4.957 0-9 4.043-9 9c0 1.406.57 3.02 1.344 4.781c.773 1.762 1.77 3.633 2.781 5.375a101 101 0 0 0 4.063 6.407L16 29.75l.813-1.188s2.039-2.917 4.062-6.406c1.012-1.742 2.008-3.613 2.781-5.375C24.43 15.02 25 13.406 25 12c0-4.957-4.043-9-9-9m0 2c3.879 0 7 3.121 7 7c0 .8-.43 2.316-1.156 3.969c-.727 1.652-1.73 3.484-2.719 5.187c-1.57 2.711-2.547 4.145-3.125 5c-.578-.855-1.555-2.289-3.125-5c-.988-1.703-1.992-3.535-2.719-5.187S9 12.8 9 12c0-3.879 3.121-7 7-7m0 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaMapMarkerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapMarkerAltIcon],svg[la-map-marker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-4.957 0-9 4.043-9 9c0 1.406.57 3.02 1.344 4.781c.773 1.762 1.77 3.633 2.781 5.375a101 101 0 0 0 4.063 6.407L16 29.75l.813-1.188s2.039-2.917 4.062-6.406c1.012-1.742 2.008-3.613 2.781-5.375C24.43 15.02 25 13.406 25 12c0-4.957-4.043-9-9-9m0 2c3.879 0 7 3.121 7 7c0 .8-.43 2.316-1.156 3.969c-.727 1.652-1.73 3.484-2.719 5.187c-1.57 2.711-2.547 4.145-3.125 5c-.578-.855-1.555-2.289-3.125-5c-.988-1.703-1.992-3.535-2.719-5.187S9 12.8 9 12c0-3.879 3.121-7 7-7m0 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaMapMarkerAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapPinIcon],svg[la-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-3.855 0-7 3.145-7 7c0 3.516 2.617 6.418 6 6.906V28h2v-9.094c3.383-.488 6-3.39 6-6.906c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m0 1c-2.2 0-4 1.8-4 4h2c0-1.117.883-2 2-2z"></svg:path>`,
})
export class LaMapPinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapSignsIcon],svg[la-map-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v2H5v9h20.469l.281-.344l3.563-4.156l-3.563-4.156L25.469 7H17V5zM7 9h17.531l2.157 2.5L24.53 14H7zm8 8v10h2V17z"></svg:path>`,
})
export class LaMapSignsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMapSolidIcon],svg[la-map-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 4.469l-1.406.625l-6.625 2.843l-7.625-2.875l-.375-.125l-.375.157l-7 3l-.594.25V27.53l1.406-.625l6.625-2.843l7.625 2.875l.375.125l.375-.157l7-3l.594-.25zM13 7.437l6 2.25v14.876l-6-2.25zM11 7.5v14.844L6 24.5V9.656zm15 0v14.844L21 24.5V9.656z"></svg:path>`,
})
export class LaMapSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarkdownIcon],svg[la-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.875 6C1.32 6 0 7.254 0 8.813v14.374C0 24.747 1.32 26 2.875 26h26.25C30.68 26 32 24.746 32 23.187V8.813C32 7.255 30.68 6 29.125 6zm0 2h26.25c.516 0 .875.383.875.813v14.374c0 .43-.36.813-.875.813H2.875C2.359 24 2 23.617 2 23.187V8.813c0-.43.36-.812.875-.812zM5 11v10h3v-6.656l3 3.969l3-3.97V21h3V11h-3l-3 4l-3-4zm17 0v5h-3l4.5 5l4.5-5h-3v-5z"></svg:path>`,
})
export class LaMarkdownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarkerIcon],svg[la-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.625 3.063l-.719.624L7.563 17l-.5.469l.25.656s1.125 3-1.032 5.156v.032l-.031.03l-.156.188l-.125.125L2 27.531L7.375 29l2.063-2.063l.218-.187l.031-.031h.032c2.156-2.157 5.156-1.032 5.156-1.032l.656.25l.469-.5l13.313-15.343l.625-.719zm-.125 2.75L27.188 9.5l-8.75 10.063l-5-5zM11.937 15.874l5.188 5.188l-1.938 2.25l-5.5-5.5zM9.563 20.5l2.937 2.938c-1.242.046-2.746.437-4.156 1.812c-.02.02-.043.012-.063.031l-.25.219l-.531-.531l.219-.25l.031-.063c1.375-1.41 1.766-2.914 1.813-4.156"></svg:path>`,
})
export class LaMarkerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarsIcon],svg[la-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2h7.563l-7.688 7.688C15.523 12.645 13.832 12 12 12c-4.406 0-8 3.594-8 8s3.594 8 8 8s8-3.594 8-8c0-1.832-.645-3.523-1.688-4.875L26 7.437V15h2V4zm-5 10c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarsDoubleIcon],svg[la-mars-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v2h5.563l-5.407 5.406C12.957 9.512 11.523 9 10 9a6.94 6.94 0 0 0-4.938 2.063A6.94 6.94 0 0 0 3 16c0 1.871.742 3.613 2.063 4.938a6.94 6.94 0 0 0 9.875 0a7 7 0 0 0 1.75-2.844a4.2 4.2 0 0 0-2.313.281a4.9 4.9 0 0 1-.844 1.156A4.96 4.96 0 0 1 10 21a4.96 4.96 0 0 1-3.531-1.469A4.96 4.96 0 0 1 5 16c0-1.336.523-2.586 1.469-3.531A4.96 4.96 0 0 1 10 11c1.336 0 2.586.523 3.531 1.469a4.9 4.9 0 0 1 1.094 1.656a8 8 0 0 1 2.094-.094c-.23-.793-.63-1.52-1.125-2.187L21 6.438V11h4.563l-5.407 5.406C18.957 15.512 17.523 15 16 15a6.94 6.94 0 0 0-4.938 2.063a7 7 0 0 0-1.75 2.843c.774.125 1.59.028 2.313-.281a4.9 4.9 0 0 1 .844-1.156A4.96 4.96 0 0 1 16 17c1.336 0 2.586.523 3.531 1.469A4.96 4.96 0 0 1 21 22a4.96 4.96 0 0 1-1.469 3.531A4.96 4.96 0 0 1 16 27a4.96 4.96 0 0 1-3.531-1.469a4.9 4.9 0 0 1-1.094-1.656a8 8 0 0 1-2.094.094a6.9 6.9 0 0 0 1.781 2.968a6.94 6.94 0 0 0 9.876 0A6.94 6.94 0 0 0 23 22c0-1.523-.512-2.957-1.406-4.156L27 12.437V18h2V9h-6V3z"></svg:path>`,
})
export class LaMarsDoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarsStrokeIcon],svg[la-mars-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2h7.563L20 10.563L17.719 8.28L16.28 9.72L18.563 12l-1.688 1.688C15.523 12.645 13.832 12 12 12c-4.406 0-8 3.594-8 8s3.594 8 8 8s8-3.594 8-8c0-1.832-.645-3.523-1.688-4.875L20 13.437l2.281 2.282l1.438-1.438L21.437 12L26 7.437V15h2V4zm-5 10c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsStrokeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarsStrokeHIcon],svg[la-mars-stroke-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8c-4.406 0-8 3.594-8 8s3.594 8 8 8c4.066 0 7.438-3.066 7.938-7H20v3h2v-3h4.563l-4.282 4.281l1.438 1.438l6-6l.687-.719l-.687-.719l-6-6l-1.438 1.438L26.563 15H22v-3h-2v3h-2.063c-.5-3.934-3.87-7-7.937-7m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsStrokeHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMarsStrokeVIcon],svg[la-mars-stroke-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 1.594l-.719.687l-6 6L10.72 9.72L15 5.438V10h-3v2h3v2.063c-3.934.5-7 3.87-7 7.937c0 4.406 3.594 8 8 8s8-3.594 8-8c0-4.066-3.066-7.438-7-7.938V12h3v-2h-3V5.437l4.281 4.282L22.72 8.28l-6-6zM16 16c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsStrokeVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMaskIcon],svg[la-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.03 7c-4.953 0-8.812 1.06-11.475 3.154C2.263 11.955 1 14.472 1 17.242C1 22.07 4.633 26 9.098 26c2.07 0 4.039-1.09 5.279-2.934l1.111-1.734c.14-.208.332-.32.541-.32c.208 0 .402.113.53.302l1.136 1.772C18.923 24.91 20.893 26 22.963 26C27.32 26 31 21.918 31 17.086c0-2.747-1.25-5.231-3.52-6.996C24.843 8.04 20.991 7 16.03 7m0 2c4.443 0 7.978.923 10.224 2.668C28.523 13.433 29 15.588 29 17.086C29 20.77 26.18 24 22.963 24c-1.403 0-2.754-.759-3.598-2.014l-1.136-1.77c-.508-.753-1.33-1.204-2.2-1.204c-.869 0-1.692.448-2.213 1.222l-1.113 1.735C11.848 23.24 10.501 24 9.098 24C5.45 24 3 20.505 3 17.242c0-2.143.99-4.101 2.79-5.515C8.06 9.943 11.6 9 16.03 9M10 12c-2.376 0-3.899 1.464-4.596 2.336a1.88 1.88 0 0 0 0 2.328C6.101 17.537 7.625 19 10 19s3.899-1.464 4.596-2.336a1.88 1.88 0 0 0 0-2.328C13.899 13.463 12.375 12 10 12m12 0c-2.376 0-3.899 1.464-4.596 2.336a1.88 1.88 0 0 0 0 2.328C18.101 17.537 19.625 19 22 19s3.899-1.464 4.596-2.336a1.88 1.88 0 0 0 0-2.328C25.899 13.463 24.375 12 22 12m-12 2c1.467 0 2.465.903 2.965 1.5c-.5.597-1.497 1.5-2.965 1.5s-2.465-.903-2.965-1.5c.5-.597 1.497-1.5 2.965-1.5m12 0c1.467 0 2.465.903 2.965 1.5c-.5.597-1.497 1.5-2.965 1.5s-2.465-.903-2.965-1.5c.5-.597 1.497-1.5 2.965-1.5"></svg:path>`,
})
export class LaMaskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMastodonIcon],svg[la-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.938 4.031c-3.021.013-6.02.396-7.58 1.115c0 0-3.358 1.529-3.358 6.735c0 6.197-.005 13.98 5.563 15.484c2.131.573 3.965.697 5.439.612c2.675-.151 3.998-.971 3.998-.971l-.09-1.977s-1.734.611-3.88.541c-2.128-.075-4.369-.234-4.718-2.89a6 6 0 0 1-.046-.746c4.507 1.119 8.35.487 9.408.359c2.954-.359 5.525-2.211 5.853-3.904c.514-2.668.471-6.508.471-6.508c0-5.206-3.352-6.735-3.352-6.735c-1.645-.768-4.688-1.127-7.709-1.115zm-3.233 3.971c1.035.028 2.058.49 2.688 1.469l.609 1.035l.607-1.035c1.265-1.967 4.1-1.845 5.45-.323c1.244 1.448.966 2.383.966 8.852v.002h-2.447v-5.629c0-2.635-3.36-2.737-3.36.365V16h-2.43v-3.262c0-3.102-3.358-3.002-3.358-.367V18H8.977c0-6.474-.273-7.415.966-8.852c.68-.766 1.727-1.174 2.762-1.146"></svg:path>`,
})
export class LaMastodonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMaxcdnIcon],svg[la-maxcdn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l2 5l-3 15h5l3-15h4l-3 15h5l3-15h4l-3 15h5l2.75-13.742C30.395 9.02 27.922 6 24.617 6z"></svg:path>`,
})
export class LaMaxcdnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMdbIcon],svg[la-mdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.08 9l-1 12h2.008l.557-6.695L5.322 21h1.356l2.677-6.695L9.912 21h2.008l-1-12H9.322L6 17.309L2.678 9zM14 9v12h2c3.302 0 6-2.698 6-6s-2.698-6-6-6zm10 0v12.012h4.494A3.52 3.52 0 0 0 32 17.506c0-1.27-.723-2.342-1.744-2.957c.436-.584.744-1.27.744-2.049c0-1.921-1.579-3.5-3.5-3.5zm-8 2c2.22 0 4 1.78 4 4s-1.78 4-4 4zm10 0h1.5c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H26zm0 5h2.494A1.49 1.49 0 0 1 30 17.506a1.49 1.49 0 0 1-1.506 1.506H26z"></svg:path>`,
})
export class LaMdbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMedalIcon],svg[la-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 3l4.266 10.36C8.71 14.948 7 17.774 7 21c0 4.962 4.037 9 9 9s9-4.038 9-9c0-3.225-1.71-6.051-4.266-7.64L25 3h-2.162l-3.912 9.498a9 9 0 0 0-2.06-.453L20.587 3h-2.162l-3.752 9.11a9 9 0 0 0-1.6.388L9.162 3zm4.412 0l2.541 6.174l1.082-2.627L13.575 3zM16 14c3.859 0 7 3.14 7 7s-3.141 7-7 7s-7-3.14-7-7s3.141-7 7-7m0 3.162l-1.168 2.62l-2.832.31l2.12 1.904l-.597 2.81L16 23.378l2.477 1.43l-.596-2.81L20 20.091l-2.832-.31z"></svg:path>`,
})
export class LaMedalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMedappsIcon],svg[la-medapps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-4.486 0-8 3.443-8 7.838c0 2.139.856 4.735 2.182 6.617l.134.191C11.106 17.763 12 19.03 12 20a1 1 0 1 0 2 0c0-1.605-1.088-3.147-2.049-4.508l-.135-.19C10.73 13.762 10 11.566 10 9.839C10 6.565 12.636 4 16 4s6 2.565 6 5.838c0 1.726-.73 3.923-1.816 5.465l-.127.18C19.237 16.636 18 18.382 18 20a1 1 0 1 0 2 0c0-.98 1.099-2.53 1.688-3.361l.128-.184C23.143 14.573 24 11.977 24 9.838C24 5.443 20.486 2 16 2m.217 8c-.462.079-.505 3.195-.746 4.379c-.483-.667-.555-1.762-.996-1.852c-.336 0-.515 1.066-.704 1.703l-1.648.249c-.787.308 2.361.388 2.54.398c.335.846.924 2.637 1.165 1.98l.492-3.304c.504 1.045.684 2.498.936 2.498c.326-.01.366-.665.607-1.412c.85-.01 2.236-.021 2.131-.389c0 0-2.077-.129-2.603-.338c-.126-.558-.691-3.952-1.174-3.912M13 23c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm1 4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1z"></svg:path>`,
})
export class LaMedappsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMediumIcon],svg[la-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10.36h-.79c-.296 0-.71.425-.71.699v9.933c0 .278.414.649.71.649H26V24h-7.168v-2.36h1.5V11.2h-.07L16.758 24h-2.711l-3.461-12.8H10.5v10.44H12V24H6v-2.36h.77c.316 0 .73-.37.73-.648V11.06c0-.274-.414-.7-.73-.7H6V8h7.504l2.46 9.262h.071L18.52 8H26z"></svg:path>`,
})
export class LaMediumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMediumMIcon],svg[la-medium-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10.36h-.79c-.296 0-.71.425-.71.699v9.933c0 .278.414.649.71.649H26V24h-7.168v-2.36h1.5V11.2h-.07L16.758 24h-2.711l-3.461-12.8H10.5v10.44H12V24H6v-2.36h.77c.316 0 .73-.37.73-.648V11.06c0-.274-.414-.7-.73-.7H6V8h7.504l2.46 9.262h.071L18.52 8H26z"></svg:path>`,
})
export class LaMediumMIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMedkitIcon],svg[la-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2zm0 2h4v1h-4zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1m9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaMedkitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMedrtIcon],svg[la-medrt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.854 3C7.746 3 2 8.814 2 16s5.746 13 12.854 13c1.037 0 2.041-.12 3.003-.361C12.197 27.684 7 22.385 7 16S12.34 4.315 18 3.361C17.039 3.121 15.89 3 14.854 3m2.685 4c-1.821.007-3.708.6-5.336 1.807a3 3 0 0 0-.203.158c3.291-.9 6.956.2 9.164 3.055A8.36 8.36 0 0 1 22.42 20c2.905-2.833 3.462-7.176 1.137-10.19C22.116 7.95 19.88 6.992 17.539 7m9.637 3.025A10 10 0 0 1 28 14c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-7.408-3.3c.298.673.785 1.406 1.209 2.007c3.185 4.572 9.436 5.666 13.953 2.438c4.528-3.228 5.6-9.544 2.416-14.116c-.341-.49-.636-.716-.994-1.004M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class LaMedrtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMeetupIcon],svg[la-meetup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 1a.5.5 0 0 0 0 1a.5.5 0 0 0 0-1m9 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M14 5a6 6 0 0 0-5.656 4.016A4.49 4.49 0 0 0 4 13.5c0 .707.178 1.368.469 1.963A5 5 0 0 0 7.01 23.9c-.001.034-.01.066-.01.1a5 5 0 0 0 5 5c1.213 0 2.31-.449 3.176-1.168a3.987 3.987 0 0 0 6.687-1.85A5.5 5.5 0 0 0 27 20.5c0-1.152-.355-2.22-.96-3.104c.591-.627.96-1.466.96-2.396c0-1.401-.829-2.6-2.018-3.16c.007-.113.018-.225.018-.34A5.5 5.5 0 0 0 19.5 6c-.623 0-1.22.108-1.777.299A5.97 5.97 0 0 0 14 5M7 6a1 1 0 0 0 0 2a1 1 0 0 0 0-2m20 3a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-9.994.992c.146-.013.309-.005.498.026c.51.074.807.424 1.195.793c.314.32.542.122.72.017c.278-.16.494-.3 1.32-.281c.861.018 1.847.332 2.056 1.81c.228 1.657-2.655 5.912-2.465 7.883c.135 1.386 2.464.4 2.654 1.668c.248 1.65-2.898 1.035-3.601.684c-1.127-.567-1.816-1.85-1.533-3.117c.234-.948 2.308-4.822 2.394-5.4c.074-.617-.244-.673-.435-.673c-.265-.018-.456.106-.721.494c-.228.351-2.816 5.616-3.043 6.053c-.721 1.392-2.587 1.164-2.377-.246c.055-.419 1.711-4.186 1.78-4.783c.054-.351-.018-.74-.37-.932c-.35-.179-.775.106-.898.315c-.18.302-2.501 6.48-2.748 6.935c-.437.788-.882 1.036-1.565 1.073c-1.6.092-2.8-1.265-2.271-2.903c.228-.739 1.772-6.294 2.566-7.705c.53-.948 1.99-1.667 2.994-1.23c.53.228 1.27.596 1.479.7c.493.235 1.02-.382 1.23-.56c.411-.355.702-.581 1.14-.62zM30.5 13a.5.5 0 0 0 0 1a.5.5 0 0 0 0-1m-29 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M29 16a1 1 0 0 0 0 2a1 1 0 0 0 0-2M5.5 25a.5.5 0 0 0 0 1a.5.5 0 0 0 0-1m18 2a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M15 29a1 1 0 0 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class LaMeetupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMegaportIcon],svg[la-megaport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m0 2l-1 1v2.672l-2 2v3.035l-3 2.398V22l1 1l1-1v-2.934l1.5-1.2l1.5 1.2V22l1 1l1-1v-2.934l1.5-1.2l1.5 1.2V22l1 1l1-1v-3.894l-3-2.399v-3.035l-2-2V8zm0 5.5l1 1v2.672l-1 1l-1-1V13.5z"></svg:path>`,
})
export class LaMegaportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehIcon],svg[la-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M11 20v2h10v-2z"></svg:path>`,
})
export class LaMehIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehBlankIcon],svg[la-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaMehBlankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehBlankSolidIcon],svg[la-meh-blank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 7a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaMehBlankSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehRollingEyesIcon],svg[la-meh-rolling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 5c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m10 0c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m-10.98 2.268A1.5 1.5 0 0 0 11.5 14a1.5 1.5 0 0 0 1.326-.805c.11.247.174.518.174.805c0 1.103-.897 2-2 2s-2-.897-2-2c0-.745.414-1.388 1.02-1.732m11.96 0c.606.344 1.02.987 1.02 1.732c0 1.103-.897 2-2 2s-2-.897-2-2c0-.287.065-.558.174-.805A1.5 1.5 0 0 0 20.5 14a1.5 1.5 0 0 0 1.48-1.732M12 20v2h8v-2z"></svg:path>`,
})
export class LaMehRollingEyesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehRollingEyesSolidIcon],svg[la-meh-rolling-eyes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 5c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m10 0c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m-10.98 2.268A1.5 1.5 0 0 0 11.5 14a1.5 1.5 0 0 0 1.326-.805c.11.247.174.518.174.805c0 1.103-.897 2-2 2s-2-.897-2-2c0-.745.414-1.388 1.02-1.732m11.96 0c.606.344 1.02.987 1.02 1.732c0 1.103-.897 2-2 2s-2-.897-2-2c0-.287.065-.558.174-.805A1.5 1.5 0 0 0 20.5 14a1.5 1.5 0 0 0 1.48-1.732M12 20v2h8v-2z"></svg:path>`,
})
export class LaMehRollingEyesSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMehSolidIcon],svg[la-meh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M11 20v2h10v-2z"></svg:path>`,
})
export class LaMehSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMemoryIcon],svg[la-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h13v-1c0-.555.445-1 1-1s1 .445 1 1v1h13V7zm2 2h24v9H4zm2 2v5h6v-5zm7 0v5h6v-5zm7 0v5h6v-5zM8 13h2v1H8zm7 0h2v1h-2zm7 0h2v1h-2zM4 20h24v3h-9.406c-.442-1.11-1.336-2-2.594-2s-2.152.89-2.594 2H4z"></svg:path>`,
})
export class LaMemoryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMendeleyIcon],svg[la-mendeley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.658 7.201c-3.612-.04-5.454 3.632-4.33 6.48c.604 3.167.02 4.846-2.127 4.895c-1.05-.114-1.834.322-2.627 1.115c-.986.976-.955 4.697 2.112 5.084c2.334.292 3.96-2.253 3.033-4.35c-2.344-5.137 9.354-5.256 7.402-.405q-.007.006-.016.02c-1.328 2.12.339 4.827 2.915 4.718c2.58.104 4.23-2.608 2.912-4.719l-.014-.02c-1.952-4.85 9.745-4.731 7.402.407a3.23 3.23 0 0 0-.283 1.635c.243 2.646 3.405 3.672 5.2 1.744c.882-.734 1.143-3.25 0-4.375a2.92 2.92 0 0 0-2.397-.854c-2.145-.05-2.773-1.728-2.168-4.894c1.13-2.85-.737-6.516-4.33-6.48c-3.835.034-3.884 4.062-6.322 4.062c-2.383 0-2.552-4.028-6.362-4.063m6.348 5.059h.03a3.11 3.11 0 0 1 3.11 3.111c0 1.24-.95 3.111-3.11 3.111h-.03c-2.15 0-3.113-1.857-3.113-3.11a3.115 3.115 0 0 1 3.113-3.112"></svg:path>`,
})
export class LaMendeleyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMenorahIcon],svg[la-menorah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5S3 7.016 3 8c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0S7 7.016 7 8c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3m4 0s-1 2.016-1 3c0 .55.45 1 1 1s1-.45 1-1c0-.938-1-3-1-3M3 10c0 6.805 5.32 12.414 12 12.938V25h-5v2h12v-2h-5v-2.063c6.68-.523 12-6.132 12-12.937h-2c0 5.719-4.41 10.43-10 10.938v-2c4.477-.508 8-4.333 8-8.938h-2c0 3.516-2.617 6.418-6 6.906v-2c2.27-.469 4-2.504 4-4.906h-2c0 1.3-.844 2.395-2 2.813V10h-2v2.813c-1.156-.418-2-1.512-2-2.813h-2c0 2.402 1.73 4.438 4 4.906v2c-3.383-.488-6-3.39-6-6.906H7c0 4.605 3.523 8.43 8 8.938v2C9.41 20.43 5 15.718 5 10z"></svg:path>`,
})
export class LaMenorahIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMercuryIcon],svg[la-mercury-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2c0 1.477.66 2.8 1.688 3.719C9.93 6.984 8 9.777 8 13c0 4.066 3.066 7.438 7 7.938V24h-4v2h4v4h2v-4h4v-2h-4v-3.063c3.934-.5 7-3.87 7-7.937c0-3.223-1.93-6.016-4.688-7.281C20.34 4.8 21 3.477 21 2h-2c0 1.668-1.332 3-3 3s-3-1.332-3-3zm5 5c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMercuryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMeteorIcon],svg[la-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.344 1.594l-3.907 2.562l-6.25 4.094l.375-.656l1.625-2.938L19.22 6.22s-2.727 1.46-5.938 3.375c-3.21 1.914-6.867 4.23-8.875 6.187c-3.265 3.266-3.273 8.535 0 11.719h.032c3.269 3.25 8.48 3.27 11.656 0v-.031c1.703-1.707 3.808-4.813 5.531-7.563a120 120 0 0 0 3.031-5.125l1.407-2.469l-2.625 1.063l-.813.313l5.219-8.157zm-6.719 6.812L19.25 15.25l-1.688 2.656l2.907-1.187l.937-.375c-.539.922-.656 1.152-1.5 2.5c-1.699 2.715-3.824 5.855-5.218 7.25c-2.418 2.508-6.348 2.527-8.876 0h-.03c-2.509-2.418-2.497-6.348.03-8.875c1.692-1.645 5.336-4.02 8.5-5.907a77 77 0 0 1 2.813-1.624l-.594 1.124l-1.937 3.532l3.344-2.219zM10 18c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 2c1.191 0 2 .809 2 2s-.809 2-2 2s-2-.809-2-2s.809-2 2-2"></svg:path>`,
})
export class LaMeteorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrochipIcon],svg[la-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v2H3v18h4v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h4V8h-4V6h-2v2h-2V6h-2v2h-2V6h-2v2h-2V6h-2v2H9V6zm-2 4h22v14H5zm3 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M8 16c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m16 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M8 20c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaMicrochipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrophoneIcon],svg[la-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h6c1.094 0 2-.906 2-2V6c0-1.094-.906-2-2-2zm0 2h6v12h-6zm-6 8v4c0 3.3 2.7 6 6 6h2v2h-4v2h10v-2h-4v-2h2c3.3 0 6-2.7 6-6v-4h-2v4c0 2.219-1.781 4-4 4h-6c-2.219 0-4-1.781-4-4v-4z"></svg:path>`,
})
export class LaMicrophoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrophoneAltIcon],svg[la-microphone-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-3.578 0-6.531 2.715-6.938 6.188L6 21.593l-.469.687l.563.594l.812.813l-2.625 2.593l1.439 1.44l2.562-2.594L9.656 26.5l.719-.5l11.469-8.063C25.304 17.52 28 14.57 28 11c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5a5 5 0 0 1-.813 2.75L18.25 6.812A5 5 0 0 1 21 6m-4.188 2.25l6.938 6.938A5 5 0 0 1 21 16c-2.773 0-5-2.227-5-5a5 5 0 0 1 .813-2.75zm-2.437 4.938a7.07 7.07 0 0 0 4.406 4.437l-8.875 6.281l-1.781-1.843z"></svg:path>`,
})
export class LaMicrophoneAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrophoneAltSlashIcon],svg[la-microphone-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.72 2.28L2.28 3.72l9.581 9.583l1.428 1.426l3.973 3.972l1.441 1.444l9.576 9.576l1.442-1.442l-9.325-9.324l1.448-1.017C25.306 17.52 28 14.57 28 11c0-3.855-3.145-7-7-7c-3.578 0-6.53 2.715-6.938 6.188l-1.007 1.425zM21 6c2.773 0 5 2.227 5 5a5 5 0 0 1-.813 2.75L18.25 6.812A5 5 0 0 1 21 6m-4.188 2.25l6.938 6.938A5 5 0 0 1 21 16c-2.773 0-5-2.227-5-5c0-1.016.297-1.965.813-2.75zm-6.09 6.662L6 21.594l-.469.687l.563.594l.812.813l-2.625 2.593L5.72 27.72l2.562-2.594L9.656 26.5l.719-.5l6.715-4.72l-1.44-1.438l-5.744 4.064l-1.781-1.843l4.027-5.72l-1.43-1.43z"></svg:path>`,
})
export class LaMicrophoneAltSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrophoneSlashIcon],svg[la-microphone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l26 26l1.438-1.438L23.437 22C24.398 20.937 25 19.543 25 18v-4h-2v4c0 .992-.363 1.898-.969 2.594l-1.406-1.407c.238-.328.375-.75.375-1.187V6c0-1.102-.898-2-2-2h-6c-1.102 0-2 .898-2 2v3.563zM13 6h6v11.563l-6-6zm-6 8v4c0 3.309 2.691 6 6 6h2v2h-4v2h10v-2h-4v-2h2c.254 0 .504-.031.75-.063L17.812 22H13c-2.207 0-4-1.793-4-4v-4zm4 1.188V18c0 1.102.898 2 2 2h2.813l-2-2H13v-.813z"></svg:path>`,
})
export class LaMicrophoneSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicroscopeIcon],svg[la-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v2h4V4zm-1 3v2h-2c-2.746 0-5 2.254-5 5v4.188c-1.156.417-2 1.519-2 2.812s.844 2.395 2 2.813V26H7v2h17v-2H11v-2.188A3.02 3.02 0 0 0 12.813 22H24v-2H12.812A3.04 3.04 0 0 0 11 18.187V14a3 3 0 0 1 3-3h2v6h6V7zm2 2h2v6h-2zm-8 11c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaMicroscopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMicrosoftIcon],svg[la-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v8H7zm10 0h8v8h-8zM7 17h8v8H7zm10 0h8v8h-8z"></svg:path>`,
})
export class LaMicrosoftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMinusIcon],svg[la-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15v2h22v-2z"></svg:path>`,
})
export class LaMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMinusCircleIcon],svg[la-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-6 10v2h12v-2z"></svg:path>`,
})
export class LaMinusCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMinusSquareIcon],svg[la-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 8v2h10v-2z"></svg:path>`,
})
export class LaMinusSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMinusSquareSolidIcon],svg[la-minus-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 8v2h10v-2z"></svg:path>`,
})
export class LaMinusSquareSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMittenIcon],svg[la-mitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c-4.395 0-8 3.605-8 8v2.625c-1.723-1.008-3.96-.668-5.188.969c-1.32 1.758-.976 4.277.782 5.594v.03h.031L12 24.157V29h14v-5.281c.02-.04.04-.074.063-.125c.113-.227.234-.547.375-.969c.28-.84.562-2.055.562-3.625v-8c0-4.395-3.605-8-8-8m0 2c3.305 0 6 2.695 6 6v8c0 1.344-.219 2.344-.438 3c-.109.328-.238.566-.312.719c-.04.074-.043.125-.063.156c-.007.016-.027.027-.03.031l.155.094H13.845l-.25-.188l-5.781-4.218a1.964 1.964 0 0 1-.407-2.782c.672-.894 1.89-1.074 2.782-.406h.03l1.22.844L13 17.344V11c0-3.305 2.695-6 6-6m-5 20h10v2H14z"></svg:path>`,
})
export class LaMittenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMixIcon],svg[la-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v20c0 1.654 1.346 3 3 3s3-1.346 3-3V13a1 1 0 0 1 2 0v8c0 1.654 1.346 3 3 3s3-1.346 3-3v-6a1 1 0 0 1 2 0v2c0 1.654 1.346 3 3 3s3-1.346 3-3V5zm2 2h18v10a1 1 0 0 1-2 0v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v6a1 1 0 0 1-2 0v-8c0-1.654-1.346-3-3-3s-3 1.346-3 3v12a1 1 0 0 1-2 0z"></svg:path>`,
})
export class LaMixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMixcloudIcon],svg[la-mixcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.846 6a8.46 8.46 0 0 0-7.99 5.723C2.112 12.123 0 14.474 0 17.326C0 20.448 2.543 23 5.688 23h14.546C22.856 23 25 20.868 25 18.246a4.756 4.756 0 0 0-3.734-4.633C20.845 9.351 17.232 6 12.846 6m.004 2c3.535 0 6.402 2.898 6.402 6.44c0 .693-.111 1.378-.324 2.03c-.456 1.409 1.642 1.99 2.047.673c.142-.418.253-.856.324-1.295A2.65 2.65 0 0 1 23 18.326A2.677 2.677 0 0 1 20.326 21H5.606A3.61 3.61 0 0 1 2 17.389c0-2 1.62-3.614 3.605-3.614c.952 0 1.855.38 2.534 1.063c1.013 1.02 2.554-.522 1.53-1.553a5.8 5.8 0 0 0-2.644-1.5A6.41 6.41 0 0 1 12.85 8m16.619 4.008c-.777-.103-1.603.783-1.022 1.629a8.8 8.8 0 0 1 1.473 4.867a8.86 8.86 0 0 1-1.473 4.877c-.48.697.049 1.619.854 1.619c.344 0 .669-.167.875-.46A10.8 10.8 0 0 0 32 18.503c0-2.17-.628-4.26-1.826-6.025c-.194-.292-.446-.437-.705-.471zM26.477 13.7c-.782-.102-1.603.776-1.022 1.623c.647.942.97 2.042.97 3.18a5.54 5.54 0 0 1-.97 3.17c-.47.687.02 1.619.863 1.619c.343 0 .667-.147.873-.441a7.73 7.73 0 0 0 1.317-4.348c0-1.56-.444-3.061-1.317-4.336c-.198-.29-.454-.433-.714-.467"></svg:path>`,
})
export class LaMixcloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMizuniIcon],svg[la-mizuni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-4.5 5c-.83 0-1.5.67-1.5 1.5V22c.79-.78 1.82-1.41 3-1.8v-8.7c0-.83-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5v8.33c.49-.08.99-.12 1.51-.12c.51 0 1 .04 1.49.12V11.5c0-.83-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5v8.69c1.18.4 2.21 1.02 3 1.8V11.5c0-.83-.67-1.5-1.5-1.5"></svg:path>`,
})
export class LaMizuniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMobileIcon],svg[la-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1m5 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMobileAltIcon],svg[la-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1m5 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaMobileAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laModxIcon],svg[la-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.242v11.992l1.855 1.213L3.89 25h12.486l1.146-1.715L25 27.765V15.44l-1.82-1.115L27.816 7H15.48l-1.132 1.607zm2 3.516l4.191 2.49l6.13 3.643l-9.128 2.04L9 15.153zM16.52 9h7.664l-2.508 3.96l-5.604-3.327zm3.632 6.756L15.307 23h-7.71l3.423-5.203zm2.159.38l.689.425v7.673l-4.328-2.59l3.639-5.507z"></svg:path>`,
})
export class LaModxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneroIcon],svg[la-monero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.04-.156 2.045-.428 3H22v-8.023l-6 6.285l-6-6.285V19H5.428A11 11 0 0 1 5 16C5 9.935 9.935 5 16 5m-4 10.969l4 4.187l4-4.187V21h5.785c-1.825 3.556-5.521 6-9.785 6s-7.96-2.444-9.785-6H12z"></svg:path>`,
})
export class LaMoneroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillIcon],svg[la-money-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m10 2c-2.211 0-4 2.016-4 4.5s1.789 4.5 4 4.5s4-2.016 4-4.5s-1.789-4.5-4-4.5m0 2c1.102 0 2 1.121 2 2.5s-.898 2.5-2 2.5s-2-1.121-2-2.5s.898-2.5 2-2.5m-7.5 1a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14"></svg:path>`,
})
export class LaMoneyBillIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillAltIcon],svg[la-money-bill-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m9 2c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-9zm-6.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14"></svg:path>`,
})
export class LaMoneyBillAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillAltSolidIcon],svg[la-money-bill-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v17h28V7zm4 2h20a2 2 0 0 0 2 2v9a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-9a2 2 0 0 0 2-2m9 2c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-9zm-6.5 3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 14m15 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 23.5 14"></svg:path>`,
})
export class LaMoneyBillAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillWaveIcon],svg[la-money-bill-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.854 6.008c-2.69.074-4.775.804-6.805 1.51c-2.171.754-4.22 1.465-7.059 1.494c-1.897.03-3.797-.298-5.664-.944L2 7.61v17.082l.666.237c1.739.615 3.517.97 5.287 1.054q.421.02.826.02c3.013 0 5.32-.8 7.557-1.572c2.358-.816 4.582-1.587 7.617-1.444a16.5 16.5 0 0 1 4.713.944l1.334.472V7.314l-.658-.24a17.8 17.8 0 0 0-5.297-1.056a17 17 0 0 0-1.191-.01m.054 1.986q.509-.016 1.049.004c.374.016.748.05 1.121.094A2.495 2.495 0 0 0 28 9.949v9.102a2.495 2.495 0 0 0-2.957 2.025a18 18 0 0 0-.996-.074c-3.415-.15-5.933.709-8.367 1.553c-2.361.818-4.598 1.591-7.631 1.447a16 16 0 0 1-1.13-.1A2.495 2.495 0 0 0 4 22.051v-9.102a2.493 2.493 0 0 0 2.959-2.05c.685.071 1.37.112 2.053.101c3.165-.032 5.466-.833 7.693-1.607c1.961-.683 3.83-1.325 6.203-1.399M16 11c-2.206 0-4 2.243-4 5s1.794 5 4 5s4-2.243 4-5s-1.794-5-4-5m0 2c1.084 0 2 1.374 2 3s-.916 3-2 3s-2-1.374-2-3s.916-3 2-3m7.5 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-15 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaMoneyBillWaveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyBillWaveAltIcon],svg[la-money-bill-wave-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.854 6.008c-2.69.074-4.775.804-6.805 1.51c-2.171.754-4.22 1.465-7.059 1.494c-1.897.03-3.797-.298-5.664-.944L2 7.61v17.082l.666.237c1.739.615 3.517.97 5.287 1.054q.421.02.826.02c3.013 0 5.32-.8 7.557-1.572c2.358-.816 4.582-1.587 7.617-1.444a16.5 16.5 0 0 1 4.713.944l1.334.472V7.314l-.658-.24a17.8 17.8 0 0 0-5.297-1.056a17 17 0 0 0-1.191-.01m.054 1.986q.509-.016 1.049.004c.374.016.748.05 1.121.094A2.495 2.495 0 0 0 28 9.949v9.102a2.495 2.495 0 0 0-2.957 2.025a18 18 0 0 0-.996-.074c-3.415-.15-5.933.709-8.367 1.553c-2.361.818-4.598 1.591-7.631 1.447a16 16 0 0 1-1.13-.1A2.495 2.495 0 0 0 4 22.051v-9.102a2.493 2.493 0 0 0 2.959-2.05c.685.071 1.37.112 2.053.101c3.165-.032 5.466-.833 7.693-1.607c1.961-.683 3.83-1.325 6.203-1.399M16 12c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-8zm7.5 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-15 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaMoneyBillWaveAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyCheckIcon],svg[la-money-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h28V7zm2 2h24v14H4zm2 2v2h10v-2zm14 0v5h6v-5zM6 14v2h7v-2zm2.5 3c-.605 0-1.03.344-1.313.656c-.28.313-.488.66-.656 1.032C6.195 19.434 6 20.238 6 21h2c0-.32.156-1.016.375-1.5c.062-.141.126-.188.188-.281c.073.102.128.167.218.312c.145.234.305.517.5.782s.434.702 1.188.718c.594.012.777-.203.969-.343c.19-.141.323-.274.468-.407c.098-.09.176-.155.25-.218c.027.039.139.104.69.343c.667.292 1.677.594 3.154.594v-2c-1.23 0-1.87-.2-2.344-.406S12.824 18 12 18c-.602 0-.754.234-.938.375c-.163.125-.277.258-.406.375c-.059-.094-.086-.141-.156-.25a4.7 4.7 0 0 0-.656-.875C9.554 17.332 9.098 17 8.5 17M20 19v2h6v-2z"></svg:path>`,
})
export class LaMoneyCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoneyCheckAltIcon],svg[la-money-check-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h28V7zm2 2h24v14H4zm2 2v2h10v-2zm16 0v1.063c-1.125.187-2 1.14-2 2.312c0 .754.418 1.445 1.094 1.781L24 17.625a.357.357 0 0 1-.375.375h-1.25a.357.357 0 0 1-.375-.375V17h-2v.625c0 1.172.875 2.125 2 2.313V21h2v-1.063c1.125-.187 2-1.14 2-2.312c0-.754-.418-1.441-1.094-1.781L22 14.375c0-.223.152-.375.375-.375h1.25c.223 0 .375.152.375.375V15h2v-.625c0-1.172-.875-2.125-2-2.313V11zM6 14v2h7v-2zm2.5 3c-.605 0-1.031.344-1.313.656c-.28.313-.488.66-.656 1.032C6.195 19.433 6 20.238 6 21h2c0-.32.156-1.016.375-1.5c.063-.14.125-.188.188-.281c.074.101.128.168.218.312c.145.235.305.516.5.782c.196.265.434.703 1.188.718c.594.012.777-.203.969-.343c.19-.141.324-.274.468-.407c.098-.09.176-.156.25-.218c.028.039.137.105.688.343c.668.293 1.68.594 3.156.594v-2c-1.23 0-1.871-.2-2.344-.406S12.824 18 12 18c-.602 0-.754.234-.938.375c-.164.125-.277.258-.406.375c-.058-.094-.086-.14-.156-.25a4.7 4.7 0 0 0-.656-.875C9.554 17.332 9.098 17 8.5 17"></svg:path>`,
})
export class LaMoneyCheckAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMonumentIcon],svg[la-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 4h-4v2h1.469l-.438 10H10v6H8v2h16v-2h-2v-6h-3.031l-.438-10H20V8zm-.531 2h1.062l.438 10H15.03zM12 22h8v4h-8z"></svg:path>`,
})
export class LaMonumentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoonIcon],svg[la-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v2H3v2h2v2h2V9h2V7H7V5zm15.281 2.938L18.625 8C13.281 8.191 9 12.578 9 17.969c0 5.511 4.488 10 10 10c5.39 0 9.777-4.282 9.969-9.625l.062-1.625l-1.468.687A5.94 5.94 0 0 1 25 17.97c-3.324 0-6-2.676-6-6c0-.914.223-1.75.594-2.531zm-2.906 2.375c-.125.554-.375 1.062-.375 1.656c0 4.406 3.594 8 8 8c.605 0 1.121-.246 1.688-.375c-.762 3.625-3.829 6.375-7.688 6.375c-4.43 0-8-3.57-8-8c0-3.852 2.758-6.887 6.375-7.657z"></svg:path>`,
})
export class LaMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMoonSolidIcon],svg[la-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v2H3v2h2v2h2V9h2V7H7V5zm15.281 2.938L18.625 8C13.281 8.191 9 12.578 9 17.969c0 5.511 4.488 10 10 10c5.39 0 9.777-4.282 9.969-9.625l.062-1.625l-1.468.687A5.94 5.94 0 0 1 25 17.97c-3.324 0-6-2.676-6-6c0-.914.223-1.75.594-2.531zm-2.906 2.375c-.125.554-.375 1.062-.375 1.656c0 4.406 3.594 8 8 8c.605 0 1.121-.246 1.688-.375c-.762 3.625-3.829 6.375-7.688 6.375c-4.43 0-8-3.57-8-8c0-3.852 2.758-6.887 6.375-7.657z"></svg:path>`,
})
export class LaMoonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMortarPestleIcon],svg[la-mortar-pestle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.406 3c-.847.04-1.726.656-2.125 1.625v.031h-.031c-.422 1.121-1.016 2.293-1.688 3.438A32 32 0 0 0 16 8c-3.137 0-5.98.438-8.125 1.219c-1.07.39-1.965.87-2.656 1.469c-.61.523-1.051 1.214-1.157 2q-.045.122-.062.25c-.004.05-.004.105 0 .156c0 .285 0 .66.031 1.125c.004.031-.004.062 0 .094c.016.226.063.457.094.718c.031.246.055.485.094.719c.207 1.352.613 2.957 1.437 4.531a10.4 10.4 0 0 0 2.469 3.125c.031.032.152.184.156.188c1.016 1.015 3.028 2.09 6.25 2.343q.217.019.438.032a17.4 17.4 0 0 0 2.5-.032c.074-.007.144-.023.218-.03c.32-.036.614-.075.907-.126c.05-.008.105-.023.156-.031c.055-.012.102-.02.156-.031a11.7 11.7 0 0 0 3.125-1.094c.16-.086.317-.16.469-.25c.438-.25.797-.469 1.063-.656c.433-.309 1.492-1.184 2.53-2.938c.915-1.547 1.735-3.75 1.876-6.562c.031-.48.031-.867.031-1.156v-.157c0-.031-.027-.062-.031-.094v-.093c-.117-.996-.813-1.805-1.688-2.406c-.625-.43-1.39-.79-2.25-1.094c.313-.383.621-.766.969-1.125L25.094 8l-.032-.031c.739-.668 1.067-1.657.844-2.438c-.234-.82-.8-1.398-1.375-1.812c-.57-.414-1.277-.758-2.125-.719m.094 2c.164-.008.555.11.875.344c.32.23.578.554.625.718c.047.165.117.172-.25.47l-.063.03l-.03.032c-3.075 3.14-4.856 6.86-5.376 9.312c-.73.059-1.5.094-2.281.094c-.309 0-.605-.02-.906-.031c2.504-2.465 5.515-6.547 7.031-10.594c.184-.445.21-.367.375-.375M16 10c.45 0 .883.012 1.313.031c-1.75 2.547-3.711 4.739-4.97 5.719c-1.448-.2-2.753-.5-3.78-.875c-.918-.336-1.61-.703-2.032-1.063C6.11 13.454 6 13.18 6 13v-.094c.031-.176.172-.41.531-.719c.422-.359 1.114-.726 2.032-1.062C10.398 10.457 13.063 10 16 10m6.781.938c1 .308 1.832.66 2.375 1.03c.664.458.844.813.844 1.032v.063c-.02.18-.152.421-.531.75c-.422.359-1.114.726-2.032 1.062c-.832.3-1.851.559-2.968.75c.398-1.246 1.187-2.957 2.312-4.688zm2.907 5.124c-.09.458-.165.922-.313 1.407c-.035.105-.059.21-.094.312c-.023.074-.066.145-.093.219c-.254.664-.547 1.25-.844 1.75c-.875 1.48-1.907 2.32-1.938 2.344c-.71.504-1.87 1.3-3.875 1.687l-.343.063A13.6 13.6 0 0 1 16 24c-.32 0-.613-.016-.906-.031c-.13-.008-.25-.02-.375-.032c-.453-.039-.86-.085-1.25-.156c-.309-.058-.594-.11-.875-.187c-.192-.051-.36-.102-.531-.157a8 8 0 0 1-2-.968c-.122-.09-.235-.172-.313-.25l-.031-.032c-.168-.167-.39-.343-.75-.75a11.4 11.4 0 0 1-1.25-1.75a12.1 12.1 0 0 1-1.313-3.156a10 10 0 0 1-.093-.437c.464.265.992.48 1.562.687C10.02 17.563 12.863 18 16 18s5.98-.438 8.125-1.219c.578-.21 1.094-.453 1.563-.718z"></svg:path>`,
})
export class LaMortarPestleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMosqueIcon],svg[la-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.438 4.156l-.907 2.5l-1.468 4l-.063.156V28h11v-3c0-.59.102-.848.188-1c.085-.152.183-.242.406-.406c.113-.082.246-.176.406-.313c.16.137.293.23.406.313c.223.164.32.254.407.406c.085.152.187.41.187 1v3h11V10.812l-.063-.187l-1.53-4l-.97-2.469l-.906 2.5l-1.468 4l-.063.156V17h-.094c-.32-2.71-1.886-4.363-3.343-5.344c-.813-.547-1.583-.93-2.063-1.25c-.238-.16-.406-.3-.469-.375C16.97 9.957 17 9.988 17 10V9h-2v1c0-.012.031-.047-.031.031a2.3 2.3 0 0 1-.469.406c-.48.329-1.25.731-2.063 1.282c-1.449.984-3.015 2.617-3.343 5.281H9v-6.188l-.063-.187l-1.53-4zm.03 5.719L7 11.219V26H6V11.187zm19 0L26 11.219V26h-1V11.187zM16 11.781c.125.098.246.196.375.281c.645.43 1.375.82 2.063 1.282c1.18.797 2.199 1.734 2.468 3.656h-9.812c.27-1.898 1.285-2.852 2.469-3.656c.687-.469 1.417-.844 2.062-1.281c.129-.09.25-.184.375-.282M9 19h14v7h-4v-1c0-.824-.148-1.488-.438-2c-.289-.512-.69-.832-.968-1.031c-.278-.2-.41-.297-.469-.375S17 21.414 17 21h-2c0 .414-.066.516-.125.594s-.191.176-.469.375s-.68.52-.969 1.031c-.289.512-.437 1.176-.437 2v1H9z"></svg:path>`,
})
export class LaMosqueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMotorcycleIcon],svg[la-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 6a1.48 1.48 0 0 0-1.406 1H17v2h4.25l.313 1H18c-2.61 0-3.922 1.406-4.406 2h-3.375A7.4 7.4 0 0 0 6.5 11c-2.16 0-3.938.844-3.938.844l.876 1.812S4.867 13 6.5 13c.809 0 1.57.246 2.125.469L7.75 15.28A6 6 0 0 0 6 15c-3.309 0-6 2.691-6 6s2.691 6 6 6a5.986 5.986 0 0 0 5.906-5h3.469c.758 0 1.477-.441 1.813-1.125h-.032l1.094-2.219c1.664-.765 3.02-2.093 3.969-3.343c.261-.344.484-.66.687-.97l2.125 6.938l1.938-.562l-1.125-3.688c.054-.004.101-.031.156-.031c2.207 0 4 1.793 4 4s-1.793 4-4 4a4.003 4.003 0 0 1-2.906-6.75l-.625-2.094A6 6 0 0 0 20 21c0 3.309 2.691 6 6 6s6-2.691 6-6s-2.691-6-6-6a6 6 0 0 0-.781.063L23.375 9H25V6zM18 12h4a17 17 0 0 1-1.375 2.094c-.93 1.219-2.223 2.515-3.469 2.969l-.406.125l-.156.375L15.375 20H6v2h3.844C9.398 23.723 7.859 25 6 25c-2.207 0-4-1.793-4-4s1.793-4 4-4c1.473 0 2.742.809 3.438 2h2.218a6.04 6.04 0 0 0-2.125-2.844L10.625 14h3.906l.313-.438S15.813 12 18 12"></svg:path>`,
})
export class LaMotorcycleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMountainIcon],svg[la-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.012 3.021l-.912 1.66l-6.522 11.856l-1.916-1.916l-.66 1.098l-5.86 9.767L.235 27h31.284l-.598-1.395l-3-7l-.582-1.357l-2.068 2.068l-7.403-14.605zm-.073 4.282l3.04 5.996l-.774.664l-2.28-1.953l-2.279 1.953l-.93-.799zm-.013 7.34l2.28 1.953l1.702-1.46l3.2 6.315l.622 1.233l1.932-1.932L28.482 25H3.766l4.293-7.154l1.988 1.988l.642-1.166l2.043-3.713l1.914 1.64z"></svg:path>`,
})
export class LaMountainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMouseIcon],svg[la-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C10.488 4 6 8.488 6 14v4c0 5.512 4.488 10 10 10s10-4.488 10-10v-4c0-5.512-4.488-10-10-10m-1 2.063V13H8.062A7.994 7.994 0 0 1 15 6.062zm2 0A7.994 7.994 0 0 1 23.938 13H17zM8 15h16v3c0 4.43-3.57 8-8 8s-8-3.57-8-8z"></svg:path>`,
})
export class LaMouseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMousePointerIcon],svg[la-mouse-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.594v25.562l1.656-1.375l4.031-3.375l2.032 4.032l.437.906l.907-.469l3.093-1.594l.875-.437l-.437-.907l-1.844-3.625l5.063-.625l2.03-.25L25.407 19L10.72 4.281zm2 4.844l11.563 11.53l-4.5.532l-1.407.188l.657 1.28l2.062 4l-1.313.688l-2.156-4.312l-.594-1.125l-.968.812L11 23.844z"></svg:path>`,
})
export class LaMousePointerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMugHotIcon],svg[la-mug-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v4h2V2zm4 1v3h2V3zM6 7v18c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3v-5h2c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-2V7zm2 2h14v16c0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1zm16 4h2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-2z"></svg:path>`,
})
export class LaMugHotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laMusicIcon],svg[la-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 3.781l-1.188.25l-16 3L9 7.156v13.407A3.93 3.93 0 0 0 7 20c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4V12.812l14-2.624v7.374A3.93 3.93 0 0 0 23 17c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4zm-2 2.406v2l-14 2.626v-2zM23 19c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2M7 22c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaMusicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNapsterIcon],svg[la-napster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-3.305 0-6.248 1.541-8.17 3.938a17 17 0 0 0-1.58-.512L5.006 7.11l-.002 3.9C3.794 11.929 3 13.368 3 15c0 1.654.814 3.11 2.05 4.023C5.57 24.61 10.275 29 15.995 29c5.718 0 10.427-4.389 10.947-9.973C28.181 18.114 29 16.657 29 15c0-1.632-.793-3.07-2.002-3.986L27 7.109l-1.24.317c-.053.013-.672.173-1.59.515C22.248 5.544 19.306 4 16 4m0 2a9.18 9.18 0 0 1 6.484 2.654c-.558.264-1.152.573-1.757.936c-2.91-1.566-6.536-1.566-9.446 0a20 20 0 0 0-1.763-.938A9.18 9.18 0 0 1 16 6M7 9.766c.957.35 2.348.943 3.72 1.83l.534.343l.539-.334c2.545-1.584 5.88-1.584 8.426 0l.539.334l.531-.343c1.37-.886 2.753-1.477 3.711-1.828V18c0 4.963-4.043 9-9.006 9s-9-4.036-9-8.998zm3.44 8.24q-.652-.004-1.44.004c.04.45-.01 1.75 1.39 2.56c.23.13.81.32 1.36.35c1.34.06 3.25.08 3.25.08c-.574-2.627-1.514-2.97-4.56-2.994m11.117 0c-3.053.024-3.992.367-4.557 2.994c0 0 1.91-.02 3.25-.08c.55-.03 1.13-.22 1.36-.35c1.4-.82 1.35-2.12 1.39-2.56q-.79-.008-1.443-.004M13.359 22c.74.78 1.641 1.38 2.641 1.75c1-.37 1.89-.97 2.64-1.75zm.65 2.436s-.15.08-.34.35c-.14.22-.189.509-.189.509c1.53.94 3.52.94 5.04 0c0 0-.01-.21-.17-.47c-.17-.28-.36-.39-.36-.39c-1.3.39-2.74.37-3.98 0z"></svg:path>`,
})
export class LaNapsterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNeosIcon],svg[la-neos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.287 5L6 6.701V26h4.662l3.342-2.443l-.002-4.034L18.367 26h3.42L25 24V5h-4.662L17 7.42v3.93L12.768 5zM9.39 6h2.843L21 19.15V6h3v17h-3.28zm-1.06.215L20.185 24h2.855l-1.566 1h-2.49L14 17.748v-.014h-.01L10 11.93v10.32L7 24.5V7.203l1.328-.988zM20 6.48v9.37l-2-3V7.93zm-9 8.59l2 2.967l.004 5.012L10.338 25H8l3-2.25z"></svg:path>`,
})
export class LaNeosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNetworkWiredIcon],svg[la-network-wired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v2H9C7.355 6 6 7.355 6 9v4H4v6h6v-6H8V9c0-.566.434-1 1-1h4v2h6V4zm2 2h2v2h-2zm5 0v2h3c.566 0 1 .434 1 1v4h-2v6h6v-6h-2V9c0-1.645-1.355-3-3-3zM6 15h2v2H6zm18 0h2v2h-2zM6 20v3c0 1.645 1.355 3 3 3h4v2h6v-6h-6v2H9c-.566 0-1-.434-1-1v-3zm18 0v3c0 .566-.434 1-1 1h-3v2h3c1.645 0 3-1.355 3-3v-3zm-9 4h2v2h-2z"></svg:path>`,
})
export class LaNetworkWiredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNeuterIcon],svg[la-neuter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-4.406 0-8 3.594-8 8c0 4.066 3.066 7.438 7 7.938V28h2v-8.063c3.934-.5 7-3.87 7-7.937c0-4.406-3.594-8-8-8m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaNeuterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNewspaperIcon],svg[la-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.191-.809 2-2 2s-2-.809-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"></svg:path>`,
})
export class LaNewspaperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNewspaperSolidIcon],svg[la-newspaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.191-.809 2-2 2s-2-.809-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"></svg:path>`,
})
export class LaNewspaperSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNimblrIcon],svg[la-nimblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v18h.025c-.008.166-.025.331-.025.5c0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5s-4.262-9.5-9.5-9.5a9.47 9.47 0 0 0-7.066 3.172zm9.5 11c4.136 0 7.5 3.364 7.5 7.5S20.636 27 16.5 27S9 23.636 9 19.5s3.364-7.5 7.5-7.5m-3 5a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaNimblrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNodeIcon],svg[la-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.3 6a.3.3 0 0 0-.3.3v5.497l-1.246-.727a.5.5 0 0 0-.508 0l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746a.5.5 0 0 0 .508 0l2.994-1.746a.5.5 0 0 0 .252-.436V7.23a.5.5 0 0 0-.248-.431l-1.303-.758A.3.3 0 0 0 21.301 6zm-9.8 5.002a.5.5 0 0 0-.254.068l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746c.157.09.35.09.508 0l2.994-1.746a.5.5 0 0 0 .252-.436v-3.496a.5.5 0 0 0-.252-.436l-2.994-1.746a.5.5 0 0 0-.254-.068m16 0a.5.5 0 0 0-.254.068l-2.994 1.746a.5.5 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.904 1.755a.5.5 0 0 0 .51.004l1.428-.83a.224.224 0 0 0 0-.386L26 15.904V14.11l1.5-.873l1.5.873v1.25c0 .167.14.193.234.137l1.518-.883a.5.5 0 0 0 .248-.431v-.93a.5.5 0 0 0-.252-.436l-2.994-1.746a.5.5 0 0 0-.254-.068zm-24 .002a.5.5 0 0 0-.254.068L.252 12.816a.51.51 0 0 0-.252.438v4.463c0 .218.236.353.424.244l1.328-.773A.5.5 0 0 0 2 16.756v-2.643l1.5-.875l1.5.875v2.643a.5.5 0 0 0 .248.431l1.328.774A.282.282 0 0 0 7 17.717v-4.463a.51.51 0 0 0-.252-.438l-2.994-1.744a.5.5 0 0 0-.254-.068m16 2.232l1.5.875v1.778l-1.5.875l-1.5-.875V14.11l1.5-.875zm8 .768l-.857.5v.998L27.5 16l.857-.498v-.998zm-12.094 3.994a.6.6 0 0 0-.297.076L12.297 19.7a.59.59 0 0 0-.297.512v3.246c0 .209.117.406.297.512l.74.422c.355.175.486.175.647.175c.53 0 .832-.317.832-.877v-3.207a.08.08 0 0 0-.082-.084h-.356a.084.084 0 0 0-.084.084v3.207c0 .243-.257.493-.676.284l-.77-.444a.09.09 0 0 1-.042-.074V20.21c0-.029.014-.063.043-.078l2.812-1.621a.09.09 0 0 1 .088 0l2.815 1.62c.029.016.043.045.043.079v3.246a.1.1 0 0 1-.043.078l-2.815 1.627a.09.09 0 0 1-.088 0l-.718-.428c-.02-.01-.05-.015-.069-.005a1.7 1.7 0 0 1-.424.195c-.049.015-.115.045.026.123l.933.555a.64.64 0 0 0 .297.078a.55.55 0 0 0 .293-.082l2.813-1.627a.59.59 0 0 0 .297-.512v-3.246a.6.6 0 0 0-.297-.512l-2.813-1.625a.6.6 0 0 0-.293-.076zm4.387 1.498a.54.54 0 1 0 .002 1.08a.54.54 0 0 0-.002-1.08m-.006.086c.254 0 .46.2.46.453a.467.467 0 0 1-.46.46a.456.456 0 0 1-.451-.46a.45.45 0 0 1 .451-.453m-.197.147v.607h.115v-.242h.108c.044 0 .054.018.064.052c0 .005.018.163.023.192h.125a.7.7 0 0 1-.029-.162c-.014-.078-.018-.132-.101-.137c.044-.015.117-.038.117-.15c0-.161-.14-.16-.213-.16h-.21zm.115.097h.098c.03 0 .088 0 .088.082c0 .034-.015.09-.094.088h-.092zm-3.545.496c-.803 0-1.28.343-1.28.907c0 .618.478.783 1.247.86c.92.093.992.225.992.405c0 .316-.254.447-.848.447c-.745 0-.908-.184-.962-.554c-.005-.04-.04-.069-.084-.069h-.366a.08.08 0 0 0-.082.084c0 .472.258 1.037 1.489 1.037c.903 0 1.414-.35 1.414-.964c0-.608-.41-.77-1.276-.887c-.876-.117-.963-.176-.963-.381c0-.17.072-.393.72-.393c.578 0 .794.127.882.516q.016.061.076.063h.365q.037-.002.059-.024q.024-.027.02-.062c-.058-.672-.502-.985-1.403-.985"></svg:path>`,
})
export class LaNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNodeJsIcon],svg[la-node-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.994 3c-.365 0-.73.09-1.045.27L5.04 8.99C4.4 9.36 4 10.06 4 10.8v10.38c0 .75.4 1.44 1.04 1.81l2.6 1.5c1.26.62 1.71.62 2.28.62c1.87 0 2.94-1.13 2.94-3.09V11.31a.29.29 0 0 0-.29-.29h-1.25a.286.286 0 0 0-.29.29v10.7c0 .88-.91 1.74-2.38 1.01l-2.72-1.57a.3.3 0 0 1-.16-.27V10.81c0-.12.06-.22.16-.28l9.91-5.72a.29.29 0 0 1 .31 0l9.91 5.72c.1.06.16.16.16.27v10.38c0 .11-.06.22-.15.27l-9.92 5.73a.34.34 0 0 1-.31 0l-2.55-1.51a.23.23 0 0 0-.24-.02c-.71.4-.84.45-1.5.68c-.16.05-.41.15.09.43l3.31 1.96c.32.18.68.28 1.04.28c.37 0 .73-.1 1.05-.28l9.92-5.73c.64-.37 1.04-1.06 1.04-1.81V10.81c0-.75-.4-1.44-1.04-1.81l-9.92-5.73c-.316-.18-.68-.27-1.046-.27m2.666 8.006c-2.83 0-4.52 1.2-4.52 3.2c0 2.17 1.68 2.768 4.4 3.038c3.25.32 3.5.802 3.5 1.442c0 1.1-.89 1.57-2.98 1.57c-2.63 0-3.21-.661-3.4-1.961a.28.28 0 0 0-.28-.24h-1.29a.28.28 0 0 0-.28.28c0 1.67.91 3.66 5.25 3.66c3.14 0 4.94-1.24 4.94-3.4c0-2.14-1.45-2.71-4.49-3.12c-3.09-.4-3.4-.61-3.4-1.33c0-.6.27-1.39 2.55-1.39c2.03 0 2.79.44 3.1 1.81c.03.13.14.23.28.23h1.29c.08 0 .15-.04.21-.1a.27.27 0 0 0 .07-.22c-.2-2.36-1.77-3.47-4.95-3.47z"></svg:path>`,
})
export class LaNodeJsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNotEqualIcon],svg[la-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.719 5.281L5.28 6.72l20 20l1.438-1.438L21.437 20H27v-2h-7.563l-4-4H27v-2H13.437zM5 12v2h4.906l-2-2zm0 6v2h10.906l-2-2z"></svg:path>`,
})
export class LaNotEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNotesMedicalIcon],svg[la-notes-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.258 0-2.152.89-2.594 2H6v23h20V5h-7.406C18.152 3.89 17.258 3 16 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M8 7h2v4h12V7h2v19H8zm7 7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaNotesMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNpmIcon],svg[la-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10v11h9v2h7v-2h16V10zm1.777 1.777h7.114v7.668H7.11v-5.888H5.334v5.888H1.777zm8.891 0h7.111v7.666h-3.556v1.78h-3.555zm8.889 0h10.668v7.668h-1.78v-5.888h-1.777v5.888h-1.777v-5.888h-1.78v5.888h-3.554zm-5.334 1.78v4.111H16v-4.111z"></svg:path>`,
})
export class LaNpmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNs8Icon],svg[la-ns8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.02 10.021c-2.034-.001-4.155 1.155-3.569 3.014v.004c-2.19.435-3.714 1.34-4.709 2.41c-.15-.49-.679-.83-1.699-.83h-4.38c-.466 0-.645-.114-.575-.369c.08-.275.093-.34.183-.61c.105-.32.391-.355.666-.355h6.674l.487-1.574c-6.985 0-7.225-.026-8.006.059c-.615.065-1.176.24-1.531.75c-.34.495-.72 1.78-.88 2.355c-.27.97-.03 1.43 1.64 1.43h4.365c.39 0 .44.135.384.33c-.055.22-.14.5-.224.73c-.08.21-.235.37-.69.37h-6.34l-.58 1.976c6.995 0 7.264-.03 8.045-.115c.33-.035.651-.106.926-.246c.01.185.026.366.06.54c.27 1.526 1.37 2.615 2.84 2.975c2.43.595 5.434-.84 6.754-3.4c.935-1.81.705-3.81-.17-5.276h.006c1.48-.295 3.515-1.099 3.285-2.529c-.145-.9-1.195-1.404-2.105-1.564a5 5 0 0 0-.857-.075m-.36.977c.149-.002.296.011.432.041c.765.17.986.796.246 1.22c-.535.306-1.181.406-1.711.481c-.21-.3-.49-.924-.125-1.314c.251-.27.713-.42 1.158-.428m-19.305.705v.002l-1.709 5.686l-2.726-5.686H2.45L0 19.711h2.244l1.557-5.326l2.53 5.326h2.845l2.424-8.008zm16.823 2.803c.335.704.514 1.6.36 2.39c-.296 1.475-1.831 2.39-3.081 2.196c-1.545-.24-1.925-1.975-.705-3.24c.81-.84 2.26-1.201 3.426-1.346"></svg:path>`,
})
export class LaNs8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laNutritionixIcon],svg[la-nutritionix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c0 7 5.57 6.426 5.57 6.426c-.122-4.426-3.669-5.621-4.119-5.754c3.925.307 4.979 5.336 4.979 5.336c2.259-3.17 4.394-2.617 4.394-2.617c-2.76.102-3.537 3.035-3.537 3.035C21.048 9.386 22 5.422 22 5.422c-4.547-1.616-5.52 2.176-5.52 2.176C17 2 10 2 10 2m6 7c-3.464 0-6.477.983-8.807 2.697C5.965 13.75 5 16.312 5 19s.536 5.279 1.754 7.332C9.084 28.047 12.536 29 16 29s6.916-.953 9.246-2.668C26.464 24.279 27 21.688 27 19s-.965-5.25-2.193-7.303C22.477 9.973 19.464 9 16 9m0 1.3c3.004 0 5.912.678 8.1 1.804c.483 1.073.621 1.887.9 3.142a50.6 50.6 0 0 0-9-.826a50.6 50.6 0 0 0-9 .826c.279-1.244.407-2.048.9-3.142c2.188-1.126 5.096-1.803 8.1-1.803zM10.443 16a1.44 1.44 0 1 1 0 2.877a1.438 1.438 0 1 1 0-2.877m3.702.002c.805 0 1.443.636 1.443 1.441a1.43 1.43 0 0 1-1.443 1.434a1.43 1.43 0 0 1-1.434-1.434a1.43 1.43 0 0 1 1.434-1.441m3.71 0a1.43 1.43 0 0 1 1.434 1.441a1.43 1.43 0 0 1-1.434 1.434a1.43 1.43 0 0 1-1.443-1.434c0-.805.638-1.441 1.443-1.441m3.702 0a1.438 1.438 0 1 1 0 2.875a1.438 1.438 0 1 1 0-2.875m-11.114 3.572a1.44 1.44 0 1 1 0 2.877a1.438 1.438 0 1 1 0-2.877m3.702 0c.805 0 1.443.639 1.443 1.444a1.43 1.43 0 0 1-1.443 1.433a1.43 1.43 0 0 1-1.434-1.433c0-.805.639-1.444 1.434-1.444m3.71 0c.795 0 1.434.639 1.434 1.444a1.43 1.43 0 0 1-1.434 1.433a1.43 1.43 0 0 1-1.443-1.433c0-.805.638-1.444 1.443-1.444m3.702 0a1.44 1.44 0 1 1 0 2.877a1.438 1.438 0 1 1 0-2.877m-11.114 3.549a1.44 1.44 0 1 1 0 2.877a1.438 1.438 0 1 1 0-2.877m3.702 0c.805 0 1.443.638 1.443 1.443A1.43 1.43 0 0 1 14.145 26a1.43 1.43 0 0 1-1.434-1.434c0-.805.639-1.443 1.434-1.443m3.71 0c.795 0 1.434.638 1.434 1.443A1.43 1.43 0 0 1 17.855 26a1.43 1.43 0 0 1-1.443-1.434c0-.805.638-1.443 1.443-1.443m3.702 0a1.44 1.44 0 1 1 0 2.877a1.438 1.438 0 1 1 0-2.877"></svg:path>`,
})
export class LaNutritionixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laObjectGroupIcon],svg[la-object-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h1v14H5v4h4v-1h14v1h4v-4h-1V9h1V5h-4v1H9V5zm4 3h14v1h1v14h-1v1H9v-1H8V9h1zm1 2v8h4v4h8v-8h-4v-4zm2 2h4v4h-4zm6 4h2v4h-4v-2h2z"></svg:path>`,
})
export class LaObjectGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laObjectGroupSolidIcon],svg[la-object-group-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h1v14H5v4h4v-1h14v1h4v-4h-1V9h1V5h-4v1H9V5zm4 3h14v1h1v14h-1v1H9v-1H8V9h1zm1 2v8h4v4h8v-8h-4v-4zm2 2h4v4h-4zm6 4h2v4h-4v-2h2z"></svg:path>`,
})
export class LaObjectGroupSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laObjectUngroupIcon],svg[la-object-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h1v10H5v4h4v-1h2v2h-1v4h4v-1h10v1h4v-4h-1V14h1v-4h-4v1h-2V9h1V5h-4v1H9V5zm4 3h10v1h1v10h-1v1H9v-1H8V9h1zm13 5h2v1h1v10h-1v1H14v-1h-1v-2h6v1h4v-4h-1z"></svg:path>`,
})
export class LaObjectUngroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laObjectUngroupSolidIcon],svg[la-object-ungroup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h1v10H5v4h4v-1h2v2h-1v4h4v-1h10v1h4v-4h-1V14h1v-4h-4v1h-2V9h1V5h-4v1H9V5zm4 3h10v1h1v10h-1v1H9v-1H8V9h1zm13 5h2v1h1v10h-1v1H14v-1h-1v-2h6v1h4v-4h-1z"></svg:path>`,
})
export class LaObjectUngroupSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOdnoklassnikiIcon],svg[la-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8.328a2.354 2.354 0 0 1 2.352 2.352A2.353 2.353 0 0 1 15 13.027a2.353 2.353 0 0 1-2.352-2.347A2.354 2.354 0 0 1 15 8.328m0 8.027a5.684 5.684 0 0 0 5.68-5.675A5.685 5.685 0 0 0 15 5a5.68 5.68 0 0 0-5.676 5.68A5.68 5.68 0 0 0 15 16.355m2.297 4.633a10.7 10.7 0 0 0 3.297-1.367a1.664 1.664 0 1 0-1.774-2.816a7.22 7.22 0 0 1-7.644 0a1.664 1.664 0 0 0-1.77 2.816a10.7 10.7 0 0 0 3.297 1.367L9.527 24.16a1.664 1.664 0 0 0 2.356 2.352L15 23.395l3.121 3.117c.649.652 1.7.652 2.352 0a1.664 1.664 0 0 0 0-2.352z"></svg:path>`,
})
export class LaOdnoklassnikiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOdnoklassnikiSquareIcon],svg[la-odnoklassniki-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 2c-1.93 0-3.5 1.57-3.5 3.5S14.07 16 16 16s3.5-1.57 3.5-3.5S17.93 9 16 9m0 2c.827 0 1.5.673 1.5 1.5S16.827 14 16 14s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5m-3.14 5.01a1 1 0 0 0-.46 1.79a5.9 5.9 0 0 0 2.334 1.052l-2.441 2.441a.999.999 0 1 0 1.414 1.414L16 20.414l2.293 2.293a.997.997 0 0 0 1.414 0a1 1 0 0 0 0-1.414l-2.441-2.441A5.9 5.9 0 0 0 19.6 17.8c.44-.332.53-.96.199-1.4a1 1 0 0 0-1.4-.2c-1.394 1.047-3.408 1.045-4.8 0a1 1 0 0 0-.74-.191z"></svg:path>`,
})
export class LaOdnoklassnikiSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOilCanIcon],svg[la-oil-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9v2h2v2H7.562l-1.718-2.563L5.53 10H1v5.688l5 2V25h14.531l.282-.438L29.5 12H31v-2h-3.344l-.25.188L21 15v-2h-6v-2h2V9zm-8 3h1.438L6 14.344V15.5l-3-1.188zm22.781 1.938L19.5 23H8v-8h11v4l1.594-1.188zM29.5 16S28 18.672 28 19.5a1.5 1.5 0 0 0 3 0c0-.828-1.5-3.5-1.5-3.5"></svg:path>`,
})
export class LaOilCanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOldRepublicIcon],svg[la-old-republic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.537 3.008c-.393-.01-.785-.012-1.178.004c-.128.008-.257.013-.386.025c-.186.02-.374.029-.559.057c-.138.02-.277.031-.414.056c-.184.032-.369.061-.553.096a13 13 0 0 0-3.795 1.402a13 13 0 0 0-3.84 3.276c-.607.76-1.124 1.59-1.546 2.467c-.066.15-.142.298-.202.45c-.356.81-.62 1.66-.8 2.526c-.043.206-.075.412-.112.62c-.027.145-.04.296-.06.443c-.024.165-.031.332-.047.498q-.028.276-.037.55c-.01.499-.017.999.025 1.495c.022.209.032.417.063.625c.018.124.028.25.049.373c.055.327.11.654.193.976a13.02 13.02 0 0 0 6.084 8.268q.164.099.332.187a12.7 12.7 0 0 0 2.937 1.172q.33.088.666.158c.215.044.43.08.647.118c.142.025.285.036.428.056q.256.034.515.051c.356.035.715.043 1.073.041c.352.002.703-.008 1.054-.043c.278-.016.553-.055.828-.09q.367-.059.735-.13c.353-.072.703-.163 1.05-.262c.188-.053.37-.117.553-.178a12.9 12.9 0 0 0 3.973-2.215a13 13 0 0 0 4.488-7.273c.061-.268.104-.539.15-.809c.026-.142.037-.285.057-.428q.035-.264.053-.529c.025-.26.033-.52.037-.781c.004-.44.005-.88-.039-1.317a8 8 0 0 0-.063-.605a7 7 0 0 0-.072-.496a12.5 12.5 0 0 0-.494-1.983c-.114-.349-.25-.692-.396-1.029c-.054-.139-.123-.27-.182-.406a13.07 13.07 0 0 0-6.318-6.242a13 13 0 0 0-1.875-.692a13 13 0 0 0-1.227-.283q-.229-.04-.459-.076c-.256-.031-.511-.072-.77-.086a11 11 0 0 0-.566-.037m-.73.996q.597-.012 1.191.031c.21.023.423.035.633.067c.426.06.851.136 1.27.24a11.9 11.9 0 0 1 4.601 2.26c.952.76 1.787 1.665 2.469 2.675a12 12 0 0 1 1.213 2.319c.377.96.622 1.97.742 2.996q.028.313.054.627a12.2 12.2 0 0 1-.386 3.818a12 12 0 0 1-.739 2.014a18 18 0 0 1-.373.722q-.243.426-.515.834c-.16.228-.315.458-.49.674a12 12 0 0 1-2.262 2.217a11.9 11.9 0 0 1-3.953 1.945c-.22.062-.442.111-.664.164c-.193.046-.39.078-.584.114c-.238.043-.478.063-.717.095a12.3 12.3 0 0 1-2.7-.023a12 12 0 0 1-1.845-.38c-.278-.076-.547-.172-.818-.267a12 12 0 0 1-4.17-2.625a11.7 11.7 0 0 1-1.61-1.92a11.8 11.8 0 0 1-1.615-3.533c-.07-.246-.123-.496-.18-.746a11 11 0 0 1-.171-1.138c-.046-.381-.06-.765-.067-1.149a12 12 0 0 1 .076-1.44q.073-.696.239-1.376a11.9 11.9 0 0 1 3.09-5.623c.13-.127.251-.26.386-.38q.38-.356.79-.677c.21-.173.438-.327.663-.484c.515-.35 1.06-.657 1.621-.924a12 12 0 0 1 2.172-.776c.386-.09.774-.174 1.166-.232c.491-.067.987-.114 1.483-.12zM12.57 5.797c-.798.252-1.572.592-2.27 1.058A6.7 6.7 0 0 0 7.848 9.73a7.4 7.4 0 0 0-.437 1.249c-.2.8-.281 1.63-.244 2.455c.006.235.037.466.063.699c.08.544.211 1.083.423 1.59c.055.14.133.272.194.41c.05.11.11.214.166.32c.243.448.529.874.87 1.254c.248.28.528.53.829.75c.277.206.581.374.896.516a4.3 4.3 0 0 0 1.674.363a1 1 0 0 0 .145-.008c.009-.085.004-.173.002-.258c-.006-.153-.002-.304-.008-.457c-.005-.303 0-.606-.008-.908c-.002-.124 0-.248-.004-.373c-.007-.185.001-.37-.006-.557c-.004-.215 0-.43-.002-.644c0-.163.012-.33-.035-.488a1.65 1.65 0 0 0-.314-.582a4 4 0 0 0-.336-.364c-.247-.236-.531-.43-.785-.66a6 6 0 0 1-1.172-1.428c-.36-.615-.585-1.319-.592-2.035a3.6 3.6 0 0 1 .06-.773c.065-.394.19-.779.362-1.139c.223-.48.535-.916.89-1.305a7.1 7.1 0 0 1 1.592-1.283c.162-.1.334-.184.5-.277zm6.924.004c.093.06.197.101.295.154a7.2 7.2 0 0 1 1.815 1.422c.279.308.529.643.732 1.006a4.3 4.3 0 0 1 .563 2.076c.002.233-.008.466-.053.695a4.3 4.3 0 0 1-.291.969a5.5 5.5 0 0 1-.985 1.482a6 6 0 0 1-.787.725c-.347.278-.692.574-.926.957c-.069.116-.127.24-.162.371c-.04.153-.022.314-.027.47c-.009.266.001.532-.008.798c-.004.124 0 .248-.002.373c-.01.368 0 .735-.01 1.103c.002.195-.007.39-.005.586c0 .113-.013.227.002.34c.096.013.194.007.29.004q.283-.009.56-.062a4.6 4.6 0 0 0 1.855-.805a5.5 5.5 0 0 0 1.353-1.428a8 8 0 0 0 .568-1.01a5.4 5.4 0 0 0 .413-1.109c.147-.591.228-1.2.224-1.81a9 9 0 0 0-.023-.715a8 8 0 0 0-.59-2.495c-.062-.147-.132-.287-.2-.431a6.8 6.8 0 0 0-1.318-1.801a7.4 7.4 0 0 0-1.879-1.309a9 9 0 0 0-.98-.418c-.14-.049-.28-.1-.424-.138m-5.121 3.246a2 2 0 0 0-.162.178a5.6 5.6 0 0 0-.941 1.578q-.232.577-.356 1.183c-.029.153-.06.308-.064.465c.08.01.16.012.24.033c.28.072.527.242.73.444c.225.217.416.468.582.734c.221.356.407.739.514 1.145c.083.3.126.61.164.918c.031.345.058.69.068 1.037c.002.266.015.171.012.437v.373c.001.227-.01.456-.012.684c0 .098-.01.196-.013.293c-.017.559-.071 1.116-.117 1.674c-.025.208-.04.418-.069.627c-.068.494-.122.99-.238 1.474q-.112.53-.272 1.049c-.077.231-.145.466-.255.684a.4.4 0 0 1-.121.16c-.065-.021-.102-.082-.137-.135a3 3 0 0 1-.18-.342c-.057-.13-.124-.254-.185-.38a3.3 3.3 0 0 0-.297-.503c-.155-.213-.346-.412-.596-.51a1 1 0 0 0-.621-.03a3 3 0 0 1-.322.062c-.19.022-.38.049-.57.057q-.398.013-.796.007c-.146-.006-.292 0-.437-.015c-.165-.017-.333-.003-.496-.041c-.466-.094-.891-.321-1.287-.578a10 10 0 0 1-1.53-1.284c-.15-.152-.292-.311-.441-.464c.054.108.113.213.168.32c.188.34.375.679.582 1.008c.391.632.825 1.24 1.346 1.773c.196.19.4.373.627.527a2.6 2.6 0 0 0 1.18.471c.307.031.621.022.921-.058q.377-.096.725-.264c.194-.085.376-.19.556-.303a3.4 3.4 0 0 1-.324.371c-.243.231-.517.43-.818.58a3.5 3.5 0 0 1-.994.34c.085.081.185.146.281.215c.413.282.852.52 1.309.723a10 10 0 0 0 3.328.838c.259.027.52.029.78.035a10.7 10.7 0 0 0 4.18-.824a9.4 9.4 0 0 0 1.608-.862c.071-.049.143-.096.209-.154c-.078-.007-.155-.012-.232-.031a2.4 2.4 0 0 1-.672-.29a5 5 0 0 1-.715-.537a6 6 0 0 1-.455-.45c.16.118.328.23.508.32c.138.068.276.142.422.193a3 3 0 0 0 .544.15c.461.071.94.005 1.37-.172c.438-.178.827-.458 1.175-.775c.252-.237.489-.49.7-.764c.352-.452.66-.938.93-1.443c.074-.147.158-.287.224-.44c.078-.162.154-.327.217-.497c-.063.072-.119.15-.18.224a6.7 6.7 0 0 1-1.576 1.416a5.3 5.3 0 0 1-.803.416c-.416.173-.859.28-1.307.328a5 5 0 0 1-.587.016c-.195-.013-.391-.044-.584-.074c-.338-.058-.68-.13-1.026-.098a1.5 1.5 0 0 0-.473.127a1.2 1.2 0 0 0-.312.19a.7.7 0 0 0-.135.189q-.328.61-.646 1.223c-.028.052-.051.108-.088.154c-.02.026-.059.042-.09.03a.3.3 0 0 1-.047-.038a2.5 2.5 0 0 1-.318-.379a4.8 4.8 0 0 1-.541-1.185a8 8 0 0 1-.21-.75c-.118-.466-.19-.94-.267-1.414c-.035-.214-.052-.431-.082-.645c-.023-.162-.03-.325-.049-.488c-.022-.18-.028-.361-.045-.541q-.026-.285-.04-.569c-.006-.077.003-.153-.012-.228c-.011.207-.002.412-.01.619l-.002.941c-.008.206 0 .414-.008.62c-.005.189.001.378-.006.568l-.004.941c-.008.211 0 .424-.007.635c-.004.19 0 .378-.006.568q0 .464-.002.926c-.008.211-.001.424-.008.635c-.005.116.013.236-.027.348a1.3 1.3 0 0 1-.121.254c-.042.064-.101.124-.18.134c-.062.008-.121-.024-.166-.064a.8.8 0 0 1-.166-.242c-.034-.07-.071-.14-.078-.217c-.006-.07-.002-.142-.002-.213c0-3.863 0-7.365.002-11.227a.57.57 0 0 0-.233-.46c-.144-.119-.311-.2-.474-.288c-.095-.05-.195-.093-.28-.16a2 2 0 0 1-.363-.383a2.6 2.6 0 0 1-.46-1.107a2 2 0 0 1-.017-.397a2.2 2.2 0 0 1 .09-.525c.08-.249.206-.48.37-.684q.052-.066.101-.14m1.531.256l-.054.01c-.056.257-.121.514-.18.771l-.02.06c-.176.009-.353-.003-.529.004c-.267.01-.536-.004-.803.006l.006.059c.092.042.191.06.285.094c.163.055.329.104.493.158c.067.02.137.037.2.066a.4.4 0 0 1 .003.088c-.066.043-.144.055-.217.08c-.18.061-.361.114-.541.174c-.07.025-.146.038-.213.072c-.022.014-.01.043-.008.063c.087.007.175 0 .262.002h.795c.09 0 .18-.003.27.01c.025.079.036.162.056.242c.047.197.087.395.137.592q.028 0 .056.003c.015-.09.007-.184.008-.275V9.584c0-.093.004-.187-.006-.281m.258 0c-.01.094-.005.188-.006.281v2.002c0 .092-.007.182.008.273l.057-.004c.053-.185.084-.377.133-.564c.023-.089.033-.18.06-.268c.084-.012.17-.01.254-.011q.407-.002.812 0c.087 0 .173.005.26-.002c.004-.021.013-.049-.008-.063q-.028-.016-.058-.025c-.257-.076-.512-.162-.768-.242a1 1 0 0 1-.144-.057a.3.3 0 0 1 .006-.09q.043-.019.087-.033q.294-.092.588-.188c.1-.032.202-.053.297-.097q.002-.03.006-.059q-.06-.004-.119-.004q-.407.004-.813-.004c-.133-.004-.267.007-.4-.002c-.025-.073-.034-.15-.053-.224c-.05-.202-.091-.408-.142-.61l-.057-.01zM6.588 10.96c-.068.108-.119.227-.178.34a10 10 0 0 0-.664 1.775a9 9 0 0 0-.193.887c-.025.15-.04.301-.06.451a8 8 0 0 0-.057.97q.004.433.07.86c.018.114.03.23.055.342c.034.156.058.313.097.467c.047.21.11.418.17.625c.092.303.21.597.334.888a6.4 6.4 0 0 0 1.143 1.764c.134.152.286.288.44.422c.356.302.754.557 1.177.758c.185.098.382.172.578.246a4.5 4.5 0 0 0 2.232.21a4.6 4.6 0 0 0 1.063-.323a.4.4 0 0 0-.01-.12a3.4 3.4 0 0 0-.113-.468c-.111-.357-.277-.705-.535-.979c-.187-.2-.422-.36-.684-.441c-.196-.068-.402-.093-.603-.143a6 6 0 0 1-.807-.26c-.18-.067-.35-.158-.522-.244a4.8 4.8 0 0 1-.816-.566a9 9 0 0 1-1.039-1.106a5.3 5.3 0 0 1-.55-.896c-.457-.946-.692-1.99-.747-3.035a8.4 8.4 0 0 1 .03-1.217c.036-.406.094-.811.189-1.207m18.889.002a9 9 0 0 1 .225 2.293a8 8 0 0 1-.089.963c-.025.152-.047.305-.08.455c-.053.285-.138.562-.22.84c-.204.623-.485 1.228-.877 1.756c-.164.207-.34.406-.516.603q-.122.131-.248.256a4.8 4.8 0 0 1-1.45 1.02a6 6 0 0 1-1.109.367c-.197.045-.4.067-.588.146a1.7 1.7 0 0 0-.427.254a2 2 0 0 0-.496.623c-.14.274-.238.568-.3.87c-.014.076-.04.155-.029.234c.1.045.205.08.307.123c.39.145.802.229 1.217.254c.34.016.682-.01 1.017-.065c.32-.057.63-.152.932-.267c.328-.134.647-.295.947-.483a5.4 5.4 0 0 0 1.668-1.646a7.7 7.7 0 0 0 .965-2.192q.08-.276.137-.558a7 7 0 0 0 .166-1.493l-.006-.277a9.2 9.2 0 0 0-.684-3.094c-.094-.24-.206-.474-.316-.707c-.046-.094-.088-.188-.146-.275"></svg:path>`,
})
export class LaOldRepublicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOmIcon],svg[la-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 19.121c0 2.086-.844 7.453-5.41 7.453c-4.352 0-5.938-3.844-5.637-5.234c.25.426 1.043 2.617 5.324 2.617c4.391 0 4.438-4.879 4.438-4.879s-.074-3.46-2.75-3.46c-3.266 0-3.375 5.19-6.656 5.19c-1.645 0-2.196-.87-2.528-1.109c.707 2.196-.129 7.301-5.504 7.301c-7.672 0-7.273-8.277-7.273-8.277s1.285 5.101 7.14 5.101c3.57 0 4.04-2.039 4.04-2.972c0-.93-.711-2.57-3.907-2.57l-.699-3.317s.945.308 2.113.308c1.54 0 1.891-1.027 1.891-1.87c0-.84-.824-1.692-2.332-1.692c-2.336 0-4.21 2.398-4.21 2.398l-1.817-3.37s1.687-2.177 5.105-2.177c3.414 0 4.965 2.797 4.965 4.438s-.766 3-2.219 3.77c1.961.921 1.367 1.597 2.617 1.597c2.07 0 2.352-1.691 3.325-3.226c.898-1.41 2.175-2.672 4.437-2.672c4.527 0 5.547 4.57 5.547 6.652m-8.828-7.14c2.3 0 4.082-1.333 4.082-1.333l-1.91-3.37S21.016 9.14 18.44 9.14c-2.574 0-4.703-2.352-4.703-2.352s.977 5.191 6.434 5.191zm.355-5.368l-1.91-2.043l-2.129 1.864l1.91 2.175z"></svg:path>`,
})
export class LaOmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOpencartIcon],svg[la-opencart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5.25c2.934 5.566 8.117 6.434 14.406 6.563c3.711.078 11.875-.239 11.875 1.75c0 1.492-5.437 6.167-5.437 7.124c0 0 3.77-3.187 5.875-5.062S31 12.641 31 11.531c0-2.258-8.73-1.844-15.781-1.844S4.313 8.352 1 5.25m7.875 17.281c-1.168 0-2.125.926-2.125 2.094s.957 2.125 2.125 2.125s2.094-.957 2.094-2.125a2.08 2.08 0 0 0-2.094-2.094m9.75 0a2.08 2.08 0 0 0-2.094 2.094c0 1.168.926 2.125 2.094 2.125a2.13 2.13 0 0 0 2.125-2.125c0-1.168-.957-2.094-2.125-2.094"></svg:path>`,
})
export class LaOpencartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOpenidIcon],svg[la-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 4l-4 1.938v19.687c-5.145-.672-8.063-3.023-8.063-5.969c0-2.761 2.985-5.101 7.063-5.843v-2.5c-6.277.796-11 4.23-11 8.343c0 4.293 4.52 7.817 12 8.438l4-1.875zm1 7.375v2.531c1.313.281 2.504.739 3.5 1.313l-2.125 1.187L29 18.063l-.531-5.625l-2.032 1.124c-1.75-1.062-3.968-1.82-6.437-2.187"></svg:path>`,
})
export class LaOpenidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOperaIcon],svg[la-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.969 4C9.672 4 5 8.945 5 15.906C5 22.191 9.46 28 15.969 28C22.527 28 27 22.191 27 15.906C27 8.883 22.21 4 15.969 4m0 2C21.21 6 25 9.754 25 15.906C25 21.262 21.344 26 15.969 26C10.652 26 7 21.262 7 15.906C7 9.793 10.676 6 15.969 6m0 .313c-1.043 0-1.996.406-2.656 1.062s-1.079 1.492-1.376 2.406c-.597 1.832-.718 4.016-.718 5.938c0 1.761.066 4.008.625 5.937c.277.965.672 1.88 1.344 2.594a3.82 3.82 0 0 0 2.78 1.188a3.84 3.84 0 0 0 2.782-1.188c.684-.71 1.09-1.629 1.375-2.594c.574-1.93.656-4.156.656-5.937c0-2.067-.16-4.227-.781-6.031c-.313-.903-.734-1.747-1.406-2.376s-1.598-1-2.625-1zm0 2c.57 0 .906.148 1.25.468s.664.832.906 1.531c.484 1.403.656 3.442.656 5.407c0 1.719-.105 3.828-.562 5.375c-.23.773-.547 1.406-.907 1.781c-.359.375-.718.563-1.343.563c-.61 0-.961-.188-1.313-.563c-.351-.375-.683-1.004-.906-1.781c-.45-1.555-.531-3.668-.531-5.375c0-1.828.156-3.867.625-5.313c.234-.722.566-1.258.906-1.594c.34-.335.664-.5 1.219-.5z"></svg:path>`,
})
export class LaOperaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOptinMonsterIcon],svg[la-optin-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.844 3.25C14.738 3.25 14 5.031 14 5.031s1.055-.656 2.406-.656c2.317 0 3.719 1.813 3.719 1.813s-.066-2.938-3.281-2.938m-1.969 2.281c-3.105 0-4.719.5-4.719.5s1.617.262 2.781.782c-4.332.605-6.406 3.218-6.406 3.218s1.606-.281 2.188-.219a6.4 6.4 0 0 0-1.313 1c-.062 0-.133.004-.187 0c-.7-.062-.98-.023-1.032-.718C6.138 9.398 6.02 9 5.375 9s-1.563 1.414-1.563 2.844c0 1.625.372 3.031 3.22 3.125c-.005.031 0 .125 0 .125s.956.058 1.218.625c.121.035.227.105.344.187L7.78 16c-.261-.324-.625-.375-.968-.375c-.028-.172-.262-.531-.594-.531c-.57 0-.844.812-.844.812s-1.25.375-1.25 1.719c0 1.55 1.387 2.313 2.281 2.313v1.03c-.242-.214-.48-.343-.687-.343c-.211 0-.43.031-.625.063c-.098-.106-.282-.282-.5-.282c-.278 0-.336.332-.344.532c-.29.12-.574.261-.813.437a.7.7 0 0 0-.312-.094c-.172 0-.188.176-.188.282c0 .05-.015.148 0 .25a3.7 3.7 0 0 0-.5.687a1 1 0 0 0-.28-.063c-.122 0-.157.04-.157.125c0 .063.07.336.156.532c-.066.207-.094.41-.094.593c0 1.153 1.829 3.063 3.688 3.063c.21 0 1.406-.203 1.906-1.156c.11.004 5.614.156 8.219.156c2.594 0 8.273-.184 8.438-.188c.492.977 1.722 1.188 1.937 1.188c1.86 0 3.688-1.91 3.688-3.063c0-.183-.028-.355-.094-.562c.086-.195.156-.5.156-.563c0-.085-.035-.125-.156-.125c-.074 0-.203.036-.282.063a3.7 3.7 0 0 0-.5-.688c.016-.101 0-.199 0-.25c0-.105-.015-.28-.187-.28a.7.7 0 0 0-.313.093a4 4 0 0 0-.812-.438c-.008-.199-.066-.53-.344-.53c-.218 0-.402.175-.5.28c-.195-.03-.414-.03-.625-.03c-.207 0-.445.097-.687.312v-1.032c.894 0 2.281-.761 2.281-2.312c0-1.344-1.25-1.719-1.25-1.719s-.273-.812-.844-.812c-.332 0-.566.36-.593.531c-.356 0-.739.047-1 .406c-.168-.015-.489-.058-.875-.093a2 2 0 0 1 .437-.22c.367-.558 1.219-.593 1.219-.593v-.156c2.933-.067 3.281-1.512 3.281-3.156c0-1.426-.887-2.813-1.531-2.813c-.645 0-.793.367-.844 1.063c-.05.695-.332.687-1.031.75c-.25.023-.563-.008-.782-.032c-1.125-2.543-3.62-5.25-9.187-5.25zm1.188 1a3.72 3.72 0 0 1 3.718 3.719a3.72 3.72 0 0 1-3.718 3.719c-2.055 0-3.75-1.664-3.75-3.719s1.695-3.719 3.75-3.719m.062 2.563c-.344 0-.672.043-.969.156c.446.164.75.586.75 1.063c0 .62-.523 1.124-1.187 1.124c-.45 0-.856-.218-1.063-.562a2 2 0 0 0-.062.531c0 1.29 1.136 2.344 2.531 2.344s2.531-1.055 2.531-2.344s-1.136-2.312-2.531-2.312m-10.656.594c.234 0 .238.445.25.593c.011.149.093.375.093.375c-1.113.555-1.34 1.453-1.5 1.781c0-2.316.922-2.75 1.157-2.75zm21.125.03c.234 0 1.187.407 1.187 2.72c-.16-.329-.418-1.231-1.531-1.782c0 0 .082-.226.094-.375c.011-.148.015-.562.25-.562zM6.03 11c.117.098.223.25.657.281c0 0-.657.95-.657 2s.094 1.063.094 1.063s-1.254-.196-1.563-.938c.075-1.113.536-2.078 1.47-2.406zm20.032 0c.933.328 1.363 1.293 1.437 2.406c-.309.742-1.563.938-1.563.938s.094-.012.094-1.063s-.656-2-.656-2c.434-.031.57-.187.688-.281m-1.782.344h.625s.75.922.75 1.812s-.093 1.281-.093 1.281l-.625.032a11 11 0 0 0-.657-3.125m-16.406.094l-.094.5l-.03.062c-.367.875-.566 1.844-.656 2.469l-.563-.031s-.125-.391-.125-1.282c0-.566.274-1.062.5-1.406c.32-.125.664-.227.969-.313zm9.875 3.5c.46 0 1.313.03 1.313.03s.062.493.062 1c0 .282-.012.563-.031.72c-.028.203-.035.406-.5.406c-.555 0-.477.062-.844.062s-1.32.004-1.375-.5c-.063-.554-.125-1.687-.125-1.687s1.04-.031 1.5-.031m-2.188.03s.094.79.094 1.532s.012.102-.031.719c-.023.332.133.5-1.375.5c-1.563 0-1.563-.09-1.563-1.282c0-1.19.094-1.437.094-1.437s2.559 0 2.781-.031zm4.188 0s1.79.067 1.938.095c0 .546-.329 2.812-1.344 2.812c-.352 0-.36-1.188-.407-1.688a12 12 0 0 0-.187-1.218zM12.125 15L12 16.688c-.02.265-.094.789-.094.843c0 .055-.058.313-.25.313c-.215 0-1.406-.383-1.406-2.063c0-.308.063-.687.063-.687zm-2.344 1.469c.301 1.351 1.48 1.937 1.938 1.937c.48 0 .554-.46.594-.718c.3.523 1.164.562 1.75.562c2.207 0 2.18-.527 2.218-.75c0 0 .344.219 1.313.219c1.918 0 2.031-.469 2.031-.469s.191 1.219.75 1.219c1.207 0 1.75-1.969 1.75-1.969c.094.004.234.016.5.031h.125c.254.016.488.04.688.063c-.028.058-.063.105-.063.156c0 .254.406.438.406.438s-.12.093-.218.218c-.57.524-1.52 1.418-2.282 2.063a14.7 14.7 0 0 1-5.468 2.937c-.258-.054-3.016-1.172-4.626-2.468a35 35 0 0 1-2.656-2.375c-.101-.215-.312-.375-.312-.375s.406-.184.406-.438c0-.05-.035-.098-.063-.156zm13.875 1.781c.18.133.375.188.375.188l.032.156s-.282.097-.282.375c0 .37.75.5.75.5s.098.18.344.312v2.094c-.41.688-.7 1.594-.75 2.563c-1.555-1.079-4.828-2.176-5.531-2.407a18 18 0 0 0 2.468-1.531c.981-.727 1.926-1.617 2.594-2.25m-15.343.031c.43.399 1.703 1.559 2.5 2.219c.507.422 1.433.992 2.374 1.5c-2.617.828-5.054 2.254-5.312 2.406a5.7 5.7 0 0 0-.75-2.531v-2.094c.246-.133.344-.312.344-.312s.75-.13.75-.5c0-.278-.281-.375-.281-.375l.03-.157s.177-.042.345-.156m-2.626 3.657c1.239 0 1.907 2.347 1.907 2.875c0 1.019-1.133 1.625-1.907 1.625c-1.152 0-2.937-1.387-2.937-1.907c0-1.246 1.625-2.593 2.938-2.593zm20.625 0c1.313 0 2.938 1.347 2.938 2.593c0 .52-1.785 1.907-2.938 1.907c-.773 0-1.906-.606-1.906-1.625c0-.528.668-2.875 1.907-2.875zm-20.593.406c-.7 0-2.5 1.226-2.5 2.093c0 .754.984.813 1.125.813c.492 0 2.281-.832 2.281-1.813c0-.218-.207-1.093-.906-1.093m12.218 0c.375.136 2.09.765 2.907 1.125c.906.398 2.687 1.468 2.687 1.468s-4.289.157-7.531.157s-7.469-.188-7.469-.188c1.813-1.215 5.344-2.445 5.5-2.5c.735.36 1.43.684 1.813.75a15 15 0 0 0 2.094-.812zm8.344 0c-.699 0-.906.875-.906 1.093c0 .981 1.79 1.813 2.281 1.813c.14 0 1.125-.059 1.125-.813c0-.867-1.8-2.093-2.5-2.093M6.813 24.375c-.368 0-1.5.777-1.5 1.219c0 .441.578.5.75.5c.171 0 1.156-.383 1.156-1.063c0 0-.04-.656-.407-.656zm18.375 0c-.368 0-.407.656-.407.656c0 .68.985 1.063 1.157 1.063c.171 0 .75-.059.75-.5c0-.442-1.133-1.219-1.5-1.219"></svg:path>`,
})
export class LaOptinMonsterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOrcidIcon],svg[la-orcid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-5 3a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-1 3v11h2V11zm4 0v11h4.5c3.026 0 5.5-2.474 5.5-5.5S21.526 11 18.5 11zm2 2h2.5c1.944 0 3.5 1.556 3.5 3.5S20.444 20 18.5 20H16z"></svg:path>`,
})
export class LaOrcidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOsiIcon],svg[la-osi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16c0 5.125 3.215 9.504 7.75 11.219l.938.375l.374-.938l2.47-6.562l.343-.938l-.938-.343A3 3 0 0 1 13 16c0-1.668 1.332-3 3-3s3 1.332 3 3a3 3 0 0 1-1.938 2.813l-.937.343l.344.938l2.468 6.562l.375.938l.938-.375C24.785 25.504 28 21.125 28 16c0-6.617-5.383-12-12-12m0 2c5.535 0 10 4.465 10 10c0 3.922-2.316 7.203-5.594 8.844l-1.812-4.782C19.977 19.172 21 17.759 21 16c0-2.75-2.25-5-5-5s-5 2.25-5 5c0 1.758 1.023 3.172 2.406 4.063l-1.812 4.78C8.316 23.204 6 19.923 6 16c0-5.535 4.465-10 10-10"></svg:path>`,
})
export class LaOsiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOtterIcon],svg[la-otter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 5c-3.711 0-7.057 1.584-8.594 4.002A3.003 3.003 0 0 0 3 12c0 .899.407 2.021 1 2.818V27h2V14.068l-.268-.287C5.3 13.314 5 12.47 5 12a1 1 0 0 1 1-1q.097 0 .23.031l.784.188l.347-.729C8.347 8.435 11.283 7 14.5 7h3c3.217 0 6.153 1.435 7.139 3.49l.347.729l.784-.188q.133-.03.23-.031a1 1 0 0 1 1 1c0 .469-.3 1.314-.732 1.781l-.268.287V27h2V14.818c.593-.797 1-1.919 1-2.818a3.003 3.003 0 0 0-2.906-2.998C24.557 6.584 21.21 5 17.5 5zM10 12a1 1.5 0 0 0 0 3a1 1.5 0 0 0 0-3m12 0a1 1.5 0 0 0 0 3a1 1.5 0 0 0 0-3m-6 1.018c-.915 0-1.83.323-2.629.968c-3.557 2.878-3.64 2.95-3.887 3.157l-.107.09C8.489 17.974 8 18.958 8 20c0 2.206 1.794 4 4 4c1.498 0 2.914-.36 4-1.006C17.086 23.64 18.502 24 20 24c2.206 0 4-1.794 4-4c0-1.041-.489-2.024-1.377-2.768l-.107-.09c-.246-.206-.33-.279-3.887-3.158c-.798-.644-1.714-.966-2.629-.966m0 1.986c.463 0 .927.179 1.371.537c3.527 2.854 3.613 2.926 3.856 3.13l.113.097c.3.252.66.669.66 1.232c0 1.103-.897 2-2 2c-1.339 0-2.6-.371-3.371-.994l-.596-.48c.075-.87.353-1.526.967-1.526c1.105 0 2-.202 2-.727C19 17.57 17.657 17 16 17s-3 .57-3 1.273c0 .525.895.727 2 .727c.614 0 .892.656.967 1.525l-.596.48C14.6 21.63 13.34 22 12 22c-1.103 0-2-.897-2-2c0-.562.36-.98.662-1.232l.113-.096c.244-.205.328-.276 3.854-3.129c.445-.36.908-.54 1.371-.54z"></svg:path>`,
})
export class LaOtterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laOutdentIcon],svg[la-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h13V7zm0 4v2h20v-2zm22 0v10l5-5zM3 15v2h20v-2zm0 4v2h20v-2zm0 4v2h13v-2z"></svg:path>`,
})
export class LaOutdentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPage4Icon],svg[la-page4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.82 3 3 8.82 3 16c0 2.923.976 5.61 2.604 7.781L19.902 3.598A13 13 0 0 0 16 3m5 1v18h6.525A12.9 12.9 0 0 0 29 16c0-5.407-3.303-10.041-8-12m1.05 4h.737v1.707h.666V8.143h.727v1.564h.734V8h.727v2.484h-3.59V8zm1.466 3.22h1.87c.809 1.536.246 3.428-1.544 3.428c-2.056 0-2.26-2.445-1.422-3.355l.613.553c-.675.655-.357 1.972.809 1.972c1.054 0 1.432-1.021.982-1.84h-.584v.633h-.724zM16 11.544L8.604 22H16V11.543zm9.633 3.268v.89l-.748.307V17.4l.748.295v.881l-3.58-1.555v-.656zm-1.422 1.464l-1.106.44l1.106.44zm-1.065 2.045c.808 0 1.094.511 1.094 1.33v.575h1.4V21h-3.578v-1.318c0-.808.286-1.362 1.084-1.362zm0 .819c-.348 0-.417.337-.417.674v.41h.859v-.534c-.001-.306-.125-.55-.442-.55M5.768 24c2.38 3.039 6.072 5 10.232 5v-5zM21 24v4a13.03 13.03 0 0 0 5.232-4z"></svg:path>`,
})
export class LaPage4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPagelinesIcon],svg[la-pagelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.094 4s-1.207 1.664-.844 4.281c.277 1.98 1.93 3.223 2.844 3.75c.031.953.008 1.926-.094 2.906c-.46-1.124-1.492-3.093-3.406-3.78c-1.86-.673-4.219.187-4.219.187c.316 2.316 1.836 4.117 4.313 4.562c1.585.285 2.644.102 3.187-.031c-.25 1.672-.71 3.324-1.375 4.813c-.36-1.106-1.512-3.368-4.844-3.75c-1.957-.223-3.812 1-3.812 1s1.191 4.28 5.031 4.28c1.559 0 2.59-.355 3.188-.624c-.032.062-.06.125-.094.187c-1.707 3.082-4.41 5.219-8.5 5.219v1c4.445 0 7.543-2.441 9.375-5.75c.113-.203.207-.414.312-.625c.274.207 1.758 1.25 4.688 1.25c3.238 0 4.687-3.656 4.687-3.656s-1.617-1.344-4.093-1.344c-2.344 0-4.098 1.867-4.907 2.938a19.6 19.6 0 0 0 1.344-4.782c.176.035 3.52.637 5.406-1.281c1.938-1.969 1.625-3.781 1.625-3.781s-3.258-.465-5.031 1.156c-1.117 1.023-1.707 2.723-1.938 3.5c.176-1.328.215-2.652.157-3.938a6.8 6.8 0 0 0 .843-3.25C18.938 5.242 15.095 4 15.095 4z"></svg:path>`,
})
export class LaPagelinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPagerIcon],svg[la-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7c-1.645 0-3 1.355-3 3v12c0 1.645 1.355 3 3 3h18c1.645 0 3-1.355 3-3V10c0-1.645-1.355-3-3-3zm0 2h18c.565 0 1 .435 1 1v12c0 .565-.435 1-1 1H7c-.565 0-1-.435-1-1V10c0-.565.435-1 1-1m1 2v6h12v-6zm14 0v2h2v-2zm0 4v2h2v-2zM8 19v2h12v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class LaPagerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaintBrushIcon],svg[la-paint-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.813 4.031c-.836 0-1.68.336-2.313.969L9.812 17.5l-.624.594c-.75.14-1.465.508-2.032 1.125c-.832.91-.996 2.023-1.312 3.218c-.317 1.196-.719 2.528-1.688 4l-1 1.563H5c3.914 0 6.496-1.871 7.813-3.188l.03-.03c.602-.618.938-1.395 1.063-2.188l.5-.469l12.688-12.5v-.031a3.254 3.254 0 0 0 0-4.594c-.633-.633-1.446-.969-2.282-.969zm0 1.969c.312 0 .609.14.875.406c.535.535.535 1.246 0 1.782l-9.032 8.937l-1.812-1.813l9.062-8.906c.266-.265.594-.406.907-.406M13.405 16.719l1.813 1.812l-1.5 1.469l-1.813-1.813zM9.97 20.03c.504.016 1.05.211 1.469.594c.777.71.796 1.953-.032 2.781c-.867.867-2.406 1.985-4.656 2.407c.48-1.051.816-2.032 1.031-2.844c.332-1.254.578-2.114.844-2.407c.348-.378.84-.546 1.344-.53z"></svg:path>`,
})
export class LaPaintBrushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaintRollerIcon],svg[la-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v8h18V4zm2 2h14v4H7zm17 1v2h1v4.25l-9.281 2.781l-.719.219V19h-2v9h6v-9h-2v-1.25l9.281-2.781l.719-.219V7zm-9 14h2v5h-2z"></svg:path>`,
})
export class LaPaintRollerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaletteIcon],svg[la-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.594 2.969c-.531.015-1.078.074-1.625.156h-.031C8.613 3.996 4.3 8.191 3.217 13.5c-.323 1.512-.304 2.922-.093 4.313c.008.003 0 .023 0 .03c.328 2.348 3.375 3.376 5.094 1.657c1.23-1.23 3.05-1.23 4.281 0s1.23 3.05 0 4.281c-1.719 1.719-.691 4.766 1.656 5.094c.008 0 .028-.008.031 0c1.38.21 2.782.223 4.282-.094h.031c5.324-.992 9.508-5.406 10.375-10.718v-.032c1.133-7.64-4.453-14.312-11.719-15a12 12 0 0 0-1.562-.062zm.031 2A11 11 0 0 1 16.969 5a11.093 11.093 0 0 1 9.937 12.75c-.73 4.477-4.32 8.242-8.781 9.063h-.031a9.9 9.9 0 0 1-3.657.093c-.82-.101-1.199-1.02-.53-1.687a5.036 5.036 0 0 0 0-7.125a5.036 5.036 0 0 0-7.126 0c-.668.668-1.586.289-1.687-.532a9.9 9.9 0 0 1 .093-3.656c.918-4.488 4.586-8.082 9.063-8.812c.469-.07.922-.11 1.375-.125M14 7a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m7 2a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4M9 11a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m14 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m-4 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaPaletteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPalfedIcon],svg[la-palfed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4c-.55 0-1 .45-1 1v1c-4.418 0-8 1.791-8 4H4c-1.1 0-2 .9-2 2s.9 2 2 2h1.375l1.406 11.248A2 2 0 0 0 8.766 27h14.468c1.01 0 1.86-.751 1.987-1.752L26.625 14H28c1.1 0 2-.9 2-2s-.9-2-2-2h-1c0-2.209-3.582-4-8-4V5c0-.55-.45-1-1-1zm1.328 4.188c.38.035.72.318.813.78C19.804 7.844 23 9.019 23 12.622c0 3.953-3.915 7.745-7 7.014v5.084c.01.173.059.633-.24.968c-.487.538-1.696.509-1.848-1.13c-.208-2.253.01-10.458.07-12.305c-1.09.761-2.966 2.55-2.966 3.85q.015.19.029.234c.01 0 .33-.139.568-.139c1.35 0 1.05 2.239-.73 2.239c-1.09 0-1.883-.916-1.883-2.18c0-2.131 2.176-4.852 5.11-6.42c.05-.63.152-1.117.533-1.432a.95.95 0 0 1 .685-.216zm3.211 2.496c-.779.008-1.636.202-2.389.476a311 311 0 0 0-.15 6.08c.035.142.13.315.754.315c1.838 0 4.165-2.172 4.16-4.881c0-1.504-1.077-2.005-2.375-1.99"></svg:path>`,
})
export class LaPalfedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPalletIcon],svg[la-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.125 5L6 5.844l-2 14V27h6v-2h12v2h6v-7.156l-2-14L25.875 5zm1.75 2h2.063l-.876 12H6.156zm4.063 0H15v12h-3.938zM17 7h3.063l.875 12H17zm5.063 0h2.062l1.719 12h-2.907zM6 21h20v4h-2v-2H8v2H6z"></svg:path>`,
})
export class LaPalletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaperPlaneIcon],svg[la-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 5.344l.437 1.875L5.97 16l-1.94 8.781l-.437 1.875l1.781-.718l22-9L29.656 16l-2.281-.938l-22-9zm2.781 3.312L21.906 15H7.781zM7.781 17h14.125L6.375 23.344z"></svg:path>`,
})
export class LaPaperPlaneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaperPlaneSolidIcon],svg[la-paper-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 5.344l.437 1.875L5.97 16l-1.94 8.781l-.437 1.875l1.781-.718l22-9L29.656 16l-2.281-.938l-22-9zm2.781 3.312L21.906 15H7.781zM7.781 17h14.125L6.375 23.344z"></svg:path>`,
})
export class LaPaperPlaneSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPaperclipIcon],svg[la-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-1.39 0-2.758.54-3.813 1.594l-9.375 9.375c-2.972 2.972-2.972 7.808 0 10.781s7.81 2.973 10.782 0l6.25-6.25l-1.407-1.406l-6.25 6.25a5.623 5.623 0 0 1-7.968 0a5.623 5.623 0 0 1 0-7.969L18.594 7a3.414 3.414 0 0 1 4.843 0a3.414 3.414 0 0 1 0 4.844l-9.375 9.375c-.48.48-1.238.48-1.718 0a1.205 1.205 0 0 1 0-1.719l8.594-8.594L19.53 9.5l-8.593 8.594a3.213 3.213 0 0 0 0 4.531a3.213 3.213 0 0 0 4.53 0l9.376-9.375A5.423 5.423 0 0 0 21 4"></svg:path>`,
})
export class LaPaperclipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laParachuteBoxIcon],svg[la-parachute-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 16c0-6.617-5.383-12-12-12S4 9.383 4 16v.453l8 7V28h8v-4.547l8-7zM16 6.363c.867.942 2.422 3.172 2.871 7.293C18.148 13.281 17.207 13 16 13s-2.148.281-2.871.656c.45-4.125 2.008-6.355 2.871-7.293m-4.914 10.035L13.484 22h-.109l-7.04-6.16C6.72 15.45 7.392 15 8.5 15c1.902 0 2.559 1.352 2.586 1.398M15.66 22l-2.52-5.875C13.524 15.691 14.38 15 16 15c1.625 0 2.484.695 2.86 1.121L16.34 22zm2.856 0l2.398-5.602c.012-.015.64-1.398 2.586-1.398c1.102 0 1.773.453 2.16.844L18.625 22zm7.144-8.555C25.078 13.18 24.367 13 23.5 13c-1.11 0-1.965.293-2.621.684c-.344-3.477-1.41-5.86-2.402-7.364c3.5.899 6.261 3.637 7.183 7.125m-12.14-7.12c-.989 1.5-2.055 3.882-2.399 7.359C10.465 13.293 9.61 13 8.5 13c-.867 0-1.578.18-2.16.445a10.01 10.01 0 0 1 7.18-7.12M18 26h-4v-2h4z"></svg:path>`,
})
export class LaParachuteBoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laParagraphIcon],svg[la-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-3.3 0-6 2.7-6 6s2.7 6 6 6h4v10h2V7h2v20h2V7h2V5zm0 2h4v8h-4c-2.219 0-4-1.781-4-4s1.781-4 4-4"></svg:path>`,
})
export class LaParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laParkingIcon],svg[la-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v22h20V5zm2 2h16v18H8zm4 3v12h2v-3h3c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3zm2 2h3c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-3z"></svg:path>`,
})
export class LaParkingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPassportIcon],svg[la-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm8 3c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m.688 2.094c.484.082.937.23 1.343.469l.063.718l-.469-.187l-.375.312l.063.906l.968-.28l1.188.374l-.313.531l-.718-.437l-.782.125l-.75.563l-.437 1.312l.843.688s.891-.157.938-.157s.375.813.375.813l-.5 1.531A4 4 0 0 1 16 18c-.234 0-.465-.055-.688-.094l-.187-.312l.469-1.75l-1.781-1.344h-1.657l-.125-.25c-.004-.086-.031-.164-.031-.25c0-.215.031-.422.063-.625l.843-.656l1.781-.844l-.28-1.156l.78-.156l.344.5l1.344-.25zm-3.625 6.625h.312l.594.718a4 4 0 0 1-.906-.718M10 22v2h12v-2z"></svg:path>`,
})
export class LaPassportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPastafarianismIcon],svg[la-pastafarianism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C9.346 4 8 5.346 8 7c0 1.319.862 2.429 2.047 2.83c.055.688.19 1.666.537 2.59c-.912.478-1.71 1.048-2.324 1.68c-.101.095-.19.2-.281.306c-.057.067-.13.131-.182.2l.012.007c-.08.105-.15.214-.22.326c-.5-.129-.765-.527-1.194-1.386C5.885 12.536 5.118 11 3 11v2c.81 0 1.07.375 1.605 1.447c.42.838 1.029 2.016 2.41 2.408c-.001.05-.015.095-.015.145c0 .962.355 1.833.922 2.523A2 2 0 0 1 6 21c-1.103 0-2-.897-2-2H2c0 2.206 1.794 4 4 4c1.583 0 2.942-.932 3.59-2.27c.44.168.912.27 1.41.27c.173 0 .338-.03.506-.05c-.077.296-.142.594-.194.859C10.966 23.592 10.69 25 8 25v2c4.339 0 4.925-3.01 5.275-4.809c.101-.518.182-.824.258-1.056c.69.543 1.55.865 2.467.865a4 4 0 0 0 2.467-.865c.076.232.157.538.258 1.056c.35 1.8.936 4.809 5.275 4.809v-2c-2.69 0-2.965-1.408-3.313-3.191a15 15 0 0 0-.195-.862c.168.022.334.053.508.053c.498 0 .97-.102 1.41-.27C23.058 22.068 24.417 23 26 23c2.206 0 4-1.794 4-4h-2c0 1.103-.897 2-2 2c-.92 0-1.69-.628-1.922-1.477A3.96 3.96 0 0 0 25 17c0-.05-.014-.095-.016-.145c1.382-.392 1.991-1.57 2.41-2.408C27.932 13.375 28.19 13 29 13v-2c-2.118 0-2.886 1.536-3.395 2.553c-.43.86-.694 1.257-1.195 1.386a4 4 0 0 0-.219-.326l.012-.008c-.052-.068-.125-.132-.182-.199c-.09-.105-.18-.21-.28-.306c-.615-.632-1.413-1.202-2.325-1.68c.348-.924.482-1.902.537-2.59A2.995 2.995 0 0 0 24 7c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.283.814 2.37 1.95 2.799c-.055.555-.16 1.242-.366 1.832C18.404 11.234 17.162 11 16 11s-2.405.232-3.584.629c-.205-.588-.31-1.275-.365-1.83A3 3 0 0 0 14 7c0-1.654-1.346-3-3-3m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m10 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-5 7c.975 0 2.027.206 3.021.545C17.821 14.235 17 15.517 17 17c0 .788.236 1.519.63 2.139A2 2 0 0 1 16 20a2 2 0 0 1-1.63-.861c.394-.62.63-1.35.63-2.139c0-1.483-.82-2.764-2.021-3.455c.994-.34 2.046-.545 3.021-.545m-5 2c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2c0-.472.17-.902.445-1.244c.064-.08.144-.155.217-.233A2 2 0 0 1 11 15m10 0c.516 0 .983.201 1.338.523c.073.078.153.154.217.233c.274.342.445.772.445 1.244c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2"></svg:path>`,
})
export class LaPastafarianismIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPasteIcon],svg[la-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.258 0-2.152.89-2.594 2H5v23h8v2h14V14h-2V5h-7.406C17.152 3.89 16.258 3 15 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M7 7h2v4h12V7h2v7H13v12H7zm8 9h10v12H15z"></svg:path>`,
})
export class LaPasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPatreonIcon],svg[la-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h7V4zm17.5 0C16.813 4 13 7.813 13 12.5s3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5S26.187 4 21.5 4M6 6h3v20H6zm15.5 0c3.584 0 6.5 2.916 6.5 6.5S25.084 19 21.5 19a6.51 6.51 0 0 1-6.5-6.5C15 8.916 17.916 6 21.5 6"></svg:path>`,
})
export class LaPatreonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPauseIcon],svg[la-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6v20h2V6zm10 0v20h2V6z"></svg:path>`,
})
export class LaPauseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPauseCircleIcon],svg[la-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4 5v10h2V11zm6 0v10h2V11z"></svg:path>`,
})
export class LaPauseCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laPauseCircleSolidIcon],svg[la-pause-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4 5v10h2V11zm6 0v10h2V11z"></svg:path>`,
})
export class LaPauseCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

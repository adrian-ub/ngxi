import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdCashIcon],svg[ion-md-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 96v256h448V96H32zm160.5 224h-80.4c0-26.6-21.5-48.1-48.1-48.1V192c35.3 0 64-28.7 64-64h64.5c-19.9 23.5-32.5 57.8-32.5 96s12.6 72.5 32.5 96zM448 271.9c-26 0-48 21.5-48 48.1h-80.5c19.9-23.5 32.5-57.8 32.5-96s-12.6-72.5-32.5-96H384c0 35.3 28.7 64 64 64v79.9z" fill="currentColor"></svg:path><svg:path d="M32 384h448v32H32z" fill="currentColor"></svg:path>`,
})
export class IonMdCashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCellularIcon],svg[ion-md-cellular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 448h384V64L64 448z" fill="currentColor"></svg:path>`,
})
export class IonMdCellularIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdChatboxesIcon],svg[ion-md-chatboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z" fill="currentColor"></svg:path><svg:path d="M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z" fill="currentColor"></svg:path>`,
})
export class IonMdChatboxesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdChatbubblesIcon],svg[ion-md-chatbubbles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z" fill="currentColor"></svg:path><svg:path d="M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z" fill="currentColor"></svg:path>`,
})
export class IonMdChatbubblesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckboxIcon],svg[ion-md-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64zm-192 298.667L106.667 256l29.864-29.864 76.802 76.802 162.136-162.136 29.864 29.865-192 192z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckboxOutlineIcon],svg[ion-md-checkbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckmarkIcon],svg[ion-md-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckmarkCircleIcon],svg[ion-md-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm-42.7 318.9L106.7 260.3l29.9-29.9 76.8 76.8 162.1-162.1 29.9 29.9-192.1 191.9z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckmarkCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCheckmarkCircleOutlineIcon],svg[ion-md-checkmark-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdCheckmarkCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdClipboardIcon],svg[ion-md-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.333 80h-87.35C310.879 52.396 285.821 32 256 32s-54.879 20.396-61.983 48h-87.35C83.198 80 64 99.198 64 122.667v314.665C64 460.801 83.198 480 106.667 480h298.666C428.802 480 448 460.801 448 437.332V122.667C448 99.198 428.802 80 405.333 80zM256 80c11.729 0 21.333 9.599 21.333 21.333s-9.604 21.334-21.333 21.334-21.333-9.6-21.333-21.334S244.271 80 256 80zm152 360H104V120h40v72h224v-72h40v320z" fill="currentColor"></svg:path>`,
})
export class IonMdClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdClockIcon],svg[ion-md-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0-81.3 81.2-81.2 212.9 0 294.2 81.2 81.2 212.9 81.2 294.2 0 81.2-81.2 81.2-213 0-294.2zm-16.5 53.2c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9zM80 256c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm45.4 93.9c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9zm5.9-165.9c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm36.7-80.4c7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.6 1.8 17.5-5.9 21.9s-17.5 1.8-21.9-5.9c-4.4-7.7-1.7-17.5 5.9-21.9zm-7.8 110.7l15.6-26.6 95.2 56.9V384h-31V260.6l-79.8-46.3zm29.7 188.3c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9 7.6 4.4 10.3 14.2 5.9 21.9zM256 432c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-320c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm88 296.4c-7.6 4.4-17.5 1.8-21.9-5.9-4.4-7.6-1.8-17.5 5.9-21.9 7.6-4.4 17.5-1.8 21.9 5.9 4.4 7.7 1.7 17.5-5.9 21.9zm5.9-283c-4.4 7.6-14.2 10.3-21.9 5.9s-10.3-14.2-5.9-21.9c4.4-7.6 14.2-10.3 21.9-5.9s10.3 14.3 5.9 21.9zM408.4 344c-4.4 7.6-14.2 10.3-21.9 5.9-7.6-4.4-10.3-14.2-5.9-21.9 4.4-7.6 14.2-10.3 21.9-5.9 7.7 4.4 10.3 14.3 5.9 21.9zm7.6-72c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonMdClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloseIcon],svg[ion-md-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" fill="currentColor"></svg:path>`,
})
export class IonMdCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloseCircleIcon],svg[ion-md-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z" fill="currentColor"></svg:path>`,
})
export class IonMdCloseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloseCircleOutlineIcon],svg[ion-md-close-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z" fill="currentColor"></svg:path>`,
})
export class IonMdCloseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudIcon],svg[ion-md-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudCircleIcon],svg[ion-md-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm93.6 291.2H172.801c-34.318 0-62.4-28.082-62.4-62.399 0-34.319 28.082-62.4 62.4-62.4h3.117c9.364-36.4 41.601-62.399 80.083-62.399 45.764 0 83.199 37.435 83.199 83.198h10.4c29.118 0 52 22.882 52 52.001 0 29.117-22.882 51.999-52 51.999z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudDoneIcon],svg[ion-md-cloud-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM213.333 362.667L138.667 288l29.864-29.864 44.802 44.802L324.271 192l29.865 29.864-140.803 140.803z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudDownloadIcon],svg[ion-md-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM224 268v-76h64v76h68L256 368 156 268h68z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudOutlineIcon],svg[ion-md-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.001 217.001C388.997 148.002 328.998 96 256 96c-57.998 0-107.999 32.998-132.997 81C63.002 183.002 16 233.998 16 296c0 65.996 54.004 120 120 120h260c55 0 100-45 100-100.001 0-52.997-40.997-95.999-92.999-98.998zM396 376H136c-44.004 0-80-35.996-80-80 0-44 35.996-80 80-80h14.004c12.998-46 55-80 105.996-80 60.996 0 110 49 110 110v10h30c32.998 0 60 27.003 60 60 0 32.998-27.002 60-60 60z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudUploadIcon],svg[ion-md-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudyIcon],svg[ion-md-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2z" fill="currentColor"></svg:path><svg:path d="M393.2 219.2C380.5 154.6 323.9 106 256 106c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 194 32 238.4 32 293.5 32 355.6 82.2 406 144 406h242.7c51.5 0 93.3-42 93.3-93.8 0-49.4-38.3-89.6-86.8-93z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCloudyNightIcon],svg[ion-md-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2z" fill="currentColor"></svg:path><svg:path d="M341.5 303.4C330.7 247.7 282.2 206 224 206c-34 0-65.1 12-86.5 39.1 29.4 2.2 56.7 13.1 77.7 34.2 15.6 15.7 26.6 34.9 32.1 55.8h-28.7c-13.1-37.6-48-64.5-90.6-64.5-5.1 0-12.3.6-17.7 1.7-45.7 9.4-78.3 47.6-78.3 95 0 53.4 43 96.8 96 96.8h208c44.1 0 80-36.1 80-80.6-.1-42.7-32.9-77.2-74.5-80.1z" fill="currentColor"></svg:path><svg:path d="M112.5 225.4c13.6-17.3 30.7-30.5 50.8-39.2 18.4-8 38.8-12 60.7-12 6.1 0 12.2.4 18.2 1.1-6.1-18.1-9.4-37.6-9.4-57.8 0-24.6 4.9-48.1 13.8-69.4C161.9 68.7 99 145.7 99 237.3c0 1.6 0 3.2.1 4.8.1 0 .2-.1.3-.1l13.1-16.6z" fill="currentColor"></svg:path><svg:path d="M417.6 306.8c13.3 14.2 22.6 31.5 27.1 50.1 16.5-21.4 28.7-46.4 35.3-73.5-21.2 9-44.5 13.9-68.9 13.9h-3.6c3.5 2.9 6.9 6.1 10.1 9.5z" fill="currentColor"></svg:path>`,
})
export class IonMdCloudyNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCodeIcon],svg[ion-md-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" fill="currentColor"></svg:path>`,
})
export class IonMdCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCodeDownloadIcon],svg[ion-md-code-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M234.6 160v125.7l-44.7-43.6L160 272l96 96 96-96-29.9-31-44.7 44.7V160h-42.8z" fill="currentColor"></svg:path><svg:path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" fill="currentColor"></svg:path>`,
})
export class IonMdCodeDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCodeWorkingIcon],svg[ion-md-code-working-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" fill="currentColor"></svg:path><svg:path d="M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z" fill="currentColor"></svg:path>`,
})
export class IonMdCodeWorkingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCogIcon],svg[ion-md-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 288v-64h-34.7c-2-12.1-5.2-23.8-9.3-35l30-17.3-32-55.4-30 17.3c-7.7-9.3-16.3-17.9-25.6-25.6l17.3-30-55.4-32L323 76c-11.2-4.2-22.9-7.3-35-9.3V32h-64v34.7c-12.1 2-23.8 5.2-35 9.3l-17.3-30-55.4 32 17.3 30c-9.3 7.7-17.9 16.3-25.6 25.6l-30-17.3-32 55.4L76 189c-4.2 11.2-7.3 22.9-9.3 35H32v64h34.7c2 12.1 5.2 23.8 9.3 35l-30 17.3 32 55.4 30-17.3c7.7 9.3 16.3 17.9 25.6 25.6l-17.3 30 55.4 32 17.3-30c11.2 4.2 22.9 7.3 35 9.3V480h64v-34.7c12.1-2 23.8-5.2 35-9.3l17.3 30 55.4-32-17.3-30c9.3-7.7 17.9-16.3 25.6-25.6l30 17.3 32-55.4-30-17.3c4.2-11.2 7.3-22.9 9.3-35H480zm-224-64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM141.2 343c-18.3-24.2-29.2-54.3-29.2-87 0-6.1.4-12.1 1.1-18l46.9 17.1v.9c0 17.8 4.9 34.5 13.3 48.8L141.2 343zm40.7-148L135 177.9c20.1-31.1 51.8-53.9 89-62.3v49.9c-16.6 5.9-31.1 16.2-42.1 29.5zM256 400c-23.7 0-46-5.7-65.8-15.9l32.1-38.2c10.5 3.9 21.8 6.1 33.7 6.1s23.2-2.2 33.7-6.1l32.1 38.2C302 394.3 279.7 400 256 400zm32-234.5v-49.9c37.2 8.4 68.9 31.2 89 62.3L330.1 195c-11-13.3-25.5-23.6-42.1-29.5zM370.8 343l-32.1-38.2c8.4-14.3 13.3-31 13.3-48.8v-.9l46.9-17.1c.7 5.9 1.1 11.9 1.1 18 0 32.7-10.9 62.8-29.2 87z" fill="currentColor"></svg:path>`,
})
export class IonMdCogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdColorFillIcon],svg[ion-md-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3z" fill="currentColor"></svg:path><svg:path d="M423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z" fill="currentColor"></svg:path>`,
})
export class IonMdColorFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdColorFilterIcon],svg[ion-md-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M441.8 120.1l-49.9-49.9c-8.3-8.3-21.8-8.3-30.1 0l-66.6 66.6L254.1 96 224 126.1l30.3 30.3L64 346.7V448h101.3l190.3-190.3 30.3 30.3 30.1-30.1-41-41 66.6-66.6c8.5-8.4 8.5-21.8.2-30.2zM147.6 405.4l-41-41 171.9-171.9 41 41-171.9 171.9z" fill="currentColor"></svg:path>`,
})
export class IonMdColorFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdColorPaletteIcon],svg[ion-md-color-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C150.401 64 64 150.401 64 256c0 105.604 86.401 192 192 192 18.136 0 32-13.864 32-32 0-8.531-3.198-16-8.531-21.333-5.333-5.334-8.531-12.803-8.531-21.334 0-18.135 13.864-32 32-32h38.396c58.667 0 106.667-48 106.667-106.666C448 140.802 361.604 64 256 64zM138.667 256c-18.136 0-32-13.864-32-32s13.864-32 32-32c18.135 0 32 13.864 32 32s-13.865 32-32 32zm64-85.333c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32 18.135 0 32 13.864 32 32 0 18.135-13.865 32-32 32zm106.666 0c-18.135 0-32-13.865-32-32 0-18.136 13.865-32 32-32 18.136 0 32 13.864 32 32 0 18.135-13.864 32-32 32zm64 85.333c-18.135 0-32-13.864-32-32s13.865-32 32-32c18.136 0 32 13.864 32 32s-13.864 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonMdColorPaletteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdColorWandIcon],svg[ion-md-color-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4z" fill="currentColor"></svg:path><svg:path d="M181 64h37v68h-37z" fill="currentColor"></svg:path><svg:path d="M181 262h37v68h-37z" fill="currentColor"></svg:path><svg:path d="M270 176h69v37h-69z" fill="currentColor"></svg:path><svg:path d="M305.6 115.8l-25.7-26.3-47.1 48.3 25.6 26.2z" fill="currentColor"></svg:path><svg:path d="M168.8 137.8l-47.1-48.3-25.6 26.3 47.1 48.2z" fill="currentColor"></svg:path><svg:path d="M96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3z" fill="currentColor"></svg:path><svg:path d="M64 176h65v37H64z" fill="currentColor"></svg:path>`,
})
export class IonMdColorWandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCompassIcon],svg[ion-md-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z" fill="currentColor"></svg:path>`,
})
export class IonMdCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdConstructIcon],svg[ion-md-construct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M430.9 393.4l-119.6-119-58.1-57.9-13.4-13.3c15.9-40.6 7.1-88.2-26.6-121.7-35.4-35.3-88.5-42.3-131-22.9l76.1 75.8-53.1 52.9-77.9-75.8C6.2 153.8 15 206.7 50.4 242c33.6 33.5 81.4 42.3 122.1 26.5l14.4 14.3L81.7 388c-7.6 5.7-7.6 19 1.9 26.6l43.8 43.7c7.6 7.6 19.1 7.6 26.7 0l96.1-112.4 113.4 112.9c7.1 7.1 17.7 7.1 24.8 0l40.7-40.6c8.9-7.1 8.9-19.5 1.8-24.8z" fill="currentColor"></svg:path><svg:path d="M494.4 216.6l-34.5-34.1c-2.2-2.2-5.8-2.2-8 0l-3.7 3.7-18.5-15.8s1.2-10-4.9-18.7c-6.2-8.7-16.1-19.8-23.2-26.9-7.1-7-34.1-33.9-69.7-51.4C296.2 55.7 271 48 241 48v29.7s28.7 16.6 45.1 29.7c16.3 13.1 16.8 59.5 16.8 59.5l-28.5 28.5 56.5 56.1 31-36.3c12.9-3.5 23.8-3.8 30.2-.3l13.7 13.3-9.6 9.5c-2.2 2.2-2.2 5.7 0 7.9l34.5 34.1c2.2 2.2 5.8 2.2 8 0l55.7-55.2c2.1-2.2 2.1-5.8 0-7.9z" fill="currentColor"></svg:path>`,
})
export class IonMdConstructIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdContactIcon],svg[ion-md-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" fill="currentColor"></svg:path>`,
})
export class IonMdContactIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdContactsIcon],svg[ion-md-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063z" fill="currentColor"></svg:path><svg:path d="M178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" fill="currentColor"></svg:path><svg:g><svg:path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384z" fill="currentColor"></svg:path><svg:path d="M306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 01-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdContactsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdContractIcon],svg[ion-md-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z" fill="currentColor"></svg:path>`,
})
export class IonMdContractIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdContrastIcon],svg[ion-md-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm113.1 321.1C338.9 399.4 298.7 416 256 416V96c42.7 0 82.9 16.6 113.1 46.9C399.4 173.1 416 213.3 416 256s-16.6 82.9-46.9 113.1z" fill="currentColor"></svg:path>`,
})
export class IonMdContrastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCopyIcon],svg[ion-md-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z" fill="currentColor"></svg:path>`,
})
export class IonMdCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCreateIcon],svg[ion-md-create-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z" fill="currentColor"></svg:path>`,
})
export class IonMdCreateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCropIcon],svg[ion-md-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 312.7h37.8V160c0-20.8-17-37.8-37.8-37.8H199.3V160H352v152.7zm-192 33.5V48h-37.8v74.2H48V160h74.2v186.2c0 20.8 17 37.8 37.8 37.8h192v80h37.8v-80H464v-37.8H160z" fill="currentColor"></svg:path>`,
})
export class IonMdCropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCubeIcon],svg[ion-md-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M467.3 168.1c-1.8 0-3.5.3-5.1 1l-177.6 92.1h-.1c-7.6 4.7-12.5 12.5-12.5 21.4v185.9c0 6.4 5.6 11.5 12.7 11.5 2.2 0 4.3-.5 6.1-1.4.2-.1.4-.2.5-.3L466 385.6l.3-.1c8.2-4.5 13.7-12.7 13.7-22.1V179.6c0-6.4-5.7-11.5-12.7-11.5z" fill="currentColor"></svg:path><svg:path d="M454.3 118.5L272.6 36.8S261.9 32 256 32c-5.9 0-16.5 4.8-16.5 4.8L57.6 118.5s-8 3.3-8 9.5c0 6.6 8.3 11.5 8.3 11.5l185.5 97.8c3.8 1.7 8.1 2.6 12.6 2.6 4.6 0 8.9-1 12.7-2.7l185.4-97.9s7.5-4 7.5-11.5c.1-6.3-7.3-9.3-7.3-9.3z" fill="currentColor"></svg:path><svg:path d="M227.5 261.2L49.8 169c-1.5-.6-3.3-1-5.1-1-7 0-12.7 5.1-12.7 11.5v183.8c0 9.4 5.5 17.6 13.7 22.1l.2.1 174.7 92.7c1.9 1.1 4.2 1.7 6.6 1.7 7 0 12.7-5.2 12.7-11.5V282.6c.1-8.9-4.9-16.8-12.4-21.4z" fill="currentColor"></svg:path>`,
})
export class IonMdCubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdCutIcon],svg[ion-md-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M203.1 158.3c5.2-11.2 8.1-23.5 8.1-36.7 0-49.5-40.1-89.6-89.6-89.6S32 72.1 32 121.6s40.1 89.6 89.6 89.6c13.2 0 25.5-2.9 36.7-8.1l52.9 52.9-52.9 52.9c-11.2-5.2-23.5-8.1-36.7-8.1-49.5 0-89.6 40.1-89.6 89.6S72.1 480 121.6 480s89.6-40.1 89.6-89.6c0-13.2-2.9-25.5-8.1-36.7l52.9-52.9 156.8 156.8H480v-22.4L203.1 158.3zm-81.5 8.1c-24.6 0-44.8-19.9-44.8-44.8S97 76.8 121.6 76.8s44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm0 268.8c-24.6 0-44.8-19.9-44.8-44.8s20.2-44.8 44.8-44.8 44.8 19.9 44.8 44.8-20.2 44.8-44.8 44.8zm134.4-168c-6.3 0-11.2-4.9-11.2-11.2 0-6.3 4.9-11.2 11.2-11.2 6.3 0 11.2 4.9 11.2 11.2 0 6.3-4.9 11.2-11.2 11.2zM412.8 54.4L278.4 188.8l44.8 44.8L480 76.8V54.4h-67.2z" fill="currentColor"></svg:path>`,
})
export class IonMdCutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdDesktopIcon],svg[ion-md-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.333 32H74.667C51.198 32 32 51.197 32 74.666v282.667C32 380.802 51.198 400 74.667 400h138.666l-42.666 48v32h170.666v-32l-42.666-48h138.666C460.802 400 480 380.802 480 357.333V74.666C480 51.197 460.802 32 437.333 32zm0 288H74.667V74.666h362.666V320z" fill="currentColor"></svg:path>`,
})
export class IonMdDesktopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdDiscIcon],svg[ion-md-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z" fill="currentColor"></svg:path>`,
})
export class IonMdDiscIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdDocumentIcon],svg[ion-md-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z" fill="currentColor"></svg:path>`,
})
export class IonMdDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdDoneAllIcon],svg[ion-md-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M387.581 139.712L356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109L247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.321 403l30.829-30.713L31.934 249.418 0 280.133z" fill="currentColor"></svg:path>`,
})
export class IonMdDoneAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdDownloadIcon],svg[ion-md-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z" fill="currentColor"></svg:path>`,
})
export class IonMdDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdEaselIcon],svg[ion-md-easel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 176h256v128H128z" fill="currentColor"></svg:path><svg:path d="M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192z" fill="currentColor"></svg:path><svg:path d="M80 464h57l22.5-64h-56.4z" fill="currentColor"></svg:path><svg:path d="M279.4 48h-46.8l-11.5 32h69.8z" fill="currentColor"></svg:path><svg:path d="M375 464h57l-23-64h-56.5z" fill="currentColor"></svg:path><svg:path d="M232 400h48v32h-48z" fill="currentColor"></svg:path>`,
})
export class IonMdEaselIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdEggIcon],svg[ion-md-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C185.6 32 80 165.2 80 288.9S150.4 480 256 480s176-67.4 176-191.1S326.4 32 256 32z" fill="currentColor"></svg:path>`,
})
export class IonMdEggIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdExitIcon],svg[ion-md-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M215.469 332.802l29.863 29.864L352 256 245.332 149.333l-29.863 29.865 55.469 55.469H64v42.666h205.864l-54.395 55.469zM405.334 64H106.666C83.198 64 64 83.198 64 106.666V192h42.666v-85.333h298.668v298.668H106.666V320H64v85.334C64 428.802 83.198 448 106.666 448h298.668C428.802 448 448 428.802 448 405.334V106.666C448 83.198 428.802 64 405.334 64z" fill="currentColor"></svg:path>`,
})
export class IonMdExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdExpandIcon],svg[ion-md-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396.795 396.8H320V448h128V320h-51.205z" fill="currentColor"></svg:path><svg:path d="M396.8 115.205V192H448V64H320v51.205z" fill="currentColor"></svg:path><svg:path d="M115.205 115.2H192V64H64v128h51.205z" fill="currentColor"></svg:path><svg:path d="M115.2 396.795V320H64v128h128v-51.205z" fill="currentColor"></svg:path>`,
})
export class IonMdExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdEyeIcon],svg[ion-md-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z" fill="currentColor"></svg:path>`,
})
export class IonMdEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdEyeOffIcon],svg[ion-md-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z" fill="currentColor"></svg:path>`,
})
export class IonMdEyeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFastforwardIcon],svg[ion-md-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z" fill="currentColor"></svg:path>`,
})
export class IonMdFastforwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFemaleIcon],svg[ion-md-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 176c0-79.5-64.5-144-144-144S112 96.5 112 176c0 71.4 51.9 130.6 120 142v50h-72v48h72v64h48v-64h72v-48h-72v-50c68.1-11.4 120-70.6 120-142zm-240 0c0-52.9 43.1-96 96-96s96 43.1 96 96-43.1 96-96 96-96-43.1-96-96z" fill="currentColor"></svg:path>`,
})
export class IonMdFemaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFilingIcon],svg[ion-md-filing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M449.2 208H423v-32l-14.4-48H383V96l-15-48H144l-15 48v32h-25.6L89 176v32H62.8L48 256v165.3c0 23.5 35.2 42.7 58.7 42.7h314.7c21.8 0 42.7-19.7 42.7-41V256l-14.9-48zM176 96h160v32H176V96zm-41 80h242v32H135v-32zm282 112h-82.6c-7.4 36.5-39.7 64-78.4 64s-71-27.5-78.4-64H95v-32h322v32z" fill="currentColor"></svg:path>`,
})
export class IonMdFilingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFilmIcon],svg[ion-md-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z" fill="currentColor"></svg:path>`,
})
export class IonMdFilmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFingerPrintIcon],svg[ion-md-finger-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M78.1 205.6c-2.4 0-4.9-.6-7.1-1.9-6.7-3.9-9-12.4-5.1-19.1 17.8-30 71.9-100.1 190.1-100.1 51.2 0 96.1 13.6 133.4 40.4 30.7 22 47.9 46.9 56.1 58.9 4.4 6.4 2.7 15-3.7 19.4-6.4 4.3-15.2 2.7-19.6-3.7-14.9-21.6-60.1-87.2-166.2-87.2-103.6 0-150.4 60.4-165.7 86.3-2.6 4.6-7.3 7-12.2 7z" fill="currentColor"></svg:path><svg:path d="M315.5 480c-1.2 0-2.3-.1-3.5-.4-85.7-21.5-117.7-108.1-119-111.7l-.2-.8c-.7-2.5-17.9-61.9 8.5-96.7 12.1-15.9 30.5-24 54.8-24 22.6 0 38.9 7.1 50.1 21.8 9.2 12 12.9 26.8 16.5 41.1 7.5 29.7 12.9 45.3 44.1 46.9 13.7.7 22.7-7.4 27.8-14.3 13.8-18.8 16.2-49.5 5.8-76.5-13.4-35-60.8-100.9-144.4-100.9-35.7 0-68.5 11.6-94.8 33.4-21.8 18.1-39.1 43.6-47.4 69.8-15.4 48.8 4.8 125.5 5 126.2 2 7.4-2.5 15.1-10 17-7.5 2-15.3-2.5-17.3-9.9-.9-3.5-22.5-85.3-4.7-141.7C106.2 198.2 166 136.6 256 136.6c41.6 0 80.9 14.3 113.7 41.3 25.4 21 46.2 49.2 57 77.4 13.8 36 10.1 76.4-9.4 102.8-13 17.6-31.5 26.8-52 25.8-53.4-2.7-63-40.4-70-67.9-7.2-28.2-11.8-41.8-39.3-41.8-15.1 0-25.7 4.2-32.3 12.9-9 11.9-9.7 30.5-8.7 44 1 14.1 4 25.5 4.7 27.8 2.2 5.6 30.8 76.5 99.3 93.7 7.6 1.9 12.1 9.5 10.2 16.9-1.7 6.3-7.4 10.5-13.7 10.5z" fill="currentColor"></svg:path><svg:path d="M205.5 473.6c-3.8 0-7.5-1.5-10.3-4.4-34.3-36.4-53.7-77.1-61-128v-.3c-4.1-33.7 1.9-81.4 31.3-114.2 21.7-24.2 52.2-36.5 90.5-36.5 45.3 0 80.9 21.3 103.1 61.5 16.1 29.2 19.3 58.3 19.4 59.5.8 7.7-4.9 14.5-12.6 15.3-7.7.8-14.7-4.8-15.5-12.4 0-.3-2.8-25.3-16.5-49.7-17.2-30.7-43.4-46.3-78-46.3-29.9 0-53.3 9.1-69.4 27.1-23.2 25.9-27.7 65.8-24.5 92.2 6.4 45 23.5 80.8 53.7 112.8 5.3 5.6 5 14.5-.7 19.7-2.6 2.4-6.1 3.7-9.5 3.7z" fill="currentColor"></svg:path><svg:path d="M363.5 433.5c-30 0-55.5-8.4-75.9-25.1-41-33.4-45.6-87.8-45.8-90.1-.6-7.7 5.2-14.4 13-15 7.8-.6 14.5 5.1 15.1 12.8.1.8 4.2 45.3 35.8 70.9 18.7 15.1 43.7 21.1 74.5 17.6 7.7-.9 14.7 4.6 15.6 12.3.9 7.7-4.7 14.6-12.4 15.4-6.8.8-13.5 1.2-19.9 1.2z" fill="currentColor"></svg:path><svg:path d="M387.2 62.6C375.5 54.9 334 32 256 32c-81.9 0-123.5 25.3-132.7 31.7-.6.4-1.2.8-1.7 1.3-.1.1-.2.1-.2.1-2.9 2.6-4.7 6.3-4.7 10.4 0 7.7 6.3 13.9 14.1 13.9 3.1 0 5.9-1 8.2-2.6l-.1.1c.4-.3 36.3-27 117.1-27s116.7 26.8 117.1 27l-.1-.1.2-.2c2.4 1.8 5.3 2.8 8.5 2.8 7.8 0 14.1-6.2 14.1-13.9 0-5.8-3.5-10.8-8.6-12.9z" fill="currentColor"></svg:path>`,
})
export class IonMdFingerPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFitnessIcon],svg[ion-md-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M434.3 315.5l29.7-29.7-29.7-29.8-74.3 74.3L181.7 152 256 77.7 226.3 48l-29.7 29.7L166.8 48l-44.5 44.5-29.8-29.7-29.7 29.7 29.7 29.7L48 166.8l29.7 29.7L48 226.3 77.7 256l74.3-74.3L330.3 360 256 434.3l29.7 29.7 29.7-29.7 29.7 29.7 44.5-44.5 29.7 29.7 29.7-29.7-29.7-29.7 44.5-44.5-29.5-29.8z" fill="currentColor"></svg:path>`,
})
export class IonMdFitnessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlagIcon],svg[ion-md-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396 83.2c-13.8 1.7-31.1 4.2-49.6 4.2-28.8 0-55-6.8-81.5-12.2C238 69.7 210.2 64 180.8 64c-58.6 0-78.5 12.1-80.6 13.4L96 80.3V448h48V269.8c9.7-1.2 21.9-2 36.9-2 27.3 0 52.8 10 79.8 15.5 27.6 5.6 56 11.5 86.9 11.5 18.4 0 34.6-2.4 48.4-4 7.5-.9 14-1.7 20-2.7V80.2c-5 1-12.5 2.1-20 3z" fill="currentColor"></svg:path>`,
})
export class IonMdFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlameIcon],svg[ion-md-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393.3 222.1l-.2 10.4c-.8 11.7-7.9 43.4-22.1 54.7 7-15.2 17.3-47.2 10.2-82.7C361.6 107 287.5 65.6 193 50l-17.2-2.2c39.5 47.2 56.1 81.7 49.7 116.8-2.3 12.6-10 23.4-14 31.6 0 0 2.4-12.9 2-28.7-.3-14.2-6.6-31-18-39.6 3.5 18.4-.8 33.5-9.1 47.7-24.7 42.2-85.4 57.8-90.4 135.8v3.8c0 53.7 25.6 99 68.7 125-6.8-12.3-12-35.2-5.7-60.2 4 23.7 14 36 24.9 51.8 8.2 11.7 19.1 19.3 33.1 24.9s31 7.2 47.9 7.2c55.8 0 91.4-18.1 119.1-50.5s32.1-68 32.1-106.4-8.5-60.9-22.8-84.9z" fill="currentColor"></svg:path>`,
})
export class IonMdFlameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlashIcon],svg[ion-md-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 48v224h64v192l128-256h-64l64-160H160z" fill="currentColor"></svg:path>`,
})
export class IonMdFlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlashOffIcon],svg[ion-md-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5z" fill="currentColor"></svg:path><svg:path d="M352 208h-64l64-160H160v40.3l168 167.6z" fill="currentColor"></svg:path>`,
})
export class IonMdFlashOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlashlightIcon],svg[ion-md-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 298l64 64v118h128V362l64-64V176l-255.2.4L128 298zM234.8 32h42.4v64h-42.4V32zM80 110.4L109.9 80l44.9 45.6-29.9 30.4L80 110.4zm277.1 15.2l45-45.5 29.9 30.4-44.9 45.5-30-30.4z" fill="currentColor"></svg:path>`,
})
export class IonMdFlashlightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlaskIcon],svg[ion-md-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M436.9 354.4L336 192V96h32V48H144v48h32v96L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6zM155.1 304l29.5-48h143.1l29.8 48H155.1z" fill="currentColor"></svg:path>`,
})
export class IonMdFlaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFlowerIcon],svg[ion-md-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.1 256c25.2-11.9 42.9-37.1 42.9-66.9 0-41-33.6-74.3-75-74.3-15.9 0-30.3 4.8-42.6 13.1l.6-5.6c0-41-33.6-74.3-75-74.3s-75 33.3-75 74.3l.6 5.6c-12-8.3-26.7-13.1-42.6-13.1-41.4 0-75 33.3-75 74.3 0 29.7 17.7 55 42.9 66.9C81.7 267.9 64 293.1 64 322.9c0 41 33.6 74.3 75 74.3 15.9 0 30.3-4.8 42.6-13.1l-.6 5.6c0 41 33.6 74.3 75 74.3s75-33.3 75-74.3l-.6-5.6c12 8.3 26.7 13.1 42.6 13.1 41.4 0 75-33.3 75-74.3 0-29.8-17.7-55-42.9-66.9zM256 330.3c-41.4 0-75-33.3-75-74.3s33.6-74.3 75-74.3 75 33.3 75 74.3-33.6 74.3-75 74.3z" fill="currentColor"></svg:path>`,
})
export class IonMdFlowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFolderIcon],svg[ion-md-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M213.338 96H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144H256.006l-42.668-48z" fill="currentColor"></svg:path>`,
})
export class IonMdFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFolderOpenIcon],svg[ion-md-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.334 144H256.006l-42.668-48H74.666C51.197 96 32 115.198 32 138.667v234.666C32 396.802 51.197 416 74.666 416h362.668C460.803 416 480 396.802 480 373.333V186.667C480 163.198 460.803 144 437.334 144zM448 373.333c0 5.782-4.885 10.667-10.666 10.667H74.666C68.884 384 64 379.115 64 373.333V176h373.334c5.781 0 10.666 4.885 10.666 10.667v186.666z" fill="currentColor"></svg:path>`,
})
export class IonMdFolderOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFootballIcon],svg[ion-md-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208S370.7 48 256 48zM127 238.2l39.2 17.9 17.1 66.9-15.6 29.3-57.2-.7C95.6 329 86.2 303.1 83 276.3l44-38.1zm217.3 114.1L328.7 323l17.1-67 39.1-17.8 44 38.1c-3.1 26.8-12.6 52.7-27.5 75.3l-57.1.7zm32.4-146.2l-43.6 19.6-61.1-51.6v-47.2l47.9-32.6c29.8 11.9 56.4 32.3 75.6 57.8l-18.8 54zM191.3 94.4l47.7 32.5v47.2l-61 51.5-43-19.6-18.7-53.6c19.3-26.1 45.1-46 75-58zM218.4 426c-.7-.2-1.3-.3-2-.5l-20.5-55.1 14.7-29.4h90.8l15 30.3-19.8 53.9c-1 .2-2 .5-3 .7-11.5 2.3-27 3.8-40.4 4.1-11.7-.1-23.4-1.5-34.8-4z" fill="currentColor"></svg:path>`,
})
export class IonMdFootballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdFunnelIcon],svg[ion-md-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z" fill="currentColor"></svg:path>`,
})
export class IonMdFunnelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGiftIcon],svg[ion-md-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 134.5h-45.8c2.3-6.6 3.8-13.9 3.8-21.3 0-35.4-28.1-63.2-63-63.2-22.1 0-41.2 10.7-52.5 28L256 92.3l-10.5-14.5C234.2 60.7 215.1 48 193 48c-34.9 0-63 29.8-63 65.2 0 7.5 1.5 14.7 3.8 21.3H88c-23.3 0-41.8 19-41.8 42.7L46 421.8c0 23.7 17.4 42.2 40.7 42.2h336.7c23.3 0 42.7-18.5 42.7-42.2V177.2c-.1-23.7-18.8-42.7-42.1-42.7zM320 91c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zm-128 0c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zM88 177.2h106.7L151 237.5l34 25 50-69.1.2-.2-.2 228.6H88V177.2zm336 244.6H277V193.4l50 69.1 34-25-43.7-60.4H424v244.7z" fill="currentColor"></svg:path>`,
})
export class IonMdGiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitBranchIcon],svg[ion-md-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdGitBranchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitCommitIcon],svg[ion-md-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 224h-99.8c-14.2-55.2-64.2-96-123.7-96S147 168.8 132.8 224H32v64h100.8c14.2 55.2 64.2 96 123.7 96s109.5-40.8 123.7-96H480v-64zM256.5 336c-44 0-79.8-35.9-79.8-80s35.8-80 79.8-80 79.8 35.9 79.8 80-35.8 80-79.8 80z" fill="currentColor"></svg:path>`,
})
export class IonMdGitCommitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitCompareIcon],svg[ion-md-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" fill="currentColor"></svg:path><svg:path d="M448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdGitCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitMergeIcon],svg[ion-md-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 224c-23.7 0-44.4 12.9-55.4 32-18.3-.5-52.4-4.1-75.5-18.1-32.3-19.4-64.6-53.1-87-90.5 15.7-11.7 26-30.3 26-51.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V244.2c18.7 19.4 39.1 36 60 48.6 38.8 23.4 87 26.9 108.6 27.3 11.1 19.1 31.7 31.9 55.4 31.9 35.3 0 64-28.7 64-64s-28.7-64-64-64zM88 96c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zm80 320c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40zm216-88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdGitMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitNetworkIcon],svg[ion-md-git-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 96c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.6 12.9 44.3 32 55.4v52.8l-96 48-96-48v-52.8c19.1-11.1 32-31.8 32-55.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.6 12.9 44.3 32 55.4v92.4l128 64v52.8c-19.1 11.1-32 31.8-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.6-12.9-44.3-32-55.4v-52.8l128-64v-92.4c19.1-11.1 32-31.8 32-55.4zM128 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm128 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdGitNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGitPullRequestIcon],svg[ion-md-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 376.6V206.8c0-46.4-3.7-70.8-22.1-94C374 87.7 348.9 77 310 77h-22V16l-96 96 96 96v-65h22c24.6 0 29 3.6 33.8 9.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM384 472c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path><svg:path d="M128 48c-35.3 0-64 28.7-64 64 0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4V167.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64zm0 424c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm0-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdGitPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGlassesIcon],svg[ion-md-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z" fill="currentColor"></svg:path>`,
})
export class IonMdGlassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGlobeIcon],svg[ion-md-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.124 48 48 141.125 48 256s93.124 208 208 208c114.875 0 208-93.125 208-208S370.875 48 256 48zm-21.549 384.999c-39.464-4.726-75.978-22.392-104.519-50.932C96.258 348.393 77.714 303.622 77.714 256c0-42.87 15.036-83.424 42.601-115.659.71 8.517 2.463 17.648 2.014 24.175-1.64 23.795-3.988 38.687 9.94 58.762 5.426 7.819 6.759 19.028 9.4 28.078 2.583 8.854 12.902 13.498 20.019 18.953 14.359 11.009 28.096 23.805 43.322 33.494 10.049 6.395 16.326 9.576 13.383 21.839-2.367 9.862-3.028 15.937-8.13 24.723-1.557 2.681 5.877 19.918 8.351 22.392 7.498 7.497 14.938 14.375 23.111 21.125 12.671 10.469-1.231 24.072-7.274 39.117zm147.616-50.932c-25.633 25.633-57.699 42.486-92.556 49.081 4.94-12.216 13.736-23.07 21.895-29.362 7.097-5.476 15.986-16.009 19.693-24.352 3.704-8.332 8.611-15.555 13.577-23.217 7.065-10.899-17.419-27.336-25.353-30.781-17.854-7.751-31.294-18.21-47.161-29.375-11.305-7.954-34.257 4.154-47.02-1.417-17.481-7.633-31.883-20.896-47.078-32.339-15.68-11.809-14.922-25.576-14.922-42.997 12.282.453 29.754-3.399 37.908 6.478 2.573 3.117 11.42 17.042 17.342 12.094 4.838-4.043-3.585-20.249-5.212-24.059-5.005-11.715 11.404-16.284 19.803-24.228 10.96-10.364 34.47-26.618 32.612-34.047s-23.524-28.477-36.249-25.193c-1.907.492-18.697 18.097-21.941 20.859.086-5.746.172-11.491.26-17.237.055-3.628-6.768-7.352-6.451-9.692.8-5.914 17.262-16.647 21.357-21.357-2.869-1.793-12.659-10.202-15.622-8.968-7.174 2.99-15.276 5.05-22.45 8.039 0-2.488-.302-4.825-.662-7.133a176.585 176.585 0 0145.31-13.152l14.084 5.66 9.944 11.801 9.924 10.233 8.675 2.795 13.779-12.995L282 87.929V79.59c27.25 3.958 52.984 14.124 75.522 29.8-4.032.361-8.463.954-13.462 1.59-2.065-1.22-4.714-1.774-6.965-2.623 6.531 14.042 13.343 27.89 20.264 41.746 7.393 14.801 23.793 30.677 26.673 46.301 3.394 18.416 1.039 35.144 2.896 56.811 1.788 20.865 23.524 44.572 23.524 44.572s10.037 3.419 18.384 2.228c-7.781 30.783-23.733 59.014-46.769 82.052z" fill="currentColor"></svg:path>`,
})
export class IonMdGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdGridIcon],svg[ion-md-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M409.6 64H102.4C81.3 64 64 81.3 64 102.4v307.2c0 21.1 17.3 38.4 38.4 38.4h307.2c21.1 0 38.4-17.3 38.4-38.4V102.4c0-21.1-17.3-38.4-38.4-38.4zM179.2 409.6h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8z" fill="currentColor"></svg:path>`,
})
export class IonMdGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHammerIcon],svg[ion-md-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M474.1 398.2L229.8 167.8s8.8-57.7 26.2-71.8c17.5-14.2 48-32 48-32V32c-32 0-58.8 8.3-96.9 27.3-38 18.9-66.8 47.8-74.4 55.4-7.6 7.6-18.1 19.5-24.7 28.9s-5.3 20.1-5.3 20.1l-19.7 17-4-4c-2.3-2.3-6.2-2.3-8.5 0l-36.8 36.8c-2.3 2.3-2.3 6.2 0 8.5l59.4 59.4c2.3 2.3 6.2 2.3 8.5 0l36.8-36.8c2.3-2.3 2.3-6.2 0-8.5l-10.3-10.3 14.6-14.3c6.8-3.7 25.4-8.9 39.1-5.1l214.9 267.3c8.1 8.2 20.3 8.2 28.5 0l46.8-47.1c10.3-8 10.3-22.3 2.1-28.4z" fill="currentColor"></svg:path>`,
})
export class IonMdHammerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHandIcon],svg[ion-md-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M450.679 273.5c-14.585-14.577-36.054-15.89-50.639-1.312l-41.687 41.664c-10.852 10.836-23.93 10.859-31.564 1.852-5.057-5.968-3.061-24.374-1.644-36.049l20.907-171.849c1.867-15.353-9.07-30.185-24.43-32.051-15.358-1.867-29.322 9.939-31.191 25.289L267.37 236.021c-1.205 3.358-3.79 3.938-4.081-.582L255.44 60c0-15.465-12.542-28-28.014-28-15.473 0-28.015 12.535-28.015 28l-.552 176.752c.146 2.04-1.604 2.624-1.92.294L172.016 99.077c-2.75-15.219-17.323-26.203-32.548-23.453-15.227 2.748-25.339 18.187-22.591 33.403l22.193 161.455c.023 2.872-.941 4.513-2.308.831l-33.109-88.517c-5.18-14.572-21.196-23.065-35.776-17.889-14.579 5.177-22.201 22.061-17.023 36.631l58.042 189.625c.303 1.046.624 2.085.953 3.118l.121.39c.011.031.025.058.035.088C126.079 444.233 172.57 480 227.427 480c35.116 0 71.591-12.378 99.357-33.672l.003-.002c29.99-18.051 126.071-121.347 126.071-121.347 14.587-14.577 12.408-36.899-2.179-51.479z" fill="currentColor"></svg:path>`,
})
export class IonMdHandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHappyIcon],svg[ion-md-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4zm72.8-187.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2zM256 370.4c48.883 0 89.436-30.164 106.081-72.801H149.919C166.564 340.236 207.117 370.4 256 370.4z" fill="currentColor"></svg:path>`,
})
export class IonMdHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHeadsetIcon],svg[ion-md-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" fill="currentColor"></svg:path>`,
})
export class IonMdHeadsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHeartIcon],svg[ion-md-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" fill="currentColor"></svg:path>`,
})
export class IonMdHeartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHeartDislikeIcon],svg[ion-md-heart-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1z" fill="currentColor"></svg:path><svg:path d="M464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z" fill="currentColor"></svg:path>`,
})
export class IonMdHeartDislikeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHeartEmptyIcon],svg[ion-md-heart-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z" fill="currentColor"></svg:path>`,
})
export class IonMdHeartEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHeartHalfIcon],svg[ion-md-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zM256 406V157.7l24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2C362.8 307 306.4 359.7 256 406z" fill="currentColor"></svg:path>`,
})
export class IonMdHeartHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHelpIcon],svg[ion-md-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M289 448h-66v-65h66v65zm-1-98h-64c0-101 96-95.1 96-159 0-35.2-28.8-63.4-64-63.4S192 158 192 192h-64c0-71 57.3-128 128-128s128 56.4 128 127c0 79.9-96 89-96 159z" fill="currentColor"></svg:path>`,
})
export class IonMdHelpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHelpBuoyIcon],svg[ion-md-help-buoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm61 356l-12.2-39.6c13-5.8 24.9-14 35.3-24.4 10.4-10.4 18.6-22.3 24.4-35.3l39.5 12.1c-7.9 19.3-19.7 37-34.9 52.2-15.1 15.3-32.8 27.1-52.1 35zM195 108l12.2 39.6c-13 5.8-24.9 14-35.3 24.4-10.4 10.4-18.6 22.3-24.4 35.3L108 195.2c7.9-19.3 19.7-37 34.9-52.2 15.1-15.3 32.8-27.1 52.1-35zm61 84c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm113.1-49.1c15.2 15.2 26.9 32.9 34.9 52.1l-39.5 12.2c-5.9-13-14-24.9-24.4-35.3-10.4-10.4-22.3-18.6-35.3-24.4l12.1-39.5c19.3 7.9 37 19.7 52.2 34.9zM142.9 369.1c-15.2-15.1-27-32.8-34.9-52.1l39.5-12.2c5.9 13 14 24.9 24.4 35.3 10.4 10.4 22.3 18.6 35.3 24.4L195.1 404c-19.3-7.9-37-19.7-52.2-34.9z" fill="currentColor"></svg:path>`,
})
export class IonMdHelpBuoyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHelpCircleIcon],svg[ion-md-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 333h-42v-42h42v42zm-.2-63h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z" fill="currentColor"></svg:path>`,
})
export class IonMdHelpCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHelpCircleOutlineIcon],svg[ion-md-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M235 339h42v42h-42z" fill="currentColor"></svg:path><svg:path d="M276.8 318h-41.6c0-67 62.4-62.2 62.4-103.8 0-22.9-18.7-41.7-41.6-41.7S214.4 192 214.4 214h-41.6c0-46 37.2-83 83.2-83s83.2 37.1 83.2 83.1c0 52-62.4 57.9-62.4 103.9z" fill="currentColor"></svg:path>`,
})
export class IonMdHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHomeIcon],svg[ion-md-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" fill="currentColor"></svg:path>`,
})
export class IonMdHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdHourglassIcon],svg[ion-md-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 48v122.8h.2l-.2.2 85.3 85-85.3 85.2.2.2h-.2V464h256V341.4h-.2l.2-.2-85.3-85.2 85.3-85-.2-.2h.2V48H128zm213.3 303.9v71.5H170.7v-71.5l85.3-85.2 85.3 85.2zM256 245.4l-85.3-85.2V87.6h170.7v72.5L256 245.4z" fill="currentColor"></svg:path>`,
})
export class IonMdHourglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdIceCreamIcon],svg[ion-md-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128.1 256l128 224 128-224z" fill="currentColor"></svg:path><svg:path d="M392 161c3-9 4.7-22.7 4.7-32.9 0-53.1-43-96.1-96.1-96.1-31.4 0-59.2 15-76.8 38.3 0 0-9.1 14-10.8 29l-3.4-1c-2.3-9-3.7-20 1.6-31.5-7.4-2.5-9.4-2.8-17.6-2.8-41.7 0-75.6 33.8-75.6 75.6 0 6.3.8 15.5 2.3 21.4-13.9 3.5-24.3 16.1-24.3 31 0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32 0-14.8-10.2-27.4-24-31z" fill="currentColor"></svg:path>`,
})
export class IonMdIceCreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdImageIcon],svg[ion-md-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 405.333V106.667C448 83.198 428.802 64 405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333zM181.333 288l53.334 64 74.666-96 96 128H106.667l74.666-96z" fill="currentColor"></svg:path>`,
})
export class IonMdImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdImagesIcon],svg[ion-md-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M457.6 140.2l-82.5-4-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.5 88.4c-11.8 1-20.3 10.5-19.4 21.7l21.2 235.8c1 11.3 11.2 19.2 22.9 18.3l15-1.2-2.4 45.8c-.6 12.6 9.2 22.8 22.4 23.5L441.3 448c13.2.6 24.1-8.6 24.8-21.2L480 163.5c.6-12.5-9.3-22.7-22.4-23.3zm-354.9 5.3l-7.1 134.8L78.1 305 62 127v-.5-.5c1-5 4.4-9 9.6-9.4l261-21.4c5.2-.4 9.7 3 10.5 7.9 0 .2.3.2.3.4 0 .1.3.2.3.4l2.7 30.8-219-10.5c-13.2-.4-24.1 8.8-24.7 21.3zm334 236.9l-84.8-99.5-37.4 34.3-69.2-80.8-122.7 130.7L133 168v-.4c1-5.4 6.2-9.3 11.9-9l291.2 14c5.8.3 10.3 4.7 10.4 10.2 0 .2.3.3.3.5l-10.1 199.1z" fill="currentColor"></svg:path><svg:path d="M384 256c17.6 0 32-14.4 32-32s-14.3-32-32-32c-17.6 0-32 14.3-32 32s14.3 32 32 32z" fill="currentColor"></svg:path>`,
})
export class IonMdImagesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdInfiniteIcon],svg[ion-md-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M434.7 188c-18.8-18-43.8-28-70.5-28-26.6 0-51.6 9.9-70.4 27.9l-17.6 15.9 33.1 32.1 17-15.4.1-.1c10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9 10 9.6 15.4 22.3 15.4 35.8 0 13.5-5.5 26.1-15.4 35.6-10.1 9.6-23.5 15-37.7 15s-27.6-5.3-37.7-14.9L218.2 188c-18.9-18-43.9-28-70.4-28-26.7 0-51.7 9.9-70.5 28C58.4 206.1 48 230.2 48 256c0 25.7 10.4 49.9 29.3 68 18.8 18 43.8 28 70.5 28 26.7 0 51.7-9.9 70.4-28l37.8-36.1 37.7 36.1c18.9 18 43.9 28 70.4 28 26.7 0 51.7-9.9 70.4-27.9 19-18.1 29.4-42.2 29.4-68 .1-25.8-10.3-50-29.2-68.1zM185.5 291.7c-10.1 9.6-23.5 15-37.7 15-14.2 0-27.6-5.3-37.7-14.9-10-9.6-15.4-22.3-15.4-35.8 0-13.5 5.5-26.1 15.4-35.6 10.1-9.6 23.5-15 37.7-15 14.2 0 27.6 5.3 37.7 14.9l37.4 35.8-37.4 35.6z" fill="currentColor"></svg:path>`,
})
export class IonMdInfiniteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdInformationIcon],svg[ion-md-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232 235h48v137h-48z" fill="currentColor"></svg:path><svg:path d="M232 140h48v48h-48z" fill="currentColor"></svg:path>`,
})
export class IonMdInformationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdInformationCircleIcon],svg[ion-md-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z" fill="currentColor"></svg:path>`,
})
export class IonMdInformationCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdInformationCircleOutlineIcon],svg[ion-md-information-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M277 360h-42V235h42v125zm0-166h-42v-42h42v42z" fill="currentColor"></svg:path>`,
})
export class IonMdInformationCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdJetIcon],svg[ion-md-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 32s-23.4-.7-59.3 27.1C404 72 244.9 186.8 244.9 186.8l-168.8-4.2L32 222l109.8 55.2-8.6 10.8-87.9.1-7.2 40.5 63.1 48.7-26.6 59.8 60-26.4 48.7 63.1 40.5-7.2.1-87.8 10.9-8.5L290.1 480l39.3-44.1-4.2-168.7S440.1 108.2 453 91.6C480.7 55.5 480 32 480 32z" fill="currentColor"></svg:path>`,
})
export class IonMdJetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdJournalIcon],svg[ion-md-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M117.3 42.7c-17.6 0-32 14.4-32 32v362.7c0 17.6 14.4 32 32 32H320V42.7H117.3z" fill="currentColor"></svg:path><svg:path d="M384.7 42.7H368v426.7h16.7c23.1 0 42-18.9 42-42V84.7c0-23.1-18.9-42-42-42z" fill="currentColor"></svg:path>`,
})
export class IonMdJournalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdKeyIcon],svg[ion-md-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M249.2 224c-14.2-40.2-55.1-72-100.2-72-57.2 0-101 46.8-101 104s45.8 104 103 104c45.1 0 84.1-31.8 98.2-72H352v64h69.1v-64H464v-64H249.2zm-97.6 66.5c-19 0-34.5-15.5-34.5-34.5s15.5-34.5 34.5-34.5 34.5 15.5 34.5 34.5-15.5 34.5-34.5 34.5z" fill="currentColor"></svg:path>`,
})
export class IonMdKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdKeypadIcon],svg[ion-md-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 398.5c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.3-18.2-40.7-40.5-40.7zM136.5 32C114.2 32 96 50.3 96 72.7s18.2 40.7 40.5 40.7S177 95.1 177 72.7 158.8 32 136.5 32zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm0 122.2c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm239-162.9c22.3 0 40.5-18.3 40.5-40.7S397.8 32 375.5 32 335 50.3 335 72.7s18.2 40.8 40.5 40.8zM256 276.4c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm119.5 0c-22.3 0-40.5 18.3-40.5 40.7 0 22.4 18.2 40.7 40.5 40.7s40.5-18.3 40.5-40.7c0-22.4-18.2-40.7-40.5-40.7zm0-122.2c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zm-119.5 0c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7-18.2-40.7-40.5-40.7zM256 32c-22.3 0-40.5 18.3-40.5 40.7s18.2 40.7 40.5 40.7 40.5-18.3 40.5-40.7S278.3 32 256 32z" fill="currentColor"></svg:path>`,
})
export class IonMdKeypadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLaptopIcon],svg[ion-md-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.334 416C460.803 416 480 396.803 480 373.334V106.668C480 83.199 460.803 64 437.334 64H74.666C51.197 64 32 83.199 32 106.668v266.666C32 396.803 51.197 416 74.666 416H0c0 23.469 64 32 96 32h320c32 0 96-8.531 96-32h-74.666zM74.666 106.668h362.668v271.998H74.666V106.668zM256 434.666c-11.729 0-21.333-9.604-21.333-21.334 0-11.729 9.604-21.332 21.333-21.332s21.333 9.604 21.333 21.332c0 11.73-9.604 21.334-21.333 21.334z" fill="currentColor"></svg:path>`,
})
export class IonMdLaptopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLeafIcon],svg[ion-md-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 287.6C416 120.9 256 32 256 32S96 120.9 96 287.6c0 118.8 81.3 140.5 128 143.2V480h64v-49.3c46.7-2.6 128-24.3 128-143.1z" fill="currentColor"></svg:path>`,
})
export class IonMdLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLinkIcon],svg[ion-md-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z" fill="currentColor"></svg:path>`,
})
export class IonMdLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdListIcon],svg[ion-md-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 280h256v48H80z" fill="currentColor"></svg:path><svg:path d="M80 184h320v48H80z" fill="currentColor"></svg:path><svg:path d="M80 88h352v48H80z" fill="currentColor"></svg:path><svg:g><svg:path d="M80 376h288v48H80z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdListBoxIcon],svg[ion-md-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M408 64H104c-22.091 0-40 17.908-40 40v304c0 22.092 17.909 40 40 40h304c22.092 0 40-17.908 40-40V104c0-22.092-17.908-40-40-40zM304 368H144v-48h160v48zm64-88H144v-48h224v48zm0-88H144v-48h224v48z" fill="currentColor"></svg:path>`,
})
export class IonMdListBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLocateIcon],svg[ion-md-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 176c-44.004 0-80.001 36-80.001 80 0 44.004 35.997 80 80.001 80 44.005 0 79.999-35.996 79.999-80 0-44-35.994-80-79.999-80zm190.938 58.667c-9.605-88.531-81.074-160-169.605-169.599V32h-42.666v33.067c-88.531 9.599-160 81.068-169.604 169.599H32v42.667h33.062c9.604 88.531 81.072 160 169.604 169.604V480h42.666v-33.062c88.531-9.604 160-81.073 169.605-169.604H480v-42.667h-33.062zM256 405.333c-82.137 0-149.334-67.198-149.334-149.333 0-82.136 67.197-149.333 149.334-149.333 82.135 0 149.332 67.198 149.332 149.333S338.135 405.333 256 405.333z" fill="currentColor"></svg:path>`,
})
export class IonMdLocateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLockIcon],svg[ion-md-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z" fill="currentColor"></svg:path>`,
})
export class IonMdLockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLogInIcon],svg[ion-md-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-42.9 0-84.2 13-119.2 37.5-34.2 24-60.2 57.2-75.1 96.1L58 192h45.7l1.9-5c8.2-17.8 19.4-33.9 33.5-48 31.2-31.2 72.7-48.4 116.9-48.4s85.7 17.2 116.9 48.4c31.2 31.2 48.4 72.7 48.4 116.9 0 44.1-17.2 85.7-48.4 116.9-31.2 31.2-72.7 48.4-116.9 48.4-44.1 0-85.6-17.2-116.9-48.4-14-14-25.3-30.1-33.5-47.9l-1.9-5H58l3.6 10.4c14.9 38.9 40.9 72.1 75.1 96.1C171.8 451.1 213 464 256 464c114.7 0 208-93.3 208-208S370.7 48 256 48z" fill="currentColor"></svg:path><svg:path d="M48 277.4h189.7l-43.6 44.7L224 352l96-96-96-96-31 29.9 44.7 44.7H48v42.8z" fill="currentColor"></svg:path>`,
})
export class IonMdLogInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdLogOutIcon],svg[ion-md-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z" fill="currentColor"></svg:path><svg:path d="M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2z" fill="currentColor"></svg:path><svg:path d="M448.004 256.847l-.849-.848.849-.849.848.849z" fill="currentColor"></svg:path>`,
})
export class IonMdLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMagnetIcon],svg[ion-md-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.6 98.8C352.1 65.8 308 48.2 256 48c-51.9.2-96 17.8-127.5 50.8C96.8 132 80 178.8 80 234c0 43.5 1.8 69.2 12.9 115.8 0 0 22.7 75.7 35.5 104.1 3.5 7.8 7.4 11.8 15.5 9.3 6.4-2 46.8-17.9 54.7-21.6 7.9-3.6 11.6-8.6 8.9-15.2-3.8-9.2-33.9-95.6-33.9-95.6-8.4-36.3-11.6-53.9-11.6-94.3 0-28.2 9.8-54.1 27.7-72.9 17.5-18.3 41-28.4 66.3-28.4s48.8 10.1 66.3 28.4c17.9 18.8 27.7 44.6 27.7 72.8 0 40-3.2 64-11.7 94.4s-32.2 90.1-33.9 95.6c-1.7 5.6 2.1 12.5 8.9 15.2 6.8 2.7 49.3 19.6 54.7 21.6 5.4 2 10.6.6 14.5-7.7 4-8.3 24.6-61.4 36.5-105.7 12-44.3 13-72.3 13-115.8 0-55.2-16.7-101.9-48.4-135.2zM173.1 419.7l-22.9 9.6c-6.9-16.3-17.2-43.2-25.9-77.2l22-6.5 26.8 74.1zm188.6 9.6l-22.9-9.6c7.2-16.6 19.1-45.1 26.6-74.1l22 6.5c-8.4 33.9-18.7 60.9-25.7 77.2z" fill="currentColor"></svg:path>`,
})
export class IonMdMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMailIcon],svg[ion-md-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" fill="currentColor"></svg:path>`,
})
export class IonMdMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMailOpenIcon],svg[ion-md-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 201.667c0-14.933-7.469-28.803-20.271-36.266L256 64 52.271 165.401C40.531 172.864 32 186.734 32 201.667v203.666C32 428.802 51.197 448 74.666 448h362.668C460.803 448 480 428.802 480 405.333V201.667zM256 304L84.631 192 256 106.667 427.369 192 256 304z" fill="currentColor"></svg:path>`,
})
export class IonMdMailOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMailUnreadIcon],svg[ion-md-mail-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="432" cy="128" r="64" fill="currentColor"></svg:circle><svg:path d="M382.9 203.4L256 288 80 170.7V128l176 117.3 101.1-67.4c-9.5-14.3-15.1-31.5-15.1-49.9 0-17.6 5.1-34.1 13.9-48H74.7C51.2 80 32 99.2 32 122.7v266.7c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V204.1c-13.9 8.8-30.4 13.9-48 13.9-18.2 0-35.1-5.4-49.2-14.6z" fill="currentColor"></svg:path>`,
})
export class IonMdMailUnreadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMaleIcon],svg[ion-md-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 48H288v48h94.1L275.4 202.6C251.9 185.9 223.1 176 192 176c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144c0-31.1-9.9-59.9-26.6-83.4L416 129.9V224h48V48h-48zM192 416c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z" fill="currentColor"></svg:path>`,
})
export class IonMdMaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdManIcon],svg[ion-md-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 106.6c20.6.1 37.3-16.6 37.3-37.3 0-20.6-16.7-37.3-37.3-37.3-20.6 0-37.3 16.7-37.3 37.3 0 20.6 16.7 37.3 37.3 37.3z" fill="currentColor"></svg:path><svg:path d="M293.4 115h-74.8c-28.2 0-46.6 24.8-46.6 48.4V277c0 22 31 22 31 0V172h6v285.6c0 30.4 42 29.4 43 0V293h8v164.7c1.7 31.2 43 28.2 43-.1V172h5v105c0 22 32 22 32 0V163.4c0-23.5-18.5-48.4-46.6-48.4z" fill="currentColor"></svg:path>`,
})
export class IonMdManIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMapIcon],svg[ion-md-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M437.333 64c-2.176 0-4.396 1.369-9.176 3.207L320 108.802 192 64 71.469 104.531C67.197 105.604 64 109.864 64 115.197v322.136C64 443.729 68.271 448 74.666 448c1.828 0 6.505-2.33 9.087-3.319L192 403.197 320 448l120.531-40.531c4.271-1.073 7.469-5.334 7.469-10.667V74.666C448 68.271 443.729 64 437.333 64zM320 405.333l-128-44.802V106.666l128 44.803v253.864z" fill="currentColor"></svg:path>`,
})
export class IonMdMapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMedalIcon],svg[ion-md-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M273.5 152.1H48l54.1-103.9h240.7z" fill="currentColor"></svg:path><svg:circle cx="256.2" cy="377.2" r="86.6" fill="currentColor"></svg:circle><svg:path d="M348.9 299.1l115.1-147-69.3-103.9L256.4 256c32.3 0 62.7 12.7 85.5 35.5 2.5 2.5 4.8 5 7 7.6z" fill="currentColor"></svg:path><svg:path d="M205.8 266.6L152.3 186H48.4l90.1 161.5c5.2-21.2 16.1-40.6 32-56.4 10.4-10.3 22.3-18.6 35.3-24.5z" fill="currentColor"></svg:path>`,
})
export class IonMdMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMedicalIcon],svg[ion-md-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2z" fill="currentColor"></svg:path>`,
})
export class IonMdMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMedkitIcon],svg[ion-md-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-152-40h112v40H200v-40zm136 224h-56v56h-48v-56h-56v-48h56v-56h48v56h56v48z" fill="currentColor"></svg:path>`,
})
export class IonMdMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMegaphoneIcon],svg[ion-md-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M382.1 143.4l-23.1 23c14.7 14.7 23.9 35.2 23.9 57.6s-9.2 42.9-23.9 57.6l23.1 23.1c20.6-20.6 33.4-49.2 33.4-80.6s-12.8-60.1-33.4-80.7z" fill="currentColor"></svg:path><svg:path d="M428.2 99l-22.7 22.7c26.1 26.1 42.3 62.4 42.3 102.3 0 39.8-16.1 76.1-42.3 102.3l22.7 22.7c31.9-32.1 51.8-76.3 51.8-125s-19.8-92.9-51.8-125z" fill="currentColor"></svg:path><svg:path d="M320 184.1V80h-32l-96 80H64l-32 16v112l32 16 80 128h48l-30-128h30l96 64h32V263.9c18.4-1.7 32-18.9 32-39.9s-13.6-38.2-32-39.9z" fill="currentColor"></svg:path>`,
})
export class IonMdMegaphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMenuIcon],svg[ion-md-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" fill="currentColor"></svg:path>`,
})
export class IonMdMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMicIcon],svg[ion-md-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 320c37.712 0 68.571-30.924 68.571-68.714V100.714C324.571 62.924 293.712 32 256 32s-68.571 30.924-68.571 68.714v150.572c0 37.79 30.859 68.714 68.571 68.714zm121.139-75.452c0 68.714-58.282 116.815-121.139 116.815s-121.139-48.102-121.139-116.815H96c0 77.873 61.719 143.153 137.144 153.465V480h45.713v-81.987C354.281 386.561 416 322.421 416 244.548h-38.861z" fill="currentColor"></svg:path>`,
})
export class IonMdMicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMicOffIcon],svg[ion-md-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M367.951 354.654l-26.616-26.562-9.568-9.548-4.698-4.706L187 174.041v.346L76.112 63.531 51.921 87.572 187 222.47v28.816c0 37.79 31.121 68.714 68.91 68.714a68.6 68.6 0 0024.565-4.545l32.389 32.274c-17.333 8.793-36.812 13.86-56.782 13.86-62.986 0-121.365-48.59-121.365-116.59H95.773C95.773 322 158 387.701 233 398.013V480h46v-81.987c22-3.352 43.066-11.222 61.627-22.622l95.278 95.078 24.033-24-33.847-33.785-58.216-57.959 58.224 57.959-58.148-58.03z" fill="currentColor"></svg:path><svg:path d="M325 251.286V100.714C325 62.924 293.791 32 256 32s-69 30.924-69 68.714v25.244l137.109 136.968c.67-3.791.891-7.679.891-11.64z" fill="currentColor"></svg:path><svg:path d="M416.439 245h-38.941c0 20.496-5.498 39.676-14.931 56.197l27.572 27.516c16.523-24.11 26.3-52.787 26.3-83.713z" fill="currentColor"></svg:path><svg:path d="M459.999 446.427l-33.897-33.743 33.855 33.785z" fill="currentColor"></svg:path>`,
})
export class IonMdMicOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMicrophoneIcon],svg[ion-md-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 112V84.4c0-29-24.5-52.4-54.8-52.4H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-56v-37h56v-43h-56v-37h56v-43h-56v-37h56z" fill="currentColor"></svg:path>`,
})
export class IonMdMicrophoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMoonIcon],svg[ion-md-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z" fill="currentColor"></svg:path>`,
})
export class IonMdMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMoreIcon],svg[ion-md-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z" fill="currentColor"></svg:path>`,
})
export class IonMdMoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMoveIcon],svg[ion-md-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 256l-96-96v64h-96v-96h64l-96-96-96 96h64v96h-96v-64l-96 96 96 96v-64h96v96h-64l96 96 96-96h-64v-96h96v64z" fill="currentColor"></svg:path>`,
})
export class IonMdMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMusicalNoteIcon],svg[ion-md-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64v225.1c-12.6-7.3-27.1-11.7-42.7-11.7-47.1 0-85.3 38.2-85.3 85.3s38.2 85.3 85.3 85.3 85.3-38.2 85.3-85.3V149.3H384V64H256z" fill="currentColor"></svg:path>`,
})
export class IonMdMusicalNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdMusicalNotesIcon],svg[ion-md-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 64v257.6c-8.2-2.7-17.2-4.1-26.6-4.1-38.3 0-69.4 27.1-69.4 65.4 0 38.3 31.1 65.1 69.4 65.1 38.3 0 69.6-28.2 69.6-69.1V200h202v121.6c-8.2-2.7-17.2-4.1-26.6-4.1-38.3 0-69.4 27.1-69.4 65.4 0 38.3 31.1 65.1 69.4 65.1 38.3 0 69.6-28.2 69.6-69.1V64H160zm245 96H203v-53h202v53z" fill="currentColor"></svg:path>`,
})
export class IonMdMusicalNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNavigateIcon],svg[ion-md-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64L96 433.062 110.938 448 256 384l145.062 64L416 433.062z" fill="currentColor"></svg:path>`,
})
export class IonMdNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNotificationsIcon],svg[ion-md-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c22.779 0 41.411-18.719 41.411-41.6h-82.823c0 22.881 18.633 41.6 41.412 41.6zm134.589-124.8V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2s-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNotificationsOffIcon],svg[ion-md-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 463.656c22.814 0 41.475-18.656 41.475-41.656h-82.95c0 23 18.661 41.656 41.475 41.656z" fill="currentColor"></svg:path><svg:path d="M131.083 107.172l.053.074L98.09 74.277 74.004 98.383l63.042 63.153C126.888 180.521 121 202.196 121 225.07v114.555l-41 41.656V402h297.743l36.182 36.33 24.079-24.301L425.9 402h.316L131.083 107.172z" fill="currentColor"></svg:path><svg:path d="M391 225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243-17.628 0-31 13.537-31 31.243v14.578c-15 3.438-29.048 9.501-41.75 17.663L391 319.355V225.07z" fill="currentColor"></svg:path>`,
})
export class IonMdNotificationsOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNotificationsOutlineIcon],svg[ion-md-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z" fill="currentColor"></svg:path>`,
})
export class IonMdNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNuclearIcon],svg[ion-md-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M336 272c0-29.8-16.3-55.7-40.4-69.5l73.1-124.1C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l71.6 125C191.4 217.6 176 243 176 272H32c0 83.3 46.9 153.4 114.4 192l70.1-122.4c11.7 6.6 25.1 10.4 39.5 10.4 14.3 0 27.7-3.8 39.3-10.3L365.6 464C433.1 425.4 480 355.3 480 272H336z" fill="currentColor"></svg:path>`,
})
export class IonMdNuclearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdNutritionIcon],svg[ion-md-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M357.2 235.6L274.7 153h-.8c-8.1-6-18.2-10.3-28.4-10.3-13.7 0-26.1 6.3-34.3 16.3h-.6L53 414.1v.8c-3 6.2-5 13.3-5 20.8 0 24.4 19.7 44.3 44.3 44.3 9.4 0 18-2.9 27.4-9.1l232.9-168.1c10.9-8.3 17.4-21.6 17.4-36 0-12-4.7-23.2-12.8-31.2z" fill="currentColor"></svg:path><svg:path d="M464 145.1l-29.2-49-36.6 20.3 31.5-55.9L380.6 32l-67.3 127.8 41.3 41.4z" fill="currentColor"></svg:path>`,
})
export class IonMdNutritionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdOpenIcon],svg[ion-md-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" fill="currentColor"></svg:path>`,
})
export class IonMdOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdOptionsIcon],svg[ion-md-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 384h272v32H32z" fill="currentColor"></svg:path><svg:path d="M400 384h80v32h-80z" fill="currentColor"></svg:path><svg:path d="M384 447.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path><svg:g><svg:path d="M32 240h80v32H32z" fill="currentColor"></svg:path><svg:path d="M208 240h272v32H208z" fill="currentColor"></svg:path><svg:path d="M192 303.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path></svg:g><svg:g><svg:path d="M32 96h272v32H32z" fill="currentColor"></svg:path><svg:path d="M400 96h80v32h-80z" fill="currentColor"></svg:path><svg:path d="M384 159.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdOutletIcon],svg[ion-md-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.5 32H142.4C81.5 32 32 82.6 32 144.6v222.8c0 62 49.5 112.6 110.4 112.6h227.2c60.9 0 110.5-50.6 110.5-112.6V144.6C480 82.6 430.5 32 369.5 32zM175 251v.7c0 10.9-9.1 20.4-19.9 20.4h-23.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h23.3c10.9 0 19.9 9.8 19.9 20.8V251zm122 147.4c0 11.4-8.9 17.6-20.1 17.6h-41.8c-11.2 0-20.1-8.1-20.1-19.6v-29.3c0-23.3 18.1-42.3 41-42.3s41 19 41 42.3v31.3zM400 251v.7c0 10.9-9.1 20.4-19.9 20.4h-24.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h24.3c10.8 0 19.9 9.8 19.9 20.8V251z" fill="currentColor"></svg:path>`,
})
export class IonMdOutletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPaperIcon],svg[ion-md-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 64H192c-8.8 0-16 7.7-16 16.5V112H74c-23.1 0-42 18.9-42 42v207.5c0 47.6 39 86.5 86 86.5h279.7c45.1 0 82.3-36.9 82.3-82V80c0-8.8-7.2-16-16-16zm-288 80v192h-42V163.2c0-6.8-.8-13.3-3.3-19.2H176zm-17 255.4C148 410 133.2 416 118.5 416c-14.5 0-28.1-5.7-38.5-16-10.3-10.3-16-24-16-38.5V163.2c0-10.6 8.4-19.2 19-19.2s19 8.6 19 19.2V352c0 8.8 7.2 16 16 16h57.5c-1.5 11.6-7.2 22.6-16.5 31.4zM448 366c0 13.3-5.4 25.8-14.9 35.3-9.5 9.5-22.2 14.7-35.4 14.7H187.3c12.8-14.9 20.7-33.9 20.7-54.5V97h240v269z" fill="currentColor"></svg:path><svg:path d="M248 136h160v56H248z" fill="currentColor"></svg:path><svg:path d="M248 224h160v32H248z" fill="currentColor"></svg:path><svg:path d="M248 288h160v32H248z" fill="currentColor"></svg:path><svg:path d="M408 352H248s0 32-8 32h148.7c19.3 0 19.3-21 19.3-32z" fill="currentColor"></svg:path>`,
})
export class IonMdPaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPaperPlaneIcon],svg[ion-md-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z" fill="currentColor"></svg:path>`,
})
export class IonMdPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPartlySunnyIcon],svg[ion-md-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M248.03 116.81l24.679-24.678 19.233 19.234-24.678 24.677z" fill="currentColor"></svg:path><svg:path d="M176 125.7c-45.3 0-82.3 37-82.3 82.3 0 17.5 5.5 33.7 14.9 47 15.3-13 33.9-22.6 54.7-27.6l13.2-16.6c13.6-17.1 30.7-30.2 50.8-38.9 6.1-2.6 12.4-4.8 19-6.6-14.5-23.7-40.6-39.6-70.3-39.6z" fill="currentColor"></svg:path><svg:path d="M162 64h28v41h-28z" fill="currentColor"></svg:path><svg:path d="M32 194h41v28H32z" fill="currentColor"></svg:path><svg:path d="M81.6 276.8l-.8-.8-24.7 24.7 19.2 19.2 24.7-24.7z" fill="currentColor"></svg:path><svg:path d="M79.289 92.13l24.678 24.678-19.233 19.233-24.678-24.678z" fill="currentColor"></svg:path><svg:path d="M405.6 288.6C394.7 233.4 346.2 192 288 192c-34 0-65.1 11.9-86.5 38.8 29.4 2.2 56.7 13 77.8 33.9 15.6 15.6 26.6 34.6 32.1 55.3h-28.7c-13.1-37.3-48-64-90.6-64-5.1 0-12.3.6-17.7 1.7C128.6 267.1 96 305 96 352c0 53 43 96 96 96h208c44.2 0 80-35.8 80-80 0-42.2-32.8-76.5-74.4-79.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPauseIcon],svg[ion-md-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" fill="currentColor"></svg:path>`,
})
export class IonMdPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPawIcon],svg[ion-md-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M459.5 165.9c-4.7-10.5-12.7-18.1-23.1-22-4.8-1.7-9.7-2.6-14.8-2.6-21.7 0-43.7 16.7-54.9 41.6-13.8 30.9-5.8 61 18.6 70.3 4.9 1.8 10.1 2.8 15.6 2.8 22.1 0 44.6-15.3 55.9-38.1 8.5-17.5 9.5-36.8 2.7-52z" fill="currentColor"></svg:path><svg:path d="M145.3 182.8c-11.1-24.9-33.2-41.6-54.9-41.6-5.1 0-10.1.9-14.8 2.6-10.4 3.9-18.3 11.5-23.1 22-6.9 15.2-5.9 34.6 2.7 51.9 11.3 22.8 33.8 38.1 55.9 38.1 5.4 0 10.7-.9 15.6-2.8 24.4-9.1 32.4-39.3 18.6-70.2z" fill="currentColor"></svg:path><svg:path d="M193.5 179.4c2 .1 4 0 6-.2 11.7-.9 22.3-5.9 30.6-14.3 13.4-13.6 17.1-34.9 14.3-56.8-4.3-33.7-25.8-59-54.8-60.1 0 0-4.1 0-6.2.2-12.8 1.1-24.4 6.5-33.5 15.9-13.3 13.6-19.7 33.7-17.1 53.8 4.3 33.4 30.9 60.4 60.7 61.5z" fill="currentColor"></svg:path><svg:path d="M256 224c-69.3 0-138.7 97.1-138.7 176.3 0 23.6 11.8 42.6 23.5 50.4 14.4 9.6 24.5 13.4 45.5 13.4 13.4 0 21.6-2.5 28.1-6.1 12.3-6.7 25.9-10.4 39.9-10.4h3.5c14 0 27.6 3.8 39.9 10.4 6.5 3.5 14.7 6.1 28.1 6.1 21.1 0 31.2-3.8 45.5-13.4 11.6-7.8 23.5-26.8 23.5-50.4C394.7 321 325.3 224 256 224z" fill="currentColor"></svg:path><svg:path d="M312.6 179.1c2 .2 4 .2 6 .2 29.8-1.1 56.5-28 60.8-61.5 2.6-20.2-3.8-40.4-17.1-53.8-9.2-9.3-20.3-14.6-33.1-15.6-2.1-.2-6.7-.2-6.7-.2-28.9 1.1-50.4 26.1-54.8 59.9-2.8 21.9.9 43.3 14.3 56.8 8.4 8.3 19 13.2 30.6 14.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPeopleIcon],svg[ion-md-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337.454 232c33.599 0 61.092-27.002 61.092-60 0-32.997-27.493-60-61.092-60s-61.09 27.003-61.09 60c0 32.998 27.491 60 61.09 60zm-162.908 0c33.599 0 61.09-27.002 61.09-60 0-32.997-27.491-60-61.09-60s-61.092 27.003-61.092 60c0 32.998 27.493 60 61.092 60zm0 44C126.688 276 32 298.998 32 346v54h288v-54c0-47.002-97.599-70-145.454-70zm162.908 11.003c-6.105 0-10.325 0-17.454.997 23.426 17.002 32 28 32 58v54h128v-54c0-47.002-94.688-58.997-142.546-58.997z" fill="currentColor"></svg:path>`,
})
export class IonMdPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPersonIcon],svg[ion-md-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"></svg:path>`,
})
export class IonMdPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPersonAddIcon],svg[ion-md-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"></svg:path><svg:path d="M112 224v-64H80v64H16v32h64v64h32v-64h64v-32h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhoneLandscapeIcon],svg[ion-md-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 358.856V153.143C480 130.512 461.674 112 439.272 112H72.728C50.326 112 32 130.512 32 153.143v205.713C32 381.488 50.326 400 72.728 400h366.545C461.674 400 480 381.488 480 358.856zM112 364V148h288v216H112z" fill="currentColor"></svg:path>`,
})
export class IonMdPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhonePortraitIcon],svg[ion-md-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M358.856 32H153.143C130.512 32 112 50.326 112 72.728v366.545C112 461.674 130.512 480 153.143 480h205.713C381.488 480 400 461.674 400 439.272V72.728C400 50.326 381.488 32 358.856 32zM364 400H148V112h216v288z" fill="currentColor"></svg:path>`,
})
export class IonMdPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPhotosIcon],svg[ion-md-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M400 421.3V154.7c0-23.5-19.2-42.7-42.7-42.7H90.7C67.2 112 48 131.2 48 154.7v266.7c0 23.5 19.2 42.7 42.7 42.7h266.7c23.4-.1 42.6-19.3 42.6-42.8zM157.3 304l45.3 64 66.7-96 88 128H90.7l66.6-96z" fill="currentColor"></svg:path><svg:path d="M421.3 48H154.7C131.2 48 112 67.2 112 90.7V96h261.3c23.5 0 42.7 19.2 42.7 42.7V400h5.3c23.5 0 42.7-19.2 42.7-42.7V90.7c0-23.5-19.2-42.7-42.7-42.7z" fill="currentColor"></svg:path>`,
})
export class IonMdPhotosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPieIcon],svg[ion-md-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32.6 256H256V32.6c-5-.4-10.6-.6-16-.6-114.9 0-208 93.1-208 208 0 5.4.2 11 .6 16z" fill="currentColor"></svg:path><svg:path d="M109.8 402.2C147.9 449.6 206.4 480 272 480c114.9 0 208-93.1 208-208 0-65.6-30.4-124.1-77.8-162.2C370.5 84.3 331 67.9 288 64.6V288H64.6c3.3 43 19.7 82.5 45.2 114.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPinIcon],svg[ion-md-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" fill="currentColor"></svg:path>`,
})
export class IonMdPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPintIcon],svg[ion-md-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 48l42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z" fill="currentColor"></svg:path>`,
})
export class IonMdPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPizzaIcon],svg[ion-md-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M407.2 130.4C360.7 111.5 309.8 102 256 102c-53.9 0-108.3 10.3-151.2 28-8.1 3.3-15.3 9-10.1 19.5S255.9 480 255.9 480l161-329.9c3.2-6.9.9-15.4-9.7-19.7zm-221 73.6c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zM256 347c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32zm69.8-123c-18.7 0-32-14.3-32-32s13.3-32 32-32 32 14.3 32 32-13.3 32-32 32z" fill="currentColor"></svg:path><svg:path d="M436.9 66C384.7 45.4 320.3 32 256 32c-64.3 0-127.6 12.1-180.9 33.4C70.4 67.3 64 71 64 79.2l9.7 24.1c2.8 4.9 8.7 8.2 15.1 8.2 1.8 0 4.3-.3 7.3-1.5 49-18.9 103.1-29.6 160-29.6 56.9 0 115.2 11.6 160 29.6 3.6 1.4 5.6 1.5 7.3 1.5 6.6 0 12.2-3.3 15-8.1l9.8-24.1c-.2-7.3-5-10.8-11.3-13.3z" fill="currentColor"></svg:path>`,
})
export class IonMdPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlanetIcon],svg[ion-md-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M135.7 151c-2.5 3-4.9 6-7.2 9.2 32.2 36.3 76.1 76.5 124.2 113.7 37.8 29.2 76.3 55.2 111.4 75.1 5.9 3.3 11.7 6.5 17.3 9.4 2.5-3 4.9-6 7.2-9.2 11.7-16.1 18.1-33.2 23.3-53.6.8-3.2 1.5-6.4 2.1-9.5 15.8-83-35.6-164.9-118.5-185.9-37-9.4-74.1-5.1-106.3 9.7-21.4 9.9-38.2 22.9-53.5 41.1z" fill="currentColor"></svg:path><svg:path d="M418.2 326.8c-4.1 11-7.4 17.5-7.4 17.5 18.2 21.1 24.6 33.9 31.9 46.4 2.4 4.1 7.4 13.1.9 12.4-1.7-.3-3.5-.7-5.5-1.3-21.3-5.4-51.2-18.7-84.3-37.4-35.8-20.3-74.9-46.7-113.3-76.3-51.1-39.5-97.5-82.3-130.6-120.5-15.3-17.6-27.6-34.2-35.7-47.9-2.4-4.1-3.9-6.3-5.6-10.4-2.5-6.2 5-5.1 7-4.6 14.9 3.8 35 9.9 58.2 23.8 0 0 4.3-4.8 13.9-11.4-22.8-15.4-44.6-27.7-65.2-35.5-23.1-8.8-41.1-6.8-47.5 3.7-12.2 19.9 14 72.3 65.3 132-21.5 86 30.6 173.3 116.5 195 41.1 10.4 82.4 3.9 116.8-15 38.1 17.6 72.1 28.6 96.9 34.9 23.9 6.1 40.4 5.5 46.8-4.9 11.1-18.2-12.1-51.8-59.1-100.5z" fill="currentColor"></svg:path>`,
})
export class IonMdPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlayIcon],svg[ion-md-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 52v408l320-204L96 52z" fill="currentColor"></svg:path>`,
})
export class IonMdPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPlayCircleIcon],svg[ion-md-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z" fill="currentColor"></svg:path>`,
})
export class IonMdPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPodiumIcon],svg[ion-md-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 224h128v192H32z" fill="currentColor"></svg:path><svg:path d="M192 128h128v288H192z" fill="currentColor"></svg:path><svg:path d="M352 288h128v128H352z" fill="currentColor"></svg:path>`,
})
export class IonMdPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPowerIcon],svg[ion-md-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z" fill="currentColor"></svg:path>`,
})
export class IonMdPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPricetagIcon],svg[ion-md-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 64H257.6L76.5 251.6c-8 8-12.3 18.5-12.5 29-.3 11.3 3.9 22.6 12.5 31.2l123.7 123.6c8 8 20.8 12.5 28.8 12.5s22.8-3.9 31.4-12.5L448 256V96l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPricetagsIcon],svg[ion-md-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M442 107v141L229.2 451.7c8 8 20.8 12.3 28.8 12.3s22.8-3.7 31.4-12.3L480 272V144l-38-37z" fill="currentColor"></svg:path><svg:path d="M384 48H224L44.3 235.6c-8 8-12 17.8-12.3 28.4-.3 11.3 3.7 23.3 12.3 31.9l123.8 123.6c8 8 20.8 12.5 28.8 12.5s22.7-3.9 31.3-12.5L416 240V80l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z" fill="currentColor"></svg:path>`,
})
export class IonMdPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPrintIcon],svg[ion-md-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z" fill="currentColor"></svg:path>`,
})
export class IonMdPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdPulseIcon],svg[ion-md-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M428 269c-21.5 0-40.6 13.1-48.4 33h-41.2L307 221.3c-2.7-8.2-10.3-13.7-19-13.7h-.4c-8.8.2-16.4 6-18.8 14.5l-33.6 135.4-55.5-291.8C178 55.6 169.6 48 160 48c-9.5 0-16.9 6.2-19.4 16.2L90.3 302H32v40h74c9.2 0 17.2-6.2 19.4-15.2l30.7-160.6 54.1 282.1c1.5 8.8 8.9 15.1 18.6 15.7h1.2c9.3 0 16.9-5.3 19.2-13.5l40.2-162.9 15.5 40.7c2.7 8.2 10.3 13.7 19 13.7h56.4c8.3 19 27.1 31 47.6 31 13.9 0 26.9-5.6 36.8-15.8 9.8-10.1 15.2-23.3 15.2-37.2.1-28.6-22.7-51-51.9-51z" fill="currentColor"></svg:path>`,
})
export class IonMdPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdQrScannerIcon],svg[ion-md-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 124.2c0-6.9 5.2-12.2 12.2-12.2H176V64h-66.8C75.7 64 48 90.7 48 124.2V192h48v-67.8z" fill="currentColor"></svg:path><svg:path d="M403.6 64H336v48h67.2c6.9 0 12.8 5.2 12.8 12.2V192h48v-67.8c0-33.5-27-60.2-60.4-60.2z" fill="currentColor"></svg:path><svg:path d="M416 386.8c0 6.9-5.2 12.2-12.2 12.2H336v49h67.8c33.5 0 60.2-27.7 60.2-61.2V320h-48v66.8z" fill="currentColor"></svg:path><svg:path d="M108.2 399c-6.9 0-12.2-5.2-12.2-12.2V320H48v66.8c0 33.5 27.7 61.2 61.2 61.2H176v-49h-67.8z" fill="currentColor"></svg:path>`,
})
export class IonMdQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdQuoteIcon],svg[ion-md-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z" fill="currentColor"></svg:path>`,
})
export class IonMdQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioIcon],svg[ion-md-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M73.8 141.9c-15.2 6-25.8 21.8-25.8 39.5v256c0 23.5 18.5 42.7 41.6 42.7h332.8c23.1 0 41.6-19.2 41.6-42.7v-256c0-23.7-18.5-42.7-41.6-42.7H179l171.8-71.3L336.7 32 73.8 141.9zM160 438c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zm256-171.3h-32v-46.2h-44.8v46.2H96v-85.3h320v85.3z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioButtonOffIcon],svg[ion-md-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioButtonOnIcon],svg[ion-md-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRainyIcon],svg[ion-md-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M139 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3s23-10.5 23-23.3c0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M217 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M295 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3 12.6 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M373 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7z" fill="currentColor"></svg:path><svg:path d="M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 79.4 352 141.2 352h242.7c51.5 0 96.2-46 96.2-97.8-.1-49.4-38.4-89.6-86.9-93z" fill="currentColor"></svg:path>`,
})
export class IonMdRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRecordingIcon],svg[ion-md-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.8 160c-53.4 0-96.2 42.8-96.2 96 0 23.6 7.9 44.5 21.9 61.1h-78.8c14-16.6 21.9-37.5 21.9-61.1 0-53.2-42.9-96-96.2-96S46 202.8 46 256s42.9 96 96.2 96h227.5c53.4 0 96.2-42.8 96.2-96s-42.8-96-96.1-96zM142.2 317.1C108.1 317.1 81 290 81 256s27.1-61.1 61.2-61.1 61.2 27.1 61.2 61.1-27 61.1-61.2 61.1zm227.6 0c-34.1 0-61.2-27.1-61.2-61.1s27.1-61.1 61.2-61.1S431 222 431 256s-27.1 61.1-61.2 61.1z" fill="currentColor"></svg:path>`,
})
export class IonMdRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRedoIcon],svg[ion-md-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 337.2L83.8 352c22.9-69.7 88.7-117.8 166-117.8 42.8 0 81.5 15.7 111.8 41.1L282.5 352H480V160l-79.6 76.3c-40.4-35.2-92.8-56.8-150.7-56.8-101.5.1-187.3 66.2-217.7 157.7z" fill="currentColor"></svg:path>`,
})
export class IonMdRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRefreshIcon],svg[ion-md-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z" fill="currentColor"></svg:path>`,
})
export class IonMdRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRefreshCircleIcon],svg[ion-md-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm112 194h-98l44.8-44.8C300.1 181.8 279.1 172 256 172c-46.2 0-84 37.8-84 84s37.8 84 84 84c34.9 0 65.3-21.2 77.6-52h29.8c-13.9 46.3-56.3 80-107.4 80-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.8 12.6 79.1 32.9L368 144v98z" fill="currentColor"></svg:path>`,
})
export class IonMdRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveIcon],svg[ion-md-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 235h320v42H96z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveCircleIcon],svg[ion-md-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRemoveCircleOutlineIcon],svg[ion-md-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"></svg:path><svg:path d="M363 277H149v-42h214v42z" fill="currentColor"></svg:path>`,
})
export class IonMdRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReorderIcon],svg[ion-md-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 348h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 128h320v36H96z" fill="currentColor"></svg:path><svg:path d="M96 200.7h320v35.6H96z" fill="currentColor"></svg:path><svg:path d="M96 275.8h320v35.6H96z" fill="currentColor"></svg:path>`,
})
export class IonMdReorderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRepeatIcon],svg[ion-md-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.3 152h213.3v62.4l85.3-83.2L362.7 48v62.4h-256v124.8h42.7V152zm213.4 208H149.3v-62.4L64 380.8l85.3 83.2v-62.4h256V276.8h-42.7V360z" fill="currentColor"></svg:path>`,
})
export class IonMdRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdResizeIcon],svg[ion-md-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M297.6 48l64.9 64.9-249.6 249.6L48 297.6V464h166.4l-64.9-64.9 249.6-249.6 64.9 64.9V48z" fill="currentColor"></svg:path>`,
})
export class IonMdResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRestaurantIcon],svg[ion-md-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M164.852 279.939l61.834-60.251L73.72 71.706c-33.626 32.764-33.626 86.677 0 119.44l91.132 88.793z" fill="currentColor"></svg:path><svg:path d="M312.389 241.88c33.636 14.802 80.283 4.232 113.91-29.593 41.222-40.165 49.909-98.303 17.363-128.96-31.465-31.71-91.131-23.245-132.354 16.921-34.718 33.825-45.566 79.276-30.374 110.986-47.739 47.568-211.552 207.173-211.552 207.173L99.759 448l149.71-145.866L399.177 448l30.374-29.593-149.709-145.869 32.547-30.658z" fill="currentColor"></svg:path>`,
})
export class IonMdRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReturnLeftIcon],svg[ion-md-return-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z" fill="currentColor"></svg:path>`,
})
export class IonMdReturnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReturnRightIcon],svg[ion-md-return-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z" fill="currentColor"></svg:path>`,
})
export class IonMdReturnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdReverseCameraIcon],svg[ion-md-reverse-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M440 96h-88l-32-32H192l-32 32H72c-22.1 0-40 17.9-40 40v272c0 22.1 17.9 40 40 40h368c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40zm-72 171h-97.7l44.8-45.1c-14.7-15.4-35.7-25.5-58.8-25.5-46.2 0-84 37.8-84 84s37.8 84 84 84c35.5 0 66.2-21.5 78.2-53.5h29.6c-13.4 47-56.2 81.5-107.8 81.5-62.3 0-112-50.4-112-112s50.4-112 112-112c30.8 0 58.7 12.6 79 32.9l32.8-32.9V267z" fill="currentColor"></svg:path>`,
})
export class IonMdReverseCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRewindIcon],svg[ion-md-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z" fill="currentColor"></svg:path>`,
})
export class IonMdRewindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRibbonIcon],svg[ion-md-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 32 256 32zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" fill="currentColor"></svg:path><svg:path d="M193.7 307.4c-19.1-8.1-36.2-19.6-50.8-34.3-1.4-1.4-2.8-2.8-4.1-4.3L64 400h96l48 80 48-105.8 25.5-56.2c-8.4 1.3-16.9 2-25.5 2-21.6 0-42.5-4.2-62.3-12.6z" fill="currentColor"></svg:path><svg:path d="M373.3 268.9c-1.3 1.4-2.7 2.9-4.1 4.3-14.6 14.6-31.7 26.2-50.7 34.2L294 361.2l-21.9 48.4L304 480l48-80h96l-74.7-131.1z" fill="currentColor"></svg:path>`,
})
export class IonMdRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRocketIcon],svg[ion-md-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z" fill="currentColor"></svg:path><svg:path d="M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z" fill="currentColor"></svg:path>`,
})
export class IonMdRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdRoseIcon],svg[ion-md-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M260.6 214.8c23.8-40.9 48-71.6 91.4-96.4 8.3-4.8 21.2-8 22.8-8.9C290.7 83.7 256 32 256 32s-34.7 51.7-120.5 76.5c5.8 3.4 16.5 6.5 30.7 13.7 34.5 17.4 62.5 51.3 94.4 92.6z" fill="currentColor"></svg:path><svg:path d="M246.3 253.4C186.7 161.2 131.4 126.8 48 126.8c54.2 78.6 52 174.6 52 215.4 0 76.1 69.8 137.8 156 137.8 57.6 0 107.9-27.6 135-68.7-35.5-27.6-85.1-65.7-144.7-157.9z" fill="currentColor"></svg:path><svg:path d="M464 126.8s-55.2-2.3-85.2 15.4c-43 25.5-74.4 61.3-95.4 103.2 38.8 52 73 87.9 95.4 109.4 10.7 10.2 19.8 18.2 27.5 24.5 3.7-11.8 5.8-24.3 5.8-37.2-.1-40.8-17.4-114.1 51.9-215.3z" fill="currentColor"></svg:path>`,
})
export class IonMdRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSadIcon],svg[ion-md-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 288c-45.443 0-83.675 26.076-102.205 64h204.41c-18.53-37.924-56.762-64-102.205-64z" fill="currentColor"></svg:path><svg:path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4z" fill="currentColor"></svg:path><svg:path d="M328.8 235.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2z" fill="currentColor"></svg:path><svg:path d="M183.2 235.2c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2z" fill="currentColor"></svg:path>`,
})
export class IonMdSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSaveIcon],svg[ion-md-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M362.7 64h-256C83 64 64 83.2 64 106.7v298.7c0 23.5 19 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7v-256L362.7 64zM256 405.3c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zM320 192H106.7v-85.3H320V192z" fill="currentColor"></svg:path>`,
})
export class IonMdSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSchoolIcon],svg[ion-md-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M113.5 281.2v85.3L256 448l142.5-81.5v-85.3L256 362.7l-142.5-81.5zM256 64L32 192l224 128 183.3-104.7v147.4H480V192L256 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSearchIcon],svg[ion-md-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" fill="currentColor"></svg:path>`,
})
export class IonMdSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSendIcon],svg[ion-md-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" fill="currentColor"></svg:path>`,
})
export class IonMdSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSettingsIcon],svg[ion-md-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z" fill="currentColor"></svg:path>`,
})
export class IonMdSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShareIcon],svg[ion-md-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z" fill="currentColor"></svg:path>`,
})
export class IonMdShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShareAltIcon],svg[ion-md-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z" fill="currentColor"></svg:path>`,
})
export class IonMdShareAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShirtIcon],svg[ion-md-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 64c-11.1 19.1-40.3 32-64 32s-52.9-12.9-64-32L64 96v96l77-16-13 272h256l-13-272 77 16V96L320 64z" fill="currentColor"></svg:path>`,
})
export class IonMdShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdShuffleIcon],svg[ion-md-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z" fill="currentColor"></svg:path>`,
})
export class IonMdShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipBackwardIcon],svg[ion-md-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.7 256L448 448V64L170.7 256z" fill="currentColor"></svg:path><svg:path d="M64 64h64v384H64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipForwardIcon],svg[ion-md-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 64v384l277.3-192L64 64z" fill="currentColor"></svg:path><svg:path d="M384 64h64v384h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSnowIcon],svg[ion-md-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.4 298.5l-8.3-30.9-88 23.6-60.4-34.9 60.4-34.9 88 23.6 8.3-30.9-57.1-15.3 57.7-33.3-24-41.5-56.6 32.7 15.3-57.1-30.9-8.3-23.6 88-62.2 35.9v-71.1l64.5-64.4-22.7-22.6L280 98.9V32h-48v65.6l-41.7-41.7-22.6 22.6 64.3 64.4v71.4l-60.7-35-23.6-88-30.9 8.3 15.3 57.1-57.7-33.4-24 41.6 56.7 32.7L50 212.9l8.3 30.9 87.9-23.6 62.6 36.1-62.6 36.2-87.9-23.6-8.3 30.9 57.1 15.3-56.7 32.7 24 41.5 57.7-33.3-15.3 57 30.9 8.3 23.6-87.9 60.7-35.1v70.9l-64.3 64.4 22.6 22.6 41.7-41.8V480h48v-66.8l41.9 41.7 22.5-22.6L280 368v-70.6l62.2 36 23.6 87.9 30.9-8.3-15.3-57 56.6 32.7 24-41.6-57.7-33.3z" fill="currentColor"></svg:path>`,
})
export class IonMdSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSpeedometerIcon],svg[ion-md-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 416h256v48H128z" fill="currentColor"></svg:path><svg:path d="M256 288c17.7 0 32-14.3 32-32s-14.3-32-32-32c-3 0-6 .4-8.8 1.2l-66.7-48.7-4 3.5 48.9 66.7c-.9 2.9-1.4 6-1.4 9.3 0 17.7 14.3 32 32 32z" fill="currentColor"></svg:path><svg:path d="M256 48C141.1 48 48 141.1 48 256c0 48.3 16.5 92.7 44.1 128h58.8l4-4 22.1-22.1-22.9-22.9-22.1 22c-19.9-24.3-32.1-54-35.2-85H128v-32H96.8c3.1-31 15.3-60.7 35.2-85l22.1 22 22.9-22.9-22-22.1c24.3-19.9 54-32.1 85-35.2V128h32V96.8c31 3.1 60.7 15.3 85 35.2l-22 22.1 22.9 22.9 22.1-22c19.9 24.3 32.1 54 35.2 85H384v32h31.2c-3.1 31-15.3 60.7-35.2 85l-22.1-22-22.9 22.9 22.1 22.1 4 4h58.8c27.6-35.3 44.1-79.7 44.1-128 0-114.9-93.1-208-208-208z" fill="currentColor"></svg:path>`,
})
export class IonMdSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSquareIcon],svg[ion-md-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.333 64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V106.667C448 83.198 428.802 64 405.333 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSquareOutlineIcon],svg[ion-md-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.3 106.7v298.7H106.7V106.7h298.6m0-42.7H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V106.7C448 83.2 428.8 64 405.3 64z" fill="currentColor"></svg:path>`,
})
export class IonMdSquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarIcon],svg[ion-md-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" fill="currentColor"></svg:path>`,
})
export class IonMdStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarHalfIcon],svg[ion-md-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.287L256 335.313l-.002-189.277 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" fill="currentColor"></svg:path>`,
})
export class IonMdStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStarOutlineIcon],svg[ion-md-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" fill="currentColor"></svg:path>`,
})
export class IonMdStarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStatsIcon],svg[ion-md-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 64h64v384h-64z" fill="currentColor"></svg:path><svg:path d="M80 336h64v112H80z" fill="currentColor"></svg:path><svg:path d="M272 272h64v176h-64z" fill="currentColor"></svg:path><svg:path d="M368 176h64v272h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdStatsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdStopwatchIcon],svg[ion-md-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232 306.667h48V176h-48v130.667z" fill="currentColor"></svg:path><svg:path d="M407.67 170.271l30.786-30.786-33.942-33.941-30.785 30.786C341.217 111.057 300.369 96 256 96 149.961 96 64 181.961 64 288s85.961 192 192 192 192-85.961 192-192c0-44.369-15.057-85.217-40.33-117.729zm-45.604 223.795C333.734 422.398 296.066 438 256 438s-77.735-15.602-106.066-43.934C121.602 365.735 106 328.066 106 288s15.602-77.735 43.934-106.066C178.265 153.602 215.934 138 256 138s77.734 15.602 106.066 43.934C390.398 210.265 406 247.934 406 288s-15.602 77.735-43.934 106.066z" fill="currentColor"></svg:path><svg:path d="M192 32h128v48H192z" fill="currentColor"></svg:path>`,
})
export class IonMdStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSubwayIcon],svg[ion-md-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-93.864 0-176 10.668-176 85.334v213.332c0 41.604 33.062 74.666 74.667 74.666L128 448v16h256v-16l-26.667-26.668c41.604 0 74.667-33.062 74.667-74.666V133.334C432 58.668 349.864 48 256 48zm-96 336c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm80-144H128v-96h112v96zm112 144c-18.136 0-32-13.865-32-32 0-18.137 13.864-32 32-32s32 13.863 32 32c0 18.135-13.864 32-32 32zm32-144H272v-96h112v96z" fill="currentColor"></svg:path>`,
})
export class IonMdSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSunnyIcon],svg[ion-md-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z" fill="currentColor"></svg:path>`,
})
export class IonMdSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSwapIcon],svg[ion-md-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z" fill="currentColor"></svg:path>`,
})
export class IonMdSwapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSwitchIcon],svg[ion-md-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9z" fill="currentColor"></svg:path><svg:path d="M344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z" fill="currentColor"></svg:path>`,
})
export class IonMdSwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdSyncIcon],svg[ion-md-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z" fill="currentColor"></svg:path>`,
})
export class IonMdSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTabletLandscapeIcon],svg[ion-md-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 120v272c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24zm384 8v256H80V128h336zm46 128c0 7.7-6.5 14-14.1 14-7.5 0-14-6.2-14-14 0-7.7 6.4-14.1 14-14.1 7.6.1 14.1 6.4 14.1 14.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTabletPortraitIcon],svg[ion-md-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M392 32H120c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm-8 384H128V80h256v336zm-128 46c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTennisballIcon],svg[ion-md-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M383.8 92.2C348.5 64.5 304.1 48 256 48c-48 0-92.3 16.5-127.6 44 41.6 44.8 64.3 103 64 164.3-.3 61-23.3 118.6-64.9 162.9 35.4 28 80.1 44.8 128.5 44.8 48.5 0 93.3-16.8 128.8-45-41.5-44.3-64.5-101.8-64.8-162.7-.3-61.2 22.3-119.3 63.8-164.1z" fill="currentColor"></svg:path><svg:path d="M353.1 255.1c0 26.9 5.1 53 15.1 77.8 9.6 23.6 23.3 44.9 40.8 63.6 34.1-37.1 55-86.5 55-140.5 0-54.5-21.2-104.2-55.8-141.4-17.1 18.5-30.6 39.6-40 62.7-10 24.8-15.1 51-15.1 77.8z" fill="currentColor"></svg:path><svg:path d="M159.3 255.1c0-26.9-5.1-53-15.1-77.8-9.4-23.2-22.9-44.4-40.2-62.9-34.7 37.2-56 87-56 141.6 0 54.2 21 103.6 55.2 140.7 17.6-18.7 31.4-40.1 41-63.8 10-24.7 15.1-50.9 15.1-77.8z" fill="currentColor"></svg:path>`,
})
export class IonMdTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTextIcon],svg[ion-md-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z" fill="currentColor"></svg:path>`,
})
export class IonMdTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThermometerIcon],svg[ion-md-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M303 300.2V78.4c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v221.9c-29 16.5-48.9 47.8-48.9 83.7 0 53 43 96 96 96s96-43 96-96c0-36-20.1-67.3-49.1-83.8zM240 78.4c0-8 7.7-14.5 16-14.5s16 6.5 16 14.5V128h-32V78.4z" fill="currentColor"></svg:path>`,
})
export class IonMdThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThumbsDownIcon],svg[ion-md-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M314 64H142c-15.7 0-28.6 9.6-34.2 23.4L50.6 222.8c-1.7 4.4-2.6 9-2.6 14v38.6c0 21.1 17 44.6 37.8 44.6h119.3l-18 81.5-.6 6c0 7.9 3.2 15.1 8.3 20.3l20 20.1L341 320.7c6.8-6.9 11-16.5 11-27.1v-192c0-21.1-17.2-37.6-38-37.6z" fill="currentColor"></svg:path><svg:path d="M400 64h64v224h-64z" fill="currentColor"></svg:path>`,
})
export class IonMdThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThumbsUpIcon],svg[ion-md-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M198 448h172c15.7 0 28.6-9.6 34.2-23.4l57.1-135.4c1.7-4.4 2.6-9 2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6H306.9l18-81.5.6-6c0-7.9-3.2-15.1-8.3-20.3L297 64 171 191.3c-6.8 6.9-11 16.5-11 27.1v192c0 21.1 17.2 37.6 38 37.6z" fill="currentColor"></svg:path><svg:path d="M48 224h64v224H48z" fill="currentColor"></svg:path>`,
})
export class IonMdThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdThunderstormIcon],svg[ion-md-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 82.2 336 144 336h68V233h99.1l-33.2 67H311l-18 36h93.7c51.5 0 93.3-30 93.3-81.8 0-49.4-38.3-89.6-86.8-93z" fill="currentColor"></svg:path><svg:path d="M212 368h22v96l59-128h-81z" fill="currentColor"></svg:path>`,
})
export class IonMdThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTimeIcon],svg[ion-md-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-opacity=".9"><svg:path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z" fill="currentColor"></svg:path><svg:path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonMdTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTimerIcon],svg[ion-md-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M232.9 371.6c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1c0-12.7-10.4-23.1-23.1-23.1s-23.1 10.3-23.1 23.1zm0-323.6v92.4h46.2V96.1c78.3 11.3 138.7 78.3 138.7 159.9 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-38.8 13.6-74.4 36.5-102.2L256 279.1l32.6-32.6L131.4 89.4v.5C80.8 127.7 48 187.8 48 256c0 114.9 92.9 208 208 208 114.9 0 208-93.1 208-208S370.9 48 256 48h-23.1zm161.8 208c0-12.7-10.4-23.1-23.1-23.1-12.7 0-23.1 10.4-23.1 23.1s10.4 23.1 23.1 23.1c12.7 0 23.1-10.4 23.1-23.1zm-277.4 0c0 12.7 10.4 23.1 23.1 23.1s23.1-10.4 23.1-23.1-10.4-23.1-23.1-23.1-23.1 10.4-23.1 23.1z" fill="currentColor"></svg:path>`,
})
export class IonMdTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTodayIcon],svg[ion-md-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.3 32H106.7C83.2 32 64 51.2 64 74.7v362.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V74.7C448 51.2 428.8 32 405.3 32zm-4 405.3H110.7c-2.2 0-4-1.8-4-4V78.7c0-2.2 1.8-4 4-4h290.7c2.2 0 4 1.8 4 4v354.7c-.1 2.1-1.9 3.9-4.1 3.9z" fill="currentColor"></svg:path><svg:path d="M145 194v204c0 1.1.9 2 2 2h218c1.1 0 2-.9 2-2V194c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path><svg:path d="M145 114.7v34c0 1.1.9 2 2 2h171c1.1 0 2-.9 2-2v-34c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z" fill="currentColor"></svg:path>`,
})
export class IonMdTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrainIcon],svg[ion-md-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 48c-88 0-176 10.9-176 87.6v208c0 42.3 34.5 76.6 77 76.6L124 453v11h49.1l44-43.8H300l44 43.8h44v-10.9l-33-32.8c42.5 0 77-34.4 77-76.6v-208C432 58.9 353.2 48 256 48zm-99 328.4c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8zm77-153.2H124v-87.6h110v87.6zm44 0v-87.6h110v87.6H278zm77 153.2c-18.3 0-33-14.7-33-32.8s14.7-32.8 33-32.8 33 14.7 33 32.8-14.7 32.8-33 32.8z" fill="currentColor"></svg:path>`,
})
export class IonMdTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTransgenderIcon],svg[ion-md-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32v35h63.1l-81.4 80.5c-7.5-7.2-13.2-11-13.2-11C302.2 123.6 280 116 256 116c-30.2 0-57.6 12-77.8 31.4l-15.2-15 31.4-31.4-28.5-28.5-31.5 31.5-37.5-37H160V32H32v128h35V91.3l40.3 39.9-31.2 31.2 28.5 28.5 31.4-31.4 19.4 19.2c-7.3 14.9-11.5 31.7-11.5 49.5 0 54.8 39.5 100.4 91.1 110.2v45.3h-63V424h63v56h42v-56h63v-40.2h-63v-45.3c50.8-9.9 91.2-55.5 91.2-110.3 0-17.7-4.2-34.8-11.5-49.6L445 91.3V160h35V32H352zm-96 258c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="currentColor"></svg:path>`,
})
export class IonMdTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrashIcon],svg[ion-md-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z" fill="currentColor"></svg:path>`,
})
export class IonMdTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrendingDownIcon],svg[ion-md-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 397V262.5l-51.3 51.3-141.1-141-89.6 89.7L63.6 128 32 159.6l166 166.3 89.6-89.7 109.3 109.4-51.3 51.4H480z" fill="currentColor"></svg:path>`,
})
export class IonMdTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrendingUpIcon],svg[ion-md-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M345.6 128l51.3 51.3-109.3 109.4-89.6-89.6L32 365.4 63.6 397 198 262.5l89.6 89.7 141.1-141 51.3 51.3V128H345.6z" fill="currentColor"></svg:path>`,
})
export class IonMdTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTrophyIcon],svg[ion-md-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M392 105c.9-27 .2-56 .1-57H119.3c0 1-.8 30 .1 57H48c0 68 9.9 102.3 21 126.7S95.4 277 127.7 302c30.1 23.3 95.5 53.6 104.3 57.6v28.3c-4.6 10-23.5 28.2-83.3 28.2H128v48h256v-48h-25.7c-60.7 0-75-19.1-78.3-28.2v-28.3c9.3-4.6 80.9-40.3 104.4-57.5 25.2-18.4 50.9-51.5 58.7-70.3S464 167 464 105h-72zM109.6 211.9c-8.8-18.2-14-37.9-15.7-61.9h28.7c.7 6 1.4 11.3 2.3 16.3 6.6 39.2 14.8 70.2 25.7 96.5-17.3-13.5-31.3-30.8-41-50.9zm292.8 0c-9.9 20.3-24 37.7-41.6 51.3 11-26.2 19-56.8 25.8-96.9.8-5 1.6-10.3 2.3-16.3h29.3c-1.8 24-6.9 43.7-15.8 61.9z" fill="currentColor"></svg:path>`,
})
export class IonMdTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdTvIcon],svg[ion-md-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M439.3 76H72.7C50.3 76 32 94 32 116v240c0 22 18.3 40 40.7 40h101.8v40h162.9v-40h101.8c22.4 0 40.5-18 40.5-40l.2-240c.1-22-18.2-40-40.6-40zm0 280H72.7V116h366.5v240z" fill="currentColor"></svg:path>`,
})
export class IonMdTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUmbrellaIcon],svg[ion-md-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M410.1 244.1c12 0 26.6 10.9 33.8 25.9H464c-.3-50-21.2-101.5-59.4-140.9-36.3-37.4-83-60.5-132.6-65.7-3-9-11.5-15.4-21.6-15.4-10 0-18.5 6.5-21.5 15.3C125.3 73.8 48 159.7 48 266.2c0 1.1.1 1.8.4 3.8h21.8c6.8-15 22.2-25.9 35.3-25.9 17 0 31.5 10.9 36.5 25.9h19.8c4.1-15 16.9-25.7 33-25.7 17.8 0 33.1 14.5 34.1 32.6v118.3c0 9.3.1 24.1-13.4 24.1-6.9 0-16.6-1.8-16.6-16V382h-43v21.3c0 34.6 23.6 60.7 60 60.7 19.5 0 33.3-8.5 43.5-18.7 13.1-13.2 13.5-34.7 13.5-50.1V276.1c2-25.8 23.9-31.7 41.9-31.7 17.2 0 32.3 11.6 37.8 25.6h20.5c5.1-15 19.8-25.9 37-25.9z" fill="currentColor"></svg:path>`,
})
export class IonMdUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUndoIcon],svg[ion-md-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M262.3 179.6c-57.9 0-110.3 21.6-150.7 56.8L32 160v192h197.5l-79.1-76.8c30.4-25.3 69-41.1 111.8-41.1 77.3 0 143.1 48.2 166 117.8l51.8-14.8c-30.4-91.4-116.2-157.5-217.7-157.5z" fill="currentColor"></svg:path>`,
})
export class IonMdUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdUnlockIcon],svg[ion-md-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146h37.998c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002H318v40H136c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40z" fill="currentColor"></svg:path>`,
})
export class IonMdUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVideocamIcon],svg[ion-md-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z" fill="currentColor"></svg:path>`,
})
export class IonMdVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeHighIcon],svg[ion-md-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256zM298.667 64v44.978C360.531 127.632 405.334 186.882 405.334 256c0 69.119-44.803 128.369-106.667 147.022V448C384 428.254 448 349.257 448 256c0-93.256-64-172.254-149.333-192z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeLowIcon],svg[ion-md-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeMuteIcon],svg[ion-md-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeOffIcon],svg[ion-md-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.5 256c0 22.717-4.883 44.362-13.603 63.855l31.88 31.88C439.283 323.33 448 290.653 448 256c0-93.256-64-172.254-149-192v44.978C361 127.632 405.5 186.882 405.5 256z" fill="currentColor"></svg:path><svg:path d="M256 80.458l-51.021 52.48L256 183.957z" fill="currentColor"></svg:path><svg:path d="M420.842 396.885L91.116 67.157l-24 24 90.499 90.413-8.28 10.43H64v128h85.334L256 431.543V280l94.915 94.686C335.795 387.443 318 397.213 299 403.022V448c31-7.172 58.996-22.163 82.315-42.809l39.61 39.693 24-24.043-24.002-24.039-.081.083z" fill="currentColor"></svg:path><svg:path d="M352.188 256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801 50.801A100.596 100.596 0 00352.188 256z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWalkIcon],svg[ion-md-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 112c22.223 0 39.997-17.776 39.997-40 0-22.225-17.774-40-39.997-40s-40.003 17.775-40.003 40c0 22.224 17.78 40 40.003 40z" fill="currentColor"></svg:path><svg:path d="M288 232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136-3.198 0-8.828.531-12.799 1.747L120 144v112h40v-80l40.531-16L120 480h40l56.698-164.271L267 384v96h38V352l-57.031-96 19.745-61.864L288 232z" fill="currentColor"></svg:path>`,
})
export class IonMdWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWalletIcon],svg[ion-md-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M202.7 341.3V170.7c0-23.5 19-42.7 42.7-42.7h197v-21.3c0-23.5-18.9-42.7-42.3-42.7H92c-23.7 0-44 18.5-44 42v300c0 23.5 20.3 42 44 42h308c23.5 0 42.3-19.2 42.3-42.7V384h-197c-23.6 0-42.6-19.2-42.6-42.7z" fill="currentColor"></svg:path><svg:path d="M245 186v140c0 8.8 7.2 16 16 16h187c8.8 0 16-7.2 16-16V186c0-8.8-7.2-16-16-16H261c-8.8 0-16 7.2-16 16zm77.1 101.9c-19.3 1.2-35.2-14.7-34-34 1-15.9 13.9-28.8 29.9-29.9 19.3-1.2 35.2 14.7 34 34-1.1 16-14 28.9-29.9 29.9z" fill="currentColor"></svg:path>`,
})
export class IonMdWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWarningIcon],svg[ion-md-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z" fill="currentColor"></svg:path>`,
})
export class IonMdWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWatchIcon],svg[ion-md-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 256c0-51.001-24.004-96.001-60.996-125L336 16H176l-19.004 115C120.004 159.999 96 204.999 96 256c0 50.996 24.004 95.996 60.996 125L176 496h160l19.004-115C391.996 351.996 416 306.996 416 256zm-280 0c0-66.001 54.004-120 120-120s120 53.999 120 120c0 65.996-54.004 120-120 120s-120-54.004-120-120z" fill="currentColor"></svg:path>`,
})
export class IonMdWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWaterIcon],svg[ion-md-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z" fill="currentColor"></svg:path>`,
})
export class IonMdWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWifiIcon],svg[ion-md-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 228.719c-22.879 0-41.597 18.529-41.597 41.18 0 22.652 18.718 41.182 41.597 41.182 22.878 0 41.597-18.529 41.597-41.182 0-22.651-18.719-41.18-41.597-41.18zm124.8 41.179c0-67.946-56.163-123.539-124.8-123.539s-124.8 55.593-124.8 123.539c0 45.303 24.961 85.447 62.396 107.072l20.807-36.032c-24.972-14.417-41.604-40.153-41.604-71.04 0-45.295 37.433-82.358 83.201-82.358 45.771 0 83.201 37.063 83.201 82.358 0 30.887-16.633 56.623-41.604 71.04l20.807 36.032c37.433-21.624 62.396-61.769 62.396-107.072zM256 64C141.597 64 48 156.654 48 269.898 48 346.085 89.592 411.968 152 448l20.799-36.032c-49.919-28.824-83.207-81.324-83.207-142.069 0-90.593 74.891-164.718 166.408-164.718 91.517 0 166.406 74.125 166.406 164.718 0 60.745-33.284 114.271-83.205 142.069L360 448c62.406-36.032 104-101.915 104-178.102C464 156.654 370.403 64 256 64z" fill="currentColor"></svg:path>`,
})
export class IonMdWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWineIcon],svg[ion-md-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M234.667 277.333V408H128v40h256v-40H277.333V277.333L448 106.667V64H64v42.667l170.667 170.666zm-74.667-128l-42.667-42.666h277.334L352 149.333H160z" fill="currentColor"></svg:path>`,
})
export class IonMdWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMdWomanIcon],svg[ion-md-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M190.4 148.6L161 252.9c-6.3 22.8 20.7 31.7 27.3 10.3l26.3-96.2h7.4l-45.2 169H219v127c0 23 32 23 32 0V336h10v127c0 23 31 23 31 0V336h43.4l-46.2-169h8.4l26.3 96.2c6.5 21.9 33.3 12.5 27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3c-24.6 1-38.7 21.6-42.1 33.6z" fill="currentColor"></svg:path><svg:path d="M292.6 69.2c0-20.6-16.4-37.3-36.6-37.3-20.2 0-36.6 16.7-36.6 37.3 0 20.6 16.4 37.3 36.6 37.3 20.2 0 36.6-16.7 36.6-37.3z" fill="currentColor"></svg:path>`,
})
export class IonMdWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedalIcon],svg[ion-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32Z"></svg:path><svg:path fill="currentColor" d="m486.17 120.56l-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160L298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44m-226 295.31a64 64 0 1 1 59.69-59.69a64.08 64.08 0 0 1-59.68 59.69Z"></svg:path>`,
})
export class IonMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedalOutlineIcon],svg[ion-medal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="352" r="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="256" cy="352" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M147 323L41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144L207 250"></svg:path>`,
})
export class IonMedalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedalSharpIcon],svg[ion-medal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32L16 160h289.11l80.22-128z"></svg:path><svg:path fill="currentColor" d="M496 144L424 32L298 231.08a128 128 0 0 0-84 0L189.53 192H43.82l86.66 134.89a128 128 0 1 0 251 0ZM256 422a70 70 0 1 1 70-70a70.08 70.08 0 0 1-70 70"></svg:path><svg:circle cx="256" cy="352" r="32" fill="currentColor"></svg:circle>`,
})
export class IonMedalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedicalIcon],svg[ion-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64l-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74a31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64l.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74a31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32m61.54-218.56"></svg:path>`,
})
export class IonMedicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedicalOutlineIcon],svg[ion-medical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m429.93 174.27l-16.47-28.59a15.49 15.49 0 0 0-21.15-5.7l-98.39 57a4 4 0 0 1-6-3.5L288 80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16l.07 113.57a4 4 0 0 1-6 3.5l-98.39-57a15.49 15.49 0 0 0-21.15 5.7l-16.46 28.6a15.42 15.42 0 0 0 5.69 21.1l98.49 57.08a4 4 0 0 1 0 6.9l-98.49 57.08a15.54 15.54 0 0 0-5.69 21.1l16.47 28.59a15.49 15.49 0 0 0 21.15 5.7l98.39-57a4 4 0 0 1 6 3.5L224 432a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16l-.07-113.67a4 4 0 0 1 6-3.5l98.39 57a15.49 15.49 0 0 0 21.15-5.7l16.47-28.59a15.42 15.42 0 0 0-5.69-21.1l-98.49-57.08a4 4 0 0 1 0-6.9l98.49-57.08a15.51 15.51 0 0 0 5.68-21.11"></svg:path>`,
})
export class IonMedicalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedicalSharpIcon],svg[ion-medical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M351.9 256L460 193.6l-48-83.2l-108 62.4V48h-96v124.8l-108-62.4l-48 83.2L160.1 256L52 318.4l48 83.2l108-62.4V464h96V339.2l108 62.4l48-83.2z"></svg:path>`,
})
export class IonMedicalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedkitIcon],svg[ion-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16"></svg:path><svg:path fill="currentColor" d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64m-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32m16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class IonMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedkitOutlineIcon],svg[ion-medkit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="352" x="32" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m-112 96v160m80-80H176"></svg:path>`,
})
export class IonMedkitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMedkitSharpIcon],svg[ion-medkit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M168 72h176v24H168z"></svg:path><svg:path fill="currentColor" d="M484 96H384V40a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v360a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V108a12 12 0 0 0-12-12M168 72h176v24H168Zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74Z"></svg:path>`,
})
export class IonMedkitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMegaphoneIcon],svg[ion-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 176v.66a17.38 17.38 0 0 1-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0 1 48 272a32 32 0 0 0 32 32h8a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-8a32 32 0 0 0-32 32m404.18 10.55l-.93-.17a4 4 0 0 1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32c-11.92-4.11-24.34-.76-31.68 8.53a431 431 0 0 1-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 0 0-5.15 7.47V299a16 16 0 0 0 9.69 14.69c19.34 8.29 40.24 21.83 62 40.28a434 434 0 0 1 51.68 52.16a26.22 26.22 0 0 0 21.1 9.87a33 33 0 0 0 10.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 0 1 3.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45M240 320V152a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v304a24 24 0 0 0 24 24h52.45a32.66 32.66 0 0 0 25.93-12.45a31.65 31.65 0 0 0 5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19c-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 0 0 240 320"></svg:path>`,
})
export class IonMegaphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMegaphoneOutlineIcon],svg[ion-megaphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23c6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78M64 256s-16-6-16-32s16-32 16-32m384 54s16-4.33 16-22s-16-22-16-22m-192-42v128M112 160v128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16"></svg:path>`,
})
export class IonMegaphoneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMegaphoneSharpIcon],svg[ion-megaphone-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 144v332a4 4 0 0 0 4 4h100.07a8 8 0 0 0 7.82-9.7L208.71 352H232a8 8 0 0 0 8-8V144Zm324.18 42.55L448 185.5V36a4 4 0 0 0-4-4h-42.5a4 4 0 0 0-2.63 1L272 144v160l126.87 111a4 4 0 0 0 2.63 1H444a4 4 0 0 0 4-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45M96 144H52a4 4 0 0 0-4 4v35.59a43 43 0 0 0-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 0 0 4 4h44Z"></svg:path>`,
})
export class IonMegaphoneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMenuIcon],svg[ion-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></svg:path>`,
})
export class IonMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMenuOutlineIcon],svg[ion-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></svg:path>`,
})
export class IonMenuOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMenuSharpIcon],svg[ion-menu-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 384h384v-42.67H64Zm0-106.67h384v-42.66H64ZM64 128v42.67h384V128Z"></svg:path>`,
})
export class IonMenuSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMergeIcon],svg[ion-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 224c-23.637 0-44.307 12.89-55.391 32H319c-42.464 0-79.99-17.904-111.535-53.214-20.356-22.787-33.493-48.869-37.856-58.218C183.301 132.822 192 115.413 192 96c0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V245.692C203.553 294.307 258.468 320 319 320h9.609c11.084 19.11 31.754 32 55.391 32 35.29 0 64-28.71 64-64s-28.71-64-64-64zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm256-128c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonMergeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicIcon],svg[ion-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="currentColor" d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.9 80.9 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81"></svg:path>`,
})
export class IonMicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicAIcon],svg[ion-mic-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M112.1 238.1l-.1 13.6c.1 65.6 46 120.6 108.1 136.2 1.3.1 2.6.5 3.8.9 5.9 2 10.1 6.9 12.1 12.8v58.7c0 10.9 8.9 19.7 20 19.7h.1c11.1 0 19.9-8.8 19.9-19.7v-58.8c2-5.9 6.1-10.7 12-12.7 1.2-.4 2.5-.8 3.9-.9C354 372.3 400 317.3 400 251.7v-13.6c0-10.4-8.9-18.9-19.5-18.9s-19.5 8.4-19.5 18.9v13.6c0 28.5-11.5 54.1-30.6 72.8-19.2 18.6-45.3 30.2-74.5 30.2-29.2 0-55.1-11.5-74.2-30.2S151 280.1 151 251.7v-13.6c0-10.4-8.8-18.9-19.5-18.9-10.6 0-19.4 8.5-19.4 18.9z" fill="currentColor"></svg:path><svg:path d="M179 107.7v143.8c0 41.8 34.7 75.7 77.5 75.7s77.5-33.9 77.5-75.7V107.7c0-41.8-34.7-75.7-77.5-75.7S179 65.9 179 107.7z" fill="currentColor"></svg:path>`,
})
export class IonMicAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicBIcon],svg[ion-mic-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.4 32c-35.1.1-65.8 23.2-76.8 59.3-5.6 18.5-3.5 44.8-1.2 54.5 2.3 9.7 7.3 19.9 13.2 28.3 2.8 4.2 6.7 7.4 11.2 9.2.6.3 1.3.5 2 .8 3.3 1.1 6.5 2.2 10.1 3.1 11.8 3 27.1 4.7 41.1 4.8h2v-.1c14-.1 27.3-1.7 39.1-4.8 3.6-.9 6.9-2 10.2-3.1.7-.2 1.3-.5 1.9-.8 4.5-1.8 8.4-5 11.2-9.2 5.9-8.4 10.8-18.6 13.2-28.3 2.3-9.7 4.4-36-1.2-54.5-11-36-40.8-59.1-76-59.2z" fill="currentColor"></svg:path><svg:path d="M295.3 201.1c-.4 0-.7 0-1.1.1-.6.1-1.3.3-1.9.4-2 .4-4.1.8-6.1 1.2-9.2 1.5-18.9 2.3-29 2.4-10.1-.1-22.3-.9-31-2.4-2.1-.4-4.2-.8-6.2-1.2-.6-.1-1.3-.3-1.9-.4-.4-.1-.8-.1-1.1-.1-6.1 0-11 5.3-11.2 11.9.1.8.2 1.6.2 2.4 4.8 67.2 16.8 240.7 18.2 252 0 0 2.8 12.7 32.1 12.6 29.2.1 32.1-12.6 32.1-12.6 1.4-11.3 13.4-184.8 18.2-252 0-.8.1-1.6.2-2.4-.5-6.6-5.4-11.9-11.5-11.9zM266 281.7c0 6-4.5 10.9-10 10.9s-10-4.9-10-10.9V249c0-6 4.5-10.9 10-10.9s10 4.9 10 10.9v32.7z" fill="currentColor"></svg:path>`,
})
export class IonMicBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCIcon],svg[ion-mic-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M329.2 32H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-59v-37h59v-43h-59v-37h59v-43h-59v-37h59V84.4c0-29-24.5-52.4-54.8-52.4z" fill="currentColor"></svg:path>`,
})
export class IonMicCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCircleIcon],svg[ion-mic-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.7 103.7 0 0 1 272 334.26V352h16a16 16 0 0 1 0 32h-64a16 16 0 0 1 0-32h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0 1 32 0v23.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V224.3a16 16 0 1 1 32 0Z"></svg:path>`,
})
export class IonMicCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCircleOutlineIcon],svg[ion-mic-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 368h64m48-143.7v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3m80 95.7v48"></svg:path><svg:rect width="96" height="160" x="208" y="128" fill="currentColor" rx="48" ry="48"></svg:rect>`,
})
export class IonMicCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicCircleSharpIcon],svg[ion-mic-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.7 103.7 0 0 1 272 334.26V352h32v32h-96v-32h32v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208.3h32v39.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V208.3h32Z"></svg:path>`,
})
export class IonMicCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffIcon],svg[ion-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.7 111.7 0 0 1-2.68 24.38a2 2 0 0 0 .53 1.84l22.59 22.59a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35l-18.4-18.39a3 3 0 0 0-3.41-.58A111 111 0 0 1 256 352m1.14-304a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48"></svg:path><svg:path fill="currentColor" d="M179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35Z"></svg:path>`,
})
export class IonMicOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffCircleIcon],svg[ion-mic-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 80a48.14 48.14 0 0 1 48 48v64a48 48 0 0 1-.63 7.71a2 2 0 0 1-3.46 1l-84.42-92.86a4 4 0 0 1-.47-4.77A48.08 48.08 0 0 1 256 128m32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 224 352h16v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0 1 16.39-16A16.26 16.26 0 0 1 192 224.4v23.82c0 25.66 28 55.48 64 55.48c1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 0 1 3.29 1.29l21.07 23.19a2 2 0 0 1-.89 3.26a100 100 0 0 1-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 288 384m-77.89-138.91l36.46 40.11a1 1 0 0 1-.95 1.66a48.26 48.26 0 0 1-37.25-41a1 1 0 0 1 1.74-.77m152.65 119.75a16 16 0 0 1-22.6-1.08l-192-210a16 16 0 0 1 23.68-21.52l192 210a16 16 0 0 1-1.08 22.6M352 248.22a77.1 77.1 0 0 1-11.93 40.87a2 2 0 0 1-3.19.3l-19.19-21.1a4 4 0 0 1-.76-4.16a43.4 43.4 0 0 0 3.07-15.91v-23.8a16.3 16.3 0 0 1 13.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12Z"></svg:path>`,
})
export class IonMicOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffCircleOutlineIcon],svg[ion-mic-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369m0-120.78v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.4 43.4 0 0 1-3.07 15.91a4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.1 77.1 0 0 0 352 248.22M304 240v-64a48.14 48.14 0 0 0-48-48a48.08 48.08 0 0 0-41 23.1a4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A48 48 0 0 0 304 240m-57.43 45.2l-36.46-40.11a1 1 0 0 0-1.74.8a48.26 48.26 0 0 0 37.25 41a1 1 0 0 0 .95-1.69"></svg:path><svg:path fill="currentColor" d="M287.55 352H272v-17.74a100 100 0 0 0 12.53-3.06a2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24c-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.7 103.7 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23"></svg:path>`,
})
export class IonMicOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffCircleSharpIcon],svg[ion-mic-off-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m64 200.22V208h32v40.22a77.53 77.53 0 0 1-13.37 43.11L316 266.4a44.1 44.1 0 0 0 4-18.18M256 128a48.14 48.14 0 0 1 48 48v64a48 48 0 0 1-1.44 11.64l-89-97.92A48.13 48.13 0 0 1 256 128m48 256h-96v-32h32v-17.74a103.7 103.7 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208h32v40.22c0 25.66 28 55.48 64 55.48a57 57 0 0 0 7-.45l24.52 27a99.6 99.6 0 0 1-15.5 4V352h32Zm-95.91-141.13l40.5 44.55a48.2 48.2 0 0 1-40.5-44.55m136.07 124.89l-200.5-218.5l23.68-21.52l200.5 218.5Z"></svg:path>`,
})
export class IonMicOffCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffOutlineIcon],svg[ion-mic-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.6 111.6 0 0 1-2.45 23.31a4.05 4.05 0 0 0 1.07 3.69l21.82 21.81a2 2 0 0 0 3.29-.72A143.3 143.3 0 0 0 400 240M256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.1 143.1 0 0 0 52-16.22a4 4 0 0 0 .91-6.35L307 342.63a4 4 0 0 0-4.51-.78A110.8 110.8 0 0 1 256 352m0-272a47.18 47.18 0 0 1 48 48v74.72a4 4 0 0 0 1.17 2.82L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 0 0-68.47 36.57a4 4 0 0 0 .54 5l19.54 19.54a2 2 0 0 0 3.25-.63A47.44 47.44 0 0 1 256 80"></svg:path><svg:path fill="currentColor" d="M207.27 242.9L179.41 215a2 2 0 0 0-3.41 1.42V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 77.8 21.19a2 2 0 0 0 .86-3.35l-24.91-24.91a4.08 4.08 0 0 0-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 0 0-1.14-2.35"></svg:path>`,
})
export class IonMicOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOffSharpIcon],svg[ion-mic-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M432 400L96 64"></svg:path><svg:path fill="currentColor" d="M368 192v48a111.7 111.7 0 0 1-2.93 25.45L390.65 291a143.1 143.1 0 0 0 9.35-51v-48Zm-96 240v-48.89a143.1 143.1 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32Zm64-195.63V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34"></svg:path><svg:path fill="currentColor" d="M176 211.63V239a80.9 80.9 0 0 0 23.45 56.9a78.55 78.55 0 0 0 81 20.21Z"></svg:path>`,
})
export class IonMicOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicOutlineIcon],svg[ion-mic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64a63.68 63.68 0 0 0-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64"></svg:path>`,
})
export class IonMicOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMicSharpIcon],svg[ion-mic-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"></svg:path><svg:path fill="currentColor" d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.9 80.9 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81"></svg:path>`,
})
export class IonMicSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusIcon],svg[ion-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 224h384v64H64z" fill="currentColor"></svg:path>`,
})
export class IonMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusCircledIcon],svg[ion-minus-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z" fill="currentColor"></svg:path>`,
})
export class IonMinusCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMinusRoundIcon],svg[ion-minus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonMinusRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionModelSIcon],svg[ion-model-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M508.8 390.9c-.6 4.1-1.6 8.1-3.1 11.2-2.7 5.5-5.3 6-15.5 5.5-13.2-.6-32.1 0-52.1.8 0 5.5.2 8.1.2 8.1 1.3 15.1 8.1 15.6 10.8 15.6h43c3.8 0 7.3 0 10-1.8 3.5-2.3 5-9 6.3-20.7.2-1.7.3-3.9.4-6.5v-.1c0-.8.1-1.8.1-2.9V399c0-2.7 0-5.7-.1-8.1z" fill="currentColor"></svg:path><svg:path d="M3 390.9c.6 4.1 1.6 8.1 3.1 11.2 2.7 5.5 5.3 6 15.5 5.5 13.2-.6 32.1 0 52.1.8 0 5.5-.2 8.1-.2 8.1-1.3 15.1-8.1 15.6-10.8 15.6h-43c-3.8 0-7 0-10-1.8-3.6-2.1-5-9-6.3-20.7-.2-1.7-.3-3.9-.4-6.5v-.1c0-.8-.1-1.8-.1-2.9V399c.1-2.7.1-5.7.1-8.1z" fill="currentColor"></svg:path><svg:path d="M512 296.6c0-30.7-4-60.7-5.6-64-1.2-2.4-8.9-8.7-26.4-20.6-17.7-12.1-17.3-10.3-20.5-18.2 2.9-.9 5.7-2.6 7.4-2.8 3.8-.4 4 3.2 11.9 3.2s25-2.1 28.5-5.6c3.5-3.5 4.6-4.7 4.6-7.8s-1.8-9.5-5.2-13.3-17.9-5.7-26.4-6.8-9.7 0-11.9 1.4c-3.5 2.2-3.7 22.3-3.7 22.3l-8.3.2c-5.4-13.3-12.9-40.1-24.6-61.2-12.8-23-26.2-30.2-31.8-32-5.5-1.7-10.5-2.9-48-6.7-38.3-4-68.8-4.5-96-4.5s-57.7.6-96 4.5c-37.5 3.9-42.5 5-48 6.7-5.5 1.7-19 9-31.8 32-11.7 21.1-19.2 47.9-24.6 61.2l-8.3-.2s-.1-20.1-3.7-22.3c-2.2-1.4-3.4-2.6-11.9-1.4s-23 3-26.4 6.8S.1 177.7.1 180.8s1.1 4.4 4.6 7.8c3.5 3.5 20.6 5.6 28.5 5.6s8.1-3.6 11.9-3.2c1.7.2 4.6 1.9 7.4 2.8-3.3 7.9-2.8 6.1-20.5 18.2-17.5 12-25.3 18.2-26.4 20.6-1.6 3.3-5.6 33.3-5.6 64s2.2 58.3 2.2 68.1c0 4.1 0 11.3.9 18.2.6 4.1 1.5 8.1 3.1 11.2 2.7 5.5 5.2 6 15.5 5.5 13.2-.6 32.3 0 52 .8 13.2.5 26.7 1 38.7 1.3 30 .6 21.2-4.4 34-4.2 12.8.2 63.3 2.3 109.5 2.3s96.8-2.1 109.5-2.3c12.8-.2 4 4.8 34 4.2 12-.2 25.5-.8 38.7-1.3 19.7-.7 38.9-1.4 52-.8 10.3.5 12.8 0 15.5-5.5 1.5-3.1 2.5-7.1 3.1-11.2 1-6.9.9-14.1.9-18.2.2-9.7 2.4-37.4 2.4-68.1zM86.2 145.2c4.8-11.2 19.2-33.7 26.2-37.7 1.7-1 16.6-5.7 53.9-8.2 34.3-2.3 72.2-3.2 89.8-3.2s55.5.9 89.8 3.2c37.2 2.5 52.3 7.1 53.9 8.2 9 6.2 21.4 26.5 26.2 37.7 4.8 11.2 11.2 33.2 10 36.2-1.2 3 1.2 4.5-15 3.2-16.1-1.2-117.2-2.5-164.8-2.5-47.5 0-148.6 1.3-164.8 2.5-16.2 1.2-13.8-.2-15-3.2-1.4-3 5-24.9 9.8-36.2zM123 270.4c-7.2 1.8-11.5 5.7-20.5 5.6-9 0-33.3-4.1-38.5-4.3-5.2-.2-9.8 3.5-12.5 4.2s-8-1.2-16-3.7-12.7-1.8-15.3-12.7c-2.7-10.8 0-26.3 0-26.3 17.3-.8 34 .8 65.3 9.6 31.3 8.8 48.7 25.7 48.7 25.7s-4 .1-11.2 1.9zm235.2 78.8c-14.3 1.9-74.2 2.4-102.2 2.4s-87.9-.6-102.2-2.4c-14.6-1.9-33.6-19.4-20.5-33.3 17.7-18.9 14.4-18.3 54.6-23.5 34.8-4.5 61.2-4.7 68.1-4.7 6.8 0 33.3.3 68.1 4.7 40.2 5.2 36.9 4.6 54.6 23.5 13.1 13.9-5.9 31.4-20.5 33.3zm133.6-89.6c-2.7 10.8-7.3 10.2-15.3 12.7s-13.3 4.3-16 3.7-7.3-4.3-12.5-4.2c-5.2.2-29.5 4.3-38.5 4.3s-13.3-3.8-20.5-5.6c-7.2-1.8-11.2-1.8-11.2-1.8s17.3-17 48.7-25.7c31.3-8.8 48-10.4 65.3-9.6 0-.2 2.7 15.3 0 26.2z" fill="currentColor"></svg:path>`,
})
export class IonModelSIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMonitorIcon],svg[ion-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M468.7 64H43.3c-6 0-11.3 5-11.3 11.1v265.7c0 6.2 5.2 11.1 11.3 11.1h425.4c6 0 11.3-5 11.3-11.1V75.1c0-6.1-5.2-11.1-11.3-11.1zM448 320H64V96h384v224z" fill="currentColor"></svg:path><svg:path d="M302.5 448c28-.5 41.5-3.9 29-12.5-12.5-8.7-28.5-15.3-29-22.5-.3-3.7-1.7-45-1.7-45h-89.6s-1.5 41.3-1.7 45c-.5 7.1-16.5 13.8-29 22.5s1 12 29 12.5h93z" fill="currentColor"></svg:path>`,
})
export class IonMonitorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoonIcon],svg[ion-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480"></svg:path>`,
})
export class IonMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoonOutlineIcon],svg[ion-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216"></svg:path>`,
})
export class IonMoonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoonSharpIcon],svg[ion-moon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61"></svg:path>`,
})
export class IonMoonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoreIcon],svg[ion-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"></svg:path><svg:path d="M256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48z" fill="currentColor"></svg:path><svg:path d="M398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z" fill="currentColor"></svg:path>`,
})
export class IonMoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMouseIcon],svg[ion-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32c-.46 0-.917.011-1.376.015l5.747.057A147.44 147.44 0 0 0 256 32z" fill="currentColor"></svg:path><svg:path d="M378.553 193.211c-.195.064-.414.16-.619.269-34.234 13.289-76.337 22.52-121.886 22.475-45.52-.076-87.626-9.398-121.81-22.772a4.153 4.153 0 0 0-.647-.265c-1.531-.554-3.146-.897-4.841-.917-.254-.001-.5-.013-.75 0v176.012C128 429.892 185.308 480 256 480c21.992 0 42.687-4.803 60.766-13.355.095-.045.191-.087.286-.133l.08-.039a141.38 141.38 0 0 0 14.122-7.828C363.219 438.275 384 405.271 384 368.012V192c-.191-.008-.496 0-.689 0-1.727.014-3.219.651-4.758 1.211zm-61.421 273.213l-.08.039-.286.133.286-.133.08-.039a141.155 141.155 0 0 0 14.122-7.825 131.95 131.95 0 0 1-14.122 7.825z" fill="currentColor"></svg:path><svg:path d="M331.254 458.599a141.155 141.155 0 0 1-14.122 7.825 131.95 131.95 0 0 0 14.122-7.825z" fill="currentColor"></svg:path><svg:path d="M260.371 32.072l-5.747-.057C184.566 32.662 128 82.547 128 144v22.708a31.748 31.748 0 0 0 7.251 5.115c.673.337 1.386.659 2.059.996.032.027.077.01.109.036 22.757 10.35 51.429 15.801 83.415 19.006.694.078 1.397.107 2.148.12 11.258.016 17.014.019 17.018-10.57V96c0-8.836 7.164-16 16-16s16 7.164 16 16v86.328c-.088 9.672 5.926 9.72 17.2 9.749a31.112 31.112 0 0 0 2.081-.105c.062-.003.141.005.244-.02 31.682-3.119 60.143-8.405 82.808-18.59 1.162-.545 2.291-1.056 3.407-1.581a32.006 32.006 0 0 0 6.26-4.466V144c0-60.575-54.961-109.91-123.629-111.928z" fill="currentColor"></svg:path>`,
})
export class IonMouseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoveIcon],svg[ion-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class IonMoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoveOutlineIcon],svg[ion-move-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class IonMoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMoveSharpIcon],svg[ion-move-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448"></svg:path>`,
})
export class IonMoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicNoteIcon],svg[ion-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" fill="currentColor"></svg:path>`,
})
export class IonMusicNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNoteIcon],svg[ion-musical-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M183.83 480a55.2 55.2 0 0 1-32.36-10.55A56.64 56.64 0 0 1 128 423.58a50.26 50.26 0 0 1 34.14-47.73L213 358.73a16.25 16.25 0 0 0 11-15.49V92a32.1 32.1 0 0 1 24.09-31.15l108.39-28.14A22 22 0 0 1 384 54v57.75a32.09 32.09 0 0 1-24.2 31.19l-91.65 23.13A16.24 16.24 0 0 0 256 181.91V424a48.22 48.22 0 0 1-32.78 45.81l-21.47 7.23a56 56 0 0 1-17.92 2.96"></svg:path>`,
})
export class IonMusicalNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNoteOutlineIcon],svg[ion-musical-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 343.31V424a32.28 32.28 0 0 1-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32h0A34.29 34.29 0 0 1 167.25 391l50.87-17.12A32.29 32.29 0 0 0 240 343.24V92a16.13 16.13 0 0 1 12.06-15.66L360.49 48.2A6 6 0 0 1 368 54v57.76a16.13 16.13 0 0 1-12.12 15.67l-91.64 23.13A32.25 32.25 0 0 0 240 181.91v39.39"></svg:path>`,
})
export class IonMusicalNoteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNoteSharpIcon],svg[ion-musical-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 0 0-1.55 1.94V353.3a2 2 0 0 1-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06c0 32.47 23.53 47.18 37.95 50a82 82 0 0 0 15 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 0 1 1.49-1.94l125-33a2 2 0 0 0 1.49-1.94V34a2 2 0 0 0-2.43-1.95"></svg:path>`,
})
export class IonMusicalNoteSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNotesIcon],svg[ion-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05l-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.8 55.8 0 0 0 17.75-2.93l.38-.13l21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09l-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8a54.63 54.63 0 0 0 49.88 7.35l.36-.12l21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63"></svg:path>`,
})
export class IonMusicalNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNotesOutlineIcon],svg[ion-musical-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 0 1 416 154v22"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0 1 23-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 0 0-12.6-9.61L204 102a16.48 16.48 0 0 0-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80"></svg:path>`,
})
export class IonMusicalNotesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionMusicalNotesSharpIcon],svg[ion-musical-notes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.46 32.07c-23.6 6.53-205.55 58.81-250.54 71.43a4 4 0 0 0-2.92 3.83v247a2 2 0 0 1-1.33 1.89l-27.85 9.55c-19 7.44-66.82 16.68-66.82 59.19c0 35.54 24.63 51.54 45.86 54.28a52 52 0 0 0 7.81.8c7.37 0 36.38-7.08 53.3-18.08C208 448.25 208 448 208 412V202c0-.9.62-.84 1.48-1.07l188-51.92a2 2 0 0 1 2.53 2v155.54a2 2 0 0 1-1.36 1.89c-8.9 3-19.23 6.5-26.48 9.12C341.39 328.68 304 335.65 304 376c0 38.51 28.26 54.58 46.3 55.83a87.4 87.4 0 0 0 21.33-1c9-1.38 24.09-5.9 38.14-14.86C432 401.79 432 401.51 432 360V34a2 2 0 0 0-2.54-1.93"></svg:path>`,
})
export class IonMusicalNotesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNaviconIcon],svg[ion-navicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 241h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 145h320v32H96z" fill="currentColor"></svg:path><svg:path d="M96 337h320v32H96z" fill="currentColor"></svg:path>`,
})
export class IonNaviconIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNaviconRoundIcon],svg[ion-navicon-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path><svg:path d="M417.4 96H94.6C77.7 96 64 110.3 64 128s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path><svg:path d="M417.4 352H94.6C77.7 352 64 366.3 64 384s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonNaviconRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateIcon],svg[ion-navigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 464a16 16 0 0 1-16-16.42V264.13a8 8 0 0 0-8-8H64.41a16.31 16.31 0 0 1-15.49-10.65a16 16 0 0 1 8.41-19.87l384-176.15a16 16 0 0 1 21.22 21.19l-176 384A16 16 0 0 1 272 464"></svg:path>`,
})
export class IonNavigateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleIcon],svg[ion-navigate-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24"></svg:path>`,
})
export class IonNavigateCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleOutlineIcon],svg[ion-navigate-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonNavigateCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateCircleSharpIcon],svg[ion-navigate-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208m-8 361V264H103l259-114.11Z"></svg:path>`,
})
export class IonNavigateCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateOutlineIcon],svg[ion-navigate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 64L64 240.14h200a8 8 0 0 1 8 8V448Z"></svg:path>`,
})
export class IonNavigateOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNavigateSharpIcon],svg[ion-navigate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32L32 240h240v240z"></svg:path>`,
})
export class IonNavigateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNetworkIcon],svg[ion-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 96c0-35.29-28.71-64-64-64s-64 28.71-64 64c0 23.637 12.89 44.307 32 55.391v52.832l-96 48-96-48v-52.832c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391v92.387l128 64v52.832c-19.11 11.084-32 31.754-32 55.391 0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387c19.11-11.084 32-31.754 32-55.391zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm128 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm128-320c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNewspaperIcon],svg[ion-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32a32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112"></svg:path><svg:path fill="currentColor" d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15a1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416M96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336m0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208m0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144"></svg:path>`,
})
export class IonNewspaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNewspaperOutlineIcon],svg[ion-newspaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"></svg:path><svg:path fill="currentColor" d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonNewspaperOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNewspaperSharpIcon],svg[ion-newspaper-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="96" height="96" x="96" y="112" fill="none" rx="16" ry="16"></svg:rect><svg:path fill="currentColor" d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"></svg:path><svg:path fill="currentColor" d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"></svg:path>`,
})
export class IonNewspaperSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNoSmokingIcon],svg[ion-no-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 256h16v48h-16z" fill="currentColor"></svg:path><svg:path d="M112 304h137.6l-48-48H112z" fill="currentColor"></svg:path><svg:path d="M364.5 60.1c-.4-.2-.7-.4-1-.6-10.9-6-22.5-10.7-34.4-14.8l-5.4-1.8C302.3 36.1 279.6 32 256 32 132.3 32 32 132.3 32 256c0 84.3 46.6 157.6 115.4 195.8.4.2.7.5 1.1.7 10.9 6 22.5 10.7 34.4 14.8l5.4 1.8c21.4 6.8 44 10.9 67.7 10.9 123.7 0 224-100.3 224-224 0-84.3-46.6-157.7-115.5-195.9zM256 426.4c-9.3 0-18.4-.9-27.2-2.4-9.8-1.6-19.3-4.1-28.5-7.3-1.9-.6-3.8-1.2-5.6-1.9-6.5-2.5-12.9-5.3-19-8.6-53.6-28.7-90.1-85.2-90.1-150.3 0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6 9.3 0 18.3.9 27.2 2.4 9.8 1.6 19.3 4.1 28.5 7.3 1.8.6 3.7 1.2 5.6 1.9 6.2 2.4 12.2 5 18 8.1 54.2 28.5 91.2 85.3 91.2 150.8-.1 37.2-12.5 71.3-32.7 99.3z" fill="currentColor"></svg:path><svg:path d="M352 298v-42h-42z" fill="currentColor"></svg:path><svg:path d="M384 256h16v48h-16z" fill="currentColor"></svg:path><svg:path d="M360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9 1.6-2.4 1.8-5.6.4-8.2-1.4-2.6-4.1-4.2-7-4.3-.1 0-9.4-.1-18.3-3.9-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38 4.2 1.7 8.4 2.9 12 3.6-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 11.5 6.6 19.7v1h16v-1c0-7.1.3-26.8-15.7-34.2z" fill="currentColor"></svg:path><svg:path d="M400 248c0-25.7-3-43.2-9.1-53.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3-1.4 2.5-1.3 5.5.1 7.9 1.4 2.4 4.1 3.9 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 17.5 6.9 45.4h16z" fill="currentColor"></svg:path>`,
})
export class IonNoSmokingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsIcon],svg[ion-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class IonNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleIcon],svg[ion-notifications-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.45a4 4 0 0 1 4 4.48C293.15 374.85 276.68 384 256 384m98-48H158c-11.84 0-18-15-11.19-23c16.33-19.34 27.87-27.47 27.87-80.8c0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 0 0 6.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.4 11.4 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.53 61.46 27.86 80.8c6.74 7.99.57 22.99-11.2 22.99"></svg:path>`,
})
export class IonNotificationsCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleOutlineIcon],svg[ion-notifications-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-21.24 8.46-47 25.8-47 74.67c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313m-144.96 39a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 0 0-4-4.48Z"></svg:path>`,
})
export class IonNotificationsCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsCircleSharpIcon],svg[ion-notifications-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M295.68 351.43v.57h.32Z"></svg:path><svg:path fill="none" d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32m39.67-32h.33l-.32-.57c0 .19-.01.38-.01.57"></svg:path><svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32m112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"></svg:path>`,
})
export class IonNotificationsCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffIcon],svg[ion-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464m-7.92-122.69c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.1 3.1 0 0 1-.81.65a158 158 0 0 0-21.88 11a8 8 0 0 0-1.49 12.49l261.78 261.74a8 8 0 0 0 13.6-6.63a35.4 35.4 0 0 0-7.84-18.5M112.14 217.35c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 0 0 5.66-13.66l-192-192a8 8 0 0 0-13.62 5q-.7 8.69-.7 18.04M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480"></svg:path>`,
})
export class IonNotificationsOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffCircleIcon],svg[ion-notifications-off-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48M146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 0 1 7-2.52l98 106.87a4 4 0 0 1-2.94 6.7H158C146.18 336 140.06 321 146.83 313m148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.53a4 4 0 0 1 3.98 4.42Zm67 17.42a16 16 0 0 1-22.6-1.08l-192-212a16 16 0 0 1 23.68-21.52l192 212a16 16 0 0 1-1.08 22.61ZM361 323.21L216.49 165.53a4 4 0 0 1 1.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 0 0 6.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67c0 53.33 11.54 61.46 27.87 80.8a12.1 12.1 0 0 1 2.76 7.25a4 4 0 0 1-6.97 2.95"></svg:path>`,
})
export class IonNotificationsOffCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffCircleOutlineIcon],svg[ion-notifications-off-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 0 0-4-4.42ZM352 378a15.93 15.93 0 0 1-11.84-5.24l-192-212a16 16 0 0 1 23.68-21.52l192 212A16 16 0 0 1 352 378M174.68 232.21c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23h118.83a4 4 0 0 0 2.95-6.7l-98-106.87a4 4 0 0 0-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.4 11.4 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 0 0-1.3 6.36L361 323.21a4 4 0 0 0 6.94-2.95a12 12 0 0 0-2.74-7.26"></svg:path>`,
})
export class IonNotificationsOffCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffCircleSharpIcon],svg[ion-notifications-off-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48M144 308l28-36v-32.3a132 132 0 0 1 2.34-25.42L285.92 336H144Zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32m93.48-3.74l-211-227l23.68-21.52l211 227ZM368 330.85l-.32-.38l-155.5-169.63a73.4 73.4 0 0 1 15.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z"></svg:path>`,
})
export class IonNotificationsOffCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffOutlineIcon],svg[ion-notifications-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43C73.69 364.45 83 384 101.62 384H320m94.5-48.7c-18.48-23.45-30.62-47.05-30.62-118c0-79.3-40.52-107.57-73.88-121.3c-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a150 150 0 0 0-18 8.79M320 384v16a64 64 0 0 1-128 0v-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 448L64 64"></svg:path>`,
})
export class IonNotificationsOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOffSharpIcon],svg[ion-notifications-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m41.37 64l22.628-22.628l406.629 406.63l-22.628 22.627zM256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48M112 227.47V288l-48 64v48h268.12L115.87 183.75a237 237 0 0 0-3.87 43.72M448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.5 117.5 0 0 0-41.95 18.17l282 282Z"></svg:path>`,
})
export class IonNotificationsOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsOutlineIcon],svg[ion-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57M320 384v16a64 64 0 0 1-128 0v-16"></svg:path>`,
})
export class IonNotificationsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNotificationsSharpIcon],svg[ion-notifications-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48m144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48Z"></svg:path>`,
})
export class IonNotificationsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNuclearIcon],svg[ion-nuclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48M429 239.92l-93.08-.1a2 2 0 0 1-1.95-1.57a80.08 80.08 0 0 0-27.44-44.17a2 2 0 0 1-.54-2.43l41.32-83.43a2 2 0 0 1 2.87-.81A176.2 176.2 0 0 1 431 237.71a2 2 0 0 1-2 2.21m-220.8 20.46a48 48 0 1 1 43.42 43.42a48 48 0 0 1-43.42-43.42m-43.55-152.16L206 191.65a2 2 0 0 1-.54 2.43A80.08 80.08 0 0 0 178 238.25a2 2 0 0 1-2 1.57l-93.08.1a2 2 0 0 1-2-2.21a176.2 176.2 0 0 1 80.82-130.3a2 2 0 0 1 2.91.81m-.37 295.34l56.31-74.09a2 2 0 0 1 2.43-.6a79.84 79.84 0 0 0 66 0a2 2 0 0 1 2.43.6l56.31 74.09a2 2 0 0 1-.54 2.92a175.65 175.65 0 0 1-182.36 0a2 2 0 0 1-.58-2.92"></svg:path>`,
})
export class IonNuclearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNuclearOutlineIcon],svg[ion-nuclear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="256" cy="256" r="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M224 192L171 85m117 107l53-107m-13.45 170.81l119.41.13m-147.87 57.19l72.25 95.06M184.45 255.81l-119.41.13m147.87 57.19l-72.25 95.06"></svg:path>`,
})
export class IonNuclearOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNuclearSharpIcon],svg[ion-nuclear-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="none" d="m223.47 335.59l-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68"></svg:path><svg:path fill="currentColor" d="M403.08 108.92a208 208 0 0 0-294.16 294.16a208 208 0 0 0 294.16-294.16M342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.2 170.2 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.2 170.2 0 0 1 73.83 119l-85.48-.09A86 86 0 0 1 342 256"></svg:path>`,
})
export class IonNuclearSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNutritionIcon],svg[ion-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23c-20.18-1.8-39 3.37-57.23 8.38c-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36c-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134c12.82 22.25 47 74 87.16 74c30.77 0 47.15-9.44 59.11-16.33c8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33c40.17 0 74.34-51.76 87.16-74c25.07-43.5 40-93.59 40-134c.04-52.57-8.14-92.38-24.96-121.71M216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48m80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48"></svg:path><svg:path fill="currentColor" d="M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0 0 28-58.2a8 8 0 0 0-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 0 0 256 103.2a8 8 0 0 0 9.1 8.73"></svg:path>`,
})
export class IonNutritionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNutritionOutlineIcon],svg[ion-nutrition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160c0 80 64 192 111.2 192s51.94-24 80.8-24s33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160Z"></svg:path><svg:path fill="currentColor" d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 0 1-9.1-8.73a97.6 97.6 0 0 1 28.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 0 1 8.67 8.92a98 98 0 0 1-28.08 58.2"></svg:path><svg:ellipse cx="216" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse><svg:ellipse cx="296" cy="304" fill="currentColor" rx="24" ry="48"></svg:ellipse>`,
})
export class IonNutritionOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionNutritionSharpIcon],svg[ion-nutrition-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M438.71 159.43c-17.6-28.31-45.5-43.8-85.28-47.37c-22.82-2-50.23 4.94-72.25 10.55C271.26 125.14 260 128 256 128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54c-38.53 3.61-66 19.19-84 47.62S48 229 48 288c0 61.28 29.53 114.58 47.13 140.89C116.82 461.34 149.25 496 175.2 496c18.57 0 34.12-7.23 47.82-13.64C243 473 256 472 256 472s11 0 31.94 10.11C301.65 488.73 317.3 496 336.8 496c26.58 0 59.08-34.69 80.63-67.15C434.82 402.65 464 349.52 464 288c0-60-8-100.83-25.29-128.57M216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48m80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48s24 21.49 24 48s-10.75 48-24 48"></svg:path><svg:path fill="currentColor" d="M323.72 82.76C353.68 52.82 352 16.18 352 16.14s-35.77-3.76-67.23 27.67S256.06 112 256.06 112s37.68.71 67.66-29.24"></svg:path>`,
})
export class IonNutritionSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOpenIcon],svg[ion-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"></svg:path><svg:path fill="currentColor" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOpenOutlineIcon],svg[ion-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288L440 72"></svg:path>`,
})
export class IonOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOpenSharpIcon],svg[ion-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m201.37 288l176-176H48v352h352V134.63l-176 176z"></svg:path><svg:path fill="currentColor" d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48z"></svg:path>`,
})
export class IonOpenSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOptionsIcon],svg[ion-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32m384 224h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32m0-128H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonOptionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOptionsOutlineIcon],svg[ion-options-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"></svg:path><svg:circle cx="336" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="176" cy="256" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="336" cy="384" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonOptionsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOptionsSharpIcon],svg[ion-options-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M381.25 112a48 48 0 0 0-90.5 0H48v32h242.75a48 48 0 0 0 90.5 0H464v-32ZM176 208a48.09 48.09 0 0 0-45.25 32H48v32h82.75a48 48 0 0 0 90.5 0H464v-32H221.25A48.09 48.09 0 0 0 176 208m160 128a48.09 48.09 0 0 0-45.25 32H48v32h242.75a48 48 0 0 0 90.5 0H464v-32h-82.75A48.09 48.09 0 0 0 336 336"></svg:path>`,
})
export class IonOptionsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionOutletIcon],svg[ion-outlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M369.541 32H142.359C81.521 32 32 82.574 32 144.604v222.79C32 429.426 81.521 480 142.359 480h227.182C430.479 480 480 429.426 480 367.395v-222.79C480 82.574 430.479 32 369.541 32zM175 250.954v.67c0 10.882-9.09 20.376-19.875 20.376h-23.27C121.073 272 112 262.506 112 251.624V148.161c1-10.768 9.193-20.161 19.855-20.161h23.27c10.886 0 19.875 9.847 19.875 20.831v102.123zM297 395.74v2.68c0 11.439-8.872 17.58-20.1 17.58h-41.798c-11.23 0-20.102-8.141-20.102-19.58v-29.317c0-23.33 18.118-42.287 40.999-42.287 22.883 0 41.001 18.957 41.001 42.287v28.637zm103-144.786v.67c0 10.882-9.071 20.376-19.855 20.376h-24.27C345.093 272 336 262.506 336 251.624V148.161c1-10.768 9.215-20.161 19.875-20.161h24.27c10.784 0 19.855 9.847 19.855 20.831v102.123z" fill="currentColor"></svg:path>`,
})
export class IonOutletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaintbrushIcon],svg[ion-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M149.515 283.349c-51.921 0-83.939 45.661-83.939 95.085 0 22.691-10.071 39.153-33.575 48.104 17.907 34.678 87.777 41.157 117.515 35.797 35.642-6.426 80.077-24.873 90.654-76.969 12.31-60.627-38.736-102.017-90.655-102.017z" fill="currentColor"></svg:path><svg:path d="M467.638 60.356c-12.955-12.948-29.964-17.292-44.92-5.35L247.598 209.1c-8.648-2.371-16.525-1.869-22.909 2.346L165.896 260.4c-1.611 1.611-1.545 4.304.066 5.914.499.501 1.064.79 1.697.98.642.034 1.264.059 1.899.103.019-.002.036-.01.054-.014 47.938 3.432 91.034 36.754 89.3 89.506-.016.505-.029 1.007-.054 1.516.123.848.5 1.664 1.149 2.315a4.124 4.124 0 0 0 5.781.044c.018-.018.037-.027.055-.044.063-.063.106-.137.164-.2l50.457-57.342c4.216-6.374 4.72-14.24 2.355-22.875l154.169-175.047c11.951-14.948 7.604-31.948-5.35-44.9z" fill="currentColor"></svg:path><svg:path d="M165.887 260.409l.009-.009-.008.007z" fill="currentColor"></svg:path>`,
})
export class IonPaintbrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaintbucketIcon],svg[ion-paintbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64l39.667 72.102L16 288l197.604 192 163.328-160 58.33-12.307L160 32l-32 32zm197.131 224H104.857L215 177.863 325.131 288z" fill="currentColor"></svg:path><svg:path d="M435.262 307.693s-60.734 66.179-60.732 99.207c0 33.028 27.192 59.803 60.731 59.801 33.548.002 60.74-26.772 60.739-59.801.001-33.028-60.738-99.207-60.738-99.207z" fill="currentColor"></svg:path>`,
})
export class IonPaintbucketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperAirplaneIcon],svg[ion-paper-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M32 272l128 48 16 160 80-112 112 112L480 32 32 272zm318.7 145.4L256 320l128-176-192 153.8-82.6-31 322-172.5-80.7 323.1z" fill="currentColor"></svg:path>`,
})
export class IonPaperAirplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneIcon],svg[ion-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05"></svg:path>`,
})
export class IonPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneOutlineIcon],svg[ion-paper-plane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m53.12 199.94l400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06M460 52L227 285"></svg:path>`,
})
export class IonPaperPlaneOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperPlaneSharpIcon],svg[ion-paper-plane-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 16L15.88 208L195 289L448 64L223 317l81 179z"></svg:path>`,
})
export class IonPaperPlaneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPaperclipIcon],svg[ion-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M324.6 154.9c-6.3-.1-11.4 5.1-11.4 11.6l-.2 194.8c-.1 43.8-29.7 63.4-57.2 63.2-27.5-.3-57.1-20.4-57-64.1 0-33.5.2-167.7.3-234.8 0-15.4 6-27.4 16.8-33.7 10.6-6.2 24.4-6.1 35 .3 10.8 6.5 16.7 18.6 16.7 34l-.3 224.5c0 7.3-1.7 13.3-4.7 17.1-1.9 2.4-4.4 3.8-6.9 3.8-5.6-.1-11.4-7.3-11.3-20.8 0 0 .2-166.3.3-172.7 0-6.5-5.1-11.8-11.4-11.8-6.3 0-11.4 5.2-11.4 11.7l-.3 172.7c0 29 17.2 44.3 34.2 44.5 9.4.1 18.3-4.4 24.6-12.4 6.3-8 9.7-19 9.7-31.8l.3-224.5c0-23.8-10.2-43.6-28.1-54.3-17.5-10.6-40.3-10.8-57.9-.5-17.9 10.5-28.2 30.1-28.3 53.9-.1 67-.2 201.2-.3 234.8-.1 57.2 40.1 87.4 79.8 87.8 20.5.2 41.1-7.7 56.3-23.1 14.2-14.5 23.7-35.7 23.7-63.4l.1-194.9c.3-6.6-4.8-11.9-11.1-11.9z" fill="currentColor"></svg:path>`,
})
export class IonPaperclipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPartlySunnyIcon],svg[ion-partly-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0 1 42.19 53.21a16 16 0 0 0 11.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m47.89-258.32a168.8 168.8 0 0 1 34.76 14.71a4 4 0 0 0 5.82-2.44a97 97 0 0 0 3.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 0 0 281 129.33h-.06a3.38 3.38 0 0 0 1 6a162.5 162.5 0 0 1 51.28 26.4a173.9 173.9 0 0 1 45.32 52.51a16 16 0 0 0 9.35 7.44M496 224h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32M336 96a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16m-90.51 37.49a15.92 15.92 0 0 1-11.31-4.69l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1-11.31 27.31m181.02 0a16 16 0 0 1-11.31-27.31l22.62-22.63a16 16 0 0 1 22.63 22.63l-22.63 22.62a15.92 15.92 0 0 1-11.31 4.69"></svg:path>`,
})
export class IonPartlySunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPartlySunnyOutlineIcon],svg[ion-partly-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384.8 271.4a80 80 0 1 0-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63m203.65-22.63l-22.63 22.63"></svg:path>`,
})
export class IonPartlySunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPartlySunnySharpIcon],svg[ion-partly-sunny-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.5-260.11a169.2 169.2 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.5 162.5 0 0 1 57.73 28.23a174.5 174.5 0 0 1 48.31 58.13M448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45l-44.62-44.63l-22.63 22.63l33.17 33.17h.6a172 172 0 0 1 21.03 1.28m148.853-12.46l44.626-44.625l22.627 22.627l-44.625 44.626z"></svg:path>`,
})
export class IonPartlySunnySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseIcon],svg[ion-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseCircleIcon],svg[ion-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonPauseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseCircleOutlineIcon],svg[ion-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 192v128m96-128v128"></svg:path>`,
})
export class IonPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseCircleSharpIcon],svg[ion-pause-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 288h-32V176h32Zm96 0h-32V176h32Z"></svg:path>`,
})
export class IonPauseCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseOutlineIcon],svg[ion-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zm144 0h16v320h-16z"></svg:path>`,
})
export class IonPauseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPauseSharpIcon],svg[ion-pause-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 432h-80V80h80Zm144 0h-80V80h80Z"></svg:path>`,
})
export class IonPauseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPawIcon],svg[ion-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.5 46.5 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61c-10.37 24.9-11.56 51.68-3.18 71.64c5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.5 46.5 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65c10.24-24.87 11.37-51.63 2.98-71.6M381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48c-18.07 10.86-36.74 22.08-44.8 44.16a66.9 66.9 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2c17.75 0 36.64-6.15 56.63-12.66c19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19M150 188.85c11.9 14.93 27 23.15 42.52 23.15a43 43 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11C212.12 56.21 197 48 181.49 48a43 43 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90c2.76 19.2 10.16 37.09 20.76 50.38m163.16 22.68a43 43 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15c10.59-13.29 17.95-31.18 20.75-50.4c6.62-45.72-13.55-85.22-45.92-90a43 43 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44c-6.62 45.72 13.55 85.22 45.92 89.98M111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48c8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48c-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2"></svg:path>`,
})
export class IonPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPawOutlineIcon],svg[ion-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M457.74 170.1a30.3 30.3 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76c-14.23 34.18-7.68 69.15 14.74 78.14a30.2 30.2 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76c14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.9 50.9 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2c31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.5 26.5 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.5 26.5 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196Zm174.41-59.85c5.26-36.32-9.23-68.48-32.44-71.85a26.5 26.5 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85c-5.26 36.32 9.23 68.48 32.44 71.85a26.5 26.5 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.2 30.2 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.2 30.2 0 0 0 11.15-2.1Z"></svg:path>`,
})
export class IonPawOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPawSharpIcon],svg[ion-paw-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12c-17.23-10.71-33.5-20.83-44.14-39c-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08c-19.8 12.31-40.27 25-49.1 50.05a78.1 78.1 0 0 0-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464S448 430.85 448 390.11a78.3 78.3 0 0 0-5.2-28.29"></svg:path><svg:ellipse cx="72" cy="216" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="184" cy="120" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="328" cy="120" fill="currentColor" rx="56" ry="72"></svg:ellipse><svg:ellipse cx="440" cy="216" fill="currentColor" rx="56" ry="72"></svg:ellipse>`,
})
export class IonPawSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPencilIcon],svg[ion-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13zm54.45-54.44l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0"></svg:path>`,
})
export class IonPencilIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPencilOutlineIcon],svg[ion-pencil-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M364.13 125.25L87 403l-23 45l44.99-23l277.76-277.13zm56.56-56.56l-22.62 22.62l22.62 22.63l22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0"></svg:path>`,
})
export class IonPencilOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPencilSharpIcon],svg[ion-pencil-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M103 464H48v-55L358.14 98.09l55.77 55.78zm322.72-322L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.9 25.9 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83"></svg:path>`,
})
export class IonPencilSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleIcon],svg[ion-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"></svg:path>`,
})
export class IonPeopleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleCircleIcon],svg[ion-people-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0 1 16.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74 74 0 0 1 25.06 4.26a66.7 66.7 0 0 1 26.27 17.2a68.15 68.15 0 0 1 18 42.14a78.5 78.5 0 0 1 0 11.4a86.2 86.2 0 0 1-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.5 79.5 0 0 1-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.6 59.6 0 0 1-19.17-3.18a64 64 0 0 1-6.1-2.43a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68a75.6 75.6 0 0 1 1.05-11.08Zm-149.73 24.34a59.9 59.9 0 0 1 5.2-20.64a57 57 0 0 1 2.78-5.3a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82a57 57 0 0 1 8.11-3.64a63.85 63.85 0 0 1 33.35-2.39a57 57 0 0 1 30.78 17a57.86 57.86 0 0 1 15.41 38.62c.05 2.11 0 4.23-.15 6.38a71.6 71.6 0 0 1-6 23.84a69.5 69.5 0 0 1-5.73 10.42a65.4 65.4 0 0 1-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.2 54.2 0 0 1-10 4.65a49.3 49.3 0 0 1-16.2 2.76c-.93 0-1.86 0-2.78-.08a48 48 0 0 1-5.48-.62a51 51 0 0 1-5.35-1.23a53.5 53.5 0 0 1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23c-18-9.49-31.57-29.16-34.23-52.12c-.12-1.05-.22-2.1-.29-3.16a66.6 66.6 0 0 1 .02-9.63m53.92 178.6a177.27 177.27 0 0 1-61.94-70.65a4 4 0 0 1 1.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 0 1 2.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 0 1-4.22 1.65M256 432a175.1 175.1 0 0 1-65.7-12.72a4 4 0 0 1-2.4-4.46c.4-2.05.84-3.92 1.23-5.48c7.12-28.43 24.76-52 51-68.18c23.29-14.35 53-22.25 83.52-22.25c31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 0 1 .91 3.67A176.1 176.1 0 0 1 256 432"></svg:path><svg:path fill="currentColor" d="M161 295.28a48 48 0 0 1-5.48-.62a48 48 0 0 0 5.48.62m-26.36-117.15a55.6 55.6 0 0 0-14 10.82a54.5 54.5 0 0 0-7.19 9.56a54.5 54.5 0 0 1 7.19-9.56a55.6 55.6 0 0 1 14-10.82m81.53 79.76a71.6 71.6 0 0 0 6-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.6 71.6 0 0 1-6 23.84m-81.53-79.76a57 57 0 0 1 8.11-3.64a57 57 0 0 0-8.11 3.64m15.57 115.3a53.5 53.5 0 0 1-7.72-2.89a53.5 53.5 0 0 0 7.72 2.89m-44.43-56.24c2.66 23 16.26 42.63 34.23 52.12c-18.01-9.49-31.57-29.16-34.23-52.12M254.34 219a83.76 83.76 0 0 0 22 51.32a70.8 70.8 0 0 0 22.07 16.12a70.8 70.8 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68q-.09 3.75.18 7.68m50.16 69.82a64 64 0 0 1-6.1-2.43a64 64 0 0 0 6.1 2.43m-48.57-92.28a66.46 66.46 0 0 1 16.29-31.21a66.46 66.46 0 0 0-16.29 31.21M375 165.46a68.15 68.15 0 0 1 18 42.14a68.15 68.15 0 0 0-18-42.14a66.7 66.7 0 0 0-26.27-17.2a66.7 66.7 0 0 1 26.27 17.2M393 219a86.2 86.2 0 0 1-8.2 31a86.2 86.2 0 0 0 8.2-31m-138.84-7.73a75.6 75.6 0 0 1 1.06-11.14a75.6 75.6 0 0 0-1.06 11.14m-47.28-22.22a57.86 57.86 0 0 1 15.41 38.62a57.86 57.86 0 0 0-15.41-38.62a57 57 0 0 0-30.78-17a57 57 0 0 1 30.78 17M190 288a54.2 54.2 0 0 1-10 4.65a54.2 54.2 0 0 0 10-4.65m-84.51-63.55a59.9 59.9 0 0 1 5.2-20.64a59.9 59.9 0 0 0-5.2 20.64m89.19 60.43C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12m21.49-26.99a69.5 69.5 0 0 1-5.73 10.42a69.5 69.5 0 0 0 5.73-10.42m-105.48-54.08a57 57 0 0 1 2.78-5.3a57 57 0 0 0-2.78 5.3m83.99 81.07a65.4 65.4 0 0 0 15.76-16.57a65.4 65.4 0 0 1-15.76 16.57"></svg:path>`,
})
export class IonPeopleCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleCircleOutlineIcon],svg[ion-people-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208s-93.31 208-208 208m0-384c-97 0-176 79-176 176s79 176 176 176s176-78.95 176-176S353.05 80 256 80"></svg:path><svg:path fill="currentColor" d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 0 1-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 0 1-22 51.3C357.86 284.28 341.06 292 323.67 292m-159.85 3.36c-29.76 0-55.93-27.51-58.33-61.33c-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18s32.12 6.44 43.07 18.14s16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27m256.55 59.92c-1.59-4.7-5.46-9.71-13.22-14.46c-23.46-14.33-52.32-21.91-83.48-21.91c-30.57 0-60.23 7.9-83.53 22.25c-26.25 16.17-43.89 39.75-51 68.18c-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 0 0 232.75-80.17Zm-256.74 46.09c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 0 0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88c-23.82 0-49.11 6.45-68.14 18.17c-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0 0 77.78 86.64l1.79-.14a103 103 0 0 1 3.16-20.02"></svg:path>`,
})
export class IonPeopleCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleCircleSharpIcon],svg[ion-people-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m69.3 96.17a72.5 72.5 0 1 1-72.6 72.5a72.55 72.55 0 0 1 72.6-72.5m-155.1 26.36a59.32 59.32 0 1 1-59.4 59.32a59.35 59.35 0 0 1 59.4-59.32m-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94c15 0 34.32 3 53.33 10.2a133 133 0 0 0-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 0 1-74.42-83.15ZM256 432a175.1 175.1 0 0 1-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09c23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 0 1 256 432"></svg:path>`,
})
export class IonPeopleCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleOutlineIcon],svg[ion-people-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154"></svg:path>`,
})
export class IonPeopleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPeopleSharpIcon],svg[ion-people-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="152" cy="184" r="72" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M234 296c-28.16-14.3-59.24-20-82-20c-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93c11.17-12.68 26.81-24.45 46-34"></svg:path><svg:path fill="currentColor" d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96"></svg:path><svg:circle cx="340" cy="168" r="88" fill="currentColor"></svg:circle>`,
})
export class IonPeopleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonIcon],svg[ion-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"></svg:path>`,
})
export class IonPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonAddIcon],svg[ion-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M104 288v-40h40a16 16 0 0 0 0-32h-40v-40a16 16 0 0 0-32 0v40H32a16 16 0 0 0 0 32h40v40a16 16 0 0 0 32 0"></svg:path>`,
})
export class IonPersonAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonAddOutlineIcon],svg[ion-person-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M88 176v112m56-56H32"></svg:path>`,
})
export class IonPersonAddOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonAddSharpIcon],svg[ion-person-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54z"></svg:path><svg:circle cx="288" cy="144" r="112" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class IonPersonAddSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonCircleIcon],svg[ion-person-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93M256 432a175.5 175.5 0 0 1-126-53.22a122.9 122.9 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.9 122.9 0 0 1 382 378.78A175.45 175.45 0 0 1 256 432"></svg:path>`,
})
export class IonPersonCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonCircleOutlineIcon],svg[ion-person-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48m126.42 327.25a4 4 0 0 1-6.14-.32a124.3 124.3 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.2 124.2 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25"></svg:path><svg:path fill="currentColor" d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144"></svg:path>`,
})
export class IonPersonCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonCircleSharpIcon],svg[ion-person-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m2 96a72 72 0 1 1-72 72a72 72 0 0 1 72-72m-2 288a175.55 175.55 0 0 1-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 0 1 256 432"></svg:path>`,
})
export class IonPersonCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonOutlineIcon],svg[ion-person-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"></svg:path>`,
})
export class IonPersonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonRemoveIcon],svg[ion-person-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 256c52.79 0 99.43-49.71 104-110.82c2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38c-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256m207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75c-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11M144 216H32a16 16 0 0 0 0 32h112a16 16 0 0 0 0-32"></svg:path>`,
})
export class IonPersonRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonRemoveOutlineIcon],svg[ion-person-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M288 304c-87 0-175.3 48-191.64 138.6c-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 232H32"></svg:path>`,
})
export class IonPersonRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonRemoveSharpIcon],svg[ion-person-remove-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 214h144v36H16z"></svg:path><svg:circle cx="288" cy="144" r="112" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class IonPersonRemoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonSharpIcon],svg[ion-person-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 256a112 112 0 1 0-112-112a112 112 0 0 0 112 112m0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128"></svg:path>`,
})
export class IonPersonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPersonStalkerIcon],svg[ion-person-stalker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M425.3 324.8c-41.4-15.7-38.9-9.4-38.9-38.5 0-18.8 9.3-11.9 15.2-47.7 2.3-14.1 4.2-4.7 9.1-27.3 2.6-11.8-1.8-12.7-1.2-18.3.5-5.6 1-10.7 2-22.2 1.2-14.4-11.6-52-57.4-52s-58.6 37.6-57.4 52c.9 11.6 1.5 16.6 2 22.2.5 5.6-3.8 6.5-1.2 18.3 4.9 22.6 6.8 13.1 9.1 27.3 5.9 35.8 15.1 29 15.1 47.7 0 13.4 3.1 19-14.9 27.5 5.4 1.9 11.7 4.2 19.3 7.1 54.4 20.7 53.1 40.8 54.5 50.3 1 6.5 1.5 58.3 1.7 76.8H480s0-80.5-1.5-89.9c-1.1-7.4-11-17.2-53.2-33.3z" fill="currentColor"></svg:path><svg:path d="M357 448s0-14.1-.2-30.4c-.2-18.6-.7-40-1.7-46.4-1.5-9.5-14.3-22.2-68.6-42.9-7.5-2.8-13.8-5.1-19.3-7.1-33.3-11.8-30.9-15.7-30.9-48 0-24.3 12-8.5 19.6-54.6 3-18.2 5.4-6.1 11.7-35.2 3.4-15.2-2.3-16.4-1.6-23.7.7-7.3 1.4-13.8 2.6-28.7 1.6-18.5-14.9-67.1-74.1-67.1-59.2 0-75.6 48.5-74.1 67.1 1.2 14.9 1.9 21.4 2.7 28.7.7 7.3-5 8.4-1.6 23.7 6.4 29.1 8.8 17 11.8 35.2 7.6 46.1 19.5 30.3 19.5 54.6 0 37.6 3.3 34.8-50.2 55.1C48.3 349 35.5 361.7 34 371.2c-2 12.1-2 76.8-2 76.8h325z" fill="currentColor"></svg:path>`,
})
export class IonPersonStalkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhoneLandscapeIcon],svg[ion-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionPhoneLandscape0" fill="currentColor" d="M0 176v160a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V176a64 64 0 0 0-64-64H64a64 64 0 0 0-64 64m448-32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-11.35a7.94 7.94 0 0 1 4.75-7.3A32 32 0 0 0 56 288v-64a32 32 0 0 0-19.25-29.35a7.94 7.94 0 0 1-4.75-7.3V176a32 32 0 0 1 32-32Z"></svg:path></svg:defs><svg:use href="#ionPhoneLandscape0"></svg:use><svg:path fill="currentColor" d="M48 176a11.88 11.88 0 0 0 4.69 9.53A48 48 0 0 1 72 224v64a48 48 0 0 1-19.31 38.47A11.88 11.88 0 0 0 48 336a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16"></svg:path><svg:use href="#ionPhoneLandscape0"></svg:use>`,
})
export class IonPhoneLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhoneLandscapeOutlineIcon],svg[ion-phone-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48" transform="rotate(-90 256 256)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M16 336v-24a8 8 0 0 1 8-8h0a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h0a8 8 0 0 1-8-8v-24"></svg:path>`,
})
export class IonPhoneLandscapeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhoneLandscapeSharpIcon],svg[ion-phone-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18m448 234H64V148h384Z"></svg:path>`,
})
export class IonPhoneLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhonePortraitIcon],svg[ion-phone-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionPhonePortrait0" fill="currentColor" d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64m32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25a7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32Z"></svg:path></svg:defs><svg:use href="#ionPhonePortrait0"></svg:use><svg:path fill="currentColor" d="M336 48a11.88 11.88 0 0 0-9.53 4.69A48 48 0 0 1 288 72h-64a48 48 0 0 1-38.47-19.31A11.88 11.88 0 0 0 176 48a16 16 0 0 0-16 16v384a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16"></svg:path><svg:use href="#ionPhonePortrait0"></svg:use>`,
})
export class IonPhonePortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhonePortraitOutlineIcon],svg[ion-phone-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="480" x="128" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"></svg:path>`,
})
export class IonPhonePortraitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPhonePortraitSharpIcon],svg[ion-phone-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M148 448V64h216v384Z"></svg:path>`,
})
export class IonPhonePortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPieChartIcon],svg[ion-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.9 15.9 0 0 1 66.1 357"></svg:path><svg:path fill="currentColor" d="M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81a208.4 208.4 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208c0-100.45-71.58-184.5-166.41-203.82"></svg:path>`,
})
export class IonPieChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPieChartOutlineIcon],svg[ion-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48C141.12 48 48 141.12 48 256a207.3 207.3 0 0 0 18.09 85L256 256Z"></svg:path>`,
})
export class IonPieChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPieChartSharpIcon],svg[ion-pie-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37Z"></svg:path><svg:path fill="currentColor" d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208c0-103.81-76.45-190.1-176-205.54"></svg:path>`,
})
export class IonPieChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinIcon],svg[ion-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 96a80 80 0 1 0-96 78.39v283.17a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96m-56 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonPinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinOutlineIcon],svg[ion-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="currentColor" d="M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.1 32.1 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.1 32.1 0 0 0 2.49-12.38Z"></svg:path><svg:circle cx="280" cy="72" r="24" fill="currentColor"></svg:circle>`,
})
export class IonPinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinSharpIcon],svg[ion-pin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339 99a83 83 0 1 0-102 80.8V464l19 32l19-32V179.8A83.28 83.28 0 0 0 339 99m-59-6a21 21 0 1 1 21-21a21 21 0 0 1-21 21"></svg:path>`,
})
export class IonPinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPinpointIcon],svg[ion-pinpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm135.8 359.8c-32.5 32.5-74.6 51.9-119.8 55.6l-8-63.4h-16l-7.9 63.3c-45.3-3.7-87.4-23.1-119.8-55.6-32.5-32.5-51.9-74.6-55.6-119.8L128 264v-16l-63.3-7.9c3.7-45.3 23.1-87.4 55.6-119.8 32.5-32.5 74.6-51.9 119.8-55.6L248 128h16l7.9-63.3c45.3 3.7 87.4 23.1 119.8 55.6 32.5 32.5 51.9 74.6 55.6 119.8L384 248v16l63.3 7.9c-3.7 45.3-23.1 87.4-55.5 119.9z" fill="currentColor"></svg:path>`,
})
export class IonPinpointIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPintIcon],svg[ion-pint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 0 0-31.91-30H148.21a32 32 0 0 0-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0 0 24 24h143.74a24 24 0 0 0 24-24v-71.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c5.99-32.51 5.05-46.42 3.72-65.66m-35-47.54l1.5 24a4 4 0 0 1-4 4.25h-211a4 4 0 0 1-4-4.25l1.48-24A4 4 0 0 1 152 48h208a4 4 0 0 1 4 3.75"></svg:path>`,
})
export class IonPintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPintOutlineIcon],svg[ion-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0 1 15.94-15h215.57a16 16 0 0 1 15.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45c-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 0 1-8 8H184.12a8 8 0 0 1-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37m2.78-66h241.58"></svg:path>`,
})
export class IonPintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPintSharpIcon],svg[ion-pint-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399 99.29L394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66c1.67 9.11 5.22 22.66 9.73 39.82c12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81c4.38-15.63 7.83-28 9.41-36.62c6.01-32.51 5.07-46.42 3.74-65.66M146.23 80l2-32h215.52l2 32Z"></svg:path>`,
})
export class IonPintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPizzaIcon],svg[ion-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32C192 32 125.76 44.53 69 67.26C48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0 0 21.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25c4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0 0 21.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27"></svg:path><svg:path fill="currentColor" d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 0 0-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 0 0-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 0 0 256 480a31.73 31.73 0 0 0 28.76-18.06l.06-.13l137.3-297.57a15.94 15.94 0 0 0-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87Zm-215.1 83.07a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64 128a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85m64-112a32 32 0 1 1 29.85-29.85a32 32 0 0 1-29.85 29.85"></svg:path>`,
})
export class IonPizzaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPizzaOutlineIcon],svg[ion-pizza-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0 0 28.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2c1.79 0 4.29-1 7.28-2.18A442.5 442.5 0 0 1 256 96c56.76 0 114.91 12 159.6 30c3.59 1.4 5.59 2.18 7.28 2.18c6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32Z"></svg:path><svg:circle cx="192" cy="192" r="32" fill="currentColor"></svg:circle><svg:circle cx="320" cy="208" r="32" fill="currentColor"></svg:circle><svg:circle cx="256" cy="320" r="32" fill="currentColor"></svg:circle>`,
})
export class IonPizzaOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPizzaSharpIcon],svg[ion-pizza-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44l37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18"></svg:path><svg:ellipse cx="320.48" cy="207.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 320.503 207.996)"></svg:ellipse><svg:ellipse cx="192.48" cy="191.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 192.49 191.992)"></svg:ellipse><svg:ellipse cx="256.48" cy="319.99" fill="none" rx="31.97" ry="32.03" transform="rotate(-44.98 256.505 320)"></svg:ellipse><svg:path fill="currentColor" d="M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71c7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84l-19.92-8.24Zm-185.25 53.22a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34m64 128a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34m64-112a32 32 0 1 1-34-34a32.12 32.12 0 0 1 34 34"></svg:path>`,
})
export class IonPizzaSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaneIcon],svg[ion-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M281.7 311.9c.4-6.9 8.3-4.5 8.3-4.5l62 12.6 128 48.7c0-24-3.8-26.5-9.4-30.7L288 207s-4.9-60-4.9-112.9c0-24.5-11.8-78.1-27.1-78.1s-27.1 54.4-27.1 78.1c0 50.2-4.9 112.9-4.9 112.9L41.4 338c-7.1 5-9.4 7.7-9.4 30.7L160 320l61.9-12.6s7.9-2.4 8.3 4.5c.4 6.9-1.2 69.1 5.9 102.1.9 4.4-2.5 4.7-4.8 7.4l-51.9 32.8c-1.7 1.9-2.5 7.3-2.5 7.3l-1 18.5 68-16 12 32 12-32 68 16-1-18.5c.1 0-.7-5.4-2.4-7.3l-51.9-32.8c-2.3-2.7-5.7-3-4.8-7.4 6.9-33 5.5-95.2 5.9-102.1z" fill="currentColor"></svg:path>`,
})
export class IonPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlanetIcon],svg[ion-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.3 175.3 0 0 0 52.41-8a8 8 0 0 0 .79-15a1120 1120 0 0 1-109.48-55.61a1126 1126 0 0 1-102.87-66.77m395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36c-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46q-6.76-2.08-13.79-4.49a177 177 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.4 175.4 0 0 0 432 256a179 179 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89a177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.5 175.5 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14c-29.57-30.26-33.09-45.61-32.16-48.45c2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237 237 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64c7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19c9.09-15.62 4.08-36.32-14.86-61.5"></svg:path>`,
})
export class IonPlanetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlanetOutlineIcon],svg[ion-planet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55c-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"></svg:path><svg:circle cx="256" cy="256" r="160" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonPlanetOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlanetSharpIcon],svg[ion-planet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M81 274.71C90.36 363 165.26 432 256 432a174.9 174.9 0 0 0 71.49-15.19c-40.3-16.53-84.05-38.17-127.77-63.36C157 328.86 115.84 301.5 81 274.71m411.72 64.8c-8.5-11.31-20-23.8-34-37a205 205 0 0 1-11 34c28.72 29.5 33.2 45.34 32.17 48.45c-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46q-6.76-2.08-13.79-4.49a177 177 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.4 175.4 0 0 0 432 256a179 179 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89a177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.5 175.5 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14c-29.57-30.26-33.09-45.61-32.16-48.45c2.16-2.43 18.1-6.54 58.13 3.55a210 210 0 0 1 24-26.56c-18.86-5.61-35.79-9.35-50.05-11C33.41 89.47 13.3 95.52 4.35 111c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64c7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19c9.09-15.62 4.08-36.32-14.86-61.5"></svg:path>`,
})
export class IonPlanetSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayIcon],svg[ion-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></svg:path>`,
})
export class IonPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackIcon],svg[ion-play-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z"></svg:path>`,
})
export class IonPlayBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackCircleIcon],svg[ion-play-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m69.23-9.3l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class IonPlayBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackCircleOutlineIcon],svg[ion-play-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="m117.23 246.7l114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6"></svg:path>`,
})
export class IonPlayBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackCircleSharpIcon],svg[ion-play-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44Z"></svg:path>`,
})
export class IonPlayBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackOutlineIcon],svg[ion-play-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M480 145.52v221c0 13.28-13 21.72-23.63 15.35L267.5 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113C467 123.8 480 132.24 480 145.52Zm-228.57 0v221c0 13.28-13 21.72-23.63 15.35L38.93 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113c10.64-6.4 23.63 2.04 23.63 15.32Z"></svg:path>`,
})
export class IonPlayBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayBackSharpIcon],svg[ion-play-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 400L256 256l240-144zm-240 0L16 256l240-144z"></svg:path>`,
})
export class IonPlayBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayCircleIcon],svg[ion-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class IonPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayCircleOutlineIcon],svg[ion-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m216.32 334.44l114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31"></svg:path>`,
})
export class IonPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayCircleSharpIcon],svg[ion-play-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-56 296V168l144 88Z"></svg:path>`,
})
export class IonPlayCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardIcon],svg[ion-play-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m481.29 229.47l-188.87-113a30.54 30.54 0 0 0-31.09-.39a33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53Z"></svg:path>`,
})
export class IonPlayForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleIcon],svg[ion-play-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m138.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"></svg:path>`,
})
export class IonPlayForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleOutlineIcon],svg[ion-play-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="m394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6"></svg:path>`,
})
export class IonPlayForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardCircleSharpIcon],svg[ion-play-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88Z"></svg:path>`,
})
export class IonPlayForwardCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardOutlineIcon],svg[ion-play-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52Zm228.57 0v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25Z"></svg:path>`,
})
export class IonPlayForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayForwardSharpIcon],svg[ion-play-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 400l240-144L16 112zm240 0l240-144l-240-144z"></svg:path>`,
})
export class IonPlayForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlayOutlineIcon],svg[ion-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path>`,
})
export class IonPlayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySharpIcon],svg[ion-play-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m96 448l320-192L96 64z"></svg:path>`,
})
export class IonPlaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackIcon],svg[ion-play-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 64a16 16 0 0 1 16 16v136.43L360.77 77.11a35.13 35.13 0 0 1 35.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 0 1-35.77-.45L128 295.57V432a16 16 0 0 1-32 0V80a16 16 0 0 1 16-16"></svg:path>`,
})
export class IonPlaySkipBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackCircleIcon],svg[ion-play-skip-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m128-64a16 16 0 0 1 32 0v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0Z"></svg:path>`,
})
export class IonPlaySkipBackCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackCircleOutlineIcon],svg[ion-play-skip-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z"></svg:path><svg:path fill="currentColor" d="M192 176a16 16 0 0 1 16 16v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0V192a16 16 0 0 1 16-16"></svg:path>`,
})
export class IonPlaySkipBackCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackCircleSharpIcon],svg[ion-play-skip-back-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256m128-80h32v69l128-77.53v176.9L208 267v69h-32Z"></svg:path>`,
})
export class IonPlaySkipBackCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackOutlineIcon],svg[ion-play-skip-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M112 80v352"></svg:path>`,
})
export class IonPlaySkipBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipBackSharpIcon],svg[ion-play-skip-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64z"></svg:path>`,
})
export class IonPlaySkipBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardIcon],svg[ion-play-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 64a16 16 0 0 0-16 16v136.43L151.23 77.11a35.13 35.13 0 0 0-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0 0 35.77-.45L384 295.57V432a16 16 0 0 0 32 0V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPlaySkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardCircleIcon],svg[ion-play-skip-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 272a16 16 0 0 1-32 0v-53l-111.68 67.44a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L304 245v-53a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class IonPlaySkipForwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardCircleOutlineIcon],svg[ion-play-skip-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M320 176a16 16 0 0 0-16 16v53l-111.68-67.44a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L304 267v53a16 16 0 0 0 32 0V192a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPlaySkipForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardCircleSharpIcon],svg[ion-play-skip-forward-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 288h-32v-69l-128 77.37V167.49L304 245v-69h32Z"></svg:path>`,
})
export class IonPlaySkipForwardCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardOutlineIcon],svg[ion-play-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M400 80v352"></svg:path>`,
})
export class IonPlaySkipForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaySkipForwardSharpIcon],svg[ion-play-skip-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64z"></svg:path>`,
})
export class IonPlaySkipForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlaystationIcon],svg[ion-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M399.8 203c-.8-17.1-3.3-34.5-10.8-50.1-4.1-8.6-9.7-16.5-16.5-23.2-6.3-6.4-13.6-11.7-21.3-16.3-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1 8.3.2 16.7-1.7 24-5.7 7.6-4.1 13.9-10.4 18.4-17.8 5.1-8.3 8.2-17.8 9.9-27.3 1.9-10.8 2-22.1 1.6-33.3z" fill="currentColor"></svg:path><svg:path d="M86.7 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8-3.8 2.6-7.2 5.9-9.2 10.1-2 4.2-2.2 9.2-.5 13.6 2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2 28.4 9.4 58.4 14 88.4 13.3 14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3-7.1 1.6-14.4 2.1-21.6 2.2-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6z" fill="currentColor"></svg:path><svg:path d="M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8c9.7-3.3 20.1-4.6 30.3-4.6 6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3 3.1-3.6 5-8 5-13.1z" fill="currentColor"></svg:path>`,
})
export class IonPlaystationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusIcon],svg[ion-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z" fill="currentColor"></svg:path>`,
})
export class IonPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusCircledIcon],svg[ion-plus-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z" fill="currentColor"></svg:path>`,
})
export class IonPlusCircledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPlusRoundIcon],svg[ion-plus-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"></svg:path>`,
})
export class IonPlusRoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPodiumIcon],svg[ion-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 32H192a32 32 0 0 0-32 32v412a4 4 0 0 0 4 4h184a4 4 0 0 0 4-4V64a32 32 0 0 0-32-32m144 160h-72a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8h80a24 24 0 0 0 24-24V224a32 32 0 0 0-32-32M48 128a32 32 0 0 0-32 32v296a24 24 0 0 0 24 24h80a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8Z"></svg:path>`,
})
export class IonPodiumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPodiumOutlineIcon],svg[ion-podium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16M320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16m144 160H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPodiumOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPodiumSharpIcon],svg[ion-podium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"></svg:path>`,
})
export class IonPodiumSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPoundIcon],svg[ion-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M125.2 352.3H32v-54.6h101.2l13.1-83.3H47v-54.6h107.2L176 32h63.9l-21.8 127.7h105.6L345.5 32h63.1l-21.8 127.7H480v54.6H378.1l-12.3 83.3H465v54.6H358.5L336 480h-63.1l21.8-127.7H188.3L166.5 480h-63.1l21.8-127.7zm84.2-138L197 297.7h105.6l12.3-83.3H209.4z" fill="currentColor"></svg:path>`,
})
export class IonPoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPowerIcon],svg[ion-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.47-208-208.35c0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65C92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464"></svg:path><svg:path fill="currentColor" d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22"></svg:path>`,
})
export class IonPowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPowerOutlineIcon],svg[ion-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148m123-44v192"></svg:path>`,
})
export class IonPowerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPowerSharpIcon],svg[ion-power-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0 1 74.76-160.13l16.9-14l28.17 33.72l-16.9 14A163.72 163.72 0 0 0 92 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 0 0-59.83-126.36l-17-14l28-33.82l17 14A207.13 207.13 0 0 1 464 256.18C464 370.77 370.69 464 256 464"></svg:path><svg:path fill="currentColor" d="M234 48h44v224h-44z"></svg:path>`,
})
export class IonPowerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagIcon],svg[ion-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 45.2A44.45 44.45 0 0 0 435.29 32H312.36a30.63 30.63 0 0 0-21.52 8.89L45.09 286.59a44.82 44.82 0 0 0 0 63.32l117 117a44.83 44.83 0 0 0 63.34 0l245.65-245.6A30.6 30.6 0 0 0 480 199.8v-123a44.24 44.24 0 0 0-13-31.6M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagOutlineIcon],svg[ion-pricetag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8"></svg:path><svg:path fill="currentColor" d="M384 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagSharpIcon],svg[ion-pricetag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 32L16 320l176 176l288-288V32Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonPricetagSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsIcon],svg[ion-pricetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class IonPricetagsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsOutlineIcon],svg[ion-pricetags-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"></svg:path><svg:path fill="currentColor" d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"></svg:path>`,
})
export class IonPricetagsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPricetagsSharpIcon],svg[ion-pricetags-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 16L0 304l176 176l288-288V16Zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M480 64v144L216.9 471.1L242 496l270-272V64z"></svg:path>`,
})
export class IonPricetagsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrintIcon],svg[ion-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 112H106a58 58 0 0 0-58 58v158a56 56 0 0 0 56 56h8v39.68A40.32 40.32 0 0 0 152.32 464h207.36A40.32 40.32 0 0 0 400 423.68V384h8a56 56 0 0 0 56-56V168a56 56 0 0 0-56-56m-40 311.68a8.35 8.35 0 0 1-8.32 8.32H152.32a8.35 8.35 0 0 1-8.32-8.32V264.32a8.35 8.35 0 0 1 8.32-8.32h207.36a8.35 8.35 0 0 1 8.32 8.32Zm26-215.76a24 24 0 1 1 22-22a24 24 0 0 1-22 22M344 48H168a56.09 56.09 0 0 0-55.42 48h286.84A56.09 56.09 0 0 0 344 48"></svg:path>`,
})
export class IonPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrintOutlineIcon],svg[ion-print-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24"></svg:path><svg:rect width="256" height="208" x="128" y="240" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24.32" ry="24.32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24"></svg:path><svg:circle cx="392" cy="184" r="24" fill="currentColor"></svg:circle>`,
})
export class IonPrintOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrintSharpIcon],svg[ion-print-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 96V56a8 8 0 0 0-8-8H120a8 8 0 0 0-8 8v40"></svg:path><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:path fill="currentColor" d="M408 112H104a56 56 0 0 0-56 56v208a8 8 0 0 0 8 8h56v72a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-72h56a8 8 0 0 0 8-8V168a56 56 0 0 0-56-56m-48 308a4 4 0 0 1-4 4H156a4 4 0 0 1-4-4V268a4 4 0 0 1 4-4h200a4 4 0 0 1 4 4Zm34-212.08a24 24 0 1 1 22-22a24 24 0 0 1-22 22"></svg:path>`,
})
export class IonPrintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrinterIcon],svg[ion-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M423.8 128H384V64H128v64H88.2C60.3 128 32 144.9 32 182.6v123.8c0 38 28.3 61.6 56.2 61.6H128v112h256V368h39.8c27.9 0 56.2-22.6 56.2-53.6V182.6c0-35.7-28.2-54.6-56.2-54.6zM368 464H144V288h224v176zm0-336H144V80h224v48zm48 64h-17v-16h17v16z" fill="currentColor"></svg:path><svg:path d="M160 320h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 368h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 416h192v16H160z" fill="currentColor"></svg:path>`,
})
export class IonPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrismIcon],svg[ion-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M487.83 319.44L295.63 36.88a48 48 0 0 0-79.26 0L24.17 319.44a47.1 47.1 0 0 0 16.93 68.13l192.2 102.75a48.05 48.05 0 0 0 45.4 0l192.2-102.75a47.1 47.1 0 0 0 16.93-68.13m-431.26 41a16.12 16.12 0 0 1-8-10.38a16.8 16.8 0 0 1 2.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78Z"></svg:path>`,
})
export class IonPrismIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrismOutlineIcon],svg[ion-prism-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0 0 11.31 46L241 476.26a31.77 31.77 0 0 0 29.92 0l192.2-102.51a31.79 31.79 0 0 0 11.31-46L282.27 45.88a31.8 31.8 0 0 0-52.54 0M256 32v448"></svg:path>`,
})
export class IonPrismOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPrismSharpIcon],svg[ion-prism-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16L16 352l240 144l240-144Zm-20 96.82v324.53L73.73 340Z"></svg:path>`,
})
export class IonPrismSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPullRequestIcon],svg[ion-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128 64c-35.29 0-64 28.71-64 64 0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V183.391c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm0-288c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path><svg:path d="M415 360.034V204.989c0-33.987-10.49-61.002-31.18-80.294-22.111-20.618-54.314-30.388-95.82-29.106V32l-96 96 96 96v-64c26.5 0 42.67 2.642 52.175 11.504 7.183 6.698 10.825 17.964 10.825 33.485v156.196c-18.562 11.217-31 31.589-31 54.814 0 35.29 28.71 64 64 64s64-28.71 64-64c0-24.048-13.338-45.03-33-55.965zM384 448c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z" fill="currentColor"></svg:path>`,
})
export class IonPullRequestIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPulseIcon],svg[ion-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76l-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37l51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28l15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272"></svg:path>`,
})
export class IonPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPulseOutlineIcon],svg[ion-pulse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 320h64l64-256l64 384l64-224l32 96h64"></svg:path><svg:circle cx="432" cy="320" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonPulseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPulseSharpIcon],svg[ion-pulse-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 266a54.07 54.07 0 0 0-49.3 32h-24.84l-27-81a22 22 0 0 0-42 .92l-37.2 130.2l-48-281.74a22 22 0 0 0-43-1.72L94.82 298H32v44h80a22 22 0 0 0 21.34-16.66L171.69 172l46.61 273.62A22 22 0 0 0 238.76 464H240a22 22 0 0 0 21.15-16l44.47-149.62l9.51 28.62A22 22 0 0 0 336 342h40.7a54 54 0 1 0 49.3-76"></svg:path>`,
})
export class IonPulseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPushIcon],svg[ion-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 352H272V198.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 198.63V352H136a56.06 56.06 0 0 1-56-56V88a56.06 56.06 0 0 1 56-56h240a56.06 56.06 0 0 1 56 56v208a56.06 56.06 0 0 1-56 56M272 464a16 16 0 0 1-32 0V352h32Z"></svg:path>`,
})
export class IonPushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPushOutlineIcon],svg[ion-push-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 336h40a40 40 0 0 0 40-40V88a40 40 0 0 0-40-40H136a40 40 0 0 0-40 40v208a40 40 0 0 0 40 40h40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m176 240l80-80l80 80m-80 224V176"></svg:path>`,
})
export class IonPushOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionPushSharpIcon],svg[ion-push-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 352V204.63l64 64L358.63 246L256 143.37L153.37 246L176 268.63l64-64V352H92a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h328a12 12 0 0 1 12 12v296a12 12 0 0 1-12 12Zm-32 0h32v128h-32z"></svg:path>`,
})
export class IonPushSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrCodeIcon],svg[ion-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8ZM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm32 104H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32m-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class IonQrCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrCodeOutlineIcon],svg[ion-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="80" height="80" x="336" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="272" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="64" height="64" x="416" y="416" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="432" y="272" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="48" height="48" x="272" y="432" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="80" height="80" x="336" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="96" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:rect width="80" height="80" x="96" y="336" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect>`,
})
export class IonQrCodeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrCodeSharpIcon],svg[ion-qr-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336h80v80h-80zm-64-64h64v64h-64zm144 144h64v64h-64zm16-144h48v48h-48zM272 432h48v48h-48zm64-336h80v80h-80z"></svg:path><svg:path fill="currentColor" d="M480 240H272V32h208Zm-164-44h120V76H316ZM96 96h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 240H32V32h208ZM76 196h120V76H76Zm20 140h80v80H96z"></svg:path><svg:path fill="currentColor" d="M240 480H32V272h208ZM76 436h120V316H76Z"></svg:path>`,
})
export class IonQrCodeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQrScannerIcon],svg[ion-qr-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 124.171c0-6.938 5.232-12.171 12.171-12.171H176V64h-66.829C75.717 64 48 90.717 48 124.171V192h48v-67.829z" fill="currentColor"></svg:path><svg:path d="M403.579 64H336v48h67.219c6.938 0 12.781 5.232 12.781 12.171V192h48v-67.829C464 90.717 437.033 64 403.579 64z" fill="currentColor"></svg:path><svg:path d="M416 386.829c0 6.938-5.232 12.171-12.171 12.171H336v49h67.829C437.283 448 464 420.283 464 386.829V320h-48v66.829z" fill="currentColor"></svg:path><svg:path d="M108.171 399C101.232 399 96 393.768 96 386.829V320H48v66.829C48 420.283 75.717 448 109.171 448H176v-49h-67.829z" fill="currentColor"></svg:path>`,
})
export class IonQrScannerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionQuoteIcon],svg[ion-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 64c-40.646 0-72.483 11.229-94.627 33.373C75.229 119.517 64 151.354 64 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C152.334 132.922 168.944 128 192 128" fill="currentColor"></svg:path><svg:path d="M416 64c-40.646 0-72.483 11.229-94.627 33.373C299.229 119.517 288 151.354 288 192v256h160V192h-96c0-23.056 4.922-39.666 14.627-49.373C376.334 132.922 392.944 128 416 128" fill="currentColor"></svg:path>`,
})
export class IonQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioIcon],svg[ion-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="36" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M190.24 341.77a22 22 0 0 1-16.46-7.38a118 118 0 0 1 0-156.76a22 22 0 1 1 32.87 29.24a74 74 0 0 0 0 98.29a22 22 0 0 1-16.43 36.61Zm131.52 0a22 22 0 0 1-16.43-36.61a74 74 0 0 0 0-98.29a22 22 0 1 1 32.87-29.24a118 118 0 0 1 0 156.76a22 22 0 0 1-16.44 7.38"></svg:path><svg:path fill="currentColor" d="M139.29 392.72a21.92 21.92 0 0 1-16.08-7a190 190 0 0 1 0-259.49a22 22 0 1 1 32.13 30.06a146 146 0 0 0 0 199.38a22 22 0 0 1-16.06 37Zm233.42 0a22 22 0 0 1-16.06-37a146 146 0 0 0 0-199.38a22 22 0 1 1 32.13-30.06a190 190 0 0 1 0 259.49a21.92 21.92 0 0 1-16.07 6.95"></svg:path><svg:path fill="currentColor" d="M429 438a22 22 0 0 1-16.39-36.67a218.34 218.34 0 0 0 0-290.66a22 22 0 0 1 32.78-29.34a262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438m-346 0a21.94 21.94 0 0 1-16.41-7.33a262.34 262.34 0 0 1 0-349.34a22 22 0 0 1 32.78 29.34a218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438"></svg:path>`,
})
export class IonRadioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOffIcon],svg[ion-radio-button-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonRadioButtonOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOffOutlineIcon],svg[ion-radio-button-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonRadioButtonOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOffSharpIcon],svg[ion-radio-button-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path>`,
})
export class IonRadioButtonOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOnIcon],svg[ion-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class IonRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOnOutlineIcon],svg[ion-radio-button-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class IonRadioButtonOnOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioButtonOnSharpIcon],svg[ion-radio-button-on-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:circle cx="256" cy="256" r="144" fill="currentColor"></svg:circle>`,
})
export class IonRadioButtonOnSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioOutlineIcon],svg[ion-radio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256.02" r="32" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184.25 192.25a96 96 0 0 0 0 127.52m143.52 0a96 96 0 0 0 0-127.52m-194.49-50.97a168 168 0 0 0 0 229.44m245.44 0a168 168 0 0 0 0-229.44"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320"></svg:path>`,
})
export class IonRadioOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioSharpIcon],svg[ion-radio-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="256" fill="currentColor" rx="36" ry="35.99"></svg:ellipse><svg:path fill="currentColor" d="m188.4 350.8l-14.62-16.44a117.91 117.91 0 0 1 0-156.71l14.62-16.43l32.87 29.24l-14.62 16.43a73.93 73.93 0 0 0 0 98.25l14.62 16.44Zm135.2 0l-32.89-29.22l14.62-16.44a73.93 73.93 0 0 0 0-98.25l-14.62-16.43l32.87-29.24l14.62 16.43a117.91 117.91 0 0 1 0 156.71Z"></svg:path><svg:path fill="currentColor" d="m138.24 401.76l-15-16.06a189.85 189.85 0 0 1 0-259.4l15-16.07l32.14 30.05l-15 16.06a145.88 145.88 0 0 0 0 199.32l15 16.06Zm235.52 0l-32.14-30l15-16.06a145.88 145.88 0 0 0 0-199.32l-15-16.06l32.14-30l15 16.07a189.85 189.85 0 0 1 0 259.4Z"></svg:path><svg:path fill="currentColor" d="m430.73 447l-32.79-29.33l14.66-16.39a218.2 218.2 0 0 0 0-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 0 1 0 349.22Zm-349.46 0L66.6 430.61a262.18 262.18 0 0 1 0-349.22L81.28 65l32.79 29.34l-14.68 16.38a218.2 218.2 0 0 0 0 290.56l14.66 16.39Z"></svg:path>`,
})
export class IonRadioSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRadioWavesIcon],svg[ion-radio-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="64" fill="currentColor"></svg:circle><svg:path d="M144 256c0-36.9 18.553-69.208 46.314-87.034l-23.141-24.512a131.623 131.623 0 0 0-17.684 15.663C125.314 185.729 112 219.781 112 256c0 36.219 13.314 70.271 37.49 95.883a131.615 131.615 0 0 0 17.684 15.662l23.141-24.511C162.553 325.208 144 292.9 144 256z" fill="currentColor"></svg:path><svg:path d="M368 256c0 36.9-18.553 69.208-46.314 87.034l23.141 24.511a131.615 131.615 0 0 0 17.684-15.662C386.686 326.271 400 292.219 400 256c0-36.219-13.314-70.271-37.49-95.882a131.623 131.623 0 0 0-17.684-15.663l-23.141 24.512C349.447 186.792 368 219.1 368 256z" fill="currentColor"></svg:path><svg:path d="M64 256c0-55.578 25.251-104.907 64.263-135.817L105.433 96a197.799 197.799 0 0 0-17.197 16.178c-17.622 18.669-31.462 40.417-41.134 64.641C37.081 201.917 32 228.556 32 256c0 27.443 5.081 54.084 15.102 79.181 9.672 24.226 23.512 45.973 41.134 64.642a198.105 198.105 0 0 0 17.197 16.178l22.829-24.183C89.251 360.907 64 311.578 64 256z" fill="currentColor"></svg:path><svg:path d="M448 256c0 55.578-25.251 104.907-64.262 135.817l22.828 23.848c6-5.001 11.74-10.062 17.198-15.843 17.622-18.669 31.462-40.416 41.134-64.642C474.918 310.084 480 283.443 480 256c0-27.444-5.082-54.083-15.102-79.181-9.672-24.225-23.512-45.972-41.134-64.641A197.523 197.523 0 0 0 406.566 96l-22.829 24.183C422.749 151.093 448 200.422 448 256z" fill="currentColor"></svg:path>`,
})
export class IonRadioWavesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRainyIcon],svg[ion-rainy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9a142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28c23.84-21.65 37-51.67 37-84.52c0-31.49-11-59.09-31.74-79.83M112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448m48 48a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496m112-48a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448m48 48a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496"></svg:path>`,
})
export class IonRainyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRainyOutlineIcon],svg[ion-rainy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M114.61 162.85A16.07 16.07 0 0 0 128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59c0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2c0-48.47 38.67-72.22 74.61-77.95Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m144 384l-32 48m112-48l-64 96m144-96l-32 48m112-48l-64 96"></svg:path>`,
})
export class IonRainyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRainySharpIcon],svg[ion-rainy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M364 336H130c-29.5 0-54.92-7.83-73.53-22.64C35.23 296.44 24 271.35 24 240.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 256 16c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C477 160.11 488 187.71 488 219.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28M93.82 430.423l49.75-74.627l26.626 17.75l-49.751 74.627zm47.997 48.005l81.751-122.627l26.626 17.75l-81.752 122.628zm111.995-48.003l49.75-74.627l26.626 17.75l-49.75 74.627zm47.996 48.005l81.751-122.628l26.626 17.75l-81.752 122.628z"></svg:path>`,
})
export class IonRainySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReaderIcon],svg[ion-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M256 304h-80a16 16 0 0 1 0-32h80a16 16 0 0 1 0 32m80-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonReaderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReaderOutlineIcon],svg[ion-reader-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="416" x="96" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 128h160m-160 80h160m-160 80h80"></svg:path>`,
})
export class IonReaderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReaderSharpIcon],svg[ion-reader-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12m192 260H160v-32h112Zm80-80H160v-32h192Zm0-80H160v-32h192Z"></svg:path>`,
})
export class IonReaderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReceiptIcon],svg[ion-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94a16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55M416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240m0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160"></svg:path><svg:path fill="currentColor" d="M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424"></svg:path>`,
})
export class IonReceiptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReceiptOutlineIcon],svg[ion-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 272v112a80 80 0 0 1-80 80a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 144h192m-128 80h128"></svg:path>`,
})
export class IonReceiptOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReceiptSharpIcon],svg[ion-receipt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 48l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16l-32-16l-32 16l-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32ZM272.5 240l-.5-32h159.5l.5 32Zm-64-80l-.5-32h223.5l.5 32Z"></svg:path><svg:path fill="currentColor" d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56"></svg:path>`,
})
export class IonReceiptSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordIcon],svg[ion-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208z" fill="currentColor"></svg:path>`,
})
export class IonRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordingIcon],svg[ion-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48"></svg:path>`,
})
export class IonRecordingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordingOutlineIcon],svg[ion-recording-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="256" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 352h256"></svg:path>`,
})
export class IonRecordingOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRecordingSharpIcon],svg[ion-recording-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236M54 256a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74m330 74a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class IonRecordingSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshIcon],svg[ion-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class IonRefreshIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshCircleIcon],svg[ion-refresh-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208m0 313a94 94 0 0 1 0-188h4.21l-14.11-14.1a14 14 0 0 1 19.8-19.8l40 40a14 14 0 0 1 0 19.8l-40 40a14 14 0 0 1-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1 0 66 66a14 14 0 0 1 28 0a94.11 94.11 0 0 1-94 94"></svg:path>`,
})
export class IonRefreshCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshCircleOutlineIcon],svg[ion-refresh-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28" d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="m256 149l40 40l-40 40"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path>`,
})
export class IonRefreshCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshCircleSharpIcon],svg[ion-refresh-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208c114.69 0 208-93.31 208-208c0-114.87-93.13-208-208-208m94 219a94 94 0 1 1-94-94h4.21l-24-24L256 129.2l59.8 59.8l-59.8 59.8l-19.8-19.8l27.92-27.92c-2.4-.08-5.12-.08-8.12-.08a66 66 0 1 0 66 66v-14h28Z"></svg:path>`,
})
export class IonRefreshCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshOutlineIcon],svg[ion-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class IonRefreshOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRefreshSharpIcon],svg[ion-refresh-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m256 58l80 80l-80 80"></svg:path>`,
})
export class IonRefreshSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadIcon],svg[ion-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class IonReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadCircleIcon],svg[ion-reload-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5l14.68-14.68a8.44 8.44 0 0 1 6-2.54a8.61 8.61 0 0 1 8.68 8.63Z"></svg:path>`,
})
export class IonReloadCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

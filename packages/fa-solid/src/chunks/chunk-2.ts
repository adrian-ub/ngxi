import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidWeightIcon],svg[fa-solid-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64h-25.98C438.44 92.28 448 125.01 448 160c0 105.87-86.13 192-192 192S64 265.87 64 160c0-34.99 9.56-67.72 25.98-96H64C28.71 64 0 92.71 0 128v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V128c0-35.29-28.71-64-64-64M256 320c88.37 0 160-71.63 160-160S344.37 0 256 0S96 71.63 96 160s71.63 160 160 160m-.3-151.94l33.58-78.36c3.5-8.17 12.94-11.92 21.03-8.41c8.12 3.48 11.88 12.89 8.41 21l-33.67 78.55C291.73 188 296 197.45 296 208c0 22.09-17.91 40-40 40s-40-17.91-40-40c0-21.98 17.76-39.77 39.7-39.94"></svg:path>`,
})
export class FaSolidWeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWeightHangingIcon],svg[fa-solid-weight-hanging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14M256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32s-14.36 32-32 32"></svg:path>`,
})
export class FaSolidWeightHangingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWheelchairIcon],svg[fa-solid-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929c33.271 1.545 60.048 28.905 60.925 62.201c.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218M311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96c-61.757 0-112-50.243-112-112c0-41.505 22.694-77.809 56.324-97.156c-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176c71.87 0 133.806-43.308 161.11-105.192z"></svg:path>`,
})
export class FaSolidWheelchairIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWifiIcon],svg[fa-solid-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38c145.92-133.68 371.3-133.71 517.25 0c6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98M320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0c-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8c83.95-72.57 209.74-72.41 293.49 0c6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15"></svg:path>`,
})
export class FaSolidWifiIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWifiSlashIcon],svg[fa-solid-wifi-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.09 154.87c-6.66 6.16-6.79 16.59-.35 22.97l34.24 33.96c6.14 6.09 16.02 6.23 22.4.38 6.99-6.4 14.31-12.22 21.65-18.01l-64.96-50.21c-4.3 3.71-8.79 7.04-12.98 10.91zm471.75 181.9l45.42-45.21c6.52-6.46 6.29-17.06-.57-23.17-64.94-57.74-148.91-82.66-230.34-74.98l-83.16-64.27c125.94-38.36 267.75-11.01 370.43 83.05 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.96c6.44-6.39 6.3-16.82-.35-22.97C496.46 26.82 298.08-.76 133.42 71.35L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.03-2.81-22.45L476.84 336.77zm-358.53-68.38c-6.86 6.1-7.08 16.7-.57 23.17l34.28 34.01c5.97 5.93 15.59 6.32 21.94.8 13.35-11.6 28.01-20.66 43.15-28.55l-68.36-52.83c-10.48 7.15-20.74 14.78-30.44 23.4zM256 416c0 35.35 28.65 64 64 64 31.91 0 58.15-23.42 62.99-53.98l-88.7-68.56C271.77 367.37 256 389.82 256 416z" fill="currentColor"></svg:path>`,
})
export class FaSolidWifiSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWindIcon],svg[fa-solid-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6c3.3 20-12.1 37.4-31.6 37.4c-14.1 0-26.1-9.2-30.4-21.9c-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4c8.6 44.1 47.6 77.6 94.2 77.6c57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256M16 224h336c59.7 0 106.8-54.8 93.8-116.7c-7.6-36.2-36.9-65.5-73.1-73.1c-55.4-11.6-105.1 24.9-114.9 75.5c-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4c-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16m384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4c-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1c17.8 50.6 70.5 84.8 129.4 72.3c41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256"></svg:path>`,
})
export class FaSolidWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWindowCloseIcon],svg[fa-solid-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5l-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1l66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256z"></svg:path>`,
})
export class FaSolidWindowCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWindowMaximizeIcon],svg[fa-solid-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-16 160H64v-84c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidWindowMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWindowMinimizeIcon],svg[fa-solid-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidWindowMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWindowRestoreIcon],svg[fa-solid-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 48v288c0 26.5-21.5 48-48 48h-48V176c0-44.1-35.9-80-80-80H128V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48M384 176v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48m-68 28c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v52h252z"></svg:path>`,
})
export class FaSolidWindowRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWineBottleIcon],svg[fa-solid-wine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62M179.22 423.29l-90.51-90.51l122.04-122.04l90.51 90.51z"></svg:path>`,
})
export class FaSolidWineBottleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWineGlassIcon],svg[fa-solid-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40"></svg:path>`,
})
export class FaSolidWineGlassIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWineGlassAltIcon],svg[fa-solid-wine-glass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40c0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8c0-22.09-17.91-40-40-40M61.75 48h164.5l7.17 80H54.58z"></svg:path>`,
})
export class FaSolidWineGlassAltIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWonSignIcon],svg[fa-solid-won-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M564 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-48l18.6-80.6c1.7-7.5-4-14.7-11.7-14.7h-46.1c-5.7 0-10.6 4-11.7 9.5L450.7 128H340.8l-19.7-86c-1.3-5.5-6.1-9.3-11.7-9.3h-44c-5.6 0-10.4 3.8-11.7 9.3l-20 86H125l-17.5-85.7c-1.1-5.6-6.1-9.6-11.8-9.6H53.6c-7.7 0-13.4 7.1-11.7 14.6L60 128H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h62.3l7.2 32H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h83.9l40.9 182.6c1.2 5.5 6.1 9.4 11.7 9.4h56.8c5.6 0 10.4-3.9 11.7-9.3L259.3 288h55.1l42.4 182.7c1.3 5.4 6.1 9.3 11.7 9.3h56.8c5.6 0 10.4-3.9 11.7-9.3L479.1 288H564c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-70.1l7.4-32zM183.8 342c-6.2 25.8-6.8 47.2-7.3 47.2h-1.1s-1.7-22-6.8-47.2l-11-54h38.8zm27.5-118h-66.8l-6.5-32h80.8zm62.9 0l2-8.6c1.9-8 3.5-16 4.8-23.4h11.8c1.3 7.4 2.9 15.4 4.8 23.4l2 8.6zm130.9 118c-5.1 25.2-6.8 47.2-6.8 47.2h-1.1c-.6 0-1.1-21.4-7.3-47.2l-12.4-54h39.1zm25.2-118h-67.4l-7.3-32h81.6z"></svg:path>`,
})
export class FaSolidWonSignIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWrenchIcon],svg[fa-solid-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36l-67.88-11.31l-11.31-67.88l74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16c-47.38-11.74-99.55.91-136.58 37.93c-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5s65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22c37.07-37.07 49.7-89.32 37.91-136.73M64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidWrenchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidXRayIcon],svg[fa-solid-x-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 384c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16m160 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16M624 0H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16m0 448h-48V96H64v352H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M480 248c0 4.4-3.6 8-8 8H336v32h104c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H336v32h64c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48v-16h-64v16c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48h64v-32H200c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h104v-32H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h136v-32H200c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h104v-24c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v24h104c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H336v32h136c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidXRayIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidYenSignIcon],svg[fa-solid-yen-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M351.2 32h-65.3c-4.6 0-8.8 2.6-10.8 6.7l-55.4 113.2c-14.5 34.7-27.1 71.9-27.1 71.9h-1.3s-12.6-37.2-27.1-71.9L108.8 38.7c-2-4.1-6.2-6.7-10.8-6.7H32.8c-9.1 0-14.8 9.7-10.6 17.6L102.3 200H44c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h88.2l19.8 37.2V320H44c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h108v92c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-92h108c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12H232v-26.8l19.8-37.2H340c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12h-58.3l80.1-150.4c4.3-7.9-1.5-17.6-10.6-17.6"></svg:path>`,
})
export class FaSolidYenSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidYinYangIcon],svg[fa-solid-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96m0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32"></svg:path>`,
})
export class FaSolidYinYangIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignLeftIcon],svg[fa-solid-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352m0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidAlignLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignRightIcon],svg[fa-solid-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32m0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288"></svg:path>`,
})
export class FaSolidAlignRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAngleDoubleRightIcon],svg[fa-solid-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34m192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4l-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8"></svg:path>`,
})
export class FaSolidAngleDoubleRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAirFreshenerIcon],svg[fa-solid-air-freshener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 160H96c-53 0-96 43-96 96v224c0 17.625 14.375 32 32 32h256c17.625 0 32-14.375 32-32V256c0-53-43-96-96-96m-64 256c-44.125 0-80-35.875-80-80s35.875-80 80-80s80 35.875 80 80s-35.875 80-80 80m64-384c0-17.625-14.375-32-32-32h-64c-17.625 0-32 14.375-32 32v96h128zm157.781 19.578C383 50.969 384 49.359 384 48c0-1.375-1-2.969-2.219-3.578L352 32L339.562 2.219C338.969 1 337.375 0 336 0s-2.969 1-3.594 2.219L320 32l-29.781 12.422C289 45.031 288 46.625 288 48c0 1.359 1 2.969 2.219 3.578L320 64l12.406 29.781C333.031 95 334.625 96 336 96s2.969-1 3.562-2.219L352 64zM448 64l12.406 29.781C461.031 95 462.625 96 464 96s2.969-1 3.562-2.219L480 64l29.781-12.422C511 50.969 512 49.359 512 48c0-1.375-1-2.969-2.219-3.578L480 32L467.562 2.219C466.969 1 465.375 0 464 0s-2.969 1-3.594 2.219L448 32l-29.781 12.422C417 45.031 416 46.625 416 48c0 1.359 1 2.969 2.219 3.578zm32 160l-12.438-29.781C466.969 193 465.375 192 464 192s-2.969 1-3.594 2.219L448 224l-29.781 12.422C417 237.031 416 238.625 416 240c0 1.359 1 2.969 2.219 3.578L448 256l12.406 29.781C461.031 287 462.625 288 464 288s2.969-1 3.562-2.219L480 256l29.781-12.422C511 242.969 512 241.359 512 240c0-1.375-1-2.969-2.219-3.578zm-34.219-76.422C447 146.969 448 145.359 448 144c0-1.375-1-2.969-2.219-3.578L416 128l-12.438-29.781C402.969 97 401.375 96 400 96s-2.969 1-3.594 2.219L384 128l-29.781 12.422C353 141.031 352 142.625 352 144c0 1.359 1 2.969 2.219 3.578L384 160l12.406 29.781C397.031 191 398.625 192 400 192s2.969-1 3.562-2.219L416 160z"></svg:path>`,
})
export class FaSolidAirFreshenerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidAlignCenterIcon],svg[fa-solid-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96m231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z"></svg:path>`,
})
export class FaSolidAlignCenterIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

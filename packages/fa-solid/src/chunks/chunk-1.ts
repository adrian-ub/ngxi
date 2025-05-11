import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidItalicIcon],svg[fa-solid-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16"></svg:path>`,
})
export class FaSolidItalicIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidJediIcon],svg[fa-solid-jedi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M535.953 352c-42.64 94.172-137.64 160-247.985 160q-6.398 0-12.843-.297C171.155 506.938 81.265 442.234 40.015 352h39.922l-58.61-58.594a265 265 0 0 1-5.11-39.422a274 274 0 0 1 .5-29.984h47.22l-41.391-41.375A269.8 269.8 0 0 1 130.515 20.547a16.06 16.06 0 0 1 9.281-3a16.36 16.36 0 0 1 13.5 7.25a16.03 16.03 0 0 1 1.625 15.094a138.4 138.4 0 0 0-9.844 51.265c0 45.11 21.047 86.578 57.72 113.735a16.3 16.3 0 0 1 1.202 25.39c-26.547 23.985-41.172 56.5-41.172 91.578c0 60.032 42.954 110.282 99.891 121.922l2.5-65.265L238.062 397a8.34 8.34 0 0 1-10-.75a8.025 8.025 0 0 1-1.39-9.937l20.124-33.766l-42.062-8.735a7.99 7.99 0 0 1 0-15.656l42.062-8.719l-20.109-33.734a7.991 7.991 0 0 1 11.36-10.719l30.39 20.657L279.953 7.67a7.97 7.97 0 0 1 8-7.671H288a8.02 8.02 0 0 1 7.953 7.703l11.53 287.922l30.392-20.672a8.08 8.08 0 0 1 10 .813a8 8 0 0 1 1.39 9.906l-20.14 33.765l42.078 8.735a7.994 7.994 0 0 1 0 15.656l-42.078 8.719l20.109 33.734a7.98 7.98 0 0 1-1.328 9.922a8.26 8.26 0 0 1-10.031.797l-27.172-18.469l2.5 65.344c48.484-9.406 87.578-48.156 97.312-96.5a123.53 123.53 0 0 0-38.562-117.078a16.306 16.306 0 0 1 1.203-25.422c36.656-27.172 57.688-68.61 57.688-113.734a138 138 0 0 0-9.86-51.313a15.98 15.98 0 0 1 1.61-15.094a16.37 16.37 0 0 1 13.5-7.234a16 16 0 0 1 9.25 2.984A271.27 271.27 0 0 1 553.25 182.766L512 224h46.953c.36 5.766 1.047 11.453 1.047 17.266a270 270 0 0 1-5.125 51.859L495.985 352Z"></svg:path>`,
})
export class FaSolidJediIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidJointIcon],svg[fa-solid-joint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.34 181.1c22.38 15.68 35.66 41.16 35.66 68.59V280c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-30.31c0-43.24-21.01-83.41-56.34-108.06C463.85 125.02 448 99.34 448 70.31V8c0-4.42-3.58-8-8-8h-48c-4.42 0-8 3.58-8 8v66.4c0 43.69 24.56 81.63 60.34 106.7M194.97 358.98C126.03 370.07 59.69 394.69 0 432c83.65 52.28 180.3 80 278.94 80h88.57L254.79 380.49c-14.74-17.2-37.45-25.11-59.82-21.51M553.28 87.09c-5.67-3.8-9.28-9.96-9.28-16.78V8c0-4.42-3.58-8-8-8h-48c-4.42 0-8 3.58-8 8v62.31c0 22.02 10.17 43.41 28.64 55.39C550.79 153.04 576 199.54 576 249.69V280c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-30.31c0-65.44-32.41-126.19-86.72-162.6M360.89 352.05c-34.4.06-86.81.15-88.21.17l117.8 137.43A63.99 63.99 0 0 0 439.07 512h88.45L409.57 374.4a63.96 63.96 0 0 0-48.68-22.35M616 352H432l117.99 137.65A63.99 63.99 0 0 0 598.58 512H616c13.25 0 24-10.75 24-24V376c0-13.26-10.75-24-24-24"></svg:path>`,
})
export class FaSolidJointIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidJournalWhillsIcon],svg[fa-solid-journal-whills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M438.406 377.594c-3.203 12.812-3.203 57.61 0 73.61q9.586 9.585 9.594 19.202v16c0 16-12.797 25.594-25.594 25.594H96c-54.406 0-96-41.594-96-96V96C0 41.594 41.594 0 96 0h326.406C438.406 0 448 9.594 448 25.594v332.812q0 14.39-9.594 19.188M380.796 384H96c-16 0-32 12.797-32 32s12.797 32 32 32h284.797Zm-252.78-207.984c0 .515.14.984.14 1.5l37.11 32.468A8 8 0 0 1 160 224h-.016a9.18 9.18 0 0 1-5.25-1.984l-23.593-20.641C142.688 250.953 186.906 288 240 288s97.313-37.047 108.875-86.625l-23.594 20.64a8.03 8.03 0 0 1-5.265 1.97H320a9.15 9.15 0 0 1-6.016-2.72A9.27 9.27 0 0 1 312 216a9.1 9.1 0 0 1 2.734-6.016l37.11-32.468c.015-.532.156-1 .156-1.516c0-11.047-2.094-21.516-5.063-31.594l-21.265 21.25a8.005 8.005 0 0 1-11.328-11.312l26.422-26.407a111.8 111.8 0 0 0-46.36-49.265a63.023 63.023 0 0 1-14.062 82.64a55.838 55.838 0 0 1-28.719 93.422l-1.422-34.28l12.672 8.624a3.97 3.97 0 0 0 2.25.688a3.98 3.98 0 0 0 3.437-6.032l-8.53-14.312l17.906-3.719a4.006 4.006 0 0 0 0-7.844l-17.907-3.718l8.531-14.313a3.98 3.98 0 0 0-3.437-6.031a4.7 4.7 0 0 0-2.25.672l-14.187 9.656L244 71.828a4.004 4.004 0 0 0-8 0l-4.625 110.813l-12-8.157a4.003 4.003 0 0 0-5.688 5.36l8.532 14.312l-17.906 3.719a3.997 3.997 0 0 0 0 7.828l17.906 3.735l-8.532 14.296a4.7 4.7 0 0 0-.562 2.047a4.6 4.6 0 0 0 1.25 2.906a4 4 0 0 0 2.75 1.094a4.1 4.1 0 0 0 2.25-.687l10.36-7.047l-1.36 32.719a55.864 55.864 0 0 1-28.719-93.453a63.01 63.01 0 0 1-14.047-82.657a111.93 111.93 0 0 0-46.375 49.266l26.422 26.422a8 8 0 0 1-11.312 11.312l-21.266-21.265c-2.984 10.093-5.078 20.562-5.062 31.625"></svg:path>`,
})
export class FaSolidJournalWhillsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKaabaIcon],svg[fa-solid-kaaba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M554.12 83.51L318.36 4.93a95.96 95.96 0 0 0-60.71 0L21.88 83.51A32.01 32.01 0 0 0 0 113.87v49.01l265.02-79.51c15.03-4.5 30.92-4.5 45.98 0l265 79.51v-49.01c0-13.77-8.81-26-21.88-30.36m-279.9 30.52L0 196.3v228.38c0 15 10.42 27.98 25.06 31.24l242.12 53.8a95.9 95.9 0 0 0 41.65 0l242.12-53.8c14.64-3.25 25.06-16.24 25.06-31.24V196.29l-274.2-82.26c-9.04-2.72-18.59-2.72-27.59 0M128 230.11c0 3.61-2.41 6.77-5.89 7.72l-80 21.82C37.02 261.03 32 257.2 32 251.93v-16.58c0-3.61 2.41-6.77 5.89-7.72l80-21.82c5.09-1.39 10.11 2.44 10.11 7.72zm144-39.28c0 3.61-2.41 6.77-5.89 7.72l-96 26.18c-5.09 1.39-10.11-2.44-10.11-7.72v-16.58c0-3.61 2.41-6.77 5.89-7.72l96-26.18c5.09-1.39 10.11 2.44 10.11 7.72zm176 22.7c0-5.28 5.02-9.11 10.11-7.72l80 21.82c3.48.95 5.89 4.11 5.89 7.72v16.58c0 5.28-5.02 9.11-10.11 7.72l-80-21.82a8 8 0 0 1-5.89-7.72zm-144-39.27c0-5.28 5.02-9.11 10.11-7.72l96 26.18c3.48.95 5.89 4.11 5.89 7.72v16.58c0 5.28-5.02 9.11-10.11 7.72l-96-26.18a8 8 0 0 1-5.89-7.72z"></svg:path>`,
})
export class FaSolidKaabaIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKeyIcon],svg[fa-solid-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A24 24 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176C160 78.798 238.797.001 335.999 0C433.488-.001 512 78.511 512 176.001M336 128c0 26.51 21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48s-48 21.49-48 48"></svg:path>`,
})
export class FaSolidKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKeyboardIcon],svg[fa-solid-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48M128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12"></svg:path>`,
})
export class FaSolidKeyboardIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKhandaIcon],svg[fa-solid-khanda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M415.81 66c-6.37-3.5-14.37-2.33-19.36 3.02a15.974 15.974 0 0 0-1.91 19.52c16.49 26.16 25.2 56.39 25.2 87.41c-.19 53.25-26.77 102.69-71.27 132.41l-76.63 53.35v-20.1l44.05-36.09c3.92-4.2 5-10.09 2.81-15.28L310.85 273c33.84-19.26 56.94-55.25 56.94-96.99c0-40.79-22.02-76.13-54.59-95.71l5.22-11.44c2.34-5.53.93-11.83-3.57-16.04L255.86 0l-58.99 52.81c-4.5 4.21-5.9 10.51-3.57 16.04l5.22 11.44c-32.57 19.58-54.59 54.93-54.59 95.72c0 41.75 23.09 77.73 56.94 96.99l-7.85 17.24c-2.19 5.18-1.1 11.07 2.81 15.28l44.05 36.09v19.9l-76.59-53.33C119.02 278.62 92.44 229.19 92.26 176c0-31.08 8.71-61.31 25.2-87.47c3.87-6.16 2.4-13.77-2.59-19.08c-5-5.34-13.68-6.2-20.02-2.7C16.32 109.6-22.3 205.3 13.36 295.99c7.07 17.99 17.89 34.38 30.46 49.06l55.97 65.36c4.87 5.69 13.04 7.24 19.65 3.72l79.35-42.23L228 392.23l-47.08 32.78c-1.67-.37-3.23-1.01-5.01-1.01c-13.25 0-23.99 10.74-23.99 24c0 13.25 10.74 24 23.99 24c12.1 0 21.69-9.11 23.33-20.76l40.63-28.28v29.95c-9.39 5.57-15.99 15.38-15.99 27.1c0 17.67 14.32 32 31.98 32s31.98-14.33 31.98-32c0-11.71-6.61-21.52-15.99-27.1v-30.15l40.91 28.48C314.41 462.89 324 472 336.09 472c13.25 0 23.99-10.75 23.99-24c0-13.26-10.74-24-23.99-24c-1.78 0-3.34.64-5.01 1.01L284 392.23l29.21-20.34l79.35 42.23c6.61 3.52 14.78 1.97 19.65-3.71l52.51-61.31c18.87-22.02 34-47.5 41.25-75.59c21.62-83.66-16.45-167.27-90.16-207.51m-95.99 110c0 22.3-11.49 41.92-28.83 53.38l-5.65-12.41c-8.75-24.52-8.75-51.04 0-75.56l7.83-17.18c16.07 11.65 26.65 30.45 26.65 51.77m-127.93 0c0-21.32 10.58-40.12 26.66-51.76l7.83 17.18c8.75 24.52 8.75 51.03 0 75.56l-5.65 12.41c-17.34-11.46-28.84-31.09-28.84-53.39"></svg:path>`,
})
export class FaSolidKhandaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKissIcon],svg[fa-solid-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m-80 232c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m136 156c0 19.2-28.7 41.5-71.5 44c-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-6.1-12.2 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.6-3.6-4.8-16.5 3.6-15.4c42.8 2.5 71.5 24.8 71.5 44c0 13-13.4 27.3-35.2 36C290.6 368.7 304 383 304 396m24-156c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidKissIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKissBeamIcon],svg[fa-solid-kiss-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m-39 219.9l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.5 8.5-10.9 12-15.1 4.5M304 396c0 19.2-28.7 41.5-71.5 44c-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-6.1-12.2 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.6-3.6-4.8-16.5 3.6-15.4c42.8 2.5 71.5 24.8 71.5 44c0 13-13.4 27.3-35.2 36C290.6 368.7 304 383 304 396m65-168.1l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.5 8.5-10.9 12-15.1 4.5"></svg:path>`,
})
export class FaSolidKissBeamIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKissWinkHeartIcon],svg[fa-solid-kiss-wink-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501.1 402.5c-8-20.8-31.5-31.5-53.1-25.9l-8.4 2.2l-2.3-8.4c-5.9-21.4-27-36.5-49-33c-25.2 4-40.6 28.6-34 52.6l22.9 82.6c1.5 5.3 7 8.5 12.4 7.1l83-21.5c24.1-6.3 37.7-31.8 28.5-55.7m-177.6-4c-5.6-20.3-2.3-42 9-59.7c29.7-46.3 98.7-45.5 127.8 4.3c6.4.1 12.6 1.4 18.6 2.9c10.9-27.9 17.1-58.2 17.1-90C496 119 385 8 248 8S0 119 0 256s111 248 248 248c35.4 0 68.9-7.5 99.4-20.9c-.3-.7-23.9-84.6-23.9-84.6M168 240c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m120 156c0 19.2-28.7 41.5-71.5 44c-8.5.8-12.1-11.8-3.6-15.4l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-6-2.5-5.7-12.3 0-14.8l17-7.2c13-5.5 20.8-13.5 20.8-21.5s-7.8-16-20.8-21.5l-17-7.2c-8.8-3.7-4.6-16.6 3.6-15.4c42.8 2.5 71.5 24.8 71.5 44c0 13-13.4 27.3-35.2 36C274.6 368.7 288 383 288 396m16-179c-8.3 7.4-21.6.4-19.8-10.8c4-25.2 34.2-42.1 59.9-42.1S400 181 404 206.2c1.7 11.1-11.3 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0z"></svg:path>`,
})
export class FaSolidKissWinkHeartIcon {
  readonly viewBox = input("0 0 504 512")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidKiwiBirdIcon],svg[fa-solid-kiwi-bird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M575.81 217.98C572.64 157.41 518.28 112 457.63 112h-9.37c-52.82 0-104.25-16.25-147.74-46.24c-41.99-28.96-96.04-41.62-153.21-28.7C129.3 41.12-.08 78.24 0 224c.04 70.95 38.68 132.8 95.99 166.01V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-54.26c15.36 3.96 31.4 6.26 48 6.26c5.44 0 10.68-.73 16-1.18V464c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-59.43c14.24-5.06 27.88-11.39 40.34-19.51C342.07 355.25 393.86 336 448.46 336c25.48 0 16.01-.31 23.05-.78l74.41 136.44c2.86 5.23 8.3 8.34 14.05 8.34c1.31 0 2.64-.16 3.95-.5c7.09-1.8 12.05-8.19 12.05-15.5c0 0 .14-240.24-.16-246.02M463.97 248c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24m80 153.25l-39.86-73.08c15.12-5.83 28.73-14.6 39.86-25.98z"></svg:path>`,
})
export class FaSolidKiwiBirdIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLambdaIcon],svg[fa-solid-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 384h-43.5L197.6 48.68A32.018 32.018 0 0 0 169.5 32H24C10.75 32 0 42.74 0 56v48c0 13.25 10.75 24 24 24h107.5l4.63 8.49L3.25 446.55C-3.53 462.38 8.08 480 25.31 480h52.23c9.6 0 18.28-5.72 22.06-14.55l95.02-221.72L314.4 463.32A32.018 32.018 0 0 0 342.5 480H424c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z" fill="currentColor"></svg:path>`,
})
export class FaSolidLambdaIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLandmarkIcon],svg[fa-solid-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501.62 92.11L267.24 2.04a31.96 31.96 0 0 0-22.47 0L10.38 92.11A16 16 0 0 0 0 107.09V144c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-36.91c0-6.67-4.14-12.64-10.38-14.98M64 192v160H48c-8.84 0-16 7.16-16 16v48h448v-48c0-8.84-7.16-16-16-16h-16V192h-64v160h-96V192h-64v160h-96V192zm432 256H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidLandmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLanguageIcon],svg[fa-solid-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24m-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9c8.4 6.4 17.1 12.5 26.1 18c5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3c-12.6-7.8-24.5-16.1-35.4-24.9c-10.9 8.7-22.7 17.1-35.4 24.9c-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2q13.95-8.55 26.1-18c-7.9-8.4-14.9-17-21-25.7c-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9l7.3-4.3c5.4-3.2 12.4-1.7 16 3.4c5 7 10.8 14 17.4 20.9c13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24m58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9"></svg:path>`,
})
export class FaSolidLanguageIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaptopIcon],svg[fa-solid-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16M576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512zm-64 272H128V64h384z"></svg:path>`,
})
export class FaSolidLaptopIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaptopCodeIcon],svg[fa-solid-laptop-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16M576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512zm-64 272H128V64h384z"></svg:path>`,
})
export class FaSolidLaptopCodeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaptopHouseIcon],svg[fa-solid-laptop-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 288h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v37.12c11.11-12.88 27-21.12 44.8-21.12h136.94l6.65-7.53A16.5 16.5 0 0 0 480 207a16.3 16.3 0 0 0-4.75-10.61L416 144V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v39.3L263.5 8.92C258 4 247.45 0 240.05 0s-17.93 4-23.47 8.92L4.78 196.42A16.15 16.15 0 0 0 0 207a16.4 16.4 0 0 0 3.55 9.39l18.79 21.31A16.22 16.22 0 0 0 33 242.48a16.5 16.5 0 0 0 9.34-3.48L64 219.88V384a32 32 0 0 0 32 32h176Zm357.33 160H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91 0-28.8 14.33-28.8 32v160h-37.33A10.67 10.67 0 0 0 256 458.67v10.66A42.82 42.82 0 0 0 298.6 512h298.8a42.82 42.82 0 0 0 42.6-42.67v-10.66A10.67 10.67 0 0 0 629.33 448M544 448H352V304h192Z"></svg:path>`,
})
export class FaSolidLaptopHouseIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaptopMedicalIcon],svg[fa-solid-laptop-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8M576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidLaptopMedicalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaughIcon],svg[fa-solid-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 152c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m88 272h-16c-73.4 0-134-55-142.9-126c-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18c-8.9 71-69.5 126-142.9 126"></svg:path>`,
})
export class FaSolidLaughIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaughBeamIcon],svg[fa-solid-laugh-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m24 199.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.8 4.1-15.1-4.5m-160 0c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5M398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126c-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18"></svg:path>`,
})
export class FaSolidLaughBeamIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaughSquintIcon],svg[fa-solid-laugh-squint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m33.8 161.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 180l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6m-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3zM398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126c-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18"></svg:path>`,
})
export class FaSolidLaughSquintIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLaughWinkIcon],svg[fa-solid-laugh-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m20.1 198.1c4-25.2 34.2-42.1 59.9-42.1s55.9 16.9 59.9 42.1c1.7 11.1-11.4 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 217c-8.4 7.4-21.6.3-19.9-10.9M168 160c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m230.9 146C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126c-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18"></svg:path>`,
})
export class FaSolidLaughWinkIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLayerGroupIcon],svg[fa-solid-layer-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.6 25.6 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04m487.18 88.28l-58.09-26.33l-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40m0 127.8l-57.87-26.23l-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87L12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40"></svg:path>`,
})
export class FaSolidLayerGroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLeafIcon],svg[fa-solid-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6c16.4 6.8 35-1.1 41.8-17.3c1.5-3.6 20.9-47.9 71.9-90.6c32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6"></svg:path>`,
})
export class FaSolidLeafIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLemonIcon],svg[fa-solid-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M489.038 22.963C465.944-.13 434.648-5.93 413.947 6.129c-58.906 34.312-181.25-53.077-321.073 86.746S40.441 355.041 6.129 413.945c-12.059 20.702-6.26 51.999 16.833 75.093c23.095 23.095 54.392 28.891 75.095 16.832c58.901-34.31 181.246 53.079 321.068-86.743S471.56 156.96 505.871 98.056c12.059-20.702 6.261-51.999-16.833-75.093M243.881 95.522c-58.189 14.547-133.808 90.155-148.358 148.358c-1.817 7.27-8.342 12.124-15.511 12.124c-1.284 0-2.59-.156-3.893-.481c-8.572-2.144-13.784-10.83-11.642-19.403C81.901 166.427 166.316 81.93 236.119 64.478c8.575-2.143 17.261 3.069 19.403 11.642s-3.069 17.259-11.641 19.402"></svg:path>`,
})
export class FaSolidLemonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLessThanIcon],svg[fa-solid-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.01 32.01 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64"></svg:path>`,
})
export class FaSolidLessThanIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLessThanEqualIcon],svg[fa-solid-less-than-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54.98 214.2l301.41 119.87c18.39 6.03 38.71-2.54 45.38-19.15l12.09-30.08c6.68-16.61-2.82-34.97-21.21-41l-175.44-68.05l175.56-68.09c18.29-6 27.74-24.27 21.1-40.79l-12.03-29.92c-6.64-16.53-26.86-25.06-45.15-19.06L54.98 137.89C41.21 142.41 32 154.5 32 168.07v15.96c0 13.56 9.21 25.65 22.98 30.17M424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24"></svg:path>`,
})
export class FaSolidLessThanEqualIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLevelDownAltIcon],svg[fa-solid-level-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a12 12 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331"></svg:path>`,
})
export class FaSolidLevelDownAltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLevelUpAltIcon],svg[fa-solid-level-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a12 12 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331"></svg:path>`,
})
export class FaSolidLevelUpAltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLifeRingIcon],svg[fa-solid-life-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.4 218.4 0 0 1 45.255 45.255M256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96s96 42.981 96 96s-42.981 96-96 96M127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.4 218.4 0 0 1 45.255-45.255M82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.4 218.4 0 0 1-45.255-45.255m302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.4 218.4 0 0 1-45.255 45.255"></svg:path>`,
})
export class FaSolidLifeRingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLightbulbIcon],svg[fa-solid-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a32 32 0 0 0 5.36-17.69l.04-38.35H96.01zM0 176c0 44.37 16.45 84.85 43.56 115.78c16.52 18.85 42.36 58.23 52.21 91.45c.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78c9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176C352 78.61 272.91-.3 175.45 0C73.44.31 0 82.97 0 176m176-80c-44.11 0-80 35.89-80 80c0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112c8.84 0 16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidLightbulbIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLinkIcon],svg[fa-solid-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.04 16.04 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.5 152.5 0 0 1 20.522 17.197M467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.5 152.5 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.04 16.04 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959"></svg:path>`,
})
export class FaSolidLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLiraSignIcon],svg[fa-solid-lira-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371.994 256h-48.019C317.64 256 312 260.912 312 267.246C312 368 230.179 416 144 416V256.781l134.603-29.912A12 12 0 0 0 288 215.155v-40.976c0-7.677-7.109-13.38-14.603-11.714L144 191.219V160.78l134.603-29.912A12 12 0 0 0 288 119.154V78.179c0-7.677-7.109-13.38-14.603-11.714L144 95.219V44c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v68.997L9.397 125.131A12 12 0 0 0 0 136.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 178.558v30.439L9.397 221.131A12 12 0 0 0 0 232.845v40.976c0 7.677 7.109 13.38 14.603 11.714L64 274.558V468c0 6.627 5.373 12 12 12h79.583c134.091 0 223.255-77.834 228.408-211.592c.261-6.782-5.211-12.408-11.997-12.408"></svg:path>`,
})
export class FaSolidLiraSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidListIcon],svg[fa-solid-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16m0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16m416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidListAltIcon],svg[fa-solid-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48M128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40s40-17.909 40-40s-17.909-40-40-40m0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40s40-17.909 40-40s-17.909-40-40-40m0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40s40-17.909 40-40s-17.909-40-40-40m288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12m0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12m0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12"></svg:path>`,
})
export class FaSolidListAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidListOlIcon],svg[fa-solid-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157 157 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09c0 4.72-4.2 8.22-14.36 8.22a41.5 41.5 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94c7.71 4.69 20.38 9.44 37 9.44c34.16 0 48.5-22.75 48.5-44.12c-.03-14.38-9.12-29.76-28.73-34.88M496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8m-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44c0-29.06-25-39.56-44.47-39.56c-21.36 0-33.8 10-40.46 18.75c-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320"></svg:path>`,
})
export class FaSolidListOlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidListUlIcon],svg[fa-solid-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 160a48 48 0 1 0 48 48a48 48 0 0 0-48-48m0 160a48 48 0 1 0 48 48a48 48 0 0 0-48-48m448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidListUlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLocationArrowIcon],svg[fa-solid-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97"></svg:path>`,
})
export class FaSolidLocationArrowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLockIcon],svg[fa-solid-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48m-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72z"></svg:path>`,
})
export class FaSolidLockIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLockOpenIcon],svg[fa-solid-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9c40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0"></svg:path>`,
})
export class FaSolidLockOpenIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLongArrowAltDownIcon],svg[fa-solid-long-arrow-alt-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971z"></svg:path>`,
})
export class FaSolidLongArrowAltDownIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLongArrowAltLeftIcon],svg[fa-solid-long-arrow-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971z"></svg:path>`,
})
export class FaSolidLongArrowAltLeftIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLongArrowAltRightIcon],svg[fa-solid-long-arrow-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971z"></svg:path>`,
})
export class FaSolidLongArrowAltRightIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLongArrowAltUpIcon],svg[fa-solid-long-arrow-alt-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971z"></svg:path>`,
})
export class FaSolidLongArrowAltUpIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLowVisionIcon],svg[fa-solid-low-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M569.344 231.631C512.96 135.949 407.81 72 288 72c-28.468 0-56.102 3.619-82.451 10.409L152.778 10.24c-7.601-10.858-22.564-13.5-33.423-5.9l-13.114 9.178c-10.86 7.601-13.502 22.566-5.9 33.426l43.131 58.395C89.449 131.73 40.228 174.683 6.682 231.581l-.034.05c-8.765 14.875-8.964 33.528 0 48.739c38.5 65.332 99.742 115.862 172.859 141.349L55.316 244.302A272 272 0 0 1 83.61 208.39l119.4 170.58h.01l40.63 58.04a330 330 0 0 0 78.94 1.17l-189.98-271.4a277.6 277.6 0 0 1 38.777-21.563l251.836 356.544c7.601 10.858 22.564 13.499 33.423 5.9l13.114-9.178c10.86-7.601 13.502-22.567 5.9-33.426l-43.12-58.377l-.007-.009c57.161-27.978 104.835-72.04 136.81-126.301a47.94 47.94 0 0 0 .001-48.739M390.026 345.94l-19.066-27.23c24.682-32.567 27.711-76.353 8.8-111.68v.03c0 23.65-19.17 42.82-42.82 42.82c-23.828 0-42.82-19.349-42.82-42.82c0-23.65 19.17-42.82 42.82-42.82h.03c-24.75-13.249-53.522-15.643-79.51-7.68l-19.068-27.237C253.758 123.306 270.488 120 288 120c75.162 0 136 60.826 136 136c0 34.504-12.833 65.975-33.974 89.94"></svg:path>`,
})
export class FaSolidLowVisionIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLuggageCartIcon],svg[fa-solid-luggage-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 320h32V96h-32c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32m352-32V128c0-17.67-14.33-32-32-32h-32v224h32c17.67 0 32-14.33 32-32m48 96H128V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h48v368c0 8.84 7.16 16 16 16h82.94c-1.79 5.03-2.94 10.36-2.94 16c0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16h197.88c-1.79 5.03-2.94 10.36-2.94 16c0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M480 96V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v272h192zm-48 0h-96V48h96z"></svg:path>`,
})
export class FaSolidLuggageCartIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLungsIcon],svg[fa-solid-lungs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M636.11 390.15C614.44 308.85 580.07 231 534.1 159.13C511.98 124.56 498.03 96 454.05 96C415.36 96 384 125.42 384 161.71v60.11l-32.88-21.92a16 16 0 0 1-7.12-13.31V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v170.59c0 5.35-2.67 10.34-7.12 13.31L256 221.82v-60.11C256 125.42 224.64 96 185.95 96c-43.98 0-57.93 28.56-80.05 63.13C59.93 231 25.56 308.85 3.89 390.15C1.3 399.84 0 409.79 0 419.78c0 61.23 62.48 105.44 125.24 88.62l59.5-15.95c42.18-11.3 71.26-47.47 71.26-88.62v-87.49l-85.84 57.23a7.99 7.99 0 0 1-11.09-2.22l-8.88-13.31a7.99 7.99 0 0 1 2.22-11.09L320 235.23l167.59 111.72a7.994 7.994 0 0 1 2.22 11.09l-8.88 13.31a7.994 7.994 0 0 1-11.09 2.22L384 316.34v87.49c0 41.15 29.08 77.31 71.26 88.62l59.5 15.95C577.52 525.22 640 481.01 640 419.78c0-9.99-1.3-19.94-3.89-29.63"></svg:path>`,
})
export class FaSolidLungsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidLungsVirusIcon],svg[fa-solid-lungs-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 150.68V16a16 16 0 0 0-16-16h-16a16 16 0 0 0-16 16v134.68a46.45 46.45 0 0 1 48 0M195.54 444.46a48.06 48.06 0 0 1 0-67.88l8.58-8.58H192a48 48 0 0 1 0-96h12.12l-8.58-8.57a48 48 0 0 1 60.46-74v-27.68C256 125.38 224.62 96 186 96c-44 0-58 28.5-80.12 63.13a819.5 819.5 0 0 0-102 231A113.2 113.2 0 0 0 0 419.75C0 481 62.5 525.26 125.25 508.38l59.5-15.87a98.5 98.5 0 0 0 52.5-34.75a46.49 46.49 0 0 1-41.71-13.3m226.29-22.63a16 16 0 0 0 0-22.62l-8.58-8.58c-20.16-20.16-5.88-54.63 22.63-54.63H448a16 16 0 0 0 0-32h-12.12c-28.51 0-42.79-34.47-22.63-54.62l8.58-8.58a16 16 0 0 0-22.63-22.63l-8.57 8.58c-20.16 20.16-54.63 5.88-54.63-22.63V192a16 16 0 0 0-32 0v12.12c0 28.51-34.47 42.79-54.63 22.63l-8.57-8.58a16 16 0 0 0-22.63 22.63l8.58 8.58c20.16 20.15 5.88 54.62-22.63 54.62H192a16 16 0 0 0 0 32h12.12c28.51 0 42.79 34.47 22.63 54.63l-8.58 8.58a16 16 0 1 0 22.63 22.62l8.57-8.57c20.16-20.16 54.63-5.88 54.63 22.62V448a16 16 0 0 0 32 0v-12.12c0-28.5 34.47-42.78 54.63-22.62l8.57 8.57a16 16 0 0 0 22.63 0M288 304a16 16 0 1 1 16-16a16 16 0 0 1-16 16m64 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16m284.12 22.13a819.5 819.5 0 0 0-102-231C512 124.5 498 96 454 96c-38.62 0-70 29.38-70 65.75v27.72a48 48 0 0 1 60.46 74l-8.58 8.53H448a48 48 0 0 1 0 96h-12.12l8.58 8.58a47.7 47.7 0 0 1-41.71 81.18a98.5 98.5 0 0 0 52.5 34.75l59.5 15.87C577.5 525.26 640 481 640 419.75a113.2 113.2 0 0 0-3.88-29.62"></svg:path>`,
})
export class FaSolidLungsVirusIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMagicIcon],svg[fa-solid-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224 96l16-32l32-16l-32-16l-16-32l-16 32l-32 16l32 16zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0L53.34 53.33L0 80l53.34 26.67zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0s-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37c8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24M359.45 203.46l-50.91-50.91l86.6-86.6l50.91 50.91z"></svg:path>`,
})
export class FaSolidMagicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMagnetIcon],svg[fa-solid-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.07 148.1H12a12 12 0 0 1-12-12v-80a36 36 0 0 1 36-36h104a36 36 0 0 1 36 36v80a11.89 11.89 0 0 1-11.93 12m347.93-12V56a36 36 0 0 0-36-36H372a36 36 0 0 0-36 36v80a12 12 0 0 0 12 12h152a11.89 11.89 0 0 0 12-11.9m-164 44a12 12 0 0 0-12 12v52c0 128.1-160 127.9-160 0v-52a12 12 0 0 0-12-12H12.1a12 12 0 0 0-12 12.1c.1 21.4.6 40.3 0 53.3c0 150.6 136.17 246.6 256.75 246.6s255-96 255-246.7c-.6-12.8-.2-33 0-53.2a12 12 0 0 0-12-12.1z"></svg:path>`,
})
export class FaSolidMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMailBulkIcon],svg[fa-solid-mail-bulk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 448c-25.6 0-51.2-22.4-64-32c-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4c-12.8 9.6-38.4 32-64 32m128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4c9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32m256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32m-32 128h-64v-64h64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96z"></svg:path>`,
})
export class FaSolidMailBulkIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMaleIcon],svg[fa-solid-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48"></svg:path>`,
})
export class FaSolidMaleIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapIcon],svg[fa-solid-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.01 32.01 0 0 0 0 117.66M192 416l192 64V96L192 32zM554.06 33.16L416 96v384l139.88-55.95A32 32 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86"></svg:path>`,
})
export class FaSolidMapIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapMarkedIcon],svg[fa-solid-map-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126c0 56.26 82.35 158.8 113.9 196.02c6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126C414 56.41 357.59 0 288 0M20.12 215.95A32.01 32.01 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96c-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72c-9.13 10.77-22.44 16.95-36.51 16.95m266.06-198.51L416 224v288l139.88-55.95A32 32 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86"></svg:path>`,
})
export class FaSolidMapMarkedIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapMarkedAltIcon],svg[fa-solid-map-marked-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126c0 56.26 82.35 158.8 113.9 196.02c6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126C414 56.41 357.59 0 288 0m0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42s42 18.8 42 42s-18.8 42-42 42M20.12 215.95A32.01 32.01 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96c-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72c-9.13 10.77-22.44 16.95-36.51 16.95m266.06-198.51L416 224v288l139.88-55.95A32 32 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86"></svg:path>`,
})
export class FaSolidMapMarkedAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapMarkerIcon],svg[fa-solid-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0"></svg:path>`,
})
export class FaSolidMapMarkerIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapMarkerAltIcon],svg[fa-solid-map-marker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0M192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80s-80 35.817-80 80s35.817 80 80 80"></svg:path>`,
})
export class FaSolidMapMarkerAltIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapPinIcon],svg[fa-solid-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06M144 0C64.47 0 0 64.47 0 144s64.47 144 144 144s144-64.47 144-144S223.53 0 144 0m0 76c-37.5 0-68 30.5-68 68c0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92c6.62 0 12 5.38 12 12s-5.38 12-12 12"></svg:path>`,
})
export class FaSolidMapPinIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMapSignsIcon],svg[fa-solid-map-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63M224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24"></svg:path>`,
})
export class FaSolidMapSignsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarkerIcon],svg[fa-solid-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.95 290.03A327.04 327.04 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l75.4-75.4l-128.02-128.02zM485.49 26.51c-35.35-35.35-92.67-35.35-128.02 0l-21.76 21.76l-36.56-36.55c-15.62-15.62-40.95-15.62-56.56 0L138.47 115.84c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0l87.15-87.15l19.59 19.59L191.98 192L320 320.02l165.49-165.49c35.35-35.35 35.35-92.66 0-128.02"></svg:path>`,
})
export class FaSolidMarkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsIcon],svg[fa-solid-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144s144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7l16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12M144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidMarsIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsDoubleIcon],svg[fa-solid-mars-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-48.7 48.7C198.5 72.1 172.2 64 144 64C64.5 64 0 128.5 0 208s64.5 144 144 144s144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l48.7-48.7l16.9 16.9c2.4 2.4 5.5 3.5 8.4 3.5c6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12M144 288c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80m356-128.1h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-48.7 48.7c-18.2-11.4-39-18.9-61.5-21.3c-2.1 21.8-8.2 43.3-18.4 63.3c1.1 0 2.2-.1 3.2-.1c44.1 0 80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80c0-1.1 0-2.2.1-3.2c-20 10.2-41.5 16.4-63.3 18.4C168.4 455.6 229.6 512 304 512c79.5 0 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l48.7-48.7l16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5c6.2 0 12.1-4.8 12.1-12v-79c0-6.7-5.4-12.1-12-12.1"></svg:path>`,
})
export class FaSolidMarsDoubleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsStrokeIcon],svg[fa-solid-mars-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-17.5 17.5l-14.1-14.1c-4.7-4.7-12.3-4.7-17 0L224.5 133c-4.7 4.7-4.7 12.3 0 17l14.1 14.1l-18 18c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144s144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l18-18l14.1 14.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L329.2 164l17.5-17.5l16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c-.1-6.6-5.5-12-12.1-12M144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidMarsStrokeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsStrokeHIcon],svg[fa-solid-mars-stroke-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m476.2 247.5l-55.9-55.9c-7.6-7.6-20.5-2.2-20.5 8.5V224H376v-20c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v20h-27.6c-5.8-25.6-18.7-49.9-38.6-69.8C189.6 98 98.4 98 42.2 154.2s-56.2 147.4 0 203.6s147.4 56.2 203.6 0c19.9-19.9 32.8-44.2 38.6-69.8H312v20c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-20h23.9v23.9c0 10.7 12.9 16 20.5 8.5l55.9-55.9c4.6-4.7 4.6-12.3-.1-17m-275.6 65.1c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1s81.9-31.2 113.1 0c31.2 31.1 31.2 81.9 0 113.1"></svg:path>`,
})
export class FaSolidMarsStrokeHIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMarsStrokeVIcon],svg[fa-solid-mars-stroke-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245.8 234.2c-19.9-19.9-44.2-32.8-69.8-38.6v-25.4h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V81.4h23.9c10.7 0 16-12.9 8.5-20.5L152.5 5.1c-4.7-4.7-12.3-4.7-17 0L79.6 61c-7.6 7.6-2.2 20.5 8.5 20.5H112v24.7H92c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h20v25.4c-25.6 5.8-49.9 18.7-69.8 38.6c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0c56.3-56.2 56.3-147.4 0-203.6m-45.2 158.4c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1s81.9-31.2 113.1 0c31.2 31.1 31.2 81.9 0 113.1"></svg:path>`,
})
export class FaSolidMarsStrokeVIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMaskIcon],svg[fa-solid-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.67 64c-442.6 0-357.57 384-158.46 384c39.9 0 77.47-20.69 101.42-55.86l25.73-37.79c15.66-22.99 46.97-22.99 62.63 0l25.73 37.79C401.66 427.31 439.23 448 479.13 448c189.86 0 290.63-384-158.46-384M184 308.36c-41.06 0-67.76-25.66-80.08-41.05c-5.23-6.53-5.23-16.09 0-22.63c12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63c-12.32 15.4-39.02 41.05-80.08 41.05m272 0c-41.06 0-67.76-25.66-80.08-41.05c-5.23-6.53-5.23-16.09 0-22.63c12.32-15.4 39.01-41.05 80.08-41.05s67.76 25.66 80.08 41.05c5.23 6.53 5.23 16.09 0 22.63c-12.32 15.4-39.02 41.05-80.08 41.05"></svg:path>`,
})
export class FaSolidMaskIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMedalIcon],svg[fa-solid-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.75 130.75L154.62 15.54A32 32 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39M495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0M256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m92.52 157.26l-37.93 36.96l8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22l-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64l23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39c4.11 0 8.22 2.14 10.33 6.39l23.43 47.52l52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59"></svg:path>`,
})
export class FaSolidMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMedkitIcon],svg[fa-solid-medkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 480h320V128h-32V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H96zm96-384h128v32H192zm320 80v256c0 26.51-21.49 48-48 48h-16V128h16c26.51 0 48 21.49 48 48M64 480H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16zm288-208v32c0 8.837-7.163 16-16 16h-48v48c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16v-48h-48c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h48v-48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v48h48c8.837 0 16 7.163 16 16"></svg:path>`,
})
export class FaSolidMedkitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMehIcon],svg[fa-solid-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32m-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidMehIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMehBlankIcon],svg[fa-solid-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m-80 232c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidMehBlankIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMehRollingEyesIcon],svg[fa-solid-meh-rolling-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M88 224c0-24.3 13.7-45.2 33.6-56c-.7 2.6-1.6 5.2-1.6 8c0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8c19.9 10.8 33.6 31.7 33.6 56c0 35.3-28.7 64-64 64s-64-28.7-64-64m224 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32m32-112c-35.3 0-64-28.7-64-64c0-24.3 13.7-45.2 33.6-56c-.7 2.6-1.6 5.2-1.6 8c0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8c19.9 10.8 33.6 31.7 33.6 56c0 35.3-28.7 64-64 64"></svg:path>`,
})
export class FaSolidMehRollingEyesIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMemoryIcon],svg[fa-solid-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06M224 256h-64V128h64zm128 0h-64V128h64zm128 0h-64V128h64zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0z"></svg:path>`,
})
export class FaSolidMemoryIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMenorahIcon],svg[fa-solid-menorah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 128h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16m96 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16m192 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16m96 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16m80-32c17.67 0 32-14.33 32-32S608 0 608 0s-32 46.33-32 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S512 0 512 0s-32 46.33-32 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S416 0 416 0s-32 46.33-32 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S320 0 320 0s-32 46.33-32 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S224 0 224 0s-32 46.33-32 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S128 0 128 0S96 46.33 96 64s14.33 32 32 32m-96 0c17.67 0 32-14.33 32-32S32 0 32 0S0 46.33 0 64s14.33 32 32 32m544 192c0 17.67-14.33 32-32 32H352V144c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v176H96c-17.67 0-32-14.33-32-32V144c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v144c0 53.02 42.98 96 96 96h192v64H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16H352v-64h192c53.02 0 96-42.98 96-96V144c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16z"></svg:path>`,
})
export class FaSolidMenorahIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMercuryIcon],svg[fa-solid-mercury-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 208c0-44.2-19.9-83.7-51.2-110.1c2.5-1.8 4.9-3.8 7.2-5.8c24.7-21.2 39.8-48.8 43.2-78.8c.9-7.1-4.7-13.3-11.9-13.3h-40.5C229 0 224.1 4.1 223 9.8c-2.4 12.5-9.6 24.3-20.7 33.8C187 56.8 166.3 64 144 64s-43-7.2-58.4-20.4C74.5 34.1 67.4 22.3 64.9 9.8C63.8 4.1 58.9 0 53.2 0H12.7C5.5 0-.1 6.2.8 13.3C4.2 43.4 19.2 71 44 92.2c2.3 2 4.7 3.9 7.2 5.8C19.9 124.3 0 163.8 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4m-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80"></svg:path>`,
})
export class FaSolidMercuryIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMeteorIcon],svg[fa-solid-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.328 20.803c-11.608 38.702-34.307 111.701-61.303 187.7c6.999 2.094 13.404 4 18.606 5.594a16.062 16.062 0 0 1 9.499 22.906c-22.106 42.297-82.69 152.795-142.478 214.404c-1 1.093-2 2.5-3 3.5A194.83 194.83 0 1 1 57.085 179.41c1-1 2.406-2 3.5-3c61.6-59.905 171.973-120.405 214.373-142.498a16.058 16.058 0 0 1 22.903 9.5c1.593 5.093 3.5 11.593 5.593 18.593c75.894-27 148.977-49.702 187.674-61.296a16.183 16.183 0 0 1 20.2 20.094m-191.377 299.2A127.98 127.98 0 1 0 191.971 448a127.976 127.976 0 0 0 127.98-127.998m-127.98-32a31.995 31.995 0 1 1-31.996-32a31.96 31.96 0 0 1 31.996 32M223.966 368a15.998 15.998 0 1 1-15.998-16a16.05 16.05 0 0 1 15.998 16"></svg:path>`,
})
export class FaSolidMeteorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicrochipIcon],svg[fa-solid-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48m96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6m0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6m0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6m0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6M30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6m0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6m0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6m0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6"></svg:path>`,
})
export class FaSolidMicrochipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicrophoneIcon],svg[fa-solid-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96m160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidMicrophoneIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicrophoneAltIcon],svg[fa-solid-microphone-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 192h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16M176 352c53.02 0 96-42.98 96-96h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H272v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H272v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H272c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96"></svg:path>`,
})
export class FaSolidMicrophoneAltIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicrophoneAltSlashIcon],svg[fa-solid-microphone-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633.82 458.1L476.26 336.33C488.74 312.21 496 284.98 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67h-43.67l-41.4-32H416v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45M400 464h-56v-33.78c11.71-1.62 23.1-4.28 33.96-8.08l-50.4-38.96c-6.71.4-13.41.87-20.35.2c-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidMicrophoneAltSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicrophoneSlashIcon],svg[fa-solid-microphone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45M400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2c-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidMicrophoneSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMicroscopeIcon],svg[fa-solid-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32m304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16c0-26.51-21.49-48-48-48m-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8"></svg:path>`,
})
export class FaSolidMicroscopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMinusIcon],svg[fa-solid-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidMinusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMinusCircleIcon],svg[fa-solid-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8M124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12z"></svg:path>`,
})
export class FaSolidMinusCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMinusSquareIcon],svg[fa-solid-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12z"></svg:path>`,
})
export class FaSolidMinusSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMittenIcon],svg[fa-solid-mitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 416H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m57-209.1c-27.2-22.6-67.5-19-90.1 8.2l-20.9 25l-29.6-128.4c-18-77.5-95.4-125.9-172.8-108S-14.2 98.9 3.7 176.4L51.6 384h309l72.5-87c22.7-27.2 19-67.5-8.1-90.1"></svg:path>`,
})
export class FaSolidMittenIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMobileIcon],svg[fa-solid-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidMobileIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMobileAltIcon],svg[fa-solid-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidMobileAltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyBillIcon],svg[fa-solid-money-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32M48 400v-64c35.35 0 64 28.65 64 64zm0-224v-64h64c0 35.35-28.65 64-64 64m272 176c-44.19 0-80-42.99-80-96c0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96m272 48h-64c0-35.35 28.65-64 64-64zm0-224c-35.35 0-64-28.65-64-64h64z"></svg:path>`,
})
export class FaSolidMoneyBillIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyBillAltIcon],svg[fa-solid-money-bill-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 288h-16v-88c0-4.42-3.58-8-8-8h-13.58c-4.74 0-9.37 1.4-13.31 4.03l-15.33 10.22a7.994 7.994 0 0 0-2.22 11.09l8.88 13.31a7.994 7.994 0 0 0 11.09 2.22l.47-.31V288h-16c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h64c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32M48 400v-64c35.35 0 64 28.65 64 64zm0-224v-64h64c0 35.35-28.65 64-64 64m272 192c-53.02 0-96-50.15-96-112c0-61.86 42.98-112 96-112s96 50.14 96 112c0 61.87-43 112-96 112m272 32h-64c0-35.35 28.65-64 64-64zm0-224c-35.35 0-64-28.65-64-64h64z"></svg:path>`,
})
export class FaSolidMoneyBillAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyBillWaveIcon],svg[fa-solid-money-bill-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34c-30.89 0-61.76-3.92-92.65-13.72c-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35c30.89 0 61.76 3.92 92.65 13.72c3.47 1.1 6.95 1.62 10.35 1.62c17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47M48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4c-22.53-1.81-43.59-6.31-63.71-13.62M320 352c-44.19 0-80-42.99-80-96c0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96m272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44c5.87-26.08 27.5-45.88 54.32-49.28zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55c19.54 2.17 38.09 6.23 55.81 12.66z"></svg:path>`,
})
export class FaSolidMoneyBillWaveIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyBillWaveAltIcon],svg[fa-solid-money-bill-wave-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34c-30.89 0-61.76-3.92-92.65-13.72c-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35c30.89 0 61.76 3.92 92.65 13.72c3.47 1.1 6.95 1.62 10.35 1.62c17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47M320 352c-44.19 0-80-42.99-80-96c0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96"></svg:path>`,
})
export class FaSolidMoneyBillWaveAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyCheckIcon],svg[fa-solid-money-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidMoneyCheckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoneyCheckAltIcon],svg[fa-solid-money-check-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32M176 327.88V344c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-16.29c-11.29-.58-22.27-4.52-31.37-11.35c-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73c3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19c0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39c0-24.52 19.05-44.44 42.67-45.07V152c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35c3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73c-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19c0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39c0 24.53-19.05 44.44-42.67 45.07M416 312c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8zm160 0c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8zm0-96c0 4.42-3.58 8-8 8H296c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h272c4.42 0 8 3.58 8 8z"></svg:path>`,
})
export class FaSolidMoneyCheckAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMonumentIcon],svg[fa-solid-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-78.86-347.26a31.97 31.97 0 0 0-9.21-19.44L203.31 4.69c-6.25-6.25-16.38-6.25-22.63 0l-76.6 76.61a31.97 31.97 0 0 0-9.21 19.44L64 416h256zM240 307.2c0 6.4-6.4 12.8-12.8 12.8h-70.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h70.4c6.4 0 12.8 6.4 12.8 12.8z"></svg:path>`,
})
export class FaSolidMonumentIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMoonIcon],svg[fa-solid-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258 258 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256"></svg:path>`,
})
export class FaSolidMoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMortarPestleIcon],svg[fa-solid-mortar-pestle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501.54 60.91c17.22-17.22 12.51-46.25-9.27-57.14a35.7 35.7 0 0 0-37.37 3.37L251.09 160h151.37zM496 192H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c0 80.98 50.2 150.11 121.13 178.32c-12.76 16.87-21.72 36.8-24.95 58.69c-1.46 9.92 6.04 18.98 16.07 18.98h223.5c10.03 0 17.53-9.06 16.07-18.98c-3.22-21.89-12.18-41.82-24.95-58.69C429.8 406.11 480 336.98 480 256h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidMortarPestleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMosqueIcon],svg[fa-solid-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160H0zm579.16-192c17.86-17.39 28.84-37.34 28.84-58.91c0-52.86-41.79-93.79-87.92-122.9c-41.94-26.47-80.63-57.77-111.96-96.22L400 0l-8.12 9.97c-31.33 38.45-70.01 69.76-111.96 96.22C233.79 135.3 192 176.23 192 229.09c0 21.57 10.98 41.52 28.84 58.91zM608 320H192c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h32v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h32c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32M64 0S0 32 0 96v32h128V96c0-64-64-96-64-96"></svg:path>`,
})
export class FaSolidMosqueIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMotorcycleIcon],svg[fa-solid-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7l-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131c59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1c-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2c.5 69.6 57.2 126.5 126.8 127.1c71.6.7 129.8-57.5 129.2-129.1c-.7-69.6-57.6-126.4-127.2-126.9M128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48m463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5c-46.1 2.5-84.4-34.3-84.4-79.9c0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6c45.6-.1 82.3 38.2 79.9 84.3"></svg:path>`,
})
export class FaSolidMotorcycleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMountainIcon],svg[fa-solid-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32 32 0 0 0-1.17 32.64A32 32 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.98 31.98 0 0 0-1.17-32.63M320 91.18L405.39 224H320l-64 64l-38.06-38.06z"></svg:path>`,
})
export class FaSolidMountainIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMouseIcon],svg[fa-solid-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0"></svg:path>`,
})
export class FaSolidMouseIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMousePointerIcon],svg[fa-solid-mouse-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136l-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141"></svg:path>`,
})
export class FaSolidMousePointerIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMugHotIcon],svg[fa-solid-mug-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18c-3.8-28.2-16.4-54.2-36.6-74.7c-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4c12 12.2 19.7 27.5 22.4 44.1m112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18c-3.8-28.2-16.4-54.2-36.6-74.7c-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18c3.9 31.9 18 61.3 40.6 84.4c12 12.2 19.7 27.5 22.4 44.1M400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112m0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48"></svg:path>`,
})
export class FaSolidMugHotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidMusicIcon],svg[fa-solid-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64s96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64s96-28.65 96-64V32a32 32 0 0 0-41.62-30.49"></svg:path>`,
})
export class FaSolidMusicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidNetworkWiredIcon],svg[fa-solid-network-wired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16M256 128V64h128v64zm-64 320H96v-64h96zm352 0h-96v-64h96z"></svg:path>`,
})
export class FaSolidNetworkWiredIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidNeuterIcon],svg[fa-solid-neuter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V468c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V316.4c64.1-14.5 112-71.9 112-140.4m-144 80c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidNeuterIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidNewspaperIcon],svg[fa-solid-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24M56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8m236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12m208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12m-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12m208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12m0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12"></svg:path>`,
})
export class FaSolidNewspaperIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidNotEqualIcon],svg[fa-solid-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 208c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32h-23.88l51.87-66.81c5.37-7.02 4.04-17.06-2.97-22.43L415.61 3.3c-7.02-5.38-17.06-4.04-22.44 2.97L311.09 112H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h204.56l-74.53 96H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h55.49l-51.87 66.81c-5.37 7.01-4.04 17.05 2.97 22.43L64 508.7c7.02 5.38 17.06 4.04 22.43-2.97L168.52 400H416c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32H243.05l74.53-96z"></svg:path>`,
})
export class FaSolidNotEqualIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidNotesMedicalIcon],svg[fa-solid-notes-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48M192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidNotesMedicalIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidObjectGroupIcon],svg[fa-solid-object-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12m320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12z"></svg:path>`,
})
export class FaSolidObjectGroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidObjectUngroupIcon],svg[fa-solid-object-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 320v26a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-52a6 6 0 0 1 6-6h26V96H6a6 6 0 0 1-6-6V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v26h288V38a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-26v192h26a6 6 0 0 1 6 6v52a6 6 0 0 1-6 6h-52a6 6 0 0 1-6-6v-26zm480-64v-32h26a6 6 0 0 0 6-6v-52a6 6 0 0 0-6-6h-52a6 6 0 0 0-6 6v26H408v72h8c13.255 0 24 10.745 24 24v64c0 13.255-10.745 24-24 24h-64c-13.255 0-24-10.745-24-24v-8H192v72h-26a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6v-26h288v26a6 6 0 0 0 6 6h52a6 6 0 0 0 6-6v-52a6 6 0 0 0-6-6h-26z"></svg:path>`,
})
export class FaSolidObjectUngroupIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidOilCanIcon],svg[fa-solid-oil-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M629.8 160.31L416 224l-50.49-25.24a64.1 64.1 0 0 0-28.62-6.76H280v-48h56c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h56v48h-56L37.72 166.86a32 32 0 0 0-5.79-.53C14.67 166.33 0 180.36 0 198.34v94.95c0 15.46 11.06 28.72 26.28 31.48L96 337.46V384c0 17.67 14.33 32 32 32h274.63c8.55 0 16.75-3.42 22.76-9.51l212.26-214.75c1.5-1.5 2.34-3.54 2.34-5.66V168c.01-5.31-5.08-9.15-10.19-7.69M96 288.67l-48-8.73v-62.43l48 8.73zm453.33 84.66c0 23.56 19.1 42.67 42.67 42.67s42.67-19.1 42.67-42.67S592 288 592 288s-42.67 61.77-42.67 85.33"></svg:path>`,
})
export class FaSolidOilCanIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidOmIcon],svg[fa-solid-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360.6 60.94a10.43 10.43 0 0 0 14.76 0l21.57-21.56a10.43 10.43 0 0 0 0-14.76L375.35 3.06c-4.08-4.07-10.68-4.07-14.76 0l-21.57 21.56a10.43 10.43 0 0 0 0 14.76zM412.11 192c-26.69 0-51.77 10.39-70.64 29.25l-24.25 24.25c-6.78 6.77-15.78 10.5-25.38 10.5H245c10.54-22.1 14.17-48.11 7.73-75.23c-10.1-42.55-46.36-76.11-89.52-83.19c-36.15-5.93-70.9 5.04-96.01 28.78c-7.36 6.96-6.97 18.85 1.12 24.93l26.15 19.63c5.72 4.3 13.66 4.32 19.2-.21c8.45-6.9 19.02-10.71 30.27-10.71c26.47 0 48.01 21.53 48.01 48s-21.54 48-48.01 48h-31.9c-11.96 0-19.74 12.58-14.39 23.28l16.09 32.17c2.53 5.06 7.6 8.1 13.17 8.55h33.03c35.3 0 64.01 28.7 64.01 64s-28.71 64-64.01 64c-96.02 0-122.35-54.02-145.15-92.03c-4.53-7.55-14.77-3.58-14.79 5.22C-.09 416 41.13 512 159.94 512c70.59 0 128.02-57.42 128.02-128c0-23.42-6.78-45.1-17.81-64h21.69c26.69 0 51.77-10.39 70.64-29.25l24.25-24.25c6.78-6.77 15.78-10.5 25.38-10.5c19.78 0 35.88 16.09 35.88 35.88V392c0 13.23-18.77 24-32.01 24c-39.4 0-66.67-24.24-81.82-42.89c-4.77-5.87-14.2-2.54-14.2 5.02V416s0 64 96.02 64c48.54 0 96.02-39.47 96.02-88V291.88c0-55.08-44.8-99.88-99.89-99.88m42.18-124.73c-85.55 65.12-169.05 2.75-172.58.05c-6.02-4.62-14.44-4.38-20.14.55c-5.74 4.92-7.27 13.17-3.66 19.8c1.61 2.95 40.37 72.34 118.8 72.34c79.92 0 98.78-31.36 101.75-37.66c1.02-2.12 1.53-4.47 1.53-6.83V80c0-13.22-15.14-20.69-25.7-12.73"></svg:path>`,
})
export class FaSolidOmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidOmegaIcon],svg[fa-solid-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M488 416h-32.61c42.89-53.17 65.05-123.68 53.64-199.4C492.12 104.36 399.19 14.85 286.45 1.77 131.74-16.18 0 104.82 0 256c0 60.59 21.27 116.18 56.61 160H24c-13.25 0-24 10.75-24 24v48c0 13.25 10.75 24 24 24h136c17.67 0 32-14.33 32-32v-42.7c0-20.53-11.09-38.78-27.88-50.59-48.22-33.92-76.98-93.67-65.67-159.06 10.89-62.93 60.5-114.85 122.99-128.01C324.68 77.9 416 156.49 416 256c0 54.44-27.4 102.51-69.08 131.38-16.49 11.43-26.92 29.63-26.92 49.7V480c0 17.67 14.33 32 32 32h136c13.25 0 24-10.75 24-24v-48c0-13.25-10.75-24-24-24z" fill="currentColor"></svg:path>`,
})
export class FaSolidOmegaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidOtterIcon],svg[fa-solid-otter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 32h-32l-13.25-13.25A63.97 63.97 0 0 0 517.49 0H497c-11.14 0-22.08 2.91-31.75 8.43L312 96h-56C149.96 96 64 181.96 64 288v1.61c0 32.75-16 62.14-39.56 84.89c-18.19 17.58-28.1 43.68-23.19 71.8c6.76 38.8 42.9 65.7 82.28 65.7H192c17.67 0 32-14.33 32-32s-14.33-32-32-32H80c-8.83 0-16-7.17-16-16s7.17-16 16-16h224c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-64l149.49-80.5L448 416h80c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-28.22l-55.11-110.21L521.14 192H544c53.02 0 96-42.98 96-96V64c0-17.67-14.33-32-32-32m-96 16c8.84 0 16 7.16 16 16s-7.16 16-16 16s-16-7.16-16-16s7.16-16 16-16m32 96h-34.96L407.2 198.84l-13.77-27.55L512 112h77.05c-6.62 18.58-24.22 32-45.05 32"></svg:path>`,
})
export class FaSolidOtterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidOutdentIcon],svg[fa-solid-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 0 0 0 22.62zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288m0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160M432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidOutdentIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPagerIcon],svg[fa-solid-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64M160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z"></svg:path>`,
})
export class FaSolidPagerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPaintBrushIcon],svg[fa-solid-paint-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3c-2.35 6.21-8 9.98-14.59 9.98c-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19c0-3.11-.65-6.08-.97-9.13zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03c62.11 0 98.11-45.47 211.16-256.46c7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0"></svg:path>`,
})
export class FaSolidPaintBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPaintRollerIcon],svg[fa-solid-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32m32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64"></svg:path>`,
})
export class FaSolidPaintRollerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPaletteIcon],svg[fa-solid-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7c41.2-6.4 61.4-54.6 42.5-91.7c-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5M96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidPaletteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPalletIcon],svg[fa-solid-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 256h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H384v128l-64-32l-64 32V0H144c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16m480 128c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-64zm-336 64H128v-64h160zm224 0H352v-64h160z"></svg:path>`,
})
export class FaSolidPalletIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPaperPlaneIcon],svg[fa-solid-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2"></svg:path>`,
})
export class FaSolidPaperPlaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPaperclipIcon],svg[fa-solid-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0c43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998c-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292c4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798c-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313c34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485"></svg:path>`,
})
export class FaSolidPaperclipIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidParachuteBoxIcon],svg[fa-solid-parachute-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.9 175c-9.1-75.6-78.4-132.4-158.3-158.7C390 55.7 416 116.9 416 192h28.1L327.5 321.5c-2.5-.6-4.8-1.5-7.5-1.5h-48V192h112C384 76.8 315.1 0 256 0S128 76.8 128 192h112v128h-48c-2.7 0-5 .9-7.5 1.5L67.9 192H96c0-75.1 26-136.3 62.4-175.7C78.5 42.7 9.2 99.5.1 175c-1.1 9.1 6.8 17 16 17h8.7l136.7 151.9c-.7 2.6-1.6 5.2-1.6 8.1v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-2.9-.9-5.4-1.6-8.1L487.1 192h8.7c9.3 0 17.2-7.8 16.1-17"></svg:path>`,
})
export class FaSolidParachuteBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidParagraphIcon],svg[fa-solid-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 48v32a16 16 0 0 1-16 16h-48v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96h-32v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16"></svg:path>`,
})
export class FaSolidParagraphIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidParkingIcon],svg[fa-solid-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96m0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32"></svg:path>`,
})
export class FaSolidParkingIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPassportIcon],svg[fa-solid-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M129.62 176h39.09c1.49-27.03 6.54-51.35 14.21-70.41c-27.71 13.24-48.02 39.19-53.3 70.41m0 32c5.29 31.22 25.59 57.17 53.3 70.41c-7.68-19.06-12.72-43.38-14.21-70.41zM224 286.69c7.69-7.45 20.77-34.42 23.43-78.69h-46.87c2.67 44.26 15.75 71.24 23.44 78.69M200.57 176h46.87c-2.66-44.26-15.74-71.24-23.43-78.69c-7.7 7.45-20.78 34.43-23.44 78.69m64.51 102.41c27.71-13.24 48.02-39.19 53.3-70.41h-39.09c-1.49 27.03-6.53 51.35-14.21 70.41M416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32m-80 416H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16m-112-96c-70.69 0-128-57.31-128-128S153.31 64 224 64s128 57.31 128 128s-57.31 128-128 128m41.08-214.41c7.68 19.06 12.72 43.38 14.21 70.41h39.09c-5.28-31.22-25.59-57.17-53.3-70.41"></svg:path>`,
})
export class FaSolidPassportIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPastafarianismIcon],svg[fa-solid-pastafarianism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624.54 347.67c-32.7-12.52-57.36 4.25-75.37 16.45c-17.06 11.53-23.25 14.42-31.41 11.36c-8.12-3.09-10.83-9.38-15.89-29.38c-3.33-13.15-7.44-29.32-17.95-42.65c2.24-2.91 4.43-5.79 6.38-8.57C500.47 304.45 513.71 312 532 312c33.95 0 50.87-25.78 62.06-42.83c10.59-16.14 15-21.17 21.94-21.17c13.25 0 24-10.75 24-24s-10.75-24-24-24c-33.95 0-50.87 25.78-62.06 42.83c-10.6 16.14-15 21.17-21.94 21.17c-17.31 0-37.48-61.43-97.26-101.91l17.25-34.5C485.43 125.5 512 97.98 512 64c0-35.35-28.65-64-64-64s-64 28.65-64 64c0 13.02 3.94 25.1 10.62 35.21l-18.15 36.3c-16.98-4.6-35.6-7.51-56.46-7.51s-39.49 2.91-56.46 7.51l-18.15-36.3C252.06 89.1 256 77.02 256 64c0-35.35-28.65-64-64-64s-64 28.65-64 64c0 33.98 26.56 61.5 60.02 63.6l17.25 34.5C145.68 202.44 125.15 264 108 264c-6.94 0-11.34-5.03-21.94-21.17C74.88 225.78 57.96 200 24 200c-13.25 0-24 10.75-24 24s10.75 24 24 24c6.94 0 11.34 5.03 21.94 21.17C57.13 286.22 74.05 312 108 312c18.29 0 31.53-7.55 41.7-17.11c1.95 2.79 4.14 5.66 6.38 8.57c-10.51 13.33-14.62 29.5-17.95 42.65c-5.06 20-7.77 26.28-15.89 29.38c-8.11 3.06-14.33.17-31.41-11.36c-18.03-12.2-42.72-28.92-75.37-16.45c-12.39 4.72-18.59 18.58-13.87 30.97c4.72 12.41 18.61 18.61 30.97 13.88c8.16-3.09 14.34-.19 31.39 11.36c13.55 9.16 30.83 20.86 52.42 20.84c7.17 0 14.83-1.28 22.97-4.39c32.66-12.44 39.98-41.33 45.33-62.44c2.21-8.72 3.99-14.49 5.95-18.87c16.62 13.61 36.95 25.88 61.64 34.17c-9.96 37-32.18 90.8-60.26 90.8c-13.25 0-24 10.75-24 24s10.75 24 24 24c66.74 0 97.05-88.63 107.42-129.14c6.69.6 13.42 1.14 20.58 1.14s13.89-.54 20.58-1.14C350.95 423.37 381.26 512 448 512c13.25 0 24-10.75 24-24s-10.75-24-24-24c-27.94 0-50.21-53.81-60.22-90.81c24.69-8.29 45-20.56 61.62-34.16c1.96 4.38 3.74 10.15 5.95 18.87c5.34 21.11 12.67 50 45.33 62.44c8.14 3.11 15.8 4.39 22.97 4.39c21.59 0 38.87-11.69 52.42-20.84c17.05-11.55 23.28-14.45 31.39-11.36c12.39 4.75 26.27-1.47 30.97-13.88c4.71-12.4-1.49-26.26-13.89-30.98M448 48c8.82 0 16 7.18 16 16s-7.18 16-16 16s-16-7.18-16-16s7.18-16 16-16m-256 0c8.82 0 16 7.18 16 16s-7.18 16-16 16s-16-7.18-16-16s7.18-16 16-16"></svg:path>`,
})
export class FaSolidPastafarianismIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPasteIcon],svg[fa-solid-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24s-24-10.745-24-24s10.745-24 24-24m184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24m104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24 24 0 0 1 7.03 16.971"></svg:path>`,
})
export class FaSolidPasteIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPauseIcon],svg[fa-solid-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48m304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48"></svg:path>`,
})
export class FaSolidPauseIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPauseCircleIcon],svg[fa-solid-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"></svg:path>`,
})
export class FaSolidPauseCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPawIcon],svg[fa-solid-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 224c-79.41 0-192 122.76-192 200.25c0 34.9 26.81 55.75 71.74 55.75c48.84 0 81.09-25.08 120.26-25.08c39.51 0 71.85 25.08 120.26 25.08c44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224m-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13S-7.13 201.95 3.27 236.6s42.44 57.09 71.56 50.13s44.29-40.69 33.89-75.34m84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87s-46.42 49.94-34.58 93.36s46.53 72.02 77.46 63.87m281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13c-10.4 34.65 4.77 68.38 33.89 75.34s61.15-15.48 71.56-50.13c10.4-34.65-4.77-68.38-33.89-75.34m-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87s-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87s3.64 85.22 34.58 93.36"></svg:path>`,
})
export class FaSolidPawIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPeaceIcon],svg[fa-solid-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248s248-111.03 248-248S384.97 8 248 8m184 248c0 31.93-8.2 61.97-22.57 88.17L280 240.63V74.97c86.23 15.21 152 90.5 152 181.03M216 437.03c-33.86-5.97-64.49-21.2-89.29-43.02L216 322.57zm64-114.46L369.29 394c-24.8 21.82-55.43 37.05-89.29 43.02zm-64-247.6v165.66L86.57 344.17C72.2 317.97 64 287.93 64 256c0-90.53 65.77-165.82 152-181.03"></svg:path>`,
})
export class FaSolidPeaceIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPenIcon],svg[fa-solid-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91"></svg:path>`,
})
export class FaSolidPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPenAltIcon],svg[fa-solid-pen-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.75 18.75-49.15 0-67.91m-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82l22.63 22.62L93.95 290.03A327.04 327.04 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79l-82.77-82.77z"></svg:path>`,
})
export class FaSolidPenAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPenFancyIcon],svg[fa-solid-pen-fancy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.18 282.94a32 32 0 0 0-20.24 20.24L0 480l4.69 4.69l92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8c0-17.67 14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.98 31.98 0 0 0 20.24-20.24l33.07-84.07l-98.88-98.88zM369.25 28.32L186.14 227.81l97.85 97.85l199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32"></svg:path>`,
})
export class FaSolidPenFancyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPenNibIcon],svg[fa-solid-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136.6 138.79a64 64 0 0 0-43.31 41.35L0 460l14.69 14.69L164.8 324.58c-2.99-6.26-4.8-13.18-4.8-20.58c0-26.51 21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48c-7.4 0-14.32-1.81-20.58-4.8L37.31 497.31L52 512l279.86-93.29a64 64 0 0 0 41.35-43.31L416 224L288 96zm361.34-64.62l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.75 18.75-49.15 0-67.91"></svg:path>`,
})
export class FaSolidPenNibIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPenSquareIcon],svg[fa-solid-pen-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48M238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1M345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9"></svg:path>`,
})
export class FaSolidPenSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPencilAltIcon],svg[fa-solid-pencil-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9M284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0M124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0M88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88z"></svg:path>`,
})
export class FaSolidPencilAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPencilRulerIcon],svg[fa-solid-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m109.46 244.04l134.58-134.56l-44.12-44.12l-61.68 61.68a7.92 7.92 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68l-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01l113.2 113.2zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9zm186.63 285.43l-33.64-33.64l-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68l-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86"></svg:path>`,
})
export class FaSolidPencilRulerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPeopleArrowsIcon],svg[fa-solid-people-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 128a64 64 0 1 0-64-64a64 64 0 0 0 64 64m0 176.08a44.1 44.1 0 0 1 13.64-32L181.77 204c1.65-1.55 3.77-2.31 5.61-3.57A63.91 63.91 0 0 0 128 160H64a64 64 0 0 0-64 64v96a32 32 0 0 0 32 32v128a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-96.39l-50.36-47.53a44.08 44.08 0 0 1-13.64-32M480 128a64 64 0 1 0-64-64a64 64 0 0 0 64 64m32 32h-64a63.91 63.91 0 0 0-59.38 40.42c1.84 1.27 4 2 5.62 3.59l72.12 68.06a44.37 44.37 0 0 1 0 64L416 383.62V480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32V352a32 32 0 0 0 32-32v-96a64 64 0 0 0-64-64m-67.6 135.34l-72.12-68.06A12 12 0 0 0 352 236v36H224v-36a12 12 0 0 0-20.28-8.73l-72.12 68.07a12.4 12.4 0 0 0 0 17.47l72.12 68.07a12 12 0 0 0 20.28-8.74V336h128v36.14a12 12 0 0 0 20.28 8.74l72.12-68.07a12.4 12.4 0 0 0 0-17.47"></svg:path>`,
})
export class FaSolidPeopleArrowsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPeopleCarryIcon],svg[fa-solid-people-carry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0S80 21.5 80 48s21.5 48 48 48m384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48s21.5 48 48 48m125.7 372.1l-44-110l-41.1 46.4l-2 18.2l27.7 69.2c5 12.5 17 20.1 29.7 20.1c4 0 8-.7 11.9-2.3c16.4-6.6 24.4-25.2 17.8-41.6m-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9c-18.5-8-39-6.7-56.1 3.3c-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8L416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2l-11.3-33.9c-8.3-25-25.4-46-48.1-59.4c-17.2-10-37.6-11.3-56.1-3.3c-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9l10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2c17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49l17.6-70.3l6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4l17.6 70.3l-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3c1.2.1 2.3.2 3.5.2c16.1 0 30-12.1 31.8-28.5l10.1-92.6l67.2-75.9c13.6-15.5 19-36.7 14.4-56.7M46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6c16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2l-2-18.2z"></svg:path>`,
})
export class FaSolidPeopleCarryIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPepperHotIcon],svg[fa-solid-pepper-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94"></svg:path>`,
})
export class FaSolidPepperHotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPercentIcon],svg[fa-solid-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0S0 50.1 0 112s50.1 112 112 112m0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48m224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112m0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48M392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2"></svg:path>`,
})
export class FaSolidPercentIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPercentageIcon],svg[fa-solid-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51s-65.52-24.99-90.51 0s-24.99 65.52 0 90.51c25 25 65.52 25 90.51 0m256 165.49c-24.99-24.99-65.52-24.99-90.51 0s-24.99 65.52 0 90.51s65.52 24.99 90.51 0c25-24.99 25-65.51 0-90.51m-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25"></svg:path>`,
})
export class FaSolidPercentageIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPersonBoothIcon],svg[fa-solid-person-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h-64zm32-272h-50.9l-45.2-45.3C115.8 166.6 99.7 160 82.7 160H64c-17.1 0-33.2 6.7-45.3 18.8C6.7 190.9 0 207 0 224.1L.2 320L0 480c0 17.7 14.3 32 31.9 32s32-14.3 32-32l.1-100.7c.9.5 1.6 1.3 2.5 1.7l29.1 43v56c0 17.7 14.3 32 32 32s32-14.3 32-32v-56.5c0-9.9-2.3-19.8-6.7-28.6l-41.2-61.3V253l20.9 20.9c9.1 9.1 21.1 14.1 33.9 14.1H224c17.7 0 32-14.3 32-32s-14.3-32-32-32M64 128c26.5 0 48-21.5 48-48S90.5 32 64 32S16 53.5 16 80s21.5 48 48 48m224-96l31.5 223.1l-30.9 154.6c-4.3 21.6 13 38.3 31.4 38.3c15.2 0 28-9.1 32.3-30.4c.9 16.9 14.6 30.4 31.7 30.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32V0H288zm-96 0v160h64V0h-32c-17.7 0-32 14.3-32 32M544 0h-32v496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class FaSolidPersonBoothIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneIcon],svg[fa-solid-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464c0-11.2-7.7-20.9-18.6-23.4"></svg:path>`,
})
export class FaSolidPhoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneAltIcon],svg[fa-solid-phone-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6"></svg:path>`,
})
export class FaSolidPhoneAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneSlashIcon],svg[fa-solid-phone-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6c100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1m365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3"></svg:path>`,
})
export class FaSolidPhoneSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneSquareIcon],svg[fa-solid-phone-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15 15 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A15 15 0 0 1 384 126c0 160.292-129.945 290-290 290"></svg:path>`,
})
export class FaSolidPhoneSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneSquareAltIcon],svg[fa-solid-phone-square-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18 18 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.9 231.9 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.9 17.9 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.4 17.4 0 0 1-.39 3.37"></svg:path>`,
})
export class FaSolidPhoneSquareAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhoneVolumeIcon],svg[fa-solid-phone-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933c5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.19 17.19 0 0 1 6.849 20.958l-32.408 81.021a17.19 17.19 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.19 17.19 0 0 1 17.669 10.719l32.408 81.022a17.19 17.19 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422M247.126 95.473c11.832 20.047 11.832 45.008 0 65.055c-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.06 32.06 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581m91.787-91.187c60.14 71.604 60.092 175.882 0 247.428c-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379c49.687-59.538 49.646-145.933 0-205.422c-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933m-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546c-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931c26.536-34.564 26.534-82.572 0-117.134c-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304"></svg:path>`,
})
export class FaSolidPhoneVolumeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPhotoVideoIcon],svg[fa-solid-photo-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32M232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32M96 224a32 32 0 1 1-32 32a32 32 0 0 1 32-32m288 224H64v-32l64-64l32 32l128-128l96 96z"></svg:path>`,
})
export class FaSolidPhotoVideoIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPiIcon],svg[fa-solid-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M488 160c13.25 0 24-10.75 24-24V88c0-13.26-10.75-24-24-24H99.91c-16.97 0-33.25 6.74-45.25 18.74L4.72 132.69C-5.36 142.77 1.78 160 16.03 160H128v142.46c0 38.8-12.89 75.63-36.62 105.62-7.27 9.18-5.71 22.57 2.56 30.85l34.11 34.11c10.25 10.25 26.95 8.94 36.12-2.28C202.93 423.33 224 364.51 224 302.46V160h64v202.58c0 54.98 37.28 105.36 91.32 115.42 42.26 7.87 83.64-7.87 109.62-40.34l17.8-21.66c8.28-10.35 6.6-25.45-3.75-33.73l-37.46-29.98c-10.35-8.28-25.45-6.61-33.73 3.75L414 377.67a16.806 16.806 0 0 1-13.16 6.33c-9.28 0-16.84-7.56-16.84-16.84V160h104z" fill="currentColor"></svg:path>`,
})
export class FaSolidPiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPiggyBankIcon],svg[fa-solid-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3c-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6c-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16m-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16M256 96h128c5.4 0 10.7.4 15.9.8c0-.3.1-.5.1-.8c0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2c15.2-3.9 31-6.2 47.4-6.2"></svg:path>`,
})
export class FaSolidPiggyBankIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPillsIcon],svg[fa-solid-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112m48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48zm139.7-29.7c-3.5-3.5-9.4-3.1-12.3.8c-45.3 62.5-40.4 150.1 15.9 206.4s143.9 61.2 206.4 15.9c4-2.9 4.3-8.8.8-12.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9c-4 2.9-4.3 8.8-.8 12.3l210.8 210.8c3.5 3.5 9.4 3.1 12.3-.8c45.3-62.6 40.5-150.1-15.9-206.4"></svg:path>`,
})
export class FaSolidPillsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPizzaSliceIcon],svg[fa-solid-pizza-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15m-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m104 104a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FaSolidPizzaSliceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlaceOfWorshipIcon],svg[fa-solid-place-of-worship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M620.61 366.55L512 320v192h112c8.84 0 16-7.16 16-16V395.96a32 32 0 0 0-19.39-29.41M0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.55A32 32 0 0 0 0 395.96m464.46-149.28L416 217.6V102.63c0-8.49-3.37-16.62-9.38-22.63L331.31 4.69c-6.25-6.25-16.38-6.25-22.62 0L233.38 80c-6 6-9.38 14.14-9.38 22.63V217.6l-48.46 29.08A32 32 0 0 0 160 274.12V512h96v-96c0-35.35 28.66-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44"></svg:path>`,
})
export class FaSolidPlaceOfWorshipIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlaneIcon],svg[fa-solid-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.01 16.01 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256L.49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64"></svg:path>`,
})
export class FaSolidPlaneIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlaneArrivalIcon],svg[fa-solid-plane-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M44.81 205.66l88.74 80a62.6 62.6 0 0 0 25.47 13.93l287.6 78.35c26.48 7.21 54.56 8.72 81 1.36c29.67-8.27 43.44-21.21 47.25-35.71c3.83-14.5-1.73-32.71-23.37-54.96c-19.28-19.82-44.35-32.79-70.83-40l-97.51-26.56L282.8 30.22c-1.51-5.81-5.95-10.35-11.66-11.91L206.05.58c-10.56-2.88-20.9 5.32-20.71 16.44l47.92 164.21l-102.2-27.84l-27.59-67.88c-1.93-4.89-6.01-8.57-11.02-9.93L52.72 64.75c-10.34-2.82-20.53 5-20.72 15.88l.23 101.78c.19 8.91 6.03 17.34 12.58 23.25"></svg:path>`,
})
export class FaSolidPlaneArrivalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlaneDepartureIcon],svg[fa-solid-plane-departure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.6 65.6 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31c18.31-28.48 20.3-49.09 13.07-63.65c-7.21-14.57-24.74-25.27-58.25-27.45c-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99l-218.7-82.06a17.8 17.8 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1l-103.21 52.38l-72.35-36.47a17.8 17.8 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08z"></svg:path>`,
})
export class FaSolidPlaneDepartureIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlaneSlashIcon],svg[fa-solid-plane-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.48 147.88L64 256L32.48 364.13A16 16 0 0 0 48 384h40a16 16 0 0 0 12.8-6.41L144 320h102.85l-49 171.59A16 16 0 0 0 213.2 512h65.5a16 16 0 0 0 13.89-8.06l66.6-116.54L34.35 136.34a15.47 15.47 0 0 0-1.87 11.54m601.34 310.21L455.14 320H512c35.34 0 96-28.66 96-64s-60.66-64-96-64H397.7L292.61 8.06C290.06 3.61 283.84 0 278.71 0H213.2a16 16 0 0 0-15.38 20.39l36.94 129.29L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.45a16 16 0 0 0 2.81 22.46l588.36 454.72a16 16 0 0 0 22.46-2.82l19.64-25.26a16 16 0 0 0-2.82-22.46"></svg:path>`,
})
export class FaSolidPlaneSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlayIcon],svg[fa-solid-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6"></svg:path>`,
})
export class FaSolidPlayIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlayCircleIcon],svg[fa-solid-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42"></svg:path>`,
})
export class FaSolidPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlugIcon],svg[fa-solid-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 32a32 32 0 0 0-64 0v96h64Zm48 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32a160.07 160.07 0 0 0 128 156.8V512h64v-99.2A160.07 160.07 0 0 0 352 256v-32h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M128 32a32 32 0 0 0-64 0v96h64Z"></svg:path>`,
})
export class FaSolidPlugIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlusIcon],svg[fa-solid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidPlusIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlusCircleIcon],svg[fa-solid-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidPlusCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPlusSquareIcon],svg[fa-solid-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48m-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidPlusSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPodcastIcon],svg[fa-solid-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813M156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599c2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552c-2.675 2.62-2.401 6.986.628 9.187c9.312 6.765 16.46 15.343 21.234 25.363c1.741 3.654 6.497 4.66 9.449 1.891c28.826-27.043 46.553-65.783 45.511-108.565c-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989c2.953 2.771 7.711 1.77 9.453-1.887c4.774-10.021 11.923-18.598 21.235-25.363c3.029-2.2 3.304-6.566.629-9.185M224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408c4.333 2.118 9.267-1.544 8.535-6.31c-2.382-15.512-4.342-30.946-5.406-44.339c-.146-1.836-1.149-3.486-2.678-4.512c-47.4-31.806-78.564-86.016-78.187-147.347c.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867c-.999 14.037-3.069 30.588-5.624 47.23c-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224C448 100.205 347.815 0 224 0m0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.654-64-64-64"></svg:path>`,
})
export class FaSolidPodcastIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPollIcon],svg[fa-solid-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16z"></svg:path>`,
})
export class FaSolidPollIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPollHIcon],svg[fa-solid-poll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48M112 192c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h128c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16z"></svg:path>`,
})
export class FaSolidPollHIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPooIcon],svg[fa-solid-poo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M451.4 369.1C468.7 356 480 335.4 480 312c0-39.8-32.2-72-72-72h-14.1c13.4-11.7 22.1-28.8 22.1-48c0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32c0-53-43-96-96-96c-5.2 0-10.2.7-15.1 1.5C250.3 14.6 256 30.6 256 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64c0 19.2 8.7 36.3 22.1 48H104c-39.8 0-72 32.2-72 72c0 23.4 11.3 44 28.6 57.1C26.3 374.6 0 404.1 0 440c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72c0-35.9-26.3-65.4-60.6-70.9M192 256c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53c-2-5.3 2-11 7.8-11h175.4c5.8 0 9.8 5.7 7.8 11M320 320c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidPooIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPooStormIcon],svg[fa-solid-poo-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M308 336h-57.7l17.3-64.9c2-7.6-3.7-15.1-11.6-15.1h-68c-6 0-11.1 4.5-11.9 10.4l-16 120c-1 7.2 4.6 13.6 11.9 13.6h59.3l-23 97.2c-1.8 7.6 4 14.8 11.7 14.8c4.2 0 8.2-2.2 10.4-6l88-152c4.6-8-1.2-18-10.4-18m66.4-111.3c5.9-9.6 9.6-20.6 9.6-32.7c0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32c0-53-43-96-96-96c-5.2 0-10.2.7-15.1 1.5C218.3 14.6 224 30.6 224 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64c0 12.1 3.7 23.1 9.6 32.7C32.6 228 0 262.2 0 304c0 44 36 80 80 80h48.3c.1-.6 0-1.2 0-1.8l16-120c3-21.8 21.7-38.2 43.7-38.2h68c13.8 0 26.5 6.3 34.9 17.2s11.2 24.8 7.6 38.1l-6.6 24.7h16c15.7 0 30.3 8.4 38.1 22s7.8 30.5 0 44l-8.1 14h30c44 0 80-36 80-80c.1-41.8-32.5-76-73.5-79.3"></svg:path>`,
})
export class FaSolidPooStormIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPoopIcon],svg[fa-solid-poop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M451.36 369.14C468.66 355.99 480 335.41 480 312c0-39.77-32.24-72-72-72h-14.07c13.42-11.73 22.07-28.78 22.07-48c0-35.35-28.65-64-64-64h-5.88c3.57-10.05 5.88-20.72 5.88-32c0-53.02-42.98-96-96-96c-5.17 0-10.15.74-15.11 1.52C250.31 14.64 256 30.62 256 48c0 44.18-35.82 80-80 80h-16c-35.35 0-64 28.65-64 64c0 19.22 8.65 36.27 22.07 48H104c-39.76 0-72 32.23-72 72c0 23.41 11.34 43.99 28.64 57.14C26.31 374.62 0 404.12 0 440c0 39.76 32.24 72 72 72h368c39.76 0 72-32.24 72-72c0-35.88-26.31-65.38-60.64-70.86"></svg:path>`,
})
export class FaSolidPoopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPortraitIcon],svg[fa-solid-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6z"></svg:path>`,
})
export class FaSolidPortraitIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPoundSignIcon],svg[fa-solid-pound-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M308 352h-45.495c-6.627 0-12 5.373-12 12v50.848H128V288h84c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-84v-63.556c0-32.266 24.562-57.086 61.792-57.086c23.658 0 45.878 11.505 57.652 18.849c5.151 3.213 11.888 2.051 15.688-2.685l28.493-35.513c4.233-5.276 3.279-13.005-2.119-17.081C273.124 54.56 236.576 32 187.931 32C106.026 32 48 84.742 48 157.961V224H20c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h28v128H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h296c6.627 0 12-5.373 12-12V364c0-6.627-5.373-12-12-12"></svg:path>`,
})
export class FaSolidPoundSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPowerOffIcon],svg[fa-solid-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4C7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31c-41.5 30.8-68 79.6-68 134.9c-.1 92.3 74.5 168.1 168 168.1c91.6 0 168.6-74.2 168-169.1c-.3-51.8-24.7-101.8-68.1-134c-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8M296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24"></svg:path>`,
})
export class FaSolidPowerOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrayIcon],svg[fa-solid-pray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64s28.65 64 64 64m-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28c-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47l-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33c-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87z"></svg:path>`,
})
export class FaSolidPrayIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrayingHandsIcon],svg[fa-solid-praying-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 191.91c-17.6 0-32 14.4-32 32v80c0 8.84-7.16 16-16 16s-16-7.16-16-16v-76.55c0-17.39 4.72-34.47 13.69-49.39l77.75-129.59c9.09-15.16 4.19-34.81-10.97-43.91c-14.45-8.67-32.72-4.3-42.3 9.21c-.2.23-.62.21-.79.48l-117.26 175.9C117.56 205.9 112 224.31 112 243.29v80.23l-90.12 30.04A31.97 31.97 0 0 0 0 383.91v96c0 10.82 8.52 32 32 32c2.69 0 5.41-.34 8.06-1.03l179.19-46.62C269.16 449.99 304 403.8 304 351.91v-128c0-17.6-14.4-32-32-32m346.12 161.73L528 323.6v-80.23c0-18.98-5.56-37.39-16.12-53.23L394.62 14.25c-.18-.27-.59-.24-.79-.48c-9.58-13.51-27.85-17.88-42.3-9.21c-15.16 9.09-20.06 28.75-10.97 43.91l77.75 129.59c8.97 14.92 13.69 32 13.69 49.39V304c0 8.84-7.16 16-16 16s-16-7.16-16-16v-80c0-17.6-14.4-32-32-32s-32 14.4-32 32v128c0 51.89 34.84 98.08 84.75 112.34l179.19 46.62c2.66.69 5.38 1.03 8.06 1.03c23.48 0 32-21.18 32-32v-96c0-13.77-8.81-25.99-21.88-30.35"></svg:path>`,
})
export class FaSolidPrayingHandsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrescriptionIcon],svg[fa-solid-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m301.26 352l78.06-78.06c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0L256 306.74l-83.96-83.96C219.31 216.8 256 176.89 256 128c0-53.02-42.98-96-96-96H16C7.16 32 0 39.16 0 48v256c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-80h18.75l128 128l-78.06 78.06c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0L256 397.25l78.06 78.06c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63zM64 96h96c17.64 0 32 14.36 32 32s-14.36 32-32 32H64z"></svg:path>`,
})
export class FaSolidPrescriptionIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrescriptionBottleIcon],svg[fa-solid-prescription-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 192h120c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H32v64h120c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H32v64h120c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H32v64c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V128H32zM360 0H24C10.8 0 0 10.8 0 24v48c0 13.2 10.8 24 24 24h336c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24"></svg:path>`,
})
export class FaSolidPrescriptionBottleIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrescriptionBottleAltIcon],svg[fa-solid-prescription-bottle-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M360 0H24C10.8 0 0 10.8 0 24v48c0 13.2 10.8 24 24 24h336c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24M32 480c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V128H32zm64-184c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8z"></svg:path>`,
})
export class FaSolidPrescriptionBottleAltIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPrintIcon],svg[fa-solid-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64m-64 256H128v-96h256zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48zm48 72c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidProceduresIcon],svg[fa-solid-procedures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 224H272c-8.8 0-16 7.2-16 16v144H64V144c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h512v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-61.9-50.1-112-112-112M136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8L390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8m24 256c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64"></svg:path>`,
})
export class FaSolidProceduresIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidProjectDiagramIcon],svg[fa-solid-project-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32M192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidProjectDiagramIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPumpMedicalIcon],svg[fa-solid-pump-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.51 159.82H84.24A64 64 0 0 0 20.51 218L.14 442a64 64 0 0 0 63.74 69.8h192a64 64 0 0 0 63.73-69.8l-20.37-224a64 64 0 0 0-63.73-58.18m4.37 173.33a13.35 13.35 0 0 1-13.34 13.34h-40v40a13.33 13.33 0 0 1-13.33 13.33h-26.67a13.33 13.33 0 0 1-13.33-13.33v-40h-40a13.34 13.34 0 0 1-13.33-13.34v-26.66a13.33 13.33 0 0 1 13.33-13.34h40v-40a13.33 13.33 0 0 1 13.33-13.33h26.67a13.33 13.33 0 0 1 13.33 13.33v40h40a13.34 13.34 0 0 1 13.34 13.34ZM379.19 93.88l-43.32-43.32a64 64 0 0 0-45.24-18.74h-66.75a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128v-32h66.75l43.31 43.31a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 0-22.63"></svg:path>`,
})
export class FaSolidPumpMedicalIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPumpSoapIcon],svg[fa-solid-pump-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.63 160H84.37a64 64 0 0 0-63.74 58.21l-20.36 224A64 64 0 0 0 64 512h192a64 64 0 0 0 63.74-69.79l-20.36-224A64 64 0 0 0 235.63 160M160 416c-33.12 0-60-26.33-60-58.75c0-25 35.7-75.47 52-97.27a10 10 0 0 1 16 .02c16.33 21.8 52 72.27 52 97.27c0 32.4-26.88 58.73-60 58.73M379.31 94.06L336 50.74A64 64 0 0 0 290.75 32H224a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v96h128V96h66.75l43.31 43.31a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 0-22.63"></svg:path>`,
})
export class FaSolidPumpSoapIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidPuzzlePieceIcon],svg[fa-solid-puzzle-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346c0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471c0-37.456 29.25-56.346 63.577-56.346c33.673 0 61.788 19.216 61.788 54.717c0 39.735-36.288 50.158-36.288 85.985c0 60.803 129.675 25.73 181.23 25.73c0 0-34.725-120.101 25.827-120.101c35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792"></svg:path>`,
})
export class FaSolidPuzzlePieceIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQrcodeIcon],svg[fa-solid-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 224h192V32H0zM64 96h64v64H64zm192-64v192h192V32zm128 128h-64V96h64zM0 480h192V288H0zm64-128h64v64H64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64zm0 160h32v32h-32zm-64 0h32v32h-32z"></svg:path>`,
})
export class FaSolidQrcodeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuestionIcon],svg[fa-solid-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148c25.049-31.381 43.63-49.449 82.757-49.449c30.764 0 68.816 19.799 68.816 49.631c0 22.552-18.617 34.134-48.993 51.164c-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0M192 373.459c-38.196 0-69.271 31.075-69.271 69.271S153.804 512 192 512s69.271-31.075 69.271-69.271s-31.075-69.27-69.271-69.27"></svg:path>`,
})
export class FaSolidQuestionIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuestionCircleIcon],svg[fa-solid-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248M262.655 90c-54.497 0-89.255 22.957-116.549 63.758c-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122c17.864-22.658 30.113-35.797 57.303-35.797c20.429 0 45.698 13.148 45.698 32.958c0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667c0-58.002-60.165-102-116.531-102M256 338c-25.365 0-46 20.635-46 46s20.635 46 46 46s46-20.636 46-46s-20.635-46-46-46"></svg:path>`,
})
export class FaSolidQuestionCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuidditchIcon],svg[fa-solid-quidditch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.5 216.8L343.2 326s-16.6 102.4-76.6 150.1C206.7 523.8 0 510.2 0 510.2s3.8-23.1 11-55.4l94.6-112.2c4-4.7-.9-11.6-6.6-9.5l-60.4 22.1c14.4-41.7 32.7-80 54.6-97.5c59.9-47.8 163.3-40.9 163.3-40.9m238 135c-44 0-79.8 35.8-79.8 79.9s35.7 79.9 79.8 79.9s79.8-35.8 79.8-79.9c0-44.2-35.8-79.9-79.8-79.9M636.5 31L616.7 6c-5.5-6.9-15.5-8-22.4-2.6L361.8 181.3l-34.1-43c-5.1-6.4-15.1-5.2-18.6 2.2l-25.3 54.6l86.7 109.2l58.8-12.4c8-1.7 11.4-11.2 6.3-17.6l-34.1-42.9L634 53.5c6.9-5.5 8-15.6 2.5-22.5"></svg:path>`,
})
export class FaSolidQuidditchIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuoteLeftIcon],svg[fa-solid-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidQuoteLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuoteRightIcon],svg[fa-solid-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48m-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidQuoteRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidQuranIcon],svg[fa-solid-quran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M301.08 145.82c.6-1.21 1.76-1.82 2.92-1.82s2.32.61 2.92 1.82l11.18 22.65l25 3.63c2.67.39 3.74 3.67 1.81 5.56l-18.09 17.63l4.27 24.89c.36 2.11-1.31 3.82-3.21 3.82c-.5 0-1.02-.12-1.52-.38L304 211.87l-22.36 11.75c-.5.26-1.02.38-1.52.38c-1.9 0-3.57-1.71-3.21-3.82l4.27-24.89l-18.09-17.63c-1.94-1.89-.87-5.17 1.81-5.56l24.99-3.63zm-57.89-69.01c13.67 0 27.26 2.49 40.38 7.41a6.775 6.775 0 1 1-2.38 13.12c-.67 0-3.09-.21-4.13-.21c-52.31 0-94.86 42.55-94.86 94.86c0 52.3 42.55 94.86 94.86 94.86c1.03 0 3.48-.21 4.13-.21c3.93 0 6.8 3.14 6.8 6.78c0 2.98-1.94 5.51-4.62 6.42c-13.07 4.87-26.59 7.34-40.19 7.34C179.67 307.19 128 255.51 128 192c0-63.52 51.67-115.19 115.19-115.19M380.8 448H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"></svg:path>`,
})
export class FaSolidQuranIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRadiationIcon],svg[fa-solid-radiation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328.2 255.8h151.6c9.1 0 16.8-7.7 16.2-16.8c-5.1-75.8-44.4-142.2-102.5-184.2c-7.4-5.3-17.9-2.9-22.7 4.8L290.4 188c22.6 14.3 37.8 39.2 37.8 67.8m-37.8 67.7c-12.3 7.7-26.8 12.4-42.4 12.4s-30-4.7-42.4-12.4L125.2 452c-4.8 7.7-2.4 18.1 5.6 22.4C165.7 493.2 205.6 504 248 504s82.3-10.8 117.2-29.6c8-4.3 10.4-14.8 5.6-22.4zM248 303.8c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48m-231.8-48h151.6c0-28.6 15.2-53.5 37.8-67.7L125.2 59.7c-4.8-7.7-15.3-10.2-22.7-4.8C44.4 96.9 5.1 163.3 0 239.1c-.6 9 7.1 16.7 16.2 16.7"></svg:path>`,
})
export class FaSolidRadiationIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRadiationAltIcon],svg[fa-solid-radiation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 256h79.1c9.2 0 16.9-7.7 16-16.8c-4.6-43.6-27-81.8-59.5-107.8c-7.6-6.1-18.8-4.5-24 3.8L281.9 202c18 11.2 30.1 31.2 30.1 54m-97.8 54.1L172.4 377c-4.9 7.8-2.4 18.4 5.8 22.5c21.1 10.4 44.7 16.5 69.8 16.5s48.7-6.1 69.9-16.5c8.2-4.1 10.6-14.7 5.8-22.5l-41.8-66.9c-9.8 6.2-21.4 9.9-33.8 9.9s-24.1-3.7-33.9-9.9M104.9 256H184c0-22.8 12.1-42.8 30.2-54.1l-41.7-66.8c-5.2-8.3-16.4-9.9-24-3.8c-32.6 26-54.9 64.2-59.5 107.8c-1.1 9.2 6.7 16.9 15.9 16.9M248 504c137 0 248-111 248-248S385 8 248 8S0 119 0 256s111 248 248 248m0-432c101.5 0 184 82.5 184 184s-82.5 184-184 184S64 357.5 64 256S146.5 72 248 72m0 216c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32"></svg:path>`,
})
export class FaSolidRadiationAltIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRainbowIcon],svg[fa-solid-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M268.3 32.7C115.4 42.9 0 176.9 0 330.2V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C64 186.8 180.9 80.3 317.5 97.9C430.4 112.4 512 214 512 327.8V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-165.3-140-298.6-307.7-287.3m-5.6 96.9C166 142 96 229.1 96 326.7V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-74.8 64.5-134.8 140.8-127.4c66.5 6.5 115.2 66.2 115.2 133.1V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-114.2-100.2-205.4-217.3-190.4m6.2 96.3c-45.6 8.9-76.9 51.5-76.9 97.9V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-17.6 14.3-32 32-32s32 14.4 32 32v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-59.2-53.8-106-115.1-94.1"></svg:path>`,
})
export class FaSolidRainbowIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRandomIcon],svg[fa-solid-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12 12 0 0 1-8.773-3.812l-70.556-75.596l53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971zM12 176h84l52.781 56.551l53.333-57.143l-70.556-75.596A12 12 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12m372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12 12 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176z"></svg:path>`,
})
export class FaSolidRandomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidReceiptIcon],svg[fa-solid-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358.4 3.2L320 48L265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48L137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48L25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8M320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class FaSolidReceiptIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRecordVinylIcon],svg[fa-solid-record-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 152a104 104 0 1 0 104 104a104 104 0 0 0-104-104m0 128a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-272C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m0 376a128 128 0 1 1 128-128a128 128 0 0 1-128 128"></svg:path>`,
})
export class FaSolidRecordVinylIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRecycleIcon],svg[fa-solid-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455l-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388l-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99zm98.561-182.915l41.289 66.076l-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424l-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022M497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88"></svg:path>`,
})
export class FaSolidRecycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRedoIcon],svg[fa-solid-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19C8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91a12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12"></svg:path>`,
})
export class FaSolidRedoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRedoAltIcon],svg[fa-solid-redo-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273c-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556c4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504C119.034 504 8.001 392.967 8 256.002C7.999 119.193 119.646 7.755 256.455 8"></svg:path>`,
})
export class FaSolidRedoAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRegisteredIcon],svg[fa-solid-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M285.363 207.475c0 18.6-9.831 28.431-28.431 28.431h-29.876v-56.14h23.378c28.668 0 34.929 8.773 34.929 27.709M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248M363.411 360.414c-46.729-84.825-43.299-78.636-44.702-80.98c23.432-15.172 37.945-42.979 37.945-74.486c0-54.244-31.5-89.252-105.498-89.252h-70.667c-13.255 0-24 10.745-24 24V372c0 13.255 10.745 24 24 24h22.567c13.255 0 24-10.745 24-24v-71.663h25.556l44.129 82.937a24 24 0 0 0 21.188 12.727h24.464c18.261-.001 29.829-19.591 21.018-35.587"></svg:path>`,
})
export class FaSolidRegisteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRemoveFormatIcon],svg[fa-solid-remove-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 416h-11.17l9.26-27.77L267 336.4L240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m297.82 42.1L377 259.59L426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45M309.91 207.76L224 141.36V112h117.83z"></svg:path>`,
})
export class FaSolidRemoveFormatIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidReplyIcon],svg[fa-solid-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258c0 61.441-39.581 122.309-83.333 154.132c-13.653 9.931-33.111-2.533-28.077-18.631c45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328"></svg:path>`,
})
export class FaSolidReplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidReplyAllIcon],svg[fa-solid-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136.309 189.836L312.313 37.851C327.72 24.546 352 35.348 352 56.015v82.763c129.182 10.231 224 52.212 224 183.548c0 61.441-39.582 122.309-83.333 154.132c-13.653 9.931-33.111-2.533-28.077-18.631c38.512-123.162-3.922-169.482-112.59-182.015v84.175c0 20.701-24.3 31.453-39.687 18.164L136.309 226.164c-11.071-9.561-11.086-26.753 0-36.328m-128 36.328L184.313 378.15C199.7 391.439 224 380.687 224 359.986v-15.818l-108.606-93.785A55.96 55.96 0 0 1 96 207.998a55.95 55.95 0 0 1 19.393-42.38L224 71.832V56.015c0-20.667-24.28-31.469-39.687-18.164L8.309 189.836c-11.086 9.575-11.071 26.767 0 36.328"></svg:path>`,
})
export class FaSolidReplyAllIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRepublicanIcon],svg[fa-solid-republican-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 192c0-88.4-71.6-160-160-160H160C71.6 32 0 103.6 0 192v64h544zm-367.7-21.6l-19.8 19.3l4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L128 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3l-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4l12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8l27.4 4c5 .7 6.9 6.7 3.4 10.2m144 0l-19.8 19.3l4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L272 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3l-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4l12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8l27.4 4c5 .7 6.9 6.7 3.4 10.2m144 0l-19.8 19.3l4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L416 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3l-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4l12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8l27.4 4c5 .7 6.9 6.7 3.4 10.2M624 320h-32c-8.8 0-16 7.2-16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H0v176c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-80h192v80c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V352h32v43.3c0 41.8 30 80.1 71.6 84.3c47.8 4.9 88.4-32.7 88.4-79.6v-64c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidRepublicanIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRestroomIcon],svg[fa-solid-restroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128c35.3 0 64-28.7 64-64S163.3 0 128 0S64 28.7 64 64s28.7 64 64 64m384 0c35.3 0 64-28.7 64-64S547.3 0 512 0s-64 28.7-64 64s28.7 64 64 64m127.3 226.5l-45.6-185.8c-3.3-13.5-15.5-23-29.8-24.2c-15 9.7-32.8 15.5-52 15.5s-37-5.8-52-15.5c-14.3 1.2-26.5 10.7-29.8 24.2l-45.6 185.8C381 369.6 393 384 409.2 384H464v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V384h54.8c16.2 0 28.2-14.4 24.5-29.5M336 0h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16M180.1 144.4c-15 9.8-32.9 15.6-52.1 15.6s-37.1-5.8-52.1-15.6C51.3 146.5 32 166.9 32 192v136c0 13.3 10.7 24 24 24h8v136c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V352h8c13.3 0 24-10.7 24-24V192c0-25.1-19.3-45.5-43.9-47.6"></svg:path>`,
})
export class FaSolidRestroomIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRetweetIcon],svg[fa-solid-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24 24 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941m-265.138 15.431A24 24 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971z"></svg:path>`,
})
export class FaSolidRetweetIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRibbonIcon],svg[fa-solid-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.1 444.3c-9.6 10.8-7.5 27.6 4.5 35.7l68.8 27.9c9.9 6.7 23.3 5 31.3-3.8l91.8-101.9l-79.2-87.9zm435.8 0s-292-324.6-295.4-330.1c15.4-8.4 40.2-17.9 77.5-17.9s62.1 9.5 77.5 17.9c-3.3 5.6-56 64.6-56 64.6l79.1 87.7l34.2-38c28.7-31.9 33.3-78.6 11.4-115.5l-43.7-73.5c-4.3-7.2-9.9-13.3-16.8-18c-40.7-27.6-127.4-29.7-171.4 0c-6.9 4.7-12.5 10.8-16.8 18l-43.6 73.2c-1.5 2.5-37.1 62.2 11.5 116L337.5 504c8 8.9 21.4 10.5 31.3 3.8l68.8-27.9c11.9-8 14-24.8 4.3-35.6"></svg:path>`,
})
export class FaSolidRibbonIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRingIcon],svg[fa-solid-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C110.06 64 0 125.91 0 208v98.13C0 384.48 114.62 448 256 448s256-63.52 256-141.87V208c0-82.09-110.06-144-256-144m0 64c106.04 0 192 35.82 192 80c0 9.26-3.97 18.12-10.91 26.39C392.15 208.21 328.23 192 256 192s-136.15 16.21-181.09 42.39C67.97 226.12 64 217.26 64 208c0-44.18 85.96-80 192-80M120.43 264.64C155.04 249.93 201.64 240 256 240s100.96 9.93 135.57 24.64C356.84 279.07 308.93 288 256 288s-100.84-8.93-135.57-23.36"></svg:path>`,
})
export class FaSolidRingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRoadIcon],svg[fa-solid-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33M260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68"></svg:path>`,
})
export class FaSolidRoadIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRobotIcon],svg[fa-solid-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 224h32v192H32a31.96 31.96 0 0 1-32-32V256a31.96 31.96 0 0 1 32-32m512-48v272a64.063 64.063 0 0 1-64 64H160a64.063 64.063 0 0 1-64-64V176a79.974 79.974 0 0 1 80-80h112V32a32 32 0 0 1 64 0v64h112a79.974 79.974 0 0 1 80 80m-280 80a40 40 0 1 0-40 40a39.997 39.997 0 0 0 40-40m-8 128h-64v32h64Zm96 0h-64v32h64Zm104-128a40 40 0 1 0-40 40a39.997 39.997 0 0 0 40-40m-8 128h-64v32h64Zm192-128v128a31.96 31.96 0 0 1-32 32h-32V224h32a31.96 31.96 0 0 1 32 32"></svg:path>`,
})
export class FaSolidRobotIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRocketIcon],svg[fa-solid-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0C307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 0 0 0 264a24.01 24.01 0 0 0 24.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.01 24.01 0 0 0 24.005 24a28.6 28.6 0 0 0 10.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61M384.04 168a40 40 0 1 1 40.01-40a40.023 40.023 0 0 1-40.01 40"></svg:path>`,
})
export class FaSolidRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRouteIcon],svg[fa-solid-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160s-43-96-96-96s-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96m0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32M96 256c-53 0-96 43-96 96s96 160 96 160s96-107 96-160s-43-96-96-96m0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidRouteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRssIcon],svg[fa-solid-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041s64.04 28.673 64.04 64.041m175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018c111.832 7.284 201.473 96.702 208.772 208.772c.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79m144.249.288C439.596 229.677 251.465 40.445 16.503 32.01C7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999c191.179 7.839 344.627 161.316 352.465 352.465c.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504"></svg:path>`,
})
export class FaSolidRssIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRssSquareIcon],svg[fa-solid-rss-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M112 416c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m157.533 0h-34.335c-6.011 0-11.051-4.636-11.442-10.634c-5.214-80.05-69.243-143.92-149.123-149.123c-5.997-.39-10.633-5.431-10.633-11.441v-34.335c0-6.535 5.468-11.777 11.994-11.425c110.546 5.974 198.997 94.536 204.964 204.964c.352 6.526-4.89 11.994-11.425 11.994m103.027 0h-34.334c-6.161 0-11.175-4.882-11.427-11.038c-5.598-136.535-115.204-246.161-251.76-251.76C68.882 152.949 64 147.935 64 141.774V107.44c0-6.454 5.338-11.664 11.787-11.432c167.83 6.025 302.21 141.191 308.205 308.205c.232 6.449-4.978 11.787-11.432 11.787"></svg:path>`,
})
export class FaSolidRssSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRubleSignIcon],svg[fa-solid-ruble-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.36 320C324.48 320 384 260.542 384 175.071S324.48 32 239.36 32H76c-6.627 0-12 5.373-12 12v206.632H12c-6.627 0-12 5.373-12 12V308c0 6.627 5.373 12 12 12h52v32H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v52c0 6.627 5.373 12 12 12h58.56c6.627 0 12-5.373 12-12v-52H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H146.56v-32zm-92.8-219.252h78.72c46.72 0 74.88 29.11 74.88 74.323c0 45.832-28.16 75.561-76.16 75.561h-77.44z"></svg:path>`,
})
export class FaSolidRubleSignIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRulerIcon],svg[fa-solid-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M635.7 167.2L556.1 31.7c-8.8-15-28.3-20.1-43.5-11.5l-69 39.1L503.3 161c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L416 75l-55.2 31.3l27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L333.2 122L278 153.3L337.8 255c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-59.7-101.7l-55.2 31.3l27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-27.9-47.5l-55.2 31.3l59.7 101.7c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L84.9 262.9l-69 39.1C.7 310.7-4.6 329.8 4.2 344.8l79.6 135.6c8.8 15 28.3 20.1 43.5 11.5L624.1 210c15.2-8.6 20.4-27.8 11.6-42.8"></svg:path>`,
})
export class FaSolidRulerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRulerCombinedIcon],svg[fa-solid-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidRulerCombinedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRulerHorizontalIcon],svg[fa-solid-ruler-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 128h-48v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-88h-64v88c0 4.42-3.58 8-8 8H88c-4.42 0-8-3.58-8-8v-88H32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidRulerHorizontalIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRulerVerticalIcon],svg[fa-solid-ruler-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 416c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64z"></svg:path>`,
})
export class FaSolidRulerVerticalIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRunningIcon],svg[fa-solid-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48M113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61M384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99"></svg:path>`,
})
export class FaSolidRunningIcon {
  readonly viewBox = input("0 0 416 512")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidRupeeSignIcon],svg[fa-solid-rupee-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12 12 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32z"></svg:path>`,
})
export class FaSolidRupeeSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSadCryIcon],svg[fa-solid-sad-cry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256c0 90.1 48.2 168.7 120 212.1V288c0-8.8 7.2-16 16-16s16 7.2 16 16v196.7c29.5 12.4 62 19.3 96 19.3s66.5-6.9 96-19.3V288c0-8.8 7.2-16 16-16s16 7.2 16 16v180.1C447.8 424.7 496 346 496 256C496 119 385 8 248 8m-65.5 216.5c-14.8-13.2-46.2-13.2-61 0L112 233c-3.8 3.3-9.3 4-13.7 1.6s-6.9-7.4-6.1-12.4c4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c.8 5-1.7 10-6.1 12.4c-5.8 3.1-11.2.7-13.7-1.6zM248 416c-26.5 0-48-28.7-48-64s21.5-64 48-64s48 28.7 48 64s-21.5 64-48 64m149.8-181.5c-5.8 3.1-11.2.7-13.7-1.6l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L304 233c-3.8 3.3-9.3 4-13.7 1.6s-6.9-7.4-6.1-12.4c4-25.2 34.2-42.1 59.9-42.1S400 197 404 222.2c.6 4.9-1.8 9.9-6.2 12.3"></svg:path>`,
})
export class FaSolidSadCryIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSadTearIcon],svg[fa-solid-sad-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32M152 416c-26.5 0-48-21-48-47c0-20 28.5-60.4 41.6-77.8c3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47m16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32c44.4 0 86.3 19.6 114.7 53.8c13.8 16.4-11.2 36.5-24.5 20.4"></svg:path>`,
})
export class FaSolidSadTearIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSatelliteIcon],svg[fa-solid-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m502.61 310.042l-96.704 96.716a31.88 31.88 0 0 1-45.008 0l-80.326-80.417l-9.892 9.908a190.56 190.56 0 0 1-5.407 168.523c-4.501 8.5-16.394 9.595-23.208 2.797L134.547 400.054l-17.8 17.8c.703 2.61 1.61 5 1.61 7.798a32.005 32.005 0 1 1-32.006-32.005c2.798 0 5.189.907 7.799 1.61l17.8-17.8L4.43 269.943c-6.798-6.814-5.704-18.612 2.798-23.206a190.58 190.58 0 0 1 168.528-5.407l9.799-9.799l-80.31-80.417a32 32 0 0 1 0-45.1l96.719-96.716A31.63 31.63 0 0 1 224.469 0a32 32 0 0 1 22.597 9.298l80.326 80.308l47.805-47.897a33.61 33.61 0 0 1 47.509 0l47.508 47.506a33.633 33.633 0 0 1 0 47.507l-47.805 47.897l80.31 80.417a31.79 31.79 0 0 1-.11 45.006M219.562 197.433l73.825-73.823l-68.918-68.9l-73.81 73.807Zm237.743 90.106l-68.902-68.916l-73.825 73.823l68.918 68.9Z"></svg:path>`,
})
export class FaSolidSatelliteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSatelliteDishIcon],svg[fa-solid-satellite-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M305.45 462.59c7.391 7.298 6.188 20.097-3 25.004c-77.714 41.802-176.726 29.91-242.344-35.709c-65.602-65.603-77.51-164.523-35.692-242.331c4.891-9.095 17.69-10.298 25.003-3l116.812 116.813l27.394-27.394c-.688-2.61-1.594-5.001-1.594-7.814a32.004 32.004 0 1 1 32.004 32.005c-2.797 0-5.204-.891-7.798-1.594l-27.41 27.41Zm206.526-159.523a16.103 16.103 0 0 1-16.002 17.003H463.86a15.97 15.97 0 0 1-15.892-15.002C440.467 175.549 336.453 70.534 207.03 63.533a15.845 15.845 0 0 1-15.002-15.908V16.027A16.094 16.094 0 0 1 209.03.024C372.255 8.62 503.475 139.841 511.976 303.067m-96.012-.297a16.21 16.21 0 0 1-16.112 17.3h-32.207a16.07 16.07 0 0 1-15.893-14.705c-6.907-77.011-68.118-138.91-144.924-145.224a15.94 15.94 0 0 1-14.8-15.893v-32.114a16.134 16.134 0 0 1 17.3-16.096c110.123 8.501 198.228 96.607 206.636 206.732"></svg:path>`,
})
export class FaSolidSatelliteDishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSaveIcon],svg[fa-solid-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64s28.654-64 64-64s64 28.654 64 64s-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A12 12 0 0 1 320 111.48"></svg:path>`,
})
export class FaSolidSaveIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSchoolIcon],svg[fa-solid-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32m360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8m137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32 32 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63M320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80s80 35.82 80 80s-35.82 80-80 80m288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidSchoolIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidScrewdriverIcon],svg[fa-solid-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87c5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0"></svg:path>`,
})
export class FaSolidScrewdriverIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidScrollIcon],svg[fa-solid-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0m208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57M288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112c0-8.84-7.16-16-16-16z"></svg:path>`,
})
export class FaSolidScrollIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSdCardIcon],svg[fa-solid-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M160 160h-48V64h48zm80 0h-48V64h48zm80 0h-48V64h48z"></svg:path>`,
})
export class FaSolidSdCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSearchIcon],svg[fa-solid-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128"></svg:path>`,
})
export class FaSolidSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSearchDollarIcon],svg[fa-solid-search-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99m-297.02-90.7c-79.54 0-144-64.34-144-143.98c0-79.53 64.35-143.98 144-143.98c79.54 0 144 64.34 144 143.98c0 79.53-64.35 143.98-144 143.98m27.11-152.54l-45.01-13.5c-5.16-1.55-8.77-6.78-8.77-12.73c0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72c3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14c-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.63.63-42.68 20.55-42.68 45.07c0 19.97 12.99 37.81 31.58 43.39l45.01 13.5c5.16 1.55 8.77 6.78 8.77 12.73c0 7.27-5.3 13.19-11.8 13.19h-28.1c-4.56 0-8.96-1.29-12.82-3.72c-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14c9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07c0-19.97-12.99-37.81-31.59-43.39"></svg:path>`,
})
export class FaSolidSearchDollarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSearchLocationIcon],svg[fa-solid-search-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99m-297.02-90.7c-79.54 0-144-64.34-144-143.98c0-79.53 64.35-143.98 144-143.98c79.54 0 144 64.34 144 143.98c0 79.53-64.35 143.98-144 143.98m.02-239.96c-40.78 0-73.84 33.05-73.84 73.83c0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86c0-40.78-33.06-73.83-73.84-73.83m0 96c-13.26 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"></svg:path>`,
})
export class FaSolidSearchLocationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSearchMinusIcon],svg[fa-solid-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12m201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34M344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136s136-60.8 136-136"></svg:path>`,
})
export class FaSolidSearchMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSearchPlusIcon],svg[fa-solid-search-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12m201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34M344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136s136-60.8 136-136"></svg:path>`,
})
export class FaSolidSearchPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSeedlingIcon],svg[fa-solid-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96m384-64c-84.2 0-157.4 46.5-195.7 115.2c27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32z"></svg:path>`,
})
export class FaSolidSeedlingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidServerIcon],svg[fa-solid-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32m-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24m-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24s24-10.745 24-24s-10.745-24-24-24"></svg:path>`,
})
export class FaSolidServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShapesIcon],svg[fa-solid-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256a128 128 0 1 0 128 128a128 128 0 0 0-128-128m379-54.86L400.07 18.29a37.26 37.26 0 0 0-64.14 0L229 201.14c-14.24 24.38 3.58 54.86 32.09 54.86h213.82c28.51 0 46.33-30.48 32.09-54.86M480 288H320a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h160a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32"></svg:path>`,
})
export class FaSolidShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShareIcon],svg[fa-solid-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132c13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328"></svg:path>`,
})
export class FaSolidShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShareAltIcon],svg[fa-solid-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.55 96.55 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.3 96.3 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96s-42.981-96-96-96"></svg:path>`,
})
export class FaSolidShareAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShareAltSquareIcon],svg[fa-solid-share-alt-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48M304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.34 56.34 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56s-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56 56 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296"></svg:path>`,
})
export class FaSolidShareAltSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShareSquareIcon],svg[fa-solid-share-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353c4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896M384 379.128V448H64V128h50.916a12 12 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.8 71.8 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859"></svg:path>`,
})
export class FaSolidShareSquareIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShekelSignIcon],svg[fa-solid-shekel-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 168v168c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V168c0-75.11-60.89-136-136-136H24C10.75 32 0 42.74 0 56v408c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112h112c30.93 0 56 25.07 56 56M432 32h-48c-8.84 0-16 7.16-16 16v296c0 30.93-25.07 56-56 56H200V176c0-8.84-7.16-16-16-16h-48c-8.84 0-16 7.16-16 16v280c0 13.25 10.75 24 24 24h168c75.11 0 136-60.89 136-136V48c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidShekelSignIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShieldAltIcon],svg[fa-solid-shield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3M256.1 446.3l-.1-381l175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7"></svg:path>`,
})
export class FaSolidShieldAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShieldVirusIcon],svg[fa-solid-shield-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 192a16 16 0 1 0 16 16a16 16 0 0 0-16-16M466.5 83.68l-192-80A57.4 57.4 0 0 0 256.05 0a57.4 57.4 0 0 0-18.46 3.67l-192 80A47.93 47.93 0 0 0 16 128c0 198.5 114.5 335.72 221.5 380.32a48.1 48.1 0 0 0 36.91 0C360.09 472.61 496 349.3 496 128a48 48 0 0 0-29.5-44.32M384 256h-12.12c-28.51 0-42.79 34.47-22.63 54.63l8.58 8.57a16 16 0 1 1-22.63 22.63l-8.57-8.58c-20.16-20.16-54.63-5.88-54.63 22.63V368a16 16 0 0 1-32 0v-12.12c0-28.51-34.47-42.79-54.63-22.63l-8.57 8.58a16 16 0 0 1-22.63-22.63l8.58-8.57c20.16-20.16 5.88-54.63-22.63-54.63H128a16 16 0 0 1 0-32h12.12c28.51 0 42.79-34.47 22.63-54.63l-8.58-8.57a16 16 0 0 1 22.63-22.63l8.57 8.58c20.16 20.16 54.63 5.88 54.63-22.63V112a16 16 0 0 1 32 0v12.12c0 28.51 34.47 42.79 54.63 22.63l8.57-8.58a16 16 0 0 1 22.63 22.63l-8.58 8.57c-20.16 20.16-5.88 54.63 22.63 54.63H384a16 16 0 0 1 0 32m-96 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidShieldVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShipIcon],svg[fa-solid-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24c61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24c-60.817 0-101.542-31.001-119.384-75.361M192 128h256v87.531l-118.208-37.995a32 32 0 0 0-19.584 0L192 215.531z"></svg:path>`,
})
export class FaSolidShipIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShippingFastIcon],svg[fa-solid-shipping-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"></svg:path>`,
})
export class FaSolidShippingFastIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShoePrintsIcon],svg[fa-solid-shoe-prints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64M0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64m337.46-128c-34.91 0-76.16 13.12-104.73 32c-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05c32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96M491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32c28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81"></svg:path>`,
})
export class FaSolidShoePrintsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShoppingBagIcon],svg[fa-solid-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0S96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24m-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24"></svg:path>`,
})
export class FaSolidShoppingBagIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShoppingBasketIcon],svg[fa-solid-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058c14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701c14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24M312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24"></svg:path>`,
})
export class FaSolidShoppingBasketIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShoppingCartIcon],svg[fa-solid-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681"></svg:path>`,
})
export class FaSolidShoppingCartIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShowerIcon],svg[fa-solid-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 320a16 16 0 1 0 16 16a16 16 0 0 0-16-16m32-96a16 16 0 1 0 16 16a16 16 0 0 0-16-16m32 64a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 32a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m128-32a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-48 16a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-16-48a16 16 0 1 0 16 16a16 16 0 0 0-16-16m96 32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m32-32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-32 32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-32 32a16 16 0 1 0 16 16a16 16 0 0 0-16-16m64-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m21.65-218.35l-11.3-11.31a16 16 0 0 0-22.63 0L350.05 96A111.2 111.2 0 0 0 272 64c-19.24 0-37.08 5.3-52.9 13.85l-10-10A121.72 121.72 0 0 0 123.44 32C55.49 31.5 0 92.91 0 160.85V464a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V158.4c0-30.15 21-58.2 51-61.93a58.38 58.38 0 0 1 48.93 16.67l10 10C165.3 138.92 160 156.76 160 176a111.23 111.23 0 0 0 32 78.05l-5.66 5.67a16 16 0 0 0 0 22.62l11.3 11.31a16 16 0 0 0 22.63 0l169.38-169.37a16 16 0 0 0 0-22.63"></svg:path>`,
})
export class FaSolidShowerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidShuttleVanIcon],svg[fa-solid-shuttle-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73M64 192V96h96v96zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m160-240h-96V96h96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m-96-240V96h66.02l80 96z"></svg:path>`,
})
export class FaSolidShuttleVanIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSigmaIcon],svg[fa-solid-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32H52.03C32.37 32 14.59 42.89 5.68 60.44c-8.91 17.53-7.25 38.31 4.31 54.16L132.66 256 10.03 397.36c-11.59 15.89-13.25 36.67-4.34 54.2C14.59 469.11 32.37 480 52.03 480H352c17.67 0 32-14.33 32-32v-72c0-13.25-10.75-24-24-24h-48c-13.25 0-24 10.75-24 24v8H142.25l109.09-128-109.09-128H288v8c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V64c0-17.67-14.33-32-32-32z" fill="currentColor"></svg:path>`,
})
export class FaSolidSigmaIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignIcon],svg[fa-solid-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 64H128V16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V128h368c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16M160 384h320V160H160z"></svg:path>`,
})
export class FaSolidSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignInAltIcon],svg[fa-solid-sign-in-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96m-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34"></svg:path>`,
})
export class FaSolidSignInAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignLanguageIcon],svg[fa-solid-sign-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.434 483.987c-.307-16.018 13.109-29.129 29.13-29.129h62.293v-5.714H56.993c-16.021 0-29.437-13.111-29.13-29.129C28.16 404.491 40.835 392 56.428 392h126.429v-5.714H29.136c-16.021 0-29.437-13.111-29.13-29.129c.297-15.522 12.973-28.013 28.566-28.013h154.286v-5.714H57.707c-16.021 0-29.437-13.111-29.13-29.129c.297-15.522 12.973-28.013 28.566-28.013h168.566l-31.085-22.606c-12.762-9.281-15.583-27.149-6.302-39.912c9.281-12.761 27.15-15.582 39.912-6.302l123.361 89.715a34.29 34.29 0 0 1 14.12 27.728v141.136c0 15.91-10.946 29.73-26.433 33.374l-80.471 18.934a137.2 137.2 0 0 1-31.411 3.646H120c-15.593-.001-28.269-12.492-28.566-28.014m73.249-225.701h36.423l-11.187-8.136c-18.579-13.511-20.313-40.887-3.17-56.536l-13.004-16.7c-9.843-12.641-28.43-15.171-40.88-5.088c-12.065 9.771-14.133 27.447-4.553 39.75zm283.298-2.103l-5.003-152.452c-.518-15.771-13.722-28.136-29.493-27.619c-15.773.518-28.137 13.722-27.619 29.493l1.262 38.415L283.565 11.019c-9.58-12.303-27.223-14.63-39.653-5.328c-12.827 9.599-14.929 28.24-5.086 40.881l76.889 98.745l-4.509 3.511l-94.79-121.734c-9.58-12.303-27.223-14.63-39.653-5.328c-12.827 9.599-14.929 28.24-5.086 40.881l94.443 121.288l-4.509 3.511l-77.675-99.754c-9.58-12.303-27.223-14.63-39.653-5.328c-12.827 9.599-14.929 28.24-5.086 40.881l52.053 66.849c12.497-8.257 29.055-8.285 41.69.904l123.36 89.714c10.904 7.93 17.415 20.715 17.415 34.198v16.999l61.064-47.549a34.28 34.28 0 0 0 13.202-28.177"></svg:path>`,
})
export class FaSolidSignLanguageIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignOutAltIcon],svg[fa-solid-sign-out-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34M192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidSignOutAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignalIcon],svg[fa-solid-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16M88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16m256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16m128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16M600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidSignalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignalAltIcon],svg[fa-solid-signal-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160-128h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zm160-128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z" fill="currentColor"></svg:path>`,
})
export class FaSolidSignalAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignalAltSlashIcon],svg[fa-solid-signal-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M633.82 458.1L608 438.14V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v331.95l-64-49.46V160c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v80.29L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm96-96v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V352.6l-94.33-72.9c-.74 2.71-1.67 5.36-1.67 8.3zm160 192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-3.73l-96-74.2V480z" fill="currentColor"></svg:path>`,
})
export class FaSolidSignalAltSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignalSlashIcon],svg[fa-solid-signal-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M633.82 458.1L616 444.33V16c0-8.84-7.16-16-16-16h-48c-8.84 0-16 7.16-16 16v366.5l-48-37.1V112c0-8.84-7.16-16-16-16h-48c-8.84 0-16 7.16-16 16v171.57l-48-37.1V208c0-8.84-7.16-16-16-16h-48c-1.82 0-3.5.48-5.13 1.04L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c1.22.95 2.04 2.18 2.9 3.37H600c.73 0 1.35-.32 2.06-.42 5.51.8 11.27-1.05 14.93-5.77l19.64-25.27c5.43-6.96 4.17-17.01-2.81-22.44zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm80-96c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V309.32L204.41 288H168zm112 208c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-87.75l-80-61.83V496zm128 0c0 8.84 7.16 16 16 16h48c5.49 0 10.1-2.94 12.98-7.15L408 445.35V496z" fill="currentColor"></svg:path>`,
})
export class FaSolidSignalSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSignatureIcon],svg[fa-solid-signature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5c-29.1 13.1-54.2 24.4-76.1 24.4c-22.6 0-26-16.2-21.3-51.9c1.1-8 11.7-79.2-42.7-76.1c-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4c42.2-42.2 154.7-150.7 211.2-195.8c-2.2 28.5-2.1 58.9 20.6 83.8c15.3 16.8 37.3 25.3 65.5 25.3c35.6 0 68-14.6 102.3-30c33-14.8 99-62.6 138.4-65.8c8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2"></svg:path>`,
})
export class FaSolidSignatureIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSimCardIcon],svg[fa-solid-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128L256 0H64C28.7 0 0 28.7 0 64m224 192h-64v-64h64zm96 0h-64v-64h32c17.7 0 32 14.3 32 32zm-64 128h64v32c0 17.7-14.3 32-32 32h-32zm-96 0h64v64h-64zm-96 0h64v64H96c-17.7 0-32-14.3-32-32zm0-96h256v64H64zm0-64c0-17.7 14.3-32 32-32h32v64H64z"></svg:path>`,
})
export class FaSolidSimCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSinkIcon],svg[fa-solid-sink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 416a96 96 0 0 0 96 96h256a96 96 0 0 0 96-96v-32H32Zm464-128h-96v-32h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-80a32 32 0 0 0-32 32v48h-64V96a32 32 0 0 1 64 0v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V96A96.16 96.16 0 0 0 300.87 1.86C255.29 10.71 224 53.36 224 99.79V288h-64v-48a32 32 0 0 0-32-32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64v32H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidSinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSitemapIcon],svg[fa-solid-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32m-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32m240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidSitemapIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSkatingIcon],svg[fa-solid-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48m0 448c-8.8 0-16 7.2-16 16s-7.2 16-16 16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c26.5 0 48-21.5 48-48c0-8.8-7.2-16-16-16m-282.2 8.6c-6.2 6.2-16.4 6.3-22.6 0l-67.9-67.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l67.9 67.9c9.4 9.4 21.7 14 34 14s24.6-4.7 33.9-14c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.3-22.7 0m56.1-179.8l-93.7 93.7c-12.5 12.5-12.5 32.8 0 45.2c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l91.9-91.9l-30.2-30.2c-5-5-9.4-10.7-13.2-16.8M128 160h105.5l-20.1 17.2c-13.5 11.5-21.6 28.4-22.3 46.1c-.7 17.8 6.1 35.2 18.7 47.7l78.2 78.2V432c0 17.7 14.3 32 32 32s32-14.3 32-32v-89.4c0-12.6-5.1-25-14.1-33.9l-61-61c.5-.4 1.2-.6 1.7-1.1l82.3-82.3c11.5-11.5 14.9-28.6 8.7-43.6S348.9 96 332.6 96H128c-17.7 0-32 14.3-32 32s14.3 32 32 32"></svg:path>`,
})
export class FaSolidSkatingIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSkiingIcon],svg[fa-solid-skiing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48s21.5 48 48 48m73 356.1c-9.4-9.4-24.6-9.4-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7l-135.8-70.2l49.2-73.8c12.7-19 10.2-44.5-6-60.6L293 215.7l-107-53.1c-2.9 19.9 3.4 40 17.7 54.4l75.1 75.2l-45.9 68.8L35 258.7c-11.7-6-26.2-1.5-32.3 10.3S1.2 295.3 13 301.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1c23.2 0 46-9 63-26c9.3-9.3 9.3-24.5 0-33.8M120 91.6l-11.5 22.5c14.4 7.3 31.2 4.9 42.8-4.8l47.2 23.4c-.1.1-.1.2-.2.3l114.5 56.8l32.4-13l6.4 19.1c4 12.1 12.6 22 24 27.7l58.1 29c15.9 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9l-52.1-26.1l-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.2 32.5l-62.5-31c.3-14.5-7.2-28.6-20.9-35.6l-11.1 21.7h-.2l-34.4-7c-1.8-.4-3.7.2-5 1.7c-1.9 2.2-1.7 5.5.5 7.4z"></svg:path>`,
})
export class FaSolidSkiingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSkiingNordicIcon],svg[fa-solid-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 96c26.5 0 48-21.5 48-48S362.5 0 336 0s-48 21.5-48 48s21.5 48 48 48m216 320c-13.2 0-24 10.7-24 24c0 13.2-10.8 24-24 24h-69.5L460 285.6c11.7-4.7 20.1-16.2 20.1-29.6c0-17.7-14.3-32-32-32h-44L378 170.8c-12.5-25.5-35.5-44.2-61.8-50.9L245 98.7c-28.3-6.8-57.8-.5-80.8 17.1l-39.7 30.4c-14 10.7-16.7 30.8-5.9 44.9c.7.9 1.7 1.3 2.4 2.1L66.9 464H24c-13.2 0-24 10.7-24 24s10.8 24 24 24h480c39.7 0 72-32.3 72-72c0-13.2-10.8-24-24-24m-260.5 48h-96.9l43.1-91l-22-13c-12.1-7.2-21.9-16.9-29.5-27.8L123.7 464H99.5l52.3-261.4c4.1-1 8.1-2.9 11.7-5.6l39.7-30.4c7.7-5.9 17.4-8 25.3-6.1l14.7 4.4l-37.5 87.4c-12.6 29.5-1.3 64 26.3 80.3l85 50.2zm110.6 0h-43.6l23.6-75.5c5.9-20.8-2.9-43.1-21.6-54.4L299.3 298l31.3-78.3l20.3 41.4c8 16.3 24.9 26.9 43.1 26.9h33.3z"></svg:path>`,
})
export class FaSolidSkiingNordicIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSkullIcon],svg[fa-solid-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 100.3 0 224c0 70.1 36.9 132.6 94.5 173.7c9.6 6.9 15.2 18.1 13.5 29.9l-9.4 66.2c-1.4 9.6 6 18.2 15.7 18.2H192v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h64v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h77.7c9.7 0 17.1-8.6 15.7-18.2l-9.4-66.2c-1.7-11.7 3.8-23 13.5-29.9C475.1 356.6 512 294.1 512 224C512 100.3 397.4 0 256 0m-96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64m192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64"></svg:path>`,
})
export class FaSolidSkullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSkullCrossbonesIcon],svg[fa-solid-skull-crossbones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41L37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384L8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47M150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28M280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32s-32-14.35-32-32s14.35-32 32-32m-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32s-32-14.35-32-32s14.35-32 32-32"></svg:path>`,
})
export class FaSolidSkullCrossbonesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSlashIcon],svg[fa-solid-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M594.53 508.63L6.18 53.9c-6.97-5.42-8.23-15.47-2.81-22.45L23.01 6.18C28.43-.8 38.49-2.06 45.47 3.37L633.82 458.1c6.97 5.42 8.23 15.47 2.81 22.45l-19.64 25.27c-5.42 6.98-15.48 8.23-22.46 2.81"></svg:path>`,
})
export class FaSolidSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSleighIcon],svg[fa-solid-sleigh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m612.7 350.7l-9.3-7.4c-6.9-5.5-17-4.4-22.5 2.5l-10 12.5c-5.5 6.9-4.4 17 2.5 22.5l9.3 7.4c5.9 4.7 9.2 11.7 9.2 19.2c0 13.6-11 24.6-24.6 24.6H48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h516c39 0 73.7-29.3 75.9-68.3c1.4-23.8-8.7-46.3-27.2-61M32 224c0 59.6 40.9 109.2 96 123.5V400h64v-48h192v48h64v-48c53 0 96-43 96-96v-96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96v64c0 35.3-28.7 64-64 64h-20.7c-65.8 0-125.9-37.2-155.3-96S118.4 32 52.7 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32z"></svg:path>`,
})
export class FaSolidSleighIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSlidersHIcon],svg[fa-solid-sliders-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidSlidersHIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmileIcon],svg[fa-solid-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5c22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5"></svg:path>`,
})
export class FaSolidSmileIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmileBeamIcon],svg[fa-solid-smile-beam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5m250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5c22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5m6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5"></svg:path>`,
})
export class FaSolidSmileBeamIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmileWinkIcon],svg[fa-solid-smile-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8S0 119 0 256m200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32m158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8c4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4"></svg:path>`,
})
export class FaSolidSmileWinkIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmogIcon],svg[fa-solid-smog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 368H80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16m-480 96H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16m416 0H224c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h336c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16M144 288h156.1c22.5 19.7 51.6 32 83.9 32s61.3-12.3 83.9-32H528c61.9 0 112-50.1 112-112S589.9 64 528 64c-18 0-34.7 4.6-49.7 12.1C454 31 406.8 0 352 0c-41 0-77.8 17.3-104 44.8C221.8 17.3 185 0 144 0C64.5 0 0 64.5 0 144s64.5 144 144 144"></svg:path>`,
})
export class FaSolidSmogIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmokingIcon],svg[fa-solid-smoking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M632 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8M553.3 87.1c-5.7-3.8-9.3-10-9.3-16.8V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v62.3c0 22 10.2 43.4 28.6 55.4c42.2 27.3 67.4 73.8 67.4 124V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-65.5-32.4-126.2-86.7-162.6M432 352H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16m-32 112H224v-64h176zm87.7-322.4C463.8 125 448 99.3 448 70.3V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v66.4c0 43.7 24.6 81.6 60.3 106.7c22.4 15.7 35.7 41.2 35.7 68.6V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-43.3-21-83.4-56.3-108.1M536 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class FaSolidSmokingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmokingBanIcon],svg[fa-solid-smoking-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 304c0 8.8 7.2 16 16 16h117.5l-96-96H112c-8.8 0-16 7.2-16 16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 448c-105.9 0-192-86.1-192-192c0-41.4 13.3-79.7 35.7-111.1l267.4 267.4C335.7 434.7 297.4 448 256 448m45.2-192H384v32h-50.8zm111.1 111.1L365.2 320H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H269.2L144.9 99.7C176.3 77.3 214.6 64 256 64c105.9 0 192 86.1 192 192c0 41.4-13.3 79.7-35.7 111.1M320.6 128c-15.6 0-28.6-11.2-31.4-25.9c-.7-3.6-4-6.1-7.7-6.1h-16.2c-5 0-8.7 4.5-8 9.4c4.6 30.9 31.2 54.6 63.3 54.6c15.6 0 28.6 11.2 31.4 25.9c.7 3.6 4 6.1 7.7 6.1h16.2c5 0 8.7-4.5 8-9.4c-4.6-30.9-31.2-54.6-63.3-54.6"></svg:path>`,
})
export class FaSolidSmokingBanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSmsIcon],svg[fa-solid-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4c32.7 12.3 69 19.4 107.4 19.4c141.4 0 256-93.1 256-208S397.4 32 256 32M128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6c0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1c0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6c0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1c.1 21.3-19 38.6-42.4 38.6m191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4l17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6c0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1c0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6c0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1c.1 21.3-18.9 38.6-42.3 38.6"></svg:path>`,
})
export class FaSolidSmsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSnowboardingIcon],svg[fa-solid-snowboarding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48s21.5 48 48 48m28.8 153.6c5.8 4.3 12.5 6.4 19.2 6.4c9.7 0 19.3-4.4 25.6-12.8c10.6-14.1 7.8-34.2-6.4-44.8l-111.4-83.5c-13.8-10.3-29.1-18.4-45.4-23.8l-63.7-21.2l-26.1-52.1C244.7 2 225.5-4.4 209.7 3.5s-22.2 27.1-14.3 42.9l29.1 58.1c5.7 11.4 15.6 19.9 27.7 24l16.4 5.5l-41.2 20.6c-21.8 10.9-35.4 32.8-35.4 57.2v53.1l-74.1 24.7c-16.8 5.6-25.8 23.7-20.2 40.5c1.7 5.2 4.9 9.4 8.7 12.9l-38.7-14.1c-9.7-3.5-17.4-10.6-21.8-20c-5.6-12-19.9-17.2-31.9-11.6s-17.2 19.9-11.6 31.9c9.8 21 27.1 36.9 48.9 44.8l364.8 132.7c9.7 3.5 19.7 5.3 29.7 5.3c12.5 0 24.9-2.7 36.5-8.2c12-5.6 17.2-19.9 11.6-31.9S474 454.7 462 460.3c-9.3 4.4-19.8 4.8-29.5 1.3l-90.8-33.1c8.7-4.1 15.6-11.8 17.8-21.9l21.9-102c3.9-18.2-3.2-37.2-18.1-48.4l-52-39l66-30.5zm-144.4 51.7l-19.7 92c-1.5 7.1-.1 13.9 2.8 20l-169.4-61.6c2.7-.2 5.4-.4 8-1.3l85-28.4c19.6-6.5 32.8-24.8 32.8-45.5V256z"></svg:path>`,
})
export class FaSolidSnowboardingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSnowflakeIcon],svg[fa-solid-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m440.3 345.2l-33.8-19.5l26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19l-63.9-37l63.8-36.9l70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7l33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5l7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8l-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2l-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26l-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5l-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19l63.8 36.9l-63.8 36.9l-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7l-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5l-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8l62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2l19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26l33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21"></svg:path>`,
})
export class FaSolidSnowflakeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSnowmanIcon],svg[fa-solid-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m510.9 152.3l-5.9-14.5c-3.3-8-12.6-11.9-20.8-8.7L456 140.6v-29c0-8.6-7.2-15.6-16-15.6h-16c-8.8 0-16 7-16 15.6v46.9c0 .5.3 1 .3 1.5l-56.4 23c-5.9-10-13.3-18.9-22-26.6c13.6-16.6 22-37.4 22-60.5c0-53-43-96-96-96s-96 43-96 96c0 23.1 8.5 43.9 22 60.5c-8.7 7.7-16 16.6-22 26.6l-56.4-23c.1-.5.3-1 .3-1.5v-46.9C104 103 96.8 96 88 96H72c-8.8 0-16 7-16 15.6v29l-28.1-11.5c-8.2-3.2-17.5.7-20.8 8.7l-5.9 14.5c-3.3 8 .7 17.1 8.9 20.3l135.2 55.2c-.4 4-1.2 8-1.2 12.2c0 10.1 1.7 19.6 4.2 28.9C120.9 296.4 104 334.2 104 376c0 54 28.4 100.9 70.8 127.8c9.3 5.9 20.3 8.2 31.3 8.2h99.2c13.3 0 26.3-4.1 37.2-11.7c46.5-32.3 74.4-89.4 62.9-152.6c-5.5-30.2-20.5-57.6-41.6-79c2.5-9.2 4.2-18.7 4.2-28.7c0-4.2-.8-8.1-1.2-12.2L502 172.6c8.1-3.1 12.1-12.2 8.9-20.3M224 96c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m32 272c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-64c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16m0-88s-16-23.2-16-32s7.2-16 16-16s16 7.2 16 16s-16 32-16 32m32-56c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16"></svg:path>`,
})
export class FaSolidSnowmanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSnowplowIcon],svg[fa-solid-snowplow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 376c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24m238.6 49.4c-14.5-14.5-22.6-34.1-22.6-54.6V269.2c0-20.5 8.1-40.1 22.6-54.6l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0l-36.7 36.7c-26.5 26.5-41.4 62.4-41.4 99.9V288h-64v-50.9c0-8.7-1.8-17.2-5.2-25.2L364.5 29.1C356.9 11.4 339.6 0 320.3 0H176c-26.5 0-48 21.5-48 48v112h-16c-26.5 0-48 21.5-48 48v91.2C26.3 317.2 0 355.4 0 400c0 61.9 50.1 112 112 112h256c61.9 0 112-50.1 112-112c0-17.3-4.2-33.4-11.2-48H512v18.7c0 37.5 14.9 73.4 41.4 99.9l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6zM192 64h117.8l68.6 160H256l-64-64zm176 384H112c-26.5 0-48-21.5-48-48s21.5-48 48-48h256c26.5 0 48 21.5 48 48s-21.5 48-48 48"></svg:path>`,
})
export class FaSolidSnowplowIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSoapIcon],svg[fa-solid-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 192a95.42 95.42 0 0 1-30.94 70.21A95.8 95.8 0 0 1 352 448H160a96 96 0 0 1 0-192h88.91A95.3 95.3 0 0 1 224 192H96a96 96 0 0 0-96 96v128a96 96 0 0 0 96 96h320a96 96 0 0 0 96-96V288a96 96 0 0 0-96-96m-96 64a64 64 0 1 0-64-64a64 64 0 0 0 64 64M208 96a48 48 0 1 0-48-48a48 48 0 0 0 48 48m176-32a32 32 0 1 0-32-32a32 32 0 0 0 32 32M160 288a64 64 0 0 0 0 128h192a64 64 0 0 0 0-128Z"></svg:path>`,
})
export class FaSolidSoapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSocksIcon],svg[fa-solid-socks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.66 311.01L288 256V96H128v176l-86.65 64.61c-39.4 29.56-53.86 84.42-29.21 127.06C30.39 495.25 63.27 512 96.08 512c20.03 0 40.25-6.25 57.52-19.2l21.86-16.39c-29.85-55.38-13.54-125.84 39.2-165.4M288 32c0-11.05 3.07-21.3 8.02-30.38C293.4.92 290.85 0 288 0H160c-17.67 0-32 14.33-32 32v32h160zM480 0H352c-17.67 0-32 14.33-32 32v32h192V32c0-17.67-14.33-32-32-32M320 272l-86.13 64.61c-39.4 29.56-53.86 84.42-29.21 127.06c18.25 31.58 50.61 48.33 83.42 48.33c20.03 0 40.25-6.25 57.52-19.2l115.2-86.4A128 128 0 0 0 512 304V96H320z"></svg:path>`,
})
export class FaSolidSocksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSolarPanelIcon],svg[fa-solid-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02M585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74C-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79c.02-4.08 3.35 16.95-54.76-325.47M259.83 64h120.33l9.77 96H250.06zm-75.17 256H71.09L90.1 208h105.97zm16.29-160H98.24l16.29-96h96.19zm32.82 160l11.4-112h149.65l11.4 112zm195.5-256h96.19l16.29 96H439.04zm26.06 256l-11.4-112H549.9l19.01 112z"></svg:path>`,
})
export class FaSolidSolarPanelIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortIcon],svg[fa-solid-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41m255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41"></svg:path>`,
})
export class FaSolidSortIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAlphaDownIcon],svg[fa-solid-sort-alpha-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352m240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16m31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38M335.61 144L352 96l16.39 48z"></svg:path>`,
})
export class FaSolidSortAlphaDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAlphaDownAltIcon],svg[fa-solid-sort-alpha-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352m112-128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16m159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38M335.61 400L352 352l16.39 48z"></svg:path>`,
})
export class FaSolidSortAlphaDownAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAlphaUpIcon],svg[fa-solid-sort-alpha-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160m400 128H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16m31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38M335.61 144L352 96l16.39 48z"></svg:path>`,
})
export class FaSolidSortAlphaUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAlphaUpAltIcon],svg[fa-solid-sort-alpha-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160m272 64h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16m159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38M335.61 400L352 352l16.39 48z"></svg:path>`,
})
export class FaSolidSortAlphaUpAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAmountDownIcon],svg[fa-solid-sort-amount-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352m256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidSortAmountDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAmountDownAltIcon],svg[fa-solid-sort-amount-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352"></svg:path>`,
})
export class FaSolidSortAmountDownAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAmountUpIcon],svg[fa-solid-sort-amount-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160m416 0H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidSortAmountUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortAmountUpAltIcon],svg[fa-solid-sort-amount-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.39-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160"></svg:path>`,
})
export class FaSolidSortAmountUpAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortDownIcon],svg[fa-solid-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41"></svg:path>`,
})
export class FaSolidSortDownIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortNumericDownIcon],svg[fa-solid-sort-numeric-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 96h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 96m26.15 162.91a79 79 0 0 0-55 54.17c-14.25 51.05 21.21 97.77 68.85 102.53a84 84 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91c58-24.76 86.25-61.61 86.25-132V336c-.02-51.21-48.4-91.34-101.85-77.09zM352 356a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-176-4h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352"></svg:path>`,
})
export class FaSolidSortNumericDownIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortNumericDownAltIcon],svg[fa-solid-sort-numeric-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352m224 64h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 352h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M330.17 34.91a79 79 0 0 0-55 54.17c-14.27 51.05 21.19 97.77 68.83 102.53a84 84 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91c58-24.77 86.25-61.61 86.25-132V112c-.02-51.21-48.4-91.34-101.85-77.09M352 132a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class FaSolidSortNumericDownAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortNumericUpIcon],svg[fa-solid-sort-numeric-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M330.17 258.91a79 79 0 0 0-55 54.17c-14.27 51.05 21.19 97.77 68.83 102.53a84 84 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91c58-24.76 86.25-61.61 86.25-132V336c-.02-51.21-48.4-91.34-101.85-77.09M352 356a20 20 0 1 1 20-20a20 20 0 0 1-20 20M304 96h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 96M107.31 36.69a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31z"></svg:path>`,
})
export class FaSolidSortNumericUpIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortNumericUpAltIcon],svg[fa-solid-sort-numeric-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.31 36.69a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31zM400 416h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 304 352h16v64h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M330.17 34.91a79 79 0 0 0-55 54.17c-14.27 51.05 21.19 97.77 68.83 102.53a84 84 0 0 1-20.85 12.91c-7.57 3.4-10.8 12.47-8.18 20.34l9.9 20c2.87 8.63 12.53 13.49 20.9 9.91c58-24.77 86.25-61.61 86.25-132V112c-.02-51.21-48.4-91.34-101.85-77.09M352 132a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class FaSolidSortNumericUpAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSortUpIcon],svg[fa-solid-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41"></svg:path>`,
})
export class FaSolidSortUpIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSpaIcon],svg[fa-solid-spa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M568.25 192c-29.04.13-135.01 6.16-213.84 83c-33.12 29.63-53.36 63.3-66.41 94.86c-13.05-31.56-33.29-65.23-66.41-94.86c-78.83-76.84-184.8-82.87-213.84-83c-4.41-.02-7.79 3.4-7.75 7.82c.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3c.04-4.42-3.34-7.84-7.75-7.82M287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52c19.09-18.61 39.58-33.3 60.26-45.18c-16.44-70.5-51.72-133.05-96.73-172.22c-4.11-3.58-11.02-3.58-15.14 0c-44.99 39.14-80.27 101.63-96.74 172.07c20.37 11.7 40.5 26.14 59.22 44.39a282.8 282.8 0 0 1 45.04 51.46"></svg:path>`,
})
export class FaSolidSpaIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSpaceShuttleIcon],svg[fa-solid-space-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M592.604 208.244C559.735 192.836 515.777 184 472 184H186.327c-4.952-6.555-10.585-11.978-16.72-16H376C229.157 137.747 219.403 32 96.003 32H96v128H80V32c-26.51 0-48 28.654-48 64v64c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v16c-23.197 0-32 10.032-32 24v40c0 13.983 8.819 24 32 24v64c0 35.346 21.49 64 48 64V352h16v128h.003c123.4 0 133.154-105.747 279.997-136H169.606c6.135-4.022 11.768-9.445 16.72-16H472c43.777 0 87.735-8.836 120.604-24.244C622.282 289.845 640 271.992 640 256s-17.718-33.845-47.396-47.756M488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.909 0 31.942 80 0 80"></svg:path>`,
})
export class FaSolidSpaceShuttleIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSpellCheckIcon],svg[fa-solid-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 256h91.36c43.2 0 82-32.2 84.51-75.34a79.82 79.82 0 0 0-25.26-63.07a79.8 79.8 0 0 0 9.06-44.91C427.9 30.57 389.3 0 347 0h-75a16 16 0 0 0-16 16v224a16 16 0 0 0 16 16m40-200h40a24 24 0 0 1 0 48h-40zm0 96h56a24 24 0 0 1 0 48h-56zM155.12 22.25A32 32 0 0 0 124.64 0H99.36a32 32 0 0 0-30.48 22.25L.59 235.73A16 16 0 0 0 16 256h24.93a16 16 0 0 0 15.42-11.73L68.29 208h87.42l11.94 36.27A16 16 0 0 0 183.07 256H208a16 16 0 0 0 15.42-20.27zM89.37 144L112 75.3l22.63 68.7zm482 132.48l-45.21-45.3a15.88 15.88 0 0 0-22.59 0l-151.5 151.5l-55.41-55.5a15.88 15.88 0 0 0-22.59 0l-45.3 45.3a16 16 0 0 0 0 22.59l112 112.21a15.89 15.89 0 0 0 22.6 0l208-208.21a16 16 0 0 0-.02-22.59z"></svg:path>`,
})
export class FaSolidSpellCheckIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSpiderIcon],svg[fa-solid-spider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M151.17 167.35L177.1 176h4.67l5.22-26.12c.72-3.58 1.8-7.58 3.21-11.79l-20.29-40.58l23.8-71.39c2.79-8.38-1.73-17.44-10.12-20.24L168.42.82c-8.38-2.8-17.45 1.73-20.24 10.12l-25.89 77.68a32.04 32.04 0 0 0 1.73 24.43zm422.14 182.03l-52.75-79.12a32 32 0 0 0-26.62-14.25H416l68.99-24.36a32.03 32.03 0 0 0 16.51-12.61l53.6-80.41c4.9-7.35 2.91-17.29-4.44-22.19l-13.31-8.88c-7.35-4.9-17.29-2.91-22.19 4.44l-50.56 75.83L404.1 208H368l-10.37-51.85C355.44 145.18 340.26 96 288 96s-67.44 49.18-69.63 60.15L208 208h-36.1l-60.49-20.17L60.84 112c-4.9-7.35-14.83-9.34-22.19-4.44l-13.31 8.88c-7.35 4.9-9.34 14.83-4.44 22.19l53.6 80.41a32.03 32.03 0 0 0 16.51 12.61L160 256H82.06a32.02 32.02 0 0 0-26.63 14.25L2.69 349.38c-4.9 7.35-2.92 17.29 4.44 22.19l13.31 8.88c7.35 4.9 17.29 2.91 22.19-4.44l48-72h47.06l-60.83 97.33A32 32 0 0 0 72 418.3V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-73.11l74.08-118.53c-1.01 14.05-2.08 28.11-2.08 42.21C192 399.64 232.76 448 288 448s96-48.36 96-101.43c0-14.1-1.08-28.16-2.08-42.21L456 422.89V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-77.71c0-6-1.69-11.88-4.86-16.96L438.31 304h47.06l48 72c4.9 7.35 14.84 9.34 22.19 4.44l13.31-8.88c7.36-4.9 9.34-14.83 4.44-22.18M406.09 97.51l-20.29 40.58c1.41 4.21 2.49 8.21 3.21 11.79l5.22 26.12h4.67l25.93-8.65l27.15-54.3a32 32 0 0 0 1.73-24.43l-25.89-77.68C425.03 2.56 415.96-1.98 407.58.82l-15.17 5.06c-8.38 2.8-12.91 11.86-10.12 20.24z"></svg:path>`,
})
export class FaSolidSpiderIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSpinnerIcon],svg[fa-solid-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48m-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48m208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48M96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48s48-21.49 48-48m12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48c0-26.509-21.491-48-48-48m294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48c0-26.509-21.49-48-48-48M108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.491-48-48-48"></svg:path>`,
})
export class FaSolidSpinnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSplotchIcon],svg[fa-solid-splotch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m472.29 195.89l-67.06-22.95c-19.28-6.6-33.54-20.92-38.14-38.3L351.1 74.19c-11.58-43.77-76.57-57.13-109.98-22.62l-46.14 47.67c-13.26 13.71-33.54 20.93-54.2 19.31l-71.88-5.62c-52.05-4.07-86.93 44.88-59.03 82.83l38.54 52.42c11.08 15.07 12.82 33.86 4.64 50.24L24.62 355.4c-20.59 41.25 22.84 84.87 73.49 73.81l69.96-15.28c20.11-4.39 41.45 0 57.07 11.73l54.32 40.83c39.32 29.56 101.04 7.57 104.45-37.22l4.7-61.86c1.35-17.79 12.8-33.86 30.63-42.99l62-31.74c44.88-22.96 39.59-80.17-8.95-96.79"></svg:path>`,
})
export class FaSolidSplotchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSprayCanIcon],svg[fa-solid-spray-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96h128zm256 96c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32m-256 32H96c-53.02 0-96 42.98-96 96v224c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V256c0-53.02-42.98-96-96-96m-64 256c-44.18 0-80-35.82-80-80s35.82-80 80-80s80 35.82 80 80s-35.82 80-80 80M480 96c17.67 0 32-14.33 32-32s-14.33-32-32-32s-32 14.33-32 32s14.33 32 32 32m-96 32c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32m-96-96c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32m96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32m96 192c-17.67 0-32 14.33-32 32s14.33 32 32 32s32-14.33 32-32s-14.33-32-32-32"></svg:path>`,
})
export class FaSolidSprayCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSquareIcon],svg[fa-solid-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidSquareIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSquareFullIcon],svg[fa-solid-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512H0V0h512z"></svg:path>`,
})
export class FaSolidSquareFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSquareRootIcon],svg[fa-solid-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8-58.41-106.1A32.008 32.008 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24z" fill="currentColor"></svg:path>`,
})
export class FaSolidSquareRootIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSquareRootAltIcon],svg[fa-solid-square-root-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m571.31 251.31l-22.62-22.62c-6.25-6.25-16.38-6.25-22.63 0L480 274.75l-46.06-46.06c-6.25-6.25-16.38-6.25-22.63 0l-22.62 22.62c-6.25 6.25-6.25 16.38 0 22.63L434.75 320l-46.06 46.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L480 365.25l46.06 46.06c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63L525.25 320l46.06-46.06c6.25-6.25 6.25-16.38 0-22.63M552 0H307.65c-14.54 0-27.26 9.8-30.95 23.87l-84.79 322.8l-58.41-106.1A32.01 32.01 0 0 0 105.47 224H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h43.62l88.88 163.73C168.99 503.5 186.3 512 204.94 512c17.27 0 44.44-9 54.28-41.48L357.03 96H552c13.25 0 24-10.75 24-24V24c0-13.26-10.75-24-24-24"></svg:path>`,
})
export class FaSolidSquareRootAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStampIcon],svg[fa-solid-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 512h448v-64H32zm384-256h-66.56c-16.26 0-29.44-13.18-29.44-29.44v-9.46c0-27.37 8.88-53.41 21.46-77.72c9.11-17.61 12.9-38.39 9.05-60.42c-6.77-38.78-38.47-70.7-77.26-77.45C212.62-9.04 160 37.33 160 96c0 14.16 3.12 27.54 8.69 39.58C182.02 164.43 192 194.7 192 226.49v.07c0 16.26-13.18 29.44-29.44 29.44H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-32c0-53.02-42.98-96-96-96"></svg:path>`,
})
export class FaSolidStampIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarIcon],svg[fa-solid-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0"></svg:path>`,
})
export class FaSolidStarIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarAndCrescentIcon],svg[fa-solid-star-and-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M340.47 466.36c-1.45 0-6.89.46-9.18.46c-116.25 0-210.82-94.57-210.82-210.82S215.04 45.18 331.29 45.18c2.32 0 7.7.46 9.18.46c7.13 0 13.33-5.03 14.75-12.07c1.46-7.25-2.55-14.49-9.47-17.09C316.58 5.54 286.39 0 256 0C114.84 0 0 114.84 0 256s114.84 256 256 256c30.23 0 60.28-5.49 89.32-16.32c5.96-2.02 10.28-7.64 10.28-14.26c0-8.09-6.39-15.06-15.13-15.06m162.99-252.5l-76.38-11.1l-34.16-69.21c-1.83-3.7-5.38-5.55-8.93-5.55s-7.1 1.85-8.93 5.55l-34.16 69.21l-76.38 11.1c-8.17 1.18-11.43 11.22-5.52 16.99l55.27 53.87l-13.05 76.07c-1.11 6.44 4.01 11.66 9.81 11.66c1.53 0 3.11-.36 4.64-1.17L384 335.37l68.31 35.91c1.53.8 3.11 1.17 4.64 1.17c5.8 0 10.92-5.23 9.81-11.66l-13.05-76.07l55.27-53.87c5.91-5.77 2.65-15.81-5.52-16.99"></svg:path>`,
})
export class FaSolidStarAndCrescentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarHalfIcon],svg[fa-solid-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2L47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6z"></svg:path>`,
})
export class FaSolidStarHalfIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarHalfAltIcon],svg[fa-solid-star-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M508.55 171.51L362.18 150.2L296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38l-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103l-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68l130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71c18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49l105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6m-121.74 123.2l-18.12 17.62l4.28 24.88l19.52 113.45l-102.13-53.59l-22.38-11.74l.03-317.19l51.03 103.29l11.18 22.63l25.01 3.64l114.23 16.63z"></svg:path>`,
})
export class FaSolidStarHalfAltIcon {
  readonly viewBox = input("0 0 536 512")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarOfDavidIcon],svg[fa-solid-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405.68 256l53.21-89.39C473.3 142.4 455.48 112 426.88 112H319.96l-55.95-93.98C256.86 6.01 244.43 0 232 0s-24.86 6.01-32.01 18.02L144.04 112H37.11c-28.6 0-46.42 30.4-32.01 54.61L58.32 256L5.1 345.39C-9.31 369.6 8.51 400 37.11 400h106.93l55.95 93.98C207.14 505.99 219.57 512 232 512s24.86-6.01 32.01-18.02L319.96 400h106.93c28.6 0 46.42-30.4 32.01-54.61zm-12.78-88l-19.8 33.26L353.3 168zm-52.39 88l-52.39 88H175.88l-52.39-88l52.38-88h112.25zM232 73.72L254.79 112h-45.57zM71.1 168h39.6l-19.8 33.26zm0 176l19.8-33.26L110.7 344zM232 438.28L209.21 400h45.57zM353.29 344l19.8-33.26L392.9 344z"></svg:path>`,
})
export class FaSolidStarOfDavidIcon {
  readonly viewBox = input("0 0 464 512")
  readonly width = input("0.91em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStarOfLifeIcon],svg[fa-solid-star-of-life-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M471.99 334.43L336.06 256l135.93-78.43c7.66-4.42 10.28-14.2 5.86-21.86l-32.02-55.43c-4.42-7.65-14.21-10.28-21.87-5.86l-135.93 78.43V16c0-8.84-7.17-16-16.01-16h-64.04c-8.84 0-16.01 7.16-16.01 16v156.86L56.04 94.43c-7.66-4.42-17.45-1.79-21.87 5.86L2.15 155.71c-4.42 7.65-1.8 17.44 5.86 21.86L143.94 256L8.01 334.43c-7.66 4.42-10.28 14.21-5.86 21.86l32.02 55.43c4.42 7.65 14.21 10.27 21.87 5.86l135.93-78.43V496c0 8.84 7.17 16 16.01 16h64.04c8.84 0 16.01-7.16 16.01-16V339.14l135.93 78.43c7.66 4.42 17.45 1.8 21.87-5.86l32.02-55.43c4.42-7.65 1.8-17.43-5.86-21.85"></svg:path>`,
})
export class FaSolidStarOfLifeIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStepBackwardIcon],svg[fa-solid-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12"></svg:path>`,
})
export class FaSolidStepBackwardIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStepForwardIcon],svg[fa-solid-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12"></svg:path>`,
})
export class FaSolidStepForwardIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStethoscopeIcon],svg[fa-solid-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.1 112c-34.2.5-62.3 28.4-63 62.6c-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104c-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2c-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4c0-35.7-29.2-64.5-64.9-64m.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16"></svg:path>`,
})
export class FaSolidStethoscopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStickyNoteIcon],svg[fa-solid-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24m129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9"></svg:path>`,
})
export class FaSolidStickyNoteIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStopIcon],svg[fa-solid-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidStopIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStopCircleIcon],svg[fa-solid-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"></svg:path>`,
})
export class FaSolidStopCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStopwatchIcon],svg[fa-solid-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4l-.6.6C419.7 223.3 432 262.2 432 304m-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FaSolidStopwatchIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStopwatch20Icon],svg[fa-solid-stopwatch-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m398.5 190.91l.59-.61l26.59-26.58a16 16 0 0 0 0-22.63L403 118.41a16 16 0 0 0-22.63 0l-24.68 24.68A206.7 206.7 0 0 0 256 98.5V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H160a16.05 16.05 0 0 0-16 16v32a16.05 16.05 0 0 0 16 16h32v34.5A207.92 207.92 0 0 0 16.09 297.57C12.64 411.5 106.76 510.22 220.72 512C337.13 513.77 432 420 432 304a206 206 0 0 0-33.5-113.09M204.37 377.55a8.2 8.2 0 0 1 8.32 8.07v22.31a8.2 8.2 0 0 1-8.32 8.07h-82.85a16.46 16.46 0 0 1-16.61-17.62c2.78-35.22 14.67-57.41 38.45-91.37c20.42-29.19 27.1-37.32 27.1-62.34c0-16.92-1.79-24.27-12.21-24.27c-9.39 0-12.69 7.4-12.69 22.68v5.23a8.2 8.2 0 0 1-8.33 8.07h-24.9a8.2 8.2 0 0 1-8.33-8.07v-4.07c0-27.3 8.48-60.24 56.43-60.24c43 0 55.57 25.85 55.57 61c0 35.58-12.44 51.21-34.35 81.31c-11.56 15-24.61 35.57-26.41 51.2ZM344 352.32c0 35.16-12.3 63.68-57.23 63.68c-43.58 0-54.77-29.52-54.77-63.45V247.22c0-40.73 19.58-63.22 56.2-63.22c36.8 0 55.8 22.64 55.8 61.3Zm-56.13-130.59c-9.41 0-13.23 7.5-13.23 20v115.95c0 13.11 3.59 20.59 13.23 20.59s13-8 13-21.27V241.06c.02-11.27-2.99-19.33-13-19.33"></svg:path>`,
})
export class FaSolidStopwatch20Icon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStoreIcon],svg[fa-solid-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4c4.5.6 9.1.9 13.7.9c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18.1 20.1 44.3 33.1 73.8 33.1c4.7 0 9.2-.3 13.7-.9c62.8-8.4 92.6-82.8 59-136.4M529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8c-6 0-12.1-.4-18-1.2c-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6c-6.1.8-12.1 1.2-18.2 1.2"></svg:path>`,
})
export class FaSolidStoreIcon {
  readonly viewBox = input("0 0 616 512")
  readonly width = input("1.21em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStoreAltIcon],svg[fa-solid-store-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8M512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64z"></svg:path>`,
})
export class FaSolidStoreAltIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStoreAltSlashIcon],svg[fa-solid-store-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.89 123.62L5.51 142.2c-14.2 21.3 1 49.8 26.59 49.8h74.26ZM576 413.42V224h-64v140l-128-99v-41h-53.08l-41.4-32H608c25.5 0 40.7-28.5 26.59-49.8l-85.29-128A32.18 32.18 0 0 0 522.6 0H117.42a31.87 31.87 0 0 0-26.61 14.2l-10.66 16L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.47-2.82l19.64-25.26a16 16 0 0 0-2.81-22.45ZM320 384H128V224H64v256a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-73.41l-64-49.47Z"></svg:path>`,
})
export class FaSolidStoreAltSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStoreSlashIcon],svg[fa-solid-store-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M121.51 384v-99.8a119.4 119.4 0 0 1-28 3.8a123.5 123.5 0 0 1-17.1-1.2a115 115 0 0 1-15.58-3.6V480c0 17.7 13.59 32 30.4 32h414.52L348.42 384Zm-28-128.09c25.1 0 47.29-10.72 64-27.24L24 120.05c-30.52 53.39-2.45 126.53 56.49 135a96 96 0 0 0 12.99.86Zm508.62 202.18l-54.93-44.68V283.2a93.5 93.5 0 0 1-15.57 3.6a127 127 0 0 1-17.29 1.2a115 115 0 0 1-28-3.8v79.68L348.52 251.77a88 88 0 0 0 25.41 4.14c28.11 0 53-13 70.11-33.11c17.19 20.11 42.08 33.11 70.11 33.11a94 94 0 0 0 13-.91c59.66-8.41 88-82.8 56.06-136.4L521.55 15a30.1 30.1 0 0 0-25.74-15H112a30.11 30.11 0 0 0-25.73 15l-9.39 15.78l-33.69-27.4a14.68 14.68 0 0 0-21.33 2.81L3.2 31.45a16.58 16.58 0 0 0 2.67 22.46l558.94 454.72a14.69 14.69 0 0 0 21.33-2.82l18.66-25.26a16.58 16.58 0 0 0-2.67-22.46"></svg:path>`,
})
export class FaSolidStoreSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStreamIcon],svg[fa-solid-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16m480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16m-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidStreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStreetViewIcon],svg[fa-solid-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65c0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64s28.65 64 64 64m-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32"></svg:path>`,
})
export class FaSolidStreetViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStrikethroughIcon],svg[fa-solid-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m-180.24 96A43 43 0 0 1 336 356.45A43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64a114.3 114.3 0 0 0-5.34-24.36z"></svg:path>`,
})
export class FaSolidStrikethroughIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidStroopwafelIcon],svg[fa-solid-stroopwafel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.12 210.74L142.86 256l45.25 45.25L233.37 256zm113.13-22.62L256 142.86l-45.25 45.25L256 233.37zm-90.5 135.76L256 369.14l45.26-45.26L256 278.63zM256 0C114.62 0 0 114.62 0 256s114.62 256 256 256s256-114.62 256-256S397.38 0 256 0m186.68 295.6l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-28.29-28.29l-45.25 45.25l33.94 33.94l16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97l16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97l-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97l-33.94-33.94l-45.26 45.26l28.29 28.29c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0L256 414.39l-28.29 28.29c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l28.29-28.29l-45.25-45.26l-33.94 33.94l16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97l-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97l-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97l33.94-33.94l-45.25-45.25l-28.29 28.29c-3.12 3.12-8.19 3.12-11.31 0L69.32 295.6c-3.12-3.12-3.12-8.19 0-11.31L97.61 256l-28.29-28.29c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l28.29 28.29l45.25-45.26l-33.94-33.94l-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97l-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97l16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97l33.94 33.94l45.26-45.25l-28.29-28.29c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0L256 97.61l28.29-28.29c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-28.29 28.29l45.26 45.25l33.94-33.94l-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97l16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97l16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97l-33.94 33.94l45.25 45.26l28.29-28.29c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31L414.39 256l28.29 28.28a8.015 8.015 0 0 1 0 11.32M278.63 256l45.26 45.25L369.14 256l-45.25-45.26z"></svg:path>`,
})
export class FaSolidStroopwafelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSubscriptIcon],svg[fa-solid-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 448h-16V304a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 400 352h16v96h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M336 64h-67a16 16 0 0 0-13.14 6.87l-79.9 115l-79.9-115A16 16 0 0 0 83 64H16A16 16 0 0 0 0 80v48a16 16 0 0 0 16 16h33.48l77.81 112l-77.81 112H16a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h67a16 16 0 0 0 13.14-6.87l79.9-115l79.9 115A16 16 0 0 0 269 448h67a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-33.48l-77.81-112l77.81-112H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidSubscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSubwayIcon],svg[fa-solid-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96M200 232V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24m200 0V120c0-13.255-10.745-24-24-24H272c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h104c13.255 0 24-10.745 24-24m-48 56c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48m-256 0c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48"></svg:path>`,
})
export class FaSolidSubwayIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSuitcaseIcon],svg[fa-solid-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48zm64-384h128v32H192zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48M96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48z"></svg:path>`,
})
export class FaSolidSuitcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSuitcaseRollingIcon],svg[fa-solid-suitcase-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48m-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48z"></svg:path>`,
})
export class FaSolidSuitcaseRollingIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSunIcon],svg[fa-solid-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96m246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1m-155.9 106c-49.9 49.9-131.1 49.9-181 0s-49.9-131.1 0-181s131.1-49.9 181 0s49.9 131.1 0 181"></svg:path>`,
})
export class FaSolidSunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSuperscriptIcon],svg[fa-solid-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 160h-16V16a16 16 0 0 0-16-16h-48a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 400 64h16v96h-16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M336 64h-67a16 16 0 0 0-13.14 6.87l-79.9 115l-79.9-115A16 16 0 0 0 83 64H16A16 16 0 0 0 0 80v48a16 16 0 0 0 16 16h33.48l77.81 112l-77.81 112H16a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h67a16 16 0 0 0 13.14-6.87l79.9-115l79.9 115A16 16 0 0 0 269 448h67a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-33.48l-77.81-112l77.81-112H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidSuperscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSurpriseIcon],svg[fa-solid-surprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8M136 208c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32m112 208c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64m80-176c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidSurpriseIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSwatchbookIcon],svg[fa-solid-swatchbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M434.66 167.71L344.5 77.36a31.83 31.83 0 0 0-45-.07l-.07.07L224 152.88V424l210.66-211.1a32 32 0 0 0 0-45.19M480 320H373.09L186.68 506.51c-2.06 2.07-4.5 3.58-6.68 5.49h300a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32M192 32a32 32 0 0 0-32-32H32A32 32 0 0 0 0 32v384a96 96 0 0 0 192 0ZM96 440a24 24 0 1 1 24-24a24 24 0 0 1-24 24m32-184H64v-64h64Zm0-128H64V64h64Z"></svg:path>`,
})
export class FaSolidSwatchbookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSwimmerIcon],svg[fa-solid-swimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6l18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88c5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58M624 352h-16c-26.04 0-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80s-80 35.82-80 80s35.82 80 80 80"></svg:path>`,
})
export class FaSolidSwimmerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSwimmingPoolIcon],svg[fa-solid-swimming-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 416h-16c-26.04 0-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 407.58 442.04 416 416 416s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 407.58 250.04 416 224 416s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 407.58 58.04 416 32 416H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-400-32v-96h192v96c19.12 0 30.86-6.16 34.39-9.42c9.17-8.46 19.2-14.34 29.61-18.07V128c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16c0-52.94-43.06-96-96-96s-96 43.06-96 96v96H224v-96c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16c0-52.94-43.06-96-96-96s-96 43.06-96 96v228.5c10.41 3.73 20.44 9.62 29.61 18.07c3.53 3.27 15.27 9.43 34.39 9.43"></svg:path>`,
})
export class FaSolidSwimmingPoolIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSynagogueIcon],svg[fa-solid-synagogue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 196.51L6.67 268.29A26.64 26.64 0 0 0 0 285.93V512h128V239.58l-38-43.07c-5.31-6.01-14.69-6.01-20 0m563.33 71.78L570 196.51c-5.31-6.02-14.69-6.02-20 0l-38 43.07V512h128V285.93c0-6.5-2.37-12.77-6.67-17.64M339.99 7.01c-11.69-9.35-28.29-9.35-39.98 0l-128 102.4A32 32 0 0 0 160 134.4V512h96v-92.57c0-31.88 21.78-61.43 53.25-66.55C349.34 346.35 384 377.13 384 416v96h96V134.4c0-9.72-4.42-18.92-12.01-24.99zm52.07 215.55c1.98 3.15-.29 7.24-4 7.24h-38.94L324 269.79c-1.85 2.95-6.15 2.95-8 0l-25.12-39.98h-38.94c-3.72 0-5.98-4.09-4-7.24l19.2-30.56l-19.2-30.56c-1.98-3.15.29-7.24 4-7.24h38.94l25.12-40c1.85-2.95 6.15-2.95 8 0l25.12 39.98h38.95c3.71 0 5.98 4.09 4 7.24L372.87 192z"></svg:path>`,
})
export class FaSolidSynagogueIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSyncIcon],svg[fa-solid-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26a175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57M255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432"></svg:path>`,
})
export class FaSolidSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSyncAltIcon],svg[fa-solid-sync-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85c-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28c77.418-.07 144.315-53.144 162.787-126.849c1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24"></svg:path>`,
})
export class FaSolidSyncAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidSyringeIcon],svg[fa-solid-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8l-45.3 45.3l55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3l63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9l-135.7-135.7zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3l-45.3 45.3l-56.6-56.6l-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5l45.3-45.3l28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4"></svg:path>`,
})
export class FaSolidSyringeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTableIcon],svg[fa-solid-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48M224 416H64v-96h160zm0-160H64v-96h160zm224 160H288v-96h160zm0-160H288v-96h160z"></svg:path>`,
})
export class FaSolidTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTableTennisIcon],svg[fa-solid-table-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496.2 296.5C527.7 218.7 512 126.2 449 63.1C365.1-21 229-21 145.1 63.1l-56 56.1l211.5 211.5c46.1-62.1 131.5-77.4 195.6-34.2m-217.9 79.7L57.9 155.9c-27.3 45.3-21.7 105 17.3 144.1l34.5 34.6L6.7 424c-8.6 7.5-9.1 20.7-1 28.8l53.4 53.5c8 8.1 21.2 7.6 28.7-1L177.1 402l35.7 35.7c19.7 19.7 44.6 30.5 70.3 33.3c-7.1-17-11-35.6-11-55.1c-.1-13.8 2.5-27 6.2-39.7M416 320c-53 0-96 43-96 96s43 96 96 96s96-43 96-96s-43-96-96-96"></svg:path>`,
})
export class FaSolidTableTennisIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTabletIcon],svg[fa-solid-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class FaSolidTabletIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTabletAltIcon],svg[fa-solid-tablet-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48M224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class FaSolidTabletAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTabletsIcon],svg[fa-solid-tablets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 192C78.9 192 12.5 250.5.1 326.7c-.8 4.8 3.3 9.3 8.3 9.3h303.3c5 0 9.1-4.5 8.3-9.3C307.5 250.5 241.1 192 160 192m151.6 176H8.4c-5 0-9.1 4.5-8.3 9.3C12.5 453.5 78.9 512 160 512s147.5-58.5 159.9-134.7c.8-4.8-3.3-9.3-8.3-9.3M593.4 46.6c-56.5-56.5-144.2-61.4-206.9-16c-4 2.9-4.3 8.9-.8 12.3L597 254.3c3.5 3.5 9.5 3.2 12.3-.8c45.5-62.7 40.6-150.4-15.9-206.9M363 65.7c-3.5-3.5-9.5-3.2-12.3.8c-45.4 62.7-40.5 150.4 15.9 206.9c56.5 56.5 144.2 61.4 206.9 15.9c4-2.9 4.3-8.9.8-12.3z"></svg:path>`,
})
export class FaSolidTabletsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTachometerAltIcon],svg[fa-solid-tachometer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288m0 64c14.71 0 26.58 10.13 30.32 23.65c-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01c-17.67 0-32-14.33-32-32S270.33 96 288 96M96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32c0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17c12.57 4.19 19.35 17.79 15.17 30.36m14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23c17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22M480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidTachometerAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTagIcon],svg[fa-solid-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118M112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48"></svg:path>`,
})
export class FaSolidTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTagsIcon],svg[fa-solid-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882M112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882"></svg:path>`,
})
export class FaSolidTagsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTallyIcon],svg[fa-solid-tally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M639.21 169.49l-9.89-30.43c-2.73-8.4-11.75-13-20.16-10.27L544 149.88V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v122.59l-64 20.71V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v164.01l-64 20.71V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v205.43l-64 20.71V48c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v246.86l-84.94 27.49C2.65 325.08-1.95 334.11.79 342.51l9.89 30.43c2.73 8.4 11.76 13 20.16 10.27L96 362.13V464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V341.41l64-20.71V464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V299.99l64-20.71V464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V258.57l64-20.71V464c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V217.14l84.94-27.49c8.4-2.73 13.01-11.75 10.27-20.16z" fill="currentColor"></svg:path>`,
})
export class FaSolidTallyIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTapeIcon],svg[fa-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 192c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64m400 224H380.6c41.5-40.7 67.4-97.3 67.4-160c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-400-64c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96"></svg:path>`,
})
export class FaSolidTapeIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTasksIcon],svg[fa-solid-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96m432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16m0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidTasksIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTaxiIcon],svg[fa-solid-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m462 241.64l-22-84.84c-9.6-35.2-41.6-60.8-76.8-60.8H352V64c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v32h-11.2c-35.2 0-67.2 25.6-76.8 60.8l-22 84.84C21.41 248.04 0 273.47 0 304v48c0 23.63 12.95 44.04 32 55.12V448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-40.88c19.05-11.09 32-31.5 32-55.12v-48c0-30.53-21.41-55.96-50-62.36M96 352c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32m20.55-112l17.2-66.36c2.23-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240zM416 352c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidTaxiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTeethIcon],svg[fa-solid-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96M160 368c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16zm0-128c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56zm128 128c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16zm0-128c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48z"></svg:path>`,
})
export class FaSolidTeethIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTeethOpenIcon],svg[fa-solid-teeth-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 0H96C42.98 0 0 42.98 0 96v64c0 35.35 28.66 64 64 64h512c35.34 0 64-28.65 64-64V96c0-53.02-42.98-96-96-96M160 176c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-32c0-26.51 21.49-48 48-48s48 21.49 48 48zm144 0c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-56c0-30.93 25.07-56 56-56s56 25.07 56 56zm144 0c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-56c0-30.93 25.07-56 56-56s56 25.07 56 56zm128 0c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-32c0-26.51 21.49-48 48-48s48 21.49 48 48zm0 144H64c-35.34 0-64 28.65-64 64v32c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96v-32c0-35.35-28.66-64-64-64m-416 80c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16zm144-8c0 30.93-25.07 56-56 56s-56-25.07-56-56v-24c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16zm144 0c0 30.93-25.07 56-56 56s-56-25.07-56-56v-24c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16zm128 8c0 26.51-21.49 48-48 48s-48-21.49-48-48v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16z"></svg:path>`,
})
export class FaSolidTeethOpenIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTemperatureHighIcon],svg[fa-solid-temperature-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96m0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5zM144 448c-44.1 0-80-35.9-80-80c0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8c0 44.1-35.9 80-80 80m16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1"></svg:path>`,
})
export class FaSolidTemperatureHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTemperatureLowIcon],svg[fa-solid-temperature-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96m0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32m-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5zM144 448c-44.1 0-80-35.9-80-80c0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8c0 44.1-35.9 80-80 80m16-125.1V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v18.9c-18.6 6.6-32 24.2-32 45.1c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1"></svg:path>`,
})
export class FaSolidTemperatureLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTengeIcon],svg[fa-solid-tenge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 160H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h140v228c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V240h140c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12m0-128H12C5.4 32 0 37.4 0 44v56c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12"></svg:path>`,
})
export class FaSolidTengeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTerminalIcon],svg[fa-solid-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256L6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941M640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24"></svg:path>`,
})
export class FaSolidTerminalIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTextHeightIcon],svg[fa-solid-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368"></svg:path>`,
})
export class FaSolidTextHeightIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTextWidthIcon],svg[fa-solid-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H16A16 16 0 0 0 0 48v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h120v112h-24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-24V112h120v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-68.69 260.69C354 283.36 336 288.36 336 304v48H112v-48c0-14.31-17.31-21.32-27.31-11.31l-80 80a16 16 0 0 0 0 22.62l80 80C94 484.64 112 479.64 112 464v-48h224v48c0 14.31 17.31 21.33 27.31 11.31l80-80a16 16 0 0 0 0-22.62z"></svg:path>`,
})
export class FaSolidTextWidthIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThIcon],svg[fa-solid-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24m181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24m32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24m-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24m-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24M0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24m386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24m0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24M181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24"></svg:path>`,
})
export class FaSolidThIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThLargeIcon],svg[fa-solid-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24m-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24M0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24m296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24"></svg:path>`,
})
export class FaSolidThLargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThListIcon],svg[fa-solid-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24M0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24M125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24m80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24m-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24m24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24"></svg:path>`,
})
export class FaSolidThListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTheaterMasksIcon],svg[fa-solid-theater-masks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.86 245.15c-35.88 10.45-59.95 41.2-57.53 74.1c11.4-12.72 28.81-23.7 49.9-30.92zM95.81 295L64.08 115.49c-.29-1.62.28-2.62.24-2.65c57.76-32.06 123.12-49.01 189.01-49.01c1.61 0 3.23.17 4.85.19c13.95-13.47 31.73-22.83 51.59-26c18.89-3.02 38.05-4.55 57.18-5.32c-9.99-13.95-24.48-24.23-41.77-27C301.27 1.89 277.24 0 253.32 0C176.66 0 101.02 19.42 33.2 57.06C9.03 70.48-3.92 98.48 1.05 126.58l31.73 179.51c14.23 80.52 136.33 142.08 204.45 142.08c3.59 0 6.75-.46 10.01-.8c-13.52-17.08-28.94-40.48-39.5-67.58c-47.61-12.98-106.06-51.62-111.93-84.79m97.55-137.46c-.73-4.12-2.23-7.87-4.07-11.4c-8.25 8.91-20.67 15.75-35.32 18.32c-14.65 2.58-28.67.4-39.48-5.17c-.52 3.94-.64 7.98.09 12.1c3.84 21.7 24.58 36.19 46.34 32.37c21.75-3.82 36.28-24.52 32.44-46.22M606.8 120.9c-88.98-49.38-191.43-67.41-291.98-51.35c-27.31 4.36-49.08 26.26-54.04 54.36l-31.73 179.51c-15.39 87.05 95.28 196.27 158.31 207.35c63.03 11.09 204.47-53.79 219.86-140.84l31.73-179.51c4.97-28.11-7.98-56.11-32.15-69.52m-273.24 96.8c3.84-21.7 24.58-36.19 46.34-32.36s36.28 24.52 32.45 46.22c-.73 4.12-2.23 7.87-4.07 11.4c-8.25-8.91-20.67-15.75-35.32-18.32c-14.65-2.58-28.67-.4-39.48 5.17c-.53-3.95-.65-7.99.08-12.11m70.47 198.76c-55.68-9.79-93.52-59.27-89.04-112.9c20.6 25.54 56.21 46.17 99.49 53.78s83.82.37 111.93-16.6c-14.18 51.94-66.71 85.51-122.38 75.72m130.3-151.34c-8.25-8.91-20.68-15.75-35.33-18.32c-14.65-2.58-28.67-.4-39.48 5.17c-.52-3.94-.64-7.98.09-12.1c3.84-21.7 24.58-36.19 46.34-32.37c21.75 3.83 36.28 24.52 32.45 46.22c-.73 4.13-2.23 7.88-4.07 11.4"></svg:path>`,
})
export class FaSolidTheaterMasksIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerIcon],svg[fa-solid-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476.8 20.4c-37.5-30.7-95.5-26.3-131.9 10.2l-45.7 46l50.5 50.5c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-50.4-50.5l-45.1 45.4l50.3 50.4c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L209 167.4l-45.1 45.4L214 263c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-50.1-50.2L96 281.1V382L7 471c-9.4 9.4-9.4 24.6 0 33.9c9.4 9.4 24.6 9.4 33.9 0l89-89h99.9L484 162.6c34.9-34.9 42.2-101.5-7.2-142.2"></svg:path>`,
})
export class FaSolidThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerEmptyIcon],svg[fa-solid-thermometer-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64s28.654-64 64-64s64 28.654 64 64m32-84.653c19.912 22.563 32 52.194 32 84.653c0 70.696-57.303 128-128 128c-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333C.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08c-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80"></svg:path>`,
})
export class FaSolidThermometerEmptyIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerFullIcon],svg[fa-solid-thermometer-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96c0-53.019-42.981-96-96-96S32 42.981 32 96v203.347C12.225 321.756.166 351.136.002 383.333c-.359 70.303 56.787 128.176 127.089 128.664c.299.002.61.003.909.003c70.698 0 128-57.304 128-128c0-32.459-12.088-62.09-32-84.653zm-96 368l-.576-.002c-43.86-.304-79.647-36.544-79.423-80.42c.173-33.98 19.266-51.652 31.999-66.08V96c0-26.467 21.533-48 48-48s48 21.533 48 48v221.498c12.63 14.312 32 32.164 32 66.502c0 44.112-35.888 80-80 80m64-80c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V96c0-17.673 14.327-32 32-32s32 14.327 32 32v232.583c19.124 11.068 32 31.732 32 55.417"></svg:path>`,
})
export class FaSolidThermometerFullIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerHalfIcon],svg[fa-solid-thermometer-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V224c0-17.673 14.327-32 32-32s32 14.327 32 32v104.583c19.124 11.068 32 31.732 32 55.417m32-84.653c19.912 22.563 32 52.194 32 84.653c0 70.696-57.303 128-128 128c-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333C.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08c-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80"></svg:path>`,
})
export class FaSolidThermometerHalfIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerQuarterIcon],svg[fa-solid-thermometer-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V288c0-17.673 14.327-32 32-32s32 14.327 32 32v40.583c19.124 11.068 32 31.732 32 55.417m32-84.653c19.912 22.563 32 52.194 32 84.653c0 70.696-57.303 128-128 128c-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333C.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08c-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80"></svg:path>`,
})
export class FaSolidThermometerQuarterIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThermometerThreeQuartersIcon],svg[fa-solid-thermometer-three-quarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-23.685 12.876-44.349 32-55.417V160c0-17.673 14.327-32 32-32s32 14.327 32 32v168.583c19.124 11.068 32 31.732 32 55.417m32-84.653c19.912 22.563 32 52.194 32 84.653c0 70.696-57.303 128-128 128c-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333C.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08c-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80"></svg:path>`,
})
export class FaSolidThermometerThreeQuartersIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThetaIcon],svg[fa-solid-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 8C84.34 8 0 116.94 0 256s84.34 248 192 248 192-108.94 192-248S299.66 8 192 8zm0 96c41.44 0 77.35 44.41 90.43 104H101.57c13.08-59.59 48.99-104 90.43-104zm0 304c-41.44 0-77.35-44.41-90.43-104h180.86c-13.08 59.59-48.99 104-90.43 104z" fill="currentColor"></svg:path>`,
})
export class FaSolidThetaIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThumbsDownIcon],svg[fa-solid-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56m40 200c0-13.255 10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24s-24-10.745-24-24m272 256c-20.183 0-29.485-39.293-33.931-57.795c-5.206-21.666-10.589-44.07-25.393-58.902c-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998c15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737c8.392 12.057 10.446 27.034 6.148 44.632c16.312 17.053 25.063 48.863 16.382 74.757c17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197c-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548C384 504 336 512 312 512"></svg:path>`,
})
export class FaSolidThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThumbsUpIcon],svg[fa-solid-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24M64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24M384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098c.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469c8.681 25.895-.069 57.704-16.382 74.757c4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725c-15.957-7.099-36.821-15.887-52.651-16.178c-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521c39.614-39.144 56.648-80.587 89.117-113.111c14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452"></svg:path>`,
})
export class FaSolidThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidThumbtackIcon],svg[fa-solid-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8 8 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24c-.001-51.183-37.983-91.42-85.973-113.733"></svg:path>`,
})
export class FaSolidThumbtackIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTicketAltIcon],svg[fa-solid-ticket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 160h320v192H128zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48m-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24z"></svg:path>`,
})
export class FaSolidTicketAltIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTildeIcon],svg[fa-solid-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M339.54 381.51c-35.52-6.48-66.75-27.68-89.31-55.87l-66.52-83.15C174.33 230.73 160.3 224 145.25 224 118.09 224 96 246.09 96 273.25V321c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32v-40.92c0-78.1 58.67-147.33 136.64-151.83 47.6-2.75 92.54 17.39 122.05 54.27l69.59 87c9.39 11.75 23.42 18.48 38.47 18.48 27.16 0 49.25-22.09 49.25-49.25V192c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v46.75c0 89-80.45 159.56-172.46 142.76z" fill="currentColor"></svg:path>`,
})
export class FaSolidTildeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTimesIcon],svg[fa-solid-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"></svg:path>`,
})
export class FaSolidTimesIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTimesCircleIcon],svg[fa-solid-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65l-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7l65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256z"></svg:path>`,
})
export class FaSolidTimesCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTintIcon],svg[fa-solid-tint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91C0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82M176 448c-61.75 0-112-50.25-112-112c0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80c8.84 0 16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidTintIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTintSlashIcon],svg[fa-solid-tint-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633.82 458.1L494.97 350.78c.52-5.57 1.03-11.16 1.03-16.87c0-111.76-99.79-153.34-146.78-311.82c-7.94-28.78-49.44-30.12-58.44 0c-15.52 52.34-36.87 91.96-58.49 125.68L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45M144 333.91C144 432.35 222.72 512 320 512c44.71 0 85.37-16.96 116.4-44.7L162.72 255.78c-11.41 23.5-18.72 48.35-18.72 78.13"></svg:path>`,
})
export class FaSolidTintSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTiredIcon],svg[fa-solid-tired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m33.8 189.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6m-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3zM248 288c51.9 0 115.3 43.8 123.2 106.7c1.7 13.6-8 24.6-17.7 20.4c-25.9-11.1-64.4-17.4-105.5-17.4s-79.6 6.3-105.5 17.4c-9.8 4.2-19.4-7-17.7-20.4C132.7 331.8 196.1 288 248 288"></svg:path>`,
})
export class FaSolidTiredIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToggleOffIcon],svg[fa-solid-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64M64 256c0-70.741 57.249-128 128-128c70.741 0 128 57.249 128 128c0 70.741-57.249 128-128 128c-70.741 0-128-57.249-128-128m320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128c0 70.74-57.249 128-128 128"></svg:path>`,
})
export class FaSolidToggleOffIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToggleOnIcon],svg[fa-solid-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64m0 320c-70.8 0-128-57.3-128-128c0-70.8 57.3-128 128-128c70.8 0 128 57.3 128 128c0 70.8-57.3 128-128 128"></svg:path>`,
})
export class FaSolidToggleOnIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToiletIcon],svg[fa-solid-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 48c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h16v156.7C11.8 214.8 0 226.9 0 240c0 67.2 34.6 126.2 86.8 160.5l-21.4 70.2C59.1 491.2 74.5 512 96 512h192c21.5 0 36.9-20.8 30.6-41.3l-21.4-70.2C349.4 366.2 384 307.2 384 240c0-13.1-11.8-25.2-32-35.3V48zM80 72c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8zm112 200c-77.1 0-139.6-14.3-139.6-32s62.5-32 139.6-32s139.6 14.3 139.6 32s-62.5 32-139.6 32"></svg:path>`,
})
export class FaSolidToiletIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToiletPaperIcon],svg[fa-solid-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0C74.98 0 32 85.96 32 192v172.07c0 41.12-9.8 62.77-31.17 126.87C-2.62 501.3 5.09 512 16.01 512h280.92c13.77 0 26-8.81 30.36-21.88c12.83-38.48 24.71-72.4 24.71-126.05V192c0-83.6 23.67-153.52 60.44-192zM96 224c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16m64 0c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16m64 0c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16m64 0c-8.84 0-16-7.16-16-16s7.16-16 16-16s16 7.16 16 16s-7.16 16-16 16M480 0c-53.02 0-96 85.96-96 192s42.98 192 96 192s96-85.96 96-192S533.02 0 480 0m0 256c-17.67 0-32-28.65-32-64s14.33-64 32-64s32 28.65 32 64s-14.33 64-32 64"></svg:path>`,
})
export class FaSolidToiletPaperIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToiletPaperSlashIcon],svg[fa-solid-toilet-paper-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 192v172.13c0 41.12-9.75 62.75-31.12 126.87A16 16 0 0 0 48 512h280.86a31.87 31.87 0 0 0 30.38-21.87c9.31-27.83 18-53.35 22.18-85.55l-316-244.25C64.53 170.66 64 181.19 64 192m569.82 266.09l-102-78.81C575.28 360.91 608 284.32 608 192C608 86 565 0 512 0s-96 86-96 192c0 42 7 80.4 18.43 112L384 265v-73c0-83.62 23.63-153.5 60.5-192H160c-23.33 0-44.63 16.83-61.26 44.53L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.45a16 16 0 0 0 2.81 22.46l588.36 454.72a16 16 0 0 0 22.46-2.82l19.64-25.26a16 16 0 0 0-2.82-22.46M512 256c-17.63 0-32-28.62-32-64s14.37-64 32-64s32 28.63 32 64s-14.38 64-32 64"></svg:path>`,
})
export class FaSolidToiletPaperSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToolboxIcon],svg[fa-solid-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62M320 160H192V96h128zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384z"></svg:path>`,
})
export class FaSolidToolboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToolsIcon],svg[fa-solid-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0L0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7M331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5c37.1-37.1 49.7-89.3 37.9-136.7c-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4l-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2c-47.4-11.7-99.6.9-136.6 37.9c-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9m-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7M64 472c-13.2 0-24-10.8-24-24c0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24"></svg:path>`,
})
export class FaSolidToolsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToothIcon],svg[fa-solid-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72c-32.19-8.36-63 5.1-89.14 24.33c-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11c-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31c-44.9 11.67-81 48.5-92.01 93.72c-10.13 41.62-.42 80.81 21.5 110.43c23.36 31.57 32.68 68.66 36.29 107.35c4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7c13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16c14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32c3.61-38.7 12.93-75.78 36.29-107.35c21.95-29.61 31.66-68.8 21.53-110.43"></svg:path>`,
})
export class FaSolidToothIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTorahIcon],svg[fa-solid-torah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320.05 366.48l17.72-29.64h-35.46zm99.21-166H382.4l18.46 30.82zM48 0C21.49 0 0 14.33 0 32v448c0 17.67 21.49 32 48 32s48-14.33 48-32V32C96 14.33 74.51 0 48 0m172.74 311.5h36.85l-18.46-30.82zm161.71 0h36.86l-18.45-30.8zM128 464h384V48H128zm66.77-278.13a21.22 21.22 0 0 1 18.48-10.71h59.45l29.13-48.71a21.13 21.13 0 0 1 18.22-10.37A20.76 20.76 0 0 1 338 126.29l29.25 48.86h59.52a21.12 21.12 0 0 1 18.1 32L415.63 256L445 305a20.69 20.69 0 0 1 .24 21.12a21.25 21.25 0 0 1-18.48 10.72h-59.47l-29.13 48.7a21.13 21.13 0 0 1-18.16 10.4a20.79 20.79 0 0 1-18-10.22l-29.25-48.88h-59.5a21.11 21.11 0 0 1-18.1-32L224.36 256L195 207a20.7 20.7 0 0 1-.23-21.13M592 0c-26.51 0-48 14.33-48 32v448c0 17.67 21.49 32 48 32s48-14.33 48-32V32c0-17.67-21.49-32-48-32M320 145.53l-17.78 29.62h35.46zm-62.45 55h-36.81l18.44 30.8zm29.58 111h65.79L386.09 256l-33.23-55.52h-65.79L253.9 256z"></svg:path>`,
})
export class FaSolidTorahIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidToriiGateIcon],svg[fa-solid-torii-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376.45 32h-240.9A303.2 303.2 0 0 1 0 0v96c0 17.67 14.33 32 32 32h32v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h48v240c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V256h256v240c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V256h48c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-48v-64h32c17.67 0 32-14.33 32-32V0a303.2 303.2 0 0 1-135.55 32M128 128h96v64h-96zm256 64h-96v-64h96z"></svg:path>`,
})
export class FaSolidToriiGateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTractorIcon],svg[fa-solid-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88s88-39.4 88-88s-39.4-88-88-88m0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24s-10.77 24-24 24m80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84c4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.91 47.91 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48c18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32M176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80s80 35.82 80 80s-35.82 80-80 80m22-256h-38V64h106.89l41.15 96z"></svg:path>`,
})
export class FaSolidTractorIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrademarkIcon],svg[fa-solid-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M260.6 96H12c-6.6 0-12 5.4-12 12v43.1c0 6.6 5.4 12 12 12h85.1V404c0 6.6 5.4 12 12 12h54.3c6.6 0 12-5.4 12-12V163.1h85.1c6.6 0 12-5.4 12-12V108c.1-6.6-5.3-12-11.9-12M640 403l-24-296c-.5-6.2-5.7-11-12-11h-65.4c-5.1 0-9.7 3.3-11.3 8.1l-43.8 127.1c-7.2 20.6-16.1 52.8-16.1 52.8h-.9s-8.9-32.2-16.1-52.8l-43.8-127.1c-1.7-4.8-6.2-8.1-11.3-8.1h-65.4c-6.2 0-11.4 4.8-12 11l-24.4 296c-.6 7 4.9 13 12 13H360c6.3 0 11.5-4.9 12-11.2l9.1-132.9c1.8-24.2 0-53.7 0-53.7h.9s10.7 33.6 17.9 53.7l30.7 84.7c1.7 4.7 6.2 7.9 11.3 7.9h50.3c5.1 0 9.6-3.2 11.3-7.9l30.7-84.7c7.2-20.1 17.9-53.7 17.9-53.7h.9s-1.8 29.5 0 53.7l9.1 132.9c.4 6.3 5.7 11.2 12 11.2H628c7 0 12.5-6 12-13"></svg:path>`,
})
export class FaSolidTrademarkIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrafficLightIcon],svg[fa-solid-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192h-64v-37.88c37.2-13.22 64-48.38 64-90.12h-64V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v32H0c0 41.74 26.8 76.9 64 90.12V192H0c0 41.74 26.8 76.9 64 90.12V320H0c0 42.84 28.25 78.69 66.99 91.05C79.42 468.72 130.6 512 192 512s112.58-43.28 125.01-100.95C355.75 398.69 384 362.84 384 320h-64v-37.88c37.2-13.22 64-48.38 64-90.12M192 416c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m0-128c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48"></svg:path>`,
})
export class FaSolidTrafficLightIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrailerIcon],svg[fa-solid-trailer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 320h-80V80a16 16 0 0 0-16-16H16A16 16 0 0 0 0 80v288a16 16 0 0 0 16 16h49.61c7.83-54.21 54-96 110.39-96s102.56 41.79 110.39 96H624a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M96 243.68a176.3 176.3 0 0 0-32 20.71V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96-18.54c-5.31-.49-10.57-1.14-16-1.14s-10.69.65-16 1.14V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96 39.25a176.3 176.3 0 0 0-32-20.71V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8ZM384 320h-32V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm96 0h-32V136a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Zm-304 0a80 80 0 1 0 80 80a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FaSolidTrailerIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrainIcon],svg[fa-solid-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 96v256c0 51.815-61.624 96-130.022 96l62.98 49.721C386.905 502.417 383.562 512 376 512H72c-7.578 0-10.892-9.594-4.957-14.279L130.022 448C61.82 448 0 403.954 0 352V96C0 42.981 64 0 128 0h192c65 0 128 42.981 128 96m-48 136V120c0-13.255-10.745-24-24-24H72c-13.255 0-24 10.745-24 24v112c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24m-176 64c-30.928 0-56 25.072-56 56s25.072 56 56 56s56-25.072 56-56s-25.072-56-56-56"></svg:path>`,
})
export class FaSolidTrainIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTramIcon],svg[fa-solid-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 64c17.7 0 32-14.3 32-32S305.7 0 288 0s-32 14.3-32 32s14.3 32 32 32m223.5-12.1c-2.3-8.6-11-13.6-19.6-11.3l-480 128c-8.5 2.3-13.6 11-11.3 19.6C2.5 195.3 8.9 200 16 200c1.4 0 2.8-.2 4.1-.5L240 140.8V224H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32H272v-91.7l228.1-60.8c8.6-2.3 13.6-11.1 11.4-19.6M176 384H80v-96h96zm160-96h96v96h-96zm-32 0v96h-96v-96zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32"></svg:path>`,
})
export class FaSolidTramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTransgenderIcon],svg[fa-solid-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-80.7 80.7C198.5 104.1 172.2 96 144 96C64.5 96 0 160.5 0 240c0 68.5 47.9 125.9 112 140.4V408H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7l16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12M144 320c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidTransgenderIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTransgenderAltIcon],svg[fa-solid-transgender-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M468 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-80.7 80.7C294.5 104.1 268.2 96 240 96s-54.5 8.1-76.7 22.1l-16.5-16.5l19.8-19.8c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8l-19-19l16.9-16.9C107.1 12.9 101.7 0 91 0H12C5.4 0 0 5.4 0 12v79c0 10.7 12.9 16 20.5 8.5l16.9-16.9l19 19l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l19.8-19.8l16.5 16.5C104.1 185.5 96 211.8 96 240c0 68.5 47.9 125.9 112 140.4V408h-36c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v28c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-28h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-27.6c64.1-14.6 112-71.9 112-140.4c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7l16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V12c0-6.6-5.4-12-12-12M240 320c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidTransgenderAltIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrashIcon],svg[fa-solid-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></svg:path>`,
})
export class FaSolidTrashIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrashAltIcon],svg[fa-solid-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidTrashAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrashRestoreIcon],svg[fa-solid-trash-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidTrashRestoreIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrashRestoreAltIcon],svg[fa-solid-trash-restore-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm91.31-172.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidTrashRestoreAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTreeIcon],svg[fa-solid-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06c3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61c3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26c3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25c3.8-8.17 2.44-17.47-3.56-24.26"></svg:path>`,
})
export class FaSolidTreeIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTrophyIcon],svg[fa-solid-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7c31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7c39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24M99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2c-15.1-5.2-29.2-12.4-41.7-21.4M512 144c0 16.1-17.7 36.1-35.3 48.8c-12.5 9-26.7 16.2-41.8 21.4c7-25 11.8-53.6 12.8-86.2H512z"></svg:path>`,
})
export class FaSolidTrophyIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTruckIcon],svg[fa-solid-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"></svg:path>`,
})
export class FaSolidTruckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTruckLoadingIcon],svg[fa-solid-truck-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7l-61.8 16.5l-24.8-92.7l-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1zM384 0c-17.7 0-32 14.3-32 32v323.6L5.9 450c-4.3 1.2-6.8 5.6-5.6 9.8l12.6 46.3c1.2 4.3 5.6 6.8 9.8 5.6l393.7-107.4C418.8 464.1 467.6 512 528 512c61.9 0 112-50.1 112-112V0zm144 448c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48"></svg:path>`,
})
export class FaSolidTruckLoadingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTruckMonsterIcon],svg[fa-solid-truck-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 224h-16v-64c0-17.67-14.33-32-32-32h-73.6L419.22 24.02A64.03 64.03 0 0 0 369.24 0H256c-17.67 0-32 14.33-32 32v96H48c-8.84 0-16 7.16-16 16v80H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16.72c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64h65.45c29.21-38.65 75.1-64 127.28-64s98.07 25.35 127.28 64H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-336-96V64h81.24l51.2 64zm304 224h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A111 111 0 0 0 512 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67A111 111 0 0 0 373.2 352H368c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a111 111 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32c-.02-8.84-7.18-16-16.02-16m-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m-208-80h-5.2c-2.2-7.33-5.07-14.28-8.65-20.89l3.67-3.67c6.25-6.25 6.25-16.38 0-22.63l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-3.67 3.67A111 111 0 0 0 192 277.2V272c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v5.2c-7.33 2.2-14.28 5.07-20.89 8.65l-3.67-3.67c-6.25-6.25-16.38-6.25-22.63 0L58.18 304.8c-6.25 6.25-6.25 16.38 0 22.63l3.67 3.67a111 111 0 0 0-8.65 20.89H48c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h5.2c2.2 7.33 5.07 14.28 8.65 20.89l-3.67 3.67c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l3.67-3.67c6.61 3.57 13.57 6.45 20.9 8.65v5.2c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-5.2c7.33-2.2 14.28-5.07 20.9-8.65l3.67 3.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.25-6.25 6.25-16.38 0-22.63l-3.67-3.67a111 111 0 0 0 8.65-20.89h5.2c8.84 0 16-7.16 16-16v-32C288 359.16 280.84 352 272 352m-112 80c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48"></svg:path>`,
})
export class FaSolidTruckMonsterIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTruckMovingIcon],svg[fa-solid-truck-moving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80c26.3 0 49.4-12.9 64-32.4c14.6 19.6 37.7 32.4 64 32.4c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2M80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32s32 14.4 32 32s-14.4 32-32 32m128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32s32 14.4 32 32s-14.4 32-32 32m272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32s32 14.4 32 32s-14.4 32-32 32"></svg:path>`,
})
export class FaSolidTruckMovingIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTruckPickupIcon],svg[fa-solid-truck-pickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 288h-16v-64c0-17.67-14.33-32-32-32h-48L419.22 56.02A64.03 64.03 0 0 0 369.24 32H256c-17.67 0-32 14.33-32 32v128H64c-17.67 0-32 14.33-32 32v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h49.61c-.76 5.27-1.61 10.52-1.61 16c0 61.86 50.14 112 112 112s112-50.14 112-112c0-5.48-.85-10.73-1.61-16h67.23c-.76 5.27-1.61 10.52-1.61 16c0 61.86 50.14 112 112 112s112-50.14 112-112c0-5.48-.85-10.73-1.61-16H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M288 96h81.24l76.8 96H288zM176 416c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48s-21.53 48-48 48m288 0c-26.47 0-48-21.53-48-48s21.53-48 48-48s48 21.53 48 48s-21.53 48-48 48"></svg:path>`,
})
export class FaSolidTruckPickupIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTshirtIcon],svg[fa-solid-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5"></svg:path>`,
})
export class FaSolidTshirtIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTtyIcon],svg[fa-solid-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.37 103.822c138.532-138.532 362.936-138.326 501.262 0c6.078 6.078 7.074 15.496 2.583 22.681l-43.214 69.138a18.33 18.33 0 0 1-22.356 7.305l-86.422-34.569a18.335 18.335 0 0 1-11.434-18.846L351.741 90c-62.145-22.454-130.636-21.986-191.483 0l5.953 59.532a18.33 18.33 0 0 1-11.434 18.846l-86.423 34.568a18.334 18.334 0 0 1-22.356-7.305L2.787 126.502a18.33 18.33 0 0 1 2.583-22.68M96 308v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m-336 96v-40c0-6.627-5.373-12-12-12H92c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12M96 500v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12m288 0v-40c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12m96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12"></svg:path>`,
})
export class FaSolidTtyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidTvIcon],svg[fa-solid-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48m-16 352H64V64h512z"></svg:path>`,
})
export class FaSolidTvIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUmbrellaIcon],svg[fa-solid-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M575.7 280.8C547.1 144.5 437.3 62.6 320 49.9V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v17.9C138.3 62.6 29.5 144.5.3 280.8c-2.2 10.1 8.5 21.3 18.7 11.4c52-55 107.7-52.4 158.6 37c5.3 9.5 14.9 8.6 19.7 0c20.2-35.4 44.9-73.2 90.7-73.2c58.5 0 88.2 68.8 90.7 73.2c4.8 8.6 14.4 9.5 19.7 0c51-89.5 107.1-91.4 158.6-37c10.3 10 20.9-1.3 18.7-11.4M256 301.7V432c0 8.8-7.2 16-16 16c-7.8 0-13.2-5.3-15.1-10.7c-5.9-16.7-24.1-25.4-40.8-19.5s-25.4 24.2-19.5 40.8c11.2 31.9 41.6 53.3 75.4 53.3c44.1 0 80-35.9 80-80V301.6c-9.1-7.9-19.8-13.6-32-13.6c-12.3.1-22.4 4.8-32 13.7"></svg:path>`,
})
export class FaSolidUmbrellaIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUmbrellaBeachIcon],svg[fa-solid-umbrella-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7c-95.88-4.89-188.78 36.96-248.53 111.8c-6.69 8.4-2.66 21.05 7.42 24.72m132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98c-7.4-2.7-15.13-4-23.09-4c-58.02.01-128.27 69.17-172.76 171.15M521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19c5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17c2.32-95.69-41.91-187.44-118.44-245.36M560 447.98H321.06L386 269.5l-60.14-21.9l-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16"></svg:path>`,
})
export class FaSolidUmbrellaBeachIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUnderlineIcon],svg[fa-solid-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16m400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class FaSolidUnderlineIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUndoIcon],svg[fa-solid-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215c-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176c0-97.267-78.716-176-176-176c-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12"></svg:path>`,
})
export class FaSolidUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUndoAltIcon],svg[fa-solid-undo-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273c92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556c-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8"></svg:path>`,
})
export class FaSolidUndoAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUnionIcon],svg[fa-solid-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v240c0 59.2-53.85 106.04-115.13 94.14-45.58-8.85-76.87-51.5-76.87-97.93V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v240c0 114.18 100.17 205.4 217.26 190.38C314.04 465.96 384 378.89 384 281.32V48z" fill="currentColor"></svg:path>`,
})
export class FaSolidUnionIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUniversalAccessIcon],svg[fa-solid-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48c114.953 0 208 93.029 208 208c0 114.953-93.029 208-208 208c-114.953 0-208-93.029-208-208c0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8m0 56C149.961 64 64 149.961 64 256s85.961 192 192 192s192-85.961 192-192S362.039 64 256 64m0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36s-36-16.118-36-36s16.118-36 36-36m117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807c.851 101.023 12.306 123.052 25.037 155.621c3.617 9.26-.957 19.698-10.217 23.315s-19.699-.957-23.316-10.217c-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549c-3.615 9.255-14.05 13.836-23.315 10.217c-9.26-3.617-13.834-14.056-10.217-23.315c12.713-32.541 24.185-54.541 25.037-155.621c-26.629-3.058-53.428-9.027-82.141-15.807c-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0c8.599-2.03 17.218 3.294 19.249 11.895c2.029 8.601-3.297 17.219-11.897 19.249"></svg:path>`,
})
export class FaSolidUniversalAccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUniversityIcon],svg[fa-solid-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"></svg:path>`,
})
export class FaSolidUniversityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUnlinkIcon],svg[fa-solid-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0c-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823s73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0c28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96c-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0"></svg:path>`,
})
export class FaSolidUnlinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUnlockIcon],svg[fa-solid-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9c40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0S72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></svg:path>`,
})
export class FaSolidUnlockIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUnlockAltIcon],svg[fa-solid-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9c40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0S72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48M264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40z"></svg:path>`,
})
export class FaSolidUnlockAltIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUploadIcon],svg[fa-solid-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24m216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24m-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20m64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20"></svg:path>`,
})
export class FaSolidUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserIcon],svg[fa-solid-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"></svg:path>`,
})
export class FaSolidUserIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserAltIcon],svg[fa-solid-user-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0S112 64.5 112 144s64.5 144 144 144m128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128"></svg:path>`,
})
export class FaSolidUserAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserAltSlashIcon],svg[fa-solid-user-alt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633.8 458.1L389.6 269.3C433.8 244.7 464 198.1 464 144C464 64.5 399.5 0 320 0c-67.1 0-123 46.1-139 108.2L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3M198.4 320C124.2 320 64 380.2 64 454.4v9.6c0 26.5 21.5 48 48 48h382.2L245.8 320z"></svg:path>`,
})
export class FaSolidUserAltSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserAstronautIcon],svg[fa-solid-user-astronaut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16m40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96zm72 72l12-36l36-12l-36-12l-12-36l-12 36l-36 12l36 12zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133M272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16s-7.2-16-16-16m-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16"></svg:path>`,
})
export class FaSolidUserAstronautIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserCheckIcon],svg[fa-solid-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4m323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104l-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8"></svg:path>`,
})
export class FaSolidUserCheckIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserCircleIcon],svg[fa-solid-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88m0 344c-58.7 0-111.3-26.6-146.5-68.2c18.8-35.4 55.6-59.8 98.5-59.8c2.4 0 4.8.4 7.1 1.1c13 4.2 26.6 6.9 40.9 6.9s28-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1c42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448"></svg:path>`,
})
export class FaSolidUserCircleIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserClockIcon],svg[fa-solid-user-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144s144-64.4 144-144s-64.4-144-144-144m64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7zM320 368c0-27.8 6.7-54.1 18.2-77.5c-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144m-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128"></svg:path>`,
})
export class FaSolidUserClockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserCogIcon],svg[fa-solid-user-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5c-6.7-21.6-18.2-41.2-33.2-57.4c-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1c-22.3-5-45-4.8-66.2 0c-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4c-15 16.2-26.5 35.8-33.2 57.4c-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5c6.7 21.6 18.2 41.1 33.2 57.4c2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1c22.3 5 45 4.8 66.2 0c3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4c15-16.2 26.5-35.8 33.2-57.4c1-3.3-.4-6.8-3.3-8.5zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5s48.5 21.8 48.5 48.5s-21.7 48.5-48.5 48.5M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3c-10.9 0-21.4-4.6-28.9-12.6c-18.3-19.8-32.3-43.9-40.2-69.6c-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6q-.15-3.9 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7c.9-2.9 2.2-5.8 3.2-8.7c-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5c-1.2-3.8-2-7.7-2-11.8z"></svg:path>`,
})
export class FaSolidUserCogIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserEditIcon],svg[fa-solid-user-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9l1.2-11.1l7.9-7.9l77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5m45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8l137.9-137.9l-71.7-71.7zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8l-4.1 4.1l71.8 71.7l41.8-41.8c9.3-9.4 9.3-24.5 0-33.9"></svg:path>`,
})
export class FaSolidUserEditIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserFriendsIcon],svg[fa-solid-user-friends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2M480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96m48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112"></svg:path>`,
})
export class FaSolidUserFriendsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserGraduateIcon],svg[fa-solid-user-graduate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8M13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3c0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57c0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6"></svg:path>`,
})
export class FaSolidUserGraduateIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserInjuredIcon],svg[fa-solid-user-injured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80zM224 256c70.69 0 128-57.31 128-128c0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16c0 70.69 57.31 128 128 128M80 299.7V512h128.26l-98.45-221.52A132.8 132.8 0 0 0 80 299.7M0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48m57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80c0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4"></svg:path>`,
})
export class FaSolidUserInjuredIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserLockIcon],svg[fa-solid-user-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128m96 64a63.1 63.1 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32M496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32m32-144h-64v-80a32 32 0 0 1 64 0z"></svg:path>`,
})
export class FaSolidUserLockIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserMdIcon],svg[fa-solid-user-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128M104 424c0 13.3 10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24m216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9c-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8"></svg:path>`,
})
export class FaSolidUserMdIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserMinusIcon],svg[fa-solid-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"></svg:path>`,
})
export class FaSolidUserMinusIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserNinjaIcon],svg[fa-solid-user-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.4 289.2L224 390.6L122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2M32 192c27.3 0 51.8-11.5 69.2-29.7c15.1 53.9 64 93.7 122.8 93.7c70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80c-26 17.2-43.1 46.6-43.1 80m144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class FaSolidUserNinjaIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserNurseIcon],svg[fa-solid-user-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M319.41 320L224 415.39L128.59 320C57.1 323.1 0 381.6 0 453.79A58.21 58.21 0 0 0 58.21 512h331.58A58.21 58.21 0 0 0 448 453.79C448 381.6 390.9 323.1 319.41 320M224 304a128 128 0 0 0 128-128V65.82a32 32 0 0 0-20.76-30L246.47 4.07a64 64 0 0 0-44.94 0l-84.77 31.79A32 32 0 0 0 96 65.82V176a128 128 0 0 0 128 128M184 71.67a5 5 0 0 1 5-5h21.67V45a5 5 0 0 1 5-5h16.66a5 5 0 0 1 5 5v21.67H259a5 5 0 0 1 5 5v16.66a5 5 0 0 1-5 5h-21.67V115a5 5 0 0 1-5 5h-16.66a5 5 0 0 1-5-5V93.33H189a5 5 0 0 1-5-5ZM144 160h160v16a80 80 0 0 1-160 0Z"></svg:path>`,
})
export class FaSolidUserNurseIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserPlusIcon],svg[fa-solid-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"></svg:path>`,
})
export class FaSolidUserPlusIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserSecretIcon],svg[fa-solid-user-secret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7c0-13.3-27.3-25.1-70.1-33c-9.2-32.8-27-65.8-40.6-82.8c-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8c-13.5 17-31.4 50-40.6 82.8c-42.7 7.9-70 19.7-70 33c0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1M176 480l-41.6-192l49.6 32l24 40zm96 0l-32-120l24-40l49.6-32zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4c-10.1 9.3-48 22.4-64-25c-2.8-8.4-15.4-8.4-18.3 0c-17 50.2-56 32.4-64 25c-9.5-8.8-12.7-21.5-16.5-33.4c-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8"></svg:path>`,
})
export class FaSolidUserSecretIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserShieldIcon],svg[fa-solid-user-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9c0 111.6 68.7 188.8 132.9 213.9c9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9M496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m96 40c0-2.5.8-4.8 1.1-7.2c-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4c-54-42.9-99.2-116.7-99.2-212"></svg:path>`,
})
export class FaSolidUserShieldIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserSlashIcon],svg[fa-solid-user-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128C448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3M96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4"></svg:path>`,
})
export class FaSolidUserSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserTagIcon],svg[fa-solid-user-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m630.6 364.9l-90.3-90.2c-12-12-28.3-18.7-45.3-18.7h-79.3c-17.7 0-32 14.3-32 32v79.2c0 17 6.7 33.2 18.7 45.2l90.3 90.2c12.5 12.5 32.8 12.5 45.3 0l92.5-92.5c12.6-12.5 12.6-32.7.1-45.2m-182.8-21c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24m-223.8-88c70.7 0 128-57.3 128-128C352 57.3 294.7 0 224 0S96 57.3 96 128c0 70.6 57.3 127.9 128 127.9m127.8 111.2V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 287.9 0 348.1 0 422.3v41.6c0 26.5 21.5 48 48 48h352c15.5 0 29.1-7.5 37.9-18.9l-58-58c-18.1-18.1-28.1-42.2-28.1-67.9"></svg:path>`,
})
export class FaSolidUserTagIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserTieIcon],svg[fa-solid-user-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m95.8 32.6L272 480l-32-136l32-56h-96l32 56l-32 136l-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8"></svg:path>`,
})
export class FaSolidUserTieIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUserTimesIcon],svg[fa-solid-user-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6l-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6l45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"></svg:path>`,
})
export class FaSolidUserTimesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUsersIcon],svg[fa-solid-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4"></svg:path>`,
})
export class FaSolidUsersIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUsersCogIcon],svg[fa-solid-users-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5c-6.7-21.6-18.2-41.2-33.2-57.4c-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1c-22.3-5-45-4.8-66.2 0c-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4c-15 16.2-26.5 35.8-33.2 57.4c-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5c6.7 21.6 18.2 41.1 33.2 57.4c2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1c22.3 5 45 4.8 66.2 0c3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4c15-16.2 26.5-35.8 33.2-57.4c1-3.3-.4-6.8-3.3-8.5zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5s48.5 21.8 48.5 48.5s-21.7 48.5-48.5 48.5M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m224 32c1.9 0 3.7-.5 5.6-.6c8.3-21.7 20.5-42.1 36.3-59.2c7.4-8 17.9-12.6 28.9-12.6c6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4c7-14.6 11.2-30.8 11.2-48c0-61.9-50.1-112-112-112S208 82.1 208 144s50.1 112 112 112m105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9c-8.2 4.8-15.3 9.8-27.5 9.8c-10.9 0-21.4-4.6-28.9-12.6c-18.3-19.8-32.3-43.9-40.2-69.6c-10.7-34.5 24.9-49.7 25.8-50.3q-.15-3.9 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1c-3.3.2-6.5.6-9.8.6c-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4"></svg:path>`,
})
export class FaSolidUsersCogIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUsersSlashIcon],svg[fa-solid-users-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m132.65 212.32l-96.44-74.54A63.4 63.4 0 0 0 32 160a63.84 63.84 0 0 0 100.65 52.32m40.44 62.28A63.8 63.8 0 0 0 128 256H64a64.06 64.06 0 0 0-64 64v32a32 32 0 0 0 32 32h65.91a146.62 146.62 0 0 1 75.18-109.4M544 224a64 64 0 1 0-64-64a64.06 64.06 0 0 0 64 64m-43.44 131.11a114.24 114.24 0 0 0-84.47-65.28L361 247.23c41.46-16.3 71-55.92 71-103.23A111.93 111.93 0 0 0 320 32c-57.14 0-103.69 42.83-110.6 98.08L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.35 454.72a16 16 0 0 0 22.47-2.81l19.64-25.27a16 16 0 0 0-2.81-22.45ZM128 403.21V432a48 48 0 0 0 48 48h288a47.5 47.5 0 0 0 12.57-1.87L232 289.13c-58.26 5.7-104 54.29-104 114.08M576 256h-64a63.8 63.8 0 0 0-45.09 18.6A146.29 146.29 0 0 1 542 384h66a32 32 0 0 0 32-32v-32a64.06 64.06 0 0 0-64-64"></svg:path>`,
})
export class FaSolidUsersSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUtensilSpoonIcon],svg[fa-solid-utensil-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5c-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8c63-62.9 83.6-172.8 28.5-227.8"></svg:path>`,
})
export class FaSolidUtensilSpoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidUtensilsIcon],svg[fa-solid-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8c0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144C0 109.6 15.3 19.9 16.1 15.2C19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0c1.4-25.3 7.9-139.2 8-141.8c3.3-20.8 44.7-20.8 47.9 0c.2 2.7 6.6 116.5 8 141.8c.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1m119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24c-82.5 0-221.4 178.5-64.9 300.9"></svg:path>`,
})
export class FaSolidUtensilsIcon {
  readonly viewBox = input("0 0 416 512")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidValueAbsoluteIcon],svg[fa-solid-value-absolute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 32H16C7.16 32 0 39.16 0 48v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zm448 0h-32c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16zM377.3 150.87l-16.17-16.17c-8.93-8.93-23.41-8.93-32.35 0L256 207.48l-72.78-72.78c-8.93-8.93-23.41-8.93-32.35 0l-16.17 16.17c-8.93 8.93-8.93 23.41 0 32.35L207.48 256l-72.78 72.78c-8.93 8.93-8.93 23.41 0 32.35l16.17 16.17c8.93 8.93 23.41 8.93 32.35 0L256 304.52l72.78 72.78c8.93 8.93 23.41 8.93 32.35 0l16.17-16.17c8.93-8.93 8.93-23.41 0-32.35L304.52 256l72.78-72.78c8.93-8.93 8.93-23.42 0-32.35z" fill="currentColor"></svg:path>`,
})
export class FaSolidValueAbsoluteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVectorSquareIcon],svg[fa-solid-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32m-96-64h32v32h-32zM64 64h32v32H64zm32 384H64v-32h32zm352 0h-32v-32h32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32z"></svg:path>`,
})
export class FaSolidVectorSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVenusIcon],svg[fa-solid-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4m-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80"></svg:path>`,
})
export class FaSolidVenusIcon {
  readonly viewBox = input("0 0 288 512")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVenusDoubleIcon],svg[fa-solid-venus-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4m-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80s-80-35.9-80-80m336 140.4V368h36c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-36v36c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-36h-36c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h36v-51.6c-21.2-4.8-40.6-14.3-57.2-27.3c14-16.7 25-36 32.1-57.1c14.5 14.8 34.7 24 57.1 24c44.1 0 80-35.9 80-80s-35.9-80-80-80c-22.3 0-42.6 9.2-57.1 24c-7.1-21.1-18-40.4-32.1-57.1C303.4 43.6 334.3 32 368 32c79.5 0 144 64.5 144 144c0 68.5-47.9 125.9-112 140.4"></svg:path>`,
})
export class FaSolidVenusDoubleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVenusMarsIcon],svg[fa-solid-venus-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M564 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9l-48.7 48.7C422.5 72.1 396.2 64 368 64c-33.7 0-64.6 11.6-89.2 30.9c14 16.7 25 36 32.1 57.1c14.5-14.8 34.7-24 57.1-24c44.1 0 80 35.9 80 80s-35.9 80-80 80c-22.3 0-42.6-9.2-57.1-24c-7.1 21.1-18 40.4-32.1 57.1c24.5 19.4 55.5 30.9 89.2 30.9c79.5 0 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l48.7-48.7l16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5c6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12M144 64C64.5 64 0 128.5 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.6 112-71.9 112-140.4c0-79.5-64.5-144-144-144m0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class FaSolidVenusMarsIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVestIcon],svg[fa-solid-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M437.252 239.877L384 160V32a32 32 0 0 0-32-32h-32a24 24 0 0 0-13.312 4.031l-25 16.672a103.79 103.79 0 0 1-115.376 0l-25-16.672A24 24 0 0 0 128 0H96a32 32 0 0 0-32 32v128l-53.252 79.877A64 64 0 0 0 0 275.377V480a32 32 0 0 0 32 32h160V288a32 32 0 0 1 1.643-10.119l13.492-40.481l-56.947-170.836A151.5 151.5 0 0 0 224 86.234a151.55 151.55 0 0 0 73.812-19.672L224 288v224h192a32 32 0 0 0 32-32V275.377a64 64 0 0 0-10.748-35.5m-305.94 131.435l-48 48a16 16 0 0 1-22.624-22.624l48-48a16 16 0 0 1 22.624 22.624m256 48a15.99 15.99 0 0 1-22.624 0l-48-48a16 16 0 0 1 22.624-22.624l48 48a15.993 15.993 0 0 1 0 22.624"></svg:path>`,
})
export class FaSolidVestIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVestPatchesIcon],svg[fa-solid-vest-patches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M437.252 239.877L384 160V32a32 32 0 0 0-32-32h-32a24 24 0 0 0-13.312 4.031l-25 16.672a103.79 103.79 0 0 1-115.376 0l-25-16.672A24 24 0 0 0 128 0H96a32 32 0 0 0-32 32v128l-53.252 79.877A64 64 0 0 0 0 275.377V480a32 32 0 0 0 32 32h160V288a32 32 0 0 1 1.643-10.119l13.492-40.481l-56.947-170.839A151.6 151.6 0 0 0 224 86.234a151.57 151.57 0 0 0 73.811-19.668L224 288v224h192a32 32 0 0 0 32-32V275.377a64 64 0 0 0-10.748-35.5M63.5 272.484a12.01 12.01 0 0 1 17-16.968l15.5 15.5l15.5-15.5a12.01 12.01 0 0 1 17 16.968L112.984 288l15.516 15.516a12.01 12.01 0 0 1-17 16.968l-15.5-15.5l-15.5 15.5a12.01 12.01 0 0 1-17-16.968L79.016 288ZM96 456a40 40 0 1 1 40-40a40 40 0 0 1-40 40m263.227-120.215L310.7 336a6.67 6.67 0 0 1-6.7-6.7l.215-48.574A24.987 24.987 0 0 1 331.43 256.1c12.789 1.162 22.129 12.619 22.056 25.419l-.037 5.057l5.051-.037c12.826-.035 24.236 9.275 25.4 22.076a24.95 24.95 0 0 1-24.673 27.17"></svg:path>`,
})
export class FaSolidVestPatchesIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVialIcon],svg[fa-solid-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5c20.6 24 49.5 36 78.4 35.9c26.4 0 52.8-10 72.9-30.1l246.3-245.7l11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2M318 256H161l148-147.7l78.5 78.3z"></svg:path>`,
})
export class FaSolidVialIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVialsIcon],svg[fa-solid-vials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 64h24v240c0 44.1 35.9 80 80 80s80-35.9 80-80V64h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m72 0h64v96h-64zm480 384H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M360 64h24v240c0 44.1 35.9 80 80 80s80-35.9 80-80V64h24c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m72 0h64v96h-64z"></svg:path>`,
})
export class FaSolidVialsIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVideoIcon],svg[fa-solid-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8m189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8"></svg:path>`,
})
export class FaSolidVideoIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVideoSlashIcon],svg[fa-solid-video-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82L416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4M32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7z"></svg:path>`,
})
export class FaSolidVideoSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidViharaIcon],svg[fa-solid-vihara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M632.88 400.71L544 352v-64l55.16-17.69c11.79-5.9 11.79-22.72 0-28.62L480 192v-64l27.31-16.3c7.72-7.72 5.61-20.74-4.16-25.62L320 0L136.85 86.07c-9.77 4.88-11.88 17.9-4.16 25.62L160 128v64L40.84 241.69c-11.79 5.9-11.79 22.72 0 28.62L96 288v64L7.12 400.71c-5.42 3.62-7.7 9.63-7 15.29c.62 5.01 3.57 9.75 8.72 12.33L64 448v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h160v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h160v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48l55.15-19.67c5.16-2.58 8.1-7.32 8.72-12.33c.71-5.67-1.57-11.68-6.99-15.29M224 128h192v64H224zm-64 224v-64h320v64z"></svg:path>`,
})
export class FaSolidViharaIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVirusIcon],svg[fa-solid-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.55 227.55H462c-50.68 0-76.07-61.27-40.23-97.11L437 115.19A28.44 28.44 0 0 0 396.8 75l-15.24 15.22c-35.84 35.83-97.11 10.45-97.11-40.23V28.44a28.45 28.45 0 0 0-56.9 0V50c0 50.68-61.27 76.06-97.11 40.23L115.2 75A28.44 28.44 0 0 0 75 115.19l15.25 15.25c35.84 35.84 10.45 97.11-40.23 97.11H28.45a28.45 28.45 0 1 0 0 56.89H50c50.68 0 76.07 61.28 40.23 97.12L75 396.8a28.45 28.45 0 0 0 40.2 40.2l15.24-15.25c35.84-35.84 97.11-10.45 97.11 40.23v21.54a28.45 28.45 0 0 0 56.9 0V462c0-50.68 61.27-76.07 97.11-40.23L396.8 437a28.45 28.45 0 0 0 40.2-40.2l-15.25-15.24c-35.84-35.84-10.45-97.12 40.23-97.12h21.54a28.45 28.45 0 1 0 0-56.89ZM224 272a48 48 0 1 1 48-48a48 48 0 0 1-48 48m80 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class FaSolidVirusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVirusSlashIcon],svg[fa-solid-virus-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 227.6H92.4C76.7 227.6 64 240.3 64 256s12.7 28.4 28.4 28.4H114c50.7 0 76.1 61.3 40.2 97.1L139 396.8c-11.5 10.7-12.2 28.7-1.6 40.2s28.7 12.2 40.2 1.6c.5-.5 1.1-1 1.6-1.6l15.2-15.2c35.8-35.8 97.1-10.5 97.1 40.2v21.5c0 15.7 12.8 28.4 28.5 28.4s28.4-12.7 28.4-28.4V462c0-26.6 17-45.9 38.2-53.4l-244.5-189c-8.4 5.1-18.2 7.9-28.1 8m503 278.2l19.6-25.3c5.4-7 4.2-17-2.8-22.5L470.6 332c4.2-25.4 24.9-47.5 55.4-47.5h21.5c15.7 0 28.4-12.7 28.4-28.4s-12.7-28.4-28.4-28.4H526c-50.7 0-76.1-61.3-40.2-97.1l15.2-15.3c10.7-11.5 10-29.5-1.6-40.2c-10.9-10.1-27.7-10.1-38.6 0l-15.2 15.2c-35.8 35.8-97.1 10.5-97.1-40.2V28.5C348.4 12.7 335.7 0 320 0s-28.4 12.7-28.4 28.4V50c0 50.7-61.3 76.1-97.1 40.2L179.2 75c-11.1-11.1-29.4-10.6-40.5.5L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.5c-5.4 7-4.2 17 2.8 22.5l588.4 454.7c6.9 5.4 17 4.1 22.4-2.9M335.4 227.5l-62.9-48.6c4.9-1.8 10.2-2.8 15.4-2.9c26.5 0 48 21.5 48 48c.1 1.2-.4 2.3-.5 3.5"></svg:path>`,
})
export class FaSolidVirusSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVirusesIcon],svg[fa-solid-viruses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 352h-12.12c-28.51 0-42.79-34.47-22.63-54.63l8.58-8.57a16 16 0 1 0-22.63-22.63l-8.57 8.58c-20.16 20.16-54.63 5.88-54.63-22.63V240a16 16 0 0 0-32 0v12.12c0 28.51-34.47 42.79-54.63 22.63l-8.57-8.58a16 16 0 0 0-22.63 22.63l8.58 8.57c20.16 20.16 5.88 54.63-22.63 54.63H368a16 16 0 0 0 0 32h12.12c28.51 0 42.79 34.47 22.63 54.63l-8.58 8.57a16 16 0 1 0 22.63 22.63l8.57-8.58c20.16-20.16 54.63-5.88 54.63 22.63V496a16 16 0 0 0 32 0v-12.12c0-28.51 34.47-42.79 54.63-22.63l8.57 8.58a16 16 0 1 0 22.63-22.63l-8.58-8.57c-20.16-20.16-5.88-54.63 22.63-54.63H624a16 16 0 0 0 0-32m-144 32a32 32 0 1 1 32-32a32 32 0 0 1-32 32M346.51 213.33h16.16a21.33 21.33 0 0 0 0-42.66h-16.16c-38 0-57.05-46-30.17-72.84l11.43-11.44a21.33 21.33 0 0 0-30.17-30.16l-11.43 11.43c-26.88 26.88-72.84 7.85-72.84-30.17V21.33a21.33 21.33 0 0 0-42.66 0v16.16c0 38-46 57.05-72.84 30.17L86.4 56.23a21.33 21.33 0 0 0-30.17 30.16l11.43 11.44c26.88 26.88 7.85 72.84-30.17 72.84H21.33a21.33 21.33 0 0 0 0 42.66h16.16c38 0 57.05 46 30.17 72.84L56.23 297.6a21.33 21.33 0 1 0 30.17 30.17l11.43-11.43c26.88-26.88 72.84-7.85 72.84 30.17v16.16a21.33 21.33 0 0 0 42.66 0v-16.16c0-38 46-57.05 72.84-30.17l11.43 11.43a21.33 21.33 0 0 0 30.17-30.17l-11.43-11.43c-26.88-26.88-7.85-72.84 30.17-72.84M160 192a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80 32a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class FaSolidVirusesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVoicemailIcon],svg[fa-solid-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 128a144 144 0 0 0-119.74 224H263.74A144 144 0 1 0 144 416h352a144 144 0 0 0 0-288M64 272a80 80 0 1 1 80 80a80 80 0 0 1-80-80m432 80a80 80 0 1 1 80-80a80 80 0 0 1-80 80"></svg:path>`,
})
export class FaSolidVoicemailIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolleyballBallIcon],svg[fa-solid-volleyball-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.39 243.48a285.6 285.6 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1a333.87 333.87 0 0 1 146.1-192.2m-36.9-134.4a284.2 284.2 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2c33.4-83.1 98.4-152 182.4-191.5m187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4c-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18m-124.7 9.5a286.3 286.3 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9a336 336 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9m-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1m180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.6 286.6 0 0 0 89.7-14.2c0-2 .3-4 .3-6c0-107.8-68.7-199.1-164.6-233.4"></svg:path>`,
})
export class FaSolidVolleyballBallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeIcon],svg[fa-solid-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.53 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" fill="currentColor"></svg:path>`,
})
export class FaSolidVolumeIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeDownIcon],svg[fa-solid-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98m123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45c-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257s-8.02 27.72-20.92 34.81c-11.61 6.41-15.84 21-9.45 32.61c6.43 11.66 21.05 15.8 32.61 9.45c28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87"></svg:path>`,
})
export class FaSolidVolumeDownIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeMuteIcon],svg[fa-solid-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97M461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82z"></svg:path>`,
})
export class FaSolidVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeOffIcon],svg[fa-solid-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17"></svg:path>`,
})
export class FaSolidVolumeOffIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeSlashIcon],svg[fa-solid-volume-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M633.82 458.1l-69-53.33C592.42 360.8 608 309.68 608 256c0-95.33-47.73-183.58-127.65-236.03-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 42.78-11.96 83.59-33.22 119.06l-38.12-29.46C503.49 318.68 512 288.06 512 256c0-63.09-32.06-122.09-85.77-156.16-11.19-7.09-26.03-3.8-33.12 7.41-7.09 11.2-3.78 26.03 7.41 33.13C440.27 165.59 464 209.44 464 256c0 21.21-5.03 41.57-14.2 59.88l-39.56-30.58c3.38-9.35 5.76-19.07 5.76-29.3 0-31.88-17.53-61.33-45.77-76.88-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61 11.76 6.46 19.12 18.18 20.4 31.06L288 190.82V88.02c0-21.46-25.96-31.98-40.97-16.97l-49.71 49.7L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM32 184v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V352.6L43.76 163.84C36.86 168.05 32 175.32 32 184z" fill="currentColor"></svg:path>`,
})
export class FaSolidVolumeSlashIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVolumeUpIcon],svg[fa-solid-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97m233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95c-7.34 11.17-4.22 26.18 6.95 33.51c66.27 43.49 105.82 116.6 105.82 195.58S488.06 408.1 421.79 451.59c-11.17 7.32-14.29 22.34-6.95 33.5c7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97M480 256c0-63.53-32.06-121.94-85.77-156.24c-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36c6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256m-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45c-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81c-11.61 6.41-15.84 21-9.45 32.61c6.43 11.66 21.05 15.8 32.61 9.45c28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86"></svg:path>`,
})
export class FaSolidVolumeUpIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVoteYeaIcon],svg[fa-solid-vote-yea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-96 64V64.3c0-17.9-14.5-32.3-32.3-32.3H160.4C142.5 32 128 46.5 128 64.3V384zM211.2 202l25.5-25.3c4.2-4.2 11-4.2 15.2.1l41.3 41.6l95.2-94.4c4.2-4.2 11-4.2 15.2.1l25.3 25.5c4.2 4.2 4.2 11-.1 15.2L300.5 292c-4.2 4.2-11 4.2-15.2-.1l-74.1-74.7c-4.3-4.2-4.2-11 0-15.2"></svg:path>`,
})
export class FaSolidVoteYeaIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidVrCardboardIcon],svg[fa-solid-vr-cardboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h160.22c25.19 0 48.03-14.77 58.36-37.74l27.74-61.64C286.21 331.08 302.35 320 320 320s33.79 11.08 41.68 28.62l27.74 61.64C399.75 433.23 422.6 448 447.78 448H608c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32M160 304c-35.35 0-64-28.65-64-64s28.65-64 64-64s64 28.65 64 64s-28.65 64-64 64m320 0c-35.35 0-64-28.65-64-64s28.65-64 64-64s64 28.65 64 64s-28.65 64-64 64"></svg:path>`,
})
export class FaSolidVrCardboardIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWalkingIcon],svg[fa-solid-walking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48s21.5 48 48 48m94.5 149.1l-23.3-11.8l-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9c-36-.1-55.9 10.1-93.3 25.2c-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9c15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8l-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7l17.2-68.7l5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3c7.7-15.7 1.4-35.1-14.3-43M73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7z"></svg:path>`,
})
export class FaSolidWalkingIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWalletIcon],svg[fa-solid-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16c0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48M416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32"></svg:path>`,
})
export class FaSolidWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWarehouseIcon],svg[fa-solid-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3"></svg:path>`,
})
export class FaSolidWarehouseIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWaterIcon],svg[fa-solid-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9c-14.1-11.1-34.2-11.3-48.2 0c-37.9 30.4-107.2 30.4-145.7-1.5c-13.5-11.2-33-9.1-46.7 1.8c-38 30.1-106.9 30-145.2-1.7c-13.5-11.2-33.3-8.9-47.1 2c-15.5 12.2-36 20.1-57.7 22.4c-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16c28.8-2.5 56.1-11.4 79.4-25.9c56.5 34.6 137 34.1 192 0c56.5 34.6 137 34.1 192 0c23.3 14.2 50.9 23.3 79.1 25.8c9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3m0-144c-21.5-2.4-42.1-10.5-57.9-22.9c-14.1-11.1-34.2-11.3-48.2 0c-37.9 30.4-107.2 30.4-145.7-1.5c-13.5-11.2-33-9.1-46.7 1.8c-38 30.1-106.9 30-145.2-1.7c-13.5-11.2-33.3-8.9-47.1 2c-15.5 12.2-36 20.1-57.7 22.4c-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16c28.8-2.5 56.1-11.4 79.4-25.9c56.5 34.6 137 34.1 192 0c56.5 34.6 137 34.1 192 0c23.3 14.2 50.9 23.3 79.1 25.8c9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3m0-144C540.6 93.4 520 85.4 504.2 73C490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5c-13.5-11.2-33-9.1-46.7 1.8c-38 30.1-106.9 30-145.2-1.7c-13.5-11.2-33.3-8.9-47.1 2c-15.5 12.2-36 20.1-57.7 22.4c-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16c28.8-2.5 56.1-11.4 79.4-25.9c56.5 34.6 137 34.1 192 0c56.5 34.6 137 34.1 192 0c23.3 14.2 50.9 23.3 79.1 25.8c9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3"></svg:path>`,
})
export class FaSolidWaterIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSolidWaveSquareIcon],svg[fa-solid-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36"></svg:path>`,
})
export class FaSolidWaveSquareIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

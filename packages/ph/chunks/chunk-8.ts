import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderUserFillIcon],svg[ph-folder-user-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10a40 40 0 0 1 17.11-23.33a32 32 0 1 1 45.24 0a40 40 0 0 1 17.11 23.27M232 88v32a8 8 0 0 1-16 0V88H40v112h80.56a8 8 0 0 1 0 16H39.38A15.4 15.4 0 0 1 24 200.62V56a16 16 0 0 1 16-16h52.69A15.86 15.86 0 0 1 104 44.69L131.31 72H216a16 16 0 0 1 16 16M108.69 72l-16-16H40v16Z"></svg:path>`,
})
export class PhFolderUserFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserLightIcon],svg[ph-folder-user-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.28 199a30 30 0 1 0-38.56 0a38.1 38.1 0 0 0-18.52 23.5a6 6 0 0 0 4.26 7.34a6.3 6.3 0 0 0 1.54.2a6 6 0 0 0 5.8-4.46C168.86 214 179.63 206 192 206s23.14 8 26.2 19.54a6 6 0 0 0 11.6-3.09A38.1 38.1 0 0 0 211.28 199M192 158a18 18 0 1 1-18 18a18 18 0 0 1 18-18m24-84h-85.52l-27.89-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.61A13.4 13.4 0 0 0 39.38 214h81.18a6 6 0 0 0 0-12H39.38a1.4 1.4 0 0 1-1.38-1.39V86h178a2 2 0 0 1 2 2v32a6 6 0 0 0 12 0V88a14 14 0 0 0-14-14M40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2"></svg:path>`,
})
export class PhFolderUserLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFolderUserThinIcon],svg[ph-folder-user-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.5 199.3a28 28 0 1 0-31 0a36.24 36.24 0 0 0-20.37 23.7a4 4 0 0 0 2.84 4.89a3.7 3.7 0 0 0 1 .14a4 4 0 0 0 3.87-3c3.29-12.38 14.85-21 28.13-21s24.84 8.65 28.13 21a4 4 0 1 0 7.73-2.05a36.22 36.22 0 0 0-20.33-23.68M172 176a20 20 0 1 1 20 20a20 20 0 0 1-20-20m44-100h-86.34l-28.49-28.49A12 12 0 0 0 92.69 44H40a12 12 0 0 0-12 12v144.61A11.4 11.4 0 0 0 39.38 212h81.18a4 4 0 0 0 0-8H39.38a3.39 3.39 0 0 1-3.38-3.39V84h180a4 4 0 0 1 4 4v32a4 4 0 0 0 8 0V88a12 12 0 0 0-12-12M40 52h52.69a4 4 0 0 1 2.82 1.17L118.34 76H36V56a4 4 0 0 1 4-4"></svg:path>`,
})
export class PhFolderUserThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersIcon],svg[ph-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"></svg:path>`,
})
export class PhFoldersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersBoldIcon],svg[ph-folders-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 56h-68l-26.67-20a20.12 20.12 0 0 0-12-4H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h152.89A19.13 19.13 0 0 0 208 204.89V184h20.89A19.13 19.13 0 0 0 248 164.89V76a20 20 0 0 0-20-20m-44 144H40V96h40l28.8 21.6a12 12 0 0 0 7.2 2.4h68Zm40-40h-16v-44a20 20 0 0 0-20-20h-68L93.33 76a20.12 20.12 0 0 0-12-4H80V56h40l28.8 21.6A12 12 0 0 0 156 80h68Z"></svg:path>`,
})
export class PhFoldersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersDuotoneIcon],svg[ph-folders-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"></svg:path></svg:g>`,
})
export class PhFoldersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersFillIcon],svg[ph-folders-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m0 104h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"></svg:path>`,
})
export class PhFoldersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersLightIcon],svg[ph-folders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 66h-70l-28.27-21.2a14 14 0 0 0-8.4-2.8H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h152.89A13.12 13.12 0 0 0 206 200.89V182h18.89A13.12 13.12 0 0 0 238 168.89V80a14 14 0 0 0-14-14m-30 134.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4a6 6 0 0 0 3.6 1.2h72a2 2 0 0 1 2 2Zm32-32a1.11 1.11 0 0 1-1.11 1.11H206v-58a14 14 0 0 0-14-14h-70L93.73 76.8a14 14 0 0 0-8.4-2.8H70V56a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 152 78h72a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhFoldersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFoldersThinIcon],svg[ph-folders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 68h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H72a12 12 0 0 0-12 12v20H40a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h152.89A11.12 11.12 0 0 0 204 200.89V180h20.89A11.12 11.12 0 0 0 236 168.89V80a12 12 0 0 0-12-12m-28 132.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4Zm32-32a3.12 3.12 0 0 1-3.11 3.11H204v-60a12 12 0 0 0-12-12h-70.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H68V56a4 4 0 0 1 4-4h45.33a4 4 0 0 1 2.4.8l29.87 22.4a4 4 0 0 0 2.4.8h72a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhFoldersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballIcon],svg[ph-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.37-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.6 206.6 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27m-61.61-14a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.87a188.6 188.6 0 0 1 2.7 36.22L163.21 40c1.4-.08 2.79-.1 4.24-.1ZM56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a188.6 188.6 0 0 1-2.7-36.22L92.78 216a188 188 0 0 1-36.22-2.7m124.3-32.44c-11.61 11.6-33.27 27.73-67.37 33.27l-71.62-71.62c5.54-34.1 21.67-55.76 33.27-67.37S108.4 47.4 142.5 41.86l71.63 71.63c-5.54 34.1-21.67 55.76-33.27 67.37m-15.22-90.5a8 8 0 0 1 0 11.31L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 0 1 11.3 0"></svg:path>`,
})
export class PhFootballIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballBoldIcon],svg[ph-football-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M233.06 53.18a37 37 0 0 0-30.24-30.24c-15.24-2.58-38.75-4.78-64.26-.61c-30.9 5.06-57 18.06-77.56 38.67s-33.59 46.68-38.65 77.58c-4.17 25.51-2 49 .61 64.26a37 37 0 0 0 30.24 30.24A209.4 209.4 0 0 0 87.9 236a184 184 0 0 0 29.54-2.33c30.9-5.06 57-18.06 77.58-38.65s33.59-46.68 38.65-77.58c4.17-25.51 1.97-49.02-.61-64.26m-23.66 4a192 192 0 0 1 2.6 25.88L172.93 44a191 191 0 0 1 25.88 2.64a13 13 0 0 1 10.59 10.55ZM46.6 198.81a192 192 0 0 1-2.6-25.87L83.06 212a192 192 0 0 1-25.87-2.63a13 13 0 0 1-10.59-10.56m131.45-20.76c-11 11-31.31 26.16-63.2 31.83l-68.73-68.73C51.79 109.26 67 88.93 78 78s31.3-26.16 63.2-31.83l68.73 68.73c-5.72 31.84-20.93 52.17-31.88 63.15m-13.56-69.57L159 114l5.52 5.51a12 12 0 0 1-17 17L142 131l-11 11l5.52 5.52a12 12 0 0 1-17 17L114 159l-5.52 5.52a12 12 0 0 1-17-17L97 142l-5.52-5.51a12 12 0 1 1 17-17L114 125l11-11l-5.52-5.52a12 12 0 1 1 17-17L142 97l5.52-5.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhFootballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballDuotoneIcon],svg[ph-football-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M222.5 110.56c-3.32 25.23-13 53-36 75.95s-50.72 32.67-75.95 36L33.5 145.44c3.32-25.23 13-53 36-75.95s50.72-32.67 76-36l77.06 77.06Z" opacity=".2"></svg:path><svg:path d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.37-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.6 206.6 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27m-61.61-14a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.87a188.6 188.6 0 0 1 2.7 36.22L163.21 40c1.4-.08 2.79-.1 4.24-.1ZM56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a188.6 188.6 0 0 1-2.7-36.22L92.78 216a188 188 0 0 1-36.22-2.7m124.3-32.44c-11.61 11.6-33.27 27.73-67.37 33.27l-71.62-71.62c5.54-34.1 21.67-55.76 33.27-67.37S108.4 47.4 142.5 41.86l71.63 71.63c-5.54 34.1-21.67 55.76-33.27 67.37m-15.22-90.5a8 8 0 0 1 0 11.31L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 0 1 11.3 0"></svg:path></svg:g>`,
})
export class PhFootballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballFillIcon],svg[ph-football-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.38-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.6 206.6 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84c44.89-44.88 42.39-105.9 36.9-138.27M56.56 213.3a16.94 16.94 0 0 1-13.86-13.86a180.3 180.3 0 0 1-2.11-46.9l62.87 62.87a180.3 180.3 0 0 1-46.9-2.11m109.08-111.63L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34l12.68-12.7l-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35l14.34-14.34a8 8 0 1 1 11.31 11.31Zm49.77 1.79l-62.87-62.87c4.76-.44 9.72-.69 14.91-.69a192 192 0 0 1 32 2.8a16.94 16.94 0 0 1 13.85 13.86a180.3 180.3 0 0 1 2.11 46.9"></svg:path>`,
})
export class PhFootballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetIcon],svg[ph-football-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 164a12 12 0 1 1-12-12a12 12 0 0 1 12 12m136 12v32a16 16 0 0 1-16 16h-36a16.1 16.1 0 0 1-15.35-11.47L153.84 176h-21.93l3.56 12a5 5 0 0 1 .15.54A16 16 0 0 1 120 208H72.14a8 8 0 0 1-4.52-1.4A100 100 0 0 1 24 124c0-54.36 44.24-99.2 98.58-100A100 100 0 0 1 224 124v4a8 8 0 0 1-8 8h-57.29l7.09 24H216a16 16 0 0 1 16 16m-112 16l-15.45-52a5 5 0 0 1-.15-.54A16 16 0 0 1 120 120h87.91a84 84 0 0 0-85.11-80C77.16 40.64 40 78.31 40 124a84 84 0 0 0 34.67 68Zm29.13-32L142 136h-22l7.14 24ZM216 176h-45.48l9.48 32h36Z"></svg:path>`,
})
export class PhFootballHelmetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetBoldIcon],svg[ph-football-helmet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 156h-47.21l-4.73-16H216a12 12 0 0 0 12-12v-4A104 104 0 0 0 122.52 20C66 20.8 20 67.43 20 124a104 104 0 0 0 45.37 85.94a12 12 0 0 0 6.77 2.06H116a20 20 0 0 0 19.52-24.34q-.09-.41-.21-.81l-2-6.85h17.58l10 33.67A20.11 20.11 0 0 0 180 228h36a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20m-115.6-32.52a19.94 19.94 0 0 0-3.92 16.86q.09.41.21.81L110.61 188H76a80 80 0 0 1-32-64c0-43.48 35.39-79.36 78.86-80H124a80 80 0 0 1 79.61 72H116a19.94 19.94 0 0 0-15.6 7.48M126.14 156l-4.75-16H139l4.73 16ZM212 204h-29l-7.09-24H212Z"></svg:path>`,
})
export class PhFootballHelmetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetDuotoneIcon],svg[ph-football-helmet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m112.19 137.74l15.62 52.52A8 8 0 0 1 120 200H72.14A91.91 91.91 0 0 1 32 124c0-50 40.65-91.26 90.69-92A92 92 0 0 1 216 124v4h-96a8 8 0 0 0-7.81 9.74" opacity=".2"></svg:path><svg:path d="M96 164a12 12 0 1 1-12-12a12 12 0 0 1 12 12m136 12v32a16 16 0 0 1-16 16h-36a16.1 16.1 0 0 1-15.35-11.47L153.84 176h-21.93l3.56 12a5 5 0 0 1 .15.54A16 16 0 0 1 120 208H72.14a8 8 0 0 1-4.52-1.4A100 100 0 0 1 24 124c0-54.36 44.24-99.2 98.58-100A100 100 0 0 1 224 124v4a8 8 0 0 1-8 8h-57.29l7.09 24H216a16 16 0 0 1 16 16m-112-56h87.91a84 84 0 0 0-85.11-80C77.16 40.64 40 78.31 40 124a84 84 0 0 0 34.67 68H120l-15.45-52a5 5 0 0 1-.15-.54A16 16 0 0 1 120 120m29.11 40L142 136h-22l7.14 24ZM216 176h-45.48l9.48 32h36Z"></svg:path></svg:g>`,
})
export class PhFootballHelmetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetFillIcon],svg[ph-football-helmet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 160h-50.2l-7.09-24H216a8 8 0 0 0 8-8v-4A100 100 0 0 0 122.58 24C68.24 24.77 24 69.61 24 124a100 100 0 0 0 43.62 82.6a8 8 0 0 0 4.52 1.4H120a16 16 0 0 0 15.62-19.47a5 5 0 0 0-.15-.54l-3.56-12h21.93l10.79 36.53A16.1 16.1 0 0 0 180 224h36a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M84 176a12 12 0 1 1 12-12a12 12 0 0 1-12 12m43.16-16L120 136h22l7.09 24ZM216 208h-36l-9.46-32H216Z"></svg:path>`,
})
export class PhFootballHelmetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetLightIcon],svg[ph-football-helmet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 164a10 10 0 1 1-10-10a10 10 0 0 1 10 10m136 12v32a14 14 0 0 1-14 14h-36a14.1 14.1 0 0 1-13.43-10l-11.22-38h-26.1l4.33 14.56c0 .13.07.27.1.4A14 14 0 0 1 120 206H72.14a6 6 0 0 1-3.39-1A98 98 0 0 1 26 124c0-53.27 43.35-97.22 96.61-98A98 98 0 0 1 222 124v4a6 6 0 0 1-6 6h-60l8.27 28H216a14 14 0 0 1 14 14m-108 15.71l-15.54-52.26c0-.14-.07-.28-.1-.41A14 14 0 0 1 120 122h90a86 86 0 0 0-86-84h-1.24C76 38.66 38 77.22 38 124a86 86 0 0 0 36 70h46a2 2 0 0 0 2-2.29M151.79 162l-8.27-28H120a2 2 0 0 0-2 2.29l7.66 25.71ZM218 176a2 2 0 0 0-2-2h-48.15l10.21 34.57A2 2 0 0 0 180 210h36a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhFootballHelmetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballHelmetThinIcon],svg[ph-football-helmet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 164a8 8 0 1 1-8-8a8 8 0 0 1 8 8m136 12v32a12 12 0 0 1-12 12h-36a12.08 12.08 0 0 1-11.51-8.6L156.83 172h-30.28l5.09 17.13a2 2 0 0 1 .07.27A12 12 0 0 1 120 204H72.14a4 4 0 0 1-2.26-.7A96 96 0 0 1 28 124c0-52.19 42.47-95.23 94.63-96A96 96 0 0 1 220 124v4a4 4 0 0 1-4 4h-62.65l9.46 32H216a12 12 0 0 1 12 12m-104.07 15.25l-15.57-52.37a3 3 0 0 1-.07-.28A12 12 0 0 1 120 124h92a88 88 0 0 0-89.25-88C74.93 36.67 36 76.13 36 124a88 88 0 0 0 37.39 72H120a4 4 0 0 0 3.93-4.75M154.46 164L145 132h-25a4 4 0 0 0-3.93 4.75l8.1 27.25ZM220 176a4 4 0 0 0-4-4h-50.83l11 37.13A4 4 0 0 0 180 212h36a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhFootballHelmetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballLightIcon],svg[ph-football-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 54.22a30.92 30.92 0 0 0-25.31-25.31c-32-5.42-92.28-7.91-136.53 36.34S23.49 169.78 28.91 201.78a30.92 30.92 0 0 0 25.31 25.31a205 205 0 0 0 34 2.91c31.69 0 71.12-7.88 102.49-39.25C235 146.5 232.51 86.22 227.09 54.22M167.44 37.9a194 194 0 0 1 32.33 2.83a18.93 18.93 0 0 1 15.5 15.5a187 187 0 0 1 2.6 41.21l-59.31-59.3c2.89-.14 5.84-.24 8.88-.24M56.23 215.27a18.93 18.93 0 0 1-15.5-15.5a187 187 0 0 1-2.6-41.21l59.31 59.31a187 187 0 0 1-41.21-2.6m126-33c-11.92 11.91-34.24 28.54-69.46 34l-73.05-73.08c5.47-35.22 22.1-57.54 34-69.46s34.28-28.53 69.48-34l73.08 73.08c-5.47 35.19-22.1 57.54-34.01 69.46Zm-18.01-90.49a6 6 0 0 1 0 8.48L148.48 116l7.75 7.75a6 6 0 1 1-8.48 8.48l-7.75-7.74L124.49 140l7.75 7.76a6 6 0 1 1-8.48 8.48l-7.76-7.76l-15.75 15.74a6 6 0 1 1-8.48-8.48L107.52 140l-7.75-7.75a6 6 0 1 1 8.48-8.48l7.76 7.75l15.5-15.5l-7.75-7.76a6 6 0 1 1 8.48-8.48l7.75 7.75l15.75-15.74a6 6 0 0 1 8.48-.01"></svg:path>`,
})
export class PhFootballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootballThinIcon],svg[ph-football-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.12 54.56a28.94 28.94 0 0 0-23.68-23.68c-31.61-5.36-91.16-7.83-134.78 35.78S25.52 169.83 30.88 201.44a28.94 28.94 0 0 0 23.68 23.68A203.3 203.3 0 0 0 88.25 228c31.3 0 70.19-7.77 101.09-38.66C233 145.72 230.48 86.17 225.12 54.56m-57.7-18.66a196.3 196.3 0 0 1 32.69 2.86a21 21 0 0 1 17.13 17.13a185.3 185.3 0 0 1 2.32 46.11L154 36.43c4.33-.34 8.79-.53 13.42-.53M55.89 217.24a21 21 0 0 1-17.13-17.13A185.3 185.3 0 0 1 36.44 154L102 219.56a185.3 185.3 0 0 1-46.11-2.32m127.79-33.56c-12.22 12.23-35.23 29.34-71.56 34.73l-74.53-74.53c5.41-36.33 22.5-59.34 34.73-71.56S107.56 43 143.89 37.6l74.52 74.52c-5.41 36.33-22.5 59.34-34.73 71.56m-20.87-90.49a4 4 0 0 1 0 5.65L145.65 116l9.17 9.16a4 4 0 0 1-5.66 5.66l-9.16-9.16L121.66 140l9.17 9.17a4 4 0 0 1-5.66 5.66l-9.17-9.18l-17.16 17.16a4 4 0 1 1-5.65-5.65L110.35 140l-9.17-9.16a4 4 0 1 1 5.66-5.66l9.17 9.17L134.34 116l-9.17-9.17a4 4 0 1 1 5.66-5.66l9.16 9.17l17.17-17.16a4 4 0 0 1 5.65.01"></svg:path>`,
})
export class PhFootballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsIcon],svg[ph-footprints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.06 184H152a8 8 0 0 0-8 8v12a36 36 0 0 0 72.05 0v-12a8 8 0 0 0-7.99-8m-8 20a20 20 0 0 1-40 0v-4h40ZM104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8m-8 20a20 20 0 0 1-40 0v-4h40ZM76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m21.15 112H54.78c-11.4-18.1-7.21-52.7 3.89-76.11C65.14 38.22 72.17 32 76 32s10.82 6.22 17.3 19.89c11.06 23.41 15.25 58.01 3.85 76.11m57.61 40h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8.05 8.05 0 0 0 6.24 3m8-92.11C169.22 62.22 176.25 56 180 56s10.82 6.22 17.29 19.89c11.1 23.41 15.29 58 3.9 76.11h-42.34c-11.4-18.1-7.21-52.7 3.89-76.11Z"></svg:path>`,
})
export class PhFootprintsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsBoldIcon],svg[ph-footprints-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 180h-56a12 12 0 0 0-12 12v12a40 40 0 0 0 80 0v-12a12 12 0 0 0-12-12m-28 40a16 16 0 0 1-16-16h32a16 16 0 0 1-16 16m-84-64H44a12 12 0 0 0-12 12v12a40 40 0 0 0 80 0v-12a12 12 0 0 0-12-12m-28 40a16 16 0 0 1-16-16h32a16 16 0 0 1-16 16m0-184c-14.06 0-27.7 12.33-37.41 33.83c-12.45 27.57-16.78 67.52 3.14 90.11a12 12 0 0 0 9 4.06h50.52a12 12 0 0 0 9-4.06c19.92-22.59 15.59-62.54 3.14-90.11C99.68 24.33 86 12 72 12m19.07 104H52.9c-6.71-12.13-7.67-35.45 3.56-60.3C63.16 40.85 70.28 36 72 36s8.82 4.85 15.53 19.7c11.2 24.85 10.24 48.17 3.54 60.3m67.68 48h50.54a12 12 0 0 0 9-4.06c19.92-22.59 15.59-62.54 3.14-90.11C211.72 48.33 198.08 36 184 36s-27.7 12.33-37.41 33.83c-12.45 27.57-16.78 67.52 3.14 90.11a12 12 0 0 0 9.02 4.06m9.74-84.3C175.2 64.85 182.32 60 184 60s8.82 4.85 15.52 19.7c11.23 24.85 10.27 48.17 3.56 60.3h-38.15c-6.7-12.13-7.66-35.45 3.56-60.3"></svg:path>`,
})
export class PhFootprintsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsDuotoneIcon],svg[ph-footprints-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 192h56v12a28 28 0 0 1-56 0ZM48 180a28 28 0 0 0 56 0v-12H48ZM76 24c-24.52 0-51.46 80-25.26 112h50.52c26.2-32-.74-112-25.26-112m129.26 136c26.2-32-.74-112-25.26-112s-51.46 80-25.26 112Z" opacity=".2"></svg:path><svg:path d="M208.06 184H152a8 8 0 0 0-8 8v12a36 36 0 0 0 72.05 0v-12a8 8 0 0 0-7.99-8m-8 20a20 20 0 0 1-40 0v-4h40ZM104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8m-8 20a20 20 0 0 1-40 0v-4h40ZM76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m21.15 112H54.78c-11.4-18.1-7.21-52.7 3.89-76.11C65.14 38.22 72.17 32 76 32s10.82 6.22 17.3 19.89c11.06 23.41 15.25 58.01 3.85 76.11m57.61 40h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.24 3m8-92.11C169.22 62.22 176.25 56 180 56s10.81 6.22 17.29 19.89c11.1 23.41 15.29 58 3.89 76.11h-42.33c-11.4-18.1-7.21-52.7 3.89-76.11Z"></svg:path></svg:g>`,
})
export class PhFootprintsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsFillIcon],svg[ph-footprints-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.06 192v12a36 36 0 0 1-72.06 0v-12a8 8 0 0 1 8-8h56a8 8 0 0 1 8.06 8M104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8M76 16c-11.64 0-22.93 10.31-31.8 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16m78.8 152h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.24 3Z"></svg:path>`,
})
export class PhFootprintsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsLightIcon],svg[ph-footprints-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 162H48a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6m-6 18a22 22 0 0 1-44 0v-6h44ZM76 18c-10.8 0-21.44 9.91-30 27.9c-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.65 2.2h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C97.41 27.91 86.77 18 76 18m22.23 112H53.74c-10.09-15.18-11.69-47.65 3.14-79C64.24 35.51 71.77 30 76 30s11.75 5.51 19.1 21c14.82 31.35 13.22 63.82 3.13 79M208 186h-56a6 6 0 0 0-6 6v12a34 34 0 0 0 68 0v-12a6 6 0 0 0-6-6m-6 18a22 22 0 0 1-44 0v-6h44Zm-47.27-38h50.53a6 6 0 0 0 4.65-2.2c18.32-22.37 13.69-65.08 0-93.9C201.44 51.91 190.8 42 180 42s-21.43 9.91-30 27.9c-13.66 28.82-18.29 71.53 0 93.9a6 6 0 0 0 4.75 2.2Zm6.17-91c7.35-15.53 14.88-21 19.1-21s11.74 5.51 19.1 21c14.83 31.31 13.23 63.78 3.14 79h-44.47c-10.09-15.18-11.69-47.65 3.15-79Z"></svg:path>`,
})
export class PhFootprintsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFootprintsThinIcon],svg[ph-footprints-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 188h-56a4 4 0 0 0-4 4v12a32 32 0 1 0 64 0v-12a4 4 0 0 0-4-4m-4 16a24 24 0 1 1-48 0v-8h48Zm-100-40H48a4 4 0 0 0-4 4v12a32 32 0 1 0 64 0v-12a4 4 0 0 0-4-4m-4 16a24 24 0 1 1-48 0v-8h48ZM76 20c-9.82 0-20.07 9.75-28.12 26.75c-13.39 28.27-18 70.05-.23 91.78a4 4 0 0 0 3.1 1.47h50.51a4 4 0 0 0 3.1-1.47c17.79-21.73 13.16-63.51-.23-91.78C96.08 29.75 85.83 20 76 20m23.3 112H52.71c-13.8-19-9.79-56.08 2.4-81.82C61.59 36.5 69.59 28 76 28s14.42 8.5 20.9 22.18C109.09 75.92 113.1 113 99.3 132m55.44 32h50.51a4 4 0 0 0 3.1-1.47c17.79-21.73 13.16-63.51-.23-91.78C200.07 53.75 189.82 44 180 44s-20.08 9.75-28.13 26.75c-13.39 28.27-18 70.05-.23 91.78a4 4 0 0 0 3.1 1.47m4.36-89.82C165.58 60.5 173.58 52 180 52s14.41 8.5 20.89 22.18c12.19 25.74 16.2 62.82 2.4 81.82H156.7c-13.8-19-9.79-56.08 2.4-81.82"></svg:path>`,
})
export class PhFootprintsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeIcon],svg[ph-fork-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 88V40a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m144-48v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-16 13.9c-32.17 24.57-38.47 84.42-39.7 106.1H200Zm-80.11-15.21a8 8 0 1 0-15.78 2.63L112 88.63a32 32 0 0 1-64 0l7.88-47.31a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z"></svg:path>`,
})
export class PhForkKnifeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeBoldIcon],svg[ph-fork-knife-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 88V40a12 12 0 0 1 24 0v48a12 12 0 0 1-24 0m152-48v184a12 12 0 0 1-24 0v-44h-44a12 12 0 0 1-12-12a273.2 273.2 0 0 1 7.33-57.82c10.09-41.76 29.43-69.85 55.94-81.18A12 12 0 0 1 220 40m-24 22.92C182.6 77 175 98 170.77 115.38a254.4 254.4 0 0 0-6.22 40.62H196ZM128 39a12 12 0 0 0-24 2l4 47.46a28 28 0 0 1-56 0L56 41a12 12 0 1 0-24-2l-4 48v1a52.1 52.1 0 0 0 40 50.59V224a12 12 0 0 0 24 0v-85.41A52.1 52.1 0 0 0 132 88v-1Z"></svg:path>`,
})
export class PhForkKnifeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeDuotoneIcon],svg[ph-fork-knife-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v128h-56s0-104 56-128" opacity=".2"></svg:path><svg:path d="M72 88V40a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m144-48v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-16 13.9c-32.17 24.57-38.47 84.42-39.7 106.1H200Zm-80.11-15.21a8 8 0 1 0-15.78 2.63L112 88.63a32 32 0 0 1-64 0l7.88-47.31a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z"></svg:path></svg:g>`,
})
export class PhForkKnifeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeFillIcon],svg[ph-fork-knife-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8a268.8 268.8 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40m-96.11-1.31a8 8 0 1 0-15.78 2.63L111.89 88H88V40a8 8 0 0 0-16 0v48H48.11l7.78-46.68a8 8 0 1 0-15.78-2.63l-8 48A8 8 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8 8 0 0 0-.11-1.31Z"></svg:path>`,
})
export class PhForkKnifeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeLightIcon],svg[ph-fork-knife-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74 88V40a6 6 0 0 1 12 0v48a6 6 0 0 1-12 0m140-48v184a6 6 0 0 1-12 0v-50h-50a6 6 0 0 1-6-6c0-4.41.68-108.25 59.64-133.51A6 6 0 0 1 214 40m-12 10c-36.79 24.29-42.82 91.48-43.81 112H202Zm-84.08-11a6 6 0 1 0-11.84 2L114 88.48a34 34 0 0 1-68 0L53.92 41a6 6 0 0 0-11.84-2l-8 48a6.6 6.6 0 0 0-.08 1a46.06 46.06 0 0 0 40 45.6V224a6 6 0 0 0 12 0v-90.4A46.06 46.06 0 0 0 126 88a6.6 6.6 0 0 0-.08-1Z"></svg:path>`,
})
export class PhForkKnifeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phForkKnifeThinIcon],svg[ph-fork-knife-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 88V40a4 4 0 0 1 8 0v48a4 4 0 0 1-8 0m136-48v184a4 4 0 0 1-8 0v-52h-52a4 4 0 0 1-4-4a264.3 264.3 0 0 1 7.11-55.94c9.47-39.22 27.21-65.41 51.31-75.74A4 4 0 0 1 212 40m-8 6.46c-41.75 23.87-47.19 99.29-47.9 117.54H204Zm-88-7.12a4 4 0 0 0-7.9 1.32l8 47.66a36 36 0 0 1-72 0l8-47.66a4 4 0 0 0-7.9-1.32l-8 48a5 5 0 0 0-.2.66a44.06 44.06 0 0 0 40 43.81V224a4 4 0 0 0 8 0v-92.19A44.06 44.06 0 0 0 124 88a5 5 0 0 0 0-.66Z"></svg:path>`,
})
export class PhForkKnifeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKIcon],svg[ph-four-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200 152H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-29l13.09-15l28 48a8 8 0 1 0 13.82-8l-30.7-52.63L206 85.27a8 8 0 1 0-12-10.54l-42 48V80a8 8 0 0 0-8-8M88 176v-16H40a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 104 80v64h8a8 8 0 0 1 0 16h-8v16a8 8 0 0 1-16 0m0-32v-40.68L56.36 144Z"></svg:path>`,
})
export class PhFourKIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKBoldIcon],svg[ph-four-k-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204 156H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M148 68a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0v-27.49l8.44-9.65l25.19 43.19A12 12 0 0 0 214.37 170l-29.26-50.14L213 87.9a12 12 0 1 0-18-15.8l-35 40V80a12 12 0 0 0-12-12M80 176v-12H36a12 12 0 0 1-9.47-19.37l56-72A12 12 0 0 1 104 80v60h4a12 12 0 0 1 0 24h-4v12a12 12 0 0 1-24 0m0-36v-25l-19.46 25Z"></svg:path>`,
})
export class PhFourKBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKDuotoneIcon],svg[ph-four-k-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160H32V48Z" opacity=".2"></svg:path><svg:path d="M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200 152H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-29l13.09-15l28 48a8 8 0 1 0 13.82-8l-30.7-52.63L206 85.27a8 8 0 1 0-12-10.54l-42 48V80a8 8 0 0 0-8-8M88 176v-16H40a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 104 80v64h8a8 8 0 0 1 0 16h-8v16a8 8 0 0 1-16 0m0-32v-40.68L56.36 144Z"></svg:path></svg:g>`,
})
export class PhFourKDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKFillIcon],svg[ph-four-k-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.55 136L96 113v23ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-108 88a8 8 0 0 0-8-8h-4V88a8 8 0 0 0-14.51-4.65l-40 56A8 8 0 0 0 64 152h32v16a8 8 0 0 0 16 0v-16h4a8 8 0 0 0 8-8m49.59-22.23l24.48-28.56a8 8 0 0 0-12.14-10.42L157.8 115.6l-5.8 6.77V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-21l10.62-12.39l22.52 37.55a8 8 0 1 0 13.72-8.24Z"></svg:path>`,
})
export class PhFourKFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKLightIcon],svg[ph-four-k-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 48a6 6 0 0 1 6-6h192a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198 154H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M144 74a6 6 0 0 0-6 6v96a6 6 0 0 0 12 0v-29.75l15.42-17.62l29.4 50.37a6 6 0 0 0 5.19 3a5.9 5.9 0 0 0 3-.82a6 6 0 0 0 2.16-8.2l-31.41-53.88L204.52 84a6 6 0 0 0-9-7.9L150 128V80a6 6 0 0 0-6-6M90 176v-18H40a6 6 0 0 1-4.74-9.68l56-72A6 6 0 0 1 102 80v66h10a6 6 0 0 1 0 12h-10v18a6 6 0 0 1-12 0m0-30V97.49L52.27 146Z"></svg:path>`,
})
export class PhFourKLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFourKThinIcon],svg[ph-four-k-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196 156H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M144 76a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0v-30.5l17.75-20.28L196.54 178a4 4 0 1 0 6.92-4l-32.16-55.13L203 82.63a4 4 0 1 0-6-5.26l-49 56V80a4 4 0 0 0-4-4M92 176v-20H40a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 100 80v68h12a4 4 0 0 1 0 8h-12v20a4 4 0 0 1-8 0m0-28V91.66L48.18 148Z"></svg:path>`,
})
export class PhFourKThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersIcon],svg[ph-frame-corners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80v32a8 8 0 0 1-16 0V88h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M96 168H72v-24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path>`,
})
export class PhFrameCornersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersBoldIcon],svg[ph-frame-corners-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 88a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-24 0v-20h-20a12 12 0 0 1-12-12m-68 92h32a12 12 0 0 0 0-24H84v-20a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12M236 56v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v136h168Z"></svg:path>`,
})
export class PhFrameCornersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersDuotoneIcon],svg[ph-frame-corners-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 80v32a8 8 0 0 1-16 0V88h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M96 168H72v-24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z"></svg:path></svg:g>`,
})
export class PhFrameCornersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersFillIcon],svg[ph-frame-corners-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M88 192H56a8 8 0 0 1-8-8v-32a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16m120-88a8 8 0 0 1-16 0V80h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhFrameCornersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersLightIcon],svg[ph-frame-corners-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 80v32a6 6 0 0 1-12 0V86h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M96 170H70v-26a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12M230 56v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhFrameCornersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFrameCornersThinIcon],svg[ph-frame-corners-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 80v32a4 4 0 0 1-8 0V84h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M96 172H68v-28a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8M228 56v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhFrameCornersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoIcon],svg[ph-framer-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z"></svg:path>`,
})
export class PhFramerLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoBoldIcon],svg[ph-framer-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 104V40a12 12 0 0 0-12-12H56a12 12 0 0 0-8 21l48.44 43H56a12 12 0 0 0-12 12v64a12 12 0 0 0 3.52 8.49l72 72A12 12 0 0 0 140 240v-60h60a12 12 0 0 0 8-21l-48.41-43H200a12 12 0 0 0 12-12m-43.56 52H128a12 12 0 0 0-12 12v43l-48-48v-47h55.44ZM188 92h-55.44l-45-40H188Z"></svg:path>`,
})
export class PhFramerLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoDuotoneIcon],svg[ph-framer-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 104h-72L56 40h144ZM56 168l72 72v-72h72l-72-64H56Z" opacity=".2"></svg:path><svg:path d="M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z"></svg:path></svg:g>`,
})
export class PhFramerLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoFillIcon],svg[ph-framer-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 112h-51l56.27 50a8 8 0 0 1-5.27 14h-64v64a8 8 0 0 1-13.66 5.66l-72-72A8 8 0 0 1 48 168v-64a8 8 0 0 1 8-8h51L50.69 46A8 8 0 0 1 56 32h144a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhFramerLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoLightIcon],svg[ph-framer-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 104V40a6 6 0 0 0-6-6H56a6 6 0 0 0-4 10.48L112.22 98H56a6 6 0 0 0-6 6v64a6 6 0 0 0 1.76 4.24l72 72A6 6 0 0 0 134 240v-66h66a6 6 0 0 0 4-10.48L143.78 110H200a6 6 0 0 0 6-6m-21.78 58H128a6 6 0 0 0-6 6v57.51l-60-60V110h63.72ZM194 98h-63.72l-58.5-52H194Z"></svg:path>`,
})
export class PhFramerLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFramerLogoThinIcon],svg[ph-framer-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104V40a4 4 0 0 0-4-4H56a4 4 0 0 0-2.66 7l64.14 57H56a4 4 0 0 0-4 4v64a4 4 0 0 0 1.17 2.83l72 72A4 4 0 0 0 132 240v-68h68a4 4 0 0 0 2.66-7l-64.14-57H200a4 4 0 0 0 4-4m-14.52 60H128a4 4 0 0 0-4 4v62.34l-64-64V108h66.48Zm6.52-64h-66.48l-63-56H196Z"></svg:path>`,
})
export class PhFramerLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionIcon],svg[ph-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40a8 8 0 0 1-8 8h-29.29a24 24 0 0 0-23.62 19.71l-9.5 52.29H184a8 8 0 0 1 0 16h-49.32l-10 55.16A40 40 0 0 1 85.29 224H56a8 8 0 0 1 0-16h29.29a24 24 0 0 0 23.62-19.71l9.5-52.29H72a8 8 0 0 1 0-16h49.32l10-55.16A40 40 0 0 1 170.71 32H200a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhFunctionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionBoldIcon],svg[ph-function-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 40a12 12 0 0 1-12 12h-29.29A20 20 0 0 0 151 68.42L142.38 116H184a12 12 0 0 1 0 24h-46l-9.44 51.87A44 44 0 0 1 85.29 228H56a12 12 0 0 1 0-24h29.29A20 20 0 0 0 105 187.58l8.62-47.58H72a12 12 0 0 1 0-24h46l9.44-51.87A44 44 0 0 1 170.71 28H200a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhFunctionBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionDuotoneIcon],svg[ph-function-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v160a16 16 0 0 1-16 16H56V56a16 16 0 0 1 16-16Z" opacity=".2"></svg:path><svg:path d="M208 40a8 8 0 0 1-8 8h-29.29a24 24 0 0 0-23.62 19.71l-9.5 52.29H184a8 8 0 0 1 0 16h-49.32l-10 55.16A40 40 0 0 1 85.29 224H56a8 8 0 0 1 0-16h29.29a24 24 0 0 0 23.62-19.71l9.5-52.29H72a8 8 0 0 1 0-16h49.32l10-55.16A40 40 0 0 1 170.71 32H200a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFunctionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionFillIcon],svg[ph-function-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 40h-16.08a16 16 0 0 0-15.73 13l-6.55 35H168a8 8 0 0 1 0 16h-33.36l-7.11 37.9A32 32 0 0 1 96.08 200H80a8 8 0 0 1 0-16h16.08a16 16 0 0 0 15.73-13l6.55-35H88a8 8 0 0 1 0-16h33.36l7.11-37.9A32 32 0 0 1 159.92 56H176a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunctionFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionLightIcon],svg[ph-function-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 40a6 6 0 0 1-6 6h-29.29a26 26 0 0 0-25.58 21.35L135.19 122H184a6 6 0 0 1 0 12h-51l-10.33 56.8A38 38 0 0 1 85.29 222H56a6 6 0 0 1 0-12h29.29a26 26 0 0 0 25.58-21.35l9.94-54.65H72a6 6 0 0 1 0-12h51l10.33-56.8A38 38 0 0 1 170.71 34H200a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhFunctionLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunctionThinIcon],svg[ph-function-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 40a4 4 0 0 1-4 4h-29.29a28 28 0 0 0-27.55 23l-10.37 57H184a4 4 0 0 1 0 8h-52.66l-10.63 58.44A36 36 0 0 1 85.29 220H56a4 4 0 0 1 0-8h29.29a28 28 0 0 0 27.55-23l10.37-57H72a4 4 0 0 1 0-8h52.66l10.63-58.44A36 36 0 0 1 170.71 36H200a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFunctionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelIcon],svg[ph-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.6 49.53A15.81 15.81 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.74-72.32l.08-.09a15.8 15.8 0 0 0 2.78-17.23m-84.42 81.05A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.47L40 56h176Z"></svg:path>`,
})
export class PhFunnelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelBoldIcon],svg[ph-funnel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.29 47.91A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.1 16.64l32-21.33a20 20 0 0 0 8.9-16.65v-53.91l66.67-71.16l.12-.14a20 20 0 0 0 3.5-21.54m-91 79.89A12 12 0 0 0 140 136v56.52l-24 16V136a12 12 0 0 0-3.25-8.2L49.23 60h157.54Z"></svg:path>`,
})
export class PhFunnelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelDuotoneIcon],svg[ph-funnel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.9 61.38L152 136v58.65a8 8 0 0 1-3.56 6.66l-32 21.33A8 8 0 0 1 104 216v-80L34.1 61.38A8 8 0 0 1 40 48h176a8 8 0 0 1 5.9 13.38" opacity=".2"></svg:path><svg:path d="M230.6 49.53A15.81 15.81 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.74-72.32l.08-.09a15.8 15.8 0 0 0 2.78-17.23m-84.42 81.05A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.47L40 56h176Z"></svg:path></svg:g>`,
})
export class PhFunnelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelFillIcon],svg[ph-funnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.81 66.76l-.08.09L160 139.17v55.49a16 16 0 0 1-7.13 13.34l-32 21.34A16 16 0 0 1 96 216v-76.83L28.27 66.85l-.08-.09A16 16 0 0 1 40 40h176a16 16 0 0 1 11.84 26.76Z"></svg:path>`,
})
export class PhFunnelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelLightIcon],svg[ph-funnel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.77 50.34A13.8 13.8 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.07L98 138.38V216a14 14 0 0 0 21.77 11.64l32-21.33a14 14 0 0 0 6.23-11.65v-56.28l68.33-73a13.82 13.82 0 0 0 2.44-15.04m-11.26 6.94l-69.89 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32A2 2 0 0 1 40 54h176a1.9 1.9 0 0 1 1.83 1.19a1.86 1.86 0 0 1-.32 2.09"></svg:path>`,
})
export class PhFunnelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleIcon],svg[ph-funnel-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 136a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhFunnelSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleBoldIcon],svg[ph-funnel-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 136a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m28-60H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-80 96h-48a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhFunnelSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleDuotoneIcon],svg[ph-funnel-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M200 136a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h128a8 8 0 0 1 8 8m32-56H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-80 96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhFunnelSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleFillIcon],svg[ph-funnel-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-72 136h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m32-40H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-40H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleLightIcon],svg[ph-funnel-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 136a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m34-54H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-80 96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhFunnelSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleThinIcon],svg[ph-funnel-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 136a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m36-52H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-80 96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFunnelSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXIcon],svg[ph-funnel-simple-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 144H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m40-64H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-104 96h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m93.66-5.66a8 8 0 0 0-11.32 0L192 188.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 200l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 211.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 200l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhFunnelSimpleXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXBoldIcon],svg[ph-funnel-simple-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 148H64a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24m40-72H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-104 96h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m96.49-4.49a12 12 0 0 0-17 0L192 183l-15.51-15.52a12 12 0 0 0-17 17L175 200l-15.52 15.51a12 12 0 0 0 17 17L192 217l15.51 15.52a12 12 0 0 0 17-17L209 200l15.52-15.51a12 12 0 0 0-.03-16.98"></svg:path>`,
})
export class PhFunnelSimpleXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXDuotoneIcon],svg[ph-funnel-simple-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56v144a16 16 0 0 1-16 16h-8l-16-16l-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 144H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m40-64H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-104 96h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m93.66-5.66a8 8 0 0 0-11.32 0L192 188.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L180.69 200l-18.35 18.34a8 8 0 0 0 11.32 11.32L192 211.31l18.34 18.35a8 8 0 0 0 11.32-11.32L203.31 200l18.35-18.34a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhFunnelSimpleXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXFillIcon],svg[ph-funnel-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 128a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m56 48h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m69.66 10.34a8 8 0 0 1-11.32 11.32L176 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L164.69 176l-10.35-10.34a8 8 0 0 1 11.32-11.32L176 164.69l10.34-10.35a8 8 0 0 1 11.32 11.32L187.31 176ZM208 96H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhFunnelSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXLightIcon],svg[ph-funnel-simple-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 142H64a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12m40-60H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-104 96h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m92.24-6.24a6 6 0 0 0-8.48 0L192 191.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L183.51 200l-19.75 19.76a6 6 0 1 0 8.48 8.48L192 208.49l19.76 19.75a6 6 0 0 0 8.48-8.48L200.49 200l19.75-19.76a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhFunnelSimpleXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelSimpleXThinIcon],svg[ph-funnel-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 140H64a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8m40-56H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-104 96h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m90.83-6.83a4 4 0 0 0-5.66 0L192 194.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L186.34 200l-21.17 21.17a4 4 0 0 0 5.66 5.66L192 205.66l21.17 21.17a4 4 0 0 0 5.66-5.66L197.66 200l21.17-21.17a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhFunnelSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelThinIcon],svg[ph-funnel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227 51.15A11.85 11.85 0 0 0 216 44H40a12 12 0 0 0-8.88 20.07l.05.05L100 137.59V216a12 12 0 0 0 18.66 10l32-21.33a12 12 0 0 0 5.35-10v-57.08l68.86-73.52A11.85 11.85 0 0 0 227 51.15m-8 7.5l-69.9 74.62A4 4 0 0 0 148 136v58.65a4 4 0 0 1-1.78 3.33l-32 21.33A4 4 0 0 1 108 216v-80a4 4 0 0 0-1.08-2.74L37.05 58.67A4 4 0 0 1 40 52h176a4 4 0 0 1 3 6.65"></svg:path>`,
})
export class PhFunnelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXIcon],svg[ph-funnel-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.82 66.76A16 16 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.73-72.32Zm-81.63 63.83A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.46L40 56h176Zm99.49 79.81a8 8 0 0 1-11.32 11.32L216 203.32l-18.34 18.35a8 8 0 0 1-11.31-11.32L204.69 192l-18.34-18.35a8 8 0 0 1 11.31-11.31L216 180.69l18.34-18.34a8 8 0 0 1 11.32 11.31L227.31 192Z"></svg:path>`,
})
export class PhFunnelXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXBoldIcon],svg[ph-funnel-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.78 69.45A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.09 16.65l32-21.34a20 20 0 0 0 8.9-16.64v-53.92l66.67-71.16Zm-87.55 58.35A12 12 0 0 0 140 136v56.52l-24 16V136a12 12 0 0 0-3.24-8.2L49.23 60h157.52Zm105.26 79.72a12 12 0 1 1-17 17L216 209l-15.52 15.51a12 12 0 0 1-17-17L199 192l-15.52-15.52a12 12 0 0 1 17-17L216 175l15.51-15.52a12 12 0 1 1 17 17L233 192Z"></svg:path>`,
})
export class PhFunnelXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXDuotoneIcon],svg[ph-funnel-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.9 61.38L152 136v58.65a8 8 0 0 1-3.56 6.66l-32 21.33A8 8 0 0 1 104 216v-80L34.1 61.38A8 8 0 0 1 40 48h176a8 8 0 0 1 5.9 13.38" opacity=".2"></svg:path><svg:path d="M227.82 66.76A16 16 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.73-72.32Zm-81.63 63.83A8 8 0 0 0 144 136v58.66L112 216v-80a8 8 0 0 0-2.16-5.46L40 56h176Zm99.49 79.81a8 8 0 0 1-11.32 11.32L216 203.32l-18.34 18.35a8 8 0 0 1-11.31-11.32L204.69 192l-18.34-18.35a8 8 0 0 1 11.31-11.31L216 180.69l18.34-18.34a8 8 0 0 1 11.32 11.31L227.31 192Z"></svg:path></svg:g>`,
})
export class PhFunnelXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXFillIcon],svg[ph-funnel-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.73 66.85L160 139.17v55.49a16 16 0 0 1-7.13 13.34l-32 21.34A16 16 0 0 1 96 216v-76.83L28.27 66.85l-.08-.09A16 16 0 0 1 40 40h176a16 16 0 0 1 11.84 26.76ZM227.31 192l18.35-18.34a8 8 0 0 0-11.32-11.32L216 180.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L204.69 192l-18.35 18.34a8 8 0 0 0 11.32 11.32L216 203.31l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhFunnelXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXLightIcon],svg[ph-funnel-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.79 50.34A13.83 13.83 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.06L98 138.38V216a14 14 0 0 0 21.76 11.64l32-21.33a14 14 0 0 0 6.24-11.65v-56.28l68.34-73a13.83 13.83 0 0 0 2.45-15.04m-11.26 6.94l-69.9 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32a1.89 1.89 0 0 1-.33-2.13A1.91 1.91 0 0 1 40 54h176a1.9 1.9 0 0 1 1.82 1.19a1.87 1.87 0 0 1-.29 2.09m26.71 154.49a6 6 0 1 1-8.48 8.48L216 200.49l-19.75 19.76a6 6 0 0 1-8.49-8.48L207.52 192l-19.76-19.76a6 6 0 0 1 8.49-8.49L216 183.52l19.76-19.76a6 6 0 0 1 8.48 8.49L224.49 192Z"></svg:path>`,
})
export class PhFunnelXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phFunnelXThinIcon],svg[ph-funnel-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227 51.15A11.86 11.86 0 0 0 216 44H40a12 12 0 0 0-8.88 20.07l.05.05L100 137.59V216a12 12 0 0 0 18.65 10l32-21.33a12 12 0 0 0 5.34-10v-57.08l68.86-73.52A11.83 11.83 0 0 0 227 51.15m-8 7.5l-69.91 74.62A4 4 0 0 0 148 136v58.65a4 4 0 0 1-1.78 3.33l-32 21.33A4 4 0 0 1 108 216v-80a4 4 0 0 0-1.09-2.74L37.05 58.67A4 4 0 0 1 40 52h176a4 4 0 0 1 3 6.65m23.84 154.53a4 4 0 0 1-5.66 5.66L216 197.67l-21.17 21.17a4 4 0 0 1-5.66-5.66L210.34 192l-21.17-21.17a4 4 0 1 1 5.66-5.66L216 186.35l21.17-21.17a4 4 0 1 1 5.66 5.66L221.66 192Z"></svg:path>`,
})
export class PhFunnelXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerIcon],svg[ph-game-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09l-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25a.7.7 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.7.7 0 0 1 0 .14a35.74 35.74 0 0 1-5.89 26.91M172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59l-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39a20 20 0 0 0 16.23-23.11Z"></svg:path>`,
})
export class PhGameControllerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerBoldIcon],svg[ph-game-controller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 116h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 0 24m-72-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24m140.76 110.94a40 40 0 0 1-61 5.35a7 7 0 0 1-.53-.56L144.67 164h-33.34l-38.52 43.73c-.17.19-.35.38-.53.56a40 40 0 0 1-67.66-35.24a1 1 0 0 1 0-.2L21 88.79A63.88 63.88 0 0 1 83.88 36H172a64.08 64.08 0 0 1 62.93 52.48a2 2 0 0 1 0 .19l16.36 84.17a2 2 0 0 1 0 .2a39.74 39.74 0 0 1-6.53 29.9M172 140a40 40 0 0 0 0-80H83.89a39.9 39.9 0 0 0-39.27 33.06a2 2 0 0 0 0 .21l-16.34 84a16 16 0 0 0 13 18.44a16.07 16.07 0 0 0 13.86-4.21l41.76-47.43a12 12 0 0 1 9-4.07Zm55.76 37.31l-7-35.95a63.84 63.84 0 0 1-44.27 22.46l24.41 27.72a16 16 0 0 0 26.85-14.23Z"></svg:path>`,
})
export class PhGameControllerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerDuotoneIcon],svg[ph-game-controller-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216.86 207.57a28 28 0 0 1-24.66-7.77L150.09 152H172a51.94 51.94 0 0 0 51.2-61l16.36 84.17a28 28 0 0 1-22.7 32.4" opacity=".2"></svg:path><svg:path d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09l-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25a.7.7 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.7.7 0 0 1 0 .14a35.74 35.74 0 0 1-5.89 26.91M172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59l-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39a20 20 0 0 0 16.23-23.11Z"></svg:path></svg:g>`,
})
export class PhGameControllerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerFillIcon],svg[ph-game-controller-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.44 173.75a.7.7 0 0 0 0-.14l-16.39-84.17v-.18A60.08 60.08 0 0 0 172 40H83.89a59.88 59.88 0 0 0-59 49.52L8.58 173.61a.7.7 0 0 0 0 .14a36 36 0 0 0 60.9 31.71l.35-.37L109.52 160h37l39.71 45.09c.11.13.23.25.35.37A36.08 36.08 0 0 0 212 216a36 36 0 0 0 35.43-42.25ZM104 112h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16m40-8a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8m84.37 87.47a19.84 19.84 0 0 1-12.9 8.23a20.09 20.09 0 0 1-17.47-5.39L167.8 160h4.2a60 60 0 0 0 51-28.38l8.74 45a19.82 19.82 0 0 1-3.37 14.85"></svg:path>`,
})
export class PhGameControllerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerLightIcon],svg[ph-game-controller-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 110h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12m-72-12H94V88a6 6 0 0 0-12 0v10H72a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12m135.84 101.5A34 34 0 0 1 212 214a34.1 34.1 0 0 1-24-9.95l-.26-.28L147.38 158h-38.76l-40.31 45.76l-.31.24a34 34 0 0 1-24 10a34 34 0 0 1-33.46-39.91s0-.06 0-.1L26.9 89.88A57.89 57.89 0 0 1 83.89 42H172a58.07 58.07 0 0 1 57.05 47.63v.19L245.46 174v.11a33.75 33.75 0 0 1-5.62 25.39M172 146a46 46 0 0 0 0-92H83.89a45.9 45.9 0 0 0-45.18 38a.4.4 0 0 0 0 .1l-16.38 84.13a22 22 0 0 0 37.11 19.45l42-47.65a6 6 0 0 1 4.5-2Zm61.67 30.23l-9.79-50.35A58.06 58.06 0 0 1 172 158h-8.63l33.19 37.68a22 22 0 0 0 37.11-19.45"></svg:path>`,
})
export class PhGameControllerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGameControllerThinIcon],svg[ph-game-controller-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 108h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 0 8m-72-8H92V88a4 4 0 0 0-8 0v12H72a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8m134.21 98.36a32 32 0 0 1-48.84 4.27l-.17-.18L148.29 156h-40.57l-40.91 46.44l-.18.19A32.08 32.08 0 0 1 44 212a32 32 0 0 1-31.5-37.56l16.37-84.23A55.87 55.87 0 0 1 83.89 44H172a56.07 56.07 0 0 1 55.1 46.1a.3.3 0 0 1 0 .1l16.37 84.16a31.86 31.86 0 0 1-5.26 24M172 148a48 48 0 1 0 0-96H83.9a47.9 47.9 0 0 0-47.16 39.67L20.36 175.9a24 24 0 0 0 19.48 27.73a24 24 0 0 0 21-6.58l42-47.69a4 4 0 0 1 3-1.36Zm63.63 27.83l-11-56.66A56.09 56.09 0 0 1 172 156h-13l36.16 41.06a24 24 0 0 0 40.52-21.23Z"></svg:path>`,
})
export class PhGameControllerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageIcon],svg[ph-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 98.67L128 40l88 58.66V192h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40ZM176 144v16h-40v-16Zm-56 16H80v-16h40Zm-40 16h40v16H80Zm56 0h40v16h-40Z"></svg:path>`,
})
export class PhGarageIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageBoldIcon],svg[ph-garage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 188h-4V98.67A20 20 0 0 0 227.09 82l-88-58.66a19.94 19.94 0 0 0-22.18 0L28.91 82A20 20 0 0 0 20 98.67V188h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 100.81l84-56l84 56V188h-16v-68a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v68H44ZM172 132v16h-32v-16Zm-56 16H84v-16h32Zm-32 24h32v16H84Zm56 0h32v16h-32Z"></svg:path>`,
})
export class PhGarageBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageDuotoneIcon],svg[ph-garage-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 136v64H72v-64Z" opacity=".2"></svg:path><svg:path d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 98.67L128 40l88 58.66V192h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40ZM176 144v16h-40v-16Zm-56 16H80v-16h40Zm-40 16h40v16H80Zm56 0h40v16h-40Z"></svg:path></svg:g>`,
})
export class PhGarageDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageFillIcon],svg[ph-garage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-104-64h56v24h-56Zm-16 24H64v-24h56Zm-56 16h56v24H64Zm72 0h56v24h-56Z"></svg:path>`,
})
export class PhGarageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageLightIcon],svg[ph-garage-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 194h-10V98.67A14 14 0 0 0 223.77 87l-88-58.66a14 14 0 0 0-15.54 0L32.23 87A14 14 0 0 0 26 98.67V194H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M38 98.67a2 2 0 0 1 .89-1.67l88-58.67a2 2 0 0 1 2.22 0l88 58.67a2 2 0 0 1 .89 1.66V194h-28v-58a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v58H38ZM178 142v20h-44v-20Zm-56 20H78v-20h44Zm-44 12h44v20H78Zm56 0h44v20h-44Z"></svg:path>`,
})
export class PhGarageLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGarageThinIcon],svg[ph-garage-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 196h-12V98.67a12 12 0 0 0-5.34-10l-88-58.67a12 12 0 0 0-13.32 0l-88 58.67a12 12 0 0 0-5.34 10V196H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 98.67a4 4 0 0 1 1.78-3.33l88-58.66a4 4 0 0 1 4.44 0l88 58.66a4 4 0 0 1 1.78 3.33V196h-32v-60a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v60H36ZM180 140v24h-48v-24Zm-56 24H76v-24h48Zm-48 8h48v24H76Zm56 0h48v24h-48Z"></svg:path>`,
})
export class PhGarageThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanIcon],svg[ph-gas-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M56 64l24-24l10.34 10.34l-24 24Zm144 152H56V107.31l16-16L123.31 40H200ZM128 64a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m52.8 62.4L141.33 156l39.47 29.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8"></svg:path>`,
})
export class PhGasCanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanBoldIcon],svg[ph-gas-can-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 20h-68.69a19.86 19.86 0 0 0-14.14 5.86l-11.51 11.51l-15.52-15.51a20 20 0 0 0-28.28 0l-24 24a20 20 0 0 0 0 28.28l15.51 15.52l-11.51 11.51A19.86 19.86 0 0 0 36 115.31V216a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20M57.66 60L76 41.66l12.69 12.68l-18.35 18.35ZM196 212H60v-95l18.83-18.86L133 44h63ZM136 68a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12m39.5 65.37L147.21 156l28.29 22.63a12 12 0 0 1-15 18.74l-32.5-26l-32.5 26a12 12 0 0 1-15-18.74L108.79 156L80.5 133.37a12 12 0 0 1 15-18.74l32.5 26l32.5-26a12 12 0 0 1 15 18.74"></svg:path>`,
})
export class PhGasCanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanDuotoneIcon],svg[ph-gas-can-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 40v176a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V107.31a8 8 0 0 1 2.34-5.65l67.32-67.32a8 8 0 0 1 5.65-2.34H200a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M56 64l24-24l10.34 10.34l-24 24Zm144 152H56V107.31l16-16L123.31 40H200ZM128 64a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8m52.8 62.4L141.33 156l39.47 29.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8"></svg:path></svg:g>`,
})
export class PhGasCanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanFillIcon],svg[ph-gas-can-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24h-76.69A15.86 15.86 0 0 0 112 28.69L101.66 39L91.31 28.69a16 16 0 0 0-22.62 0l-24 24a16 16 0 0 0 0 22.62L55 85.66L44.69 96A15.86 15.86 0 0 0 40 107.31V216a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M56 64l24-24l10.34 10.34l-24 24Zm124.8 121.6a8 8 0 1 1-9.6 12.8L128 166l-43.2 32.4a8 8 0 0 1-9.6-12.8l39.47-29.6l-39.47-29.6a8 8 0 0 1 9.6-12.8L128 146l43.2-32.4a8 8 0 0 1 9.6 12.8L141.33 156ZM176 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGasCanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanLightIcon],svg[ph-gas-can-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 26h-76.69a13.94 13.94 0 0 0-9.9 4.1l-11.75 11.76L89.9 30.1a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.8l11.76 11.76L46.1 97.41a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14M54.59 65.41a2 2 0 0 1 0-2.82l24-24a2 2 0 0 1 2.82 0l11.76 11.75l-26.83 26.83ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V107.31a2 2 0 0 1 .59-1.41l16-16l35.31-35.31l16-16a2 2 0 0 1 1.41-.59H200a2 2 0 0 1 2 2ZM182 64a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-2.4 60.8L138 156l41.6 31.2a6 6 0 1 1-7.2 9.6L128 163.5l-44.4 33.3a6 6 0 0 1-7.2-9.6L118 156l-41.6-31.2a6 6 0 0 1 7.2-9.6l44.4 33.3l44.4-33.3a6 6 0 1 1 7.2 9.6"></svg:path>`,
})
export class PhGasCanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasCanThinIcon],svg[ph-gas-can-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28h-76.69a12 12 0 0 0-8.48 3.51l-13.17 13.18l-13.17-13.18a12 12 0 0 0-17 0l-24 24a12 12 0 0 0 0 17l13.2 13.15l-13.17 13.17a11.9 11.9 0 0 0-3.52 8.48V216a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12M53.17 66.83a4 4 0 0 1 0-5.66l24-24a4 4 0 0 1 5.66 0L96 50.34L66.34 80ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V107.31a4 4 0 0 1 1.17-2.82l16-16l35.31-35.31l16-16a4 4 0 0 1 2.83-1.18H200a4 4 0 0 1 4 4ZM180 64a4 4 0 0 1-4 4h-40a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-1.6 59.2L134.67 156l43.73 32.8a4 4 0 0 1-4.8 6.4L128 161l-45.6 34.2a4 4 0 0 1-4.8-6.4l43.73-32.8l-43.73-32.8a4 4 0 0 1 4.8-6.4L128 151l45.6-34.2a4 4 0 1 1 4.8 6.4"></svg:path>`,
})
export class PhGasCanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpIcon],svg[ph-gas-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M64 208V56a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v152Zm80-96a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGasPumpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpBoldIcon],svg[ph-gas-pump-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247.8 66.83l-19.31-19.32a12 12 0 0 0-17 17l19.34 19.29a4 4 0 0 1 1.17 2.83V166a6 6 0 0 1-12 0v-38a28 28 0 0 0-28-28h-12V56a28 28 0 0 0-28-28H72a28 28 0 0 0-28 28v148H32a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24h-12v-80h12a4 4 0 0 1 4 4v38a30 30 0 0 0 60 0V86.63a27.8 27.8 0 0 0-8.2-19.8M68 204V56a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v148Zm72-92a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhGasPumpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpDuotoneIcon],svg[ph-gas-pump-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 56v160H56V56a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M64 208V56a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v152Zm80-96a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGasPumpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpFillIcon],svg[ph-gas-pump-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241 69.66l-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGasPumpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpLightIcon],svg[ph-gas-pump-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m239.56 71.07l-19.32-19.31a6 6 0 0 0-8.48 8.48l19.31 19.32a9.93 9.93 0 0 1 2.93 7.07V168a10 10 0 0 1-20 0v-40a22 22 0 0 0-22-22h-18V56a22 22 0 0 0-22-22H72a22 22 0 0 0-22 22v154H32a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12h-18v-92h18a10 10 0 0 1 10 10v40a22 22 0 0 0 44 0V86.63a21.88 21.88 0 0 0-6.44-15.56M62 210V56a10 10 0 0 1 10-10h80a10 10 0 0 1 10 10v154Zm80-98a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGasPumpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGasPumpThinIcon],svg[ph-gas-pump-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m238.14 72.49l-19.31-19.32a4 4 0 0 0-5.66 5.66l19.32 19.31a12 12 0 0 1 3.51 8.49V168a12 12 0 0 1-24 0v-40a20 20 0 0 0-20-20h-20V56a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v156H32a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8h-20v-96h20a12 12 0 0 1 12 12v40a20 20 0 0 0 40 0V86.63a19.85 19.85 0 0 0-5.86-14.14M60 212V56a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12v156Zm80-100a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhGasPumpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeIcon],svg[ph-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z"></svg:path>`,
})
export class PhGaugeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeBoldIcon],svg[ph-gauge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.88 69.83A115.2 115.2 0 0 0 128 36h-.41C63.85 36.22 12 88.76 12 153.13V176a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24a115.25 115.25 0 0 0-34.12-82.17M220 172h-92.68l46.44-65a12 12 0 1 0-19.52-14l-56.42 79H36v-18.87c0-1.72 0-3.43.14-5.13H56a12 12 0 0 0 0-24H40.62c10.91-33.39 40-58.52 75.38-63.21V80a12 12 0 0 0 24 0V60.8a92 92 0 0 1 75.66 63.2H200a12 12 0 0 0 0 24h19.9c.06 1.33.1 2.66.1 4Z"></svg:path>`,
})
export class PhGaugeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeDuotoneIcon],svg[ph-gauge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 95.65 70.15 48.2 127.63 48A104 104 0 0 1 232 152" opacity=".2"></svg:path><svg:path d="M207.06 72.67A111.24 111.24 0 0 0 128 40h-.4C66.07 40.21 16 91 16 153.13V176a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33M224 176H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 176H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V80a8 8 0 0 0 16 0V56.33A96.14 96.14 0 0 1 221 128h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z"></svg:path></svg:g>`,
})
export class PhGaugeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeFillIcon],svg[ph-gauge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 152v24a16 16 0 0 1-16 16H115.93a4 4 0 0 1-3.24-6.35L174.27 101a8.21 8.21 0 0 0-1.37-11.3a8 8 0 0 0-11.37 1.61l-72 99.06a4 4 0 0 1-3.28 1.63H32a16 16 0 0 1-16-16v-22.87c0-1.79 0-3.57.13-5.33a4 4 0 0 1 4-3.8H48a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47H23.92a4 4 0 0 1-3.87-5c12-43.84 49.66-77.13 95.52-82.28a4 4 0 0 1 4.43 4V72a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.27V44.67a4 4 0 0 1 4.43-4a112.18 112.18 0 0 1 95.8 82.33a4 4 0 0 1-3.88 5h-24.08a8.17 8.17 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h27.92a4 4 0 0 1 4 3.86c.06 1.37.06 2.75.06 4.14"></svg:path>`,
})
export class PhGaugeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeLightIcon],svg[ph-gauge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.65 74.08A109.26 109.26 0 0 0 128 42h-.39C67.17 42.21 18 92.06 18 153.13V176a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14v-24a109.3 109.3 0 0 0-32.35-77.92M226 176a2 2 0 0 1-2 2H115.78l57.07-78.47a6 6 0 0 0-9.7-7.06L100.94 178H32a2 2 0 0 1-2-2v-22.87a102 102 0 0 1 .62-11.13H56a6 6 0 0 0 0-12H32.71C42.6 88.4 78.53 56.86 122 54.19V80a6 6 0 0 0 12 0V54.19A98.05 98.05 0 0 1 223.53 130H200a6 6 0 0 0 0 12h25.5c.33 3.3.5 6.64.5 10Z"></svg:path>`,
})
export class PhGaugeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGaugeThinIcon],svg[ph-gauge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.23 75.5A107.37 107.37 0 0 0 127.62 44C68.28 44.21 20 93.16 20 153.13V176a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a107.25 107.25 0 0 0-31.77-76.5M228 176a4 4 0 0 1-4 4H111.85l59.38-81.65a4 4 0 1 0-6.46-4.7L102 180H32a4 4 0 0 1-4-4v-22.87a103 103 0 0 1 .84-13.13H56a4 4 0 0 0 0-8H30.21C39.59 87.66 77.84 53.93 124 52.09V80a4 4 0 0 0 8 0V52.08A100.08 100.08 0 0 1 226 132h-26a4 4 0 0 0 0 8h27.29a102 102 0 0 1 .71 12Z"></svg:path>`,
})
export class PhGaugeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelIcon],svg[ph-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.32 116.69l-16-16a16 16 0 0 0-20.84-1.53l-49.64-49.64a16 16 0 0 0-1.52-20.84l-16-16a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63l16 16a16 16 0 0 0 20.83 1.52l7.17 7.17l-65.38 65.38a25 25 0 0 0 35.32 35.32L132 159.32l7.17 7.16a16 16 0 0 0 1.52 20.84l16 16a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63M80 104L64 88l64-64l16 16ZM55.32 213.38a9 9 0 0 1-12.69 0a9 9 0 0 1 0-12.68L108 135.32L120.69 148ZM101 105.66L145.66 61L195 110.34L150.35 155ZM168 192l-16-16l4-4l56-56l4-4l16 16Z"></svg:path>`,
})
export class PhGavelIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelBoldIcon],svg[ph-gavel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.14 113.86l-16-16a20 20 0 0 0-23.06-3.75l-45.2-45.2a20 20 0 0 0-3.74-23.06l-16-16a20 20 0 0 0-28.28 0l-64 64a20 20 0 0 0 0 28.28l16 16a20 20 0 0 0 23 3.79l-59.5 59.46a32 32 0 0 0 45.26 45.26L134 167.21a20 20 0 0 0 3.81 22.94l16 16a20 20 0 0 0 28.29 0l64-64a20 20 0 0 0 0-28.29ZM80 98.34L69.64 88L128 29.65L138.34 40ZM57.64 209.67a8 8 0 0 1-11.31-11.32l59.52-59.52l11.31 11.32Zm92.7-60.29l-43.72-43.72l39-39l43.72 43.72Zm17.65 37L157.65 176L216 117.66L226.34 128Z"></svg:path>`,
})
export class PhGavelBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelDuotoneIcon],svg[ph-gavel-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m149.66 45.66l-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 0-11.32l64-64a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32m88 76.68l-16-16a8 8 0 0 0-11.32 0l-64 64a8 8 0 0 0 0 11.32l16 16a8 8 0 0 0 11.32 0l64-64a8 8 0 0 0 0-11.32" opacity=".2"></svg:path><svg:path d="m243.32 116.69l-16-16a16 16 0 0 0-20.84-1.53l-49.64-49.64a16 16 0 0 0-1.52-20.84l-16-16a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63l16 16a16 16 0 0 0 20.83 1.52l7.17 7.17l-65.38 65.38a25 25 0 0 0 35.32 35.32L132 159.32l7.17 7.16a16 16 0 0 0 1.52 20.84l16 16a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63M80 104L64 88l64-64l16 16ZM55.32 213.38a9 9 0 0 1-12.69 0a9 9 0 0 1 0-12.68L108 135.32L120.69 148ZM101 105.66L145.66 61L195 110.34L150.35 155ZM168 192l-16-16l4-4l56-56l4-4l16 16Z"></svg:path></svg:g>`,
})
export class PhGavelDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelFillIcon],svg[ph-gavel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.69 99.31a16 16 0 0 1 0-22.63l64-64a16 16 0 0 1 22.63 22.63l-64 64a16 16 0 0 1-22.63 0m190.63 17.37a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63m-35.11-15.8l-53.09-53.09a4 4 0 0 0-5.66 0L87.8 109.45a4 4 0 0 0 0 5.66l15.2 15.23l-74.31 74.35a16 16 0 0 0 22.62 22.62L125.66 153l15.23 15.23a4 4 0 0 0 5.66 0l61.66-61.66a4 4 0 0 0 0-5.69"></svg:path>`,
})
export class PhGavelFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelLightIcon],svg[ph-gavel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.91 118.1l-16-16a14 14 0 0 0-19.55-.23l-52.23-52.23a14 14 0 0 0-.23-19.55l-16-16a14 14 0 0 0-19.8 0l-64 64a14 14 0 0 0 0 19.8l16 16a14 14 0 0 0 19.55.23l9.87 9.88l-66.79 66.79a23 23 0 0 0 32.48 32.49L132 156.49l9.87 9.87a14 14 0 0 0 .23 19.55l16 16a14 14 0 0 0 19.8 0l64-64a14 14 0 0 0 .01-19.81m-91.56 39.76l-52.21-52.2l47.52-47.52l52.2 52.2Zm-71.76-52.45l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83l-64 64a2 2 0 0 1-2.83 0M56.73 214.8a11 11 0 0 1-15.52-15.52L108 132.49L123.52 148Zm176.69-85.38l-64 64a2 2 0 0 1-2.83 0l-16-16a2 2 0 0 1 0-2.83l64-64a2 2 0 0 1 2.83 0l16 16a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhGavelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGavelThinIcon],svg[ph-gavel-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 119.52l-16-16a12 12 0 0 0-17 0l-1.17 1.17l-55-55l1.18-1.17a12 12 0 0 0 0-17l-16-16a12 12 0 0 0-17 0l-64 64a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l1.17-1.18L102.34 124l-68.2 68.21a21 21 0 0 0 29.66 29.66l68.2-68.21l12.69 12.69l-1.18 1.17a12 12 0 0 0 0 17l16 16a12 12 0 0 0 17 0l64-64a12 12 0 0 0 0-17ZM77.17 106.83l-16-16a4 4 0 0 1 0-5.66l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.65l-64 64a4 4 0 0 1-5.66.01m-19 109.38a13 13 0 1 1-18.37-18.34l68.2-68.21L126.34 148Zm37.14-110.55l50.35-50.35l55 55l-50.35 50.35Zm139.52 25.17l-64 64a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 0-5.65l64-64a4 4 0 0 1 5.66 0l16 16a4 4 0 0 1 0 5.66Z"></svg:path>`,
})
export class PhGavelThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearIcon],svg[ph-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.2 107.2 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.7 107.7 0 0 0-26.25-10.87a8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.2 107.2 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74 74 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0a8 8 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74 74 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a74 74 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a74 74 0 0 1 8.68 0a8 8 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74 74 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"></svg:path>`,
})
export class PhGearIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearBoldIcon],svg[ph-gear-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28m92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.8 111.8 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.7 111.7 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.8 111.8 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.7 111.7 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.8 111.8 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.7 111.7 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.8 111.8 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.7 111.7 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70 70 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.5 86.5 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.5 86.5 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70 70 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.5 86.5 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.5 86.5 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70 70 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.5 86.5 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.5 86.5 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70 70 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.5 86.5 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.5 86.5 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22"></svg:path>`,
})
export class PhGearBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearDuotoneIcon],svg[ph-gear-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m207.86 123.18l16.78-21a99 99 0 0 0-10.07-24.29l-26.7-3a81 81 0 0 0-6.81-6.81l-3-26.71a99.4 99.4 0 0 0-24.3-10l-21 16.77a82 82 0 0 0-9.64 0l-21-16.78a99 99 0 0 0-24.21 10.07l-3 26.7a81 81 0 0 0-6.81 6.81l-26.71 3a99.4 99.4 0 0 0-10 24.3l16.77 21a82 82 0 0 0 0 9.64l-16.78 21a99 99 0 0 0 10.07 24.29l26.7 3a81 81 0 0 0 6.81 6.81l3 26.71a99.4 99.4 0 0 0 24.3 10l21-16.77a82 82 0 0 0 9.64 0l21 16.78a99 99 0 0 0 24.29-10.07l3-26.7a81 81 0 0 0 6.81-6.81l26.71-3a99.4 99.4 0 0 0 10-24.3l-16.77-21a82 82 0 0 0-.08-9.64M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.3 107.3 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74 74 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0a8.06 8.06 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74 74 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a74 74 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a74 74 0 0 1 8.68 0a8.06 8.06 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74 74 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"></svg:path></svg:g>`,
})
export class PhGearDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFillIcon],svg[ph-gear-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 130.16q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.3 107.3 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06ZM128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhGearFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineIcon],svg[ph-gear-fine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-16.37a87.3 87.3 0 0 0-7.74-28.88l14.18-8.19a8 8 0 0 0-8-13.86l-14.2 8.2a88.8 88.8 0 0 0-21.14-21.14l8.2-14.2a8 8 0 0 0-13.86-8l-8.19 14.18A87.3 87.3 0 0 0 136 40.37V24a8 8 0 0 0-16 0v16.37a87.3 87.3 0 0 0-28.88 7.74l-8.19-14.18a8 8 0 0 0-13.86 8l8.2 14.2a88.8 88.8 0 0 0-21.14 21.14l-14.2-8.2a8 8 0 0 0-8 13.86l14.18 8.19A87.3 87.3 0 0 0 40.37 120H24a8 8 0 0 0 0 16h16.37a87.3 87.3 0 0 0 7.74 28.88l-14.18 8.19a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l14.2-8.2a88.8 88.8 0 0 0 21.14 21.14l-8.2 14.2a8 8 0 0 0 13.86 8l8.19-14.18a87.3 87.3 0 0 0 28.88 7.74V232a8 8 0 0 0 16 0v-16.37a87.3 87.3 0 0 0 28.88-7.74l8.19 14.18a8 8 0 0 0 13.86-8l-8.2-14.2a88.8 88.8 0 0 0 21.14-21.14l14.2 8.2A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-14.18-8.19a87.3 87.3 0 0 0 7.73-28.88H232a8 8 0 0 0 0-16M128 56a72.08 72.08 0 0 1 71.54 64h-66.92L99.16 62.05A71.6 71.6 0 0 1 128 56m-72 72a72 72 0 0 1 29.31-57.94L118.76 128l-33.45 57.94A72 72 0 0 1 56 128m72 72a71.6 71.6 0 0 1-28.84-6l33.46-58h66.92A72.08 72.08 0 0 1 128 200"></svg:path>`,
})
export class PhGearFineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineBoldIcon],svg[ph-gear-fine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116h-12.78A91 91 0 0 0 213 92.79l11.08-6.4a12 12 0 1 0-12-20.78L201 72a93 93 0 0 0-17-17l6.41-11.11a12 12 0 1 0-20.78-12L163.21 43A91 91 0 0 0 140 36.78V24a12 12 0 0 0-24 0v12.78A91 91 0 0 0 92.79 43l-6.4-11.08a12 12 0 0 0-20.78 12L72 55a93 93 0 0 0-17 17l-11.07-6.39a12 12 0 0 0-12 20.78L43 92.79A91 91 0 0 0 36.78 116H24a12 12 0 0 0 0 24h12.78A91 91 0 0 0 43 163.21l-11.08 6.4a12 12 0 1 0 12 20.78L55 184a93 93 0 0 0 17 17l-6.41 11.11a12 12 0 1 0 20.78 12L92.79 213a91 91 0 0 0 23.21 6.22V232a12 12 0 0 0 24 0v-12.78a91 91 0 0 0 23.21-6.22l6.4 11.08a12 12 0 0 0 20.78-12L184 201a93 93 0 0 0 17-17l11.11 6.41a12 12 0 1 0 12-20.78L213 163.21a91 91 0 0 0 6.22-23.21H232a12 12 0 0 0 0-24M128 60a68.1 68.1 0 0 1 66.92 56h-60l-30-52A67.6 67.6 0 0 1 128 60m-68 68a67.9 67.9 0 0 1 24.16-51.93l30 51.93l-30 51.93A67.9 67.9 0 0 1 60 128m68 68a67.6 67.6 0 0 1-23.07-4l30-52h60A68.1 68.1 0 0 1 128 196"></svg:path>`,
})
export class PhGearFineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineDuotoneIcon],svg[ph-gear-fine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M232 120h-16.37a87.3 87.3 0 0 0-7.74-28.88l14.18-8.19a8 8 0 0 0-8-13.86l-14.2 8.2a88.8 88.8 0 0 0-21.14-21.14l8.2-14.2a8 8 0 0 0-13.86-8l-8.19 14.18A87.3 87.3 0 0 0 136 40.37V24a8 8 0 0 0-16 0v16.37a87.3 87.3 0 0 0-28.88 7.74l-8.19-14.18a8 8 0 0 0-13.86 8l8.2 14.2a88.8 88.8 0 0 0-21.14 21.14l-14.2-8.2a8 8 0 0 0-8 13.86l14.18 8.19A87.3 87.3 0 0 0 40.37 120H24a8 8 0 0 0 0 16h16.37a87.3 87.3 0 0 0 7.74 28.88l-14.18 8.19a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l14.2-8.2a88.8 88.8 0 0 0 21.14 21.14l-8.2 14.2a8 8 0 0 0 13.86 8l8.19-14.18a87.3 87.3 0 0 0 28.88 7.74V232a8 8 0 0 0 16 0v-16.37a87.3 87.3 0 0 0 28.88-7.74l8.19 14.18a8 8 0 0 0 13.86-8l-8.2-14.2a88.8 88.8 0 0 0 21.14-21.14l14.2 8.2A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-14.18-8.19a87.3 87.3 0 0 0 7.73-28.88H232a8 8 0 0 0 0-16M85.31 185.94a71.92 71.92 0 0 1 0-115.88L118.76 128ZM128 200a71.6 71.6 0 0 1-28.84-6l33.46-58h66.92A72.08 72.08 0 0 1 128 200m4.62-80L99.16 62.05a71.94 71.94 0 0 1 100.38 58Z"></svg:path></svg:g>`,
})
export class PhGearFineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineFillIcon],svg[ph-gear-fine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-8.34a95.1 95.1 0 0 0-8.82-32.9l7.23-4.17a8 8 0 0 0-8-13.86l-7.25 4.19a97 97 0 0 0-24.08-24.08l4.19-7.25a8 8 0 0 0-13.86-8l-4.17 7.23a95.1 95.1 0 0 0-32.9-8.82V24a8 8 0 0 0-16 0v8.34a95.1 95.1 0 0 0-32.9 8.82l-4.17-7.23a8 8 0 0 0-13.86 8l4.19 7.25a97 97 0 0 0-24.08 24.08l-7.25-4.19a8 8 0 0 0-8 13.86l7.23 4.17a95.1 95.1 0 0 0-8.82 32.9H24a8 8 0 0 0 0 16h8.34a95.1 95.1 0 0 0 8.82 32.9l-7.23 4.17a8 8 0 0 0 4 14.93a7.9 7.9 0 0 0 4-1.07l7.25-4.19a97 97 0 0 0 24.08 24.08l-4.19 7.25a8 8 0 0 0 13.86 8l4.17-7.23a95.1 95.1 0 0 0 32.9 8.82V232a8 8 0 0 0 16 0v-8.34a95.1 95.1 0 0 0 32.9-8.82l4.17 7.23a8 8 0 0 0 13.86-8l-4.19-7.25a97 97 0 0 0 24.08-24.08l7.25 4.19A8 8 0 0 0 225 184a8 8 0 0 0-2.92-10.93l-7.23-4.17a95.1 95.1 0 0 0 8.82-32.9H232a8 8 0 0 0 0-16m-160 8a55.91 55.91 0 0 1 21.38-44l25.38 44l-25.38 44A55.91 55.91 0 0 1 72 128m56 56a55.7 55.7 0 0 1-20.78-4l25.4-44h50.8A56.09 56.09 0 0 1 128 184m4.62-64l-25.4-44a56 56 0 0 1 76.2 44Z"></svg:path>`,
})
export class PhGearFineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineLightIcon],svg[ph-gear-fine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-18.23a85.6 85.6 0 0 0-8.49-31.69l15.79-9.11a6 6 0 0 0-6-10.4l-15.8 9.12a86.7 86.7 0 0 0-23.19-23.19l9.12-15.8a6 6 0 0 0-10.4-6l-9.11 15.79A85.6 85.6 0 0 0 134 42.23V24a6 6 0 0 0-12 0v18.23a85.6 85.6 0 0 0-31.69 8.49L81.2 34.93a6 6 0 0 0-10.4 6l9.12 15.8a86.7 86.7 0 0 0-23.19 23.19l-15.8-9.12a6 6 0 0 0-6 10.4l15.79 9.11A85.6 85.6 0 0 0 42.23 122H24a6 6 0 0 0 0 12h18.23a85.6 85.6 0 0 0 8.49 31.69l-15.79 9.11a6 6 0 0 0 6 10.4l15.8-9.12a86.7 86.7 0 0 0 23.19 23.19l-9.12 15.8a6 6 0 0 0 10.4 6l9.11-15.79a85.6 85.6 0 0 0 31.69 8.49V232a6 6 0 0 0 12 0v-18.23a85.6 85.6 0 0 0 31.69-8.49l9.11 15.79a6 6 0 0 0 5.21 3a5.93 5.93 0 0 0 3-.81a6 6 0 0 0 2.2-8.19l-9.12-15.8a86.7 86.7 0 0 0 23.19-23.19l15.8 9.12a6 6 0 0 0 6-10.4l-15.79-9.11a85.6 85.6 0 0 0 8.48-31.69H232a6 6 0 0 0 0-12M86 188.84a73.9 73.9 0 0 1 0-121.68L121.07 128ZM128 202a73.5 73.5 0 0 1-31.67-7.14L131.46 134h70.28A74.09 74.09 0 0 1 128 202m3.46-80L96.33 61.14A73.95 73.95 0 0 1 201.74 122Z"></svg:path>`,
})
export class PhGearFineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearFineThinIcon],svg[ph-gear-fine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-20.1a83.35 83.35 0 0 0-9.27-34.47l17.44-10.07a4 4 0 0 0-4-6.92l-17.45 10.07a84.5 84.5 0 0 0-25.23-25.23l10.07-17.45a4 4 0 0 0-6.92-4l-10.07 17.44A83.35 83.35 0 0 0 132 44.1V24a4 4 0 0 0-8 0v20.1a83.35 83.35 0 0 0-34.47 9.27L79.46 35.93a4 4 0 0 0-6.92 4l10.07 17.45a84.5 84.5 0 0 0-25.23 25.23L39.93 72.54a4 4 0 1 0-4 6.92l17.44 10.07A83.35 83.35 0 0 0 44.1 124H24a4 4 0 0 0 0 8h20.1a83.35 83.35 0 0 0 9.27 34.47l-17.44 10.07a4 4 0 0 0 2 7.46a3.9 3.9 0 0 0 2-.54l17.45-10.07a84.5 84.5 0 0 0 25.23 25.23l-10.07 17.45a4 4 0 0 0 1.46 5.46a4 4 0 0 0 5.46-1.46l10.07-17.44A83.35 83.35 0 0 0 124 211.9V232a4 4 0 0 0 8 0v-20.1a83.35 83.35 0 0 0 34.47-9.27l10.07 17.44a4 4 0 0 0 6.92-4l-10.07-17.45a84.5 84.5 0 0 0 25.23-25.23l17.45 10.07a3.9 3.9 0 0 0 2 .54a4 4 0 0 0 2-7.46l-17.44-10.07A83.35 83.35 0 0 0 211.9 132H232a4 4 0 0 0 0-8M128 52a76.09 76.09 0 0 1 75.89 72h-73.58L93.53 60.3A75.6 75.6 0 0 1 128 52m-76 76a76 76 0 0 1 34.61-63.69L123.38 128l-36.77 63.69A76 76 0 0 1 52 128m76 76a75.6 75.6 0 0 1-34.47-8.3l36.78-63.7h73.58A76.09 76.09 0 0 1 128 204"></svg:path>`,
})
export class PhGearFineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearLightIcon],svg[ph-gear-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m86-31.16c.06-1.89.06-3.79 0-5.68L229.33 106a6 6 0 0 0 1.11-5.29a105.3 105.3 0 0 0-10.68-25.81a6 6 0 0 0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6 6 0 0 0-3-4.53a105.7 105.7 0 0 0-25.77-10.66a6 6 0 0 0-5.29 1.14l-19.2 15.37a90 90 0 0 0-5.68 0L106 26.67a6 6 0 0 0-5.29-1.11A105.3 105.3 0 0 0 74.9 36.24a6 6 0 0 0-3 4.53l-2.67 24.45q-2.07 1.94-4 4L40.76 72a6 6 0 0 0-4.53 3a105.7 105.7 0 0 0-10.66 25.77a6 6 0 0 0 1.11 5.23l15.37 19.2a90 90 0 0 0 0 5.68l-15.38 19.17a6 6 0 0 0-1.11 5.29a105.3 105.3 0 0 0 10.68 25.76a6 6 0 0 0 4.53 3l24.45 2.71q1.94 2.07 4 4L72 215.24a6 6 0 0 0 3 4.53a105.7 105.7 0 0 0 25.77 10.66a6 6 0 0 0 5.29-1.11l19.1-15.32c1.89.06 3.79.06 5.68 0l19.21 15.38a6 6 0 0 0 3.75 1.31a6.2 6.2 0 0 0 1.54-.2a105.3 105.3 0 0 0 25.76-10.68a6 6 0 0 0 3-4.53l2.71-24.45q2.07-1.93 4-4l24.46-2.72a6 6 0 0 0 4.53-3a105.5 105.5 0 0 0 10.66-25.77a6 6 0 0 0-1.11-5.29Zm-3.1 41.63l-23.64 2.63a6 6 0 0 0-3.82 2a75 75 0 0 1-6.31 6.31a6 6 0 0 0-2 3.82l-2.63 23.63a94.3 94.3 0 0 1-17.36 7.14l-18.57-14.86a6 6 0 0 0-3.75-1.31h-.36a78 78 0 0 1-8.92 0a6 6 0 0 0-4.11 1.3L100.87 218a94 94 0 0 1-17.34-7.17l-2.63-23.62a6 6 0 0 0-2-3.82a75 75 0 0 1-6.31-6.31a6 6 0 0 0-3.82-2l-23.63-2.63A94.3 94.3 0 0 1 38 155.14l14.86-18.57a6 6 0 0 0 1.3-4.11a78 78 0 0 1 0-8.92a6 6 0 0 0-1.3-4.11L38 100.87a94 94 0 0 1 7.17-17.34l23.62-2.63a6 6 0 0 0 3.82-2a75 75 0 0 1 6.31-6.31a6 6 0 0 0 2-3.82l2.63-23.63A94.3 94.3 0 0 1 100.86 38l18.57 14.86a6 6 0 0 0 4.11 1.3a78 78 0 0 1 8.92 0a6 6 0 0 0 4.11-1.3L155.13 38a94 94 0 0 1 17.34 7.17l2.63 23.64a6 6 0 0 0 2 3.82a75 75 0 0 1 6.31 6.31a6 6 0 0 0 3.82 2l23.63 2.63a94.3 94.3 0 0 1 7.14 17.29l-14.86 18.57a6 6 0 0 0-1.3 4.11a78 78 0 0 1 0 8.92a6 6 0 0 0 1.3 4.11L218 155.13a94 94 0 0 1-7.15 17.34Z"></svg:path>`,
})
export class PhGearLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixIcon],svg[ph-gear-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a112.1 112.1 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.62a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8.1 8.1 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z"></svg:path>`,
})
export class PhGearSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixBoldIcon],svg[ph-gear-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28m113.86-49.57a12 12 0 0 0-5.86-8.09l-27.79-15.85l-.11-31.31a12 12 0 0 0-4.25-9.12a116 116 0 0 0-38-21.41a12 12 0 0 0-9.68.89L128 37.27L99.83 21.53a12 12 0 0 0-9.7-.9a116.1 116.1 0 0 0-38 21.47a12 12 0 0 0-4.24 9.1l-.14 31.34L20 98.35a12 12 0 0 0-5.85 8.11a110.7 110.7 0 0 0 0 43.11a12 12 0 0 0 5.85 8.09l27.82 15.85l.11 31.31a12 12 0 0 0 4.25 9.12a116 116 0 0 0 38 21.41a12 12 0 0 0 9.68-.89L128 218.73l28.14 15.74a12 12 0 0 0 9.7.9a116.1 116.1 0 0 0 38-21.47a12 12 0 0 0 4.24-9.1l.14-31.34l27.81-15.81a12 12 0 0 0 5.85-8.11a110.7 110.7 0 0 0-.02-43.11m-22.63 33.18l-26.88 15.28a11.94 11.94 0 0 0-4.55 4.59c-.54 1-1.11 1.93-1.7 2.88a12 12 0 0 0-1.83 6.31l-.14 30.33a91.8 91.8 0 0 1-21.07 11.87l-27.15-15.19a12 12 0 0 0-5.86-1.53h-3.73a12.1 12.1 0 0 0-6.14 1.51L93 210.82A92.3 92.3 0 0 1 71.88 199l-.11-30.24a12 12 0 0 0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.9 11.9 0 0 0 63.7 155l-26.9-15.37a86.5 86.5 0 0 1 0-23.24l26.88-15.28a12 12 0 0 0 4.55-4.58c.54-1 1.11-1.94 1.7-2.89a12 12 0 0 0 1.83-6.31L71.87 57a91.8 91.8 0 0 1 21.07-11.83l27.15 15.19a11.9 11.9 0 0 0 6.15 1.52h3.44a12.1 12.1 0 0 0 6.14-1.51L163 45.18A92.3 92.3 0 0 1 184.12 57l.11 30.24a12 12 0 0 0 1.83 6.32c.58.94 1.16 1.91 1.7 2.88a11.9 11.9 0 0 0 4.54 4.56l26.9 15.33a86.5 86.5 0 0 1 .03 23.28"></svg:path>`,
})
export class PhGearSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixDuotoneIcon],svg[ph-gear-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.6 104.6 0 0 0 162 32l-32 17.89h-4L94 32a104.6 104.6 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.2 99.2 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.6 104.6 0 0 0 94 224l32-17.87h4L162 224a104.6 104.6 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.2 99.2 0 0 0 .02-38.48M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2"></svg:path><svg:path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z"></svg:path></svg:g>`,
})
export class PhGearSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixFillIcon],svg[ph-gear-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.94 107.21a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhGearSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixLightIcon],svg[ph-gear-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m108-54.4a6 6 0 0 0-2.92-4l-30.44-17.38l-.42-.71l-.12-34.31a6 6 0 0 0-2.1-4.56a110.1 110.1 0 0 0-36.07-20.31a6 6 0 0 0-4.84.45l-30.63 17.08h-1l-30.55-17.1a6 6 0 0 0-4.86-.44A109.9 109.9 0 0 0 56 46.68a6 6 0 0 0-2.12 4.55l-.16 34.34c-.14.23-.28.47-.41.71l-30.4 17.29a6 6 0 0 0-2.91 4.05a104.8 104.8 0 0 0 0 40.78a6 6 0 0 0 2.92 4l30.42 17.33l.42.71l.12 34.31a6 6 0 0 0 2.12 4.61a110.1 110.1 0 0 0 36.07 20.31a6 6 0 0 0 4.84-.45l30.61-17.08h1l30.56 17.1a6.1 6.1 0 0 0 2.92.76a5.8 5.8 0 0 0 1.93-.32a109.9 109.9 0 0 0 36-20.36a6 6 0 0 0 2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6 6 0 0 0 2.92-4.05a104.8 104.8 0 0 0 .04-40.78m-11.25 35.79l-29.43 16.71a6.07 6.07 0 0 0-2.28 2.3c-.59 1-1.21 2.11-1.86 3.14a6 6 0 0 0-.91 3.16l-.16 33.21a98.2 98.2 0 0 1-27.52 15.53L133 200.88a6 6 0 0 0-2.93-.77h-3.88a6 6 0 0 0-3.07.76l-29.67 16.56a98 98 0 0 1-27.56-15.49l-.12-33.17a6 6 0 0 0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6 6 0 0 0-2.27-2.3L31.3 143.4a93 93 0 0 1 0-30.79L60.68 95.9A6.07 6.07 0 0 0 63 93.6c.59-1 1.21-2.11 1.86-3.14a6 6 0 0 0 .91-3.16l.16-33.21a98.2 98.2 0 0 1 27.48-15.53L123 55.12a5.8 5.8 0 0 0 3.07.76h3.74a6 6 0 0 0 3.07-.76l29.65-16.56a98 98 0 0 1 27.56 15.49l.12 33.17a6 6 0 0 0 .91 3.16c.64 1 1.27 2.08 1.86 3.14a6 6 0 0 0 2.27 2.3l29.45 16.78a93 93 0 0 1 .03 30.79Z"></svg:path>`,
})
export class PhGearSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearSixThinIcon],svg[ph-gear-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m106-56a4 4 0 0 0-2-2.7l-30.89-17.6q-.47-.82-1-1.62l-.01-34.88a3.94 3.94 0 0 0-1.42-3a107.8 107.8 0 0 0-35.41-19.94a4 4 0 0 0-3.23.29L129 45.87h-2L96 28.51a4 4 0 0 0-3.23-.3a108 108 0 0 0-35.39 20a4 4 0 0 0-1.41 3l-.16 34.9l-1 1.62L23.9 105.3A4 4 0 0 0 22 108a102.8 102.8 0 0 0 0 40a4 4 0 0 0 1.95 2.7l30.89 17.6q.47.83 1 1.62l.12 34.87a3.94 3.94 0 0 0 1.42 3a107.8 107.8 0 0 0 35.41 19.94a4 4 0 0 0 3.23-.29L127 210.13h2l31 17.36a4 4 0 0 0 3.23.3a108 108 0 0 0 35.39-20a4 4 0 0 0 1.41-3l.16-34.9l1-1.62l30.91-17.57a4 4 0 0 0 2-2.71A102.8 102.8 0 0 0 234 108m-7.48 36.67l-30.22 17.17a4 4 0 0 0-1.51 1.53c-.61 1.09-1.25 2.17-1.91 3.24a3.9 3.9 0 0 0-.61 2.1l-.16 34.15a99.8 99.8 0 0 1-29.7 16.77l-30.4-17a4.06 4.06 0 0 0-2-.51h-3.85a4.1 4.1 0 0 0-2.05.51l-30.45 17a100.2 100.2 0 0 1-29.77-16.73l-.12-34.12a3.93 3.93 0 0 0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4 4 0 0 0-1.51-1.53l-30.25-17.23a94.8 94.8 0 0 1 0-33.34L59.7 94.16a4 4 0 0 0 1.51-1.53c.61-1.09 1.25-2.17 1.91-3.23a4 4 0 0 0 .61-2.11l.16-34.15a99.8 99.8 0 0 1 29.7-16.77l30.4 17a4.1 4.1 0 0 0 2.05.51h3.84a4 4 0 0 0 2.05-.51l30.45-17a100.2 100.2 0 0 1 29.73 16.73l.12 34.12a3.93 3.93 0 0 0 .61 2.11c.66 1 1.3 2.14 1.91 3.23a4 4 0 0 0 1.51 1.53l30.25 17.23a94.8 94.8 0 0 1 .03 33.34Z"></svg:path>`,
})
export class PhGearSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGearThinIcon],svg[ph-gear-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m83.93-32.49q.13-3.51 0-7l15.83-19.79a4 4 0 0 0 .75-3.53A103.6 103.6 0 0 0 218 75.9a4 4 0 0 0-3-2l-25.19-2.8a89 89 0 0 0-4.95-4.95L182.07 41a4 4 0 0 0-2-3a104 104 0 0 0-25.25-10.5a4 4 0 0 0-3.53.74l-19.78 15.83q-3.51-.14-7 0L104.7 28.24a4 4 0 0 0-3.53-.75A103.6 103.6 0 0 0 75.9 38a4 4 0 0 0-2 3l-2.8 25.19a89 89 0 0 0-4.95 4.95L41 73.93a4 4 0 0 0-3 2a104 104 0 0 0-10.5 25.25a4 4 0 0 0 .74 3.53l15.83 19.78q-.14 3.51 0 7L28.24 151.3a4 4 0 0 0-.75 3.53A103.6 103.6 0 0 0 38 180.1a4 4 0 0 0 3 2l25.19 2.8c1.58 1.71 3.24 3.37 4.95 4.95l2.8 25.2a4 4 0 0 0 2 3a104 104 0 0 0 25.28 10.46a4 4 0 0 0 3.53-.74l19.78-15.83q3.51.13 7 0l19.79 15.83a4 4 0 0 0 2.5.88a4 4 0 0 0 1-.13A103.6 103.6 0 0 0 180.1 218a4 4 0 0 0 2-3l2.8-25.19c1.71-1.58 3.37-3.24 4.95-4.95l25.2-2.8a4 4 0 0 0 3-2a104 104 0 0 0 10.46-25.28a4 4 0 0 0-.74-3.53Zm.17 42.83l-24.67 2.74a4 4 0 0 0-2.55 1.32a76 76 0 0 1-6.48 6.48a4 4 0 0 0-1.32 2.55l-2.74 24.66a95.5 95.5 0 0 1-19.64 8.15l-19.38-15.51a4 4 0 0 0-2.5-.87h-.24a74 74 0 0 1-9.16 0a4 4 0 0 0-2.74.87l-19.37 15.5a95.3 95.3 0 0 1-19.65-8.13l-2.74-24.67a4 4 0 0 0-1.32-2.55a76 76 0 0 1-6.48-6.48a4 4 0 0 0-2.55-1.32l-24.66-2.74a95.5 95.5 0 0 1-8.15-19.64l15.51-19.38a4 4 0 0 0 .87-2.74a78 78 0 0 1 0-9.16a4 4 0 0 0-.87-2.74l-15.5-19.37a95.3 95.3 0 0 1 8.13-19.65l24.67-2.74a4 4 0 0 0 2.55-1.32a76 76 0 0 1 6.48-6.48a4 4 0 0 0 1.32-2.55l2.74-24.66a95.5 95.5 0 0 1 19.64-8.15l19.38 15.51a4 4 0 0 0 2.74.87a74 74 0 0 1 9.16 0a4 4 0 0 0 2.74-.87l19.37-15.5a95.3 95.3 0 0 1 19.65 8.13l2.74 24.67a4 4 0 0 0 1.32 2.55a76 76 0 0 1 6.48 6.48a4 4 0 0 0 2.55 1.32l24.66 2.74a95.5 95.5 0 0 1 8.15 19.64l-15.51 19.38a4 4 0 0 0-.87 2.74a78 78 0 0 1 0 9.16a4 4 0 0 0 .87 2.74l15.5 19.37a95.3 95.3 0 0 1-8.13 19.65"></svg:path>`,
})
export class PhGearThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleIcon],svg[ph-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96M64 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path>`,
})
export class PhGenderFemaleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleBoldIcon],svg[ph-gender-female-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a84 84 0 1 0-96 83.13V196H88a12 12 0 0 0 0 24h28v20a12 12 0 0 0 24 0v-20h28a12 12 0 0 0 0-24h-28v-16.87A84.12 84.12 0 0 0 212 96M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"></svg:path>`,
})
export class PhGenderFemaleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleDuotoneIcon],svg[ph-gender-female-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 96a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96M64 96a64 64 0 1 1 64 64a64.07 64.07 0 0 1-64-64"></svg:path></svg:g>`,
})
export class PhGenderFemaleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleFillIcon],svg[ph-gender-female-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 144a40 40 0 1 1 40-40a40 40 0 0 1-40 40m88-104v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-80 136v-16.58a56 56 0 1 0-16 0V176H96a8 8 0 0 0 0 16h24v16a8 8 0 0 0 16 0v-16h24a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhGenderFemaleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleLightIcon],svg[ph-gender-female-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 96a78 78 0 1 0-84 77.75V202H88a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12h-34v-28.25A78.09 78.09 0 0 0 206 96M62 96a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66"></svg:path>`,
})
export class PhGenderFemaleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderFemaleThinIcon],svg[ph-gender-female-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 96a76 76 0 1 0-80 75.89V204H88a4 4 0 0 0 0 8h36v28a4 4 0 0 0 8 0v-28h36a4 4 0 0 0 0-8h-36v-32.11A76.09 76.09 0 0 0 204 96M60 96a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"></svg:path>`,
})
export class PhGenderFemaleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexIcon],svg[ph-gender-intersex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24h-40a8 8 0 0 0 0 16h20.69l-25.15 25.15A64 64 0 1 0 112 175.48V192H88a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16h-24v-16.52a63.92 63.92 0 0 0 45.84-98L200 51.31V72a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-88 136a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhGenderIntersexIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexBoldIcon],svg[ph-gender-intersex-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 20h-40a12 12 0 0 0 0 24h11l-15.64 15.67A68 68 0 1 0 108 178.92V192H88a12 12 0 0 0 0 24h20v16a12 12 0 0 0 24 0v-16h20a12 12 0 0 0 0-24h-20v-13.08a67.93 67.93 0 0 0 46.9-100.84L196 61v11a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12m-88 136a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhGenderIntersexBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexDuotoneIcon],svg[ph-gender-intersex-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M208 24h-40a8 8 0 0 0 0 16h20.69l-25.15 25.15A64 64 0 1 0 112 175.48V192H88a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16h-24v-16.52a63.92 63.92 0 0 0 45.84-98L200 51.31V72a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-88 136a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhGenderIntersexDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexFillIcon],svg[ph-gender-intersex-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.91 113.72a28 28 0 1 1-25.63-25.63a28 28 0 0 1 25.63 25.63M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-28 16a8 8 0 0 0-8-8h-27.73a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h8.69l-15.77 15.77A44 44 0 1 0 112 159.26V176H92.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h20v15.73a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V192h19.73a8.17 8.17 0 0 0 8.25-7.47a8 8 0 0 0-8-8.53H128v-16.74a44 44 0 0 0 28.24-68.18L172 75.31v8.42a8.18 8.18 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8Z"></svg:path>`,
})
export class PhGenderIntersexFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexLightIcon],svg[ph-gender-intersex-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 26h-40a6 6 0 0 0 0 12h25.52l-30 29.94A62 62 0 1 0 114 173.7V194H88a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12h-26v-20.3a62 62 0 0 0 45.28-96.5L202 46.48V72a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-88 136a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhGenderIntersexLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderIntersexThinIcon],svg[ph-gender-intersex-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28h-40a4 4 0 0 0 0 8h30.34l-34.79 34.79A60 60 0 1 0 116 171.85V196H88a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8h-28v-24.15A59.94 59.94 0 0 0 168.68 77L204 41.66V72a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-88 136a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGenderIntersexThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleIcon],svg[ph-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32h-48a8 8 0 0 0 0 16h28.69l-42.07 42.07a80 80 0 1 0 11.31 11.31L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-66.76 165.29a64 64 0 1 1 0-90.53a64.1 64.1 0 0 1 0 90.53"></svg:path>`,
})
export class PhGenderMaleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleBoldIcon],svg[ph-gender-male-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28h-48a12 12 0 0 0 0 24h19l-32.72 32.74a84 84 0 1 0 17 17L204 69v19a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-69.59 166.46a60 60 0 1 1 0-84.87a60.1 60.1 0 0 1 0 84.87"></svg:path>`,
})
export class PhGenderMaleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleDuotoneIcon],svg[ph-gender-male-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M154.91 202.91a72 72 0 1 1 0-101.82a72 72 0 0 1 0 101.82" opacity=".2"></svg:path><svg:path d="M216 32h-48a8 8 0 0 0 0 16h28.69l-42.07 42.07a80 80 0 1 0 11.31 11.31L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-66.76 165.29a64 64 0 1 1 0-90.53a64.1 64.1 0 0 1 0 90.53"></svg:path></svg:g>`,
})
export class PhGenderMaleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleFillIcon],svg[ph-gender-male-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 140a36 36 0 1 1-36-36a36 36 0 0 1 36 36m64-100v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-24 32a8 8 0 0 0-8-8h-32a8 8 0 0 0 0 16h12.69l-18 18A52.08 52.08 0 1 0 158 109.35l18-18V104a8 8 0 0 0 16 0Z"></svg:path>`,
})
export class PhGenderMaleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleLightIcon],svg[ph-gender-male-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-48a6 6 0 0 0 0 12h33.52l-46.8 46.79a78 78 0 1 0 4.42 114.4a78.11 78.11 0 0 0 4.07-105.91L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-65.34 164.7a66 66 0 1 1 0-93.36a66.1 66.1 0 0 1 0 93.36"></svg:path>`,
})
export class PhGenderMaleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderMaleThinIcon],svg[ph-gender-male-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-48a4 4 0 0 0 0 8h38.35l-51.53 51.52a76 76 0 1 0 5.66 5.66L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-63.93 164.11a68 68 0 1 1 0-96.18a68.08 68.08 0 0 1 0 96.18"></svg:path>`,
})
export class PhGenderMaleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterIcon],svg[ph-gender-neuter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path>`,
})
export class PhGenderNeuterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterBoldIcon],svg[ph-gender-neuter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 104a84 84 0 1 0-96 83.13V232a12 12 0 0 0 24 0v-44.87A84.12 84.12 0 0 0 212 104m-84 60a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"></svg:path>`,
})
export class PhGenderNeuterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterDuotoneIcon],svg[ph-gender-neuter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6m-80 64a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"></svg:path></svg:g>`,
})
export class PhGenderNeuterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterFillIcon],svg[ph-gender-neuter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.84 108.35a40 40 0 1 1-36.19-36.19a40 40 0 0 1 36.19 36.19M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 72a56 56 0 1 0-64 55.42v32.31a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8v-32.56A56.09 56.09 0 0 0 184 112"></svg:path>`,
})
export class PhGenderNeuterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterLightIcon],svg[ph-gender-neuter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 104a78 78 0 1 0-84 77.75V232a6 6 0 0 0 12 0v-50.25A78.09 78.09 0 0 0 206 104m-78 66a66 66 0 1 1 66-66a66.08 66.08 0 0 1-66 66"></svg:path>`,
})
export class PhGenderNeuterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNeuterThinIcon],svg[ph-gender-neuter-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 104a76 76 0 1 0-80 75.89V232a4 4 0 0 0 8 0v-52.11A76.09 76.09 0 0 0 204 104m-76 68a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhGenderNeuterThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryIcon],svg[ph-gender-nonbinary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67L92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48L83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0M128 224a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path>`,
})
export class PhGenderNonbinaryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryBoldIcon],svg[ph-gender-nonbinary-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 93V69.2l21.83 13.09a12 12 0 1 0 12.34-20.58L151.32 48l22.85-13.71a12 12 0 0 0-12.34-20.58L128 34L94.17 13.71a12 12 0 0 0-12.34 20.58L104.68 48L81.83 61.71a12 12 0 1 0 12.34 20.58L116 69.2V93a76 76 0 1 0 24 0m-12 127a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGenderNonbinaryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryDuotoneIcon],svg[ph-gender-nonbinary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67L92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48L83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0M128 224a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path></svg:g>`,
})
export class PhGenderNonbinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryFillIcon],svg[ph-gender-nonbinary-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 184a52 52 0 0 1-8-103.38v-20.8L91 95.43a8 8 0 0 1-6-14.86L106.46 72L85 63.43a8 8 0 0 1 6-14.86l37 14.81l37-14.81a8 8 0 1 1 6 14.86L149.54 72L171 80.57a8 8 0 0 1-6 14.86l-29-11.61v20.8A52 52 0 0 1 128 208m36-52a36 36 0 1 1-36-36a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhGenderNonbinaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryLightIcon],svg[ph-gender-nonbinary-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 98.27V58.6l30.91 18.54a6 6 0 1 0 6.18-10.28L139.66 48l31.43-18.85a6 6 0 1 0-6.18-10.29L128 41L91.09 18.86a6 6 0 1 0-6.18 10.29L116.34 48L84.91 66.86a6 6 0 1 0 6.18 10.28L122 58.6v39.67a70 70 0 1 0 12 0M128 226a58 58 0 1 1 58-58a58.07 58.07 0 0 1-58 58"></svg:path>`,
})
export class PhGenderNonbinaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryThinIcon],svg[ph-gender-nonbinary-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 100.13V55.07l33.94 20.36a4 4 0 1 0 4.12-6.86L135.77 48l34.29-20.57a4 4 0 1 0-4.12-6.86L128 43.34L90.06 20.57a4 4 0 1 0-4.12 6.86L120.23 48L85.94 68.57a4 4 0 0 0 4.12 6.86L124 55.07v45.06a68 68 0 1 0 8 0M128 228a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60"></svg:path>`,
})
export class PhGenderNonbinaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderIcon],svg[ph-gender-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32h-48a8 8 0 0 0 0 16h28.69L168 76.69l-18.34-18.34a8 8 0 1 0-11.32 11.31L156.69 88l-15.76 15.76a71.94 71.94 0 1 0 11.32 11.31L168 99.33l18.34 18.34a8 8 0 0 0 11.32-11.31L179.31 88L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-80.4 167.63A56 56 0 1 1 152 160a56.08 56.08 0 0 1-16.4 39.63"></svg:path>`,
})
export class PhGenderTransgenderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderBoldIcon],svg[ph-gender-transgender-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28h-44a12 12 0 0 0 0 24h15l-19 19l-15.51-15.48a12 12 0 0 0-17 17L151 88l-10.42 10.46a76 76 0 1 0 17 17L168 105l15.51 15.52a12 12 0 0 0 17-17L185 88l19-19v15a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12m-83.23 168.8A52 52 0 1 1 148 160a52.05 52.05 0 0 1-15.23 36.8"></svg:path>`,
})
export class PhGenderTransgenderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderDuotoneIcon],svg[ph-gender-transgender-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M141.25 205.25a64 64 0 1 1 0-90.5a64 64 0 0 1 0 90.5" opacity=".2"></svg:path><svg:path d="M216 32h-48a8 8 0 0 0 0 16h28.69L168 76.69l-18.34-18.34a8 8 0 1 0-11.32 11.31L156.69 88l-15.76 15.76a71.94 71.94 0 1 0 11.32 11.31L168 99.33l18.34 18.34a8 8 0 0 0 11.32-11.31L179.31 88L208 59.32V88a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8m-80.4 167.63A56 56 0 1 1 152 160a56.08 56.08 0 0 1-16.4 39.63"></svg:path></svg:g>`,
})
export class PhGenderTransgenderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderFillIcon],svg[ph-gender-transgender-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.92 150a24 24 0 1 1-22-22a24 24 0 0 1 22 22M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-24 32a8 8 0 0 0-8-8h-27.73a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h8.69L148 96.69l-10.34-10.35a8 8 0 0 0-11.49.18a8.22 8.22 0 0 0 .41 11.37L136.69 108L126 118.64A40 40 0 1 0 137.36 130L148 119.31l10.34 10.35a8 8 0 0 0 11.71-.43a8.2 8.2 0 0 0-.6-11.1L159.31 108L176 91.31v8.42a8.18 8.18 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8Z"></svg:path>`,
})
export class PhGenderTransgenderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderLightIcon],svg[ph-gender-transgender-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34h-48a6 6 0 0 0 0 12h33.52L168 79.52l-19.76-19.76a6 6 0 1 0-8.48 8.49L159.52 88l-18.46 18.46a69.94 69.94 0 1 0 8.49 8.48L168 96.5l19.76 19.76a6 6 0 0 0 8.48-8.49L176.48 88L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6m-79 167a58 58 0 1 1 17-41a58 58 0 0 1-17 41"></svg:path>`,
})
export class PhGenderTransgenderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGenderTransgenderThinIcon],svg[ph-gender-transgender-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-48a4 4 0 0 0 0 8h38.34L168 82.35l-21.17-21.17a4 4 0 1 0-5.66 5.65L162.34 88l-21.17 21.18a68.16 68.16 0 1 0 5.65 5.66L168 93.67l21.17 21.17a4 4 0 1 0 5.66-5.66L173.66 88L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-77.57 166.45A60 60 0 1 1 156 160a60.07 60.07 0 0 1-17.57 42.45"></svg:path>`,
})
export class PhGenderTransgenderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostIcon],svg[ph-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85l-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85l-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85l24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85l24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z"></svg:path>`,
})
export class PhGhostIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostBoldIcon],svg[ph-ghost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 116a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m72 20v96a12 12 0 0 1-19.6 9.29l-21.73-17.79l-21.74 17.79a12 12 0 0 1-15.2 0L128 207.5l-21.73 17.79a12 12 0 0 1-15.2 0L69.33 207.5L47.6 225.29A12 12 0 0 1 28 216v-96a100 100 0 0 1 200 0m-24 0a76 76 0 0 0-152 0v70.68l9.73-8a12 12 0 0 1 15.2 0l21.74 17.82l21.73-17.79a12 12 0 0 1 15.2 0l21.73 17.79l21.74-17.79a12 12 0 0 1 15.2 0l9.73 8Z"></svg:path>`,
})
export class PhGhostBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostDuotoneIcon],svg[ph-ghost-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 120v96l-29.33-24l-29.34 24L128 192l-29.33 24l-29.34-24L40 216v-96a88 88 0 0 1 176 0" opacity=".2"></svg:path><svg:path d="M112 116a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 16v96a8 8 0 0 1-13.07 6.19l-24.26-19.85l-24.27 19.85a8 8 0 0 1-10.13 0L128 202.34l-24.27 19.85a8 8 0 0 1-10.13 0l-24.27-19.85l-24.26 19.85A8 8 0 0 1 32 216v-96a96 96 0 0 1 192 0m-16 0a80 80 0 0 0-160 0v79.12l16.27-13.31a8 8 0 0 1 10.13 0l24.27 19.85l24.26-19.85a8 8 0 0 1 10.14 0l24.26 19.85l24.27-19.85a8 8 0 0 1 10.13 0L208 199.12Z"></svg:path></svg:g>`,
})
export class PhGhostDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostFillIcon],svg[ph-ghost-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a96.11 96.11 0 0 0-96 96v96a8 8 0 0 0 13.07 6.19l24.26-19.85l24.27 19.85a8 8 0 0 0 10.13 0L128 202.34l24.27 19.85a8 8 0 0 0 10.13 0l24.27-19.85l24.26 19.85A8 8 0 0 0 224 216v-96a96.11 96.11 0 0 0-96-96m-28 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGhostFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostLightIcon],svg[ph-ghost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 116a10 10 0 1 1-10-10a10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66 14v96a6 6 0 0 1-9.8 4.64l-25.53-20.89l-25.54 20.89a6 6 0 0 1-7.6 0L128 199.75l-25.53 20.89a6 6 0 0 1-7.6 0l-25.54-20.89l-25.53 20.89A6 6 0 0 1 34 216v-96a94 94 0 0 1 188 0m-12 0a82 82 0 0 0-164 0v83.34l19.53-16a6 6 0 0 1 7.6 0l25.54 20.89l25.53-20.89a6 6 0 0 1 7.6 0l25.53 20.89l25.54-20.89a6 6 0 0 1 7.6 0l19.53 16Z"></svg:path>`,
})
export class PhGhostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGhostThinIcon],svg[ph-ghost-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 116a8 8 0 1 1-8-8a8 8 0 0 1 8 8m48-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64 12v96a4 4 0 0 1-6.53 3.1l-26.8-21.93l-26.8 21.93a4 4 0 0 1-5.07 0L128 197.17l-26.8 21.93a4 4 0 0 1-5.07 0l-26.8-21.93l-26.8 21.93A4 4 0 0 1 36 216v-96a92 92 0 0 1 184 0m-8 0a84 84 0 0 0-168 0v87.56l22.8-18.66a4 4 0 0 1 5.07 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.06 0l26.8 21.93l26.8-21.93a4 4 0 0 1 5.07 0l22.8 18.66Z"></svg:path>`,
})
export class PhGhostThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifIcon],svg[ph-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 72v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m88-8h-56a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-48h40a8 8 0 0 0 0-16h-40V80h48a8 8 0 0 0 0-16M96 120H72a8 8 0 0 0 0 16h16v16a24 24 0 0 1-48 0v-48a24 24 0 0 1 24-24c11.19 0 21.61 7.74 24.25 18a8 8 0 0 0 15.5-4C99.27 76.62 82.56 64 64 64a40 40 0 0 0-40 40v48a40 40 0 0 0 80 0v-24a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhGifIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifBoldIcon],svg[ph-gif-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0m84 12a12 12 0 0 0 0-24h-56a12 12 0 0 0-12 12v112a12 12 0 0 0 24 0v-44h36a12 12 0 0 0 0-24h-36V84ZM96 116H72a12 12 0 0 0 0 24h12v12a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20c9.42 0 18.18 6.45 20.38 15a12 12 0 1 0 23.24-6C102.7 73.88 84.35 60 64 60a44.05 44.05 0 0 0-44 44v48a44 44 0 0 0 88 0v-24a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhGifBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifDuotoneIcon],svg[ph-gif-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56v144a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 72v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m88-8h-56a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-48h40a8 8 0 0 0 0-16h-40V80h48a8 8 0 0 0 0-16M96 120H72a8 8 0 0 0 0 16h16v16a24 24 0 0 1-48 0v-48a24 24 0 0 1 24-24c11.19 0 21.61 7.74 24.25 18a8 8 0 0 0 15.5-4C99.27 76.62 82.56 64 64 64a40 40 0 0 0-40 40v48a40 40 0 0 0 80 0v-24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhGifDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifFillIcon],svg[ph-gif-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 144a32 32 0 0 1-64 0v-32a32 32 0 0 1 55.85-21.33a8 8 0 1 1-11.92 10.66A16 16 0 0 0 64 112v32a16 16 0 0 0 32 0v-8h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm32 24a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm60-72h-28v24h20a8 8 0 0 1 0 16h-20v32a8 8 0 0 1-16 0V88a8 8 0 0 1 8-8h36a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhGifFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifLightIcon],svg[ph-gif-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M142 72v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0m90-6h-56a6 6 0 0 0-6 6v112a6 6 0 0 0 12 0v-50h42a6 6 0 0 0 0-12h-42V78h50a6 6 0 0 0 0-12M96 122H72a6 6 0 0 0 0 12h18v18a26 26 0 0 1-52 0v-48a26 26 0 0 1 26-26c12.07 0 23.33 8.38 26.19 19.5a6 6 0 1 0 11.62-3C97.56 78 81.66 66 64 66a38 38 0 0 0-38 38v48a38 38 0 0 0 76 0v-24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhGifLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGifThinIcon],svg[ph-gif-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m92-4h-56a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h44a4 4 0 0 0 0-8h-44V76h52a4 4 0 0 0 0-8M96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGifThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftIcon],svg[ph-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.7 13.7 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"></svg:path>`,
})
export class PhGiftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftBoldIcon],svg[ph-gift-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 68h-25.94A33.8 33.8 0 0 0 196 49.69A36.62 36.62 0 0 0 158.31 12A33.44 33.44 0 0 0 134 23.25a54.7 54.7 0 0 0-6 8.3a54.7 54.7 0 0 0-6-8.3A33.44 33.44 0 0 0 97.69 12A36.62 36.62 0 0 0 60 49.69A33.8 33.8 0 0 0 65.94 68H40a20 20 0 0 0-20 20v32a20 20 0 0 0 16 19.6V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-60.4a20 20 0 0 0 16-19.6V88a20 20 0 0 0-20-20m-4 48h-72V92h72Zm-60-76.83a9.6 9.6 0 0 1 7-3.17h.35A12.62 12.62 0 0 1 172 49a9.6 9.6 0 0 1-3.17 7c-6.9 6.12-18.25 9.26-27.63 10.76c1.5-9.34 4.64-20.69 10.8-27.59m-64.3.53a12.8 12.8 0 0 1 8.91-3.7H97a9.6 9.6 0 0 1 7 3.17c6.12 6.9 9.26 18.24 10.75 27.61C105.45 65.27 94 62.13 87.17 56A9.6 9.6 0 0 1 84 49a12.72 12.72 0 0 1 3.7-9.3M44 92h72v24H44Zm16 48h56v56H60Zm80 56v-56h56v56Z"></svg:path>`,
})
export class PhGiftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftDuotoneIcon],svg[ph-gift-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z" opacity=".2"></svg:path><svg:path d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.7 13.7 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"></svg:path></svg:g>`,
})
export class PhGiftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftFillIcon],svg[ph-gift-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a55 55 0 0 0-9 14.48a55 55 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-92H40V88h80v32h16V88h80v32h-80v92a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M84.51 59a13.7 13.7 0 0 1-4.5-10a16.62 16.62 0 0 1 16.58-17h.49a13.7 13.7 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92C109.71 70.39 94 67.43 84.51 59m87 0c-9.49 8.4-25.24 11.36-35 12.4C137.7 60.89 141 45.5 149 36.51a13.7 13.7 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.7 13.7 0 0 1-4.51 9.92Z"></svg:path>`,
})
export class PhGiftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftLightIcon],svg[ph-gift-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 74h-41.26a46.4 46.4 0 0 0 6-4.48a27.56 27.56 0 0 0 9.22-20A30.63 30.63 0 0 0 158.5 18a27.56 27.56 0 0 0-20 9.22A57.1 57.1 0 0 0 128 45.76a57.1 57.1 0 0 0-10.48-18.53A27.56 27.56 0 0 0 97.5 18A30.63 30.63 0 0 0 66 49.51a27.56 27.56 0 0 0 9.22 20a46 46 0 0 0 6 4.48H40A14 14 0 0 0 26 88v32a14 14 0 0 0 14 14h2v66a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-66h2a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m-80.23-11c2.25-12.12 6.29-21.75 11.69-27.85a15.68 15.68 0 0 1 11.4-5.15h.55A18.6 18.6 0 0 1 178 49.14a15.68 15.68 0 0 1-5.18 11.4c-10.72 9.46-28.9 12.29-38.48 13.11c.25-2.89.66-6.57 1.43-10.65M83.45 35.45A18.7 18.7 0 0 1 96.59 30h.55a15.68 15.68 0 0 1 11.4 5.18c9.46 10.72 12.29 28.9 13.11 38.48c-2.89-.25-6.57-.68-10.61-1.43c-12.12-2.23-21.75-6.29-27.85-11.7A15.64 15.64 0 0 1 78 49.14a18.65 18.65 0 0 1 5.45-13.69M38 120V88a2 2 0 0 1 2-2h82v36H40a2 2 0 0 1-2-2m16 80v-66h68v68H56a2 2 0 0 1-2-2m148 0a2 2 0 0 1-2 2h-66v-68h68Zm16-80a2 2 0 0 1-2 2h-82V86h82a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhGiftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGiftThinIcon],svg[ph-gift-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 76h-49.19a50.5 50.5 0 0 0 12.63-8A25.53 25.53 0 0 0 188 49.44A28.62 28.62 0 0 0 158.56 20A25.53 25.53 0 0 0 140 28.56c-5.91 6.67-9.63 15.36-12 23.69c-2.35-8.33-6.07-17-12-23.69A25.53 25.53 0 0 0 97.44 20A28.62 28.62 0 0 0 68 49.44A25.53 25.53 0 0 0 76.56 68a50.5 50.5 0 0 0 12.63 8H40a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h4v68a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-68h4a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m-70-42.14A17.6 17.6 0 0 1 158.8 28h.61A20.62 20.62 0 0 1 180 49.2a17.6 17.6 0 0 1-5.86 12.8c-12.09 10.7-33.07 13.21-42 13.79c.62-8.86 3.12-29.79 13.86-41.93M76 49.2A20.62 20.62 0 0 1 96.59 28h.61a17.6 17.6 0 0 1 12.8 5.86c10.71 12.09 13.21 33.07 13.79 42c-8.89-.58-29.87-3.09-42-13.79A17.6 17.6 0 0 1 76 49.2M36 120V88a4 4 0 0 1 4-4h84v40H40a4 4 0 0 1-4-4m16 80v-68h72v72H56a4 4 0 0 1-4-4m152 0a4 4 0 0 1-4 4h-68v-72h72Zm16-80a4 4 0 0 1-4 4h-84V84h84a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhGiftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchIcon],svg[ph-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16M200 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitBranchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchBoldIcon],svg[ph-git-branch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 64a36 36 0 1 0-48 33.94V112a4 4 0 0 1-4 4H96a28 28 0 0 0-4 .29V97.94a36 36 0 1 0-24 0v60.12a36 36 0 1 0 24 0V144a4 4 0 0 1 4-4h88a28 28 0 0 0 28-28V97.94A36.07 36.07 0 0 0 236 64M80 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12M200 76a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitBranchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchDuotoneIcon],svg[ph-git-branch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16M200 80a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitBranchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchFillIcon],svg[ph-git-branch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H96a23.8 23.8 0 0 0-8 1.38V95a32 32 0 1 0-16 0v66a32 32 0 1 0 16 0v-17a8 8 0 0 1 8-8h88a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M64 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhGitBranchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchLightIcon],svg[ph-git-branch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H96a21.84 21.84 0 0 0-10 2.42v-31a30 30 0 1 0-12 0v69.2a30 30 0 1 0 12 0V144a10 10 0 0 1 10-10h88a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 230 64M62 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18M200 82a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitBranchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitBranchThinIcon],svg[ph-git-branch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H96a19.9 19.9 0 0 0-12 4V91.71a28 28 0 1 0-8 0v72.58a28 28 0 1 0 8 0V144a12 12 0 0 1 12-12h88a20 20 0 0 0 20-20V91.71A28 28 0 0 0 228 64M60 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20M200 84a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitBranchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitIcon],svg[ph-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhGitCommitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitBoldIcon],svg[ph-git-commit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 116h-57.21a60 60 0 0 0-117.58 0H12a12 12 0 0 0 0 24h57.21a60 60 0 0 0 117.58 0H244a12 12 0 0 0 0-24m-116 48a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhGitCommitBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitDuotoneIcon],svg[ph-git-commit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhGitCommitDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitFillIcon],svg[ph-git-commit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128a8 8 0 0 1-8 8h-64.58a56 56 0 0 1-110.84 0H8a8 8 0 0 1 0-16h64.58a56 56 0 0 1 110.84 0H248a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGitCommitFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitLightIcon],svg[ph-git-commit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 122h-66.34a54 54 0 0 0-107.32 0H8a6 6 0 0 0 0 12h66.34a54 54 0 0 0 107.32 0H248a6 6 0 0 0 0-12m-120 48a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhGitCommitLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitCommitThinIcon],svg[ph-git-commit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 124h-68.17a52 52 0 0 0-103.66 0H8a4 4 0 0 0 0 8h68.17a52 52 0 0 0 103.66 0H248a4 4 0 0 0 0-8m-120 48a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhGitCommitThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffIcon],svg[ph-git-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 152a8 8 0 0 0-8 8v28.69L66.34 151a8 8 0 0 1-2.34-5.63V95a32 32 0 1 0-16 0v50.38a23.85 23.85 0 0 0 7 17L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m168 97v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitDiffIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffBoldIcon],svg[ph-git-diff-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 148a12 12 0 0 0-12 12v19l-30.83-30.8a4 4 0 0 1-1.17-2.83V97.94a36 36 0 1 0-24 0v47.43a27.8 27.8 0 0 0 8.2 19.8L83 196H64a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M56 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m156 106.06v-47.43a27.8 27.8 0 0 0-8.2-19.8L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l30.83 30.83a4 4 0 0 1 1.17 2.83v47.43a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitDiffBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffDuotoneIcon],svg[ph-git-diff-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M80 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m120 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M112 152a8 8 0 0 0-8 8v28.69L66.34 151a8 8 0 0 1-2.34-5.63V95a32 32 0 1 0-16 0v50.38a23.85 23.85 0 0 0 7 17L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m168 97v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitDiffDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffFillIcon],svg[ph-git-diff-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118.18 213.08c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H64a8 8 0 0 1 0-16h28.69L55 162.34a23.85 23.85 0 0 1-7-17V95a32 32 0 1 1 16 0v50.38a8 8 0 0 0 2.34 5.62L104 188.69V160a8 8 0 0 1 16 0v48a7 7 0 0 1 0 .8v.32c0 .11 0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28ZM208 161v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48.78c-.14 0-.28 0-.41.06h-.37l-.43.11l-.33.08l-.4.14l-.34.13l-.35.16l-.36.18a3 3 0 0 0-.31.18c-.12.07-.25.14-.36.22a4 4 0 0 0-.31.23a4 4 0 0 0-.32.24c-.15.12-.28.24-.42.37l-.17.15l-.16.18c-.12.13-.25.26-.36.4l-.26.35l-.21.28l-.24.39c-.05.1-.11.19-.16.28s-.13.27-.19.4l-.15.31l-.14.39c0 .12-.09.23-.12.35s-.07.26-.1.39a3 3 0 0 0-.09.37c0 .16 0 .31-.07.46s0 .21-.05.32a7 7 0 0 0 0 .8V96a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0"></svg:path>`,
})
export class PhGitDiffFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffLightIcon],svg[ph-git-diff-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 154a6 6 0 0 0-6 6v33.52l-41.07-41.08a9.93 9.93 0 0 1-2.93-7.07v-52a30 30 0 1 0-12 0v52a21.88 21.88 0 0 0 6.44 15.56L97.52 202H64a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6M38 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m168 98.6v-52a21.88 21.88 0 0 0-6.44-15.56L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l41.07 41.08a9.93 9.93 0 0 1 2.93 7.07v52a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitDiffLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitDiffThinIcon],svg[ph-git-diff-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 156a4 4 0 0 0-4 4v38.34l-44.49-44.48a12 12 0 0 1-3.51-8.49V91.71a28 28 0 1 0-8 0v53.66a19.85 19.85 0 0 0 5.86 14.14L102.34 204H64a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4M36 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m168 100.29v-53.66a19.85 19.85 0 0 0-5.86-14.14L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l44.49 44.48a12 12 0 0 1 3.51 8.49v53.66a28 28 0 1 0 8 0M200 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitDiffThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkIcon],svg[ph-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitForkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkBoldIcon],svg[ph-git-fork-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 64a36 36 0 1 0-48 33.94V112a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V97.94a36 36 0 1 0-24 0V112a28 28 0 0 0 28 28h36v18.06a36 36 0 1 0 24 0V140h36a28 28 0 0 0 28-28V97.94A36.07 36.07 0 0 0 228 64M64 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m64 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m64-128a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitForkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkDuotoneIcon],svg[ph-git-fork-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31M48 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m96 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48-112a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitForkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkFillIcon],svg[ph-git-fork-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64a32 32 0 1 0-40 31v17a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V95a32 32 0 1 0-16 0v17a24 24 0 0 0 24 24h40v25a32 32 0 1 0 16 0v-25h40a24 24 0 0 0 24-24V95a32.06 32.06 0 0 0 24-31m-80 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhGitForkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkLightIcon],svg[ph-git-fork-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 64a30 30 0 1 0-36 29.4V112a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V93.4a30 30 0 1 0-12 0V112a22 22 0 0 0 22 22h42v28.6a30 30 0 1 0 12 0V134h42a22 22 0 0 0 22-22V93.4A30.05 30.05 0 0 0 222 64M46 64a18 18 0 1 1 18 18a18 18 0 0 1-18-18m100 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18m46-110a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitForkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitForkThinIcon],svg[ph-git-fork-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 64a28 28 0 1 0-32 27.71V112a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V91.71a28 28 0 1 0-8 0V112a20 20 0 0 0 20 20h44v32.29a28 28 0 1 0 8 0V132h44a20 20 0 0 0 20-20V91.71A28 28 0 0 0 220 64M44 64a20 20 0 1 1 20 20a20 20 0 0 1-20-20m104 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m44-108a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitForkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeIcon],svg[ph-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M64 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitMergeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeBoldIcon],svg[ph-git-merge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 108a36.05 36.05 0 0 0-33.38 22.54l-39-5.57a4 4 0 0 1-2.47-1.35l-32.6-38.09A36 36 0 1 0 68 89.94v76.12a36 36 0 1 0 24 0v-53.62l23 26.8a28 28 0 0 0 17.3 9.49l41.34 5.91A36 36 0 1 0 208 108M80 44a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m128-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitMergeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeDuotoneIcon],svg[ph-git-merge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 56a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M64 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitMergeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeFillIcon],svg[ph-git-merge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M96 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitMergeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeLightIcon],svg[ph-git-merge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 114a30 30 0 0 0-29.21 23.19l-44-6.28a10 10 0 0 1-6.18-3.39L91.18 83.83A30 30 0 1 0 74 85.4v85.2a30 30 0 1 0 12 0V96.22l33.52 39.11a22 22 0 0 0 13.6 7.46l45.35 6.48A30 30 0 1 0 208 114M62 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 144a18 18 0 1 1-18-18a18 18 0 0 1 18 18m110-38a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitMergeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitMergeThinIcon],svg[ph-git-merge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 116a28 28 0 0 0-27.62 23.44l-45.85-6.55a12 12 0 0 1-7.41-4.07L87.75 82.9a28 28 0 1 0-11.75.81v88.58a28 28 0 1 0 8 0V90.81L121 134a20 20 0 0 0 12.36 6.78l46.83 6.69A28 28 0 1 0 208 116M60 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 144a20 20 0 1 1-20-20a20 20 0 0 1 20 20m108-36a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitMergeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestIcon],svg[ph-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m120-31v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGitPullRequestIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestBoldIcon],svg[ph-git-pull-request-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 64a36 36 0 1 0-48 33.94v60.12a36 36 0 1 0 24 0V97.94A36.07 36.07 0 0 0 108 64M72 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m140-45.94v-47.43a27.8 27.8 0 0 0-8.2-19.8L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l30.83 30.83a4 4 0 0 1 1.17 2.83v47.43a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitPullRequestBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestDuotoneIcon],svg[ph-git-pull-request-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m104 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24" opacity=".2"></svg:path><svg:path d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31m-48 0a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m120-31v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGitPullRequestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestFillIcon],svg[ph-git-pull-request-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31M88 192a16 16 0 1 1-16-16a16 16 0 0 1 16 16m144 0a32 32 0 1 1-40-31v-50.37a8 8 0 0 0-2.34-5.66L152 67.31V96a8 8 0 0 1-16 0V48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69L201 93.66a23.85 23.85 0 0 1 7 17V161a32.06 32.06 0 0 1 24 31"></svg:path>`,
})
export class PhGitPullRequestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestLightIcon],svg[ph-git-pull-request-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 64a30 30 0 1 0-36 29.4v69.2a30 30 0 1 0 12 0V93.4A30.05 30.05 0 0 0 102 64m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18a18 18 0 0 1 18 18m116-29.4v-52a21.88 21.88 0 0 0-6.44-15.56L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l41.07 41.08a9.9 9.9 0 0 1 2.93 7.07v52a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGitPullRequestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestThinIcon],svg[ph-git-pull-request-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 64a28 28 0 1 0-32 27.71v72.58a28 28 0 1 0 8 0V91.71A28 28 0 0 0 100 64m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m112-27.71v-53.66a19.9 19.9 0 0 0-5.86-14.15L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l44.49 44.48a12 12 0 0 1 3.51 8.49v53.66a28 28 0 1 0 8 0M200 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitPullRequestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoIcon],svg[ph-github-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.7 41.7 0 0 1 7 22.52Z"></svg:path>`,
})
export class PhGithubLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoBoldIcon],svg[ph-github-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.62 75.17A63.7 63.7 0 0 0 206.39 26A12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24a12 12 0 0 0-10.39 6a63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20a44.05 44.05 0 0 0-44-44a12 12 0 0 0 0 24a20 20 0 0 1 20 20a44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83M196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12a11.65 11.65 0 0 0 1.58-11.49a39.9 39.9 0 0 1-.4-27.72a39.87 39.87 0 0 1 26.41 17.8a12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53a39.84 39.84 0 0 1 26.41-17.8a39.9 39.9 0 0 1-.4 27.72a12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z"></svg:path>`,
})
export class PhGithubLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoDuotoneIcon],svg[ph-github-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z"></svg:path></svg:g>`,
})
export class PhGithubLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoFillIcon],svg[ph-github-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104"></svg:path>`,
})
export class PhGithubLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoLightIcon],svg[ph-github-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.13 75.92A57.8 57.8 0 0 0 201.2 29a6 6 0 0 0-5.2-3a57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24a6 6 0 0 0-5.2 3a57.8 57.8 0 0 0-4.93 46.92A55.9 55.9 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26a38 38 0 0 0-38-38a6 6 0 0 0 0 12a26 26 0 0 1 26 26a38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.9 55.9 0 0 0-7.87-28.08M202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69a6 6 0 0 0 .81-5.76a45.85 45.85 0 0 1 1.43-36.42a45.85 45.85 0 0 1 35.23 21.1a6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76a45.83 45.83 0 0 1 35.23-21.11a45.85 45.85 0 0 1 1.43 36.42a6 6 0 0 0 .79 5.74A43.8 43.8 0 0 1 202 104Z"></svg:path>`,
})
export class PhGithubLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGithubLogoThinIcon],svg[ph-github-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.8 53.8 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.8 53.8 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"></svg:path>`,
})
export class PhGithubLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoIcon],svg[ph-gitlab-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l13.07 50L128 166.21L44.9 107.5Zm-17.32 66.61L114.13 176l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89m87.32 91l-20.73-14.65L128 185.8l20.73 14.64ZM198.91 165l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"></svg:path>`,
})
export class PhGitlabLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoBoldIcon],svg[ph-gitlab-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 116.09L214.13 40a15.94 15.94 0 0 0-30.42-1.48L167 84H89L72.29 38.49A15.94 15.94 0 0 0 41.87 40L22 116.09a61.19 61.19 0 0 0 23.57 65.23l73.27 51.77a15.93 15.93 0 0 0 18.36 0l73.27-51.77A61.19 61.19 0 0 0 234 116.09M58.61 70.86l10.76 29.28A12 12 0 0 0 80.64 108h94.72a12 12 0 0 0 11.27-7.86l10.76-29.28l9.14 35L128 161.31l-78.53-55.48ZM44 131.37L107.2 176l-13.79 9.74l-34-24A36.86 36.86 0 0 1 44 131.37m84 78.82l-13.79-9.75L128 190.7l13.79 9.74Zm68.6-48.47l-34 24l-13.8-9.72l63.2-44.63a36.86 36.86 0 0 1-15.4 30.35"></svg:path>`,
})
export class PhGitlabLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoDuotoneIcon],svg[ph-gitlab-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M220.23 110.84L128 176l-92.23-65.16L53.5 43a3.93 3.93 0 0 1 7.5-.38L80.65 96h94.7L195 42.62a3.93 3.93 0 0 1 7.53.38Z" opacity=".2"></svg:path><svg:path d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l13.07 50L128 166.21L44.9 107.5Zm-17.32 66.61L114.13 176l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89m87.32 91l-20.73-14.65L128 185.8l20.73 14.64ZM198.91 165l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"></svg:path></svg:g>`,
})
export class PhGitlabLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoFillIcon],svg[ph-gitlab-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61m-189.47 7l73.45 51.9l-20.72 14.65L57.09 165a41.06 41.06 0 0 1-16.41-40.89Zm87.32 91l-20.73-14.65L128 185.8l20.73 14.64Zm70.91-50.1l-36.32 25.66L141.87 176l73.45-51.9a41.06 41.06 0 0 1-16.41 40.9"></svg:path>`,
})
export class PhGitlabLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoLightIcon],svg[ph-gitlab-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.21 117.61l-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81M57.65 50.82L75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25l15 57.52L128 168.66l-85.38-60.32Zm-18.27 69.92L117.6 176l-24.19 17.1l-37.47-26.48a43.1 43.1 0 0 1-16.56-45.88M128 217.53l-24.19-17.09L128 183.35l24.19 17.09Zm72.06-50.91l-37.47 26.48L138.4 176l78.22-55.26a43.1 43.1 0 0 1-16.56 45.88"></svg:path>`,
})
export class PhGitlabLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleIcon],svg[ph-gitlab-logo-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M198.91 165L128 215.09L57.09 165a41.1 41.1 0 0 1-15.75-43.84L58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l16.63 63.65A41.1 41.1 0 0 1 198.91 165"></svg:path>`,
})
export class PhGitlabLogoSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleBoldIcon],svg[ph-gitlab-logo-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 116.09L214.13 40a15.94 15.94 0 0 0-30.42-1.48L167 84H89L72.29 38.49A15.94 15.94 0 0 0 41.87 40L22 116.09a61.19 61.19 0 0 0 23.57 65.23l73.27 51.77a15.93 15.93 0 0 0 18.36 0l73.27-51.77A61.19 61.19 0 0 0 234 116.09m-37.4 45.63L128 210.19l-68.6-48.47a37.08 37.08 0 0 1-14.19-39.56l13.4-51.3l10.76 29.28A12 12 0 0 0 80.64 108h94.72a12 12 0 0 0 11.27-7.86l10.76-29.28l13.4 51.3a37.08 37.08 0 0 1-14.19 39.56"></svg:path>`,
})
export class PhGitlabLogoSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleDuotoneIcon],svg[ph-gitlab-logo-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m203.52 171.52l-73.26 51.76a3.91 3.91 0 0 1-4.52 0l-73.26-51.76a49 49 0 0 1-18.87-52.4L53.5 43a3.93 3.93 0 0 1 7.5-.38L80.65 96h94.7L195 42.62a3.93 3.93 0 0 1 7.53.38l19.89 76.12a49 49 0 0 1-18.9 52.4" opacity=".2"></svg:path><svg:path d="M230.15 117.1L210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61M198.91 165L128 215.09L57.09 165a41.1 41.1 0 0 1-15.75-43.84L58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l16.63 63.65A41.1 41.1 0 0 1 198.91 165"></svg:path></svg:g>`,
})
export class PhGitlabLogoSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleFillIcon],svg[ph-gitlab-logo-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.14 178.06l-73.27 51.76a11.91 11.91 0 0 1-13.74 0l-73.27-51.76a57.19 57.19 0 0 1-22-61L45.75 41a11.94 11.94 0 0 1 22.79-1.11L86.22 88h83.56l17.68-48.13A11.94 11.94 0 0 1 210.25 41l19.9 76.12a57.19 57.19 0 0 1-22.01 60.94"></svg:path>`,
})
export class PhGitlabLogoSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleLightIcon],svg[ph-gitlab-logo-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.21 117.61l-19.89-76.12a9.94 9.94 0 0 0-19-.93L171.17 90H84.83L66.66 40.56a9.94 9.94 0 0 0-19 .93l-19.87 76.12A55.18 55.18 0 0 0 49 176.42l73.27 51.77a9.94 9.94 0 0 0 11.44 0L207 176.42a55.18 55.18 0 0 0 21.21-58.81m-28.15 49L128 217.53l-72.06-50.91a43.12 43.12 0 0 1-16.54-46l18.25-69.8L75 98.07a6 6 0 0 0 5.64 3.93h94.72a6 6 0 0 0 5.64-3.93l17.36-47.25l18.25 69.82a43.12 43.12 0 0 1-16.55 45.98Z"></svg:path>`,
})
export class PhGitlabLogoSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleThinIcon],svg[ph-gitlab-logo-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 118.11L206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68m-25.05 50.14L128 220l-73.22-51.75a45.11 45.11 0 0 1-17.31-48.11l19.84-76l19.58 53.24a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22l19.85 76a45.11 45.11 0 0 1-17.31 48.09"></svg:path>`,
})
export class PhGitlabLogoSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoThinIcon],svg[ph-gitlab-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.27 118.11L206.38 42a7.94 7.94 0 0 0-15.16-.75L172.57 92H83.43L64.78 41.24a7.94 7.94 0 0 0-15.16.76l-19.89 76.11a53.16 53.16 0 0 0 20.44 56.68l73.27 51.76a7.9 7.9 0 0 0 9.12 0l73.27-51.76a53.16 53.16 0 0 0 20.44-56.68m-169-74l19.62 53.27a4 4 0 0 0 3.75 2.62h94.72a4 4 0 0 0 3.75-2.62l19.57-53.22l17 65L128 171.11l-87.67-61.94Zm-19.84 76l.7-2.7L121.07 176l-27.66 19.54l-38.63-27.29a45.11 45.11 0 0 1-17.31-48.11ZM128 220l-27.66-19.54L128 180.9l27.66 19.54Zm73.22-51.73l-38.63 27.29L134.93 176l82.9-58.56l.7 2.7a45.11 45.11 0 0 1-17.31 48.11Z"></svg:path>`,
})
export class PhGitlabLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeIcon],svg[ph-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"></svg:path>`,
})
export class PhGlobeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeBoldIcon],svg[ph-globe-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 187a113.4 113.4 0 0 1-20.39-35h40.82a117 117 0 0 1-10 20.77A108.6 108.6 0 0 1 128 207m-26.49-59a135.4 135.4 0 0 1 0-40h53a135.4 135.4 0 0 1 0 40ZM44 128a83.5 83.5 0 0 1 2.43-20h30.82a160.6 160.6 0 0 0 0 40H46.43A83.5 83.5 0 0 1 44 128m84-79a113.4 113.4 0 0 1 20.39 35h-40.8a117 117 0 0 1 10-20.77A108.6 108.6 0 0 1 128 49m50.73 59h30.82a83.5 83.5 0 0 1 0 40h-30.8a160.6 160.6 0 0 0 0-40Zm20.77-24h-25.79a140.8 140.8 0 0 0-15.5-34.36A84.5 84.5 0 0 1 199.52 84ZM97.79 49.64A140.8 140.8 0 0 0 82.29 84H56.48a84.5 84.5 0 0 1 41.31-34.36M56.48 172h25.81a140.8 140.8 0 0 0 15.5 34.36A84.5 84.5 0 0 1 56.48 172m101.73 34.36a140.8 140.8 0 0 0 15.5-34.36h25.81a84.5 84.5 0 0 1-41.31 34.36"></svg:path>`,
})
export class PhGlobeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeDuotoneIcon],svg[ph-globe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"></svg:path></svg:g>`,
})
export class PhGlobeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeFillIcon],svg[ph-globe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m78.36 64h-35.65a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm9.64 40a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-88-85a115.3 115.3 0 0 1 26 45h-52a115.1 115.1 0 0 1 26-45m-26 125h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48Zm50.35 61.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-58 45.6Z"></svg:path>`,
})
export class PhGlobeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastIcon],svg[ph-globe-hemisphere-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a87.5 87.5 0 0 1 48 14.28V74l-22.17 25.74l-31.47 4.26l-.31-.22l-19.67-12.86a16 16 0 0 0-22.51 4.18l-20.94 31.3a16 16 0 0 0-2.7 8.81L56 171.44l-3.27 2.15A88 88 0 0 1 128 40M62.29 186.47l2.52-1.65A16 16 0 0 0 72 171.53l.21-36.23L93.17 104a4 4 0 0 0 .32.22l19.67 12.87a15.94 15.94 0 0 0 11.35 2.77l31.49-4.27a16 16 0 0 0 10-5.41l22.17-25.76A16 16 0 0 0 192 74v-6.33A87.87 87.87 0 0 1 211.77 155l-16.14-14.76a16 16 0 0 0-16.93-3l-30.46 12.65a16.08 16.08 0 0 0-9.68 12.45l-2.39 16.19a16 16 0 0 0 11.77 17.81L169.4 202l2.36 2.37a87.88 87.88 0 0 1-109.47-17.9M185 195l-4.3-4.31a16 16 0 0 0-7.26-4.18L152 180.85l2.39-16.19L184.84 152L205 170.48A88.4 88.4 0 0 1 185 195"></svg:path>`,
})
export class PhGlobeHemisphereEastIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastBoldIcon],svg[ph-globe-hemisphere-east-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 24a83.57 83.57 0 0 1 44 12.48v16L151.79 96l-28.47 3.85l-18.7-12.25a20 20 0 0 0-28.07 5.28l-20.94 31.3a19.9 19.9 0 0 0-3.38 11l-.16 28.69A84 84 0 0 1 128 44M68.41 187.14A20 20 0 0 0 76 171.55l.2-35l18.07-27l16.62 10.88a19.92 19.92 0 0 0 14.14 3.42l31.47-4.26a20 20 0 0 0 12.5-6.8L191.16 87a20.15 20.15 0 0 0 4.39-8.9a83.78 83.78 0 0 1 14.12 69.48l-11.34-10.37a20.08 20.08 0 0 0-21.17-3.71l-30.45 12.66a20.1 20.1 0 0 0-12.11 15.55l-2.39 16.2a20 20 0 0 0 14.71 22.26l16 4.18a83.78 83.78 0 0 1-94.47-17.24Zm116.77 2.32l-1.63-1.63a20.05 20.05 0 0 0-9.08-5.22l-18-4.72l1.53-10.41l26-10.81l16 14.59a84.8 84.8 0 0 1-14.82 18.2"></svg:path>`,
})
export class PhGlobeHemisphereEastBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastDuotoneIcon],svg[ph-globe-hemisphere-east-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M215 168.71a96.4 96.4 0 0 1-30.54 37l-9.36-9.37a8 8 0 0 0-3.63-2.09L150 188.59a8 8 0 0 1-5.88-8.9l2.38-16.2a8 8 0 0 1 4.84-6.22l30.46-12.66a8 8 0 0 1 8.47 1.49ZM159.89 105l22.17-25.8A8 8 0 0 0 184 74V50A96 96 0 0 0 50.49 184.65l9.92-6.52a8 8 0 0 0 3.59-6.64l.21-36.23a8.06 8.06 0 0 1 1.35-4.41l20.94-31.3a8 8 0 0 1 11.34-2l19.81 13a8.06 8.06 0 0 0 5.77 1.45l31.46-4.26a8 8 0 0 0 5.01-2.74" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a87.5 87.5 0 0 1 48 14.28V74l-22.17 25.74l-31.47 4.26l-.31-.22l-19.67-12.86a16 16 0 0 0-22.51 4.18l-20.94 31.3a16 16 0 0 0-2.7 8.81L56 171.44l-3.27 2.15A88 88 0 0 1 128 40M62.29 186.47l2.52-1.65A16 16 0 0 0 72 171.53l.21-36.23L93.17 104a4 4 0 0 0 .32.22l19.67 12.87a15.94 15.94 0 0 0 11.35 2.77l31.49-4.27a16 16 0 0 0 10-5.41l22.17-25.76A16 16 0 0 0 192 74v-6.33A87.87 87.87 0 0 1 211.77 155l-16.14-14.76a16 16 0 0 0-16.93-3l-30.46 12.65a16.08 16.08 0 0 0-9.68 12.45l-2.39 16.19a16 16 0 0 0 11.77 17.81L169.4 202l2.36 2.37a87.88 87.88 0 0 1-109.47-17.9M185 195l-4.3-4.31a16 16 0 0 0-7.26-4.18L152 180.85l2.39-16.19L184.84 152L205 170.48A88.4 88.4 0 0 1 185 195"></svg:path></svg:g>`,
})
export class PhGlobeHemisphereEastDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastFillIcon],svg[ph-globe-hemisphere-east-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M62.29 186.47l2.52-1.65A16 16 0 0 0 72 171.53l.21-36.23L93.17 104a4 4 0 0 0 .32.22l19.67 12.87a15.94 15.94 0 0 0 11.35 2.77l31.49-4.27a16 16 0 0 0 10-5.41l22.17-25.76A16 16 0 0 0 192 74v-6.33A87.87 87.87 0 0 1 211.77 155l-16.14-14.76a16 16 0 0 0-16.93-3l-30.46 12.65a16.08 16.08 0 0 0-9.68 12.45l-2.39 16.19a16 16 0 0 0 11.77 17.81L169.4 202l2.36 2.37a87.88 87.88 0 0 1-109.47-17.9"></svg:path>`,
})
export class PhGlobeHemisphereEastFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastLightIcon],svg[ph-globe-hemisphere-east-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 12a89.53 89.53 0 0 1 50 15.2V74a2 2 0 0 1-.48 1.31L155.35 101a2 2 0 0 1-1.25.68L122.63 106a2 2 0 0 1-1.44-.36l-.24-.16l-19.7-12.89a14 14 0 0 0-19.71 3.64l-21 31.3a13.94 13.94 0 0 0-2.36 7.71L58 171.45a2 2 0 0 1-.9 1.66l-5 3.27A90 90 0 0 1 128 38M59.28 186.05l4.43-2.9A14 14 0 0 0 70 171.52l.21-36.23a2.05 2.05 0 0 1 .33-1.1l21-31.3a2 2 0 0 1 1.31-.86a2 2 0 0 1 1.52.35l.24.16l19.7 12.89a13.93 13.93 0 0 0 10 2.44l31.47-4.26a14 14 0 0 0 8.73-4.74l22.17-25.76A14 14 0 0 0 190 74V62.82a89.91 89.91 0 0 1 22.68 95.67l-18.4-16.82a14 14 0 0 0-14.82-2.6L149 151.73a14.11 14.11 0 0 0-8.48 10.89l-2.38 16.19a14 14 0 0 0 10.3 15.58L169.9 200a2.1 2.1 0 0 1 .91.53l4.18 4.18a89.86 89.86 0 0 1-115.71-18.66m125.62 11.63l-5.59-5.61a14 14 0 0 0-6.36-3.65l-21.46-5.63a2 2 0 0 1-1.47-2.23l2.39-16.19a2 2 0 0 1 1.21-1.56l30.45-12.66a2 2 0 0 1 2.12.37l21.36 19.54a90.8 90.8 0 0 1-22.65 27.62"></svg:path>`,
})
export class PhGlobeHemisphereEastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereEastThinIcon],svg[ph-globe-hemisphere-east-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 8a91.5 91.5 0 0 1 52 16.15V74a4 4 0 0 1-1 2.61l-22.17 25.76a4 4 0 0 1-2.49 1.35L122.9 108a3.94 3.94 0 0 1-2.88-.72l-.16-.11l-19.73-12.95a12 12 0 0 0-16.93 3.11l-21 31.3a11.93 11.93 0 0 0-2 6.6l-.2 36.23a4 4 0 0 1-1.8 3.33l-6.65 4.36A92 92 0 0 1 128 36M56.32 185.6l6.29-4.13a12 12 0 0 0 5.41-10l.21-36.23a4 4 0 0 1 .67-2.2l20.95-31.3a4 4 0 0 1 5.67-1l.15.11l19.74 12.91a12 12 0 0 0 8.56 2.11l31.47-4.26a12 12 0 0 0 7.49-4.06l22.17-25.74A12 12 0 0 0 188 74V58.31A91.91 91.91 0 0 1 213.5 162l-20.57-18.82a12 12 0 0 0-12.7-2.22l-30.45 12.66a12.06 12.06 0 0 0-7.27 9.33l-2.38 16.19a12 12 0 0 0 8.87 13.32l21.45 5.63a4 4 0 0 1 1.82 1l5.94 6A91.85 91.85 0 0 1 56.32 185.6m128.43 14.76l-6.86-6.88a12 12 0 0 0-5.45-3.13L151 184.72a4 4 0 0 1-3-4.45l2.39-16.2a4 4 0 0 1 2.42-3.11l30.45-12.65a4 4 0 0 1 4.24.74l22.5 20.57a92.4 92.4 0 0 1-25.25 30.74"></svg:path>`,
})
export class PhGlobeHemisphereEastThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestIcon],svg[ph-globe-hemisphere-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.6 87.6 0 0 1-6.4 32.94l-44.7-27.49a15.9 15.9 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.6 16.6 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128m-72.69-86.66L152 56.9l-26.91 24.34L112.85 88H96.14a16 16 0 0 0-13.88 8l-8.73 15.23l-10.15-27.04l10.94-25.87a87.87 87.87 0 0 1 69-17ZM40 128a87.5 87.5 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128m102.58 86.78l1.13-5.81a16.09 16.09 0 0 0-4-13.9a2 2 0 0 1-.14-.14L120 174.74L133.7 144l22.82 3.08l45.72 28.12a88.18 88.18 0 0 1-59.66 39.58"></svg:path>`,
})
export class PhGlobeHemisphereWestIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestBoldIcon],svg[ph-globe-hemisphere-west-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a83.6 83.6 0 0 1-4.47 27L167 130a19.65 19.65 0 0 0-7.8-2.78l-22.82-3.08a20.14 20.14 0 0 0-18.66 7.86h-4.07l-2.71-5.6a19.88 19.88 0 0 0-13.8-10.84l-2.68-.56l4-7h14.39a20 20 0 0 0 9.66-2.49l12.25-6.76a20.6 20.6 0 0 0 3.74-2.68l26.92-24.33A20 20 0 0 0 172 56.49A84 84 0 0 1 212 128m-71.24-83l6.2 11.1L122.75 78l-10.93 6H96.14a20.05 20.05 0 0 0-17.36 10.06l-4.49 7.85l-6.61-17.63l9.91-23.42A83.9 83.9 0 0 1 140.76 45M44 128a83.5 83.5 0 0 1 4.4-26.77l7.74 20.65a19.89 19.89 0 0 0 14.52 12.53l19.53 4.2l3 6.1a20.11 20.11 0 0 0 13.55 10.77l-5 11.12a20 20 0 0 0 3.58 21.71l.21.22l18.16 18.7l-.89 4.59A84.09 84.09 0 0 1 44 128m103.65 81.66a20.11 20.11 0 0 0-5-17.3l-.21-.22l-17.72-18.25l11.37-25.52l19 2.56l41.43 25.48a84.2 84.2 0 0 1-48.87 33.25"></svg:path>`,
})
export class PhGlobeHemisphereWestBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestDuotoneIcon],svg[ph-globe-hemisphere-west-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.09 172.48a96 96 0 0 1-80.41 51.41l3.17-16.44a8 8 0 0 0-2-6.95l-19.74-20.33a8 8 0 0 1-1.44-8.69l13.7-30.74a8 8 0 0 1 8.38-4.67l22.82 3.08a8.1 8.1 0 0 1 3.12 1.11ZM116.71 95L129 88.24a7.5 7.5 0 0 0 1.5-1.07l26.91-24.33A8 8 0 0 0 159 53l-10.5-18.81A96.6 96.6 0 0 0 128 32a95.6 95.6 0 0 0-60.22 21.23L56 81.08a8 8 0 0 0-.12 5.92l11.5 30.67a8 8 0 0 0 5.81 5l2.69.58L89.2 100a8 8 0 0 1 6.94-4h16.71a7.9 7.9 0 0 0 3.86-1" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.6 87.6 0 0 1-6.4 32.94l-44.7-27.49a15.9 15.9 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.6 16.6 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128m-72.69-86.66L152 56.9l-26.91 24.34L112.85 88H96.14a16 16 0 0 0-13.88 8l-8.73 15.23l-10.15-27.04l10.94-25.87a87.87 87.87 0 0 1 69-17ZM40 128a87.5 87.5 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128m102.58 86.78l1.13-5.81a16.09 16.09 0 0 0-4-13.9a2 2 0 0 1-.14-.14L120 174.74L133.7 144l22.82 3.08l45.72 28.12a88.18 88.18 0 0 1-59.66 39.58"></svg:path></svg:g>`,
})
export class PhGlobeHemisphereWestDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestFillIcon],svg[ph-globe-hemisphere-west-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.6 87.6 0 0 1-6.4 32.94l-44.7-27.49a15.9 15.9 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.6 16.6 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128m-176 0a87.5 87.5 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128"></svg:path>`,
})
export class PhGlobeHemisphereWestFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestLightIcon],svg[ph-globe-hemisphere-west-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m90 102a89.55 89.55 0 0 1-7.46 35.86l-46.69-28.71a13.9 13.9 0 0 0-5.46-2l-22.82-3.07a14.06 14.06 0 0 0-14.51 7.92h-9.92a2 2 0 0 1-1.8-1.13l-3.8-7.86a13.94 13.94 0 0 0-9.66-7.59l-10.71-2.3L94.4 103a2 2 0 0 1 1.74-1h16.71a13.9 13.9 0 0 0 6.76-1.75l12.25-6.75a14.7 14.7 0 0 0 2.62-1.88l26.91-24.33a13.93 13.93 0 0 0 2.83-17.21L161 44.25A90.16 90.16 0 0 1 218 128m-73.4-88.46l9.15 16.39a2 2 0 0 1-.41 2.46l-26.91 24.33a1.8 1.8 0 0 1-.37.27l-12.25 6.76a2 2 0 0 1-1 .25H96.14A14 14 0 0 0 84 97l-10.82 18.91a2 2 0 0 1-.19-.35L61.5 84.89a2 2 0 0 1 0-1.48l11.18-26.35a89.9 89.9 0 0 1 71.92-17.52M38 128a89.5 89.5 0 0 1 11.38-43.77a13.9 13.9 0 0 0 .89 4.87l11.49 30.67a13.94 13.94 0 0 0 10.16 8.78l21.44 4.6a2 2 0 0 1 1.38 1.09l3.8 7.86a14.07 14.07 0 0 0 12.6 7.9h4.56l-8.49 19a14 14 0 0 0 2.51 15.2l.1.11l19.68 20.26a2 2 0 0 1 .46 1.7L127.7 218A90.1 90.1 0 0 1 38 128m102.08 89.19l1.67-8.6a14.07 14.07 0 0 0-3.47-12.16l-.1-.11l-19.68-20.26a2 2 0 0 1-.33-2.14l13.7-30.73A2 2 0 0 1 134 142l22.82 3.08a2 2 0 0 1 .78.27l47.4 29.2a90.18 90.18 0 0 1-64.92 42.64"></svg:path>`,
})
export class PhGlobeHemisphereWestLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeHemisphereWestThinIcon],svg[ph-globe-hemisphere-west-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.4 91.4 0 0 1-8.58 38.76l-48.62-29.91a12.1 12.1 0 0 0-4.68-1.67l-22.82-3.07a12 12 0 0 0-12.56 7l-.4.88h-11.2a4 4 0 0 1-3.6-2.26l-3.8-7.86a11.93 11.93 0 0 0-8.28-6.5l-13.39-2.87l10.6-18.5a4 4 0 0 1 3.47-2h16.71a12 12 0 0 0 5.8-1.5l12.24-6.76a11.8 11.8 0 0 0 2.25-1.6l26.91-24.34a12 12 0 0 0 2.43-14.75l-5.86-10.49A92.17 92.17 0 0 1 220 128m-74.11-90.25l9.6 17.2a4 4 0 0 1-.81 4.92l-26.91 24.34a4.4 4.4 0 0 1-.75.53l-12.24 6.76a4 4 0 0 1-1.93.5H96.14a12 12 0 0 0-10.41 6l-11.86 20.7a4 4 0 0 1-2.75-2.47L59.63 85.6a4 4 0 0 1 .06-3L71 55.81A91.5 91.5 0 0 1 128 36a92.5 92.5 0 0 1 17.89 1.75M36 128a91.52 91.52 0 0 1 20-57.23l-3.71 8.75a12 12 0 0 0-.18 8.88l11.49 30.67a11.93 11.93 0 0 0 8.72 7.52l21.43 4.61a4 4 0 0 1 2.76 2.17l3.8 7.86a12.07 12.07 0 0 0 10.8 6.77h7.64L109 169.85a12 12 0 0 0 2.26 13.15l19.68 20.26a4 4 0 0 1 1 3.47L129.36 220H128a92.1 92.1 0 0 1-92-92m101.6 91.5l2.18-11.29a12.08 12.08 0 0 0-3-10.49l-19.68-20.26a4 4 0 0 1-.71-4.35l13.7-30.74a4 4 0 0 1 4.18-2.33l22.82 3.07a4.1 4.1 0 0 1 1.56.56l49.11 30.2a92.12 92.12 0 0 1-70.16 45.63"></svg:path>`,
})
export class PhGlobeHemisphereWestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeLightIcon],svg[ph-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m81.57 64h-40.38a132.6 132.6 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90m8.43 38a89.7 89.7 0 0 1-3.83 26h-42.36a155.4 155.4 0 0 0 0-52h42.36a89.7 89.7 0 0 1 3.83 26m-90 87.83a110 110 0 0 1-15.19-19.45A124.2 124.2 0 0 1 99.35 166h57.3a124.2 124.2 0 0 1-13.46 30.38A110 110 0 0 1 128 215.83M96.45 154a139.2 139.2 0 0 1 0-52h63.1a139.2 139.2 0 0 1 0 52ZM38 128a89.7 89.7 0 0 1 3.83-26h42.36a155.4 155.4 0 0 0 0 52H41.83A89.7 89.7 0 0 1 38 128m90-87.83a110 110 0 0 1 15.19 19.45A124.2 124.2 0 0 1 156.65 90h-57.3a124.2 124.2 0 0 1 13.46-30.38A110 110 0 0 1 128 40.17m-15.46-.84A132.6 132.6 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67M46.43 166h40.38a132.6 132.6 0 0 0 25.73 50.67A90.29 90.29 0 0 1 46.43 166m97 50.67A132.6 132.6 0 0 0 169.19 166h40.38a90.29 90.29 0 0 1-66.11 50.67Z"></svg:path>`,
})
export class PhGlobeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleIcon],svg[ph-globe-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m87.62 96h-39.83c-1.79-36.51-15.85-62.33-27.38-77.6a88.19 88.19 0 0 1 67.22 77.6ZM96.23 136h63.54c-2.31 41.61-22.23 67.11-31.77 77c-9.55-9.9-29.46-35.4-31.77-77m0-16c2.31-41.61 22.23-67.11 31.77-77c9.55 9.93 29.46 35.43 31.77 77Zm11.36-77.6C96.06 57.67 82 83.49 80.21 120H40.37a88.19 88.19 0 0 1 67.22-77.6M40.37 136h39.84c1.82 36.51 15.85 62.33 27.38 77.6A88.19 88.19 0 0 1 40.37 136m108 77.6c11.53-15.27 25.56-41.09 27.38-77.6h39.84a88.19 88.19 0 0 1-67.18 77.6Z"></svg:path>`,
})
export class PhGlobeSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleBoldIcon],svg[ph-globe-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m83.13 96h-31.57a144.3 144.3 0 0 0-21.35-66.36A84.22 84.22 0 0 1 211.13 116M128 207c-9.36-10.81-24.46-33.13-27.45-67h54.94a119.74 119.74 0 0 1-17.11 52.77A108.6 108.6 0 0 1 128 207m-27.45-91a119.74 119.74 0 0 1 17.11-52.77A108.6 108.6 0 0 1 128 49c9.36 10.81 24.46 33.13 27.45 67Zm-2.76-66.36A144.3 144.3 0 0 0 76.44 116H44.87a84.22 84.22 0 0 1 52.92-66.36M44.87 140h31.57a144.3 144.3 0 0 0 21.35 66.36A84.22 84.22 0 0 1 44.87 140m113.34 66.36A144.3 144.3 0 0 0 179.56 140h31.57a84.22 84.22 0 0 1-52.92 66.36"></svg:path>`,
})
export class PhGlobeSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleDuotoneIcon],svg[ph-globe-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m87.62 96h-39.83c-1.79-36.51-15.85-62.33-27.38-77.6a88.19 88.19 0 0 1 67.22 77.6ZM96.23 136h63.54c-2.31 41.61-22.23 67.11-31.77 77c-9.55-9.9-29.46-35.4-31.77-77m0-16c2.31-41.61 22.23-67.11 31.77-77c9.55 9.93 29.46 35.43 31.77 77Zm11.36-77.6C96.06 57.67 82 83.49 80.21 120H40.37a88.19 88.19 0 0 1 67.22-77.6M40.37 136h39.84c1.82 36.51 15.85 62.33 27.38 77.6A88.19 88.19 0 0 1 40.37 136m108 77.6c11.53-15.27 25.56-41.09 27.38-77.6h39.84a88.19 88.19 0 0 1-67.18 77.6Z"></svg:path></svg:g>`,
})
export class PhGlobeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleFillIcon],svg[ph-globe-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m87.62 96h-39.83c-1.79-36.51-15.85-62.33-27.38-77.6a88.19 88.19 0 0 1 67.22 77.6ZM96.23 136h63.54c-2.31 41.61-22.23 67.11-31.77 77c-9.55-9.9-29.46-35.4-31.77-77m0-16c2.31-41.61 22.23-67.11 31.77-77c9.55 9.93 29.46 35.43 31.77 77Zm52.18 93.6c11.53-15.27 25.56-41.09 27.38-77.6h39.84a88.19 88.19 0 0 1-67.22 77.6"></svg:path>`,
})
export class PhGlobeSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleLightIcon],svg[ph-globe-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m89.8 96h-43.91c-1.54-40.77-18.48-68.23-30.43-82.67A90.19 90.19 0 0 1 217.8 122M128 215.83a110 110 0 0 1-15.19-19.45A128.37 128.37 0 0 1 94.13 134h67.74a128.37 128.37 0 0 1-18.68 62.38A110 110 0 0 1 128 215.83M94.13 122a128.37 128.37 0 0 1 18.68-62.38A110 110 0 0 1 128 40.17a110 110 0 0 1 15.19 19.45A128.37 128.37 0 0 1 161.87 122Zm18.41-82.67c-12 14.44-28.89 41.9-30.43 82.67H38.2a90.19 90.19 0 0 1 74.34-82.67M38.2 134h43.91c1.54 40.77 18.48 68.23 30.43 82.67A90.19 90.19 0 0 1 38.2 134m105.26 82.67c11.95-14.44 28.89-41.9 30.43-82.67h43.91a90.19 90.19 0 0 1-74.34 82.67"></svg:path>`,
})
export class PhGlobeSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleThinIcon],svg[ph-globe-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.9 96h-48c-1.15-45.55-21.74-74.52-33.48-87.4a92.14 92.14 0 0 1 81.49 87.4ZM128 218.61c-8.32-8-34.57-37.13-35.93-86.61h71.86c-1.36 49.48-27.61 78.61-35.93 86.61M92.07 124c1.36-49.48 27.61-78.61 35.93-86.61c8.32 8 34.57 37.13 35.93 86.61Zm25.47-87.4C105.8 49.48 85.21 78.45 84.06 124h-48a92.14 92.14 0 0 1 81.48-87.4M36.09 132h48c1.15 45.55 21.74 74.52 33.48 87.4A92.14 92.14 0 0 1 36.09 132m102.37 87.4c11.74-12.88 32.33-41.85 33.48-87.4h48a92.14 92.14 0 0 1-81.48 87.4"></svg:path>`,
})
export class PhGlobeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXIcon],svg[ph-globe-simple-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.66 173.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32M232 128a8 8 0 0 1-8 8H96.25c3 53.73 35.33 80.6 36.77 81.77A8 8 0 0 1 128 232a104 104 0 1 1 104-104m-83.59-85.6C159.94 57.67 174 83.49 175.79 120h39.84a88.19 88.19 0 0 0-67.22-77.6M128 43c-9.54 9.92-29.46 35.42-31.77 77h63.54c-2.31-41.6-22.22-67.1-31.77-77m-87.63 77h39.84C82 83.49 96.06 57.67 107.59 42.4A88.19 88.19 0 0 0 40.37 120m39.84 16H40.37a88.19 88.19 0 0 0 67.22 77.6C96.06 198.33 82 172.51 80.21 136"></svg:path>`,
})
export class PhGlobeSimpleXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXBoldIcon],svg[ph-globe-simple-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.49 176.49L209 192l15.52 15.51a12 12 0 0 1-17 17L192 209l-15.51 15.52a12 12 0 0 1-17-17L175 192l-15.52-15.51a12 12 0 0 1 17-17L192 175l15.51-15.52a12 12 0 0 1 17 17ZM236 128a12 12 0 0 1-12 12H100.54c4.37 49.56 34.63 74.37 35 74.63A12 12 0 0 1 128 236a108 108 0 1 1 108-108m-77.79-78.36A144.3 144.3 0 0 1 179.56 116h31.57a84.22 84.22 0 0 0-52.92-66.36m-40.57 13.59A119.74 119.74 0 0 0 100.53 116h54.94c-3-33.9-18.09-56.22-27.45-67a108 108 0 0 0-10.38 14.23M44.87 116h31.57a144.3 144.3 0 0 1 21.35-66.36A84.22 84.22 0 0 0 44.87 116m31.57 24H44.87a84.22 84.22 0 0 0 52.92 66.36A144.3 144.3 0 0 1 76.44 140"></svg:path>`,
})
export class PhGlobeSimpleXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXDuotoneIcon],svg[ph-globe-simple-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M221.66 173.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32M232 128a8 8 0 0 1-8 8H96.25c3 53.73 35.33 80.6 36.77 81.77A8 8 0 0 1 128 232a104 104 0 1 1 104-104m-83.59-85.6C159.94 57.67 174 83.49 175.79 120h39.84a88.19 88.19 0 0 0-67.22-77.6M128 43c-9.54 9.92-29.46 35.42-31.77 77h63.54c-2.31-41.6-22.22-67.1-31.77-77m-87.63 77h39.84C82 83.49 96.06 57.67 107.59 42.4A88.19 88.19 0 0 0 40.37 120m39.84 16H40.37a88.19 88.19 0 0 0 67.22 77.6C96.06 198.33 82 172.51 80.21 136"></svg:path></svg:g>`,
})
export class PhGlobeSimpleXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXFillIcon],svg[ph-globe-simple-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.66 173.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32M232 128a8 8 0 0 1-8 8H96.25c3 53.73 35.33 80.6 36.77 81.77A8 8 0 0 1 128 232a104 104 0 1 1 104-104m-83.59-85.6C159.94 57.67 174 83.49 175.79 120h39.84a88.19 88.19 0 0 0-67.22-77.6M96.23 120h63.54c-2.31-41.6-22.22-67.1-31.77-77c-9.54 9.89-29.46 35.39-31.77 77"></svg:path>`,
})
export class PhGlobeSimpleXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXLightIcon],svg[ph-globe-simple-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 172.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48M230 128a6 6 0 0 1-6 6H94.13a128.3 128.3 0 0 0 18.68 62.37c9.35 15.11 18.85 22.88 18.95 22.95A6 6 0 0 1 128 230a102 102 0 1 1 102-102m-86.54-88.67c11.95 14.44 28.89 41.9 30.43 82.67h43.91a90.19 90.19 0 0 0-74.34-82.67m-30.65 20.3A128.3 128.3 0 0 0 94.13 122h67.74a128.3 128.3 0 0 0-18.68-62.37A109.2 109.2 0 0 0 128 40.18a109.2 109.2 0 0 0-15.19 19.45M38.2 122h43.91c1.54-40.77 18.48-68.23 30.43-82.67A90.19 90.19 0 0 0 38.2 122m43.91 12H38.2a90.19 90.19 0 0 0 74.34 82.67c-11.95-14.44-28.89-41.9-30.43-82.67"></svg:path>`,
})
export class PhGlobeSimpleXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeSimpleXThinIcon],svg[ph-globe-simple-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.83 170.83L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66M228 128a4 4 0 0 1-4 4H92.08c1.61 58.53 38.05 88.58 38.42 88.88A4 4 0 0 1 128 228a100 100 0 0 1 0-200a100.11 100.11 0 0 1 100 100m-89.54-91.4c11.74 12.88 32.33 41.85 33.48 87.4h48a92.14 92.14 0 0 0-81.48-87.4M92.07 124h71.86c-1.36-49.48-27.61-78.6-35.93-86.61c-8.32 8-34.57 37.13-35.93 86.61m-56 0h48c1.15-45.55 21.74-74.52 33.48-87.4A92.14 92.14 0 0 0 36.09 124Zm48 8h-48a92.14 92.14 0 0 0 81.45 87.4c-11.72-12.88-32.31-41.85-33.46-87.4Z"></svg:path>`,
})
export class PhGlobeSimpleXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandIcon],svg[ph-globe-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 184a80 80 0 1 0-80-80a80.09 80.09 0 0 0 80 80m0-144a64 64 0 1 1-64 64a64.07 64.07 0 0 1 64-64m77.77 133.5a8 8 0 0 1-.23 11.32a111.24 111.24 0 0 1-69.54 30.9V232h24a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16h24v-16.29A112 112 0 0 1 55.18 26.46a8 8 0 1 1 11.54 11.08a96 96 0 0 0 135.74 135.74a8 8 0 0 1 11.31.22"></svg:path>`,
})
export class PhGlobeStandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandBoldIcon],svg[ph-globe-stand-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 176a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72m0-120a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48m12 159.35V228h20a12 12 0 0 1 0 24h-64a12 12 0 0 1 0-24h20v-12.64A112 112 0 0 1 53.88 27.84a12 12 0 1 1 17.59 16.32a88 88 0 0 0 124.37 124.37a12 12 0 1 1 16.32 17.59A111.5 111.5 0 0 1 148 215.35"></svg:path>`,
})
export class PhGlobeStandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandDuotoneIcon],svg[ph-globe-stand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="M136 184a80 80 0 1 0-80-80a80.09 80.09 0 0 0 80 80m0-144a64 64 0 1 1-64 64a64.07 64.07 0 0 1 64-64m77.77 133.5a8 8 0 0 1-.23 11.32a111.2 111.2 0 0 1-69.54 30.9V232h24a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16h24v-16.29A112 112 0 0 1 55.18 26.46a8 8 0 1 1 11.54 11.08a96 96 0 0 0 135.74 135.74a8 8 0 0 1 11.31.22"></svg:path></svg:g>`,
})
export class PhGlobeStandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandFillIcon],svg[ph-globe-stand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 104a80 80 0 1 1 80 80a80.09 80.09 0 0 1-80-80m146.46 69.28A96 96 0 0 1 66.72 37.54a8 8 0 1 0-11.54-11.08A112 112 0 0 0 128 215.71V232h-24a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16.28a111.2 111.2 0 0 0 69.54-30.9a8 8 0 1 0-11.08-11.54"></svg:path>`,
})
export class PhGlobeStandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandLightIcon],svg[ph-globe-stand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 182a78 78 0 1 0-78-78a78.09 78.09 0 0 0 78 78m0-144a66 66 0 1 1-66 66a66.08 66.08 0 0 1 66-66m76.33 136.89a6 6 0 0 1-.17 8.48A109.2 109.2 0 0 1 142 213.83V234h26a6 6 0 0 1 0 12h-64a6 6 0 0 1 0-12h26v-20.17a110 110 0 0 1-73.38-186a6 6 0 0 1 8.66 8.32a98 98 0 0 0 138.56 138.57a6 6 0 0 1 8.49.17"></svg:path>`,
})
export class PhGlobeStandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandThinIcon],svg[ph-globe-stand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 180a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76m0-144a68 68 0 1 1-68 68a68.07 68.07 0 0 1 68-68m74.89 140.28a4 4 0 0 1-.12 5.65a107.3 107.3 0 0 1-70.77 30V236h28a4 4 0 0 1 0 8h-64a4 4 0 0 1 0-8h28v-24.08A108 108 0 0 1 58.06 29.23a4 4 0 1 1 5.77 5.54a100 100 0 0 0 141.4 141.39a4 4 0 0 1 5.66.12"></svg:path>`,
})
export class PhGlobeStandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeThinIcon],svg[ph-globe-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54c-8.27 30.2-24.94 48.52-31.27 54.61M94.82 156a140.4 140.4 0 0 1 0-56h66.36a140.4 140.4 0 0 1 0 56ZM128 37.39c6.33 6.09 23 24.41 31.27 54.61H96.73C105 61.8 121.67 43.48 128 37.39M169.41 100h46.23a92.1 92.1 0 0 1 0 56h-46.23a152.7 152.7 0 0 0 0-56m43.25-8h-45a129.4 129.4 0 0 0-29.19-55.4A92.25 92.25 0 0 1 212.66 92m-95.12-55.4A129.4 129.4 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4M40.36 100h46.23a152.7 152.7 0 0 0 0 56H40.36a92.1 92.1 0 0 1 0-56m3 64h45a129.4 129.4 0 0 0 29.19 55.4A92.25 92.25 0 0 1 43.34 164Zm95.12 55.4a129.4 129.4 0 0 0 29.17-55.4h45a92.25 92.25 0 0 1-74.19 55.4Z"></svg:path>`,
})
export class PhGlobeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXIcon],svg[ph-globe-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0 0 208a8 8 0 0 0 5-14.23c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88a138 138 0 0 1 2.04 24a8 8 0 0 0 16 0a155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-20.41 18.4A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6m0 171.2a88.29 88.29 0 0 1-58-45.6h35.7a135.3 135.3 0 0 0 22.3 45.6M81.84 152H43.33a88.15 88.15 0 0 1 0-48h38.51a157.4 157.4 0 0 0 0 48M102 88a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6a88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhGlobeXIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXBoldIcon],svg[ph-globe-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 0 0 0 216a12 12 0 0 0 7.49-21.37c-.25-.2-17.55-14.39-27.9-42.63H128a12 12 0 0 0 0-24h-26.52a135.9 135.9 0 0 1 0-40h53a134 134 0 0 1 1.52 20a12 12 0 0 0 24 0a159 159 0 0 0-1.25-20h30.82a83.5 83.5 0 0 1 2.43 20a12 12 0 0 0 24 0A108.12 108.12 0 0 0 128 20M97.79 49.64A140.8 140.8 0 0 0 82.29 84H56.48a84.46 84.46 0 0 1 41.31-34.36m0 156.72A84.46 84.46 0 0 1 56.48 172h25.81a140.8 140.8 0 0 0 15.5 34.36M77.25 148H46.43a83.5 83.5 0 0 1 0-40h30.82a160.6 160.6 0 0 0 0 40m30.34-64a116.6 116.6 0 0 1 10-20.77A108 108 0 0 1 128 49a113.2 113.2 0 0 1 20.39 35Zm66.12 0a140.8 140.8 0 0 0-15.5-34.36A84.46 84.46 0 0 1 199.52 84Zm50.78 92.49L209 192l15.52 15.51a12 12 0 0 1-17 17L192 209l-15.51 15.52a12 12 0 0 1-17-17L175 192l-15.52-15.51a12 12 0 0 1 17-17L192 175l15.51-15.52a12 12 0 0 1 17 17Z"></svg:path>`,
})
export class PhGlobeXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXDuotoneIcon],svg[ph-globe-x-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 0 0 0 208a8 8 0 0 0 5-14.23c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88a138 138 0 0 1 2.04 24a8 8 0 0 0 16 0a155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-20.41 18.4A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6m0 171.2a88.29 88.29 0 0 1-58-45.6h35.7a135.3 135.3 0 0 0 22.3 45.6M81.84 152H43.33a88.15 88.15 0 0 1 0-48h38.51a157.4 157.4 0 0 0 0 48M102 88a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6a88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path></svg:g>`,
})
export class PhGlobeXDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXFillIcon],svg[ph-globe-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0 0 208a8 8 0 0 0 5-14.21c-1.12-.91-20.88-17.32-31.06-49.77h26a8 8 0 0 0 0-16H98.08a140.2 140.2 0 0 1 0-48h59.88A138 138 0 0 1 160 128a8 8 0 0 0 16 0a155 155 0 0 0-1.84-24h38.51a87.6 87.6 0 0 1 3.33 24a8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 24m-26 64a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45Zm68.75 0a135.3 135.3 0 0 0-22.3-45.6a88.29 88.29 0 0 1 58 45.6Zm50.95 85.66L203.31 192l18.35 18.34a8 8 0 0 1-11.32 11.32L192 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L180.69 192l-18.35-18.34a8 8 0 0 1 11.32-11.32L192 180.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z"></svg:path>`,
})
export class PhGlobeXFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXLightIcon],svg[ph-globe-x-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 0 0 0 204a6 6 0 0 0 3.76-10.67c-.1-.07-9.6-7.84-18.95-22.95A124 124 0 0 1 99.35 166H128a6 6 0 0 0 0-12H96.45a139.2 139.2 0 0 1 0-52h63.1a137.5 137.5 0 0 1 2.45 26a6 6 0 0 0 12 0a153 153 0 0 0-2.19-26h42.36a89.7 89.7 0 0 1 3.83 26a6 6 0 0 0 12 0A102.12 102.12 0 0 0 128 26m-15.46 13.33A132.6 132.6 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67m0 177.34A90.29 90.29 0 0 1 46.43 166h40.38a132.6 132.6 0 0 0 25.73 50.67M84.19 154H41.83a90.17 90.17 0 0 1 0-52h42.36a155.4 155.4 0 0 0 0 52m15.16-64a124 124 0 0 1 13.46-30.37A109.2 109.2 0 0 1 128 40.18a109.2 109.2 0 0 1 15.19 19.45A124 124 0 0 1 156.65 90Zm69.84 0a132.6 132.6 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90Zm51.05 82.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48"></svg:path>`,
})
export class PhGlobeXLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGlobeXThinIcon],svg[ph-globe-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 0 0 0 200a4 4 0 0 0 2.49-7.11c-.3-.24-23.57-19.41-33.78-56.88H128a4 4 0 0 0 0-8H94.82a140.4 140.4 0 0 1 0-56h66.36A138 138 0 0 1 164 128a4 4 0 0 0 8 0a149 149 0 0 0-2.59-28h46.23a91.6 91.6 0 0 1 4.36 28a4 4 0 0 0 8 0A100.11 100.11 0 0 0 128 28m-10.46 8.6A129.4 129.4 0 0 0 88.35 92h-45a92.25 92.25 0 0 1 74.19-55.4m0 182.8a92.25 92.25 0 0 1-74.2-55.4h45a129.4 129.4 0 0 0 29.2 55.4M86.59 156H40.36a92.1 92.1 0 0 1 0-56h46.23a152.7 152.7 0 0 0 0 56m10.14-64C105 61.8 121.67 43.48 128 37.39c6.33 6.09 23 24.41 31.27 54.61Zm70.92 0a129.4 129.4 0 0 0-29.19-55.4a92.25 92.25 0 0 1 74.2 55.4Zm51.18 78.83L197.66 192l21.17 21.17a4 4 0 0 1-5.66 5.66L192 197.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L186.34 192l-21.17-21.17a4 4 0 0 1 5.66-5.66L192 186.34l21.17-21.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhGlobeXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesIcon],svg[ph-goggles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a72.08 72.08 0 0 0-72-72H72a72.08 72.08 0 0 0-72 72a24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23M45.45 167.74C37 162.76 32 156.88 32 152s4.91-10.61 13.13-15.55l37.21 37.2A23.74 23.74 0 0 1 72 176c-7.53 0-18.2-3.32-26.55-8.26m48.2-5.4L61 129.7a42.7 42.7 0 0 1 11-1.7a24 24 0 0 1 24 24a23.74 23.74 0 0 1-2.35 10.34M160 152a23.88 23.88 0 0 1 5.46-15.22L201 172.32c-6 2.3-12.15 3.68-17 3.68a24 24 0 0 1-24-24m55.63 12.31l-35.92-35.92A24 24 0 0 1 184 128c7.53 0 18.2 3.32 26.55 8.26S224 147.12 224 152c0 3.79-3 8.2-8.37 12.31m22.05-22.69C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56a8 8 0 0 1-2.32 5.62"></svg:path>`,
})
export class PhGogglesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesBoldIcon],svg[ph-goggles-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 60H76a76.08 76.08 0 0 0-76 76v4a24 24 0 0 0 13.74 21.69c3.15 8.71 10.51 16.75 21.52 23.27c11.52 6.81 25.6 11 36.74 11a44.06 44.06 0 0 0 42.32-32h27.36A44.06 44.06 0 0 0 184 196c18.53 0 50.62-12.81 58.31-34.33A24 24 0 0 0 256 140v-4a76.08 76.08 0 0 0-76-76M76 84h104a52.07 52.07 0 0 1 51.13 42.6a65 65 0 0 0-10.39-7.6c-11.52-6.81-25.6-11-36.74-11a44.06 44.06 0 0 0-42.32 32h-27.36A44.06 44.06 0 0 0 72 108c-13.4 0-33.9 6.71-47.13 18.56A52.08 52.08 0 0 1 76 84m-4 88c-14.13 0-36-12.15-36-20c0-2.74 3.55-7.61 11.48-12.3c9-5.32 18.8-7.7 24.52-7.7a20 20 0 0 1 0 40m136.52-7.7c-9 5.32-18.8 7.7-24.52 7.7a20 20 0 0 1 0-40c14.13 0 36 12.15 36 20c0 2.74-3.55 7.61-11.48 12.3"></svg:path>`,
})
export class PhGogglesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesDuotoneIcon],svg[ph-goggles-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 152c0 17.67-30.33 32-48 32a32 32 0 0 1 0-64c17.67 0 48 14.33 48 32M72 120c-17.67 0-48 14.33-48 32s30.33 32 48 32a32 32 0 0 0 0-64" opacity=".2"></svg:path><svg:path d="M256 136a72.08 72.08 0 0 0-72-72H72a72.08 72.08 0 0 0-72 72a24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23M45.45 167.74C37 162.76 32 156.88 32 152s4.91-10.61 13.13-15.55l37.21 37.2A23.74 23.74 0 0 1 72 176c-7.53 0-18.2-3.32-26.55-8.26m48.2-5.4L61 129.7a42.7 42.7 0 0 1 11-1.7a24 24 0 0 1 24 24a23.74 23.74 0 0 1-2.35 10.34M160 152a23.88 23.88 0 0 1 5.46-15.22L201 172.32c-6 2.3-12.15 3.68-17 3.68a24 24 0 0 1-24-24m55.63 12.31l-35.92-35.92A24 24 0 0 1 184 128c7.53 0 18.2 3.32 26.55 8.26S224 147.12 224 152c0 3.79-3 8.2-8.37 12.31m22.05-22.69C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56a8 8 0 0 1-2.32 5.62"></svg:path></svg:g>`,
})
export class PhGogglesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesFillIcon],svg[ph-goggles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 64H72a72.08 72.08 0 0 0-72 72a24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23a72.08 72.08 0 0 0-72-72M89 169a8 8 0 0 1-11.31 0l-24.55-24.55a8 8 0 0 1 11.31-11.31L89 157.65A8 8 0 0 1 89 169m119.52-.49a8 8 0 0 1-11.31 0l-25.41-25.4a8 8 0 0 1 11.32-11.32l25.4 25.41a8 8 0 0 1-.04 11.28Zm29.2-26.86C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56a8 8 0 0 1-2.32 5.62Z"></svg:path>`,
})
export class PhGogglesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesLightIcon],svg[ph-goggles-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254 136a70.08 70.08 0 0 0-70-70H72a70.08 70.08 0 0 0-70 70a22 22 0 0 0 16.68 21.35c2.06 8.24 8.85 16.06 19.64 22.44S61.87 190 72 190a38.05 38.05 0 0 0 37.52-32h37A38.05 38.05 0 0 0 184 190c10.13 0 23-3.91 33.68-10.21s17.58-14.2 19.64-22.44A22 22 0 0 0 254 136M44.43 169.46C35.26 164 30 157.67 30 152c0-6.64 6.77-13.19 15.45-18.06l40.19 40.18A25.8 25.8 0 0 1 72 178c-7.86 0-18.94-3.43-27.57-8.54m49.69-3.82l-36.88-36.89A48.8 48.8 0 0 1 72 126a26 26 0 0 1 22.12 39.64M158 152a25.9 25.9 0 0 1 7.39-18.13L204.55 173c-7.07 3.07-14.63 5-20.55 5a26 26 0 0 1-26-26m57.46 15l-39.65-39.64A25.8 25.8 0 0 1 184 126c7.86 0 18.94 3.43 27.57 8.54C220.74 140 226 146.33 226 152c0 5.32-4.35 10.58-10.54 15m21.31-22.18c-2.57-7.56-9.12-14.68-19.09-20.58C207 117.91 194.13 114 184 114a38.05 38.05 0 0 0-37.52 32h-37A38.05 38.05 0 0 0 72 114c-10.13 0-23 3.91-33.68 10.21c-10 5.9-16.52 13-19.09 20.58A10 10 0 0 1 14 136a58.07 58.07 0 0 1 58-58h112a58.07 58.07 0 0 1 58 58a10 10 0 0 1-5.23 8.79Z"></svg:path>`,
})
export class PhGogglesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGogglesThinIcon],svg[ph-goggles-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 136a68.07 68.07 0 0 0-68-68H72a68.07 68.07 0 0 0-68 68a20 20 0 0 0 16.35 19.65C23.91 174.84 54.81 188 72 188a36 36 0 0 0 35.77-32h40.46A36 36 0 0 0 184 188c17.19 0 48.09-13.16 51.65-32.35A20 20 0 0 0 252 136M28 152c0-7.75 7.92-15.25 17.81-20.53l43 42.95A27.9 27.9 0 0 1 72 180c-16.55 0-44-13.56-44-28m66.42 16.76l-40.84-40.84C60 125.46 66.58 124 72 124a28 28 0 0 1 22.42 44.76M156 152a27.94 27.94 0 0 1 9.42-20.92L208 173.65c-8 3.91-17 6.35-24 6.35a28 28 0 0 1-28-28m59.2 17.55l-42.95-43A27.9 27.9 0 0 1 184 124c16.55 0 44 13.56 44 28c0 6.39-5.38 12.6-12.8 17.55m20.26-22.06C231.15 128.77 200.93 116 184 116a36 36 0 0 0-35.77 32h-40.46A36 36 0 0 0 72 116c-16.93 0-47.15 12.77-51.46 31.49A12 12 0 0 1 12 136a60.07 60.07 0 0 1 60-60h112a60.07 60.07 0 0 1 60 60a12 12 0 0 1-8.54 11.49"></svg:path>`,
})
export class PhGogglesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfIcon],svg[ph-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 20a12 12 0 1 0 12 12a12 12 0 0 0-12-12m84-24a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-16 0a72 72 0 1 0-72 72a72.08 72.08 0 0 0 72-72m-34.86 96.53C152 197.56 139.85 200 128 200s-24-2.44-37.14-7.47a8 8 0 1 0-5.72 14.94a126 126 0 0 0 34.86 8.21V248a8 8 0 0 0 16 0v-32.32a126 126 0 0 0 34.86-8.21a8 8 0 1 0-5.72-14.94"></svg:path>`,
})
export class PhGolfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfBoldIcon],svg[ph-golf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 100a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-48 16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m88-20a92 92 0 1 1-92-92a92.1 92.1 0 0 1 92 92m-24 0a68 68 0 1 0-68 68a68.07 68.07 0 0 0 68-68m-32 101.86a108.6 108.6 0 0 1-72 0a12 12 0 0 0-8 22.63a131.8 131.8 0 0 0 32 7V244a12 12 0 0 0 24 0v-16.54a131.8 131.8 0 0 0 32-7a12 12 0 0 0-8-22.63Z"></svg:path>`,
})
export class PhGolfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfDuotoneIcon],svg[ph-golf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 96a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M176 100a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 20a12 12 0 1 0 12 12a12 12 0 0 0-12-12m84-24a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-16 0a72 72 0 1 0-72 72a72.08 72.08 0 0 0 72-72m-34.86 96.53C152 197.56 139.85 200 128 200s-24-2.44-37.14-7.47a8 8 0 1 0-5.72 14.94a126 126 0 0 0 34.86 8.21V248a8 8 0 0 0 16 0v-32.32a126 126 0 0 0 34.86-8.21a8 8 0 1 0-5.72-14.94"></svg:path></svg:g>`,
})
export class PhGolfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfFillIcon],svg[ph-golf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.47 197.14a8 8 0 0 1-4.61 10.33a126 126 0 0 1-34.86 8.21V248a8 8 0 0 1-16 0v-32.32a126 126 0 0 1-34.86-8.21a8 8 0 1 1 5.72-14.94C104 197.56 116.15 200 128 200s24-2.44 37.14-7.47a8 8 0 0 1 10.33 4.61M216 96a88 88 0 1 1-88-88a88.1 88.1 0 0 1 88 88m-72 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12m32-32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhGolfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfLightIcon],svg[ph-golf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 100a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-42 22a10 10 0 1 0 10 10a10 10 0 0 0-10-10m82-26a86 86 0 1 1-86-86a86.1 86.1 0 0 1 86 86m-12 0a74 74 0 1 0-74 74a74.09 74.09 0 0 0 74-74m-36.14 98.4c-13.38 5.11-25.77 7.6-37.86 7.6s-24.48-2.49-37.86-7.6a6 6 0 1 0-4.28 11.2a122.3 122.3 0 0 0 36.14 8.21V248a6 6 0 0 0 12 0v-34.19a122.3 122.3 0 0 0 36.14-8.21a6 6 0 0 0-4.28-11.2"></svg:path>`,
})
export class PhGolfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGolfThinIcon],svg[ph-golf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 100a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-40 24a8 8 0 1 0 8 8a8 8 0 0 0-8-8m80-28a84 84 0 1 1-84-84a84.09 84.09 0 0 1 84 84m-8 0a76 76 0 1 0-76 76a76.08 76.08 0 0 0 76-76m-37.43 100.26C153 201.47 140.34 204 128 204s-25-2.53-38.57-7.74a4 4 0 1 0-2.86 7.48a119.3 119.3 0 0 0 37.43 8.17V248a4 4 0 0 0 8 0v-36.09a119.3 119.3 0 0 0 37.43-8.17a4 4 0 0 0-2.86-7.48"></svg:path>`,
})
export class PhGolfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoIcon],svg[ph-goodreads-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24a8 8 0 0 0-8 8v13.74A64 64 0 0 0 64 88v24a64 64 0 0 0 112 42.26V168a48.05 48.05 0 0 1-48 48c-16.45 0-32.72-8.08-41.44-20.58a8 8 0 1 0-13.12 9.16C85.06 221.24 106.48 232 128 232a64.07 64.07 0 0 0 64-64V32a8 8 0 0 0-8-8m-56 136a48.05 48.05 0 0 1-48-48V88a48 48 0 0 1 96 0v24a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class PhGoodreadsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoBoldIcon],svg[ph-goodreads-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20a12 12 0 0 0-12 12v4.22A67.94 67.94 0 0 0 60 88v24a67.94 67.94 0 0 0 112 51.78V168a44.05 44.05 0 0 1-44 44c-15 0-30.29-7.58-38.16-18.87a12 12 0 0 0-19.68 13.74C82.5 224.56 105.21 236 128 236a68.07 68.07 0 0 0 68-68V32a12 12 0 0 0-12-12m-56 136a44.05 44.05 0 0 1-44-44V88a44 44 0 0 1 88 0v24a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhGoodreadsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoDuotoneIcon],svg[ph-goodreads-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 88v24a56 56 0 0 1-112 0V88a56 56 0 0 1 112 0" opacity=".2"></svg:path><svg:path d="M184 24a8 8 0 0 0-8 8v13.74A64 64 0 0 0 64 88v24a64 64 0 0 0 112 42.26V168a48.05 48.05 0 0 1-48 48c-16.45 0-32.72-8.08-41.44-20.58a8 8 0 1 0-13.12 9.16C85.06 221.24 106.48 232 128 232a64.07 64.07 0 0 0 64-64V32a8 8 0 0 0-8-8m-56 136a48.05 48.05 0 0 1-48-48V88a48 48 0 0 1 96 0v24a48.05 48.05 0 0 1-48 48"></svg:path></svg:g>`,
})
export class PhGoodreadsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoFillIcon],svg[ph-goodreads-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-24 136a48 48 0 0 1-86.4 28.8a8 8 0 1 1 12.8-9.6A32 32 0 0 0 160 160v-12.26A48 48 0 0 1 80 112v-8a48 48 0 0 1 80-35.74V64a8 8 0 0 1 16 0Zm-16-56v8a32 32 0 0 1-64 0v-8a32 32 0 0 1 64 0"></svg:path>`,
})
export class PhGoodreadsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoLightIcon],svg[ph-goodreads-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 26a6 6 0 0 0-6 6v19.4A62 62 0 0 0 66 88v24a62 62 0 0 0 112 36.6V168a50.06 50.06 0 0 1-50 50c-17.09 0-34-8.41-43.08-21.43a6 6 0 1 0-9.84 6.86C86.34 219.57 107.11 230 128 230a62.07 62.07 0 0 0 62-62V32a6 6 0 0 0-6-6m-56 136a50.06 50.06 0 0 1-50-50V88a50 50 0 0 1 100 0v24a50.06 50.06 0 0 1-50 50"></svg:path>`,
})
export class PhGoodreadsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoThinIcon],svg[ph-goodreads-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28a4 4 0 0 0-4 4v26.13A60 60 0 0 0 68 88v24a60 60 0 0 0 112 29.87V168a52.06 52.06 0 0 1-52 52c-17.72 0-35.28-8.75-44.72-22.29a4 4 0 0 0-6.56 4.58C87.61 217.91 107.74 228 128 228a60.07 60.07 0 0 0 60-60V32a4 4 0 0 0-4-4m-56 136a52.06 52.06 0 0 1-52-52V88a52 52 0 0 1 104 0v24a52.06 52.06 0 0 1-52 52"></svg:path>`,
})
export class PhGoodreadsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoIcon],svg[ph-google-cardboard-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 48a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhGoogleCardboardLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoBoldIcon],svg[ph-google-cardboard-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h64a12 12 0 0 0 8.49-3.51L128 185l23.51 23.52A12 12 0 0 0 160 212h64a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144h-55l-22.83-22.83a20 20 0 0 0-28.28 0L91 188H36V68h184ZM82 160a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10a10 10 0 0 1 10-10m92 44a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0-44a10 10 0 1 1-10 10a10 10 0 0 1 10-10"></svg:path>`,
})
export class PhGoogleCardboardLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoDuotoneIcon],svg[ph-google-cardboard-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 56H32a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h64l26.34-26.34a8 8 0 0 1 11.32 0L160 200h64a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M80 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-60.69l-24-24a16 16 0 0 0-22.62 0l-24 24H32V64h192ZM80 160a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m96 48a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path></svg:g>`,
})
export class PhGoogleCardboardLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoFillIcon],svg[ph-google-cardboard-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a8 8 0 0 0 5.66-2.34L128 179.31l26.34 26.35A8 8 0 0 0 160 208h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m96 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhGoogleCardboardLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoLightIcon],svg[ph-google-cardboard-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h64a6 6 0 0 0 4.24-1.76l26.35-26.34a2 2 0 0 1 2.82 0l26.35 26.34A6 6 0 0 0 160 206h64a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-61.51l-24.59-24.58a14 14 0 0 0-19.8 0L93.51 194H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2ZM80 98a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m96-48a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGoogleCardboardLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleCardboardLogoThinIcon],svg[ph-google-cardboard-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h64a4 4 0 0 0 2.83-1.17l26.34-26.34a4.08 4.08 0 0 1 5.66 0l26.34 26.34A4 4 0 0 0 160 204h64a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4h-62.34l-25.17-25.17a12 12 0 0 0-17 0L94.34 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM80 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m96-48a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGoogleCardboardLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoIcon],svg[ph-google-chrome-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40m32 88a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-120 0a87.44 87.44 0 0 1 9.56-39.86L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72l-23.1 40A88.14 88.14 0 0 1 40 128m92.69 87.87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z"></svg:path>`,
})
export class PhGoogleChromeLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoBoldIcon],svg[ph-google-chrome-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 24a83.89 83.89 0 0 1 65.9 32H128a52.05 52.05 0 0 0-46.15 28.07l-17.67-30.6A83.82 83.82 0 0 1 128 44m28 84a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-112 0a83.4 83.4 0 0 1 6-31.11L83 154c.06.11.14.2.2.3A52 52 0 0 0 128 180q1.19 0 2.34-.06l-17.68 30.63A84.12 84.12 0 0 1 44 128m96.05 83.12L173 154c.09-.15.16-.3.24-.46a51.81 51.81 0 0 0-1.46-53.54h35.4a83.95 83.95 0 0 1-67.13 111.12"></svg:path>`,
})
export class PhGoogleChromeLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoDuotoneIcon],svg[ph-google-chrome-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 128a40 40 0 1 1-40-40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40m32 88a32 32 0 1 1-32-32a32 32 0 0 1 32 32m-45.28 87A88 88 0 0 1 49.56 88.14L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72Zm18 .87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z"></svg:path></svg:g>`,
})
export class PhGoogleChromeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoFillIcon],svg[ph-google-chrome-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 73.72 40H128a48.08 48.08 0 0 0-45.6 33L59.32 73A87.89 87.89 0 0 1 128 40m-88 88a87.44 87.44 0 0 1 9.56-39.86L86.43 152c.06.1.13.19.19.28a48 48 0 0 0 51.2 22.72l-23.1 40A88.14 88.14 0 0 1 40 128m92.69 87.87L169.57 152c.08-.14.14-.28.22-.42a47.88 47.88 0 0 0-6-55.58H210a88 88 0 0 1-77.29 119.87Z"></svg:path>`,
})
export class PhGoogleChromeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoLightIcon],svg[ph-google-chrome-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 12a90 90 0 0 1 77.33 44H128a46.07 46.07 0 0 0-44.93 36.17l-26.16-45.3A89.91 89.91 0 0 1 128 38m34 90a34 34 0 1 1-34-34a34 34 0 0 1 34 34m-124 0a89.4 89.4 0 0 1 11.5-44l38.66 67c.06.1.13.18.19.27A45.94 45.94 0 0 0 142 171.83l-26.17 45.34A90.13 90.13 0 0 1 38 128m91.16 90l38.68-67l.21-.41A45.9 45.9 0 0 0 159 94h52.37a90 90 0 0 1-82.16 124Z"></svg:path>`,
})
export class PhGoogleChromeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleChromeLogoThinIcon],svg[ph-google-chrome-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 8a92.08 92.08 0 0 1 80.78 48H128a44.05 44.05 0 0 0-43.82 40.11L54.51 72.72A91.9 91.9 0 0 1 128 36m0 128a36 36 0 1 1 36-36a36 36 0 0 1-36 36m-92-36a91.5 91.5 0 0 1 13.51-47.95L89.9 150c0 .09.11.17.17.26a43.93 43.93 0 0 0 56.47 17.63l-29.7 51.43A92.13 92.13 0 0 1 36 128m92 92h-2.29l40.39-70a1.2 1.2 0 0 0 .09-.2A43.89 43.89 0 0 0 153.25 92h59.41A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhGoogleChromeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoIcon],svg[ph-google-drive-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92Zm-116.87 0L128 100.88L153.87 144Zm61.34 16l24 40H68.53l24-40ZM128 69.78L110.12 40l35.78-.05ZM95.91 47.41l22.76 37.92L83.47 144H37ZM36.54 160h37.33l-19.15 31.92Zm164.74 31.93L182.12 160h37.41Z"></svg:path>`,
})
export class PhGoogleDriveLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoBoldIcon],svg[ph-google-drive-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241 141.65L172.59 29.51l-.07-.11a19.85 19.85 0 0 0-17-9.4h-55.08a19.85 19.85 0 0 0-17 9.4l-.07.11L15 141.65a20 20 0 0 0-.36 20.46L42 209.92A20 20 0 0 0 59.33 220h137.34A20 20 0 0 0 214 209.92l27.32-47.81a20 20 0 0 0-.32-20.46M211.88 140h-37.09L142 85.33l18.12-30.19ZM54.8 184l-11.44-20h23.45Zm40-20h66.4l19.2 32H75.6Zm14.4-24l18.8-31.34L146.8 140Zm80 24h23.45l-11.45 20ZM128 62l-10.81-18h21.62Zm-32.11-6.86L114 85.33L81.21 140H44.12Z"></svg:path>`,
})
export class PhGoogleDriveLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoDuotoneIcon],svg[ph-google-drive-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 152h64l-32.88 54.8a7.9 7.9 0 0 1-2.74-2.8l-27.33-47.85A8 8 0 0 1 24 152m144 0l32.88 54.8a7.9 7.9 0 0 0 2.74-2.83l27.32-47.82A8 8 0 0 0 232 152ZM100.43 32a8.06 8.06 0 0 0-3.84 1L128 85.33L159.41 33a8.1 8.1 0 0 0-3.85-1Z" opacity=".2"></svg:path><svg:path d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92Zm-116.87 0L128 100.88L153.87 144Zm61.34 16l24 40H68.53l24-40ZM128 69.78L110.12 40l35.78-.05ZM95.91 47.41l22.76 37.92L83.47 144H37ZM36.54 160h37.33l-19.15 31.92Zm164.74 31.93L182.12 160h37.41Z"></svg:path></svg:g>`,
})
export class PhGoogleDriveLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoFillIcon],svg[ph-google-drive-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.6 143.78L169.13 31.52A15.91 15.91 0 0 0 155.56 24h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 143.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 216h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34M219 144h-46.48l-35.19-58.67l22.75-37.92ZM92.53 160h70.94l24 40H68.53Zm9.6-16L128 100.88L153.87 144Zm-6.22-96.59l22.76 37.92L83.47 144H37Z"></svg:path>`,
})
export class PhGoogleDriveLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoLightIcon],svg[ph-google-drive-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.9 144.82L167.43 32.58A13.91 13.91 0 0 0 155.56 26h-55.13a13.92 13.92 0 0 0-11.87 6.58v.05L20.13 144.76a14 14 0 0 0-.28 14.37L47.17 207a14 14 0 0 0 12.15 7h137.35a14 14 0 0 0 12.16-7l27.32-47.82a14 14 0 0 0-.25-14.36M222.56 146h-51.17L135 85.33l25.08-41.79Zm-124 0L128 97l29.4 49Zm66 12L191 202H65l26.4-44ZM128 73.67L106.6 38h42.8ZM95.93 43.54L121 85.33L84.6 146H33.43ZM33 158h44.4l-22.73 37.89Zm168.3 37.89L178.59 158H223Z"></svg:path>`,
})
export class PhGoogleDriveLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleDriveLogoThinIcon],svg[ph-google-drive-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.19 145.86L165.74 33.64A11.94 11.94 0 0 0 155.56 28h-55.13a11.93 11.93 0 0 0-10.17 5.64L21.83 145.82a12 12 0 0 0-.25 12.32L48.91 206a12 12 0 0 0 10.41 6h137.35a12 12 0 0 0 10.42-6l27.32-47.81a12 12 0 0 0-.22-12.33m-8.06 2.14h-55.87l-37.6-62.67l27.39-45.65Zm-131.07 0L128 93.11L160.93 148Zm70.67 8l28.8 48H61.47l28.79-48ZM128 77.56L103.06 36h49.87ZM95.94 39.68l27.39 45.65L85.74 148H29.87ZM29.58 156h51.36l-26.31 43.85Zm171.79 43.85L175.06 156h51.36Z"></svg:path>`,
})
export class PhGoogleDriveLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoIcon],svg[ph-google-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a96 96 0 1 1-21.95-61.09a8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGoogleLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoBoldIcon],svg[ph-google-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a100 100 0 1 1-22.86-63.64a12 12 0 0 1-18.51 15.28A76 76 0 1 0 203.05 140H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhGoogleLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoDuotoneIcon],svg[ph-google-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88" opacity=".2"></svg:path><svg:path d="M224 128a96 96 0 1 1-21.95-61.09a8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGoogleLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoFillIcon],svg[ph-google-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 184a80 80 0 1 1 53.34-139.63a8 8 0 0 1-10.67 11.92A64 64 0 1 0 191.5 136H128a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class PhGoogleLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoLightIcon],svg[ph-google-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a94 94 0 1 1-21.49-59.82a6 6 0 1 1-9.25 7.64A82 82 0 1 0 209.78 134H128a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGoogleLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGoogleLogoThinIcon],svg[ph-google-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a92 92 0 1 1-21-58.55a4 4 0 0 1-6.17 5.1A84 84 0 1 0 211.91 132H128a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhGoogleLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoIcon],svg[ph-google-photos-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8m-48-32a55.3 55.3 0 0 1-10 32h-38V32.57A56.09 56.09 0 0 1 184 88M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m-16 96a55.3 55.3 0 0 1 10-32h38v87.43A56.09 56.09 0 0 1 72 168m96 16a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path>`,
})
export class PhGooglePhotosLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoBoldIcon],svg[ph-google-photos-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116h-33.36A76 76 0 0 0 128 12a12 12 0 0 0-12 12v33.36A76 76 0 0 0 12 128a12 12 0 0 0 12 12h33.36A76 76 0 0 0 128 244a12 12 0 0 0 12-12v-33.36A76 76 0 0 0 244 128a12 12 0 0 0-12-12m-52-28a51.4 51.4 0 0 1-8.18 28H140V37.4A52.09 52.09 0 0 1 180 88M88 76a51.4 51.4 0 0 1 28 8.18V116H37.4A52.09 52.09 0 0 1 88 76m-12 92a51.4 51.4 0 0 1 8.18-28H116v78.6A52.09 52.09 0 0 1 76 168m92 12a51.4 51.4 0 0 1-28-8.18V140h78.6a52.09 52.09 0 0 1-50.6 40"></svg:path>`,
})
export class PhGooglePhotosLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoDuotoneIcon],svg[ph-google-photos-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88a63.7 63.7 0 0 1-14 40h-50V24a64 64 0 0 1 64 64M64 168a64 64 0 0 0 64 64V128H78a63.7 63.7 0 0 0-14 40" opacity=".2"></svg:path><svg:path d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M120 223.43A56.09 56.09 0 0 1 72 168a55.3 55.3 0 0 1 10-32h38ZM120 120H32.57A56.09 56.09 0 0 1 88 72a55.3 55.3 0 0 1 32 10Zm16-87.43A56.09 56.09 0 0 1 184 88a55.3 55.3 0 0 1-10 32h-38ZM168 184a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path></svg:g>`,
})
export class PhGooglePhotosLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoFillIcon],svg[ph-google-photos-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m80 112a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path>`,
})
export class PhGooglePhotosLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoLightIcon],svg[ph-google-photos-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-42.82A70 70 0 0 0 128 18a6 6 0 0 0-6 6v42.82A70 70 0 0 0 18 128a6 6 0 0 0 6 6h42.82A70 70 0 0 0 128 238a6 6 0 0 0 6-6v-42.82A70 70 0 0 0 238 128a6 6 0 0 0-6-6m-46-34a57.3 57.3 0 0 1-11 34h-41V30.31A58.08 58.08 0 0 1 186 88M88 70a57.3 57.3 0 0 1 34 11v41H30.31A58.08 58.08 0 0 1 88 70m-18 98a57.3 57.3 0 0 1 11-34h41v91.69A58.08 58.08 0 0 1 70 168m98 18a57.3 57.3 0 0 1-34-11v-41h91.69A58.08 58.08 0 0 1 168 186"></svg:path>`,
})
export class PhGooglePhotosLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoThinIcon],svg[ph-google-photos-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-46.32A68 68 0 0 0 128 20a4 4 0 0 0-4 4v46.32A68 68 0 0 0 20 128a4 4 0 0 0 4 4h46.32A68 68 0 0 0 128 236a4 4 0 0 0 4-4v-46.32A68 68 0 0 0 236 128a4 4 0 0 0-4-4m-44-36a59.28 59.28 0 0 1-12 36h-44V28.13A60.08 60.08 0 0 1 188 88M88 68a59.28 59.28 0 0 1 36 12v44H28.13A60.08 60.08 0 0 1 88 68M68 168a59.28 59.28 0 0 1 12-36h44v95.87A60.08 60.08 0 0 1 68 168m100 20a59.28 59.28 0 0 1-36-12v-44h95.87A60.08 60.08 0 0 1 168 188"></svg:path>`,
})
export class PhGooglePhotosLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoIcon],svg[ph-google-play-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.82 114.19L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.75 15.75 0 0 0 0-27.62ZM64 212.67V43.33L148.69 128Zm96-73.36l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z"></svg:path>`,
})
export class PhGooglePlayLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoBoldIcon],svg[ph-google-play-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.79 110.7L74 14.65a20.24 20.24 0 0 0-20.12.06A19.62 19.62 0 0 0 44 31.84v192.32a19.62 19.62 0 0 0 9.91 17.13a20.22 20.22 0 0 0 20.12.06l167.76-96a19.76 19.76 0 0 0 0-34.6ZM68 203V53l75 75Zm92-58l12.4 12.4l-58 33.2Zm-45.59-79.57l58 33.2L160 111ZM194 145l-17-17l17-17l29.72 17Z"></svg:path>`,
})
export class PhGooglePlayLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoDuotoneIcon],svg[ph-google-play-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128L58.32 230a7.7 7.7 0 0 1-2.32-5.55V31.55A7.7 7.7 0 0 1 58.32 26Z" opacity=".2"></svg:path><svg:path d="M239.82 114.18L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM64 212.67V43.33L148.69 128Zm96-73.36l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z"></svg:path></svg:g>`,
})
export class PhGooglePlayLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoFillIcon],svg[ph-google-play-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.82 114.18L72 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 48 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67a16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM160 139.31l18.92 18.92l-88.5 50.66ZM90.4 47.1l88.53 50.67L160 116.69ZM193.31 150l-22-22l22-22l38.43 22Z"></svg:path>`,
})
export class PhGooglePlayLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoLightIcon],svg[ph-google-play-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.84 115.93L71 19.89a14 14 0 0 0-14.12 0A13.68 13.68 0 0 0 50 31.87v192.26a13.68 13.68 0 0 0 6.92 11.94a14 14 0 0 0 14.12 0l167.8-96a13.75 13.75 0 0 0 0-24.14M62 217.5v-179l89.51 89.5Zm98-81l22.19 22.19L78.4 218.07ZM78.4 37.93l103.79 59.4L160 119.52ZM233 129.58l-.1.06l-39.9 22.85L168.49 128L193 103.51l39.94 22.85l.1.06a1.76 1.76 0 0 1 0 3.16Z"></svg:path>`,
})
export class PhGooglePlayLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePlayLogoThinIcon],svg[ph-google-play-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.89 117.69L70.05 21.62a12 12 0 0 0-12.13 0A11.69 11.69 0 0 0 52 31.87v192.26a11.69 11.69 0 0 0 5.92 10.21a12 12 0 0 0 12.13 0l167.77-96a11.76 11.76 0 0 0 .07-20.66Zm-52.44-20.8L160 122.34L66.4 28.75ZM60 222.33V33.67L154.34 128Zm6.4 4.92l93.6-93.59l25.45 25.45Zm167.51-95.88L192.65 155l-27-27l27-27L234 124.66a3.77 3.77 0 0 1-.07 6.71Z"></svg:path>`,
})
export class PhGooglePlayLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoIcon],svg[ph-google-podcasts-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0m40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8M32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhGooglePodcastsLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoBoldIcon],svg[ph-google-podcasts-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 16v32a12 12 0 0 1-24 0V16a12 12 0 0 1 24 0m36 36a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m-48 144a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0-120a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12M80 52a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m96 72a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-56a12 12 0 0 0-12-12M32 100a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m48 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m144-48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhGooglePodcastsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoDuotoneIcon],svg[ph-google-podcasts-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m224 144l-96 96l-96-96v-32l96-96l96 96z" opacity=".2"></svg:path><svg:path d="M136 16v32a8 8 0 0 1-16 0V16a8 8 0 0 1 16 0m40 40a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-48 144a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m0-120a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M80 56a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m96 72a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-56a8 8 0 0 0-8-8M32 104a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m48 48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m144-48a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhGooglePodcastsLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoFillIcon],svg[ph-google-podcasts-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.32 116.68l-104-104a16 16 0 0 0-22.64 0l-104 104a16 16 0 0 0 0 22.64l104 104a16 16 0 0 0 22.64 0l104-104a16 16 0 0 0 0-22.64M56 136a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 88a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-48a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm0-112a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm40 120a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Zm0-80a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 40a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhGooglePodcastsLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoLightIcon],svg[ph-google-podcasts-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 16v32a6 6 0 0 1-12 0V16a6 6 0 0 1 12 0m42 42a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m-48 144a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m0-120a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0V88a6 6 0 0 0-6-6M80 58a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m96 72a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-56a6 6 0 0 0-6-6M32 106a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m48 48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m144-48a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhGooglePodcastsLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGooglePodcastsLogoThinIcon],svg[ph-google-podcasts-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 16v32a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0m44 44a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-48 144a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m0-120a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4M80 60a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m96 72a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-56a4 4 0 0 0-4-4M32 108a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m48 48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m144-48a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGooglePodcastsLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsIcon],svg[ph-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72"></svg:path>`,
})
export class PhGpsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsBoldIcon],svg[ph-gps-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 116h-20.78A92.21 92.21 0 0 0 140 36.78V16a12 12 0 0 0-24 0v20.78A92.21 92.21 0 0 0 36.78 116H16a12 12 0 0 0 0 24h20.78A92.21 92.21 0 0 0 116 219.22V240a12 12 0 0 0 24 0v-20.78A92.21 92.21 0 0 0 219.22 140H240a12 12 0 0 0 0-24m-112 80a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class PhGpsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsDuotoneIcon],svg[ph-gps-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhGpsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFillIcon],svg[ph-gps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-24.37A88.13 88.13 0 0 1 136 215.63V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37A88.13 88.13 0 0 1 120 40.37V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhGpsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixIcon],svg[ph-gps-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m0-112a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhGpsFixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixBoldIcon],svg[ph-gps-fix-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 116h-20.78A92.21 92.21 0 0 0 140 36.78V16a12 12 0 0 0-24 0v20.78A92.21 92.21 0 0 0 36.78 116H16a12 12 0 0 0 0 24h20.78A92.21 92.21 0 0 0 116 219.22V240a12 12 0 0 0 24 0v-20.78A92.21 92.21 0 0 0 219.22 140H240a12 12 0 0 0 0-24m-112 80a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m0-112a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGpsFixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixDuotoneIcon],svg[ph-gps-fix-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 48a80 80 0 1 0 80 80a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m0-112a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhGpsFixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixFillIcon],svg[ph-gps-fix-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 120h-24.37A88.13 88.13 0 0 0 136 40.37V16a8 8 0 0 0-16 0v24.37A88.13 88.13 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37A88.13 88.13 0 0 0 215.63 136H240a8 8 0 0 0 0-16m-112 80a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72m40-72a40 40 0 1 1-40-40a40 40 0 0 1 40 40"></svg:path>`,
})
export class PhGpsFixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixLightIcon],svg[ph-gps-fix-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74m0-112a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhGpsFixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsFixThinIcon],svg[ph-gps-fix-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-112a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhGpsFixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsLightIcon],svg[ph-gps-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 122h-26.23A86.12 86.12 0 0 0 134 42.23V16a6 6 0 0 0-12 0v26.23A86.12 86.12 0 0 0 42.23 122H16a6 6 0 0 0 0 12h26.23A86.12 86.12 0 0 0 122 213.77V240a6 6 0 0 0 12 0v-26.23A86.12 86.12 0 0 0 213.77 134H240a6 6 0 0 0 0-12m-112 80a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74"></svg:path>`,
})
export class PhGpsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashIcon],svg[ph-gps-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 128a8 8 0 0 1-8 8h-24.36a87 87 0 0 1-7.33 28a8 8 0 0 1-7.3 4.73a7.9 7.9 0 0 1-3.27-.71a8 8 0 0 1-4-10.57a72.06 72.06 0 0 0-88.81-97.69a8 8 0 1 1-5.13-15.15a87.2 87.2 0 0 1 20.2-4.24V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8m-34.08 82.62a8 8 0 1 1-11.84 10.76L181 198.23a87.7 87.7 0 0 1-45 17.4V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37a88.3 88.3 0 0 1 22.77-51.46L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-43.72-24.3L74 80.45a72 72 0 0 0 96.2 105.87"></svg:path>`,
})
export class PhGpsSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashBoldIcon],svg[ph-gps-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 128a12 12 0 0 1-12 12h-20.79a91.7 91.7 0 0 1-3.56 16a12 12 0 0 1-11.43 8.35a12.2 12.2 0 0 1-3.65-.57a12 12 0 0 1-7.78-15.09A68.06 68.06 0 0 0 128 60a68.7 68.7 0 0 0-14.48 1.54a12 12 0 1 1-5.08-23.45c2.49-.54 5-1 7.56-1.31V16a12 12 0 0 1 24 0v20.78A92.21 92.21 0 0 1 219.22 116H240a12 12 0 0 1 12 12m-35.12 79.93a12 12 0 1 1-17.76 16.14l-18.65-20.51A91.6 91.6 0 0 1 140 219.2V240a12 12 0 0 1-24 0v-20.78A92.21 92.21 0 0 1 36.78 140H16a12 12 0 0 1 0-24h20.79a92.36 92.36 0 0 1 21-47.42L39.12 48.07a12 12 0 1 1 17.76-16.14l133.81 147.18Zm-52.74-22.33l-90-99a68 68 0 0 0 90 99"></svg:path>`,
})
export class PhGpsSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashDuotoneIcon],svg[ph-gps-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 128a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M248 128a8 8 0 0 1-8 8h-24.36a87 87 0 0 1-7.33 28a8 8 0 0 1-7.3 4.73a7.9 7.9 0 0 1-3.27-.71a8 8 0 0 1-4-10.57a72.06 72.06 0 0 0-88.81-97.69a8 8 0 1 1-5.13-15.15a87.2 87.2 0 0 1 20.2-4.24V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8m-34.08 82.62a8 8 0 1 1-11.84 10.76L181 198.23a87.7 87.7 0 0 1-45 17.4V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37a88.3 88.3 0 0 1 22.77-51.46L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-43.72-24.3L74 80.45a72 72 0 0 0 96.2 105.87"></svg:path></svg:g>`,
})
export class PhGpsSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashFillIcon],svg[ph-gps-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 136h-24.37a87.2 87.2 0 0 1-10.13 33.61a4 4 0 0 1-6.5.81L92.51 53.28a4 4 0 0 1 1.4-6.38A87 87 0 0 1 120 40.37V16a8 8 0 0 1 8.53-8a8.17 8.17 0 0 1 7.47 8.27v24.1A88.13 88.13 0 0 1 215.63 120h24.1a8.17 8.17 0 0 1 8.25 7.47A8 8 0 0 1 240 136M53.92 34.62a8 8 0 1 0-11.84 10.76l21.09 23.2A87.63 87.63 0 0 0 40.37 120H16a8 8 0 0 0 0 16h24.37A88.13 88.13 0 0 0 120 215.63V240a8 8 0 0 0 16 0v-24.37a87.5 87.5 0 0 0 45-17.43l21.08 23.18a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhGpsSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashLightIcon],svg[ph-gps-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a6 6 0 0 1-6 6h-26.21a85.2 85.2 0 0 1-7.3 29.2a6 6 0 0 1-5.48 3.55a5.9 5.9 0 0 1-2.45-.53a6 6 0 0 1-3-7.93a74.05 74.05 0 0 0-91.28-100.4a6 6 0 0 1-3.84-11.37a85.6 85.6 0 0 1 21.56-4.3V16a6 6 0 0 1 12 0v26.23A86.12 86.12 0 0 1 213.77 122H240a6 6 0 0 1 6 6m-33.56 84a6 6 0 0 1-8.88 8.08l-22.3-24.54A85.73 85.73 0 0 1 134 213.77V240a6 6 0 0 1-12 0v-26.23A86.12 86.12 0 0 1 42.23 134H16a6 6 0 0 1 0-12h26.22a86.23 86.23 0 0 1 23.64-53.44L43.56 44a6 6 0 0 1 8.88-8Zm-39.27-25.4L74 77.48a74 74 0 0 0 99.17 109.12"></svg:path>`,
})
export class PhGpsSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsSlashThinIcon],svg[ph-gps-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 128a4 4 0 0 1-4 4h-28.1a83.1 83.1 0 0 1-7.24 30.38a4 4 0 0 1-3.65 2.37a3.9 3.9 0 0 1-1.63-.36a4 4 0 0 1-2-5.28A76.06 76.06 0 0 0 103.62 56a4 4 0 1 1-2.56-7.57A83.6 83.6 0 0 1 124 44.1V16a4 4 0 0 1 8 0v28.1a84.11 84.11 0 0 1 79.9 79.9H240a4 4 0 0 1 4 4m-33 85.31a4 4 0 1 1-5.92 5.38l-23.56-25.91A83.8 83.8 0 0 1 132 211.9V240a4 4 0 0 1-8 0v-28.1A84.11 84.11 0 0 1 44.1 132H16a4 4 0 0 1 0-8h28.1a84.24 84.24 0 0 1 24.5-55.39L45 42.69a4 4 0 0 1 6-5.38L184.77 184.5Zm-34.87-26.47L74 74.53a76 76 0 0 0 102.1 112.31Z"></svg:path>`,
})
export class PhGpsSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGpsThinIcon],svg[ph-gps-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhGpsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientIcon],svg[ph-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 104a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200-8h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16M72 136H32a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m152 0h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-128 8a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-40 32H32a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0H88a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M32 72h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhGradientIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientBoldIcon],svg[ph-gradient-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 108a12 12 0 0 1 12-12h76a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204-12h-76a12 12 0 0 0 0 24h76a12 12 0 0 0 0-24M68 136H32a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24m156 0h-36a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24M96 148a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12m-44 28H32a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m56 0H92a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m56 0h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m60 0h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24M32 80h192a12 12 0 0 0 0-24H32a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhGradientBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientDuotoneIcon],svg[ph-gradient-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v120H32V64Z" opacity=".2"></svg:path><svg:path d="M24 104a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200-8h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16M72 136H32a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m152 0h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-128 8a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8m-40 32H32a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0H88a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m56 0h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M32 72h192a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhGradientDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientFillIcon],svg[ph-gradient-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 192a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m144-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16m-72 0h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16M32 168h80a8 8 0 0 0 0-16H32a8 8 0 0 0 0 16m192-16h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m0-96H32a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8m0 56H32a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8v-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhGradientFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientLightIcon],svg[ph-gradient-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 104a6 6 0 0 1 6-6h80a6 6 0 0 1 0 12H32a6 6 0 0 1-6-6m198-6h-80a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12M72 138H32a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m152 0h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m-126 6a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6m-42 34H32a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0H88a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m56 0h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M32 70h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhGradientLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGradientThinIcon],svg[ph-gradient-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196-4h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8M72 140H32a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m152 0h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m-124 4a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4m-44 36H32a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0H88a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M32 68h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhGradientThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapIcon],svg[ph-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.76 88.94l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76V240a8 8 0 0 0 16 0v-40.49a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12M128 200c-43.27 0-68.72-21.14-80-33.71V126.4l76.24 40.66a8 8 0 0 0 7.52 0L176 143.47v46.34c-12.6 5.88-28.48 10.19-48 10.19m80-33.75a97.8 97.8 0 0 1-16 14.25v-45.57l16-8.53Zm-20-47.31l-.22-.13l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l-43 22.93L25 96l103-54.93L231 96Z"></svg:path>`,
})
export class PhGraduationCapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapBoldIcon],svg[ph-graduation-cap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.8 85.49l-116-64a12 12 0 0 0-11.6 0l-116 64a12 12 0 0 0 0 21l21.8 12v47.76a19.9 19.9 0 0 0 5.09 13.32C46.63 194.7 77 220 128 220a136.9 136.9 0 0 0 40-5.75V240a12 12 0 0 0 24 0v-35.88a119.5 119.5 0 0 0 30.91-24.51a19.9 19.9 0 0 0 5.09-13.32v-47.76l21.8-12a12 12 0 0 0 0-21ZM128 45.71L219.16 96L186 114.3a2 2 0 0 1-.18-.12l-52-28.69a12 12 0 0 0-11.6 21l39 21.49L128 146.3L36.84 96ZM128 196c-40.42 0-64.65-19.07-76-31.27v-33l70.2 38.74a12 12 0 0 0 11.6 0l34.2-18.83v37.23a110.5 110.5 0 0 1-40 7.13m76-31.27a93 93 0 0 1-12 10.81v-37.15l12-6.62Z"></svg:path>`,
})
export class PhGraduationCapBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapDuotoneIcon],svg[ph-graduation-cap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 113.07v53.22a8 8 0 0 1-2 5.31c-11.3 12.59-38.9 36.4-86 36.4s-74.68-23.81-86-36.4a8 8 0 0 1-2-5.31v-53.22L128 160Z" opacity=".2"></svg:path><svg:path d="m251.76 88.94l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76V240a8 8 0 0 0 16 0v-40.49a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12M128 200c-43.27 0-68.72-21.14-80-33.71V126.4l76.24 40.66a8 8 0 0 0 7.52 0L176 143.47v46.34c-12.6 5.88-28.48 10.19-48 10.19m80-33.75a97.8 97.8 0 0 1-16 14.25v-45.57l16-8.53Zm-20-47.31l-.22-.13l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l-43 22.93L25 96l103-54.93L231 96Z"></svg:path></svg:g>`,
})
export class PhGraduationCapDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapFillIcon],svg[ph-graduation-cap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></svg:path>`,
})
export class PhGraduationCapFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapLightIcon],svg[ph-graduation-cap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.82 90.71l-120-64a5.94 5.94 0 0 0-5.64 0l-120 64a6 6 0 0 0 0 10.58L34 116.67v49.62a14 14 0 0 0 3.55 9.32C50.42 189.94 79.29 214 128 214a127.2 127.2 0 0 0 50-9.73V240a6 6 0 0 0 12 0v-41.65a113.2 113.2 0 0 0 28.45-22.75a13.9 13.9 0 0 0 3.55-9.31v-49.62l28.82-15.38a6 6 0 0 0 0-10.58M128 202c-44 0-70-21.56-81.52-34.41a2 2 0 0 1-.48-1.3v-43.22l79.18 42.22a6 6 0 0 0 5.64 0L178 140.13v51c-13 6.22-29.55 10.87-50 10.87m82-35.71a2 2 0 0 1-.48 1.3A100.3 100.3 0 0 1 190 184.3v-50.57l20-10.66Zm-22.15-45a6.3 6.3 0 0 0-1-.71l-56-29.86a6 6 0 0 0-5.64 10.58l50.04 26.7L128 153.2L20.75 96L128 38.8L235.25 96Z"></svg:path>`,
})
export class PhGraduationCapLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraduationCapThinIcon],svg[ph-graduation-cap-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.88 92.47l-120-64a4 4 0 0 0-3.76 0l-120 64a4 4 0 0 0 0 7.06L36 115.47v50.82a11.92 11.92 0 0 0 3 8c12.65 14.09 41 37.73 89 37.73c21 0 38.2-4.52 52-10.79V240a4 4 0 0 0 8 0v-42.82a111.6 111.6 0 0 0 29-22.91a11.94 11.94 0 0 0 3-8v-50.8l29.88-15.94a4 4 0 0 0 0-7.06M128 204c-44.83 0-71.25-22-83-35.08a3.92 3.92 0 0 1-1-2.63v-46.56l82.12 43.8a4 4 0 0 0 3.76 0L180 136.8v55.53C166.58 199 149.39 204 128 204m84-37.71a4 4 0 0 1-1 2.64a103.3 103.3 0 0 1-23 19v-55.4l24-12.8Zm-24.59-42.51a4 4 0 0 0-1.53-1.44l-56-29.87a4 4 0 0 0-3.76 7.06L179.5 128L128 155.47L16.5 96L128 36.53L239.5 96Z"></svg:path>`,
})
export class PhGraduationCapThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsIcon],svg[ph-grains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56a87.5 87.5 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.12a8 8 0 0 0-7.16 0c-1.33.66-30.25 15.42-44.57 45.12A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8m-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.21 26.41-31.33 33.85-35.9c7.44 4.58 24.63 16.7 33.84 35.9A88.6 88.6 0 0 0 128 107.36a88.57 88.57 0 0 0-33.85-38.25M200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhGrainsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsBoldIcon],svg[ph-grains-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 52a91.7 91.7 0 0 0-29.9 5c-15.39-28.76-43.4-43.06-44.73-43.72a12 12 0 0 0-10.74 0c-1.33.66-29.34 15-44.74 43.72A91.6 91.6 0 0 0 48 52a12 12 0 0 0-12 12v80a92 92 0 0 0 184 0V64a12 12 0 0 0-12-12M60 77.06a68.15 68.15 0 0 1 55.72 60.73a91.9 91.9 0 0 0-55.72-29Zm56 133.88A68.12 68.12 0 0 1 60 144v-10.94A68.12 68.12 0 0 1 116 200ZM99.37 67.71c8.2-14.94 21.32-25 28.63-29.77c7.32 4.79 20.43 14.83 28.63 29.77A92.7 92.7 0 0 0 128 98.61a92.8 92.8 0 0 0-28.63-30.9M196 144a68.12 68.12 0 0 1-56 66.94V200a68.12 68.12 0 0 1 56-66.94Zm0-35.22a91.9 91.9 0 0 0-55.72 29A68.15 68.15 0 0 1 196 77.06Z"></svg:path>`,
})
export class PhGrainsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsDuotoneIcon],svg[ph-grains-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v56a80 80 0 0 0-80 80a80 80 0 0 0-80-80V64a79.7 79.7 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64" opacity=".2"></svg:path><svg:path d="M208 56a87.5 87.5 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.67-30.25 15.43-44.57 45.13A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8m-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.22 26.43-31.35 33.85-35.91c7.44 4.54 24.6 16.6 33.84 35.91A88.5 88.5 0 0 0 128 107.36a88.5 88.5 0 0 0-33.85-38.25M200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"></svg:path></svg:g>`,
})
export class PhGrainsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsFillIcon],svg[ph-grains-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 56a87.5 87.5 0 0 0-31.84 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.64-30.26 15.4-44.58 45.13A87.5 87.5 0 0 0 48 56a8 8 0 0 0-8 8v80a88.12 88.12 0 0 0 75.48 87.1a4 4 0 0 0 4.52-4v-50.83a8.18 8.18 0 0 1 7.47-8.25a8 8 0 0 1 8.53 8v51.14a4 4 0 0 0 4.52 4A88.12 88.12 0 0 0 216 144V64a8 8 0 0 0-8-8m-88 93.46a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144Zm8-42.1a88.6 88.6 0 0 0-33.84-38.25c9.21-19.21 26.4-31.33 33.84-35.9c7.45 4.58 24.63 16.7 33.84 35.9A88.6 88.6 0 0 0 128 107.36m72 5a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z"></svg:path>`,
})
export class PhGrainsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsLightIcon],svg[ph-grains-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 58a85.5 85.5 0 0 0-32.84 6.53C161.45 34.31 132 19.3 130.68 18.63a6 6 0 0 0-5.36 0c-1.33.67-30.77 15.68-44.48 45.9A85.5 85.5 0 0 0 48 58a6 6 0 0 0-6 6v80a86 86 0 0 0 172 0V64a6 6 0 0 0-6-6m-86 159.76A74.1 74.1 0 0 1 54 144v-17.76A74.1 74.1 0 0 1 122 200Zm0-61.51a86.1 86.1 0 0 0-68-42v-44A74.11 74.11 0 0 1 122 144ZM91.58 69.91c9.66-21.6 29.27-34.78 36.42-39c7.16 4.25 26.76 17.43 36.41 39A86.5 86.5 0 0 0 128 112.5a86.47 86.47 0 0 0-36.42-42.59M202 144a74.1 74.1 0 0 1-68 73.76V200a74.1 74.1 0 0 1 68-73.76Zm0-29.77a86.1 86.1 0 0 0-68 42V144a74.11 74.11 0 0 1 68-73.76Z"></svg:path>`,
})
export class PhGrainsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashIcon],svg[ph-grains-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l9.73 10.71Q49.91 56 48 56a8 8 0 0 0-8 8v80a88.1 88.1 0 0 0 88 88a87.82 87.82 0 0 0 61.21-24.78l12.87 14.16a8 8 0 1 0 11.84-10.76ZM136.29 149a88 88 0 0 0-8.29 14.37a88.16 88.16 0 0 0-72-51V72.44a71.3 71.3 0 0 1 13.18 2.75ZM120 215.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm16 0V200a72.1 72.1 0 0 1 11.36-38.81l31.08 34.19A71.85 71.85 0 0 1 136 215.56M216 144a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144v-15.57a71.1 71.1 0 0 0-24.56 7.33a8 8 0 1 1-7.24-14.26a86.6 86.6 0 0 1 31.8-9.14V72.45a72.33 72.33 0 0 0-50.35 29.36a8 8 0 1 1-13-9.39a88.2 88.2 0 0 1 25.16-23.3C152.62 49.8 135.45 37.74 128 33.2a100.2 100.2 0 0 0-23.4 19.94a8 8 0 1 1-12.21-10.33a112.3 112.3 0 0 1 32-26a8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15A87.9 87.9 0 0 1 208 56a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhGrainsSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashBoldIcon],svg[ph-grains-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14l4.37 4.81A12 12 0 0 0 36 64v80a92 92 0 0 0 153 68.9l10.16 11.17a12 12 0 0 0 17.76-16.14Zm3.31 117.16a68.16 68.16 0 0 1 55.62 61.82a68.16 68.16 0 0 1-55.62-61.82M128 170.61a92.22 92.22 0 0 0-68-45.83V77.05a69 69 0 0 1 6.94 1.63l70.83 77.9a92.5 92.5 0 0 0-9.77 14.03m12.19 40.29a68.26 68.26 0 0 1 13.92-36.34l18.7 20.57a67.74 67.74 0 0 1-32.62 15.77M220 64v80a93 93 0 0 1-1 13.34a12 12 0 0 1-11.86 10.28a13 13 0 0 1-1.74-.13a12 12 0 0 1-10.15-13.6c.23-1.59.4-3.19.52-4.8c-.76.14-1.53.29-2.29.45a12 12 0 1 1-5.08-23.45c2.49-.54 5-1 7.56-1.31V77.07a68 68 0 0 0-38.79 21.72a12 12 0 1 1-17.92-16a91.7 91.7 0 0 1 17.37-15.09c-8.2-14.93-21.31-25-28.63-29.76a98 98 0 0 0-15.56 12.6a12 12 0 0 1-17-16.95a116 116 0 0 1 27.19-20.32a12 12 0 0 1 10.74 0c1.33.66 29.36 15 44.74 43.74A91.8 91.8 0 0 1 208 52a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhGrainsSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashDuotoneIcon],svg[ph-grains-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v56a80 80 0 0 0-80 80a80 80 0 0 0-80-80V64a79.7 79.7 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l9.73 10.71Q49.91 56 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 149.21 63.22l12.87 14.16a8 8 0 1 0 11.84-10.76ZM120 215.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200ZM56 112.37V72.44a71.3 71.3 0 0 1 13.18 2.75L136.29 149a88 88 0 0 0-8.29 14.37a88.16 88.16 0 0 0-72-51m80 103.19V200a72.1 72.1 0 0 1 11.36-38.81l31.08 34.19A71.85 71.85 0 0 1 136 215.56M216 64v80a88 88 0 0 1-3.15 23.4a8 8 0 0 1-7.71 5.88A7.8 7.8 0 0 1 203 173a8 8 0 0 1-5.59-9.83A72.6 72.6 0 0 0 200 144v-15.57a71.1 71.1 0 0 0-24.56 7.33a8 8 0 1 1-7.24-14.26a86.6 86.6 0 0 1 31.8-9.14V72.45a72.33 72.33 0 0 0-50.35 29.36a8 8 0 1 1-13-9.39a88.2 88.2 0 0 1 25.16-23.3C152.62 49.8 135.45 37.74 128 33.2a99.8 99.8 0 0 0-23.4 19.94a8 8 0 0 1-12.21-10.33a112.3 112.3 0 0 1 32-26a8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15A87.9 87.9 0 0 1 208 56a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhGrainsSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashFillIcon],svg[ph-grains-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64v80a87.7 87.7 0 0 1-5.45 30.49a4 4 0 0 1-6.7 1.27l-41.33-45.46a4 4 0 0 1 1-6.16A87.4 87.4 0 0 1 200 112.37V72.45a72.33 72.33 0 0 0-50.35 29.36a8 8 0 0 1-11.93 1.19a8.17 8.17 0 0 1-.89-10.75a88.1 88.1 0 0 1 25-23.11C152.62 49.8 135.45 37.74 128 33.2a99.8 99.8 0 0 0-23.4 19.94a8 8 0 0 1-12 .27a8.18 8.18 0 0 1-.06-10.8a112.4 112.4 0 0 1 31.86-25.76a8 8 0 0 1 7.16 0c1.32.66 30.27 15.43 44.59 45.15a87.9 87.9 0 0 1 31.74-6a8 8 0 0 1 8.11 8m-2.08 146.62a8 8 0 1 1-11.84 10.76l-12.9-14.19A87.77 87.77 0 0 1 128.52 232C79.83 232.28 40 191.51 40 142.83V64a8 8 0 0 1 8.09-8c1.25 0 2.48 0 3.72.09l-9.73-10.71a8 8 0 1 1 11.84-10.76Zm-77.6-61.57L69.18 75.19A71.3 71.3 0 0 0 56 72.44v39.94a88.17 88.17 0 0 1 72 51a88 88 0 0 1 8.32-14.33"></svg:path>`,
})
export class PhGrainsSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashLightIcon],svg[ph-grains-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l13.1 14.41A86 86 0 0 0 48 58a6 6 0 0 0-6 6v80a86.1 86.1 0 0 0 86 86a85.8 85.8 0 0 0 61.28-25.67L203.56 220a6 6 0 0 0 8.88-8.08Zm17.83 37.42l68.6 75.45A86 86 0 0 0 128 168.5a86.18 86.18 0 0 0-74-54.27v-44a73 73 0 0 1 16.27 3.19M122 217.76A74.1 74.1 0 0 1 54 144v-17.76A74.1 74.1 0 0 1 122 200Zm12 0V200a74.05 74.05 0 0 1 13.12-42l34.06 37.47A73.8 73.8 0 0 1 134 217.76M214 64v80a86.2 86.2 0 0 1-3.08 22.87a6 6 0 0 1-5.78 4.41a6.3 6.3 0 0 1-1.59-.21a6 6 0 0 1-4.2-7.38A74 74 0 0 0 202 144v-17.76a72.9 72.9 0 0 0-27.46 7.76a6 6 0 1 1-5.44-10.7a84.85 84.85 0 0 1 32.9-9.07v-44a74.29 74.29 0 0 0-54 30.39a6 6 0 1 1-9.72-7a86.2 86.2 0 0 1 26.1-23.7c-9.65-21.59-29.26-34.77-36.41-39a101.5 101.5 0 0 0-24.92 21a6 6 0 1 1-9.16-7.75a110.3 110.3 0 0 1 31.4-25.47a6 6 0 0 1 5.36 0c1.33.67 30.79 15.69 44.49 45.93A85.7 85.7 0 0 1 208 58a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhGrainsSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsSlashThinIcon],svg[ph-grains-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38l16.81 18.44A85 85 0 0 0 48 60a4 4 0 0 0-4 4v80a84.09 84.09 0 0 0 84 84a83.82 83.82 0 0 0 61.33-26.6L205 218.69a4 4 0 1 0 5.92-5.38Zm20.39 34.37l70.06 77.06A84.2 84.2 0 0 0 128 174.41a84.17 84.17 0 0 0-76-58.31v-48a76 76 0 0 1 19.39 3.58M124 219.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm8 0V200a76 76 0 0 1 14.94-45.22l37 40.68A75.86 75.86 0 0 1 132 219.9m80-75.9a84.3 84.3 0 0 1-3 22.34a4 4 0 0 1-3.86 2.94a4 4 0 0 1-1.06-.14a4 4 0 0 1-2.8-4.92A76 76 0 0 0 204 144v-19.9a74.9 74.9 0 0 0-30.37 8.1a4 4 0 1 1-3.62-7.14a82.9 82.9 0 0 1 34-9v-48a76.32 76.32 0 0 0-57.59 31.35a4 4 0 1 1-6.48-4.69a84.1 84.1 0 0 1 27-24C156.88 46.53 134.48 32.28 128 28.56a103.6 103.6 0 0 0-26.45 22a4 4 0 0 1-6.11-5.17a108.1 108.1 0 0 1 30.77-25a4 4 0 0 1 3.58 0c1.32.66 31.31 16 44.33 46.75A83.9 83.9 0 0 1 208 60a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhGrainsSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGrainsThinIcon],svg[ph-grains-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 60a83.5 83.5 0 0 0-33.88 7.16c-13-30.78-43-46.08-44.33-46.74a4 4 0 0 0-3.58 0c-1.32.66-31.3 16-44.33 46.74A83.5 83.5 0 0 0 48 60a4 4 0 0 0-4 4v80a84 84 0 0 0 168 0V64a4 4 0 0 0-4-4m-84 159.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm0-55.63a84.12 84.12 0 0 0-72-48.17v-48a76.11 76.11 0 0 1 72 75.9ZM89.05 70.75c10.07-24.22 32.46-38.47 39-42.19c6.49 3.72 28.88 18 38.95 42.19a84.43 84.43 0 0 0-39 47.66a84.43 84.43 0 0 0-38.95-47.66M204 144a76.11 76.11 0 0 1-72 75.9V200a76.11 76.11 0 0 1 72-75.9Zm0-27.9a84.12 84.12 0 0 0-72 48.17V144a76.11 76.11 0 0 1 72-75.9Z"></svg:path>`,
})
export class PhGrainsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphIcon],svg[ph-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.6 32.6 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.6 32.6 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32m0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16M80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16M56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m88 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGraphIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphBoldIcon],svg[ph-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 152a35.8 35.8 0 0 0-16.46 4l-21.39-16.64a35.5 35.5 0 0 0 1.85-10.71l10.35-3.44A36 36 0 1 0 164 100c0 1.11.06 2.21.16 3.3l-7.78 2.59A36 36 0 0 0 128 92c-1 0-1.88 0-2.81.12l-4.45-10A36 36 0 1 0 96 92c1 0 1.88 0 2.81-.12l4.45 10a35.91 35.91 0 0 0-8.59 39.7l-21.28 18.91a36 36 0 1 0 15.94 17.93l21.28-18.91a35.91 35.91 0 0 0 36.8-1.21L167 173.56A36 36 0 1 0 200 152m0-64a12 12 0 1 1-12 12a12 12 0 0 1 12-12M84 56a12 12 0 1 1 12 12a12 12 0 0 1-12-12M56 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60-76a12 12 0 1 1 12 12a12 12 0 0 1-12-12m84 72a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGraphBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphDuotoneIcon],svg[ph-graph-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.6 32.6 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.6 32.6 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32m0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16M80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16M56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m56-80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m88 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class PhGraphDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphFillIcon],svg[ph-graph-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 152a31.84 31.84 0 0 0-19.53 6.68l-23.11-18A31.65 31.65 0 0 0 160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 1 0 168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 0 0 128 96a32.6 32.6 0 0 0-5.27.44L115.89 81A32 32 0 1 0 96 88a32.6 32.6 0 0 0 5.27-.44l6.84 15.4a31.92 31.92 0 0 0-8.57 39.64l-25.71 22.84a32.06 32.06 0 1 0 10.63 12l25.71-22.84a31.91 31.91 0 0 0 37.36-1.24l23.11 18A31.65 31.65 0 0 0 168 184a32 32 0 1 0 32-32m0-64a16 16 0 1 1-16 16a16 16 0 0 1 16-16M80 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16M56 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144-8a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhGraphFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphLightIcon],svg[ph-graph-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 154a29.87 29.87 0 0 0-19.5 7.23l-25.62-19.93A29.8 29.8 0 0 0 158 128a31 31 0 0 0-.22-3.6L174 119a30 30 0 1 0-4-15a31 31 0 0 0 .22 3.6L154 113a29.91 29.91 0 0 0-32.42-14.31l-8.14-18.3a30 30 0 1 0-11 4.88l8.14 18.3a29.92 29.92 0 0 0-8.52 39.43L74 168a30.08 30.08 0 1 0 8 9l28-25a29.91 29.91 0 0 0 37.47-1.23l25.62 19.93A30 30 0 1 0 200 154m0-68a18 18 0 1 1-18 18a18 18 0 0 1 18-18M78 56a18 18 0 1 1 18 18a18 18 0 0 1-18-18M56 210a18 18 0 1 1 18-18a18 18 0 0 1-18 18m72-64a18 18 0 1 1 18-18a18 18 0 0 1-18 18m72 56a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhGraphLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphThinIcon],svg[ph-graph-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 156a27.87 27.87 0 0 0-19.4 7.84l-28.28-22A27.8 27.8 0 0 0 156 128a28 28 0 0 0-.45-5l19.45-6.45a28.07 28.07 0 1 0-2.53-7.58L153 115.45A28 28 0 0 0 128 100a27.7 27.7 0 0 0-7.6 1.06l-9.5-21.37A28 28 0 1 0 96 84a27.7 27.7 0 0 0 7.6-1.06l9.5 21.37a27.95 27.95 0 0 0-8.46 39.1L74 170.61a28 28 0 1 0 5.32 6l30.6-27.2a27.92 27.92 0 0 0 37.44-1.23l28.28 22A28 28 0 1 0 200 156m0-72a20 20 0 1 1-20 20a20 20 0 0 1 20-20M76 56a20 20 0 1 1 20 20a20 20 0 0 1-20-20M56 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72-64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m72 56a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGraphThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardIcon],svg[ph-graphics-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 128H24V64h208Zm-56-16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 176 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 176 96a24 24 0 0 1 24 24M80 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 80 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 80 96a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhGraphicsCardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardBoldIcon],svg[ph-graphics-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44H16A12 12 0 0 0 4 56v152a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12h84a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 128H28V68h200Zm-52-12a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-96 56a40 40 0 1 0-40-40a40 40 0 0 0 40 40m0-56a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhGraphicsCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardDuotoneIcon],svg[ph-graphics-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 56H16v128h216a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M80 152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 128H24V64h208Zm-56-16a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 176 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 176 96a24 24 0 0 1 24 24M80 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40m-24-40a23.74 23.74 0 0 1 2.35-10.34l32 32A23.74 23.74 0 0 1 80 144a24 24 0 0 1-24-24m48 0a23.74 23.74 0 0 1-2.35 10.34l-32-32A23.74 23.74 0 0 1 80 96a24 24 0 0 1 24 24"></svg:path></svg:g>`,
})
export class PhGraphicsCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardFillIcon],svg[ph-graphics-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-20 72a35.8 35.8 0 0 1-5.53 19.16l-49.63-49.63A36 36 0 0 1 212 120m-96 0a35.8 35.8 0 0 1-5.53 19.16L60.84 89.53A36 36 0 0 1 116 120m-36 36a36 36 0 0 1-30.47-55.16l49.63 49.63A35.8 35.8 0 0 1 80 156m60-36a35.8 35.8 0 0 1 5.53-19.16l49.63 49.63A36 36 0 0 1 140 120"></svg:path>`,
})
export class PhGraphicsCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardLightIcon],svg[ph-graphics-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50H16a6 6 0 0 0-6 6v152a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h114a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H22V62h210a2 2 0 0 1 2 2Zm-58-94a38 38 0 1 0 38 38a38 38 0 0 0-38-38m26 38a25.8 25.8 0 0 1-3.88 13.64l-35.76-35.76A26 26 0 0 1 202 120m-52 0a25.8 25.8 0 0 1 3.88-13.64l35.76 35.76A26 26 0 0 1 150 120M80 82a38 38 0 1 0 38 38a38 38 0 0 0-38-38m26 38a25.8 25.8 0 0 1-3.88 13.64L66.36 97.88A26 26 0 0 1 106 120m-52 0a25.8 25.8 0 0 1 3.88-13.64l35.76 35.76A26 26 0 0 1 54 120"></svg:path>`,
})
export class PhGraphicsCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGraphicsCardThinIcon],svg[ph-graphics-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H16a4 4 0 0 0-4 4v152a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h116a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H20V60h212a4 4 0 0 1 4 4Zm-60-92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-28 36a27.9 27.9 0 0 1 5.58-16.76l39.18 39.18A28 28 0 0 1 148 120m50.42 16.76l-39.18-39.18a28 28 0 0 1 39.18 39.18M80 84a36 36 0 1 0 36 36a36 36 0 0 0-36-36m-28 36a27.9 27.9 0 0 1 5.58-16.76l39.18 39.18A28 28 0 0 1 52 120m50.42 16.76L63.24 97.58a28 28 0 0 1 39.18 39.18"></svg:path>`,
})
export class PhGraphicsCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanIcon],svg[ph-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128"></svg:path>`,
})
export class PhGreaterThanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanBoldIcon],svg[ph-greater-than-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-6.86 10.84l-152 72a12 12 0 0 1-10.27-21.69L188 128L58.87 66.85a12 12 0 0 1 10.27-21.69l152 72A12 12 0 0 1 228 128"></svg:path>`,
})
export class PhGreaterThanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanDuotoneIcon],svg[ph-greater-than-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128L64 200V56Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128"></svg:path></svg:g>`,
})
export class PhGreaterThanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanFillIcon],svg[ph-greater-than-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.65 103.26l-104 48a8 8 0 0 1-6.7-14.52L164.91 128L76.65 87.26a8 8 0 1 1 6.7-14.52l104 48a8 8 0 0 1 0 14.52"></svg:path>`,
})
export class PhGreaterThanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanLightIcon],svg[ph-greater-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-3.43 5.42l-152 72a6 6 0 1 1-5.14-10.84L202 128L61.43 61.42a6 6 0 1 1 5.14-10.84l152 72A6 6 0 0 1 222 128"></svg:path>`,
})
export class PhGreaterThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualIcon],svg[ph-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.24 152.49L184.86 104L53.24 55.51a8 8 0 1 1 5.53-15l152 56a8 8 0 0 1 0 15l-152 56A8.1 8.1 0 0 1 56 168a8 8 0 0 1-2.76-15.51M208 192H56a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualBoldIcon],svg[ph-greater-than-or-equal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.85 148.74L173.29 104L51.85 59.26a12 12 0 0 1 8.3-22.52l152 56a12 12 0 0 1 0 22.52l-152 56a12 12 0 1 1-8.3-22.52M208 188H56a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhGreaterThanOrEqualBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualDuotoneIcon],svg[ph-greater-than-or-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104L56 160V48Z" opacity=".2"></svg:path><svg:path d="M53.24 152.49L184.86 104L53.24 55.51a8 8 0 1 1 5.53-15l152 56a8 8 0 0 1 0 15l-152 56A8.1 8.1 0 0 1 56 168a8 8 0 0 1-2.76-15.51M208 192H56a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhGreaterThanOrEqualDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualFillIcon],svg[ph-greater-than-or-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 152H80a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-64.35l-104 32a8 8 0 1 1-4.7-15.3L156.8 112L77.65 87.65a8 8 0 0 1 4.7-15.3l104 32a8 8 0 0 1 0 15.3"></svg:path>`,
})
export class PhGreaterThanOrEqualFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualLightIcon],svg[ph-greater-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.93 154.37L190.64 104L53.93 53.63a6 6 0 1 1 4.15-11.26l152 56a6 6 0 0 1 0 11.26l-152 56A6.1 6.1 0 0 1 56 166a6 6 0 0 1-2.07-11.63M208 194H56a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhGreaterThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualThinIcon],svg[ph-greater-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.62 156.25L196.43 104L54.62 51.75a4 4 0 0 1 2.76-7.5l152 56a4 4 0 0 1 0 7.5l-152 56A3.9 3.9 0 0 1 56 164a4 4 0 0 1-1.38-7.75M208 196H56a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhGreaterThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanThinIcon],svg[ph-greater-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-2.29 3.62l-152 72A3.85 3.85 0 0 1 64 204a4 4 0 0 1-1.71-7.62L206.66 128L62.29 59.62a4 4 0 0 1 3.42-7.23l152 72A4 4 0 0 1 220 128"></svg:path>`,
})
export class PhGreaterThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourIcon],svg[ph-grid-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-64V56h64Zm-80-64v64H56V56Zm-64 80h64v64H56Zm144 64h-64v-64h64z"></svg:path>`,
})
export class PhGridFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourBoldIcon],svg[ph-grid-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-80-56v56H60V60Zm-56 80h56v56H60Zm80 56v-56h56v56Z"></svg:path>`,
})
export class PhGridFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourDuotoneIcon],svg[ph-grid-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 56v144a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 80h-64V56h64Zm-80-64v64H56V56Zm-64 80h64v64H56Zm144 64h-64v-64h64z"></svg:path></svg:g>`,
})
export class PhGridFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourFillIcon],svg[ph-grid-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56v60a4 4 0 0 1-4 4h-76V44a4 4 0 0 1 4-4h60a16 16 0 0 1 16 16M116 40H56a16 16 0 0 0-16 16v60a4 4 0 0 0 4 4h76V44a4 4 0 0 0-4-4m96 96h-76v76a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16v-60a4 4 0 0 0-4-4m-172 4v60a16 16 0 0 0 16 16h60a4 4 0 0 0 4-4v-76H44a4 4 0 0 0-4 4"></svg:path>`,
})
export class PhGridFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourLightIcon],svg[ph-grid-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-68V54h66a2 2 0 0 1 2 2M56 54h66v68H54V56a2 2 0 0 1 2-2m-2 146v-66h68v68H56a2 2 0 0 1-2-2m146 2h-66v-68h68v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhGridFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridFourThinIcon],svg[ph-grid-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-72V52h68a4 4 0 0 1 4 4M56 52h68v72H52V56a4 4 0 0 1 4-4m-4 148v-68h72v72H56a4 4 0 0 1-4-4m148 4h-68v-72h72v68a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhGridFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineIcon],svg[ph-grid-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-112 96v-32h48v32Zm48 16v32h-48v-32ZM40 112h48v32H40Zm64-16V64h48v32Zm64 16h48v32h-48Zm48-16h-48V64h48ZM88 64v32H40V64Zm-48 96h48v32H40Zm176 32h-48v-32h48z"></svg:path>`,
})
export class PhGridNineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineBoldIcon],svg[ph-grid-nine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-108 96v-24h40v24Zm40 24v24h-40v-24ZM44 116h40v24H44Zm64-24V68h40v24Zm64 24h40v24h-40Zm40-24h-40V68h40ZM84 68v24H44V68Zm-40 96h40v24H44Zm128 24v-24h40v24Z"></svg:path>`,
})
export class PhGridNineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineDuotoneIcon],svg[ph-grid-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v128a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-112 96v-32h48v32Zm48 16v32h-48v-32ZM40 112h48v32H40Zm64-16V64h48v32Zm64 16h48v32h-48Zm48-16h-48V64h48ZM88 64v32H40V64Zm-48 96h48v32H40Zm176 32h-48v-32h48z"></svg:path></svg:g>`,
})
export class PhGridNineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineFillIcon],svg[ph-grid-nine-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 52v40H28a4 4 0 0 1-4-4V64a16 16 0 0 1 16-16h40a4 4 0 0 1 4 4m16 152a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-40h-56Zm-76-36v24a16 16 0 0 0 16 16h40a4 4 0 0 0 4-4v-40H28a4 4 0 0 0-4 4m0-56v32a4 4 0 0 0 4 4h56v-40H28a4 4 0 0 0-4 4m128-64h-48a4 4 0 0 0-4 4v40h56V52a4 4 0 0 0-4-4m76 60h-56v40h56a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4m-128 40h56v-40h-56ZM216 48h-40a4 4 0 0 0-4 4v40h56a4 4 0 0 0 4-4V64a16 16 0 0 0-16-16m12 116h-56v40a4 4 0 0 0 4 4h40a16 16 0 0 0 16-16v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhGridNineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineLightIcon],svg[ph-grid-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m-114 96v-36h52v36Zm52 12v36h-52v-36ZM38 110h52v36H38Zm64-12V62h52v36Zm64 12h52v36h-52Zm52-46v34h-52V62h50a2 2 0 0 1 2 2M40 62h50v36H38V64a2 2 0 0 1 2-2m-2 130v-34h52v36H40a2 2 0 0 1-2-2m178 2h-50v-36h52v34a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhGridNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGridNineThinIcon],svg[ph-grid-nine-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-116 96v-40h56v40Zm56 8v40h-56v-40ZM36 108h56v40H36Zm64-8V60h56v40Zm64 8h56v40h-56Zm56-44v36h-56V60h52a4 4 0 0 1 4 4M40 60h52v40H36V64a4 4 0 0 1 4-4m-4 132v-36h56v40H40a4 4 0 0 1-4-4m180 4h-52v-40h56v36a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhGridNineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarIcon],svg[ph-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.66 46.34l-40-40a8 8 0 0 0-11.31 11.32l2.34 2.34l-60.17 60.16c-22.79-11.86-48.31-10.87-63.77 4.58a42.3 42.3 0 0 0-9.39 14.37a8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07C11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71 71 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16c9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55a42.1 42.1 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77L236 55.31l2.34 2.34a8 8 0 1 0 11.32-11.31M160 167.93a26.1 26.1 0 0 1-8.95 5.83a24.24 24.24 0 0 0-15 21.89c-.36 10.46-4 19.41-10.43 25.88c-8.44 8.43-21 11.95-35.36 9.89c-15.26-2.17-30.53-10.23-42.99-22.69S26.75 181 24.58 165.81c-2-14.37 1.46-26.92 9.89-35.36C40.94 124 49.89 120.37 60.35 120a24.22 24.22 0 0 0 21.89-15a26.1 26.1 0 0 1 5.83-9c5.49-5.49 13-8.13 21.38-8.13a49.4 49.4 0 0 1 19.13 4.19l-20.08 20.13a32 32 0 1 0 35.31 35.31l20.08-20.08c6.52 15.29 5.58 30.99-3.89 40.51m-10.4-61.48a73 73 0 0 1 5.93 6.75l-15.42 15.42a32.2 32.2 0 0 0-12.68-12.68l15.42-15.43a73 73 0 0 1 6.7 5.94ZM112 128a16 16 0 0 1 16 16a16 16 0 1 1-16-16m48.85-32.85a87 87 0 0 0-6.68-6L176 67.31L188.69 80l-21.83 21.82a87 87 0 0 0-6-6.68ZM200 68.68L187.32 56L212 31.31L224.69 44ZM93.66 194.33a8 8 0 0 1-11.31 11.32l-32-32a8 8 0 0 1 11.32-11.31Z"></svg:path>`,
})
export class PhGuitarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarBoldIcon],svg[ph-guitar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92.49 187.5a12 12 0 1 1-17 17l-24-24a12 12 0 0 1 17-17ZM112 120a24 24 0 1 0 24 24a24 24 0 0 0-24-24m140.49-59.52a12 12 0 0 1-14.12 2.12L182 119a73 73 0 0 1 5.36 18.68c2.51 17.58-2.2 33.35-13.27 44.42a46.1 46.1 0 0 1-15.73 10.29a4.32 4.32 0 0 0-2.39 4c-.53 15.61-6.16 29.22-16.28 39.34C129 246.37 114.5 252 98.13 252a77 77 0 0 1-10.77-.78c-19.47-2.78-38.73-12.85-54.23-28.35S7.56 188.11 4.78 168.64c-3-20.75 2.56-39.34 15.55-52.33c10.12-10.12 23.73-15.75 39.34-16.31a4.32 4.32 0 0 0 4-2.39a46.1 46.1 0 0 1 10.26-15.7C85 70.84 100.77 66.13 118.35 68.64A73 73 0 0 1 137 74l56.4-56.37a12 12 0 0 1 19.09-14.12l40 40a12 12 0 0 1 0 16.97M221 46l-11-11l-19 19l11 11Zm-74.31 63.28C135.53 98.09 121.39 92 109.34 92c-7.29 0-13.81 2.21-18.44 6.85a22.2 22.2 0 0 0-4.9 7.62A28.23 28.23 0 0 1 60.48 124c-6.57.22-15.93 2-23.18 9.26c-7.52 7.52-10.63 18.87-8.76 32c2.05 14.37 9.71 28.81 21.56 40.66s26.29 19.51 40.66 21.56c13.09 1.87 24.44-1.24 32-8.76c7.25-7.25 9-16.61 9.26-23.18A28.23 28.23 0 0 1 149.53 170a22.2 22.2 0 0 0 7.59-4.94c12.31-12.27 7.55-37.83-10.4-55.78ZM169 98.07L185 82l-11-11l-16.07 16c2 1.67 3.9 3.42 5.76 5.27s3.6 3.82 5.31 5.8"></svg:path>`,
})
export class PhGuitarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarDuotoneIcon],svg[ph-guitar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M155.2 100.8c-23-23-55.57-27.63-72.8-10.4a34.2 34.2 0 0 0-7.61 11.66a16.23 16.23 0 0 1-14.72 10C48 112.44 37 116.61 28.8 124.8C7.6 146 13.33 186.12 41.6 214.4s68.39 34 89.6 12.8c8.19-8.2 12.36-19.2 12.8-31.27a16.23 16.23 0 0 1 10-14.72a34.2 34.2 0 0 0 11.66-7.61c17.17-17.23 12.51-49.82-10.46-72.8M112 168a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="m249.66 46.34l-40-40a8 8 0 0 0-11.31 11.32l2.34 2.34l-60.17 60.16c-22.79-11.86-48.31-10.87-63.77 4.58a42.3 42.3 0 0 0-9.39 14.37a8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07C11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71 71 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16c9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55a42.1 42.1 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77L236 55.31l2.34 2.34a8 8 0 1 0 11.32-11.31M160 167.93a26.1 26.1 0 0 1-8.95 5.83a24.24 24.24 0 0 0-15 21.89c-.36 10.46-4 19.41-10.43 25.88c-8.44 8.43-21 11.95-35.36 9.89c-15.26-2.17-30.53-10.23-42.99-22.69S26.75 181 24.58 165.81c-2-14.37 1.46-26.92 9.89-35.36C40.94 124 49.89 120.37 60.35 120a24.22 24.22 0 0 0 21.89-15a26.1 26.1 0 0 1 5.83-9c5.49-5.49 13-8.13 21.38-8.13a49.4 49.4 0 0 1 19.13 4.19l-20.08 20.13a32 32 0 1 0 35.31 35.31l20.08-20.08c6.52 15.29 5.58 30.99-3.89 40.51m-10.4-61.48a73 73 0 0 1 5.93 6.75l-15.42 15.42a32.2 32.2 0 0 0-12.68-12.68l15.42-15.43a73 73 0 0 1 6.7 5.94ZM112 128a16 16 0 0 1 16 16a16 16 0 1 1-16-16m48.85-32.85a87 87 0 0 0-6.68-6L176 67.31L188.69 80l-21.83 21.82a87 87 0 0 0-6-6.68ZM200 68.68L187.32 56L212 31.31L224.69 44ZM93.66 194.33a8 8 0 0 1-11.31 11.32l-32-32a8 8 0 0 1 11.32-11.31Z"></svg:path></svg:g>`,
})
export class PhGuitarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarFillIcon],svg[ph-guitar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.66 46.34l-40-40a8 8 0 0 0-11.32 11.32l2.35 2.34l-60.17 60.16c-22.79-11.86-48.31-10.87-63.77 4.58a42.3 42.3 0 0 0-9.39 14.37a8.24 8.24 0 0 1-7.55 4.89c-14.59.49-27.26 5.72-36.65 15.11C11.08 131.22 6 148.6 8.74 168.07C11.4 186.7 21.07 205.15 36 220s33.34 24.56 52 27.22a71 71 0 0 0 10.1.78c15.32 0 28.83-5.23 38.76-15.16c9.39-9.39 14.62-22.06 15.11-36.65a8.24 8.24 0 0 1 4.92-7.55a42.2 42.2 0 0 0 14.37-9.39c15.45-15.46 16.44-41 4.58-63.77L236 55.31l2.34 2.35a8 8 0 0 0 11.32-11.32m-156 159.31a8 8 0 0 1-11.31 0l-32-32a8 8 0 0 1 11.32-11.31l32 32a8 8 0 0 1-.01 11.31m42.14-45.86a28 28 0 1 1 0-39.59a28 28 0 0 1 0 39.59m31.06-58a87 87 0 0 0-6-6.68a85 85 0 0 0-6.69-6L176 67.31L188.69 80ZM200 68.68L187.32 56L212 31.31L224.69 44Z"></svg:path>`,
})
export class PhGuitarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarLightIcon],svg[ph-guitar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248.24 47.76l-40-40a6 6 0 0 0-8.48 8.48l3.76 3.76l-62.62 62.62C118.54 70.42 93.29 71 78.17 86.16a39.9 39.9 0 0 0-9 13.69a10.24 10.24 0 0 1-9.3 6.15c-14.06.48-26.27 5.5-35.3 14.53C13 132.18 8 149 10.72 167.79C13.32 186 22.78 204 37.37 218.63S70 242.68 88.21 245.28a70 70 0 0 0 9.88.72c14.79 0 27.81-5 37.35-14.57c9-9 14.05-21.23 14.53-35.3a10.24 10.24 0 0 1 6.18-9.35a39.9 39.9 0 0 0 13.69-8.95c15.12-15.12 15.74-40.37 3.54-62.73L236 52.48l3.76 3.76a6 6 0 0 0 8.48-8.48m-86.88 121.59a28.1 28.1 0 0 1-9.63 6.27a22.22 22.22 0 0 0-13.73 20.1c-.37 11-4.18 20.39-11 27.22c-8.89 8.89-22 12.61-37 10.46c-15.65-2.23-31.29-10.49-44.06-23.25s-21-28.41-23.25-44.06c-2.15-15 1.57-28.16 10.46-37.05c6.83-6.84 16.25-10.65 27.22-11a22.21 22.21 0 0 0 20.1-13.76a28.1 28.1 0 0 1 6.27-9.62c5.78-5.89 13.83-8.66 22.7-8.66A52.74 52.74 0 0 1 132 91.49l-22.6 22.63a30 30 0 1 0 32.48 32.48l22.64-22.6c8.11 16.82 7.48 34.68-3.16 45.35M151 105a73 73 0 0 1 7.17 8.34L139.5 132a30.18 30.18 0 0 0-15.5-15.5l18.62-18.62A72 72 0 0 1 151 105m-39 21a18 18 0 0 1 18 18a18 18 0 1 1-18-18m47.44-29.44a83 83 0 0 0-8.28-7.23L176 64.48L191.52 80l-24.84 24.83a84.5 84.5 0 0 0-7.23-8.28Zm40.55-25L184.49 56L212 28.48L227.52 44ZM92.25 195.75a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 8.48-8.48Z"></svg:path>`,
})
export class PhGuitarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phGuitarThinIcon],svg[ph-guitar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.83 49.17l-40-40a4 4 0 0 0-5.66 5.66l5.17 5.17l-65.09 65.1c-21.91-12.54-46.89-12.31-61.67 2.47a38.1 38.1 0 0 0-8.5 13A12.24 12.24 0 0 1 59.94 108c-13.55.46-25.29 5.28-34 13.94c-11.12 11.2-15.84 27.37-13.24 45.57c2.54 17.77 11.8 35.42 26.08 49.71s31.94 23.54 49.71 26.08a67.4 67.4 0 0 0 9.59.7c14.25 0 26.79-4.82 36-14c8.66-8.67 13.48-20.41 13.94-34a12.24 12.24 0 0 1 7.45-11.14a38.1 38.1 0 0 0 13-8.5c14.78-14.78 15-39.76 2.47-61.67L236 49.66l5.17 5.17a4 4 0 1 0 5.66-5.66m-84.06 121.59a29.9 29.9 0 0 1-10.3 6.72A20.25 20.25 0 0 0 140 195.79c-.38 11.49-4.39 21.37-11.6 28.57c-9.34 9.34-23.1 13.26-38.75 11c-16.07-2.29-32.11-10.75-45.18-23.82s-21.53-29.11-23.82-45.18c-2.24-15.65 1.68-29.41 11-38.75c7.2-7.21 17.08-11.22 28.57-11.6a20.25 20.25 0 0 0 18.31-12.5a29.9 29.9 0 0 1 6.72-10.3c11.8-11.8 31.84-12 50.14-2.27l-25.09 25.09a28 28 0 1 0 29.7 29.68l25-25.09c9.81 18.3 9.57 38.38-2.23 50.14M112 124a20 20 0 0 1 20 20a20 20 0 1 1-20-20m26.71 11.63a28.06 28.06 0 0 0-18.34-18.34l22-22a74.5 74.5 0 0 1 18.35 18.35ZM158 98a81 81 0 0 0-9.9-8.44L176 61.65L194.34 80l-27.87 27.87A81 81 0 0 0 158 98m42-23.63L181.66 56L212 25.66L230.34 44ZM90.84 197.16a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhGuitarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerIcon],svg[ph-hair-dryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m9.42 102.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16a40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M32 62.78L168.64 40a48 48 0 0 1 0 96L32 113.23Zm134.68 89.11a8.4 8.4 0 0 0 1.32.11a63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"></svg:path>`,
})
export class PhHairDryerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerBoldIcon],svg[ph-hair-dryer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 8a8 8 0 1 1 8-8a8 8 0 0 1-8 8m13.06 112.28l31.25-68.76A68 68 0 0 0 168 20a12 12 0 0 0-2 .16L28.71 43.05A19.94 19.94 0 0 0 12 62.78v50.44A19.94 19.94 0 0 0 28.71 133L124 148.83V200a20 20 0 0 0 16.69 19.7A44.06 44.06 0 0 0 184 256h16a12 12 0 0 0 0-24h-16a20 20 0 0 1-18.41-12.19a20.09 20.09 0 0 0 15.47-11.53M36 66.17L168.93 44a44 44 0 0 1 0 88L36 109.83Zm130 89.67a12 12 0 0 0 2 .16a68 68 0 0 0 10.85-.88L160.27 196H148v-43.17Z"></svg:path>`,
})
export class PhHairDryerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerDuotoneIcon],svg[ph-hair-dryer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 32L30.68 54.89A8 8 0 0 0 24 62.78v50.44a8 8 0 0 0 6.68 7.89L168 144a56 56 0 0 0 0-112m0 80a24 24 0 1 1 24-24a24 24 0 0 1-24 24" opacity=".2"></svg:path><svg:path d="M200 88a32 32 0 1 0-32 32a32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m9.42 102.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16a40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M32 62.78L168.64 40a48 48 0 0 1 0 96L32 113.23Zm134.68 89.11a8.4 8.4 0 0 0 1.32.11a63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"></svg:path></svg:g>`,
})
export class PhHairDryerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerFillIcon],svg[ph-hair-dryer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.42 206.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16a40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M192 88a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-25.32 63.89a8.4 8.4 0 0 0 1.32.11a63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z"></svg:path>`,
})
export class PhHairDryerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerLightIcon],svg[ph-hair-dryer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 88a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-30 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18m-5.15 108a14 14 0 0 0 12.74-8.21l31.8-69.94A62 62 0 0 0 168 26a6.6 6.6 0 0 0-1 .08L29.7 49A14 14 0 0 0 18 62.78v50.44A14 14 0 0 0 29.7 127L130 143.75V200a14 14 0 0 0 14 14h2v2a38 38 0 0 0 38 38h16a6 6 0 0 0 0-12h-16a26 26 0 0 1-26-26v-2ZM30 113.22V62.78a2 2 0 0 1 1.67-2L168.48 38a50 50 0 0 1 0 100L31.67 115.2a2 2 0 0 1-1.67-1.98M142 200v-54.25l25 4.17a6.6 6.6 0 0 0 1 .08a61.8 61.8 0 0 0 21.53-3.86l-24.86 54.69a2 2 0 0 1-1.82 1.17H144a2 2 0 0 1-2-2"></svg:path>`,
})
export class PhHairDryerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHairDryerThinIcon],svg[ph-hair-dryer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 88a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-28 20a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-5.15 104a12 12 0 0 0 10.92-7l32-70.39A60 60 0 0 0 168 28a5 5 0 0 0-.66.05L30 50.94a12 12 0 0 0-10 11.84v50.44a12 12 0 0 0 10 11.84l102 17V200a12 12 0 0 0 12 12h4v4a36 36 0 0 0 36 36h16a4 4 0 0 0 0-8h-16a28 28 0 0 1-28-28v-4ZM28 113.22V62.78a4 4 0 0 1 3.34-4L168.33 36a52 52 0 0 1 0 104l-137-22.83a4 4 0 0 1-3.33-3.95M140 200v-56.61l27.34 4.61a5 5 0 0 0 .66.05a59.6 59.6 0 0 0 25.46-5.69l-27 59.34a4 4 0 0 1-3.64 2.35H144a4 4 0 0 1-4-4.05"></svg:path>`,
})
export class PhHairDryerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerIcon],svg[ph-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104M128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40m101.26 112.48l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81l37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhHamburgerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerBoldIcon],svg[ph-hamburger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.9 152.72l-39.7 14.44l-35.74-14.3a12 12 0 0 0-8.92 0L108 167.08l-35.54-14.22a12 12 0 0 0-8.56-.14l-44 16a12 12 0 0 0 8.2 22.56l8.12-2.95A44.06 44.06 0 0 0 80 228h96a44.05 44.05 0 0 0 44-44v-2.87l16.1-5.85a12 12 0 0 0-8.2-22.56M176 204H80a20 20 0 0 1-20-20v-4.32l7.8-2.84l35.74 14.3a12 12 0 0 0 8.92 0L148 176.92l35.54 14.22a12 12 0 0 0 8.56.14l2.89-1.06A20 20 0 0 1 176 204M12 128a12 12 0 0 1 12-12h208a12 12 0 0 1 0 24H24a12 12 0 0 1-12-12m36.2-24h159.6a20.36 20.36 0 0 0 16.38-8.29a19.59 19.59 0 0 0 2.88-17.65C216.12 43.88 175.39 20 128 20S39.89 43.87 28.94 78.05a19.56 19.56 0 0 0 2.88 17.65A20.32 20.32 0 0 0 48.2 104M128 44c33.7 0 63.61 14.85 74 36H54c10.4-21.15 40.31-36 74-36"></svg:path>`,
})
export class PhHamburgerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerDuotoneIcon],svg[ph-hamburger-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m188 176l20-7.27V184a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32v-16.73L68 160l40 16l40-16Zm27.82-89.72C209.32 55.55 172.48 32 128 32S46.68 55.55 40.18 86.28A8 8 0 0 0 48.07 96h159.86a8 8 0 0 0 7.89-9.72" opacity=".2"></svg:path><svg:path d="M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104M128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40m101.26 112.48l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81l37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhHamburgerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerFillIcon],svg[ph-hamburger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.58 98.06a16 16 0 0 1-3.23-13.44C39.78 49.5 80 24 128 24s88.22 25.5 95.65 60.62A16 16 0 0 1 207.93 104H48.07a16 16 0 0 1-12.49-5.94m193.68 54.42l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM24 136h208a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhHamburgerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerLightIcon],svg[ph-hamburger-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.07 102h159.86a14 14 0 0 0 13.76-17c-7.24-34.17-46.64-59-93.69-59S41.55 50.83 34.31 85a14 14 0 0 0 13.76 17m-2-14.48C52 59.29 87.25 38 128 38s76 21.29 82 49.52a2 2 0 0 1-2 2.48H48.07a2 2 0 0 1-2-2.48M230 154.36l-41.9 15.22l-37.87-15.15a6 6 0 0 0-4.46 0L108 169.54l-37.77-15.11a6 6 0 0 0-4.28-.07l-44 16A6 6 0 0 0 24 182a6.1 6.1 0 0 0 2.05-.36l16-5.8V184a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38v-11.07l20.05-7.29a6 6 0 0 0-4.1-11.28M202 184a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26v-12.52l13.9-5.06l37.87 15.15a6 6 0 0 0 4.46 0L148 166.46l37.77 15.11a6 6 0 0 0 4.28.07l11.95-4.35ZM18 128a6 6 0 0 1 6-6h208a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhHamburgerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHamburgerThinIcon],svg[ph-hamburger-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.07 100h159.86a12 12 0 0 0 11.8-14.55c-3.39-16-14.56-30.68-31.46-41.23S150.11 28 128 28s-43.51 5.76-60.27 16.22s-28.07 25.19-31.46 41.23A12 12 0 0 0 48.07 100m-4-12.89C50.26 58 86.33 36 128 36s77.74 22 83.91 51.11a4 4 0 0 1-.82 3.39a4 4 0 0 1-3.16 1.5H48.07a4 4 0 0 1-3.16-1.5a4 4 0 0 1-.82-3.39Zm186.54 69.13l-42.56 15.48l-38.58-15.43a4 4 0 0 0-3 0L108 171.69l-38.51-15.4a4 4 0 0 0-2.86 0l-44 16A4 4 0 0 0 24 180a4.1 4.1 0 0 0 1.37-.24L44 173v11a36 36 0 0 0 36 36h96a36 36 0 0 0 36-36v-12.47l21.37-7.77a4 4 0 0 0-2.74-7.52ZM204 184a28 28 0 0 1-28 28H80a28 28 0 0 1-28-28v-13.93l15.93-5.79l38.58 15.43a4 4 0 0 0 3 0l38.49-15.4l38.51 15.4a4 4 0 0 0 2.86 0l14.63-5.27ZM20 128a4 4 0 0 1 4-4h208a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhHamburgerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerIcon],svg[ph-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.34 112l-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a80 80 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96l14.34 14.34L200 163.3a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.61M60.68 216L40 195.31l68-68L128.68 148Zm101.66-101.68L140 136.67L119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0m49 37.66l-12-12L228 111.25l12 12Z"></svg:path>`,
})
export class PhHammerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerBoldIcon],svg[ph-hammer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.18 105.17l-63.47-63.92a100.11 100.11 0 0 0-141.43 0l-.13.14l-13.78 14.22a12 12 0 1 0 17.24 16.7l13.71-14.15a75.7 75.7 0 0 1 15.17-11.73L119 88l-93.15 93.16a20 20 0 0 0 0 28.29l20.69 20.69a20 20 0 0 0 28.28 0L168 137l1.51 1.51l23.65 23.66a20 20 0 0 0 28.29 0l28.69-28.7a20 20 0 0 0 .04-28.3M60.68 210.34l-15-15L108 133l15 15ZM140 131l-15-15l19.51-19.51a12 12 0 0 0 0-17l-42.27-42.25a75.94 75.94 0 0 1 67.47 20.95l31.44 31.67L178 113l-1.51-1.51a12 12 0 0 0-17 0Zm67.32 11.31L195 130l23.09-23.09l12.3 12.39Z"></svg:path>`,
})
export class PhHammerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerDuotoneIcon],svg[ph-hammer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M245.66 129L217 157.66a8 8 0 0 1-11.3 0L168.1 120l-28 28l-32-32l28-28L80 31.78a87.81 87.81 0 0 1 98.31 18l67.35 67.89a8 8 0 0 1 0 11.33" opacity=".2"></svg:path><svg:path d="m251.34 112l-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a80 80 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96l14.34 14.34L200 163.3a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.61M60.68 216L40 195.31l68-68L128.68 148Zm101.66-101.68L140 136.67L119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0m49 37.66l-12-12L228 111.25l12 12Z"></svg:path></svg:g>`,
})
export class PhHammerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerFillIcon],svg[ph-hammer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m251.34 112l-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a80 80 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96l32 32a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.63m-89 2.33L140 136.67L119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0Zm49 37.66l-12-12L228 111.25l12 12Z"></svg:path>`,
})
export class PhHammerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerLightIcon],svg[ph-hammer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.92 113.4l-67.45-67.91a94.12 94.12 0 0 0-133 .06L35.68 59.78a6 6 0 0 0 8.63 8.35L58 54a82 82 0 0 1 20.55-15l49 49l-97.46 97.4a14 14 0 0 0 0 19.81l20.69 20.69a14 14 0 0 0 19.8 0L168 128.46l33.42 33.42a14 14 0 0 0 19.8 0l28.68-28.69a14 14 0 0 0 .02-19.79M62.1 217.41a2 2 0 0 1-2.83 0l-20.69-20.69a2 2 0 0 1 0-2.83L108 124.46L131.51 148Zm101.66-101.68L140 139.49L116.48 116l23.76-23.76a6 6 0 0 0 0-8.49L90.54 34A82.07 82.07 0 0 1 174 54l45.62 45.93L188 131.49l-15.76-15.76a6 6 0 0 0-8.48 0m77.66 9l-28.69 28.7a2 2 0 0 1-2.83 0L196.49 140l31.56-31.57l13.37 13.46a2 2 0 0 1 0 2.81Z"></svg:path>`,
})
export class PhHammerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHammerThinIcon],svg[ph-hammer-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248.5 114.81L181.05 46.9A92.1 92.1 0 0 0 50.9 47L37.12 61.18a4 4 0 1 0 5.75 5.56L56.6 52.56a83.8 83.8 0 0 1 22.34-16L130.34 88l-98.83 98.82a12 12 0 0 0 0 17l20.69 20.66a12 12 0 0 0 17 0l98.8-98.85l17.17 17.18l17.66 17.66a12 12 0 0 0 17 0l28.69-28.69a12 12 0 0 0-.02-16.97m-185 104a4 4 0 0 1-5.66 0l-20.67-20.67a4 4 0 0 1 0-5.66L108 121.63L134.34 148Zm101.67-101.66L140 142.32L113.65 116l25.18-25.2a4 4 0 0 0 0-5.66l-52-52a84.11 84.11 0 0 1 88.52 19.38l47 47.35L188 134.32l-17.17-17.17a4 4 0 0 0-5.66 0m77.66 9l-28.68 28.69a4 4 0 0 1-5.66 0L193.66 140l34.39-34.4l14.78 14.88a4 4 0 0 1 0 5.64Z"></svg:path>`,
})
export class PhHammerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandIcon],svg[ph-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 48a27.75 27.75 0 0 0-12 2.71V44a28 28 0 0 0-54.65-8.6A28 28 0 0 0 80 60v64l-3.82-6.13a28 28 0 0 0-48.6 27.82c16 33.77 28.93 57.72 43.72 72.69C86.24 233.54 103.2 240 128 240a88.1 88.1 0 0 0 88-88V76a28 28 0 0 0-28-28m12 104a72.08 72.08 0 0 1-72 72c-20.38 0-33.51-4.88-45.33-16.85C69.44 193.74 57.26 171 41.9 138.58a6 6 0 0 0-.3-.58a12 12 0 0 1 20.79-12a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v76a8 8 0 0 0 16 0V76a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhHandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownIcon],svg[ph-hand-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.4 24.4 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Zm-65.09-90.55a8 8 0 0 1 11.32-11.32L184 84.69V24a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhHandArrowDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownBoldIcon],svg[ph-hand-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.76 137.88a28.39 28.39 0 0 0-24.63-4.88L172 141.26V140a32 32 0 0 0-32-32H89.94a35.76 35.76 0 0 0-25.45 10.54L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a12 12 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32M24 164h12v32H24Zm193.68.61l-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.2 12.2 0 0 0 2.69-.3l67-15.41l.47-.12a4.61 4.61 0 0 1 5.82 4.44a4.58 4.58 0 0 1-2.3 4m-66.17-84.12a12 12 0 0 1 17-17L180 75V24a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0Z"></svg:path>`,
})
export class PhHandArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownDuotoneIcon],svg[ph-hand-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 152v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.4 24.4 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Zm-65.09-90.55a8 8 0 0 1 11.32-11.32L184 84.69V24a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhHandArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownFillIcon],svg[ph-hand-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.4 24.4 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Zm-65.09-90.55a8 8 0 0 1 11.32-11.32L184 84.69V24a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Z"></svg:path>`,
})
export class PhHandArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownLightIcon],svg[ph-hand-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62m-64.52-93.76a6 6 0 0 1 8.48-8.48L186 89.51V24a6 6 0 0 1 12 0v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Z"></svg:path>`,
})
export class PhHandArrowDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowDownThinIcon],svg[ph-hand-arrow-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Zm-64-97a4 4 0 0 1 5.66-5.66L188 94.34V24a4 4 0 0 1 8 0v70.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhHandArrowDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpIcon],svg[ph-hand-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7.4 7.4 0 0 0 1.2-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM40 200H16v-40h24Zm179.43-31.79l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM154.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L200 43.31V104a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path>`,
})
export class PhHandArrowUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpBoldIcon],svg[ph-hand-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.76 137.88a28.39 28.39 0 0 0-24.63-4.88L172 141.26V140a32 32 0 0 0-32-32H89.94a35.74 35.74 0 0 0-25.45 10.54L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a12 12 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32M24 164h12v32H24Zm193.68.61l-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.2 12.2 0 0 0 2.69-.3l67-15.41l.47-.12a4.6 4.6 0 0 1 5.81 4.44a4.58 4.58 0 0 1-2.29 4M151.51 64.48a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 1 1-17 17L204 53v51a12 12 0 0 1-24 0V53l-11.51 11.48a12 12 0 0 1-16.98 0"></svg:path>`,
})
export class PhHandArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpDuotoneIcon],svg[ph-hand-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M48 152v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8Z" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7.4 7.4 0 0 0 1.2-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM154.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L200 43.31V104a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path></svg:g>`,
})
export class PhHandArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpFillIcon],svg[ph-hand-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7.4 7.4 0 0 0 1.2-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM154.34 61.66a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L200 43.31V104a8 8 0 0 1-16 0V43.31l-18.34 18.35a8 8 0 0 1-11.32 0"></svg:path>`,
})
export class PhHandArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpLightIcon],svg[ph-hand-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181a2.5 2.5 0 0 0 .33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62M155.76 60.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L198 38.49V104a6 6 0 0 1-12 0V38.49l-21.76 21.75a6 6 0 0 1-8.48 0"></svg:path>`,
})
export class PhHandArrowUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandArrowUpThinIcon],svg[ph-hand-arrow-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Zm-64-113a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L196 33.66V104a4 4 0 0 1-8 0V33.66l-25.17 25.17a4 4 0 0 1-5.66 0Z"></svg:path>`,
})
export class PhHandArrowUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandBoldIcon],svg[ph-hand-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 44a32 32 0 0 0-8 1v-1a32 32 0 0 0-60.79-14A32 32 0 0 0 76 60v50.83a32 32 0 0 0-52 36.7C55.82 214.6 75.35 244 128 244a92.1 92.1 0 0 0 92-92V76a32 32 0 0 0-32-32m8 108a68.08 68.08 0 0 1-68 68c-35.83 0-49.71-14-82.48-83.14c-.14-.29-.29-.58-.45-.86a8 8 0 0 1 13.85-8l.21.35l18.68 30A12 12 0 0 0 100 152V60a8 8 0 0 1 16 0v60a12 12 0 0 0 24 0V44a8 8 0 0 1 16 0v76a12 12 0 0 0 24 0V76a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsIcon],svg[ph-hand-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM164 96a36 36 0 0 0 5.9-.48a36 36 0 1 0 28.22-47A36 36 0 1 0 164 96m60-12a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-60-44a20 20 0 0 1 19.25 14.61a36 36 0 0 0-15 24.93A20.4 20.4 0 0 1 164 80a20 20 0 0 1 0-40"></svg:path>`,
})
export class PhHandCoinsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsBoldIcon],svg[ph-hand-coins-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.76 137.88a28.39 28.39 0 0 0-24.63-4.88L172 141.26V140a32 32 0 0 0-32-32H89.94a35.76 35.76 0 0 0-25.45 10.54L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a12 12 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32M36 196H24v-32h12Zm181.68-31.39l-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.2 12.2 0 0 0 2.69-.3l67-15.41l.47-.12a4.61 4.61 0 0 1 5.82 4.44a4.58 4.58 0 0 1-2.3 4M164 100a40 40 0 0 0 5.18-.34a40 40 0 1 0 29.67-59.32A40 40 0 1 0 164 100m40-36a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-40-20a16 16 0 0 1 12.94 6.58A39.9 39.9 0 0 0 164.2 76h-.2a16 16 0 0 1 0-32"></svg:path>`,
})
export class PhHandCoinsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsDuotoneIcon],svg[ph-hand-coins-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 152h32v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8m188-96a28 28 0 0 0-12 2.71a28 28 0 1 0-16 26.58A28 28 0 1 0 204 56" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.43 24.43 0 0 0-21.24-4.23l-41.84 9.62A28 28 0 0 0 140 112H89.94a31.82 31.82 0 0 0-22.63 9.37L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9ZM164 96a36 36 0 0 0 5.9-.48a36 36 0 1 0 28.22-47A36 36 0 1 0 164 96m60-12a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-60-44a20 20 0 0 1 19.25 14.61a36 36 0 0 0-15 24.93A20.4 20.4 0 0 1 164 80a20 20 0 0 1 0-40"></svg:path></svg:g>`,
})
export class PhHandCoinsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsFillIcon],svg[ph-hand-coins-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.09 57.38a36 36 0 0 1 55.17-27.82a4 4 0 0 1-.56 7A52.06 52.06 0 0 0 152 84c0 1.17 0 2.34.12 3.49a4 4 0 0 1-6 3.76a36 36 0 0 1-18.03-33.87M240 160.61a24.47 24.47 0 0 1-13.6 22l-.44.2l-38.83 16.54a7 7 0 0 1-1.19.4l-64 16a8 8 0 0 1-1.94.25H16a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h28.69l22.62-22.63A31.82 31.82 0 0 1 89.94 112H140a28 28 0 0 1 27.25 34.45l41.84-9.62A24.61 24.61 0 0 1 240 160.61m-16 0a8.61 8.61 0 0 0-10.87-8.3l-.31.08l-67 15.41a8.3 8.3 0 0 1-1.79.2H112a8 8 0 0 1 0-16h28a12 12 0 0 0 0-24H89.94a15.86 15.86 0 0 0-11.31 4.69L56 155.31V200h63l62.43-15.61l38-16.18a8.56 8.56 0 0 0 4.57-7.6M168 84a36 36 0 1 0 36-36a36 36 0 0 0-36 36"></svg:path>`,
})
export class PhHandCoinsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsLightIcon],svg[ph-hand-coins-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62M164 94a34.5 34.5 0 0 0 7.28-.78a34 34 0 1 0 25.46-42.43A34 34 0 1 0 164 94m62-10a22 22 0 1 1-22-22a22 22 0 0 1 22 22m-62-46a21.94 21.94 0 0 1 21.51 17.49a34 34 0 0 0-15.38 25.65A22 22 0 1 1 164 38"></svg:path>`,
})
export class PhHandCoinsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandCoinsThinIcon],svg[ph-hand-coins-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H89.94a27.8 27.8 0 0 0-19.8 8.2L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38ZM164 92a32 32 0 0 0 8.73-1.2a32 32 0 1 0 22.55-37.58A32 32 0 1 0 164 92m64-8a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-64-48a24 24 0 0 1 23.74 20.46A32 32 0 0 0 172 82.62A24 24 0 1 1 164 36"></svg:path>`,
})
export class PhHandCoinsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositIcon],svg[ph-hand-deposit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhHandDepositIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositBoldIcon],svg[ph-hand-deposit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 140a12 12 0 0 1-12-12V45l-7.51 7.51a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0l28 28a12 12 0 1 1-17 17L132 45v83a12 12 0 0 1-12 12m76-18.48V96a20 20 0 0 0-20-20h-12a12 12 0 0 0 0 24h8v68.3a32 32 0 0 0-43.71 43.7c.11.2.23.39.35.58l22.26 34a12 12 0 1 0 20.1-13.15l-22-33.66a8 8 0 0 1 14-7.77c.11.2.23.39.36.58l10.64 16.3a12 12 0 0 0 22-6.57V154a70.66 70.66 0 0 1 16 44.61V240a12 12 0 0 0 24 0v-41.35a94.91 94.91 0 0 0-40-77.13M76 76H64a20 20 0 0 0-20 20v104a12 12 0 0 0 24 0V100h8a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhHandDepositBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositDuotoneIcon],svg[ph-hand-deposit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 96v106.31L173.32 186a20 20 0 0 0-36.9 14H56V96a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhHandDepositDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositFillIcon],svg[ph-hand-deposit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 198.65V240a8 8 0 0 1-16 0v-41.35A74.84 74.84 0 0 0 192 144v58.35a8 8 0 0 1-14.69 4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12 12 0 0 0-20.89 11.83l22.13 33.79a8 8 0 0 1-13.39 8.76l-22.26-34l-.24-.38c-.38-.66-.73-1.33-1.05-2H56a8 8 0 0 1-8-8V96a16 16 0 0 1 16-16h48v48a8 8 0 0 0 16 0V80h48a16 16 0 0 1 16 16v27.62a90.89 90.89 0 0 1 40 75.03M128 35.31l18.34 18.35a8 8 0 0 0 11.32-11.32l-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L112 35.31V80h16Z"></svg:path>`,
})
export class PhHandDepositFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositLightIcon],svg[ph-hand-deposit-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M126 30.49V128a6 6 0 0 1-12 0V30.49L92.24 52.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48Zm64 94.2V96a14 14 0 0 0-14-14h-16a6 6 0 0 0 0 12h16a2 2 0 0 1 2 2v86.14A26 26 0 0 0 133.49 209c0 .1.11.19.17.29l22.26 34a6 6 0 0 0 10-6.58l-22.12-33.84A14 14 0 0 1 168.13 189a3 3 0 0 0 .17.29l10.7 16.3a6 6 0 0 0 11-3.28v-62.74a76.83 76.83 0 0 1 28 59.08V240a6 6 0 0 0 12 0v-41.35a88.88 88.88 0 0 0-40-73.96M80 82H64a14 14 0 0 0-14 14v104a6 6 0 0 0 12 0V96a2 2 0 0 1 2-2h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhHandDepositLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDepositThinIcon],svg[ph-hand-deposit-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 25.66V128a4 4 0 0 1-8 0V25.66L90.83 50.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66Zm64 100.12V96a12 12 0 0 0-12-12h-16a4 4 0 0 0 0 8h16a4 4 0 0 1 4 4v92.9l-3.27-5a24 24 0 0 0-41.51 24.1a1.2 1.2 0 0 0 .12.19l22.26 34a4 4 0 1 0 6.69-4.38l-22.2-33.9A16 16 0 0 1 169.86 188l.12.19l10.67 16.31a4 4 0 0 0 7.35-2.19v-66.84a78.83 78.83 0 0 1 32 63.18V240a4 4 0 0 0 8 0v-41.35a86.84 86.84 0 0 0-40-72.87M80 84H64a12 12 0 0 0-12 12v104a4 4 0 0 0 8 0V96a4 4 0 0 1 4-4h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhHandDepositThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandDuotoneIcon],svg[ph-hand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 76v76a80 80 0 0 1-80 80c-44.18 0-60.75-21.28-93.32-90a20 20 0 0 1 34.64-20L88 152V60a20 20 0 0 1 40 0V44a20 20 0 0 1 40 0v32a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M188 48a27.75 27.75 0 0 0-12 2.71V44a28 28 0 0 0-54.65-8.6A28 28 0 0 0 80 60v64l-3.82-6.13a28 28 0 0 0-48.6 27.82c16 33.77 28.93 57.72 43.72 72.69C86.24 233.54 103.2 240 128 240a88.1 88.1 0 0 0 88-88V76a28 28 0 0 0-28-28m12 104a72.08 72.08 0 0 1-72 72c-20.38 0-33.51-4.88-45.33-16.85C69.44 193.74 57.26 171 41.9 138.58a6 6 0 0 0-.3-.58a12 12 0 0 1 20.79-12a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v76a8 8 0 0 0 16 0V76a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeIcon],svg[ph-hand-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v36a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Zm-60 16a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-40c-36.52 0-54.41 34.94-55.16 36.42a8 8 0 0 0 0 7.16C73.59 173.06 91.48 208 128 208s54.41-34.94 55.16-36.42a8 8 0 0 0 0-7.16C182.41 162.94 164.52 128 128 128m0 64c-20.63 0-33.8-16.52-38.7-24c4.9-7.48 18.07-24 38.7-24s33.81 16.53 38.7 24c-4.9 7.48-18.07 24-38.7 24"></svg:path>`,
})
export class PhHandEyeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeBoldIcon],svg[ph-hand-eye-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 184a16 16 0 1 1-16-16a16 16 0 0 1 16 16m76-72v40a92 92 0 0 1-184 0V76a32 32 0 0 1 40-31v-1a32 32 0 0 1 60.79-14A32 32 0 0 1 180 60v21a32 32 0 0 1 40 31m-24 0a8 8 0 0 0-16 0a12 12 0 0 1-24 0V60a8 8 0 0 0-16 0v44a12 12 0 0 1-24 0V44a8 8 0 0 0-16 0v68a12 12 0 0 1-24 0V76a8 8 0 0 0-16 0v76a68 68 0 0 0 136 0Zm-68 16a55.8 55.8 0 0 0-49.89 30.54a12 12 0 0 0 21.37 10.92a32 32 0 0 1 57 0a12 12 0 0 0 10.73 6.54a11.8 11.8 0 0 0 5.45-1.32a12 12 0 0 0 5.23-16.14A55.8 55.8 0 0 0 128 128"></svg:path>`,
})
export class PhHandEyeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeDuotoneIcon],svg[ph-hand-eye-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M188 96a20 20 0 0 0-20 20V60a20 20 0 0 0-40 0V44a20 20 0 0 0-40 0v32a20 20 0 0 0-40 0v76a80 80 0 0 0 160 0v-36a20 20 0 0 0-20-20m-60 104c-32 0-48-32-48-32s16-32 48-32s48 32 48 32s-16 32-48 32" opacity=".2"></svg:path><svg:path d="M188 88a27.75 27.75 0 0 0-12 2.71V60a28 28 0 0 0-41.36-24.6A28 28 0 0 0 80 44v6.71A27.75 27.75 0 0 0 68 48a28 28 0 0 0-28 28v76a88 88 0 0 0 176 0v-36a28 28 0 0 0-28-28m12 64a72 72 0 0 1-144 0V76a12 12 0 0 1 24 0v36a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0v-4a12 12 0 0 1 24 0Zm-60 16a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-40c-36.52 0-54.41 34.94-55.16 36.42a8 8 0 0 0 0 7.16C73.59 173.06 91.48 208 128 208s54.41-34.94 55.16-36.42a8 8 0 0 0 0-7.16C182.41 162.94 164.52 128 128 128m0 64c-20.63 0-33.8-16.52-38.7-24c4.9-7.48 18.07-24 38.7-24s33.81 16.53 38.7 24c-4.9 7.48-18.07 24-38.7 24"></svg:path></svg:g>`,
})
export class PhHandEyeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeFillIcon],svg[ph-hand-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 180a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-76v48a88 88 0 0 1-176 0V64a16 16 0 0 1 32 0v56a8 8 0 0 0 16 0V32a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0V48a16 16 0 0 1 32 0v80a8 8 0 0 0 16 0v-24a16 16 0 0 1 32 0m-36.42 74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88 32.81-51.58 34.21a4 4 0 0 0 0 3.58c.7 1.4 17.5 34.21 51.58 34.21s50.88-32.81 51.58-34.21a4 4 0 0 0 0-3.58"></svg:path>`,
})
export class PhHandEyeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeLightIcon],svg[ph-hand-eye-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138 168a10 10 0 1 1-10-10a10 10 0 0 1 10 10m76-52v36a86 86 0 0 1-172 0V76a26 26 0 0 1 40-21.89V44a26 26 0 0 1 51.41-5.51A26 26 0 0 1 174 60v34.11A26 26 0 0 1 214 116m-12 0a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0V60a14 14 0 0 0-28 0v44a6 6 0 0 1-12 0V44a14 14 0 0 0-28 0v68a6 6 0 0 1-12 0V76a14 14 0 0 0-28 0v76a74 74 0 0 0 148 0Zm-20.63 49.32a6 6 0 0 1 0 5.36C180.65 172.12 163.3 206 128 206s-52.65-33.88-53.37-35.32a6 6 0 0 1 0-5.36C75.35 163.88 92.7 130 128 130s52.65 33.88 53.37 35.32M169.08 168c-4.46-7.12-18.41-26-41.08-26s-36.65 18.85-41.08 26c4.46 7.13 18.41 26 41.08 26s36.65-18.85 41.08-26"></svg:path>`,
})
export class PhHandEyeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandEyeThinIcon],svg[ph-hand-eye-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 168a8 8 0 1 1-8-8a8 8 0 0 1 8 8m76-52v36a84 84 0 0 1-168 0V76a24 24 0 0 1 40-17.87V44a24 24 0 0 1 47.93-1.8A24 24 0 0 1 172 60v38.13A24 24 0 0 1 212 116m-8 0a16 16 0 0 0-32 0v4a4 4 0 0 1-8 0V60a16 16 0 0 0-32 0v44a4 4 0 0 1-8 0V44a16 16 0 0 0-32 0v68a4 4 0 0 1-8 0V76a16 16 0 0 0-32 0v76a76 76 0 0 0 152 0Zm-24.42 50.21a4 4 0 0 1 0 3.58c-.7 1.4-17.5 34.21-51.58 34.21s-50.88-32.81-51.58-34.21a4 4 0 0 1 0-3.58c.7-1.4 17.5-34.21 51.58-34.21s50.88 32.81 51.58 34.21m-8.16 1.8c-3.83-6.43-18.55-28-43.42-28s-39.6 21.55-43.42 28c3.84 6.44 18.55 28 43.42 28s39.6-21.56 43.42-28.01Z"></svg:path>`,
})
export class PhHandEyeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFillIcon],svg[ph-hand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 64v90.93c0 46.2-36.85 84.55-83 85.06a83.7 83.7 0 0 1-60.4-24.59C50.79 192.33 26.15 136 26.15 136a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V48a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V112a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V32a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V120a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25v-55.3c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 216 64"></svg:path>`,
})
export class PhHandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistIcon],svg[ph-hand-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 80h-16V64a32 32 0 0 0-56-21.13a32 32 0 0 0-55.79 17.55A32 32 0 0 0 24 88v40a104 104 0 0 0 208 0v-16a32 32 0 0 0-32-32m-48-32a16 16 0 0 1 16 16v16h-32V64a16 16 0 0 1 16-16M88 64a16 16 0 0 1 32 0v40a16 16 0 0 1-32 0ZM40 88a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0Zm176 40a88 88 0 0 1-175.92 3.75A31.93 31.93 0 0 0 80 125.13a31.93 31.93 0 0 0 44.58 3.35a32.2 32.2 0 0 0 11.8 11.44A47.88 47.88 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 0-16h-16a16 16 0 0 1-16-16V96h64a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhHandFistIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistBoldIcon],svg[ph-hand-fist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-12V64a36 36 0 0 0-60-26.8a36 36 0 0 0-58.73 17.34A36 36 0 0 0 20 88v40a108 108 0 0 0 216 0v-16a36 36 0 0 0-36-36m-60-12a12 12 0 0 1 24 0v12h-24Zm-48 0a12 12 0 0 1 24 0v40a12 12 0 0 1-24 0ZM44 88a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm168 40a84 84 0 0 1-167.39 10.15A35.93 35.93 0 0 0 80 130.8a35.89 35.89 0 0 0 43.65 3.34a36.2 36.2 0 0 0 6.35 6.36a51.82 51.82 0 0 0-14 35.5a12 12 0 0 0 24 0a28 28 0 0 1 28-28a12 12 0 0 0 0-24h-16a12 12 0 0 1-12-12v-12h60a12 12 0 0 1 12 12Z"></svg:path>`,
})
export class PhHandFistBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistDuotoneIcon],svg[ph-hand-fist-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 112v16a96 96 0 0 1-192 0V88a24 24 0 0 1 48 0V64a24 24 0 0 1 48 0a24 24 0 0 1 48 0v24h24a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M200 80h-16V64a32 32 0 0 0-56-21.13a32 32 0 0 0-55.79 17.55A32 32 0 0 0 24 88v40a104 104 0 0 0 208 0v-16a32 32 0 0 0-32-32m-48-32a16 16 0 0 1 16 16v16h-32V64a16 16 0 0 1 16-16M88 64a16 16 0 0 1 32 0v40a16 16 0 0 1-32 0ZM40 88a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0Zm176 40a88 88 0 0 1-175.92 3.75A31.93 31.93 0 0 0 80 125.13a31.93 31.93 0 0 0 44.58 3.35a32.2 32.2 0 0 0 11.8 11.44A47.88 47.88 0 0 0 120 176a8 8 0 0 0 16 0a32 32 0 0 1 32-32a8 8 0 0 0 0-16h-16a16 16 0 0 1-16-16V96h64a16 16 0 0 1 16 16Z"></svg:path></svg:g>`,
})
export class PhHandFistDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistFillIcon],svg[ph-hand-fist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120v8a104 104 0 0 1-104.37 104c-54-.19-98-42.06-103.12-94.78a4 4 0 0 1 5.56-4A35.94 35.94 0 0 0 72 122.59a35.92 35.92 0 0 0 53.94 2.33a40.36 40.36 0 0 0 12.87 13A47.94 47.94 0 0 0 120 176a8 8 0 0 0 8.67 8a8.21 8.21 0 0 0 7.33-8.26A32 32 0 0 1 168 144a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.25-7.47H160a24 24 0 0 1-24-24V88h64a32 32 0 0 1 32 32m-187.27 0C55.57 119.6 64 110.37 64 99.52v-23C64 65.63 55.57 56.4 44.73 56A20 20 0 0 0 24 76v24a20 20 0 0 0 20.73 20m56 0c10.84-.39 19.27-9.62 19.27-20.47v-47c0-10.85-8.43-20.08-19.27-20.47A20 20 0 0 0 80 52v48a20 20 0 0 0 20.73 20M176 52a20 20 0 0 0-20.73-20c-10.84.4-19.27 9.63-19.27 20.48V72h36a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhHandFistFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistLightIcon],svg[ph-hand-fist-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 82h-18V64a30 30 0 0 0-54-18a30 30 0 0 0-54 18a30 30 0 0 0-48 24v40a102 102 0 0 0 204 0v-16a30 30 0 0 0-30-30m-48-36a18 18 0 0 1 18 18v18h-34a15 15 0 0 0-2 .16V64a18 18 0 0 1 18-18M86 64a18 18 0 0 1 36 0v40a18 18 0 0 1-36 0ZM38 88a18 18 0 0 1 36 0v16a18 18 0 0 1-36 0Zm180 40a90 90 0 0 1-180 0a30 30 0 0 0 42-6a30 30 0 0 0 45.12 3.3A30.18 30.18 0 0 0 140 139.51A45.92 45.92 0 0 0 122 176a6 6 0 0 0 12 0a34 34 0 0 1 34-34a6 6 0 0 0 0-12h-16a18 18 0 0 1-18-18V96a2 2 0 0 1 2-2h64a18 18 0 0 1 18 18Z"></svg:path>`,
})
export class PhHandFistLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandFistThinIcon],svg[ph-hand-fist-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 84h-20V64a28 28 0 0 0-52-14.41A28 28 0 0 0 76 64v4.43A28 28 0 0 0 28 88v40a100 100 0 0 0 200 0v-16a28 28 0 0 0-28-28m-48-40a20 20 0 0 1 20 20v20h-36a11.8 11.8 0 0 0-4 .7V64a20 20 0 0 1 20-20M84 64a20 20 0 0 1 40 0v40a20 20 0 0 1-40 0ZM36 88a20 20 0 0 1 40 0v16a20 20 0 0 1-40 0Zm184 40a92 92 0 0 1-184 0v-4.42a28 28 0 0 0 44-5.17a28 28 0 0 0 45.73 3.23a28.11 28.11 0 0 0 18.59 17.29A44 44 0 0 0 124 176a4 4 0 0 0 8 0a36 36 0 0 1 36-36a4 4 0 0 0 0-8h-16a20 20 0 0 1-20-20V96a4 4 0 0 1 4-4h64a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhHandFistThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingIcon],svg[ph-hand-grabbing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 80a27.8 27.8 0 0 0-13.36 3.4a28 28 0 0 0-46.64-11A28 28 0 0 0 80 92v20H68a28 28 0 0 0-28 28v12a88 88 0 0 0 176 0v-44a28 28 0 0 0-28-28m12 72a72 72 0 0 1-144 0v-12a12 12 0 0 1 12-12h12v24a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0Z"></svg:path>`,
})
export class PhHandGrabbingIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingBoldIcon],svg[ph-hand-grabbing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 76a31.9 31.9 0 0 0-11.21 2A32 32 0 0 0 128 67a32 32 0 0 0-52 25v16h-8a32 32 0 0 0-32 32v12a92 92 0 0 0 184 0v-44a32 32 0 0 0-32-32m8 76a68 68 0 0 1-136 0v-12a8 8 0 0 1 8-8h8v20a12 12 0 0 0 24 0V92a8 8 0 0 1 16 0v28a12 12 0 0 0 24 0V92a8 8 0 0 1 16 0v28a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhHandGrabbingBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingDuotoneIcon],svg[ph-hand-grabbing-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 108v44a80 80 0 0 1-160 0v-12a20 20 0 0 1 20-20h20V92a20 20 0 0 1 40 0a20 20 0 0 1 40 0v16a20 20 0 0 1 40 0" opacity=".2"></svg:path><svg:path d="M188 80a27.8 27.8 0 0 0-13.36 3.4a28 28 0 0 0-46.64-11A28 28 0 0 0 80 92v20H68a28 28 0 0 0-28 28v12a88 88 0 0 0 176 0v-44a28 28 0 0 0-28-28m12 72a72 72 0 0 1-144 0v-12a12 12 0 0 1 12-12h12v24a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0Z"></svg:path></svg:g>`,
})
export class PhHandGrabbingDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingFillIcon],svg[ph-hand-grabbing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 104v48a88 88 0 0 1-176 0v-16a16 16 0 0 1 32 0v8a8 8 0 0 0 16 0V88a16 16 0 0 1 32 0v16a8 8 0 0 0 16 0V88a16 16 0 0 1 32 0v16a8 8 0 0 0 16 0a16 16 0 0 1 32 0"></svg:path>`,
})
export class PhHandGrabbingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingLightIcon],svg[ph-hand-grabbing-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 82a25.85 25.85 0 0 0-14.59 4.49A26 26 0 0 0 128 75.41A26 26 0 0 0 82 92v22H68a26 26 0 0 0-26 26v12a86 86 0 0 0 172 0v-44a26 26 0 0 0-26-26m14 70a74 74 0 0 1-148 0v-12a14 14 0 0 1 14-14h14v26a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandGrabbingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandGrabbingThinIcon],svg[ph-hand-grabbing-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 84a23.87 23.87 0 0 0-16.07 6.2A24 24 0 0 0 128 78.75A24 24 0 0 0 84 92v24H68a24 24 0 0 0-24 24v12a84 84 0 0 0 168 0v-44a24 24 0 0 0-24-24m16 68a76 76 0 0 1-152 0v-12a16 16 0 0 1 16-16h16v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0Z"></svg:path>`,
})
export class PhHandGrabbingThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartIcon],svg[ph-hand-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM119.46 48a31.15 31.15 0 0 1 29.14 19a8 8 0 0 0 14.8 0a31.15 31.15 0 0 1 29.14-19C209.59 48 224 62.65 224 80c0 19.51-15.79 41.58-45.66 63.9l-11.09 2.55A28 28 0 0 0 140 112h-39.32C92.05 100.36 88 90.12 88 80c0-17.35 14.41-32 31.46-32M16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"></svg:path>`,
})
export class PhHandHeartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartBoldIcon],svg[ph-hand-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.76 137.88a28.66 28.66 0 0 0-12-5.39C236.19 114.94 244 97.37 244 80c0-28.67-23.09-52-51.46-52A51.77 51.77 0 0 0 156 42.85A51.77 51.77 0 0 0 119.46 28C91.09 28 68 51.33 68 80c0 10.15 2.72 20.3 8.22 30.7a35.9 35.9 0 0 0-11.73 7.84L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a12 12 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32M119.46 52a27.18 27.18 0 0 1 25.44 16.56a12 12 0 0 0 22.2 0A27.18 27.18 0 0 1 192.54 52C207.42 52 220 64.82 220 80c0 18.06-15 38.84-43.38 60.19l-4.62 1.07V140a32 32 0 0 0-32-32h-37.29C95.42 97.76 92 88.77 92 80c0-15.18 12.58-28 27.46-28M24 164h12v32H24Zm193.68.61l-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.2 12.2 0 0 0 2.69-.3l67-15.41l.47-.12a4.61 4.61 0 0 1 5.82 4.44a4.58 4.58 0 0 1-2.3 4"></svg:path>`,
})
export class PhHandHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartDuotoneIcon],svg[ph-hand-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 152h32v56H16a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8M192.54 40A39.12 39.12 0 0 0 156 64a39.12 39.12 0 0 0-36.54-24C97.67 40 80 58.31 80 80c0 14.56 7 27.71 16.73 40H140a20 20 0 0 1 0 40h4l37.78-8.68C203.82 135.07 232 109.23 232 80c0-21.69-17.67-40-39.46-40" opacity=".2"></svg:path><svg:path d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM119.46 48a31.15 31.15 0 0 1 29.14 19a8 8 0 0 0 14.8 0a31.15 31.15 0 0 1 29.14-19C209.59 48 224 62.65 224 80c0 19.51-15.79 41.58-45.66 63.9l-11.09 2.55A28 28 0 0 0 140 112h-39.32C92.05 100.36 88 90.12 88 80c0-17.35 14.41-32 31.46-32M16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"></svg:path></svg:g>`,
})
export class PhHandHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartFillIcon],svg[ph-hand-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56Zm-10.9 27.15l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z"></svg:path>`,
})
export class PhHandHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartLightIcon],svg[ph-hand-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-4.32 1C227 119.55 238 99.51 238 80c0-25.36-20.39-46-45.46-46A45.51 45.51 0 0 0 156 52a45.51 45.51 0 0 0-36.54-18C94.39 34 74 54.64 74 80c0 11.38 3.63 22.49 11.29 34.36a29.73 29.73 0 0 0-16.56 8.43L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM119.46 46a33.16 33.16 0 0 1 31 20.28a6 6 0 0 0 11.1 0a33.16 33.16 0 0 1 31-20.28C210.68 46 226 61.57 226 80c0 20.24-16.18 43-46.8 65.75l-14.87 3.42A26 26 0 0 0 140 114H99.67C90.36 101.67 86 90.81 86 80c0-18.43 15.32-34 33.46-34M14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62"></svg:path>`,
})
export class PhHandHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandHeartThinIcon],svg[ph-hand-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.9 144.24a20.45 20.45 0 0 0-17.84-3.53l-11.95 2.75C223.26 121.88 236 100.58 236 80c0-24.26-19.5-44-43.46-44A43.41 43.41 0 0 0 156 55.44A43.41 43.41 0 0 0 119.46 36C95.5 36 76 55.74 76 80c0 11.85 4.11 23.44 12.81 36a27.8 27.8 0 0 0-18.67 8.17L46.34 148H16a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h104a4 4 0 0 0 1-.12l64-16a5 5 0 0 0 .6-.2l38.82-16.54l.22-.1a20.6 20.6 0 0 0 3.29-34.8ZM119.46 44a35.15 35.15 0 0 1 32.84 21.52a4 4 0 0 0 7.4 0A35.15 35.15 0 0 1 192.54 44C211.76 44 228 60.49 228 80c0 21.27-16.13 44-47.94 67.61L160.75 152a23.76 23.76 0 0 0 3.25-12a24 24 0 0 0-24-24H98.69C88.69 103 84 91.5 84 80c0-19.51 16.24-36 35.46-36M12 200v-40a4 4 0 0 1 4-4h28v48H16a4 4 0 0 1-4-4m209.13-28.17l-38.41 16.37l-63.21 15.8H52v-50.34l23.8-23.8A19.86 19.86 0 0 1 89.94 124H140a16 16 0 0 1 0 32h-28a4 4 0 0 0 0 8h32a4 4 0 0 0 .9-.1l67-15.41h.16a12.6 12.6 0 0 1 9 23.38Z"></svg:path>`,
})
export class PhHandHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phHandLightIcon],svg[ph-hand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 50a25.8 25.8 0 0 0-14 4.11V44a26 26 0 0 0-51.41-5.51A26 26 0 0 0 82 60v71l-7.53-12.1a26 26 0 0 0-45.11 25.87C60.76 211 78.51 238 128 238a86.1 86.1 0 0 0 86-86V76a26 26 0 0 0-26-26m14 102a74.09 74.09 0 0 1-74 74c-21 0-34.51-5.05-46.75-17.45C67.81 195 55.54 172 40.1 139.43l-.23-.43a14 14 0 0 1 24.25-14l.1.17l18.68 30A6 6 0 0 0 94 152V60a14 14 0 0 1 28 0v60a6 6 0 0 0 12 0V44a14 14 0 0 1 28 0v76a6 6 0 0 0 12 0V76a14 14 0 0 1 28 0Z"></svg:path>`,
})
export class PhHandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

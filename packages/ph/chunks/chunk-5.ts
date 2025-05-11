import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCoinVerticalThinIcon],svg[ph-coin-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.05 58.1C183.73 38.69 168.44 28 152 28h-48c-16.44 0-31.73 10.69-43 30.1c-11 18.74-17 43.56-17 69.9s6 51.16 17 69.9c11.27 19.41 26.56 30.1 43 30.1h48c16.44 0 31.73-10.69 43.05-30.1C206 179.16 212 154.34 212 128s-6-51.16-16.95-69.9M191.27 188H152.1c7.24-16.14 11.37-35.53 11.84-56h40c-.5 20.77-4.94 40.28-12.67 56m-27.33-64c-.47-20.47-4.6-39.86-11.84-56h39.17c7.74 15.72 12.17 35.23 12.67 56ZM152 36c12.89 0 25.19 8.51 34.84 24h-38.73c-.35-.63-.7-1.28-1.06-1.9c-5.58-9.56-12.12-17-19.29-22.1ZM67.86 193.87C57.63 176.34 52 153 52 128s5.63-48.34 15.86-65.87C77.69 45.28 90.52 36 104 36s26.31 9.28 36.14 26.13C150.37 79.66 156 103.05 156 128s-5.63 48.34-15.86 65.87C130.31 210.72 117.48 220 104 220s-26.31-9.28-36.14-26.13M152 220h-24.24c7.17-5.09 13.71-12.54 19.29-22.1c.36-.62.71-1.27 1.06-1.9h38.73c-9.65 15.49-21.95 24-34.84 24"></svg:path>`,
})
export class PhCoinVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsIcon],svg[ph-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54v23.79a165.5 165.5 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87"></svg:path>`,
})
export class PhCoinsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsBoldIcon],svg[ph-coins-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 86.11V84c0-14.62-10.83-27.55-30.51-36.4C140.87 40.12 119 36 96 36s-44.87 4.12-61.49 11.6C14.83 56.45 4 69.38 4 84v40c0 14.62 10.83 27.55 30.51 36.4A131.7 131.7 0 0 0 68 169.88V172c0 14.62 10.83 27.55 30.51 36.4C115.13 215.88 137 220 160 220s44.87-4.12 61.49-11.6C241.17 199.55 252 186.62 252 172v-40c0-22.14-25.29-39.92-64-45.89M228 132c0 7.75-21.77 22.48-61.81 23.88C180.33 147.4 188 136.3 188 124v-13.56c25.88 4.71 40 15.04 40 21.56m-120.63 15.63c-3.63.24-7.42.37-11.37.37c-5.08 0-9.89-.22-14.43-.61a11 11 0 0 0-1.14-.09c-1.51-.14-3-.3-4.43-.48v-15.89A187 187 0 0 0 96 132a187 187 0 0 0 20-1.07v15.89c-2.49.3-5.07.56-7.75.75c-.25.01-.59.03-.88.06M164 117.14V124c0 4.78-8.28 12.21-24 17.54v-15a115 115 0 0 0 17.49-6.13q3.44-1.55 6.51-3.27M96 60c44 0 68 15.85 68 24s-24 24-68 24s-68-15.85-68-24s24-24 68-24m-68 64v-6.86q3.08 1.71 6.51 3.26A115 115 0 0 0 52 126.53v15c-15.72-5.32-24-12.75-24-17.53m64 48h4q5.44 0 10.77-.32q4.45 1.57 9.23 2.86v15c-15.72-5.33-24-12.76-24-17.54m48 22.82v-15.88a187 187 0 0 0 20 1.06a187 187 0 0 0 20-1.07v15.89a170 170 0 0 1-40 0m64-5.28v-15a115 115 0 0 0 17.49-6.13q3.44-1.54 6.51-3.26V172c0 4.78-8.28 12.21-24 17.54"></svg:path>`,
})
export class PhCoinsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsDuotoneIcon],svg[ph-coins-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 132c0 19.88-35.82 36-80 36c-19.6 0-37.56-3.17-51.47-8.44C146.76 156.85 176 142 176 124V96.72c36.52 3.34 64 17.86 64 35.28m-64-48c0-19.88-35.82-36-80-36S16 64.12 16 84s35.82 36 80 36s80-16.12 80-36" opacity=".2"></svg:path><svg:path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43M232 132c0 13.22-30.79 28-72 28c-3.73 0-7.43-.13-11.08-.37C170.49 151.77 184 139 184 124v-18.26c29.87 4.45 48 16.53 48 26.26M72 150.25v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54v23.79A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75m96-40.32V124c0 8.39-12.41 17.4-32 22.87V123.5c12.91-3.13 23.84-7.79 32-13.57M96 56c41.21 0 72 14.78 72 28s-30.79 28-72 28s-72-14.78-72-28s30.79-28 72-28m-72 68v-14.07c8.16 5.78 19.09 10.44 32 13.57v23.37C36.41 141.4 24 132.39 24 124m64 48v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76v23.46c-19.59-5.47-32-14.48-32-22.87m48 26.25V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54v23.79a165.5 165.5 0 0 1-48 0m64-3.38V171.5c12.91-3.13 23.84-7.79 32-13.57V172c0 8.39-12.41 17.4-32 22.87"></svg:path></svg:g>`,
})
export class PhCoinsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsFillIcon],svg[ph-coins-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43m-128 57.3C36.41 141.4 24 132.39 24 124v-14.07c8.16 5.78 19.09 10.44 32 13.57Zm80-23.37c12.91-3.13 23.84-7.79 32-13.57V124c0 8.39-12.41 17.4-32 22.87Zm-16 71.37c-19.59-5.47-32-14.48-32-22.87v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a122 122 0 0 0 12.61 3.76Zm0-44.62A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75v-23.79A184 184 0 0 0 96 128a184 184 0 0 0 24-1.54Zm64 48a165.5 165.5 0 0 1-48 0V174.4a179.5 179.5 0 0 0 24 1.6a184 184 0 0 0 24-1.54ZM232 172c0 8.39-12.41 17.4-32 22.87V171.5c12.91-3.13 23.84-7.79 32-13.57Z"></svg:path>`,
})
export class PhCoinsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsLightIcon],svg[ph-coins-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224.56 103.81c-11.13-6.06-26.09-10.42-42.56-12.47V84c0-12.12-9.58-23.1-27-30.93C139.16 45.93 118.2 42 96 42s-43.16 3.93-59 11.07C19.58 60.9 10 71.88 10 84v40c0 12.12 9.58 23.1 27 30.93c10.49 4.72 23.21 8 37 9.73V172c0 12.12 9.58 23.1 27 30.93c15.84 7.14 36.8 11.07 59 11.07s43.16-3.93 59-11.07c17.39-7.83 27-18.81 27-30.93v-40c0-10.65-7.61-20.66-21.44-28.19m-5.74 10.54C228.61 119.68 234 126 234 132c0 14.19-30.39 30-74 30a167 167 0 0 1-21.21-1.34a111 111 0 0 0 16.21-5.73c17.39-7.83 27-18.81 27-30.93v-20.57c14.4 1.93 27.3 5.73 36.82 10.92m-110.66 39.23c-3.92.27-8 .42-12.16.42c-5.3 0-10.4-.24-15.28-.67a2 2 0 0 0-.37 0c-3.58-.33-7-.77-10.35-1.3v-27.91A178 178 0 0 0 96 126a178 178 0 0 0 26-1.88V152c-4.34.69-8.91 1.22-13.69 1.56ZM170 105.89V124c0 9.54-13.75 19.8-36 25.51v-27.66a115 115 0 0 0 21-6.92a66.2 66.2 0 0 0 15-9.04M96 54c43.61 0 74 15.81 74 30s-30.39 30-74 30s-74-15.81-74-30s30.39-30 74-30m-74 70v-18.11a66.2 66.2 0 0 0 15 9a115 115 0 0 0 21 6.92v27.66C35.75 143.8 22 133.54 22 124m64 48v-6.28c3.3.18 6.63.28 10 .28q5.91 0 11.66-.37a123 123 0 0 0 14.34 4.21v27.67C99.75 191.8 86 181.54 86 172m48 28v-27.9a178 178 0 0 0 26 1.9a178 178 0 0 0 26-1.88V200a170 170 0 0 1-52 0m64-2.49v-27.66a115 115 0 0 0 21-6.92a66.2 66.2 0 0 0 15-9V172c0 9.54-13.75 19.8-36 25.51"></svg:path>`,
})
export class PhCoinsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCoinsThinIcon],svg[ph-coins-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 93.11V84c0-22.43-36.9-40-84-40S12 61.57 12 84v40c0 19.14 26.86 34.72 64 38.89V172c0 22.43 36.9 40 84 40s84-17.57 84-40v-40c0-18.88-26.13-34.63-64-38.89M236 132c0 15.45-30.54 32-76 32a165.7 165.7 0 0 1-28-2.34v-1.39c28.61-6.31 48-20 48-36.27v-22.83c32.22 3.83 56 16.76 56 30.83m-127.81 23.59Q102.3 156 96 156c-5.47 0-10.72-.25-15.73-.69H80q-6.24-.57-12-1.56V121.8a175 175 0 0 0 28 2.2a175 175 0 0 0 28-2.2v31.92a155 155 0 0 1-15.52 1.85ZM172 101.32V124c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-18.95M96 52c45.46 0 76 16.55 76 32s-30.54 32-76 32s-76-16.55-76-32s30.54-32 76-32m-76 72v-22.68c8.25 8.37 22.37 15.06 40 19v31.84C35.16 146.3 20 134.88 20 124m64 48v-8.4c3.91.26 7.92.4 12 .4s8.06-.14 12-.39a124 124 0 0 0 16 4.63v31.87C99.16 194.3 84 182.88 84 172m48 29.72v-31.95a174.5 174.5 0 0 0 28 2.23a175 175 0 0 0 28-2.2v31.92a173 173 0 0 1-56 0M236 172c0 10.88-15.16 22.3-40 28.11v-31.84c17.63-3.89 31.75-10.58 40-19Z"></svg:path>`,
})
export class PhCoinsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsIcon],svg[ph-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 32H64a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H64V48h40Zm88-176h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-40V48h40Z"></svg:path>`,
})
export class PhColumnsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsBoldIcon],svg[ph-columns-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H68V52h28Zm96-176h-36a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-28V52h28Z"></svg:path>`,
})
export class PhColumnsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsDuotoneIcon],svg[ph-columns-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 48v160a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m80-8h-40a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M104 32H64a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H64V48h40Zm88-176h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-40V48h40Z"></svg:path></svg:g>`,
})
export class PhColumnsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsFillIcon],svg[ph-columns-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h40a16 16 0 0 1 16 16m72-16h-40a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhColumnsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsLightIcon],svg[ph-columns-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 34H64a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Zm86-174h-40a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhColumnsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftIcon],svg[ph-columns-plus-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 32h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24ZM72 128a8 8 0 0 1-8 8H48v16a8 8 0 0 1-16 0v-16H16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhColumnsPlusLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftBoldIcon],svg[ph-columns-plus-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 28h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16ZM68 128a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhColumnsPlusLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftDuotoneIcon],svg[ph-columns-plus-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 48v160a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m64-8h-24a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M128 32h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24ZM72 128a8 8 0 0 1-8 8H48v16a8 8 0 0 1-16 0v-16H16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhColumnsPlusLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftFillIcon],svg[ph-columns-plus-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 48v160a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16m56-16h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 120H48v-16a8 8 0 0 0-16 0v16H16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhColumnsPlusLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftLightIcon],svg[ph-columns-plus-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 34h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm70-174h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2ZM70 128a6 6 0 0 1-6 6H46v18a6 6 0 0 1-12 0v-18H16a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhColumnsPlusLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusLeftThinIcon],svg[ph-columns-plus-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 36h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4ZM68 128a4 4 0 0 1-4 4H44v20a4 4 0 0 1-8 0v-20H16a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhColumnsPlusLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightIcon],svg[ph-columns-plus-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H56V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm96-80a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhColumnsPlusRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightBoldIcon],svg[ph-columns-plus-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H60V52h16Zm80-176h-24a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-16V52h16Zm100-76a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhColumnsPlusRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightDuotoneIcon],svg[ph-columns-plus-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M88 48v160a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8m64-8h-24a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M80 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H56V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-24V48h24Zm96-80a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhColumnsPlusRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightFillIcon],svg[ph-columns-plus-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 48v160a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16m56-16h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m88 88h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhColumnsPlusRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightLightIcon],svg[ph-columns-plus-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm70-174h-24a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2Zm92-80a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhColumnsPlusRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsPlusRightThinIcon],svg[ph-columns-plus-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm88-80a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhColumnsPlusRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phColumnsThinIcon],svg[ph-columns-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 36H64a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Zm84-172h-40a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhColumnsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandIcon],svg[ph-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhCommandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandBoldIcon],svg[ph-command-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 140h-16v-24h16a40 40 0 1 0-40-40v16h-24V76a40 40 0 1 0-40 40h16v24H76a40 40 0 1 0 40 40v-16h24v16a40 40 0 1 0 40-40m-16-64a16 16 0 1 1 16 16h-16ZM60 76a16 16 0 0 1 32 0v16H76a16 16 0 0 1-16-16m32 104a16 16 0 1 1-16-16h16Zm24-64h24v24h-24Zm64 80a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhCommandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandDuotoneIcon],svg[ph-command-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28" opacity=".2"></svg:path><svg:path d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"></svg:path></svg:g>`,
})
export class PhCommandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandFillIcon],svg[ph-command-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 116h24v24h-24ZM86 72a14 14 0 0 0 0 28h14V86a14 14 0 0 0-14-14m98 14a14 14 0 0 0-28 0v14h14a14 14 0 0 0 14-14M72 170a14 14 0 0 0 28 0v-14H86a14 14 0 0 0-14 14M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-68 92v-24h14a30 30 0 1 0-30-30v14h-24V86a30 30 0 1 0-30 30h14v24H86a30 30 0 1 0 30 30v-14h24v14a30 30 0 1 0 30-30Zm0 30a14 14 0 1 0 14-14h-14Z"></svg:path>`,
})
export class PhCommandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandLightIcon],svg[ph-command-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 146h-22v-36h22a34 34 0 1 0-34-34v22h-36V76a34 34 0 1 0-34 34h22v36H76a34 34 0 1 0 34 34v-22h36v22a34 34 0 1 0 34-34m-22-70a22 22 0 1 1 22 22h-22ZM54 76a22 22 0 0 1 44 0v22H76a22 22 0 0 1-22-22m44 104a22 22 0 1 1-22-22h22Zm12-70h36v36h-36Zm70 92a22 22 0 0 1-22-22v-22h22a22 22 0 0 1 0 44"></svg:path>`,
})
export class PhCommandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCommandThinIcon],svg[ph-command-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 148h-24v-40h24a32 32 0 1 0-32-32v24h-40V76a32 32 0 1 0-32 32h24v40H76a32 32 0 1 0 32 32v-24h40v24a32 32 0 1 0 32-32m-24-72a24 24 0 1 1 24 24h-24ZM52 76a24 24 0 0 1 48 0v24H76a24 24 0 0 1-24-24m48 104a24 24 0 1 1-24-24h24Zm8-72h40v40h-40Zm72 96a24 24 0 0 1-24-24v-24h24a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhCommandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassIcon],svg[ph-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m44.42-143.16l-64 32a8.05 8.05 0 0 0-3.58 3.58l-32 64A8 8 0 0 0 80 184a8.1 8.1 0 0 0 3.58-.84l64-32a8.05 8.05 0 0 0 3.58-3.58l32-64a8 8 0 0 0-10.74-10.74M138 138l-40.11 20.11L118 118l40.15-20.07Z"></svg:path>`,
})
export class PhCompassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassBoldIcon],svg[ph-compass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m35.27-135l-56 24a12 12 0 0 0-6.3 6.3l-24 56A12 12 0 0 0 92.73 179l56-24a12 12 0 0 0 6.3-6.3l24-56A12 12 0 0 0 163.27 77m-28.41 57.89l-24 10.29l10.29-24l24-10.29Z"></svg:path>`,
})
export class PhCompassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassDuotoneIcon],svg[ph-compass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m16 112l-64 32l32-64l64-32Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m44.42-143.16l-64 32a8.05 8.05 0 0 0-3.58 3.58l-32 64A8 8 0 0 0 80 184a8.1 8.1 0 0 0 3.58-.84l64-32a8.05 8.05 0 0 0 3.58-3.58l32-64a8 8 0 0 0-10.74-10.74M138 138l-40.11 20.11L118 118l40.15-20.07Z"></svg:path></svg:g>`,
})
export class PhCompassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassFillIcon],svg[ph-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m51.58 57.79l-32 64a4.08 4.08 0 0 1-1.79 1.79l-64 32a4 4 0 0 1-5.37-5.37l32-64a4.08 4.08 0 0 1 1.79-1.79l64-32a4 4 0 0 1 5.37 5.37"></svg:path>`,
})
export class PhCompassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassLightIcon],svg[ph-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m45.32-143.37l-64 32a6 6 0 0 0-2.69 2.69l-32 64A6 6 0 0 0 80 182a6.06 6.06 0 0 0 2.68-.63l64-32a6 6 0 0 0 2.69-2.69l32-64a6 6 0 0 0-8.05-8.05m-33.79 64.9l-46.11 23.05l23-46.11l46.11-23Z"></svg:path>`,
})
export class PhCompassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseIcon],svg[ph-compass-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-95.49 22.9L139.31 128l15.14-15.14L215 128Zm-52.9 0L41 128l60.57-15.14L116.69 128Zm104.22-33.94L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97m-62.63-7.65L128 116.69l-15.14-15.14L128 41ZM109.2 50.23L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97m-59 96.57l47.2 11.8l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm62.63 7.65L128 139.31l15.14 15.14L128 215Zm33.94 51.32l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.97Z"></svg:path>`,
})
export class PhCompassRoseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseBoldIcon],svg[ph-compass-rose-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m247 116.39l-20.47-5.34A100.27 100.27 0 0 0 145 29.44L139.61 9a12 12 0 0 0-23.22 0l-5.34 20.47a100.27 100.27 0 0 0-81.61 81.61L9 116.39a12 12 0 0 0 0 23.22L29.44 145a100.27 100.27 0 0 0 81.61 81.61l5.34 20.39a12 12 0 0 0 23.22 0l5.39-20.44A100.27 100.27 0 0 0 226.56 145l20.44-5.39a12 12 0 0 0 0-23.22m-46.88-12.23l-38.31-10l-10-38.31a76.32 76.32 0 0 1 48.34 48.31Zm-82.8-3.78L128 59.54l10.65 40.84L128 111ZM128 145l10.65 10.65L128 196.46l-10.65-40.84Zm-27.62-27.62L111 128l-10.65 10.65L59.54 128Zm55.24 21.3L145 128l10.65-10.65L196.46 128Zm-51.46-82.8l-10 38.31l-38.31 10a76.32 76.32 0 0 1 48.31-48.34Zm-48.31 96l38.31 10l10 38.31a76.32 76.32 0 0 1-48.31-48.35Zm96 48.31l10-38.31l38.31-10a76.32 76.32 0 0 1-48.32 48.27Z"></svg:path>`,
})
export class PhCompassRoseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseDuotoneIcon],svg[ph-compass-rose-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m248 128l-96 24l-24 96l-24-96l-96-24l96-24l24-96l24 96Z" opacity=".2"></svg:path><svg:path d="m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-95.49 22.9L139.31 128l15.14-15.14L215 128Zm-52.9 0L41 128l60.57-15.14L116.69 128Zm104.22-33.94L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97m-62.63-7.65L128 116.69l-15.14-15.14L128 41ZM109.2 50.23L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97m-59 96.57l47.2 11.8l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm62.63 7.65L128 139.31l15.14 15.14L128 215Zm33.94 51.32l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.97Z"></svg:path></svg:g>`,
})
export class PhCompassRoseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseFillIcon],svg[ph-compass-rose-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.94 120.24l-27.05-6.76a95.86 95.86 0 0 0-80.37-80.37l-6.76-27a8 8 0 0 0-15.52 0l-6.76 27.05a95.86 95.86 0 0 0-80.37 80.37l-27 6.76a8 8 0 0 0 0 15.52l27.05 6.76a95.86 95.86 0 0 0 80.37 80.37l6.76 27.05a8 8 0 0 0 15.52 0l6.76-27.05a95.86 95.86 0 0 0 80.37-80.37l27.05-6.76a8 8 0 0 0 0-15.52Zm-44.17-11L158.6 97.4l-11.8-47.17a79.88 79.88 0 0 1 58.97 58.97Zm-96.57-59L97.4 97.4l-47.17 11.8a79.88 79.88 0 0 1 58.97-58.97Zm-59 96.57l47.2 11.79l11.8 47.17a79.88 79.88 0 0 1-58.97-58.97Zm96.57 59l11.8-47.17l47.17-11.8a79.88 79.88 0 0 1-58.94 58.93Z"></svg:path>`,
})
export class PhCompassRoseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseLightIcon],svg[ph-compass-rose-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.46 122.18l-28.34-7.09a93.87 93.87 0 0 0-80.22-80.21l-7.08-28.34a6 6 0 0 0-11.64 0l-7.08 28.34a93.87 93.87 0 0 0-80.22 80.21l-28.34 7.09a6 6 0 0 0 0 11.64l28.34 7.09a93.87 93.87 0 0 0 80.22 80.21l7.08 28.34a6 6 0 0 0 11.64 0l7.08-28.34a93.87 93.87 0 0 0 80.22-80.21l28.34-7.09a6 6 0 0 0 0-11.64m-41.05-10.26L157 99.05l-12.92-51.46a81.87 81.87 0 0 1 64.33 64.33m-63-9.76L128 119.51l-17.36-17.35L128 32.74Zm-33.49-54.57L99.05 99.05l-51.46 12.87a81.87 81.87 0 0 1 64.33-64.33m-9.76 63.06L119.52 128l-17.36 17.35L32.74 128Zm-54.57 33.43L99.05 157l12.87 51.46a81.87 81.87 0 0 1-64.33-64.38m63.05 9.76L128 136.49l17.36 17.35L128 223.26Zm33.44 54.57L157 157l51.46-12.87a81.87 81.87 0 0 1-64.38 64.28m9.76-63.06L136.48 128l17.36-17.35L223.26 128Z"></svg:path>`,
})
export class PhCompassRoseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassRoseThinIcon],svg[ph-compass-rose-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 124.12l-29.68-7.42a91.84 91.84 0 0 0-80-80L131.88 7a4 4 0 0 0-7.76 0l-7.42 29.71a91.84 91.84 0 0 0-80 80L7 124.12a4 4 0 0 0 0 7.76l29.68 7.42a91.84 91.84 0 0 0 80 80l7.44 29.7a4 4 0 0 0 7.76 0l7.42-29.68a91.84 91.84 0 0 0 80-80l29.7-7.44a4 4 0 0 0 0-7.76m-38.05-9.51L155.3 100.7l-13.91-55.62a83.85 83.85 0 0 1 69.53 69.53ZM128 24.49l19.57 78.28L128 122.34l-19.57-19.57Zm-13.39 20.59L100.7 100.7l-55.62 13.91a83.85 83.85 0 0 1 69.53-69.53m-11.84 63.35L122.34 128l-19.57 19.57L24.49 128Zm-57.69 33l55.62 13.87l13.91 55.62a83.85 83.85 0 0 1-69.53-69.53ZM128 231.51l-19.57-78.28L128 133.66l19.57 19.57Zm13.39-20.59l13.91-55.62l55.62-13.91a83.85 83.85 0 0 1-69.53 69.53m11.84-63.35L133.66 128l19.57-19.57L231.51 128Z"></svg:path>`,
})
export class PhCompassRoseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassThinIcon],svg[ph-compass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.21-143.58l-64 32a4.08 4.08 0 0 0-1.79 1.79l-32 64A4 4 0 0 0 80 180a4.05 4.05 0 0 0 1.79-.42l64-32a4.08 4.08 0 0 0 1.79-1.79l32-64a4 4 0 0 0-5.37-5.37M141 141l-52.08 26L115 115l52.08-26Z"></svg:path>`,
})
export class PhCompassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolIcon],svg[ph-compass-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.12 123.64a8 8 0 1 0-14.24-7.28a79.6 79.6 0 0 1-33.08 33.5l-16.58-37.32A40 40 0 0 0 136 40.8V24a8 8 0 0 0-16 0v16.8a40 40 0 0 0-15.22 71.74L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.5 95.5 0 0 0 128 176a99.1 99.1 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.8 95.8 0 0 0 40.81-40.86M128 56a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 104a79.5 79.5 0 0 1-25-4l16.42-36.94a39.8 39.8 0 0 0 17.2 0l16.48 37.06A83.2 83.2 0 0 1 128 160"></svg:path>`,
})
export class PhCompassToolIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolBoldIcon],svg[ph-compass-tool-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.68 125.46a12 12 0 1 0-21.37-10.92a75.15 75.15 0 0 1-27.66 29.64l-13.5-30.39A44 44 0 0 0 140 37.68V24a12 12 0 0 0-24 0v13.68a44 44 0 0 0-16.15 76.11L53 219.12A12 12 0 0 0 59.13 235a11.9 11.9 0 0 0 4.87 1a12 12 0 0 0 11-7.13l23.67-53.26A99.5 99.5 0 0 0 128 180a102.8 102.8 0 0 0 29.39-4.32L181 228.87a12 12 0 0 0 11 7.13a11.85 11.85 0 0 0 4.86-1a12 12 0 0 0 6.14-15.88l-23.51-52.9a99.4 99.4 0 0 0 39.19-40.76M128 60a20 20 0 1 1-20 20a20 20 0 0 1 20-20m0 96a75.8 75.8 0 0 1-19.52-2.53l13.3-29.92a43.2 43.2 0 0 0 12.44 0l13.33 30A79 79 0 0 1 128 156"></svg:path>`,
})
export class PhCompassToolBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolDuotoneIcon],svg[ph-compass-tool-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M215.12 123.64a8 8 0 1 0-14.24-7.28a79.6 79.6 0 0 1-33.08 33.5l-16.58-37.32A40 40 0 0 0 136 40.8V24a8 8 0 0 0-16 0v16.8a40 40 0 0 0-15.22 71.74L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.5 95.5 0 0 0 128 176a99.1 99.1 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.8 95.8 0 0 0 40.81-40.86M128 56a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 104a79.5 79.5 0 0 1-25-4l16.42-36.94a39.8 39.8 0 0 0 17.2 0l16.48 37.06A83.2 83.2 0 0 1 128 160"></svg:path></svg:g>`,
})
export class PhCompassToolDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolFillIcon],svg[ph-compass-tool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.12 123.64a8 8 0 1 0-14.24-7.28a79.6 79.6 0 0 1-33.08 33.5l-18.24-41.05A36 36 0 0 0 136 44.91V24a8 8 0 0 0-16 0v20.91a36 36 0 0 0-13.56 63.9L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.5 95.5 0 0 0 128 176a99.1 99.1 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.8 95.8 0 0 0 40.81-40.86M128 160a79.5 79.5 0 0 1-25-4l18.08-40.68a35.8 35.8 0 0 0 13.88 0l18.14 40.8A83.2 83.2 0 0 1 128 160"></svg:path>`,
})
export class PhCompassToolFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolLightIcon],svg[ph-compass-tool-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.34 122.73a6 6 0 1 0-10.68-5.46a81.8 81.8 0 0 1-35.81 35.36l-18.14-40.8A38 38 0 0 0 134 42.48V24a6 6 0 0 0-12 0v18.48a38 38 0 0 0-14.71 69.35L58.52 221.56a6 6 0 1 0 11 4.88l25.9-58.26A93.4 93.4 0 0 0 128 174a97 97 0 0 0 32.68-5.69l25.84 58.13a6 6 0 1 0 11-4.88l-25.77-58a93.92 93.92 0 0 0 41.59-40.83M128 54a26 26 0 1 1-26 26a26 26 0 0 1 26-26m0 108a81.5 81.5 0 0 1-27.73-4.83l18-40.45a37.85 37.85 0 0 0 19.52 0l18 40.6A85.3 85.3 0 0 1 128 162"></svg:path>`,
})
export class PhCompassToolLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCompassToolThinIcon],svg[ph-compass-tool-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.56 121.82a4 4 0 1 0-7.12-3.64a84.05 84.05 0 0 1-38.58 37.16l-19.68-44.29A36 36 0 0 0 132 44.23V24a4 4 0 0 0-8 0v20.23a36 36 0 0 0-14.18 66.82L60.35 222.37a4 4 0 0 0 2 5.28A3.9 3.9 0 0 0 64 228a4 4 0 0 0 3.66-2.38l26.66-60A91.4 91.4 0 0 0 128 172a95.2 95.2 0 0 0 33.75-6.22l26.59 59.84A4 4 0 0 0 192 228a3.9 3.9 0 0 0 1.62-.35a4 4 0 0 0 2-5.28l-26.54-59.73a92 92 0 0 0 42.48-40.82M100 80a28 28 0 1 1 28 28a28 28 0 0 1-28-28m28 84a83.4 83.4 0 0 1-30.43-5.68l19.56-44a36 36 0 0 0 21.74 0l19.63 44.15A87.4 87.4 0 0 1 128 164"></svg:path>`,
})
export class PhCompassToolThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerIcon],svg[ph-computer-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 72a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m112-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-16 0H64v176h128Zm-64 128a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhComputerTowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerBoldIcon],svg[ph-computer-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 76a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m12 52h64a12 12 0 0 0 0-24H96a12 12 0 0 0 0 24m116-88v176a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V40a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20m-24 4H68v168h120Zm-60 124a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhComputerTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerDuotoneIcon],svg[ph-computer-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 40v176a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M88 72a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m112-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-16 0H64v176h128Zm-64 128a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhComputerTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerFillIcon],svg[ph-computer-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 168a12 12 0 1 1 12-12a12 12 0 0 1-12 12m32-80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhComputerTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerLightIcon],svg[ph-computer-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-58v176a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Zm-66 130a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhComputerTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phComputerTowerThinIcon],svg[ph-computer-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-60v176a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Zm-68 132a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhComputerTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiIcon],svg[ph-confetti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18"></svg:path>`,
})
export class PhConfettiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiBoldIcon],svg[ph-confetti-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114.32 49.8a19.79 19.79 0 0 0-32.6 7.2l-52.5 144.41A19.82 19.82 0 0 0 47.75 228a20 20 0 0 0 6.84-1.22L199 174.28a19.79 19.79 0 0 0 7.24-32.6Zm-10.13 133.41l-31.4-31.4l10.15-27.91l49.16 49.16Zm-40.42-6.51l15.53 15.56l-24.45 8.89ZM157 164L92 99l10-27.58L184.57 154ZM128 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m116.48 83.51a12 12 0 0 1-17 17l-16-16a12 12 0 0 1 17-17Zm-.69-40.13l-24 8a12 12 0 0 1-7.59-22.77l24-8a12 12 0 1 1 7.59 22.77M156.6 65.93C159.83 47.47 173.39 36 192 36c6.45 0 8.69-2.49 10-4.92a18 18 0 0 0 2-7.22V24a12 12 0 0 1 24 0c0 14.47-9.59 36-36 36c-4.94 0-10.21 1.19-11.76 10.06A12 12 0 0 1 168.43 80a12.4 12.4 0 0 1-2.08-.18a12 12 0 0 1-9.75-13.89"></svg:path>`,
})
export class PhConfettiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiDuotoneIcon],svg[ph-confetti-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89" opacity=".2"></svg:path><svg:path d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18"></svg:path></svg:g>`,
})
export class PhConfettiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiFillIcon],svg[ph-confetti-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-46.35 108.5l19.2-52.79l63.32 63.32l-52.8 19.2ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06m-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18"></svg:path>`,
})
export class PhConfettiFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiLightIcon],svg[ph-confetti-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110.08 54a13.8 13.8 0 0 0-22.73 5.05l-52.5 144.42A13.82 13.82 0 0 0 47.76 222a14 14 0 0 0 4.77-.85l144.38-52.5a13.8 13.8 0 0 0 5-22.73ZM48.43 209.87a1.79 1.79 0 0 1-2.3-2.3l15.18-41.77l28.89 28.88Zm54.21-19.71l-36.8-36.81L80.51 113L143 175.49ZM194 156.07a1.74 1.74 0 0 1-1.14 1.3L155.44 171L85 100.55l13.63-37.36a1.72 1.72 0 0 1 1.3-1.14a1.6 1.6 0 0 1 .41 0a1.72 1.72 0 0 1 1.25.53l91.88 91.88a1.73 1.73 0 0 1 .53 1.61M162 72a35.5 35.5 0 0 1 3.63-14.68C170.57 47.44 179.93 42 192 42c7.47 0 12.53-2.74 15.48-8.38A24.2 24.2 0 0 0 210 24a6 6 0 0 1 6-6a6 6 0 0 1 6 6c0 10.38-6.27 30-30 30c-7.47 0-12.53 2.74-15.48 8.38A24 24 0 0 0 174 72a6 6 0 0 1-6 6a6 6 0 0 1-6-6m-24-32V16a6 6 0 0 1 12 0v24a6 6 0 0 1-12 0m98.24 83.76a6 6 0 1 1-8.48 8.48l-16-16a6 6 0 0 1 8.48-8.48Zm5.66-46.07l-24 8a6 6 0 1 1-3.8-11.38l24-8a6 6 0 0 1 3.8 11.38"></svg:path>`,
})
export class PhConfettiLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phConfettiThinIcon],svg[ph-confetti-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108.66 55.46a11.79 11.79 0 0 0-19.43 4.31l-52.5 144.38a11.81 11.81 0 0 0 11 15.85a11.9 11.9 0 0 0 4.08-.73l144.38-52.5a11.79 11.79 0 0 0 4.31-19.43Zm-6.53 137l-38.61-38.59l16.19-44.51l66.92 66.93Zm-53 19.28a3.81 3.81 0 0 1-4.87-4.87l16.27-44.72l33.32 33.32Zm146.8-55.25a3.77 3.77 0 0 1-2.42 2.74l-38.56 14l-72.23-72.16l14-38.56a3.77 3.77 0 0 1 2.74-2.42a4.3 4.3 0 0 1 .85-.09a3.65 3.65 0 0 1 2.69 1.12L194.88 153a3.78 3.78 0 0 1 1.03 3.51ZM220 24c0 9.68-5.85 28-28 28c-8.31 0-14.18 3.29-17.42 9.79A26.1 26.1 0 0 0 172 72a4 4 0 0 1-8 0a34.1 34.1 0 0 1 3.42-13.79C170.66 51.73 177.56 44 192 44c19.29 0 20-18 20-20a4 4 0 0 1 4-4a4 4 0 0 1 4 4m-80 16V16a4 4 0 0 1 8 0v24a4 4 0 0 1-8 0m94.83 85.17a4 4 0 0 1-5.66 5.66l-16-16a4 4 0 0 1 5.66-5.66Zm6.43-49.37l-24 8a4 4 0 0 1-1.26.2a4 4 0 0 1-1.27-7.79l24-8a4 4 0 0 1 2.53 7.59"></svg:path>`,
})
export class PhConfettiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentIcon],svg[ph-contactless-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M97.07 100.26a59.33 59.33 0 0 1 0 55.48a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48m56-32a126.67 126.67 0 0 1 0 119.54a8 8 0 0 1-14.07-7.57a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54Zm-28 16a93 93 0 0 1 0 87.52a8 8 0 1 1-14.12-7.52a77 77 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52"></svg:path>`,
})
export class PhContactlessPaymentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentBoldIcon],svg[ph-contactless-payment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3a12 12 0 1 1-21.17-11.3a106.7 106.7 0 0 0 0-100.7a12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23a73 73 0 0 1 0 68.72a12 12 0 1 0 21.18 11.28a97 97 0 0 0 0-91.28a12 12 0 0 0-16.18-4.95M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhContactlessPaymentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentDuotoneIcon],svg[ph-contactless-payment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M97.07 100.26a59.33 59.33 0 0 1 0 55.48a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48m56-32a126.67 126.67 0 0 1 0 119.54a8 8 0 0 1-14.07-7.57a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54Zm-28 16a93 93 0 0 1 0 87.52a8 8 0 1 1-14.12-7.52a77 77 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52"></svg:path></svg:g>`,
})
export class PhContactlessPaymentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentFillIcon],svg[ph-contactless-payment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M97.07 155.74a8 8 0 1 1-14.14-7.48a42.79 42.79 0 0 0 0-40.52a8 8 0 0 1 14.14-7.48a59.33 59.33 0 0 1 0 55.48m28 16a8 8 0 1 1-14.12-7.52a77.07 77.07 0 0 0 0-72.48a8 8 0 1 1 14.12-7.52a93 93 0 0 1-.01 87.54Zm28 16a8 8 0 0 1-14.07-7.51a110.62 110.62 0 0 0 0-104.46a8 8 0 0 1 14.12-7.54a126.67 126.67 0 0 1-.05 119.54Z"></svg:path>`,
})
export class PhContactlessPaymentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentLightIcon],svg[ph-contactless-payment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.31 101.2a57.37 57.37 0 0 1 0 53.6a6 6 0 0 1-10.62-5.6a44.75 44.75 0 0 0 0-42.4a6 6 0 1 1 10.62-5.6m47.86-34.49a6 6 0 0 0-2.46 8.12a112.67 112.67 0 0 1 0 106.34a6 6 0 1 0 10.58 5.66a124.65 124.65 0 0 0 0-117.66a6 6 0 0 0-8.12-2.46m-28 16a6 6 0 0 0-2.48 8.12a79 79 0 0 1 0 74.36a6 6 0 0 0 10.6 5.64a91 91 0 0 0 0-85.64a6 6 0 0 0-8.11-2.49ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhContactlessPaymentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentThinIcon],svg[ph-contactless-payment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.54 102.13a55.39 55.39 0 0 1 0 51.74A4 4 0 0 1 90 156a4.1 4.1 0 0 1-1.87-.46a4 4 0 0 1-1.67-5.41a46.73 46.73 0 0 0 0-44.26a4 4 0 1 1 7.08-3.74m50.58-33.66a4 4 0 0 0-1.65 5.41a114.67 114.67 0 0 1 0 108.24a4 4 0 1 0 7.06 3.76a122.65 122.65 0 0 0 0-115.76a4 4 0 0 0-5.41-1.65m-28 16a4 4 0 0 0-1.65 5.41a81 81 0 0 1 0 76.24a4 4 0 1 0 7.06 3.76a89 89 0 0 0 0-83.76a4 4 0 0 0-5.41-1.65M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92a92.1 92.1 0 0 0 92-92"></svg:path>`,
})
export class PhContactlessPaymentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlIcon],svg[ph-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 125.66a8 8 0 0 1-11.32 0L128 59.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhControlIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlBoldIcon],svg[ph-control-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 128.49a12 12 0 0 1-17 0L128 65l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0l72 72a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhControlBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlDuotoneIcon],svg[ph-control-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 120H56l72-72Z" opacity=".2"></svg:path><svg:path d="m205.66 114.34l-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66M75.31 112L128 59.31L180.69 112Z"></svg:path></svg:g>`,
})
export class PhControlDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlFillIcon],svg[ph-control-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.39 123.06A8 8 0 0 1 200 128H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0l72 72a8 8 0 0 1 1.73 8.72"></svg:path>`,
})
export class PhControlFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlLightIcon],svg[ph-control-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 124.24a6 6 0 0 1-8.48 0L128 56.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0l72 72a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhControlLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phControlThinIcon],svg[ph-control-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 122.83a4 4 0 0 1-5.66 0L128 53.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhControlThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieIcon],svg[ph-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.49 163.51a12 12 0 1 1-17 0a12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0a12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0a12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17a12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19a88 88 0 1 0 95.08 95.08"></svg:path>`,
})
export class PhCookieIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieBoldIcon],svg[ph-cookie-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.31 160.69a16 16 0 1 1-22.62 0a16 16 0 0 1 22.62 0m-86.62-8a16 16 0 1 0 22.62 0a16 16 0 0 0-22.62 0m14.62-33.38a16 16 0 1 0-22.62 0a16 16 0 0 0 22.62 0m48-6.62a16 16 0 1 0 0 22.62a16 16 0 0 0 0-22.62M236 128A108 108 0 1 1 128 20a12 12 0 0 1 12 12a36 36 0 0 0 36 36a12 12 0 0 1 12 12a36 36 0 0 0 36 36a12 12 0 0 1 12 12m-24.67 10.65A60.17 60.17 0 0 1 165 91a60.17 60.17 0 0 1-47.66-46.32a84 84 0 1 0 94 94Z"></svg:path>`,
})
export class PhCookieBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieDuotoneIcon],svg[ph-cookie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a48 48 0 0 0 48 48a48 48 0 0 0 48 48" opacity=".2"></svg:path><svg:path d="M164.49 163.51a12 12 0 1 1-17 0a12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0a12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0a12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17a12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8a40 40 0 0 0 40 40a8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19a88 88 0 1 0 95.08 95.08"></svg:path></svg:g>`,
})
export class PhCookieDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieFillIcon],svg[ph-cookie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 120a40 40 0 0 1-40-40a8 8 0 0 0-8-8a40 40 0 0 1-40-40a8 8 0 0 0-8-8a104 104 0 1 0 104 104a8 8 0 0 0-8-8M75.51 99.51a12 12 0 1 1 0 17a12 12 0 0 1 0-17m25 73a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0a12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17a12 12 0 0 1-.02 16.98Z"></svg:path>`,
})
export class PhCookieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieLightIcon],svg[ph-cookie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M163.07 164.93a10 10 0 1 1-14.14 0a10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0a10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53a90 90 0 1 0 95.47 95.48Z"></svg:path>`,
})
export class PhCookieLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookieThinIcon],svg[ph-cookie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.66 166.34a8 8 0 1 1-11.32 0a8 8 0 0 1 11.32 0m-75.32-8a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0m3.32-56a8 8 0 1 0 0 11.32a8 8 0 0 0 0-11.32m36.68 16a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0M228 128A100 100 0 1 1 128 28a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4m-8.08 3.84a52.08 52.08 0 0 1-47.78-48a52.08 52.08 0 0 1-48-47.78a92 92 0 1 0 95.76 95.76Z"></svg:path>`,
})
export class PhCookieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotIcon],svg[ph-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v24l19.2-14.4a8 8 0 0 1 9.6 12.8M208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z"></svg:path>`,
})
export class PhCookingPotIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotBoldIcon],svg[ph-cooking-pot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.76 93A12 12 0 0 0 237 90.24l-9 6.44V80a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v16.68l-9-6.44a12 12 0 1 0-14 19.52l23 16.42V184a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36v-57.82l23-16.42A12 12 0 0 0 253.76 93M204 184a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V92h152ZM76 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhCookingPotBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotDuotoneIcon],svg[ph-cooking-pot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v104a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V80Z" opacity=".2"></svg:path><svg:path d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V80a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v24l19.2-14.4a8 8 0 0 1 9.6 12.8M208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhCookingPotDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotFillIcon],svg[ph-cooking-pot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m94.4 35.2a8 8 0 0 0-11.2-1.6L224 104V80a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v24L12.8 89.6a8 8 0 0 0-9.6 12.8L32 124v60a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-60l28.8-21.6a8 8 0 0 0 1.6-11.2"></svg:path>`,
})
export class PhCookingPotFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotLightIcon],svg[ph-cooking-pot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 48V16a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m91.6 46.8L222 123v61a30 30 0 0 1-30 30H64a30 30 0 0 1-30-30v-61L4.4 100.8a6 6 0 0 1 7.2-9.6L34 108V80a6 6 0 0 1 6-6h176a6 6 0 0 1 6 6v28l22.4-16.8a6 6 0 0 1 7.2 9.6M210 86H46v98a18 18 0 0 0 18 18h128a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhCookingPotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCookingPotThinIcon],svg[ph-cooking-pot-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 48V16a4 4 0 0 1 8 0v32a4 4 0 0 1-8 0m36 4a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m32 0a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4m90.4 47.2L220 122v62a28 28 0 0 1-28 28H64a28 28 0 0 1-28-28v-62L5.6 99.2a4 4 0 0 1 4.8-6.4L36 112V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v32l25.6-19.2a4 4 0 1 1 4.8 6.4M212 84H44v100a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhCookingPotThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyIcon],svg[ph-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"></svg:path>`,
})
export class PhCopyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyBoldIcon],svg[ph-copy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z"></svg:path>`,
})
export class PhCopyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyDuotoneIcon],svg[ph-copy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v128h-48V88H88V40Z" opacity=".2"></svg:path><svg:path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"></svg:path></svg:g>`,
})
export class PhCopyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyFillIcon],svg[ph-copy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-8 128h-32V88a8 8 0 0 0-8-8H96V48h112Z"></svg:path>`,
})
export class PhCopyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyLightIcon],svg[ph-copy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 34H88a6 6 0 0 0-6 6v42H40a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h128a6 6 0 0 0 6-6v-42h42a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-54 176H46V94h116Zm48-48h-36V88a6 6 0 0 0-6-6H94V46h116Z"></svg:path>`,
})
export class PhCopyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleIcon],svg[ph-copy-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCopySimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleBoldIcon],svg[ph-copy-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 64H40a12 12 0 0 0-12 12v140a12 12 0 0 0 12 12h140a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12m-12 140H52V88h116Zm60-164v140a12 12 0 0 1-24 0V52H76a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCopySimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleDuotoneIcon],svg[ph-copy-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 72v144H40V72Z" opacity=".2"></svg:path><svg:path d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCopySimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleFillIcon],svg[ph-copy-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8m24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCopySimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleLightIcon],svg[ph-copy-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 66H40a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h144a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6m-6 144H46V78h132Zm44-170v144a6 6 0 0 1-12 0V46H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCopySimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopySimpleThinIcon],svg[ph-copy-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 68H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4V72a4 4 0 0 0-4-4m-4 144H44V76h136Zm40-172v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCopySimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyThinIcon],svg[ph-copy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-44h44a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4m-52 176H44V92h120Zm48-48h-40V88a4 4 0 0 0-4-4H92V44h120Z"></svg:path>`,
})
export class PhCopyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftIcon],svg[ph-copyleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a48 48 0 0 1-86.4 28.81a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 0 1 176 128"></svg:path>`,
})
export class PhCopyleftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftBoldIcon],svg[ph-copyleft-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m52-84a52 52 0 0 1-93.59 31.21a12 12 0 1 1 19.18-14.41a28 28 0 1 0 0-33.6a12 12 0 1 1-19.18-14.41A52 52 0 0 1 180 128"></svg:path>`,
})
export class PhCopyleftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftDuotoneIcon],svg[ph-copyleft-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a48 48 0 0 1-86.4 28.81a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 0 1 176 128"></svg:path></svg:g>`,
})
export class PhCopyleftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftFillIcon],svg[ph-copyleft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 120a47.66 47.66 0 0 1-38.4-19.19a8 8 0 0 1 12.8-9.61a32 32 0 1 0 0-38.4a8 8 0 0 1-12.8-9.61A48 48 0 1 1 128 176m0-152a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCopyleftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftLightIcon],svg[ph-copyleft-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46-90a46 46 0 0 1-82.8 27.61a6 6 0 0 1 9.6-7.21a34 34 0 1 0 0-40.8a6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128"></svg:path>`,
})
export class PhCopyleftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyleftThinIcon],svg[ph-copyleft-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m44-92a44 44 0 0 1-79.2 26.41a4 4 0 0 1 6.4-4.81a36 36 0 1 0 0-43.2a4 4 0 0 1-6.4-4.81A44 44 0 0 1 172 128"></svg:path>`,
})
export class PhCopyleftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightIcon],svg[ph-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></svg:path>`,
})
export class PhCopyrightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightBoldIcon],svg[ph-copyright-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m41.59-52.79a52 52 0 1 1 0-62.43a12 12 0 1 1-19.18 14.42a28 28 0 1 0 0 33.6a12 12 0 1 1 19.18 14.41"></svg:path>`,
})
export class PhCopyrightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightDuotoneIcon],svg[ph-copyright-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></svg:path></svg:g>`,
})
export class PhCopyrightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightFillIcon],svg[ph-copyright-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 104a31.8 31.8 0 0 0 25.61-12.8a8 8 0 1 1 12.79 9.61a48 48 0 1 1 0-57.63a8 8 0 1 1-12.79 9.61A32 32 0 1 0 128 160m0-136a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCopyrightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightLightIcon],svg[ph-copyright-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m-34-90a34 34 0 0 0 61.2 20.4a6 6 0 0 1 9.6 7.21a46 46 0 1 1 0-55.22a6 6 0 0 1-9.6 7.21A34 34 0 0 0 94 128"></svg:path>`,
})
export class PhCopyrightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCopyrightThinIcon],svg[ph-copyright-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.2-65.59a44 44 0 1 1 0-52.82a4 4 0 0 1-6.4 4.81a36 36 0 1 0 0 43.2a4 4 0 0 1 6.4 4.81"></svg:path>`,
})
export class PhCopyrightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInIcon],svg[ph-corners-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96V48a8 8 0 0 1 16 0v40h40a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m112 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-40h40a8 8 0 0 0 0-16M96 40a8 8 0 0 0-8 8v40H48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCornersInIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInBoldIcon],svg[ph-corners-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 96V48a12 12 0 0 1 24 0v36h36a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m-52 52H48a12 12 0 0 0 0 24h36v36a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12m112 0h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-36h36a12 12 0 0 0 0-24M96 36a12 12 0 0 0-12 12v36H48a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCornersInBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInDuotoneIcon],svg[ph-corners-in-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v128a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 96V48a8 8 0 0 1 16 0v40h40a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8m112 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-40h40a8 8 0 0 0 0-16M96 40a8 8 0 0 0-8 8v40H48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCornersInDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInFillIcon],svg[ph-corners-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96V48a8 8 0 0 1 13.66-5.66l48 48A8 8 0 0 1 208 104h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0-5.66 13.66l48 48A8 8 0 0 0 104 208v-48a8 8 0 0 0-8-8m3.06-111.39a8 8 0 0 0-8.72 1.73l-48 48A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.94-7.39M208 152h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66l48-48A8 8 0 0 0 208 152"></svg:path>`,
})
export class PhCornersInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInLightIcon],svg[ph-corners-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M154 96V48a6 6 0 0 1 12 0v42h42a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m-58 58H48a6 6 0 0 0 0 12h42v42a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6m112 0h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-42h42a6 6 0 0 0 0-12M96 42a6 6 0 0 0-6 6v42H48a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCornersInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersInThinIcon],svg[ph-corners-in-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 96V48a4 4 0 0 1 8 0v44h44a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m-60 60H48a4 4 0 0 0 0 8h44v44a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m112 0h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-44h44a4 4 0 0 0 0-8M96 44a4 4 0 0 0-4 4v44H48a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCornersInThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutIcon],svg[ph-corners-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M88 200H56v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m120-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V56h32a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhCornersOutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutBoldIcon],svg[ph-corners-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M88 196H60v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m120-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M88 36H48a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0V60h28a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhCornersOutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutDuotoneIcon],svg[ph-corners-out-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160H48V48Z" opacity=".2"></svg:path><svg:path d="M216 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M88 200H56v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m120-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V56h32a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhCornersOutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutFillIcon],svg[ph-corners-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M93.66 202.34A8 8 0 0 1 88 216H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 13.66-5.66ZM88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66l40-40A8 8 0 0 0 88 40m123.06 120.61a8 8 0 0 0-8.72 1.73l-40 40A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39M208 40h-40a8 8 0 0 0-5.66 13.66l40 40A8 8 0 0 0 216 88V48a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCornersOutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutLightIcon],svg[ph-corners-out-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M88 202H54v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m120-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M88 42H48a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0V54h34a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhCornersOutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCornersOutThinIcon],svg[ph-corners-out-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M88 204H52v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m120-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M88 44H48a4 4 0 0 0-4 4v40a4 4 0 0 0 8 0V52h36a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhCornersOutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchIcon],svg[ph-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 106.17V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v34.17A16 16 0 0 0 8 120v48a16 16 0 0 0 16 16h8v16a8 8 0 0 0 16 0v-16h160v16a8 8 0 0 0 16 0v-16h8a16 16 0 0 0 16-16v-48a16 16 0 0 0-8-13.83M224 104h-8a16 16 0 0 0-16 16v16h-64V72h88ZM120 72v64H56v-16a16 16 0 0 0-16-16h-8V72Zm112 96H24v-48h16v24a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-24h16Z"></svg:path>`,
})
export class PhCouchIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchBoldIcon],svg[ph-couch-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 104V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a20 20 0 0 0-8 16v48a20 20 0 0 0 20 20h4v12a12 12 0 0 0 24 0v-12h152v12a12 12 0 0 0 24 0v-12h4a20 20 0 0 0 20-20v-48a20 20 0 0 0-8-16m-24-4h-12a20 20 0 0 0-20 20v4h-48V76h80ZM116 76v48H68v-4a20 20 0 0 0-20-20H36V76Zm112 88H28v-40h16v12a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-12h16Z"></svg:path>`,
})
export class PhCouchBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchDuotoneIcon],svg[ph-couch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 120v48a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8V72a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8v40a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M240 106.17V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v34.17A16 16 0 0 0 8 120v48a16 16 0 0 0 16 16h8v16a8 8 0 0 0 16 0v-16h160v16a8 8 0 0 0 16 0v-16h8a16 16 0 0 0 16-16v-48a16 16 0 0 0-8-13.83M224 104h-8a16 16 0 0 0-16 16v16h-64V72h88ZM120 72v64H56v-16a16 16 0 0 0-16-16h-8V72Zm112 96H24v-48h16v24a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-24h16Z"></svg:path></svg:g>`,
})
export class PhCouchDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchFillIcon],svg[ph-couch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 100V72a16 16 0 0 1 16-16h84a4 4 0 0 1 4 4v76H64a32 32 0 0 0-32-32H20a4 4 0 0 1-4-4m208 4h12a4 4 0 0 0 4-4V72a16 16 0 0 0-16-16h-84a4 4 0 0 0-4 4v76h56a32 32 0 0 1 32-32m8 16h-8a16 16 0 0 0-16 16v8a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-8a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v15.73a8.18 8.18 0 0 0 7.47 8.27a8 8 0 0 0 8.53-8v-16h160v15.73a8.17 8.17 0 0 0 7.47 8.25a8 8 0 0 0 8.53-8V184h8a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCouchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchLightIcon],svg[ph-couch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 107.37V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v35.37A14 14 0 0 0 10 120v48a14 14 0 0 0 14 14h10v18a6 6 0 0 0 12 0v-18h164v18a6 6 0 0 0 12 0v-18h10a14 14 0 0 0 14-14v-48a14 14 0 0 0-8-12.63M226 72v34h-10a14 14 0 0 0-14 14v18h-68V70h90a2 2 0 0 1 2 2M32 70h90v68H54v-18a14 14 0 0 0-14-14H30V72a2 2 0 0 1 2-2m202 98a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCouchLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCouchThinIcon],svg[ph-couch-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 108.7V72a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v36.7a12 12 0 0 0-8 11.3v48a12 12 0 0 0 12 12h12v20a4 4 0 0 0 8 0v-20h168v20a4 4 0 0 0 8 0v-20h12a12 12 0 0 0 12-12v-48a12 12 0 0 0-8-11.3M228 72v36h-12a12 12 0 0 0-12 12v20h-72V68h92a4 4 0 0 1 4 4M32 68h92v72H52v-20a12 12 0 0 0-12-12H28V72a4 4 0 0 1 4-4m204 100a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v24a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-24a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCouchThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballIcon],svg[ph-court-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 112h-8a32 32 0 0 1 0-64h8ZM32 96h8a32 32 0 0 1 0 64h-8Zm0 80h8a48 48 0 0 0 0-96h-8V64h88v128H32Zm192 16h-88V64h88v16h-8a48 48 0 0 0 0 96h8z"></svg:path>`,
})
export class PhCourtBasketballIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballBoldIcon],svg[ph-court-basketball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 112h-4a28 28 0 0 1 0-56h4ZM36 100h4a28 28 0 0 1 0 56h-4Zm0 80h4a52 52 0 0 0 0-104h-4v-8h80v120H36Zm104 8V68h80v8h-4a52 52 0 0 0 0 104h4v8Z"></svg:path>`,
})
export class PhCourtBasketballBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballDuotoneIcon],svg[ph-court-basketball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 88v80h-16a40 40 0 0 1 0-80ZM40 88H24v80h16a40 40 0 0 0 0-80" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 112h-8a32 32 0 0 1 0-64h8ZM32 96h8a32 32 0 0 1 0 64h-8Zm0 80h8a48 48 0 0 0 0-96h-8V64h88v128H32Zm192 16h-88V64h88v16h-8a48 48 0 0 0 0 96h8z"></svg:path></svg:g>`,
})
export class PhCourtBasketballDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballFillIcon],svg[ph-court-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 92.23v71.54a4 4 0 0 1-4.41 4a40 40 0 0 1 0-79.52a4 4 0 0 1 4.41 3.98M20.41 167.76a40 40 0 0 0 0-79.52a4 4 0 0 0-4.41 4v71.54a4 4 0 0 0 4.41 3.98M116 48H32a16 16 0 0 0-16 16v4.13a4 4 0 0 0 3.8 4a56 56 0 0 1 0 111.74a4 4 0 0 0-3.8 4V192a16 16 0 0 0 16 16h84a4 4 0 0 0 4-4V52a4 4 0 0 0-4-4m108 0h-84a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h84a16 16 0 0 0 16-16v-4.13a4 4 0 0 0-3.8-4a56 56 0 0 1 0-111.74a4 4 0 0 0 3.8-4V64a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCourtBasketballFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballLightIcon],svg[ph-court-basketball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 112h-10a34 34 0 0 1 0-68h10ZM30 94h10a34 34 0 0 1 0 68H30Zm0 98v-18h10a46 46 0 0 0 0-92H30V64a2 2 0 0 1 2-2h90v132H32a2 2 0 0 1-2-2m194 2h-90V62h90a2 2 0 0 1 2 2v18h-10a46 46 0 0 0 0 92h10v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCourtBasketballLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCourtBasketballThinIcon],svg[ph-court-basketball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 112h-12a36 36 0 0 1 0-72h12ZM28 92h12a36 36 0 0 1 0 72H28Zm0 100v-20h12a44 44 0 0 0 0-88H28V64a4 4 0 0 1 4-4h92v136H32a4 4 0 0 1-4-4m196 4h-92V60h92a4 4 0 0 1 4 4v20h-12a44 44 0 0 0 0 88h12v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCourtBasketballThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowIcon],svg[ph-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-76-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m56 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88.39-13.88A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19a56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0a40 40 0 0 0 40 40h48a40 40 0 0 0 40-40a8 8 0 0 1 16 0a55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45a15.82 15.82 0 0 1-3.3 13.12M72 152.8a40.6 40.6 0 0 1 8-.8h96a40.6 40.6 0 0 1 8 .8V104a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24ZM56 112v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m32-80a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z"></svg:path>`,
})
export class PhCowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowBoldIcon],svg[ph-cow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m95.48 12.66A20 20 0 0 1 232 132h-28v35.05A38 38 0 0 1 182 236H74a38 38 0 0 1-22-68.95V132H24a20 20 0 0 1-19.61-23.83a60.15 60.15 0 0 1 52-47.76A59.7 59.7 0 0 1 44 24a12 12 0 0 1 24 0a36 36 0 0 0 36 36h48a36 36 0 0 0 36-36a12 12 0 0 1 24 0a59.7 59.7 0 0 1-12.35 36.41a60.15 60.15 0 0 1 52 47.76a19.78 19.78 0 0 1-4.17 16.49M76 160h104v-56a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20ZM56.5 84.64A36.15 36.15 0 0 0 29.26 108H52v-4a43.7 43.7 0 0 1 4.5-19.36M196 198a14 14 0 0 0-14-14H74a14 14 0 0 0 0 28h108a14 14 0 0 0 14-14m30.74-90a36.15 36.15 0 0 0-27.24-23.36A43.7 43.7 0 0 1 204 104v4Z"></svg:path>`,
})
export class PhCowBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowDuotoneIcon],svg[ph-cow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32M64 104a32 32 0 0 1 32-32H63.22a48 48 0 0 0-47.07 38.53A8 8 0 0 0 24 120h40Zm175.85 6.53A48 48 0 0 0 192.78 72H160a32 32 0 0 1 32 32v16h40a8 8 0 0 0 7.85-9.47" opacity=".2"></svg:path><svg:path d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-76-72a12 12 0 1 0 12 12a12 12 0 0 0-12-12m56 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12m88.39 10.12A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19a56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0a40 40 0 0 0 40 40h48a40 40 0 0 0 40-40a8 8 0 0 1 16 0a55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45a15.82 15.82 0 0 1-3.3 13.12M56 112v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m-16-39.2V104a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v48.8a40.6 40.6 0 0 1 8-.8h96a40.6 40.6 0 0 1 8 .8m48-40.8a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z"></svg:path></svg:g>`,
})
export class PhCowDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowFillIcon],svg[ph-cow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m68.39-61.88A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19a56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0a40 40 0 0 0 40 40h48a40 40 0 0 0 40-40a8 8 0 0 1 16 0a55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45a15.82 15.82 0 0 1-3.3 13.12M144 124a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-56 0a12 12 0 1 0 12-12a12 12 0 0 0-12 12m-32-12v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m32-80a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z"></svg:path>`,
})
export class PhCowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowLightIcon],svg[ph-cow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 192a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6m74-6h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m-76-72a10 10 0 1 0 10 10a10 10 0 0 0-10-10m56 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m86.85 6.85A14 14 0 0 1 232 126h-34v35.05A38 38 0 0 1 176 230H80a38 38 0 0 1-22-68.95V126H24a14 14 0 0 1-10.87-5.15a13.82 13.82 0 0 1-2.88-11.5A54.12 54.12 0 0 1 63.22 66h6.89A53.93 53.93 0 0 1 50 24a6 6 0 0 1 12 0a42 42 0 0 0 42 42h48a42 42 0 0 0 42-42a6 6 0 0 1 12 0a53.93 53.93 0 0 1-20.11 42h6.89a54.12 54.12 0 0 1 52.95 43.35a13.82 13.82 0 0 1-2.88 11.5M58 114v-10a37.87 37.87 0 0 1 10.32-26h-5.1A42.08 42.08 0 0 0 22 111.7a1.83 1.83 0 0 0 .4 1.55a2 2 0 0 0 1.6.75Zm144 78a26 26 0 0 0-26-26H80a26 26 0 0 0 0 52h96a26 26 0 0 0 26-26m-16-36.66V104a26 26 0 0 0-26-26H96a26 26 0 0 0-26 26v51.34A38 38 0 0 1 80 154h96a38 38 0 0 1 10 1.34m48-43.64A42.08 42.08 0 0 0 192.78 78h-5.1A37.87 37.87 0 0 1 198 104v10h34a2 2 0 0 0 1.58-.75a1.83 1.83 0 0 0 .42-1.55"></svg:path>`,
})
export class PhCowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowThinIcon],svg[ph-cow-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 192a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m76-4h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m-76-72a8 8 0 1 0 8 8a8 8 0 0 0-8-8m56 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m85.3 3.59A12 12 0 0 1 232 124h-36v38.08A36 36 0 0 1 176 228H80a36 36 0 0 1-20-65.92V124H24a12 12 0 0 1-9.32-4.41a11.82 11.82 0 0 1-2.47-9.85A52.11 52.11 0 0 1 63.22 68h13.12A52 52 0 0 1 52 24a4 4 0 0 1 8 0a44.05 44.05 0 0 0 44 44h48a44.05 44.05 0 0 0 44-44a4 4 0 0 1 8 0a52 52 0 0 1-24.34 44h13.12a52.11 52.11 0 0 1 51 41.74a11.82 11.82 0 0 1-2.48 9.85M60 116v-12a35.94 35.94 0 0 1 13.41-28H63.22a44.09 44.09 0 0 0-43.14 35.31a3.82 3.82 0 0 0 .81 3.21A4 4 0 0 0 24 116Zm116 48H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56m12-5.94V104a28 28 0 0 0-28-28H96a28 28 0 0 0-28 28v54.06A35.9 35.9 0 0 1 80 156h96a35.9 35.9 0 0 1 12 2.06m47.92-46.75A44.09 44.09 0 0 0 192.78 76h-10.19A35.94 35.94 0 0 1 196 104v12h36a4 4 0 0 0 3.13-1.48a3.82 3.82 0 0 0 .79-3.21"></svg:path>`,
})
export class PhCowThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatIcon],svg[ph-cowboy-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120a8 8 0 0 0-6.78 3.76A180 180 0 0 1 195.41 143l-17.09-89.93a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38l-.13-.1a16 16 0 0 0-25.72 9.53L60.59 143a179 179 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80M93.41 56l24.47 20.4l.12.1a15.92 15.92 0 0 0 20 0l.12-.1L162.59 56l13.68 72H79.73ZM40 184a24 24 0 0 1-4.14-47.64C51.28 159.83 67.73 174.65 82.4 184Zm88 0c-.33 0-25.49-.4-53.86-26.6l2.54-13.4h102.63l2.54 13.35a113.3 113.3 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65m88 0h-42.4c14.67-9.35 31.12-24.17 46.54-47.64A24 24 0 0 1 216 184"></svg:path>`,
})
export class PhCowboyHatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatBoldIcon],svg[ph-cowboy-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 116a12 12 0 0 0-10.18 5.64q-2.48 4-5 7.57l-14.57-76.88A20 20 0 0 0 150.1 40.4l-.18.15L128 58.8l-21.92-18.25l-.18-.15a20 20 0 0 0-32.15 11.9l-14.61 76.92q-2.49-3.61-5-7.57A12 12 0 0 0 44 116a44 44 0 1 0 0 88h168a44 44 0 1 0 0-88M96.07 63.44l19.25 16l.19.15a19.89 19.89 0 0 0 25 0l.19-.15l19.25-16L171.44 124H84.56ZM44 180a20 20 0 0 1-5.94-39.1c11.7 17.38 23.7 30 35 39.1Zm35-26.75l1-5.25h96l1 5.25c-25.33 25-46.71 26.65-49 26.75c-2.29-.1-23.67-1.71-49-26.75M212 180h-29c11.28-9.12 23.28-21.72 35-39.1a20 20 0 0 1-6 39.1"></svg:path>`,
})
export class PhCowboyHatBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatDuotoneIcon],svg[ph-cowboy-hat-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M190.53 160.18C158.13 192 128 192 128 192s-30.13 0-62.53-31.82L70.06 136h115.88Z" opacity=".2"></svg:path><svg:path d="M216 120a8 8 0 0 0-6.78 3.76A180 180 0 0 1 195.41 143l-17.09-89.93a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38l-.13-.1a16 16 0 0 0-25.72 9.53L60.59 143a179 179 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80M93.41 56l24.47 20.4l.12.1a15.92 15.92 0 0 0 20 0l.12-.1L162.59 56l13.68 72H79.73ZM40 184a24 24 0 0 1-4.14-47.64C51.28 159.83 67.73 174.65 82.4 184Zm88 0c-.33 0-25.49-.4-53.86-26.6l2.54-13.4h102.63l2.54 13.35a113.3 113.3 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65m88 0h-42.4c14.67-9.35 31.12-24.17 46.54-47.64A24 24 0 0 1 216 184"></svg:path></svg:g>`,
})
export class PhCowboyHatDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatFillIcon],svg[ph-cowboy-hat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 120a8 8 0 0 0-6.78 3.76A180 180 0 0 1 195.41 143l-1.63-8.57l-15.46-81.36a16 16 0 0 0-25.72-9.55l-.13.1L128 64l-24.47-20.38l-.13-.1a16 16 0 0 0-25.72 9.53l-15.45 81.33l-1.64 8.62a179 179 0 0 1-13.81-19.25A8 8 0 0 0 40 120a40 40 0 0 0 0 80h176a40 40 0 0 0 0-80M76.68 144h102.63l2.54 13.35a113.3 113.3 0 0 1-27.35 19c-15.4 7.42-26.44 7.65-26.5 7.65c-.33 0-25.49-.4-53.86-26.6Z"></svg:path>`,
})
export class PhCowboyHatFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatLightIcon],svg[ph-cowboy-hat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 122a6 6 0 0 0-5.09 2.82a177 177 0 0 1-16.69 22.65l-17.87-94a14 14 0 0 0-22.5-8.35l-.1.08l-24.53 20.39a2 2 0 0 1-2.44 0l-24.53-20.43l-.1-.08a14 14 0 0 0-22.5 8.34l-17.88 94.07a178 178 0 0 1-16.68-22.67A6 6 0 0 0 40 122a38 38 0 0 0 0 76h176a38 38 0 0 0 0-76M91.44 55.65a2 2 0 0 1 3.18-1.22l24.54 20.43l.09.08a13.93 13.93 0 0 0 17.5 0l.09-.08l24.54-20.43a2 2 0 0 1 3.18 1.23L178.69 130H77.31ZM40 186a26 26 0 0 1-3.17-51.81c17.67 27.25 36.7 42.86 52.79 51.81Zm88 0c-.34 0-26.71-.41-56-27.91L75 142h106l3 16.05a115.8 115.8 0 0 1-28.89 20.19C139.38 185.81 128.08 186 128 186m88 0h-49.62c16.09-8.95 35.12-24.56 52.79-51.81A26 26 0 0 1 216 186"></svg:path>`,
})
export class PhCowboyHatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCowboyHatThinIcon],svg[ph-cowboy-hat-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 124a4 4 0 0 0-3.39 1.88A175 175 0 0 1 193 151.81l-18.62-98A12 12 0 0 0 155 46.69l-24.5 20.44a4 4 0 0 1-4.94.05L100.9 46.64a12 12 0 0 0-19.29 7.15L63 151.81a175 175 0 0 1-19.6-25.93A4 4 0 0 0 40 124a36 36 0 0 0 0 72h176a36 36 0 0 0 0-72M89.48 55.28a4 4 0 0 1 6.37-2.44l24.65 20.54a12 12 0 0 0 15.06-.06l24.53-20.43a3.92 3.92 0 0 1 3.89-.63a4 4 0 0 1 2.55 3L181.11 132H74.89ZM40 188a28 28 0 0 1-2.15-55.92C58.3 164 80.59 180 97.9 188Zm88 0c-.27 0-11.78-.21-27.77-7.84a118.2 118.2 0 0 1-30.43-21.4L73.37 140h109.26l3.56 18.76a118.2 118.2 0 0 1-30.43 21.4c-15.99 7.63-27.5 7.84-27.76 7.84m88 0h-57.9c17.31-8 39.6-24 60.05-55.92A28 28 0 0 1 216 188"></svg:path>`,
})
export class PhCowboyHatThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuIcon],svg[ph-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 96h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-8 48h-32v-32h32Zm88 0h-16v-32h16a8 8 0 0 0 0-16h-16V56a16 16 0 0 0-16-16h-40V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H56a16 16 0 0 0-16 16v40H24a8 8 0 0 0 0 16h16v32H24a8 8 0 0 0 0 16h16v40a16 16 0 0 0 16 16h40v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h40a16 16 0 0 0 16-16v-40h16a8 8 0 0 0 0-16m-32 56H56V56h144z"></svg:path>`,
})
export class PhCpuIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuBoldIcon],svg[ph-cpu-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 88h-56a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-56a12 12 0 0 0-12-12m-12 56h-32v-32h32Zm88-4h-12v-24h12a12 12 0 0 0 0-24h-12V56a20 20 0 0 0-20-20h-36V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H56a20 20 0 0 0-20 20v36H24a12 12 0 0 0 0 24h12v24H24a12 12 0 0 0 0 24h12v36a20 20 0 0 0 20 20h36v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h36a20 20 0 0 0 20-20v-36h12a12 12 0 0 0 0-24m-36 56H60V60h136Z"></svg:path>`,
})
export class PhCpuBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuDuotoneIcon],svg[ph-cpu-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48H56a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-48 104h-48v-48h48Z" opacity=".2"></svg:path><svg:path d="M152 96h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-8 48h-32v-32h32Zm88 0h-16v-32h16a8 8 0 0 0 0-16h-16V56a16 16 0 0 0-16-16h-40V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H56a16 16 0 0 0-16 16v40H24a8 8 0 0 0 0 16h16v32H24a8 8 0 0 0 0 16h16v40a16 16 0 0 0 16 16h40v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h40a16 16 0 0 0 16-16v-40h16a8 8 0 0 0 0-16m-32 56H56V56h144z"></svg:path></svg:g>`,
})
export class PhCpuDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuFillIcon],svg[ph-cpu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 104h48v48h-48Zm136 48a8 8 0 0 1-8 8h-16v40a16 16 0 0 1-16 16h-40v16a8 8 0 0 1-16 0v-16h-32v16a8 8 0 0 1-16 0v-16H56a16 16 0 0 1-16-16v-40H24a8 8 0 0 1 0-16h16v-32H24a8 8 0 0 1 0-16h16V56a16 16 0 0 1 16-16h40V24a8 8 0 0 1 16 0v16h32V24a8 8 0 0 1 16 0v16h40a16 16 0 0 1 16 16v40h16a8 8 0 0 1 0 16h-16v32h16a8 8 0 0 1 8 8m-72-56a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8Z"></svg:path>`,
})
export class PhCpuFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuLightIcon],svg[ph-cpu-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 98h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6m-6 48h-36v-36h36Zm86 0h-18v-36h18a6 6 0 0 0 0-12h-18V56a14 14 0 0 0-14-14h-42V24a6 6 0 0 0-12 0v18h-36V24a6 6 0 0 0-12 0v18H56a14 14 0 0 0-14 14v42H24a6 6 0 0 0 0 12h18v36H24a6 6 0 0 0 0 12h18v42a14 14 0 0 0 14 14h42v18a6 6 0 0 0 12 0v-18h36v18a6 6 0 0 0 12 0v-18h42a14 14 0 0 0 14-14v-42h18a6 6 0 0 0 0-12m-30 54a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCpuLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCpuThinIcon],svg[ph-cpu-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 100h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-4 48h-40v-40h40Zm84 0h-20v-40h20a4 4 0 0 0 0-8h-20V56a12 12 0 0 0-12-12h-44V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H56a12 12 0 0 0-12 12v44H24a4 4 0 0 0 0 8h20v40H24a4 4 0 0 0 0 8h20v44a12 12 0 0 0 12 12h44v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h44a12 12 0 0 0 12-12v-44h20a4 4 0 0 0 0-8m-28 52a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCpuThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneIcon],svg[ph-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7.8 7.8 0 0 0-.34-2.3L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M98.05 96l19.2 64H64V96ZM48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path>`,
})
export class PhCraneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneBoldIcon],svg[ph-crane-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.17 13.71a12 12 0 0 0-11.82-.3L101 76H32a20 20 0 0 0-20 20v104a20 20 0 0 0 20 20h88a20 20 0 0 0 20-20v-32a11.9 11.9 0 0 0-.51-3.45L118.32 94L212 44v112h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20V24a12 12 0 0 0-5.83-10.29M95.07 100l16.8 56H76v-56ZM52 100v56H36v-56Zm-16 96v-16h80v16Z"></svg:path>`,
})
export class PhCraneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneDuotoneIcon],svg[ph-crane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 168H56V88h48Z" opacity=".2"></svg:path><svg:path d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7.8 7.8 0 0 0-.34-2.3L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M98.05 96l19.2 64H64V96ZM48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path></svg:g>`,
})
export class PhCraneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneFillIcon],svg[ph-crane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.12 17.14a8 8 0 0 0-7.88-.2L102 80H32a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h88a16 16 0 0 0 16-16v-32a7 7 0 0 0-.08-1.05v-.24a10 10 0 0 0-.22-1a.1.1 0 0 0 0-.05v-.07L113.54 92L216 37.33V160h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V24a8 8 0 0 0-3.88-6.86M48 96v64H32V96ZM32 200v-24h88v24Z"></svg:path>`,
})
export class PhCraneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneLightIcon],svg[ph-crane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.09 18.86a6 6 0 0 0-5.91-.15L102.5 82H32a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h88a14 14 0 0 0 14-14v-32a6.3 6.3 0 0 0-.25-1.72L111.16 91L218 34v126a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V24a6 6 0 0 0-2.91-5.14M99.54 94l20.4 68H62V94ZM32 94h18v68H30V96a2 2 0 0 1 2-2m88 108H32a2 2 0 0 1-2-2v-26h92v26a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhCraneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneThinIcon],svg[ph-crane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.06 20.57a4 4 0 0 0-3.94-.1L103 84H32a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-32a4 4 0 0 0-.17-1.15L108.77 90L220 30.67V160a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V24a4 4 0 0 0-1.94-3.43M101 92l21.6 72H60V92Zm-69 0h20v72H28V96a4 4 0 0 1 4-4m88 112H32a4 4 0 0 1-4-4v-28h96v28a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCraneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerIcon],svg[ph-crane-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z"></svg:path>`,
})
export class PhCraneTowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerBoldIcon],svg[ph-crane-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 76H111.42L90.73 34.63A12 12 0 0 0 80 28H48a12 12 0 0 0-12 12v36H24a12 12 0 0 0 0 24h12v104H24a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24h-12V100h88v80h-12v-4a12 12 0 0 0-24 0v8a20 20 0 0 0 20 20h20a20 20 0 0 0 20-20v-84h12a12 12 0 0 0 0-24M60 52h12.58l12 24H60Zm0 152v-40h32v40Zm32-64H60v-40h32Z"></svg:path>`,
})
export class PhCraneTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerDuotoneIcon],svg[ph-crane-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 88v128H48V40h32Z" opacity=".2"></svg:path><svg:path d="M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z"></svg:path></svg:g>`,
})
export class PhCraneTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerFillIcon],svg[ph-crane-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M127.73 208H112v-44a4 4 0 0 0-4-4H44a4 4 0 0 0-4 4v44H24.27a8.17 8.17 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h104a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47"></svg:path><svg:path d="M239.73 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24.27A8.17 8.17 0 0 0 16 87.47A8 8 0 0 0 24 96h16v44a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V96h96v88h-16v-7.73a8.18 8.18 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 8-8.53a8.17 8.17 0 0 0-8.27-7.47M56 80V48h19.06l16 32Z"></svg:path></svg:g>`,
})
export class PhCraneTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerLightIcon],svg[ph-crane-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 82H107.71L85.37 37.32A6 6 0 0 0 80 34H48a6 6 0 0 0-6 6v42H24a6 6 0 0 0 0 12h18v116H24a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12h-18V94h100v90a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V94h18a6 6 0 0 0 0-12M54 46h22.29l18 36H54Zm0 164v-52h44v52Zm44-64H54V94h44Z"></svg:path>`,
})
export class PhCraneTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCraneTowerThinIcon],svg[ph-crane-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 84H106.47L83.58 38.21A4 4 0 0 0 80 36H48a4 4 0 0 0-4 4v44H24a4 4 0 0 0 0 8h20v120H24a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8h-20V92h104v92a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V92h20a4 4 0 0 0 0-8M52 44h25.53l20 40H52Zm0 168v-56h48v56Zm48-64H52V92h48Z"></svg:path>`,
})
export class PhCraneTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardIcon],svg[ph-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 16v24H32V64Zm0 128H32v-88h192zm-16-24a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-64 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCreditCardIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardBoldIcon],svg[ph-credit-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 24v20H36V68ZM36 188v-76h184v76Zm172-24a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-68 0a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCreditCardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardDuotoneIcon],svg[ph-credit-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 96v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V96Z" opacity=".2"></svg:path><svg:path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 16v24H32V64Zm0 128H32v-88h192zm-16-24a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-64 0a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCreditCardDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardFillIcon],svg[ph-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-88 128h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16M32 88V64h192v24Z"></svg:path>`,
})
export class PhCreditCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardLightIcon],svg[ph-credit-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M32 62h192a2 2 0 0 1 2 2v26H30V64a2 2 0 0 1 2-2m192 132H32a2 2 0 0 1-2-2v-90h196v90a2 2 0 0 1-2 2m-18-26a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-64 0a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCreditCardLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCreditCardThinIcon],svg[ph-credit-card-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M32 60h192a4 4 0 0 1 4 4v28H28V64a4 4 0 0 1 4-4m192 136H32a4 4 0 0 1-4-4v-92h200v92a4 4 0 0 1-4 4m-20-28a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-64 0a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCreditCardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketIcon],svg[ph-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM232 92.69l-56 56V104a8 8 0 0 0-8-8h-44.69l56-56L232 92.68ZM60 88a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path>`,
})
export class PhCricketIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketBoldIcon],svg[ph-cricket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.15 78.54l-52.69-52.69a20 20 0 0 0-28.28 0L57.86 133.17a20 20 0 0 0 0 28.28l17.86 17.86l-44.2 44.2a12 12 0 0 0 17 17l44.2-44.21l17.86 17.86a20 20 0 0 0 28.28 0l107.29-107.34a20 20 0 0 0 0-28.28m-121.46 115.8l-15-15l26.83-26.83a12 12 0 0 0-17-17l-26.83 26.83l-15-15L109 116h47v47ZM180 139v-35a12 12 0 0 0-12-12h-35l46.34-46.34l47 47ZM60 92a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhCricketBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketDuotoneIcon],svg[ph-cricket-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 104v64l-37.66 37.66a8 8 0 0 1-11.31 0L66.34 153a8 8 0 0 1 0-11.31L104 104ZM80 60a20 20 0 1 0-20 20a20 20 0 0 0 20-20" opacity=".2"></svg:path><svg:path d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM232 92.69l-56 56V104a8 8 0 0 0-8-8h-44.69l56-56L232 92.68ZM60 88a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12"></svg:path></svg:g>`,
})
export class PhCricketDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketFillIcon],svg[ph-cricket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m243.31 81.37l-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68l-47 47a8 8 0 0 0 11.32 11.32l47-47l20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200L104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168L72 147.31L107.31 112H160v52.69ZM32 60a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhCricketFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketLightIcon],svg[ph-cricket-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.9 82.79L189.21 30.1a14 14 0 0 0-19.79 0L62.1 137.42a14 14 0 0 0 0 19.79l22.1 22.1l-48.44 48.45a6 6 0 1 0 8.48 8.48l48.45-48.44l22.1 22.1a14 14 0 0 0 19.79 0L241.9 102.58a14 14 0 0 0 0-19.79M126.1 201.42a2 2 0 0 1-2.83 0l-22.1-22.11l31.07-31.07a6 6 0 0 0-8.48-8.48l-31.07 31.07l-22.11-22.1a2 2 0 0 1 0-2.83l35.9-35.9H162v55.52ZM233.42 94.1L174 153.52V104a6 6 0 0 0-6-6h-49.52l59.42-59.42a2 2 0 0 1 2.83 0l52.69 52.69a2 2 0 0 1 0 2.83M60 86a26 26 0 1 0-26-26a26 26 0 0 0 26 26m0-40a14 14 0 1 1-14 14a14 14 0 0 1 14-14"></svg:path>`,
})
export class PhCricketLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCricketThinIcon],svg[ph-cricket-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240.49 84.2L187.8 31.51a12 12 0 0 0-17 0L63.52 138.83a12 12 0 0 0 0 17L87 179.31l-49.83 49.86a4 4 0 0 0 5.66 5.66L92.69 185l23.51 23.51a12 12 0 0 0 17 0l107.29-107.34a12 12 0 0 0 0-16.97m-113 118.63a4 4 0 0 1-5.66 0l-23.49-23.52l32.49-32.48a4 4 0 0 0-5.66-5.66l-32.48 32.49l-23.52-23.52a4 4 0 0 1 0-5.66L105.66 108H164v58.34ZM234.83 95.51L172 158.34V104a4 4 0 0 0-4-4h-54.34l62.83-62.83a4 4 0 0 1 5.66 0l52.68 52.68a4 4 0 0 1 0 5.66M60 84a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16a16 16 0 0 1 16-16"></svg:path>`,
})
export class PhCricketThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropIcon],svg[ph-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 192a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H64a8 8 0 0 1-8-8V72H24a8 8 0 0 1 0-16h32V24a8 8 0 0 1 16 0v160h160a8 8 0 0 1 8 8M96 72h88v88a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCropIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropBoldIcon],svg[ph-crop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 192a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-24 0v-28H64a12 12 0 0 1-12-12V76H24a12 12 0 0 1 0-24h28V24a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M104 76h76v76a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12h-88a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCropBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropDuotoneIcon],svg[ph-crop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 64v128H64V64Z" opacity=".2"></svg:path><svg:path d="M240 192a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H64a8 8 0 0 1-8-8V72H24a8 8 0 0 1 0-16h32V24a8 8 0 0 1 16 0v160h160a8 8 0 0 1 8 8M96 72h88v88a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhCropDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropFillIcon],svg[ph-crop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-88 48h48a8 8 0 0 1 8 8v48a8 8 0 0 1-16 0V96h-40a8 8 0 0 1 0-16m72 96h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8V96H64a8 8 0 0 1 0-16h16V64a8 8 0 0 1 16 0v96h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCropFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropLightIcon],svg[ph-crop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 192a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H64a6 6 0 0 1-6-6V70H24a6 6 0 0 1 0-12h34V24a6 6 0 0 1 12 0v162h162a6 6 0 0 1 6 6M96 70h90v90a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCropLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCropThinIcon],svg[ph-crop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 192a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H64a4 4 0 0 1-4-4V68H24a4 4 0 0 1 0-8h36V24a4 4 0 0 1 8 0v164h164a4 4 0 0 1 4 4M96 68h92v92a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4H96a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCropThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossIcon],svg[ph-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z"></svg:path>`,
})
export class PhCrossIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossBoldIcon],svg[ph-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 68h-36V32a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v36H56a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h36v84a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-84h36a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 48h-44a12 12 0 0 0-12 12v92h-24v-92a12 12 0 0 0-12-12H60V92h44a12 12 0 0 0 12-12V36h24v44a12 12 0 0 0 12 12h44Z"></svg:path>`,
})
export class PhCrossBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossDuotoneIcon],svg[ph-cross-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88v32a8 8 0 0 1-8 8h-48v96a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8v-96H56a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h48V32a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z"></svg:path></svg:g>`,
})
export class PhCrossDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossFillIcon],svg[ph-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92v24a16 16 0 0 1-16 16h-44v92a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-92H56a16 16 0 0 1-16-16V92a16 16 0 0 1 16-16h44V32a16 16 0 0 1 16-16h24a16 16 0 0 1 16 16v44h44a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhCrossFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossLightIcon],svg[ph-cross-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 74h-42V32a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v42H56a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h42v90a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-90h42a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 46a2 2 0 0 1-2 2h-48a6 6 0 0 0-6 6v96a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-96a6 6 0 0 0-6-6H56a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h48a6 6 0 0 0 6-6V32a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v48a6 6 0 0 0 6 6h48a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhCrossLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrossThinIcon],svg[ph-cross-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-44V32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v44H56a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h44v92a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-92h44a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12m4 44a4 4 0 0 1-4 4h-48a4 4 0 0 0-4 4v96a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-96a4 4 0 0 0-4-4H56a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h48a4 4 0 0 0 4-4V32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhCrossThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairIcon],svg[ph-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-96 87.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16h7.6a80.15 80.15 0 0 1-71.6 71.6M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhCrosshairIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairBoldIcon],svg[ph-crosshair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116h-4.72A100.21 100.21 0 0 0 140 28.72V24a12 12 0 0 0-24 0v4.72A100.21 100.21 0 0 0 28.72 116H24a12 12 0 0 0 0 24h4.72A100.21 100.21 0 0 0 116 227.28V232a12 12 0 0 0 24 0v-4.72A100.21 100.21 0 0 0 227.28 140H232a12 12 0 0 0 0-24m-92 87v-3a12 12 0 0 0-24 0v3a76.15 76.15 0 0 1-63-63h3a12 12 0 0 0 0-24h-3a76.15 76.15 0 0 1 63-63v3a12 12 0 0 0 24 0v-3a76.15 76.15 0 0 1 63 63h-3a12 12 0 0 0 0 24h3a76.15 76.15 0 0 1-63 63M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhCrosshairBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairDuotoneIcon],svg[ph-crosshair-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-96 87.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16h7.6a80.15 80.15 0 0 1-71.6 71.6M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path></svg:g>`,
})
export class PhCrosshairDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairFillIcon],svg[ph-crosshair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-32 16h7.6a80.15 80.15 0 0 1-71.6 71.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16m-32-8a40 40 0 1 1-40-40a40 40 0 0 1 40 40"></svg:path>`,
})
export class PhCrosshairFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairLightIcon],svg[ph-crosshair-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 122h-10.2A94.13 94.13 0 0 0 134 34.2V24a6 6 0 0 0-12 0v10.2A94.13 94.13 0 0 0 34.2 122H24a6 6 0 0 0 0 12h10.2a94.13 94.13 0 0 0 87.8 87.8V232a6 6 0 0 0 12 0v-10.2a94.13 94.13 0 0 0 87.8-87.8H232a6 6 0 0 0 0-12m-98 87.76V200a6 6 0 0 0-12 0v9.76A82.09 82.09 0 0 1 46.24 134H56a6 6 0 0 0 0-12h-9.76A82.09 82.09 0 0 1 122 46.24V56a6 6 0 0 0 12 0v-9.76A82.09 82.09 0 0 1 209.76 122H200a6 6 0 0 0 0 12h9.76A82.09 82.09 0 0 1 134 209.76M128 90a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhCrosshairLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleIcon],svg[ph-crosshair-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V184a8 8 0 0 0-16 0v31.63A88.13 88.13 0 0 1 40.37 136H72a8 8 0 0 0 0-16H40.37A88.13 88.13 0 0 1 120 40.37V72a8 8 0 0 0 16 0V40.37A88.13 88.13 0 0 1 215.63 120H184a8 8 0 0 0 0 16h31.63A88.13 88.13 0 0 1 136 215.63"></svg:path>`,
})
export class PhCrosshairSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleBoldIcon],svg[ph-crosshair-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V184a12 12 0 0 0-24 0v27.13A84.18 84.18 0 0 1 44.87 140H72a12 12 0 0 0 0-24H44.87A84.18 84.18 0 0 1 116 44.87V72a12 12 0 0 0 24 0V44.87A84.18 84.18 0 0 1 211.13 116H184a12 12 0 0 0 0 24h27.13A84.18 84.18 0 0 1 140 211.13"></svg:path>`,
})
export class PhCrosshairSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleDuotoneIcon],svg[ph-crosshair-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V184a8 8 0 0 0-16 0v31.63A88.13 88.13 0 0 1 40.37 136H72a8 8 0 0 0 0-16H40.37A88.13 88.13 0 0 1 120 40.37V72a8 8 0 0 0 16 0V40.37A88.13 88.13 0 0 1 215.63 120H184a8 8 0 0 0 0 16h31.63A88.13 88.13 0 0 1 136 215.63"></svg:path></svg:g>`,
})
export class PhCrosshairSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleFillIcon],svg[ph-crosshair-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 136h23.54A72.11 72.11 0 0 1 136 199.54V176a8 8 0 0 0-16 0v23.54A72.11 72.11 0 0 1 56.46 136H80a8 8 0 0 0 0-16H56.46A72.11 72.11 0 0 1 120 56.46V80a8 8 0 0 0 16 0V56.46A72.11 72.11 0 0 1 199.54 120H176a8 8 0 0 0 0 16m56-8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></svg:path>`,
})
export class PhCrosshairSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleLightIcon],svg[ph-crosshair-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V184a6 6 0 0 0-12 0v33.8A90.15 90.15 0 0 1 38.2 134H72a6 6 0 0 0 0-12H38.2A90.15 90.15 0 0 1 122 38.2V72a6 6 0 0 0 12 0V38.2a90.15 90.15 0 0 1 83.8 83.8H184a6 6 0 0 0 0 12h33.8a90.15 90.15 0 0 1-83.8 83.8"></svg:path>`,
})
export class PhCrosshairSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleThinIcon],svg[ph-crosshair-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V184a4 4 0 0 0-8 0v35.91A92.13 92.13 0 0 1 36.09 132H72a4 4 0 0 0 0-8H36.09A92.13 92.13 0 0 1 124 36.09V72a4 4 0 0 0 8 0V36.09A92.13 92.13 0 0 1 219.91 124H184a4 4 0 0 0 0 8h35.91A92.13 92.13 0 0 1 132 219.91"></svg:path>`,
})
export class PhCrosshairSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrosshairThinIcon],svg[ph-crosshair-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 124h-12.09A92.13 92.13 0 0 0 132 36.09V24a4 4 0 0 0-8 0v12.09A92.13 92.13 0 0 0 36.09 124H24a4 4 0 0 0 0 8h12.09A92.13 92.13 0 0 0 124 219.91V232a4 4 0 0 0 8 0v-12.09A92.13 92.13 0 0 0 219.91 132H232a4 4 0 0 0 0-8m-100 87.9V200a4 4 0 0 0-8 0v11.9A84.11 84.11 0 0 1 44.1 132H56a4 4 0 0 0 0-8H44.1A84.11 84.11 0 0 1 124 44.1V56a4 4 0 0 0 8 0V44.1a84.11 84.11 0 0 1 79.9 79.9H200a4 4 0 0 0 0 8h11.9a84.11 84.11 0 0 1-79.9 79.9M128 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhCrosshairThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownIcon],svg[ph-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m169.22 112H62.78l-13.92-83.48L81.79 149a8 8 0 0 0 6.21 3a8 8 0 0 0 1.08-.07a8 8 0 0 0 6.26-4.74l29.3-67.4a27 27 0 0 0 6.72 0l29.3 67.4a8 8 0 0 0 6.26 4.74a8 8 0 0 0 1.08.07a8 8 0 0 0 6.21-3l32.93-40.52ZM220 92a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCrownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownBoldIcon],svg[ph-crown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 80a32 32 0 1 0-60 15.45l-20.86 25.66l-20.32-46.71a32 32 0 1 0-45.64 0l-20.31 46.71L64 95.45a32 32 0 1 0-35 15.78l14 84.06A19.94 19.94 0 0 0 62.78 212h130.44A19.94 19.94 0 0 0 213 195.29l14-84.06A32.05 32.05 0 0 0 252 80m-32-8a8 8 0 1 1-8 8a8 8 0 0 1 8-8m-92-28a8 8 0 1 1-8 8a8 8 0 0 1 8-8M36 72a8 8 0 1 1-8 8a8 8 0 0 1 8-8m153.83 116H66.17l-10.88-65.22l23.4 28.79A12 12 0 0 0 88 156a13 13 0 0 0 1.63-.11a12 12 0 0 0 9.37-7.1L127.18 84h1.64L157 148.79a12 12 0 0 0 9.37 7.1a13 13 0 0 0 1.63.11a12 12 0 0 0 9.31-4.43l23.4-28.79Z"></svg:path>`,
})
export class PhCrownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossIcon],svg[ph-crown-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 56c-17.74 0-33.21 6.48-44 17.16V40h16a8 8 0 0 0 0-16h-16V8a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v33.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.5 90.5 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.5 90.5 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60m1.47 120.41A8 8 0 0 0 176 184v24H80v-24a8 8 0 0 0-5.47-7.59C74.1 176.27 32 161.7 32 116a44.05 44.05 0 0 1 44-44c25.5 0 44 16.82 44 40v64a8 8 0 0 0 16 0v-64c0-23.18 18.5-40 44-40a44.05 44.05 0 0 1 44 44c0 45.4-40.82 59.83-42.53 60.41"></svg:path>`,
})
export class PhCrownCrossIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossBoldIcon],svg[ph-crown-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 56c-15.4 0-29.19 4.61-40 12.5V44h12a12 12 0 0 0 0-24h-12v-8a12 12 0 0 0-24 0v8h-12a12 12 0 0 0 0 24h12v24.5C105.19 60.61 91.4 56 76 56a64.07 64.07 0 0 0-64 64c0 31.66 15.53 50.6 28.55 60.91A85.8 85.8 0 0 0 60 192.45V208a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-15.55a85.8 85.8 0 0 0 19.45-11.54C228.47 170.6 244 151.66 244 120a64.07 64.07 0 0 0-64-64m1.09 116.36A12 12 0 0 0 172 184v20H84v-20a12 12 0 0 0-9.09-11.64a59.4 59.4 0 0 1-19.46-10.27C42.54 151.87 36 137.71 36 120a40 40 0 0 1 40-40c23.18 0 40 15.14 40 36v60a12 12 0 0 0 24 0v-60c0-20.86 16.82-36 40-36a40 40 0 0 1 40 40c0 41.68-37.38 52-38.91 52.36"></svg:path>`,
})
export class PhCrownCrossBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossDuotoneIcon],svg[ph-crown-cross-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116c0 52-48 68-48 68v24a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-24s-48-16-48-68a52 52 0 0 1 52-52c28.72 0 52 19.28 52 48c0-28.72 23.28-48 52-48a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M180 56c-17.74 0-33.21 6.48-44 17.16V40h16a8 8 0 0 0 0-16h-16V8a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v33.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.5 90.5 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.5 90.5 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60m1.47 120.41A8 8 0 0 0 176 184v24H80v-24a8 8 0 0 0-5.47-7.59C74.1 176.27 32 161.7 32 116a44.05 44.05 0 0 1 44-44c25.5 0 44 16.82 44 40v64a8 8 0 0 0 16 0v-64c0-23.18 18.5-40 44-40a44.05 44.05 0 0 1 44 44c0 45.4-40.82 59.83-42.53 60.41"></svg:path></svg:g>`,
})
export class PhCrownCrossDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossFillIcon],svg[ph-crown-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 83.22a54 54 0 0 0-8-10.06V40h-16a8 8 0 0 1 0-16h16V8a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v33.16a54 54 0 0 0-8 10.06M180 56c-17.74 0-33.21 6.48-44 17.16V176a8 8 0 0 1-16 0V73.16C109.21 62.48 93.74 56 76 56a60.07 60.07 0 0 0-60 60c0 29.86 14.54 48.85 26.73 59.52A90.5 90.5 0 0 0 64 189.34V208a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-18.66a90.5 90.5 0 0 0 21.27-13.82C225.46 164.85 240 145.86 240 116a60.07 60.07 0 0 0-60-60"></svg:path>`,
})
export class PhCrownCrossFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossLightIcon],svg[ph-crown-cross-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 58c-19.15 0-35.57 7.79-46 20.32V38h18a6 6 0 0 0 0-12h-18V8a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v40.32C111.57 65.79 95.15 58 76 58a58.07 58.07 0 0 0-58 58c0 29.11 14.17 47.62 26.05 58a87.7 87.7 0 0 0 22 14v20a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14v-19.95A87.7 87.7 0 0 0 212 174c11.88-10.39 26.05-28.9 26.05-58A58.07 58.07 0 0 0 180 58m2.1 120.31A6 6 0 0 0 178 184v24a2 2 0 0 1-2 2H80a2 2 0 0 1-2-2v-24a6 6 0 0 0-4.1-5.69C73.46 178.16 30 163.13 30 116a46.06 46.06 0 0 1 46-46c26.65 0 46 17.66 46 42v64a6 6 0 0 0 12 0v-64c0-24.34 19.35-42 46-42a46.06 46.06 0 0 1 46 46c0 46.9-42.12 61.71-43.9 62.31"></svg:path>`,
})
export class PhCrownCrossLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownCrossThinIcon],svg[ph-crown-cross-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 60c-15.15 0-29.15 5.06-39.43 14.25a49.3 49.3 0 0 0-8.57 10V36h20a4 4 0 0 0 0-8h-20V8a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v48.26a49.3 49.3 0 0 0-8.57-10C105.15 65.06 91.15 60 76 60a56.06 56.06 0 0 0-56 56c0 28.36 13.79 46.38 25.37 56.51A85.6 85.6 0 0 0 68 186.74V208a12 12 0 0 0 12 12h96a12 12 0 0 0 12-12v-21.26a85.6 85.6 0 0 0 22.63-14.23C222.21 162.38 236 144.36 236 116a56.06 56.06 0 0 0-56-56m25.59 106.29a75.5 75.5 0 0 1-22.85 13.92A4 4 0 0 0 180 184v24a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4v-24a4 4 0 0 0-2.73-3.79a75.4 75.4 0 0 1-22.86-13.92C35.54 153.17 28 136.25 28 116a48.05 48.05 0 0 1 48-48c27.81 0 48 18.5 48 44v64a4 4 0 0 0 8 0v-64c0-25.5 20.19-44 48-44a48.05 48.05 0 0 1 48 48c0 20.25-7.54 37.17-22.41 50.29"></svg:path>`,
})
export class PhCrownCrossThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownDuotoneIcon],svg[ph-crown-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216.71 99.73l-15.6 93.59a8 8 0 0 1-7.89 6.68H62.78a8 8 0 0 1-7.89-6.68l-15.6-93.59h.08a19.8 19.8 0 0 0 9.22-4.16L88 144l32-73.65a20 20 0 0 0 15.92 0L168 144l39.39-48.48a19.8 19.8 0 0 0 9.22 4.16Z" opacity=".2"></svg:path><svg:path d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m169.22 112H62.78l-13.92-83.48L81.79 149a8 8 0 0 0 6.21 3a8 8 0 0 0 1.08-.07a8 8 0 0 0 6.26-4.74l29.3-67.4a27 27 0 0 0 6.72 0l29.3 67.4a8 8 0 0 0 6.26 4.74a8 8 0 0 0 1.08.07a8 8 0 0 0 6.21-3l32.93-40.52ZM220 92a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhCrownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownFillIcon],svg[ph-crown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80a28 28 0 1 0-51.12 15.77l-26.79 33L146 73.4a28 28 0 1 0-36.06 0l-24.03 55.34l-26.79-33a28 28 0 1 0-26.6 12L47 194.63A16 16 0 0 0 62.78 208h130.44A16 16 0 0 0 209 194.63l14.47-86.85A28 28 0 0 0 248 80M128 40a12 12 0 1 1-12 12a12 12 0 0 1 12-12M24 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m196 12a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhCrownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownLightIcon],svg[ph-crown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 80a26 26 0 1 0-46.6 15.84l-29.83 36.72l-26-59.76a26 26 0 1 0-31.16 0l-26 59.76L56.6 95.84a26 26 0 1 0-22.36 10.09L49 194.3A14 14 0 0 0 62.78 206h130.44A14 14 0 0 0 207 194.3l14.73-88.37A26 26 0 0 0 246 80M128 38a14 14 0 1 1-14 14a14 14 0 0 1 14-14M22 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m173.2 112.33a2 2 0 0 1-2 1.67H62.78a2 2 0 0 1-2-1.67L46.08 104l1.22-.55l36 44.36A6 6 0 0 0 88 150a5.5 5.5 0 0 0 .81-.06a6 6 0 0 0 4.69-3.55l29.92-68.8a25.8 25.8 0 0 0 9.16 0l29.92 68.8a6 6 0 0 0 4.69 3.55a5.5 5.5 0 0 0 .81.06a6 6 0 0 0 4.66-2.22l36-44.36l1.22.55ZM220 94a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhCrownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleIcon],svg[ph-crown-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230.9 73.6a15.85 15.85 0 0 0-18.9 3.79l-33.67 36.29l-35.8-80.29a1 1 0 0 1 0-.1a16 16 0 0 0-29.06 0a1 1 0 0 1 0 .1l-35.8 80.29L44 77.39a16 16 0 0 0-27.75 13.42c0 .11 0 .21.07.32L39 195a16 16 0 0 0 15.72 13h146.57A16 16 0 0 0 217 195l22.68-103.87c0-.11 0-.21.07-.32a15.85 15.85 0 0 0-8.85-17.21m-29.55 118.08l-.06.32H54.71l-.06-.32L32 88l.14.16l42 45.24a8 8 0 0 0 13.18-2.18L128 40l40.69 91.25a8 8 0 0 0 13.18 2.18l42-45.24l.13-.19Z"></svg:path>`,
})
export class PhCrownSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleBoldIcon],svg[ph-crown-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.63 70a19.82 19.82 0 0 0-23.55 4.71l-29.52 31.82l-33.34-74.77l-.06-.14a20 20 0 0 0-36.32 0l-.06.14l-33.34 74.76L46.92 74.7a20 20 0 0 0-34.6 16.81c0 .16.06.31.09.47l22.66 103.78A20 20 0 0 0 54.71 212h146.58a20 20 0 0 0 19.64-16.24L243.59 92c0-.16.07-.31.09-.47A19.82 19.82 0 0 0 232.63 70m-34.57 118H57.94l-18.88-86.49l32.14 34.65a12 12 0 0 0 19.8-3.27l37-83.07l37 83.07a12 12 0 0 0 19.76 3.27l32.14-34.65Z"></svg:path>`,
})
export class PhCrownSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleDuotoneIcon],svg[ph-crown-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m231.87 89.42l-22.7 104a8 8 0 0 1-7.88 6.61H54.71a8 8 0 0 1-7.88-6.61l-22.7-104A8 8 0 0 1 38 82.76L80 128l40.74-91.35a8 8 0 0 1 14.52 0L176 128l42-45.24a8 8 0 0 1 13.87 6.66" opacity=".2"></svg:path><svg:path d="M230.9 73.6a15.85 15.85 0 0 0-18.9 3.79l-33.67 36.29l-35.8-80.29a1 1 0 0 1 0-.1a16 16 0 0 0-29.06 0a1 1 0 0 1 0 .1l-35.8 80.29L44 77.39a16 16 0 0 0-27.75 13.42c0 .11 0 .21.07.32L39 195a16 16 0 0 0 15.72 13h146.57A16 16 0 0 0 217 195l22.68-103.87c0-.11 0-.21.07-.32a15.85 15.85 0 0 0-8.85-17.21m-29.55 118.08l-.06.32H54.71l-.06-.32L32 88l.14.16l42 45.24a8 8 0 0 0 13.18-2.18L128 40l40.69 91.25a8 8 0 0 0 13.18 2.18l42-45.24l.13-.19Z"></svg:path></svg:g>`,
})
export class PhCrownSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleFillIcon],svg[ph-crown-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.75 90.81c0 .11 0 .21-.07.32L217 195a16 16 0 0 1-15.72 13H54.71A16 16 0 0 1 39 195L16.32 91.13c0-.11-.05-.21-.07-.32A16 16 0 0 1 44 77.39l33.67 36.29l35.8-80.29a1 1 0 0 0 0-.1a16 16 0 0 1 29.06 0a1 1 0 0 0 0 .1l35.8 80.29L212 77.39a16 16 0 0 1 27.71 13.42Z"></svg:path>`,
})
export class PhCrownSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleLightIcon],svg[ph-crown-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 75.4a13.87 13.87 0 0 0-16.52 3.34l-35.74 38.52l-37.03-83.13a14 14 0 0 0-25.45.07l-37 83.06l-35.78-38.52a14 14 0 0 0-24.26 11.72c0 .08 0 .16.05.24L41 194.57A14 14 0 0 0 54.71 206h146.58a14 14 0 0 0 13.76-11.43L237.73 90.7c0-.08 0-.16.05-.24A13.89 13.89 0 0 0 230 75.4m-4 12.89l-22.69 103.82a2 2 0 0 0-.05.24a2 2 0 0 1-2 1.65H54.71a2 2 0 0 1-2-1.65a2 2 0 0 0-.05-.24L30 88.29a1.82 1.82 0 0 1 1.12-2.06a1.84 1.84 0 0 1 2.36.48l.12.13l42 45.24a6 6 0 0 0 9.88-1.64l40.7-91.28A1.92 1.92 0 0 1 128 38a1.87 1.87 0 0 1 1.78 1.09l40.74 91.35a6 6 0 0 0 9.88 1.64l42-45.24l.12-.13a1.84 1.84 0 0 1 2.36-.48a1.82 1.82 0 0 1 1.12 2.06"></svg:path>`,
})
export class PhCrownSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownSimpleThinIcon],svg[ph-crown-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.18 77.21A11.89 11.89 0 0 0 215 80.08l-37.81 40.76L138.9 35a12 12 0 0 0-21.82.05l-38.27 85.79L41 80.08a12 12 0 0 0-20.81 10v.15l22.69 103.9A12 12 0 0 0 54.71 204h146.58a12 12 0 0 0 11.8-9.83l22.69-103.9v-.15a11.89 11.89 0 0 0-6.6-12.91m-1.24 11.45l-22.68 103.88v.16a4 4 0 0 1-3.94 3.3H54.71a4 4 0 0 1-3.94-3.3v-.16L28.06 88.66a4 4 0 0 1 7-3.26a.3.3 0 0 0 .08.08l42 45.24a4 4 0 0 0 6.59-1.09l40.72-91.31a4 4 0 0 1 7.24 0l40.74 91.35a4 4 0 0 0 6.59 1.09l42-45.24a.3.3 0 0 0 .08-.08a4 4 0 0 1 7 3.26Z"></svg:path>`,
})
export class PhCrownSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCrownThinIcon],svg[ph-crown-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 80a24 24 0 1 0-42 15.83l-33 40.54l-27.9-64.28a24 24 0 1 0-26.2 0L87 136.37L54 95.83A24 24 0 1 0 35.94 104l15 90a12 12 0 0 0 11.84 10h130.44a12 12 0 0 0 11.84-10l15-90A24 24 0 0 0 244 80M128 36a16 16 0 1 1-16 16a16 16 0 0 1 16-16M20 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m177.17 112.66a4 4 0 0 1-3.95 3.34H62.78a4 4 0 0 1-4-3.34l-15-90a23.4 23.4 0 0 0 4-1.8l37.12 45.66A4 4 0 0 0 88 148a3.3 3.3 0 0 0 .54 0a4 4 0 0 0 3.13-2.37l30.56-70.3a23.8 23.8 0 0 0 11.54 0l30.56 70.3a4 4 0 0 0 3.13 2.37a3.3 3.3 0 0 0 .54 0a4 4 0 0 0 3.1-1.48l37.09-45.64a23.4 23.4 0 0 0 4 1.8ZM220 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhCrownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeIcon],svg[ph-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44L128 120L47.66 76ZM40 90l80 43.78v85.79l-80-43.75Zm96 129.57v-85.75L216 90v85.78Z"></svg:path>`,
})
export class PhCubeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeBoldIcon],svg[ph-cube-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.6 62.64l-88-48.17a19.91 19.91 0 0 0-19.2 0l-88 48.17A20 20 0 0 0 20 80.19v95.62a20 20 0 0 0 10.4 17.55l88 48.17a19.89 19.89 0 0 0 19.2 0l88-48.17a20 20 0 0 0 10.4-17.55V80.19a20 20 0 0 0-10.4-17.55M128 36.57L200 76l-72 39.4L56 76ZM44 96.79l72 39.4v76.67l-72-39.42Zm96 116.07v-76.67l72-39.4v76.65Z"></svg:path>`,
})
export class PhCubeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeDuotoneIcon],svg[ph-cube-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 129.09V232a8 8 0 0 1-3.84-1l-88-48.16a8 8 0 0 1-4.16-7V80.2a8 8 0 0 1 .7-3.27Z" opacity=".2"></svg:path><svg:path d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 32l80.34 44L128 120L47.66 76ZM40 90l80 43.78v85.79l-80-43.75Zm96 129.57v-85.75L216 90v85.78Z"></svg:path></svg:g>`,
})
export class PhCubeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFillIcon],svg[ph-cube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.68 66.15l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 120L47.65 76L128 32l80.35 44Zm8 99.64v-85.81l80-43.78v85.76Z"></svg:path>`,
})
export class PhCubeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusIcon],svg[ph-cube-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m156 71l-56 32a8 8 0 0 1-7.94 0L68 167a8 8 0 0 1-4-7V96a8 8 0 0 1 4-7l56-32a8 8 0 0 1 7.94 0l56 32a8 8 0 0 1 4 7v64a8 8 0 0 1-3.94 7M88.12 96L128 118.79L167.88 96L128 73.21ZM80 155.36l40 22.85v-45.57l-40-22.85Zm96 0v-45.57l-40 22.85v45.57Z"></svg:path>`,
})
export class PhCubeFocusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusBoldIcon],svg[ph-cube-focus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 48v40a12 12 0 0 1-24 0V60h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12M72 196H44v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24m152-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M32 100a12 12 0 0 0 12-12V60h28a12 12 0 0 0 0-24H32a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m158 70.42l-56 32a12 12 0 0 1-11.9 0l-56-32A12 12 0 0 1 60 160V96a12 12 0 0 1 6-10.42l56-32a12 12 0 0 1 11.9 0l56 32A12 12 0 0 1 196 96v64a12 12 0 0 1-6 10.42M96.19 96L128 114.18L159.81 96L128 77.82ZM84 153l32 18.28V135l-32-18.32Zm88 0v-36.32L140 135v36.36Z"></svg:path>`,
})
export class PhCubeFocusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusDuotoneIcon],svg[ph-cube-focus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 96v64l-56 32l-56-32V96l56-32Z" opacity=".2"></svg:path><svg:path d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m156 71l-56 32a8 8 0 0 1-7.94 0L68 167a8 8 0 0 1-4-7V96a8 8 0 0 1 4-7l56-32a8 8 0 0 1 7.94 0l56 32a8 8 0 0 1 4 7v64a8 8 0 0 1-3.94 7M88.12 96L128 118.79L167.88 96L128 73.21ZM80 155.36l40 22.85v-45.57l-40-22.85Zm96 0v-45.57l-40 22.85v45.57Z"></svg:path></svg:g>`,
})
export class PhCubeFocusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusFillIcon],svg[ph-cube-focus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m145.92-12.69L132 57.05a8 8 0 0 0-7.94 0L78.08 83.31a4 4 0 0 0 0 7L128 118.79l49.92-28.53a4 4 0 0 0 0-6.95M64 107.53V160a8 8 0 0 0 4 7l46 26.27a4 4 0 0 0 6-3.47v-57.16l-50-28.58a4 4 0 0 0-6 3.47M192 160v-52.47a4 4 0 0 0-6-3.47l-50 28.58v57.11a4 4 0 0 0 6 3.47L188 167a8 8 0 0 0 4-7"></svg:path>`,
})
export class PhCubeFocusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusLightIcon],svg[ph-cube-focus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M72 202H38v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m152-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M32 94a6 6 0 0 0 6-6V54h34a6 6 0 0 0 0-12H32a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m155 71.21l-56 32a6 6 0 0 1-6 0l-56-32a6 6 0 0 1-3-5.21V96a6 6 0 0 1 3-5.21l56-32a6 6 0 0 1 6 0l56 32a6 6 0 0 1 3 5.21v64a6 6 0 0 1-3 5.21M84.09 96L128 121.09L171.91 96L128 70.91ZM78 156.52l44 25.14v-50.18l-44-25.14Zm100 0v-50.18l-44 25.14v50.18Z"></svg:path>`,
})
export class PhCubeFocusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeFocusThinIcon],svg[ph-cube-focus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m154 71.47l-56 32a4 4 0 0 1-4 0l-56-32a4 4 0 0 1-2-3.47V96a4 4 0 0 1 2-3.47l56-32a4 4 0 0 1 4 0l56 32a4 4 0 0 1 2 3.47v64a4 4 0 0 1-2 3.47M80.06 96L128 123.39L175.94 96L128 68.61ZM76 157.68l48 27.43v-54.79l-48-27.43Zm104 0v-54.79l-48 27.43v54.79Z"></svg:path>`,
})
export class PhCubeFocusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeLightIcon],svg[ph-cube-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.72 67.9l-88-48.17a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.28M127 30.25a2 2 0 0 1 1.92 0L212.51 76L128 122.24L43.49 76ZM39 177.57a2 2 0 0 1-1-1.75V86.66l84 46V223Zm177.92 0L134 223v-90.36l84-46v89.16a2 2 0 0 1-1 1.77Z"></svg:path>`,
})
export class PhCubeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeThinIcon],svg[ph-cube-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.76 69.66l-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52M126.08 28.5a3.94 3.94 0 0 1 3.84 0L216.67 76L128 124.52L39.33 76Zm-88 150.83a4 4 0 0 1-2.08-3.51V83.29l88 48.16v94.91Zm179.84 0l-85.92 47v-94.88l88-48.16v92.53a4 4 0 0 1-2.08 3.5Z"></svg:path>`,
})
export class PhCubeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentIcon],svg[ph-cube-transparent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 90.34l-56-56A8 8 0 0 0 160 32H40a8 8 0 0 0-8 8v120a8 8 0 0 0 2.3 5.61l56 56A8 8 0 0 0 96 224h120a8 8 0 0 0 8-8V96a8 8 0 0 0-2.34-5.66M168 59.31L196.69 88H168ZM88 196.69L59.31 168H88ZM88 152H48V59.31l40 40ZM59.31 48H152v40H99.31ZM152 104v48h-48v-48Zm-48 104v-40h52.69l40 40Zm104-11.31l-40-40V104h40Z"></svg:path>`,
})
export class PhCubeTransparentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentBoldIcon],svg[ph-cube-transparent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.5 95.53l-64-64A12 12 0 0 0 152 28H40a12 12 0 0 0-12 12v112a11.94 11.94 0 0 0 3 7.93c.15.18.31.36.5.56l64 64A12 12 0 0 0 104 228h112a12 12 0 0 0 12-12V104a12 12 0 0 0-3.5-8.47M164 69l23 23h-23ZM92 187l-23-23h23Zm0-47H52V69l40 40ZM69 52h71v40h-31Zm71 64v24h-24v-24Zm-24 88v-40h31l40 40Zm88-17l-40-40v-31h40Z"></svg:path>`,
})
export class PhCubeTransparentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentDuotoneIcon],svg[ph-cube-transparent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v120H96l-56-56V40h120Z" opacity=".2"></svg:path><svg:path d="m221.66 90.34l-56-56A8 8 0 0 0 160 32H40a8 8 0 0 0-8 8v120a8 8 0 0 0 2.3 5.61l56 56A8 8 0 0 0 96 224h120a8 8 0 0 0 8-8V96a8 8 0 0 0-2.34-5.66M168 59.31L196.69 88H168ZM88 196.69L59.31 168H88ZM88 152H48V59.31l40 40ZM59.31 48H152v40H99.31ZM152 104v48h-48v-48Zm-48 104v-40h52.69l40 40Zm104-11.31l-40-40V104h40Z"></svg:path></svg:g>`,
})
export class PhCubeTransparentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentFillIcon],svg[ph-cube-transparent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 152v-48h48v48ZM32 53v95a4 4 0 0 0 4 4h52V99.31L38.83 50.14A4 4 0 0 0 32 53m188 51h-52v52.69l49.17 49.17A4 4 0 0 0 224 203v-95a4 4 0 0 0-4-4m-68-68a4 4 0 0 0-4-4H53a4 4 0 0 0-2.83 6.83L99.31 88H152Zm60.49 45.17l-37.66-37.66a4 4 0 0 0-6.83 2.83V88h41.66a4 4 0 0 0 2.83-6.83M156.69 168H104v52a4 4 0 0 0 4 4h95a4 4 0 0 0 2.83-6.83Zm-113.18 6.83l37.66 37.66a4 4 0 0 0 6.83-2.83V168H46.34a4 4 0 0 0-2.83 6.83"></svg:path>`,
})
export class PhCubeTransparentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentLightIcon],svg[ph-cube-transparent-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.24 91.75L164 35.56a5.93 5.93 0 0 0-4-1.56H40a6 6 0 0 0-6 6v120a6 6 0 0 0 1.76 4.25l56 56A6 6 0 0 0 96 222h120a6 6 0 0 0 6-6V96a6 6 0 0 0-1.76-4.25M166 54.48L201.52 90H166Zm-76 147L54.48 166H90ZM90 154H46V54.48l44 44ZM54.48 46H154v44H98.48ZM154 102v52h-52v-52Zm-52 108v-44h55.52l44 44Zm108-8.48l-44-44V102h44Z"></svg:path>`,
})
export class PhCubeTransparentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCubeTransparentThinIcon],svg[ph-cube-transparent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.92 95.22a2 2 0 0 0-.1-.33a3 3 0 0 0-.13-.42a2.6 2.6 0 0 0-.19-.37c-.06-.11-.11-.22-.17-.32a3.6 3.6 0 0 0-.5-.6l-56-56a2.3 2.3 0 0 0-.33-.27A4 4 0 0 0 160 36H40a4 4 0 0 0-4 4v120a4 4 0 0 0 .9 2.5a2.3 2.3 0 0 0 .27.33l56 56A4 4 0 0 0 96 220h120a4 4 0 0 0 4-4V96a4 4 0 0 0-.08-.78M164 49.66L206.34 92H164ZM92 206.34L49.66 164H92ZM92 156H44V49.66l48 48ZM49.66 44H156v48H97.66ZM156 100v56h-56v-56Zm-56 112v-48h58.34l48 48Zm112-5.66l-48-48V100h48Z"></svg:path>`,
})
export class PhCubeTransparentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcIcon],svg[ph-currency-btc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M176 84a28 28 0 0 1-28 28H96V56h52a28 28 0 0 1 28 28m-16 108H96v-64h64a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyBtcIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcBoldIcon],svg[ph-currency-btc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.08 114.46A48 48 0 0 0 160 37.52V24a12 12 0 0 0-24 0v12h-16V24a12 12 0 0 0-24 0v12H72a12 12 0 0 0 0 24h4v128h-4a12 12 0 0 0 0 24h24v12a12 12 0 0 0 24 0v-12h16v12a12 12 0 0 0 24 0v-12a52 52 0 0 0 25.08-97.54M172 84a24 24 0 0 1-24 24h-48V60h48a24 24 0 0 1 24 24m-12 104h-60v-56h60a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyBtcBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcDuotoneIcon],svg[ph-currency-btc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 160a40 40 0 0 1-40 40H88V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M96 56h52a28 28 0 0 1 0 56H96Zm64 136H96v-64h64a32 32 0 0 1 0 64"></svg:path></svg:g>`,
})
export class PhCurrencyBtcDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcFillIcon],svg[ph-currency-btc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 152a16 16 0 0 1-16 16h-48v-32h48a16 16 0 0 1 16 16m64-24A104 104 0 1 1 136 24a104.11 104.11 0 0 1 104 104m-48 24a32 32 0 0 0-15.51-27.42A32 32 0 0 0 160 73v-9a8 8 0 0 0-16 0v8h-16v-8a8 8 0 0 0-16 0v8H96a8 8 0 0 0 0 16v80a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h16v8a8 8 0 0 0 16 0v-8a32 32 0 0 0 32-32m-24-48a16 16 0 0 0-16-16h-40v32h40a16 16 0 0 0 16-16"></svg:path>`,
})
export class PhCurrencyBtcFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcLightIcon],svg[ph-currency-btc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.69 116.41A42 42 0 0 0 150 42.05V24a6 6 0 0 0-12 0v18h-20V24a6 6 0 0 0-12 0v18H72a6 6 0 0 0 0 12h10v140H72a6 6 0 0 0 0 12h34v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h10a46 46 0 0 0 14.69-89.59M178 84a30 30 0 0 1-30 30H94V54h54a30 30 0 0 1 30 30m-18 110H94v-68h66a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhCurrencyBtcLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyBtcThinIcon],svg[ph-currency-btc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.27 117.21A40 40 0 0 0 148 44V24a4 4 0 0 0-8 0v20h-24V24a4 4 0 0 0-8 0v20H72a4 4 0 0 0 0 8h12v144H72a4 4 0 0 0 0 8h36v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h12a44 44 0 0 0 10.27-86.79M92 52h56a32 32 0 0 1 0 64H92Zm68 144H92v-72h68a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhCurrencyBtcThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarIcon],svg[ph-currency-circle-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28"></svg:path>`,
})
export class PhCurrencyCircleDollarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarBoldIcon],svg[ph-currency-circle-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-64a32 32 0 0 1-32 32v4a12 12 0 0 1-24 0v-4h-12a12 12 0 0 1 0-24h36a8 8 0 0 0 0-16h-24a32 32 0 0 1 0-64v-4a12 12 0 0 1 24 0v4h12a12 12 0 0 1 0 24h-36a8 8 0 0 0 0 16h24a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhCurrencyCircleDollarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarDuotoneIcon],svg[ph-currency-circle-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28"></svg:path></svg:g>`,
})
export class PhCurrencyCircleDollarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarFillIcon],svg[ph-currency-circle-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m12 152h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyCircleDollarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarLightIcon],svg[ph-currency-circle-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-70a26 26 0 0 1-26 26h-6v10a6 6 0 0 1-12 0v-10h-18a6 6 0 0 1 0-12h36a14 14 0 0 0 0-28h-24a26 26 0 0 1 0-52h6V72a6 6 0 0 1 12 0v10h18a6 6 0 0 1 0 12h-36a14 14 0 0 0 0 28h24a26 26 0 0 1 26 26"></svg:path>`,
})
export class PhCurrencyCircleDollarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCircleDollarThinIcon],svg[ph-currency-circle-dollar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-72a24 24 0 0 1-24 24h-8v12a4 4 0 0 1-8 0v-12h-20a4 4 0 0 1 0-8h36a16 16 0 0 0 0-32h-24a24 24 0 0 1 0-48h8V72a4 4 0 0 1 8 0v12h20a4 4 0 0 1 0 8h-36a16 16 0 0 0 0 32h24a24 24 0 0 1 24 24"></svg:path>`,
})
export class PhCurrencyCircleDollarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyIcon],svg[ph-currency-cny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 56a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m160 104a8 8 0 0 0-8 8v16h-32a16 16 0 0 1-16-16v-48h48a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16h48v8a56.06 56.06 0 0 1-56 56a8 8 0 0 0 0 16a72.08 72.08 0 0 0 72-72v-8h32v48a32 32 0 0 0 32 32h40a8 8 0 0 0 8-8v-24a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhCurrencyCnyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyBoldIcon],svg[ph-currency-cny-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 56a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12m164 100a12 12 0 0 0-12 12v12h-28a12 12 0 0 1-12-12v-44h44a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24h44v4a52.06 52.06 0 0 1-52 52a12 12 0 0 0 0 24a76.08 76.08 0 0 0 76-76v-4h24v44a36 36 0 0 0 36 36h40a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhCurrencyCnyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyDuotoneIcon],svg[ph-currency-cny-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v56H64V56Z" opacity=".2"></svg:path><svg:path d="M56 56a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m160 104a8 8 0 0 0-8 8v16h-32a16 16 0 0 1-16-16v-48h48a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16h48v8a56.06 56.06 0 0 1-56 56a8 8 0 0 0 0 16a72.08 72.08 0 0 0 72-72v-8h32v48a32 32 0 0 0 32 32h40a8 8 0 0 0 8-8v-24a8 8 0 0 0-8-8"></svg:path></svg:g>`,
})
export class PhCurrencyCnyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyFillIcon],svg[ph-currency-cny-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 16M88 72h80a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m104 88a8 8 0 0 1-8 8h-24a24 24 0 0 1-24-24v-24h-16a48.05 48.05 0 0 1-48 48a8 8 0 0 1 0-16a32 32 0 0 0 32-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16h-24v24a8 8 0 0 0 8 8h16v-8a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhCurrencyCnyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyLightIcon],svg[ph-currency-cny-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58 56a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6m158 106a6 6 0 0 0-6 6v18h-34a18 18 0 0 1-18-18v-50h50a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12h50v10a58.07 58.07 0 0 1-58 58a6 6 0 0 0 0 12a70.08 70.08 0 0 0 70-70v-10h36v50a30 30 0 0 0 30 30h40a6 6 0 0 0 6-6v-24a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCurrencyCnyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyCnyThinIcon],svg[ph-currency-cny-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m156 108a4 4 0 0 0-4 4v20h-36a20 20 0 0 1-20-20v-52h52a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8h52v12a60.07 60.07 0 0 1-60 60a4 4 0 0 0 0 8a68.07 68.07 0 0 0 68-68v-12h40v52a28 28 0 0 0 28 28h40a4 4 0 0 0 4-4v-24a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhCurrencyCnyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarIcon],svg[ph-currency-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 120h-16V56h8a32 32 0 0 1 32 32a8 8 0 0 0 16 0a48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32a8 8 0 0 0-16 0a48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyDollarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarBoldIcon],svg[ph-currency-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 116h-12V60h4a28 28 0 0 1 28 28a12 12 0 0 0 24 0a52.06 52.06 0 0 0-52-52h-4V24a12 12 0 0 0-24 0v12h-4a52 52 0 0 0 0 104h4v56h-12a28 28 0 0 1-28-28a12 12 0 0 0-24 0a52.06 52.06 0 0 0 52 52h12v12a12 12 0 0 0 24 0v-12h12a52 52 0 0 0 0-104m-40 0a28 28 0 0 1 0-56h4v56Zm40 80h-12v-56h12a28 28 0 0 1 0 56"></svg:path>`,
})
export class PhCurrencyDollarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarDuotoneIcon],svg[ph-currency-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z" opacity=".2"></svg:path><svg:path d="M152 120h-16V56h8a32 32 0 0 1 32 32a8 8 0 0 0 16 0a48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32a8 8 0 0 0-16 0a48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64"></svg:path></svg:g>`,
})
export class PhCurrencyDollarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarFillIcon],svg[ph-currency-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 152a16 16 0 0 1-16 16h-8v-32h8a16 16 0 0 1 16 16m72-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-56 24a32 32 0 0 0-32-32h-8V88h4a16 16 0 0 1 16 16a8 8 0 0 0 16 0a32 32 0 0 0-32-32h-4v-8a8 8 0 0 0-16 0v8h-4a32 32 0 0 0 0 64h4v32h-8a16 16 0 0 1-16-16a8 8 0 0 0-16 0a32 32 0 0 0 32 32h8v8a8 8 0 0 0 16 0v-8h8a32 32 0 0 0 32-32m-76-48a16 16 0 0 0 16 16h4V88h-4a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhCurrencyDollarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarLightIcon],svg[ph-currency-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 122h-18V54h10a34 34 0 0 1 34 34a6 6 0 0 0 12 0a46.06 46.06 0 0 0-46-46h-10V24a6 6 0 0 0-12 0v18h-10a46 46 0 0 0 0 92h10v68h-18a34 34 0 0 1-34-34a6 6 0 0 0-12 0a46.06 46.06 0 0 0 46 46h18v18a6 6 0 0 0 12 0v-18h18a46 46 0 0 0 0-92m-40 0a34 34 0 0 1 0-68h10v68Zm40 80h-18v-68h18a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhCurrencyDollarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleIcon],svg[ph-currency-dollar-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 168a48.05 48.05 0 0 1-48 48h-16v16a8 8 0 0 1-16 0v-16h-16a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h48a32 32 0 0 0 0-64h-40a48 48 0 0 1 0-96h8V24a8 8 0 0 1 16 0v16h8a48.05 48.05 0 0 1 48 48a8 8 0 0 1-16 0a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h40a48.05 48.05 0 0 1 48 48"></svg:path>`,
})
export class PhCurrencyDollarSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleBoldIcon],svg[ph-currency-dollar-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52"></svg:path>`,
})
export class PhCurrencyDollarSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleDuotoneIcon],svg[ph-currency-dollar-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z" opacity=".2"></svg:path><svg:path d="M200 168a48.05 48.05 0 0 1-48 48h-16v16a8 8 0 0 1-16 0v-16h-16a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 32 32h48a32 32 0 0 0 0-64h-40a48 48 0 0 1 0-96h8V24a8 8 0 0 1 16 0v16h8a48.05 48.05 0 0 1 48 48a8 8 0 0 1-16 0a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h40a48.05 48.05 0 0 1 48 48"></svg:path></svg:g>`,
})
export class PhCurrencyDollarSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleFillIcon],svg[ph-currency-dollar-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m16 160h-8v8a8 8 0 0 1-16 0v-8h-8a32 32 0 0 1-32-32a8 8 0 0 1 16 0a16 16 0 0 0 16 16h32a16 16 0 0 0 0-32h-28a32 32 0 0 1 0-64h4v-8a8 8 0 0 1 16 0v8h4a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24a16 16 0 0 0 0 32h28a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhCurrencyDollarSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleLightIcon],svg[ph-currency-dollar-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198 168a46.06 46.06 0 0 1-46 46h-18v18a6 6 0 0 1-12 0v-18h-18a46.06 46.06 0 0 1-46-46a6 6 0 0 1 12 0a34 34 0 0 0 34 34h48a34 34 0 0 0 0-68h-40a46 46 0 0 1 0-92h10V24a6 6 0 0 1 12 0v18h10a46.06 46.06 0 0 1 46 46a6 6 0 0 1-12 0a34 34 0 0 0-34-34h-32a34 34 0 0 0 0 68h40a46.06 46.06 0 0 1 46 46"></svg:path>`,
})
export class PhCurrencyDollarSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarSimpleThinIcon],svg[ph-currency-dollar-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 168a44.05 44.05 0 0 1-44 44h-20v20a4 4 0 0 1-8 0v-20h-20a44.05 44.05 0 0 1-44-44a4 4 0 0 1 8 0a36 36 0 0 0 36 36h48a36 36 0 0 0 0-72h-40a44 44 0 0 1 0-88h12V24a4 4 0 0 1 8 0v20h12a44.05 44.05 0 0 1 44 44a4 4 0 0 1-8 0a36 36 0 0 0-36-36h-32a36 36 0 0 0 0 72h40a44.05 44.05 0 0 1 44 44"></svg:path>`,
})
export class PhCurrencyDollarSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyDollarThinIcon],svg[ph-currency-dollar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 124h-20V52h12a36 36 0 0 1 36 36a4 4 0 0 0 8 0a44.05 44.05 0 0 0-44-44h-12V24a4 4 0 0 0-8 0v20h-12a44 44 0 0 0 0 88h12v72h-20a36 36 0 0 1-36-36a4 4 0 0 0-8 0a44.05 44.05 0 0 0 44 44h20v20a4 4 0 0 0 8 0v-20h20a44 44 0 0 0 0-88m-40 0a36 36 0 0 1 0-72h12v72Zm40 80h-20v-72h20a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhCurrencyDollarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthIcon],svg[ph-currency-eth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 39.13l67.42 85.8L136 155.58Zm-16 116.45l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Zm16 0l53.43-24.29l-53.43 68Z"></svg:path>`,
})
export class PhCurrencyEthIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthBoldIcon],svg[ph-currency-eth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m225.44 120.59l-88-112a12 12 0 0 0-18.88 0l-88 112a12 12 0 0 0 0 14.82l.6.76a3.7 3.7 0 0 0 .44.56l87 110.68a12 12 0 0 0 18.88 0l88-112a12 12 0 0 0-.04-14.82M140 50.7l57.12 72.7l-57.12 26Zm-24 98.66l-57.12-26L116 50.7Zm0 26.37v29.57l-36.15-46Zm24 0l36.15-16.43l-36.15 46Z"></svg:path>`,
})
export class PhCurrencyEthBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthDuotoneIcon],svg[ph-currency-eth-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 128l-88 112l-88-112l88 40Z" opacity=".2"></svg:path><svg:path d="m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 39.13l67.42 85.8L136 155.58Zm-16 116.45l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Zm16 0l53.43-24.29l-53.43 68Z"></svg:path></svg:g>`,
})
export class PhCurrencyEthDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthFillIcon],svg[ph-currency-eth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.29 123.06l-88-112a8 8 0 0 0-12.58 0l-88 112a8 8 0 0 0 0 9.88l88 112a8 8 0 0 0 12.58 0l88-112a8 8 0 0 0 0-9.88M136 155.58V39.13l67.42 85.8Zm-16 0l-67.42-30.65L120 39.13Zm0 17.57v43.72l-53.43-68Z"></svg:path>`,
})
export class PhCurrencyEthFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthLightIcon],svg[ph-currency-eth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.72 124.29l-88-112a6 6 0 0 0-9.44 0l-88 112a6 6 0 0 0 0 7.42l88 112a6 6 0 0 0 9.44 0l88-112a6 6 0 0 0 0-7.42M134 33.35l72.56 92.35l-72.56 33Zm-12 125.33l-72.56-33L122 33.35Zm0 13.18v50.79l-62.08-79Zm12 0l62.08-28.21l-62.08 79Z"></svg:path>`,
})
export class PhCurrencyEthLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEthThinIcon],svg[ph-currency-eth-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.15 125.53l-88-112a4 4 0 0 0-6.3 0l-88 112a4 4 0 0 0 0 4.94l88 112a4 4 0 0 0 6.3 0l88-112a4 4 0 0 0 0-4.94M132 27.57l77.71 98.9L132 161.79Zm-8 134.22l-77.71-35.32L124 27.57Zm0 8.79v57.85l-70.72-90Zm8 0l70.72-32.15l-70.72 90Z"></svg:path>`,
})
export class PhCurrencyEthThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurIcon],svg[ph-currency-eur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 192.33a8 8 0 0 1-.63 11.3A80 80 0 0 1 56.4 152H40a8 8 0 0 1 0-16h16v-16H40a8 8 0 0 1 0-16h16.4a80 80 0 0 1 132.94-51.63a8 8 0 0 1-10.68 11.93A64 64 0 0 0 72.52 104H136a8 8 0 0 1 0 16H72v16h48a8 8 0 0 1 0 16H72.52a64 64 0 0 0 106.14 39.71a8 8 0 0 1 11.34.62"></svg:path>`,
})
export class PhCurrencyEurIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurBoldIcon],svg[ph-currency-eur-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.94 189.66a12 12 0 0 1-.94 17A84 84 0 0 1 53.55 160H40a12 12 0 0 1 0-24h12v-16H40a12 12 0 0 1 0-24h13.55A84 84 0 0 1 192 49.39a12 12 0 0 1-16 17.89A60 60 0 0 0 78.18 96H136a12 12 0 0 1 0 24H76v16h44a12 12 0 0 1 0 24H78.18A60 60 0 0 0 176 188.72a12 12 0 0 1 16.94.94"></svg:path>`,
})
export class PhCurrencyEurBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurDuotoneIcon],svg[ph-currency-eur-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 58.33v139.34A72 72 0 0 1 64 144v-32a72 72 0 0 1 120-53.67" opacity=".2"></svg:path><svg:path d="M190 192.33a8 8 0 0 1-.63 11.3A80 80 0 0 1 56.4 152H40a8 8 0 0 1 0-16h16v-16H40a8 8 0 0 1 0-16h16.4a80 80 0 0 1 132.94-51.63a8 8 0 0 1-10.68 11.93A64 64 0 0 0 72.52 104H136a8 8 0 0 1 0 16H72v16h48a8 8 0 0 1 0 16H72.52a64 64 0 0 0 106.14 39.71a8 8 0 0 1 11.34.62"></svg:path></svg:g>`,
})
export class PhCurrencyEurDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurFillIcon],svg[ph-currency-eur-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 80a8 8 0 0 1 0 16H88v16h24a8 8 0 0 1 0 16H88.81a40 40 0 0 0 65.86 21.82a8 8 0 1 1 10.66 11.92A56 56 0 0 1 72.58 152H64a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8.58a56 56 0 0 1 92.75-33.74a8 8 0 1 1-10.66 11.92A40 40 0 0 0 88.81 104Z"></svg:path>`,
})
export class PhCurrencyEurFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurLightIcon],svg[ph-currency-eur-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.47 193.66a6 6 0 0 1-.47 8.48A78 78 0 0 1 58.25 150H40a6 6 0 0 1 0-12h18v-20H40a6 6 0 0 1 0-12h18.25A78 78 0 0 1 188 53.86a6 6 0 0 1-8 9A66 66 0 0 0 70.29 106H136a6 6 0 0 1 0 12H70v20h50a6 6 0 0 1 0 12H70.29A66 66 0 0 0 180 193.2a6 6 0 0 1 8.47.46"></svg:path>`,
})
export class PhCurrencyEurLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurThinIcon],svg[ph-currency-eur-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187 195a4 4 0 0 1-.31 5.65A76 76 0 0 1 60.11 148H40a4 4 0 0 1 0-8h20v-24H40a4 4 0 0 1 0-8h20.11a76 76 0 0 1 126.56-52.65a4 4 0 1 1-5.34 6A68 68 0 0 0 68.13 108H136a4 4 0 0 1 0 8H68v24h52a4 4 0 0 1 0 8H68.13a68 68 0 0 0 113.2 46.69a4 4 0 0 1 5.67.31"></svg:path>`,
})
export class PhCurrencyEurThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpIcon],svg[ph-currency-gbp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 208a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h4a28 28 0 0 0 28-28v-36H56a8 8 0 0 1 0-16h32V84a52 52 0 0 1 85.08-40.12a8 8 0 1 1-10.18 12.34A36 36 0 0 0 104 84v36h32a8 8 0 0 1 0 16h-32v36a43.82 43.82 0 0 1-10.08 28H184a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCurrencyGbpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpBoldIcon],svg[ph-currency-gbp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 208a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h4a24 24 0 0 0 24-24v-32H56a12 12 0 0 1 0-24h28V84a56 56 0 0 1 91.63-43.21a12 12 0 0 1-15.28 18.51A31.66 31.66 0 0 0 140 52a32 32 0 0 0-32 32v32h28a12 12 0 0 1 0 24h-28v32a47.74 47.74 0 0 1-6.44 24H184a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCurrencyGbpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpDuotoneIcon],svg[ph-currency-gbp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 208H60a36 36 0 0 0 36-36V84a44 44 0 0 1 72-33.95Z" opacity=".2"></svg:path><svg:path d="M192 208a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h4a28 28 0 0 0 28-28v-36H56a8 8 0 0 1 0-16h32V84a52 52 0 0 1 85.08-40.12a8 8 0 1 1-10.18 12.34A36 36 0 0 0 104 84v36h32a8 8 0 0 1 0 16h-32v36a43.82 43.82 0 0 1-10.08 28H184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCurrencyGbpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpFillIcon],svg[ph-currency-gbp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 160H88a8 8 0 0 1 0-16a16 16 0 0 0 16-16v-16H88a8 8 0 0 1 0-16h16V96a40 40 0 0 1 60-34.64a8 8 0 0 1-8 13.85A24 24 0 0 0 120 96v24h16a8 8 0 0 1 0 16h-16v16a31.7 31.7 0 0 1-4.31 16H168a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyGbpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpLightIcon],svg[ph-currency-gbp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 208a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h4a30 30 0 0 0 30-30v-38H56a6 6 0 0 1 0-12h34V84a50 50 0 0 1 81.81-38.58a6 6 0 1 1-7.64 9.26A38 38 0 0 0 102 84v38h34a6 6 0 0 1 0 12h-34v38a41.88 41.88 0 0 1-12.63 30H184a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCurrencyGbpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpThinIcon],svg[ph-currency-gbp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 208a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h4a32 32 0 0 0 32-32v-40H56a4 4 0 0 1 0-8h36V84a48 48 0 0 1 78.53-37a4 4 0 1 1-5.09 6.17A40 40 0 0 0 100 84v40h36a4 4 0 0 1 0 8h-36v40a40 40 0 0 1-16 32h100a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCurrencyGbpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrIcon],svg[ph-currency-inr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80a8 8 0 0 1-8 8h-32.15c.09 1.32.15 2.65.15 4a60.07 60.07 0 0 1-60 60H92.69l72.69 66.08a8 8 0 1 1-10.76 11.84l-88-80A8 8 0 0 1 72 136h36a44.05 44.05 0 0 0 44-44c0-1.35-.07-2.68-.19-4H72a8 8 0 0 1 0-16h75.17A44 44 0 0 0 108 48H72a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-51.26a60.1 60.1 0 0 1 15.82 24H200a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCurrencyInrIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrBoldIcon],svg[ph-currency-inr-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80a12 12 0 0 1-12 12h-28a64.07 64.07 0 0 1-64 64h-5l65 59.12a12 12 0 1 1-16.14 17.76l-88-80A12 12 0 0 1 72 132h36a40 40 0 0 0 40-40H72a12 12 0 0 1 0-24h68a40 40 0 0 0-32-16H72a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24h-42.09a64 64 0 0 1 9.4 16H200a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCurrencyInrBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrDuotoneIcon],svg[ph-currency-inr-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 92a52 52 0 0 1-52 52H72V40h36a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M208 80a8 8 0 0 1-8 8h-32.15c.09 1.32.15 2.65.15 4a60.07 60.07 0 0 1-60 60H92.69l72.69 66.08a8 8 0 1 1-10.76 11.84l-88-80A8 8 0 0 1 72 136h36a44.05 44.05 0 0 0 44-44c0-1.35-.07-2.68-.19-4H72a8 8 0 0 1 0-16h75.17A44 44 0 0 0 108 48H72a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-51.26a60.1 60.1 0 0 1 15.82 24H200a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCurrencyInrDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrFillIcon],svg[ph-currency-inr-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m38.32 72H176a8 8 0 0 1 0 16h-8.19A44.06 44.06 0 0 1 124 152h-12.68l53.59 41.69a8 8 0 1 1-9.82 12.62l-72-56A8 8 0 0 1 88 136h36a28 28 0 0 0 27.71-24H88a8 8 0 0 1 0-16h61.29A28 28 0 0 0 124 80H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-18.08a43.9 43.9 0 0 1 8.4 16"></svg:path>`,
})
export class PhCurrencyInrFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrLightIcon],svg[ph-currency-inr-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 80a6 6 0 0 1-6 6h-34.31a59 59 0 0 1 .31 6a58.07 58.07 0 0 1-58 58H87.52L164 219.56a6 6 0 0 1-8.08 8.88l-88-80A6 6 0 0 1 72 138h36a46.06 46.06 0 0 0 46-46a48 48 0 0 0-.4-6H72a6 6 0 0 1 0-12h78.33A46.08 46.08 0 0 0 108 46H72a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12h-56.73a58.25 58.25 0 0 1 19.86 28H200a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCurrencyInrLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrThinIcon],svg[ph-currency-inr-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 80a4 4 0 0 1-4 4h-36.58a57 57 0 0 1 .58 8a56.06 56.06 0 0 1-56 56H82.35l80.34 73a4 4 0 1 1-5.38 5.92l-88-80A4 4 0 0 1 72 140h36a48 48 0 0 0 47.32-56H72a4 4 0 0 1 0-8h81.25A48.09 48.09 0 0 0 108 44H72a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8h-63.19a56.24 56.24 0 0 1 24.85 32H200a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCurrencyInrThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyIcon],svg[ph-currency-jpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.19 53.07L144.88 128H176a8 8 0 0 1 0 16h-40v16h40a8 8 0 0 1 0 16h-40v40a8 8 0 0 1-16 0v-40H80a8 8 0 0 1 0-16h40v-16H80a8 8 0 0 1 0-16h31.12L49.81 53.07a8 8 0 0 1 12.38-10.14L128 123.37l65.81-80.44a8 8 0 1 1 12.38 10.14"></svg:path>`,
})
export class PhCurrencyJpyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyBoldIcon],svg[ph-currency-jpy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m209.29 55.6l-56 68.4H176a12 12 0 0 1 0 24h-36v16h36a12 12 0 0 1 0 24h-36v28a12 12 0 0 1-24 0v-28H80a12 12 0 0 1 0-24h36v-16H80a12 12 0 0 1 0-24h22.68l-56-68.4a12 12 0 1 1 18.61-15.2L128 117.05l62.71-76.65a12 12 0 1 1 18.58 15.2"></svg:path>`,
})
export class PhCurrencyJpyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyDuotoneIcon],svg[ph-currency-jpy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 48l-72 88l-72-88Z" opacity=".2"></svg:path><svg:path d="M206.19 53.07L144.88 128H176a8 8 0 0 1 0 16h-40v16h40a8 8 0 0 1 0 16h-40v40a8 8 0 0 1-16 0v-40H80a8 8 0 0 1 0-16h40v-16H80a8 8 0 0 1 0-16h31.12L49.81 53.07a8 8 0 0 1 12.38-10.14L128 123.37l65.81-80.44a8 8 0 1 1 12.38 10.14"></svg:path></svg:g>`,
})
export class PhCurrencyJpyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyFillIcon],svg[ph-currency-jpy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.4 52.8L144 128h16a8 8 0 0 1 0 16h-24v16h24a8 8 0 0 1 0 16h-24v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1 0-16h24v-16H96a8 8 0 0 1 0-16h16L73.6 76.8a8 8 0 1 1 12.8-9.6l41.6 55.47l41.6-55.47a8 8 0 0 1 12.8 9.6"></svg:path>`,
})
export class PhCurrencyJpyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyLightIcon],svg[ph-currency-jpy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.64 51.8l-64 78.2H176a6 6 0 0 1 0 12h-42v20h42a6 6 0 0 1 0 12h-42v42a6 6 0 0 1-12 0v-42H80a6 6 0 0 1 0-12h42v-20H80a6 6 0 0 1 0-12h35.34l-64-78.2a6 6 0 1 1 9.28-7.6L128 126.53l67.36-82.33a6 6 0 0 1 9.28 7.6"></svg:path>`,
})
export class PhCurrencyJpyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyThinIcon],svg[ph-currency-jpy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.1 50.53L136.44 132H176a4 4 0 0 1 0 8h-44v24h44a4 4 0 0 1 0 8h-44v44a4 4 0 0 1-8 0v-44H80a4 4 0 0 1 0-8h44v-24H80a4 4 0 0 1 0-8h39.56L52.9 50.53a4 4 0 0 1 6.2-5.06l68.9 84.21l68.9-84.21a4 4 0 1 1 6.2 5.06"></svg:path>`,
})
export class PhCurrencyJpyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwIcon],svg[ph-currency-krw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128h-22.11l21.52-53a8 8 0 1 0-14.82-6l-24 59h-41.21l-24-59a8 8 0 0 0-14.82 0l-24 59H55.38l-24-59a8 8 0 0 0-14.82 6l21.52 53H16a8 8 0 0 0 0 16h28.61l24 59a8 8 0 0 0 14.82 0l24-59h41.24l24 59a8 8 0 0 0 14.82 0l24-59H240a8 8 0 0 0 0-16M76 178.75L61.88 144h28.24ZM113.88 128L128 93.26L142.12 128ZM180 178.75L165.88 144h28.24Z"></svg:path>`,
})
export class PhCurrencyKrwIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwBoldIcon],svg[ph-currency-krw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 124h-16.17l19.29-47.48a12 12 0 0 0-22.24-9l-23 56.51h-35.8l-23-56.51a12 12 0 0 0-22.24 0L93.92 124H58.08l-23-56.51a12 12 0 0 0-22.24 9L32.17 124H16a12 12 0 0 0 0 24h25.92l23 56.52a12 12 0 0 0 22.24 0l23-56.52H146l23 56.52a12 12 0 0 0 22.24 0l23-56.52H240a12 12 0 0 0 0-24M76 168.12L67.83 148h16.34ZM119.83 124l8.17-20.11l8.17 20.11ZM180 168.12L171.83 148h16.34Z"></svg:path>`,
})
export class PhCurrencyKrwBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwDuotoneIcon],svg[ph-currency-krw-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M50 136h52l-26 64Zm52 0h52l-26-64Zm52 0l26 64l26-64Z" opacity=".2"></svg:path><svg:path d="M240 128h-22.11l21.52-53a8 8 0 1 0-14.82-6l-24 59h-41.21l-24-59a8 8 0 0 0-14.82 0l-24 59H55.38l-24-59a8 8 0 0 0-14.82 6l21.52 53H16a8 8 0 0 0 0 16h28.61l24 59a8 8 0 0 0 14.82 0l24-59h41.24l24 59a8 8 0 0 0 14.82 0l24-59H240a8 8 0 0 0 0-16M76 178.75L61.88 144h28.24ZM113.88 128L128 93.26L142.12 128ZM180 178.75L165.88 144h28.24Z"></svg:path></svg:g>`,
})
export class PhCurrencyKrwDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwFillIcon],svg[ph-currency-krw-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m72 120h-18.58l-14 35a8 8 0 0 1-14.86 0L128 117.54L103.43 179a8 8 0 0 1-14.86 0l-14-35H56a8 8 0 0 1 0-16h12.18L56.57 99a8 8 0 1 1 14.86-6L96 154.46L120.57 93a8 8 0 0 1 14.86 0L160 154.46L184.57 93a8 8 0 1 1 14.86 6l-11.61 29H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyKrwFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwLightIcon],svg[ph-currency-krw-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 130h-25.09l22.65-55.74a6 6 0 0 0-11.12-4.52L202 130h-44l-24.44-60.26a6 6 0 0 0-11.12 0L98 130H54L29.56 69.74a6 6 0 1 0-11.12 4.52L41.09 130H16a6 6 0 0 0 0 12h30l24.48 60.26a6 6 0 0 0 11.12 0L106 142h44l24.48 60.26a6 6 0 0 0 11.12 0L210 142h30a6 6 0 0 0 0-12M76 184.06L58.91 142h34.18ZM110.91 130L128 87.94L145.09 130ZM180 184.06L162.91 142h34.18Z"></svg:path>`,
})
export class PhCurrencyKrwLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKrwThinIcon],svg[ph-currency-krw-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 132h-28.06l23.77-58.49a4 4 0 1 0-7.42-3l-25 61.51h-46.6l-25-61.51a4 4 0 0 0-7.42 0L99.31 132H52.69l-25-61.51a4 4 0 0 0-7.42 3L44.06 132H16a4 4 0 0 0 0 8h31.31l25 61.51a4 4 0 0 0 7.42 0l25-61.51h46.62l25 61.51a4 4 0 0 0 7.42 0l25-61.51H240a4 4 0 0 0 0-8M76 189.37L55.94 140h40.12ZM107.94 132L128 82.63L148.06 132ZM180 189.37L159.94 140h40.12Z"></svg:path>`,
})
export class PhCurrencyKrwThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztIcon],svg[ph-currency-kzt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 96a8 8 0 0 1-8 8h-64v112a8 8 0 0 1-16 0V104H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M56 64h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCurrencyKztIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztBoldIcon],svg[ph-currency-kzt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 100a12 12 0 0 1-12 12h-60v100a12 12 0 0 1-24 0V112H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M56 64h144a12 12 0 0 0 0-24H56a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCurrencyKztBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztDuotoneIcon],svg[ph-currency-kzt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v40H56V56Z" opacity=".2"></svg:path><svg:path d="M208 96a8 8 0 0 1-8 8h-64v112a8 8 0 0 1-16 0V104H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8M56 64h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhCurrencyKztDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztFillIcon],svg[ph-currency-kzt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m48 96h-40v72a8 8 0 0 1-16 0v-72H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-32H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyKztFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztLightIcon],svg[ph-currency-kzt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 96a6 6 0 0 1-6 6h-66v114a6 6 0 0 1-12 0V102H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M56 62h144a6 6 0 0 0 0-12H56a6 6 0 0 0 0 12"></svg:path>`,
})
export class PhCurrencyKztLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyKztThinIcon],svg[ph-currency-kzt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 96a4 4 0 0 1-4 4h-68v116a4 4 0 0 1-8 0V100H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M56 60h144a4 4 0 0 0 0-8H56a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhCurrencyKztThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnIcon],svg[ph-currency-ngn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 136h-16v-16h16a8 8 0 0 0 0-16h-16V46a8 8 0 0 0-16 0v58h-64.58L70.31 41.08A8 8 0 0 0 56 46v58H40a8 8 0 0 0 0 16h16v16H40a8 8 0 0 0 0 16h16v58a8 8 0 0 0 16 0v-58h64.58l49.11 62.92A8 8 0 0 0 192 218a7.8 7.8 0 0 0 2.6-.44A8 8 0 0 0 200 210v-58h16a8 8 0 0 0 0-16m-32-16v16h-39.61l-12.49-16ZM72 69.25L99.12 104H72ZM72 136v-16h39.61l12.49 16Zm112 50.75L156.88 152H184Z"></svg:path>`,
})
export class PhCurrencyNgnIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnBoldIcon],svg[ph-currency-ngn-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 116h-12V46a12 12 0 0 0-24 0v70h-46.14l-60.4-77.38A12 12 0 0 0 52 46v70H40a12 12 0 0 0 0 24h12v70a12 12 0 0 0 24 0v-70h46.14l60.4 77.38A12 12 0 0 0 204 210v-70h12a12 12 0 0 0 0-24m-140 0V80.88L103.41 116Zm104 59.12L152.59 140H180Z"></svg:path>`,
})
export class PhCurrencyNgnBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnDuotoneIcon],svg[ph-currency-ngn-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112v98l-51.51-66H64V46l51.51 66Z" opacity=".2"></svg:path><svg:path d="M216 136h-16v-16h16a8 8 0 0 0 0-16h-16V46a8 8 0 0 0-16 0v58h-64.58L70.31 41.08A8 8 0 0 0 56 46v58H40a8 8 0 0 0 0 16h16v16H40a8 8 0 0 0 0 16h16v58a8 8 0 0 0 16 0v-58h64.58l49.11 62.92A8 8 0 0 0 192 218a7.8 7.8 0 0 0 2.6-.44A8 8 0 0 0 200 210v-58h16a8 8 0 0 0 0-16m-32-16v16h-39.61l-12.49-16ZM72 69.25L99.12 104H72ZM72 136v-16h39.61l12.49 16Zm112 50.75L156.88 152H184Z"></svg:path></svg:g>`,
})
export class PhCurrencyNgnDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnFillIcon],svg[ph-currency-ngn-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M143.55 136H160v23ZM96 120h16.45L96 97Zm136 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-32 0a8 8 0 0 0-8-8h-16V72a8 8 0 0 0-16 0v48h-27.88L94.51 67.35A8 8 0 0 0 80 72v48H64a8 8 0 0 0 0 16h16v48a8 8 0 0 0 16 0v-48h27.88l37.61 52.65A8 8 0 0 0 168 192a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 176 184v-48h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhCurrencyNgnFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnLightIcon],svg[ph-currency-ngn-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 138h-18v-20h18a6 6 0 0 0 0-12h-18V46a6 6 0 0 0-12 0v60h-67.56L68.73 42.31A6 6 0 0 0 58 46v60H40a6 6 0 0 0 0 12h18v20H40a6 6 0 0 0 0 12h18v60a6 6 0 0 0 12 0v-60h67.56l49.71 63.69A6 6 0 0 0 198 210v-60h18a6 6 0 0 0 0-12m-30-20v20h-42.58l-15.61-20ZM70 63.44L103.22 106H70ZM70 138v-20h42.58l15.61 20Zm116 54.56L152.78 150H186Z"></svg:path>`,
})
export class PhCurrencyNgnLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyNgnThinIcon],svg[ph-currency-ngn-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 140h-20v-24h20a4 4 0 0 0 0-8h-20V46a4 4 0 0 0-8 0v62h-70.54L67.15 43.54A4 4 0 0 0 60 46v62H40a4 4 0 0 0 0 8h20v24H40a4 4 0 0 0 0 8h20v62a4 4 0 0 0 8 0v-62h70.54l50.31 64.46A4 4 0 0 0 192 214a3.9 3.9 0 0 0 1.3-.22A4 4 0 0 0 196 210v-62h20a4 4 0 0 0 0-8m-28-24v24h-45.56l-18.73-24ZM68 57.63L107.32 108H68ZM68 140v-24h45.56l18.73 24Zm120 58.37L148.68 148H188Z"></svg:path>`,
})
export class PhCurrencyNgnThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubIcon],svg[ph-currency-rub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z"></svg:path>`,
})
export class PhCurrencyRubIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubBoldIcon],svg[ph-currency-rub-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 156a64 64 0 0 0 0-128H88a12 12 0 0 0-12 12v92H56a12 12 0 0 0 0 24h20v16H56a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h44a12 12 0 0 0 0-24h-44v-16ZM100 52h48a40 40 0 0 1 0 80h-48Z"></svg:path>`,
})
export class PhCurrencyRubBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubDuotoneIcon],svg[ph-currency-rub-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 92a52 52 0 0 1-52 52H88V40h60a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z"></svg:path></svg:g>`,
})
export class PhCurrencyRubDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubFillIcon],svg[ph-currency-rub-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 104a24 24 0 0 1-24 24h-32V80h32a24 24 0 0 1 24 24m64 24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-48-24a40 40 0 0 0-40-40h-40a8 8 0 0 0-8 8v56h-8a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16a8 8 0 0 0 16 0v-16h40a8 8 0 0 0 0-16h-40v-16h32a40 40 0 0 0 40-40"></svg:path>`,
})
export class PhCurrencyRubFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubLightIcon],svg[ph-currency-rub-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 150a58 58 0 0 0 0-116H88a6 6 0 0 0-6 6v98H56a6 6 0 0 0 0 12h26v20H56a6 6 0 0 0 0 12h26v34a6 6 0 0 0 12 0v-34h50a6 6 0 0 0 0-12H94v-20ZM94 46h54a46 46 0 0 1 0 92H94Z"></svg:path>`,
})
export class PhCurrencyRubLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCurrencyRubThinIcon],svg[ph-currency-rub-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 36H88a4 4 0 0 0-4 4v100H56a4 4 0 0 0 0 8h28v24H56a4 4 0 0 0 0 8h28v36a4 4 0 0 0 8 0v-36h52a4 4 0 0 0 0-8H92v-24h56a56 56 0 0 0 0-112m0 104H92V44h56a48 48 0 0 1 0 96"></svg:path>`,
})
export class PhCurrencyRubThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorIcon],svg[ph-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 132.69L214.08 115l.33-.13a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l.13-.33L132.69 168L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63ZM195.31 208L144 156.69a16 16 0 0 0-26 4.93c0 .11-.09.22-.13.32l-17.65 46L48 48l159.85 52.2l-45.95 17.64l-.32.13a16 16 0 0 0-4.93 26L208 195.31Z"></svg:path>`,
})
export class PhCursorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorBoldIcon],svg[ph-cursor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.15 179.17l-46.83-46.82l37.93-13.51l.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92l46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17l-48.48-48.48A20 20 0 0 0 130.7 150a20.7 20.7 0 0 0-3.74.35A20 20 0 0 0 112.35 162c-.11.25-.21.5-.3.76L100.4 195.5L54.29 54.29l141.21 46.1l-32.71 11.66c-.26.09-.51.19-.76.3a20 20 0 0 0-6.17 32.48l48.49 48.48Z"></svg:path>`,
})
export class PhCursorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickIcon],svg[ph-cursor-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 24v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m-72 80h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31M219.31 184a16 16 0 0 1 0 22.63l-12.68 12.68a16 16 0 0 1-22.63 0L132.7 168L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13L168 132.69ZM208 195.31L156.69 144a16 16 0 0 1 4.93-26l.32-.14l45.95-17.64L48 48l52.2 159.86l17.65-46c0-.11.08-.22.13-.33a16 16 0 0 1 11.69-9.34a16.7 16.7 0 0 1 3-.28a16 16 0 0 1 11.3 4.69l51.34 51.4Z"></svg:path>`,
})
export class PhCursorClickIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickBoldIcon],svg[ph-cursor-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.15 179.17l-46.82-46.82l37.92-13.51c.26-.09.51-.19.76-.3a20 20 0 0 0-1.76-37.27L54.16 29A20 20 0 0 0 29 54.16l52.27 160.08a20 20 0 0 0 37.27 1.76c.11-.25.21-.5.3-.76l13.51-37.92l46.83 46.82a20 20 0 0 0 28.28 0l16.69-16.68a20 20 0 0 0 0-28.29m-30.83 25.17l-48.48-48.48A20 20 0 0 0 130.7 150a20.5 20.5 0 0 0-3.73.35A20 20 0 0 0 112.35 162c-.11.25-.2.5-.3.76L100.4 195.5L54.29 54.29L195.5 100.4l-32.71 11.65c-.25.09-.51.19-.76.3a20 20 0 0 0-6.16 32.48l48.48 48.48ZM84 16v-4a12 12 0 0 1 24 0v4a12 12 0 0 1-24 0m-72 92a12 12 0 0 1 0-24h4a12 12 0 0 1 0 24Zm108.62-83.79l4-12a12 12 0 0 1 22.77 7.58l-4 12a12 12 0 0 1-22.77-7.58m-81.23 104a12 12 0 0 1-7.59 15.17l-12 4a12 12 0 1 1-7.59-22.76l12-4a12 12 0 0 1 15.18 7.59"></svg:path>`,
})
export class PhCursorClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickDuotoneIcon],svg[ph-cursor-click-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.66 201L201 213.66a8 8 0 0 1-11.31 0l-51.31-51.31a8 8 0 0 0-13 2.46l-17.82 46.41a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85l-46.41 17.82a8 8 0 0 0-2.46 13l51.31 51.31a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M88 24v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m-72 80h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31M219.31 184a16 16 0 0 1 0 22.63l-12.68 12.68a16 16 0 0 1-22.63 0L132.7 168L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13L168 132.69ZM208 195.31L156.69 144a16 16 0 0 1 4.93-26l.32-.14l45.95-17.64L48 48l52.2 159.86l17.65-46c0-.11.08-.22.13-.33a16 16 0 0 1 11.69-9.34a16.7 16.7 0 0 1 3-.28a16 16 0 0 1 11.3 4.69l51.34 51.4Z"></svg:path></svg:g>`,
})
export class PhCursorClickDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickFillIcon],svg[ph-cursor-click-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220.49 190.83a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-56.56-56.57L115 214.09c0 .1-.08.21-.13.32a15.83 15.83 0 0 1-14.6 9.59h-.79a15.83 15.83 0 0 1-14.41-11L32.8 52.92A16 16 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.32.13l-50.17 19.27ZM96 32a8 8 0 0 0 8-8v-8a8 8 0 0 0-16 0v8a8 8 0 0 0 8 8m-80 72h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16m108.42-64.84a8 8 0 0 0 10.74-3.58l8-16a8 8 0 0 0-14.31-7.16l-8 16a8 8 0 0 0 3.57 10.74m-96 81.69l-16 8a8 8 0 0 0 7.16 14.31l16-8a8 8 0 1 0-7.16-14.31"></svg:path>`,
})
export class PhCursorClickFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickLightIcon],svg[ph-cursor-click-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 24v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0m-74 78h8a6 6 0 0 0 0-12h-8a6 6 0 0 0 0 12m109.32-64.63a6 6 0 0 0 8.05-2.69l8-16a6 6 0 0 0-10.74-5.37l-8 16a6 6 0 0 0 2.69 8.06m-96 85.26l-16 8a6 6 0 0 0 5.36 10.74l16-8a6 6 0 1 0-5.36-10.74m188.58 62.78a14 14 0 0 1 0 19.8l-12.69 12.69a14 14 0 0 1-19.8 0l-51.31-51.31a2 2 0 0 0-3.21.54l-17.75 46.24a2 2 0 0 0-.1.24a13.85 13.85 0 0 1-12.78 8.39h-.68A13.85 13.85 0 0 1 87 212.38L34.7 52.3a14 14 0 0 1 17.6-17.6L212.38 87a14 14 0 0 1 1.23 26l-.24.09l-46.25 17.76a2 2 0 0 0-.53 3.21Zm-8.49 8.49l-51.31-51.31a14 14 0 0 1 4.32-22.74l.24-.1L208.91 102a2 2 0 0 0-.26-3.61L48.58 46.11a2.3 2.3 0 0 0-.65-.11a2 2 0 0 0-1.82 2.58l52.27 160.07a1.84 1.84 0 0 0 1.77 1.35a1.81 1.81 0 0 0 1.84-1.09l17.76-46.25l.1-.24a14 14 0 0 1 22.74-4.32l51.31 51.31a2 2 0 0 0 2.83 0l12.68-12.68a2 2 0 0 0 0-2.83"></svg:path>`,
})
export class PhCursorClickLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorClickThinIcon],svg[ph-cursor-click-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 24v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m-76 76h8a4 4 0 0 0 0-8h-8a4 4 0 0 0 0 8m110.21-64.42a4 4 0 0 0 5.37-1.79l8-16a4 4 0 0 0-7.16-3.58l-8 16a4 4 0 0 0 1.79 5.37m-96 88.84l-16 8a4 4 0 0 0 3.58 7.16l16-8a4 4 0 1 0-3.58-7.16m186.28 62.41a12 12 0 0 1 0 17l-12.69 12.66a12 12 0 0 1-17 0l-51.31-51.31a3.93 3.93 0 0 0-3.58-1.11a4 4 0 0 0-2.89 2.27l-17.78 46.31a1 1 0 0 1-.07.16a11.85 11.85 0 0 1-10.91 7.19h-.59a11.88 11.88 0 0 1-10.8-8.23L36.6 51.68A12 12 0 0 1 51.68 36.6l160.08 52.27a12 12 0 0 1 1.05 22.33l-.16.07l-46.31 17.78a4 4 0 0 0-1.17 6.47Zm-5.66 5.66l-51.31-51.32a12 12 0 0 1 3.7-19.49l.16-.06l46.31-17.79a3.95 3.95 0 0 0-.42-7.35L49.2 44.21a4 4 0 0 0-5 5l52.28 160.06a4 4 0 0 0 7.36.42l17.78-46.31a1 1 0 0 1 .07-.16a12 12 0 0 1 8.76-7a12 12 0 0 1 2.24-.21a12 12 0 0 1 8.49 3.52l51.31 51.31a4 4 0 0 0 5.65 0l12.69-12.69a4 4 0 0 0 0-5.66"></svg:path>`,
})
export class PhCursorClickThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorDuotoneIcon],svg[ph-cursor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M213.66 201L201 213.66a8 8 0 0 1-11.31 0l-51.31-51.31a8 8 0 0 0-13 2.46l-17.82 46.41a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85l-46.41 17.82a8 8 0 0 0-2.46 13l51.31 51.31a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="M168 132.69L214.08 115l.33-.13a16 16 0 0 0-1.41-29.8L52.92 32.8A15.95 15.95 0 0 0 32.8 52.92L85.07 213a15.82 15.82 0 0 0 14.41 11h.78a15.84 15.84 0 0 0 14.61-9.59l.13-.33L132.69 168L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63ZM195.31 208L144 156.69a16 16 0 0 0-26 4.93c0 .11-.09.22-.13.32l-17.65 46L48 48l159.85 52.2l-45.95 17.64l-.32.13a16 16 0 0 0-4.93 26L208 195.31Z"></svg:path></svg:g>`,
})
export class PhCursorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorFillIcon],svg[ph-cursor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.49 207.8l-12.69 12.69a12 12 0 0 1-17 0l-56.57-56.57L115 214.08l-.13.33a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-.33.13l-50.16 19.27l56.57 56.56a12 12 0 0 1 0 16.97"></svg:path>`,
})
export class PhCursorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorLightIcon],svg[ph-cursor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166.59 134.1a1.91 1.91 0 0 1-.55-1.79a2 2 0 0 1 1.08-1.42l46.25-17.76l.24-.1A14 14 0 0 0 212.38 87L52.29 34.7A13.95 13.95 0 0 0 34.7 52.29L87 212.38a13.82 13.82 0 0 0 12.6 9.6h.69a13.84 13.84 0 0 0 12.71-8.37a2 2 0 0 0 .1-.24l17.76-46.25a2 2 0 0 1 3.21-.53l51.31 51.31a14 14 0 0 0 19.8 0l12.69-12.69a14 14 0 0 0 0-19.8Zm42.82 62.63l-12.68 12.68a2 2 0 0 1-2.83 0l-51.31-51.31a14 14 0 0 0-22.74 4.32a2 2 0 0 0-.1.24L102 208.91a2 2 0 0 1-3.61-.26L46.11 48.57a1.87 1.87 0 0 1 .47-2a1.92 1.92 0 0 1 1.35-.57a2.2 2.2 0 0 1 .64.1l160.08 52.28a2 2 0 0 1 .26 3.61l-46.25 17.76l-.24.1a14 14 0 0 0-4.32 22.74l51.31 51.31a2 2 0 0 1 0 2.83"></svg:path>`,
})
export class PhCursorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextIcon],svg[ph-cursor-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16a40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16a40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhCursorTextIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextBoldIcon],svg[ph-cursor-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 208a12 12 0 0 1-12 12h-16a43.86 43.86 0 0 1-32-13.85A43.86 43.86 0 0 1 96 220H80a12 12 0 0 1 0-24h16a20 20 0 0 0 20-20v-36h-12a12 12 0 0 1 0-24h12V80a20 20 0 0 0-20-20H80a12 12 0 0 1 0-24h16a43.86 43.86 0 0 1 32 13.85A43.86 43.86 0 0 1 160 36h16a12 12 0 0 1 0 24h-16a20 20 0 0 0-20 20v36h12a12 12 0 0 1 0 24h-12v36a20 20 0 0 0 20 20h16a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCursorTextBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextDuotoneIcon],svg[ph-cursor-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 48v160h-16a32 32 0 0 1-32-32a32 32 0 0 1-32 32H80V48h16a32 32 0 0 1 32 32a32 32 0 0 1 32-32Z" opacity=".2"></svg:path><svg:path d="M184 208a8 8 0 0 1-8 8h-16a40 40 0 0 1-32-16a40 40 0 0 1-32 16H80a8 8 0 0 1 0-16h16a24 24 0 0 0 24-24v-40h-16a8 8 0 0 1 0-16h16V80a24 24 0 0 0-24-24H80a8 8 0 0 1 0-16h16a40 40 0 0 1 32 16a40 40 0 0 1 32-16h16a8 8 0 0 1 0 16h-16a24 24 0 0 0-24 24v40h16a8 8 0 0 1 0 16h-16v40a24 24 0 0 0 24 24h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCursorTextDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextFillIcon],svg[ph-cursor-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-64 88a8 8 0 0 1 0 16h-8v24a16 16 0 0 0 16 16h8a8 8 0 0 1 0 16h-8a31.92 31.92 0 0 1-24-10.87A31.92 31.92 0 0 1 104 192h-8a8 8 0 0 1 0-16h8a16 16 0 0 0 16-16v-24h-8a8 8 0 0 1 0-16h8V96a16 16 0 0 0-16-16h-8a8 8 0 0 1 0-16h8a31.92 31.92 0 0 1 24 10.87A31.92 31.92 0 0 1 152 64h8a8 8 0 0 1 0 16h-8a16 16 0 0 0-16 16v24Z"></svg:path>`,
})
export class PhCursorTextFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextLightIcon],svg[ph-cursor-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 208a6 6 0 0 1-6 6h-16a38 38 0 0 1-32-17.55A38 38 0 0 1 96 214H80a6 6 0 0 1 0-12h16a26 26 0 0 0 26-26v-42h-18a6 6 0 0 1 0-12h18V80a26 26 0 0 0-26-26H80a6 6 0 0 1 0-12h16a38 38 0 0 1 32 17.55A38 38 0 0 1 160 42h16a6 6 0 0 1 0 12h-16a26 26 0 0 0-26 26v42h18a6 6 0 0 1 0 12h-18v42a26 26 0 0 0 26 26h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCursorTextLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorTextThinIcon],svg[ph-cursor-text-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 208a4 4 0 0 1-4 4h-16a36 36 0 0 1-32-19.54A36 36 0 0 1 96 212H80a4 4 0 0 1 0-8h16a28 28 0 0 0 28-28v-44h-20a4 4 0 0 1 0-8h20V80a28 28 0 0 0-28-28H80a4 4 0 0 1 0-8h16a36 36 0 0 1 32 19.54A36 36 0 0 1 160 44h16a4 4 0 0 1 0 8h-16a28 28 0 0 0-28 28v44h20a4 4 0 0 1 0 8h-20v44a28 28 0 0 0 28 28h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCursorTextThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCursorThinIcon],svg[ph-cursor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.17 135.51a4 4 0 0 1 1.17-6.46l46.31-17.79l.16-.06a12 12 0 0 0-1.05-22.33L51.67 36.6A12 12 0 0 0 36.6 51.67l52.27 160.09a11.86 11.86 0 0 0 10.8 8.24h.58a11.86 11.86 0 0 0 11-7.19l.06-.16l17.79-46.31a4 4 0 0 1 6.47-1.17l51.31 51.32a12 12 0 0 0 17 0l12.69-12.69a12 12 0 0 0 0-17Zm45.66 62.63l-12.69 12.69a4 4 0 0 1-5.66 0l-51.31-51.31a12 12 0 0 0-8.48-3.52a12 12 0 0 0-2.24.21a12 12 0 0 0-8.77 7l-.06.16l-17.79 46.31a4 4 0 0 1-7.36-.42L44.2 49.19a4 4 0 0 1 5-5l160.07 52.28a4 4 0 0 1 .42 7.36l-46.31 17.78l-.16.07a12 12 0 0 0-3.71 19.49l51.32 51.31a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhCursorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderIcon],svg[ph-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 16c26.49 0 56 11.5 56 28s-29.51 28-56 28s-56-11.5-56-28s29.51-28 56-28m0 192c-29.83 0-56-13.08-56-28V88c13.1 9.85 33.14 16 56 16s42.9-6.2 56-16v108c0 14.92-26.17 28-56 28"></svg:path>`,
})
export class PhCylinderIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderBoldIcon],svg[ph-cylinder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.14 24.08C165.28 16.29 147.12 12 128 12s-37.28 4.29-51.14 12.08C60.83 33.1 52 45.86 52 60v136c0 14.14 8.83 26.9 24.86 35.92C90.72 239.71 108.88 244 128 244s37.28-4.29 51.14-12.08c16-9 24.86-21.78 24.86-35.92V60c0-14.14-8.83-26.9-24.86-35.92M88.63 45c10.17-5.72 24.52-9 39.37-9s29.2 3.28 39.37 9c8 4.52 12.63 10 12.63 15s-4.6 10.48-12.63 15c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 70.48 76 65 76 60s4.6-10.48 12.63-15m78.74 166c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 206.48 76 201 76 196V95.4l.86.52C90.72 103.71 108.88 108 128 108s37.28-4.29 51.14-12.08l.86-.52V196c0 5-4.6 10.48-12.63 15"></svg:path>`,
})
export class PhCylinderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderDuotoneIcon],svg[ph-cylinder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 60c0 19.88-28.65 36-64 36S64 79.88 64 60s28.65-36 64-36s64 16.12 64 36" opacity=".2"></svg:path><svg:path d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 16c26.49 0 56 11.5 56 28s-29.51 28-56 28s-56-11.5-56-28s29.51-28 56-28m0 192c-29.83 0-56-13.08-56-28V88c13.1 9.85 33.14 16 56 16s42.9-6.2 56-16v108c0 14.92-26.17 28-56 28"></svg:path></svg:g>`,
})
export class PhCylinderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderFillIcon],svg[ph-cylinder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 208c-29.83 0-56-13.08-56-28V77.43C82.92 88.5 103.9 96 128 96s45.08-7.5 56-18.57V196c0 14.92-26.17 28-56 28"></svg:path>`,
})
export class PhCylinderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderLightIcon],svg[ph-cylinder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 18c-39.25 0-70 18.45-70 42v136c0 23.55 30.75 42 70 42s70-18.45 70-42V60c0-23.55-30.75-42-70-42m0 12c31.44 0 58 13.74 58 30s-26.56 30-58 30s-58-13.74-58-30s26.56-30 58-30m0 196c-31.44 0-58-13.74-58-30V83.81C82.48 94.87 103.59 102 128 102s45.52-7.13 58-18.19V196c0 16.26-26.56 30-58 30"></svg:path>`,
})
export class PhCylinderLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phCylinderThinIcon],svg[ph-cylinder-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-38.13 0-68 17.57-68 40v136c0 22.43 29.87 40 68 40s68-17.57 68-40V60c0-22.43-29.87-40-68-40m0 8c32.52 0 60 14.65 60 32s-27.48 32-60 32s-60-14.65-60-32s27.48-32 60-32m60 168c0 17.35-27.48 32-60 32s-60-14.65-60-32V79.11C79.35 91.65 101.71 100 128 100s48.65-8.35 60-20.89Z"></svg:path>`,
})
export class PhCylinderThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseIcon],svg[ph-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56m80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64ZM69.61 53.08C85.07 44.65 105.81 40 128 40s42.93 4.65 58.39 13.08C200.12 60.57 208 70.38 208 80s-7.88 19.43-21.61 26.92C170.93 115.35 150.19 120 128 120s-42.93-4.65-58.39-13.08C55.88 99.43 48 89.62 48 80s7.88-19.43 21.61-26.92m116.78 149.84C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92"></svg:path>`,
})
export class PhDatabaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseBoldIcon],svg[ph-database-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 35.52C177.62 25.51 153.48 20 128 20s-49.62 5.51-68 15.52C39.37 46.79 28 62.58 28 80v96c0 17.42 11.37 33.21 32 44.48c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52c20.66-11.27 32-27.06 32-44.48V80c0-17.42-11.37-33.21-32-44.48m8 92.48c0 17-31.21 36-76 36s-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94Zm-76-84c44.79 0 76 19 76 36s-31.21 36-76 36s-76-19-76-36s31.21-36 76-36m0 168c-44.79 0-76-19-76-36v-8.46a89 89 0 0 0 8 4.94c18.35 10 42.49 15.52 68 15.52s49.62-5.51 68-15.52a89 89 0 0 0 8-4.94V176c0 17-31.21 36-76 36"></svg:path>`,
})
export class PhDatabaseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseDuotoneIcon],svg[ph-database-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80c0 26.51-39.4 48-88 48s-88-21.49-88-48s39.4-48 88-48s88 21.49 88 48" opacity=".2"></svg:path><svg:path d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56m80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64ZM69.61 53.08C85.07 44.65 105.81 40 128 40s42.93 4.65 58.39 13.08C200.12 60.57 208 70.38 208 80s-7.88 19.43-21.61 26.92C170.93 115.35 150.19 120 128 120s-42.93-4.65-58.39-13.08C55.88 99.43 48 89.62 48 80s7.88-19.43 21.61-26.92m116.78 149.84C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92"></svg:path></svg:g>`,
})
export class PhDatabaseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseFillIcon],svg[ph-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24c-53.83 0-96 24.6-96 56v96c0 31.4 42.17 56 96 56s96-24.6 96-56V80c0-31.4-42.17-56-96-56m80 104c0 9.62-7.88 19.43-21.61 26.92C170.93 163.35 150.19 168 128 168s-42.93-4.65-58.39-13.08C55.88 147.43 48 137.62 48 128v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64Zm-21.61 74.92C170.93 211.35 150.19 216 128 216s-42.93-4.65-58.39-13.08C55.88 195.43 48 185.62 48 176v-16.64c17.06 15 46.23 24.64 80 24.64s62.94-9.68 80-24.64V176c0 9.62-7.88 19.43-21.61 26.92"></svg:path>`,
})
export class PhDatabaseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseLightIcon],svg[ph-database-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26c-52.71 0-94 23.72-94 54v96c0 30.28 41.29 54 94 54s94-23.72 94-54V80c0-30.28-41.29-54-94-54m0 12c44.45 0 82 19.23 82 42s-37.55 42-82 42s-82-19.23-82-42s37.55-42 82-42m82 138c0 22.77-37.55 42-82 42s-82-19.23-82-42v-21.21C62 171.16 92.37 182 128 182s66-10.84 82-27.21Zm0-48c0 22.77-37.55 42-82 42s-82-19.23-82-42v-21.21C62 123.16 92.37 134 128 134s66-10.84 82-27.21Z"></svg:path>`,
})
export class PhDatabaseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDatabaseThinIcon],svg[ph-database-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.14 42.55C174.94 33.17 152.16 28 128 28s-46.94 5.17-64.14 14.55C45.89 52.35 36 65.65 36 80v96c0 14.35 9.89 27.65 27.86 37.45c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c18-9.8 27.86-23.1 27.86-37.45V80c0-14.35-9.89-27.65-27.86-37.45M212 176c0 11.29-8.41 22.1-23.69 30.43C172.27 215.18 150.85 220 128 220s-44.27-4.82-60.31-13.57C52.41 198.1 44 187.29 44 176v-26.52c4.69 5.93 11.37 11.34 19.86 16c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm0-48c0 11.29-8.41 22.1-23.69 30.43C172.27 167.18 150.85 172 128 172s-44.27-4.82-60.31-13.57C52.41 150.1 44 139.29 44 128v-26.52c4.69 5.93 11.37 11.34 19.86 16c17.2 9.38 40 14.55 64.14 14.55s46.94-5.17 64.14-14.55c8.49-4.63 15.17-10 19.86-16Zm-23.69-17.57C172.27 119.18 150.85 124 128 124s-44.27-4.82-60.31-13.57C52.41 102.1 44 91.29 44 80s8.41-22.1 23.69-30.43C83.73 40.82 105.15 36 128 36s44.27 4.82 60.31 13.57C203.59 57.9 212 68.71 212 80s-8.41 22.1-23.69 30.43"></svg:path>`,
})
export class PhDatabaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskIcon],svg[ph-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDeskIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskBoldIcon],svg[ph-desk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 60H12a12 12 0 0 0 0 24h4v108a12 12 0 0 0 24 0v-36h176v36a12 12 0 0 0 24 0V84h4a12 12 0 0 0 0-24M40 84h76v48H40Zm176 48h-76V84h76Zm-116-24a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h20a12 12 0 0 1 12 12m56 0a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDeskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskDuotoneIcon],svg[ph-desk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 72v64H24V72Z" opacity=".2"></svg:path><svg:path d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDeskDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskFillIcon],svg[ph-desk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16M80 112H56a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m56 8a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm64-8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeskFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskLightIcon],svg[ph-desk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 66H8a6 6 0 0 0 0 12h10v114a6 6 0 0 0 12 0v-50h196v50a6 6 0 0 0 12 0V78h10a6 6 0 0 0 0-12M30 78h92v52H30Zm196 52h-92V78h92ZM94 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m68 0a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhDeskLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeskThinIcon],svg[ph-desk-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 68H8a4 4 0 0 0 0 8h12v116a4 4 0 0 0 8 0v-52h200v52a4 4 0 0 0 8 0V76h12a4 4 0 0 0 0-8M28 76h96v56H28Zm200 56h-96V76h96ZM92 104a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m72 0a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhDeskThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopIcon],svg[ph-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDesktopIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopBoldIcon],svg[ph-desktop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a28 28 0 0 0-28 28v108a28 28 0 0 0 28 28h68v12H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-12h68a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28M48 60h160a4 4 0 0 1 4 4v72H44V64a4 4 0 0 1 4-4m160 116H48a4 4 0 0 1-4-4v-12h168v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDesktopBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopDuotoneIcon],svg[ph-desktop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDesktopDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopFillIcon],svg[ph-desktop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m0 144H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDesktopFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopLightIcon],svg[ph-desktop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22M48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDesktopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopThinIcon],svg[ph-desktop-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h76v24H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-24h76a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M48 52h160a12 12 0 0 1 12 12v84H36V64a12 12 0 0 1 12-12m160 136H48a12 12 0 0 1-12-12v-20h184v20a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDesktopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerIcon],svg[ph-desktop-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 24h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m40-48v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16v-16H96v16h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h104V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16M136 176V88H32a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8Zm96 32V48h-80v160zm-40-40a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhDesktopTowerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerBoldIcon],svg[ph-desktop-tower-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 76a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24h-24a12 12 0 0 1-12-12m12 48h24a12 12 0 0 0 0-24h-24a12 12 0 0 0 0 24m72-76v160a20 20 0 0 1-20 20h-80a20 20 0 0 1-20-20v-16h-32v12h8a12 12 0 0 1 0 24H68a12 12 0 0 1 0-24h8v-12H32a28 28 0 0 1-28-28V96a28 28 0 0 1 28-28h100V48a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20M132 168V92H32a4 4 0 0 0-4 4v68a4 4 0 0 0 4 4Zm96-116h-72v152h72Zm-36 108a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDesktopTowerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerDuotoneIcon],svg[ph-desktop-tower-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 48v160a8 8 0 0 1-8 8h-80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-8 24h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m40-48v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16v-16H96v16h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h104V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16M136 176V88H32a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8Zm96 32V48h-80v160zm-40-40a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhDesktopTowerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerFillIcon],svg[ph-desktop-tower-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 76v112a4 4 0 0 1-4 4H96v16h15.73a8.18 8.18 0 0 1 8.25 7.47a8 8 0 0 1-8 8.53H64.27a8.18 8.18 0 0 1-8.27-7.47a8 8 0 0 1 8-8.53h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h84a4 4 0 0 1 4 4m128-28v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16m-44.1 133.57a12 12 0 1 0-10.34 10.33a12 12 0 0 0 10.34-10.33m20.1-78.1a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.25 7.47a8 8 0 0 0 8 8.53h48a8 8 0 0 0 7.98-8.53m0-32a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.27 7.47a8 8 0 0 0 8 8.53h48a8 8 0 0 0 8-8.53"></svg:path>`,
})
export class PhDesktopTowerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerLightIcon],svg[ph-desktop-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m38-50v160a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14v-18H94v20h18a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h18v-20H32a22 22 0 0 1-22-22V96a22 22 0 0 1 22-22h106V48a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14M138 178V86H32a10 10 0 0 0-10 10v72a10 10 0 0 0 10 10Zm96-130a2 2 0 0 0-2-2h-80a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Zm-42 122a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDesktopTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerThinIcon],svg[ph-desktop-tower-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4 28h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m36-52v160a12 12 0 0 1-12 12h-80a12 12 0 0 1-12-12v-20H92v24h20a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h20v-24H32a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h108V48a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12M140 180V84H32a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12Zm96-132a4 4 0 0 0-4-4h-80a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4Zm-44 124a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhDesktopTowerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveIcon],svg[ph-detective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 112h-27.92l-47.5-65.41a16 16 0 0 0-25.31-.72l-12.85 14.9l-.2.23a7.95 7.95 0 0 1-12.44 0l-.2-.23l-12.85-14.9a16 16 0 0 0-25.31.72L35.92 112H8a8 8 0 0 0 0 16h240a8 8 0 0 0 0-16M96.34 56l.19.23l12.85 14.89a24 24 0 0 0 37.24 0l12.85-14.89c.06-.08.1-.15.17-.23l40.66 56H55.69ZM180 144a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144M76 200a20 20 0 1 1 20-20a20 20 0 0 1-20 20m104 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhDetectiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveBoldIcon],svg[ph-detective-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 104h-24.79l-43.39-59.76a20 20 0 0 0-31.61-.94l-12.82 14.86c-.1.11-.2.23-.29.35a4 4 0 0 1-6.2 0c-.09-.12-.19-.24-.29-.35L111.79 43.3a20 20 0 0 0-31.61.94L36.79 104H12a12 12 0 0 0 0 24h232a12 12 0 0 0 0-24M96.62 62.45l9.69 11.24a28 28 0 0 0 43.38 0l9.69-11.24L189.55 104H66.45ZM180 140a40.07 40.07 0 0 0-38.16 28h-27.68a40 40 0 1 0 0 24h27.68A40 40 0 1 0 180 140M76 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16m104 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhDetectiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveDuotoneIcon],svg[ph-detective-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 180a28 28 0 1 1-28-28a28 28 0 0 1 28 28m76-28a28 28 0 1 0 28 28a28 28 0 0 0-28-28M166.11 51.29a8 8 0 0 0-12.7-.29l-12.94 15a16 16 0 0 1-24.94 0l-12.94-15a8 8 0 0 0-12.7.29L40 120h176Z" opacity=".2"></svg:path><svg:path d="M248 112h-27.92l-47.5-65.41a16 16 0 0 0-25.31-.72l-12.85 14.9l-.2.23a7.95 7.95 0 0 1-12.44 0l-.2-.23l-12.85-14.9a16 16 0 0 0-25.31.72L35.92 112H8a8 8 0 0 0 0 16h240a8 8 0 0 0 0-16M96.34 56l.19.24l12.85 14.89a24 24 0 0 0 37.24 0l12.85-14.89c.06-.08.1-.16.17-.24l40.66 56H55.69ZM180 144a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144M76 200a20 20 0 1 1 20-20a20 20 0 0 1-20 20m104 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path></svg:g>`,
})
export class PhDetectiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveFillIcon],svg[ph-detective-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 120a8 8 0 0 1-8 8H8a8 8 0 0 1 0-16h27.92l47.5-65.41a16 16 0 0 1 25.31-.72l12.85 14.9l.2.23a7.95 7.95 0 0 0 12.44 0l.2-.23l12.85-14.9a16 16 0 0 1 25.31.72l47.5 65.41H248a8 8 0 0 1 8 8m-76 24a36 36 0 0 0-35.77 32h-32.46a36 36 0 1 0-1.83 16h36.12A36 36 0 1 0 180 144"></svg:path>`,
})
export class PhDetectiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveLightIcon],svg[ph-detective-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 114h-28.94L171 47.77a14 14 0 0 0-22.16-.61l-12.91 14.92a1 1 0 0 0-.14.17a10 10 0 0 1-15.58 0a1 1 0 0 0-.14-.17L107.2 47.16a14 14 0 0 0-22.2.61L36.94 114H8a6 6 0 0 0 0 12h240a6 6 0 0 0 0-12M94.75 54.82a2 2 0 0 1 3.15-.07l.15.17l12.86 14.92A21.88 21.88 0 0 0 128 78a21.88 21.88 0 0 0 17.09-8.16L158 54.92l.15-.17a2 2 0 0 1 3.15.07l43 59.18H51.77ZM180 146a34 34 0 0 0-33.94 32h-36.12a34 34 0 1 0-1.44 12h39a34 34 0 1 0 32.5-44M76 202a22 22 0 1 1 22-22a22 22 0 0 1-22 22m104 0a22 22 0 1 1 22-22a22 22 0 0 1-22 22"></svg:path>`,
})
export class PhDetectiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDetectiveThinIcon],svg[ph-detective-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 116h-30l-48.65-67a12 12 0 0 0-19-.51l-12.9 14.89l-.1.12a12 12 0 0 1-18.7 0l-.1-.12l-12.89-14.94a12 12 0 0 0-19 .51L38 116H8a4 4 0 0 0 0 8h240a4 4 0 0 0 0-8M93.13 53.65A4 4 0 0 1 96.26 52a4 4 0 0 1 3.2 1.5l.1.12l12.89 14.94A19.86 19.86 0 0 0 128 76a19.86 19.86 0 0 0 15.55-7.44l12.89-14.94l.1-.12a4.06 4.06 0 0 1 3.2-1.5a4 4 0 0 1 3.13 1.65L208.15 116H47.85ZM180 148a32 32 0 0 0-32 32h-40a32 32 0 1 0-1 8h42a32 32 0 1 0 31-40M76 204a24 24 0 1 1 24-24a24 24 0 0 1-24 24m104 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhDetectiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoIcon],svg[ph-dev-to-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m0 128H24V72h208zm-104-80v16h8a8 8 0 0 1 0 16h-8v16h16a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16Zm87.7-5.83l-18 64a8 8 0 0 1-15.4 0l-18-64a8 8 0 0 1 15.4-4.34l10.3 36.62l10.3-36.62a8 8 0 1 1 15.4 4.34M64 88h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32v-16a32 32 0 0 0-32-32m16 48a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16Z"></svg:path>`,
})
export class PhDevToLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoBoldIcon],svg[ph-dev-to-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24A20 20 0 0 0 4 72v112a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20m-4 128H28V76h200Zm-120-24v-56a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-8v4a12 12 0 0 1 0 24v4h8a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12m52.46-52.7a12 12 0 1 1 23.08-6.6l4.46 15.62l4.46-15.62a12 12 0 0 1 23.08 6.6l-16 56a12 12 0 0 1-23.08 0ZM52 168h12a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36H52a12 12 0 0 0-12 12v56a12 12 0 0 0 12 12m12-56a12 12 0 0 1 12 12v8a12 12 0 0 1-12 12Z"></svg:path>`,
})
export class PhDevToLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoDuotoneIcon],svg[ph-dev-to-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 72v112a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 56H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16m0 128H24V72h208zm-104-80v16h8a8 8 0 0 1 0 16h-8v16h16a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16Zm87.7-5.83l-18 64a8 8 0 0 1-15.4 0l-18-64a8 8 0 0 1 15.4-4.34l10.3 36.62l10.3-36.62a8 8 0 1 1 15.4 4.34M64 88h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32v-16a32 32 0 0 0-32-32m16 48a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16Z"></svg:path></svg:g>`,
})
export class PhDevToLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoFillIcon],svg[ph-dev-to-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120v16a16 16 0 0 1-16 16v-48a16 16 0 0 1 16 16m168-48v112a16 16 0 0 1-16 16H24a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16M96 120a32 32 0 0 0-32-32h-8a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h8a32 32 0 0 0 32-32Zm32 0v-16h16a8 8 0 0 0 0-16h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h24a8 8 0 0 0 0-16h-16v-16h8a8 8 0 0 0 0-16Zm82.17-31.7a8 8 0 0 0-9.87 5.53L190 130.45l-10.3-36.62a8 8 0 0 0-15.4 4.34l18 64a8 8 0 0 0 15.4 0l18-64a8 8 0 0 0-5.53-9.87"></svg:path>`,
})
export class PhDevToLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoLightIcon],svg[ph-dev-to-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H24a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-82v20h10a6 6 0 0 1 0 12h-10v20h18a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6V96a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm87.78-4.38l-18 64a6 6 0 0 1-11.56 0l-18-64a6 6 0 0 1 11.56-3.24L190 137.84l12.22-43.46a6 6 0 1 1 11.56 3.24M64 90h-8a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h8a30 30 0 0 0 30-30v-16a30 30 0 0 0-30-30m18 46a18 18 0 0 1-18 18h-2v-52h2a18 18 0 0 1 18 18Z"></svg:path>`,
})
export class PhDevToLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevToLogoThinIcon],svg[ph-dev-to-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H24a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-84v24h12a4 4 0 0 1 0 8h-12v24h20a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8Zm87.85-2.92l-18 64a4 4 0 0 1-7.7 0l-18-64a4 4 0 1 1 7.7-2.16L190 145.23l14.15-50.31a4 4 0 0 1 7.7 2.16M64 92h-8a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h8a28 28 0 0 0 28-28v-16a28 28 0 0 0-28-28m20 44a20 20 0 0 1-20 20h-4v-56h4a20 20 0 0 1 20 20Z"></svg:path>`,
})
export class PhDevToLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileIcon],svg[ph-device-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M72 64h112v128H72Zm8-32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceMobileIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileBoldIcon],svg[ph-device-mobile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28M76 76h104v104H76Zm4-40h96a4 4 0 0 1 4 4v12H76V40a4 4 0 0 1 4-4m96 184H80a4 4 0 0 1-4-4v-12h104v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDeviceMobileBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraIcon],svg[ph-device-mobile-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM140 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceMobileCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraBoldIcon],svg[ph-device-mobile-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM144 68a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDeviceMobileCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraDuotoneIcon],svg[ph-device-mobile-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM140 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDeviceMobileCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraFillIcon],svg[ph-device-mobile-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-48 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceMobileCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraLightIcon],svg[ph-device-mobile-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22m10 198a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10h96a10 10 0 0 1 10 10ZM138 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDeviceMobileCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileCameraThinIcon],svg[ph-device-mobile-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m12 196a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12ZM136 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceMobileCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileDuotoneIcon],svg[ph-device-mobile-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v144H64V56Z" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M72 64h112v128H72Zm8-32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDeviceMobileDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileFillIcon],svg[ph-device-mobile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M80 32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceMobileFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileLightIcon],svg[ph-device-mobile-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22M70 62h116v132H70Zm10-32h96a10 10 0 0 1 10 10v10H70V40a10 10 0 0 1 10-10m96 196H80a10 10 0 0 1-10-10v-10h116v10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDeviceMobileLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashIcon],svg[ph-device-mobile-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L56 60.69V216a24 24 0 0 0 24 24h96a24 24 0 0 0 23.82-21.11l2.26 2.49a8 8 0 1 0 11.84-10.76M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V78.29l112 123.2ZM68.7 24a8 8 0 0 1 8-8H176a24 24 0 0 1 24 24v110.83a8 8 0 1 1-16 0V40a8 8 0 0 0-8-8H76.7a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDeviceMobileSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashBoldIcon],svg[ph-device-mobile-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.88 207.93l-160-176a12 12 0 1 0-17.76 16.14L52 62.24V216a28 28 0 0 0 28 28h96a28 28 0 0 0 26-17.61a12 12 0 0 0 14.88-18.46M176 220H80a4 4 0 0 1-4-4V88.64L180 203v13a4 4 0 0 1-4 4M75.51 24a12 12 0 0 1 12-12H176a28 28 0 0 1 28 28v98.94a12 12 0 0 1-24 0V40a4 4 0 0 0-4-4H87.51a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDeviceMobileSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashDuotoneIcon],svg[ph-device-mobile-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L56 60.69V216a24 24 0 0 0 24 24h96a24 24 0 0 0 23.82-21.11l2.26 2.49a8 8 0 1 0 11.84-10.76M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V78.29l112 123.2ZM68.7 24a8 8 0 0 1 8-8H176a24 24 0 0 1 24 24v110.83a8 8 0 1 1-16 0V40a8 8 0 0 0-8-8H76.7a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashFillIcon],svg[ph-device-mobile-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.38 221.92a8 8 0 0 1-11.3-.54l-2.26-2.48A24 24 0 0 1 176 240H80a24 24 0 0 1-24-24V60.69L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3m-27.3-65.71a8 8 0 0 0 13.92-5.38V40a24 24 0 0 0-24-24H76.7a8 8 0 0 0-5.92 13.38Z"></svg:path>`,
})
export class PhDeviceMobileSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashLightIcon],svg[ph-device-mobile-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.44 212l-160-176a6 6 0 0 0-8.88 8L58 59.92V216a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22v-2.08l5.56 6.12a6 6 0 0 0 8.88-8.08ZM186 216a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V73.12l116 127.6ZM70.7 24a6 6 0 0 1 6-6H176a22 22 0 0 1 22 22v110.83a6 6 0 1 1-12 0V40a10 10 0 0 0-10-10H76.7a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhDeviceMobileSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSlashThinIcon],svg[ph-device-mobile-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 213.31l-160-176a4 4 0 0 0-6 5.38l15 16.46V216a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-7.25l9 9.94a4 4 0 1 0 5.92-5.38ZM188 216a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V68l120 132ZM72.7 24a4 4 0 0 1 4-4H176a20 20 0 0 1 20 20v110.83a4 4 0 1 1-8 0V40a12 12 0 0 0-12-12H76.7a4 4 0 0 1-4-4"></svg:path>`,
})
export class PhDeviceMobileSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerIcon],svg[ph-device-mobile-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM168 56a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceMobileSpeakerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerBoldIcon],svg[ph-device-mobile-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 12H80a28 28 0 0 0-28 28v176a28 28 0 0 0 28 28h96a28 28 0 0 0 28-28V40a28 28 0 0 0-28-28m4 204a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4ZM164 64a12 12 0 0 1-12 12h-48a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceMobileSpeakerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerDuotoneIcon],svg[ph-device-mobile-speaker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8ZM168 56a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDeviceMobileSpeakerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerFillIcon],svg[ph-device-mobile-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-16 48H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeviceMobileSpeakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerLightIcon],svg[ph-device-mobile-speaker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22m10 198a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10V40a10 10 0 0 1 10-10h96a10 10 0 0 1 10 10ZM166 56a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDeviceMobileSpeakerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileSpeakerThinIcon],svg[ph-device-mobile-speaker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m12 196a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12ZM164 56a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDeviceMobileSpeakerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceMobileThinIcon],svg[ph-device-mobile-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 20H80a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20M68 60h120v136H68Zm12-32h96a12 12 0 0 1 12 12v12H68V40a12 12 0 0 1 12-12m96 200H80a12 12 0 0 1-12-12v-12h120v12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceMobileThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateIcon],svg[ph-device-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 221.66l-24 24a8 8 0 0 1-11.32-11.32L180.69 224H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h100.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 5.66-13.66L75.31 48H176a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H75.31l10.35-10.34a8 8 0 1 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path>`,
})
export class PhDeviceRotateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateBoldIcon],svg[ph-device-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.49 224.49l-24 24a12 12 0 0 1-17-17L171 228H80a28 28 0 0 1-28-28v-92a12 12 0 0 1 24 0v92a4 4 0 0 0 4 4h91l-3.52-3.51a12 12 0 0 1 17-17l24 24a12 12 0 0 1 .01 17M80 76a12 12 0 0 0 8.49-20.49L85 52h91a4 4 0 0 1 4 4v92a12 12 0 0 0 24 0V56a28 28 0 0 0-28-28H85l3.52-3.52a12 12 0 0 0-17-17l-24 24a12 12 0 0 0 0 17l24 24A12 12 0 0 0 80 76"></svg:path>`,
})
export class PhDeviceRotateBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateDuotoneIcon],svg[ph-device-rotate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 56v144a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m205.66 221.66l-24 24a8 8 0 0 1-11.32-11.32L180.69 224H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h100.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 5.66-13.66L75.31 48H176a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H75.31l10.35-10.34a8 8 0 1 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path></svg:g>`,
})
export class PhDeviceRotateDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateFillIcon],svg[ph-device-rotate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 221.66l-24 24A8 8 0 0 1 168 240v-16H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h88v-16a8 8 0 0 1 13.66-5.66l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 8-8V48h88a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H88V16a8 8 0 0 0-13.66-5.66l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72"></svg:path>`,
})
export class PhDeviceRotateFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateLightIcon],svg[ph-device-rotate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.24 220.24l-24 24a6 6 0 0 1-8.48-8.48L185.51 222H80a22 22 0 0 1-22-22v-96a6 6 0 0 1 12 0v96a10 10 0 0 0 10 10h105.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48M80 70a6 6 0 0 0 4.24-10.24L70.49 46H176a10 10 0 0 1 10 10v96a6 6 0 0 0 12 0V56a22 22 0 0 0-22-22H70.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24A6 6 0 0 0 80 70"></svg:path>`,
})
export class PhDeviceRotateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceRotateThinIcon],svg[ph-device-rotate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m202.83 218.83l-24 24a4 4 0 0 1-5.66-5.66L190.34 220H80a20 20 0 0 1-20-20v-96a4 4 0 0 1 8 0v96a12 12 0 0 0 12 12h110.34l-17.17-17.17a4 4 0 0 1 5.66-5.66l24 24a4 4 0 0 1 0 5.66M80 68a4 4 0 0 0 2.83-6.83L65.66 44H176a12 12 0 0 1 12 12v96a4 4 0 0 0 8 0V56a20 20 0 0 0-20-20H65.66l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24A4 4 0 0 0 80 68"></svg:path>`,
})
export class PhDeviceRotateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletIcon],svg[ph-device-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M56 72h144v112H56Zm8-32h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceTabletIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletBoldIcon],svg[ph-device-tablet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28M60 84h136v88H60Zm4-40h128a4 4 0 0 1 4 4v12H60V48a4 4 0 0 1 4-4m128 168H64a4 4 0 0 1-4-4v-12h136v12a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhDeviceTabletBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraIcon],svg[ph-device-tablet-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM140 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceTabletCameraIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraBoldIcon],svg[ph-device-tablet-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM144 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDeviceTabletCameraBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraDuotoneIcon],svg[ph-device-tablet-camera-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM140 68a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDeviceTabletCameraDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraFillIcon],svg[ph-device-tablet-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-64 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceTabletCameraFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraLightIcon],svg[ph-device-tablet-camera-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM138 68a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDeviceTabletCameraLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletCameraThinIcon],svg[ph-device-tablet-camera-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM136 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceTabletCameraThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletDuotoneIcon],svg[ph-device-tablet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v128H48V64Z" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M56 72h144v112H56Zm8-32h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhDeviceTabletDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletFillIcon],svg[ph-device-tablet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M64 40h128a8 8 0 0 1 8 8v8H56v-8a8 8 0 0 1 8-8m128 176H64a8 8 0 0 1-8-8v-8h144v8a8 8 0 0 1-8 8"></svg:path>`,
})
export class PhDeviceTabletFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletLightIcon],svg[ph-device-tablet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22M54 70h148v116H54Zm10-32h128a10 10 0 0 1 10 10v10H54V48a10 10 0 0 1 10-10m128 180H64a10 10 0 0 1-10-10v-10h148v10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDeviceTabletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerIcon],svg[ph-device-tablet-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM168 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDeviceTabletSpeakerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerBoldIcon],svg[ph-device-tablet-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 20H64a28 28 0 0 0-28 28v160a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V48a28 28 0 0 0-28-28m4 188a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4ZM172 72a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDeviceTabletSpeakerBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerDuotoneIcon],svg[ph-device-tablet-speaker-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 48v160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m8 184a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8ZM168 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDeviceTabletSpeakerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerFillIcon],svg[ph-device-tablet-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 24H64a24 24 0 0 0-24 24v160a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24m-32 48H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhDeviceTabletSpeakerFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerLightIcon],svg[ph-device-tablet-speaker-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22m10 182a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V48a10 10 0 0 1 10-10h128a10 10 0 0 1 10 10ZM166 64a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDeviceTabletSpeakerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletSpeakerThinIcon],svg[ph-device-tablet-speaker-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM164 64a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDeviceTabletSpeakerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletThinIcon],svg[ph-device-tablet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12m128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDeviceTabletThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesIcon],svg[ph-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24M40 168a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v8h-16a24 24 0 0 0-24 24v72Zm192 24a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDevicesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesBoldIcon],svg[ph-devices-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-12v-8a28 28 0 0 0-28-28H40a28 28 0 0 0-28 28v88a28 28 0 0 0 28 28h96v12a28 28 0 0 0 28 28h60a28 28 0 0 0 28-28v-92a28 28 0 0 0-28-28M40 156a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v8h-24a28 28 0 0 0-28 28v56Zm188 36a4 4 0 0 1-4 4h-60a4 4 0 0 1-4-4v-92a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm-104 16a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m88-84a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDevicesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesDuotoneIcon],svg[ph-devices-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 64v16h-24a16 16 0 0 0-16 16v80H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24M40 168a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v8h-16a24 24 0 0 0-24 24v72Zm192 24a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhDevicesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesFillIcon],svg[ph-devices-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDevicesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesLightIcon],svg[ph-devices-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 74h-18V64a22 22 0 0 0-22-22H40a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h114v10a22 22 0 0 0 22 22h48a22 22 0 0 0 22-22V96a22 22 0 0 0-22-22M40 170a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h144a10 10 0 0 1 10 10v10h-18a22 22 0 0 0-22 22v74Zm194 22a10 10 0 0 1-10 10h-48a10 10 0 0 1-10-10V96a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10Zm-100 16a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m80-96a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhDevicesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDevicesThinIcon],svg[ph-devices-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 76h-20V64a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h116v12a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M40 172a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v12h-20a20 20 0 0 0-20 20v76Zm196 20a12 12 0 0 1-12 12h-48a12 12 0 0 1-12-12V96a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12Zm-104 16a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m80-96a4 4 0 0 1-4 4h-16a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDevicesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondIcon],svg[ph-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235.33 116.72l-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM128 224l-96-96l96-96l96 96Z"></svg:path>`,
})
export class PhDiamondIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondBoldIcon],svg[ph-diamond-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.16 113.89L142.1 17.83a20 20 0 0 0-28.21 0l-96 96.06a20 20 0 0 0 0 28.22l96.05 96.06a20 20 0 0 0 28.21 0l96-96.06a20 20 0 0 0 0-28.22ZM128 218.33L37.68 128L128 37.67L218.32 128Z"></svg:path>`,
})
export class PhDiamondBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondDuotoneIcon],svg[ph-diamond-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m229.67 133.62l-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19" opacity=".2"></svg:path><svg:path d="m235.33 116.72l-96.05-96.06a16 16 0 0 0-22.56 0l-96 96.06a16 16 0 0 0 0 22.56l96.05 96.06a16 16 0 0 0 22.56 0l96.05-96.06a16 16 0 0 0 0-22.56ZM128 224l-96-96l96-96l96 96Z"></svg:path></svg:g>`,
})
export class PhDiamondDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondFillIcon],svg[ph-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 128a15.85 15.85 0 0 1-4.67 11.28l-96.05 96.06a16 16 0 0 1-22.56 0l-96-96.06a16 16 0 0 1 0-22.56l96.05-96.06a16 16 0 0 1 22.56 0l96.05 96.06A15.85 15.85 0 0 1 240 128"></svg:path>`,
})
export class PhDiamondFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondLightIcon],svg[ph-diamond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m233.92 118.14l-96.06-96.06a14 14 0 0 0-19.72 0l-96.06 96.06a14 14 0 0 0 0 19.72l96.06 96.06a14 14 0 0 0 19.72 0l96-96.06a13.94 13.94 0 0 0 0-19.72Zm-8.49 11.24l-96.05 96.06a2 2 0 0 1-2.76 0l-96.05-96.06a2 2 0 0 1 0-2.76l96.05-96.06a2 2 0 0 1 2.76 0l96.05 96.06a2 2 0 0 1 0 2.76"></svg:path>`,
})
export class PhDiamondLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondThinIcon],svg[ph-diamond-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.5 119.55l-96.05-96.06a12 12 0 0 0-16.9 0l-96 96.06a12 12 0 0 0 0 16.9l96.05 96.06a12 12 0 0 0 16.9 0l96.05-96.06a12 12 0 0 0 0-16.9Zm-5.66 11.24l-96.05 96.06a4 4 0 0 1-5.58 0l-96-96.06a3.94 3.94 0 0 1 0-5.58l96.05-96.06a4 4 0 0 1 5.58 0l96.05 96.06a3.94 3.94 0 0 1 0 5.58Z"></svg:path>`,
})
export class PhDiamondThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourIcon],svg[ph-diamonds-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122.34 109.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32ZM128 35.31L156.69 64L128 92.69L99.31 64Zm5.66 111a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32ZM128 220.69L99.31 192L128 163.31L156.69 192Zm109.66-98.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M192 156.69L163.31 128L192 99.31L220.69 128Zm-82.34-34.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M64 156.69L35.31 128L64 99.31L92.69 128Z"></svg:path>`,
})
export class PhDiamondsFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourBoldIcon],svg[ph-diamonds-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119.51 108.49a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17ZM128 41l21 21l-21 21l-21-21Zm8.49 106.54a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-17ZM128 215l-21-21l21-21l21 21Zm-19.51-95.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM62 149l-21-21l21-21l21 21Zm178.49-29.52l-38-38a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0l38-38a12 12 0 0 0 0-16.97ZM194 149l-21-21l21-21l21 21Z"></svg:path>`,
})
export class PhDiamondsFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourDuotoneIcon],svg[ph-diamonds-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 104L88 64l40-40l40 40Zm-40 88l40 40l40-40l-40-40ZM192 88l-40 40l40 40l40-40ZM64 88l-40 40l40 40l40-40Z" opacity=".2"></svg:path><svg:path d="M122.34 109.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32ZM128 35.31L156.69 64L128 92.69L99.31 64Zm5.66 111a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32ZM128 220.69L99.31 192L128 163.31L156.69 192Zm109.66-98.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M192 156.69L163.31 128L192 99.31L220.69 128Zm-82.34-34.35l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M64 156.69L35.31 128L64 99.31L92.69 128Z"></svg:path></svg:g>`,
})
export class PhDiamondsFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourFillIcon],svg[ph-diamonds-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.34 69.66a8 8 0 0 1 0-11.32l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0Zm51.32 76.68a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32Zm104-24l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32m-128 0l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhDiamondsFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourLightIcon],svg[ph-diamonds-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M123.76 108.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48ZM128 32.49L159.51 64L128 95.51L96.49 64Zm4.24 115.27a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48ZM128 223.51L96.49 192L128 160.49L159.51 192Zm108.24-99.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M192 159.51L160.49 128L192 96.49L223.51 128Zm-83.76-35.75l-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M64 159.51L32.49 128L64 96.49L95.51 128Z"></svg:path>`,
})
export class PhDiamondsFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourThinIcon],svg[ph-diamonds-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.17 106.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66ZM128 29.66L162.34 64L128 98.34L93.66 64Zm2.83 119.51a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66ZM128 226.34L93.66 192L128 157.66L162.34 192Zm106.83-101.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M192 162.34L157.66 128L192 93.66L226.34 128Zm-85.17-37.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M64 162.34L29.66 128L64 93.66L98.34 128Z"></svg:path>`,
})
export class PhDiamondsFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveIcon],svg[ph-dice-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceFiveIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveBoldIcon],svg[ph-dice-five-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-80 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceFiveBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveDuotoneIcon],svg[ph-dice-five-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 72a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceFiveDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveFillIcon],svg[ph-dice-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 176a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-72a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveLightIcon],svg[ph-dice-five-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36-36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 72a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceFiveLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFiveThinIcon],svg[ph-dice-five-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36-36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceFiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourIcon],svg[ph-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-96-92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourBoldIcon],svg[ph-dice-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-92-96a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 64a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourDuotoneIcon],svg[ph-dice-four-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-96-92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceFourDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourFillIcon],svg[ph-dice-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-92 136a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56 56a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourLightIcon],svg[ph-dice-four-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-100-92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-56 56a10 10 0 1 1-10-10a10 10 0 0 1 10 10m56 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceFourLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceFourThinIcon],svg[ph-dice-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-104-92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m56 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-56 56a8 8 0 1 1-8-8a8 8 0 0 1 8 8m56 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneIcon],svg[ph-dice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-68-64a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneBoldIcon],svg[ph-dice-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-60-64a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceOneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneDuotoneIcon],svg[ph-dice-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-68-64a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneFillIcon],svg[ph-dice-one-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-64 108a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceOneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneLightIcon],svg[ph-dice-one-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-72-64a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceOneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceOneThinIcon],svg[ph-dice-one-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-76-64a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceOneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixIcon],svg[ph-dice-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceSixIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixBoldIcon],svg[ph-dice-six-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM112 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-64 44a16 16 0 1 1-16-16a16 16 0 0 1 16 16m64 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceSixBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixDuotoneIcon],svg[ph-dice-six-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-72 44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceSixDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixFillIcon],svg[ph-dice-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-44a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixLightIcon],svg[ph-dice-six-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-72 44a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceSixLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceSixThinIcon],svg[ph-dice-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeIcon],svg[ph-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceThreeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeBoldIcon],svg[ph-dice-three-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM104 88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40 40a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceThreeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeDuotoneIcon],svg[ph-dice-three-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceThreeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeFillIcon],svg[ph-dice-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeLightIcon],svg[ph-dice-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18ZM102 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceThreeThinIcon],svg[ph-dice-three-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceThreeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoIcon],svg[ph-dice-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-88-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceTwoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoBoldIcon],svg[ph-dice-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28H64a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36h128a36 36 0 0 0 36-36V64a36 36 0 0 0-36-36m12 164a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-84-88a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 48a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhDiceTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoDuotoneIcon],svg[ph-dice-two-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-88-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m40 40a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhDiceTwoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoFillIcon],svg[ph-dice-two-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m-84 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12m40 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiceTwoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoLightIcon],svg[ph-dice-two-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 34H64a30 30 0 0 0-30 30v128a30 30 0 0 0 30 30h128a30 30 0 0 0 30-30V64a30 30 0 0 0-30-30m18 158a18 18 0 0 1-18 18H64a18 18 0 0 1-18-18V64a18 18 0 0 1 18-18h128a18 18 0 0 1 18 18Zm-92-84a10 10 0 1 1-10-10a10 10 0 0 1 10 10m40 40a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhDiceTwoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiceTwoThinIcon],svg[ph-dice-two-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-96-84a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhDiceTwoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscIcon],svg[ph-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.2 96a39.8 39.8 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216"></svg:path>`,
})
export class PhDiscIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscBoldIcon],svg[ph-disc-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m42.32 96a44 44 0 0 0-3.91-9.44l28.84-28.84A83.55 83.55 0 0 1 211.13 116ZM148 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20 84a84 84 0 1 1 50.28-151.25l-28.85 28.84A44 44 0 1 0 170.32 140h40.81A84.12 84.12 0 0 1 128 212"></svg:path>`,
})
export class PhDiscBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscDuotoneIcon],svg[ph-disc-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-28.12-67.88l-45.25 45.25A32 32 0 1 0 160 128Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.2 96a39.8 39.8 0 0 0-5.84-14l34.23-34.24a87.54 87.54 0 0 1 20 48.28Zm-15.2 8a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24 88a88 88 0 1 1 56.28-155.6L150 94.64A40 40 0 1 0 167.2 136h48.43A88.11 88.11 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhDiscDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscFillIcon],svg[ph-disc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.3 43.31a8 8 0 0 0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85 103.85 0 1 0 1.36 1ZM128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24m88-24c0 2.47-.11 4.92-.31 7.34L168 126.92a39.83 39.83 0 0 0-11-26.41l27.78-39.67A87.8 87.8 0 0 1 216 128"></svg:path>`,
})
export class PhDiscFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscLightIcon],svg[ph-disc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m37.52 96a37.8 37.8 0 0 0-6.76-16.27l37-36.95A89.6 89.6 0 0 1 217.8 122ZM154 128a26 26 0 1 1-26-26a26 26 0 0 1 26 26m-26 90a90 90 0 1 1 59.22-157.71l-36.95 36.95A38 38 0 1 0 165.52 134h52.28a90.12 90.12 0 0 1-89.8 84"></svg:path>`,
})
export class PhDiscLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscThinIcon],svg[ph-disc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m35.77 96a35.8 35.8 0 0 0-7.66-18.45l39.68-39.68A91.64 91.64 0 0 1 219.91 124Zm-7.77 4a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28 92a92 92 0 1 1 62.13-159.79l-39.68 39.68A36 36 0 1 0 163.77 132h56.14A92.11 92.11 0 0 1 128 220"></svg:path>`,
})
export class PhDiscThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallIcon],svg[ph-disco-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-95.3 16h47.52c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08m0-16c2-33.52 16.13-52.95 23.76-61.08c7.64 8.15 21.77 27.57 23.76 61.08Zm3.43-61.06C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160m91.87 61.06c8.65-12.7 17.93-32.7 19.44-61.06h31.77a72.16 72.16 0 0 1-51.21 61.06M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDiscoBallIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallBoldIcon],svg[ph-disco-ball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 60.78V16a12 12 0 0 0-24 0v44.78a92 92 0 1 0 24 0M178.92 140h-23.4c-1.64-20.74-7.36-37-13.81-49.15A68.23 68.23 0 0 1 178.92 140M112 215c-7-8.62-17-25.09-19.45-51h38.9C129 189.9 119 206.37 112 215m-19.45-75C95 114.1 105 97.63 112 89c7 8.62 17 25.09 19.45 51ZM82.29 90.85C75.84 103 70.12 119.26 68.48 140h-23.4a68.23 68.23 0 0 1 37.21-49.15M45.08 164h23.4c1.64 20.74 7.36 37 13.81 49.15A68.23 68.23 0 0 1 45.08 164m96.63 49.15c6.45-12.15 12.17-28.41 13.81-49.15h23.4a68.23 68.23 0 0 1-37.21 49.15M256 88a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12M148 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDiscoBallBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallDuotoneIcon],svg[ph-disco-ball-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 152a80 80 0 0 1-80 80s32-24 32-80Zm-80-80s-32 24-32 80h64c0-56-32-80-32-80" opacity=".2"></svg:path><svg:path d="M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-95.3 16h47.52c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08m0-16c2-33.52 16.13-52.95 23.76-61.08c7.64 8.15 21.77 27.57 23.76 61.08Zm3.43-61.06C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160m91.87 61.06c8.65-12.7 17.93-32.7 19.44-61.06h31.77a72.16 72.16 0 0 1-51.21 61.06M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhDiscoBallDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallFillIcon],svg[ph-disco-ball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 64.37V16a8 8 0 0 0-16 0v48.37a88 88 0 1 0 16 0M183.54 144h-31.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16 72.16 0 0 1 183.54 144m-47.78 16c-2 33.52-16.13 52.95-23.76 61.08c-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67 82.94C83 95.64 73.74 115.64 72.23 144H40.46a72.16 72.16 0 0 1 51.21-61.06M40.46 160h31.77c1.51 28.36 10.79 48.36 19.44 61.06A72.16 72.16 0 0 1 40.46 160M256 88a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8M152 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8"></svg:path>`,
})
export class PhDiscoBallFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallLightIcon],svg[ph-disco-ball-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M118 66.23V16a6 6 0 0 0-12 0v50.23a86 86 0 1 0 12 0M185.74 146h-35.87c-1.3-32.59-13-54.15-22.36-66.35A74.15 74.15 0 0 1 185.74 146m-99.6 12h51.72c-1.63 37.69-18.33 58.46-25.86 66c-7.54-7.55-24.23-28.33-25.86-66m0-12c1.63-37.69 18.33-58.46 25.86-66c7.54 7.51 24.23 28.29 25.86 66Zm10.35-66.35c-9.38 12.2-21.06 33.76-22.36 66.35H38.26a74.15 74.15 0 0 1 58.23-66.35M38.26 158h35.87c1.3 32.59 13 54.15 22.36 66.35A74.15 74.15 0 0 1 38.26 158m89.25 66.35c9.38-12.2 21.06-33.76 22.36-66.35h35.87a74.15 74.15 0 0 1-58.23 66.35M254 88a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-46-42h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1 0-12h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhDiscoBallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscoBallThinIcon],svg[ph-disco-ball-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 68.1V16a4 4 0 0 0-8 0v52.1a84 84 0 1 0 8 0m71.89 79.9h-40c-1-37.34-15.73-60.22-25.35-71.25A76.12 76.12 0 0 1 187.89 148M112 226.68C105 220 85.26 197.61 84.06 156h55.88c-1.2 41.61-20.94 64-27.94 70.68M84.06 148c1.2-41.61 21-64 27.94-70.68c7 6.64 26.74 29.07 27.94 70.68Zm17.36-71.25c-9.62 11-24.35 33.91-25.35 71.25h-40a76.12 76.12 0 0 1 65.35-71.25M36.11 156h40c1 37.34 15.73 60.22 25.35 71.25A76.12 76.12 0 0 1 36.11 156m86.47 71.25c9.62-11 24.35-33.91 25.35-71.25h40a76.12 76.12 0 0 1-65.35 71.25M252 88a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0V92h-12a4 4 0 0 1 0-8h12V72a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4m-40-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1 0-8h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhDiscoBallThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoIcon],svg[ph-discord-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.93 15.93 0 0 1-9.06-18.51L38 58a16.07 16.07 0 0 1 13-11.86l36.06-5.93a16.22 16.22 0 0 1 18.26 11.88l3.26 12.84Q118.11 64 128 64t19.4.93l3.26-12.84a16.21 16.21 0 0 1 18.26-11.88L205 46.14A16.07 16.07 0 0 1 218 58l29.53 116.38a15.93 15.93 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56h-.12l-36.1 5.93a.2.2 0 0 0-.09 0L24 178.33L91 208a.23.23 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z"></svg:path>`,
})
export class PhDiscordLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoBoldIcon],svg[ph-discord-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m56-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m76.07 76.56l-67 29.71A20.15 20.15 0 0 1 146 214.9l-8.54-23.13c-3.13.14-6.27.24-9.45.24s-6.32-.1-9.45-.24L110 214.9a20.19 20.19 0 0 1-27.08 11.37l-67-29.71a19.93 19.93 0 0 1-11.3-23.15L34.15 57a20 20 0 0 1 16.22-14.81l36.06-5.93a20.26 20.26 0 0 1 22.79 14.84l4.41 17.41c4.74-.33 9.52-.51 14.37-.51s9.63.18 14.37.51l4.41-17.41a20.25 20.25 0 0 1 22.79-14.84l36.06 5.93A20 20 0 0 1 221.85 57l29.53 116.38a19.93 19.93 0 0 1-11.31 23.18M227.28 176L199.23 65.46l-30.07-4.94l-2.84 11.17c2.9.58 5.78 1.2 8.61 1.92a12 12 0 1 1-5.86 23.27A168.4 168.4 0 0 0 128 92a168.4 168.4 0 0 0-41.07 4.88a12 12 0 0 1-5.86-23.27c2.83-.72 5.71-1.34 8.61-1.92l-2.83-11.17l-30.08 4.94L28.72 176l60.22 26.7l5-13.57c-4.37-.76-8.67-1.65-12.88-2.71a12 12 0 0 1 5.86-23.28A168.4 168.4 0 0 0 128 168a168.4 168.4 0 0 0 41.07-4.88a12 12 0 0 1 5.86 23.28c-4.21 1.06-8.51 1.95-12.88 2.71l5 13.57Z"></svg:path>`,
})
export class PhDiscordLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoDuotoneIcon],svg[ph-discord-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22" opacity=".2"></svg:path><svg:path d="M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z"></svg:path></svg:g>`,
})
export class PhDiscordLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoFillIcon],svg[ph-discord-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.51 174.39L218 58a16.08 16.08 0 0 0-13-11.88l-36.06-5.92a16.22 16.22 0 0 0-18.26 11.88l-.21.85a4 4 0 0 0 3.27 4.93a155.6 155.6 0 0 1 24.41 5.62a8.2 8.2 0 0 1 5.62 9.7a8 8 0 0 1-10.19 5.64a155.4 155.4 0 0 0-90.8-.1a8.22 8.22 0 0 1-10.28-4.81a8 8 0 0 1 5.08-10.33a157 157 0 0 1 24.72-5.72a4 4 0 0 0 3.27-4.93l-.21-.85a16.21 16.21 0 0 0-18.28-11.87L51 46.13A16.08 16.08 0 0 0 38 58L8.49 174.39a15.94 15.94 0 0 0 9.06 18.51l67 29.71a16.17 16.17 0 0 0 21.71-9.1l3.49-9.45a4 4 0 0 0-3.27-5.35a158 158 0 0 1-28.63-6.2a8.2 8.2 0 0 1-5.61-9.67a8 8 0 0 1 10.2-5.66a155.6 155.6 0 0 0 91.12 0a8 8 0 0 1 10.19 5.65a8.19 8.19 0 0 1-5.61 9.68a158 158 0 0 1-28.62 6.2a4 4 0 0 0-3.27 5.35l3.49 9.45a16.18 16.18 0 0 0 21.71 9.1l67-29.71a15.94 15.94 0 0 0 9.06-18.51M92 152a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhDiscordLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoLightIcon],svg[ph-discord-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 140a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m73.64 61.08l-67 29.71a14.4 14.4 0 0 1-5.77 1.21a14.13 14.13 0 0 1-13.25-9.18L143 189.43c-4.93.37-9.92.58-15 .58s-10.06-.21-15-.58l-8.63 23.39A14.13 14.13 0 0 1 91.13 222a14.4 14.4 0 0 1-5.77-1.21l-67-29.71a14 14 0 0 1-7.93-16.2L40 58.5a14.07 14.07 0 0 1 11.34-10.39l36.06-5.92a14.19 14.19 0 0 1 16 10.39l3.69 14.53a197.5 197.5 0 0 1 41.82 0l3.69-14.53a14.19 14.19 0 0 1 16-10.39l36.06 5.92A14.07 14.07 0 0 1 216 58.5l29.53 116.38a14 14 0 0 1-7.89 16.2m-3.7-13.25L204.41 61.45a2.08 2.08 0 0 0-1.7-1.5L166.65 54a2.13 2.13 0 0 0-2.42 1.5l-3.36 13.24a169 169 0 0 1 16.75 3.76A6 6 0 0 1 176 84.31a5.7 5.7 0 0 1-1.62-.23A174.3 174.3 0 0 0 128 78a174.3 174.3 0 0 0-46.38 6.08a6 6 0 1 1-3.24-11.55a169 169 0 0 1 16.75-3.76l-3.36-13.24A2.12 2.12 0 0 0 89.35 54l-36.06 6a2.08 2.08 0 0 0-1.7 1.5L22.06 177.83a2 2 0 0 0 1.16 2.28l67 29.7a2.2 2.2 0 0 0 1.76 0a2.07 2.07 0 0 0 1.14-1.17l7.58-20.55a171.5 171.5 0 0 1-22.33-4.64a6 6 0 1 1 3.24-11.55A174.3 174.3 0 0 0 128 178a174.3 174.3 0 0 0 46.38-6.08a6 6 0 1 1 3.24 11.55a171.5 171.5 0 0 1-22.33 4.64l7.58 20.55a2.07 2.07 0 0 0 1.14 1.17a2.2 2.2 0 0 0 1.76 0l67-29.7a2 2 0 0 0 1.17-2.3"></svg:path>`,
})
export class PhDiscordLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDiscordLogoThinIcon],svg[ph-discord-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 140a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72.83 57.25l-67 29.71a12.4 12.4 0 0 1-5 1a12.13 12.13 0 0 1-11.38-7.88l-9.15-24.81c-5.36.45-10.81.69-16.34.69s-11-.24-16.34-.69l-9.15 24.81A12.13 12.13 0 0 1 91.13 220a12.4 12.4 0 0 1-5-1l-67-29.71a12 12 0 0 1-6.8-13.88L41.9 59a12.06 12.06 0 0 1 9.77-8.91l36.06-5.92a12.18 12.18 0 0 1 13.73 8.91l4.12 16.22a195.5 195.5 0 0 1 44.84 0l4.12-16.22a12.18 12.18 0 0 1 13.73-8.91l36.06 5.92A12.06 12.06 0 0 1 214.1 59l29.53 116.38a12 12 0 0 1-6.8 13.87m-1-11.91L206.35 61a4.07 4.07 0 0 0-3.35-3l-36-5.95a4.15 4.15 0 0 0-4.69 3l-3.91 15.33a167 167 0 0 1 18.68 4.08a4 4 0 1 1-2.16 7.7A176.2 176.2 0 0 0 128 76a176.2 176.2 0 0 0-46.92 6.16a4 4 0 1 1-2.16-7.7a167 167 0 0 1 18.68-4.08L93.71 55a4.15 4.15 0 0 0-4.69-3L53 58a4.07 4.07 0 0 0-3.31 3L20.12 177.34a4 4 0 0 0 2.29 4.59l67 29.71a4.16 4.16 0 0 0 3.35 0a4 4 0 0 0 2.24-2.29l8.45-22.88a171.5 171.5 0 0 1-24.53-4.92a4 4 0 0 1 2.16-7.71A176.2 176.2 0 0 0 128 180a176.2 176.2 0 0 0 46.92-6.16a4 4 0 0 1 2.16 7.71a171.5 171.5 0 0 1-24.53 4.92l8.45 22.88a4 4 0 0 0 2.23 2.32a4.16 4.16 0 0 0 3.35 0l67-29.71a4 4 0 0 0 2.3-4.62Z"></svg:path>`,
})
export class PhDiscordLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phDivideIcon],svg[ph-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m0 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhDivideIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

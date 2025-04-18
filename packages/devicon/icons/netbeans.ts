import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconNetbeansIcon],svg[devicon-netbeans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a6043f" fill-rule="evenodd" d="M64 128L6.222 96.444V32l22.222 12.444v39.112L64 103.11"></svg:path><svg:path fill="#95d921" fill-rule="evenodd" d="m6.222 32l22.222 12.444L64 24l35.556 20.444L121.778 32L64 0Z"></svg:path><svg:path fill="#dcdfe7" fill-rule="evenodd" d="m64 24l35.556 20.444l-35.556 20l-35.556-20Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m28.444 44.444l35.556 20v38.667L28.444 83.556Z"></svg:path><svg:path fill="#c9dae9" fill-rule="evenodd" d="m64 64.444l35.556-20v39.112L64 103.11Z"></svg:path><svg:path fill="#1d6ac6" fill-rule="evenodd" d="m64 128l57.778-31.556V32L99.556 44.444v39.112L64 103.11"></svg:path><svg:path fill="#ea1f5e" fill-rule="evenodd" d="M64 128L6.222 96.444l22.222-12.888L64 103.11"></svg:path><svg:path fill="#2e90e9" fill-rule="evenodd" d="m64 128l57.778-31.556l-22.222-12.888L64 103.11"></svg:path>`,
})
export class DeviconNetbeansIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

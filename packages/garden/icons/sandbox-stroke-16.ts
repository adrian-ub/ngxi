import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSandboxStroke16Icon],svg[garden-sandbox-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 1l-.116.007A1 1 0 0 0 2 2v1.898L.02 13.804A1 1 0 0 0 1 15h4a1 1 0 0 0 1-1v-3l.005-.147C6.065 9.828 6.94 9 8 9l.148.005C9.172 9.065 10 9.939 10 11v3a1 1 0 0 0 1 1h4l.117-.007a1 1 0 0 0 .864-1.19L14 3.904V2a1 1 0 0 0-1-1h-1l-.117.007A1 1 0 0 0 11 2v1h-1V2a1 1 0 0 0-1-1H7l-.116.007A1 1 0 0 0 6 2v1H5V2a1 1 0 0 0-1-1zm1 1v2h3V2h2v2h3V2h1v2l2 10h-4v-3a3 3 0 0 0-2.823-2.995L8 8a3 3 0 0 0-2.995 2.824L5 11v3H1L3 4V2z"></svg:path>`,
})
export class GardenSandboxStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

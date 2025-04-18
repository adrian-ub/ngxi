import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDeviconIcon],svg[devicon-plain-devicon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 7.83H4.77l10.18 87.3l49 25h.06l49.07-25l10.15-87.3zm42.77 54.86c0 .88 0 1.67-.77 2L73.25 80.44l-2.42 1.13l-.27-3.15v-6.19l.24-1.57l1.09-.47l23.18-10.38l-21.54-9.6l-9.18 18.13l-5.45 10.53l-1.22 2.27l-2.05-.9L22 64.71a2.42 2.42 0 0 1-1.45-2v-5.8a2.39 2.39 0 0 1 1.42-2l34-15.73l3.21-1.44v9.66l.24 1.34l-1.56.7l-23.41 10.35l21.85 9.63l8.05-16l6.21-12.65l1.13-2.28l1.81.91L106 54.89c.73.35.76 1.14.76 2z"></svg:path>`,
})
export class DeviconPlainDeviconIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

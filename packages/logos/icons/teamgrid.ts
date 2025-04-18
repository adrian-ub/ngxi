import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTeamgridIcon],svg[logos-teamgrid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3C7DD0" d="m0 137.507l26.771-21.6V46.85L0 30.118zM43.503 8.821v144.352l29.966-25.25V34.681zM90.05 0v162.757l29.965-30.726V30.27zm139.18 46.85v69.057l26.771 21.6V30.116zM212.497 8.822v144.352l-29.966-25.25V34.681zM165.95 0l-29.966 30.27v101.761l29.966 30.726z"></svg:path>`,
})
export class LogosTeamgridIcon {
  readonly viewBox = input("0 0 256 163")
  readonly width = input("1.58em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpeedTrain01Icon],svg[hugeicons-speed-train-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 3h4.733c2.61 0 3.916 0 5.135.401s2.269 1.177 4.37 2.728l3.69 2.726l.08.06A5 5 0 0 1 22 12.958v.073A2 2 0 0 1 20.032 15H2"></svg:path><svg:path d="M2 8h1.893c.27 0 .405 0 .533.008a4 4 0 0 1 2.815 1.43c.082.098.162.206.32.424A2 2 0 0 1 8 11.203v.213c.001.171.001.257-.025.326a.4.4 0 0 1-.232.232c-.07.026-.156.026-.327.026H2m19-1h-3.667C14.388 11 12 8.761 12 6V4M2 19h20m-4 0v2m-6-2v2m-6-2v2"></svg:path></svg:g>`,
})
export class HugeiconsSpeedTrain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

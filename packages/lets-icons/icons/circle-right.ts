import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightIcon],svg[lets-icons-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M19.794 12.75c.99-.858 1.388-1.855 1.129-2.837s-1.158-1.895-2.559-2.595s-3.225-1.15-5.19-1.28c-1.963-.129-3.958.07-5.674.565s-3.057 1.26-3.815 2.175s-.891 1.93-.378 2.887c.512.957 1.642 1.802 3.214 2.405S10.02 15 12 15"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

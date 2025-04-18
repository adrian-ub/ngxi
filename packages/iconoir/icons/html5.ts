import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHtml5Icon],svg[iconoir-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3z"></svg:path><svg:path d="M17 7H7.5l.5 4.5h8l-.5 5.5l-3.5 1l-3.5-1l-.25-2.5"></svg:path></svg:g>`,
})
export class IconoirHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

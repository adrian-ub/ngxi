import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSuperscript2Icon],svg[icomoon-free-superscript2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.032 13l.9-3h4.137l.9 3h1.775l-3-10H4.256l-3 10zm2.4-8h1.137l.9 3H4.532zM11 13l2.5-4l2.5 4zm2.5-11h-1a.5.5 0 0 1 0-1h2a.5.5 0 0 0 0-1h-2a1.502 1.502 0 0 0-1.117 2.5c.275.307.674.5 1.117.5h1a.5.5 0 0 1 0 1h-2a.5.5 0 0 0 0 1h2a1.502 1.502 0 0 0 1.117-2.5A1.5 1.5 0 0 0 13.5 2"></svg:path>`,
})
export class IcomoonFreeSuperscript2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

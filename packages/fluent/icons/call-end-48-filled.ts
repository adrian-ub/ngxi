import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallEnd48FilledIcon],svg[fluent-call-end-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 14.003c-5.308 0-10.243.961-13.868 2.62c-3.52 1.61-6.29 4.136-6.125 7.463l.007.087l.56 4.646a4.75 4.75 0 0 0 5.48 4.12l5.112-.833a4.25 4.25 0 0 0 3.478-3.336l.935-4.533a.2.2 0 0 1 .022-.058c.754-.259 2.265-.659 4.4-.659c2.134 0 3.645.4 4.399.66q.01.012.022.057l.935 4.533a4.25 4.25 0 0 0 3.478 3.336l5.111.834a4.75 4.75 0 0 0 5.481-4.12l.56-4.646l.007-.088c.166-3.327-2.606-5.853-6.125-7.463c-3.625-1.659-8.56-2.62-13.869-2.62"></svg:path>`,
})
export class FluentCallEnd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

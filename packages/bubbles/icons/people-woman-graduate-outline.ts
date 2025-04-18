import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPeopleWomanGraduateOutlineIcon],svg[bubbles-people-woman-graduate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.043 19.1l-3.715 4a.5.5 0 0 1-.732 0L7.9 19.12m4.271-14.657l9.913-1.724a.25.25 0 0 0 0-.493L12.171.522a1 1 0 0 0-.342 0L1.916 2.246a.25.25 0 0 0 0 .493l9.913 1.724q.171.03.342 0M2 8.492a10.95 10.95 0 0 0-1.481 4.481a.5.5 0 0 0 .5.52H2.98a.5.5 0 0 0 .5-.52A10.95 10.95 0 0 0 2 8.493m0-5.74v5.739m4 2V3.449m12 0v7.043m-12-3a18.96 18.96 0 0 0 12 0m-7.5 7.5a2.174 2.174 0 0 0 3 0m-2.5-4a1.09 1.09 0 0 0-1-.5a1.09 1.09 0 0 0-1 .5m6 0a1.09 1.09 0 0 0-1-.5a1.09 1.09 0 0 0-1 .5"></svg:path><svg:path d="M6.019 10.492c-.871.437-.6 2.4.477 2.89a1 1 0 0 1 .572.746c.442 2.643 3.545 4.364 4.932 4.364s4.49-1.72 4.932-4.364a1 1 0 0 1 .572-.747c1.078-.49 1.348-2.452.477-2.889m5.519 13a4.01 4.01 0 0 0-2.488-2.745L16.043 19.1m-8.143.02l-4.912 1.627A4.01 4.01 0 0 0 .5 23.492"></svg:path><svg:path d="M5.707 12.53a5.6 5.6 0 0 1-2.073 3.67a.5.5 0 0 0-.047.838c.83.646 1.862.976 2.913.931m11.793-5.439a5.6 5.6 0 0 0 2.073 3.67a.5.5 0 0 1 .047.838a4.43 4.43 0 0 1-2.913.931"></svg:path></svg:g>`,
})
export class BubblesPeopleWomanGraduateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

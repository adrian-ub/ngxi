import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFacebookCircleLineIcon],svg[ri-facebook-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.73 2.73 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381q.494-.032 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.73.73 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiFacebookCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

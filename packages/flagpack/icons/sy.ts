import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSyIcon],svg[flagpack-sy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#F7FCFF" d="M0 0h32v24H0z"></svg:path><svg:path fill="#409100" d="M9.001 13.247L7.754 14l.285-1.47L7 11.432l1.406-.06L9.001 10l.595 1.372H11L9.964 12.53l.312 1.47zm14 0L21.754 14l.284-1.47L21 11.432l1.406-.06l.595-1.371l.595 1.372H25l-1.036 1.159l.312 1.469z"></svg:path><svg:path fill="#E31D1C" d="M0 0v8h32V0z"></svg:path><svg:path fill="#272727" d="M0 16v8h32v-8z"></svg:path></svg:g>`,
})
export class FlagpackSyIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

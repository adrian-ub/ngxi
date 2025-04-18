import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSocketIcon],svg[guidance-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 9.5v-4m5 4v-4m-2.5 12h3.5v-.492a10 10 0 0 1 2.191-6.247L18.5 9.75V9.5h-13v.25l.809 1.01A10 10 0 0 1 8.5 17.009v.492zm0 0v6c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5S.5 5.649.5 12c0 5.493 3.85 10.086 9 11.228"></svg:path>`,
})
export class GuidanceSocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

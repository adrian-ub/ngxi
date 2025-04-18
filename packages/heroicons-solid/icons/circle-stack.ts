import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCircleStackIcon],svg[heroicons-solid-circle-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4s-7-1.79-7-4s3.134-4 7-4Zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178a7 7 0 0 0 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37ZM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822a7 7 0 0 1-1.306.953C14.162 15.006 12.146 15.5 10 15.5s-4.162-.494-5.694-1.37A7.009 7.009 0 0 1 3 13.179Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidCircleStackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGif01Icon],svg[hugeicons-gif-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.504 17c-.035-.766-.393-.966-1.498-1H4.507a1 1 0 0 0-.999 1v2.894c0 .736-.137 1.727.544 2.004c.122.05.27.082.455.102h2.398a.6.6 0 0 0 .6-.6v-1.5a.4.4 0 0 0-.4-.4h-1.1m4.496-3.5h3.496m-3.496 6h1.748m0 0h1.748m-1.748 0v-5.86M16.994 22v-5.4a.6.6 0 0 1 .6-.6h2.896m-3.496 3h2.497M3.508 13v-.804c0-2.967 0-4.45.469-5.636c.753-1.905 2.347-3.407 4.367-4.118C9.601 2 11.174 2 14.322 2c1.798 0 2.697 0 3.415.253c1.155.406 2.065 1.264 2.496 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.508 12A3.333 3.333 0 0 1 6.84 8.667c.665 0 1.45.116 2.097-.057a1.67 1.67 0 0 0 1.178-1.179c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.504 2"></svg:path></svg:g>`,
})
export class HugeiconsGif01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

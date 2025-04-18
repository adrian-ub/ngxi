import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBabyChickIcon],svg[emojione-baby-chick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#e08828"><svg:path d="M34.3 50.7h2.5v10.8h-2.5z"></svg:path><svg:path d="M36.3 61.6c0-.5 1.8-1.5 4-1.5s4 1 4 1.5s-1.8.4-4 .4s-4 .1-4-.4"></svg:path><svg:path d="M31.5 61.6c0-.5 1.8-1.5 4-1.5s4 1 4 1.5s-1.8.4-4 .4s-4 .1-4-.4"></svg:path><svg:path d="M26.8 61.6c0-.5 1.8-1.5 4-1.5s4 1 4 1.5s-1.8.4-4 .4s-4 .1-4-.4M14 55.7l-2-1.4l6.3-8.2l2 1.4z"></svg:path><svg:path d="M13.5 55.4c.3-.4 2.4-.2 4.1 1c1.8 1.2 2.6 3.1 2.3 3.5s-1.7-.7-3.5-1.9c-1.7-1.2-3.2-2.2-2.9-2.6"></svg:path><svg:path d="M9.7 52.8c.3-.4 2.4-.2 4.1 1c1.8 1.2 2.6 3.1 2.3 3.5s-1.7-.7-3.5-1.9c-1.7-1.3-3.2-2.2-2.9-2.6"></svg:path><svg:path d="M6 50.1c.3-.4 2.4-.2 4.1 1c1.8 1.2 2.6 3.1 2.3 3.5s-1.7-.7-3.5-1.9s-3.3-2.2-2.9-2.6"></svg:path></svg:g><svg:g fill="#ffd93b"><svg:path d="M60.9 30.5c4.6 0-4.9 21.1-27.8 21.1c-15.6 0-26.5-6.6-26.5-18.8s8.6-24 24.2-20c15.9 4 4.7 17.7 30.1 17.7"></svg:path><svg:path d="M20 21.8c-1.1 4.3 12.4.2 9.9-8.6S19.1 2 19.1 2s3.8 8.5.9 19.8"></svg:path><svg:path d="M20.3 22.3c3.3 3.2 8-8.4-1.7-11.8S4.2 9.6 4.2 9.6s7.4 4.2 16.1 12.7"></svg:path><svg:path d="M31.3 25.7c-.3 4.3-12.1-2-6.9-10.1s14.1-8.9 14.1-8.9s-6.3 7.4-7.2 19"></svg:path></svg:g><svg:path fill="#ffea92" d="M57.2 41.2c-5 .9-13.5 4.3-23 4.3c-11.4 0-21.2-4.8-25.5-4.5c3.8 6.9 12.8 10.6 24.4 10.6c11.4 0 19.4-5.2 24.1-10.4"></svg:path><svg:path fill="#e08828" d="m3.4 31.2l5.6-1c0 2.6-.2 4.3-2.1 4.3c-1.8.1-3.5-.7-3.5-3.3"></svg:path><svg:path fill="#f29a2e" d="m9 30.3l-7 1.9c0-3.2 2.6-6.8 4.9-6.8c2.4.1 2.1 1.7 2.1 4.9"></svg:path><svg:path fill="#3e4347" d="M11 25.1c0-1.6 1.3-3.3 2.9-3.3s2.9 1.7 2.9 3.3s-1.3 2.3-2.9 2.3c-1.6-.1-2.9-.8-2.9-2.3"></svg:path><svg:g fill="#ffbf3e"><svg:path d="M48.5 37.3c0 5.3-6.7 9.6-15 9.6s-9.8-4.3-9.8-9.6s1.5-9.6 9.8-9.6s15 4.3 15 9.6"></svg:path><svg:path d="M51.2 36.9c-1.4.4-2.5-.2-2.5-.2c1.5-1.3 1.9-3.5 1.9-3.5c-1 .9-2.8.9-2.8.9c.5-1.6.2-2.8.2-2.8c-2.3 3.4-10.4 3.5-10.4 3.5c4.9 3.2 7.5 7.5 7.5 7.5c3.9-1.4 6.1-5.4 6.1-5.4"></svg:path></svg:g>`,
})
export class EmojioneBabyChickIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnZoomInOutlineIcon],svg[typcn-zoom-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h-2V9c0-.275-.225-.5-.5-.5s-.5.225-.5.5v2H8c-.275 0-.5.225-.5.5s.225.5.5.5h2v2c0 .275.225.5.5.5s.5-.225.5-.5v-2h2c.275 0 .5-.225.5-.5s-.225-.5-.5-.5m6.381 4.956l-2.244-2.283A6.9 6.9 0 0 0 17.5 11.5c0-3.859-3.141-7-7-7s-7 3.141-7 7s3.141 7 7 7c.762 0 1.488-.137 2.173-.364l2.397 2.386a3.28 3.28 0 0 0 2.104.783a3.134 3.134 0 0 0 3.131-3.131c0-.84-.328-1.628-.924-2.218m-3.901-1.11l2.492 2.531c.205.203.332.486.332.797c0 .625-.507 1.131-1.131 1.131c-.312 0-.594-.127-.816-.313l-2.512-2.511a6.1 6.1 0 0 0 1.635-1.635M5.5 11.5c0-2.757 2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5"></svg:path>`,
})
export class TypcnZoomInOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

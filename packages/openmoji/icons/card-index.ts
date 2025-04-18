import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCardIndexIcon],svg[openmoji-card-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#ea5a47" d="M18.6 7h5.87a1.57 1.57 0 0 1 1.56 1.57V12h-9V8.57A1.57 1.57 0 0 1 18.6 7"></svg:path><svg:path fill="#b1cc33" d="M30 7h5.87a1.57 1.57 0 0 1 1.56 1.57V12h-9V8.57A1.57 1.57 0 0 1 30 7"></svg:path><svg:path fill="#92d3f5" d="M45 7h5.87a1.57 1.57 0 0 1 1.56 1.57V12h-9V8.57A1.57 1.57 0 0 1 45 7"></svg:path><svg:path fill="#d0cfce" d="M17 12h38v22H17zm0 26h38v22H17z"></svg:path></svg:g><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="none" d="M18.6 7h5.87a1.57 1.57 0 0 1 1.56 1.57V12h0h-9h0V8.57A1.57 1.57 0 0 1 18.6 7M30 7h5.87a1.57 1.57 0 0 1 1.56 1.57V12h0h-9h0V8.57A1.57 1.57 0 0 1 30 7m15 0h5.87a1.57 1.57 0 0 1 1.56 1.57V12h0h-9h0V8.57A1.57 1.57 0 0 1 45 7m-28 5h38v22H17zm0 26h38v22H17zm11-7v10m16-10v10"></svg:path><svg:path d="M12 32h2v8h-2zm46 0h2v8h-2z"></svg:path><svg:path fill="none" d="M22 18h10m-10 4h19m-19 4h10"></svg:path></svg:g>`,
})
export class OpenmojiCardIndexIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

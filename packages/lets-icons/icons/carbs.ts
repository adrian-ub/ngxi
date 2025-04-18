import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCarbsIcon],svg[lets-icons-carbs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m12 4l-1.148 1.913C9.95 7.417 9.5 8.169 9.5 9c0 .83.45 1.583 1.353 3.087l.72 1.198c.19.32.287.48.428.48s.237-.16.429-.48l.719-1.198C14.05 10.583 14.5 9.831 14.5 9c0-.83-.45-1.583-1.353-3.087zm0 0V2m8.16 10.598l-2.23-.037c-1.754-.03-2.63-.045-3.35.37c-.72.416-1.146 1.183-1.997 2.717l-.678 1.221c-.181.326-.271.489-.2.611c.07.123.256.126.628.132l1.398.024c1.753.03 2.63.044 3.35-.372c.72-.415 1.145-1.182 1.997-2.715zm0 0l1.732-1"></svg:path><svg:path d="m3.84 12.598l2.23-.037c1.754-.03 2.63-.045 3.35.37c.72.416 1.146 1.183 1.997 2.717l.678 1.221c.181.326.271.489.2.611c-.07.123-.256.126-.628.132l-1.398.024c-1.753.03-2.63.044-3.35-.372c-.72-.415-1.145-1.182-1.996-2.715zm0 0l-1.732-1M12 15v7.5"></svg:path></svg:g>`,
})
export class LetsIconsCarbsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

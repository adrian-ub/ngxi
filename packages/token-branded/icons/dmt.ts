import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDmtIcon],svg[token-branded-dmt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDmt0)" d="M5.411 3.255Q5.808 3 6.207 3h8.844c.53 0 1.061.255 1.327.764l4.422 7.471a1.57 1.57 0 0 1 0 1.528l-4.422 7.47c-.266.51-.796.765-1.327.765H6.207q-.397 0-.796-.255c-.177-.17-.442-.34-.53-.51l-1.681-2.8c-.266-.424-.266-.934 0-1.273l1.945-3.396c.177-.255.177-.51.177-.764q0-.383-.266-.764L3.2 7.84c-.265-.424-.265-.933 0-1.273l1.68-2.802c.089-.17.266-.424.531-.51m2.742 13.158s.475.085.74.085h3.593c.53 0 1.062-.17 1.327-.68l1.857-3.055a1.57 1.57 0 0 0 0-1.528l-1.857-3.141c-.265-.51-.801-.595-1.332-.595H8.153l2.21 3.736a1.56 1.56 0 0 1 0 1.528z"></svg:path><svg:path fill="url(#tokenBrandedDmt1)" d="M6.364 3h.182c-.723 0-.599.495-.542.594L8.35 7.5l2.257 3.736q.407.763 0 1.528L8.35 16.499s-1.896 3.142-2.348 3.82c0 0-.361.68.542.68h8.668h-8.848c-.091 0-.562.04-.923-.215a2.6 2.6 0 0 1-.55-.522l-1.688-2.83c-.27-.423-.27-.933 0-1.272l1.955-3.411c.11-.18.165-.495.165-.75c0-.146-.098-.437-.263-.755L3.21 7.849c-.271-.424-.271-.933 0-1.273l1.711-2.887c.148-.223.23-.337.564-.524c.282-.159.606-.165.878-.165"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDmt0" x1="20.999" x2="6.575" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#01FBDF"></svg:stop><svg:stop offset="1" stop-color="#009299"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDmt1" x1="3.001" x2="10.888" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00BD97"></svg:stop><svg:stop offset="1" stop-color="#02F8AF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDmtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

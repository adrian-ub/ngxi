import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSanityIcon],svg[lineicons-sanity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".7"><svg:path d="M16.927 11.423v2.492h-.82V11.85zM5.965 13.978l1.914-1.001l-.236-.611l-1.26.587z"></svg:path><svg:path d="m16.108 11.847l2.076-1.063l-.35-.594l-1.726.844zm-5.848-.621v2.69h-.782v-3.83zm-3.111-.149l-1.184 2.9l-.609-.523l1.41-3.369z"></svg:path><svg:path d="M6.767 10.085h.806l1.493 3.83H8.24zm3.613 0l1.72 2.617v1.213l-2.622-3.83zm4.007 0h-.813v3.83h.813zm.469.699v-.699h2.915l.413.699zm5.728 1.678v1.453h-.806v-1.453m0 0l1.365-2.377H22l-1.416 2.377zm0 0l-1.404-2.377h.883l.95 1.629zm-17.45-1.935c0 .534.335.85 1.006 1.018l.711.162c.636.143 1.022.5 1.022 1.08c.005.252-.078.499-.237.698c0-.578-.304-.891-1.04-1.08l-.697-.155c-.56-.126-.991-.418-.991-1.048c-.003-.243.076-.48.226-.675"></svg:path><svg:path d="M12.1 10.085h.782v3.83H12.1zm-7.707 2.56c.304.19.437.457.437.84c-.251.315-.692.493-1.21.493c-.874 0-1.484-.422-1.62-1.155h.838c.108.336.394.492.775.492c.466 0 .775-.244.781-.672m-1.631-1.325a.9.9 0 0 1-.328-.336a.86.86 0 0 1-.107-.455c.242-.313.663-.504 1.177-.504c.89 0 1.404.46 1.53 1.11H4.23c-.089-.256-.311-.455-.717-.455c-.434 0-.73.248-.747.64"></svg:path></svg:g>`,
})
export class LineiconsSanityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

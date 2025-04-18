import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDjedIcon],svg[token-djed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-17.999A9 9 0 0 0 12 21"></svg:path><svg:path d="M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94M9.184 6.706a.365.365 0 0 0-.36.37c0 .201.158.37.36.37h.222l.312.848h4.596l.296-.847h.201a.35.35 0 0 0 .26-.106a.37.37 0 0 0 .106-.265a.38.38 0 0 0-.106-.265a.36.36 0 0 0-.265-.105zm0 2.117a.365.365 0 0 0-.36.37c0 .202.158.371.36.371h.222l.312.847h4.596l.296-.847h.201a.35.35 0 0 0 .25-.11a.37.37 0 0 0 .105-.266a.38.38 0 0 0-.106-.259a.36.36 0 0 0-.249-.106H9.178zm0 2.118a.364.364 0 0 0-.36.37c0 .202.158.371.36.371h.222l.476.847h4.236l.492-.847h.201a.35.35 0 0 0 .26-.106a.37.37 0 0 0 .106-.265a.38.38 0 0 0-.106-.264a.36.36 0 0 0-.265-.106zm4.934 1.853H9.883v.794h4.235zM9.184 17.61a.367.367 0 0 0-.36.371c0 .207.158.37.354.37h5.633a.35.35 0 0 0 .26-.105a.37.37 0 0 0 .106-.265a.38.38 0 0 0-.106-.265a.36.36 0 0 0-.265-.106h-.17c-.222-.227-.518-.953-.518-2.446v-1.048H12.53v3.706h-1.06v-3.706H9.883v1.048c0 1.493-.29 2.219-.513 2.452h-.19z"></svg:path></svg:g>`,
})
export class TokenDjedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

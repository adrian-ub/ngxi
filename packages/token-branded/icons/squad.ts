import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSquadIcon],svg[token-branded-squad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9D993" d="M4.287 16.28V7.41l.514.272v8.28z"></svg:path><svg:path fill="#000" d="M20.229 16.917L12.052 21l-7.838-3.888l-.443-.69V6.745L7.3 3h9.381l3.549 3.744z"></svg:path><svg:path fill="#9D1302" d="M4.286 16.242V6.506l3.178-2.905h9.139l3.111 2.92v9.746l-7.652 3.822z"></svg:path><svg:path fill="#F6A703" d="M6.153 8.604L4.502 7.68l-.03 8.316l6.243 3.121v-1.769L6.153 14.93z"></svg:path><svg:path fill="#F5BC42" d="m5.87 8.256l-1.543-.844l.113.638l1.301.802l.602-.252l-.473-.257z"></svg:path><svg:path fill="#E17402" d="M5.83 8.811v6.249l.513-.18V8.59z"></svg:path><svg:path fill="#F9C352" d="m10.972 17.245l-4.629-2.382l-.566.211l4.732 2.392z"></svg:path><svg:path fill="url(#tokenBrandedSquad0)" d="m5.208 15.805l.601-.766l4.721 2.433l-4.592-2.196z"></svg:path><svg:path fill="#EE7B02" d="m10.457 18.848l-5.74-2.89l-.395.309l6.65 3.276v-2.305l-.515.258z"></svg:path><svg:path fill="#F9EDE3" d="m13.544 17.538l-.514-.247l4.834-2.34l.406.34z"></svg:path><svg:path fill="#FDD16C" d="M17.658 14.964V8.71h.515l-.067 6.609l-.448-.36z"></svg:path><svg:path fill="#E6B480" d="M13.03 17.302v1.83l.514-.313v-1.265z"></svg:path><svg:path fill="#CA6A16" d="m19.18 16.012l-5.636 2.813v-1.301l4.68-2.248l.957.746z"></svg:path><svg:path fill="#F6A803" d="M18.019 8.779v6.51l1.275.798V8.013l-1.27.771z"></svg:path><svg:path fill="#B7490D" d="m13.544 18.825l-.514.308v.504l6.644-3.343l-.524-.298z"></svg:path><svg:path fill="#DC7202" d="M19.715 7.474v8.82l-.514-.196V7.85z"></svg:path><svg:path fill="#FFFFF8" d="m19.674 7.45l-2.016 1.208l.55.087l.067 4.85l.093-4.85l.581-.4l.514-.448c.02-.026.155-.309.206-.448z"></svg:path><svg:path fill="#DEAB5C" d="m6.786 7.114l-1.79-1.085l.561-.114l1.06.7L8.23 4.979l.196.335l-1.646 1.8z"></svg:path><svg:path fill="#F4F598" d="m6.61 6.647l-1.053-.73l.55-.854l1.44-1.209l.669 1.137z"></svg:path><svg:path fill="#FEFEF7" d="m4.95 5.963l.082.072l.55-.108l1.851-1.851l.659.668l-.664-1.219z"></svg:path><svg:path fill="#DEA007" d="M15.586 5.325H8.447l-.241-.35h7.539z"></svg:path><svg:path fill="#F5E90C" d="m8.195 5.005l-.53-1.049h8.61l-.546 1.05z"></svg:path><svg:path fill="#FCF8AC" d="M16.516 3.513H7.423l.237.463h8.588l.258-.463z"></svg:path><svg:path fill="#F2A503" d="m18.743 5.757l-2.227-2.232l-.812 1.497l1.491 1.579l1.548-.838z"></svg:path><svg:path fill="#DC7502" d="m17.267 7.083l-1.682-1.769l.134-.319l1.46 1.594l1.548-.843l.309.345z"></svg:path><svg:path fill="#CF340B" d="M7.32 7.69v6.48l4.64 2.314l4.793-2.314V7.69L14.89 6.096H9.1L7.315 7.69z"></svg:path><svg:path fill="#fff" d="m7.886 6.6l1.028.798v1.687l4.115 3.497v.704h-2.572v-1.013L8.565 10.86l-.335 3.975h6.856V12.34l-4.114-3.25v-.957h3.6V6.601zm7.2 0v2.094l1.028.992V6.601z"></svg:path><svg:path fill="#670000" d="M6.344 7.33L4.8 6.495v.72l1.543.864zm11.314 0l1.543-.834v.72l-1.543.864zm-6.172 12.126V17.4h1.03v2.057z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSquad0" x1="4.87" x2="13.045" y1="5.131" y2="8.627" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FCEABF"></svg:stop><svg:stop offset="1" stop-color="#FCEABF" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSquadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMochiIcon],svg[token-branded-mochi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D6EAFD" d="M12.002 3a9 9 0 1 1-.004 18a9 9 0 0 1 .004-18"></svg:path><svg:path fill="#95C2F1" d="M17.436 4.825A8.997 8.997 0 0 1 6.864 19.38A8.997 8.997 0 0 1 17.436 4.825"></svg:path><svg:path fill="#5890D2" d="M16.418 5.415a7.893 7.893 0 0 1-4.77 14.196a7.85 7.85 0 0 1-4.508-1.415A7.892 7.892 0 0 1 11.904 4a7.9 7.9 0 0 1 4.508 1.415z"></svg:path><svg:path fill="#B4D3F1" d="M16.866 5.8a7.892 7.892 0 0 1-4.764 14.196a7.85 7.85 0 0 1-4.508-1.415a7.893 7.893 0 0 1 4.768-14.196a7.86 7.86 0 0 1 4.51 1.414z"></svg:path><svg:path fill="url(#tokenBrandedMochi0)" d="M16.677 5.634a7.894 7.894 0 0 1-4.77 14.196a7.87 7.87 0 0 1-4.513-1.414A7.892 7.892 0 0 1 12.163 4.22c1.684 0 3.234.525 4.514 1.414"></svg:path><svg:path fill="url(#tokenBrandedMochi1)" d="M6.005 13.432s1.684 3.534 6.098 3.534c4.419 0 5.889-3.624 5.889-3.624l-1.45-3.03s.135-.634.135-1.439c0-.8-.25-2.374-1.18-2.374c-.934 0-1.994 1.5-1.994 1.5s-1.5-.5-3 0c0 0-1.044-1.5-1.829-1.5S7.26 7.734 7.26 9.063c0 1.33.124 1.33.124 1.33zm2.184-3.629s-.055-2.2.75-2.2c.6 0 .885.77.885.77s-1.105.62-1.635 1.43m7.043-2.75c.925 0 .485 2.2.485 2.2c-.595-.735-1.534-1.194-1.534-1.194s.47-1.01 1.05-1.01z"></svg:path><svg:path fill="#F6F4DF" d="M6.385 12.598a3.87 3.87 0 0 1 3.529.315s.9-.915 2.114-.915c.6 0 1.285.25 1.97.88c0 0 1.714-1.17 3.704-.16l.3.615s-1.48 3.664-5.889 3.664a6.85 6.85 0 0 1-6.108-3.57z"></svg:path><svg:path fill="#2B2A29" d="M10.004 10.998c.28 0 .5.34.5.75c0 .42-.22.75-.5.75c-.27 0-.5-.34-.5-.75c.005-.41.23-.75.5-.75m3.999 0c.28 0 .5.34.5.75c0 .42-.22.75-.5.75c-.27 0-.5-.34-.5-.75s.22-.75.5-.75"></svg:path><svg:path fill="#F6F4DF" d="M13.752 9.498c.415 0 .75.225.75.5s-.335.5-.75.5c-.41 0-.75-.225-.75-.5s.34-.5.75-.5m-3.404.02c.405.07.7.35.65.61c-.05.265-.425.425-.84.35c-.405-.07-.7-.35-.65-.61c.05-.265.425-.425.84-.35"></svg:path><svg:path fill="#2B2A29" d="m10.502 13.127l.32-.51l.18.055v.2s.25.365.915.365v-.24c-.47-.085-.71-.71-.71-.71c.755-.62 1.75-.05 1.75-.05s-.335.66-.81.76v.235s.32.085.855-.315v-.23l.185-.005l.315.51l-.15.075l-.165-.165s-.4.395-1.16.395s-1.24-.48-1.24-.48l-.19.15z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMochi0" x1="5.258" x2="19.907" y1="5.957" y2="17.524" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84B8EF"></svg:stop><svg:stop offset=".73" stop-color="#0871DD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMochi1" x1="12.001" x2="12.001" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E5A507"></svg:stop><svg:stop offset="1" stop-color="#F4DA12"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMochiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

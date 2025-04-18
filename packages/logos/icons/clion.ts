import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosClionIcon],svg[logos-clion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosClion0" x1="0%" x2="115.015%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#FF318C"></svg:stop><svg:stop offset="15%" stop-color="#FB348C"></svg:stop><svg:stop offset="28%" stop-color="#F03C8C"></svg:stop><svg:stop offset="42%" stop-color="#DE4A8C"></svg:stop><svg:stop offset="54%" stop-color="#C45D8B"></svg:stop><svg:stop offset="67%" stop-color="#A2778B"></svg:stop><svg:stop offset="79%" stop-color="#79958A"></svg:stop><svg:stop offset="91%" stop-color="#49B98A"></svg:stop><svg:stop offset="100%" stop-color="#21D789"></svg:stop></svg:lineargradient><svg:lineargradient id="logosClion1" x1="53.816%" x2="43.444%" y1="17.257%" y2="151.488%"><svg:stop offset="9%" stop-color="#21D789"></svg:stop><svg:stop offset="90%" stop-color="#009AE5"></svg:stop></svg:lineargradient><svg:lineargradient id="logosClion2" x1="93.049%" x2="-9.597%" y1="9.981%" y2="113.191%"><svg:stop offset="9%" stop-color="#21D789"></svg:stop><svg:stop offset="90%" stop-color="#009AE5"></svg:stop></svg:lineargradient><svg:lineargradient id="logosClion3" x1="32.388%" x2="91.688%" y1="46.039%" y2="52.244%"><svg:stop offset="9%" stop-color="#21D789"></svg:stop><svg:stop offset="90%" stop-color="#009AE5"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosClion0)" d="M92.027 100.107L97.573 0l58.214 32.267z"></svg:path><svg:path fill="url(#logosClion1)" d="M92.027 100.107L97.573 0l-73.92 46.587L0 188.213z"></svg:path><svg:path fill="url(#logosClion2)" d="M250.907 76.72L217.973 9.76l-62.186 22.507l-63.76 67.84L0 188.213l83.013 60.427l104.347-94.107z"></svg:path><svg:path fill="url(#logosClion3)" d="M208 146.773V208H107.467l44.186 34.187l64 13.813L256 164.667z"></svg:path><svg:path d="M48 48h160v160H48z"></svg:path><svg:path fill="#FFF" d="M67.947 177.76h60v10h-60zm60.186-109.92h13.334v49.04h26.266V128h-39.6zM63.676 98.815l.004-.655a30.773 30.773 0 0 1 31.547-31.307a31.23 31.23 0 0 1 23.84 9.334l-8.4 9.786a22.35 22.35 0 0 0-15.494-6.826c-10.073 0-17.356 8.266-17.517 18.481l-.003.532c0 10.373 7.174 19.013 17.52 19.013c6.934 0 11.147-2.666 16-7.093l8.32 8.587a30.93 30.93 0 0 1-24.826 10.666a30.533 30.533 0 0 1-30.99-30.518"></svg:path>`,
})
export class LogosClionIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

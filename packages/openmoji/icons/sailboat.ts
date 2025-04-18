import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSailboatIcon],svg[openmoji-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M38.535 7.946v27.905h16.693z"></svg:path><svg:path fill="#a57939" d="M51.935 47.465c2.68-2.68 4.466-7.147 4.466-7.147H17.99s-.894 4.467 2.68 7.147z"></svg:path><svg:path fill="#d0cfce" d="M35.196 14.412v21.439H24.901z"></svg:path><svg:path fill="none" d="M64.441 63.544H7.269V45.888"></svg:path><svg:path fill="#92d3f5" d="M64.441 44.785v18.76H7.27v-18.76h.893c2.68 0 8.04 2.68 13.4 2.68s8.933-2.68 14.293-2.68s9.827 2.68 14.293 2.68s6.253-2.68 13.4-2.68z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2.036" d="M38.535 7.946v27.905h16.693z"></svg:path><svg:path stroke-width="2" d="M52.04 47.295c2.68-2.68 4.362-6.977 4.362-6.977H17.989s-1.08 4.321 2.494 7.001m14.713-32.907v21.439H24.901z"></svg:path><svg:path stroke-width="2.036" d="M38.535 8.158v32.16"></svg:path><svg:path stroke-width="2" d="M8.162 44.785c2.68 0 8.04 2.68 13.4 2.68s8.933-2.68 14.293-2.68s9.827 2.68 14.293 2.68s6.253-2.68 13.4-2.68"></svg:path></svg:g>`,
})
export class OpenmojiSailboatIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

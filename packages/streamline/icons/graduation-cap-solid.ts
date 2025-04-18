import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGraduationCapSolidIcon],svg[streamline-graduation-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.199.728a.5.5 0 0 0-.398 0l-6.5 2.817a.5.5 0 0 0 0 .917l.893.387v5.591a1.24 1.24 0 1 0 1.003 0V5.283L6.8 7.278a.5.5 0 0 0 .398 0l6.5-2.816a.5.5 0 0 0 0-.917zM2.956 9.353l-.005-2.38l3.353 1.452a1.75 1.75 0 0 0 1.391 0l3.354-1.453v2.38a.5.5 0 0 1-.101.303l-.399-.303l.398.303v.002l-.003.002l-.005.007l-.015.019l-.051.06a3 3 0 0 1-.186.191a4.4 4.4 0 0 1-.724.553c-.65.398-1.627.784-2.963.784s-2.313-.386-2.96-.785a4.3 4.3 0 0 1-.724-.552a3 3 0 0 1-.236-.252l-.015-.02l-.005-.006l-.002-.002v-.001c-.001-.001-.001-.001.398-.303l-.4.302a.5.5 0 0 1-.1-.3Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraduationCapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChair2LineDuotoneIcon],svg[solar-chair-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm.628-8.734c.242-2.012.362-3.017.944-3.704a3 3 0 0 1 .638-.566C8.96 2 9.974 2 12 2s3.039 0 3.79.496a3 3 0 0 1 .638.566c.582.687.703 1.692.944 3.704l.091.757c.25 2.088.376 3.132-.221 3.804c-.597.673-1.648.673-3.75.673h-2.983c-2.103 0-3.154 0-3.75-.673c-.597-.672-.472-1.716-.222-3.804z"></svg:path><svg:path d="M12 12v2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5l.466.116A2.88 2.88 0 0 1 14.5 22M12 20l-.466.116A2.88 2.88 0 0 0 9.5 22M6 16l-.865-2.595c-.073-.22-.11-.33-.18-.482a2.4 2.4 0 0 0-.16-.297C4.34 11.876 3.734 11.5 2 11.5M18 16l.865-2.595c.073-.22.11-.33.18-.482c.072-.153.1-.201.16-.297c.456-.75 1.063-1.126 2.795-1.126" opacity=".5"></svg:path></svg:g>`,
})
export class SolarChair2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

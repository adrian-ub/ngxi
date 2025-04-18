import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWeightOutline24pxIcon],svg[healthicons-weight-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.944 3H5.056a2 2 0 0 0-1.999 2.056l.389 14a2 2 0 0 0 2 1.944h13.109a2 2 0 0 0 1.999-1.945l.389-14a2 2 0 0 0-2-2.055m0 2h-1.68l-.711 6.051a.508.508 0 0 1-.63.433A16 16 0 0 0 12 11c-1.353 0-2.667.168-3.922.484a.508.508 0 0 1-.63-.433L6.734 5H5.056l.39 14h13.109zM8.749 5l.495 4.21q.8-.123 1.62-.175l.925-2.772a.75.75 0 1 1 1.422.474l-.756 2.269q1.171.03 2.3.204L15.252 5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsWeightOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

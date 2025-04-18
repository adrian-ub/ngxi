import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatUmbrellaOnGroundIcon],svg[fluent-emoji-flat-umbrella-on-ground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M5.01 29h21.98c1.66 0 3.01-1.35 3.01-3.01v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7C2 27.65 3.35 29 5.01 29"></svg:path><svg:path fill="#9D5044" d="M24.28 6.98L7.15 24.11c-.2.2-.2.52 0 .72s.52.2.72 0L25 7.7c.2-.2.2-.52 0-.72s-.52-.2-.72 0"></svg:path><svg:path fill="#F8312F" d="M22.84 24.95c.76.76 1.95.82 2.52.08c3.9-5.1 3.49-12.46-1.21-17.16S12.08 2.75 6.98 6.65c-.74.56-.68 1.75.08 2.51l.76.76L19 13l3.08 11.18z"></svg:path><svg:path fill="#E6E6E6" d="M22.07 24.18c5.08-5.08 6-12.38 2.06-16.32S12.89 4.84 7.82 9.92z"></svg:path><svg:path fill="#F8312F" d="M18.5 20.6c5.08-5.08 7.6-10.79 5.63-12.75s-7.67.56-12.75 5.64z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatUmbrellaOnGroundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

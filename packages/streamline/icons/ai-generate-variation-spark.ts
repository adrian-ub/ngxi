import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateVariationSparkIcon],svg[streamline-ai-generate-variation-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.28 8.231H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488Zm7.589 0h-4.15a.49.49 0 0 0-.488.488v4.15c0 .27.218.488.488.488h4.15c.27 0 .488-.219.488-.488v-4.15a.49.49 0 0 0-.488-.488M5.28.643H1.132a.49.49 0 0 0-.488.488v4.15c0 .27.219.488.488.488h4.15c.27 0 .488-.219.488-.488V1.13a.49.49 0 0 0-.488-.488Zm2.866 2.941c-.301-.052-.301-.483 0-.536A2.72 2.72 0 0 0 10.337.95l.018-.083c.065-.297.488-.3.556-.003l.022.097a2.735 2.735 0 0 0 2.197 2.086c.302.052.302.486 0 .539a2.735 2.735 0 0 0-2.197 2.086l-.022.096c-.068.297-.49.295-.556-.002l-.018-.083a2.72 2.72 0 0 0-2.191-2.099"></svg:path>`,
})
export class StreamlineAiGenerateVariationSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

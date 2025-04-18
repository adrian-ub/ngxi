import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiChestnutIcon],svg[twemoji-chestnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C1694F" d="M36 25c0 4-8.059 11-18 11S0 29 0 25C0 6 17 0 18 0s18 6 18 25"></svg:path><svg:g fill="#A95233"><svg:path d="M3.001 29.385q-.075 0-.15-.012a1 1 0 0 1-.84-1.137c.134-.895 3.43-21.968 15.535-28.127a1 1 0 1 1 .907 1.783C7.267 7.583 4.021 28.325 3.989 28.533a1 1 0 0 1-.988.852"></svg:path><svg:path d="M32.999 29.385a1 1 0 0 1-.988-.852c-.031-.208-3.277-20.95-14.464-26.642a1.001 1.001 0 0 1 .906-1.783c12.107 6.16 15.401 27.234 15.536 28.128a1 1 0 0 1-.99 1.149"></svg:path><svg:path d="m12.001 33l-.054-.001a1 1 0 0 1-.945-1.052c.053-.999 1.356-24.544 6.176-31.516a1 1 0 1 1 1.645 1.138c-4.5 6.508-5.811 30.246-5.824 30.484a1 1 0 0 1-.998.947"></svg:path><svg:path d="M23.999 33c-.527 0-.969-.413-.998-.947c-.013-.238-1.324-23.976-5.824-30.484A1 1 0 1 1 18.822.431c4.819 6.972 6.123 30.517 6.177 31.516a1.003 1.003 0 0 1-.946 1.052z"></svg:path></svg:g><svg:path fill="#662113" d="M36 25c0 4-8.059 11-18 11S0 29 0 25c3 4 10 7 18 7s15-3 18-7"></svg:path>`,
})
export class TwemojiChestnutIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

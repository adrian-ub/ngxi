import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsReminderOutlineSharpIcon],svg[material-symbols-reminder-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8h1V7q0-.425-.288-.712T6.5 6t-.712.288T5.5 7t.288.713T6.5 8M11 8q.425 0 .713-.288T12 7t-.288-.712T11 6t-.712.288T10 7v1zm9 14H9.025l-6.35-8.075l1.6-1.675L7.5 14.2V10h-1q-1.25 0-2.125-.875T3.5 7t.875-2.125T6.5 4q.275 0 .513.05t.487.125V2h2.025v2.4q.35-.2.713-.3T11 4q1.25 0 2.125.875T14 7t-.875 2.125T11 10H9.525v7.8L7.1 16.3L10 20h8v-7h-6.475v-2H20z"></svg:path>`,
})
export class MaterialSymbolsReminderOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

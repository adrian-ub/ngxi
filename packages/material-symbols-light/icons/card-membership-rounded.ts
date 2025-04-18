import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCardMembershipRoundedIcon],svg[material-symbols-light-card-membership-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 3h14.769q.69 0 1.152.463T21 4.615v9.77q0 .69-.463 1.152T19.385 16h-4.462v2.952q0 .46-.379.699t-.783.028l-1.407-.685q-.162-.086-.354-.086t-.354.086l-1.408.685q-.403.212-.782-.028t-.379-.699V16H4.616q-.691 0-1.153-.462T3 14.385v-9.77q0-.69.463-1.153T4.615 3M4 12.577h16v-2.154H4z"></svg:path>`,
})
export class MaterialSymbolsLightCardMembershipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

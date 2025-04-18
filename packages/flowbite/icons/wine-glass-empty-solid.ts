import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWineGlassEmptySolidIcon],svg[flowbite-wine-glass-empty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a1 1 0 0 0-.947.677l-.128.373a60 60 0 0 0-.762 2.303C6.338 6.422 6 7.699 6 8.57c0 2.884 2.092 5.783 5 6.335V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-5.094c2.908-.552 5-3.451 5-6.335c0-.863-.328-2.127-.65-3.195a56 56 0 0 0-.907-2.71l-.002-.003A1 1 0 0 0 15.5 2z"></svg:path>`,
})
export class FlowbiteWineGlassEmptySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

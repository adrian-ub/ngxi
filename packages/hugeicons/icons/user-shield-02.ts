import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserShield02Icon],svg[hugeicons-user-shield-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5-4c-.95 0-1.566.606-2.295.826c-.296.09-.444.135-.504.198c-.06.064-.077.156-.112.341c-.376 1.979.445 3.808 2.403 4.52c.21.077.315.115.508.115c.194 0 .299-.038.51-.115c1.957-.712 2.777-2.541 2.401-4.52c-.035-.185-.052-.277-.112-.34c-.06-.064-.208-.109-.505-.199C20.566 3.606 19.95 3 19 3" color="currentColor"></svg:path>`,
})
export class HugeiconsUserShield02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

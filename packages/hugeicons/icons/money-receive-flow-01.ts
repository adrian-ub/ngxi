import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyReceiveFlow01Icon],svg[hugeicons-money-receive-flow-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2v4M8 4v2m8-2v2m3 .5c.774.166 1.359.443 1.828.905C22 8.558 22 10.415 22 14.126s0 5.568-1.172 6.72C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.153S2 17.837 2 14.126s0-5.568 1.172-6.72c.47-.463 1.054-.74 1.828-.906M18.5 14h-.009M5.51 14h-.009"></svg:path><svg:path d="M14.5 14a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsMoneyReceiveFlow01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

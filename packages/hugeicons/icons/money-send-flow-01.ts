import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneySendFlow01Icon],svg[hugeicons-money-send-flow-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22v-4m-4 2v-2m8 2v-2m3-.5c.774-.166 1.359-.443 1.828-.905C22 15.442 22 13.585 22 9.874s0-5.568-1.172-6.72C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.153S2 6.163 2 9.874s0 5.568 1.172 6.72c.47.463 1.054.74 1.828.906M18.5 10h-.009M5.51 10h-.009"></svg:path><svg:path d="M14.5 10a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class HugeiconsMoneySendFlow01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodAbN24pxIcon],svg[healthicons-blood-ab-n-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.571 4.579a2 2 0 0 0 1.429.6h3V6.5h2V5.164a1.99 1.99 0 0 0-2-1.985h-3l-.566-.578a2.01 2.01 0 0 0-2.868 0L10 3.18H7c-1.105 0-2 .889-2 1.985v11.851C5 18.111 5.895 19 7 19h2v1h2v2h2v-2h2v-1h2c1.105 0 2-.889 2-1.985V11.5h-2v1.098a4 4 0 0 0-.916-.3a3.7 3.7 0 0 0-1.792.089a4.4 4.4 0 0 0-.897.386a5.8 5.8 0 0 1-1.487.583q-.195.048-.396.085c-.46.085-.944.133-1.467.157a34 34 0 0 1-1.795.023l-.262-.002h-.002l-.477-.002l-.383-.002H7V5.18h3a2 2 0 0 0 1.429-.6l.566-.58h.01z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.297 6.845a.45.45 0 0 0-.845 0L8.425 9.648l-.007.02l-.34.927a.45.45 0 1 0 .844.31l.236-.643h1.434l.235.643a.45.45 0 0 0 .845-.31l-.34-.928l-.007-.02zm-.422 1.462l.387 1.056h-.774zM12.3 7a.45.45 0 0 1 .45-.45h1.563a1.387 1.387 0 0 1 1.022 2.325a1.387 1.387 0 0 1-1.023 2.325H12.75a.45.45 0 0 1-.45-.45zm2.012 1.425a.487.487 0 1 0 0-.975H13.2v.975zm-1.112.9h1.113a.487.487 0 1 1 0 .975H13.2z" clip-rule="evenodd"></svg:path><svg:path d="M17 8.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class HealthiconsBloodAbN24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

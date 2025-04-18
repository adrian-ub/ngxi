import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell02Icon],svg[hugeicons-dumbbell-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 8a2.62 2.62 0 0 1-1.455 1.607q-3.421 1.517-4.937 4.937A2.62 2.62 0 0 1 8 16m-4.8 4.8L2 22M20.8 3.2L22 2m-4.212.42l-1.512 1.454l3.84 3.876l1.478-1.434c.444-.523.58-.916.027-1.641l-1.105-1.163l-1.121-1.106c-.717-.642-1.281-.297-1.607.015"></svg:path><svg:path d="M14.012 3.756c1.11-1.173 1.87-.338 2.261.127l3.808 3.823c.474.38 1.34 1.109.195 2.244c-.185.183-.366.375-.567.54c-.742.61-1.454.105-1.831-.36l-3.876-3.876c-.408-.366-1.113-1.03-.518-1.918c.16-.205.349-.39.527-.58M4.587 21.62l-1.14-1.129l-1.085-1.142c-.643-.643-.272-1.286.046-1.605L3.89 16.26l3.856 3.873l-1.518 1.491c-.53.433-.895.566-1.608 0m1.603-7.7c-.39-.465-1.15-1.301-2.262-.127c-.178.189-.366.374-.527.58c-.595.887.11 1.551.518 1.918l3.876 3.875c.377.465 1.089.971 1.83.36c.202-.165.383-.356.568-.54c1.146-1.134.279-1.863-.195-2.243z"></svg:path></svg:g>`,
})
export class HugeiconsDumbbell02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

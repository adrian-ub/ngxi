import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUncomfortable2Icon],svg[tdesign-uncomfortable-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m6.619-4.862L11 9.04v1.46l-3.2 2.4l-1.2-1.6l1.86-1.394L6.637 8.88zm9.743 1.743L15.54 9.906L17.4 11.3l-1.2 1.6l-3.2-2.4V9.04l3.381-1.902zM9.5 15.5a1 1 0 0 0-1 1v1h-2v-1a3 3 0 0 1 5.065-2.177a1 1 0 0 0 .206.158a.2.2 0 0 0 .044.019h.37a.2.2 0 0 0 .044-.019a1 1 0 0 0 .207-.158A3 3 0 0 1 17.5 16.5v1h-2.001v-1a1 1 0 0 0-1.688-.726c-.322.306-.878.726-1.621.726h-.382c-.743 0-1.299-.42-1.621-.726A1 1 0 0 0 9.5 15.5m2.318-1"></svg:path>`,
})
export class TdesignUncomfortable2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

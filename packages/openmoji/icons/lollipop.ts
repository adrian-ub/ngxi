import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLollipopIcon],svg[openmoji-lollipop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.627" cy="51.48" r="18" fill="#ea5a47" transform="rotate(-45)"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.675" cy="51.41" r="18.22" stroke-miterlimit="10" stroke-width="2" transform="rotate(-45)"></svg:circle><svg:path stroke-miterlimit="10" stroke-width="2" d="m12 60.7l13.79-13.79"></svg:path><svg:path stroke-width="1.864" d="M42.69 30.99c.19-.71 1.05-.094 1.179.316c.35 1.11-.82 1.996-1.811 2.042c-1.774.082-2.992-1.659-2.906-3.306c.128-2.417 2.507-4.008 4.801-3.769c3.058.32 5.032 3.357 4.632 6.297c-.503 3.699-4.208 6.059-7.792 5.495c-4.341-.683-7.089-5.059-6.359-9.287c.86-4.982 5.911-8.12 10.78-7.222c5.624 1.037 9.152 6.763 8.085 12.28c-1.213 6.266-7.615 10.18-13.77 8.948c-6.907-1.387-11.22-8.467-9.811-15.27c1.562-7.549 9.32-12.25 16.76-10.67"></svg:path></svg:g><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.864" d="M42.69 30.99c.19-.71 1.05-.094 1.179.316c.35 1.11-.82 1.996-1.811 2.042c-1.774.082-2.992-1.659-2.906-3.306c.128-2.417 2.507-4.008 4.801-3.769c3.058.32 5.032 3.357 4.632 6.297c-.503 3.699-4.208 6.059-7.792 5.495c-4.341-.683-7.089-5.059-6.359-9.287c.86-4.982 5.911-8.12 10.78-7.222c5.624 1.037 9.152 6.763 8.085 12.28c-1.213 6.266-7.615 10.18-13.77 8.948c-6.907-1.387-11.22-8.467-9.811-15.27c1.562-7.549 9.32-12.25 16.76-10.67"></svg:path>`,
})
export class OpenmojiLollipopIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

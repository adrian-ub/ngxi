import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimetreeIcon],svg[arcticons-timetree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.929 4.5c10.111 3.29 15.756 8.243 14.253 18.436C12.041 22.286 9.32 14.408 9.929 4.5m28.375 2.874c-.466 8.82-3.227 14.413-11.728 15.398c-2.088-9.88 3.648-13.757 11.728-15.398M4.92 32.141c5.137-7.184 10.474-10.414 18.17-6.671c-3.555 9.453-10.476 9.635-18.17 6.671m38.16-.961c-7.328 1.744-12.57.832-15.425-5.886c7.582-4.09 12.136-.33 15.425 5.886M25.191 43.5c-4.07-6.34-4.943-11.588.453-16.504C32.01 32.8 29.97 38.34 25.19 43.5"></svg:path>`,
})
export class ArcticonsTimetreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

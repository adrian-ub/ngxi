import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psLaptopIcon],svg[ps-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 64q0-27-18-45.5T405 0H107Q79 0 61 18.5T43 64v213H0v43q0 27 18.5 45.5T64 384h384q27 0 45.5-18.5T512 320v-43h-43zM85 64q0-21 22-21h298q22 0 22 21v213h-22V85q0-21-21-21H128q-21 0-21 21v192H85zM64 341q-21 0-21-21h170q0 21 22 21zm384 0H277q22 0 22-21h170q0 21-21 21"></svg:path>`,
})
export class PsLaptopIcon {
  readonly viewBox = input("0 0 512 448")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

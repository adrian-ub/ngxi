import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CloudWeatherIcon],svg[fluent-mdl2-cloud-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1661 896q80 0 150 30t123 81t83 122t31 151q0 80-30 149t-82 122t-123 83t-149 30H512q-106 0-199-40t-163-109t-110-163t-40-200t40-199t109-163t163-110t200-40q46 0 93 9q40-62 92-111t115-84t132-52t144-18q111 0 209 39t175 107t125 163t64 203m3 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20h-128v-64q0-93-35-174t-96-143t-142-96t-175-35q-70 0-135 21t-119 59t-97 91t-67 120q-75-35-158-35q-80 0-149 30t-122 82t-83 123t-30 149q0 80 30 149t82 122t122 83t150 30z"></svg:path>`,
})
export class FluentMdl2CloudWeatherIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}

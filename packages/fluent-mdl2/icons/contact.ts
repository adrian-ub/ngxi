import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ContactIcon],svg[fluent-mdl2-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1330 1203q136 47 245 131t186 196t118 243t41 275h-128q0-164-58-304t-162-244t-243-161t-305-59q-107 0-206 27t-184 76t-155 119t-119 155t-77 185t-27 206H128q0-144 42-275t119-242t186-194t245-133q-78-42-140-102T475 969t-67-157t-24-172q0-133 50-249t137-204T774 50t250-50q133 0 249 50t204 137t137 203t50 250q0 88-23 171t-67 156t-105 133t-139 103M512 640q0 106 40 199t110 162t163 110t199 41t199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199"></svg:path>`,
})
export class FluentMdl2ContactIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}

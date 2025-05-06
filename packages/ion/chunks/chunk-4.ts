import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionReloadCircleSharpIcon],svg[ion-reload-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 190.77h-89l36.88-36.88l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25l5.37-15.13l30.17 10.67l-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5L376 149.81Z"></svg:path>`,
})
export class IonReloadCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadOutlineIcon],svg[ion-reload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42"></svg:path>`,
})
export class IonReloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReloadSharpIcon],svg[ion-reload-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128"></svg:path><svg:path fill="currentColor" d="M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83"></svg:path>`,
})
export class IonReloadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveIcon],svg[ion-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class IonRemoveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveCircleIcon],svg[ion-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonRemoveCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveCircleOutlineIcon],svg[ion-remove-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 256H176"></svg:path>`,
})
export class IonRemoveCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveCircleSharpIcon],svg[ion-remove-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m96 224H160v-32h192Z"></svg:path>`,
})
export class IonRemoveCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveOutlineIcon],svg[ion-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class IonRemoveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRemoveSharpIcon],svg[ion-remove-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></svg:path>`,
})
export class IonRemoveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderFourIcon],svg[ion-reorder-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 304h308m-308-96h308m-308-96h308M102 400h308"></svg:path>`,
})
export class IonReorderFourIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderFourOutlineIcon],svg[ion-reorder-four-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 304h320M96 208h320M96 112h320M96 400h320"></svg:path>`,
})
export class IonReorderFourOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderFourSharpIcon],svg[ion-reorder-four-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M102 304h308m-308-96h308m-308-96h308M102 400h308"></svg:path>`,
})
export class IonReorderFourSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderThreeIcon],svg[ion-reorder-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M102 256h308m-308-80h308M102 336h308"></svg:path>`,
})
export class IonReorderThreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderThreeOutlineIcon],svg[ion-reorder-three-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></svg:path>`,
})
export class IonReorderThreeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderThreeSharpIcon],svg[ion-reorder-three-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M102 256h308m-308-80h308M102 336h308"></svg:path>`,
})
export class IonReorderThreeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoIcon],svg[ion-reorder-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class IonReorderTwoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoOutlineIcon],svg[ion-reorder-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288m-288-96h288"></svg:path>`,
})
export class IonReorderTwoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReorderTwoSharpIcon],svg[ion-reorder-two-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="44" d="M118 304h276m-276-96h276"></svg:path>`,
})
export class IonReorderTwoSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRepeatIcon],svg[ion-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class IonRepeatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRepeatOutlineIcon],svg[ion-repeat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 168H144a80.24 80.24 0 0 0-80 80v16m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 344h208a80.24 80.24 0 0 0 80-80v-16"></svg:path>`,
})
export class IonRepeatOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRepeatSharpIcon],svg[ion-repeat-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m320 120l48 48l-48 48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 168H64v96m128 128l-48-48l48-48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M160 344h288v-96"></svg:path>`,
})
export class IonRepeatSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReplyIcon],svg[ion-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 400s-36.8-208-224-208v-80L64 256l160 134.4v-92.3c101.6 0 171 8.9 224 101.9z" fill="currentColor"></svg:path>`,
})
export class IonReplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReplyAllIcon],svg[ion-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304.5 192v-80L152.7 255.8 304.5 390v-91.9c68 0 107.9 8.9 159.1 101.9 0 0-6.1-208-159.1-208z" fill="currentColor"></svg:path><svg:path d="M47.5 256l144 126.5V324l-82.2-68 82.2-78.6v-57z" fill="currentColor"></svg:path>`,
})
export class IonReplyAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionResizeIcon],svg[ion-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class IonResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionResizeOutlineIcon],svg[ion-resize-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class IonResizeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionResizeSharpIcon],svg[ion-resize-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304"></svg:path>`,
})
export class IonResizeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRestaurantIcon],svg[ion-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.7 16.7 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.5 79.5 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.8 64.8 0 0 0 211 326a64 64 0 0 0 16.21-2.08a16.2 16.2 0 0 1 4.07-.53a15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57l.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69Z"></svg:path><svg:path fill="currentColor" d="M211 358a97.32 97.32 0 0 1-68.36-28.25l-13.86-13.86a8 8 0 0 0-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a31 31 0 0 0 1.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0 0 39.64-16.44L225 365.66a4.69 4.69 0 0 0 1.32-3.72v-.26a4.63 4.63 0 0 0-5.15-4.27A97 97 0 0 1 211 358"></svg:path>`,
})
export class IonRestaurantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRestaurantOutlineIcon],svg[ion-restaurant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"></svg:path>`,
})
export class IonRestaurantOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRestaurantSharpIcon],svg[ion-restaurant-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M342.7 223.94h14.87a79.48 79.48 0 0 0 56.58-23.44L496 118l-22.22-22.4l-83.58 83.58l-17.37-17.37l83.58-83.59l-23-22.31l-83.27 83.26l-17.32-17.37l83.58-83.59L394 16l-82.5 81.85a79.5 79.5 0 0 0-23.44 56.59v14.86l-43.13 43.13L48 16C3.72 70.87 29.87 171.71 79.72 221.57l85.5 85.5c26.55 26.55 31.82 28.92 61.94 16.8c6.49-2.61 8.85-2.32 14.9 3.72l13 12.13c2.93 3 3 3.88 3 9.62v5.54c0 21.08 13.48 33.2 22.36 42.24L384 496l72-72l-156.43-156.93Z"></svg:path><svg:path fill="currentColor" d="M227.37 354.59c-29.82 6.11-48.11 11.74-83.08-23.23c-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16 416l80 80l144-144Z"></svg:path>`,
})
export class IonRestaurantSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownBackIcon],svg[ion-return-down-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class IonReturnDownBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownBackOutlineIcon],svg[ion-return-down-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20"></svg:path>`,
})
export class IonReturnDownBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownBackSharpIcon],svg[ion-return-down-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m112 352l-64-64l64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 288h400V160"></svg:path>`,
})
export class IonReturnDownBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownForwardIcon],svg[ion-return-down-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class IonReturnDownForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownForwardOutlineIcon],svg[ion-return-down-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 288H154c-58.76 0-106-49.33-106-108v-20"></svg:path>`,
})
export class IonReturnDownForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnDownForwardSharpIcon],svg[ion-return-down-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 352l64-64l-64-64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 288H48V160"></svg:path>`,
})
export class IonReturnDownForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpBackIcon],svg[ion-return-up-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class IonReturnUpBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpBackOutlineIcon],svg[ion-return-up-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></svg:path>`,
})
export class IonReturnUpBackOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpBackSharpIcon],svg[ion-return-up-back-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m112 160l-64 64l64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 224h400v128"></svg:path>`,
})
export class IonReturnUpBackSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpForwardIcon],svg[ion-return-up-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class IonReturnUpForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpForwardOutlineIcon],svg[ion-return-up-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 224H154c-58.76 0-106 49.33-106 108v20"></svg:path>`,
})
export class IonReturnUpForwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionReturnUpForwardSharpIcon],svg[ion-return-up-forward-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 160l64 64l-64 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M448 224H48v128"></svg:path>`,
})
export class IonReturnUpForwardSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonIcon],svg[ion-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 0 1-127.67-72.94a4 4 0 0 0-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0 0 48.22 416h78a15.28 15.28 0 0 1 13.62 7.33L178.5 488a16.26 16.26 0 0 0 13.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 0 0-3.92-5.64m208.64 56.27l-71.53-129.17a4 4 0 0 0-6.74-.36a176.5 176.5 0 0 1-78.31 61.42a16.1 16.1 0 0 0-8.72 8.25l-36.86 81.1a7.92 7.92 0 0 0 0 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0 0 13.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 0 0-1.41-14.12"></svg:path><svg:ellipse cx="256.26" cy="160" fill="currentColor" rx="48.01" ry="48"></svg:ellipse><svg:path fill="currentColor" d="M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144s144-64.6 144-144s-64.59-144-144-144m0 224a80 80 0 1 1 80-80a80.1 80.1 0 0 1-80 80"></svg:path>`,
})
export class IonRibbonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonAIcon],svg[ion-ribbon-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 32l-82.9 176.612c39.996 3.608 75.273 23.554 99.096 53.128L432 128l-80-96z" fill="currentColor"></svg:path><svg:path d="M160 32l82.9 176.612c-39.996 3.608-75.273 23.554-99.096 53.128L80 128l80-96z" fill="currentColor"></svg:path><svg:path d="M269.092 32H176l52.572 112h54.856L336 32z" fill="currentColor"></svg:path><svg:path d="M256 224c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"></svg:path><svg:path d="M256 264c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"></svg:path>`,
})
export class IonRibbonAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonBIcon],svg[ion-ribbon-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 72c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"></svg:path><svg:path d="M256 32c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128S326.692 32 256 32zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"></svg:path><svg:g><svg:path d="M147.092 254.21L64 400h96l48 80 48-105.807 33.641-74.154A144.328 144.328 0 0 1 256 304c-43.505 0-82.503-19.293-108.908-49.79z" fill="currentColor"></svg:path><svg:path d="M364.908 254.211c-15.077 17.412-34.26 31.172-56.043 39.774l-44.752 98.092L304 480l48-80h96l-83.092-145.789z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonRibbonBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonOutlineIcon],svg[ion-ribbon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="160" r="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8"></svg:path><svg:circle cx="256" cy="160" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonRibbonOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRibbonSharpIcon],svg[ion-ribbon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 0 1-131.29-78.37L20 416h115l58 96l82.53-177.09A178 178 0 0 1 256 336m147-79.26a176.9 176.9 0 0 1-88.18 69.14L273.7 415.5L319 512l58-96h115Z"></svg:path><svg:circle cx="256.02" cy="160" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144s144-64.6 144-144S335.4 16 256 16m0 224a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80"></svg:path>`,
})
export class IonRibbonSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRocketIcon],svg[ion-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328.85 156.79a26.69 26.69 0 1 0 18.88 7.81a26.6 26.6 0 0 0-18.88-7.81"></svg:path><svg:path fill="currentColor" d="M477.44 50.06a.3.3 0 0 1 0-.09a20.4 20.4 0 0 0-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28c-52.36 21-101.42 52-134.58 85.22A321 321 0 0 0 169.55 175c-22.33-1-42 2.18-58.57 9.41c-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0 0 27.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 0 0 9.9 20.72l31.39 31.41a34.27 34.27 0 0 0 20.71 9.91l2.15.23l-7 64.24v.13A25 25 0 0 0 206 480a25 25 0 0 0 4.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a315 315 0 0 0 33.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52c20.69-51.36 28.48-98.59 21.39-129.53M370.38 224.94a58.77 58.77 0 1 1 0-83.07a58.3 58.3 0 0 1 0 83.07"></svg:path><svg:path fill="currentColor" d="M161.93 386.44a16 16 0 0 0-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9c-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 0 0-15.16-24.91A61.25 61.25 0 0 0 72 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A358 358 0 0 0 48 447.59A16 16 0 0 0 64 464h.4a360 360 0 0 0 36.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.5 60.5 0 0 0 17.39-35.74a16 16 0 0 0-13.93-17.82"></svg:path>`,
})
export class IonRocketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRocketOutlineIcon],svg[ion-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a295 295 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180 180 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a180 180 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a294 294 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95M298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32"></svg:path>`,
})
export class IonRocketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRocketSharpIcon],svg[ion-rocket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194 194 0 0 0 1.19 19.7a19.53 19.53 0 0 0 5.7 12L170.7 375a19.6 19.6 0 0 0 12 5.7a194 194 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5c8.4-19.27 10.12-41.77 8.18-64.27a317.7 317.7 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26M294.07 217.93a48 48 0 1 1 67.86 0a47.95 47.95 0 0 1-67.86 0"></svg:path><svg:path fill="currentColor" d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46c-23.77 4.05-44.76-16.49-40.49-40.52c1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45a60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.7 59.7 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66"></svg:path>`,
})
export class IonRocketSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRoseIcon],svg[ion-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429.55 119.49a16 16 0 0 0-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22c-35.06 10.39-69.33 23.92-107.85 42.59c-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43c28.35-26.35 44-63.39 44-104.29c0-25-6.19-47-12.17-68.22c-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 0 0 1.01-18.44m-210.55.06C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0 0 81 90.55a16.47 16.47 0 0 0 3.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 0 0 2.5 4.54a4.44 4.44 0 0 0 5.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 0 0 .64-6.83A179 179 0 0 0 219 119.55m15.26-28.1c3.44 1.87 7.09 4 10.9 6.29a189.3 189.3 0 0 1 29.57 22.39a4 4 0 0 0 4.28.76a672 672 0 0 1 69.65-25q7-2.07 14.08-4a4 4 0 0 0 2.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 0 0 336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 0 0-26.39 14.51a4 4 0 0 0 .22 6.94Zm-24.93-30.66c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 0 0 .24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 0 0-17.56 5.82a217.6 217.6 0 0 0-19.28 32.38a2 2 0 0 0 1.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 0 0 1.79-.2Z"></svg:path>`,
})
export class IonRoseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRoseOutlineIcon],svg[ion-rose-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128c-18.9 4.25-36.8 8.94-53.7 13.95c-40.5 12-75.5 27.15-105.4 41.65c-19.3 9.37-26.2 13.51-51.5 28.23c-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128c0 0-3.87 32.88 1.91 58.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64m53.17-40.43C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17"></svg:path>`,
})
export class IonRoseOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionRoseSharpIcon],svg[ion-rose-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 112s-17.62 0-30.51 1.39c-19 2-42.06 8-59.73 13.22c-35.06 10.39-69.33 23.92-107.85 42.59c-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.3C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.32 116-41.43c28.35-26.35 44-63.39 44-104.29c0-25-6.19-47-12.17-68.22c-12.59-44.69-23.46-83.29 24.71-144.13C432.75 132.62 448 112 448 112m-229 7.55C168.47 92.08 104.72 80 80 80c0 0 23.23 28.19 29.15 55.4s6.54 48.61 2.91 88.6c17.94-20.48 40.59-37.15 69.32-53.73l4.48-2.6C208 154.8 216.23 150 236 140.41c2.88-1.4 5.74-2.76 8.58-4.11A171 171 0 0 0 219 119.55M345.25 48s-42.53.36-86.12 21.3a280 280 0 0 0-32.27 18.27q3.73 1.89 7.4 3.88c3.44 1.87 7.09 4 10.9 6.29a189.7 189.7 0 0 1 31.46 24.16c24.57-10.41 73-26.1 90.77-31.28c-8-19.15-22.14-42.62-22.14-42.62M176 16c-16 10.83-33.24 41.1-33.24 41.1a494 494 0 0 1 48.92 15.25l17.65-11.56c8.18-5.35 16.55-10.29 25-14.77C234.31 46 202.59 24.17 176 16"></svg:path>`,
})
export class IonRoseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSadIcon],svg[ion-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M184 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17M328 256a24 24 0 1 1 24-24a23.94 23.94 0 0 1-24 24"></svg:path>`,
})
export class IonSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSadOutlineIcon],svg[ion-sad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="184" cy="232" r="24" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288"></svg:path><svg:circle cx="328" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonSadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSadSharpIcon],svg[ion-sad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m72 80c45.42 0 83.75 29.49 95.72 69.83c1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288"></svg:path>`,
})
export class IonSadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSaveIcon],svg[ion-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m465.94 119.76l-73.7-73.7A47.68 47.68 0 0 0 358.3 32H96a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V153.7a47.68 47.68 0 0 0-14.06-33.94M120 112h176a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m139.75 319.91a80 80 0 1 1 76.16-76.16a80.06 80.06 0 0 1-76.16 76.16"></svg:path><svg:circle cx="256" cy="352" r="48" fill="currentColor"></svg:circle>`,
})
export class IonSaveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSaveOutlineIcon],svg[ion-save-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63ZM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64m48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16"></svg:path>`,
})
export class IonSaveOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSaveSharpIcon],svg[ion-save-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56ZM112 176v-64h192v64Zm223.91 179.76a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class IonSaveSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScaleIcon],svg[ion-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 32H144A112.12 112.12 0 0 0 32 144v224a112.12 112.12 0 0 0 112 112h224a112.12 112.12 0 0 0 112-112V144A112.12 112.12 0 0 0 368 32m36.21 178l-33.32 39.21A41.76 41.76 0 0 1 339 264.05a42.3 42.3 0 0 1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 0 1-54.2-8.46L107.79 210a50.48 50.48 0 0 1 4.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 0 1 4.49 70.27"></svg:path>`,
})
export class IonScaleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScaleOutlineIcon],svg[ion-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="416" x="48" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="96"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 0 0-3.06 48.08l33.32 39.21a26.07 26.07 0 0 0 33.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0 0 33.6-5.21L392 199.64a34.66 34.66 0 0 0-3.06-48.08Z"></svg:path>`,
})
export class IonScaleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScaleSharpIcon],svg[ion-scale-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H80a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V80a48.05 48.05 0 0 0-48-48m-16.71 165l-52.46 61.73a27.83 27.83 0 0 1-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 0 1-37.65-4.62L96.71 197a32.12 32.12 0 0 1 .42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 0 1 .42 42"></svg:path>`,
})
export class IonScaleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanIcon],svg[ion-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="44" d="M342 444h46a56 56 0 0 0 56-56v-46m0-172v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46m0-172v-46a56 56 0 0 1 56-56h46"></svg:path>`,
})
export class IonScanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanCircleIcon],svg[ion-scan-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-40 320h-28a44.05 44.05 0 0 1-44-44v-28a16 16 0 0 1 32 0v28a12 12 0 0 0 12 12h28a16 16 0 0 1 0 32m0-192h-28a12 12 0 0 0-12 12v28a16 16 0 0 1-32 0v-28a44.05 44.05 0 0 1 44-44h28a16 16 0 0 1 0 32m152 148a44.05 44.05 0 0 1-44 44h-28a16 16 0 0 1 0-32h28a12 12 0 0 0 12-12v-28a16 16 0 0 1 32 0Zm0-108a16 16 0 0 1-32 0v-28a12 12 0 0 0-12-12h-28a16 16 0 0 1 0-32h28a44.05 44.05 0 0 1 44 44Z"></svg:path>`,
})
export class IonScanCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanCircleOutlineIcon],svg[ion-scan-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M296 352h28a28 28 0 0 0 28-28v-28m0-80v-28a28 28 0 0 0-28-28h-28m-80 192h-28a28 28 0 0 1-28-28v-28m0-80v-28a28 28 0 0 1 28-28h28"></svg:path>`,
})
export class IonScanCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanCircleSharpIcon],svg[ion-scan-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-24 320h-44a44.05 44.05 0 0 1-44-44v-44h32v44a12 12 0 0 0 12 12h44Zm0-192h-44a12 12 0 0 0-12 12v44h-32v-44a44.05 44.05 0 0 1 44-44h44Zm136 148a44.05 44.05 0 0 1-44 44h-44v-32h44a12 12 0 0 0 12-12v-44h32Zm0-92h-32v-44a12 12 0 0 0-12-12h-44v-32h44a44.05 44.05 0 0 1 44 44Z"></svg:path>`,
})
export class IonScanCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanOutlineIcon],svg[ion-scan-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 448h56a56 56 0 0 0 56-56v-56m0-160v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56m0-160v-56a56 56 0 0 1 56-56h56"></svg:path>`,
})
export class IonScanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScanSharpIcon],svg[ion-scan-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M388 466h-68v-44h68a34 34 0 0 0 34-34v-68h44v68a78.09 78.09 0 0 1-78 78m78-274h-44v-68a34 34 0 0 0-34-34h-68V46h68a78.09 78.09 0 0 1 78 78ZM192 466h-68a78.09 78.09 0 0 1-78-78v-68h44v68a34 34 0 0 0 34 34h68ZM90 192H46v-68a78.09 78.09 0 0 1 78-78h68v44h-68a34 34 0 0 0-34 34Z"></svg:path>`,
})
export class IonScanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSchoolIcon],svg[ion-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368"></svg:path><svg:path fill="currentColor" d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a15 15 0 0 0-.08-1.5"></svg:path>`,
})
export class IonSchoolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSchoolOutlineIcon],svg[ion-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192L256 64l224 128l-224 128z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80l144-80V240m80 128V192M256 320v128"></svg:path>`,
})
export class IonSchoolOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSchoolSharpIcon],svg[ion-school-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 370.43L96 279v98.42l160 88.88l160-88.88V279z"></svg:path><svg:path fill="currentColor" d="M512.25 192L256 45.57L-.25 192L256 338.43l208-118.86V384h48V192.14z"></svg:path>`,
})
export class IonSchoolSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionScissorsIcon],svg[ion-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M405.178 115.667c13.314-32.667 17.309-64-5.326-83.667L255.726 224l-16.976 23s-27.627 40.011-37.28 58.667-19.306 39.333-27.294 54c-7.01 12.871-10.438 15.221-14.322 11.548a58.37 58.37 0 0 0-1.553-1.736l-.11-.138c-1.143-1.472-2.75-3.002-4.635-4.467C144.195 356.795 132.548 352 119.92 352 89.037 352 64 380.653 64 416s25.037 64 55.92 64c25.282 0 46.635-19.205 53.553-45.561l-.004.043S186.824 393 206.13 363s49.596-43 49.596-43l31.954-32s104.183-139.666 117.498-172.333zM119.92 448c-15.418 0-27.918-14.353-27.918-32s12.5-32 27.918-32c15.419 0 27.918 14.353 27.918 32s-12.499 32-27.918 32zM256 288c-8.836 0-16-7.163-16-16 0-8.836 7.164-16 16-16 8.837 0 16 7.164 16 16 0 8.837-7.163 16-16 16z" fill="currentColor"></svg:path><svg:path d="M207.28 265.255a1318.847 1318.847 0 0 1 18.304-27.346l.143-.208.15-.203 16.976-23 .038-.052.039-.052 2.941-3.918L111.896 32c-22.634 19.667-18.64 51-5.326 83.667 9.953 24.42 70.679 108.623 100.71 149.588z" fill="currentColor"></svg:path><svg:path d="M391.828 352c-12.628 0-24.275 4.795-33.637 12.874-1.885 1.465-3.492 2.995-4.635 4.467l-.109.138a61.157 61.157 0 0 0-1.553 1.736c-3.884 3.673-7.312 1.323-14.322-11.548-7.988-14.667-17.641-35.344-27.294-54-1.77-3.421-4.146-7.561-6.843-12.038a2279.051 2279.051 0 0 1-2.932 3.938l-.688.924-.813.815-28.688 28.729c10.433 6.855 24.565 18.276 35.306 34.965 19.305 30 32.66 71.482 32.66 71.482l-.004-.043c6.917 26.356 28.27 45.561 53.552 45.561C422.711 480 448 451.347 448 416s-25.289-64-56.172-64zm0 96c-15.42 0-27.918-14.353-27.918-32s12.498-32 27.918-32c15.418 0 27.918 14.353 27.918 32s-12.5 32-27.918 32z" fill="currentColor"></svg:path>`,
})
export class IonScissorsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchIcon],svg[ion-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"></svg:path>`,
})
export class IonSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleIcon],svg[ion-search-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class IonSearchCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleOutlineIcon],svg[ion-search-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M232 160a72 72 0 1 0 72 72a72 72 0 0 0-72-72Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M283.64 283.64L336 336"></svg:path>`,
})
export class IonSearchCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchCircleSharpIcon],svg[ion-search-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64m80 294.63l-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336Z"></svg:path><svg:circle cx="232" cy="232" r="56" fill="currentColor"></svg:circle>`,
})
export class IonSearchCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchOutlineIcon],svg[ion-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></svg:path>`,
})
export class IonSearchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSearchSharpIcon],svg[ion-search-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37"></svg:path>`,
})
export class IonSearchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSendIcon],svg[ion-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8"></svg:path>`,
})
export class IonSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSendOutlineIcon],svg[ion-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39"></svg:path>`,
})
export class IonSendOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSendSharpIcon],svg[ion-send-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 464l480-208L16 48v160l320 48l-320 48Z"></svg:path>`,
})
export class IonSendSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionServerIcon],svg[ion-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16s96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272"></svg:path><svg:path fill="currentColor" d="M410.724 194.623c9.586-5.214 18.448-11.755 26.406-18.904c4.054-3.642 10.87-.89 10.87 4.56V258c0 5.532-3.081 11.901-12.295 22.25c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-77.721c0-5.45 6.816-8.202 10.87-4.56c7.958 7.148 16.82 13.69 26.406 18.904C141.286 216.39 195.918 232 256 232s114.714-15.61 154.724-37.377"></svg:path><svg:path fill="currentColor" d="M74.87 319.719c-4.054-3.642-10.87-.89-10.87 4.56V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496s96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-75.721c0-5.45-6.816-8.202-10.87-4.56c-7.958 7.148-16.82 13.69-26.406 18.904C370.714 360.39 316.082 376 256 376s-114.714-15.61-154.724-37.377c-9.586-5.214-18.448-11.756-26.406-18.904"></svg:path>`,
})
export class IonServerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionServerOutlineIcon],svg[ion-server-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:ellipse cx="256" cy="112" rx="176" ry="80"></svg:ellipse><svg:path d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112"></svg:path><svg:path d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256"></svg:path></svg:g>`,
})
export class IonServerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionServerSharpIcon],svg[ion-server-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16s96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272"></svg:path><svg:path fill="currentColor" d="M410.724 194.623c14.213-7.731 26.834-18.379 37.276-29.599V258c0 5.532-3.081 11.901-12.295 22.25c-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344s-104.162-14.298-139.432-33.486c-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-92.976c10.442 11.22 23.063 21.868 37.276 29.599C141.286 216.39 195.918 232 256 232s114.714-15.61 154.724-37.377"></svg:path><svg:path fill="currentColor" d="M64 309.024V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496s96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-90.976c-10.442 11.22-23.063 21.868-37.276 29.599C370.714 360.39 316.082 376 256 376s-114.714-15.61-154.724-37.377C87.063 330.892 74.442 320.244 64 309.024"></svg:path>`,
})
export class IonServerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSettingsIcon],svg[ion-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="48" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.6 1.6 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175 175 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.6 1.6 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a3 3 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11m-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"></svg:path>`,
})
export class IonSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSettingsOutlineIcon],svg[ion-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"></svg:path>`,
})
export class IonSettingsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSettingsSharpIcon],svg[ion-settings-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 176a80 80 0 1 0 80 80a80.24 80.24 0 0 0-80-80m172.72 80a165.5 165.5 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.6 176.6 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A175 175 0 0 1 83.28 256a165.5 165.5 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.6 176.6 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a175 175 0 0 1 1.64 22.66"></svg:path>`,
})
export class IonSettingsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShapesIcon],svg[ion-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 336H32a16 16 0 0 1-14-23.81l152-272a16 16 0 0 1 27.94 0l152 272A16 16 0 0 1 336 336"></svg:path><svg:path fill="currentColor" d="M336 160a161 161 0 0 0-32.57 3.32l74.47 133.27A48 48 0 0 1 336 368H183.33A160 160 0 1 0 336 160"></svg:path>`,
})
export class IonShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShapesOutlineIcon],svg[ion-shapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M265.32 194.51A144 144 0 1 1 192 320"></svg:path>`,
})
export class IonShapesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShapesSharpIcon],svg[ion-shapes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363.27 336H4.73L184 16Z"></svg:path><svg:path fill="currentColor" d="M336 160a160.5 160.5 0 0 0-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160"></svg:path>`,
})
export class IonShapesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareIcon],svg[ion-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M376 176H272v145a16 16 0 0 1-32 0V176H136a56.06 56.06 0 0 0-56 56v192a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V232a56.06 56.06 0 0 0-56-56M272 86.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 86.63V176h32Z"></svg:path>`,
})
export class IonShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareOutlineIcon],svg[ion-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48"></svg:path>`,
})
export class IonShareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSharpIcon],svg[ion-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12Zm0-83.37l64 64L358.63 134L256 31.37L153.37 134L176 156.63l64-64V176h32z"></svg:path>`,
})
export class IonShareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialIcon],svg[ion-share-social-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336"></svg:path>`,
})
export class IonShareSocialIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialOutlineIcon],svg[ion-share-social-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"></svg:path>`,
})
export class IonShareSocialOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShareSocialSharpIcon],svg[ion-share-social-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.7 69.7 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324"></svg:path>`,
})
export class IonShareSocialSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldIcon],svg[ion-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.35a16 16 0 0 0-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0c-77.69 35-113.89 47-199.92 62.44a16 16 0 0 0-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.9 348.9 0 0 0 71.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0 0 15.11 0c27-10.92 74.69-37.82 119.71-85.62a348.9 348.9 0 0 0 71.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15"></svg:path>`,
})
export class IonShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldCheckmarkIcon],svg[ion-shield-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-131 75.11l-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29l99.7-115.13a16 16 0 0 1 24.2 20.94Z"></svg:path>`,
})
export class IonShieldCheckmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldCheckmarkOutlineIcon],svg[ion-shield-checkmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176L225.2 304L176 255.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class IonShieldCheckmarkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldCheckmarkSharpIcon],svg[ion-shield-checkmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m479.07 111.36l-.79-12.53l-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3l-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21l-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41l6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-252.91 216L153.37 256l22.4-22.86l48.47 47.49l110.13-127.2l24.2 20.94Z"></svg:path>`,
})
export class IonShieldCheckmarkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldHalfIcon],svg[ion-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464Z"></svg:path>`,
})
export class IonShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldHalfOutlineIcon],svg[ion-shield-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path><svg:path fill="currentColor" d="M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464Z"></svg:path>`,
})
export class IonShieldHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldHalfSharpIcon],svg[ion-shield-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.9 348.9 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08c23.11-6.68 77.68-34.42 127.28-87.08a348.9 348.9 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64m161.47 233.93a309.2 309.2 0 0 1-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613 613 0 0 0 85.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72"></svg:path>`,
})
export class IonShieldHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldOutlineIcon],svg[ion-shield-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63"></svg:path>`,
})
export class IonShieldOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShieldSharpIcon],svg[ion-shield-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.9 348.9 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08c23.11-6.68 77.68-34.42 127.28-87.08a348.9 348.9 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64"></svg:path>`,
})
export class IonShieldSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShirtIcon],svg[ion-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.2 16.2 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58"></svg:path><svg:path fill="currentColor" d="M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.5 17.5 0 0 0 112 480h288a17.5 17.5 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1"></svg:path>`,
})
export class IonShirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShirtOutlineIcon],svg[ion-shirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.56 48s-22.78 8-58.56 8s-58.56-8-58.56-8a32 32 0 0 0-10.57 1.8L32 104l16.63 88l48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104L325.13 49.8a32 32 0 0 0-10.57-1.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M333.31 52.66a80 80 0 0 1-154.62 0"></svg:path>`,
})
export class IonShirtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShirtSharpIcon],svg[ion-shirt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 0 0 128 0v-2s-30.12 10-64 10"></svg:path><svg:path fill="currentColor" d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114l61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114Z"></svg:path>`,
})
export class IonShirtSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShuffleIcon],svg[ion-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class IonShuffleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShuffleOutlineIcon],svg[ion-shuffle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416m0-192h-53.19a80 80 0 0 0-66.56 35.62L288 208"></svg:path>`,
})
export class IonShuffleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionShuffleSharpIcon],svg[ion-shuffle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m400 304l48 48l-48 48m0-288l48 48l-48 48M64 352h128l60-92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M64 160h128l128 192h96m0-192h-96l-32 48"></svg:path>`,
})
export class IonShuffleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkipBackwardIcon],svg[ion-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M75.7 96h8.1c6.7 0 12.2 5 12.2 11.7v113.5L283.1 98.7c2.5-1.7 5.1-2.3 8.1-2.3 8.3 0 15.4 7 15.4 17v63.1l118.5-78.2c2.5-1.7 5-2.3 8.1-2.3 8.3 0 14.9 7.4 14.9 17.4v286c0 10-6.7 16.5-15 16.5-3.1 0-5.4-1.2-8.2-2.9l-118.3-77.6v64c0 10-7.2 16.5-15.5 16.5-3.1 0-5.5-1.2-8.2-2.9L96 290.8v113c0 6.7-5.4 12.2-12.2 12.2h-8.1C69 416 64 410.5 64 403.8V107.7C64 101 68.9 96 75.7 96z" fill="currentColor"></svg:path>`,
})
export class IonSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkipForwardIcon],svg[ion-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M436.3 96h-8.1c-6.7 0-12.2 5-12.2 11.7v113.5L228.9 98.7c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-15.4 7-15.4 17v63.1L86.9 98.3c-2.5-1.7-5.1-2.3-8.1-2.3-8.3 0-14.9 7.4-14.9 17.4v286c0 10 6.7 16.5 15 16.5 3.1 0 5.4-1.2 8.2-2.9l118.3-77.6v64c0 10 7.2 16.5 15.5 16.5 3.1 0 5.5-1.2 8.2-2.9L416 290.8v113c0 6.7 5.4 12.2 12.2 12.2h8.1c6.7 0 11.7-5.5 11.7-12.2V107.7c0-6.7-4.9-11.7-11.7-11.7z" fill="currentColor"></svg:path>`,
})
export class IonSkipForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkullIcon],svg[ion-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73M171.66 335.88a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.22 52.22M281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75a16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9m66.68-61.37a56 56 0 1 1 52.22-52.22a56 56 0 0 1-52.24 52.22Z"></svg:path>`,
})
export class IonSkullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkullOutlineIcon],svg[ion-skull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M448 225.64v99a64 64 0 0 1-40.23 59.42l-23.68 9.47A32 32 0 0 0 364.6 417l-10 50.14A16 16 0 0 1 338.88 480H173.12a16 16 0 0 1-15.69-12.86L147.4 417a32 32 0 0 0-19.49-23.44l-23.68-9.47A64 64 0 0 1 64 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64Z"></svg:path><svg:circle cx="168" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:circle cx="344" cy="280" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 336l-16 48h32zm0 112v32m-48-32v32m96-32v32"></svg:path>`,
})
export class IonSkullOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSkullSharpIcon],svg[ion-skull-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208m-88 320a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m51.51 64L244 320h24l24.49 80ZM344 336a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m104 32"></svg:path>`,
})
export class IonSkullSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSnowIcon],svg[ion-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m461 349l-34-19.64a89.5 89.5 0 0 1 20.94-16a22 22 0 0 0-21.28-38.51a133.6 133.6 0 0 0-38.55 32.1L300 256l88.09-50.86a133.5 133.5 0 0 0 38.55 32.1a22 22 0 1 0 21.28-38.51a89.7 89.7 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.7 89.7 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59a133.6 133.6 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33a22 22 0 0 0-22.71-37.69A89.6 89.6 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.6 89.6 0 0 1-24.36-10.11a22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.6 133.6 0 0 0 8.52-49.43a22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41a89.7 89.7 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.7 89.7 0 0 1-20.94 16a22 22 0 1 0 21.28 38.51a133.6 133.6 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.6 133.6 0 0 0-38.55-32.1a22 22 0 1 0-21.28 38.51a89.7 89.7 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.7 89.7 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59a133.6 133.6 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33a22 22 0 1 0 22.71 37.69A89.6 89.6 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.6 89.6 0 0 1 24.36 10.11a22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.6 133.6 0 0 0-8.52 49.43a22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41a89.7 89.7 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349"></svg:path>`,
})
export class IonSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSnowOutlineIcon],svg[ion-snow-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 32v448m57.72-400A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16m0 352a112.11 112.11 0 0 1 115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100m304.83 176a112.09 112.09 0 0 0-57.71 100"></svg:path>`,
})
export class IonSnowOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSnowSharpIcon],svg[ion-snow-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m447.88 313.27l19.25-10.64l-21.28-38.51l-19.25 10.64a133.4 133.4 0 0 0-38.54 32.1L300 256l88.07-50.86a133.4 133.4 0 0 0 38.54 32.1l19.25 10.64l21.28-38.51l-19.25-10.64a89.3 89.3 0 0 1-20.93-16L480 152.05L458 114l-53 30.58a89 89 0 0 1-3.42-26.15l.41-22l-44-.82l-.41 22a133.6 133.6 0 0 0 8.49 49.39L278 217.89V116.18a133.5 133.5 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69l-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.5 133.5 0 0 0 234 116.18v101.71L145.93 167a133.6 133.6 0 0 0 8.53-49.43l-.41-22l-44 .82l.41 22a89 89 0 0 1-3.42 26.15L54 114l-22 38.1l53.05 30.64a89.3 89.3 0 0 1-20.93 16l-19.25 10.63l21.28 38.51l19.25-10.64a133.4 133.4 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.4 133.4 0 0 0-38.54-32.1l-19.24-10.64l-21.28 38.51l19.25 10.64a89.3 89.3 0 0 1 20.93 16L32 360l22 38.1l53.05-30.63a89 89 0 0 1 3.42 26.15l-.41 22l44 .82l.41-22a133.6 133.6 0 0 0-8.54-49.44L234 294.11v101.71a133.5 133.5 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69l18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35l22.71-37.69l-18.84-11.35A133.5 133.5 0 0 0 278 395.82V294.11L366.07 345a133.6 133.6 0 0 0-8.53 49.43l.41 22l44-.82l-.41-22a89 89 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.3 89.3 0 0 1 20.88-16.04"></svg:path>`,
})
export class IonSnowSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialAndroidOutlineIcon],svg[ion-social-android-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 208v149h-39v67c0 4.4-3 7.9-7.3 8h-.4c-1.6 0-3.1-.6-4.3-1.6l-.1-.1-.4-.1c-2-1.6-3.4-4-3.4-6.2v-67H216v67c0 4.4-3.6 8-8 8s-8-3.6-8-8v-67h-40V208h192m16-16H144v166c0 6.9 5.5 15 12.4 15H184v51c0 13.3 10.7 24 24 24s24-10.7 24-24v-51h49v51c0 7.5 3.9 14.2 9.3 18.6 3.9 3.4 9.3 5.4 15 5.4h.2c13.3 0 23.6-10.7 23.6-24v-51h28.6c7 0 10.4-8.1 10.4-14.9V192h-.1z" fill="currentColor"></svg:path><svg:path d="M408 192c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8m0-16c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z" fill="currentColor"></svg:path><svg:path d="M104 192c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8m0-16c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z" fill="currentColor"></svg:path><svg:g><svg:path d="M255 94.3h.9c14.2 0 27.3 1.9 38.8 5.6l10 4.4c28.7 12.6 39.9 37.4 44.4 55.7H162.8c4.4-18.6 15.6-43.6 44.1-56l10.3-4.5c11.3-3.4 24-5.2 37.8-5.2M185.4 64c-.5 0-1.2.2-1.8.8-1.1.8-1.7 1.8-1.3 2.5l18.3 22.1c-48.2 20.9-55.4 71.7-56.4 86.7h223.6c-1.1-15-8.2-65.1-56.6-86.4l18.5-22.2c.4-.5-.2-1.7-1.3-2.6-.7-.5-1.5-.8-2-.8-.3 0-.5.1-.7.3l-19.2 22.7c-13.6-5.4-30.2-8.8-50.6-8.8h-1c-20 0-36.4 3.3-49.8 8.5l-19-22.5c0-.2-.3-.3-.7-.3z" fill="currentColor"></svg:path></svg:g><svg:path d="M206.6 138.9c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3z" fill="currentColor"></svg:path><svg:path d="M305 138.9c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z" fill="currentColor"></svg:path>`,
})
export class IonSocialAndroidOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialAngularOutlineIcon],svg[ion-social-angular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.982 64l187.967 69.105-39.17 230.389-148.881 79.949-148.812-80.051L68.031 133.11 255.982 64m-.001-32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32z" fill="currentColor"></svg:path><svg:path d="M344 352h40L256 72 128 352h40l26.584-56h122.827L344 352zm-130.427-96l42.419-89.356L298.419 256h-84.846z" fill="currentColor"></svg:path>`,
})
export class IonSocialAngularOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialAppleOutlineIcon],svg[ion-social-apple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M333.6 169.9c16.3 0 33.2 7.4 47.4 20.4-9.9 8.5-17.9 18.7-23.7 30.2-8 16-11.6 34.3-10.2 52.7 1.3 18.7 7.6 36.6 18 51.8 8 11.6 18.2 21.2 30 28.3-5 10.7-9.2 18.4-16.8 30.5-8.4 13.1-30.5 48-52 48.2h-.4c-7.4 0-12.2-2.2-19.3-5.6-10-4.7-22.3-10.6-43.4-10.6h-.6c-21.1.1-33.8 5.9-43.9 10.6-7.4 3.4-12.3 5.7-19.9 5.7h-.4c-19.6-.2-37.5-24.3-50.8-45.2-19.3-30.4-31.7-65.6-34.9-99.1-2.9-30.5 2-58.5 13.5-76.7 8-12.7 18.5-23.3 30.4-30.6 11.2-6.8 23-10.4 34.2-10.4 12.4 0 22.7 3.8 33.7 7.8 11.5 4.2 23.5 8.6 37.7 8.6 13.6 0 24.3-4.2 34.6-8.2 11.2-4.4 21.4-8.4 36.8-8.4m0-16c-33.6 0-47.8 16.5-71.2 16.5-24 0-42.3-16.4-71.4-16.4-28.5 0-58.9 17.9-78.2 48.4-27.1 43-22.5 124 21.4 193 15.7 24.7 36.7 52.4 64.2 52.7h.5c23.9 0 31-16.1 63.9-16.3h.5c32.4 0 38.9 16.2 62.7 16.2h.5c27.5-.3 49.6-31 65.3-55.6 11.3-17.7 15.5-26.6 24.2-46.6-63.5-24.8-73.7-117.4-10.9-152.9-19.2-24.7-46.1-39-71.5-39z" fill="currentColor"></svg:path><svg:path d="M309.9 84.5c-2.7 14.9-10.5 26.8-14.6 32.2-7.4 9.8-18 17.4-28.8 21.1.5-3 1.3-6.1 2.4-9.2 3.5-10.2 8.9-18.2 12.8-23.1 7.1-8.8 17.6-16.4 28.2-21M326.2 64c-20 1.4-43.3 14.5-57 31.6-12.4 15.5-22.6 38.5-18.6 60.8h1.6c21.3 0 43.1-13.2 55.8-30.1 12.3-16.1 21.6-38.9 18.2-62.3z" fill="currentColor"></svg:path>`,
})
export class IonSocialAppleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialBitcoinOutlineIcon],svg[ion-social-bitcoin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M279.7 48v62.1l15.1.8c16.9.9 28.8 3.3 40.7 7.9 13.8 5.3 24.2 12.6 31.1 21.7 5.7 7.6 9 19.4 10 36.2.6 8.8-1 17.1-2.6 22-1.5 4.4-5.3 11.3-11.1 16.4-5.4 4.8-8.6 6.7-12.3 8.4l-42.1 19.3 45 10.8c7.4 1.8 14 4.4 21.4 8.5 13.2 7.3 18 15.1 21.2 22.5 2.9 6.7 4.6 22.2 3.9 36.2-.7 13.4-4.4 31.5-12.6 42.3-8.6 11.2-21.3 20.1-37.8 26.3-13.6 5.1-31.1 8.1-54.5 9.3l-15.2.7V464h-8v-64H208v64h-9v-64h-83.2l3-16h12.8c8.6 0 12.1-.4 17.5-3 .2-.1.4-.2.7-.3 8.1-3.7 11-10.6 12.2-13.6.1-.3.3-.7.3-.8 2.9-5.9 3-13.1 3-24.4v-178c0-11.7-.1-13.6-3.1-19.5-2.9-5.8-7.3-10.1-13.4-13-5.9-2.8-13.2-3.4-24.5-3.4h-12.9v-16H199V48h9v64h63.8V48h7.9m16-16h-39.9v64H224V32h-40.9v64H96v48h28.4c8.7 0 14.5.3 17.6 1.8 3.1 1.5 4.7 3.3 6 5.8 1.3 2.5 1.4 3.1 1.4 12.3v178c0 9-.1 14.7-.9 17.6-1.2 2.7-2.2 5.2-5.3 6.6-3.1 1.4-2.9 1.9-11.6 1.9h-27.4L96 416h87.1v64H224v-64h31.8v64h39.9v-65.4c26-1.3 44.4-4.7 59.3-10.3 19.3-7.2 34.3-17.7 44.9-31.5 10.5-13.8 15-34.9 15.9-51.2.8-14.5-.7-33.2-5.2-43.4-5-11.5-12.7-21.6-28.1-30.1-8.1-4.5-16.1-7.8-25.4-10 5.4-2.5 9.9-5.4 16.3-11 7.5-6.6 13-15.7 15.6-23.3 2.6-7.5 4.1-18 3.5-28.2-1.1-16.8-4.4-33.1-13.2-44.8-8.8-11.7-21.7-20.7-38.1-27-12.6-4.8-25.5-7.8-45.5-8.9V32z" fill="currentColor"></svg:path><svg:path d="M256 150h-32v74h32v-74z" fill="currentColor"></svg:path><svg:path d="M256 272h-32v90h32v-90z" fill="currentColor"></svg:path><svg:path d="M296 153.9v65.6c6-2.9 9.5-6.8 13.3-11.7 4.6-6 7-12.9 7-20.7 0-8.1-2.4-15-6.7-20.8-3.9-5.1-7.6-9.9-13.6-12.4z" fill="currentColor"></svg:path><svg:path d="M296 273.6v82.8c2-.6 3.8-.8 5.8-1.6 9.8-3.8 15.8-7.9 23.6-14.7 7.5-6.6 9.7-15.9 9.7-26.6 0-9.1-3.3-16.9-7.9-23.2-4.6-6.3-11.7-9.9-19.4-13.2-3.7-1.7-6.8-2.7-11.8-3.5z" fill="currentColor"></svg:path>`,
})
export class IonSocialBitcoinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialBufferOutlineIcon],svg[ion-social-buffer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M70.7 164.5l169.2 81.7c4.4 2.1 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c8.9-4.3 8.9-11.3 0-15.6L272.1 67.2c-4.4-2.1-10.3-3.2-16.1-3.2s-11.7 1.1-16.1 3.2L70.7 148.9c-8.9 4.3-8.9 11.3 0 15.6zm176.1-82.9c1.6-.8 4.9-1.6 9.2-1.6 4.3 0 7.5.8 9.2 1.6l155.5 75.1-155.5 75.1c-1.6.8-4.9 1.6-9.2 1.6-4.3 0-7.5-.8-9.2-1.6L91.3 156.7l155.5-75.1z" fill="currentColor"></svg:path><svg:path d="M441.3 248.2s-30.9-14.9-35-16.9-5.2-1.9-9.5.1S272 291.6 272 291.6c-4.5 2.1-10.3 3.2-16.1 3.2s-11.7-1.1-16.1-3.2c0 0-117.3-56.6-122.8-59.3-6-2.9-7.7-2.9-13.1-.3l-33.4 16.1c-8.9 4.3-8.9 11.3 0 15.6l169.2 81.7c4.4 2.1 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c9.1-4.2 9.1-11.2.2-15.5zm-176.1 82.9c-1.6.8-4.9 1.6-9.2 1.6-4.3 0-7.5-.8-9.2-1.6L91.3 256l18.9-9.1 122.7 59.3c6.4 3.1 14.6 4.8 23.1 4.8s16.6-1.7 23.1-4.8l122.7-59.3 18.9 9.1-155.5 75.1z" fill="currentColor"></svg:path><svg:path d="M441.3 347.5s-30.9-14.9-35-16.9-5.2-1.9-9.5.1S272.1 391 272.1 391c-4.5 2.1-10.3 3.2-16.1 3.2s-11.7-1.1-16.1-3.2c0 0-117.3-56.6-122.8-59.3-6-2.9-7.7-2.9-13.1-.3l-33.4 16.1c-8.9 4.3-8.9 11.3 0 15.6l169.2 81.7c4.4 2.2 10.3 3.2 16.1 3.2s11.7-1.1 16.1-3.2l169.2-81.7c9-4.3 9-11.3.1-15.6zm-176.1 82.9c-1.6.8-4.9 1.6-9.2 1.6-4.3 0-7.5-.8-9.2-1.6L91.3 355.3l18.9-9.1 122.7 59.3c6.4 3.1 14.6 4.8 23.1 4.8s16.6-1.7 23.1-4.8l122.7-59.3 18.9 9.1-155.5 75.1z" fill="currentColor"></svg:path>`,
})
export class IonSocialBufferOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialChromeOutlineIcon],svg[ion-social-chrome-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm0 44.799c66.084 0 124.315 35.843 154.558 89.602H256c-43.685 0-79.517 31.358-87.358 71.684l-53.758-92.969c32.474-41.431 84-68.317 141.116-68.317zM323.2 256c0 36.957-30.243 67.2-67.2 67.2s-67.2-30.243-67.2-67.2 30.243-67.2 67.2-67.2 67.2 30.243 67.2 67.2zm-246.401 0c0-32.484 8.958-62.716 24.644-89.6l77.272 134.4C194.4 327.685 222.4 345.6 256 345.6c10.085 0 20.157-2.241 29.116-5.6l-53.758 92.958C144 421.758 76.799 346.715 76.799 256zM256 435.201L333.285 300.8c7.831-13.442 12.314-28 12.314-44.8 0-26.885-12.314-50.399-31.358-67.2h107.517c8.957 21.284 13.443 43.685 13.443 67.2 0 98.557-80.644 179.201-179.201 179.201z" fill="currentColor"></svg:path>`,
})
export class IonSocialChromeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialCodepenOutlineIcon],svg[ion-social-codepen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M387.547 203.724a41090.004 41090.004 0 0 1-123.261-82.195c-5.844-3.912-11.12-3.802-16.938.095-40.785 27.313-81.818 54.546-122.724 81.676-5.103 3.384-7.624 7.575-7.624 13.716v79.729c0 6.174 2.484 10.342 7.594 13.73 40.906 27.13 81.841 54.361 122.625 81.676 5.81 3.891 11.131 4.055 16.984.137A38295.814 38295.814 0 0 1 387.489 310.1c4.858-3.226 7.511-7.309 7.511-13.094v-80.623c0-5.716-2.775-9.553-7.453-12.659zM268 152.484l93.055 62.218-39.751 26.467c-.919.603-2.923.604-3.839 0a4537.117 4537.117 0 0 1-47.627-31.815c-1.033-.699-1.828-2.319-1.838-3.52v-53.35zm-24 .281v51.706c-.024 1.825-1.313 4.316-2.799 5.334-15.258 10.451-30.655 20.701-46.109 30.86-1.17.77-3.547 1.148-4.566.485-13.116-8.531-26.087-17.284-39.787-26.443C181.967 193.889 244 152.765 244 152.765zm-103 84.351l29.622 19.771L141 276.725v-39.609zm103 124.201s-62.034-41.412-93.196-62.187l38.871-26.154c2.072-1.442 3.473-1.344 5.502.029 15.32 10.36 30.74 20.572 46.062 30.93 1.208.815 2.749 2.371 2.761 3.596v53.786zm14.949-78.425c-1.824 1.108-4.512 1.046-6.26-.111l-38.842-25.865s17.108-11.493 25.356-17.023c4.701-3.152 9.346-6.393 14.164-9.355 1.132-.696 3.532-.97 4.743-.168 5.773 3.829 39.854 26.53 39.854 26.53l-39.015 25.992zm9.051 78.21v-51.346c-.026-2.871.449-4.602 2.861-6.189a3826.352 3826.352 0 0 0 45.386-30.332c2.335-1.586 3.92-1.623 6.265-.019l38.527 25.882L268 361.102zm102-84.426l-29.59-19.743L370 237.06v39.616z" fill="currentColor"></svg:path><svg:path d="M256 64c51.285 0 99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64m0-32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32z" fill="currentColor"></svg:path>`,
})
export class IonSocialCodepenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialCss3OutlineIcon],svg[ion-social-css3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M354.676 366.898l-98.608 28.125-98.458-28.248L150.864 289h48.253l3.433 39.563 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z" fill="currentColor"></svg:path><svg:path d="M64 32l34.936 403.301L255.769 480l157.245-44.705L448 32H64zm319.041 378.51l-127.262 36.187-126.867-36.169L98.896 64H413.1l-30.059 346.51z" fill="currentColor"></svg:path>`,
})
export class IonSocialCss3OutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialDesignernewsOutlineIcon],svg[ion-social-designernews-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M290.9 145.9L226.5 96l64.6 102.8z" fill="currentColor"></svg:path><svg:path d="M329 96v164h-35.9l-63.2-98 1.7 98H191V152.9l-37.1-29.1c1 1.2 2.1 2.4 3 3.6 10 13.8 15 30.7 15 50.5 0 48.9-30.5 82-76.8 82H32l200.1 156H480V214.7L329 96zm135 304H237.7L78.6 276h16.5c13.5 0 26.2-2.7 37.7-7.4 11.5-4.7 21.4-11.8 29.8-20.7 4.8-5.1 9.4-11 12.4-17.1V276h73l-.3-16.5-.7-41.9 32.6 50.7 4.7 7.6H345V129.3l.2.3L464 222.4V400z" fill="currentColor"></svg:path><svg:path d="M90.6 150.4c11 0 23.7 3.2 23.7 28.8 0 6.9-1 16.3-6 21.8-3.6 3.9-9.6 6-17.7 6H87v-57h3m.7-16H71v89h19.5c26 0 39.9-15.6 39.9-43.9 0-28.8-14.3-45.1-39.7-45.1z" fill="currentColor"></svg:path>`,
})
export class IonSocialDesignernewsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialDribbbleIcon],svg[ion-social-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm0 351.5c-88.1 0-159.5-71.4-159.5-159.5S167.9 96.5 256 96.5 415.5 167.9 415.5 256 344.1 415.5 256 415.5z" fill="currentColor"></svg:path><svg:path d="M306.3 246.7c23.4-2.2 50.9-2.9 77.2-2.4-2.3-25.4-12-48.7-27-67.6-16.5 14.9-38 28.1-63.3 39 4.6 10 8.9 20.4 13.1 31z" fill="currentColor"></svg:path><svg:path d="M335.4 155.6C313.6 138.3 286 128 256 128c-5.1 0-10.2.3-15.2.9 13.8 17.7 26.7 37.6 38.6 59.5 21.7-9.2 40.6-20.3 56-32.8z" fill="currentColor"></svg:path><svg:path d="M205.9 138.2c-34.1 14.5-60.7 43.4-72 79.1 41.1-.7 79.6-7 113.4-17.3-12.6-23-26.6-43.7-41.4-61.8z" fill="currentColor"></svg:path><svg:path d="M383 272.2c-22.3-.6-46-.2-66.9 1.5 4.1 12.3 8.1 24.9 11.5 37.9 3.8 14.6 7 29.1 9.6 43.4 24.6-20.3 41.6-49.6 45.8-82.8z" fill="currentColor"></svg:path><svg:path d="M258 256.1c3.9-1.6 8.8-3 14.3-4.3-3.4-8.3-7.1-16.4-10.8-24.3-39.1 12.6-84.6 20.3-133.3 21.3-.1 2.4-.2 4.8-.2 7.3 0 29.1 9.7 55.9 26 77.4 24.9-32.5 60.9-59.3 104-77.4z" fill="currentColor"></svg:path><svg:path d="M282.6 278.2c-6.9 1.5-12.9 3.2-17.4 5.3-37.1 16.8-68.3 41.6-90.4 71.5 22.1 18.2 50.4 29 81.2 29 18.5 0 36-3.9 51.8-10.9-2.7-15.1-6-30.3-10-45.7-4.4-16.9-9.6-33.4-15.2-49.2z" fill="currentColor"></svg:path>`,
})
export class IonSocialDribbbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialDropboxOutlineIcon],svg[ion-social-dropbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M177 77.1L64 151l78.3 63L256 143.2l-79-66.1zm-85.6 76.2l84.5-56.8 52.9 46-85.4 52.5-52-41.7z" fill="currentColor"></svg:path><svg:path d="M369.8 213L256 284.1l79 66.1 19-12.6v20.2L256 417l-98-58.5V338l19 12.2 79-66.1L142.2 213 64 276.3l78 51.5v39.4L256 435l114-68.5v-39.2l78-51.2-78.2-63.1zm-226.4 17.9l85.4 55.4-52.9 44.1-84.5-55.8 52-43.7zm139.8 55.4l85.4-55.4 52.1 43.6-84.5 55.8-53-44z" fill="currentColor"></svg:path><svg:path d="M448 151L335 77.1l-79 66.1L369.8 214l78.2-63zm-164.8-8.4l52.9-46 84.5 56.8-52 41.6-85.4-52.4z" fill="currentColor"></svg:path>`,
})
export class IonSocialDropboxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialEuroOutlineIcon],svg[ion-social-euro-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M310.143 64c31.337 0 59.096 2.607 88.137 8.364l-5.06 34.148c-29.405-4.319-55.659-6.429-79.853-6.429-35.025 0-58.535 6.153-74.129 19.365C220.142 135.627 218 158.428 218 174.17V193h136.051l-2.383 16H218v80H339.752l-2.384 16H218v27.83c0 19.546 2.338 44.061 21.084 60.274 15.042 13.01 37.921 18.812 74.258 18.812 24.534 0 50.197-2.055 79.771-6.42l5.014 34.138C369.096 445.393 341.386 448 310.15 448c-52.591 0-91.43-9.08-115.565-26.987C172.615 404.711 162 380.361 162 346.57V305h-50v-16h50v-80h-50v-16h50v-27.57c0-33.791 10.613-58.142 32.582-74.442C218.715 73.08 257.552 64 310.143 64m.066-16C195.479 48 146 89.225 146 165.43V177H96v48h50v48H96v48h50v25.57C146 422.774 195.481 464 310.211 464c35.25 0 67.777-3.123 105.789-11.866l-9.411-64.96c-37.323 6.244-66.942 8.742-93.206 8.742-64.275 0-79.383-18.739-79.383-63.086V321h117.162l7.148-48H234v-48h131.461l7.149-48H234v-2.83c0-35.92 15.159-58.086 79.434-58.086 26.264 0 55.959 2.498 93.281 8.742L416 60c-38.012-8.743-70.542-12-105.791-12z" fill="currentColor"></svg:path>`,
})
export class IonSocialEuroOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialFacebookIcon],svg[ion-social-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z" fill="currentColor"></svg:path>`,
})
export class IonSocialFacebookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialFacebookOutlineIcon],svg[ion-social-facebook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64zm42.2 48H272v192h-51V240h-45v-32h45v-58.7c0-24.5 5.4-41.2 15.5-51.8 11.2-12 31.1-17.5 59.6-17.5H336v32h-17.5c-12 0-27.5 1.1-37.1 11.7-8.1 9-9.4 20.1-9.4 30.1V208h62l-3.8 32z" fill="currentColor"></svg:path>`,
})
export class IonSocialFacebookOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialFoursquareOutlineIcon],svg[ion-social-foursquare-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M398.484 164.452l-27.399 137.185c1.763-7.151 15.46-76.844 27.399-137.185z" fill="currentColor"></svg:path><svg:path d="M376.764 32H138.541C105.666 32 96 56.798 96 72.414v379.64c0 17.591 9.425 24.117 14.718 26.267 5.299 2.155 19.916 3.971 28.673-6.168 0 0 112.469-131.09 114.4-133.027 2.921-2.931 2.921-3.125 5.844-3.125h72.766c30.575 0 35.49-21.676 38.684-34.559l27.399-137.087c6.074-30.702 11.693-58.938 15.053-75.325C421.143 51.944 411.744 32 376.764 32zm-.338 64s-31.575 156.209-36.034 176.834C335 297.771 332.75 304 307 304h-62.375c-2.747 0-3.868-.147-6.049 2.041-1.443 1.447-78.168 89.562-78.168 89.562-19.034 23.396-26.909 31.795-29.033 31.795s-3.375 0-3.375-38.408V91.708C128 67.034 128.3 64 157.198 64H352c30 0 30.834.833 24.426 32z" fill="currentColor"></svg:path><svg:path d="M398.484 164.452l15.053-75.374c-3.359 16.388-8.978 44.672-15.053 75.374z" fill="currentColor"></svg:path><svg:path d="M328.573 96H170.578C164.091 96 160 101.594 160 106.586v231.255c0 .67.402.975.935.36 0 0 48.202-55.725 54.056-63.021 5.848-7.289 8.491-8.182 17.233-8.182h62.212c6.549 0 10.24-5.75 10.913-8.982.671-3.228 10.536-48.213 11.732-54.119 1.191-5.897-4.214-11.898-9.722-11.898h-64.805c-7.803 0-7.554-5.653-7.554-13.476v-5.512c0-7.815-.282-13.012 7.516-13.012h75.313c4.911 0 10.208-4.442 11.102-8.662l8.468-44.042c1.34-6.472-3.571-11.295-8.826-11.295z" fill="currentColor"></svg:path>`,
})
export class IonSocialFoursquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGithubOutlineIcon],svg[ion-social-github-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32zm-78.4 416.1c2.2 0 4.4-.1 6.7-.2 0 2.8 0 5.5.1 7.9 0 2.4 0 4.6.1 6.5-15.6-5.8-30.3-13.5-44.1-23 9.8 5.3 22.1 8.8 37.2 8.8zm11.4-72.9c-.8 2.2-1.5 4.5-2.1 6.9-3.4 1-7.5 1.8-11.7 1.8-10.9 0-19-5.4-25.6-16.9-2.4-4.6-6.8-10.7-12.9-16.3 16.8 14.1 36.3 20.9 52.3 24.5zm190 58.9c-15.8 11.9-33 21.3-51 28.2v-6.5-50.4c0-12.4-2.1-22.5-5-30.5 37.2-8.3 92-33.7 92-125.4 0-24.6-7.1-46.5-21.2-65.1 3.1-12.9 5.5-35.6-5.1-63l-2.7-7.1-7.2-2.4c-1.5-.5-4.8-1.3-10-1.3-11.5 0-30.9 4.1-59.5 22.8-17-4.2-34.8-6.4-53.1-6.4H255.9c-18.3 0-36.2 2.2-53.1 6.4-28.6-18.7-48-22.8-59.5-22.8-5.2 0-8.5.9-10 1.4l-7.2 2.4-2.7 7.1c-10.6 27.5-8.2 50.2-5.1 63-14.1 18.7-21.2 40.6-21.2 65.1 0 49.6 16 79.9 36.6 98.5-8.1-6.6-18.6-12.1-31.2-13h-1.3c-13.1 0-22.3 5.4-25.2 14.7-4.7 14.8 9.8 25 14.6 28.4l.5.6 1.5.6c1.6 1 10.1 7 16.9 24.5 2 6.2 6.3 14.5 13.6 22.2-13.1-11.2-24.8-24-34.9-38.1C61.9 351.2 48 307.5 48 261.7c0-28.9 5.5-56.9 16.4-83.3 10.5-25.5 25.5-48.3 44.7-67.9 19.1-19.6 41.4-35 66.1-45.7C200.8 53.7 228 48 256 48s55.2 5.6 80.8 16.7c24.8 10.7 47 26.1 66.1 45.7 19.1 19.6 34.2 42.5 44.7 67.9 10.9 26.4 16.4 54.4 16.4 83.3 0 45.8-13.8 89.5-40.1 126.3-12.6 17.7-27.7 33.2-44.9 46.2z" fill="currentColor"></svg:path>`,
})
export class IonSocialGithubOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleIcon],svg[ion-social-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M325.862 275.558l-18.187-13.653-.063-.051c-5.827-4.579-9.952-8.313-9.952-14.685 0-6.979 5.049-11.824 10.896-17.436l.466-.449c20.025-15.171 44.726-34.286 44.726-74.556 0-26.934-11.916-44.729-23.28-57.729h12.969l60.322-33H270.308c-25.324 0-62.68 3.225-94.561 28.576l-.128.25c-21.809 18.111-34.828 44.584-34.828 70.691 0 21.197 8.706 42.159 23.885 57.447 21.428 21.579 48.302 26.127 67.074 26.127 1.462 0 2.956-.028 4.47-.093-.759 2.969-1.25 6.321-1.25 10.321 0 10.926 3.628 19.301 8.083 26.195-23.963 1.932-58.148 6.477-84.897 22.278-39.335 22.562-42.396 55.875-42.396 65.551 0 38.207 35.707 76.762 115.479 76.762 91.611 0 139.543-49.792 139.543-98.979-.001-37.159-22.837-55.668-44.92-73.567zM200.485 139.894c0-13.359 3.02-23.457 9.255-30.9 6.514-7.852 18.18-13.129 29.028-13.129 19.881 0 32.938 15.008 40.388 27.598 9.199 15.539 14.913 36.095 14.913 53.643 0 4.942 0 19.983-10.188 29.796-6.951 6.686-18.707 11.353-28.59 11.353-20.503 0-33.453-14.705-40.707-27.041-10.395-17.684-14.099-38.105-14.099-51.32zM321.6 367.974c0 27.444-25.212 44.493-65.799 44.493-48.058 0-80.347-20.603-80.347-51.265 0-26.14 21.54-36.789 37.8-42.521 18.944-6.064 44.297-7.305 50.062-7.305 3.907 0 6.087 0 8.683.229 36.701 25.211 49.601 36.128 49.601 56.369z" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleOutlineIcon],svg[ion-social-google-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M319.408 82.141c11.779 9.576 36.43 29.718 36.43 68.043 0 37.295-21.547 54.934-43.094 71.545-6.695 6.561-14.385 13.608-14.385 24.701 0 11.092 7.689 17.153 13.336 21.671l18.473 14.108c22.598 18.641 43.125 35.795 43.125 70.559 0 47.373-46.721 95.232-135.003 95.232-74.428 0-110.343-34.766-110.343-72.061 0-18.139 9.245-43.827 39.525-61.48 31.798-19.142 74.952-21.657 98.023-23.172-7.178-9.078-15.382-18.67-15.382-34.265 0-8.577 2.557-13.609 5.12-19.655-5.648.5-11.283 1-16.42 1-54.408 0-85.214-39.811-85.214-79.107 0-23.186 10.802-48.902 32.856-67.543C215.724 68.031 250.637 64 278.328 64h105.725l-32.846 18.141h-31.799zm-36.453 223.755c-4.137-.501-6.684-.501-11.793-.501-4.629 0-32.348 1.002-53.895 8.049-11.3 4.046-44.146 16.125-44.146 51.918 0 35.78 35.393 61.467 90.339 61.467 49.283 0 75.432-23.156 75.432-54.404.001-25.718-16.921-39.312-55.937-66.529m14.879-95.748c11.824-11.592 12.844-27.73 12.844-36.793 0-36.281-22.086-92.73-64.671-92.73-13.339 0-27.724 6.547-35.948 16.639-8.722 10.593-11.284 24.188-11.284 37.281 0 33.764 20.005 89.727 64.163 89.727 12.826-.001 26.656-6.06 34.896-14.124" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleplusIcon],svg[ion-social-googleplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M242.1 275.6l-18.2-13.7-.1-.1c-5.8-4.6-10-8.3-10-14.7 0-7 5-11.8 10.9-17.4l.5-.4c20-15.2 44.7-34.3 44.7-74.6 0-26.9-11.9-44.7-23.3-57.7h13L320 64H186.5c-25.3 0-62.7 3.2-94.6 28.6l-.1.3C70 110.9 57 137.4 57 163.5c0 21.2 8.7 42.2 23.9 57.4 21.4 21.6 48.3 26.1 67.1 26.1 1.5 0 3 0 4.5-.1-.8 3-1.2 6.3-1.2 10.3 0 10.9 3.6 19.3 8.1 26.2-24 1.9-58.1 6.5-84.9 22.3-39.4 22.7-42.5 56-42.5 65.6 0 38.2 35.7 76.8 115.5 76.8 91.6 0 139.5-49.8 139.5-99 0-37.1-22.8-55.6-44.9-73.5zM116.7 139.9c0-13.4 3-23.5 9.3-30.9 6.5-7.9 18.2-13.1 29-13.1 19.9 0 32.9 15 40.4 27.6 9.2 15.5 14.9 36.1 14.9 53.6 0 4.9 0 20-10.2 29.8-7 6.7-18.7 11.4-28.6 11.4-20.5 0-33.5-14.7-40.7-27-10.4-17.8-14.1-38.2-14.1-51.4zM237.8 368c0 27.4-25.2 44.5-65.8 44.5-48.1 0-80.3-20.6-80.3-51.3 0-26.1 21.5-36.8 37.8-42.5 18.9-6.1 44.3-7.3 50.1-7.3 3.9 0 6.1 0 8.7.2 36.6 25.2 49.5 36.1 49.5 56.4z" fill="currentColor"></svg:path><svg:path d="M402 142V64h-34v78h-80v34h80v81h34v-81h78v-34z" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleplusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialGoogleplusOutlineIcon],svg[ion-social-googleplus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M223.5 82.1c11.8 9.6 36.4 29.7 36.4 68 0 37.3-21.5 54.9-43.1 71.5-6.7 6.6-14.4 13.6-14.4 24.7s7.7 17.2 13.3 21.7l18.5 14.1c22.6 18.6 43.1 35.8 43.1 70.6 0 47.4-46.7 95.2-135 95.2-74.4.1-110.3-34.7-110.3-72 0-18.1 9.2-43.8 39.5-61.5 31.8-19.1 75-21.7 98-23.2-7.2-9.1-15.4-18.7-15.4-34.3 0-8.6 2.6-13.6 5.1-19.7-5.6.5-11.3 1-16.4 1-54.4 0-85.2-39.8-85.2-79.1 0-23.2 10.8-48.9 32.9-67.5C119.8 68 154.7 64 182.4 64h105.7l-32.8 18.1h-31.8zM187 305.9c-4.1-.5-6.7-.5-11.8-.5-4.6 0-32.3 1-53.9 8-11.3 4-44.1 16.1-44.1 51.9s35.4 61.5 90.3 61.5c49.3 0 75.4-23.2 75.4-54.4 0-25.7-16.9-39.3-55.9-66.5m14.9-95.8c11.8-11.6 12.8-27.7 12.8-36.8 0-36.3-22.1-92.7-64.7-92.7-13.3 0-27.7 6.5-35.9 16.6-8.7 10.6-11.3 24.2-11.3 37.3 0 33.8 20 89.7 64.2 89.7 12.8.1 26.6-6 34.9-14.1" fill="currentColor"></svg:path><svg:path d="M480 142.3h-78.3V64.1H384v78.2h-79.7v17.8H384V241h17.7v-80.9H480z" fill="currentColor"></svg:path>`,
})
export class IonSocialGoogleplusOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialHackernewsOutlineIcon],svg[ion-social-hackernews-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M416 96v320H96V96h320m32-32H64v384h384V64z" fill="currentColor"></svg:path><svg:path d="M296.7 159H342l-63.9 120v72h-39.9v-72L172 159h47.1l39.7 83.6 37.9-83.6z" fill="currentColor"></svg:path>`,
})
export class IonSocialHackernewsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialHtml5OutlineIcon],svg[ion-social-html5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 32l34.936 403.301L255.769 480l157.245-44.705L448 32H64zm319.041 378.51l-127.262 36.187-126.867-36.169L98.896 64H413.1l-30.059 346.51z" fill="currentColor"></svg:path><svg:path d="M147.991 264h166.993l-5.573 63.986-53.42 14.748-53.766-14.67L198.801 289H150.55l6.763 77.336 98.678 27.81 98.495-27.983L367.991 215h-176L188 164h183.991l4.208-49.684-240.778-.128z" fill="currentColor"></svg:path>`,
})
export class IonSocialHtml5OutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialInstagramIcon],svg[ion-social-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="255.833" r="80" fill="currentColor"></svg:circle><svg:path d="M177.805 176.887c21.154-21.154 49.279-32.929 79.195-32.929s58.041 11.837 79.195 32.991c13.422 13.422 23.011 29.551 28.232 47.551H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51 0-49 20.49-49 47v113h85.072c5.222-18 14.811-34.191 28.233-47.613zM416.5 147.7c0 7.069-5.73 12.8-12.8 12.8h-38.4c-7.069 0-12.8-5.73-12.8-12.8v-38.4c0-7.069 5.73-12.8 12.8-12.8h38.4c7.069 0 12.8 5.73 12.8 12.8v38.4z" fill="currentColor"></svg:path><svg:path d="M336.195 335.279c-21.154 21.154-49.279 32.679-79.195 32.679s-58.041-11.462-79.195-32.616c-21.115-21.115-32.759-49.842-32.803-78.842H64.5v143c0 26.51 22.49 49 49 49h288c26.51 0 47-22.49 47-49v-143h-79.502c-.043 29-11.687 57.664-32.803 78.779z" fill="currentColor"></svg:path>`,
})
export class IonSocialInstagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialInstagramOutlineIcon],svg[ion-social-instagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448.5 112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233 0-47.5 21.267-47.5 47.5v289c0 26.233 21.267 47.5 47.5 47.5h289c26.233 0 47.5-21.267 47.5-47.5V112zM257 175.833c44.182 0 80 35.816 80 80s-35.818 80-80 80-80-35.816-80-80 35.818-80 80-80zM416.5 160.5c0 8.836-7.163 16-16 16h-48c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16h48c8.837 0 16 7.164 16 16v48zm-15 256h-288c-8.822 0-17-8.178-17-17v-175h53.072c-3.008 10-4.572 20.647-4.572 31.583C145 286 156.65 314 177.805 335.154s49.279 32.741 79.195 32.741 58.041-11.681 79.195-32.835S369 286.016 369 256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175c0 8.822-6.178 17-15 17z"></svg:path>`,
})
export class IonSocialInstagramOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialJavascriptOutlineIcon],svg[ion-social-javascript-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 104.001v197.017c0 41.567-9.644 71.988-28.662 90.417C146.278 407.965 121.277 416 86.907 416c-12.002 0-25.78-1.496-37.185-3.886l4.09-30.505c7.146 1.269 15.465 2.149 24.774 2.149 21.92 0 37.892-6.459 48.827-19.745C138.73 350.268 144 330.085 144 300.499V104.001h48m16-16h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001z" fill="currentColor"></svg:path><svg:path d="M382.463 96c24.458 0 45.898 3.146 65.1 9.585l-9.581 32.062c-13.612-5.505-32.536-10.937-56.486-10.937-18.607 0-34.462 4.584-45.849 13.256-11.732 8.936-18.194 21.583-18.194 35.613 0 34.974 33.062 48.149 71.347 63.405l.107.043.108.041c26.977 10.299 45.938 22.261 57.969 36.572C458.593 289.451 464 305.543 464 326.284c0 25.177-9.333 46.71-26.99 62.274-20.35 17.939-51.417 27.422-89.843 27.422-28.052 0-54.698-6.427-72.615-13.979l7.593-31.603c17.579 7.248 41.882 14.382 69.438 14.382 20.28 0 36.629-4.478 48.591-13.306 12.807-9.45 19.857-23.697 19.857-40.119 0-15.348-6.041-27.922-18.469-38.444-10.157-8.603-24.801-16.048-47.467-24.136-26.86-9.904-47.359-21.947-60.934-35.795C278.922 218.455 272 201.829 272 182.154c0-24.149 9.831-45.101 28.43-60.591C320.51 104.839 348.876 96 382.463 96m0-16C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z" fill="currentColor"></svg:path>`,
})
export class IonSocialJavascriptOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialLinkedinOutlineIcon],svg[ion-social-linkedin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M182.8 384V212.9h-54.9V384h54.9zm-25.4-197c18.3 0 29.7-13.1 29.7-29.5-.3-16.7-11.4-29.5-29.4-29.5S128 140.8 128 157.5c0 16.4 11.4 29.5 29 29.5h.4z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></svg:path><svg:path d="M320.6 209c-29.1 0-41.6 16.4-49.6 27.8V213h-55v171h55v-97.4c0-5 .4-10 1.9-13.5 4-10 13-20.3 28.2-20.3 19.9 0 27.9 15.3 27.9 37.7V384h55v-99.9c0-51.3-27.2-75.1-63.4-75.1z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></svg:path><svg:path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM414 416H99.1c-1.8 0-3.1-1.4-3.1-3.1V98c0-1.1 1-2 2-2h316c1 0 2 1 2 2v316c0 .9-.9 2-2 2z" fill="currentColor"></svg:path>`,
})
export class IonSocialLinkedinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialOctocatIcon],svg[ion-social-octocat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M178.354 287.478c-9.123 0-16.928 4.207-23.201 12.833-6.291 8.478-9.398 18.973-9.398 31.431 0 12.474 3.166 23.008 9.398 31.509 6.273 8.54 14.039 12.771 23.201 12.771 8.494 0 15.889-4.27 22.121-12.771 6.271-8.501 9.398-19.035 9.398-31.509 0-12.419-3.166-22.93-9.398-31.431-6.233-8.587-13.567-12.833-22.121-12.833z"></svg:path><svg:path d="M334.668 287.478c-9.045 0-16.891 4.207-23.182 12.833-6.271 8.478-9.359 18.973-9.359 31.431 0 12.474 3.186 23.008 9.359 31.509 6.291 8.54 14.098 12.771 23.182 12.771 8.533 0 15.906-4.27 22.178-12.771 6.293-8.501 9.418-19.035 9.418-31.509 0-12.419-3.164-22.93-9.418-31.431-6.272-8.587-13.547-12.833-22.178-12.833z"></svg:path><svg:path d="M445.777 172h-.059s2.793-14.264.314-39.18c-2.182-24.916-7.471-47.838-16.123-68.82 0 0-4.422.76-12.76 2.896s-22.08 6.299-40.938 14.768c-18.541 8.54-37.986 19.788-58.297 33.505-13.803-3.934-34.408-5.939-61.994-5.939-26.289 0-46.914 2.012-61.977 5.945C149.351 84.316 112.111 67.23 81.851 64c-8.594 20.982-13.883 43.991-16.045 68.97-2.398 24.939.432 39.329.432 39.329C41.979 198.551 32 236.541 32 267.793c0 24.244.658 46.078 6.125 65.48 5.564 19.31 12.662 35.13 21.098 47.221 8.611 12.121 19.012 22.788 31.576 31.938 12.467 9.314 23.988 15.962 34.389 20.216 10.461 4.372 22.375 7.602 35.982 9.861 13.33 2.386 23.438 3.645 30.477 3.996 0 0 28 1.494 64.354 1.494s64.295-1.494 64.295-1.494c7.02-.352 17.145-1.634 30.535-3.996 13.547-2.299 25.521-5.607 35.941-9.861 10.402-4.293 21.943-10.901 34.469-20.216 12.523-9.032 22.906-19.739 31.518-31.938 8.436-12.091 15.494-27.911 21.098-47.221 5.486-19.402 6.145-41.385 6.145-65.629C480 237.389 469.982 199 445.777 172zm-65.394 233.645C352.521 418.736 311.486 424 257.061 424l-2.143-.039c-54.443 0-95.361-5.248-122.848-18.41-27.508-13.092-41.271-40.057-41.271-80.738 0-24.33 8.572-43.99 25.482-59.107 7.354-6.515 16.438-11.019 27.645-13.717 11.129-2.558 21.354-2.762 30.969-2.465 9.398.415 22.551 2.196 39.344 3.464C231.029 254.285 243.535 256 256 256c11.698 0 27.213-1.957 52.104-3.959 24.99-1.971 43.494-2.971 55.467-1 12.289 2.002 22.986 6.202 32.129 14.742 17.734 15.751 26.602 35.505 26.602 59.084-.001 40.666-14.138 67.67-41.919 80.778z"></svg:path></svg:g>`,
})
export class IonSocialOctocatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialPinterestOutlineIcon],svg[ion-social-pinterest-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm135.8 359.8C355.5 428 307.3 448 256 448c-16.2 0-32.1-2-47.4-5.9 2.8-6.3 5.2-12.8 7-19.3 2.8-10 15.8-61.6 15.8-61.6 7.8 14.8 30.5 27.9 54.7 27.9 72 0 120.9-65.6 120.9-153.5 0-66.4-56.3-128.3-141.8-128.3-106.4 0-160.1 76.3-160.1 139.9 0 38.5 14.6 72.8 45.9 85.6 5.1 2.1 9.7.1 11.2-5.6 1-3.9 3.5-13.9 4.6-18 1.5-5.6.9-7.6-3.2-12.5-9-10.7-14.8-24.4-14.8-43.9 0-56.6 42.3-107.3 110.3-107.3 60.1 0 93.2 36.7 93.2 85.8 0 64.6-28.6 119.1-71 119.1-23.4 0-41-19.4-35.4-43.1 6.7-28.4 19.8-59 19.8-79.5 0-18.3-9.8-33.6-30.2-33.6-24 0-43.2 24.8-43.2 58 0 21.1 7.2 35.4 7.2 35.4S175 391.5 170.7 409.7c-1.3 5.5-2.2 11.1-2.9 16.8-17.3-9-33.3-20.6-47.4-34.8C84 355.5 64 307.3 64 256s20-99.5 56.2-135.8C156.5 84 204.7 64 256 64s99.5 20 135.8 56.2C428 156.5 448 204.7 448 256s-20 99.5-56.2 135.8z" fill="currentColor"></svg:path>`,
})
export class IonSocialPinterestOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialRedditIcon],svg[ion-social-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2 67.1 13.5c2.3 22.7 21.2 40.4 44.3 40.4h.4c24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64h-.2-.1c-17.2 0-32 9.8-39.5 24.3l-89.7-18-30.8 103-2.5.1c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8.1 75.8 89 137.4 198.6 137.4s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM65.8 271.1c-6.6-4.5-10.9-12.1-10.9-20.8 0-13.8 11.1-25.1 24.7-25.1 5.6 0 10.8 1.9 15 5.1-13.5 11.9-23.5 25.7-28.8 40.8zm323.5-162c0-9.2 7.4-16.8 16.5-16.8s16.5 7.5 16.5 16.8c0 9.2-7.4 16.8-16.5 16.8s-16.5-7.5-16.5-16.8zM158.5 288.4c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8-14.2 31.8-31.8 31.8-31.8-14.2-31.8-31.8zM256 400c-47.6-.2-76-28.5-77.2-29.7l12.6-12.4c.2.2 23.7 24.2 64.6 24.4 40.3-.2 64.2-24.2 64.5-24.4l12.6 12.4c-1.2 1.2-29.5 29.5-77.1 29.7zm66.3-79.8c-17.6 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8 31.8 14.2 31.8 31.8-14.3 31.8-31.8 31.8zm124.1-48.7c-5.4-15.3-15.6-29.4-29.3-41.4 4.2-3.3 9.5-5.2 15.2-5.2 13.9 0 25.1 11.4 25.1 25.5.1 8.8-4.3 16.5-11 21.1z" fill="currentColor"></svg:path>`,
})
export class IonSocialRedditIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialRssOutlineIcon],svg[ion-social-rss-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M119.9 336.1c-30.8 0-55.9 25.1-55.9 55.8 0 30.8 25.1 55.6 55.9 55.6 30.9 0 55.9-24.9 55.9-55.6 0-30.7-25-55.8-55.9-55.8zm0 95.4c-22 0-39.9-17.8-39.9-39.6 0-21.9 17.9-39.8 39.9-39.8s39.9 17.9 39.9 39.8c0 21.8-17.9 39.6-39.9 39.6z" fill="currentColor"></svg:path><svg:path d="M64 192v79.9c48 0 94.1 14.2 128 48.1 33.9 33.9 48 79.9 48 128h80c0-139.9-116-256-256-256zm239.5 240h-48c-3.1-49.7-21-92.1-52.2-123.3-31.2-31.3-73.3-49.2-123.3-52.3v-47.8c26 1.8 52.1 8 76.7 18.5 28.5 12.2 54.2 29.6 76.4 51.8 22.2 22.2 39.6 47.9 51.8 76.4 10.6 24.6 16.8 50.3 18.6 76.7z" fill="currentColor"></svg:path><svg:path d="M64 64v79.9c171 0 303.9 133 303.9 304.1H448C448 236.3 276 64 64 64zm227.4 156.5C235.4 164.4 161 132 80 128.2V80.3C270 88.5 423.5 241.8 431.7 432h-48.2c-3.8-80.9-36.2-155.5-92.1-211.5z" fill="currentColor"></svg:path>`,
})
export class IonSocialRssOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialSkypeOutlineIcon],svg[ion-social-skype-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.2 96c14 0 27.7 3.9 39.6 11.3l10.3 6.4 12-2c8.5-1.5 17.2-2.2 25.9-2.2 40.5 0 78.5 15.5 107 43.7 28.4 28 44.1 65.3 44.1 104.9 0 10.7-1.2 21.4-3.5 31.8l-2.5 11.1 5.1 10.2c5.1 10.1 7.7 20.9 7.7 32.2 0 40.1-33.3 72.7-74.2 72.7-12.5 0-24.3-2.9-35.2-8.7l-9.8-5.2-10.9 2c-9.1 1.7-18.5 2.5-27.8 2.5-40.5 0-78.5-15.5-107-43.7-28.4-28-44.1-65.3-44.1-104.9 0-10 1-20.1 3-29.9l2.5-12.2-6.4-10.7c-6.5-11.1-10-23.7-10-36.6 0-40.1 33.3-72.7 74.2-72.7m0-32C111.6 64 64 110.9 64 168.7c0 19.4 5.3 37.5 14.6 53-2.4 11.7-3.7 23.9-3.7 36.3 0 99.8 82 180.6 183.1 180.6 11.5 0 22.7-1 33.5-3 15 7.9 32.1 12.4 50.2 12.4 58.7 0 106.2-46.9 106.2-104.7 0-16.7-4-32.5-11.1-46.5 2.8-12.5 4.2-25.4 4.2-38.7 0-99.7-82-180.6-183.2-180.6-10.7 0-21.1.9-31.3 2.6C210.3 69.9 191 64 170.2 64z" fill="currentColor"></svg:path><svg:path d="M351.9 344.1c-8.5 11.8-21 21.2-37.2 27.8-16.1 6.6-35.3 9.9-57.3 9.9-26.3 0-48.3-4.6-65.6-13.6-12.3-6.6-22.4-15.4-30.2-26.4-7.8-11-11.7-22-11.7-32.6 0-6.6 2.6-12.3 7.6-17.1 5-4.6 11.5-7 19.1-7 6.3 0 11.7 1.8 16.1 5.5 4.2 3.5 7.8 8.7 10.7 15.5 3.3 7.3 6.8 13.5 10.6 18.4 3.6 4.7 8.7 8.6 15.3 11.7 6.7 3.1 15.6 4.7 26.6 4.7 15.1 0 27.5-3.2 36.8-9.5 9.2-6.1 13.6-13.5 13.6-22.5 0-7.1-2.3-12.7-7.1-17.1-5-4.6-11.5-8.2-19.6-10.6-8.3-2.6-19.6-5.3-33.6-8.2-19-4-35.1-8.8-48-14.2-13.1-5.5-23.7-13.2-31.5-22.7-7.5-9.6-11.5-21.8-11.5-36.1 0-13.7 4.2-25.9 12.4-36.5 8.2-10.5 20.1-18.7 35.6-24.3 15.2-5.6 33.3-8.4 53.7-8.4 16.4 0 30.7 1.9 42.7 5.5 12.1 3.7 22.2 8.7 30.3 14.9 8 6.2 14 12.8 17.8 19.7 3.8 7 5.7 13.9 5.7 20.6 0 6.4-2.5 12.3-7.5 17.4-5 5.1-11.3 7.8-18.8 7.8-6.8 0-12.1-1.6-15.8-4.8-3.4-3-7-7.6-10.9-14.3-4.6-8.5-10.1-15.3-16.4-20.1-6.2-4.6-16.4-7-30.6-7-13.1 0-23.8 2.6-31.7 7.7-7.6 4.9-11.3 10.6-11.3 17.3 0 4.1 1.2 7.5 3.7 10.5 2.6 3.1 6.2 5.9 10.9 8.2 4.8 2.4 9.8 4.3 14.7 5.6 5.1 1.4 13.6 3.5 25.3 6.1 14.9 3.1 28.5 6.7 40.5 10.4 12.2 3.9 22.7 8.6 31.3 14.1 8.8 5.6 15.7 12.9 20.7 21.5 4.9 8.6 7.4 19.4 7.4 31.8 0 15-4.3 28.6-12.8 40.4z" fill="currentColor"></svg:path>`,
})
export class IonSocialSkypeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialSnapchatOutlineIcon],svg[ion-social-snapchat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256.283 47.553c70.693 0 128 54.682 118 128.931-2.072 15.388-3.422 31.483-4.26 44.759 0 0 2.402 4.253 12.664 4.253 6.071 0 14.895-1.543 27.596-6.354 2.236-.847 4.377-1.241 6.377-1.241 7.918 0 13.615 5.931 14.123 12.271.426 5.31-4.564 11.199-8.371 13.009-13.766 6.542-46.991 10.063-46.991 32.638 0 22.576 22.362 46.656 40.862 63.713S480 360.602 480 360.602s.283 21.57-31.717 29.097c-32 7.524-32.1 5.712-33.25 13.796-2.133 14.979-1.535 21.378-11.248 21.378-1.672 0-3.651-.19-6.002-.558-8.23-1.291-19.239-3.644-31.121-3.644-11.216 0-23.21 2.097-34.379 9.161-23 14.549-41.283 34.114-76.283 34.114s-53-19.565-76-34.114c-11.17-7.065-23.162-9.161-34.379-9.161-11.88 0-22.892 2.353-31.121 3.644-2.352.367-4.33.558-6.002.558-9.71 0-9.115-6.399-11.248-21.378-1.151-8.084-1.25-6.27-33.25-13.795s-32-29.097-32-29.097 45.5-4.012 64-21.068c18.5-17.058 40.862-41.134 40.862-63.71 0-22.575-33.226-26.09-46.991-32.632-3.807-1.81-8.796-7.687-8.371-12.997.507-6.336 6.196-12.251 14.107-12.25 2.004 0 4.152.38 6.393 1.229 12.749 4.829 21.588 6.342 27.662 6.342 10.204 0 12.598-4.273 12.598-4.273-.837-13.275-2.187-29.371-4.259-44.759-10-74.249 47.307-128.931 118-128.931M256.283 32H256c-41.093 0-79.215 16.208-104.591 45.341-23.982 27.534-34.375 63.345-29.265 101.292 1.416 10.51 2.46 21.231 3.21 30.618-3.97-.559-9.686-1.998-17.703-5.034-3.965-1.502-8.017-2.295-12.043-2.295-15.641-.001-28.844 11.852-30.057 27.003-1.027 12.818 8.235 24.393 17.47 28.783 4.251 2.02 9.181 3.578 14.4 5.232 6.707 2.125 14.309 4.532 19.293 7.703 4.147 2.639 4.147 4.168 4.147 5.182 0 8.66-6.191 24.691-35.688 51.888-10.499 9.681-39.055 15.501-54.588 16.897l-14.572 1.311L16 360.603c0 1.679.312 10.546 6.485 20.319 5.246 8.306 16.073 19.283 37.863 24.407a1139.713 1139.713 0 0 0 15.208 3.454c2.306.512 4.555 1.01 6.454 1.453l.081.623c.9 7.004 1.611 12.535 4.392 17.75 2.453 4.6 8.574 12.316 22.015 12.316 2.478 0 5.249-.246 8.472-.751 1.672-.263 3.386-.554 5.2-.863 7.116-1.212 15.182-2.587 23.451-2.587 10.277 0 18.732 2.188 25.846 6.688 4.531 2.867 8.892 5.972 13.509 9.26C202.967 465.481 223.358 480 256 480c32.726 0 53.293-14.582 71.439-27.446 4.576-3.244 8.898-6.309 13.377-9.142 7.113-4.5 15.568-6.688 25.846-6.688 8.27 0 16.334 1.375 23.449 2.586 1.814.311 3.529.602 5.202.864 3.223.505 5.993.751 8.472.751 13.44 0 19.562-7.715 22.015-12.313 2.781-5.214 3.492-10.746 4.392-17.749l.082-.629c1.898-.441 4.148-.941 6.455-1.452 4.023-.892 9.029-2.001 15.206-3.454 21.851-5.139 32.611-16.17 37.79-24.518 6.098-9.828 6.296-18.736 6.273-20.422l-.189-14.501-14.398-1.278c-15.413-1.396-43.8-7.219-54.301-16.9-16.281-15.011-35.688-36.199-35.688-51.893 0-1.014 0-2.546 4.15-5.186 4.985-3.174 12.589-5.584 19.297-7.71 5.217-1.654 10.144-3.217 14.394-5.236 9.236-4.39 18.498-15.978 17.471-28.807-1.215-15.166-14.424-27.046-30.072-27.046-4.021 0-8.068.76-12.027 2.259-8.027 3.041-13.743 4.41-17.705 4.962.747-9.319 1.791-20.12 3.211-30.67 5.111-37.948-5.281-73.509-29.264-101.042C335.498 48.208 297.376 32 256.283 32z" fill="currentColor"></svg:path><svg:path d="M256 229c-20.838 0-40.604-8.29-55.657-23.343a8 8 0 1 1 11.313-11.313C223.688 206.374 239.436 213 256 213c16.387 0 32.15-6.64 44.385-18.698a8 8 0 0 1 11.23 11.395C296.368 220.725 276.617 229 256 229z" fill="currentColor"></svg:path><svg:ellipse cx="208" cy="152" rx="16" ry="24" fill="currentColor"></svg:ellipse><svg:ellipse cx="304" cy="152" rx="16" ry="24" fill="currentColor"></svg:ellipse>`,
})
export class IonSocialSnapchatOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTumblrOutlineIcon],svg[ion-social-tumblr-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M321.2 396.3c-11.8 0-22.4-2.8-31.5-8.3-6.9-4.1-11.5-9.6-14-16.4-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9c-2.7 21.5-7.5 44.7-14.5 58.6s-14 25.8-25.6 35.7c-11.6 9.9-25.6 17.9-41.9 23.3V224h48v140.4c0 19 2 33.5 5.9 43.5 4 10 11.1 19.5 21.4 28.4 10.3 8.9 22.8 15.7 37.3 20.5 14.6 4.8 31.4 7.2 50.4 7.2 16.7 0 30.3-1.7 44.7-5.1 14.4-3.4 30.5-9.3 48.2-17.6v-65.6c-20.9 13.7-41.8 20.6-62.9 20.6zM368 431c-13.1 5.7-25.1 9.9-35.9 12.4-13.1 3.1-25.6 4.6-41.1 4.6-17.2 0-32.5-2.2-45.4-6.4-12.5-4.1-23.2-10-31.9-17.5-8.3-7.2-14-14.6-17-22.2-2.2-5.5-4.8-16.6-4.8-37.6V208H144v-31.3c13.4-5.6 25.5-13 36.3-22.2 13.2-11.2 21.6-24.9 29.6-40.7 7.1-14 11.6-34 14.1-49.8h32v112h96v32h-96v117.1c0 34.6 2.4 46 4.6 52 3.8 10.3 10.8 18.6 21 24.6 11.7 7 25 10.5 39.7 10.5 15.7 0 31.3-3.3 46.7-9.8V431z" fill="currentColor"></svg:path>`,
})
export class IonSocialTumblrOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTuxIcon],svg[ion-social-tux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M254.7 101.3c-.6 1-1.2 2-1.7 3.1 1.8-3.5 4.3-6.5 7.4-8.7-2.1 1.3-4.1 3.1-5.7 5.6-.6 1 1.6-2.5 0 0z"></svg:path><svg:path d="M426.3 396c-6.7-4-13.2-11-12-18.8 2.3-15.3 2.5-21.5-.2-25.8-1.899-3.2-5.5-5-8.6-5.801 2-2.5 3.1-5.399 3.8-10.899 1.842-14.168-3.239-30.67-6.61-44.243-4.445-17.9-10.319-34.014-20.432-49.522-16.489-25.288-37.253-46.804-51.857-73.435-9.7-29-4.301-47.1-4.801-66.2C324.7 64 298.7 32 261 32h-14c-37.5 0-58 26.9-58 60a17033.74 17033.74 0 0 1 2 50c.769 19.756 1.98 37.667-8 55.3-7.033 12.488-19.571 22.43-28.592 33.478-9.525 11.665-13.06 23.669-17.859 37.619-5.987 17.401-21.275 30.906-24.886 48.929-1.658 8.271 2.726 17.857-.83 24.693-3.698 7.109-.813 14.469-2.833 21.682-3.505 11.729-20.731 10.729-30.215 11.508-17.602 1.443-11.051 17.988-7.843 29.701 5.598 20.435-19.54 42.078 11.032 50.471 13.989 3.84 28.586 5.13 42.727 8.32 13.981 3.154 26.917 8.612 40.396 13.262 10.469 3.611 20.262 4.146 30.323-1.232 10.982-5.87 18.947-15.083 31.691-17 24.707-3.716 54.829-4.169 79.373.63 7.507 1.468 10.075 6.525 14.905 11.766 8.145 8.838 21.514 10.125 32.794 8.22 11.89-2.01 20.846-9.466 29.686-17.112 12.526-10.835 26.137-17.996 40.791-25.547 7.439-3.833 22.178-9.388 24.159-18.903 2.332-11.212-14.177-17.402-21.519-21.785zM202 451.3c-1.3 13-13.9 20.3-25.4 19.3-19.502-1.649-37.86-12.237-57.164-15.75-9.393-1.709-47.351-3.173-46.943-17.079.215-7.361 5.751-11.666 7.567-18.415 2.811-10.449-5.753-19.932-6.32-30.16-.447-8.081 10.73-7.607 16.288-8.053 8.761-.702 19.157-2.012 23.572-11.043 1.6-3.3-.5-15 1.9-21.8 3.527-10.155 15.489-8.949 23.3-4.899 17.762 9.067 28.943 35.546 38.533 51.821 9.725 16.506 26.712 35.621 24.667 56.078zm116.3-65.6c2.289 11.787 4.224 24.387 1.7 36.3-2.016 9.516-8.562 15.614-12.7 24-2.2-6.8 11.3-16.7 9.8-33.7-.042-.475-.947-10.882-1.036-10.834-1.979 1.082-3.825 5.075-5.304 6.73-4.809 5.383-10.771 9.658-16.729 13.677-13.797 9.306-29.221 15.058-45.83 16.627-21 2-38-10.5-38-10.5 2.517 8.305 8.992 21 1.1 28.3 1.743-15.648-4.876-28.06-11.6-41.7 46.374-24.639-41.363-64.397-53-79.8-10.476-13.896-5.553-31.83-2.7-43.5-3.443 13.775-3.959 41.956 14 46.8 7.922 2.169 5.605-37.071 5.984-41.463 1.58-18.312 7.721-35.997 18.343-51.015 3.399-4.806 1.863-9.533 2.673-15.322 1.693-10.668 7.295-20.547 13.488-29.225 5.169-7.243 1.735-12.618 3.014-21.055.727-4.795 5.118 3.193 5.798 4.279 4 6.5 16.7 22.7 24.7 22 13.277-1.161 24.692-15.938 36.015-22.046 3.591-1.937 14.41-5.242 15.866-9.632 1.768-5.33-12.666-.161-14.114.583-10.782 5.535-31.018 21.448-43.867 15.295-8.762-4.195-10.691-14.994-17.2-20.5 15.4 13.6 21.5 10.5 27.6 9.1 9.665-2.182 18.797-6.486 27.8-10.5 4.217-1.88 20.107-4.041 22.301-8.7 2.745-5.834-5.05-6.726-8.068-3.58-6.251 6.515-15.853 8.981-24.097 11.787-18.885 6.427-37.644 9.131-51.835-8.607-8.354-10.212 15.558-22.504 22.2-28.8 0 0 1-7.2-.6-12.7-1.9-6.5-7.8-9.3-11.9-8.1-4.1 1.1-8 5.5-6.8 14.8 1 8.3 7 11 7 11s-2.7 3.5-5.2 4.7c0 0-.8-.3-3.5-6.3s-6.6-19.5-.3-31.1c6.3-11.6 19.6-5.2 23.8 3.8 3.9 8.3 2.4 22.7 2.4 22.7 3.358-.843 6.835-1.3 10.3-1.3 4.242 0 6.814 4.563 10.6 4.8-.635 0-.564-18.124-.233-20.078 1.099-6.49 4.112-13.619 9.933-17.222 16.087-11.491 34.6 3.916 34.6 21.2.024 4.486-.137 9.215-1.199 13.6-.659 2.637-1.582 8.469-5.114 9.177-1.145.23-10.683-.431-7.985-3.277 12.807-12.812-1.822-38.207-17.4-24.5-5.601 4.199-5.483 13.833-4.801 20 1.098 9.141 20.51 11.541 26.852 13.78 8.224 2.903 7.943 9.626 6.679 17.116-1.9 11.26-2.815 18.792 4.381 28.214 7.344 9.616 12.929 20.086 15.915 31.878 1.483 5.859 1.665 10.843 5.621 15.57 5.983 7.151 10.619 14.805 13.291 23.817 5.225 17.621 6.513 35.422 6.162 53.625-.5 8.199-2.1 15 8.3 9.699 4-2 6.5-2.899 11-3.699 3.101-6.301 4.4-18.301 4.5-24.301.2-13.5-.3-41.5-27.699-71.5 0 0 28.5 21.7 33 62 2.5 22.301-2 34.4-2 34.4 5.3 1.3 10.8 5.3 13.6 9.8-.133-.22 1.038 1.748 1.179 1.864-9.811-8.171-31.708-12.859-39.679.236-2 3.3-3.1 7.6-3.2 11.699-7.1-1.199-12.399 0-16.8 4.9C313.5 358.1 316.3 375.3 318.3 385.7c2 10.3-2-10.4 0 0zm-97.7-260.8c-.2-4.9-2.1-9-4.7-10.8.3-.3.8-.7 1.7-.4 1.4.4 3.5 2.7 4.3 6.3.7 2.9.4 7.7-1.4 7.7-.002-.934.031-1.867.1-2.8-.2-4.9 0 .9 0 0zm54.7-12c.4-.3 1.101-.6 2.3-.3 1.801.4 4.4 2.8 5.301 6.2.699 2.8.1 7.4-2.2 7.3-.005-.903.062-1.803.2-2.7-.101-4.6-2.301-8.6-5.601-10.5.4-.3 3.3 1.9 0 0zm137.1 320c-17.504 7.553-31.304 19.968-47.117 30.19-13.824 8.937-38.156 8.313-40.022-12.879-1.565-17.776 4.184-35.288 1.84-53.357-1.587-12.239-8.534-28.906-2.301-40.854 2.7-5.1 8.101-5.5 12.5-4 3.193 13.267 13.932 23.6 28 23.6 17.031 0 23.542-14.008 34-24.5 3.4.2 7.4 1.101 8.8 4.801 2.301 5.8-1.899 17.5-1.8 22.3.3 15.7 9 19.2 26.4 29C448 416 436.9 422.3 412.4 432.9c-24.1 10.4 24.5-10.6 0 0z"></svg:path></svg:g>`,
})
export class IonSocialTuxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTwitchIcon],svg[ion-social-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm176 240h-48V143h48v129zm112 0h-48V143h48v129z" fill="currentColor"></svg:path>`,
})
export class IonSocialTwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialTwitterOutlineIcon],svg[ion-social-twitter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5-17.7-18.9-43-30.7-70.7-30.7-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-152-42.6-199.7-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.1 63.3 43.1 80.7C67 210.7 52 206.3 39 199v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.5 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.5 146 479 129 492 109.5zm-57.8 37.2l-7 5.1.4 8.6c.2 3.8.3 7.8.3 11.8 0 30.2-5.9 61.8-17 91.5-11.7 31.2-28.5 59.4-50 83.8-23 26.1-50.2 46.5-81.1 60.8-33.8 15.7-71.3 23.6-111.5 23.6-28.9 0-57.4-4.8-84.5-14.2 9.9-1.9 19.6-4.6 29.1-7.9 21.7-7.6 41.9-18.7 60.1-33l35.3-27.7-44.9-.8c-26.1-.5-49.7-13.4-64.3-33.9 7.3-.5 14.5-1.8 21.5-3.7l60.7-20.2-61.7-10.9c-29.6-5.9-52.8-27.9-61.3-55.8 7.8 2 15.4 2.8 23.9 3.3 0 0 31.8 1.4 55.8-.1-13-6.2-46.4-29.2-46.4-29.2-22.5-15.1-36-40.2-36-67.4 0-6.4.8-12.8 2.2-19 21.9 22.4 47 41.1 75.1 55.5 37 19.1 76.9 29.8 118.6 31.9l21.2 1.1-4.8-20.7c-1.4-5.9-2.1-12.1-2.1-18.5 0-44.4 36.3-80.7 80.9-80.7 22.3 0 43.8 9.3 59 25.6l6.1 6.5 8.7-1.7c4.5-.9 8.9-1.9 13.3-3.1-1 1.4-5.7 6.1-11 10.8-4.5 4-17.8 16.5-17.8 16.5s13 4.1 21.1 5c8.1.9 17.4-.6 18.9-.8-2.8 2.3-7.8 5.8-10.8 7.9z" fill="currentColor"></svg:path>`,
})
export class IonSocialTwitterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialUsdOutlineIcon],svg[ion-social-usd-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M220.746 102.625c-7.788 1.683-17.44 4.813-24.641 8.529-9.018 4.649-16.411 10.965-22.604 19.295-6.706 9.002-10.105 19.989-10.105 32.657 0 17.916 6.197 32.288 18.405 42.702 9.334 7.983 21.504 14.431 36.687 19.165L240 230.667V100.244s-8.234 0-19.254 2.381zM224 209.699c-12-3.743-23.912-9.088-32.051-16.048-8.621-7.355-12.673-17.534-12.673-30.545 0-9.241 2.414-16.94 7.004-23.102 4.58-6.161 9.912-11.038 16.88-14.631 6.18-3.189 13.84-5.565 20.84-7.138v91.464z" fill="currentColor"></svg:path><svg:path d="M348.217 296.725c-8.432-8.289-18.002-14.296-28.414-17.84-8.949-3.075-17.441-5.848-27.465-8.477L272 265.145v145.188s12.051-.642 18.371-1.476 10.703-1.971 16.67-3.798c12.727-3.89 23.309-9.02 31.32-15.25 8.678-6.747 15.145-14.785 19.164-23.907 3.775-8.595 5.706-17.581 5.706-26.711 0-18.369-5.043-32.655-15.014-42.466zm-5.315 62.746c-2.939 6.673-7.699 12.576-14.303 17.711-6.602 5.133-15.744 9.328-26.377 12.577-4.5 1.378-8.223 2.444-14.223 3.236v-107.11c10 2.624 18.18 5.332 26.326 8.131 8.062 2.744 15.748 7.443 22.537 14.116 6.785 6.676 10.309 17.03 10.309 31.06.001 6.85-1.337 13.605-4.269 20.279z" fill="currentColor"></svg:path><svg:path d="M411.387 303.256c-3.119-9.577-7.891-18.561-14.301-26.952-6.422-8.382-14.396-15.826-23.93-22.331-9.539-6.498-20.721-11.63-33.553-15.4-5.143-1.363-14.189-3.506-26.104-6.418-8.516-2.074-16.5-4.2-25.5-6.367V120.065c9 2.396 15.252 6.202 21.926 10.43C324.204 139.535 333.157 155 335.78 176h69.174c-.654-18-4.65-32.76-11.996-46.02-8.07-14.543-18.977-27.024-32.73-36.956-13.75-9.922-30.225-17.49-48.377-22.455C303.967 68.416 297 66.605 288 65.386V32h-64v33.167c-7 1.044-15.148 2.445-22.426 4.25-17.242 4.283-32.388 10.868-45.951 19.764-13.571 8.905-24.352 20.112-32.604 33.627-8.251 13.523-12.312 29.52-12.312 48 0 9.585 1.407 18.993 4.157 28.235 2.752 9.241 7.442 17.967 14.042 26.181 6.603 8.214 15.495 15.658 26.687 22.332 11.183 6.672 24.705 12.064 41.576 16.171 9.287 2.345 18.83 4.534 26.83 6.576v119.586c-11-2.919-21.889-7.399-30.678-13.479-9.17-6.327-16.066-13.953-21.198-23.884-4.779-9.229-7.073-20.526-7.407-32.526H96c.695 21 5.25 39.494 13.672 55.371 8.799 16.604 20.533 29.96 35.204 40.562 14.662 10.613 31.393 18.356 51.198 23.491 8.885 2.304 18.926 3.96 27.926 5.23V480h64v-34.54c10-1.069 18.957-2.69 28.527-4.879 18.701-4.273 35.645-11.036 50.316-20.276 14.662-9.24 26.621-21.128 35.611-35.681 8.98-14.541 13.545-32.085 13.545-52.619.001-9.578-1.501-19.164-4.612-28.749zm-22.483 72.962c-7.623 12.34-17.873 22.619-30.457 30.55-13.035 8.21-28.248 14.339-45.219 18.217-9.059 2.071-17.285 3.564-26.654 4.566L272 431.08V464h-32v-33.244l-13.508-1.943c-9.256-1.307-18.671-2.968-26.271-4.938-17.865-4.633-32.876-11.51-46.031-21.032-12.845-9.283-22.77-20.551-30.408-34.967-5.004-9.437-8.418-20.876-10.268-31.876h36.714c1.529 8 4.162 16.837 7.804 23.869 6.324 12.239 14.979 21.914 26.441 29.823 10.145 7.017 23.81 12.64 35.676 15.724S240 408.667 240 408.667V257.874l-11.786-3.074c-4.952-1.263-11.074-2.583-16.558-3.96-3.395-.854-6.814-1.729-10.37-2.626l-.033-.017-.051-.017c-14.952-3.64-27.533-8.472-37.411-14.365-9.487-5.657-17.021-11.92-22.399-18.611-5.271-6.56-9.029-13.533-11.17-20.722-2.307-7.755-3.476-15.721-3.476-23.675 0-15.66 3.274-28.636 10.002-39.665 7.097-11.622 16.187-20.973 27.786-28.585 12.201-8.003 25.666-13.764 41.155-17.611a211.776 211.776 0 0 1 19.926-3.954L240 78.958V48h32v31.363l13.127 1.877c7.371.999 14.236 2.404 22.637 4.699 16.389 4.482 30.91 11.189 43.023 19.929 11.691 8.443 21.182 19.333 28.133 31.862 3.805 6.865 6.504 14.27 8.137 22.27h-38.119c-5.078-19-15.352-33.637-30.172-43.021-9.254-5.861-17.561-9.215-27.373-12.251C281.766 101.75 272 101.25 272 101.25v137.142l12.529 2.951c7.631 1.837 14.184 3.644 21.453 5.415l3.92.938.812.19c11.373 2.78 19.651 4.799 24.558 6.096 11.084 3.275 20.8 7.721 28.851 13.204 8.078 5.513 14.895 11.853 20.236 18.828 5.291 6.925 9.264 14.393 11.801 22.179 2.562 7.898 3.863 15.91 3.863 23.812 0 17.39-3.74 32.266-11.119 44.213z" fill="currentColor"></svg:path>`,
})
export class IonSocialUsdOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialVimeoIcon],svg[ion-social-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M476.9 114c-5-23.4-17.5-38.8-40.6-46.3s-64.9-4.5-94.1 16.8c-29.9 21.8-47.6 59.7-53.8 83.8 14.7-6.3 24-7.7 39-6.9 15 .8 24.5 12 24.9 25.3.3 9.8-.2 18.7-3.6 27.7-10.8 28.7-27.7 56.5-47.6 80.8-2.9 3.6-6.4 6.9-10 9.9-10.2 8.3-18.8 6.1-25.4-5.2-5.4-9.3-9-18.9-12.2-29.1-12.4-39.7-16.8-80.9-23.8-121.6-3.3-19.5-7-39.8-18-56.9-11.6-17.8-28.6-24.6-50-22-14.7 1.8-36.9 17.5-47.8 26.4 0 0-56 46.9-81.8 71.4l21.2 27s17.9-12.5 27.5-18.3c5.7-3.4 12.4-4.1 17.2.2 4.5 3.9 9.6 9 12.3 14.1 5.7 10.7 11.2 21.9 14.7 33.4 13.2 44.3 25.5 88.7 37.8 133.3 6.3 22.8 13.9 44.2 28 63.6 19.3 26.6 39.6 32.7 70.9 21.5 25.4-9.1 46.6-26.2 66-43.9 33.1-30.2 59.1-65.4 85.5-101.2 20.4-27.7 37.3-55.7 51.4-87 13.9-31 19.4-63.5 12.3-96.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></svg:path>`,
})
export class IonSocialVimeoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialVimeoOutlineIcon],svg[ion-social-vimeo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M476.9 114c-5-23.4-17.5-38.8-40.6-46.3-7.4-2.4-16.7-3.7-26.9-3.7-21.7 0-47.4 6-67.2 20.5-29.9 21.8-47.6 59.7-53.8 83.8 12.2-5.3 20.8-7.1 31.9-7.1 2.2 0 4.6.1 7.1.2 15 .8 24.5 12 24.9 25.3.3 9.8-.2 18.7-3.6 27.7-10.8 28.7-27.7 56.5-47.6 80.8-2.9 3.6-6.4 6.9-10 9.9-4.1 3.4-8 5-11.6 5-5.2 0-9.9-3.5-13.8-10.2-5.4-9.3-9-18.9-12.2-29.1-12.4-39.7-16.8-80.9-23.8-121.6-3.3-19.5-7-39.8-18-56.9-10-15.4-24-22.6-41.5-22.6-2.8 0-5.6.2-8.6.5-14.7 1.8-36.9 17.5-47.8 26.4 0 0-56 46.9-81.8 71.4l21.2 27s17.9-12.5 27.5-18.3c2.9-1.8 6.1-2.8 9.2-2.8 2.9 0 5.7.9 8 3 4.5 3.9 9.6 9 12.3 14.1 5.7 10.7 11.2 21.9 14.7 33.4 13.2 44.3 25.5 88.7 37.8 133.3 6.3 22.8 13.9 44.2 28 63.6 13.2 18.2 26.9 26.8 44.3 26.8 8 0 16.8-1.8 26.6-5.4 25.4-9.1 46.6-26.2 66-43.9 33.1-30.2 59.1-65.4 85.5-101.2 20.4-27.7 37.3-55.7 51.4-87 14-30.8 19.5-63.3 12.4-96.6zM450 203.9c-13.3 29.4-29.1 56.2-49.7 84.1l-.3.4c-26.4 35.7-51.3 69.5-83.1 98.5-17.8 16.3-37.5 32.4-60.6 40.7-8.3 3-15.2 4.4-21.2 4.4-8.2 0-18.4-2.4-31.4-20.2-13.4-18.4-20.2-39-25.5-58.4-12.4-45.1-24.6-89.2-37.9-133.6-3.9-13.2-10.2-25.8-15.9-36.4-3.2-5.9-8.4-12-15.9-18.6-5.2-4.5-11.6-6.9-18.6-6.9-5.9 0-12 1.8-17.5 5.1-4.5 2.7-10.5 6.7-15.9 10.3l-2.8-3.6c26.9-24.4 68.3-59.1 70.3-60.8C138.8 96.8 155.8 87 163.5 86c2.3-.3 4.5-.4 6.6-.4 12.4 0 21.3 4.9 28.1 15.3 9.5 14.7 12.8 33.9 15.7 50.9 1.6 9.7 3.2 19.6 4.7 29.1 4.8 31.1 9.8 63.3 19.6 94.6 3 9.7 7 21.2 13.6 32.5 8.8 15 19.9 18.1 27.6 18.1 7.4 0 14.7-2.9 21.7-8.6 4.6-3.7 8.7-7.8 12.3-12.2 21.9-26.8 39.3-56.3 50.2-85.3 4.5-12 4.9-23.3 4.6-33.8-.6-22.4-17.4-39.6-40-40.9-2.9-.2-5.5-.2-8-.2-2.2 0-4.3.1-6.3.2 8.8-18.1 21.7-36.3 37.7-47.9 15-10.9 36.6-17.5 57.8-17.5 8.3 0 16.1 1 21.9 2.9 17 5.5 26 15.8 29.9 34.4 6 27.9 2.2 57-11.2 86.7z" fill="currentColor"></svg:path>`,
})
export class IonSocialVimeoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialWhatsappOutlineIcon],svg[ion-social-whatsapp-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" clip-rule="evenodd" d="M209.877 154.114c-4.258-11.323-9.176-10.515-12.45-10.639-3.277-.121-6.146-.061-10.573.011-3.746.061-9.882 1.026-15.232 6.413-5.357 5.378-20.366 18.312-21.404 45.725-1.031 27.408 18.08 54.643 20.749 58.455 2.667 3.826 36.494 63.236 92.719 87.67 56.231 24.427 56.525 16.981 66.84 16.435 10.325-.54 33.726-12.246 38.899-25.073 5.172-12.827 5.588-23.979 4.271-26.358-1.316-2.371-5-3.911-10.51-6.9-5.516-2.995-32.595-17.498-37.673-19.55-5.081-2.044-8.787-3.108-12.742 2.329-3.957 5.422-15.191 17.569-18.596 21.168-3.42 3.6-6.711 3.934-12.226.93-5.5-2.988-23.373-9.548-44.098-29.317-16.126-15.38-26.711-34.043-29.779-39.736-3.069-5.697-.02-8.604 2.9-11.269 2.618-2.407 5.857-6.301 8.792-9.449 2.919-3.148 3.949-5.43 5.961-9.083 2.007-3.645 1.2-6.932-.102-9.771-1.303-2.838-11.49-30.668-15.746-41.991z" fill="currentColor"></svg:path><svg:path d="M260.062 64c50.249 0 97.478 19.402 132.982 54.632C428.482 153.796 448 200.533 448 250.232c0 49.694-19.518 96.43-54.956 131.596-35.507 35.232-82.735 54.637-132.982 54.637-31.806 0-63.24-8.023-90.906-23.201l-12.017-6.593-13.063 4.149-61.452 19.522 19.375-57.149 4.798-14.151-7.771-12.763c-17.593-28.898-26.892-62.111-26.892-96.047 0-49.699 19.518-96.436 54.957-131.601C162.596 83.402 209.819 64 260.062 64m0-32C138.605 32 40.134 129.701 40.134 250.232c0 41.229 11.532 79.791 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32z" fill="currentColor"></svg:path>`,
})
export class IonSocialWhatsappOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialWindowsOutlineIcon],svg[ion-social-windows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 281v180.5l-216-31.3V281h216m16-16H232v179l248 36V265z" fill="currentColor"></svg:path><svg:path d="M200 281v142.2l-152-22V281h152m16-16H32v150l184 26.7V265z" fill="currentColor"></svg:path><svg:path d="M464 50v183H248V81.3l216-30.9M480 32L232 67.4V249h248V32z" fill="currentColor"></svg:path><svg:path d="M200 88v145H48V109.9l152-21.7m16-18.5L32 96v153h184V69.7z" fill="currentColor"></svg:path>`,
})
export class IonSocialWindowsOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialWordpressOutlineIcon],svg[ion-social-wordpress-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.9 64C150.2 64 64 150.2 64 256.1 64 361.9 150.2 448 255.9 448c8.5 0 16.8-.5 24.9-1.8 85.7-11 153.8-78.7 165.3-164.1 1.3-8.5 1.9-17.2 1.9-26C448 150.2 361.8 64 255.9 64zM83.4 256.1c0-25 5.4-48.8 15-70.2l82.3 225.5c-57.6-28-97.3-87.1-97.3-155.3zm194.9 171.2c-7.3.9-14.8 1.4-22.4 1.4-16.9 0-33.2-2.5-48.6-7.1l18.8-55h.1l32.7-95.5L312 416.5c.4.8.9 1.6 1.3 2.3-11.2 4-22.9 6.8-35 8.5zm1.5-252.2c10.4-.5 19.7-1.6 19.7-1.6 9.4-1 8.2-14.8-1.1-14.2 0 0-28 2.2-46 2.2-16.9 0-45.5-2.2-45.5-2.2-9.2-.6-10.4 13.7-1 14.2 0 0 8.7 1.1 18.1 1.6l26.9 73.7-37.8 113.3-62.9-187c10.5-.5 19.8-1.6 19.8-1.6 9.2-1 8.2-14.8-1.1-14.2 0 0-27.9 2.2-46 2.2-3.3 0-7.1-.1-11.1-.2 30.8-46.8 83.9-77.7 144.1-77.7 45 0 85.9 17.2 116.6 45.2-.8 0-1.5-.1-2.3-.1-17 0-29 14.8-29 30.7 0 14.2 8.2 26.2 16.9 40.4 6.6 11.5 14.3 26.3 14.3 47.6 0 14.8-4.4 33.4-13.1 55.7L342 360.7l-62.2-185.6zm62.9 230.2l13.7-39.7 39-112.8c9.9-24.6 13.1-44.3 13.1-61.8 0-6.3-.4-12.3-1.1-17.8 13.5 24.6 21.2 52.8 21.2 82.9 0 8-.5 15.8-1.5 23.5-7.4 53.7-39.5 99.6-84.4 125.7z" fill="currentColor"></svg:path>`,
})
export class IonSocialWordpressOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialYahooOutlineIcon],svg[ion-social-yahoo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M384.6 68.4c-11.3 0-22.5-.8-32.6-4.4l-96 160-96-160c-10.1 3.6-20.7 4.4-32 4.4-11.1 0-22.1-.9-32-4.4l128 212.7V448c10-3.5 20.8-4.4 32-4.4s22 .9 32 4.4V277L416 64c-9.9 3.4-20.3 4.4-31.4 4.4zM274.2 268.5l-2.2 4V428.2c-5-.6-11.2-.7-16-.7-4.8 0-10 .1-16 .7V272.3l-2.4-3.8L127 84.4h1c7.6 0 16-.3 24.7-1.9l89.8 149.8 13.4 22.8 14-22.9 89.8-149.9c9 1.6 17.6 1.7 24.8 1.7h.5L274.2 268.5z" fill="currentColor"></svg:path>`,
})
export class IonSocialYahooOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialYenOutlineIcon],svg[ion-social-yen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32zm-80 224v16h-67l-21 43v37h88v16h-88v96h-48v-96h-88v-16h88v-35.75L212 272h-68v-16h59.197l-12.752-23.605L90.829 48H134l122 240L378 48h43.18l-99.548 184.399L308.891 256H368z" fill="currentColor"></svg:path>`,
})
export class IonSocialYenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSocialYoutubeOutlineIcon],svg[ion-social-youtube-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z" fill="currentColor"></svg:path><svg:path d="M207 353.8V157.4l145 98.2-145 98.2z" fill="currentColor"></svg:path>`,
})
export class IonSocialYoutubeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSoupCanIcon],svg[ion-soup-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="80" rx="160" ry="64" fill="currentColor"></svg:ellipse><svg:path d="M256 440c88.365 0 152-28.654 152-64V248c0 28.581-41.612 52.783-104.26 61.002C301.238 333.16 280.82 352 256 352s-45.238-18.84-47.74-42.998C145.612 300.783 104 276.581 104 248v128c0 35.346 63.634 64 152 64z" fill="currentColor"></svg:path><svg:path d="M256 160c-88.366 0-160-28.654-160-64 0 0 0 32.834 8 40v96c0 28.732 42.049 53.042 105.25 61.134C214.176 271.861 233.229 256 256 256s41.824 15.861 46.75 37.134C365.951 285.042 408 260.732 408 232v-96c8-8.25 8-40 8-40 0 35.346-71.635 64-160 64z" fill="currentColor"></svg:path><svg:path d="M408 392c0 35.346-63.635 64-152 64-88.366 0-152-28.654-152-64v23.999L96 432c0 6.994 2.815 13.725 8 20.025C125.016 477.562 185.121 496 256 496s130.984-18.438 152-43.975c5.186-6.301 8-13.031 8-20.025l-8-16.001V392z" fill="currentColor"></svg:path>`,
})
export class IonSoupCanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSoupCanOutlineIcon],svg[ion-soup-can-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M255.82 144c88.269 0 159.824-28.654 159.824-64S344.089 16 255.82 16C167.552 16 95.997 44.654 95.997 80s71.555 64 159.823 64zm0-110.959c69.729 0 126.26 19.234 126.26 42.959s-56.531 42.959-126.26 42.959c-69.729 0-126.258-19.234-126.258-42.959s56.529-42.959 126.258-42.959z" fill="currentColor"></svg:path><svg:path d="M256.57 160c-88.269 0-160.567-28.654-160.567-64 0 0-.003 33.999 7.997 40v240c0 35.346 63.732 64 152 64 88.269 0 152-28.654 152-64V136c8-7.438 7.708-34.853 7.817-40-1.152 34.946-71.701 64-159.247 64zM376 375.588c0 2.232-7.961 10.682-29.423 18.688-23.724 8.85-55.765 13.724-90.304 13.724s-66.83-4.874-90.554-13.725C144.257 386.27 137 377.82 136 375.588v-79.564c18 9.721 42.742 17.115 72.156 20.979l1.588.237c5.743 20.068 24.192 34.76 46.082 34.76s40.338-14.689 46.084-34.754l1.755-.244C333.08 313.139 358 305.744 376 296.023v79.565zm0-111.565c-18 9.831-43.476 17.284-73.325 21.11l-2.61.195C292.791 268.097 275.723 256 255.859 256c-19.867 0-36.919 12.102-44.19 29.34l-2.514-.206c-29.85-3.826-55.155-11.279-73.155-21.11v-91.265C170 185.25 211.923 192 256.499 192 300.665 192 343 185.287 376 173.045v90.978z" fill="currentColor"></svg:path><svg:path d="M256.272 464c.293 0 .583-.006.876-.007-.351.001-.699.005-1.051.005l.175.002z" fill="currentColor"></svg:path><svg:path d="M408 415.999V400c0 36.001-63.432 64-152 64-88.569 0-152-28.654-152-64v15.999L96.261 432c0 6.994 2.938 13.725 8.117 20.025C125.37 477.562 185.471 496 256.273 496c70.801 0 130.87-18.438 151.863-43.975 5.18-6.301 7.923-13.031 7.923-20.025L408 415.999z" fill="currentColor"></svg:path>`,
})
export class IonSoupCanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSparklesIcon],svg[ion-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256"></svg:path>`,
})
export class IonSparklesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSparklesOutlineIcon],svg[ion-sparkles-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M259.92 262.91L216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17M108 68L88 16L68 68L16 88l52 20l20 52l20-52l52-20zm318.67 49.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144z"></svg:path>`,
})
export class IonSparklesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSparklesSharpIcon],svg[ion-sparkles-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208 512l-52.38-139.62L16 320l139.62-52.38L208 128l52.38 139.62L400 320l-139.62 52.38ZM88 176l-23.57-64.43L0 88l64.43-23.57L88 0l23.57 64.43L176 88l-64.43 23.57Zm312 80l-31.11-80.89L288 144l80.89-31.11L400 32l31.11 80.89L512 144l-80.89 31.11Z"></svg:path>`,
})
export class IonSparklesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeakerphoneIcon],svg[ion-speakerphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M70.9 181.5c0-41 25-76.5 60.6-91.5h-7.7c-41.1 0-75.1 32.8-81.1 75.2-6 1-10.7 7.9-10.7 16.1 0 8.6 5.1 15.4 11.6 15.9 7.2 36.4 35.1 65.8 69.7 68.8h.1c1.4 0 2.8.6 4.2.9 1.1.2 2.2.4 3.3.7-29.9-17.1-50-49.2-50-86.1z" fill="currentColor"></svg:path><svg:path d="M465.1 91c-1.1-2.9-2.3-5.6-3.5-8.3-6.5-14.4-14.4-26-23.4-34.6C427 37.6 414.1 32 400.8 32c-8.3 0-16.4 2.2-24.1 6.4h-.1c-1.2.7-2.4 1.3-3.6 2-49 29-104.1 46.2-162.6 49.4-6.5.4-13 .2-19.5.2h-42.3c-34 15-59 50.5-59 91.5 0 36.8 19.2 69.1 47.8 86.1 13 10.9 41.7 11.7 40 23.9-1.9 13.2-5.5 21.9-7.8 30.7-1.3 4.8-23.6 72.9-25.3 144.7 0 2 0 3.7.2 6.6.2 2.9 2.2 6.4 8.5 6.4h76.8c6.6 0 9.7-3.3 9.3-9.3-.2-1.9-.6-4.3-.8-6.5-2.4-23.1-4.6-49.8-3.3-81.6 1.3-34 5.2-51.9 7-61.3 2.1-10.4 7.6-22.4 12.1-30.3 30.8.9 92.9 19.3 115.1 28.9 0 0 7.2 3.4 10.1 5.2 7 3.4 14.2 5.1 21.6 5.1.9 0 1.8 0 2.7-.1 12.3-.7 24.2-9.7 34.7-19.5 9.1-8.5 16.9-20.2 23.4-34.6 1.2-2.8 2.4-5.6 3.5-8.6 9.6-25 14.8-55.9 14.8-88.1 0-32.2-5.2-63.2-14.9-88.2zM442 267.5c-7.8 18.5-18.2 33.3-29.5 33.3s-21.6-14.7-29.4-33.3c-9.1-21.6-14.9-53.1-14.9-88.1 0-35.2 5.8-66.8 15-88.4 7.8-18.4 18.1-29.5 29.3-29.5 11.3 0 21.5 11.2 29.4 29.5 9.2 21.6 15 53.2 15 88.4 0 35-5.8 66.5-14.9 88.1z" fill="currentColor"></svg:path>`,
})
export class IonSpeakerphoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeedometerIcon],svg[ion-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.7 118.25A240 240 0 0 0 76.32 447l.18.2c.33.35.64.71 1 1.05c.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0 0 60.36-.42a157.13 157.13 0 0 1 231.26 0a41.18 41.18 0 0 0 60.65.06l3.21-3.5l.18-.2a239.93 239.93 0 0 0-10-328.76ZM240 128a16 16 0 0 1 32 0v32a16 16 0 0 1-32 0ZM128 304H96a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32m48.8-95.2a16 16 0 0 1-22.62 0l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1 0 22.62m149.3 23.1l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14m31.72-23.1a16 16 0 0 1-22.62-22.62l22.62-22.63a16 16 0 0 1 22.63 22.63ZM416 304h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonSpeedometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeedometerOutlineIcon],svg[ion-speedometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m326.1 231.9l-47.5 75.5a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0a10.06 10.06 0 0 1 2.3 14"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1a173.13 173.13 0 0 1 254.8 0a25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32m160 128h-32m-256 0H96m69.49-90.51l-22.63-22.63m203.65 22.63l22.63-22.63"></svg:path>`,
})
export class IonSpeedometerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpeedometerSharpIcon],svg[ion-speedometer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0 0 60.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 0 0 496 290.56C496 156.55 388.54 48 256 48m-16 64h32v64h-32Zm-96 192H80v-32h64Zm21.49-83.88l-45.25-45.26l22.62-22.62l45.26 45.25ZM278.6 307.4a31 31 0 0 1-7 7a30.11 30.11 0 0 1-35-49L320 224Zm45.28-109.91l45.26-45.25l22.62 22.62l-45.25 45.26ZM432 304h-64v-32h64Z"></svg:path>`,
})
export class IonSpeedometerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSpoonIcon],svg[ion-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M320 160c0-64-26.5-128-64-128s-64 64-64 128c.9 25 15.7 54.3 36.6 64.3.5.2.9.4 1.4.6h.1c3.4 1.9 9.8 5.5 9.8 9.7 0 0-16 198.7-16 210.1s5 20.5 10.5 26 13.1 9.2 21.3 9.2h.4c8.2 0 15.8-3.7 21.4-9.2 5.5-5.5 10.3-12.9 10.3-26s-16-210.1-16-210.1c0-4.2 6.4-7.9 9.8-9.8l1.7-.9C304.9 214 320 186 320 160" fill="currentColor"></svg:path>`,
})
export class IonSpoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSquareIcon],svg[ion-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48"></svg:path>`,
})
export class IonSquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSquareOutlineIcon],svg[ion-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 448H96a32.09 32.09 0 0 1-32-32V96a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v320a32.09 32.09 0 0 1-32 32"></svg:path>`,
})
export class IonSquareOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSquareSharpIcon],svg[ion-square-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48h416v416H48z"></svg:path>`,
})
export class IonSquareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarIcon],svg[ion-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"></svg:path>`,
})
export class IonStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarHalfIcon],svg[ion-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class IonStarHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarHalfOutlineIcon],svg[ion-star-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path><svg:path fill="currentColor" d="M256 48v316L118 464l54-160l-140-96h172z"></svg:path>`,
})
export class IonStarHalfOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarHalfSharpIcon],svg[ion-star-half-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3ZM274.63 347.82L256 334.49v-200.1l26 78.91l7.24 22h105.39l-67.32 47.2l-19.69 13.81l7.78 22.75l26.26 76.75Z"></svg:path>`,
})
export class IonStarHalfSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarOutlineIcon],svg[ion-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"></svg:path>`,
})
export class IonStarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStarSharpIcon],svg[ion-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4l-58.5 171.3L256 373.84L404.29 480l-58.61-171.3Z"></svg:path>`,
})
export class IonStarSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsBarsIcon],svg[ion-stats-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M176 96h64v320h-64z" fill="currentColor"></svg:path><svg:path d="M80 320h64v96H80z" fill="currentColor"></svg:path><svg:path d="M272 256h64v160h-64z" fill="currentColor"></svg:path><svg:path d="M368 192h64v224h-64z" fill="currentColor"></svg:path>`,
})
export class IonStatsBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsChartIcon],svg[ion-stats-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 496H72a24 24 0 0 1-24-24V328a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24m224 0h-32a24 24 0 0 1-24-24V232a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v240a24 24 0 0 1-24 24m112 0h-32a24 24 0 0 1-24-24V120a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v352a24 24 0 0 1-24 24m-224 0h-32a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v432a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonStatsChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsChartOutlineIcon],svg[ion-stats-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="48" height="160" x="64" y="320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="256" x="288" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="368" x="400" y="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect><svg:rect width="48" height="448" x="176" y="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="8" ry="8"></svg:rect>`,
})
export class IonStatsChartOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStatsChartSharpIcon],svg[ion-stats-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 496H48V304h80Zm224 0h-80V208h80Zm112 0h-80V96h80Zm-224 0h-80V16h80Z"></svg:path>`,
})
export class IonStatsChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSteamIcon],svg[ion-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 208.2c0 20.5-16.6 37.2-37.2 37.2-20.5 0-37.2-16.6-37.2-37.2 0-20.5 16.6-37.2 37.2-37.2 20.5 0 37.2 16.7 37.2 37.2zM442.6 139c-38.1 0-69 30.7-69.4 68.7l-43.2 62c-1.8-.2-3.6-.3-5.4-.3-9.7 0-18.7 2.7-26.4 7.3L102.4 198c-5.1-23.2-25.9-40.7-50.6-40.7C23.3 157.2 0 180.6 0 209.1c0 28.5 23.3 51.8 51.8 51.8 9.7 0 18.7-2.7 26.4-7.3L274 332.2c5.1 23.3 25.8 40.8 50.6 40.8 26.8 0 49-20.6 51.5-46.7l66.5-48.6c38.3 0 69.4-31 69.4-69.3S480.9 139 442.6 139zm0 22.9c25.7 0 46.5 20.9 46.5 46.5 0 25.7-20.9 46.4-46.5 46.4-25.7 0-46.5-20.8-46.5-46.4 0-25.7 20.8-46.5 46.5-46.5zm-390.8 9c14.6 0 27.3 8.2 33.7 20.2l-18.9-7.6v.1c-15.3-5.5-32.2 2-38.3 17.1-6.1 15.2.9 32.3 15.7 38.9v.1l16.1 6.4c-2.6.6-5.4.9-8.2.9-21.1 0-38.1-17-38.1-38.1-.1-20.9 16.9-38 38-38zm272.8 112.2c21.1 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-14.7 0-27.4-8.2-33.7-20.3 6.3 2.5 12.5 5 18.8 7.6 15.5 6.2 33.2-1.3 39.4-16.8 6.2-15.5-1.3-33.1-16.9-39.4l-15.9-6.4c2.8-.5 5.5-.9 8.3-.9z" fill="currentColor"></svg:path>`,
})
export class IonSteamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopIcon],svg[ion-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40"></svg:path>`,
})
export class IonStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopCircleIcon],svg[ion-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 262.4a25.62 25.62 0 0 1-25.6 25.6H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6Z"></svg:path>`,
})
export class IonStopCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopCircleOutlineIcon],svg[ion-stop-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="currentColor" d="M310.4 336H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6v108.8a25.62 25.62 0 0 1-25.6 25.6"></svg:path>`,
})
export class IonStopCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopCircleSharpIcon],svg[ion-stop-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 288H176V176h160Z"></svg:path>`,
})
export class IonStopCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopOutlineIcon],svg[ion-stop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="320" height="320" x="96" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="24" ry="24"></svg:rect>`,
})
export class IonStopOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopSharpIcon],svg[ion-stop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 80h352v352H80z"></svg:path>`,
})
export class IonStopSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopwatchIcon],svg[ion-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="272" r="16" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M280 81.5V72a24 24 0 0 0-48 0v9.5a191 191 0 0 0-84.43 32.13L137 103a24 24 0 0 0-34 34l8.6 8.6A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V152a16 16 0 0 1 32 0v74.75A48 48 0 0 1 256 320"></svg:path>`,
})
export class IonStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopwatchOutlineIcon],svg[ion-stopwatch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 232v-80"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 88V72m-124 60l-12-12"></svg:path><svg:circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96Z"></svg:path>`,
})
export class IonStopwatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStopwatchSharpIcon],svg[ion-stopwatch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280 81.5V48h-48v33.5a191 191 0 0 0-84.43 32.13L120 86l-34 34l25.59 25.59A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5M256 320a48 48 0 0 1-16-93.25V136h32v90.75A48 48 0 0 1 256 320"></svg:path>`,
})
export class IonStopwatchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStorefrontIcon],svg[ion-storefront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 448h-12a4 4 0 0 1-4-4V273.51a4 4 0 0 0-5.24-3.86a105 105 0 0 1-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.2 108.2 0 0 1-52.85-13.64a8.23 8.23 0 0 0-8 0a108.2 108.2 0 0 1-52.84 13.64a106.1 106.1 0 0 1-52.46-13.79a8.21 8.21 0 0 0-8.09 0a108.14 108.14 0 0 1-53.16 13.8a106.2 106.2 0 0 1-52.77-14a8.25 8.25 0 0 0-8.16 0a106.2 106.2 0 0 1-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a105 105 0 0 1-29.28-5.09a4 4 0 0 0-5.23 3.8V444a4 4 0 0 1-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0 0 32 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 0 0 480 448m-256-68a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4v-64a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12Zm156 68h-72a4 4 0 0 1-4-4V316a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v128a4 4 0 0 1-4 4m112.57-277.72l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78c.05.06.09.13.14.2l5 6.05a8 8 0 0 0 .6.65l5 4.83l.42.36a69.7 69.7 0 0 0 9.39 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31l.33-.31a7.94 7.94 0 0 1 10.89 0l.33.31a77.3 77.3 0 0 0 104.46 0a8 8 0 0 1 10.87 0a77.31 77.31 0 0 0 104.21.23a7.88 7.88 0 0 1 10.71 0a76.8 76.8 0 0 0 52.31 20.08h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.3 71.3 0 0 0 488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42"></svg:path>`,
})
export class IonStorefrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStorefrontOutlineIcon],svg[ion-storefront-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 448V240m-384 0v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23c0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48M32 464h448M136 288h80a24 24 0 0 1 24 24v88h0h-128h0v-88a24 24 0 0 1 24-24m152 176V312a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v152"></svg:path>`,
})
export class IonStorefrontOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionStorefrontSharpIcon],svg[ion-storefront-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 448V267.85a104.8 104.8 0 0 1-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 0 1-56.86-16a108 108 0 0 1-56.85 16a106.16 106.16 0 0 1-56.51-16.2a107.84 107.84 0 0 1-57.2 16.2a106.14 106.14 0 0 1-56.85-16.42a106.14 106.14 0 0 1-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.7 104.7 0 0 1 48 267.49V448H16v32h480v-32Zm-240-64h-96v-76a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4Zm160 64h-80V308a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm108.57-277.72L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37c.1.13.19.27.28.4l5.24 6.39l5.31 5.14l.42.36a69.7 69.7 0 0 0 9.44 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31a72 72 0 0 0 5.77-6a74 74 0 0 0 5.78 6a76.08 76.08 0 0 0 51.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 0 1 .15 0l5.66 5.26a76.1 76.1 0 0 0 51.9 20.31c23.29 0 44.11-10 57.66-25.61c13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.3 71.3 0 0 0 488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89"></svg:path>`,
})
export class IonStorefrontSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSubwayIcon],svg[ion-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 16H160a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h192a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64M208 64h96a16 16 0 0 1 0 32h-96a16 16 0 0 1 0-32m-32 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32m160 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-160a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16Zm-36.69 228.69a16 16 0 0 0-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 0 0-22.62-22.62l-48 48a16 16 0 1 0 22.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62Z"></svg:path>`,
})
export class IonSubwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSubwayOutlineIcon],svg[ion-subway-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="352" x="112" y="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 80h96"></svg:path><svg:rect width="288" height="96" x="112" y="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:circle cx="176" cy="320" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:circle cx="336" cy="320" r="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M144 464h224m-32-32l48 48m-208-48l-48 48"></svg:path>`,
})
export class IonSubwayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSubwaySharpIcon],svg[ion-subway-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M392 16H120a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 208 64m-28.53 287.82a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35m160 0a32 32 0 1 1 28.35-28.35a32 32 0 0 1-28.35 28.35M384 144v64H128v-64Zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416z"></svg:path>`,
})
export class IonSubwaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSunnyIcon],svg[ion-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44M108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45M464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56M142.86 164.86a21.9 21.9 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"></svg:path>`,
})
export class IonSunnyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSunnyOutlineIcon],svg[ion-sunny-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"></svg:path><svg:circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle>`,
})
export class IonSunnyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSunnySharpIcon],svg[ion-sunny-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054l31.113 31.113l-65.054 65.054zM77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.053zM394 234h92v44h-92zm-368 0h92v44H26zm312.028 135.14l31.113-31.113l65.054 65.054l-31.113 31.112zM77.802 108.92l31.113-31.113l65.053 65.054l-31.112 31.113zM256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"></svg:path>`,
})
export class IonSunnySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapHorizontalIcon],svg[ion-swap-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class IonSwapHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapHorizontalOutlineIcon],svg[ion-swap-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class IonSwapHorizontalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapHorizontalSharpIcon],svg[ion-swap-horizontal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m304 48l112 112l-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></svg:path>`,
})
export class IonSwapHorizontalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapVerticalIcon],svg[ion-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class IonSwapVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapVerticalOutlineIcon],svg[ion-swap-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class IonSwapVerticalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSwapVerticalSharpIcon],svg[ion-swap-vertical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M464 208L352 96L240 208m112-94.87V416M48 304l112 112l112-112m-112 94V96"></svg:path>`,
})
export class IonSwapVerticalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncIcon],svg[ion-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class IonSyncIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncCircleIcon],svg[ion-sync-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m83.69 282.65a112.24 112.24 0 0 1-195-61.29a16 16 0 0 1-20.13-24.67l23.6-23.6a16 16 0 0 1 22.37-.25l24.67 23.6a16 16 0 0 1-18 26a80.25 80.25 0 0 0 138.72 38.83a16 16 0 0 1 23.77 21.41Zm47.76-63.34l-23.6 23.6a16 16 0 0 1-22.37.25l-24.67-23.6a16 16 0 0 1 17.68-26.11A80.17 80.17 0 0 0 196 202.64a16 16 0 1 1-23.82-21.37a112.17 112.17 0 0 1 194.88 61.57a16 16 0 0 1 20.39 24.47"></svg:path>`,
})
export class IonSyncCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncCircleOutlineIcon],svg[ion-sync-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M351.82 271.87v-16A96.15 96.15 0 0 0 184.09 192m-24.2 48.17v16A96.22 96.22 0 0 0 327.81 320"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m135.87 256l23.59-23.6l24.67 23.6m192 0l-23.59 23.6l-24.67-23.6"></svg:path>`,
})
export class IonSyncCircleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncCircleSharpIcon],svg[ion-sync-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m0 320a112.19 112.19 0 0 1-111.27-98.23l-8.86 8.86L113.24 256l46-46l47.55 45.48l-22.12 23.12l-7.2-6.88a80.26 80.26 0 0 0 138.48 37.5l23.77 21.41A112.82 112.82 0 0 1 256 368m96.79-66l-47.55-45.5l22.12-23.12l6.86 6.55A80.2 80.2 0 0 0 196 202.64l-23.82-21.37A112.18 112.18 0 0 1 367 242.49l9.11-9.12L398.76 256Z"></svg:path>`,
})
export class IonSyncCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncOutlineIcon],svg[ion-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class IonSyncOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionSyncSharpIcon],svg[ion-sync-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m32 256l44-44l46 44m358 0l-44 44l-46-44"></svg:path>`,
})
export class IonSyncSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletLandscapeIcon],svg[ion-tablet-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64V128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64M32 384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32Z"></svg:path><svg:path fill="currentColor" d="M0 128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64zm480 256V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32m-16 0a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16z"></svg:path>`,
})
export class IonTabletLandscapeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletLandscapeOutlineIcon],svg[ion-tablet-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="480" x="80" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48" transform="rotate(-90 256 256)"></svg:rect>`,
})
export class IonTabletLandscapeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletLandscapeSharpIcon],svg[ion-tablet-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82m448 330H64V100h384Z"></svg:path>`,
})
export class IonTabletLandscapeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletPortraitIcon],svg[ion-tablet-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 512H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64h256a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64M128 32a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Z"></svg:path><svg:path fill="currentColor" d="M384 0a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64zM128 480h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H128a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32m0-16a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v384a16 16 0 0 1-16 16Z"></svg:path>`,
})
export class IonTabletPortraitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletPortraitOutlineIcon],svg[ion-tablet-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="352" height="480" x="80" y="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect>`,
})
export class IonTabletPortraitOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTabletPortraitSharpIcon],svg[ion-tablet-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M100 448V64h312v384Z"></svg:path>`,
})
export class IonTabletPortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTelescopeIcon],svg[ion-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.7 39.7 0 0 0-18.8 24.91a40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86Z"></svg:path><svg:path fill="currentColor" d="M382.84 440.8L288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28a34.8 34.8 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28c9.59 16.75 19.24 33.88 26.34 38.15c4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4Zm107.37-325.06L444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.7 39.7 0 0 0-18.65 24.28a32.8 32.8 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89c13.58 23.73 28.91 50.48 36.93 56.27a40.2 40.2 0 0 0 23.18 7.37a39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84a41 41 0 0 0-4.58-30.49"></svg:path>`,
})
export class IonTelescopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTelescopeOutlineIcon],svg[ion-telescope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m39.93 327.56l-4.71-8.13A24 24 0 0 1 44 286.64l86.87-50.07a16 16 0 0 1 21.89 5.86l12.71 22a16 16 0 0 1-5.86 21.85l-86.85 50.07a24.06 24.06 0 0 1-32.83-8.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M170.68 273.72L147.12 233a24 24 0 0 1 8.8-32.78l124.46-71.75a16 16 0 0 1 21.89 5.86l31.57 54.59a16 16 0 0 1-5.84 21.84L203.51 282.5a24 24 0 0 1-32.83-8.78m171.17-71.51l-46.51-80.43a24 24 0 0 1 8.8-32.78l93.29-53.78A24.07 24.07 0 0 1 430.27 44l46.51 80.43a24 24 0 0 1-8.8 32.79L374.69 211a24.06 24.06 0 0 1-32.84-8.79M127.59 480l96.14-207.99m48.07-15.99L368.55 448"></svg:path>`,
})
export class IonTelescopeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTelescopeSharpIcon],svg[ion-telescope-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.41 292.9l44.82 76.97l98.14-56.38l-44.73-77.37z"></svg:path><svg:path fill="currentColor" d="m287.87 252.34l23.67-13.81l-63.42-110l-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25l23.24-13.4L358 464h36ZM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151L424.07 1.41Z"></svg:path>`,
})
export class IonTelescopeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTennisballIcon],svg[ion-tennisball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256a192.6 192.6 0 0 0 32-2.68A224 224 0 0 0 258.68 32A192.6 192.6 0 0 0 256 64c0 105.87 86.13 192 192 192M253.35 480c.94-5.67 1.65-11.4 2.09-17.18c.37-4.88.56-9.86.56-14.79c0-105.87-86.13-192-192-192a192.6 192.6 0 0 0-32 2.68A224 224 0 0 0 253.35 480"></svg:path><svg:path fill="currentColor" d="M289.61 222.39A222.53 222.53 0 0 1 224 64a226 226 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226 226 0 0 1 30-2a222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226 226 0 0 1-30 2a222.53 222.53 0 0 1-158.39-65.61"></svg:path>`,
})
export class IonTennisballIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTennisballOutlineIcon],svg[ion-tennisball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.43 271.44c-5.09.37-8.24.56-13.43.56c-114.88 0-208-93.12-208-208c0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208c0 5.38-.61 14-.61 14"></svg:path>`,
})
export class IonTennisballOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTennisballSharpIcon],svg[ion-tennisball-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246.4 480a181 181 0 0 0 3.22-22.86c.35-4.61.53-9.31.53-14c0-100-81.34-181.32-181.32-181.32A181.7 181.7 0 0 0 32 265.61A224.2 224.2 0 0 0 246.4 480"></svg:path><svg:path fill="currentColor" d="M284.63 227.37A222.73 222.73 0 0 1 219 68.83a227 227 0 0 1 2.62-34.42A224.41 224.41 0 0 0 34.41 221.58A227 227 0 0 1 68.83 219a222.73 222.73 0 0 1 158.54 65.67A222.73 222.73 0 0 1 293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 0 0 187.24-187.18a227 227 0 0 1-34.42 2.58a222.73 222.73 0 0 1-158.54-65.63"></svg:path><svg:path fill="currentColor" d="M443.17 250.15a181.7 181.7 0 0 0 36.83-3.76A224.2 224.2 0 0 0 265.61 32a181.7 181.7 0 0 0-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32"></svg:path>`,
})
export class IonTennisballSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTerminalIcon],svg[ion-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432 32H80a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h352a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64M96 256a16 16 0 0 1-10-28.49L150.39 176L86 124.49a16 16 0 1 1 20-25l80 64a16 16 0 0 1 0 25l-80 64A16 16 0 0 1 96 256m160 0h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonTerminalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTerminalOutlineIcon],svg[ion-terminal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="416" x="32" y="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m96 112l80 64l-80 64m96 0h64"></svg:path>`,
})
export class IonTerminalOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTerminalSharpIcon],svg[ion-terminal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12m57.51 193.5l76.88-61.5l-76.88-61.5l20-25l108.1 86.5L93.5 262.49ZM272 256h-96v-32h96Z"></svg:path>`,
})
export class IonTerminalSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTextIcon],svg[ion-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m292.6 407.78l-120-320a22 22 0 0 0-41.2 0l-120 320a22 22 0 0 0 41.2 15.44l36.16-96.42a2 2 0 0 1 1.87-1.3h122.74a2 2 0 0 1 1.87 1.3l36.16 96.42a22 22 0 0 0 41.2-15.44m-185.84-129l43.37-115.65a2 2 0 0 1 3.74 0l43.37 115.67a2 2 0 0 1-1.87 2.7h-86.74a2 2 0 0 1-1.87-2.7ZM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0 0 40.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6c32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 0 1-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8c-54.75 6.44-87.43 36.29-87.43 79.85c0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1 0 44 .19v-143c0-56.18-45-102.56-101.23-102.97M380 394.5c-17.53 0-38-9.43-38-36c0-10.67 3.83-18.14 12.43-24.23c8.37-5.93 21.2-10.16 36.14-11.92c21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 0 1 2 2.1C455 370.1 429.46 394.5 380 394.5"></svg:path>`,
})
export class IonTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTextOutlineIcon],svg[ion-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m32 415.5l120-320l120 320m-42-112H74m252-64c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 358.5c0 36 26.86 58 60 58c54 0 100-27 100-106v-15c-20 0-58 1-92 5c-32.77 3.86-68 19-68 58"></svg:path>`,
})
export class IonTextOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTextSharpIcon],svg[ion-text-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18l6.56-15.22c8.9-21 29.91-34.55 53.53-34.55c34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84c-54.52 6.43-87.06 36.23-87.06 79.72c0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170m-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37c0-10.65 3.82-18.11 12.38-24.19c8.34-5.92 21.12-10.15 36-11.9c21.78-2.57 46.31-3.95 67-4.52c-2.16 51.49-27.57 76.98-77.53 76.98m-291.26-69.2h125.5L260.94 438H308L155 48L4 438h47.06ZM156 160.71L202.25 282h-92.5Z"></svg:path>`,
})
export class IonTextSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThermometerIcon],svg[ion-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 0 0-65 64v207.13a8 8 0 0 1-3.18 6.37A113.48 113.48 0 0 0 144 384a112 112 0 0 0 224 0a113.48 113.48 0 0 0-44.82-90.45a8 8 0 0 1-3.18-6.37M254.07 432a48 48 0 0 1-22-89.54a16 16 0 0 0 8-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 112v216.58a16.18 16.18 0 0 0 8.15 13.94A48 48 0 0 1 254.07 432"></svg:path>`,
})
export class IonThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThermometerOutlineIcon],svg[ion-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M307.72 302.27a8 8 0 0 1-3.72-6.75V80a48 48 0 0 0-48-48h0a48 48 0 0 0-48 48v215.52a8 8 0 0 1-3.71 6.74a97.51 97.51 0 0 0-44.19 86.07A96 96 0 0 0 352 384a97.49 97.49 0 0 0-44.28-81.73ZM256 112v272"></svg:path><svg:circle cx="256" cy="384" r="48" fill="currentColor"></svg:circle>`,
})
export class IonThermometerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThermometerSharpIcon],svg[ion-thermometer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0a113.39 113.39 0 0 0-48-92.76M256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432"></svg:path>`,
})
export class IonThermometerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsDownIcon],svg[ion-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.94 178l144.16 6.12c4.61.36 23.9 1.22 23.9 25.88c0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32m141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54M90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32m-34.36 71.5l126.4 6.22c9.39.63 25.81 3 25.81 26.36c0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58"></svg:path><svg:path fill="none" d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.9 15.9 0 0 0-7.51 1.91Zm-40.59 69.29l-.13.22a3 3 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62c-3.47 7.06-13.34 26.51-33.82 62"></svg:path><svg:path fill="currentColor" d="m372.66 279.16l-1 2a16.3 16.3 0 0 1 6.77-7.26a16.5 16.5 0 0 0-5.77 5.26"></svg:path><svg:path fill="currentColor" d="M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0 0 14.31-8.85c3-6.06 15.25-24 28.19-42.9c18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.5 16.5 0 0 1 5.79-5.23A15.9 15.9 0 0 1 386 272h25.32A84.7 84.7 0 0 0 496 187.3v-38.6A84.7 84.7 0 0 0 411.31 64h-48.79a17.46 17.46 0 0 1-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 0 0-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.2 61.2 0 0 1-5.19 24.77a17.38 17.38 0 0 0 0 14.06a63.8 63.8 0 0 1 0 50.39a17.32 17.32 0 0 0 0 14a62.13 62.13 0 0 1 0 49.58a18.13 18.13 0 0 0 0 14.68A60.4 60.4 0 0 1 224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 0 0-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 0 1 .86 11.57c-3 19.35-9.67 36.3-16.74 54.16c-3.08 7.78-6.27 15.82-9.22 24.27c-6.14 17.56-4.3 35.2 5.05 48.38"></svg:path>`,
})
export class IonThumbsDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsDownOutlineIcon],svg[ion-thumbs-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 53.84S208 48 256 48s74 16 96 32h64a64 64 0 0 1 64 64v48a64 64 0 0 1-64 64h-30a32.34 32.34 0 0 0-27.37 15.4S350 290.19 324 335.22S248 448 240 464c-29 0-43-22-34-47.71c10.28-29.39 23.71-54.38 27.46-87.09c.54-4.78-3.14-12-8-12L96 307"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m96 241l80 2c20 1.84 32 12.4 32 30s-14 28.84-32 30l-80 4c-17.6 0-32-16.4-32-34v-.17A32 32 0 0 1 96 241Zm-32-65l112 2c18 .84 32 12.41 32 30c0 17.61-14 28.86-32 30l-112 2a32.1 32.1 0 0 1-32-32a32.1 32.1 0 0 1 32-32Zm48-128l64 3c21 1.84 32 11.4 32 29s-14.4 30-32 30l-64 2a32.09 32.09 0 0 1-32-32a32.09 32.09 0 0 1 32-32Zm-32 64l96 2c19 .84 32 12.4 32 30s-13 28.84-32 30l-96 2a32.09 32.09 0 0 1-32-32a32.09 32.09 0 0 1 32-32Z"></svg:path>`,
})
export class IonThumbsDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsDownSharpIcon],svg[ion-thumbs-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m56 320l156.05 12l-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 0 0 4.4-1.72l129-202.34a8 8 0 0 1 6.81-3.81H496V64H378.39a48 48 0 0 1-15.18-2.46l-76.3-25.43a80 80 0 0 0-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40"></svg:path><svg:path fill="none" d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.9 15.9 0 0 0-7.51 1.91Zm-40.59 69.29l-.13.22a3 3 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62c-3.47 7.06-13.34 26.51-33.82 62"></svg:path><svg:path fill="currentColor" d="m372.66 279.16l-1 2a16.3 16.3 0 0 1 6.77-7.26a16.5 16.5 0 0 0-5.77 5.26"></svg:path>`,
})
export class IonThumbsDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsUpIcon],svg[ion-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m472.06 334l-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87c0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32M330.61 202.33L437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55M421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01m34.36-71.5l-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37c0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58Z"></svg:path><svg:path fill="none" d="M133.55 238.06A15.85 15.85 0 0 1 126 240a15.8 15.8 0 0 0 7.51-1.92Zm40.59-69.28l.13-.23zc-20.5 35.51-30.36 54.95-33.82 62c3.47-7.07 13.34-26.51 33.82-62"></svg:path><svg:path fill="currentColor" d="m139.34 232.84l1-2a16.27 16.27 0 0 1-6.77 7.25a16.35 16.35 0 0 0 5.77-5.25"></svg:path><svg:path fill="currentColor" d="M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 0 0-14.31 8.84c-3 6.07-15.25 24-28.19 42.91c-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 0 1-5.79 5.22a15.8 15.8 0 0 1-7.53 2h-25.31A84.69 84.69 0 0 0 16 324.69v38.61a84.69 84.69 0 0 0 84.69 84.7h48.79a17.55 17.55 0 0 1 9.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 0 0 6.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 0 1 5.19-24.77a17.36 17.36 0 0 0 0-14.05a63.8 63.8 0 0 1 0-50.39a17.32 17.32 0 0 0 0-14a62.15 62.15 0 0 1 0-49.59a18.13 18.13 0 0 0 0-14.68A60.3 60.3 0 0 1 288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 0 0 1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 0 1-.86-11.58c3-19.34 9.67-36.29 16.74-54.16c3.08-7.78 6.27-15.82 9.22-24.26c6.14-17.57 4.3-35.2-5.05-48.38"></svg:path>`,
})
export class IonThumbsUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsUpOutlineIcon],svg[ion-thumbs-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 0 1-64-64v-48a64 64 0 0 1 64-64h30a32.34 32.34 0 0 0 27.37-15.4S162 221.81 188 176.78S264 64 272 48c29 0 43 22 34 47.71c-10.28 29.39-23.71 54.38-27.46 87.09c-.54 4.78 3.14 12 7.95 12L416 205"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="m416 271l-80-2c-20-1.84-32-12.4-32-30s14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 0 1 416 271Zm32 65l-112-2c-18-.84-32-12.41-32-30c0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0 1 32 32a32.1 32.1 0 0 1-32 32Zm-48 128l-64-3c-21-1.84-32-11.4-32-29s14.4-30 32-30l64-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Zm32-64l-96-2c-19-.84-32-12.4-32-30s13-28.84 32-30l96-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Z"></svg:path>`,
})
export class IonThumbsUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsUpSharpIcon],svg[ion-thumbs-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40"></svg:path>`,
})
export class IonThumbsUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsdownIcon],svg[ion-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M87.8 252.7C74 257.2 64 270.2 64 285.5c0 19 15.4 34.5 34.5 34.5h102.6c-2 25-10 53.6-1.1 87.3 7.5 28.4 39.4 49.7 52.4 36.8 5-4.9 3.5-15.2 3.5-33.8 0-42.8 17.8-86.1 39.8-108.7 9.4-9.7 25.2-13 40.2-13.6v16h112V64H336v32c-20.6.5-52.6-5.2-75.8-6.6-52-3.1-102 2.4-126.3 8.1-24.3 5.7-35 13-35 30.6 0 6.4 1.9 12.3 5.1 17.3-11.8 4.7-20.1 16.2-20.1 29.7 0 7.2 2.4 13.8 6.4 19.2-11.9 4.6-20.4 16.2-20.4 29.8.1 12.5 7.4 23.4 17.9 28.6zM400 96.3c8.8 0 16 7.1 16 16 0 8.8-7.2 16-16 16s-16-7.1-16-16c0-8.8 7.2-16 16-16z" fill="currentColor"></svg:path>`,
})
export class IonThumbsdownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThumbsupIcon],svg[ion-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424.2 259.3c13.8-4.5 23.8-17.5 23.8-32.8 0-19-15.4-34.5-34.5-34.5H310.9c2-25 10-53.6 1.1-87.3-7.5-28.4-39.4-49.7-52.4-36.8-5 4.9-3.5 15.2-3.5 33.8 0 42.8-17.8 86.1-39.8 108.7-9.4 9.7-25.2 13-40.2 13.6v-16H64v240h112v-32c20.6-.5 52.6 5.2 75.8 6.6 52 3.1 102-2.4 126.3-8.1 24.3-5.7 35-13 35-30.6 0-6.4-1.9-12.3-5.1-17.3 11.8-4.7 20.1-16.2 20.1-29.7 0-7.2-2.4-13.8-6.4-19.2 11.9-4.6 20.4-16.2 20.4-29.8-.1-12.5-7.4-23.4-17.9-28.6zM112 415.7c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16z" fill="currentColor"></svg:path>`,
})
export class IonThumbsupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThunderstormIcon],svg[ion-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 416a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 96 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 120 480m256-64a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 376 416m24 64a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 400 480"></svg:path><svg:path fill="currentColor" d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 0 0 192 416h32v64a16 16 0 0 0 29 9.3l80-112a16 16 0 0 0-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1"></svg:path>`,
})
export class IonThunderstormIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThunderstormOutlineIcon],svg[ion-thunderstorm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 0 0-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55"></svg:path>`,
})
export class IonThunderstormOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionThunderstormSharpIcon],svg[ion-thunderstorm-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1"></svg:path><svg:path fill="currentColor" d="m74.53 407.177l38.318-76.623l28.62 14.314l-38.319 76.622zm23.99 64.013l30.318-60.623l28.62 14.314l-30.317 60.621zm256.021-64.001l38.32-76.622l28.62 14.313l-38.32 76.622zm24.001 64.011l30.317-60.622l28.62 14.313l-30.317 60.622z"></svg:path>`,
})
export class IonThunderstormSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTicketIcon],svg[ion-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m490.18 181.4l-44.13-44.13a20 20 0 0 0-27-1a30.81 30.81 0 0 1-41.68-1.6a30.81 30.81 0 0 1-1.6-41.67a20 20 0 0 0-1-27L330.6 21.82a19.91 19.91 0 0 0-28.13 0l-70.35 70.34a39.9 39.9 0 0 0-9.57 15.5a7.71 7.71 0 0 1-4.83 4.83a39.8 39.8 0 0 0-15.5 9.58l-180.4 180.4a19.91 19.91 0 0 0 0 28.13L66 374.73a20 20 0 0 0 27 1a30.69 30.69 0 0 1 43.28 43.28a20 20 0 0 0 1 27l44.13 44.13a19.91 19.91 0 0 0 28.13 0l180.4-180.4a39.8 39.8 0 0 0 9.58-15.49a7.69 7.69 0 0 1 4.84-4.84a39.84 39.84 0 0 0 15.49-9.57l70.34-70.35a19.91 19.91 0 0 0-.01-28.09m-228.37-29.65a16 16 0 0 1-22.63 0l-11.51-11.51a16 16 0 0 1 22.63-22.62l11.51 11.5a16 16 0 0 1 0 22.63m44 44a16 16 0 0 1-22.62 0l-11-11a16 16 0 1 1 22.63-22.63l11 11a16 16 0 0 1 .01 22.66Zm44 44a16 16 0 0 1-22.63 0l-11-11a16 16 0 0 1 22.63-22.62l11 11a16 16 0 0 1 .05 22.67Zm44.43 44.54a16 16 0 0 1-22.63 0l-11.44-11.5a16 16 0 1 1 22.68-22.57l11.45 11.49a16 16 0 0 1-.01 22.63Z"></svg:path>`,
})
export class IonTicketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTicketOutlineIcon],svg[ion-ticket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"></svg:path>`,
})
export class IonTicketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTicketSharpIcon],svg[ion-ticket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426.24 127.72l-10.94 10.94a29.67 29.67 0 0 1-42-42l10.94-10.94L314.52 16l-88 88l-4 12.09l-12.09 4L16 314.52l69.76 69.76l10.94-10.94a29.67 29.67 0 0 1 42 42l-10.94 10.94L197.48 496l194.4-194.4l4-12.09l12.09-4l88-88Zm-208.56 5.43l21.87-21.87l33 33l-21.88 21.87Zm43 43l21.88-21.88l32.52 32.52l-21.88 21.88Zm42.56 42.56l21.88-21.88l32.52 32.52l-21.84 21.93Zm75.57 75.56l-33-33l21.87-21.88l33 33Z"></svg:path>`,
})
export class IonTicketSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimeIcon],svg[ion-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimeOutlineIcon],svg[ion-time-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"></svg:path>`,
})
export class IonTimeOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimeSharpIcon],svg[ion-time-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208c114.86 0 208-93.14 208-208c0-114.69-93.31-208-208-208m108 240H244a4 4 0 0 1-4-4V116a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v140h92a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4"></svg:path>`,
})
export class IonTimeSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimerIcon],svg[ion-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208s208-93.12 208-208S370.88 48 256 48m-82.33 114.34l105 71a32.5 32.5 0 0 1-37.25 53.26a33.2 33.2 0 0 1-8-8l-71-105a8.13 8.13 0 0 1 11.32-11.32ZM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72a14.15 14.15 0 1 1 19.64 20.37A146.53 146.53 0 0 0 108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 1 1-28.3 0V94.15A14.15 14.15 0 0 1 256 80c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path>`,
})
export class IonTimerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimerOutlineIcon],svg[ion-timer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194c106.2.2 192-85.83 192-192c0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152"></svg:path><svg:path fill="currentColor" d="m233.38 278.63l-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26a33.2 33.2 0 0 1-8.07-7.94"></svg:path>`,
})
export class IonTimerOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTimerSharpIcon],svg[ion-timer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208s208-93.12 208-208S370.88 48 256 48m0 384c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72L279 233l-19 30l-125-91c-13 23-26.7 46-26.7 84c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55h-28.3V79.89c4.24.07 8.94.11 14.15.11c97.05 0 176 79 176 176s-78.95 176-176 176"></svg:path>`,
})
export class IonTimerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTodayIcon],svg[ion-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64m61 112H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3M224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z"></svg:path>`,
})
export class IonTodayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTodayOutlineIcon],svg[ion-today-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32"></svg:path><svg:rect width="96" height="96" x="112" y="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="13"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M464 160H48"></svg:path>`,
})
export class IonTodayOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTodaySharpIcon],svg[ion-today-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64"></svg:path>`,
})
export class IonTodaySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleIcon],svg[ion-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144m0 256a112 112 0 1 1 112-112a112.12 112.12 0 0 1-112 112"></svg:path>`,
})
export class IonToggleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleFilledIcon],svg[ion-toggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 208c-26.467 0-48 21.533-48 48s21.533 48 48 48 48-21.533 48-48-21.533-48-48-48z" fill="currentColor"></svg:path><svg:path d="M352 128H160c-70.692 0-128 57.308-128 128s57.308 128 128 128h192c70.692 0 128-57.308 128-128s-57.308-128-128-128zm0 208c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z" fill="currentColor"></svg:path>`,
})
export class IonToggleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleOutlineIcon],svg[ion-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="368" cy="256" r="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:rect width="480" height="256" x="16" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="128" ry="128"></svg:rect>`,
})
export class IonToggleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionToggleSharpIcon],svg[ion-toggle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288m0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86"></svg:path>`,
})
export class IonToggleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrailSignIcon],svg[ion-trail-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M491.31 324.69L432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62"></svg:path>`,
})
export class IonTrailSignIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrailSignOutlineIcon],svg[ion-trail-sign-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 400v64m0-256v64m0-224v32m160 128H102.63a16 16 0 0 1-11.32-4.69L32 144l59.31-59.31A16 16 0 0 1 102.63 80H416a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16M96 400h313.37a16 16 0 0 0 11.32-4.69L480 336l-59.31-59.31a16 16 0 0 0-11.32-4.69H96a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16"></svg:path>`,
})
export class IonTrailSignOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrailSignSharpIcon],svg[ion-trail-sign-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m502.63 336l-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80l80 80H234v32H64v160h170v64h44v-64h144.63Z"></svg:path>`,
})
export class IonTrailSignSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrainIcon],svg[ion-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="256" cy="304" fill="currentColor" rx="32.05" ry="31.94" transform="rotate(-45 256.001 304)"></svg:ellipse><svg:path fill="currentColor" d="M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73a16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64m-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m76.18 239.87a64 64 0 1 1 59.69-59.69a64.07 64.07 0 0 1-59.69 59.69"></svg:path><svg:path fill="currentColor" d="M395.31 468.69L347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62"></svg:path>`,
})
export class IonTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrainOutlineIcon],svg[ion-train-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 48h-24a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-24a56.16 56.16 0 0 0-56 56v247c0 35.3 144 65 144 65s144-29.7 144-65V104a56 56 0 0 0-56-56m-88 304a48 48 0 1 1 48-48a48 48 0 0 1-48 48m96-160a16 16 0 0 1-16 16H176a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM144 464h224m-32-32l48 48m-208-48l-48 48"></svg:path>`,
})
export class IonTrainOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrainSharpIcon],svg[ion-train-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32h-64a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32M256 352a48 48 0 1 1 48-48a48 48 0 0 1-48 48m112-152a8 8 0 0 1-8 8H152a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8Z"></svg:path><svg:path fill="currentColor" d="m314 432l15.32 16H182.58L198 432l-32-13l-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75z"></svg:path>`,
})
export class IonTrainSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTransgenderIcon],svg[ion-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M458 32h-68a22 22 0 0 0 0 44h14.89l-59.57 59.57a149.69 149.69 0 0 0-178.64 0l-7.57-7.57l26.45-26.44a22 22 0 0 0-31.12-31.12L128 96.89L107.11 76H122a22 22 0 0 0 0-44H54a22 22 0 0 0-22 22v68a22 22 0 0 0 44 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1 0 31.11 31.11L128 159.11l7.57 7.57A149.2 149.2 0 0 0 106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0 0 89.46-29.67L369 399.9l-26.54 26.54a22 22 0 0 0 31.12 31.12l26.49-26.5l42.37 42.48a22 22 0 0 0 31.16-31.08L431.17 400l26.39-26.39a22 22 0 0 0-31.12-31.12l-26.35 26.35l-23.55-23.62a149.68 149.68 0 0 0-.11-178.49L436 107.11V122a22 22 0 0 0 44 0V54a22 22 0 0 0-22-22M150 256a106 106 0 1 1 106 106a106.12 106.12 0 0 1-106-106"></svg:path>`,
})
export class IonTransgenderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTransgenderOutlineIcon],svg[ion-transgender-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m448 352l-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80m336 0L346.5 165.5M48 48l117.49 117.49M464 464L346.65 346.37"></svg:path>`,
})
export class IonTransgenderOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTransgenderSharpIcon],svg[ion-transgender-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m480 448.94l-48.94-49.08L464 366.92l-31.1-31.11l-32.9 32.9l-23.55-23.61a149.64 149.64 0 0 0-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 0 0-178.59 0l-7.55-7.55l33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33l7.56 7.57A149.18 149.18 0 0 0 106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0 0 89.44-29.67l23.51 23.58l-33.14 33.05l31.11 31.1l33-33l48.9 49Zm-330-193a106 106 0 1 1 106 106a106.09 106.09 0 0 1-106-106"></svg:path>`,
})
export class IonTransgenderSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashIcon],svg[ion-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"></svg:path>`,
})
export class IonTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashAIcon],svg[ion-trash-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M341 128V99c0-19.1-14.5-35-34.5-35H205.4C185.5 64 171 79.9 171 99v29H80v32h9.2s5.4.6 8.2 3.4c2.8 2.8 3.9 9 3.9 9l19 241.7c1.5 29.4 1.5 33.9 36 33.9h199.4c34.5 0 34.5-4.4 36-33.8l19-241.6s1.1-6.3 3.9-9.1 8.2-3.4 8.2-3.4h9.2v-32h-91v-.1zM192 99c0-9.6 7.8-15 17.7-15h91.7c9.9 0 18.6 5.5 18.6 15v29H192V99zm-8.5 285l-10.3-192h20.3L204 384h-20.5zm83.6 0h-22V192h22v192zm61.6 0h-20.4l10.5-192h20.3l-10.4 192z" fill="currentColor"></svg:path>`,
})
export class IonTrashAIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBIcon],svg[ion-trash-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M413.7 133.4c-2.4-9-4-14-4-14-2.6-9.3-9.2-9.3-19-10.9l-53.1-6.7c-6.6-1.1-6.6-1.1-9.2-6.8-8.7-19.6-11.4-31-20.9-31h-103c-9.5 0-12.1 11.4-20.8 31.1-2.6 5.6-2.6 5.6-9.2 6.8l-53.2 6.7c-9.7 1.6-16.7 2.5-19.3 11.8 0 0-1.2 4.1-3.7 13-3.2 11.9-4.5 10.6 6.5 10.6h302.4c11 .1 9.8 1.3 6.5-10.6z" fill="currentColor"></svg:path><svg:path d="M379.4 176H132.6c-16.6 0-17.4 2.2-16.4 14.7l18.7 242.6c1.6 12.3 2.8 14.8 17.5 14.8h207.2c14.7 0 15.9-2.5 17.5-14.8l18.7-242.6c1-12.6.2-14.7-16.4-14.7z" fill="currentColor"></svg:path>`,
})
export class IonTrashBIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBinIcon],svg[ion-trash-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="32" ry="32"></svg:rect><svg:path fill="currentColor" d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z"></svg:path>`,
})
export class IonTrashBinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBinOutlineIcon],svg[ion-trash-bin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m432 144l-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144"></svg:path><svg:rect width="448" height="80" x="32" y="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M312 240L200 352m112 0L200 240"></svg:path>`,
})
export class IonTrashBinOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashBinSharpIcon],svg[ion-trash-bin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ionTrashBinSharp0" fill="none" d="M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56z"></svg:path></svg:defs><svg:use href="#ionTrashBinSharp0"></svg:use><svg:use href="#ionTrashBinSharp0"></svg:use><svg:path fill="currentColor" d="m64 160l29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46l-56-56l-56 56L174.54 352l56-56l-56-56L200 214.54l56 56l56-56L337.46 240l-56 56l56 56Z"></svg:path><svg:rect width="448" height="80" x="32" y="48" fill="currentColor" rx="12" ry="12"></svg:rect>`,
})
export class IonTrashBinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashOutlineIcon],svg[ion-trash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"></svg:path>`,
})
export class IonTrashOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrashSharpIcon],svg[ion-trash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"></svg:path><svg:path fill="none" d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z"></svg:path>`,
})
export class IonTrashSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingDownIcon],svg[ion-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352"></svg:path>`,
})
export class IonTrendingDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingDownOutlineIcon],svg[ion-trending-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352"></svg:path>`,
})
export class IonTrendingDownOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingDownSharpIcon],svg[ion-trending-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 368h112V256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m48 144l144 144l96-96l160 160"></svg:path>`,
})
export class IonTrendingDownSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingUpIcon],svg[ion-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"></svg:path>`,
})
export class IonTrendingUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingUpOutlineIcon],svg[ion-trending-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160"></svg:path>`,
})
export class IonTrendingUpOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrendingUpSharpIcon],svg[ion-trending-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M352 144h112v112"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m48 368l144-144l96 96l160-160"></svg:path>`,
})
export class IonTrendingUpSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTriangleIcon],svg[ion-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464"></svg:path>`,
})
export class IonTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTriangleOutlineIcon],svg[ion-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 448L256 64l208 384z"></svg:path>`,
})
export class IonTriangleOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTriangleSharpIcon],svg[ion-triangle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 32L20 464h472z"></svg:path>`,
})
export class IonTriangleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrophyIcon],svg[ion-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 80h-60.1a4 4 0 0 1-4-4V63.92a32 32 0 0 0-32-31.92l-223.79.26a32 32 0 0 0-31.94 31.93V76a4 4 0 0 1-4 4H48a16 16 0 0 0-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 0 1 5.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61c20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 0 1 6.25 7.8V444a4 4 0 0 1-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 448h-60a4 4 0 0 1-4-4v-86.86a8 8 0 0 1 6.25-7.8c22.42-5 47.36-16.65 68.27-32.48c27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 0 1 5.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 0 0-16-16M112 198.22a4 4 0 0 1-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89c-11.91-17.69-19-40.67-19.79-63.63a4 4 0 0 1 4-4.15h40a4 4 0 0 1 4 4c-.02 27.45-.07 58.87-.07 82.22m316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 0 1-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4.15c-.79 22.96-7.9 45.94-19.81 63.63Z"></svg:path>`,
})
export class IonTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrophyOutlineIcon],svg[ion-trophy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464h160m-80 0V336m128-112c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79c0 64.28 83 112 128 112S384 288.28 384 224"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112"></svg:path>`,
})
export class IonTrophyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTrophySharpIcon],svg[ion-trophy-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61c13.33 18.4 34.17 31.1 52.91 37.21c5.44 29.29 20.2 57.13 50.19 79.83c22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86c30-22.7 44.75-50.54 50.19-79.83c18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80ZM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57m323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58c0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8"></svg:path>`,
})
export class IonTrophySharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTshirtIcon],svg[ion-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 96L320 48c-13.988 27.227-30.771 40.223-63.769 40.223C223.723 87.676 205.722 75 192 48L32 96l32 88 64-8-16 288h288l-16-288 64 8 32-88z" fill="currentColor"></svg:path>`,
})
export class IonTshirtIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTshirtOutlineIcon],svg[ion-tshirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M178.249 85.534c18.761 22.976 43.909 34.009 77.445 34.572l.269-.106h.269c22.638 0 41.169-4.861 56.653-15.091 7.801-5.154 14.721-11.47 21.029-19.382l104.461 31.367-11.785 32.516-38.743-4.685-37.912-4.589 2.114 38.133L366.176 433H145.824l14.127-254.729 2.106-37.981-37.782 4.428-38.854 4.553-11.767-32.358 104.595-31.379M320 48c-13.988 27.227-30.771 40.223-63.769 40.223C223.723 87.676 205.722 75 192 48L32 96l32 88 64-7.5L112 465h288l-16-288.5 64 7.75L480 96 320 48z" fill="currentColor"></svg:path>`,
})
export class IonTshirtOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTvIcon],svg[ion-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.86 384H64.14A48.2 48.2 0 0 1 16 335.86V128.14A48.2 48.2 0 0 1 64.14 80h383.72A48.2 48.2 0 0 1 496 128.14v207.72A48.2 48.2 0 0 1 447.86 384"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"></svg:path>`,
})
export class IonTvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTvOutlineIcon],svg[ion-tv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="448" height="272" x="32" y="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="32.14" ry="32.14"></svg:rect><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M128 416h256"></svg:path>`,
})
export class IonTvOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionTvSharpIcon],svg[ion-tv-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488 384H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h464a8 8 0 0 1 8 8v288a8 8 0 0 1-8 8"></svg:path><svg:rect width="288" height="32" x="112" y="400" fill="currentColor" rx="4" ry="4"></svg:rect>`,
})
export class IonTvSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUmbrellaIcon],svg[ion-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 113.61a222.26 222.26 0 0 0-136.33-64.54a8.09 8.09 0 0 1-6.88-5.62a15.79 15.79 0 0 0-30.36 0a8.09 8.09 0 0 1-6.88 5.62A224 224 0 0 0 32 271.52a16.41 16.41 0 0 0 7.24 13.87a16 16 0 0 0 20.07-2.08a51.89 51.89 0 0 1 73.31-.06a15.94 15.94 0 0 0 22.6.15a62.59 62.59 0 0 1 81.49-5.87a8.24 8.24 0 0 1 3.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 0 1 208 432a16 16 0 0 0-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0 0 47.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 0 1 3.29-6.59a62.59 62.59 0 0 1 81.4 5.78a16 16 0 0 0 22.62 0a51.91 51.91 0 0 1 73.38 0a16 16 0 0 0 19.54 2.41a16.4 16.4 0 0 0 7.77-14.21a222.54 222.54 0 0 0-65.61-157.9"></svg:path>`,
})
export class IonUmbrellaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUmbrellaOutlineIcon],svg[ion-umbrella-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 272v160a32 32 0 0 1-32 32h0a32 32 0 0 1-32-32m272-160c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0 1 96 0h0a78.28 78.28 0 0 1 102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 0 1 368 272h0a67.88 67.88 0 0 1 96 0M256 64V48"></svg:path>`,
})
export class IonUmbrellaOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUmbrellaSharpIcon],svg[ion-umbrella-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128.93 280l-.26-.3c-.9-.74-1.83-1.43-2.77-2.1Zm254.15 0l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79Z"></svg:path><svg:path fill="currentColor" d="M463.14 186.44A224.55 224.55 0 0 0 272 48.57V32h-32v16.57A223.58 223.58 0 0 0 32 272v22.52l12.25-11.21a62.63 62.63 0 0 1 81.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0 1 81.4-5.78L240 280v152a16 16 0 0 1-32 0v-16h-32v16a48 48 0 0 0 96 0V280l3.29-2.47a62.59 62.59 0 0 1 81.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.6 223.6 0 0 0-16.86-85.56"></svg:path>`,
})
export class IonUmbrellaSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUniversityIcon],svg[ion-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64L32 176.295l32 21.072V400l32 16V217.849L255.852 320l132.144-85.451L480 174.727z" fill="currentColor"></svg:path><svg:path d="M390.13 256L256 343.768 120.531 256 112 337.529C128 349.984 224 416 256.002 448 288 416 384 350.031 400 337.561L390.13 256z" fill="currentColor"></svg:path>`,
})
export class IonUniversityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlinkIcon],svg[ion-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"></svg:path>`,
})
export class IonUnlinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlinkOutlineIcon],svg[ion-unlink-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" d="M208 352h-64a96 96 0 0 1 0-192h64m96 0h64a96 96 0 0 1 0 192h-64"></svg:path>`,
})
export class IonUnlinkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlinkSharpIcon],svg[ion-unlink-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66"></svg:path>`,
})
export class IonUnlinkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUnlockedIcon],svg[ion-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H161v-30.9c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5V112.8c11.3 11.9 19.4 29.3 24 47.3h53.4c-5.9-31.3-19.7-61.8-39.2-82.4-26.2-27.8-63.7-45.7-105-45.7h-.1-.1c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1z" fill="currentColor"></svg:path>`,
})
export class IonUnlockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUploadIcon],svg[ion-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z" fill="currentColor"></svg:path>`,
})
export class IonUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionUsbIcon],svg[ion-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M144 220s.1.1 0 0z" fill="currentColor"></svg:path><svg:path d="M384 128.3c0-17.8-14.4-32.2-32.1-32.2-17.7 0-32.1 14.4-32.1 32.1 0 12.1 6.7 22.7 16.6 28.2 1.3 1.5 2.2 4.5 2.2 6v.4c-.8 17.6-3.8 31.9-7.1 41.7-4.3 12.6-38.2 39.6-51.5 42.2-5.8 1.2-7.9-.6-7.9-10.2V96.1c0-1.5.2-3.5 1.9-5 8.6-5.8 14.3-15.6 14.3-26.8 0-17.8-14.4-32.2-32.1-32.2-17.7 0-32.1 14.4-32.1 32.2 0 11.3 5.8 21.3 14.6 27l.1.1c.1.1.2.1.4.2s.4.2.6.4c2.3 1.5 3.3 3 3.3 4.2v196.3c0 7-1.1 12.3-8.4 11.8s-41.7-23.5-51.4-44.1c-4.5-9.5-6.8-18.8-6.8-28v-.5c0-3.1 0-11.3 3.2-13.6 7.8-5.9 12.8-15.2 12.8-25.7 0-17.8-14.4-32.2-32.1-32.2s-32.4 14.2-32.4 32c0 11.9 6.5 22.3 16 27.8 2.4 1.5 3 2.9 3.8 10.6s3 24.6 9.1 39.9c7.3 18.6 20.9 32.6 39.7 45.2 13.6 9.3 25.3 16.6 32.1 26.4s10.2 13.5 10.2 27c0 0 0-.9 0 0 0 12.8-4 14-9.3 17.8-14.1 8.7-23.5 24.2-23.5 42v1.1c0 27.5 22.3 49.8 49.8 49.8 27.5 0 49.8-22.3 49.8-49.8 0-13.3-5.2-25.4-13.7-34.3-2.9-3.2-6-6-9.6-8.3-7.5-5.2-10.3-11.5-10.3-18.1v-24.1c0-25.1 4.1-41.1 11.1-53.3 7.3-12.7 18.3-22.6 35.4-34.2 18.8-12.6 32.2-26.6 39.6-45.2 5.7-14.4 7.6-31 8.6-50.9.1-1.8 1.4-5.8 3.3-6.8 8.3-5.8 13.9-15.5 13.9-26.5zm-223.9 80c-8.9 0-16.1-7.3-16.1-16.2s7.2-16.2 16.1-16.2 16.1 7.3 16.1 16.2-7.2 16.2-16.1 16.2zm95.9-128c-8.9 0-16.1-7.3-16.1-16.2S247.1 48 256 48s16.1 7.3 16.1 16.2-7.2 16.1-16.1 16.1zm95.9 64c-8.9 0-16.1-7.3-16.1-16.2S343 112 351.9 112s16.1 7.3 16.1 16.2-7.2 16.1-16.1 16.1z" fill="currentColor"></svg:path>`,
})
export class IonUsbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamIcon],svg[ion-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 384.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32ZM268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68"></svg:path>`,
})
export class IonVideocamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOffIcon],svg[ion-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 179.52A67.52 67.52 0 0 0 268.48 112h-79.2a4 4 0 0 0-2.82 6.83l142.71 142.71a4 4 0 0 0 6.83-2.82ZM16 180v152a68 68 0 0 0 68 68h184a67.66 67.66 0 0 0 42.84-15.24a4 4 0 0 0 .33-6L54.41 122a4 4 0 0 0-4.87-.62A68 68 0 0 0 16 180m448 204.39a32 32 0 0 1-13-2.77a16 16 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a16 16 0 0 1 2.71-1.54a32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 416L80 80"></svg:path>`,
})
export class IonVideocamOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOffOutlineIcon],svg[ion-videocam-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M50.19 140.57A51.94 51.94 0 0 0 32 180v152a52.15 52.15 0 0 0 52 52h184a51.6 51.6 0 0 0 22-4.9M208 128h60.48A51.68 51.68 0 0 1 320 179.52V248m96 168L80 80"></svg:path>`,
})
export class IonVideocamOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOffSharpIcon],svg[ion-videocam-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m57.376 79.998l22.627-22.627L438.633 416l-22.627 22.628zM32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.9 15.9 0 0 0 9.34-3l-285-285Zm304 96v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112Z"></svg:path>`,
})
export class IonVideocamOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamOutlineIcon],svg[ion-videocam-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M268 384H84a52.15 52.15 0 0 1-52-52V180a52.15 52.15 0 0 1 52-52h184.48A51.68 51.68 0 0 1 320 179.52V332a52.15 52.15 0 0 1-52 52Z"></svg:path>`,
})
export class IonVideocamOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocamSharpIcon],svg[ion-videocam-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 208v-80a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-80l160 96V112Z"></svg:path>`,
})
export class IonVideocamSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVideocameraIcon],svg[ion-videocamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M367 185.3c0-5.1-4-9.3-9.2-9.3H306v-32.2c0-35.2-29.3-63.8-64.9-63.8H63v48h176.1c4.5 0 9.9 5.6 9.9 10.1V176H41.4c-5.2 0-9.4 4.2-9.4 9.3V422.7c0 5.1 4.2 9.3 9.4 9.3h316.4c5.2 0 9.2-4.2 9.2-9.3v-64.5l113 34.7V216.5l-113 34.7v-65.9zM258.2 341H140.1c-19.8 0-35.9-16-35.9-35.8s16.1-35.8 35.9-35.8c19.8 0 35.9 16.2 35.9 36 0 10-4.2 18.6-10.8 25.6h67.9c-6.6-7-10.8-15.6-10.8-25.6 0-19.8 16.1-35.9 35.9-35.9 19.8 0 35.9 15.9 35.9 35.7S278 341 258.2 341z" fill="currentColor"></svg:path>`,
})
export class IonVideocameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeHighIcon],svg[ion-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 416a23.88 23.88 0 0 1-14.2-4.68a8 8 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8 8 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24m88-80a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336"></svg:path><svg:path fill="currentColor" d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8"></svg:path><svg:path fill="currentColor" d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432"></svg:path>`,
})
export class IonVolumeHighIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeHighOutlineIcon],svg[ion-volume-high-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M126 192H56a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a15.93 15.93 0 0 1 10.14 3.54l91.47 74.89A8 8 0 0 0 240 392V120a8 8 0 0 0-12.74-6.43l-91.47 74.89A15 15 0 0 1 126 192m194 128c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"></svg:path>`,
})
export class IonVolumeHighOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeHighSharpIcon],svg[ion-volume-high-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M320 320c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160"></svg:path><svg:path fill="currentColor" d="M125.65 176.1H32v159.8h93.65L256 440V72z"></svg:path>`,
})
export class IonVolumeHighSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeLowIcon],svg[ion-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H120a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 320 119.83v272.34a24 24 0 0 1-24 24ZM384 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 384 336"></svg:path>`,
})
export class IonVolumeLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeLowOutlineIcon],svg[ion-volume-low-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M189.65 192H120a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61M384 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64"></svg:path>`,
})
export class IonVolumeLowOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeLowSharpIcon],svg[ion-volume-low-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m391.12 341.48l-28.6-14.36l7.18-14.3c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73L362.48 185L391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18ZM189.65 176.1H96v159.8h93.65L320 440V72z"></svg:path>`,
})
export class IonVolumeLowSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMediumIcon],svg[ion-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51l-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75l.66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24ZM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336"></svg:path><svg:path fill="currentColor" d="M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8"></svg:path>`,
})
export class IonVolumeMediumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMediumOutlineIcon],svg[ion-volume-medium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M157.65 192H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61M352 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112"></svg:path>`,
})
export class IonVolumeMediumOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMediumSharpIcon],svg[ion-volume-medium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157.65 176.1H64v159.8h93.65L288 440V72z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M352 320c9.74-19.41 16-40.81 16-64c0-23.51-6-44.4-16-64m48 176c19.48-34 32-64 32-112s-12-77.7-32-112"></svg:path>`,
})
export class IonVolumeMediumSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMuteIcon],svg[ion-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51l-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71m8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3M352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256m64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256"></svg:path>`,
})
export class IonVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMuteOutlineIcon],svg[ion-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M224 136.92v33.8a4 4 0 0 0 1.17 2.82l24 24a4 4 0 0 0 6.83-2.82v-74.15a24.53 24.53 0 0 0-12.67-21.72a23.91 23.91 0 0 0-25.55 1.83a8 8 0 0 0-.66.51l-31.94 26.15a4 4 0 0 0-.29 5.92l17.05 17.06a4 4 0 0 0 5.37.26Zm0 238.16l-78.07-63.92a32 32 0 0 0-20.28-7.16H64v-96h50.72a4 4 0 0 0 2.82-6.83l-24-24a4 4 0 0 0-2.82-1.17H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l91.36 74.8a8 8 0 0 0 .66.51a23.93 23.93 0 0 0 25.85 1.69A24.49 24.49 0 0 0 256 391.45v-50.17a4 4 0 0 0-1.17-2.82l-24-24a4 4 0 0 0-6.83 2.82ZM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 0 0-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l19.66 19.67a4 4 0 0 0 6.75-2A147 147 0 0 0 352 256m64 0c0-51.19-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26l16.77 16.76a4 4 0 0 0 6.52-1.27C410.09 315.88 416 289.91 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 0 0 .77 4.55L443 391.39a4 4 0 0 0 6.4-1C470.88 348.22 480 307 480 256"></svg:path>`,
})
export class IonVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeMuteSharpIcon],svg[ion-volume-mute-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="M416 432L64 80"></svg:path><svg:path fill="currentColor" d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47L298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a113 113 0 0 1-.63 11.74l27.32 27.32A148.8 148.8 0 0 0 352 256m64 0c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82l-27.64 16.12l8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256"></svg:path><svg:path fill="currentColor" d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49l-27 17.22l8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256M256 72l-73.6 58.78l73.6 73.59zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1z"></svg:path>`,
})
export class IonVolumeMuteSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeOffIcon],svg[ion-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 416a23.92 23.92 0 0 1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 0 1-24-24V200.07a24 24 0 0 1 24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 0 1 368 120v272a24 24 0 0 1-24 24"></svg:path>`,
})
export class IonVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeOffOutlineIcon],svg[ion-volume-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M237.65 192H168a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61"></svg:path>`,
})
export class IonVolumeOffOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionVolumeOffSharpIcon],svg[ion-volume-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.65 176.1H144v159.8h93.65L368 440V72z"></svg:path>`,
})
export class IonVolumeOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalkIcon],svg[ion-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M127.38 291.78v-74.07s37-74.07 74.07-74.07"></svg:path><svg:path fill="currentColor" d="M368.09 291.78a18.5 18.5 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93ZM171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7"></svg:path><svg:circle cx="257" cy="69.56" r="37.04" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class IonWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalkOutlineIcon],svg[ion-walk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m314.21 482.32l-56.77-114.74l-44.89-57.39a72.8 72.8 0 0 1-10.13-37.05V144h15.67a40.22 40.22 0 0 1 40.23 40.22v183.36M127.9 293.05v-74.52S165.16 144 202.42 144M370.1 274.42L304 231M170.53 478.36L224 400"></svg:path><svg:circle cx="258.32" cy="69.48" r="37.26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class IonWalkOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalkSharpIcon],svg[ion-walk-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="m315.09 481.38l-56.95-115.12l-45-57.56a73.1 73.1 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M128.18 291.5v-74.77l64.95-65.1"></svg:path><svg:path fill="currentColor" d="m376.35 295.73l-83.95-56.38v-44.68l104.68 72.95zM175.13 498.58l-21.43-26.91l80.33-81.54l15.53 32.07z"></svg:path><svg:circle cx="259.02" cy="67.21" r="37.38" fill="currentColor" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class IonWalkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalletIcon],svg[ion-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.5 104h320a88 88 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"></svg:path>`,
})
export class IonWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalletOutlineIcon],svg[ion-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="288" x="48" y="144" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"></svg:path><svg:path fill="currentColor" d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonWalletOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWalletSharpIcon],svg[ion-wallet-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.5 104H432V51.52a16 16 0 0 0-19.14-15.69l-368 60.48a16 16 0 0 0-12 10.47A39.7 39.7 0 0 1 47.5 104m416 24h-416a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V144a16 16 0 0 0-16-16M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20c35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236Z"></svg:path>`,
})
export class IonWalletSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWandIcon],svg[ion-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M272 191.997l48 48-48 47.999-48-48z" fill="currentColor"></svg:path><svg:path d="M208.007 256l48.001 48L80.01 480l-48-48.001z" fill="currentColor"></svg:path><svg:path d="M256 32h32v64h-32z" fill="currentColor"></svg:path><svg:path d="M385.131 149.497l-22.627-22.627 45.254-45.254 22.627 22.628z" fill="currentColor"></svg:path><svg:path d="M113.606 104.234l22.627-22.627 45.255 45.254-22.628 22.627z" fill="currentColor"></svg:path><svg:path d="M362.505 353.126l22.627-22.627 45.255 45.254-22.628 22.627z" fill="currentColor"></svg:path><svg:path d="M416 224h64v32h-64z" fill="currentColor"></svg:path>`,
})
export class IonWandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWarningIcon],svg[ion-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"></svg:path>`,
})
export class IonWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWarningOutlineIcon],svg[ion-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95"></svg:path><svg:path fill="currentColor" d="M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class IonWarningOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWarningSharpIcon],svg[ion-warning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79m-197.62-36.29h-40v-40h40Zm-4-63.92h-32l-6-160h44Z"></svg:path>`,
})
export class IonWarningSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWatchIcon],svg[ion-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="56" ry="56"></svg:rect><svg:path fill="currentColor" d="M336 96V32a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v64a80.09 80.09 0 0 0-80 80v160a80.09 80.09 0 0 0 80 80v64a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-64a80.09 80.09 0 0 0 80-80V176a80.09 80.09 0 0 0-80-80m56 224a72.08 72.08 0 0 1-72 72H192a72.08 72.08 0 0 1-72-72V192a72.08 72.08 0 0 1 72-72h128a72.08 72.08 0 0 1 72 72Z"></svg:path>`,
})
export class IonWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWatchOutlineIcon],svg[ion-watch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="288" x="112" y="112" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="64" ry="64"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72m0 288v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72"></svg:path>`,
})
export class IonWatchOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWatchSharpIcon],svg[ion-watch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="8" ry="8"></svg:rect><svg:path fill="currentColor" d="M384 96h-48V16H176v80h-48a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h48v80h160v-80h48a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32m8 272a24 24 0 0 1-24 24H144a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h224a24 24 0 0 1 24 24Z"></svg:path>`,
})
export class IonWatchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterIcon],svg[ion-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88M272 412a12 12 0 0 1-11.34-16a11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class IonWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterOutlineIcon],svg[ion-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 328a72 72 0 0 1-72 72"></svg:path>`,
})
export class IonWaterOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterSharpIcon],svg[ion-water-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3m16 362.3v-24a60.07 60.07 0 0 0 60-60h24a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class IonWaterSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWaterdropIcon],svg[ion-waterdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M271 38.6c-.3-.4-.7-.7-.9-1l-.1-.1c-3.6-3.4-8.5-5.5-13.9-5.5-5.5 0-10.4 2.1-13.9 5.5l-.1.1c-.3.3-.6.6-.9 1-6.1 6.3-13.8 14.4-22.4 24.1-17.4 19.7-38.6 46-58.5 76.8-33.4 51.8-62.9 116.1-64.1 183.1 0 1.3-.1 2.7-.1 4 0 19.7 3.9 38.5 10.9 55.8 4.1 10 9.2 19.4 15.2 28.2C150.7 452.4 200 480 256 480c88.4 0 160-68.7 160-153.4 0-127.9-105.2-247.4-145-288zM256 424c-15.8 0-30.7-3.7-43.9-10.1 65.9-14.4 118.4-64.7 135.8-129.5 5.2 12.1 8.2 25.5 8.2 39.6-.1 55.2-44.9 100-100.1 100z" fill="currentColor"></svg:path>`,
})
export class IonWaterdropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWifiIcon],svg[ion-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M331.295 353.764c.131.181-.091-.13 0 0a46 46 0 0 0-1.039-1.365a64 64 0 0 0-3.618-4.17c-3.112-3.302-7.69-7.537-13.87-11.725C300.287 328.047 281.56 320 256 320s-44.287 8.047-56.768 16.504c-6.18 4.188-10.758 8.423-13.87 11.725a64 64 0 0 0-3.618 4.17c.264-.361-.43.544 0 0l-1.586 2.142a16 16 0 0 0 2.135 20.463l62.586 60.5c6.202 5.995 16.039 5.995 22.241 0l62.587-60.5a16 16 0 0 0 2.136-20.463z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M421.086 269.862c-.135-.218-.596-.966-.812-1.3a72 72 0 0 0-1.81-2.639c-1.552-2.163-3.813-5.096-6.861-8.536c-6.099-6.88-15.362-15.802-28.417-24.637C356.915 214.969 315.967 198 256 198s-100.915 16.969-127.186 34.75c-13.055 8.835-22.318 17.757-28.417 24.637c-3.049 3.44-5.31 6.373-6.861 8.536a71 71 0 0 0-1.81 2.639q-.324.502-.527.829l-.285.471a16 16 0 0 0 2.678 19.664l35.31 34a16 16 0 0 0 23.007-.84l.195-.209c.207-.219.565-.591 1.074-1.096a93 93 0 0 1 4.831-4.436c4.402-3.785 11.093-8.947 19.955-14.141C195.658 292.436 221.893 282 256 282s60.342 10.436 78.036 20.804c8.862 5.194 15.553 10.356 19.955 14.141a93 93 0 0 1 4.831 4.436a49 49 0 0 1 1.269 1.305l-.005-.006l-.013-.015m0 0l.026.029a16 16 0 0 0 22.999.832l35.31-34a16 16 0 0 0 2.678-19.664" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M507.974 181.264c.343.459 1.181 1.629 1.181 1.629a16 16 0 0 1-2.029 20.606l-36.69 35.5a16 16 0 0 1-23.345-1.17l-.003-.003l-.085-.099q-.138-.16-.482-.548a108 108 0 0 0-2.197-2.379c-2.009-2.116-5.095-5.229-9.229-9.01c-8.275-7.569-20.69-17.764-36.997-27.981C365.499 177.384 317.58 157 256 157s-109.499 20.384-142.098 40.809c-16.307 10.217-28.722 20.412-36.997 27.981c-4.133 3.781-7.22 6.894-9.229 9.01a109 109 0 0 0-2.197 2.379q-.345.388-.482.548l-.047.054l-.03.034l-.004.006l-.004.005l-.004.004a16 16 0 0 1-23.344 1.169l-36.69-35.5a16 16 0 0 1-2.03-20.606l.011-.016l.013-.017l.03-.043l.079-.113l.24-.337q.295-.413.809-1.103c.686-.92 1.667-2.199 2.949-3.786c2.563-3.174 6.335-7.585 11.367-12.818c10.057-10.46 25.185-24.241 45.783-37.973C105.437 99.146 168.48 72 256 72s150.563 27.146 191.875 54.687c20.598 13.732 35.726 27.513 45.783 37.973c5.032 5.233 8.804 9.644 11.367 12.818a125 125 0 0 1 2.949 3.786"></svg:path>`,
})
export class IonWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWifiOutlineIcon],svg[ion-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><svg:path d="M318.586 363.5L256 424l-62.586-60.5S212 336 256 336s62.586 27.5 62.586 27.5M407.31 278L372 312s-41-46-116-46s-116 46-116 46l-35.31-34S142.5 214 256 214s151.31 64 151.31 64"></svg:path><svg:path d="m496 192l-36.69 35.5S386.5 141 256 141S52.69 227.5 52.69 227.5L16 192S88 88 256 88s240 104 240 104"></svg:path></svg:g>`,
})
export class IonWifiOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWifiSharpIcon],svg[ion-wifi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M337.78 362.819c-4.246-8.453-11.074-15.687-12.601-17.31c-3.05-3.241-7.535-7.397-13.589-11.505c-12.228-8.299-30.57-16.191-55.59-16.191s-43.362 7.892-55.59 16.191c-6.054 4.108-10.539 8.264-13.589 11.505a63 63 0 0 0-3.548 4.097c-.422.535-4.307 4.76-9.053 13.213L256 442z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M425.25 279.287s-7.995-10.229-15.703-18.928c-5.983-6.753-18.1-17.71-30.901-26.377c-25.762-17.444-63.897-35.077-122.646-35.077s-96.884 17.633-122.646 35.077c-12.801 8.667-20.835 15.473-28.869 24.172S86.75 279.287 86.75 279.287l56.634 54.591l11.037-12.388l.187-.201c.2-.211.549-.573 1.044-1.065a91 91 0 0 1 4.709-4.326c4.294-3.693 10.823-8.733 19.473-13.804C197.103 291.97 222.709 281.78 256 281.78s58.897 10.19 76.166 20.314c8.65 5.071 15.179 10.111 19.473 13.804a91 91 0 0 1 4.709 4.326c.495.492.844.854 1.044 1.065l.187.201l.009.01l11.028 12.378z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M512 195.36s-4.5-8.36-11.85-16.485c-4.391-4.855-6.219-7.406-11.155-12.511c-9.868-10.207-24.703-23.648-44.901-37.04C403.583 102.463 341.778 76 256 76s-147.583 26.463-188.094 53.324c-20.198 13.392-35.033 26.833-44.9 37.04c-4.937 5.105-8.639 9.411-11.156 12.511c-1.259 1.55-1.784 2.241-2.898 3.7C5.254 187.42 0 195.36 0 195.36l58.06 55.873l11.004-13.001l.002-.004l.002-.002l.08-.092q.133-.154.469-.529a100 100 0 0 1 2.144-2.309c1.962-2.056 4.979-5.083 9.02-8.76c8.092-7.361 20.236-17.28 36.189-27.221c31.891-19.872 78.774-39.709 139.03-39.709s107.139 19.837 139.03 39.709c15.953 9.941 28.097 19.86 36.189 27.221c4.041 3.677 7.058 6.704 9.02 8.76a100 100 0 0 1 2.144 2.309q.336.375.469.529l.036.042l.044.051l.002.001l.002.004l11.004 13.001z" clip-rule="evenodd"></svg:path>`,
})
export class IonWifiSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineIcon],svg[ion-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.56 94.92V80a16 16 0 0 0-16-16H113.44a16 16 0 0 0-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69c24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 0 0 0 32h192a16 16 0 0 0 0-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86c46.58-53.95 38.37-133.32 36.93-144.69m-285.3 3.41a15 15 0 0 0 .18-2.33h253.12a15 15 0 0 0 .18 2.33a202 202 0 0 1 0 45.67H129.32a204.3 204.3 0 0 1-.06-45.67"></svg:path>`,
})
export class IonWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineOutlineIcon],svg[ion-wine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96ZM256 272v160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352 432H160"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M112 160h288"></svg:path>`,
})
export class IonWineOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineSharpIcon],svg[ion-wine-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288Zm-336.65-3.67h281l-37.81 38H154.16Z"></svg:path>`,
})
export class IonWineSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWineglassIcon],svg[ion-wineglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M294.9 295.4c11-4.1 18-6.9 26.2-11.7 12-6.9 22.8-15.8 31.9-26.1 20.4-22.9 31-51.1 31-86.1 0-49.9-3.7-101.1-8.1-114.7C371.5 43 362.4 32 345.2 32H166.7c-17.1 0-26.2 11.1-30.6 24.6-4.4 13.5-8.1 64.9-8.1 114.8 0 35.1 10.6 63.2 30.9 86.1 9.1 10.3 19.9 19.1 31.8 26 8.2 4.8 15.1 7.8 26 11.7S239 302.7 239 327v94.2c0 10.7-2.9 19-11.1 24.8-2.8 2.1-6.3 4.3-14.3 6.5-31.5 8.6-46.9 15.6-49.2 17.2-2 1.4-4.5 3.6-4.5 7.1 0 0 13.8 3.1 96.2 3.1s96-3.1 96-3.1c0-3.5-2.5-5.7-4.6-7.1-2.3-1.6-17.8-8.6-49.4-17.2-8-2.2-12.2-4.4-15.1-6.5-8-5.7-12-14-12-24.7v-94.2c0-24 12.9-27.7 23.9-31.7zm-39-25.1c-25.4 0-48.5-10-65.5-26.3-2.7-2.4-5.2-5-7.6-7.7-15.6-17.5-22.4-36.7-23.1-64.8-.7-28.2-.1-72.5 7.3-107.5h177c6.3 24 9.1 76.8 7.7 107.2-1.4 30.5-7.2 47.3-22.8 64.9-2 2.2-3.9 4.3-6.1 6.4-17.1 17.2-40.8 27.8-66.9 27.8z" fill="currentColor"></svg:path><svg:path d="M336.2 170.6c0-7.5-.1-31.9-1.3-52.6-.5-8.4-1.2-16-2.1-22h-153c-.9 3-1.8 11.6-2.5 22-1.3 18.9-2.1 43.9-1.5 52.9.9 13.8 1.5 20.6 4.5 29.4 3.1 9.1 8 17.3 14.6 24.7 2 2.3 4.1 4.4 6.4 6.4 14.2 13.6 33.5 22 54.7 22 21.8 0 41.5-8.8 55.9-23.1 1.8-1.7 3.5-3.5 5.2-5.3 6.6-7.4 11.4-15.5 14.5-24.6 3.1-9 4.6-19.3 4.6-29.8zM320 179c0 5-3.9 8.1-8.3 8.1-1.6 0-3-.5-4.3-1.3-2.2-1.4-3.5-3.9-3.5-6.7v-26c0-4.4 3.6-8 8-8s8 3.6 8 8V179zm-1.1-47.2c-1.2 1.8-3 3-5.1 3.5-2.1.4-4.3 0-6-1.1-1.8-1.2-3-3-3.5-5.1-.4-2.1 0-4.3 1.1-6 1.2-1.8 3-3 5.1-3.5 2.1-.4 4.3 0 6 1.1 1.8 1.2 3 3 3.5 5.1.5 2 .1 4.2-1.1 6z" fill="currentColor"></svg:path>`,
})
export class IonWineglassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWomanIcon],svg[ion-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 0 0-43-32.08h-120a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0 0 25.6-13.18l25.58-85.25l2.17-7.23a8 8 0 0 1 15.53 2.62a7.8 7.8 0 0 1-.17 1.61L155.43 347.4a16 16 0 0 0 15.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0 0 15.33-20.6l-43.74-145.81a7.5 7.5 0 0 1-.16-1.59a8 8 0 0 1 15.54-2.63l2.17 7.23l25.57 85.25A20 20 0 0 0 382.05 303c10.27-3.44 15.69-14.71 12.58-25.1"></svg:path>`,
})
export class IonWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWomanOutlineIcon],svg[ion-woman-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V368m-121-94a23.73 23.73 0 0 1-29.84 16.18h0a23.72 23.72 0 0 1-16.17-29.84l25-84.28A44.85 44.85 0 0 1 205 144h102a44.85 44.85 0 0 1 43 32.08l25 84.28a23.72 23.72 0 0 1-16.17 29.84h0a23.73 23.73 0 0 1-29.78-16.2"></svg:path><svg:circle cx="256" cy="56" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m208 192l-48 160h192l-48-160"></svg:path>`,
})
export class IonWomanOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWomanSharpIcon],svg[ion-woman-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M310.28 191.4h.05l7.66-2.3l36.79 122.6l46-13.8l-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12l-4.71-15.74l-.9-3H362l-2.51-8.45a44.84 44.84 0 0 0-43-32.08H195.24a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-.9 3l-4.71 15.74l-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16l46 13.8l36.76-122.6l7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51Z"></svg:path>`,
})
export class IonWomanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionWrenchIcon],svg[ion-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M461.9 114.9l-56.5 56.7-55.1-10-9.9-55.1 56.5-56.7c-12.7-12.7-30.8-18.5-44.2-17.8-13.5.7-42.3 8.3-64.6 32-21.6 22.8-44.3 65.3-24.2 112.5 2.4 5.7 5.1 13.2-2.9 21.2-8.1 8-215 202.8-215 202.8-19.4 16.7-18 47.6-.1 65.6 18.2 17.9 48.9 19 65.6-.3 0 0 193.2-205.8 202.7-215.1 8.5-8.3 16.1-5.5 21.2-2.9 35.6 18.4 86.3 2.4 112.6-23.9 26.3-26.3 31.1-51.7 31.9-64.7.8-12.9-3.7-30-18-44.3zM91.3 443.2c-6.3 6.2-16.5 6.2-22.7 0-6.2-6.3-6.2-16.5 0-22.7 6.3-6.2 16.5-6.2 22.7 0 6.2 6.3 6.2 16.5 0 22.7z" fill="currentColor"></svg:path>`,
})
export class IonWrenchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionXboxIcon],svg[ion-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8C61.7 128.4 32 188.7 32 256c0 50.7 16.9 97.5 45.2 135 0-4.4.6-70.3 49.6-142.7z" fill="currentColor"></svg:path><svg:path d="M480 256c0-67.3-29.7-127.6-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7C463.2 353.5 480 306.7 480 256z" fill="currentColor"></svg:path><svg:path d="M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5C346.8 46.6 303.1 32 256 32c-47.1 0-90.8 14.6-126.9 39.4 7.2-1.8 35.2-7.1 72.1 9.5z" fill="currentColor"></svg:path><svg:path d="M358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8c41 45.7 100.5 74.5 166.8 74.5 66.3 0 125.8-28.8 166.8-74.5l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z" fill="currentColor"></svg:path>`,
})
export class IonXboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ionAddCircleIcon],svg[ion-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m80 224h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32"></svg:path>`,
})
export class IonAddCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
